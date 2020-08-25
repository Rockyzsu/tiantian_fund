# -*- coding: utf-8 -*-
import scrapy


class EastmoneyFundItem(scrapy.Item):
    _id = scrapy.Field()  # 基金代码
    initials = scrapy.Field()  # 中文首字母缩写
    name = scrapy.Field()  # 中文名称
    type = scrapy.Field()  # 类型
    pinyin = scrapy.Field()  # 拼音
    source_rate = scrapy.Field()  # 原费率
    rate = scrapy.Field()  # 现费率
    minimum_purchase_amount = scrapy.Field()  # 最小申购金额
    stock_codes = scrapy.Field()  # 基金持仓股票代码
    zq_codes = scrapy.Field()  # 基金持仓债券代码
    new_stock_codes = scrapy.Field()  # 基金持仓股票代码(新市场号)
    new_zq_codes = scrapy.Field()  # 基金持仓债券代码（新市场号）
    annual_income = scrapy.Field()  # 年收益率
    half_year_income = scrapy.Field()  # 半年收益率
    quarterly_revenue = scrapy.Field()  # 三月收益率
    monthly_income = scrapy.Field()  # 一月收益率
    position_calculation_chart = scrapy.Field()  # 股票仓位测算图
    net_worth_trend = scrapy.Field()  # 单位净值走势 equityReturn-净值回报 unitMoney-每份派送金
    cumulative_net_worth_trend = scrapy.Field()  # 累计净值走势
    cumulative_rate_of_return_trend = scrapy.Field()  # 累计收益率走势
    rate_in_similar_type = scrapy.Field()  # 同类排名走势
    rate_in_similar_persent = scrapy.Field()  # 同类排名百分比
    fluctuation_scale = scrapy.Field()  # 规模变动 mom-较上期环比
    holder_structure = scrapy.Field()  # 持有人结构
    asset_allocation = scrapy.Field()  # 资产配置
    performance_evaluation = scrapy.Field()  # 业绩评价 ['选股能力', '收益率', '抗风险', '稳定性','择时能力']
    current_fund_manager = scrapy.Field()  # 现任基金经理
    buy_sedemption = scrapy.Field()  # 申购赎回
    swith_same_type = scrapy.Field()  # 同类型基金涨幅榜
    million_copies_income = scrapy.Field()  # 基金收益走势图 每万份收益
    seven_days_year_income = scrapy.Field()  # 基金收益走势图 7日年化收益率
    asset_allocation_currency = scrapy.Field()  # 资产配置
    updated_at = scrapy.Field()  # 更新时间

