"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8241],{3905:function(e,o,n){n.d(o,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function c(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?c(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function a(e,o){if(null==e)return{};var n,r,t=function(e,o){if(null==e)return{};var n,r,t={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var m=r.createContext({}),p=function(e){var o=r.useContext(m),n=o;return e&&(n="function"==typeof e?e(o):s(s({},o),e)),n},u=function(e){var o=p(e.components);return r.createElement(m.Provider,{value:o},e.children)},i={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},l=r.forwardRef((function(e,o){var n=e.components,t=e.mdxType,c=e.originalType,m=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(n),d=t,f=l["".concat(m,".").concat(d)]||l[d]||i[d]||c;return n?r.createElement(f,s(s({ref:o},u),{},{components:n})):r.createElement(f,s({ref:o},u))}));function d(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var c=n.length,s=new Array(c);s[0]=l;var a={};for(var m in o)hasOwnProperty.call(o,m)&&(a[m]=o[m]);a.originalType=e,a.mdxType="string"==typeof e?e:t,s[1]=a;for(var p=2;p<c;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},4439:function(e,o,n){n.r(o),n.d(o,{contentTitle:function(){return m},default:function(){return l},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var r=n(7462),t=n(3366),c=(n(7294),n(3905)),s=["components"],a={},m="Docker Compose",p={unversionedId:"Docker/docker-compose",id:"Docker/docker-compose",isDocsHomePage:!1,title:"Docker Compose",description:"`bash",source:"@site/docs/Docker/docker-compose.md",sourceDirName:"Docker",slug:"/Docker/docker-compose",permalink:"/blog/docs/Docker/docker-compose",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Docker/docker-compose.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/blog/docs/Docker/command"},next:{title:"Command",permalink:"/blog/docs/Docusaurus2/command"}},u=[],i={toc:u};function l(e){var o=e.components,n=(0,t.Z)(e,s);return(0,c.kt)("wrapper",(0,r.Z)({},i,n,{components:o,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"docker-compose"},"Docker Compose"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'\u5b89\u88ddDocker-compose\nsudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\nsudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose\n#arm64\nsudo apt install docker-compose #\u572818.04\u652f\u63f4\u9019\u6a23\u5b89\u88dd\n\n\n\n\u67e5\u8a62\u7248\u672c\ndocker-compose -v\ndocker-compose version 1.29.2, build 5becea4c\n\n\u5efa\u7acb\u6a94\u6848\nvim docker-compose.yml\n\n\u57f7\u884cdocker-compose\ndocker-compose up -d\n-d \u662f\u6307\u5728\u80cc\u666f\u57f7\u884c\n\n\u53ea\u57f7\u884c\u7279\u5b9a\u5bb9\u5668\ndocker-compose up -d ems-db\n\n\u67e5\u8a62ps\ndocker-compose ps\n\n\u67e5\u8a62log\ndocker-compose logs <container_name>\n\n\u505c\u6b62\ndocker-compose stop\n\n\u79fb\u9664\u6240\u6709\ndocker-compose rm -fs\n-f\u8868\u793a\u4e0d\u9700\u518d\u6b21\u8a62\u554f\u662f\u5426\u522a\u9664\u63d0\u793a\n-s\u6703\u81ea\u52d5\u66ab\u505c\u6240\u6709\u6b63\u5728\u904b\u884c\u7684container\n\ndocker-compose set network in host\nnetwork_mode: "host"\n\n\n\u8981\u52a0voluumes\nvolumes:\n- /home/ardomus/ems-opt/db-vol:/var/lib/mysql\n\ncomment \u65b9\u5f0f\n#\n')))}l.isMDXComponent=!0}}]);