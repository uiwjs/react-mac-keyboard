(this["webpackJsonp@uiw/react-mac-keyboard"]=this["webpackJsonp@uiw/react-mac-keyboard"]||[]).push([[251],{310:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"==typeof o&&!o(e))return e;for(var r,i=c.length;-1!==t.code.indexOf(r=n(a,i));)++i;return c[i]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(r>=o.length);u++){var s=i[u];if("string"==typeof s||s.content&&"string"==typeof s.content){var p=o[r],g=t.tokenStack[p],l="string"==typeof s?s:s.content,f=n(a,p),k=l.indexOf(f);if(-1<k){++r;var h=l.substring(0,k),m=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),d=l.substring(k+f.length),y=[];h&&y.push.apply(y,c([h])),y.push(m),d&&y.push.apply(y,c([d])),"string"==typeof s?i.splice.apply(i,[u,1].concat(y)):s.content=y}}else s.content&&c(s.content)}return i}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=251.33c4e03a.chunk.js.map