"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5179],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return s}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=c(t),s=o,f=y["".concat(l,".").concat(s)]||y[s]||m[s]||a;return t?n.createElement(f,p(p({ref:r},u),{},{components:t})):n.createElement(f,p({ref:r},u))}));function s(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=y;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2863:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),p=["components"],i={},l="Omxplayer",c={unversionedId:"Rasberrypi3/omxplayer",id:"Rasberrypi3/omxplayer",isDocsHomePage:!1,title:"Omxplayer",description:"`",source:"@site/docs/Rasberrypi3/omxplayer.md",sourceDirName:"Rasberrypi3",slug:"/Rasberrypi3/omxplayer",permalink:"/blog/docs/Rasberrypi3/omxplayer",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Rasberrypi3/omxplayer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/blog/docs/Rasberrypi3/command"},next:{title:"Command",permalink:"/blog/docs/Ruby/command"}},u=[{value:"Python Code \u63a7\u5236",id:"python-code-\u63a7\u5236",children:[]}],m={toc:u};function y(e){var r=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"omxplayer"},"Omxplayer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u6a39\u8393\u6d3e\u4e2d\u7684CPU\u6027\u80fd\u8f03\u5dee\uff0c\u800cGPU\u8f03\u5f37\u5927\u3002\n\nomxplayer\u662f\u5c08\u9580\u91dd\u5c0d\u6a39\u8393\u6d3e\u7684GPU\u7684\u64ad\u653e\u5668\u3002\u8a72GPU\uff08VideoCore\uff09\u63d0\u4f9b\u7684\u5b98\u65b9API\u63a5\u53e3\u662fOpenMAX\u3002\u4e5f\u5c31\u662f\u8aac\u8981\u60f3\u5145\u5206\u5229\u7528GPU\u4f86\u7de8\u7a0b\uff0c\u5176\u4e2d\u4e00\u7a2e\u9014\u5f91\u662f\u4f7f\u7528OpenMAX.\u4f46\u662f\uff0cOpenMAX\u597d\u50cf\u5f88\u96e3\u7528\u3002\n\u6a39\u8393\u6d3e\u4e0a\u53ef\u4ee5\u64ad\u653e H264 \u548c mp4 \u7b49\u8996\u983b\u683c\u5f0f\uff0c1080p\u4e5f\u6c92\u554f\u984c\uff0c\u56e0\u70ba\u9019\u7a2e\u683c\u5f0f\u7684\u6587\u6a94\u6709\u786c\u4ef6\u52a0\u901f\u3002\n\n\u9996\u5148\u5b89\u88dd omxplayer \uff0c\u9019\u662f\u4e00\u500b\u547d\u4ee4\u884c\u7684\u64ad\u653e\u5668\uff1a\nsudo apt-get install omxplayer\n\u7136\u540e\u5c31\u53ef\u4ee5\u64ad\u653e\u4e86\uff0c\u5f53\u7136\u9700\u8981\u901a\u8fc7 HDMI \u8fde\u63a5\u5230\u663e\u793a\u5668\u770b\uff1a\nomxplayer -o hdmi /path/to/filename.mp4\n-o hdmi \u8868\u793a\u97f3\u9891\u76f4\u63a5\u901a\u8fc7 HDMI \u64ad\u653e\uff0c\u64ad\u653e\u65f6\u6309\u5de6\u53f3\u7bad\u5934\u5feb\u8fdb\u3001\u6309 q \u9000\u51fa\u3002\n")),(0,a.kt)("h3",{id:"python-code-\u63a7\u5236"},"Python Code \u63a7\u5236"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from omxplayer import OMXPlayer\nfrom pathlib import Path\nfrom time import sleep\nVIDEO_PATH = Path("{path}")#\u52a0\u7c97\u7684\u6587\u5b57\u8bf7\u81ea\u884c\u66ff\u6362\u6210\u81ea\u5df1\u7684\u8def\u5f84\u8ddf\u6587\u4ef6\u540d\nplayer = OMXPlayer(VIDEO_PATH)\nsleep(15)\nplayer.quit()\n')))}y.isMDXComponent=!0}}]);