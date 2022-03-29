"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8662],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){u(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,u=function(n,e){if(null==n)return{};var t,r,u={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(u[t]=n[t]);return u}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(u[t]=n[t])}return u}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},l=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(n,e){var t=n.components,u=n.mdxType,i=n.originalType,s=n.parentName,l=a(n,["components","mdxType","originalType","parentName"]),b=c(t),f=u,d=b["".concat(s,".").concat(f)]||b[f]||p[f]||i;return t?r.createElement(d,o(o({ref:e},l),{},{components:t})):r.createElement(d,o({ref:e},l))}));function f(n,e){var t=arguments,u=e&&e.mdxType;if("string"==typeof n||u){var i=t.length,o=new Array(i);o[0]=b;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=n,a.mdxType="string"==typeof n?n:u,o[1]=a;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},8833:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=t(7462),u=t(3366),i=(t(7294),t(3905)),o=["components"],a={},s="Chinese Input",c={unversionedId:"Ubuntu/chinese-input",id:"Ubuntu/chinese-input",isDocsHomePage:!1,title:"Chinese Input",description:"Reference from http://it.livekn.com/2016/05/ubuntu-1604-ibus.html",source:"@site/docs/Ubuntu/chinese-input.md",sourceDirName:"Ubuntu",slug:"/Ubuntu/chinese-input",permalink:"/blog/docs/Ubuntu/chinese-input",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Ubuntu/chinese-input.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/blog/docs/Ubuntu/command"},next:{title:"Disk Full Error",permalink:"/blog/docs/Ubuntu/disk-full-error"}},l=[{value:"Install chinese input",id:"install-chinese-input",children:[]}],p={toc:l};function b(n){var e=n.components,t=(0,u.Z)(n,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chinese-input"},"Chinese Input"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reference from ",(0,i.kt)("a",{parentName:"strong",href:"http://it.livekn.com/2016/05/ubuntu-1604-ibus.html"},"http://it.livekn.com/2016/05/ubuntu-1604-ibus.html"))),(0,i.kt)("h3",{id:"install-chinese-input"},"Install chinese input"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\u5feb\u901f\u5207\u63db\u4e2d\u82f1\u8f38\u5165\u6cd5\nwindows\u9375+\u7a7a\u767d\n\n(ubuntu20.04LTS \u65b9\u6cd5)\n\u7b2c\u4e00\u6b65\uff0c\u5b89\u88dd\u4f60\u559c\u6b61\u7684\u8f38\u5165\u6cd5\nsudo apt-get install -y ibus-chewing #\u65b0\u9177\u97f3\u8f38\u5165\u6cd5\n\n\u7b2c\u4e8c\u6b65\uff0c\u91cd\u555f ibus \u4e2d\u958b\u555f\u5b83\nibus restart\n\n\u7b2c\u4e09\u6b65\uff0c\u5728 ubuntu \u4e2d\u958b\u555f\u5b83\n\u9032\u5165setting/region & language/Mange installed language/\u52fe\u9078 chinese(tradition)\n\u56de\u5230\u4e0a\u500b\u756b\u9762\u5f8c/\u6309+/\u9078chinese(iBUS\uff09\u5373\u53ef\n\n\n(ubuntu16.04LTS\u65b9\u6cd5)\n\u7b2c\u4e00\u6b65\uff0c\u5b89\u88dd\u4f60\u559c\u6b61\u7684\u8f38\u5165\u6cd5\nsudo apt-get install -y ibus-chewing #\u65b0\u9177\u97f3\u8f38\u5165\u6cd5\n\n\u7b2c\u4e8c\u6b65\uff0c\u91cd\u555f ibus \u4e2d\u958b\u555f\u5b83\nibus restart\n\n\u7b2c\u4e09\u6b65\uff0c\u5728 ubuntu \u4e2d\u958b\u555f\u5b83\n\n\n\u6309\u300c+\u300d\u865f\u589e\u52a0\u8f38\u5165\u6cd5\n\n\n\u9078\u64c7\u4f60\u60f3\u589e\u52a0\u7684\u8f38\u5165\u6cd5\uff0c\u6211\u559c\u6b61\u4f7f\u7528\u7b2c\u4e09\u4ee3\u5009\u9821\uff0c\u5c31\u9078\u64c7 Chinese (CangJie3) (IBus)\uff0c\u4f60\u53ef\u4ee5\u9078\u64c7\u4f60\u559c\u6b61\u7684\u8f38\u5165\u6cd5\u3002\n\n\u5b8c\u6210\uff01\n\n\n##\u756a\u5916\u7bc7\uff08ubuntu 18.04LTS)\n\u7b2c\u4e00\u6b65\uff0c\u5b89\u88dd\u4f60\u559c\u6b61\u7684\u8f38\u5165\u6cd5\nsudo apt-get install ibus-chewing #\u65b0\u9177\u97f3\u8f38\u5165\u6cd5\n\n\u7b2c\u4e8c\u6b65\uff0c\u91cd\u555f ibus \u4e2d\u958b\u555f\u5b83\nibus restart\n\n\u7b2c\u4e09\u6b65\uff0c\u5728 ubuntu \u4e2d\u958b\u555f\u5b83\n\u9032\u5165setting/region & language/Mange installed language/\u52fe\u9078 chinese(tradition)\n\u56de\u5230\u4e0a\u500b\u756b\u9762\u5f8c/\u6309+/\u9078chinese(iBUS\uff09\u5373\u53ef\n\n\n\uff1d\uff1d\uff1d\u7b46\u8a18\uff1d\uff1d\uff1d\n***\u5728LXDE gui \u5b89\u88dd\u4e2d\u6587\u8f38\u5165\u6cd5\nsudo apt update\nsudo apt install -y ibus-chewing\nibus restart\nreboot\n\u6309 \u958b\u59cb / Perferences / IBus Perferences / Input Method / Add / Chinese / Chewing \u5373\u53ef\n\n")))}b.isMDXComponent=!0}}]);