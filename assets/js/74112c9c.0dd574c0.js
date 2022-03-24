"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7639],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),m=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(c.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=m(n),u=r,d=s["".concat(c,".").concat(u)]||s[u]||g[u]||i;return n?a.createElement(d,o(o({ref:e},p),{},{components:n})):a.createElement(d,o({ref:e},p))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5202:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},c="Command",m={unversionedId:"Git/command",id:"Git/command",isDocsHomePage:!1,title:"Command",description:"git clone",source:"@site/docs/Git/command.md",sourceDirName:"Git",slug:"/Git/command",permalink:"/blog/docs/Git/command",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Git/command.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/blog/docs/Docusaurus2/command"},next:{title:"SSH Keypair Setup",permalink:"/blog/docs/Github/SSH-keypair-setup"}},p=[{value:"git clone",id:"git-clone",children:[]},{value:"\u66ab\u5b58\u7576\u524d\u7684 code \u4e26\u56de\u5230\u6700\u65b0\u7684 commit",id:"\u66ab\u5b58\u7576\u524d\u7684-code-\u4e26\u56de\u5230\u6700\u65b0\u7684-commit",children:[]},{value:"\u547c\u53eb\u56de\u539f\u672c\u7684 code",id:"\u547c\u53eb\u56de\u539f\u672c\u7684-code",children:[]},{value:"Notes",id:"notes",children:[]},{value:"git cz",id:"git-cz",children:[]},{value:"Reposity config",id:"reposity-config",children:[]},{value:"merge \u64cd\u4f5c",id:"merge-\u64cd\u4f5c",children:[]}],g={toc:p};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"command"},"Command"),(0,i.kt)("h3",{id:"git-clone"},"git clone"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global http.sslverify false\n")),(0,i.kt)("h3",{id:"\u66ab\u5b58\u7576\u524d\u7684-code-\u4e26\u56de\u5230\u6700\u65b0\u7684-commit"},"\u66ab\u5b58\u7576\u524d\u7684 code \u4e26\u56de\u5230\u6700\u65b0\u7684 commit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git stash -u\n")),(0,i.kt)("h3",{id:"\u547c\u53eb\u56de\u539f\u672c\u7684-code"},"\u547c\u53eb\u56de\u539f\u672c\u7684 code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git stash pop\n")),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reference from ",(0,i.kt)("a",{parentName:"strong",href:"http://www.kaochenlong.com"},"http://www.kaochenlong.com")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Reference from ",(0,i.kt)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=LgTf7m5B0xA&ab_channel=%E9%AB%98%E8%A6%8B%E9%BE%8D"},"https://www.youtube.com/watch?v=LgTf7m5B0xA&ab_channel=%E9%AB%98%E8%A6%8B%E9%BE%8D"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"git add . == git add --all"),(0,i.kt)("li",{parentName:"ol"},"\u4f46 git add --all \u662f\u5728\u4f4d\u65bc\u6bcf\u500b\u8cc7\u6599\u593e\u90fd\u9069\u7528"),(0,i.kt)("li",{parentName:"ol"},"\u4f46 git add .\u53ea\u6709\u5728\u6839\u76ee\u9304\u6709\u7528"),(0,i.kt)("li",{parentName:"ol"},"git \u53ea\u5728\u4e4e\u7684\u5167\u5bb9\u4e0d\u5728\u4e4e\u6a94\u6848\u7684\u540d\u7a31\uff0c\u6a94\u6848\u540d\u7a31\u5b58\u5728 tree \u5167"),(0,i.kt)("li",{parentName:"ol"},"git \u90fd\u7d00\u9304\u65b0\u7684\u90e8\u5206\uff0c\u820a\u7684\u6c92\u6709\u66f4\u52d5\u5c31\u6703\u6307\u5230\u4e0a\u4e00\u500b commit"),(0,i.kt)("li",{parentName:"ol"},"Sha-1"),(0,i.kt)("li",{parentName:"ol"},"git \u5167\u6709\u56db\u7a2e\u7269\u4ef6\uff0cblob(\u653e\u6a94\u6848)\uff0ctree(\u653e\u76ee\u9304)\uff0ccommit \u53ca tag"),(0,i.kt)("li",{parentName:"ol"},"untrack (\u91dd\u5c0d\u6a94\u6848\uff09"),(0,i.kt)("li",{parentName:"ol"},"git add .(\u52a0\u5165\u7d22\u5f15\u5340)"),(0,i.kt)("li",{parentName:"ol"},"\u4f60\u82e5\u662f\u52a0\u5165\u6c92\u6709\u6a94\u6848\u7684\u8cc7\u6599\u593e\uff0cgit \u6703\u5ffd\u7565"),(0,i.kt)("li",{parentName:"ol"},"modified \u72c0\u614b"),(0,i.kt)("li",{parentName:"ol"},"\u6709\u52d5\u7684\u6a94\u6848\u6703\u7522\u751f\u65b0\u7684 blob \u7269\u4ef6"),(0,i.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u53e6\u4e00\u500b\u526f\u6a94\u540d\u7684\u6a94\u6848\u4f46\u5176\u5167\u5bb9\u548c\u4e4b\u524d\u4e00\u500b\u6a94\u6848\u76f8\u540c\uff0c\u7d93\u904e sha-1 \u6f14\u7b97\u6cd5\u5f97\u5230\u7684\u503c\u6703\u4e00\u6a23\uff0c\u6545\u4e0d\u5efa\u7acb\u65b0\u7684 blob \u7269\u4ef6\uff0c\u5247\u662f\u6307\u5230\u4e4b\u524d\u7684\u3002"),(0,i.kt)("li",{parentName:"ol"},"git count-object (blob+tree+commit)"),(0,i.kt)("li",{parentName:"ol"},"git reset --mixed(default)->(\u653e\u56de\u5de5\u4f5c\u5340), --soft(\u5c07 commit \u7684\u5167\u5bb9\u653e\u56de\u7d22\u5f15\u5340) --hard(\u76f4\u63a5\u653e\u68c4\u672a commit \u7684\u6a94\u6848)"),(0,i.kt)("li",{parentName:"ol"},"\u95dc\u65bc branch\uff0c\u5206\u652f\u5c31\u662f\u6307\u5411\u67d0\u4e00\u500b commit \u7684\u6a94\u6848(\u53ea\u662f\u4e00\u4e32\u6587\u5b57)"),(0,i.kt)("li",{parentName:"ol"},"\u5728.git/refs/heads/master"),(0,i.kt)("li",{parentName:"ol"},"git branch cat"),(0,i.kt)("li",{parentName:"ol"},"head \u5c31\u662f\u6307\u5411\u67d0\u4e00\u500b\u5206\u652f(branch)\u7684\u6307\u6a19\uff0c\u4e5f\u53ea\u662f\u4e00\u500b\u6a94\u6848"),(0,i.kt)("li",{parentName:"ol"},"\u4f46 git \u600e\u9ebc\u77e5\u9053\u73fe\u5728\u662f\u54ea\u4e00\u500b branch"),(0,i.kt)("li",{parentName:"ol"},"git branch \u53ef\u4ee5\u67e5\u53ca\uff0ccat .git/HEAD"),(0,i.kt)("li",{parentName:"ol"},"git checkout dog (\u5207\u63db branch"),(0,i.kt)("li",{parentName:"ol"},"checkout \u505a\u7684\u4e8b\u60c5(1)\u628a repo \u88e1\u7684\u6771\u897f\u642c\u4e00\u4efd\u51fa\u4f86(2)\u66f4\u63db.git/HEAD \u5167\u5bb9"),(0,i.kt)("li",{parentName:"ol"},"A merge B \u548c B mergeA \u6709\u4ec0\u9ebc\u4e0d\u4e00\u6a23?\u7b54\u6848\u662f\u4e00\u6a23\uff0c\u4f46\u6d41\u7a0b\u4e0d\u540c"),(0,i.kt)("li",{parentName:"ol"},"git reset HEAD^ --hard"),(0,i.kt)("li",{parentName:"ol"},"\u5728 checkout \u548c merge \u7684\u57f7\u884c\uff0c\u5176\u5be6\u5c31\u662f\u5206\u652f\u548c HEAD \u7684\u79fb\u52d5\u800c\u5df2"),(0,i.kt)("li",{parentName:"ol"},"rebase vs merge"),(0,i.kt)("li",{parentName:"ol"},"\u5c0d\u9084\u6c92\u6709 commit \u7684\u5206\u652f\u53ef\u4ee5\u4f7f\u7528 rebase"),(0,i.kt)("li",{parentName:"ol"},"rebase \u5c31\u662f\u66f4\u63db\u57fa\u5e95\uff0c\u6703\u66f4\u63db sha1 \u503c"),(0,i.kt)("li",{parentName:"ol"},"\u5408\u4f75\u904e\u7684\u5206\u652f\u53ef\u4ee5\u780d\u6389\u7684"),(0,i.kt)("li",{parentName:"ol"},"\u4f60\u82e5\u8981\u522a\u9664\u5206\u652f\uff0c\u4eba\u4e0d\u80fd\u5728\u90a3\u500b\u5206\u652f\u4e0a\u9762"),(0,i.kt)("li",{parentName:"ol"},"git rev-parse cat (\u67e5\u8a62 sha1 \u503c\u7528)"),(0,i.kt)("li",{parentName:"ol"},"git branch -d cat\uff0c\u82e5\u56de\u50b3 the branch 'cat' is not fully merged."),(0,i.kt)("li",{parentName:"ol"},"\u5247\u9700\u8981\u4f7f\u7528 git branch -D cat"),(0,i.kt)("li",{parentName:"ol"},"\u90a3\u8981\u600e\u9ebc\u6062\u5fa9 cat branch? \u5efa\u7acb\u4e00\u500b\u65b0\u7684 branch \u4e26\u7d66\u4e88 cat \u7684 sha1 \u503c\u5373\u53ef\uff0cgit branch new_cat 65eifo123jgov"),(0,i.kt)("li",{parentName:"ol"},"git HEAD~2 --hard"),(0,i.kt)("li",{parentName:"ol"},"git reflog (\u67e5\u8a62\u6b65\u9a5f\u7684 sha1 \u503c)"),(0,i.kt)("li",{parentName:"ol"},"git reset 65cd127 --hard (\u9019\u6a23\u5c31\u6062\u5fa9\u4e86)"),(0,i.kt)("li",{parentName:"ol"},"tag \u6a19\u7c64\u662f\u8ddf\u5206\u652f\u662f\u5f88\u50cf\u7684\u6771\u897f\uff0c\u4f46\u6a19\u7c64\u4e0d\u6703\u8ddf commit \u524d\u9032\uff0c\u4f46 branch \u6703"),(0,i.kt)("li",{parentName:"ol"},"git \u6703\u505a garbage cllection\uff0c\u7269\u4ef6\u6578\u592a\u591a\u6703\u57f7\u884c\u6216\u624b\u52d5\u57f7\u884c"),(0,i.kt)("li",{parentName:"ol"},"git gc\uff0c\u624b\u52d5\u57f7\u884c garbage cllection"),(0,i.kt)("li",{parentName:"ol"},"\u4e0b tree .git \u53ef\u4ee5\u767c\u73fe \u5783\u573e\u4e26\u6c92\u6709\u4e0d\u898b\u662f\u88ab\u6253\u5305\u5230 pack \u9019\u500b\u8cc7\u6599\u593e\u5167"),(0,i.kt)("li",{parentName:"ol"},"git-whatever")),(0,i.kt)("h3",{id:"git-cz"},"git cz"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reference from ",(0,i.kt)("a",{parentName:"strong",href:"https://juejin.cn/post/6844903831893966856"},"https://juejin.cn/post/6844903831893966856")),(0,i.kt)("br",{parentName:"p"}),"\n","sudo npm install -g commitizen\ncommitizen init cz-conventional-changelog --save --save-exact"),(0,i.kt)("h3",{id:"reposity-config"},"Reposity config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#Git global setup\ngit config --global user.name "Aaron"\ngit config --global user.email "aaron.chang@ardomusnet.com"\n\n#Create a new repository\ngit clone git@gitlab.ardomusnet.com:Aaron/openadr-python.git\ncd openadr-python\ntouch README.md\ngit add README.md\ngit commit -m "add README"\ngit push -u origin master\n\n#Push an existing folder\ncd existing_folder\ngit init\ngit remote add origin git@gitlab.ardomusnet.com:Aaron/openadr-python.git\ngit add .\ngit commit -m "Initial commit"\ngit push -u origin master\n\n#Push an existing Git repository\ncd existing_repo\ngit remote rename origin old-origin\ngit remote add origin git@gitlab.ardomusnet.com:Aaron/openadr-python.git\ngit push -u origin --all\ngit push -u origin --tags\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"git remote -v",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u986f\u793a\u9060\u7aef t"))),(0,i.kt)("li",{parentName:"ul"},"git fork",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5b8c\u5168\u8907\u88fd Reposity")))),(0,i.kt)("h1",{id:"git-checkout-test-\u548c-origintest-\u7684\u5dee\u5225"},"git checkout test \u548c origin/test \u7684\u5dee\u5225"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"test \u4ee3\u8868 local \u7684 branch\uff0c\u7576\u9078\u64c7\u7684\u540c\u6642\u4ed6\u6703\u6307\u5411\u9060\u65b9 reposity \u7684 branch HEAD"),(0,i.kt)("li",{parentName:"ul"},"orgin/test \u4ee3\u8868\u9060\u65b9 reposity \u7684 Head"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u5e38\u6211\u5011\u90fd\u6703\u5728\u672c\u5730\u7684 branch \u958b\u767c\uff0c\u5728 git push \u4e0a\u9060\u65b9\uff0c\u540c\u6642 orgin/test/\u5c31\u6703\u76f4\u63a5\u6307\u5411\u6700\u65b0\u7684 HEAD\uff0c\u4e0d\u9700\u8981\u91cd\u65b0 git pull"),(0,i.kt)("li",{parentName:"ul"},"\u76f8\u53cd\uff0c\u82e5\u662f\u5f9e orgin/test \u7684\u5730\u65b9 git push \u4e0a\u9060\u65b9\uff0ctest \u4e26\u4e0d\u6703\u66f4\u65b0\n\u7b49\u65bc git push test \u5c31\u6703\u66f4\u65b0 origin/test")),(0,i.kt)("h1",{id:"git-cz-commit-\u6d41\u7a0b"},"git cz commit \u6d41\u7a0b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the type of change that you're committing:")),(0,i.kt)("h3",{id:"merge-\u64cd\u4f5c"},"merge \u64cd\u4f5c"),(0,i.kt)("p",null,"git ckeckout develop\ngit pull\ngit checkout 05-backup-restore\ngit merge develop"))}s.isMDXComponent=!0}}]);