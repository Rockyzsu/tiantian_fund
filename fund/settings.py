# -*- coding: utf-8 -*-
from fund import config
# ---------------------------------------Project Settings---------------------------------------

BOT_NAME = "fund"

SPIDER_MODULES = ["fund.spiders"]

NEWSPIDER_MODULE = "fund.spiders"

COMMANDS_MODULE = ""

# ---------------------------------------ROBOTS setting-----------------------------------

ROBOTSTXT_OBEY = False
# ROBOTSTXT_PARSER = "scrapy.robotstxt.ProtegoRobotParser"
# ROBOTSTXT_USER_AGENT = None

# ---------------------------------------Squid setting----------------------------------------

# SQUID_URL = "http://129.204.134.181:7890"
# SQUID_AUTH = None

# ---------------------------------------MongoDB setting----------------------------------------

MONGODB_URI = config.MONGODB_URI
MONGODB_DATABASE = config.MONGODB_DATABASE

# ---------------------------------------Redis setting-----------------------------------

REDIS_HOST = config.REDIS_HOST
REDIS_PORT = config.REDIS_PORT
REDIS_PASSWORD = config.REDIS_PASSWORD
REDIS_DB = config.REDIS_DB
REDIS_PARAMS = {"password": REDIS_PASSWORD, "db": REDIS_DB}

# ---------------------------------------Scrapy-Redis setting-----------------------------------

# REDIS_ITEMS_KEY = "%(spider)s:items"
# REDIS_ITEMS_SERIALIZER = "json.dumps"
# REDIS_URL = "redis://user:pass@hostname:9001"
# REDIS_PARAMS["redis_cls"] = "fund.RedisClient"
# REDIS_START_URLS_AS_SET = False
# REDIS_START_URLS_AS_ZSET = False
# REDIS_START_URLS_KEY = "%(name)s:start_urls"
# REDIS_ENCODING = "latin1"

# ---------------------------------------Scrapy Redis SCHEDULER setting-----------------------------------

SCHEDULER = "scrapy_redis.scheduler.Scheduler"

# SCHEDULER_SERIALIZER = "scrapy_redis.picklecompat"

SCHEDULER_PERSIST = True

SCHEDULER_QUEUE_CLASS = "scrapy_redis.queue.PriorityQueue"

# Alternative queues.
# SCHEDULER_QUEUE_CLASS = "scrapy_redis.queue.FifoQueue"
# SCHEDULER_QUEUE_CLASS = "scrapy_redis.queue.LifoQueue"

# SCHEDULER_IDLE_BEFORE_CLOSE = 10

# ---------------------------------------SCHEDULER setting-----------------------------------

SCHEDULER_DEBUG = False
# SCHEDULER = "scrapy.core.scheduler.Scheduler"
# SCHEDULER_DISK_QUEUE = "scrapy.squeues.PickleLifoDiskQueue"
# SCHEDULER_MEMORY_QUEUE = "scrapy.squeues.LifoMemoryQueue"
# SCHEDULER_PRIORITY_QUEUE = "scrapy.pqueues.ScrapyPriorityQueue"

# ---------------------------------------Scrapy Redis DUPEFILTER setting-----------------------------------

DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"

# ---------------------------------------DUPEFILTER setting-----------------------------------

# DUPEFILTER_CLASS = "scrapy.dupefilters.RFPDupeFilter"
DUPEFILTER_DEBUG = False

# ---------------------------------------CONCURRENT setting-----------------------------------

CONCURRENT_ITEMS = 500
CONCURRENT_REQUESTS = 32
CONCURRENT_REQUESTS_PER_DOMAIN = 32
CONCURRENT_REQUESTS_PER_IP = 0

# ---------------------------------------DELAY setting-----------------------------------

DOWNLOAD_DELAY = 0
RANDOMIZE_DOWNLOAD_DELAY = True

# ---------------------------------------AUTOTHROTTLE setting-----------------------------------

AUTOTHROTTLE_DEBUG = False
AUTOTHROTTLE_ENABLED = False
AUTOTHROTTLE_MAX_DELAY = 60.0
AUTOTHROTTLE_START_DELAY = 5.0
AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0

# ---------------------------------------CLOSE SPIDER setting----------------------------------

