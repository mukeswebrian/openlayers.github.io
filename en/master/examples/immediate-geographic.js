(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{312:function(e,a,r){"use strict";r.r(a);var n=r(3),t=r(2),o=r(26),w=r(5),c=r(63),s=r(48),i=r(22),d=r(11),p=r(62),h=r(4),m=r(55);Object(h.t)();for(var b=new w.a({source:new c.a({layer:"toner"})}),l=new n.a({layers:[b],target:"map",view:new t.a({center:[0,0],zoom:2})}),u=new s.a({radius:8,fill:new i.a({color:"rgb(255, 153, 0)"})}),v=new d.c({image:u}),f=1e3,y=new Array(f),M=0;M<f;++M){var O=360*Math.random()-180,g=180*Math.random()-90;y[M]=new o.a([O,g])}b.on("postrender",(function(e){for(var a=Object(p.b)(e),r=0;r<f;++r){var n=Object(m.e)(Math.pow((f-r)/f,.15));n<.1||(u.setOpacity(n),u.setScale(n),a.setStyle(v),a.drawGeometry(y[r]))}var t=360*Math.random()-180,w=180*Math.random()-90;y.push(new o.a([t,w])),y.shift(),l.render()}))}},[[312,0]]]);
//# sourceMappingURL=immediate-geographic.js.map