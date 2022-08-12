"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[3834],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||a;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3297:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],i={},c="Middleware",p={unversionedId:"Python3/FastAPI/middleware",id:"Python3/FastAPI/middleware",isDocsHomePage:!1,title:"Middleware",description:"reference from//cloud.tencent.com/developer/article/1884128",source:"@site/docs/Python3/FastAPI/middleware.md",sourceDirName:"Python3/FastAPI",slug:"/Python3/FastAPI/middleware",permalink:"/blog/docs/Python3/FastAPI/middleware",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Python3/FastAPI/middleware.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Document",permalink:"/blog/docs/Python3/FastAPI/document"},next:{title:"Document",permalink:"/blog/docs/Python3/SQLAlchemy/document"}},d=[{value:"\u5efa\u7acbMiddleware",id:"\u5efa\u7acbmiddleware",children:[]},{value:"\u5be6\u4f5c",id:"\u5be6\u4f5c",children:[]},{value:"middleware\u53ef\u4ee5\u6307\u5b9a\u7279\u5b9a\u7684Path\u624d\u9032\u53bb\u57f7\u884c\u3002",id:"middleware\u53ef\u4ee5\u6307\u5b9a\u7279\u5b9a\u7684path\u624d\u9032\u53bb\u57f7\u884c",children:[]}],l={toc:d};function u(e){var n=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"middleware"},"Middleware"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"reference from: ",(0,a.kt)("a",{parentName:"strong",href:"https://cloud.tencent.com/developer/article/1884128"},"https://cloud.tencent.com/developer/article/1884128"))),(0,a.kt)("h3",{id:"\u5efa\u7acbmiddleware"},"\u5efa\u7acbMiddleware"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import time\nfrom fastapi import FastAPI, Request\n\n\n@app.middleware("http")\n# \u5fc5\u987b\u7528 async\nasync def add_process_time_header(request: Request, call_next):\n    start_time = time.time()\n    # \u5fc5\u987b\u7528 await\n    response = await call_next(request)\n    process_time = time.time() - start_time\n    # \u81ea\u5b9a\u7fa9\u6a19\u982d\n    response.headers["X-Process-Time"] = str(process_time)\n    \uff03\u8fd4\u56de\u97ff\u61c9\n    return response\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"call_next"),"\n\u6703\u5c07request \u50b3\u905e\u7d66\u76f8\u61c9\u7684\u8def\u5f91\u64cd\u4f5c\u51fd\u6578",(0,a.kt)("br",{parentName:"p"}),"\n","\u7136\u5f8c\u6703\u8fd4\u8ff4\u8def\u5f91\u64cd\u4f5c\u51fd\u6578\u7522\u751f\u7684\u97ff\u61c9\uff0c\u8ce6\u503c\u7d66response",(0,a.kt)("br",{parentName:"p"}),"\n","\u53ef\u4ee5\u5728\u4e2d\u9593\u4ef6return \u524d\u5c0dresponse \u9032\u884c\u64cd\u4f5c  "),(0,a.kt)("h3",{id:"\u5be6\u4f5c"},"\u5be6\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import uvicorn\nfrom fastapi import FastAPI, Request, Query, Body, status\nfrom fastapi.encoders import jsonable_encoder\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\n\n@app.middleware("http")\n# \u5fc5\u987b\u7528 async\nasync def add_process_time_header(request: Request, call_next):\n    # 1\u3001\u53ef\u9488\u5bf9 Request \u6216\u5176\u4ed6\u529f\u80fd\uff0c\u81ea\u5b9a\u7fa9\u4ee3\u78bc\n    print("=== \u91dd\u5c0d request \u6216\u5176\u4ed6\u529f\u80fd\u57f7\u884c\u81ea\u5b9a\u7fa9\u908f\u8f2f ===")\n    print(request.query_params)\n    print(request.method)\n\n    # 2\u3001\u5c07 Request \u4f20\u56de\u7ed9\u5c0d\u61c9\u7684\u8def\u5f84\u64cd\u4f5c\u51fd\u6570\u7e7c\u7e8c\u8655\u7406\u8acb\u6c42\n    # \u5fc5\u987b\u7528 await\n    response = await call_next(request)\n    # 4\u3001\u63a5\u6536\u5230\u8def\u5f84\u64cd\u4f5c\u51fd\u6570\u6240\u7522\u751f\u7684\u7684 Response\uff0c\u8bb0\u4f4f\u9019\u500b\u4e0d\u662f\u8fd4\u56de\u503c\uff08return\uff09\n\n    # 5\u3001\u53ef\u9488\u5c0d Response \u6216\u5176\u4ed6\u529f\u80fd\uff0c\u81ea\u5b9a\u5b9a\u7fa9\u4ee3\u78bc\n    print("*** \u91dd\u5c0d response \u6216\u5176\u4ed6\u529f\u80fd\u57f7\u884c\u81ea\u5b9a\u7fa9\u908f\u8f2f ***")\n\n    # \u81ea\u5b9a\u7fa9\u4ee3\u78bc\u56de\u61c9\u8acb\u6c42\u78bc\n    response.headers["X-Process-Token"] = str("test_token_polo")\n    response.status_code = status.HTTP_202_ACCEPTED\n\n    # 6\u3001\u6700\u7ec8\u8fd4\u56de Response \u7ed9\u5ba2\u6237\u7aef\n    return response\n\n\nclass User(BaseModel):\n    name: str = None\n    age: int = None\n\n\n@app.post("/items/")\nasync def read_item(item_id: str = Query(...), user: User = Body(...)):\n    # 3\u3001\u6536\u5230\u8bf7\u6c42\uff0c\u5904\u7406\u8bf7\u6c42\n    res = {"item_id": item_id}\n    if user:\n        res.update(jsonable_encoder(user))\n    print("@@@ \u57f7\u884c\u64cd\u4f5c\u51fd\u6578 @@@", res)\n    \n    # \u6709\u6ca1\u6709 return \u90fd\u4e0d\u5f71\u54cd\u4e2d\u95f4\u4ef6\u63a5\u6536 Response\n    return res\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3792).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-flow"},"  start=>start: Start from http request\n  path=>operation: Get API path\n  need_check=>condition: Need check token\uff1f\n  get_permission=>operation: Get permission\n  do_token=>operation: Check token\n  check_permission=>condition: Have permission\uff1f\n  reject=>end: \u62d2\u7d55\n  \n  end=>end: \u9032API Route\n  \n  start->path->need_check\n  need_check(yes)->do_token\n  need_check(no)->end\n  do_token->end\n  get_permission->check_permission\n  check_permission(yes)->end\n  check_permission(no)->reject\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(4509).Z})),(0,a.kt)("h3",{id:"middleware\u53ef\u4ee5\u6307\u5b9a\u7279\u5b9a\u7684path\u624d\u9032\u53bb\u57f7\u884c"},"middleware\u53ef\u4ee5\u6307\u5b9a\u7279\u5b9a\u7684Path\u624d\u9032\u53bb\u57f7\u884c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python="},"# middleware\n\n\n@router.middleware(\"http\")\nasync def add_process_time_header(request: Request, call_next):\n    print(\"Middleware works!\")\n    response = await call_next(request)\n    path = [route for route in request.scope['router'].routes if route.endpoint == request.scope['endpoint']][0].path\n    print(f'Path is: {path}')\n    if path == '/':\n        pass\n    else:\n        response.headers[\"X-Process-Time\"] = str(12345678)\n    return response\n")))}u.isMDXComponent=!0},3792:function(e,n,t){n.Z=t.p+"assets/images/middleware_flow-7ee66d6b2731d462b65496789a3db71c.png"},4509:function(e,n,t){n.Z=t.p+"assets/images/token_check-7b6d61270a71137d14ca042e9f648b0c.png"}}]);