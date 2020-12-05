(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{41:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),i=n(30),a=n.n(i),o=n(10),l=(n(41),n(15)),j=n(3),u=n(12),d="hsl(209, 23%, 22%)",b="hsl(207, 26%, 17%)",h="hsl(200, 15%, 8%)",O="hsl(0, 0%, 52%)",x="hsl(0, 0%, 98%)",p="hsl(0, 0%, 100%)";function f(e){var t=e.mode,n=e.setMode,r="light"===t?Object(c.jsx)(u.c,{}):Object(c.jsx)(u.b,{});return Object(c.jsx)("header",{style:{backgroundColor:"light"===t?p:d,color:"light"===t?h:p},className:"shadow-box",children:Object(c.jsxs)("div",{id:"nav",children:[Object(c.jsx)("h1",{children:"Where in the world ?"}),Object(c.jsx)("div",{onClick:n,id:"edit-mode",children:Object(c.jsxs)("h1",{children:[r," Dark Mode"]})})]})})}var v=n(35),m=n(9),g=n.n(m),k=n(11),C=n(31),N=n.n(C),y=n(32),w=n(33),S=n(19),A=n.n(S),L=new(function(){function e(){Object(y.a)(this,e)}return Object(w.a)(e,[{key:"getAll",value:function(){var e=Object(k.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("https://restcountries.eu/rest/v2/all");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getByName",value:function(){var e=Object(k.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("https://restcountries.eu/rest/v2/name/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}());function B(e){var t=e.mode,n=Object(r.useState)(""),s=Object(o.a)(n,2),i=s[0],a=s[1],l=Object(r.useState)(!1),j=Object(o.a)(l,2),x=j[0],f=j[1],m=Object(r.useState)(""),C=Object(o.a)(m,2),y=C[0],w=C[1],S=Object(r.useState)([]),A=Object(o.a)(S,2),B=A[0],D=A[1],F=Object(r.useState)([]),I=Object(o.a)(F,2),M=I[0],P=I[1],R=Object(r.useState)(!0),T=Object(o.a)(R,2),z=T[0],J=T[1];return Object(r.useEffect)((function(){(function(){var e=Object(k.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.getAll();case 2:(t=e.sent)&&(D(t),P(t),J(!1));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){if(f(!1),y.length>0||i.length>0){var e=Object(v.a)(B).filter((function(e){return y.length>0?e.region===y&&e.name.toLowerCase().substr(0,i.length)===i.toLowerCase():e.name.toLowerCase().substr(0,i.length)===i.toLowerCase()}));P(e)}else P(B)}),[y,i,B]),Object(c.jsxs)("main",{style:{color:"light"===t?h:p},id:"home-container",children:[Object(c.jsxs)("section",{className:"search",children:[Object(c.jsxs)("div",{id:"input-search",style:{backgroundColor:"light"===t?p:d,color:"light"===t?h:p},className:"shadow-box",children:[Object(c.jsx)(u.d,{size:26}),Object(c.jsx)("input",{type:"text",name:"search",id:"search",onChange:function(e){return a(e.target.value)},placeholder:"Search for a country...",style:{color:"light"===t?O:p}})]}),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"filter-box shadow-box",style:{backgroundColor:"light"===t?p:d},children:[Object(c.jsx)("div",{onClick:function(){return f(!x)},className:"filter-button",children:Object(c.jsx)("p",{children:y.length>0?y:"Filter by Region"})}),x&&Object(c.jsxs)("div",{className:"filter-options shadow-box",style:{backgroundColor:"light"===t?p:d},children:[Object(c.jsx)("li",{onClick:function(){return w("Africa")},children:"Africa"}),Object(c.jsx)("li",{onClick:function(){return w("Americas")},children:"Americas"}),Object(c.jsx)("li",{onClick:function(){return w("Asia")},children:"Asia"}),Object(c.jsx)("li",{onClick:function(){return w("Europe")},children:"Europe"}),Object(c.jsx)("li",{onClick:function(){return w("Oceania")},children:"Oceania"})]})]})})]}),Object(c.jsx)("section",{className:"country-container",children:z?Object(c.jsx)("div",{className:"align-center",children:Object(c.jsx)(N.a,{type:"ThreeDots",color:"light"===t?b:p,height:100,width:100})}):M.map((function(e){return Object(c.jsx)(E,{data:e,mode:t},e.name)}))})]})}function E(e){var t=e.data,n=e.mode,r=Object(j.f)();return Object(c.jsxs)("div",{className:"country-box shadow-box",style:{backgroundColor:"light"===n?p:d},onClick:function(){return r.push("/".concat(t.name))},children:[Object(c.jsx)("div",{className:"img-container",children:Object(c.jsx)("img",{src:t.flag,alt:"flag ".concat(t.name)})}),Object(c.jsxs)("div",{className:"info",children:[Object(c.jsx)("p",{className:"name",children:t.name}),Object(c.jsxs)("p",{className:"sub-info",children:[Object(c.jsx)("span",{children:"Population:"})," ",t.population]}),Object(c.jsxs)("p",{className:"sub-info",children:[Object(c.jsx)("span",{children:"Region:"})," ",t.region]}),Object(c.jsxs)("p",{className:"sub-info",children:[Object(c.jsx)("span",{children:"Capital:"})," ",t.capital]})]})]})}function D(e){var t=e.mode,n=Object(r.useState)(null),s=Object(o.a)(n,2),i=s[0],a=s[1],l=Object(j.g)().name,h=Object(j.f)();return Object(r.useEffect)((function(){(function(){var e=Object(k.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.getByName(l);case 2:(t=e.sent)&&a(t[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),Object(c.jsxs)("main",{className:"details-container",children:[Object(c.jsx)("div",{className:"back-button shadow-box",onClick:function(){return h.goBack()},style:{color:"light"===t?d:p,backgroundColor:"light"===t?p:d},children:Object(c.jsxs)("p",{children:[Object(c.jsx)(u.a,{size:23})," Back"]})}),Object(c.jsxs)("section",{children:[Object(c.jsx)("div",{className:"flag-container",children:Object(c.jsx)("img",{src:null===i||void 0===i?void 0:i.flag,alt:null===i||void 0===i?void 0:i.name})}),Object(c.jsxs)("div",{className:"info-container",style:{color:"light"===t?b:p},children:[Object(c.jsx)("h2",{children:null===i||void 0===i?void 0:i.name}),Object(c.jsxs)("div",{className:"info-content",children:[Object(c.jsxs)("div",{className:"info-left",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Native Name: "}),null===i||void 0===i?void 0:i.nativeName]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Population: "}),null===i||void 0===i?void 0:i.population]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Region: "}),null===i||void 0===i?void 0:i.region]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Sub Region: "}),null===i||void 0===i?void 0:i.subregion]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Capital: "}),null===i||void 0===i?void 0:i.capital]})]}),Object(c.jsxs)("div",{className:"info-right",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Top Level Domain: "}),null===i||void 0===i?void 0:i.topLevelDomain]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Currencies: "}),null===i||void 0===i?void 0:i.currencies.map((function(e){return e.code})).join(",")]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Currencies: "}),null===i||void 0===i?void 0:i.languages.map((function(e){return e.name})).join(",")]})]})]}),(null===i||void 0===i?void 0:i.borders)&&i.borders.length>0&&Object(c.jsxs)("div",{className:"info-content",children:[Object(c.jsx)("p",{id:"border-subtitle",children:"Border Countries: "}),Object(c.jsx)("div",{className:"border-container",children:null===i||void 0===i?void 0:i.borders.map((function(e,n){return Object(c.jsx)(F,{country:e,mode:t},n)}))})]})]})]})]})}function F(e){var t=e.country,n=e.mode;return Object(c.jsx)("div",{className:"name-country-box shadow-box",style:{backgroundColor:"light"===n?p:d,color:"light"===n?d:p},children:t})}var I=function(){var e=Object(r.useState)("light"),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(r.useEffect)((function(){var e=localStorage.getItem("@mode");e&&s(e)}),[]),Object(c.jsx)(l.a,{basename:"/",children:Object(c.jsxs)("div",{id:"all-container",style:{backgroundColor:"light"===n?x:b},children:[Object(c.jsx)(f,{setMode:function(){var e;e="light"===n?"dark":"light",localStorage.setItem("@mode",e),s(e)},mode:n}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/",exact:!0,render:function(){return Object(c.jsx)(B,{mode:n})},mode:n}),Object(c.jsx)(j.a,{path:"/:name",render:function(){return Object(c.jsx)(D,{mode:n})},mode:n})]})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),M()}},[[87,1,2]]]);
//# sourceMappingURL=main.58f54a5c.chunk.js.map