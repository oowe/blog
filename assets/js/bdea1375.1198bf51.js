"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[262],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3370:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],u={},i="Command",l={unversionedId:"Docusaurus2/command",id:"Docusaurus2/command",isDocsHomePage:!1,title:"Command",description:"\u4e0b\u8f09\u5efa\u7acb\u6a21\u677f",source:"@site/docs/Docusaurus2/command.md",sourceDirName:"Docusaurus2",slug:"/Docusaurus2/command",permalink:"/blog/docs/Docusaurus2/command",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Docusaurus2/command.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/blog/docs/tutorial-extras/translate-your-site"},next:{title:"SSH Keypair Setup",permalink:"/blog/docs/Github/SSH-keypair-setup"}},p=[{value:"\u4e0b\u8f09\u5efa\u7acb\u6a21\u677f",id:"\u4e0b\u8f09\u5efa\u7acb\u6a21\u677f",children:[]},{value:"Depoly",id:"depoly",children:[]}],s={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command"},"Command"),(0,a.kt)("h3",{id:"\u4e0b\u8f09\u5efa\u7acb\u6a21\u677f"},"\u4e0b\u8f09\u5efa\u7acb\u6a21\u677f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx @docusaurus/init@latest init my-blog classic --typescript\n\n-init my-blog: \u5efa\u7acb\u4e3b\u8cc7\u6599\u593e\u540d\u70bamy-blog\n-classic: \u5b8c\u6574\u5957\u4ef6\n-- typescript: \u4f7f\u7528typescript\u8a9e\u8a00\n")),(0,a.kt)("h3",{id:"depoly"},"Depoly"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GIT_USER={github_username} CURRENT_BRANCH=main USE_SSH=true npm run deploy\n")))}m.isMDXComponent=!0}}]);