CLOSESPIDER_ERRORCOUNT = 0
CLOSESPIDER_ITEMCOUNT = 0
CLOSESPIDER_PAGECOUNT = 0
CLOSESPIDER_TIMEOUT = 0

# ---------------------------------------SmartIdle Closed setting----------------------------------

MYEXT_ENABLED = True
IDLE_NUMBER = 12

# ---------------------------------------HEADERS setting-----------------------------------

DEFAULT_REQUEST_HEADERS = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,und;q=0.8,en;q=0.7",
}

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36 Edg/84.0.522.61"
USER_AGENT_LIST = [
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2226.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.4; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2225.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2225.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2224.3 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 4.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36",
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36",
    "Mozilla/5.0 (X11; OpenBSD i386) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1944.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.3319.102 Safari/537.36",
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.2309.372 Safari/537.36",
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.2117.157 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36",
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1866.237 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/4E423F",
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36 Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.517 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1667.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36",
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.16 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1623.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.17 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.62 Safari/537.36",
    "Mozilla/5.0 (X11; CrOS i686 4319.74.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1468.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1467.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1464.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1500.55 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.90 Safari/537.36",
    "Mozilla/5.0 (X11; NetBSD) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36",
    "Mozilla/5.0 (X11; CrOS i686 3912.101.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.60 Safari/537.17",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1309.0 Safari/537.17",
    "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.15 (KHTML, like Gecko) Chrome/24.0.1295.0 Safari/537.15",
    "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.14 (KHTML, like Gecko) Chrome/24.0.1292.0 Safari/537.14",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1",
    "Mozilla/5.0 (Windows NT 6.3; rv:36.0) Gecko/20100101 Firefox/36.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0",
    "Mozilla/5.0 (X11; Linux i586; rv:31.0) Gecko/20100101 Firefox/31.0",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:31.0) Gecko/20130401 Firefox/31.0",
    "Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:29.0) Gecko/20120101 Firefox/29.0",
    "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/29.0",
    "Mozilla/5.0 (X11; OpenBSD amd64; rv:28.0) Gecko/20100101 Firefox/28.0",
    "Mozilla/5.0 (X11; Linux x86_64; rv:28.0) Gecko/20100101  Firefox/28.0",
    "Mozilla/5.0 (Windows NT 6.1; rv:27.3) Gecko/20130101 Firefox/27.3",
    "Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:27.0) Gecko/20121011 Firefox/27.0",
    "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/25.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:25.0) Gecko/20100101 Firefox/25.0",
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:24.0) Gecko/20100101 Firefox/24.0",
    "Mozilla/5.0 (Windows NT 6.0; WOW64; rv:24.0) Gecko/20100101 Firefox/24.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0",
    "Mozilla/5.0 (Windows NT 6.2; rv:22.0) Gecko/20130405 Firefox/23.0",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20130406 Firefox/23.0",
    "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:23.0) Gecko/20131011 Firefox/23.0",
    "Mozilla/5.0 (Windows NT 6.2; rv:22.0) Gecko/20130405 Firefox/22.0",
    "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:22.0) Gecko/20130328 Firefox/22.0",
    "Mozilla/5.0 (Windows NT 6.1; rv:22.0) Gecko/20130405 Firefox/22.0",
    "Mozilla/5.0 (Microsoft Windows NT 6.2.9200.0); rv:22.0) Gecko/20130405 Firefox/22.0",
    "Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:16.0.1) Gecko/20121011 Firefox/21.0.1",
    "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:16.0.1) Gecko/20121011 Firefox/21.0.1",
    "Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0",
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:21.0) Gecko/20130331 Firefox/21.0",
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:21.0) Gecko/20100101 Firefox/21.0",
    "Mozilla/5.0 (X11; Linux i686; rv:21.0) Gecko/20100101 Firefox/21.0",
    "Mozilla/5.0 (Windows NT 6.2; WOW64; rv:21.0) Gecko/20130514 Firefox/21.0",
    "Mozilla/5.0 (Windows NT 6.2; rv:21.0) Gecko/20130326 Firefox/21.0",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20130401 Firefox/21.0",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20130331 Firefox/21.0",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20130330 Firefox/21.0",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0",
    "Mozilla/5.0 (Windows NT 6.1; rv:21.0) Gecko/20130401 Firefox/21.0",
    "Mozilla/5.0 (Windows NT 6.1; rv:21.0) Gecko/20130328 Firefox/21.0",
    "Mozilla/5.0 (Windows NT 6.1; rv:21.0) Gecko/20100101 Firefox/21.0",
    "Mozilla/5.0 (Windows NT 5.1; rv:21.0) Gecko/20130401 Firefox/21.0",
    "Mozilla/5.0 (Windows NT 5.1; rv:21.0) Gecko/20130331 Firefox/21.0",
    "Mozilla/5.0 (Windows NT 5.1; rv:21.0) Gecko/20100101 Firefox/21.0",
    "Mozilla/5.0 (Windows NT 5.0; rv:21.0) Gecko/20100101 Firefox/21.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0",
    "Mozilla/5.0 (Windows NT 6.2; Win64; x64;) Gecko/20100101 Firefox/20.0",
    "Mozilla/5.0 (Windows x86; rv:19.0) Gecko/20100101 Firefox/19.0",
    "Mozilla/5.0 (Windows NT 6.1; rv:6.0) Gecko/20100101 Firefox/19.0",
    "Mozilla/5.0 (Windows NT 6.1; rv:14.0) Gecko/20100101 Firefox/18.0.1",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:18.0)  Gecko/20100101 Firefox/18.0",
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:17.0) Gecko/20100101 Firefox/17.0.6",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A",
    "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13+ (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.55.3 (KHTML, like Gecko) Version/5.1.3 Safari/534.53.10",
    "Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko ) Version/5.1 Mobile/9B176 Safari/7534.48.3",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; da-dk) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; tr-TR) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; ko-KR) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; fr-FR) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; cs-CZ) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Windows; U; Windows NT 6.0; ja-JP) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_8; zh-cn) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_8; ja-jp) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; ja-jp) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; zh-cn) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; sv-se) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; ko-kr) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; ja-jp) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; it-it) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; fr-fr) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; es-es) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-us) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-gb) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; de-de) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; sv-SE) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; ja-JP) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; de-DE) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Windows; U; Windows NT 6.0; hu-HU) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Windows; U; Windows NT 6.0; de-DE) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; ja-JP) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; it-IT) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; en-us) AppleWebKit/534.16+ (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; fr-ch) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_5; de-de) AppleWebKit/534.15+ (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_5; ar) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Android 2.2; Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; zh-HK) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5",
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5",
    "Mozilla/5.0 (Windows; U; Windows NT 6.0; tr-TR) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5",
    "Mozilla/5.0 (Windows; U; Windows NT 6.0; nb-NO) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5",
    "Mozilla/5.0 (Windows; U; Windows NT 6.0; fr-FR) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-TW) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_8; zh-cn) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5",
]
# ---------------------------------------COOKIES setting-----------------------------------

