(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{297:function(e,n,t){"use strict";t.r(n);var r=t(3),o=t(2),i=t(68),a=new(t(107).a)({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"ne:ne"},serverType:"geoserver",crossOrigin:"anonymous"}),c=new i.a({source:a}),s=new o.a({center:[0,0],zoom:1}),u=new r.a({layers:[c],target:"map",view:s});u.on("singleclick",(function(e){document.getElementById("info").innerHTML="";var n=s.getResolution(),t=a.getFeatureInfoUrl(e.coordinate,n,"EPSG:3857",{INFO_FORMAT:"text/html"});t&&fetch(t).then((function(e){return e.text()})).then((function(e){document.getElementById("info").innerHTML=e}))})),u.on("pointermove",(function(e){if(!e.dragging){var n=u.getEventPixel(e.originalEvent),t=u.forEachLayerAtPixel(n,(function(){return!0}));u.getTargetElement().style.cursor=t?"pointer":""}}))}},[[297,0]]]);
//# sourceMappingURL=getfeatureinfo-image.js.map