/*! tpl.js 0.3.0, github.com/niceue/tpl.js */
!function(n){function t(n,t){var i=e(n);return t?i(t):i}function e(n){n=n||"",/^#\w+$/.test(n)&&(n=document.getElementById(n.substring(1)).innerHTML);for(var e,i,r=t.begin,u=t.end,f=t.variable,c=f||"$",d=function(n){return n.trim?n.trim():n.replace(/^\s*|\s*$/g,"")},o=function(n){return n.replace(/('|\\|\r?\n)/g,"\\$1")},s="var "+c+"="+c+"||this,__='',echo=function(s){__+=s},include=function(t,d){__+=tpl(t).call(d||"+c+")};"+(f?"":"with($||{}){"),_=r.length,g=u.length,l=n.indexOf(r);-1!=l&&(e=n.indexOf(u),!(l>e));)s+="__+='"+o(n.substring(0,l))+"';",i=d(n.substring(l+_,e)),0===i.indexOf("=")?(i=i.substring(1),s+="typeof ("+i+")!=='undefined'&&(__+="+i+");"):s+=i+";",n=n.substring(e+g),l=n.indexOf(r);return s+="__+='"+o(n)+"'"+(f?";":"}")+"return __",new Function(c,s)}t.begin="<#",t.end="#>",n.tpl=t,"function"==typeof define&&define("tpl",[],function(){return t})}(window);