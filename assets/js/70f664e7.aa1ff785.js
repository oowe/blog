"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4137],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),f=u(r),g=o,s=f["".concat(p,".").concat(g)]||f[g]||m[g]||a;return r?n.createElement(s,c(c({ref:t},i),{},{components:r})):n.createElement(s,c({ref:t},i))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5066:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return i}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],l={},p="Document",u={unversionedId:"Logger/document",id:"Logger/document",isDocsHomePage:!1,title:"Document",description:"Reference from https://matthung0807.blogspot.com/2019/09/log4j2-logger-level.html",source:"@site/docs/Logger/document.md",sourceDirName:"Logger",slug:"/Logger/document",permalink:"/blog/docs/Logger/document",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Logger/document.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java 8",permalink:"/blog/docs/Java/java-8"},next:{title:"Command",permalink:"/blog/docs/MySQL Workbench/command"}},i=[],m={toc:i};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"document"},"Document"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reference from ",(0,a.kt)("a",{parentName:"strong",href:"https://matthung0807.blogspot.com/2019/09/log4j2-logger-level.html"},"https://matthung0807.blogspot.com/2019/09/log4j2-logger-level.html"))),(0,a.kt)("p",null,"\u9ad8---------------------------------------\u4f4e",(0,a.kt)("br",{parentName:"p"}),"\n","FETAL > ERROR > WARN > INFO > DEBUG > TRACE"),(0,a.kt)("p",null,"\u6bcf\u500b Level \u6709\u5c0d\u61c9\u7684 intLevel \u6574\u6578\u503c\uff0c\u6578\u503c\u8d8a\u5c0f\u7b49\u7d1a\u8d8a\u9ad8\uff0c\u6578\u503c\u8d8a\u5927\u7b49\u7d1a\u8d8a\u4f4e\u3002"),(0,a.kt)("p",null,"Level intValue \u7528\u9014",(0,a.kt)("br",{parentName:"p"}),"\n","OFF 0 \u4e0d\u8f38\u51fa\u4efb\u4f55\u65e5\u8a8c",(0,a.kt)("br",{parentName:"p"}),"\n","FETAL 100 \u9020\u6210\u61c9\u7528\u7a0b\u5f0f\u505c\u6b62\u7684\u65e5\u8a8c",(0,a.kt)("br",{parentName:"p"}),"\n","ERROR 200 \u9020\u6210\u61c9\u7528\u7a0b\u5f0f\u932f\u8aa4\u7684\u65e5\u8a8c",(0,a.kt)("br",{parentName:"p"}),"\n","WARN 300 \u53ef\u80fd\u5c0e\u81f4\u932f\u8aa4\u7684\u65e5\u8a8c",(0,a.kt)("br",{parentName:"p"}),"\n","INFO 400 \u4e00\u822c\u8cc7\u8a0a\u7684\u65e5\u8a8c",(0,a.kt)("br",{parentName:"p"}),"\n","DEBUG 500 \u9664\u932f\u8cc7\u8a0a\u7684\u65e5\u8a8c",(0,a.kt)("br",{parentName:"p"}),"\n","TRACE 600 \u66f4\u7d30\u7684\u9664\u932f\u8cc7\u8a0a\uff0c\u901a\u5e38\u7528\u4f86\u8ffd\u8e64\u7a0b\u5f0f\u6d41\u7a0b\u7684\u65e5\u8a8c",(0,a.kt)("br",{parentName:"p"}),"\n","ALL Integer.MAX_VALUE \u8f38\u51fa\u6240\u6709\u65e5\u8a8c"),(0,a.kt)("p",null,"\u901a\u5e38 log \u8868\u6703\u8f38\u51fa info \u4ee5\u4e0a\u7684 log",(0,a.kt)("br",{parentName:"p"}),"\n","\u4ee3\u8868\u70ba fetal, error, warn \u548c info"))}f.isMDXComponent=!0}}]);