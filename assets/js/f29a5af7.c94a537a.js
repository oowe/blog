"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[382],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),p=o,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5824:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={sidebar_position:1},s="Command",c={unversionedId:"NodeJS/command",id:"NodeJS/command",isDocsHomePage:!1,title:"Command",description:"Reference from https://www.vultr.com/docs/install-nvm-and-node-js-on-ubuntu-20-04/",source:"@site/docs/NodeJS/command.md",sourceDirName:"NodeJS",slug:"/NodeJS/command",permalink:"/blog/docs/NodeJS/command",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/NodeJS/command.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"TypeORM",permalink:"/blog/docs/NestJS/typeorm"},next:{title:"Command",permalink:"/blog/docs/OpenADR/command"}},d=[{value:"Install NVM",id:"install-nvm",children:[]},{value:"Install NodeJS",id:"install-nodejs",children:[]},{value:"NVM command",id:"nvm-command",children:[]},{value:"APT Install",id:"apt-install",children:[]},{value:"Jetson Xavier NX Install (by binary file)",id:"jetson-xavier-nx-install-by-binary-file",children:[]}],m={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command"},"Command"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reference from ",(0,a.kt)("a",{parentName:"strong",href:"https://www.vultr.com/docs/install-nvm-and-node-js-on-ubuntu-20-04/"},"https://www.vultr.com/docs/install-nvm-and-node-js-on-ubuntu-20-04/"))),(0,a.kt)("h3",{id:"install-nvm"},"Install NVM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash\n")),(0,a.kt)("h3",{id:"install-nodejs"},"Install NodeJS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#To install a specific version of Node.JS, specify the desired version number.\n$ nvm install 6.14.4\n\n#To install the latest release of node, use node, which is an alias for the latest version.\n$ nvm install node\n\n#Test your node installation.\n$ node -v\n\n#Direct install via apt\nsudo apt install -y nodejs\nsudo apt install -y npm\n")),(0,a.kt)("h3",{id:"nvm-command"},"NVM command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#NodeJS version list\nnvm list\n\n#NVM use specific nodejs version\nnvm use v12.13.0\n")),(0,a.kt)("h3",{id:"apt-install"},"APT Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y nodejs\nsudo apt install -y npm\n")),(0,a.kt)("h3",{id:"jetson-xavier-nx-install-by-binary-file"},"Jetson Xavier NX Install (by binary file)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reference from ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/nodejs/help/wiki/Installation#how-to-install-nodejs-via-binary-archive-on-aix"},"https://github.com/nodejs/help/wiki/Installation#how-to-install-nodejs-via-binary-archive-on-aix"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u4e0b\u8f09binary\u6a94\u6848\nhttps://nodejs.org/zh-tw/download/\n\u9078\u64c7armv8 binary\n1. \u89e3\u58d3\u7e2e\u5230 /home/{username}/software/node-v14.17.3-linux-arm64\n2. vim ~/.profile\n    add\n     # Nodejs\n     export PATH=/home/{username}/software/node-v14.17.3-linux-arm64/bin:$PATH\n3.  . ~/.profile\n4. \u67e5\u770b\u7248\u672c\u865f\n    node -v\n    npm -v\n")))}u.isMDXComponent=!0}}]);