# -*- coding: utf-8 -*-
import motor.motor_asyncio


class MongoDBPipeline(object):
    def __init__(self, client, mongodb_db):
        self.client = client
        self.db = self.client[mongodb_db]

    @classmethod
    def from_settings(cls, settings):
        mongodb_uri = settings["MONGODB_URI"]
        client = motor.motor_asyncio.AsyncIOMotorClient(mongodb_uri)
        mongodb_db = settings["MONGODB_DATABASE"]
        return cls(client, mongodb_db)

    def close_spider(self, spider):
        self.client.close()

    def process_item(self, item, spider):
        """
        :param item: 传入的item数据 
        :param spider: spider相关信息
        :return item:
        """
        if item.get("_id"):
            self.db[str(spider.name).split("_")[0].lower()].update_one(
                filter={"_id": item["_id"]}, update={"$set": dict(item)}, upsert=True
            )
        return item
