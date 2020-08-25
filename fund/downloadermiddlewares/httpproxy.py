# -*- coding: utf-8 -*-
import base64


class SquidProxyMiddleware(object):
    def __init__(self, squid_url, squid_auth):
        self.squid_url = squid_url
        self.squid_auth = squid_auth

    @classmethod
    def from_crawler(cls, crawler):
        settings = crawler.settings
        return cls(squid_url=settings.get("SQUID_URL"), squid_auth=settings.get("SQUID_AUTH"))

    def process_request(self, request, spider):
        use_proxy = request.meta.get("use_proxy", True)
        if use_proxy:
            spider.logger.debug("Use Squid Proxy: " + self.squid_url)
            request.meta["proxy"] = self.squid_url
            if self.squid_auth:
                encoded_user_pass = base64.b64encode(self.squid_auth.encode("utf-8"))
                request.headers["Proxy-Authorization"] = "Basic " + str(encoded_user_pass, encoding="utf-8")
        return
