"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7004],{3905:function(e,n,o){o.d(n,{Zo:function(){return u},kt:function(){return l}});var r=o(7294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=r.createContext({}),s=function(e){var n=r.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):c(c({},n),e)),o},u=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(o),l=t,k=p["".concat(d,".").concat(l)]||p[l]||m[l]||a;return o?r.createElement(k,c(c({ref:n},u),{},{components:o})):r.createElement(k,c({ref:n},u))}));function l(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=o.length,c=new Array(a);c[0]=p;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var s=2;s<a;s++)c[s]=o[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7190:function(e,n,o){o.r(n),o.d(n,{contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=o(7462),t=o(3366),a=(o(7294),o(3905)),c=["components"],i={sidebar_position:1},d="Command",s={unversionedId:"Docker/command",id:"Docker/command",isDocsHomePage:!1,title:"Command",description:"Reference from https://dotblogs.com.tw/robot/2019/05/31/docker",source:"@site/docs/Docker/command.md",sourceDirName:"Docker",slug:"/Docker/command",permalink:"/blog/docs/Docker/command",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Docker/command.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/blog/docs/Django/command"},next:{title:"Docker Compose",permalink:"/blog/docs/Docker/docker-compose"}},u=[{value:"copy file into container",id:"copy-file-into-container",children:[]},{value:"docker usage in disk",id:"docker-usage-in-disk",children:[]},{value:"clean space of disk",id:"clean-space-of-disk",children:[]},{value:"\u770b cpu% MEM%",id:"\u770b-cpu-mem",children:[]}],m={toc:u};function p(e){var n=e.components,i=(0,t.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command"},"Command"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reference from ",(0,a.kt)("a",{parentName:"strong",href:"https://dotblogs.com.tw/robot/2019/05/31/docker"},"https://dotblogs.com.tw/robot/2019/05/31/docker")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{src:o(6169).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Docker Hub \u7684\u500b\u4eba\u6620\u50cf\u6a94\u540d\u7a31\nDocker \u662f\u516c\u958b\u7684\u6620\u50cf\u6a94\u96c6\u6563\u4e2d\u5fc3\uff0c\u4e0a\u9762\u6709\u4e0d\u540c\u7684\u4f7f\u7528\u8005\uff0c\u5efa\u7acb\u4e0d\u540c\u7684\u5009\u5eab\uff0c\u5176\u4e2d\u653e\u4e86\u4e0d\u540c\u7684\u6620\u50cf\u6a94\u3002\u4e0a\u9762\u7c97\u9ad4\u7684\u5b57\uff0c\u5373\u6620\u50cf\u6a94\u540d\u7a31\u7684\u7d44\u6210\u3002\u6a19\u6e96\u7684 Docker Hub \u7684\u500b\u4eba\u6620\u50cf\u6a94\u540d\u7a31\u683c\u5f0f\u70ba\uff1a\n<user name>/<repo name>:<tag name>\nuser name\uff1a\u4f7f\u7528\u8005\u540d\u7a31\u3002\u5728 Docker Hub \u4e0a\u6bcf\u500b\u4f7f\u7528\u8005\u90fd\u6709\u4e00\u500b\u7368\u7acb\u7684\u540d\u7a31\uff0c\u9019\u662f Docker Hub \u4e0a\u7684\u6700\u5927\u55ae\u4f4d\u3002\nrepo name\uff1a\u5009\u5eab\u540d\u7a31\u3002\u5728 Docker Hub \u4e0a\u7684\u6bcf\u4e00\u500b\u4f7f\u7528\u8005\uff0c\u90fd\u53ef\u4ee5\u5efa\u7acb\u81ea\u5df1\u7684\u5009\u5eab\uff0c\u5009\u5eab\u4e2d\u53ef\u4ee5\u653e\u591a\u500b\u6620\u50cf\u6a94\u3002\ntag name\uff1a\u8981\u5206\u8fa8\u540c\u4e00\u500b\u5009\u5eab\u4e2d\u7684\u4e0d\u540c\u6620\u50cf\u6a94\uff0c\u5c31\u8981\u7528 tag name \u4f86\u5340\u5206\u3002\n\u5982\u679c\u8a72\u5009\u5eab\u4e2d\u53ea\u6709\u4e00\u500b\u6620\u50cf\u6a94\uff0c\u5247 tag name \u53ef\u4ee5\u7701\u7565\u3002\n\u5982\u679c\u8a72\u5009\u5eab\u4e2d\u6709\u591a\u500b\u6620\u50cf\u6a94\uff0c\u5728\u6c92\u6709\u6307\u5b9a tag name \u6642\uff0c\u4ee5\u6700\u65b0\u7684\u4e00\u500b\u70ba\u4e3b\u3002\n\u540c\u4e00\u500b\u6620\u50cf\u6a94\u53ef\u4ee5\u6709\u591a\u500b tag name\uff0c\u53ef\u770b\u505a\u662f\u5225\u540d\u3002\u53ef\u4ee5\u5f9e\u76f8\u540c\u7684\u6620\u50cf\u6a94 ID \u770b\u51fa\u4f86\u3002\n\u6620\u50cf\u6a94 ID \u7528\u4f86\u5206\u5225\u6620\u50cf\u6a94\uff0c\u6ce8\u610f ubuntu:14.10 \u548c ubuntu:utopic\u3001ubuntu:utopic-20150319 \u4e09\u500b\u6620\u50cf\u6a94 ID \u4e00\u6a23\uff0c\u662f\u540c\u4e00\u500b\u6620\u50cf\u6a94\u3002\n\nDocker Hub \u4e0a\u5927\u516c\u53f8\u7684\u5b98\u65b9\u6620\u50cf\u6a94\n\u4e3b\u8981\u7684 Linux \u767c\u4f48\u5546\u3001\u5e73\u53f0\u4f9b\u61c9\u5546\u3001\u8cc7\u6599\u5eab\u4f9b\u61c9\u5546\uff0c\u670d\u52d9\u4f9b\u61c9\u5546\u7b49\uff0c\u4ed6\u5011\u5728 Docker Hub \u4e0a\u4e5f\u6709\u81ea\u5df1\u7684\u5b98\u65b9\u6620\u50cf\u6a94\u3002\u9019\u4e9b\u516c\u53f8\u7684\u6620\u50cf\u6a94\u683c\u5f0f\u548c\u4e00\u822c\u79c1\u4eba\u7684\u4e0d\u540c\uff0c\u4ed6\u5011\u61c9\u8a72\u662f\u8f03\u5927\u724c\uff0c\u56e0\u6b64\u53ea\u6709 repo name \u548c tag name\uff0c\u800c\u6c92\u6709 user name\u3002\u683c\u5f0f\u5982\u4e0b\uff1a\napache:latest\nubuntu:trusty\n\nlogin\n\u4e00\u822c\u4f7f\u7528 Docker \u7684\u6620\u50cf\u6a94\u6642\uff0c\u662f\u5b8c\u5168\u4e0d\u9700\u8981\u5e33\u865f\u5bc6\u78bc\u7684\uff0c\u53ea\u6709\u8981\u4e0a\u50b3\u6620\u50cf\u6a94\u624d\u9700\u8981\u3002\ndocker login\n<user_name>\n<user_password>\nor\n\u79c1\u4eba\u7684 registry\ndocker login 192.168.1.100:8000\n\nlogout\ndocker logout\n\n\u5b89\u88dd docker CE\nsudo apt-get install docker.io \uff08\u820a\u7248\u7684 docker \u5b89\u88dd\u65b9\u5f0f)\nUpdate the apt package index:\nsudo apt-get update\n\nInstall packages to allow apt to use a repository over HTTPS:\nsudo apt-get install \\\napt-transport-https \\\nca-certificates \\\ncurl \\\nsoftware-properties-common\n\n##\u65b0\u589e Docker \u7684 GPG \u91d1\u9470(key)\nAdd Docker\u2019s official GPG key:\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n\n\u78ba\u8a8d\u91d1\u9470(key)\u4e14\u9a57\u8b49\u91d1\u9470\u70ba 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88\nsudo apt-key fingerprint 0EBFCD88\n\n\u8a2d\u5b9a apt repository(all copy)\uff1a\nUse the following command to set up the stable repository\nsudo add-apt-repository \\\n\"deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n$(lsb_release -cs) \\\nstable\"\n\n\u66f4\u65b0 apt package\uff1a\nsudo apt-get update\n\n\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u5217\u51fa docker-ce \u53ef\u4ee5\u4f7f\u7528\u7684\u7248\u672c\nsudo apt-cache madison docker-ce\n\n(optional)\u9078\u64c7\u5176\u4e2d\u4e00\u500b\u7248\u672c\u4e26\u5b89\u88dd\nsudo apt-get install docker-ce=17.12.0~ce-0~ubuntu\n\n\u5b89\u88dd\u6700\u65b0\u7248\u672c\nsudo apt-get install docker-ce\n\uff0820191222 \u5b89\u88dd\u6642\u6700\u65b0\u662f 19.03.5)\n(20210609 \u5b89\u88dd\u6642\u662f 20.10.7)\n\ndocker \u670d\u52d9\u662f\u5426\u6709\u6b63\u5e38\u555f\u52d5\nservice docker status\n\n\u5c07\u4f7f\u7528\u8005\u52a0\u5165 Docker \u7fa4\u7d44 #\u57f7\u884c\u5f8c\u8981\u57f7\u884c\u767b\u51fa\nsudo usermod -aG docker <user_name>\n(-a \u5c07\u4f7f\u7528\u8005\u52a0\u5165\u8d85\u7d1a\u7fa4\u7d44\uff0c-G \u7fa4\u7d44\u7684\u610f\u601d)\n\ndocker \u7248\u672c\u8cc7\u8a0a\n\u5217\u51fa\u76ee\u524d Docker \u7684\u7248\u672c\uff0c\u4ee5\u53ca Go \u8a9e\u8a00\u7684\u7248\u672c\u7b49\u3002\n\u7528\u9014\uff1a\u5e38\u7528\u4f86\u6aa2\u67e5\u662f\u5426\u8981\u6607\u7d1a\u5230\u8f03\u9ad8\u7684 Docker \u7248\u672c\u3002\ndocker version\n\ndocker \u627e container \u6620\u50cf\u6a94\ndocker search ubuntu\ndocker search -s 10 ubuntu \uff08\u661f\u661f\u7b49\u7d1a\u5728 10 \u4ee5\u4e0a\u624d\u5217\u51fa)\n\n\u4e0b\u8f09 container \u6620\u50cf\u6a94\ndocker pull <image_name:target>\n\n\u5217\u51fa\u76ee\u524d\u7cfb\u7d71\u4e0a\u6240\u6709\u7684 container \u6620\u50cf\u6a94\ndocker images\n\ncontainer \u4e2d\u57f7\u884c\u7a0b\u5f0f\u7684 hello world \u7bc4\u4f8b\ndocker run ubuntu /bin/echo 'Hello world'\n\n\u4f7f\u7528 docker \u7684 run \u6307\u4ee4\uff0c\u52a0\u4e0a -i \u8207 -t \u53c3\u6578\u9032\u5165\u4e92\u52d5\u5f0f\u7684\u64cd\u4f5c\u4ecb\u9762\u4e26\u4e14\u914d\u7f6e tty\n-t\uff1aattach \u6642 Container \u7684\u87a2\u5e55\u6703\u63a5\u5230\u539f\u4f86\u7684\u87a2\u5e55\u4e0a\u3002\n-i\uff1aattach \u6642\u9375\u76e4\u8f38\u5165\u6703\u88ab Container \u63a5\u624b\n\ndocker run -i -t ubuntu\nor\ndocker run -it ubuntu\n\ndocker \u4f86\u57f7\u884c daemon \u985e\u578b\u7684\u5e38\u99d0\u7a0b\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528 -d \u53c3\u6578\ndocker run -itd ubuntu\ndocker run -itd --name container_name ubuntu (\u82e5\u8981\u547d\u540d\u8981\u5728 image \u524d\u9762)\n\n\u52a0 Port\n-p 8080:80\uff1arun \u6307\u4ee4\u7684\u6578\u503c\u53c3\u6578\uff0c\u628a\u4e3b\u6a5f\u7684 8080 \u901a\u8a0a\u57e0\u6240\u6709\u6d41\u91cf\u8f49\u767c\u5230 web \u9019\u500b Container \u7684 80 \u901a\u8a0a\u57e0\u3002\n\n\u67e5\u770b\u76ee\u524d\u6240\u6709\u6b63\u5728\u57f7\u884c\u7684 container\ndocker ps\ndocker ps -q \uff08\u53ea\u5217\u51fa ID\uff09\ndocker ps -a (\u67e5\u770b\u5230\u57f7\u884c\u7d50\u675f\u7684(\u5373\u6b7b\u6389\u7684 Container)\n\n\u5728 container \u4e2d\u7684\u7a0b\u5f0f\u8f38\u51fa\u8a0a\u606f logs \u7d00\u9304\u6a94\ndocker logs <container_id>\n\n\u7d42\u6b62\u6b63\u5728\u57f7\u884c\u4e2d\u7684 container\ndocker stop <container_id>\n\nDocker \u5efa\u7acb\u7684\u7db2\u9801\u670d\u52d9\ndocker run -d --name web -p 8080:80 joshhu/webdemo\uff08\u9084\u4e0d\u61c2\u9019\u500b)\ndocker run -d --name web -p 8080:80 ubuntu:16.04\n\ndocker --net=host \u672c\u5730\u7db2\u8def\ndocker run -itd --name aaron -net=host aaron/test\n\n\u5728 Docker \u4e0d\u52a0\u53c3\u6578\u7684\u60c5\u6cc1\u4e0b\uff0c\u8981\u8b93 Container \u4e00\u76f4\u57f7\u884c\u4e0b\u53bb\uff0c\u5c31\u662f\u57f7\u884c\u4e00\u500b\u7121\u6b62\u76e1\u7684\u7a0b\u5f0f\n\ndocker exec\ndocker attach\ndocker create\ndocker kill\ndocker restart\n\ninspect\uff1a\u6aa2\u67e5 Container \u7684\u72c0\u614b(\u975e\u5e38\u5e38\u7528)\nstats\uff1a\u67e5\u770b Container \u7684 CPU\u3001\u8a18\u61b6\u9ad4\u53ca\u7db2\u8def\u4f7f\u7528\nport\uff1a\u67e5\u770b Container \u7684\u901a\u8a0a\u57e0\u4f7f\u7528\ntop\uff1a\u67e5\u770b Container \u5728\u4e3b\u7cfb\u7d71\u4e2d\u7684\u8a18\u61b6\u9ad4\u4f7f\u7528\n\nContainer \u57f7\u884c\u6642\u7684\u64cd\u4f5c\nattach\uff1a\u9023\u63a5 Container \u7684\u6a19\u6e96\u8f38\u51fa\u8f38\u5165\u7aef\nexec\uff1a\u5728\u5916\u90e8\u5411 Container \u5167\u57f7\u884c\u6307\u4ee4\nlogs\uff1a\u5c07 Container \u5167\u7684\u8f38\u51fa\u986f\u793a\u5230\u87a2\u5e55\u4e0a\n\nContainer \u548c\u4e3b\u7cfb\u7d71\u4e4b\u9593\u7684\u64cd\u4f5c\n(?)cp\uff1a\u8907\u88fd Container \u5167\u7684\u6a94\u6848\u5230\u4e3b\u7cfb\u7d71\n(\u5728\u54ea\u88e1\u64cd\u4f5c?)diff\uff1a\u5217\u51fa\u5169\u500b Container \u4e4b\u9593\u6a94\u6848\u7cfb\u7d71\u5dee\u7570\n(?)events\uff1a\u5217\u51fa\u67d0\u500b\u6642\u9593\u9ede\u4e4b\u524d\u6216\u4e4b\u5f8c\u7684\u4e8b\u4ef6\n\ndocker info\n\u5217\u51fa\u548c\u7cfb\u7d71\u76f8\u95dc\u7684\u8cc7\u8a0a\uff0c\u5982\u6620\u50cf\u6a94\u6578\u3001Container \u6578\u3001\u6a94\u6848\u7cfb\u7d71\u76ee\u9304\u3001Linux \u6838\u5fc3\u7248\u672c\uff0c\u4f7f\u7528 Linux \u7248\u672c\u3001CPU \u53ca\u8a18\u61b6\u9ad4\u7b49\n\ncontainer \u66f4\u540d\ndocker rename <container_name> <new_container_name>\n\n\u5c07\u6620\u50cf\u6a94\u5b58\u5165/\u532f\u51fa\u96fb\u8166\u6a94\u6848\u683c\u5f0f docker save/load\n\u5b58\u6210 tarball \u683c\u5f0f\u53ca\u532f\u51fa\n\uff08\u5b58\u5165\u6642\u5225\u5fd8\u4e86\u52a0-o \u53c3\u6578\uff0c\u8981\u4e0d\u7136\u53ea\u6703\u5728\u986f\u793a\u4e0d\u6703\u771f\u7684\u58d3\u7e2e\uff09\ndocker save -o webdemou12.tar joshhu/webdemo:u12\n\u5c07 tarball \u9084\u539f\u56de\u6620\u50cf\u6a94\u683c\u5f0f\uff0c\u5247\u7528 load\ndocker load --input webdemou12.tar\n\n\u522a\u9664\u6620\u50cf\u6a94 docker rmi\n(\u9019\u500b\u6307\u4ee4\u522a\u9664\u672c\u6a5f\u4e2d\u5b58\u653e\u7684\u6620\u50cf\u6a94\u3002\u4f46\u5982\u679c\u6709\u5bb9\u5668\u9084\u5728\u4f7f\u7528\u9019\u500b\u6620\u50cf\u6a94\uff0c\u5247\u7121\u6cd5\u522a\u9664\u3002\u5982\u679c\u786c\u8981\u522a\u9664\uff0c\u53ef\u4ee5\u4e0b-f \u53c3\u6578\u5f37\u8feb\u522a\u9664\u3002)\ndocker rmi -f $(docker images -aq)\ndocker rmi --no-prune=true joshhu/webdemo:u12\n\n\u66ff\u672c\u6a5f\u6620\u50cf\u6a94\u52a0\u6a19\u7c64\u540d\u7a31 docker tag\ndocker tag joshhu/webdemo:latest joshhu/webdemo:u14\n\n\u81ea\u5efa\u6620\u50cf\u6a94 docker build/hisotry\ndocker build\n\n\u4e0a\u50b3\u6620\u50cf\u6a94 docker push\ndocker push <username>/<repo name>:<Tag name>\n\nDocker \u5716\u5f62\u5316\u754c\u9762(kitematic)\nhttps://github.com/docker/kitematic\n\u4f7f\u7528\u8edf\u9ad4\u4e2d\u5fc3\u5b89\u88dd\nor\nsudo dpkg -i Kitematic-0.17.13_amd64.deb\nsudo apt install -f\nkitematic\n\n\u5716\u5f62\u5316\u754c\u9762(portainer)\ndocker volume create portainer_data\ndocker run --name=portainer -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer\n\n\u9032\u5165 container\ndocker exec -it <container_name> bash\n\nlink local folder \u310d\ndocker run -itd -v <local_folder_path>:<container_folder/path> --name <container_name> <image:target>\n\nlink local file\ndocker run -itd -v <local_file_path>:<container_file/path> --name <container_name> <image:target>\n\nhttps://philipzheng.gitbook.io/docker_practice/data_management/volume#gua-zai-yi-ge-ben-di-zhu-ji-dang-an-zuo-wei-zi-liao-juan\n\nnvidia-smi\n\u73fe\u5728\u65b0\u7248\u7684 Docker \u4ee5\u652f\u6301\u539f\u751f GPU \u986f\u5361\uff0c\u4e0d\u9700\u4f7f\u7528 nvidia-docker2 packages\nhttps://medium.com/@grady1006/ubuntu18-04%E5%AE%89%E8%A3%9Ddocker%E5%92%8Cnvidia-docker-%E4%BD%BF%E7%94%A8%E5%A4%96%E6%8E%A5%E9%A1%AF%E5%8D%A1-1e3c404c517d\n\nreboot \u81ea\u52d5 start container\n##all\ndocker run --restart=always\n\n##someone\ndocker update --restart=always <CONTAINER ID>\n\n\u4e00\u6b21\u522a\u9664\u95dc\u9589\u7684 Container\ndocker container prune\n\n======================================================================================================\n\nNV_GPU='0,1' nvidia-docker run -itd --name BVLC_Caffe3 -v /home/victorwu:/home/victorwu bvlc/caffe:gpu bash\n\n\u9650\u5236\u786c\u9ad4\u4f7f\u7528\u91cf\nhttp://blog.opskumu.com/docker-cpu-limit.html\n\n\u76e3\u63a7 container \u7684\u786c\u9ad4\u4f7f\u7528\u91cf\ndocker stats\n\n\u5141\u8a31\u5728 container \u5167 mount \u8cc7\u6599\u593e \uff08--privileged)\nnvidia-docker run --privileged -v /home/gibsonchou:/home/containerfolder -d -p 15000:5000 -p 33322:22 -p 18888:8888 --name gibson-tf nvidia/digits\n\n\u52a0\u5165\u88dd\u7f6e\n--device=/dev/video0:/dev/video0\n\n\u9047\u5230\u7121\u6cd5\u4f7f\u7528 GUI \u7684\u932f\u8aa4\u8a0a\u606f\n(frame:31): Gtk-WARNING \\*\\*: cannot open display:\n\u672a\u89e3\n(docker \u7121\u6cd5\u4f7f\u7528 GUI, \u9808\u627e\u5230\u65b9\u6cd5)\n\uff0a\uff0a\uff0a20180826 \u66f4\u65b0\uff1a\u5728 corntab \u4e5f\u767c\u751f\u4e00\u6a23\u7684\u554f\u984c\n\u554f\u904e jason \u4e4b\u5f8c\uff0c\u5f97\u4e4b\u539f\u4f86\u662f\u6c92\u6709 x windows \u6642\uff0c\u4f60\u8981 run ui \u7684\u6642\u5019\u5c31\u6703\u51fa\u73fe\u9019\u500b\u554f\u984c\n\u6240\u4ee5\u8981\u8a3b\u89e3\u6389\u7a0b\u5f0f\u88e1\u9762\u7684 imshow \u548c namedwindow!!!!!!!!!!!!!!!!!!!\n\n\u624d\u6703\u6b63\u5e38\uff01\uff01\uff01\uff01\n")),(0,a.kt)("h3",{id:"copy-file-into-container"},"copy file into container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp ~/index.ts dcs-b:/home/ardomus/index.ts\n")),(0,a.kt)("h3",{id:"docker-usage-in-disk"},"docker usage in disk"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker system df\n")),(0,a.kt)("h3",{id:"clean-space-of-disk"},"clean space of disk"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6307\u4ee4\u9810\u8a2d\u6e05\u9664\u5305\u542b:",(0,a.kt)("br",{parentName:"p"}),"\n","\u5df2\u505c\u6b62\u7684 container",(0,a.kt)("br",{parentName:"p"}),"\n","\u672a\u4f7f\u7528\u7684 volume",(0,a.kt)("br",{parentName:"p"}),"\n","\u672a\u4f7f\u7528\u7684 network",(0,a.kt)("br",{parentName:"p"}),"\n","\u61f8\u7a7a\u7684 image  "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker system prune\n")),(0,a.kt)("h3",{id:"\u770b-cpu-mem"},"\u770b cpu% MEM%"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker stats\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Dockerfile SSH service\nRUN apt-get update && apt-get install -y openssh-server net-tools\nRUN mkdir /var/run/sshd\nRUN echo \'root:123456\' | chpasswd\nRUN sed -i \'s/PermitRootLogin prohibit-password/PermitRootLogin yes/\' /etc/ssh/sshd_config\n\n# SSH login fix. Otherwise user is kicked off after login\nRUN sed \'s@session\\s*required\\s*pam_loginuid.so@session optional pam_loginuid.so@g\' -i /etc/pam.d/sshd\n\nENV NOTVISIBLE "in users profile"\nRUN echo "export VISIBLE=now" >> /etc/profile\n\nEXPOSE 22\nCMD ["/usr/sbin/sshd", "-D"]\n\n\n# Set working directory\nWORKDIR /workspace\n\nContainer \u91cd\u65b0\u547d\u540d (rename)\ndocker rename hash-id new-name\n\n\u767b\u5165docker hub\u5e33\u865f\nsudo docker login\n\n\u91cd\u65b0\u547d\u540dimage\ndocker tag <UserName/Repo> <NEW UserName/Repo>\n\n\u79fb\u9664image\ndocker rmi  <UserName/Repo>\ndocker rmi  -f      //all\n\n\u6a94\u6848\u4e0a\u50b3\n***\u6ce8\u610f:image\u6a94\u540d\u683c\u5f0f\u8981\u70ba login\u5e33\u865f\u7684\u540d\u5b57/Repo\ndocker push  <UserName/Repo>\n\ncontainer\u6253\u5305\u6210image\n***\u6ce8\u610f:image\u6a94\u540d\u5747\u5c0f\u5beb\ndocker commit  <imageName> runoob/ubuntu:date +%Y%m%d\ndocker commit PVANet_1 oowe/pvanet:date +%Y%m%d\n***\u57f7\u884c\u6642\u9593\u7d0430s\n\n\u6539tag\ndocker tag <imageName> <new-imageName>\n\ndocker build\n(1) download dockerfile from dockerhub\n(2) \u5b58\u6a94 \u6a94\u540d\u53eb\u505adockerfile\n(3) \u5efa\u7acbimage\nnvidia - docker build -t bvlc-docker .  (.\u8def\u5f91\u662fimage\u8981\u653e\u54ea\u88e1\uff09\n\n\u6539\u6642\u5340\n\u5728Dockerfile\u91cc\u589e\u52a0\nRUN echo "Europe/London" > /etc/timezone;\n\nDockerfile from image (\u9084\u5f04\u4e0d\u51fa\u4f86\u5f85\u8fa6)\ndocker run -v /var/run/docker.sock:/var/run/docker.sock  centurylink/dockerfile-from-image <IMAGE_TAG_OR_ID> > Dockerfile.txt\nhttps://philipzheng.gitbooks.io/docker_practice/content/dockerfile/file_from_image.html\n\ndocker run = docker create + docker start\ndocker export\ndocker iimport\n')))}p.isMDXComponent=!0},6169:function(e,n,o){n.Z=o.p+"assets/images/b785b767-fa0b-4c2e-8250-ef69614ebb1d-ba02171ee591aaa7424c814d6bc44363.png"}}]);