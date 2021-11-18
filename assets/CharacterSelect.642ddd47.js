import{r as C,R as u,u as Re}from"./vendor.88fa51f8.js";var F={exports:{}},re=function(e,r){return function(){for(var a=new Array(arguments.length),s=0;s<a.length;s++)a[s]=arguments[s];return e.apply(r,a)}},_e=re,w=Object.prototype.toString;function I(t){return w.call(t)==="[object Array]"}function M(t){return typeof t=="undefined"}function Oe(t){return t!==null&&!M(t)&&t.constructor!==null&&!M(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function Te(t){return w.call(t)==="[object ArrayBuffer]"}function Ae(t){return typeof FormData!="undefined"&&t instanceof FormData}function $e(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function De(t){return typeof t=="string"}function Pe(t){return typeof t=="number"}function ne(t){return t!==null&&typeof t=="object"}function A(t){if(w.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function ke(t){return w.call(t)==="[object Date]"}function qe(t){return w.call(t)==="[object File]"}function Be(t){return w.call(t)==="[object Blob]"}function ae(t){return w.call(t)==="[object Function]"}function Ue(t){return ne(t)&&ae(t.pipe)}function Le(t){return typeof URLSearchParams!="undefined"&&t instanceof URLSearchParams}function je(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function He(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function J(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),I(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.call(null,t[a],a,t)}function z(){var t={};function e(a,s){A(t[s])&&A(a)?t[s]=z(t[s],a):A(a)?t[s]=z({},a):I(a)?t[s]=a.slice():t[s]=a}for(var r=0,n=arguments.length;r<n;r++)J(arguments[r],e);return t}function Fe(t,e,r){return J(e,function(a,s){r&&typeof a=="function"?t[s]=_e(a,r):t[s]=a}),t}function Ie(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var p={isArray:I,isArrayBuffer:Te,isBuffer:Oe,isFormData:Ae,isArrayBufferView:$e,isString:De,isNumber:Pe,isObject:ne,isPlainObject:A,isUndefined:M,isDate:ke,isFile:qe,isBlob:Be,isFunction:ae,isStream:Ue,isURLSearchParams:Le,isStandardBrowserEnv:He,forEach:J,merge:z,extend:Fe,trim:je,stripBOM:Ie},S=p;function se(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ie=function(e,r,n){if(!r)return e;var a;if(n)a=n(r);else if(S.isURLSearchParams(r))a=r.toString();else{var s=[];S.forEach(r,function(c,m){c===null||typeof c=="undefined"||(S.isArray(c)?m=m+"[]":c=[c],S.forEach(c,function(d){S.isDate(d)?d=d.toISOString():S.isObject(d)&&(d=JSON.stringify(d)),s.push(se(m)+"="+se(d))}))}),a=s.join("&")}if(a){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e},Me=p;function $(){this.handlers=[]}$.prototype.use=function(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};$.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};$.prototype.forEach=function(e){Me.forEach(this.handlers,function(n){n!==null&&e(n)})};var Je=$,ze=p,Ye=function(e,r){ze.forEach(e,function(a,s){s!==r&&s.toUpperCase()===r.toUpperCase()&&(e[r]=a,delete e[s])})},oe=function(e,r,n,a,s){return e.config=r,n&&(e.code=n),e.request=a,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Ve=oe,ue=function(e,r,n,a,s){var o=new Error(e);return Ve(o,r,n,a,s)},We=ue,Xe=function(e,r,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?e(n):r(We("Request failed with status code "+n.status,n.config,null,n.request,n))},D=p,Ge=D.isStandardBrowserEnv()?function(){return{write:function(r,n,a,s,o,l){var c=[];c.push(r+"="+encodeURIComponent(n)),D.isNumber(a)&&c.push("expires="+new Date(a).toGMTString()),D.isString(s)&&c.push("path="+s),D.isString(o)&&c.push("domain="+o),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(r){var n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ke=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},Qe=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},Ze=Ke,et=Qe,tt=function(e,r){return e&&!Ze(r)?et(e,r):r},Y=p,rt=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],nt=function(e){var r={},n,a,s;return e&&Y.forEach(e.split(`
`),function(l){if(s=l.indexOf(":"),n=Y.trim(l.substr(0,s)).toLowerCase(),a=Y.trim(l.substr(s+1)),n){if(r[n]&&rt.indexOf(n)>=0)return;n==="set-cookie"?r[n]=(r[n]?r[n]:[]).concat([a]):r[n]=r[n]?r[n]+", "+a:a}}),r},le=p,at=le.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function a(s){var o=s;return e&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=a(window.location.href),function(o){var l=le.isString(o)?a(o):o;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}();function V(t){this.message=t}V.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};V.prototype.__CANCEL__=!0;var P=V,k=p,st=Xe,it=Ge,ot=ie,ut=tt,lt=nt,ct=at,W=ue,dt=B,ft=P,ce=function(e){return new Promise(function(n,a){var s=e.data,o=e.headers,l=e.responseType,c;function m(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}k.isFormData(s)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(d+":"+h)}var _=ut(e.baseURL,e.url);i.open(e.method.toUpperCase(),ot(_,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function ee(){if(!!i){var g="getAllResponseHeaders"in i?lt(i.getAllResponseHeaders()):null,b=!l||l==="text"||l==="json"?i.responseText:i.response,y={data:b,status:i.status,statusText:i.statusText,headers:g,config:e,request:i};st(function(H){n(H),m()},function(H){a(H),m()},y),i=null}}if("onloadend"in i?i.onloadend=ee:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(ee)},i.onabort=function(){!i||(a(W("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){a(W("Network Error",e,null,i)),i=null},i.ontimeout=function(){var b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",y=e.transitional||dt.transitional;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),a(W(b,e,y.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},k.isStandardBrowserEnv()){var te=(e.withCredentials||ct(_))&&e.xsrfCookieName?it.read(e.xsrfCookieName):void 0;te&&(o[e.xsrfHeaderName]=te)}"setRequestHeader"in i&&k.forEach(o,function(b,y){typeof s=="undefined"&&y.toLowerCase()==="content-type"?delete o[y]:i.setRequestHeader(y,b)}),k.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),l&&l!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(g){!i||(a(!g||g&&g.type?new ft("canceled"):g),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),s||(s=null),i.send(s)})},f=p,de=Ye,mt=oe,ht={"Content-Type":"application/x-www-form-urlencoded"};function fe(t,e){!f.isUndefined(t)&&f.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function pt(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=ce),t}function vt(t,e,r){if(f.isString(t))try{return(e||JSON.parse)(t),f.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}var q={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:pt(),transformRequest:[function(e,r){return de(r,"Accept"),de(r,"Content-Type"),f.isFormData(e)||f.isArrayBuffer(e)||f.isBuffer(e)||f.isStream(e)||f.isFile(e)||f.isBlob(e)?e:f.isArrayBufferView(e)?e.buffer:f.isURLSearchParams(e)?(fe(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):f.isObject(e)||r&&r["Content-Type"]==="application/json"?(fe(r,"application/json"),vt(e)):e}],transformResponse:[function(e){var r=this.transitional||q.transitional,n=r&&r.silentJSONParsing,a=r&&r.forcedJSONParsing,s=!n&&this.responseType==="json";if(s||a&&f.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?mt(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};f.forEach(["delete","get","head"],function(e){q.headers[e]={}});f.forEach(["post","put","patch"],function(e){q.headers[e]=f.merge(ht)});var B=q,gt=p,Et=B,Ct=function(e,r,n){var a=this||Et;return gt.forEach(n,function(o){e=o.call(a,e,r)}),e},me=function(e){return!!(e&&e.__CANCEL__)},he=p,X=Ct,yt=me,wt=B,bt=P;function G(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new bt("canceled")}var St=function(e){G(e),e.headers=e.headers||{},e.data=X.call(e,e.data,e.headers,e.transformRequest),e.headers=he.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),he.forEach(["delete","get","head","post","put","patch","common"],function(a){delete e.headers[a]});var r=e.adapter||wt.adapter;return r(e).then(function(a){return G(e),a.data=X.call(e,a.data,a.headers,e.transformResponse),a},function(a){return yt(a)||(G(e),a&&a.response&&(a.response.data=X.call(e,a.response.data,a.response.headers,e.transformResponse))),Promise.reject(a)})},v=p,pe=function(e,r){r=r||{};var n={};function a(i,d){return v.isPlainObject(i)&&v.isPlainObject(d)?v.merge(i,d):v.isPlainObject(d)?v.merge({},d):v.isArray(d)?d.slice():d}function s(i){if(v.isUndefined(r[i])){if(!v.isUndefined(e[i]))return a(void 0,e[i])}else return a(e[i],r[i])}function o(i){if(!v.isUndefined(r[i]))return a(void 0,r[i])}function l(i){if(v.isUndefined(r[i])){if(!v.isUndefined(e[i]))return a(void 0,e[i])}else return a(void 0,r[i])}function c(i){if(i in r)return a(e[i],r[i]);if(i in e)return a(void 0,e[i])}var m={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:c};return v.forEach(Object.keys(e).concat(Object.keys(r)),function(d){var h=m[d]||s,_=h(d);v.isUndefined(_)&&h!==c||(n[d]=_)}),n},ve={version:"0.24.0"},xt=ve.version,K={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){K[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});var ge={};K.transitional=function(e,r,n){function a(s,o){return"[Axios v"+xt+"] Transitional option '"+s+"'"+o+(n?". "+n:"")}return function(s,o,l){if(e===!1)throw new Error(a(o," has been removed"+(r?" in "+r:"")));return r&&!ge[o]&&(ge[o]=!0,console.warn(a(o," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(s,o,l):!0}};function Nt(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var n=Object.keys(t),a=n.length;a-- >0;){var s=n[a],o=e[s];if(o){var l=t[s],c=l===void 0||o(l,s,t);if(c!==!0)throw new TypeError("option "+s+" must be "+c);continue}if(r!==!0)throw Error("Unknown option "+s)}}var Rt={assertOptions:Nt,validators:K},Ee=p,_t=ie,Ce=Je,ye=St,U=pe,we=Rt,x=we.validators;function O(t){this.defaults=t,this.interceptors={request:new Ce,response:new Ce}}O.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=U(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=e.transitional;r!==void 0&&we.assertOptions(r,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(e)===!1||(a=a&&h.synchronous,n.unshift(h.fulfilled,h.rejected))});var s=[];this.interceptors.response.forEach(function(h){s.push(h.fulfilled,h.rejected)});var o;if(!a){var l=[ye,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(s),o=Promise.resolve(e);l.length;)o=o.then(l.shift(),l.shift());return o}for(var c=e;n.length;){var m=n.shift(),i=n.shift();try{c=m(c)}catch(d){i(d);break}}try{o=ye(c)}catch(d){return Promise.reject(d)}for(;s.length;)o=o.then(s.shift(),s.shift());return o};O.prototype.getUri=function(e){return e=U(this.defaults,e),_t(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Ee.forEach(["delete","get","head","options"],function(e){O.prototype[e]=function(r,n){return this.request(U(n||{},{method:e,url:r,data:(n||{}).data}))}});Ee.forEach(["post","put","patch"],function(e){O.prototype[e]=function(r,n,a){return this.request(U(a||{},{method:e,url:r,data:n}))}});var Ot=O,Tt=P;function N(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(a){e=a});var r=this;this.promise.then(function(n){if(!!r._listeners){var a,s=r._listeners.length;for(a=0;a<s;a++)r._listeners[a](n);r._listeners=null}}),this.promise.then=function(n){var a,s=new Promise(function(o){r.subscribe(o),a=o}).then(n);return s.cancel=function(){r.unsubscribe(a)},s},t(function(a){r.reason||(r.reason=new Tt(a),e(r.reason))})}N.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};N.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};N.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};N.source=function(){var e,r=new N(function(a){e=a});return{token:r,cancel:e}};var At=N,$t=function(e){return function(n){return e.apply(null,n)}},Dt=function(e){return typeof e=="object"&&e.isAxiosError===!0},be=p,Pt=re,L=Ot,kt=pe,qt=B;function Se(t){var e=new L(t),r=Pt(L.prototype.request,e);return be.extend(r,L.prototype,e),be.extend(r,e),r.create=function(a){return Se(kt(t,a))},r}var E=Se(qt);E.Axios=L;E.Cancel=P;E.CancelToken=At;E.isCancel=me;E.VERSION=ve.version;E.all=function(e){return Promise.all(e)};E.spread=$t;E.isAxiosError=Dt;F.exports=E;F.exports.default=E;var Q=F.exports;const j=localStorage.getItem("username"),Bt={"half-orc":{name:`${j}`,race:"half-orc",img:"./src/components/images/Half-orc.png",img2:"./src/components/images/Half-orc2.png",img3:"./src/components/images/Half-orc3.png",strength:60,intelligence:10,life:100,level:1,spell:[{id:1,name:"Polymorph",description:"This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a wisdom saving throw to avoid the effect. A shape-shifter automatically succeeds on this saving throw.",damage:-5},{id:2,name:"Earthquake",description:"You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area.",damage:-20},{id:3,name:"Circle of Death",description:"A sphere of negative energy ripples out in a 60-foot radius sphere from a point within range. Each creature in that area must make a constitution saving throw.",damage:-25}],equipment:[{id:1,name:"Curved Sword",damage:-15},{id:2,name:"War Hammer",damage:-20},{id:3,name:"Orc Shield",damage:-15}]},dwarf:{name:`${j}`,race:"dwarf",img:"./src/components/images/Dwarf.png",img2:"./src/components/images/Dwarf2.png",img3:"./src/components/images/Dwarf3.png",strength:35,intelligence:30,life:100,level:1,spell:[{id:1,name:"Arcane Sword",description:"You create a sword-shaped plane of force that hovers within range.",damage:-15},{id:2,name:"Blade Barrier",description:"You create a vertical wall of whirling, razor-sharp blades made of magical energy.",damage:-20},{id:3,name:"Control Weather",description:"You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don't have a clear path to the sky ends the spell early.",damage:-15}],equipment:[{id:1,name:"Axes",damage:-15},{id:2,name:"Hammer",damage:-20},{id:3,name:"Magic Powder",damage:-15}]},elf:{name:`${j}`,race:"elf",img:"./src/components/images/Elf2.png",img2:"./src/components/images/Elf3.png",img3:"./src/components/images/Elf4.png",strength:45,intelligence:50,life:100,level:1,spell:[{id:1,name:"Fireball",description:"A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.",damage:-15},{id:2,name:"Wall of Fire",description:"You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick.",damage:-20},{id:3,name:"Acid Arrow",description:"A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target.",damage:-10}],equipment:[{id:1,name:"Bow",damage:-20},{id:2,name:"Sword",damage:-20},{id:3,name:"Elf Armor",damage:-15}]},human:{name:`${j}`,race:"human",img:"./src/components/images/Human.png",img2:"./src/components/images/Human2.png",img3:"./src/components/images/Human3.png",strength:40,intelligence:30,life:100,level:1,spell:[{id:1,name:"Disguise Self",description:"You make yourself--including your clothing, armor, weapons, and other belongings on your person--look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between.",damage:-5},{id:2,name:"Stinking Cloud",description:"You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured.",damage:-25},{id:3,name:"Vicious Mockery",description:"You unleash a string of insults laced with subtle enchantments at a creature you can see within range.",damage:-15}],equipment:[{id:1,name:"Buffoon disguise",damage:-10},{id:2,name:"Domination Scepter",damage:-30},{id:3,name:"Book of Jokes",damage:-15}]}},xe=t=>new Promise(e=>{e(Bt[t])}),Ut="_TabsContent_1orh8_1",Lt="_CharacterCardContainer_1orh8_24",jt="_characterCardDesc2_1orh8_39",Ht="_characterCardEquipment_1orh8_45",Ft="_CharacterCardSpells_1orh8_51";var R={TabsContent:Ut,CharacterCardContainer:Lt,characterCardDesc2:jt,characterCardEquipment:Ht,CharacterCardSpells:Ft};function It({card:t}){const[e,r]=C.exports.useState(),[n,a]=C.exports.useState(),[s,o]=C.exports.useState();C.exports.useEffect(()=>{r(1),Q.get(`https://www.dnd5eapi.co${t.url}`).then(m=>m.data).then(m=>a(m)),xe(t.index).then(m=>o(m))},[]);const l=()=>{r(1)},c=()=>{r(2)};return u.createElement(u.Fragment,null,n&&s&&u.createElement("div",null,u.createElement("div",{className:R.TabsContent},u.createElement("button",{type:"button",onClick:l,className:`Tabs ${e===1?"active":""}`},"Character Data"),u.createElement("button",{type:"button",onClick:c,className:`Tabs ${e===2?"active":""}`},"Character Spells")),u.createElement("div",{className:R.CharacterCardContainer},s&&n&&(e===1?u.createElement("div",{className:R.CharacterCardDescription},u.createElement("p",null,u.createElement("em",null,"Name")," : ",s.name),u.createElement("p",null,u.createElement("em",null,"Race")," : ",n.name),u.createElement("p",null,u.createElement("em",null,"Description")," : ",n.alignment),u.createElement("div",{className:R.characterCardDesc2},u.createElement("p",null,u.createElement("em",null,"Size")," : ",n.size),u.createElement("p",null,u.createElement("em",null,"Speed")," : ",n.speed),u.createElement("p",null,u.createElement("em",null,"Strength")," : ",s.strength),u.createElement("p",null,u.createElement("em",null,"Intelligence")," : ",s.intelligence),u.createElement("p",null,u.createElement("em",null,"Life")," : ",s.life),u.createElement("p",null,u.createElement("em",null,"Level")," : ",s.level)),u.createElement("div",{className:R.characterCardEquipment},u.createElement("p",null,u.createElement("em",null,"Equipment 1:")," ",s.equipment[0].name," (damage: ",s.equipment[0].damage,")"),u.createElement("p",null,u.createElement("em",null,"Equipment 2:")," ",s.equipment[1].name," (damage: ",s.equipment[1].damage,")"),u.createElement("p",null,u.createElement("em",null,"Equipment 3:")," ",s.equipment[2].name," (damage: ",s.equipment[2].damage,")"))):u.createElement("div",{className:R.CharacterCardSpells},u.createElement("ul",null,u.createElement("p",null,"Spells :"),u.createElement("li",null,s.spell[0].name),u.createElement("em",null,"Description: ")," ",s.spell[0].description," ",u.createElement("em",null,"(damage : ",s.spell[0].damage,")"),u.createElement("li",null,s.spell[1].name),u.createElement("em",null,"Description: ")," ",s.spell[1].description," ",u.createElement("em",null,"(damage : ",s.spell[1].damage,")"),u.createElement("li",null,s.spell[2].name),u.createElement("em",null,"Description: ")," ",s.spell[2].description," ",u.createElement("em",null,"(damage : ",s.spell[2].damage,")")))))))}const Mt="_CharacterCard_rvxfp_1",Jt="_CharacterCardImg_rvxfp_8",zt="_PlayButton_rvxfp_18",Yt="_clickToGame_rvxfp_23";var T={CharacterCard:Mt,CharacterCardImg:Jt,PlayButton:zt,clickToGame:Yt};function Vt({card:t}){const[e,r]=C.exports.useState([]),[n,a]=C.exports.useState({}),s=Re();function o(){s.push("gamepage")}return C.exports.useEffect(()=>{Q.get(`https://www.dnd5eapi.co${t.url}`).then(l=>l.data).then(l=>r(l)),xe(t.index).then(l=>a(l))},[]),u.createElement(u.Fragment,null,e&&n&&u.createElement("div",{className:T.CharacterCard},u.createElement("div",{className:T.CharacterCardImg},u.createElement("img",{className:T.CharImg,src:n.img,alt:n.race})),u.createElement(It,{key:t.index,card:t}),u.createElement("div",{className:T.PlayButton},u.createElement("button",{className:T.clickToGame,onClick:o},"Let's play"))))}const Wt="_CharacterSelect_1semy_1",Xt="_hero_1semy_9",Gt="_Characters_1semy_23";var Z={CharacterSelect:Wt,hero:Xt,Characters:Gt};function Qt(){const[t,e]=C.exports.useState([]);return C.exports.useEffect(()=>{Q.get("https://www.dnd5eapi.co/api/races/").then(r=>r.data).then(r=>e(r.results.filter(n=>n.name==="Human"||n.name==="Dwarf"||n.name==="Half-Orc"||n.name==="Elf")))},[]),u.createElement("div",{className:Z.CharacterSelect},u.createElement("div",{className:Z.hero},u.createElement("p",null,"Choose your Hero!")),u.createElement("div",{className:Z.Characters},t.map(r=>u.createElement(Vt,{key:r.index,card:r}))))}export{Qt as default};
