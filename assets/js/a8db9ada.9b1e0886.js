"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[672],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,b=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6787:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},c="Document",p={unversionedId:"Github/document",id:"Github/document",isDocsHomePage:!1,title:"Document",description:"\u5efa\u7acb\u500b\u4eba\u7684\u9801\u9762 README \u65b9\u6cd5",source:"@site/docs/Github/document.md",sourceDirName:"Github",slug:"/Github/document",permalink:"/blog/docs/Github/document",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Github/document.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSH Keypair Setup",permalink:"/blog/docs/Github/SSH-keypair-setup"},next:{title:"Document",permalink:"/blog/docs/Gmail/document"}},u=[{value:"\u5efa\u7acb\u500b\u4eba\u7684\u9801\u9762 README \u65b9\u6cd5",id:"\u5efa\u7acb\u500b\u4eba\u7684\u9801\u9762-readme-\u65b9\u6cd5",children:[]},{value:"\u522a\u9664 Repository \u65b9\u6cd5",id:"\u522a\u9664-repository-\u65b9\u6cd5",children:[]},{value:"\u5efa access token",id:"\u5efa-access-token",children:[]},{value:"project ID",id:"project-id",children:[]},{value:"Gitlab",id:"gitlab",children:[]},{value:"gitlab pipeline with GCR",id:"gitlab-pipeline-with-gcr",children:[]},{value:"setup .gitlab-ci.yaml",id:"setup-gitlab-ciyaml",children:[]}],s={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"document"},"Document"),(0,o.kt)("h3",{id:"\u5efa\u7acb\u500b\u4eba\u7684\u9801\u9762-readme-\u65b9\u6cd5"},"\u5efa\u7acb\u500b\u4eba\u7684\u9801\u9762 README \u65b9\u6cd5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u548c\u4f7f\u7528\u8005\u540c\u540d\u7684 Repository"),(0,o.kt)("li",{parentName:"ol"},"\u5efa\u7acb README.md"),(0,o.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5167\u6587\u5373\u53ef")),(0,o.kt)("h3",{id:"\u522a\u9664-repository-\u65b9\u6cd5"},"\u522a\u9664 Repository \u65b9\u6cd5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9032\u5165 Repository"),(0,o.kt)("li",{parentName:"ol"},"\u9ede\u9078 settings"),(0,o.kt)("li",{parentName:"ol"},"\u62c9\u5230\u6700\u4e0b\u9762/\u9ede\u9078 Delete this repository"),(0,o.kt)("li",{parentName:"ol"},"\u9375\u5165\u4f7f\u7528\u8005/Repository \u8cc7\u8a0a\u5373\u53ef\u522a\u9664")),(0,o.kt)("h3",{id:"\u5efa-access-token"},"\u5efa access token"),(0,o.kt)("p",null,"login gitlab/\u9ede\u4eba\u982d\u5716\u793a/Settings/Access_Tokens",(0,o.kt)("br",{parentName:"p"}),"\n","\u8f38\u5165\u5efa\u7acb\u7684 token name(\u96a8\u4fbf)",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e0d\u8f38\u5165\u6700\u5f8c\u671f\u9650",(0,o.kt)("br",{parentName:"p"}),"\n","\u9078\u64c7\u5168\u90e8\u6b0a\u9650",(0,o.kt)("br",{parentName:"p"}),"\n","\u5efa\u7acb token",(0,o.kt)("br",{parentName:"p"}),"\n","\u6703\u51fa\u73fe\u6b64\u6b21\u7522\u751f\u51fa\u4f86\u7684 token(\u53ea\u6703\u986f\u793a\u4e00\u6b21\u8acb\u8a18\u4e0b\u4f86)",(0,o.kt)("br",{parentName:"p"}),"\n","(-8QS4GARp3tx4XquMyS9)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/hdlwZb9.png",alt:null})),(0,o.kt)("h3",{id:"project-id"},"project ID"),(0,o.kt)("p",null,"\u9ede\u5230\u5c08\u6848\u4e0a\u9762\u5c31\u6703\u6709 project id"),(0,o.kt)("h3",{id:"gitlab"},"Gitlab"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5206\u6210 GitLab CE\uff08\u793e\u7fa4\u7248\uff09\u8207 GitLab EE\uff08\u4f01\u696d\u7248\uff09\uff0c\u514d\u8cbb\u7248\u53ca\u4ed8\u8cbb\u7248"),(0,o.kt)("li",{parentName:"ol"},"gitlab issue \u82e5\u8981\u522a\u9664\u53ea\u6709Ower\u53ef\u4ee5\u57f7\u884c\uff0c\u5728\u7de8\u8f2f\u5167\u6709\u4e00\u500bDelete issue \u7d05\u8272icon")),(0,o.kt)("h3",{id:"gitlab-pipeline-with-gcr"},"gitlab pipeline with GCR"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"reference from: ",(0,o.kt)("a",{parentName:"strong",href:"https://www.gaia.net/tc/news_detail/2/123"},"https://www.gaia.net/tc/news_detail/2/123"))),(0,o.kt)("h3",{id:"setup-gitlab-ciyaml"},"setup .gitlab-ci.yaml"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reference from: ",(0,o.kt)("a",{parentName:"strong",href:"https://ithelp.ithome.com.tw/articles/10219427"},"https://ithelp.ithome.com.tw/articles/10219427"))))}m.isMDXComponent=!0}}]);