"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8953],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4106:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},u="Document",p={unversionedId:"Python3/document",id:"Python3/document",isDocsHomePage:!1,title:"Document",description:"Retrun",source:"@site/docs/Python3/document.md",sourceDirName:"Python3",slug:"/Python3/document",permalink:"/blog/docs/Python3/document",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Python3/document.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Calibration",permalink:"/blog/docs/Python3/calibration"},next:{title:"H.265 VS H.264",permalink:"/blog/docs/Python3/h265-h264"}},s=[{value:"Retrun",id:"retrun",children:[]},{value:"Init .py",id:"init-py",children:[]},{value:"tuple\u3001list",id:"tuplelist",children:[]},{value:"\u985e\u5225\u3001\u5efa\u69cb\u5f0f\u3001\u65b9\u6cd5\u3001\u7269\u4ef6",id:"\u985e\u5225\u5efa\u69cb\u5f0f\u65b9\u6cd5\u7269\u4ef6",children:[]},{value:"caplog",id:"caplog",children:[]},{value:"with as",id:"with-as",children:[]},{value:"pytest assert \u548c raises \u7684\u7528\u6cd5",id:"pytest-assert-\u548c-raises-\u7684\u7528\u6cd5",children:[]},{value:"startswith",id:"startswith",children:[]},{value:"dir",id:"dir",children:[]},{value:"pytest",id:"pytest",children:[]},{value:"async await \u8aaa\u660e",id:"async-await-\u8aaa\u660e",children:[]}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"document"},"Document"),(0,l.kt)("h3",{id:"retrun"},"Retrun"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7eaf return \u8bed\u53e5\uff0c\u76f8\u5f53\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"return None"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def foo1(value):\n    if value:\n        return value\n    else:\n        return None\n\ndef foo2(value):\n    """\u7eafreturn\u8bed\u53e5\uff0c\u76f8\u5f53\u4e8e`return None`"""\n    if value:\n        return value\n    else:\n        return\n\ndef foo3(value):\n    """\u65e0return\u8bed\u53e5\uff0c\u4e5f\u76f8\u5f53\u4e8e`return None`"""\n    if value:\n        return value\n')),(0,l.kt)("h3",{id:"init-py"},"Init .py"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"import package \u6642\u5c31\u6703\u57f7\u884c\u7684\u6a94\u6848"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u70ba requests \u76ee\u9304\u5e36\u6709",(0,l.kt)("strong",{parentName:"li"},"init"),".py\uff0c\u6240\u4ee5\u53ef\u4ee5\u5c07 requests \u770b\u6210\u662f\u4e00\u500b regular package\uff0c\u7576 requests \u88ab\u5176\u4ed6 module import \u6642\uff0c\u9810\u8a2d\u6703\u57f7\u884c",(0,l.kt)("strong",{parentName:"li"},"init"),".py")),(0,l.kt)("h3",{id:"tuplelist"},"tuple\u3001list"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tuple",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u662f\u5c6c\u65bc\u4e0d\u53ef\u8b8a\u7684\u8cc7\u6599\u578b\u614b(immutable)\uff0c\u7576\u4f60\u7684\u503c\u90fd\u4e0d\u6703\u6539\u8b8a\uff0c\u800c\u4e14\u4f60\u4e5f\u4e0d\u5e0c\u671b\u503c\u88ab\u66f4\u52d5\u7684\u6642\u5019\uff0c\u5c31\u662f\u9069\u5408\u4f7f\u7528 tuple \u7684\u6642\u5019"),(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u5713\u62ec\u865f\u4ee3\u8868\uff0c\u4f8b\u5982 a = (1,2,3)"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u7279\u5225\u6ce8\u610f\u82e5\u53ea\u6709\u4e00\u500b tuple \u5143\u7d20\u8981\u52a0,\u624d\u6703\u6210\u7acb (11,)\uff0c\u82e5(11)\u4ee3\u8868\u6574\u6578 11"),(0,l.kt)("li",{parentName:"ul"},"\u5360\u7528\u7684\u7a7a\u9593\u6bd4\u8f03\u5c11"))),(0,l.kt)("li",{parentName:"ul"},"list",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u662f\u53ef\u8b8a\uff0c\u53ef\u4f7f\u7528 append()\u3001remove()\u3001pop()\u7b49\u6703\u66f4\u52d5\u503c\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("li",{parentName:"ul"},"list \u662f b = ","[1,2,3]")))),(0,l.kt)("h3",{id:"\u985e\u5225\u5efa\u69cb\u5f0f\u65b9\u6cd5\u7269\u4ef6"},"\u985e\u5225\u3001\u5efa\u69cb\u5f0f\u3001\u65b9\u6cd5\u3001\u7269\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u985e\u5225\u547d\u540d\u901a\u5e38\u4f7f\u7528 Pascal \u547d\u540d\u6cd5\uff0c\u9996\u5b57\u5927\u5beb\uff0c\u4e0d\u4f7f\u7528\u7a7a\u767d\u548c\u5e95\u7dda\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'#\u6c7d\u8eca\u985e\u5225\nclass Cars:\n    #\u5efa\u69cb\u5f0f\n    def __init__(self, color):\n        self.color = color\n    #\u65b9\u6cd5\n    def drive(self):\n        print(f"My car is {self.color} color")\n\n#\u5efa\u7acb\u7269\u4ef6\na = Cars()\n')),(0,l.kt)("h3",{id:"caplog"},"caplog"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OpenADR \u6709\u4f7f\u7528\u5230 logging \u5305\u7d00\u9304 log\uff0c\u800c caplog.records \u53ef\u4ee5\u8abf\u51fa log\uff0c\u4f86\u5224\u65b7\u6e2c\u8a66\u6b63\u78ba\u8207\u5426\u7684\u4f9d\u64da\u3002")),(0,l.kt)("h3",{id:"with-as"},"with as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"with \u4e4b\u5f8c\u7684\u904b\u7b97\u5f0f\u50b3\u56de\u7684\u7269\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 as \u6307\u5b9a\u7d66\u8b8a\u6578\u4f86\u53c3\u8003")),(0,l.kt)("h3",{id:"pytest-assert-\u548c-raises-\u7684\u7528\u6cd5"},"pytest assert \u548c raises \u7684\u7528\u6cd5"),(0,l.kt)("p",null,"-python3 -m pytest -v test\n-v: \u986f\u793a\u7d50\u679c","[PASS]"," OR ","[FAILED]","\n-s: LOG \u53ca\u7d30\u7bc0\u5168\u90e8\u986f\u793a\n\u90fd\u4e0d\u52a0: \u53ea\u6709\u986f\u793a\u5b8c\u6210%\u6578"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"raises\uff1a \u5728\u65b7\u8a00\u4e00\u4e9b\u4ee3\u78bc\u584a\u6216\u8005\u51fd\u6578\u6642\u6703\u5f15\u767c\u610f\u6599\u4e4b\u4e2d\u7684\u7570\u5e38\u6216\u8005\u5176\u4ed6\u5931\u6557\u7684\u7570\u5e38\uff0c\u5c0e\u81f4\u7a0b\u5e8f\u7121\u6cd5\u904b\u884c\u6642\uff0c\u4f7f\u7528 raises \u6355\u7372\u5339\u914d\u5230\u7684\u7570\u5e38\uff0c\u53ef\u4ee5\u7e7c\u7e8c\u8b93\u4ee3\u78bc\u6b63\u5e38\u904b\u884c\u3002\u6e90\u78bc\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u653e\u5728 python_env/lib/python3.8/site-packages/","_","pytest/python_api.py"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"with pytest.raises(ValueError) as excinfo:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7576\u5224\u65b7\u6709 ValueError \u6642\uff0c\u4ee3\u8868\u6e2c\u8a66\u6b63\u78ba\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"valueError \u53ef\u4ee5 print \u51fa\u4f86"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    with pytest.raises(ValueError) as excinfo:\n        client.add_report(callback=print,\n                          resource_id='myresource',\n                          measurement='voltage',\n                          report_name='non_existant')\n                          #report_name='TELEMETRY_STATUS')\n    print(f\"aaaaaaaa{excinfo.value}\")\n\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"test/test_client_misc.py aaaaaaaa('non_existant is not a valid report_name. Valid options are HISTORY_GREENBUTTON, HISTORY_USAGE, METADATA_HISTORY_GREENBUTTON, METADATA_HISTORY_USAGE, METADATA_TELEMETRY_STATUS, METADATA_TELEMETRY_USAGE, TELEMETRY_STATUS, TELEMETRY_USAGE', \" or any name starting with 'x-'.\")\n")),(0,l.kt)("h3",{id:"startswith"},"startswith"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python startswith() \u65b9\u6cd5\u7528\u4e8e\u68c0\u67e5\u5b57\u7b26\u4e32\u662f\u5426\u662f\u4ee5\u6307\u5b9a\u5b50\u5b57\u7b26\u4e32\u5f00\u5934\uff0c\u5982\u679c\u662f\u5219\u8fd4\u56de True\uff0c\u5426\u5219\u8fd4\u56de False")),(0,l.kt)("h3",{id:"dir"},"dir"),(0,l.kt)("p",null,"dir(python_file_name): \u82e5\u6709 import \u5247\u662f\u8f38\u51fa import \u51fd\u6578\u540d"),(0,l.kt)("h3",{id:"pytest"},"pytest"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5ba3\u544a\u6e2c\u8a66 function\uff0c\u547d\u540d\u65b9\u5f0f\u70ba test","_","\u958b\u982d")),(0,l.kt)("h3",{id:"async-await-\u8aaa\u660e"},"async await \u8aaa\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"async / await \u662f Python 3.5+ \u4e4b\u5f8c\u51fa\u73fe\u7684\u8a9e\u6cd5\uff0c\u8b93 Coroutine \u8207 Coroutine \u4e4b\u9593\u7684\u8abf\u5ea6\u66f4\u52a0\u6e05\u695a"),(0,l.kt)("li",{parentName:"ul"},"async\uff1a\u7528\u4f86\u5ba3\u544a function \u80fd\u5920\u6709\u7570\u6b65\u7684\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"await\uff1a\u7528\u4f86\u6a19\u8a18 Coroutine \u5207\u63db\u66ab\u505c\u548c\u7e7c\u7e8c\u7684\u9ede"),(0,l.kt)("li",{parentName:"ul"})))}m.isMDXComponent=!0}}]);