COOKIES_ENABLED = True
COOKIES_DEBUG = False

# ---------------------------------------REFERER setting-----------------------------------

REFERER_ENABLED = True
# REFERRER_POLICY = "scrapy.spidermiddlewares.referer.DefaultReferrerPolicy"

# ---------------------------------------HttpError Middleware setting----------------------------

HTTPERROR_ALLOWED_CODES = []
HTTPERROR_ALLOW_ALL = False

# ---------------------------------------DEPTH setting-----------------------------------

DEPTH_LIMIT = 0
DEPTH_STATS_VERBOSE = False
DEPTH_PRIORITY = 0

# ---------------------------------------REDIRECT setting-----------------------------------

REDIRECT_ENABLED = True
REDIRECT_MAX_TIMES = 20
REDIRECT_PRIORITY_ADJUST = +2
MEDIA_ALLOW_REDIRECTS = False

# ---------------------------------------RETRY setting-----------------------------------

RETRY_ENABLED = True
RETRY_TIMES = 3
RETRY_HTTP_CODES = [500, 502, 503, 504, 522, 524, 408, 429, 400]
RETRY_PRIORITY_ADJUST = -1

# ---------------------------------------DOWNLOADER setting-----------------------------------

DOWNLOADER_MIDDLEWARES = {
    "fund.downloadermiddlewares.useragent.RandomUserAgentMiddleware": 300,
    # "fund.downloadermiddlewares.httpproxy.SquidProxyMiddleware": None,
    "fund.downloadermiddlewares.cookies.RandomCookiesMiddleware": None,
    # "fund.downloadermiddlewares.redirect.ThreatDefenceRedirectMiddleware": None,
}
DOWNLOAD_MAXSIZE = 1073741824
DOWNLOAD_TIMEOUT = 180
DOWNLOAD_WARNSIZE = 33554432
DOWNLOAD_FAIL_ON_DATALOSS = True

