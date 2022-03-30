"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9688],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},247:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={},u="Disk Full Error",s={unversionedId:"Linux/disk-full-error",id:"Linux/disk-full-error",isDocsHomePage:!1,title:"Disk Full Error",description:"query disk useage disk",source:"@site/docs/Linux/disk-full-error.md",sourceDirName:"Linux",slug:"/Linux/disk-full-error",permalink:"/blog/docs/Linux/disk-full-error",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Linux/disk-full-error.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chinese Input",permalink:"/blog/docs/Linux/chinese-input"},next:{title:"Htop",permalink:"/blog/docs/Linux/htop"}},c=[{value:"query disk useage disk",id:"query-disk-useage-disk",children:[]},{value:"list large folder",id:"list-large-folder",children:[]}],d={toc:c};function p(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"disk-full-error"},"Disk Full Error"),(0,o.kt)("h3",{id:"query-disk-useage-disk"},"query disk useage disk"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"df -h\n")),(0,o.kt)("h3",{id:"list-large-folder"},"list large folder"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6703\u5217\u51fa\u76ee\u9304\u4e0b\u8f03\u5927\u6a94\u6848\u7684\u8cc7\u6599\u593e\u540d\u7a31\u53ca\u5927\u5c0f"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~\ndu -sh *\n")))}p.isMDXComponent=!0}}]);