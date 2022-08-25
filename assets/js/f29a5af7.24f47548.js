"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[382],{3905:function(n,e,t){t.d(e,{Zo:function(){return m},kt:function(){return p}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var i=r.createContext({}),c=function(n){var e=r.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},m=function(n){var e=c(n.components);return r.createElement(i.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,i=n.parentName,m=s(n,["components","mdxType","originalType","parentName"]),u=c(t),p=o,f=u["".concat(i,".").concat(p)]||u[p]||d[p]||a;return t?r.createElement(f,l(l({ref:e},m),{},{components:t})):r.createElement(f,l({ref:e},m))}));function p(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,l=new Array(a);l[0]=u;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=n,s.mdxType="string"==typeof n?n:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5824:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],s={sidebar_position:1},i="Command",c={unversionedId:"NodeJS/command",id:"NodeJS/command",isDocsHomePage:!1,title:"Command",description:"Reference from https://www.vultr.com/docs/install-nvm-and-node-js-on-ubuntu-20-04/",source:"@site/docs/NodeJS/command.md",sourceDirName:"NodeJS",slug:"/NodeJS/command",permalink:"/blog/docs/NodeJS/command",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/NodeJS/command.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"TypeORM",permalink:"/blog/docs/NestJS/typeorm"},next:{title:"Document",permalink:"/blog/docs/OAuth/document"}},m=[{value:"Install NVM",id:"install-nvm",children:[]},{value:"Install NodeJS",id:"install-nodejs",children:[]},{value:"Jetson Xavier NX Install",id:"jetson-xavier-nx-install",children:[]},{value:"Install Node (from Binary file)",id:"install-node-from-binary-file",children:[]}],d={toc:m};function u(n){var e=n.components,t=(0,o.Z)(n,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command"},"Command"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reference from ",(0,a.kt)("a",{parentName:"strong",href:"https://www.vultr.com/docs/install-nvm-and-node-js-on-ubuntu-20-04/"},"https://www.vultr.com/docs/install-nvm-and-node-js-on-ubuntu-20-04/")),"\n",(0,a.kt)("strong",{parentName:"p"},"Reference from ",(0,a.kt)("a",{parentName:"strong",href:"https://www.casper.tw/development/2022/01/10/install-nvm/"},"https://www.casper.tw/development/2022/01/10/install-nvm/"))),(0,a.kt)("h3",{id:"install-nvm"},"Install NVM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash\n")),(0,a.kt)("h3",{id:"install-nodejs"},"Install NodeJS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#To install a specific version of Node.JS, specify the desired version number.\n$ nvm install 6.14.4\n\n#To install the latest release of node, use node, which is an alias for the latest version.\n$ nvm install node\n\n#Test your node installation.\n$ node -v\n\n#Direct install via apt\nsudo apt install -y nodejs\nsudo apt install -y npm\n\n### macos install nvm\n```zsh=\n#refence\nhttps://github.com/nvm-sh/nvm#installing-and-updating  \n\n#install\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/{version}/install.sh | bash\n\n#source\nsource ~/.zshrc\n\n")),(0,a.kt)("p",null,"nvm ls-remote\uff1a\u5217\u51fa\u76ee\u524d\u53ef\u7528\u7684\u9060\u7aef Node.js \u7248\u672c\nnvm install \uff1a\u5b89\u88dd\u7279\u5b9a\u7248\u672c\u7684 Node.js\nnvm ls\uff1a\u5217\u51fa\u672c\u5b9a\u7aef\u6240\u5b89\u88dd\u7684 Node.js \u74b0\u5883\nnvm alias default node\uff1a\u8a2d\u5b9a\u547d\u4ee4\u5217\u9810\u8a2d\u958b\u555f\u7684 Node.js \u7248\u672c\nnvm use\uff1a\u7576\u524d\u547d\u4ee4\u5217\u5957\u7528\u7279\u5b9a\u7248\u672c\u7684 Node.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n### NVM command\n\n")),(0,a.kt)("p",null,"#NodeJS version list\nnvm list"),(0,a.kt)("p",null,"#NVM use specific nodejs version\nnvm use v12.13.0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n### APT Install\n\n```bash\nsudo apt install -y nodejs\nsudo apt install -y npm\n")),(0,a.kt)("h3",{id:"jetson-xavier-nx-install"},"Jetson Xavier NX Install"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reference from ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/nodejs/help/wiki/Installation#how-to-install-nodejs-via-binary-archive-on-aix"},"https://github.com/nodejs/help/wiki/Installation#how-to-install-nodejs-via-binary-archive-on-aix"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u4e0b\u8f09binary\u6a94\u6848\nhttps://nodejs.org/zh-tw/download/\n\u9078\u64c7armv8 binary\n1. \u89e3\u58d3\u7e2e\u5230 /home/{username}/software/node-v14.17.3-linux-arm64\n2. vim ~/.profile\n    add\n     # Nodejs\n     export PATH=/home/{username}/software/node-v14.17.3-linux-arm64/bin:$PATH\n3.  . ~/.profile\n4. \u67e5\u770b\u7248\u672c\u865f\n    node -v\n    npm -v\n")),(0,a.kt)("h3",{id:"install-node-from-binary-file"},"Install Node (from Binary file)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd node-v10.19.0\n./configure\nmake -j4\nmake install\n")))}u.isMDXComponent=!0}}]);