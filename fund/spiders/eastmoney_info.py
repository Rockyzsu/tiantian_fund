# -*- coding: utf-8 -*-
import execjs
import scrapy
import time
from scrapy_redis.spiders import RedisSpider

from fund.items import EastmoneyFundItem


class EastmoneyInfoSpider(RedisSpider):
    name = "eastmoney_info"
    allowed_domains = ["eastmoney.com"]
    redis_key = f"{name}:start_urls"

    def make_request_from_data(self, data):
        data = eval(data)
        code = data.get("_id")
        url = f"http://fund.eastmoney.com/pingzhongdata/{code}.js"
        return scrapy.Request(url=url, dont_filter=True, meta={"code": code}, callback=self.parse)

    def parse(self, response, **kwargs):
        code = response.meta.get("code")
        js_content = execjs.compile(response.text)
        date_map = {
            "source_rate": "fund_sourceRate",
            "rate": "fund_Rate",
            "minimum_purchase_amount": "fund_minsg",
            "stock_codes": "stockCodes",
            "zq_codes": "zqCodes",
            "new_stock_codes": "stockCodesNew",
            "new_zq_codes": "zqCodesNew",
            "annual_income": "syl_1n", # 1年
            "half_year_income": "syl_6y", #
            "quarterly_revenue": "syl_3y",
            "monthly_income": "syl_1y",
            "position_calculation_chart": "Data_fundSharesPositions",
            "net_worth_trend": "Data_netWorthTrend",
            # "cumulative_net_worth_trend": "Data_ACWorthTrend",
            "cumulative_rate_of_return_trend": "Data_grandTotal", # 累计收益率走势
            "rate_in_similar_type": "Data_rateInSimilarType", # 同类走势排名
            "rate_in_similar_persent": "Data_rateInSimilarPersent",
            "fluctuation_scale": "Data_fluctuationScale", # 规模变化
            "holder_structure": "Data_holderStructure", # 持有人变化
            "asset_allocation": "Data_assetAllocation", # 资产配置
            "performance_evaluation": "Data_performanceEvaluation",
            "current_fund_manager": "Data_currentFundManager", # 现任基金经理
            "buy_sedemption": "Data_buySedemption", # 申购赎回
            "swith_same_type": "swithSameType", # 同类型基金涨幅榜
            "million_copies_income": "Data_millionCopiesIncome",
            "seven_days_year_income": "Data_sevenDaysYearIncome",
            "asset_allocation_currency": "Data_assetAllocationCurrency",
        }
        item = EastmoneyFundItem(_id=code)
        for key, name in date_map.items():
            try:
                value=js_content.eval(name)
                value = self.data_analysis(name,value)
                item[key] = value
            except Exception as e:
                item[key] = None
        yield item


    def data_analysis(self,key,value):

        if key=='Data_rateInSimilarType':
            # 同类排名
            for index,item in enumerate(value):
                value[index]['x']=time.strftime('%Y-%m-%d',time.localtime(int(item['x']/1000)))
                value[index]['sc']=int(item['sc'])
                value[index]['range']=round(value[index]['x']/value[index]['sc']*100,0) #归一化

        elif key=='rate_in_similar_persent':
            t=[]
            for index,item in enumerate(value):
                t_dict={}
                t_dict['x']=time.strftime('%Y-%m-%d',time.localtime(int(item[0]/1000)))
                # value[index]['sc']=int(item['sc'])
                t_dict['range']=item[1]
                t.append(t_dict)

            value=t

        elif key=='Data_netWorthTrend':
            for index,item in enumerate(value):
                value[index]['x']=time.strftime('%Y-%m-%d',time.localtime(int(item['x']/1000)))
                # value[index]['sc']=int(item['sc'])
                # value[index]['range']=round(value[index]['x']/value[index]['sc']*100,0) #归一化


        elif key == 'Data_grandTotal':
            t = []

            for item in value:
                if item['name'] not in ['同类平均','沪深300']:
                    for i in item['data']:
                        d={}
                        d['date']=time.strftime('%Y-%m-%d',time.localtime(int(i[0]/1000)))
                        d['profit']=i[1]
                        t.append(d)
            value=t

        elif key in ['stockCodesNew','zqCodesNew']:
            t = []
            print('修改了')
            for i in value:
                t.append(i.split('.')[1])
            value = t


        return value