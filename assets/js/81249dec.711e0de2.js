"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5719],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9531:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},u="Document",c={unversionedId:"AWS/document",id:"AWS/document",isDocsHomePage:!1,title:"Document",description:"Reference from https://aws.amazon.com/tw/?nc2=h_lg",source:"@site/docs/AWS/document.md",sourceDirName:"AWS",slug:"/AWS/document",permalink:"/blog/docs/AWS/document",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/AWS/document.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ufw Setup",permalink:"/blog/docs/Linux/ufw-setup"},next:{title:"Command",permalink:"/blog/docs/AlmaLinux/command"}},p=[{value:"MySQL \u8cc7\u6599\u5eab\u5b78\u7fd2",id:"mysql-\u8cc7\u6599\u5eab\u5b78\u7fd2",children:[]},{value:"AWS \u670d\u52d9",id:"aws-\u670d\u52d9",children:[]},{value:"AWS",id:"aws",children:[]}],m={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"document"},"Document"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Reference from ",(0,l.kt)("a",{parentName:"strong",href:"https://aws.amazon.com/tw/?nc2=h_lg"},"https://aws.amazon.com/tw/?nc2=h_lg"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8a3b\u518a\u5e33\u865f\u5f8c\u6709\u4e00\u5e74\u514d\u8cbb\u7684\u4f7f\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"EC2 (\u6bcf\u500b\u6708 750 \u5c0f\u6642\u53ef\u4ee5\u514d\u8cbb\u4f7f\u7528) \u82e5\u4f60\u662f\u5169\u500b\u865b\u64ec\u6a5f\u5c31\u662f\u5169\u500d\u5c0f\u6642\u5728\u6d88\u8017\u3002"))),(0,l.kt)("li",{parentName:"ol"},"\u767b\u5165\u5f8c\u8a18\u5f97\u5728\u53f3\u4e0a\u89d2\u9078\u64c7\u6771\u4eac\uff0c\u5728\u958b EC2"),(0,l.kt)("li",{parentName:"ol"},"\u9078\u64c7 Ubuntu \u6700\u65b0\u7248/\u9078\u64c7\u7da0\u8272\u6a19\u7c64\u7684\u514d\u8cbb\u65b9\u6848",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"instence \u9078\u64c7 1 \u958b\u4e00\u53f0"),(0,l.kt)("li",{parentName:"ul"},"\u786c\u789f\u514d\u8cbb\u662f 8G \uff08\u4f46\u4e4b\u5f8c\u90fd\u53ef\u4ee5\u518d\u52a0\u9322\u52a0\u88dd\uff0c\u9700\u8981\u91cd\u958b\u6a5f\u5c31\u662f\u4e86)"),(0,l.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a port\uff0c\u539f\u5247\u4e0a\u5168\u90e8 port \u90fd\u662f\u95dc\u9589\uff0c\u9700\u8981\u5728 ecurity Group \u8a2d\u5b9a)"),(0,l.kt)("li",{parentName:"ul"},"key pair(.pem \u6a94\u6848\u53ea\u80fd\u4e0b\u8f09\u4e00\u6b21\uff0c\u4e00\u5b9a\u8981\u59a5\u5584\u4fdd\u5b58)"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u958b\u8d77\u4f86\u5c31\u6703\u6709 Public IP\uff0c\u4f46\u662f\u662f\u6d6e\u52d5\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u53ef\u4ee5\u7528 SSH \u9023\u7dda(\u8981\u6539 pem \u7684\u6a94\u6848\u6b0a\u9650\u70ba 400\uff0c\u7528 pem \u9023\u4e0d\u7528\u6253\u5e33\u865f\u5bc6\u78bc\u76f4\u63a5\u9023\u7dda)"),(0,l.kt)("li",{parentName:"ul"},"\u865b\u64ec\u6a5f\u5167\u90e8\u662f\u4f7f\u7528\u865b\u64ec IP")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/r7vdB1v.png",alt:null})),(0,l.kt)("h3",{id:"mysql-\u8cc7\u6599\u5eab\u5b78\u7fd2"},"MySQL \u8cc7\u6599\u5eab\u5b78\u7fd2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SQLlite \u56e0\u70ba\u9ad4\u7a4d\u5c0f\uff0c\u901a\u5e38\u6703\u653e\u5728\u5d4c\u5165\u5f0f\u6216\u662f\u624b\u6a5f\u5167"),(0,l.kt)("li",{parentName:"ul"},"MariaDB \u662f MySQL \u4f5c\u8005\u5728\u958b\u767c\u7684\uff0c\u6545\u5b8c\u5168\u76f8\u5bb9\u53ef\u76f4\u63a5\u6cbf\u7528\uff0c\u53ef\u4ee5\u770b mysql \u6559\u7a0b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u5eab\u53ef\u4ee5\u60f3\u6210 Excel \u6a94\u6848\uff0c\u7576\u7136\u5b83\u7684\u529f\u80fd\u66f4\u5f37\u5927"),(0,l.kt)("li",{parentName:"ul"},"\u5beb\u7a0b\u5f0f\u5c31\u662f\u5728\u5beb\u6a23\u677f\uff0c\u904b\u884c\u7684\u6642\u5019\u518d\u628a\u8cc7\u6599\u9935\u9032\u53bb"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u4f60\u5beb\u7684\u7a0b\u5f0f\u53bb\u7ba1\u7406 mysql \u7684\u7a0b\u5f0f\uff0c\u8b93\u4f60\u4e0d\u7528\u81ea\u5df1\u523b")),(0,l.kt)("h3",{id:"aws-\u670d\u52d9"},"AWS \u670d\u52d9"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"AWS (Amazon Web Service)"),(0,l.kt)("li",{parentName:"ol"},"IAM (Indentity and Access Management)"),(0,l.kt)("li",{parentName:"ol"},"EC2 (Elastic Compute Cloud)"),(0,l.kt)("li",{parentName:"ol"},"S3 (Simple Storage Service)"),(0,l.kt)("li",{parentName:"ol"},"RDS (Relational Database Service)"),(0,l.kt)("li",{parentName:"ol"},"Aurora"),(0,l.kt)("li",{parentName:"ol"},"Budgets")),(0,l.kt)("h3",{id:"aws"},"AWS"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5efa\u7acb AWS free \u5e33\u865f"),(0,l.kt)("li",{parentName:"ol"},"\u5efa\u7acb AWS IAM \u5e33\u865f\u53ca\u6b0a\u9650"),(0,l.kt)("li",{parentName:"ol"},"\u5efa\u7acb EC2 \u865b\u64ec\u6a5f"),(0,l.kt)("li",{parentName:"ol"},"ssh EC2 use key-pair")))}s.isMDXComponent=!0}}]);