# DOWNLOADER = "scrapy.core.downloader.Downloader"
# DOWNLOADER_CLIENTCONTEXTFACTORY = "scrapy.core.downloader.contextfactory.ScrapyClientContextFactory"
# DOWNLOADER_CLIENT_TLS_CIPHERS = "DEFAULT"
# DOWNLOADER_CLIENT_TLS_METHOD = "TLS"
# DOWNLOADER_CLIENT_TLS_VERBOSE_LOGGING = False
# DOWNLOADER_HTTPCLIENTFACTORY = "scrapy.core.downloader.webclient.ScrapyHTTPClientFactor"
# DOWNLOADER_MIDDLEWARES_BASE = {
#     "scrapy.downloadermiddlewares.robotstxt.RobotsTxtMiddleware": 100,
#     "scrapy.downloadermiddlewares.httpauth.HttpAuthMiddleware": 300,
#     "scrapy.downloadermiddlewares.downloadtimeout.DownloadTimeoutMiddleware": 350,
#     "scrapy.downloadermiddlewares.defaultheaders.DefaultHeadersMiddleware": 400,
#     "scrapy.downloadermiddlewares.useragent.UserAgentMiddleware": 500,
#     "scrapy.downloadermiddlewares.retry.RetryMiddleware": 550,
#     "scrapy.downloadermiddlewares.ajaxcrawl.AjaxCrawlMiddleware": 560,
#     "scrapy.downloadermiddlewares.redirect.MetaRefreshMiddleware": 580,
#     "scrapy.downloadermiddlewares.httpcompression.HttpCompressionMiddleware": 590,
#     "scrapy.downloadermiddlewares.redirect.RedirectMiddleware": 600,
#     "scrapy.downloadermiddlewares.cookies.CookiesMiddleware": 700,
#     "scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware": 750,
#     "scrapy.downloadermiddlewares.stats.DownloaderStats": 850,
#     "scrapy.downloadermiddlewares.httpcache.HttpCacheMiddleware": 900
# }
# DOWNLOADER_STATS = True
# DOWNLOAD_HANDLERS = {}
# DOWNLOAD_HANDLERS_BASE = {
#     "file": "scrapy.core.downloader.handlers.file.FileDownloadHandler",
#     "http": "scrapy.core.downloader.handlers.http.HTTPDownloadHandler",
#     "https": "scrapy.core.downloader.handlers.http.HTTPDownloadHandler",
#     "s3": "scrapy.core.downloader.handlers.s3.S3DownloadHandler",
#     "ftp": "scrapy.core.downloader.handlers.ftp.FTPDownloadHandler"
# }

# ---------------------------------------EXTENSIONS setting-----------------------------------

EXTENSIONS = {"fund.extensions.smartIdleclosed.RedisSpiderSmartIdleClosedExensions": 500}
# EXTENSIONS_BASE = {
#     "scrapy.extensions.corestats.CoreStats": 0,
#     "scrapy.extensions.telnet.TelnetConsole": 0,
#     "scrapy.extensions.memusage.MemoryUsage": 0,
#     "scrapy.extensions.memdebug.MemoryDebugger": 0,
#     "scrapy.extensions.closespider.CloseSpider": 0,
#     "scrapy.extensions.feedexport.FeedExporter": 0,
#     "scrapy.extensions.logstats.LogStats": 0,
#     "scrapy.extensions.spiderstate.SpiderState": 0,
#     "scrapy.extensions.throttle.AutoThrottle": 0
# }

# ---------------------------------------Item Pipeline setting-----------------------------------

ITEM_PIPELINES = {"scrapy_redis.pipelines.RedisPipeline": None, "fund.pipelines.MongoDBPipeline": 300}
# ITEM_PIPELINES_BASE = {}
# ITEM_PROCESSOR = "scrapy.pipelines.ItemPipelineManager"

# ---------------------------------------LOG setting-----------------------------------

