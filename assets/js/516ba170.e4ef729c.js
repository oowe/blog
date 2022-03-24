"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[787],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=u,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:u,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6511:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(7462),u=n(3366),o=(n(7294),n(3905)),a=["components"],l={},i="Ufw Setup",c={unversionedId:"Ubuntu/ufw-setup",id:"Ubuntu/ufw-setup",isDocsHomePage:!1,title:"Ufw Setup",description:"Install ufw",source:"@site/docs/Ubuntu/ufw-setup.md",sourceDirName:"Ubuntu",slug:"/Ubuntu/ufw-setup",permalink:"/blog/docs/Ubuntu/ufw-setup",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Ubuntu/ufw-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Targ.gz vs Zip \u6bd4\u8f03",permalink:"/blog/docs/Ubuntu/tar.gz-vs-zip"},next:{title:"Command",permalink:"/blog/docs/Visual Studio Code/command"}},s=[{value:"Install ufw",id:"install-ufw",children:[]},{value:"Config",id:"config",children:[]},{value:"Setup",id:"setup",children:[]}],p={toc:s};function f(e){var t=e.components,n=(0,u.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ufw-setup"},"Ufw Setup"),(0,o.kt)("h3",{id:"install-ufw"},"Install ufw"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y ufw\n")),(0,o.kt)("h3",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw status\nsudo ufw enable\nsudo ufw disable\nsudo ufw allow 80 (80/tcp, 80/udp)\nsudo ufw delete allow 80 (80/tcp, 80/udp)\n")),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y ufw\nsudo ufw status (Status: inactive)\nsudo ufw allow 22\nsudo ufw enable\nsudo ufw status\nsudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\nsudo ufw allow 3306\n")))}f.isMDXComponent=!0}}]);