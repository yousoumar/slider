(this.webpackJsonpslider=this.webpackJsonpslider||[]).push([[0],[,,,,,,,,,function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),a=i(3),s=i.n(a),r=(i(9),i(4)),d=(i(10),i.p+"static/media/chevron-left.310de47d.svg"),l=i.p+"static/media/chevron-right.c3ee4024.svg",o=i(0);function j(e){var t=e.data,i=void 0===t?[]:t,n=Object(c.useState)(0),a=Object(r.a)(n,2),s=a[0],j=a[1];return Object(o.jsxs)("div",{className:"slider",children:[i.map((function(e,t){return Object(o.jsx)("div",{className:s===t?"slide active":"slide",children:Object(o.jsx)("img",{src:e.imgUrl,alt:""})},e.id)})),Object(o.jsx)("button",{onClick:function(){j(s>0?s-1:i.length-1)},className:"slide-button prev",children:Object(o.jsx)("img",{src:d,alt:""})}),Object(o.jsx)("button",{onClick:function(){s<i.length-1?j(s+1):j(0)},className:"slide-button next",children:Object(o.jsx)("img",{src:l,alt:""})}),Object(o.jsx)("div",{className:"dots-container",children:Array.from({length:i.length}).map((function(e,t){return Object(o.jsx)("div",{className:s===t?"dot active":"dot",onClick:function(){return function(e){j(e)}(t)}})}))})]})}var m=[{id:1,imgUrl:i.p+"static/media/image-one.11c52fc6.jpg"},{id:2,imgUrl:i.p+"static/media/image-two.67a63683.jpg"},{id:3,imgUrl:i.p+"static/media/image-three.4775e2d8.jpg"},{id:4,imgUrl:i.p+"static/media/image-four.8a6e501e.jpg"},{id:5,imgUrl:i.p+"static/media/image-five.d5c8535b.jpg"}];var g=function(){return Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(j,{data:m})})};i(12);s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}],[[13,1,2]]]);