(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{431:function(t,e,i){"use strict";i.r(e);var o=i(3),a=i(2),n=i(5),s=i(12),r=i(46),p=function(t){function e(e){t.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,maxZoom:void 0!==e.maxZoom?e.maxZoom:18,minZoom:e.minZoom,projection:e.projection,wrapX:e.wrapX}),this.account_=e.account,this.mapId_=e.map||"",this.config_=e.config||{},this.templateCache_={},this.initializeMap_()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getConfig=function(){return this.config_},e.prototype.updateConfig=function(t){Object(s.a)(this.config_,t),this.initializeMap_()},e.prototype.setConfig=function(t){this.config_=t||{},this.initializeMap_()},e.prototype.initializeMap_=function(){var t=JSON.stringify(this.config_);if(this.templateCache_[t])this.applyTemplate_(this.templateCache_[t]);else{var e="https://"+this.account_+".carto.com/api/v1/map";this.mapId_&&(e+="/named/"+this.mapId_);var i=new XMLHttpRequest;i.addEventListener("load",this.handleInitResponse_.bind(this,t)),i.addEventListener("error",this.handleInitError_.bind(this)),i.open("POST",e),i.setRequestHeader("Content-type","application/json"),i.send(JSON.stringify(this.config_))}},e.prototype.handleInitResponse_=function(t,e){var i=e.target;if(!i.status||i.status>=200&&i.status<300){var o;try{o=JSON.parse(i.responseText)}catch(t){return void this.setState(r.a.ERROR)}this.applyTemplate_(o),this.templateCache_[t]=o,this.setState(r.a.READY)}else this.setState(r.a.ERROR)},e.prototype.handleInitError_=function(t){this.setState(r.a.ERROR)},e.prototype.applyTemplate_=function(t){var e="https://"+t.cdn_url.https+"/"+this.account_+"/api/v1/map/"+t.layergroupid+"/{z}/{x}/{y}.png";this.setUrl(e)},e}(i(30).a),c=i(9),h={layers:[{type:"cartodb",options:{cartocss_version:"2.1.1",cartocss:"#layer { polygon-fill: #F00; }",sql:"select * from european_countries_e where area > 0"}}]},u=new p({account:"documentation",config:h});new o.a({layers:[new n.a({source:new c.b}),new n.a({source:u})],target:"map",view:new a.a({center:[0,0],zoom:2})});document.getElementById("country-area").addEventListener("change",(function(){var t;t=this.value,h.layers[0].options.sql="select * from european_countries_e where area > "+t,u.setConfig(h)}))}},[[431,0]]]);
//# sourceMappingURL=cartodb.js.map