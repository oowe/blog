"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1481],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),y=i,b=h["".concat(u,".").concat(y)]||h[y]||l[y]||o;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6218:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={},u="SSH Keypair Setup",c={unversionedId:"Github/SSH-keypair-setup",id:"Github/SSH-keypair-setup",isDocsHomePage:!1,title:"SSH Keypair Setup",description:"Reference from https://gist.github.com/developius/c81f021eb5c5916013dc?permalink_comment_id=3951138",source:"@site/docs/Github/SSH-keypair-setup.md",sourceDirName:"Github",slug:"/Github/SSH-keypair-setup",permalink:"/blog/docs/Github/SSH-keypair-setup",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Github/SSH-keypair-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Document",permalink:"/blog/docs/Flake8/document"},next:{title:"Document",permalink:"/blog/docs/Github/document"}},p=[{value:"<strong>It&#39;s effective for GitHub, GitHub, GitLab and BitBucket</strong>",id:"its-effective-for-github-github-gitlab-and-bitbucket",children:[{value:"<strong>Generate a SSH key pair (private/public):</strong>",id:"generate-a-ssh-key-pair-privatepublic",children:[]},{value:"<strong>Copy the contents of the public SSH key</strong>",id:"copy-the-contents-of-the-public-ssh-key",children:[]},{value:"<strong>Copy the public SSH key to GitHub</strong>",id:"copy-the-public-ssh-key-to-github",children:[]},{value:"<strong>Test the SSH key:</strong>",id:"test-the-ssh-key",children:[]},{value:"\u5efa SSH key",id:"\u5efa-ssh-key",children:[]}]}],l={toc:p};function h(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ssh-keypair-setup"},"SSH Keypair Setup"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reference from ",(0,o.kt)("a",{parentName:"strong",href:"https://gist.github.com/developius/c81f021eb5c5916013dc?permalink_comment_id=3951138"},"https://gist.github.com/developius/c81f021eb5c5916013dc?permalink_comment_id=3951138"))),(0,o.kt)("h2",{id:"its-effective-for-github-github-gitlab-and-bitbucket"},(0,o.kt)("strong",{parentName:"h2"},"It's effective for GitHub, GitHub, GitLab and BitBucket")),(0,o.kt)("h3",{id:"generate-a-ssh-key-pair-privatepublic"},(0,o.kt)("strong",{parentName:"h3"},"Generate a SSH key pair (private/public):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t rsa -b 4096 -C "example@test.com"\n')),(0,o.kt)("h3",{id:"copy-the-contents-of-the-public-ssh-key"},(0,o.kt)("strong",{parentName:"h3"},"Copy the contents of the public SSH key")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y xclip\nxclip -sel clip < ~/.ssh/id_rsa.pub\n")),(0,o.kt)("h3",{id:"copy-the-public-ssh-key-to-github"},(0,o.kt)("strong",{parentName:"h3"},"Copy the public SSH key to GitHub")),(0,o.kt)("p",null,"Copy the contents of the to your SSH keys to your GitHub account settings (","[https://github.com/settings/keys]"),(0,o.kt)("h3",{id:"test-the-ssh-key"},(0,o.kt)("strong",{parentName:"h3"},"Test the SSH key:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -T git@github.com\n")),(0,o.kt)("p",null,"Change directory into the local clone of your repository (if you're not already there) and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git remote set-url origin git@github.com:username/your-repository.git\n")),(0,o.kt)("p",null,"Now try editing a file (try the README) and then do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git add -A\ngit commit -am "Update README.md"\ngit push\n')),(0,o.kt)("p",null,"You should not be asked for a username or password. If it works, your SSH key is correctly configured."),(0,o.kt)("h3",{id:"\u5efa-ssh-key"},"\u5efa SSH key"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ssh-keygen -t rsa -C "{email}"\n     \u2013 t \u6307\u5b9a\u91d1\u9470\u578b\u5225\uff0c\u9810\u8a2d\u662f rsa \uff0c\u53ef\u4ee5\u7701\u7565\u3002\n     -C \u8a2d\u5b9a\u8a3b\u91cb\u6587\u5b57\uff0c\u5982mail\uff0c\u9019\u908a\u7684mail\u9700\u8981\u662f\u8a3b\u518aGitlab\u7684\u90a3\u500bmail\u3002\n     -f \u6307\u5b9a\u91d1\u9470\u6a94\u6848\u5132\u5b58\u6a94\u540d\u3002\n\u63a5\u4e0b\u4f86\u6309enter/enter/enter\n\u76f4\u5230\u7d50\u675f\n\ncat ~/.ssh/id_rsa.pub\n\u7136\u5f8c\u8907\u88fd\u88e1\u9762\u7684SSH key\n\u9032\u5165gitlab\n\u6309\u53f3\u4e0a\u89d2\u7684setting/\u9032\u5165SSH Keys/\u52a0\u5165SSH key\u53ca\u547d\u540d\u4e00\u500b\u540d\u5b57/\u6642\u9593\u53ef\u4ee5\u4e0d\u7528\u586b\n\u6e2c\u8a66\uff1a\u5728local\u7aef git clone (Clone with HTTPS URL)\u4e00\u6b21\u6642\uff0c\u4e0d\u7528\u8f38\u5165\u5e33\u865f\u5bc6\u78bc\u8868\u793a\u6210\u529f\u3002\n')))}h.isMDXComponent=!0}}]);