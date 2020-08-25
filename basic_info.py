# -*- coding: utf-8 -*-
# website: http://30daydo.com
# @Time : 2020/8/25 17:09
# @File : basic_info.py

# -*- coding: utf-8 -*-
from scrapy.cmdline import execute

if __name__ == '__main__':
    execute("scrapy crawl eastmoney_fund".split(" "))
