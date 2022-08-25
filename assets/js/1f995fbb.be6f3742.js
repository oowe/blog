"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5118],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},34:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],c={sidebar_position:1},i="Command",s={unversionedId:"MacOS/command",id:"MacOS/command",isDocsHomePage:!1,title:"Command",description:"zsh ls",source:"@site/docs/MacOS/command.md",sourceDirName:"MacOS",slug:"/MacOS/command",permalink:"/blog/docs/MacOS/command",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/MacOS/command.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Document",permalink:"/blog/docs/Logger/document"},next:{title:"Document",permalink:"/blog/docs/MacOS/document"}},u=[{value:"zsh: Command not found: ls",id:"zsh-command-not-found-ls",children:[]},{value:"zsh: command not found code",id:"zsh-command-not-found-code",children:[]},{value:"install brew",id:"install-brew",children:[]},{value:"install tree",id:"install-tree",children:[]},{value:"grep",id:"grep",children:[]},{value:"install poetry",id:"install-poetry",children:[]},{value:"poetry\u6307\u4ee4",id:"poetry\u6307\u4ee4",children:[]},{value:"install docker",id:"install-docker",children:[]}],d={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command"},"Command"),(0,a.kt)("h3",{id:"zsh-command-not-found-ls"},"zsh: Command not found: ls"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#open terminal\nPATH=/bin:/usr/bin:/usr/local/bin:${PATH}\n# vim ~/.zshrc\nmodify text\n#source\nsource ~/.zshrc\n")),(0,a.kt)("h3",{id:"zsh-command-not-found-code"},"zsh: command not found code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash="},"sudo ln -s /Applications/Visual\\ Studio\\ Code.app/Contents/Resources/app/bin/code /usr/local/bin/code\n")),(0,a.kt)("h3",{id:"install-brew"},"install brew"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#install Homebrew\n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n\n#update\nbrew update\n\n#\u67e5brew\u6e05\u55ae\nbrew list\n')),(0,a.kt)("h3",{id:"install-tree"},"install tree"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh="},"brew install tree\n\n#tree command\ntree .\n")),(0,a.kt)("h3",{id:"grep"},"grep"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh="},"grep -r {keyword} {folder_name}\n\n#-r: recursive\n#\u6307\u5b9a\u76ee\u9304\n")),(0,a.kt)("h3",{id:"install-poetry"},"install poetry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh="},"#install\ncurl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python\n\n#source\nsource ~/.zshrc\n")),(0,a.kt)("h3",{id:"poetry\u6307\u4ee4"},"poetry\u6307\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh"},"#poetry\u6703\u81ea\u52d5\u5e6b\u4f60\u5efa\u7acb\u865b\u64ec\u74b0\u5883(arrietty-CeQPueus-py3.9 (Activated))\npoetry env list\n\n#poetry\npoetry env info\n\n#delete env\npoetry enc remove {env_name}\n")),(0,a.kt)("h3",{id:"install-docker"},"install docker"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"reference from: ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.docker.com/desktop/install/mac-install/"},"https://docs.docker.com/desktop/install/mac-install/"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh="},"#step 1. download file\n\n#step 2. install command\nsudo hdiutil attach Docker.dmg\n sudo /Volumes/Docker/Docker.app/Contents/MacOS/install\n sudo hdiutil detach /Volumes/Docker\n")))}p.isMDXComponent=!0}}]);