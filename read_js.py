import sys
# reload(sys)
# sys.setdefaultencoding('utf-8')
import  codecs
with codecs.open('fundcode_search.js', encoding='utf8') as f:
    content = f.read()

# print(content)
import execjs
import js2py
# r=js2py.eval_js(content)
# x=r.eval("r")
# print(x)
js_content = execjs.compile(content)
print(type(js_content))
r = js_content.eval("r")
print(r)
# r=js_content.call('getr')
# print(r)