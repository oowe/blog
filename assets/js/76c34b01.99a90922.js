"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6785],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return b}});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},u=Object.keys(n);for(r=0;r<u.length;r++)t=u[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(r=0;r<u.length;r++)t=u[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},l=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,u=n.originalType,s=n.parentName,l=a(n,["components","mdxType","originalType","parentName"]),f=c(t),b=i,d=f["".concat(s,".").concat(b)]||f[b]||p[b]||u;return t?r.createElement(d,o(o({ref:e},l),{},{components:t})):r.createElement(d,o({ref:e},l))}));function b(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var u=t.length,o=new Array(u);o[0]=f;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=n,a.mdxType="string"==typeof n?n:i,o[1]=a;for(var c=2;c<u;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4392:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=t(7462),i=t(3366),u=(t(7294),t(3905)),o=["components"],a={},s="Chinese Input",c={unversionedId:"Linux/chinese-input",id:"Linux/chinese-input",isDocsHomePage:!1,title:"Chinese Input",description:"Reference from http://it.livekn.com/2016/05/ubuntu-1604-ibus.html",source:"@site/docs/Linux/chinese-input.md",sourceDirName:"Linux",slug:"/Linux/chinese-input",permalink:"/blog/docs/Linux/chinese-input",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Linux/chinese-input.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ACPI Error",permalink:"/blog/docs/Linux/acpi-error"},next:{title:"Disk Full Error",permalink:"/blog/docs/Linux/disk-full-error"}},l=[{value:"Install chinese input",id:"install-chinese-input",children:[]}],p={toc:l};function f(n){var e=n.components,t=(0,i.Z)(n,o);return(0,u.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"chinese-input"},"Chinese Input"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Reference from ",(0,u.kt)("a",{parentName:"strong",href:"http://it.livekn.com/2016/05/ubuntu-1604-ibus.html"},"http://it.livekn.com/2016/05/ubuntu-1604-ibus.html"))),(0,u.kt)("h3",{id:"install-chinese-input"},"Install chinese input"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"\u5feb\u901f\u5207\u63db\u4e2d\u82f1\u8f38\u5165\u6cd5\nwindows\u9375+\u7a7a\u767d\n\n(ubuntu20.04LTS \u65b9\u6cd5)\n\u7b2c\u4e00\u6b65\uff0c\u5b89\u88dd\u4f60\u559c\u6b61\u7684\u8f38\u5165\u6cd5\nsudo apt-get install -y ibus-chewing #\u65b0\u9177\u97f3\u8f38\u5165\u6cd5\n\n\u7b2c\u4e8c\u6b65\uff0c\u91cd\u555f ibus \u4e2d\u958b\u555f\u5b83\nibus restart\n\n\u7b2c\u4e09\u6b65\uff0c\u5728 ubuntu \u4e2d\u958b\u555f\u5b83\n\u9032\u5165setting/region & language/Mange installed language/\u52fe\u9078 chinese(tradition)\n\u56de\u5230\u4e0a\u500b\u756b\u9762\u5f8c/\u6309+/\u9078chinese(iBUS\uff09\u5373\u53ef\n\n\n(ubuntu16.04LTS\u65b9\u6cd5)\n\u7b2c\u4e00\u6b65\uff0c\u5b89\u88dd\u4f60\u559c\u6b61\u7684\u8f38\u5165\u6cd5\nsudo apt-get install -y ibus-chewing #\u65b0\u9177\u97f3\u8f38\u5165\u6cd5\n\n\u7b2c\u4e8c\u6b65\uff0c\u91cd\u555f ibus \u4e2d\u958b\u555f\u5b83\nibus restart\n\n\u7b2c\u4e09\u6b65\uff0c\u5728 ubuntu \u4e2d\u958b\u555f\u5b83\n\n\n\u6309\u300c+\u300d\u865f\u589e\u52a0\u8f38\u5165\u6cd5\n\n\n\u9078\u64c7\u4f60\u60f3\u589e\u52a0\u7684\u8f38\u5165\u6cd5\uff0c\u6211\u559c\u6b61\u4f7f\u7528\u7b2c\u4e09\u4ee3\u5009\u9821\uff0c\u5c31\u9078\u64c7 Chinese (CangJie3) (IBus)\uff0c\u4f60\u53ef\u4ee5\u9078\u64c7\u4f60\u559c\u6b61\u7684\u8f38\u5165\u6cd5\u3002\n\n\u5b8c\u6210\uff01\n\n\n##\u756a\u5916\u7bc7\uff08ubuntu 18.04LTS)\n\u7b2c\u4e00\u6b65\uff0c\u5b89\u88dd\u4f60\u559c\u6b61\u7684\u8f38\u5165\u6cd5\nsudo apt-get install ibus-chewing #\u65b0\u9177\u97f3\u8f38\u5165\u6cd5\n\n\u7b2c\u4e8c\u6b65\uff0c\u91cd\u555f ibus \u4e2d\u958b\u555f\u5b83\nibus restart\n\n\u7b2c\u4e09\u6b65\uff0c\u5728 ubuntu \u4e2d\u958b\u555f\u5b83\n\u9032\u5165setting/region & language/Mange installed language/\u52fe\u9078 chinese(tradition)\n\u56de\u5230\u4e0a\u500b\u756b\u9762\u5f8c/\u6309+/\u9078chinese(iBUS\uff09\u5373\u53ef\n\n\n\uff1d\uff1d\uff1d\u7b46\u8a18\uff1d\uff1d\uff1d\n***\u5728LXDE gui \u5b89\u88dd\u4e2d\u6587\u8f38\u5165\u6cd5\nsudo apt update\nsudo apt install -y ibus-chewing\nibus restart\nreboot\n\u6309 \u958b\u59cb / Perferences / IBus Perferences / Input Method / Add / Chinese / Chewing \u5373\u53ef\n\n")))}f.isMDXComponent=!0}}]);