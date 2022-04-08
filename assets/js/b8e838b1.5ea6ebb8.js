"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2280],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,b=m["".concat(i,".").concat(f)]||m[f]||s[f]||l;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3781:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),a=["components"],u={slug:"setup-computer",title:"Setup Computer",authors:"oowe",tags:["Ubuntu","Docker","Ufw","Time Zone"]},i="Setup Computer",p={permalink:"/blog/blog/setup-computer",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-04-07-setup-computer.md",source:"@site/blog/2022-04-07-setup-computer.md",title:"Setup Computer",description:"Step by step are following:",date:"2022-04-07T00:00:00.000Z",formattedDate:"April 7, 2022",tags:[{label:"Ubuntu",permalink:"/blog/blog/tags/ubuntu"},{label:"Docker",permalink:"/blog/blog/tags/docker"},{label:"Ufw",permalink:"/blog/blog/tags/ufw"},{label:"Time Zone",permalink:"/blog/blog/tags/time-zone"}],readingTime:.125,truncated:!1,authors:[{name:"oowe",title:"Marker",url:"https://github.com/oowe",imageURL:"https://github.com/oowe.png",key:"oowe"}],nextItem:{title:"Backup Restore Function",permalink:"/blog/blog/backup-restore-function"}},c={authorsImageUrls:[void 0]},s=[{value:"Step by step are following:",id:"step-by-step-are-following",children:[]}],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"step-by-step-are-following"},"Step by step are following:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install Ubuntu 20.04.3 LTS Server"),(0,l.kt)("li",{parentName:"ol"},"Install Docker"),(0,l.kt)("li",{parentName:"ol"},"Install Docker-compose"),(0,l.kt)("li",{parentName:"ol"},"Setup Ufw"),(0,l.kt)("li",{parentName:"ol"},"Setup Time Zone")))}f.isMDXComponent=!0}}]);