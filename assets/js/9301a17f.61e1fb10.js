"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[374],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1528:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:1},c="Command",l={unversionedId:"Typescript/command",id:"Typescript/command",isDocsHomePage:!1,title:"Command",description:"Reference from https://willh.gitbook.io/typescript-tutorial/introduction/get-typescript",source:"@site/docs/Typescript/command.md",sourceDirName:"Typescript",slug:"/Typescript/command",permalink:"/blog/docs/Typescript/command",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Typescript/command.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Document",permalink:"/blog/docs/TLS/document"},next:{title:"Json",permalink:"/blog/docs/Typescript/json"}},p=[{value:"Install Typescript",id:"install-typescript",children:[]},{value:"Check typescript version",id:"check-typescript-version",children:[]},{value:"Init tsc",id:"init-tsc",children:[]},{value:"Difference between &#39;let&#39; and &#39;const&#39;",id:"difference-between-let-and-const",children:[]},{value:"IF ELSE",id:"if-else",children:[]},{value:"FOR LOOP",id:"for-loop",children:[{value:"different with &#39;let&#39; and &#39;var&#39;",id:"different-with-let-and-var",children:[]},{value:"interface \u548c class \u5dee\u7570",id:"interface-\u548c-class-\u5dee\u7570",children:[]},{value:"checksum",id:"checksum",children:[]},{value:"import package \u7684\u65b9\u6cd5",id:"import-package-\u7684\u65b9\u6cd5",children:[]},{value:"object \u62ff key \u7684\u65b9\u6cd5",id:"object-\u62ff-key-\u7684\u65b9\u6cd5",children:[]}]}],m={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command"},"Command"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reference from ",(0,o.kt)("a",{parentName:"strong",href:"https://willh.gitbook.io/typescript-tutorial/introduction/get-typescript"},"https://willh.gitbook.io/typescript-tutorial/introduction/get-typescript"))),(0,o.kt)("h3",{id:"install-typescript"},"Install Typescript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#via apt\nsudo apt install -y node-typescript\n\n#via npm\nsudo npm install -g typescript\n")),(0,o.kt)("h3",{id:"check-typescript-version"},"Check typescript version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tsc\n")),(0,o.kt)("h3",{id:"init-tsc"},"Init tsc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'tsc --init    //\u5728\u8cc7\u6599\u593e\u5167\u6703\u51fa\u73fetsconfig.json\u6a94\u6848\n\u5728\u88e1\u9762 "target": "es5" \u53ef\u4ee5\u66f4\u6539es\u7248\u672c\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u7de8\u8b6f\u5b8c\u6210\u5f8c\u76f4\u63a5\u57f7\u884c\ntsc | node main.js\n\nts\u5728\u91cd\u69cb\u5f88\u65b9\u4fbf\n\u4f60\u53ef\u4ee5\u5728function\u4e0a\u9762\u6309F2\u6539\u540d\u5b57\uff0c\u6709\u4f7f\u7528\u5230\u7684\u5730\u65b9\u90fd\u6703\u8ddf\u8457\u66f4\u6539\n\n\u8a3b\u89e3\u7684\u65b9\u5f0f\n/**\n*   isPositive \u70ba\u6aa2\u6e2c\u8f38\u5165\u503c\u662f\u5426\u70ba\u6b63\u6578\u7684\u51fd\u6578\n*   \uff20param input: number \u70ba\u8f38\u5165\u7684\u6578\u5b57\n*   @output boolean \u70ba\u8f38\u51fa\u7684\u7d50\u679c\uff0c\u5982\u679c\u70ba\u6b63\u6578\uff0c\u5247\u8f38\u51fa\u70batrue\n*/\n\n\n\u904e\u5206\u8a87\u5f35\u7684\u8a3b\u8a18\nfunction addSomething(x:number) :number {\n    return (x + something) as number;\n}\n\u53ea\u8981\u80fd\u8089\u773c\u5224\u5225\u51fa\u4f86\u7684\u5c31\u53ef\u4ee5\u4e0d\u7528\u8a3b\u8a18\uff0c\u53cd\u4e4b\u9700\u8981\u3002\n\n\u578b\u5225\u5ba3\u544a\u7684\u7a7a\u767d\u6c92\u6709\u9650\u5236\u524d\u5f8c\u4e00\u5b9a\u8981\u7a7a\u767d\n\u4f46\u901a\u5e38\u662fuser: string (:\u5f8c\u9762\u7a7a\u4e00\u683c)\n\nlet\u548cvar\u7684\u5dee\u5225\nES6 \u65b0\u589e\u4e86let\u547d\u4ee4\uff0c\u7528\u6765\u58f0\u660e\u53d8\u91cf\u3002\u5b83\u7684\u7528\u6cd5\u7c7b\u4f3c\u4e8evar\uff0c\u4f46\u662f\u6240\u58f0\u660e\u7684\u53d8\u91cf\uff0c\u53ea\u5728let\u547d\u4ee4\u6240\u5728\u7684\u4ee3\u7801\u5757\u5185\u6709\u6548\n\n\u57fa\u672c\u8cc7\u6599\u578b\u5225\nJavaScript \u7684\u578b\u5225\u5206\u70ba\u5169\u7a2e\uff1a\u539f\u59cb\u8cc7\u6599\u578b\u5225\uff08Primitive data types\uff09\u548c\u7269\u4ef6\u578b\u5225\uff08Object types\uff09\u3002\n\u539f\u59cb\u8cc7\u6599\u578b\u5225\u5305\u62ec\uff1aboolean (\u5e03\u6797\u503c)\u3001number (\u6578\u503c)\u3001string (\u5b57\u4e32)\u3001null\u3001undefined \u4ee5\u53ca ES6 \u4e2d\u7684\u65b0\u578b\u5225 Symbol\u3002\n\n\u5b57\u4e32\u5982\u679c\u8981\u542b\u8b8a\u6578\u901a\u5e38\u90fd\u6703\u9019\u6a23\u52a0\nlet sentence: string = `Hello, my name is ${myName}. I'll be ${myAge + 1} years old next month.`;\n\u5176\u4e2d ` \u7528\u4f86\u5b9a\u7fa9 ES6 \u4e2d\u7684\u7bc4\u672c\u5b57\u4e32\uff0c${expr} \u7528\u4f86\u5728\u7bc4\u672c\u5b57\u4e32\u4e2d\u5d4c\u5165\u8868\u793a\u5f0f\u3002\n\nJavaScript \u6c92\u6709\u7a7a\u503c\uff08Void\uff09\u7684\u6982\u5ff5\uff0c\u5728 TypeScript \u4e2d\uff0c\u53ef\u4ee5\u7528 void \u8868\u793a\u6c92\u6709\u4efb\u4f55\u8fd4\u56de\u503c\u7684\u51fd\u5f0f\nfunction alertName(): void {\n    alert('My name is Tom');\n}\n\nany \u578b\u5225\uff0c\u5247\u5141\u8a31\u88ab\u8ce6\u503c\u70ba\u4efb\u610f\u578b\u5225\n\u8b8a\u6578\u5982\u679c\u5728\u5ba3\u544a\u7684\u6642\u5019\uff0c\u672a\u6307\u5b9a\u5176\u578b\u5225\uff0c\u90a3\u9ebc\u5b83\u6703\u88ab\u8b58\u5225\u70ba\u4efb\u610f\u503c\u578b\u5225\uff1a\nlet something;\nsomething = 'seven';\nsomething = 7;\nsomething.setName('Tom');\n#\u4ee5\u4e0b\u6703\u5831\u932f\nlet something = 'seven';\nsomething = 7;\n\n\u806f\u5408\u578b\u5225\uff08Union Types\uff09\u8868\u793a\u53d6\u503c\u53ef\u4ee5\u70ba\u591a\u7a2e\u578b\u5225\u4e2d\u7684\u4e00\u7a2e\u3002\nlet a: string | number;\na = 10;\na = 'Aaron';\nconsole.log(a);\n\n\u5728 TypeScript \u4e2d\uff0c\u6211\u5011\u4f7f\u7528\u4ecb\u9762\uff08Interfaces\uff09\u4f86\u5b9a\u7fa9\u7269\u4ef6\u7684\u578b\u5225\n\u5728\u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u8a9e\u8a00\u4e2d\uff0c\u4ecb\u9762\uff08Interfaces\uff09\u662f\u4e00\u500b\u5f88\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u5b83\u662f\u5c0d\u884c\u70ba\u7684\u4e00\u7a2e\u62bd\u8c61\uff0c\u800c\u5177\u9ad4\u5982\u4f55\u884c\u52d5\u5247\u9700\u8981\u7531\u985e\u5225\uff08classes\uff09\u53bb\u5be6\u73fe\uff08implement\uff09\u3002\nTypeScript \u4e2d\u7684\u4ecb\u9762\u662f\u4e00\u500b\u975e\u5e38\u9748\u6d3b\u7684\u6982\u5ff5\uff0c\u9664\u4e86\u53ef\u7528\u65bc\u5c0d\u985e\u5225\u7684\u4e00\u90e8\u5206\u884c\u70ba\u9032\u884c\u62bd\u8c61\u4ee5\u5916\uff0c\u4e5f\u5e38\u7528\u65bc\u5c0d\u300c\u7269\u4ef6\u7684\u5f62\u72c0\uff08Shape\uff09\u300d\u9032\u884c\u63cf\u8ff0\u3002\n\ninterface Person {\n    name: string;\n    age: number;\n}\n\nlet tom: Person = {\n    name: 'Tom',\n    age: 25\n};\n\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u5011\u5b9a\u7fa9\u4e86\u4e00\u500b\u4ecb\u9762 Person\uff0c\u63a5\u8457\u5b9a\u7fa9\u4e86\u4e00\u500b\u8b8a\u6578 tom\uff0c\u5b83\u7684\u578b\u5225\u662f Person\u3002\u9019\u6a23\uff0c\u6211\u5011\u5c31\u7d04\u675f\u4e86 tom \u7684\u5f62\u72c0\u5fc5\u9808\u548c\u4ecb\u9762 Person \u4e00\u81f4\u3002\n\u4ecb\u9762\u4e00\u822c\u9996\u5b57\u6bcd\u5927\u5beb\u3002\n\n\u53ef\u9078\u5c6c\u6027\n\u6709\u6642\u6211\u5011\u5e0c\u671b\u4e0d\u8981\u5b8c\u5168\u5339\u914d\u4e00\u500b\u5f62\u72c0\uff0c\u90a3\u9ebc\u53ef\u4ee5\u7528\u53ef\u9078\u5c6c\u6027 (?)\uff1a\ninterface Person {\n    name: string;\n    age?: number;\n}\n\nlet tom: Person = {\n    name: 'Tom'\n};\n\n\n\u6709\u6642\u5019\u6211\u5011\u5e0c\u671b\u4e00\u500b\u4ecb\u9762\u5141\u8a31\u6709\u4efb\u610f\u7684\u5c6c\u6027\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f\uff1a\ninterface Person {\n    name: string;\n    age?: number;\n    [test: string]: any;\n}\n\nlet aaron: Person ={\n    name: 'aaron',\n    age: 35,\n    tall: 190\n};\nconsole.log(aaron);\n\n\u552f\u8b80\u5c6c\u6027\n\u6709\u6642\u5019\u6211\u5011\u5e0c\u671b\u7269\u4ef6\u4e2d\u7684\u4e00\u4e9b\u6b04\u4f4d\u53ea\u80fd\u5728\u5efa\u7acb\u7684\u6642\u5019\u88ab\u8ce6\u503c\uff0c\u90a3\u9ebc\u53ef\u4ee5\u7528 readonly \u5b9a\u7fa9\u552f\u8b80\u5c6c\u6027\uff1a\ninterface Person {\n    readonly id: number;\n    name: string;\n    age?: number;\n    [propName: string]: any;\n}\n\nlet tom: Person = {\n    id: 89757,\n    name: 'Tom',\n    gender: 'male'\n};\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7d50\u5c3e\u8981\u5206\u865f;"))),(0,o.kt)("h3",{id:"difference-between-let-and-const"},"Difference between 'let' and 'const'"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53c3\u6578\u662f\u56fa\u5b9a\u7684\u8acb\u7528 const"),(0,o.kt)("li",{parentName:"ul"},"\u53c3\u6578\u662f\u53ef\u8b8a\u7684\u8acb\u7528 let"),(0,o.kt)("li",{parentName:"ul"},"var \u662f\u5c6c\u65bc\u56fa\u5b9a\u6216\u53ef\u8b8a\u52d5\u683c\u5f0f\uff0c\u8f03\u4e0d\u56b4\u8b39\uff0c\u4e0d\u5efa\u8b70\u4f7f\u7528\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'let outputNumber = 10;\nconsole.log("a = " + outputNumber);\noutputNumber = 30;\nconsole.log("a = " + outputNumber);\n\nconst outputWord = "Practice";\nconsole.log("a = " + outputWord);\noutputWord = "fail"; //Error\nconsole.log("a = " + outputWord);\n')),(0,o.kt)("h3",{id:"if-else"},"IF ELSE"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'let a: number = 200;\nlet b: number = 200;\n\nif (a > b) {\n  console.log("a is more then b");\n} else if (a < b) {\n  console.log("a is less then b");\n} else {\n  console.log("a is equal then b");\n}\n')),(0,o.kt)("h2",{id:"for-loop"},"FOR LOOP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function add(max: number): number {\n  let sum = 0;\n  for (let i = 0; i <= max; i++) {\n    sum = sum + i;\n  }\n  return sum;\n}\nlet output: number = add(10);\nconsole.log(output);\n")),(0,o.kt)("h3",{id:"different-with-let-and-var"},"different with 'let' and 'var'"),(0,o.kt)("p",null,"\u4f5c\u7528\u57df\u4e0d\u4e00\u6a23\uff0cvar \u7684\u4f5c\u7528\u57df\u5728\u51fd\u6578 (function) \u88e1\uff0clet \u7684\u4f5c\u7528\u57df\u5247\u662f\u5728\u5340\u584a (block) \u88e1\u3002"),(0,o.kt)("h3",{id:"interface-\u548c-class-\u5dee\u7570"},"interface \u548c class \u5dee\u7570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"interface \u6bd4\u8f03\u50cf\u6aa2\u67e5\u5668\uff0c\u9032\u4f86\u7684\u8cc7\u6599\u8981\u7b26\u5408\u9019\u500b\u898f\u7bc4"),(0,o.kt)("li",{parentName:"ul"},"class \u662f\u4f60\u5ba3\u544a\u4e86\u4e00\u500b\u7269\u4ef6\uff0c\u4f60\u8981\u5b9a\u7fa9\u5b83\u7684\u5c6c\u6027\u3002")),(0,o.kt)("h3",{id:"checksum"},"checksum"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reference from ",(0,o.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/@types/checksu"},"https://www.npmjs.com/package/@types/checksu"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'//\u8f09\u5165\u5957\u4ef6\nvar checksum = require("checksum");\n\n//\u8b80string\u7684 sha1\u503c\u65b9\u6cd5\nlet cs = checksum("dshaw");\n\n//cs\u7232sha1\u503c\nif (cs === "9b8cebc0421241d087f6ab7e815285af803de7e7") {\n  console.log("yay");\n}\n\n//\u8b80\u6a94\u6848\u7684sha1\u503c\u65b9\u6cd5\nchecksum.file("dshaw.txt", function (err, sum) {\n  if (sum === "9b8cebc0421241d087f6ab7e815285af803de7e7") {\n    console.log("yay yay");\n  }\n});\n')),(0,o.kt)("h3",{id:"import-package-\u7684\u65b9\u6cd5"},"import package \u7684\u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u50b3\u7d71 import package \u65b9\u5f0f\u70ba const obj = require('mysql-import');\n\u8981\u6539\u6210\u76ee\u524d typescript \u7684\u65b9\u5f0f\u70ba\nimport { \u6709\u7528\u5230\u7684 fuction } form 'mysql-import';\n")),(0,o.kt)("h3",{id:"object-\u62ff-key-\u7684\u65b9\u6cd5"},"object \u62ff key \u7684\u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Object.keys(sockets).forEach(id => {\n      sockets[id].disconnect(true);\n")))}u.isMDXComponent=!0}}]);