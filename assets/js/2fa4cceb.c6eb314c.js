"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8975],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4038:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],a={},c="Setup C++ Compiler",u={unversionedId:"Visual Studio Code/setup-cpp-compiler",id:"Visual Studio Code/setup-cpp-compiler",isDocsHomePage:!1,title:"Setup C++ Compiler",description:"Install extension",source:"@site/docs/Visual Studio Code/setup-cpp-compiler.md",sourceDirName:"Visual Studio Code",slug:"/Visual Studio Code/setup-cpp-compiler",permalink:"/blog/docs/Visual Studio Code/setup-cpp-compiler",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Visual Studio Code/setup-cpp-compiler.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/blog/docs/Visual Studio Code/command"},next:{title:"File lock problem",permalink:"/blog/docs/Visual Studio/resolve-file-lock-problem"}},p=[{value:"Install extension",id:"install-extension",children:[]},{value:"\u8a2d\u5b9a\u7de8\u8b6f\u6240\u6709\u6a94\u6848",id:"\u8a2d\u5b9a\u7de8\u8b6f\u6240\u6709\u6a94\u6848",children:[]}],s={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup-c-compiler"},"Setup C++ Compiler"),(0,i.kt)("h3",{id:"install-extension"},"Install extension"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"C/C++"),(0,i.kt)("li",{parentName:"ol"},"Code Runner")),(0,i.kt)("h3",{id:"\u8a2d\u5b9a\u7de8\u8b6f\u6240\u6709\u6a94\u6848"},"\u8a2d\u5b9a\u7de8\u8b6f\u6240\u6709\u6a94\u6848"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6253\u958b\u5c08\u6848\u4e0b\u7684.vscode/tasks.json")),(0,i.kt)("p",null,"\u5c07",(0,i.kt)("inlineCode",{parentName:"p"},"{file}"),"\u6539\u6210$",(0,i.kt)("inlineCode",{parentName:"p"},"{fileDirname}/\\*.cpp")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    "-fdiagnostics-color=always",\n    "-g",\n    "${fileDirname}/*.cpp",  //\u9019\u4e00\u884c\n    "-o",\n    "${fileDirname}/${fileBasenameNoExtension}"\n')))}m.isMDXComponent=!0}}]);