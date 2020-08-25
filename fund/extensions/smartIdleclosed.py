# -*- coding: utf-8 -*-
import time

from scrapy import signals
from scrapy.exceptions import NotConfigured


class RedisSpiderSmartIdleClosedExensions(object):
    def __init__(self, idle_number, crawler):
        self.crawler = crawler
        self.idle_number = idle_number
        self.idle_list = []
        self.idle_count = 0

    @classmethod
    def from_crawler(cls, crawler):
        if not crawler.settings.getbool("MYEXT_ENABLED"):
            raise NotConfigured

        idle_number = crawler.settings.getint("IDLE_NUMBER", 360)

        ext = cls(idle_number, crawler)

        crawler.signals.connect(ext.spider_opened, signal=signals.spider_opened)
        crawler.signals.connect(ext.spider_closed, signal=signals.spider_closed)
        crawler.signals.connect(ext.spider_idle, signal=signals.spider_idle)

        return ext

    def spider_opened(self, spider):
        spider.logger.info(
            "opened spider %s redis spider Idle, Continuous idle limit： %d",
            spider.name,
            self.idle_number
        )

    def spider_closed(self, spider):
        spider.logger.info(
            "closed spider %s, idle count %d , Continuous idle count %d",
            spider.name,
            self.idle_count,
            len(self.idle_list)
        )

    def spider_idle(self, spider):
        self.idle_count += 1
        self.idle_list.append(time.time())
        idle_list_len = len(self.idle_list)
        if idle_list_len > 2 and self.idle_list[-1] - self.idle_list[-2] > 6:
            self.idle_list = [self.idle_list[-1]]
            self.idle_count = 0
        elif idle_list_len > self.idle_number:
            spider.logger.info(
                "continued idle number exceed {} Times meet the idle shutdown conditions, "
                "will close the reptile operation idle start time: {}, close spider time: {}".format(
                    self.idle_number, self.idle_list[0], self.idle_list[-1]
                )
            )
            self.crawler.engine.close_spider(spider, "closespider_pagecount")
        else:
            spider.logger.info("Idle for {0} seconds".format(self.idle_count * 5))
