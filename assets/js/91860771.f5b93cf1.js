"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4258],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),y=o,f=m["".concat(i,".").concat(y)]||m[y]||l[y]||a;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8424:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],s={},i="Pytest",c={unversionedId:"Python3/pytest",id:"Python3/pytest",isDocsHomePage:!1,title:"Pytest",description:"- \u55ae\u5143\u6e2c\u8a66",source:"@site/docs/Python3/pytest.md",sourceDirName:"Python3",slug:"/Python3/pytest",permalink:"/blog/docs/Python3/pytest",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Python3/pytest.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenCV",permalink:"/blog/docs/Python3/opencv"},next:{title:"VideoCapture grab() vs read()",permalink:"/blog/docs/Python3/videocapture-grab-read"}},u=[{value:"\u55ae\u4e00\u6e2c\u8a66",id:"\u55ae\u4e00\u6e2c\u8a66",children:[]},{value:"@pytest.mark.asyncio()",id:"pytestmarkasyncio",children:[]},{value:"@pytest.mark.parametrize\u5efa\u7acb\u591a\u500b\u6e2c\u8a66\u53c3\u6578\u503c",id:"pytestmarkparametrize\u5efa\u7acb\u591a\u500b\u6e2c\u8a66\u53c3\u6578\u503c",children:[]},{value:"pytest --co",id:"pytest---co",children:[]},{value:"@pytest.fixture()",id:"pytestfixture",children:[]}],l={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pytest"},"Pytest"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u55ae\u5143\u6e2c\u8a66")),(0,a.kt)("h3",{id:"\u55ae\u4e00\u6e2c\u8a66"},"\u55ae\u4e00\u6e2c\u8a66"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh"},'poetry run pytest ./{project}/tests/api/test_api.py -m "not jwt"\n')),(0,a.kt)("h3",{id:"pytestmarkasyncio"},"@pytest.mark.asyncio()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reference from: ",(0,a.kt)("a",{parentName:"strong",href:"https://stackoverflow.com/questions/57461868/for-what-pytest-mark-asyncio-is-used"},"https://stackoverflow.com/questions/57461868/for-what-pytest-mark-asyncio-is-used"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@pytest.mark.asyncio\nasync def test_example(event_loop):\n    do_stuff()    \n    await asyncio.sleep(0.1, loop=event_loop)\n\nequal to\n\ndef test_example():\n    loop = asyncio.new_event_loop()\n    try:\n        do_stuff()\n        asyncio.set_event_loop(loop)\n        loop.run_until_complete(asyncio.sleep(0.1, loop=loop))\n    finally:\n        loop.close()\n")),(0,a.kt)("h3",{id:"pytestmarkparametrize\u5efa\u7acb\u591a\u500b\u6e2c\u8a66\u53c3\u6578\u503c"},"@pytest.mark.parametrize\u5efa\u7acb\u591a\u500b\u6e2c\u8a66\u53c3\u6578\u503c"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reference from ",(0,a.kt)("a",{parentName:"strong",href:"https://ithelp.ithome.com.tw/articles/10227361"},"https://ithelp.ithome.com.tw/articles/10227361")),"\n\u540d\u7a31\u8981\u5c0d\u61c9\u5230\u53c3\u6578\u540d\u7a31  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def sum(num1,num2):\n return num1 + num2\n\nimport pytest\n\n@pytest.mark.parametrize(\n 'num1,num2,eq_num',\n [\n  (1,2,3),\n  (4,5,9),\n  (0,0,0)\n ]\n)\n\ndef test_multi_sum(num1,num2,eq_num):\n assert sum(num1,num2) == eq_num\n")),(0,a.kt)("h3",{id:"pytest---co"},"pytest --co"),(0,a.kt)("p",null,"\u53ea\u6536\u96c6\u6e2c\u8a66Function\u5217\u8868\uff0c\u4e0d\u505a\u6e2c\u8a66\u3002  "),(0,a.kt)("h3",{id:"pytestfixture"},"@pytest.fixture()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@pytest.fixture() \u5982\u679c\u4e0d\u5beb\u53c3\u6578\uff0c\u53c3\u6578\u9ed8\u8a8d scope='function'\n")))}m.isMDXComponent=!0}}]);