if (self.CavalryLogger) { CavalryLogger.start_js(["+F2Sv"]); }

__d("DirectDebitCredentialStatus",[],(function(a,b,c,d,e,f){e.exports={INITED:73,PENDING:80,VERIFIED:86,CANCELED:67}}),null);
__d("AdsShimmerBar.react",["cx","fbt","LoadingMarker.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.isFullBleed,d=a.renderAsGIF;a=babelHelpers.objectWithoutPropertiesLoose(a,["isFullBleed","renderAsGIF"]);return b("React").createElement(b("LoadingMarker.react"),null,b("React").createElement("div",{"aria-busy":!0,"aria-valuemax":"100","aria-valuemin":"0","aria-valuetext":h._("Loading..."),className:"_j-e"+(c?"":" _xwp"),role:"progressbar"},b("React").createElement("div",{className:(d?"":"_j-f")+(d?" _1cld":""),style:a})))};return c}(b("React").PureComponent);c.propTypes={height:a.oneOfType([a.string,a.number]).isRequired,isFullBleed:a.bool.isRequired,renderAsGIF:a.bool,width:a.oneOfType([a.string,a.number])};c.defaultProps={height:"6px",isFullBleed:!1,renderAsGIF:!1};e.exports=c}),null);
__d("AdsConversionPixelStatusUI",["fbt","invariant","ix","AdsPixelConstants","formatDate","parseISODate"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("AdsPixelConstants").statuses,k=60*60*1e3,l=k*24,m=l*7,n=new Date();function o(a){return a.last_firing_time||a.lastFiringTime}var p={resetTime:function(){n=new Date()},getStatus:function(a){if(a.is_deleted===!0||a.isDeleted===!0)return j.DELETED;a=o(a)||null;a&&(a=b("parseISODate")(a));if(a===null)return j.UNVERIFIED;else if(a.getTime()<n.getTime()-m)return j.INACTIVE;else return j.ACTIVE},getStatusUI:function(a){var c=p.getStatus(a);switch(c){case j.DELETED:return p._getDeletedStatusUI();case j.UNVERIFIED:return p._getUnverifiedStatusUI();case j.INACTIVE:return p._getInactiveStatusUI(b("parseISODate")(o(a)));case j.ACTIVE:return p._getActiveStatusUI(b("parseISODate")(o(a)))}h(0,1755)},_getInactiveStatusUI:function(a){return{iconImage:i("22205"),text:g._("No Recent Activity"),subtitle:g._("Last Event: {date}",[g._param("date",b("formatDate")(a,"n/j/y"))]),desc:g._("We haven't received any events from this pixel in the last week.")}},_getActiveStatusUI:function(a){var c=n.getTime()-a.getTime(),d=null;c<k?d=g._("Last Event: within an hour"):c<l?d=g._("Last Event: within 24 hours"):(c<m||h(0,1756),d=g._("Last Event: {date}",[g._param("date",b("formatDate")(a,"F j"))]));return{iconImage:i("22204"),text:g._("Active"),subtitle:d,desc:g._("We have received events from this pixel in the last week.")}},_getUnverifiedStatusUI:function(){return{iconImage:i("22206"),text:g._("No Activity Yet"),desc:g._("We haven't received any events from this pixel. Make sure the pixel code is properly installed or configured on your website.")}},_getDeletedStatusUI:function(){return{iconImage:i("22206"),text:g._("Deleted")}}};e.exports=p}),null);
__d("signalsNow",["AdsCurrentUser","DateTime","Timezone","TimezoneNamesData"],(function(a,b,c,d,e,f){"use strict";__p&&__p();b("Timezone").registerNamesModule(b("TimezoneNamesData"));var g=b("Timezone").UTC,h=b("Timezone").PST8PDT;function i(){return i.getNow()}a=b("AdsCurrentUser").timezoneName!=null&&b("AdsCurrentUser").timezoneName!==""?b("Timezone").getByNameOrNull(b("AdsCurrentUser").timezoneName):null;i.getNow=function(){return b("DateTime").localNow().instant};i.UTC=g;i.PST8PDT=h;i.LOCAL_TIMEZONE_ID=a!=null?a:b("Timezone").getEnvironmentTimezoneID();i.asPSTDateTime=function(){return new(b("DateTime"))(i.getNow(),h)};i.asUTCDateTime=function(){return new(b("DateTime"))(i.getNow(),g)};i.asLocalDateTime=function(){return new(b("DateTime"))(i.getNow(),i.LOCAL_TIMEZONE_ID)};e.exports=i}),null);
__d("AdsValidatorTests",["AdmanagerAccountStatuses","ClientIDs","DirectDebitCredentialStatus","getObjectValues"],(function(a,b,c,d,e,f){__p&&__p();var g="CONFIRMED",h="PENDING",i=/^-?\d+$/,j=/[\f\n\r\t\v]/,k=/^[1-9]\d*$/,l=Date.parse("Jan 1, 1970"),m=Date.parse("March 21, 2100"),n=143,o=new RegExp("[^@]+@[^@]+$"),p=b("getObjectValues")(b("DirectDebitCredentialStatus")),q=b("getObjectValues")(b("AdmanagerAccountStatuses"));function a(a){return{isValid:!!a,text:"must have non-zero length"}}function c(a){return{isValid:typeof a==="boolean",text:"must represent a boolean value"}}function d(a){return{isValid:a instanceof Array,text:"must represent a array value"}}function f(a,b){return{isValid:b.length>=a,text:"should contain at least "+a+" items"}}function r(a){return{isValid:a instanceof Object,text:"must represent a object value"}}function s(a,b){return{isValid:b.length===a,text:"string should be exactly "+a+" characters"}}function t(a,b){return{isValid:b.length>=a,text:"must be at least "+a+" characters"}}function u(a,b){return{isValid:b.length<=a,text:"must be at most "+a+" characters"}}function v(a,b){return{isValid:a.test(b),text:"must not contain invalid characters"}}function w(a){return{isValid:!j.test(a),text:"must not contain invalid whitespace characters like tab or return"}}function x(a){var b=parseFloat(a);return{isValid:!isNaN(b)&&b==a,text:"must represent a floating point number"}}function y(a){a=v(i,a);a.text="must represent an integer";return a}function z(a){return{isValid:a%1===0&&a>=0,text:"must be a positive integer or zero"}}function A(a){return{isValid:a%1===0&&a>0,text:"must be a positive integer"}}function B(a){return{isValid:a>l&&a<m,text:"must be in the valid timestamp range,"}}function C(a){return{isValid:B(a).isValid||a===0,text:"must be either in the valid timestamp range or is zero"}}function D(a){return{isValid:Object.prototype.toString.call(a)==="[object Date]",text:"must be a valid date"}}function E(a,b){b=b&&b.endTime;return{isValid:B(a).isValid&&typeof b==="number"&&a<=b,text:"need valid end time and start time cannot be later than end time"}}function F(a,b){b=b.startTime;return{isValid:B(a).isValid&&typeof b==="number"&&b<=a,text:"need valid start time and end time cannot be earlier than start time"}}function G(a){return{isValid:k.test(a),text:"must be a valid FBID"}}function H(a){return{isValid:a>=0&&a<=n,text:"must be a valid timezone id"}}function I(a,b){return{isValid:!a.validateProperties(b),text:"must be a valid object"}}function J(a,b){return{isValid:a.every(b.hasOwnProperty,b),text:"object must contain all given props"}}function K(a){return{isValid:G(a).isValid||!!b("ClientIDs").isExistingClientID(a),text:"must be a valid FBID or ClientID"}}function L(a,b){__p&&__p();var c=!0,d="";for(var e=0;e<b.length;e++){var f=b[e],g=a(f).text;d="each item "+typeof g==="string"?g:"";if(!a(f).isValid){c=!1;break}}return{isValid:c,text:d}}function M(a){return{isValid:!!(a===g||a===h),text:"must be a CONFIRMED or PENDING status"}}function N(a){return{isValid:q.indexOf(a)>=0,text:"must be a valid ad account status"}}function O(a){return{isValid:p.indexOf(a)>=0,text:"must be a valid direct debit credential status"}}function P(a,b){return{isValid:a.indexOf(b)>=0,text:"must be one of values in array"}}function Q(a){var b=!1;a.match(o)&&(b=!0);return{isValid:b,text:"must be a valid email address"}}e.exports={isLengthyString:a,isExactLengthString:s,isAllValidCharacters:v,hasNoInvalidWhitespace:w,isFloatString:x,isIntegerString:y,isPositiveInteger:A,isPositiveOrZeroInteger:z,isMinLengthString:t,isMaxLengthString:u,isUnixTimestamp:B,isUnixTimestampOrZero:C,isDate:D,isValidStartTime:E,isValidEndTime:F,isBoolean:c,isValidJson:r,isValidArray:d,isMinLengthArray:f,isFBIDString:G,isValidTimeZoneID:H,isValidObject:I,hasProperties:J,isFBIDOrClientIDString:K,isValidCollection:L,isValidAssetStatus:M,isValidAccountStatus:N,isValidDirectDebitStatus:O,isInArray:P,isValidEmail:Q}}),null);
__d("PlaceholderBlockText.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a="_374o"+(this.props.shade==="dark"?" _374q":"")+(this.props.shade==="light"?" _374r":""),c="";for(var d=0;d<this.props.characters;d++)c+="\u2580";return b("React").createElement("span",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(a,this.props.className)}),c)};return c}(b("React").Component);c.propTypes={characters:a.number.isRequired,shade:a.oneOf(["dark","light"]).isRequired};c.defaultProps={characters:10,shade:"dark"};e.exports=c}),null);
__d("GeoPlaceRecord",["immutable"],(function(a,b,c,d,e,f){"use strict";a=b("immutable").Record({coordinates:void 0,name:void 0,countryKey:void 0});c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(a);e.exports=c}),null);
__d("GeoPlace",["GeoPlaceRecord"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c,d){return a.call(this,{coordinates:b,name:c,countryKey:d})||this}var c=b.prototype;c.toString=function(){return this.name||"("+this.coordinates.latitude+", "+this.coordinates.longitude+")"};return b}(b("GeoPlaceRecord"));e.exports=a}),null);
__d("PagesCalloutDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){b=a.call(this,b)||this;babelHelpers.assertThisInitialized(b).dispatch=b.dispatch.bind(babelHelpers.assertThisInitialized(b));return b}return b}(b("ExplicitRegistrationReactDispatcher"));e.exports=new a({strict:!0})}),null);
__d("ContextualLayerDynamicOffsetX",["ContextualLayerDimensions"],(function(a,b,c,d,e,f){__p&&__p();var g=4;a=function(){"use strict";__p&&__p();function a(a){this._layer=a,this._defaultOffsetX=null,this._subscription=null}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("show",this._adjustOffset.bind(this)),this._adjustOffset()};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null,this._defaultOffsetX!==null&&(this._layer.setOffsetX(this._defaultOffsetX),this._defaultOffsetX=null)};c._adjustOffset=function(a){a=this._layer.getOrientation();if(!a.isVertical())return;this._defaultOffsetX===null&&(this._defaultOffsetX=a.getOffsetX());var c=b("ContextualLayerDimensions").getViewportRect(this._layer);c=c.r-c.l;var d=b("ContextualLayerDimensions").getLayerRect(this._layer,a),e=a.getOffsetX()-this._defaultOffsetX;c=c-d.r;c<0||c<-e?this._layer.setOffsetX(a.getOffsetX()+c-g):d.l<0&&this._layer.setOffsetX(d.l*-1+g)};return a}();e.exports=a}),null);
__d("TreeMap",["nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(a,b,c){this.key=a,this.value=b,this.time=c};a=function(){__p&&__p();function a(a){this.$1=function(b,c){var d=a(b,c);return d!==0?d:b.time-c.time},this.$2=new Map(),this.$3=null,this.$4=0,this.size=this.$2.size}var c=a.prototype;c.clear=function(){this.$2=new Map(),this.$3=null,this.size=this.$2.size};c.has=function(a){return this.$2.has(a)};c.set=function(a,b){this.has(a)&&this["delete"](a);b=new g(a,b,this.$4++);this.$2.set(a,b);this.$3=n(this.$3,b,this.$1);this.size=this.$2.size;return this};c.get=function(a){return this.has(a)?this.$2.get(a).value:void 0};c["delete"]=function(a){if(!this.has(a))return!1;var b=this.$2.get(a);this.$3=o(this.$3,b,this.$1);this.$2["delete"](a);this.size=this.$2.size;return!0};c.keys=function(){var a=[];s(this.$3,a,function(a){return a.key});return a};c.values=function(){var a=[];s(this.$3,a,function(a){return a.value});return a};c.entries=function(){var a=[];s(this.$3,a,function(a){return{key:a.key,value:a.value}});return a};c.range=function(a,b){var c=[],d=null;a&&(d=new g(a.key,a.value,-1));a=null;b&&(a=new g(b.key,b.value,this.$4));s(this.$3,c,function(a){return{key:a.key,value:a.value}},this.$1,d,a);return c};c.min=function(){if(!this.$3)return void 0;var a=p(b("nullthrows")(this.$3)),c=a.key;a=a.value;return{key:c,value:a}};c.max=function(){if(!this.$3)return void 0;var a=q(b("nullthrows")(this.$3)),c=a.key;a=a.value;return{key:c,value:a}};c.__testRoot=function(){};return a}();function h(a){__p&&__p();if(!a)return a;m(a);if(a.balanceFactor<-1)if(a.right&&a.right.balanceFactor<=0)return i(a);else return j(a);else if(a.balanceFactor>1)if(a.left&&a.left.balanceFactor>=0)return k(a);else return l(a);else return a}function i(a){a=a;var c=b("nullthrows")(a.right),d=c.left;a.right=d;m(a);b("nullthrows")(c).left=a;m(c);return c}function j(a){__p&&__p();a=a;var c=b("nullthrows")(a.right),d=b("nullthrows")(c.left),e=d.left,f=d.right;a.right=e;m(a);c.left=f;m(c);d=b("nullthrows")(d);d.left=a;d.right=c;m(d);return d}function k(a){a=a;var c=b("nullthrows")(a.left),d=c.right;a.left=d;m(a);c.right=a;m(c);return c}function l(a){__p&&__p();a=a;var c=b("nullthrows")(a.left),d=b("nullthrows")(c.right),e=d.left,f=d.right;c.right=e;m(c);a.left=f;m(a);d.left=c;d.right=a;m(d);return d}function m(a){var b=a.left?a.left.height:-1,c=a.right?a.right.height:-1;a.height=Math.max(b,c)+1;a.balanceFactor=b-c}function n(a,b,c){__p&&__p();if(a==null)return h(b);var d=c(b,a);if(d<0){a.left=n(a.left,b,c);return h(a)}else{a.right=n(a.right,b,c);return h(a)}}function o(a,b,c){__p&&__p();if(a==null)return null;if(a===b)if(a.left&&a.right){var d=q(a.left);a.left=r(a.left);d.left=a.left;d.right=a.right;return h(d)}else if(a.left)return h(a.left);else if(a.right)return h(a.right);else return null;d=c(b,a);if(d<0){a.left=o(a.left,b,c);return h(a)}else{a.right=o(a.right,b,c);return h(a)}}function p(a){while(a.left)a=a.left;return a}function q(a){while(a.right)a=a.right;return a}function r(a){if(!a)return null;if(a.right==null)return h(a.left||null);a.right=r(a.right);return h(a)}function s(a,b,c,d,e,f){if(a==null)return;var g=!d||!e||d(a,e)>=0,h=!d||!f||d(a,f)<=0;g&&s(a.left,b,c,d,e,f);g&&h&&b.push(c(a));h&&s(a.right,b,c,d,e,f)}e.exports=a}),null);
__d("createObjectBy",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c={};for(var d=0;d<a.length;d++){var e=a[d],f=b(e,d,a);c[f]=e}return c}e.exports=a}),null);
__d("mapSet",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){__p&&__p();var c=new Set();for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;c.add(b(f))}return c}e.exports=a}),null);
__d("FluxDerivedStore",["FluxStore","UserTimingUtils","abstractMethod","gkx","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("gkx")("779516");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){c=a.call(this,c)||this;g||(c.$FluxDerivedStore3=c.__getStores(),c.$FluxDerivedStore4=c.$FluxDerivedStore3.map(function(a){return a.getDispatchToken()}));c.$FluxDerivedStore1=b("immutable").Map();c.$FluxDerivedStore2=new Map();return c}var d=c.prototype;d.__getActionTypes=function(){return g?[]:null};d.__onDispatch=function(a){__p&&__p();if(g){if(!this.$FluxDerivedStore2)return;this.getDispatcher().waitFor(this.getDependencyDispatchTokens());this.getDependencyStores().some(function(a){return a.hasChanged()})&&(this.$FluxDerivedStore2.clear(),this.__emitChange())}else{if(!this.$FluxDerivedStore3)return;this.getDispatcher().waitFor(this.$FluxDerivedStore4);this.$FluxDerivedStore3.some(function(a){return a.hasChanged()})&&(this.$FluxDerivedStore2.clear(),this.__emitChange())}};d.__getStores=function(){return b("abstractMethod")(this.constructor.name,"__getStores")};d.__getData=function(a,c){return b("abstractMethod")(this.constructor.name,"__getData")};d.__getCachedData=function(a,c){return b("abstractMethod")(this.constructor.name,"__getCachedData")};d.__computeResult=function(a,c,d){return b("abstractMethod")(this.constructor.name,"__computeResult")};d.__areEqual=function(a,b){return a===b};d.__updateOne=function(a,b,c,d){if(!d||!this.__areEqual(d,c)){d=this.__computeResult(b,c,this.$FluxDerivedStore1.getIn([b,"result"],null));a.setIn([b,"data"],c);a.setIn([b,"result"],d)}};d.__updateAll=function(a,b,c,d){__p&&__p();for(var b=b,e=Array.isArray(b),f=0,b=e?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=b.length)break;g=b[f++]}else{f=b.next();if(f.done)break;g=f.value}g=g;this.__updateOne(a,g,c.get(g),d.get(g))}};d.get=function(a){var b=this;if(this.$FluxDerivedStore2.get(a))return this.$FluxDerivedStore1.getIn([a,"result"]);var c=this.$FluxDerivedStore1.getIn([a,"data"]),d=this.__getData(a,c);this.$FluxDerivedStore1=this.$FluxDerivedStore1.withMutations(function(e){return b.__updateOne(e,a,d,c)});this.$FluxDerivedStore2.set(a,!0);return this.$FluxDerivedStore1.getIn([a,"result"])};d.getCached=function(a){var b=this;if(this.$FluxDerivedStore2.get(a))return this.$FluxDerivedStore1.getIn([a,"result"]);var c=this.$FluxDerivedStore1.getIn([a,"data"]),d=this.__getCachedData(a,c);this.$FluxDerivedStore1=this.$FluxDerivedStore1.withMutations(function(e){return b.__updateOne(e,a,d,c)});return this.$FluxDerivedStore1.getIn([a,"result"])};d.getAll=function(a,c){__p&&__p();var d=this,e=new Set(a),f=c||this.$FluxDerivedStore5||b("immutable").Map();c=f.withMutations(function(b){__p&&__p();f.forEach(function(a,c){e.has(c)||b["delete"](c)});if(d.__getDataAll){var c=d.$FluxDerivedStore1.filter(function(a,b){return e.has(b)}).map(function(a){return a.get("data")}),g=d.__getDataAll(e,c);d.$FluxDerivedStore1=d.$FluxDerivedStore1.withMutations(function(b){return d.__updateAll(b,a,g,c)});e.forEach(function(a){b.set(a,d.$FluxDerivedStore1.getIn([a,"result"]))})}else e.forEach(function(a){b.set(a,d.get(a))})});this.$FluxDerivedStore5=c;return c};d.getAllCached=function(a,c){__p&&__p();var d=this,e=new Set(a),f=c||this.$FluxDerivedStore5||b("immutable").Map();a=f.withMutations(function(a){__p&&__p();for(var b=f.keys(),c=Array.isArray(b),g=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(c){if(g>=b.length)break;h=b[g++]}else{g=b.next();if(g.done)break;h=g.value}h=h;e.has(h)||a["delete"](h)}d.$FluxDerivedStore1=d.$FluxDerivedStore1.withMutations(function(b){__p&&__p();for(var c=e,f=Array.isArray(c),g=0,c=f?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=c.length)break;h=c[g++]}else{g=c.next();if(g.done)break;h=g.value}h=h;var i=b.getIn([h,"data"]),j=d.__getCachedData(h,i);d.__updateOne(b,h,j,i);a.set(h,b.getIn([h,"result"]))}})});this.$FluxDerivedStore5=a;return a};d.clearCacheForTestsOnly=function(){this.$FluxDerivedStore2.clear()};d.__getDependencyStores=function(){return this.__getStores()};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=a}),null);
__d("LoadObjectMap",["regeneratorRuntime","LoadObject","gkx","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=1;a=function(){__p&&__p();a.create=function(b,c,d){return new a(g,b,function(a){return a},c,d)};a.createKeyed=function(b,c,d,e){return new a(g,b,c,d,e)};function a(a,c,d,e,f){this.$1=b("immutable").Map(),this.$4=e||function(a){return a.isEmpty()},this.$5=d,this.$3=c,this.$7=b("gkx")("676866")?b("immutable").Set().asMutable():new Set(),this.$8=null,this.$6=f}var c=a.prototype;c.get=function(a){var c=this,d=this.getCached(a);!this.$7.has(a)&&this.$4(d,a)&&(this.$7=this.$7.add(a),this.$8===null&&(this.$8=setTimeout(function(){c.$7 instanceof Set?(c.$9(c.$7),c.$7=new Set()):(c.$9(new Set(c.$7)),c.$7=b("immutable").Set()),c.$8=null},0)));return d};c.getCached=function(a){a=this.$5(a);return this.$1.has(a)?this.$1.get(a):b("LoadObject").empty()};c.getAll=function(a){__p&&__p();var c=this,d=b("immutable").Map().withMutations(function(b){__p&&__p();for(var d=a,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;b.set(g,c.get(g))}});return d};c.$10=function(a,b){__p&&__p();var c=[],d=new Set();for(var a=a,e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=a.length)break;g=a[f++]}else{f=a.next();if(f.done)break;g=f.value}g=g;d.add(g);d.size>=b&&(c.push(d),d=new Set())}d.size>0&&c.push(d);return c};c.$9=function(a){var b=this;if(this.$6!=null){var c=this.$10(a,this.$6);c.forEach(function(a){b.$3(a)})}else this.$3(a)};c.getData=function(){return this.$1};c.getLoadedMap=function(){__p&&__p();if(!this.$2){var a=[];for(var c=this.$1,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;var g=f[0];f=f[1];f.hasValue()&&a.push([g,f.getValueEnforcing()])}this.$2=b("immutable").Map(a)}return this.$2};c.getLoadedValue=function(a){return this.getLoadedMap().get(this.$5(a))};c.setLoading=function(a){__p&&__p();var b=this;return this.$11(function(){__p&&__p();return b.$1.withMutations(function(c){__p&&__p();for(var d=a,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;var h=b.$5(g);g=b.getCached(g);c.set(h,g.loading())}})})};c.setSingleValueOrError=function(a,b){var c=this.getCached(a);if(b instanceof Error)return this.set(a,c.setError(b).done());else return this.set(a,c.setValue(b).done())};c.setMultipleValueOrError=function(a){__p&&__p();var b=this;return this.$11(function(){__p&&__p();return b.$1.withMutations(function(c){__p&&__p();for(var d=a,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;var h=g[0];g=g[1];var i=b.$5(h);h=b.getCached(h);g instanceof Error?c.set(i,h.setError(g).done()):c.set(i,h.setValue(g).done())}})})};c.has=function(a){return this.$1.has(this.$5(a))};c.set=function(a,b){var c=this;return this.$11(function(){return c.$1.set(c.$5(a),b)})};c.update=function(a,b){return this.set(a,b(this.get(a)))};c["delete"]=function(a){var b=this;return this.$11(function(){return b.$1["delete"](b.$5(a))})};c.merge=function(a){var b=this;return this.$11(function(){return b.$1.merge(b.$12(a))})};c.withMutations=function(a){var b=this;return this.$11(function(){return b.$1.withMutations(a)})};c.clear=function(){var a=this;return this.$11(function(){return a.$1.clear()})};c.$12=b("regeneratorRuntime").mark(function a(c){__p&&__p();var d,e,f,g,h;return b("regeneratorRuntime").wrap(function(a){__p&&__p();while(1)switch(a.prev=a.next){case 0:d=c,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();case 1:if(!e){a.next=7;break}if(!(f>=d.length)){a.next=4;break}return a.abrupt("break",16);case 4:g=d[f++];a.next=11;break;case 7:f=d.next();if(!f.done){a.next=10;break}return a.abrupt("break",16);case 10:g=f.value;case 11:h=g;a.next=14;return[this.$5(h[0]),h[1]];case 14:a.next=1;break;case 16:case"end":return a.stop()}},a,this)});c.$11=function(b){b=b();if(b===this.$1)return this;var c=new a(g,this.$3,this.$5,this.$4);c.$1=b;return c};return a}();e.exports=a}),null);
__d("promiseLoadObjects",["Promise","LoadObject"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();return new(b("Promise"))(function(b,c){__p&&__p();var d=new Map();function e(){d.size===a.size&&b(d)}var f=function(){__p&&__p();if(j){if(k>=i.length)return"break";c=i[k++]}else{k=i.next();if(k.done)return"break";c=k.value}var a=c,b=a[0];a=a[1];a.then(function(a){d.set(b,g(a)),e()})["catch"](function(a){d.set(b,h(a)),e()})};for(var i=a,j=Array.isArray(i),k=0,i=j?i:i[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var l=f();if(l==="break")break}})}function g(a){return b("LoadObject").withValue(a)}function h(a){return b("LoadObject").withError(a)}e.exports=a}),null);
__d("promiseLoadObjectsFromKeys",["promiseLoadObjects"],(function(a,b,c,d,e,f){"use strict";function a(a,c){var d=new Map();a.forEach(function(a){return d.set(a,c(a))});return b("promiseLoadObjects")(d)}e.exports=a}),null);
__d("AYMTTipSettings",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADS_GUIDANCE_BLUETIP_DATA:"ads_guidance_bluetip_data",ADS_GUIDANCE_CARD_DATA:"ads_guidance_card_data",ALERT_BLACKLISTED:"alert_blacklisted",AYMT_DATA:"aymt_data",AYMT_REQUEST_ID:"aymt_request_id",BY_CHANNEL_IGNORE_ALL_CAPS:"by_channel_ignore_all_caps",BYPASS_ML_FILTERING:"bypass_ml_filtering",CAMPAIGN_ACTION_COUNT_LOWER_BOUND:"campaign_action_count_lower_bound",CAMPAIGN_ACTION_COUNT_UPPER_BOUND:"campaign_action_count_upper_bound",CAMPAIGN_OBJECTIVE:"campaign_objective",CHANNEL_ID:"channel_id",CHURN_PROBABILITY_SCORE_LOWER_BOUND:"churn_probability_score_lower_bound",CHURN_PROBABILITY_SCORE_UPPER_BOUND:"churn_probability_score_upper_bound",CLIENT_SIDE_IMPRESSIONS_COUNT:"client_side_impressions_count",CLIENT_SIDE_RENDERER:"client_side_renderer",CLIENT_SIDE_RENDERING_CLASS:"client_side_rendering_class",CLIENT_SIDE_RENDERING_PARAMS:"client_side_rendering_params",CLIENT_SIDE_RENDERING_SPEC:"client_side_rendering_spec",CLIENT_SIDE_RULES:"client_side_rules",CONTEXT_IDS_CLUSTER_NAME:"context_ids_cluster_name",CONTEXTUAL_TARGETING_SPEC:"contextual_targeting_spec",CMS_ID:"cms_id",DELIVERY_DELAY_IN_SEC:"delay_in_sec",DEPENDS_ON_OTHER_TIP_EVENT:"depends_on_other_tip_event",DELIVER_ONCE_PER:"deliver_once_per",DELIVERY_REQUESTED_BY_USER:"delivery_requested_by_user",ELIGIBILITY_GK:"eligibility_gk",EMAIL_CMS_ID:"email_cms_id",ENT_TIP_CONFIG_ID:"ent_tip_config_id",FROM_EMAIL_LOCAL_PART:"from_email_local_part",FROM_EMAIL_NAME:"from_email_name",FROM_EMAIL_SUBDOMAIN:"from_email_subdomain",GUARANTEE_TIP_DELIVERY:"guarantee_delivery",HAS_GLOBAL_HOLDOUT:"has_global_holdout",HIDE_ON_BUSINESS_MANAGER:"hide_on_business_manager",HIDE_TIP_IF_CONVERTED:"hide_if_converted",HOLDOUT_UNIT_TYPE:"holdout_unit_type",IC_TARGETING_SPEC:"ic_targeting_spec",INVALID_REASON_SAMPLE_RATE:"invalid_reason_sample_rate",IS_HIGHLIGHTED_IN_MOBILE_ADS_MANAGER:"is_highlighted_in_mobile_ads_manager",LAUNCH_GK:"launch_gk",LOG_UNSAMPLED_EVENT_LIST:"log_unsampled_event_list",LOOKBACK_DAYS:"lookback_days",LOWER_RANGE_COMPLETION_PCT:"lower_range_completion_pct",MILESTONE_STAGE:"milestone_stage",MIN_RESULTS:"min_results",MIN_PERCENTILE:"min_percentile",MIN_PHOTOS_FROM_IG_ACCOUNT:"min_photos_from_instagram_account",NAME:"name",OWNER:"owner",PIXEL_HELP_LINK:"pixel_help_link",PIXEL_LAST_FIRING_DAYS_BACK:"pixel_last_firing_days_back",PIXEL_COUPON_CONTENT_VALUE:"pixel_coupon_content_value",PROMOTION_ID:"promotion_id",PROMOTION_TEST_QE:"promotion_test_qe",PROMOTION_GROUP_ID:"promotion_group_id",RENDERING_TYPE:"rendering_type",SIGNATURE_PARAMS:"signature_params",SKIP_AUGMENTATION_FOR_CONVERSION:"skip_augmentation_for_conversion",TIME_WINDOW_FROM_START:"time_window_from_start",TIME_WINDOW_TO_END:"time_window_to_end",SUPPORT_FORM_ID:"support_form_id",TASK_NUMBER:"task_number",TASK_SPECIFIC_HOLDOUT:"task_specific_holdout",TASK_SPECIFIC_GK_HOLDOUT:"task_specific_gk_holdout",TESSA_INTEGRATION_POINT_ID:"tessa_integration_point_id",TIP_CLASS:"tip_class",TIP_CONVERSION_EXPIRES_AFTER:"conversion_expires_after",TIP_CLICK_EXPIRES_AFTER:"click_expires_after",TIP_DELIVERY_CAP:"tip_delivery_cap",TIP_DELIVERY_CAP_RESET_PERIOD:"tip_delivery_cap_reset_period",TIP_GLOBAL_IMPRESSION_CAP:"tip_global_impression_cap",TIP_ID:"tip_id",TIP_IMPRESSION_CAP:"impression_cap",TIP_IMPRESSION_CAP_RESET_PERIOD:"impression_cap_reset_period",TIP_IS_INLINE:"tip_is_inline",TIP_IS_STANDALONE:"tip_is_standalone",TIP_NAME_DELIVERY_CAP:"tip_name_delivery_cap",TIP_NAME_DELIVERY_CAP_RESET_PERIOD:"tip_name_delivery_cap_reset_period",TIP_NAME_IMPRESSION_CAP:"tip_name_impression_cap",TIP_NAME_IMPRESSION_CAP_RESET_PERIOD:"tip_name_impression_cap_reset_period",TIP_NAME_XOUT_CAP:"tip_name_xout_cap",TIP_NAME_XOUT_CAP_RESET_PERIOD:"tip_name_xout_cap_reset_period",TIP_PRIORITY:"tip_priority",TIP_SCORE:"tip_score",TIP_XOUT_EXPIRES_AFTER:"xout_expires_after",TIP_XOUT_IS_BENIGN:"tip_xout_is_benign",TUTORIAL_ID:"tutorial_id",UPPER_RANGE_COMPLETION_PCT:"upper_range_completion_pct",USER_CHANNEL_XOUT_CAP:"user_channel_xout_cap",USER_CHANNEL_XOUT_CAP_RESET_PERIOD:"user_channel_xout_cap_reset_period",VALIDATE_ONLY_ESSENTIAL:"validate_only_essential",VALIDATION_CACHE_TIMEOUT:"validation_cache_timeout",VISIBILITY_PARAM:"visibility_param",VISIBILITY_QE:"visibility_qe"})}),null);
__d("AdproObjectiveType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:0,OFFER_CLAIMS:6,PAGE_LIKES:8,CANVAS_APP_INSTALLS:11,EVENT_RESPONSES:12,CANVAS_APP_ENGAGEMENT:13,POST_ENGAGEMENT:14,WEBSITE_CONVERSIONS:15,MOBILE_APP_INSTALLS:17,LINK_CLICKS:19,MOBILE_APP_ENGAGEMENT:20,VIDEO_VIEWS:24,LOCAL_AWARENESS:26,INSTAGRAM_BRAND_AWARENESS:27,PRODUCT_CATALOG_SALES:29,LEAD_GENERATION:31,BRAND_AWARENESS:32,RESEARCH_POLL:33,EXTERNAL:34,STORE_VISITS:35,REACH:36,APP_INSTALLS:37,MESSAGES:39,IMPRESSIONS:21,MILLE:23,LOCAL_IMPRESSIONS:28,MULTIPLE:999,DEPRECATED_CLICKS:2,INCOMPATIBLE_OFFER_CLAIMS:106,INCOMPATIBLE_PAGE_LIKES:108,INCOMPATIBLE_CANVAS_APP_INSTALLS:111,INCOMPATIBLE_EVENT_RESPONSES:112,INCOMPATIBLE_CANVAS_APP_ENGAGEMENT:113,INCOMPATIBLE_POST_ENGAGEMENT:114,INCOMPATIBLE_WEBSITE_CONVERSIONS:115,INCOMPATIBLE_MOBILE_APP_INSTALLS:117,INCOMPATIBLE_WEBSITE_CLICKS:119,INCOMPATIBLE_PAGE_ENGAGEMENT:120,WILDCARD_INTERNAL_ONLY:121,MEDIA_DOWNLOADS:25,XPLATFORM_SALES:30})}),null);
__d("AdsPreviewApiFormats",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AUDIENCE_NETWORK_INSTREAM_VIDEO:"AUDIENCE_NETWORK_INSTREAM_VIDEO",AUDIENCE_NETWORK_INSTREAM_VIDEO_MOBILE:"AUDIENCE_NETWORK_INSTREAM_VIDEO_MOBILE",AUDIENCE_NETWORK_INSTREAM_VIDEO_TV:"AUDIENCE_NETWORK_INSTREAM_VIDEO_TV",AUDIENCE_NETWORK_INTERSTITIAL_DESKTOP:"AUDIENCE_NETWORK_INTERSTITIAL_DESKTOP",AUDIENCE_NETWORK_MEDIUM_RECTANGLE_DESKTOP:"AUDIENCE_NETWORK_MEDIUM_RECTANGLE_DESKTOP",AUDIENCE_NETWORK_NATIVE_BANNER:"AUDIENCE_NETWORK_NATIVE_BANNER",AUDIENCE_NETWORK_NATIVE_DESKTOP:"AUDIENCE_NETWORK_NATIVE_DESKTOP",AUDIENCE_NETWORK_OUTSTREAM_VIDEO:"AUDIENCE_NETWORK_OUTSTREAM_VIDEO",AUDIENCE_NETWORK_REWARDED_VIDEO:"AUDIENCE_NETWORK_REWARDED_VIDEO",AUDIENCE_NETWORK_REWARDED_VIDEO_DESKTOP:"AUDIENCE_NETWORK_REWARDED_VIDEO_DESKTOP",DESKTOP_FEED_STANDARD:"DESKTOP_FEED_STANDARD",FACEBOOK_STORY_MOBILE:"FACEBOOK_STORY_MOBILE",GROUPS_DESKTOP:"GROUPS_DESKTOP",GROUPS_MOBILE:"GROUPS_MOBILE",INSTAGRAM_EXPLORE_CONTEXTUAL:"INSTAGRAM_EXPLORE_CONTEXTUAL",INSTAGRAM_EXPLORE_IMMERSIVE:"INSTAGRAM_EXPLORE_IMMERSIVE",INSTAGRAM_IGTV:"INSTAGRAM_IGTV",INSTAGRAM_STANDARD:"INSTAGRAM_STANDARD",INSTAGRAM_STORY:"INSTAGRAM_STORY",INSTANT_ARTICLE_STANDARD:"INSTANT_ARTICLE_STANDARD",INSTREAM_VIDEO_DESKTOP:"INSTREAM_VIDEO_DESKTOP",INSTREAM_VIDEO_MOBILE:"INSTREAM_VIDEO_MOBILE",MARKETPLACE_DESKTOP:"MARKETPLACE_DESKTOP",MARKETPLACE_MOBILE:"MARKETPLACE_MOBILE",MARKETPLACE_SEARCH_ADS_MOBILE:"MARKETPLACE_SEARCH_ADS_MOBILE",MESSENGER_DESKTOP_THREAD_MEDIA:"MESSENGER_DESKTOP_THREAD_MEDIA",MESSENGER_MOBILE_INBOX_MEDIA:"MESSENGER_MOBILE_INBOX_MEDIA",MESSENGER_MOBILE_STORY_MEDIA:"MESSENGER_MOBILE_STORY_MEDIA",MESSENGER_MOBILE_THREAD_MEDIA:"MESSENGER_MOBILE_THREAD_MEDIA",MOBILE_BANNER:"MOBILE_BANNER",MOBILE_FEED_BASIC:"MOBILE_FEED_BASIC",MOBILE_FEED_STANDARD:"MOBILE_FEED_STANDARD",MOBILE_FULLWIDTH:"MOBILE_FULLWIDTH",MOBILE_INTERSTITIAL:"MOBILE_INTERSTITIAL",MOBILE_MEDIUM_RECTANGLE:"MOBILE_MEDIUM_RECTANGLE",MOBILE_NATIVE:"MOBILE_NATIVE",RIGHT_COLUMN_STANDARD:"RIGHT_COLUMN_STANDARD",SEARCH_SERP_ADS_MOBILE:"SEARCH_SERP_ADS_MOBILE",SUGGESTED_VIDEO_DESKTOP:"SUGGESTED_VIDEO_DESKTOP",SUGGESTED_VIDEO_MOBILE:"SUGGESTED_VIDEO_MOBILE",WATCH_FEED_MOBILE:"WATCH_FEED_MOBILE",WHATSAPP_STATUS_MEDIA:"WHATSAPP_STATUS_MEDIA"})}),null);
__d("PagesCalloutActions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({REGISTER_CALLOUT:"register_callout",INIT_SURFACE:"init_surface",SHOW_CALLOUT:"show_callout",DISMISS_CALLOUT:"dismiss_callout"})}),null);
__d("TextPenaltyLevel",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:"none",LOW:"low",MEDIUM:"medium",HIGH:"high"})}),null);
__d("WhatsAppNumberType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:0,BIZ:1,PERSONAL:2})}),null);
__d("adsCreateStructuredSelector",["adsCreateSelector"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a,c){var d=Object.keys(a);a=Object.values(a);return b("adsCreateSelector")(a,function(){var a={};for(var b=0;b<arguments.length;b++)a[d[b]]=b<0||arguments.length<=b?void 0:arguments[b];return a},{name:c})};e.exports=a}),null);
__d("XAYMTMultiTipAsyncClickController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/growth/aymt/multi_async_click/",{tip_id:{type:"String"},channel_id:{type:"String"},aymt_data:{type:"String"},target:{type:"String",required:!0},handled_delete:{type:"Bool",defaultValue:!0},extra_data:{type:"String"}})}),null);