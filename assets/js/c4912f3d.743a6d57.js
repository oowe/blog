"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6366],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=l(t),f=i,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(d,u(u({ref:n},s),{},{components:t})):r.createElement(d,u({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,u=new Array(o);u[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,u[1]=a;for(var l=2;l<o;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2457:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),u=["components"],a={},c="Chinese Input",l={unversionedId:"AlmaLinux/chinese-input",id:"AlmaLinux/chinese-input",isDocsHomePage:!1,title:"Chinese Input",description:"Install chinese input",source:"@site/docs/AlmaLinux/chinese-input.md",sourceDirName:"AlmaLinux",slug:"/AlmaLinux/chinese-input",permalink:"/blog/docs/AlmaLinux/chinese-input",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/AlmaLinux/chinese-input.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/blog/docs/AlmaLinux/command"},next:{title:"Document",permalink:"/blog/docs/Althttpd/document"}},s=[{value:"Install chinese input",id:"install-chinese-input",children:[]}],p={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chinese-input"},"Chinese Input"),(0,o.kt)("h3",{id:"install-chinese-input"},"Install chinese input"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum update\n\nsudo yum install -y ibus-libzhuyin.x86_64\n\nibus restart\n\nsettings/Region & Language/Input Source/+/Chinese (New Zhuyin)\n")))}m.isMDXComponent=!0}}]);