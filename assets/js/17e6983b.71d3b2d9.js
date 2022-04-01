"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[3156],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,y=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6212:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},c="NAT",p={unversionedId:"VMware Workstation Player/nat",id:"VMware Workstation Player/nat",isDocsHomePage:!1,title:"NAT",description:"\u53d6\u5f97\u5916\u90e8 IP,\u8acb\u9078 Bridge",source:"@site/docs/VMware Workstation Player/nat.md",sourceDirName:"VMware Workstation Player",slug:"/VMware Workstation Player/nat",permalink:"/blog/docs/VMware Workstation Player/nat",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/VMware Workstation Player/nat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reduce Password Require",permalink:"/blog/docs/VMWare EXSi/reduce-password-require"},next:{title:"Command",permalink:"/blog/docs/VirtualBox/command"}},u=[],s={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nat"},"NAT"),(0,a.kt)("p",null,"\u53d6\u5f97\u5916\u90e8 IP,\u8acb\u9078 Bridge"),(0,a.kt)("p",null,"Virtual machine (\u865b\u64ec\u6a5f) \u9810\u8a2d\u662f\u5229\u7528 NAT (Network Access Translation \u670d\u52d9\u4f86\u4e0a\u7db2"),(0,a.kt)("p",null,"\u9019\u500b\u670d\u52d9\u662f VM \u81ea\u5df1\u6709 DHCP \u529f\u80fd \u767c\u9001\u4e00\u500b virtual IP \u7d66\u865b\u64ec\u6a5f\u4e0a\u7db2 \u53ef\u4ee5\u9032\u5230\u865b\u64ec\u6a5f\u5167\u67e5\u770b IP \u61c9\u8a72\u6703\u9577\u6210 192.168 \u7db2\u6bb5\u7684 IP"),(0,a.kt)("p",null,"\u900f\u904e NAT \u7684\u670d\u52d9 \u53ef\u4ee5\u5c0d\u61c9\u5230\u4f60\u672c\u6a5f\u4e0a\u7db2\u7684 IP \u7136\u5f8c\u4e0a\u7db2 \u6240\u4ee5\u4f60\u7684\u865b\u64ec\u6a5f\u5c0d\u5916\u7684 IP \u548c\u4f60\u672c\u6a5f\u7684 IP \u76f8\u540c"),(0,a.kt)("p",null,"NAT \u670d\u52d9\u672c\u610f\u662f\u7528\u4f86\u89e3\u6c7a IP \u4e0d\u8db3\u7684\u554f\u984c\uff0c\u5982\u679c\u4f60\u6709\u591a\u9918\u7684 IP \u53ef\u4ee5\u76f4\u63a5\u8a2d\u5b9a\u65b0\u7684 IP\uff0c\u9032\u884c\u4e0a\u7db2"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5229\u7528\u865b\u64ec\u6a5f\u4f86\u67b6\u7ad9\u53ef\u4ee5\u53c3\u8003\u9019\u7bc7\n",(0,a.kt)("strong",{parentName:"p"},"Reference from ",(0,a.kt)("a",{parentName:"strong",href:"https://blog.xuite.net/sphjlc062218/thinking/32175554-VMware%E6%9E%B6%E8%A8%AD%E4%BC%BA%E6%9C%8D%E5%99%A8%E5%85%81%E8%A8%B1%E5%A4%96%E9%83%A8%E9%80%A3%E5%85%A5%E8%A7%A3%E6%B1%BA%E6%96%B9%E6%A1%88(NAT+mode)"},"https://blog.xuite.net/sphjlc062218/thinking/32175554-VMware%E6%9E%B6%E8%A8%AD%E4%BC%BA%E6%9C%8D%E5%99%A8%E5%85%81%E8%A8%B1%E5%A4%96%E9%83%A8%E9%80%A3%E5%85%A5%E8%A7%A3%E6%B1%BA%E6%96%B9%E6%A1%88(NAT+mode)"))),(0,a.kt)("p",null,"\u88dc\u5145\u4e00\u4e0b\u525b\u525b\u82e5\u8981\u4f7f\u7528\u56fa\u5b9a IP \u4e0a\u7db2\uff0c\u8981\u5148\u5230\u865b\u64ec\u6a5f\u8a2d\u5b9a\u5167\u5c07\u7db2\u5361\u6a21\u5f0f\u8a2d\u5b9a\u6210 bridge(\u6a4b\u63a5)\uff0c\u4ee5\u6a4b\u63a5\u6a21\u5f0f\u9023\u7dda\uff0c\u5c31\u50cf\u5be6\u9ad4\u96fb\u8166\u76f4\u63a5\u9023\u63a5\u6578\u64da\u6a5f\uff0c\u800c\u4e0d\u900f\u904e\u672c\u6a5f\u3002 \u525b\u5be6\u969b\u6e2c\u8a66\u9019\u6a23\u53ef\u4ee5"),(0,a.kt)("p",null,"\u67b6\u7ad9\u67b6\u5728 VM \u88e1\u9762\u7684\u6d41\u7a0b\uff0c\u67b6\u7ad9\u597d\u5f8c\uff0c\u5728 VM \u88e1\u9762\u8a66\u958b\u7db2\u9801(\u78ba\u8a8d Web \u670d\u52d9\u6709\u8d77\u4f86)\uff0c\u4e4b\u5f8c\u5230 VM \u7684\u8a2d\u5b9a\u8a2d\u5b9a port(\u78ba\u5b9a\u8981\u548c Web \u7684 port \u76f8\u540c)\uff0c\u518d\u672c\u6a5f\u958b\u770b\u770b\u662f\u5426\u53ef\u4ee5\u9023\u5230 VM \u6240\u67b6\u7684\u7db2\u9801\uff0c\u6700\u5f8c\u8a2d\u5b9a\u5728\u672c\u6a5f\u8a2d\u5b9a DDNS \u670d\u52d9\uff0c\u8b93\u5916\u90e8\u4f7f\u7528\u8005\u53ef\u4ee5\u4f9d\u56fa\u5b9a\u7684\u7db2\u5740\u9023\u5165\u8a72\u7db2\u7ad9\u3002"),(0,a.kt)("p",null,"Gayway(\u9598\u9053)\u5b9a\u7fa9\uff1a\u662f\u672c\u6a5f\u5c0d\u5916\u7684\u5c01\u5305\u50b3\u905e\u7684\u4e0b\u4e00\u500b\u8def\u5f91\u3002\u6240\u4ee5 VM \u8207\u672c\u6a5f\u76f8\u540c\u7684 Gayway\uff0c\u5982\u679c\u662f public IP \u61c9\u8a72\u6703\u662f.254 \u7d50\u5c3e\uff0c\u5982\u679c\u662f private IP \u61c9\u8a72\u662f\u5206\u4eab\u5668\u7684 IP .1 \u7d50\u5c3e\uff0c\u6240\u4ee5\u4f60\u8981\u5148\u67e5\u672c\u6a5f\u96fb\u8166\u7684 Gayway\u3002"),(0,a.kt)("p",null,"DDNS \u8a2d\u5b9a\u65b9\u5f0f\u5982\u4e0b\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n","\u63a1\u7528 no-ip \u6240\u63d0\u4f9b\u7684\u670d\u52d9",(0,a.kt)("br",{parentName:"p"}),"\n","(1)\u8a3b\u518a\u5e33\u865f",(0,a.kt)("br",{parentName:"p"}),"\n","(2)\u8a2d\u5b9a\u4e00\u500b\u5c6c\u65bc\u81ea\u5df1\u7684\u7db2\u57df\u540d\u7a31",(0,a.kt)("br",{parentName:"p"}),"\n","(3)\u5b89\u88dd\u4e26\u8a2d\u5b9a no-ip \u8edf\u9ad4(\u7528\u4f86\u5c0d\u61c9\u6d6e\u52d5 IP)",(0,a.kt)("br",{parentName:"p"}),"\n","(4)\u6e2c\u8a66\u529f\u80fd\u662f\u5426\u6b63\u5e38"),(0,a.kt)("p",null,"Q:\u7576\u540c\u6642\u704c Virtrul Box \u548c VMPlayer\uff0c\u70ba\u4ec0\u9ebc\u8a2d\u5b9a Bridge \u6703\u7121\u6cd5\u9023\u7dda?",(0,a.kt)("br",{parentName:"p"}),"\n","A:\u7db2\u8def\u8a2d\u5b9a\u7684 Config \u6703\u4e92\u76f8\u8986\u84cb\u4fee\u6539\uff0c\u9020\u6210\u8a2d\u5b9a\u932f\u8aa4\u3002"))}f.isMDXComponent=!0}}]);