(this.webpackJsonpdoor_opener_react=this.webpackJsonpdoor_opener_react||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(14),o=n.n(r),s=(n(37),n(4)),i=(n(38),n(32)),u=n(23),l=n.n(u),b=n(26),j=n.p+"static/media/remote.7c35736d.png",d=(n(40),{serviceUrl:"https://home.davidsantiago.net"}),p=n(7),v=(n(25),n(27)),h=n(20),O=n(31),f=n(3);function g(){var e,t,n=Object(c.useState)(1),a=Object(s.a)(n,2),r=a[0],o=a[1],u=Object(c.useState)(!1),g=Object(s.a)(u,2),m=g[0],x=g[1],M=null!==(e=localStorage.getItem("secret"))&&void 0!==e?e:null,C=null!==(t=localStorage.getItem("user"))&&void 0!==t?t:null,S="".concat(d.serviceUrl,"/").concat(M),k=Object(O.useGeolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:1e4}),I=k.coords,y=k.isGeolocationEnabled,E=function(e,t,n,c){var a=function(e){return e*(Math.PI/180)},r=a(n-e),o=a(c-t),s=Math.sin(r/2)*Math.sin(r/2)+Math.cos(a(e))*Math.cos(a(n))*Math.sin(o/2)*Math.sin(o/2);return 6371*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)))},N=function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=2;break}return e.abrupt("return");case 2:if(x(!0),console.log({coords:I}),!y){e.next=10;break}if(!(E(Number("39.07333869546294"),Number("-3.620745524096387"),I.latitude,I.longitude)>.5)){e.next=10;break}return p.b.error("Lo siento, no est\xe1s en casa",{autoClose:2e3}),x(!1),e.abrupt("return");case 10:return o(.2),p.b.info("Abriendo puerta... ",{autoClose:2e3}),e.prev=12,e.next=15,h.a.get(S);case 15:t="Pap\xe1"===C?"bienvenido":"bienvenida",p.b.success("Puerta abierta, ".concat(t," a casa ").concat(C),{autoClose:2e3}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(12),p.b.error("Error abriendo la puerta: ".concat(e.t0),{autoClose:2e3});case 22:return e.prev=22,o(1),x(!1),e.finish(22);case 26:case"end":return e.stop()}}),e,null,[[12,19,22,26]])})));return function(){return e.apply(this,arguments)}}(),P=Object(v.useDoubleTap)(N);return Object(f.jsx)("div",{children:Object(f.jsx)("img",Object(i.a)({src:j,className:"button",alt:"Abrir",style:{opacity:r}},P))})}var m=n(10);n(54);function x(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(m.c)(),o=Object(s.a)(r,2),i=(o[0],o[1]),u={"001":"Pap\xe1","002":"Mam\xe1","003":"Guadalupe"};return Object(f.jsxs)("div",{className:"form",children:[Object(f.jsx)("input",{type:"text",id:"key",placeholder:"Introduce llave",onChange:function(e){return a(e.target.value)}}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{id:"btn-send",onClick:function(){var e;if(n&&""!==n){var t=n.slice(-3);localStorage.setItem("secret",n),localStorage.setItem("user",null!==(e=u[t])&&void 0!==e?e:"Desconocido"),i("/button")}},children:"Enviar"})]})}var M=function(){var e,t="1.3.7";console.log("version",t);var n=null!==(e=localStorage.getItem("secret"))&&void 0!==e?e:null,a=Object(m.c)(),r=Object(s.a)(a,2),o=(r[0],r[1]);return Object(c.useEffect)((function(){h.a.get(d.serviceUrl).then((function(){p.b.success("Servicio preparado",{autoClose:2e3})})).catch((function(e){p.b.error("Error de comunicaci\xf3n: ".concat(e),{autoClose:2e3})}))}),[]),n&&o("/button"),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(m.b,{component:x,path:"/"}),Object(f.jsx)(m.b,{component:g,path:"/button"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"version",children:Object(f.jsx)(m.a,{to:"/",children:t})}),Object(f.jsx)(p.a,{newestOnTop:!0})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(M,{})}),document.getElementById("root")),C()}},[[55,1,2]]]);
//# sourceMappingURL=main.e35864a6.chunk.js.map