LOGSTATS_INTERVAL = 60.0
LOG_ENABLED = True
LOG_ENCODING = "utf-8"
LOG_FORMATTER = "scrapy.logformatter.LogFormatter"
LOG_FORMAT = "%(asctime)s [%(name)s] %(levelname)s: %(message)s"
LOG_DATEFORMAT = "%Y-%m-%d %H:%M:%S"
LOG_STDOUT = False
LOG_LEVEL = "INFO"
LOG_FILE = None
LOG_SHORT_NAMES = False

# # ---------------------------------------FEED setting-----------------------------------
#
# FEED_TEMPDIR = None
# FEEDS = {}
# FEED_URI_PARAMS = None
# FEED_STORE_EMPTY = False
# FEED_EXPORT_ENCODING = None
# FEED_EXPORT_FIELDS = None
# FEED_STORAGES = {}
# FEED_STORAGES_BASE = {
#     "": "scrapy.extensions.feedexport.FileFeedStorage",
#     "file": "scrapy.extensions.feedexport.FileFeedStorage",
#     "stdout": "scrapy.extensions.feedexport.StdoutFeedStorage",
#     "s3": "scrapy.extensions.feedexport.S3FeedStorage",
#     "ftp": "scrapy.extensions.feedexport.FTPFeedStorage"
# }
# FEED_EXPORTERS = {}
# FEED_EXPORTERS_BASE = {
#     "json": "scrapy.exporters.JsonItemExporter",
#     "jsonlines": "scrapy.exporters.JsonLinesItemExporter",
#     "jl": "scrapy.exporters.JsonLinesItemExporter",
#     "csv": "scrapy.exporters.CsvItemExporter",
#     "xml": "scrapy.exporters.XmlItemExporter",
#     "marshal": "scrapy.exporters.MarshalItemExporter",
#     "pickle": "scrapy.exporters.PickleItemExporter"
# }
# FEED_EXPORT_INDENT = 0
#
# FEED_STORAGE_FTP_ACTIVE = False
# FEED_STORAGE_S3_ACL = ""
#
# FEED_EXPORT_BATCH_ITEM_COUNT = 0
# FEED_STORAGE_GCS_ACL = None
#
# # ---------------------------------------FILE 配置-----------------------------------
#
# FILES_EXPIRES = 120
# FILES_RESULT_FIELD = "field_name_for_your_processed_files"
# FILES_STORE = "/path/to/valid/dir"
# FILES_STORE_S3_ACL = "private"
# FILES_STORE_GCS_ACL = ""
# FILES_URLS_FIELD = "field_name_for_your_files_urls"
#
# # ---------------------------------------IMAGE setting-----------------------------------
#
# IMAGES_EXPIRES = 30
# IMAGES_MIN_HEIGHT = 110
# IMAGES_MIN_WIDTH = 110
# IMAGES_RESULT_FIELD = "field_name_for_your_processed_images"
# IMAGES_STORE = "/path/to/valid/dir"
# IMAGES_STORE_GCS_ACL = ""
# IMAGES_STORE_S3_ACL = ""
# IMAGES_THUMBS = {
#     "small": (50, 50),
#     "big": (270, 270)
# }
# IMAGES_URLS_FIELD = "field_name_for_your_images_urls"
#
# # ---------------------------------------FTP setting-----------------------------------
#
# FTP_PASSIVE_MODE = True
# FTP_PASSWORD = "guest"
# FTP_USER = "anonymous"
#
# # ---------------------------------------HTTPCache middleware setting-----------------------------------
#
# HTTPCACHE_ENABLED = False
# HTTPCACHE_DIR = "httpcache"
# HTTPCACHE_IGNORE_MISSING = False
# HTTPCACHE_STORAGE = "scrapy.extensions.httpcache.FilesystemCacheStorage"
# HTTPCACHE_EXPIRATION_SECS = 0
# HTTPCACHE_ALWAYS_STORE = False
# HTTPCACHE_IGNORE_HTTP_CODES = []
# HTTPCACHE_IGNORE_SCHEMES = ["file"]
# HTTPCACHE_IGNORE_RESPONSE_CACHE_CONTROLS = []
# HTTPCACHE_DBM_MODULE = "dbm"
# HTTPCACHE_POLICY = "scrapy.extensions.httpcache.DummyPolicy"
# HTTPCACHE_GZIP = False
#
# # ---------------------------------------HttpProxyMiddleware setting-----------------------------------
#
# HTTPPROXY_ENABLED = True
# HTTPPROXY_AUTH_ENCODING = "latin-1"
#
# # ---------------------------------------DNS setting-----------------------------------
#
# DNSCACHE_ENABLED = True
# DNSCACHE_SIZE = 10000
# DNS_RESOLVER = "scrapy.resolver.CachingThreadedResolver"
# DNS_TIMEOUT = 60
#
# # ---------------------------------------SPIDER setting-----------------------------------
#
# SPIDER_CONTRACTS = {}
# SPIDER_CONTRACTS_BASE = {
#     "scrapy.contracts.default.UrlContract": 1,
#     "scrapy.contracts.default.ReturnsContract": 2,
#     "scrapy.contracts.default.ScrapesContract": 3
# }
#
# SPIDER_LOADER_CLASS = "scrapy.spiderloader.SpiderLoader"
# SPIDER_LOADER_WARN_ONLY = False
#
# SPIDER_MIDDLEWARES = {}
#
# SPIDER_MIDDLEWARES_BASE = {
#     "scrapy.spidermiddlewares.httperror.HttpErrorMiddleware": 50,
#     "scrapy.spidermiddlewares.offsite.OffsiteMiddleware": 500,
#     "scrapy.spidermiddlewares.referer.RefererMiddleware": 700,
#     "scrapy.spidermiddlewares.urllength.UrlLengthMiddleware": 800,
#     "scrapy.spidermiddlewares.depth.DepthMiddleware": 900
# }
#
# # ---------------------------------------STATS setting-----------------------------------
#
# STATS_CLASS = "scrapy.statscollectors.MemoryStatsCollector"
# STATS_DUMP = True
# STATSMAILER_RCPTS = []
#
# # ---------------------------------------TELNET setting-----------------------------------
#
# TELNETCONSOLE_ENABLED = 1
# TELNETCONSOLE_PORT = [6023, 6073]
# TELNETCONSOLE_HOST = "127.0.0.1"
# TELNETCONSOLE_USERNAME = "scrapy"
# TELNETCONSOLE_PASSWORD = None
#
# # ---------------------------------------MEMDEBUG setting-----------------------------------
#
# MEMDEBUG_ENABLED = False
# MEMDEBUG_NOTIFY = []
# MEMUSAGE_CHECK_INTERVAL_SECONDS = 60.0
# MEMUSAGE_ENABLED = True
# MEMUSAGE_LIMIT_MB = 0
# MEMUSAGE_NOTIFY_MAIL = False
# MEMUSAGE_WARNING_MB = 0
# METAREFRESH_ENABLED = True
# METAREFRESH_IGNORE_TAGS = []
# METAREFRESH_MAXDELAY = 100
#
# # ---------------------------------------MAIL setting-----------------------------------
#
# MAIL_HOST = "localhost"
# MAIL_PORT = 25
# MAIL_FROM = "scrapy@localhost"
# MAIL_PASS = None
# MAIL_USER = None
# MAIL_SSL = False
# MAIL_TLS = False
#
# # ---------------------------------------Amazon Web setting-----------------------------------
#
# AWS_ACCESS_KEY_ID = None
# AWS_ENDPOINT_URL = None
# AWS_REGION_NAME = None
# AWS_SECRET_ACCESS_KEY = None
# AWS_USE_SSL = None
# AWS_VERIFY = None
#
# # ---------------------------------------Other setting-----------------------------------
#
# SCRAPER_SLOT_MAX_ACTIVE_SIZE = 5000000
# URLLENGTH_LIMIT = 2083
# COMPRESSION_ENABLED = True
# AJAXCRAWL_ENABLED = False
# DEFAULT_ITEM_CLASS = "scrapy.item.Item"
# REACTOR_THREADPOOL_MAXSIZE = 10
# GCS_PROJECT_ID = "None"
# TWISTED_REACTOR = None
# TEMPLATES_DIR = abspath(join(dirname(__file__), "..", "templates"))
# EDITOR = "vi"
# if sys.platform == "win32":
#     EDITOR = "%s -m idlelib.idle"
