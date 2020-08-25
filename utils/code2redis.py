import math
import time
import redis
from loguru import logger
from pymongo import MongoClient

import sys
sys.path.append('../')
from fund.settings import MONGODB_URI, MONGODB_DATABASE, REDIS_PASSWORD, REDIS_DB, REDIS_PORT, REDIS_HOST

client = MongoClient(MONGODB_URI)
db = client[MONGODB_DATABASE]
redis_conn = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, db=REDIS_DB, password=REDIS_PASSWORD)


def hashid2redis(crawler_name: str = "eastmoney", max_step: int = 10000, number_threads: int = 1):
    col = db[crawler_name]
    start_time = time.time()
    hashid_list = [str(one) for one in col.find({}, {"_id": True})]
    hashid_count = len(hashid_list)
    if hashid_count:
        logger.info("获取 HASHID 条数: {0} 用时: {1}".format(hashid_count, time.time() - start_time))
        step = max_step if len(hashid_list) / max_step > number_threads else math.ceil(hashid_count / number_threads)
        hash_batch = (hashid_list[start: start + step] for start in range(0, len(hashid_list), step))
        logger.info("块大小为：{0}".format(step))
        show_count = 1
        insert_count = math.ceil(hashid_count / step)
        for index, batch in enumerate(hash_batch):
            redis_conn.rpush(f"{crawler_name}_info:start_urls", *batch)
            if index * step > show_count * 10000:
                logger.info("成功插入: {0}/{1}".format(int((index + 1) / insert_count * hashid_count), hashid_count))
                show_count += 1
        logger.info("成功插入总数: {0}/{1}".format(hashid_count, hashid_count))
        logger.info("总用时: {0}".format(time.time() - start_time))
    else:
        logger.info("获取 HASHID 条数: {0}".format(hashid_count))


if __name__ == "__main__":
    hashid2redis(crawler_name="eastmoney")
