!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("grapesjs"),require("jQuery")):"function"==typeof define&&define.amd?define("grapesjs-components-farmer",["grapesjs","jQuery"],t):"object"==typeof exports?exports["grapesjs-components-farmer"]=t(require("grapesjs"),require("jQuery")):e["grapesjs-components-farmer"]=t(e.grapesjs,e.jQuery)}(window,function(e,t){return function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=0)}({0:function(e,t,a){e.exports=a("tjUo")},"6Cy+":function(e,t,a){(function(t){var n=a("cLSn"),o=a("Rgic"),r=1/0,l=9007199254740991,c="[object Arguments]",s="[object Error]",i="[object Function]",p="[object GeneratorFunction]",u="[object Symbol]",m=/\b__p \+= '';/g,d=/\b(__p \+=) '' \+/g,g=/(__e\(.*?\)|\b__t\)) \+\n'';/g,f=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,b=/^(?:0|[1-9]\d*)$/,h=/($^)/,_=/['\n\r\u2028\u2029\\]/g,v={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},y="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,j=y||x||Function("return this")();function w(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function k(e,t){return function(e,t){for(var a=-1,n=e?e.length:0,o=Array(n);++a<n;)o[a]=t(e[a],a,e);return o}(t,function(t){return e[t]})}function T(e){return"\\"+v[e]}var P,O,C=Object.prototype,L=C.hasOwnProperty,S=C.toString,N=j.Symbol,H=C.propertyIsEnumerable,E=(P=Object.keys,O=Object,function(e){return P(O(e))}),M=Math.max,q=N?N.prototype:void 0,D=q?q.toString:void 0;function R(e,t){var a=X(e)||function(e){return function(e){return G(e)&&z(e)}(e)&&L.call(e,"callee")&&(!H.call(e,"callee")||S.call(e)==c)}(e)?function(e,t){for(var a=-1,n=Array(e);++a<e;)n[a]=t(a);return n}(e.length,String):[],n=a.length,o=!!n;for(var r in e)!t&&!L.call(e,r)||o&&("length"==r||U(r,n))||a.push(r);return a}function B(e,t,a,n){return void 0===e||Q(e,C[a])&&!L.call(n,a)?t:e}function I(e,t,a){var n=e[t];L.call(e,t)&&Q(n,a)&&(void 0!==a||t in e)||(e[t]=a)}function A(e){if(!Y(e))return function(e){var t=[];if(null!=e)for(var a in Object(e))t.push(a);return t}(e);var t=$(e),a=[];for(var n in e)("constructor"!=n||!t&&L.call(e,n))&&a.push(n);return a}function F(e,t){return t=M(void 0===t?e.length-1:t,0),function(){for(var a=arguments,n=-1,o=M(a.length-t,0),r=Array(o);++n<o;)r[n]=a[t+n];n=-1;for(var l=Array(t+1);++n<t;)l[n]=a[n];return l[t]=r,w(e,this,l)}}function Z(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||G(e)&&S.call(e)==u}(e))return D?D.call(e):"";var t=e+"";return"0"==t&&1/e==-r?"-0":t}function U(e,t){return!!(t=null==t?l:t)&&("number"==typeof e||b.test(e))&&e>-1&&e%1==0&&e<t}function V(e,t,a){if(!Y(a))return!1;var n=typeof t;return!!("number"==n?z(a)&&U(t,a.length):"string"==n&&t in a)&&Q(a[t],e)}function $(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||C)}function Q(e,t){return e===t||e!=e&&t!=t}var X=Array.isArray;function z(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=l}(e.length)&&!function(e){var t=Y(e)?S.call(e):"";return t==i||t==p}(e)}function K(e){return!!G(e)&&(S.call(e)==s||"string"==typeof e.message&&"string"==typeof e.name)}function Y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function G(e){return!!e&&"object"==typeof e}var W,J=(W=function(e,t,a,n){!function(e,t,a,n){a||(a={});for(var o=-1,r=t.length;++o<r;){var l=t[o],c=n?n(a[l],e[l],l,a,e):void 0;I(a,l,void 0===c?e[l]:c)}}(t,function(e){return z(e)?R(e,!0):A(e)}(t),e,n)},F(function(e,t){var a=-1,n=t.length,o=n>1?t[n-1]:void 0,r=n>2?t[2]:void 0;for(o=W.length>3&&"function"==typeof o?(n--,o):void 0,r&&V(t[0],t[1],r)&&(o=n<3?void 0:o,n=1),e=Object(e);++a<n;){var l=t[a];l&&W(e,l,a,o)}return e}));function ee(e){return z(e)?R(e):function(e){if(!$(e))return E(e);var t=[];for(var a in Object(e))L.call(e,a)&&"constructor"!=a&&t.push(a);return t}(e)}var te=F(function(e,t){try{return w(e,void 0,t)}catch(e){return K(e)?e:new Error(e)}});e.exports=function(e,t,a){var r,l=o.imports._.templateSettings||o;a&&V(e,t,a)&&(t=void 0),e=null==(r=e)?"":Z(r),t=J({},t,l,B);var c,s,i=J({},t.imports,l.imports,B),p=ee(i),u=k(i,p),b=0,v=t.interpolate||h,y="__p += '",x=RegExp((t.escape||h).source+"|"+v.source+"|"+(v===n?f:h).source+"|"+(t.evaluate||h).source+"|$","g"),j="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";e.replace(x,function(t,a,n,o,r,l){return n||(n=o),y+=e.slice(b,l).replace(_,T),a&&(c=!0,y+="' +\n__e("+a+") +\n'"),r&&(s=!0,y+="';\n"+r+";\n__p += '"),n&&(y+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),b=l+t.length,t}),y+="';\n";var w=t.variable;w||(y="with (obj) {\n"+y+"\n}\n"),y=(s?y.replace(m,""):y).replace(d,"$1").replace(g,"$1;"),y="function("+(w||"obj")+") {\n"+(w?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(c?", __e = _.escape":"")+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+y+"return __p\n}";var P=te(function(){return Function(p,j+"return "+y).apply(void 0,u)});if(P.source=y,K(P))throw P;return P}}).call(this,a("yLpj"))},Rgic:function(e,t,a){(function(t){var n=a("cLSn"),o=1/0,r="[object Symbol]",l=/[&<>"'`]/g,c=RegExp(l.source),s="object"==typeof t&&t&&t.Object===Object&&t,i="object"==typeof self&&self&&self.Object===Object&&self,p=s||i||Function("return this")();var u,m=(u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},function(e){return null==u?void 0:u[e]}),d=Object.prototype.toString,g=p.Symbol,f=g?g.prototype:void 0,b=f?f.toString:void 0,h={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:n,variable:"",imports:{_:{escape:function(e){return t=e,(e=null==t?"":function(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==r}(e))return b?b.call(e):"";var t=e+"";return"0"==t&&1/e==-o?"-0":t}(t))&&c.test(e)?e.replace(l,m):e;var t}}}};e.exports=h}).call(this,a("yLpj"))},TpXK:function(e,t,a){"use strict";a.r(t);var n=a("xeH2"),o=a.n(n);t.default=function(e,t){var a=e.Commands,n=e.Panels,r=e.getConfig(),l="sw-visibility",c="export-template",s="open-sm",i="open-layers",p="open-blocks",u="fullscreen",m="preview";r.showDevices=0;var d=t.textCleanCanvas||"Are you sure to clean the canvas?";a.add("set-device-desktop",function(e){return e.setDevice("Desktop")}),a.add("set-device-tablet",function(e){return e.setDevice("Tablet")}),a.add("set-device-mobile",function(e){return e.setDevice("Mobile portrait")}),a.add("canvas-clear",function(e){return confirm(d)&&e.runCommand("core:canvas-clear")}),n.getPanels().reset([{id:"commands",buttons:[{}]},{id:"options",buttons:[{id:l,command:l,context:l,active:1,className:"fa fa-square-o",attributes:{title:"Show Borders"}},{id:m,context:m,command:function(e){return e.runCommand(m)},className:"fa fa-eye",attributes:{title:"Preview"}},{id:u,command:u,context:u,className:"fa fa-arrows-alt",attributes:{title:"Fullscreen"}},{id:c,className:"fa fa-code",command:function(e){return e.runCommand(c)},attributes:{title:"Show code"}},{id:"undo",className:"fa fa-undo",command:function(e){return e.runCommand("core:undo")},attributes:{title:"Undo"}},{id:"redo",className:"fa fa-repeat",command:function(e){return e.runCommand("core:redo")},attributes:{title:"Redo"}},{id:"canvas-clear",className:"fa fa-trash",command:function(e){return e.runCommand("canvas-clear")},attributes:{title:"Clear canvas"}}]},{id:"views",buttons:[{id:s,command:s,className:"fa fa-paint-brush",attributes:{title:"Style Manager"}},{id:"open-tm",command:"open-tm",className:"fa fa-cog",attributes:{title:"Settings"}},{id:i,command:i,className:"fa fa-bars",attributes:{title:"Layers"}},{id:p,command:p,className:"fa fa-th-large",active:1,attributes:{title:"Blocks"}}]}]),n.addPanel({id:"devices-c"}).get("buttons").add([{id:"set-device-desktop",command:"set-device-desktop",className:"fa fa-desktop",active:1,attributes:{title:"Desktop"}},{id:"set-device-tablet",command:"set-device-tablet",className:"fa fa-tablet",attributes:{title:"Tablet"}},{id:"set-device-mobile",command:"set-device-mobile",className:"fa fa-mobile",attributes:{title:"Mobile"}}]),e.on("load",function(){var a=e.Panels,n=o()(e.getEl()),r=a.getButton("views","open-tm");r&&r.set("active",1);var l=a.getButton("views","open-sm");l&&l.set("active",1);var c=o()('<div class="gjs-sm-sector no-select">\n<div class="gjs-sm-title"><span class="icon-settings fa fa-cog"></span> Settings</div>\n<div class="gjs-sm-properties"></div></div>'),u=c.find(".gjs-sm-properties");u.append(n.find(".gjs-trt-traits")),n.find(".gjs-pn-views .fa-cog").hide(),n.find(".gjs-sm-sectors").before(c),c.find(".gjs-sm-title").on("click",function(){var e=u.get(0).style,t="none"===e.display;e.display=t?"block":"none"});var m=a.getButton("views",p);m&&m.set("active",1),t.showStylesOnChange&&e.on("component:selected",function(){var t=a.getButton("views",s),n=a.getButton("views",i);n&&n.get("active")||!e.getSelected()||t&&t.set("active",1)})})}},ZjPV:function(e,t,a){"use strict";a.r(t);var n=a("xeH2"),o=a.n(n);function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){l(e,t,a[t])})}return e}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.TraitManager,n=e.DomComponents,l=(e.BlockManager,n.getType("default")),c=(n.getType("select"),l.model),s=l.view,i=(n.getType("text"),c.prototype.defaults.traits.concat([{type:"text",name:"name_attr",label:"Name",placeholder:"Enter a field name.."},{type:"text",name:"label_attr",label:"Label",placeholder:"Enter a field label.."}])),p=i.concat([{type:"text",name:"value_attr",label:"Value",changeProp:1,placeholder:"Enter a default value.."},{type:"text",name:"placeholder_attr",label:"Placeholder",changeProp:1,placeholder:"Enter placeholder text.."},{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"},{type:"text",name:"pattern_attr",changeProp:1,label:"Pattern"},{type:"number",name:"min_attr",changeProp:1,label:"Min"},{type:"number",name:"max_attr",changeProp:1,label:"Max"}]);a.addType("option_attr",{events:{onchange:"onChange"},getInputEl:function(){if(!this.inputEl){var e=document.createElement("textarea");e.value=this.target.get("option_attr"),this.inputEl=e}return this.inputEl},onValueChange:function(){this.target.set("option_attr",this.model.get("value"))}});var u=c.extend({defaults:r({},c.prototype.defaults,{draggable:!0,droppable:!0,copyable:!1,label_attr:"Label"}),toHTML:function(){var e=t.comps[this.attributes.tagName],a=this.genHtml();if(e&&e.useTag){if("innerHTML"===e.useTag)return a.html();if("innerText"===e.useTag)return this.genHtml()[0].innerText}return this.genHtml()[0].outerHTML},getTraitValues:function(){var e=r({},this.attributes);return this.get("traits").each(function(t){var a=t.get("name");e[a]=t.get("value")||e[a]}),e},myInitDefaults:function(){var e=r({},this.attributes);this.get("traits").each(function(t){var a=t.get("name");a.indexOf("_attr")>0&&t.set("value",e[a])})},ensureNameAttr:function(e){var a=this.get("traits").where({name:"name_attr"})[0];if(a){var n=e.name_attr;if(!n)return n="".concat(t.formFieldsPrefix).concat(t.formNextId++),a.set("value",n),this.set("name_attr",n),!0}return!1},genHtml:function(){if(!this.view||!this.view.el){var e=document.createElement(this.attributes.tagName);return this.generateHtml(e,this.attributes.tagName)}return this.generateHtml(this.view.el,this.attributes.tagName)},generateHtml:function(e,a){var n=o()(e||this.view.el),r=this.getTraitValues(),l=l||this.get("tagName");if(t&&t.comps&&t.comps[l]){var c=t.comps[l].template;"function"==typeof c&&(this.ensureNameAttr(r)||(n.empty(),n.html(c({it:r||{}}))))}return n}}),m=s.extend({onRender:function(){return this.model.genHtml&&this.model.genHtml(),this}});n.addType("comp_input",{model:u.extend({defaults:r({},u.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_input",type_attr:"text",traits:p.concat({type:"select",name:"type_attr",label:"Type",options:[{name:"Text",value:"text"},{name:"Password",value:"password"},{name:"Email",value:"email"},{name:"Number",value:"number"},{name:"URL",value:"url"},{name:"Phone",value:"tel"},{name:"Date",value:"date"},{name:"Date Time",value:"datetime-local"},{name:"Range",value:"range"},{name:"Color Picker",value:"color"}]}),classes:["comp_input"].concat(t.comps.comp_input.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:label_attr",this.genHtml),this.listenTo(this,"change:name_attr",this.genHtml),this.listenTo(this,"change:placeholder_attr",this.genHtml)}}),view:m}),n.addType("comp_select",{model:u.extend({defaults:r({},u.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_select",option_attr:"MN::Minnesota\nTX::Texas",label_attr:"Select",traits:[{type:"option_attr"},{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"},{type:"checkbox",name:"multiple_attr",changeProp:1,label:"Multiple"}].concat(i),classes:["comp_select"].concat(t.comps.comp_select.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:label_attr",this.genHtml),this.listenTo(this,"change:name_attr",this.genHtml),this.listenTo(this,"change:multiple_attr",this.genHtml),this.listenTo(this,"change:option_attr",this.genHtml)}}),view:m}),n.addType("comp_textarea",{model:u.extend({defaults:r({},c.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_textarea",label_attr:"Message",traits:[{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"},{type:"text",name:"placeholder_attr",label:"Placeholder",changeProp:1,placeholder:"Enter placeholder text.."},{type:"number",name:"rows_attr",label:"Rows",changeProp:1,placeholder:"Enter field rows/line-height.."},{type:"number",name:"cols_attr",label:"Columns",changeProp:1,placeholder:"Enter field columns/width.."}].concat(i),classes:["comp_textarea"].concat(t.comps.comp_textarea.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:label_attr",this.genHtml),this.listenTo(this,"change:name_attr",this.genHtml),this.listenTo(this,"change:placeholder_attr",this.genHtml),this.listenTo(this,"change:cols_attr",this.genHtml),this.listenTo(this,"change:rows_attr",this.genHtml)}}),view:m}),n.addType("comp_file",{model:u.extend({defaults:r({},c.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_file",label_attr:"Choose file...",traits:[{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"},{type:"text",name:"placeholder_attr",label:"Placeholder",changeProp:1,placeholder:"Enter placeholder text.."},{type:"string",name:"accept_attr",label:"Accept",changeProp:1,placeholder:"image/jpeg, image/png, image/gif"}].concat(i),classes:["comp_file"].concat(t.comps.comp_file.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:label_attr",this.genHtml),this.listenTo(this,"change:name_attr",this.genHtml),this.listenTo(this,"change:placeholder_attr",this.genHtml),this.listenTo(this,"change:accept_attr",this.genHtml)}}),view:m}),n.addType("comp_checkbox",{model:u.extend({defaults:r({},u.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_checkbox",label_attr:"I accept the terms and use",traits:[{type:"checkbox",name:"required_attr",changeProp:1,label:"Required"}].concat(i),classes:["comp_checkbox"].concat(t.comps.comp_checkbox.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:label_attr",this.genHtml),this.listenTo(this,"change:name_attr",this.genHtml)}}),view:m}),n.addType("comp_hidden",{model:u.extend({defaults:r({},u.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_hidden",traits:[{type:"text",name:"name_attr",label:"Name",changeProp:1,placeholder:"Enter a field name..."}],classes:["comp_hidden"].concat(t.comps.comp_hidden.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:name_attr",this.genHtml)}}),view:m}),n.addType("comp_submit",{model:u.extend({defaults:r({},u.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_submit",label_attr:"Send",traits:c.prototype.defaults.traits.concat([{type:"text",name:"label_attr",label:"Label",placeholder:"Enter a field label.."}]),classes:["comp_submit"].concat(t.comps.comp_submit.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:label_attr",this.genHtml)}}),view:m}),n.addType("comp_row",{model:c.extend({defaults:r({},c.prototype.defaults,{tagName:"comp_row",draggable:!0,copyable:!1,droppable:"comp_col",classes:["comp_row"].concat(t.comps.comp_row.classes)})}),view:s}),n.addType("comp_col",{model:c.extend({defaults:r({},c.prototype.defaults,{tagName:"comp_col",draggable:"comp_row",droppable:!0,copyable:!1,classes:["comp_col"].concat(t.comps.comp_col.classes)})}),view:s}),n.addType("comp_recaptcha",{model:u.extend({defaults:r({},u.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_recaptcha",sitekey_attr:"sitekey",action_attr:"contact-us",traits:c.prototype.defaults.traits.concat([{type:"text",name:"sitekey_attr",label:"Site key",placeholder:"e.g. sitekey"},{type:"text",name:"action_attr",label:"Action",placeholder:"recaptcha action name"}]),classes:["comp_recaptcha"].concat(t.comps.comp_recaptcha.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:sitekey_attr",this.genHtml)}}),view:m}),n.addType("comp_stripe",{model:u.extend({defaults:r({},u.prototype.defaults,{draggable:!0,droppable:!1,copyable:!1,tagName:"comp_stripe",hidepostal_attr:"false",traits:c.prototype.defaults.traits.concat([{type:"text",name:"publickey_attr",label:"Public key",placeholder:"e.g. stripe public key"},{type:"checkbox",name:"hidepostal_attr",label:"Hide postal"}]),classes:["comp_stripe"].concat(t.comps.comp_recaptcha.classes)}),init:function(){this.myInitDefaults(),this.listenTo(this,"change:publickey_attr",this.genHtml)}}),view:m})}},cLSn:function(e,t){e.exports=/<%=([\s\S]+?)%>/g},fvyM:function(e,t,a){"use strict";function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){o(e,t,a[t])})}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.r(t),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.BlockManager,o=t.comps;o.blocks,o.blockCategories;t.resetBlocks&&a.getAll().reset();var r={category:t.categoryLabel};a.add("comp_col1").set(n({label:o.comp_col1.label,attributes:{class:"gjs-fonts gjs-f-b1"},content:{type:"comp_row",components:[{type:"comp_col",classes:o.comp_col1.classes.concat(o.comp_col.classes)}]}},r)),a.add("comp_col2").set(n({label:o.comp_col2.label,attributes:{class:"gjs-fonts gjs-f-b2"},content:{type:"comp_row",components:[{type:"comp_col",classes:o.comp_col2.classes.concat(o.comp_col.classes)},{type:"comp_col",classes:o.comp_col2.classes.concat(o.comp_col.classes)}]}},r)),a.add("comp_col3").set(n({label:o.comp_col3.label,attributes:{class:"gjs-fonts gjs-f-b3"},content:{type:"comp_row",components:[{type:"comp_col",classes:o.comp_col3.classes.concat(o.comp_col.classes)},{type:"comp_col",classes:o.comp_col3.classes.concat(o.comp_col.classes)},{type:"comp_col",classes:o.comp_col3.classes.concat(o.comp_col.classes)}]}},r)),a.add("comp_submit",n({label:'\n      <div style="color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n    display: inline-block;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    border: 1px solid transparent;\n    padding-left: 5px;\n    padding-right: 5px;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    margin-top: 12px;\n    margin-bottom: 16px;\n    width: 50px;">&nbsp;</div>\n      <div class="gjs-block-label">'.concat(o.comp_submit.label,"</div>\n    "),content:{type:"comp_submit"}},r)),a.add("comp_input",n({label:'\n    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>\n      <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>\n    </svg>\n    <div class="gjs-block-label">'.concat(o.comp_input.label,"</div>"),content:{type:"comp_input"}},r)),a.add("comp_textarea",n({label:'\n    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <path class="gjs-block-svg-path" d="M22,7.5 C22,6.6 21.5,6 20.75,6 L3.25,6 C2.5,6 2,6.6 2,7.5 L2,16.5 C2,17.4 2.5,18 3.25,18 L20.75,18 C21.5,18 22,17.4 22,16.5 L22,7.5 Z M21,17 L3,17 L3,7 L21,7 L21,17 Z"></path>\n      <polygon class="gjs-block-svg-path" points="4 8 5 8 5 12 4 12"></polygon>\n      <polygon class="gjs-block-svg-path" points="19 7 20 7 20 17 19 17"></polygon>\n      <polygon class="gjs-block-svg-path" points="20 8 21 8 21 9 20 9"></polygon>\n      <polygon class="gjs-block-svg-path" points="20 15 21 15 21 16 20 16"></polygon>\n    </svg>\n    <div class="gjs-block-label">'.concat(o.comp_textarea.label,"</div>"),content:{type:"comp_textarea"}},r)),a.add("comp_select",n({label:'\n    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>\n      <polygon class="gjs-block-svg-path" transform="translate(18.500000, 12.000000) scale(1, -1) translate(-18.500000, -12.000000) " points="18.5 11 20 13 17 13"></polygon>\n      <rect class="gjs-block-svg-path" x="4" y="11.5" width="11" height="1"></rect>\n    </svg>\n    <div class="gjs-block-label">'.concat(o.comp_select.label,"</div>"),content:{type:"comp_select"}},r)),a.add("comp_file",n({label:o.comp_file.label,attributes:{class:"fa fa-file"},content:{type:"comp_file"}},r)),a.add("comp_checkbox",n({label:o.comp_checkbox.label,attributes:{class:"fa fa-check-square"},content:{type:"comp_checkbox"}},r)),a.add("comp_hidden",n({label:'<svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n      <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>\n      <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>\n    </svg>\n    <div class="gjs-block-label">'.concat(o.comp_hidden.label,"</div>"),content:{type:"comp_hidden"}},r)),a.add("comp_text",n({label:o.comp_text.label,attributes:{class:"gjs-fonts gjs-f-text"},content:{type:"text",content:"Insert your text here",style:{padding:"10px"},activeOnRender:1}},r)),a.add("comp_image",n({label:o.comp_image.label,attributes:{class:"gjs-fonts gjs-f-image"},content:{style:{color:"black"},type:"image",activeOnRender:1}},r)),a.add("comp_map",n({label:o.comp_map.label,attributes:{class:"fa fa-map-o"},content:{type:"map",style:{height:"350px"}}},r)),a.add("comp_recaptcha",n({label:'\n      <image src="https://www.gstatic.com/recaptcha/api2/logo_48.png">\n      <br /><br />\n    <div class="gjs-block-label">'.concat(o.comp_recaptcha.label,"</div>"),content:{type:"comp_recaptcha"}},r)),a.add("comp_stripe",n({label:o.comp_stripe.label,attributes:{class:"fa fa-cc-stripe"},content:{type:"comp_stripe"}},r))}},kYSa:function(t,a){t.exports=e},tjUo:function(e,t,a){"use strict";a.r(t);var n=a("xeH2"),o=a.n(n),r=a("6Cy+"),l=a.n(r),c=a("kYSa"),s=a.n(c);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=s.a.plugins.add("grapesjs-components-farmer",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.Commands,r=(e.Panels,t.comps||{}),c={comp_input:{label:"Input",classes:"form-group",useTag:"div",template:"\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"<%=it.type_attr%>\" class=\"form-control\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n      "},comp_select:{label:"Select",classes:"form-group",useTag:"div",template:'\n        <label for="<%=it.name_attr%>"><%=it.label_attr%></label>\n        <select <%= it.multiple_attr ? \'multiple \' : \'\' %><%= it.required_attr ? \'required \' : \'\' %>class="form-control" name="<%=it.name_attr%>">\n          <option selected>-- Please select an option -- </option>\n          <% (it.option_attr + "").trim().split("\\n").forEach(function(option){ %>\n          <% var msgProps = option.split(\'::\');\n          %> <option value="<%= msgProps[0]%>"><%= msgProps[1] || msgProps[0] %></option>\n          <% }); %>\n        </select>\n      '},comp_file:{label:"File",classes:"custom-file",useTag:"div",template:"\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"file\" class=\"custom-file-input\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\" <%= it.accept_attr ? 'accept=\"' + it.accept_attr + '\"' : '' %> <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n        <label for=\"<%=it.name_attr%>\" class=\"custom-file-label\"><%=it.label_attr%></label>\n      "},comp_textarea:{label:"Textarea",classes:"form-group",useTag:"div",template:"\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n        <textarea <%= it.required_attr ? 'required ' : '' %><%= it.rows_attr ? 'rows=\"' + it.rows_attr + '\" ' : '' %><%= it.rows_attr ? 'cols=\"' + it.rows_attr + '\" ' : '' %>class=\"form-control\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\"><%= it.value_attr || '' %></textarea>\n      "},comp_checkbox:{label:"Checkbox",classes:"form-check",useTag:"div",template:'\n        <label for="<%=it.name_attr%>" class="form-check-label">\n          <input <%= it.required_attr ? \'required \' : \'\' %>type="checkbox" name="<%=it.name_attr%>" class="form-check-input" <%= it.value_attr ? \'value="\' + it.value_attr + \'"\' : \'\' %>/>\n          <%=it.label_attr%>\n        </label>\n      '},comp_hidden:{label:"Hidden Input",useTag:"div",template:"\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"hidden\" name=\"<%=it.name_attr%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n      "},comp_submit:{label:"Submit Button",classes:"btn btn-primary btn-block",useTag:"button",template:"<%= it.label_attr %>"},comp_row:{label:"Row",useTag:"div",classes:"row"},comp_col:{label:"Column",useTag:"div",classes:"col"},comp_col1:{label:"1 Column",useTag:"div"},comp_col2:{label:"2 Columns",useTag:"div"},comp_col3:{label:"3 Columns",useTag:"div"},comp_text:{label:"Text"},comp_image:{label:"Image"},comp_map:{label:"Map"},comp_recaptcha:{label:"reCaptcha",classes:"form-group",template:'\n        <script src="https://www.google.com/recaptcha/api.js?render=<%= it.sitekey_attr %>"><\/script>\n        <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" data-sitekey="<%= it.sitekey_attr || \'\' %>" data-action="<%= it.action_attr || \'\' %>" />\n      '},comp_stripe:{label:"Payment",classes:"form-group",template:'\n        <script src="https://js.stripe.com/v3/"><\/script>\n        <div id="stripeElement" data-key="<%= it.publickey_attr || \'\' %>" data-hide-postal="<%= it.hidepostal_attr || \'false\' %>">&nbsp;</div>\n      '}};for(var s in c){var p=c[s],u=r[s];if(u){for(var m in u)u[m]=u[m]||p[m];r[s]=u}else r[s]=p;r[s].classes=(r[s].classes||"").split(" ")}var d=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){i(e,t,a[t])})}return e}({formNextId:1,categoryLabel:"Basic",formFieldsPrefix:"field",showStylesOnChange:1,addResource:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"script",n=e.Canvas.getDocument(),o=n.head||n.getElementsByTagName("head")[0],r=document.createElement(a);"script"===a?r.src=t:"link"===a&&(r.rel="stylesheet",r.href=t),o.appendChild(r)}},t);d.comps=d.comps||r;n.add("get-usable-html",{run:function(){var t=e.getHtml();for(var a in d.comps){var n=d.comps[a].useTag||"div";t=(t=(t=(t=t.replace(new RegExp("<"+a,"g"),"<"+n)).replace(new RegExp("</"+a+">","g"),"</"+n+">")).replace(new RegExp(' data-gjs-type="'.concat(a,'" '),"g")," ")).replace(new RegExp(' data-highlightable="1" ',"g")," ")}return t}}),a("ZjPV").default(e,d),a("fvyM").default(e,d),t.panel&&a("TpXK").default(e,d),e.on("load",function(){Object.keys(d.comps).forEach(function(e){var t=d.comps[e];t&&"string"==typeof t.template&&(t.template=l()(t.template))}),setTimeout(function(){var t,a,n=e.Canvas.getDocument(),r=n.head||n.getElementsByTagName("head")[0],l="\nbody {\n  padding: 10px;\n}\n\ncomp_recaptcha,\ncomp_row,\ncomp_col,\ncomp_hidden {\n  min-height: 2rem !important;\n}\n\ncomp_row {\n  display: block;\n  width: 100%;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\ncomp_col {\n  min-width: 100px;\n}\n\ncomp_hidden, comp_recaptcha, comp_stripe {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n",c=n.createElement("style");c.type="text/css",c.styleSheet?c.styleSheet.cssText=l:c.appendChild(n.createTextNode(l)),r.appendChild(c),t=e.Canvas.getBody(),a=t.ownerWindow,o()(t).click(function(e){var t=e||a.event;if("input"===((t.target||t.srcElement).tagName+"").toLowerCase())return t.preventDefault(),!1})},10)})})},xeH2:function(e,a){e.exports=t},yLpj:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(e){"object"==typeof window&&(a=window)}e.exports=a}})});
//# sourceMappingURL=index.js.map