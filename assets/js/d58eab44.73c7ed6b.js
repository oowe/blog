"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1998],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||c;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<c;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8823:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),l=["components"],a={},i="Struct",u={unversionedId:"C++/struct",id:"C++/struct",isDocsHomePage:!1,title:"Struct",description:"1. Struct \u662f class \u7684\u524d\u8eab\uff0c\u662f\u4e00\u7a2e\u985e\u5225\u3002",source:"@site/docs/C++/struct.md",sourceDirName:"C++",slug:"/C++/struct",permalink:"/blog/docs/C++/struct",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/C++/struct.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ptr",permalink:"/blog/docs/C++/ptr"},next:{title:"Document",permalink:"/blog/docs/C4 Model/document"}},s=[{value:"Example",id:"example",children:[]}],p={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"struct"},"Struct"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"Struct \u662f class \u7684\u524d\u8eab\uff0c\u662f\u4e00\u7a2e\u985e\u5225\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u5efa\u69cb\u5b50\u70ba\u540c\u540d function\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u70ba C \u8a9e\u8a00\u4f7f\u7528\uff0c\u5728 C++\u662f\u4ee5 class \u53d6\u4ee3\u4e4b\u3002")),(0,c.kt)("h3",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},'struct ball\n{\n    string color;\n    int size;\n    bool statusOK = true;\n    ball() //\u5efa\u69cb\u5b50\n    {\n        cout << "\u9032\u5165\u5efa\u69cb\u5b50" << endl;\n        statusOK = false;\n    }\n};\n\nint main(void)\n{\n    // declare method 1\n    ball nike;\n    nike.color = "black";\n    nike.size = 29.5;\n\n    // declare method 2\n    // ball nike = {"yello", 29, false};\n\n    cout << "Ball\'s color is " << nike.color << endl;\n    cout << "Ball\'s size is " << nike.size << endl;\n    cout << "Ball\'s statusOK is " << nike.statusOK << endl;\n\n    return 0;\n}\n')))}f.isMDXComponent=!0}}]);