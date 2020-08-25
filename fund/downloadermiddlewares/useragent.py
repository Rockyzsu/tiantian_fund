# -*- coding: utf-8 -*-
import random


class RandomUserAgentMiddleware:
    def __init__(self, user_agent_list):
        self.user_agent_list = user_agent_list

    @classmethod
    def from_crawler(cls, crawler):
        settings = crawler.settings
        return cls(user_agent_list=settings.get("USER_AGENT_LIST"))

    def process_request(self, request, spider):
        ua = random.choice(self.user_agent_list)
        if ua:
            request.headers.setdefault("User-Agent", ua)
