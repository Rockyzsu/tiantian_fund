# -*- coding: utf-8 -*-
from datetime import datetime

import execjs
import scrapy

from fund.items import EastmoneyFundItem


class EastmoneyFundSpider(scrapy.Spider):
    name = "eastmoney_fund"
    allowed_domains = ["eastmoney.com"]

    def start_requests(self):
        fund_list_url = "http://fund.eastmoney.com/js/fundcode_search.js"
        yield scrapy.Request(
            url=fund_list_url, dont_filter=True, callback=self.parse,
        )

    def parse(self, response, **kwargs):
        # response.encoding='utf8'
        body = response.body_as_unicode() 
        # print(body)
        js_content = execjs.compile(str(body))
        name = js_content.eval("r")
        for one in name:
            if "(后端)" not in one[2]:
                item = EastmoneyFundItem(
                    _id=one[0],
                    initials=one[1],
                    name=one[2],
                    type=one[3],
                    pinyin=one[4],
                    updated_at=datetime.now()
                )
                yield item
