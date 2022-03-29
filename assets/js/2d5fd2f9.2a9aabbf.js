"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2128],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(t),d=r,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4912:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_position:1},s="Command",m={unversionedId:"Postman/command",id:"Postman/command",isDocsHomePage:!1,title:"Command",description:"Install postman",source:"@site/docs/Postman/command.md",sourceDirName:"Postman",slug:"/Postman/command",permalink:"/blog/docs/Postman/command",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Postman/command.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/blog/docs/PostgreSQL/command"},next:{title:"Command",permalink:"/blog/docs/Python/command"}},c=[{value:"Install postman",id:"install-postman",children:[]},{value:"\u74b0\u5883\u53c3\u6578\u8a2d\u5b9a",id:"\u74b0\u5883\u53c3\u6578\u8a2d\u5b9a",children:[]},{value:"\u8cc7\u6599\u593e\u8a2d\u5b9a",id:"\u8cc7\u6599\u593e\u8a2d\u5b9a",children:[]},{value:"AlmaLinux Install",id:"almalinux-install",children:[]}],p={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command"},"Command"),(0,o.kt)("h3",{id:"install-postman"},"Install postman"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap install postman\n")),(0,o.kt)("h3",{id:"\u74b0\u5883\u53c3\u6578\u8a2d\u5b9a"},"\u74b0\u5883\u53c3\u6578\u8a2d\u5b9a"),(0,o.kt)("p",null,"\u9700\u8981\u586b\u5165 token \u548c ip \u5728 Current value\n\u53ef\u4ee5\u62ff refeshToken \u586b\u5728 token \u4e0a\uff0c\u6642\u9593\u6bd4\u8f03\u9577"),(0,o.kt)("h3",{id:"\u8cc7\u6599\u593e\u8a2d\u5b9a"},"\u8cc7\u6599\u593e\u8a2d\u5b9a"),(0,o.kt)("p",null,"\u65b0\u958b\u7684\u7fa4\u7d44\u8cc7\u6599\u593e\uff0c\u8981\u8a2d\u5b9a\u5403\u7684 token \u53c3\u6578\u540d\u7a31\n{{token}} \u5c31\u4ee3\u8868\u6703\u5403\u74b0\u5883\u8b8a\u6578\u8a2d\u5b9a\u7684 token \u53c3\u6578"),(0,o.kt)("h3",{id:"almalinux-install"},"AlmaLinux Install"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Almuxlinux \u9810\u88dd\u7248\u672c\u70ba 5.5 \u7248",(0,o.kt)("br",{parentName:"p"}),"\n","\u4f46\u6700\u65b0\u7248\u672c\u662f 8.12.4 (2021.09.15)",(0,o.kt)("br",{parentName:"p"}),"\n","\u7528\u4ee5\u4e0b\u6307\u4ee4\u5b89\u88dd\u5427\uff0c\u6703\u4fdd\u7559\u820a\u7248\u4f46\u6c92\u95dc\u4fc2  "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install epel-release\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install snapd\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now snapd.socket\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ln -s /var/lib/snapd/snap /snap\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap install postman\n")))}u.isMDXComponent=!0}}]);