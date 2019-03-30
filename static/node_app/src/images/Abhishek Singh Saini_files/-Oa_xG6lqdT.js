if (self.CavalryLogger) { CavalryLogger.start_js(["CSNWq"]); }

__d("RoyalBluebarTransitions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INDETERMINATE:"Indeterminate",PULSE:"Pulse",SHIMMER:"Shimmer",NONE:"none",OFF:"off",PULSE_GIF_2S:"pulse_gif1",PULSE_GIF_2S_DARKER:"pulse_gif2",PULSE_GIF_3S:"pulse_gif3"})}),null);
__d("RoyalBluebar",["cx","Arbiter","BigPipe","CSS","Event","QuicklingFetchStreamConfig","RoyalBluebarTransitions","Run","SubscriptionsHandler","clearTimeout","ge","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();var h=null,i=!1,j=b("QuicklingFetchStreamConfig"),k=j.experimentName,l=k!==b("RoyalBluebarTransitions").OFF&&k!==b("RoyalBluebarTransitions").NONE;function m(){h&&h()}var n={_subscriptionHandler:null,_getSubscriptionHandler:function(){var a=this;this._subscriptionHandler||(this._subscriptionHandler=new(b("SubscriptionsHandler"))(),b("Run").onUnload(function(){a._subscriptionHandler.release(),a._subscriptionHandler=null}));return this._subscriptionHandler},fixOnScroll:function(a){this._getSubscriptionHandler().addSubscriptions(b("Arbiter").subscribe("bluebarFixedBehaviorController/isfixed",function(c,d){c="_50ti";var e="_33rf";a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,c,d);a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,e,!d);b("Arbiter").inform("reflow")}))},informOnClick:function(a){this._getSubscriptionHandler().addSubscriptions(b("Event").listen(a,"click",function(a){b("Arbiter").inform("BlueBar/homeClick",a)===!1&&a.preventDefault()}))},stopAnimatingAfterDD:function(){var a=b("Arbiter").subscribeOnce(b("BigPipe").Events.init,function(a,c){c.arbiter.subscribeOnce(b("BigPipe").Events.displayed,m)}),c=b("Run").onAfterLoad(m);h=function(){h=null,b("Arbiter").unsubscribe(a),c.remove(),n.stopTransitionAnimation()}},startTransitionAnimation:function(){if(l){h&&h();var a=b("ge")(j.bluebarTransitionElement);a&&b("CSS").addClass(a,j.bluebarTransitionClass)}},stopTransitionAnimation:function(){__p&&__p();if(l){var a=j,c=b("ge")(a.bluebarTransitionElement);if(!c)return;if(k===b("RoyalBluebarTransitions").INDETERMINATE){if(!i){i=!0;b("CSS").addClass(c,"finishing");var d;h=function(){h=null,i=!1,b("clearTimeout")(d),b("CSS").removeClass(c,"finishing"),b("CSS").removeClass(c,a.bluebarTransitionClass)};d=b("setTimeoutAcrossTransitions")(h,200)}}else b("CSS").removeClass(c,a.bluebarTransitionClass)}}};e.exports=n}),null);
__d("SearchClientFunnelTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("search_client_funnel:SearchClientFunnelLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("search_client_funnel:SearchClientFunnelLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("search_client_funnel:SearchClientFunnelLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setActionName=function(a){this.$1.action_name=a;return this};c.setLastState=function(a){this.$1.last_state=a;return this};c.setSelectedID=function(a){this.$1.selected_id=a;return this};c.setSelectedText=function(a){this.$1.selected_text=a;return this};c.setSelectedType=function(a){this.$1.selected_type=a;return this};c.setTypeaheadSid=function(a){this.$1.typeahead_sid=a;return this};c.setTypedQuery=function(a){this.$1.typed_query=a;return this};return a}();c={action_name:!0,last_state:!0,selected_id:!0,selected_text:!0,selected_type:!0,typeahead_sid:!0,typed_query:!0};e.exports=a}),null);
__d("SearchFunnelLoggerEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SEARCH_BOX_TAPPED:"search_box_tapped",TA_SUGGESTION_CLICKED:"ta_suggestion_clicked",TA_ABANDON:"ta_abandon",SERP_INLINE_ACTION:"serp_inline_action",SERP_RESULTS_LOADED:"serp_results_loaded",SERP_RESULT_CLICKED:"serp_result_clicked",SERP_SEE_MORE_CLICKED:"serp_see_more_clicked",SERP_SCROLL_RESULTS:"serp_scroll_results",SERP_TAB_CLICKED:"serp_tab_clicked",VIEW_PORT_VIEWS_ON_SEARCH_RESULTS:"view_port_views_on_search_results",END_OF_SERP_RESULTS:"end_of_serp_results",MARKETPLACE_SERP_ITEM_CLICKED:"marketplace_click"})}),null);
__d("SearchFunnelLogger",["SearchClientFunnelTypedLogger","SearchFunnelLoggerConfig","SearchFunnelLoggerEvents"],(function(a,b,c,d,e,f){"use strict";a={logSearchOpen:function(a){if(!b("SearchFunnelLoggerConfig").isEnabled)return;new(b("SearchClientFunnelTypedLogger"))().setActionName(b("SearchFunnelLoggerEvents").SEARCH_BOX_TAPPED).setTypeaheadSid(a).log()}};e.exports=a}),null);
__d("BrowseClientEventLogger",["csx","Banzai","DOMQuery","SearchFunnelLogger","SearchLoggingOptions","ge","gkx","ifRequired"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="browse_client_event_session",i="search_www_click_error",j="21.";a={logData:function(a,c,d,e){__p&&__p();e===void 0&&(e={});if(!a||!c)return;e.event=a;e.client_time=Math.floor(Date.now());e.client_time_2=Date.now()/1e3;e.session_id=c;e.vertical=d;this.processedSessions=this.processedSessions||[];if(this.processedSessions.indexOf(c)!==-1)return;a=e.event==="click"&&e.clicked_href!=null&&b("SearchLoggingOptions").signalLinkClicks;b("Banzai").post(h,[e],{delay:0,retry:!0,signal:a})},logClick:function(a){a.gt.event="click",this.maybeLogVisiblityEvent(a,!0),b("gkx")("678249")&&b("ifRequired")("FacebarTypeaheadRefreshNullstate",function(a){a.setIsNullstateStale(!0)})},maybeLogClientViewEvent:function(a){a.event="client_view",this.maybeLogVisiblityEvent(a)},maybeLogVisiblityEvent:function(a,c){__p&&__p();c===void 0&&(c=!1);var d=null;c&&(d=a,a=a.gt);if(!a||!a.xt||a.xt.indexOf(j)!==0){c&&b("Banzai").post(i,[d],{delay:0,retry:!0});return}var e=JSON.parse(a.xt.substring(3));c&&(e.click_type=a.click_type,e.tn=a.tn,e.clicked_href=a.clicked_href,d&&d.bt&&d.bt.ct&&(d.bt.ct=="feedback"&&(e.feedback_score=d.bt.feedback_score,e.feedback_type=d.bt.feedback_type)));c=a.event;d=this._getPositionForCurrentDOMNode(e.unit_id);e.position=d;if(e.display_style==="context_hscroll"&&(c==="client_view"||c==="vpvd"||c==="visible"||c==="hidden"))return;if(c==="vpvd"){if(!a.ft)return;e.vpvd_time=a.ft.vpvd_time_delta}this.logData(c,e.session_id,e.vertical,e)},_getPositionForCurrentDOMNode:function(a){__p&&__p();if(a==null||a==void 0)return null;var c=0,d=b("ge")("browse_result_area");if(d==null||d==void 0)return null;d=b("DOMQuery").scry(d,"._401d");for(var e=0;e<d.length;e++){var f=d[e];f=f.getAttribute("data-gt");if(f!==null||f!==void 0){f=JSON.parse(JSON.parse(f).xt.substring(3));if(f.item_type=="result"&&f.id!==""&&f.id!==null){if(f.unit_id==a)return c;c++}}}return null},logImpression:function(a){a.event="impression",this.maybeLogVisiblityEvent(a)}};e.exports=a}),null);
__d("VisibilityTrackingHelper",["Arbiter","DesktopHscrollUnitEventConstants","Event","getViewportDimensions"],(function(a,b,c,d,e,f){a={getEventListeners:function(a,c){var d=[b("Event").listen(document,"DOMContentLoaded",a),b("Event").listen(window,"scroll",a),b("Event").listen(window,"resize",a),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT,a)];c&&c.considerSubtreeModification&&d.push(b("Event").listen(document,"DOMSubtreeModified",a));return d},getViewportInfo:function(){return b("getViewportDimensions")()},isSnippetFlyoutVisible:function(){return!1}};e.exports=a}),null);
__d("MetricsValidationSignalTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:MetricsValidationSignalLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:MetricsValidationSignalLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MetricsValidationSignalLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppID=function(a){this.$1.app_id=a;return this};c.setContext=function(a){this.$1.context=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setErrorFields=function(a){this.$1.error_fields=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setErrorMessages=function(a){this.$1.error_messages=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setErrorTypes=function(a){this.$1.error_types=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setEventFields=function(a){this.$1.event_fields=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setEvents=function(a){this.$1.events=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setLogVersion=function(a){this.$1.log_version=a;return this};c.setMetrics=function(a){this.$1.metrics=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setResult=function(a){this.$1.result=a;return this};c.setSystem=function(a){this.$1.system=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setType=function(a){this.$1.type=a;return this};c.setValidator=function(a){this.$1.validator=a;return this};c.setVolume=function(a){this.$1.volume=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={app_id:!0,context:!0,error_fields:!0,error_messages:!0,error_types:!0,event_fields:!0,events:!0,log_version:!0,metrics:!0,result:!0,system:!0,time:!0,type:!0,validator:!0,volume:!0,weight:!0};e.exports=a}),null);
__d("ViewableSessionStore",["CurrentUser","MetricsValidationSignalTypedLogger","ge","getViewportDimensions","setTimeout"],(function(a,b,c,d,e,f){__p&&__p();var g={};function a(a,b,c){var d=j(a);g[d]||(g[d]={context:a,isValid:!1});h(d,b,c);if(((a=g[d].boundaryDimensions)==null?void 0:a.ref)!==0)return;!g[d].isValid?i(d)&&(g[d].isValid=!0):i(d)||(g[d].isValid=!1,g[d].invalidTime=Date.now())}function h(a,b,c){__p&&__p();var d;c=c.getBoundingClientRect();var e=c.bottom,f=c.top,h=c.left;c=c.right;var i={};d=(d=(d=g[a])==null?void 0:(d=d.boundaryDimensions)==null?void 0:d.ref)!=null?d:0;switch(b){case"top":i={top:e,left:h,right:c,ref:++d};break;case"bottom":i={bottom:f,left:h,right:c,ref:--d};break}g[a]=babelHelpers["extends"]({},g[a],{boundaryDimensions:babelHelpers["extends"]({},(b=g[a])==null?void 0:b.boundaryDimensions,i)})}function i(a){a=g[a].boundaryDimensions;if(a==void 0)return!1;var c=b("ge")("pagelet_bluebar"),d=b("getViewportDimensions")(),e=d.width;d=d.height;c=c.offsetHeight+c.offsetTop;return a.top!=void 0&&a.bottom!=void 0&&a.top<a.bottom&&a.top<d&&a.bottom>c&&a.left<a.right&&a.left<e&&a.right>0}function j(a){return a.postId}function k(a,c,d){__p&&__p();var e,f;d===void 0&&(d=1);e=(e=g[c])==null?void 0:e.invalidTime;var h=new(b("MetricsValidationSignalTypedLogger"))().setSystem("WEB_CLIENT").setValidator("VIEWABLE_SESSION_VALIDATOR").setEvents([a]).setContext({userid:b("CurrentUser").getAccountID(),sessionKey:c,sessionDetail:JSON.stringify(g[c])}).setType("n/a");if(((f=g[c])==null?void 0:f.isValid)===!0||e!=void 0&&Date.now()-e<1e3)h.setResult(0);else{if(d>0){b("setTimeout")(function(){k(a,c,d-1)},500);return}h.setResult(1).setErrorFields([a]).setErrorTypes(["over-logging"]).setErrorMessages(["events are logged when component is not visible"])}h.log()}e.exports={ViewableSessionStore:g,onViewUpdate:a,onEventLogged:k}}),null);
__d("QuickPipeRequest",["AjaxPipeRequest","Arbiter","ArtilleryOnUntilOffLogging","DocumentTitle","PageNavigationStageLogger","Quickling","QuicklingConfig","QuicklingFetchStreamConfig","QuicklingRefreshOverheadUtil","RoyalBluebar","RoyalBluebarTransitions","URI","UserAgent_DEPRECATED","goOrReplace","ifRequired"],(function(a,b,c,d,e,f){__p&&__p();var g=b("QuicklingConfig").version,h,i="";a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e={version:g};c=a.call(this,c,d,{quickling:e})||this;c._processFirstResponse=function(a){var c=a.getPayload();j(c.title);window.scrollTo(0,0);a=a.getRequest();a&&document.body&&!c.isCometResponse&&(document.body.className=c.body_class||"");b("Arbiter").inform("quickling/response");b("ArtilleryOnUntilOffLogging").onNewPageLoad()};c._isQuickling=!0;return c}var d=c.prototype;d._preBootloadFirstResponse=function(a){return!0};d._fireDomContentCallback=function(){this._request&&this._request.cavalry&&this._request.cavalry.setTimeStamp("t_domcontent"),b("ifRequired")("PageTransitions",function(a){a.transitionComplete()}),a.prototype._fireDomContentCallback.call(this)};d._fireOnloadCallback=function(){var b=this._request;b!=null&&b.cavalry&&(b.cavalry.setTimeStamp("t_hooks"),b.cavalry.setTimeStamp("t_layout"),b.cavalry.setTimeStamp("t_onload"));a.prototype._fireOnloadCallback.call(this)};d.isPageActive=function(a){return b("Quickling").isPageActive(a)};d._versionCheck=function(a){__p&&__p();if(a.version==g){b("QuicklingRefreshOverheadUtil").onQuicklingVersionMatch();return!0}var c=["quickling","ajaxpipe","ajaxpipe_token","ajaxpipe_fetch_stream"];b("PageNavigationStageLogger").setCookieForNavigation(a.uri);b("PageNavigationStageLogger").setNote("quickling_version");b("PageNavigationStageLogger").updateCookie();b("QuicklingRefreshOverheadUtil").onQuicklingRefreshStart();b("goOrReplace")(window.location,new(b("URI"))(a.uri).removeQueryData(c),!0);b("RoyalBluebar").stopTransitionAnimation();return!1};d.getSanitizedParameters=function(){return["quickling"]};d._getAsyncRequestType=function(){return b("QuicklingFetchStreamConfig").experimentName!==b("RoyalBluebarTransitions").OFF?"useFetchWithIframeFallback":"useIframeTransport"};return c}(b("AjaxPipeRequest"));function j(a){a=a||"Facebook",b("DocumentTitle").set(a),b("UserAgent_DEPRECATED").ie()&&(i=a,h||(h=window.setInterval(function(){var a=i,c=b("DocumentTitle").get();a!=c&&b("DocumentTitle").set(a)},5e3,!1)))}e.exports=a}),null);
__d("QuicklingAugmenter",["URI"],(function(a,b,c,d,e,f){__p&&__p();var g=[];a={addHandler:function(a){g.push(a)},augmentURI:function(a){var c=[],d=new(b("URI"))(a);g.forEach(function(a){var b=a(d);if(!b)return d;c.push(a);d=d.addQueryData(b)});g=c;return d}};e.exports=a}),null);
__d("Quickling",["AjaxPipeRequest","Arbiter","BigPipe","ContextualComponent","PageEvents","PageHooks","PageNavigationStageLogger","PageTransitionsRegistrar","PHPQuerySerializer","QuicklingAugmenter","QuicklingConfig","QuicklingRefreshOverheadUtil","QuickPipeRequest","RoyalBluebar","Run","TimerStorage","URI","cancelAnimationFrame","cancelIdleCallback","clearImmediate","clearInterval","clearTimeout","ge","isEmpty"],(function(a,b,c,d,e,f){__p&&__p();var g=b("QuicklingConfig").sessionLength,h=new RegExp(b("QuicklingConfig").inactivePageRegex),i=0,j=!1,k={init:function(){if(j)return;j=!0;b("Run").onAfterLoad(function(){b("PageTransitionsRegistrar").registerHandler(m,1)})},isActive:function(){return j},isPageActive:function(a){__p&&__p();if(a==="#")return!1;a=new(b("URI"))(a);if(a.getDomain()&&a.getDomain()!=new(b("URI"))(window.location.href).getDomain())return!1;if(a.getPath()=="/l.php"){var c=a.getQueryData().u;if(c){c=new(b("URI"))(unescape(c)).getDomain();if(c&&c!=new(b("URI"))(window.location.href).getDomain())return!1}}c=a.getPath();a=a.getQueryData();b("isEmpty")(a)||(c+="?"+b("PHPQuerySerializer").serialize(a));return Object.keys(a).reduce(function(a,c){return a||b("QuicklingConfig").badRequestKeys.includes(c)},!1)?!1:!h.test(c)},getLoadCount:function(){return i},transitionHandler_DO_NOT_USE:m};function l(){i++;return i>=g}function m(a){__p&&__p();b("AjaxPipeRequest").setCurrentRequest(null);if(l()){b("PageNavigationStageLogger").setNote("quickling_refresh");return!1}a=b("QuicklingAugmenter").augmentURI(a);if(!k.isPageActive(a)){b("PageNavigationStageLogger").setNote("quickling_inactive");return!1}b("TimerStorage").clearAll(b("TimerStorage").ANIMATION_FRAME,b("cancelAnimationFrame"));b("TimerStorage").clearAll(b("TimerStorage").IDLE_CALLBACK,b("cancelIdleCallback"));b("TimerStorage").clearAll(b("TimerStorage").IMMEDIATE,b("clearImmediate"));b("TimerStorage").clearAll(b("TimerStorage").INTERVAL,b("clearInterval"));b("TimerStorage").clearAll(b("TimerStorage").TIMEOUT,b("clearTimeout"));window.ExitTime=Date.now();b("QuicklingRefreshOverheadUtil").onQuicklingStart();b("Run").__removeHook(b("PageHooks").ONLOAD_HOOK);b("Run").__removeHook(b("PageHooks").DOMREADY_HOOK);b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD,{transition_type:"quickling"});var c="content";n(c);b("RoyalBluebar").startTransitionAnimation();c=new(b("QuickPipeRequest"))(c,a).setResetHandler(b("RoyalBluebar").stopTransitionAnimation).setFinallyHandler(b("RoyalBluebar").stopTransitionAnimation).send();c.getArbiter().subscribeOnce(b("BigPipe").Events.displayed,b("RoyalBluebar").stopTransitionAnimation);a=window.__bodyWrapper;a.getCodeUsage&&a.clearCodeUsage();return b("PageTransitionsRegistrar").DELAY_HISTORY}function n(a){var c=function(){var c=b("ge")(a);c=b("ContextualComponent").forNode(c);c&&c.cleanup();b("PageHooks").runHooks("onleavehooks")};c()}e.exports=k;a.Quickling=k}),null);
__d("BanzaiNectar",["Banzai"],(function(a,b,c,d,e,f){function a(a){return{log:function(c,d,e){d={e:d,a:e};b("Banzai").post("nectar:"+c,d,a)}}}c=a();c.create=a;e.exports=c}),null);
__d("GHLTestElement",["csx","invariant","BanzaiODS","Parent","containsNode","getElementPosition"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a,c){__p&&__p();var d=Array.from(a.querySelectorAll("img"));d.length>0||h(0,13937);d=d.filter(i);if(d.length===0){b("BanzaiODS").bumpEntityKey("feed_ads","GHLTestElement.testElementI.skipping_check_for_incompatible_element"+c);return!1}c=d.filter(function(a){a=b("getElementPosition")(a);return a.width>0||a.height>0});d=c.length===0;return d&&!j(a)};var i=function(a){var c;return b("containsNode")(a==null?void 0:(c=a.ownerDocument)==null?void 0:c.documentElement,a)},j=function(a){return!!b("Parent").bySelector(a,k)},k=[".hidden_elem","._5ds2","._i6m"].join(",");e.exports={testElementI:a}}),null);
__d("GHLTracker",["BanzaiODS"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Map();a=function(a){if(g.has(a)){b("BanzaiODS").bumpEntityKey("feed_ads","GHLTracker.element_id_duplicated");return}g.set(a,{isHidden:!1,isDelayImpLogged:!1})};c=function(a){var b=g.get(a);b!==void 0&&g.set(a,{isHidden:!0,isDelayImpLogged:b.isDelayImpLogged})};d=function(a){var b=g.get(a);b!==void 0&&g.set(a,{isHidden:b.isHidden,isDelayImpLogged:!0})};f=function(a){return g.get(a)};e.exports={track:a,markH:c,markImp:d,getState:f}}),null);
__d("GHLDelay",["AdImpressionLoggingConfig"],(function(a,b,c,d,e,f){var g=null;a={getEnabled:function(){return g===null?b("AdImpressionLoggingConfig").enableDelayedHiddenCheck:g},setEnabled:function(a){g=a}};e.exports=a}),null);
__d("VisibilityTracking",["Banzai","BrowseClientEventLogger","DataAttributeUtils","ErrorUtils","ScriptPath","SubscriptionsHandler","Visibility","VisibilityTrackingHelper","collectDataAttributes","getElementPosition","gkx","pageID","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g="visibility_tracking",h="[data-vistracking]",i=500,j=50,k=50,l=50,m=50,n=0;a=function(){"use strict";__p&&__p();function a(a){__p&&__p();var c=this;a=a||{};if(!a.bypass_banzai_check&&!b("Banzai").isEnabled(g))return;this.visibleElementInfo={};this.getDataFromConfig(a);b("Visibility").addListener(b("Visibility").VISIBLE,b("ErrorUtils").guard(function(){return c.fireEvent("browser")},"VisibilityTracking:visible",this));b("Visibility").addListener(b("Visibility").HIDDEN,b("ErrorUtils").guard(function(){return c.clearAllVisibleElements("browser")},"VisibilityTracking:hidden",this));b("ScriptPath").subscribe(b("ErrorUtils").guard(function(){return c.updateVisibleElements()},"VisibilityTracking:scriptPath",this));b("Banzai").subscribe(b("Banzai").SHUTDOWN,b("ErrorUtils").guard(function(){return c.onUnload()},"VisibilityTracking:banzaiShutdown",this));this.fireEventCallback=b("throttle").acrossTransitions(b("ErrorUtils").guard(function(a){return c.fireEvent(a)},"VisibilityTracking:fireEventCallback",this),this.timeout,this);this.listeners=new(b("SubscriptionsHandler"))();b("VisibilityTrackingHelper").getEventListeners(function(){return c.fireEventCallback()},a).forEach(function(a){this.listeners.addSubscriptions(a)},this);this.extraInit&&b("ErrorUtils").applyWithGuard(this.extraInit.bind(this))}var c=a.prototype;c.getDataFromConfig=function(a){this.config=a,this.root=a.root||document.documentElement,this.selector=a.selector||h,this.visibleEventCallBack=a.visibleEventCallBack||function(){},this.timeout=a.timeout!==void 0?a.timeout:i,this.minOffsetVisibleFromBottom=a.minOffsetVisibleFromBottom!==void 0?a.minOffsetVisibleFromBottom:j,this.minOffsetVisibleFromTop=a.minOffsetVisibleFromTop!==void 0?a.minOffsetVisibleFromTop:k,this.minOffsetVisibleFromLeft=a.minOffsetVisibleFromLeft!==void 0?a.minOffsetVisibleFromLeft:l,this.minOffsetVisibleFromRight=a.minOffsetVisibleFromRight!==void 0?a.minOffsetVisibleFromRight:m,this.handleAllHiddenEvents=a.handleAllHiddenEvents!==void 0?a.handleAllHiddenEvents:!1,this.handleAllVisibleEvents=a.handleAllVisibleEvents!==void 0?a.handleAllVisibleEvents:!1,this.cacheTrackedElements=a.cacheTrackedElements!==void 0?a.cacheTrackedElements:!1};c.getAllTrackedElements=function(){__p&&__p();if(!this.allTrackedElements){this.allTrackedElements={};var a=[];this.config.is_xtrackable?a=b("DataAttributeUtils").getXTrackableElements():this.root&&this.root.querySelectorAll&&(a=this.root.querySelectorAll(this.selector));for(var c=0;c<a.length;c++){var d=this.getElementID(a[c]);this.allTrackedElements[d.toString()]=a[c]}}return this.allTrackedElements};c.refreshAllTrackedElements=function(){delete this.allTrackedElements;return this.getAllTrackedElements()};c.getDataToLog=function(a){a=Object.assign(b("collectDataAttributes")(a,["gt"]).gt,{client_time:Date.now()/1e3,time_spent_id:b("pageID"),script_path:b("ScriptPath").getScriptPath()});return a};c.getElementID=function(a){var b=a.$1;if(b)return b;a.$1=++n;return n};c.sendDataToLog=function(a){b("BrowseClientEventLogger").maybeLogVisiblityEvent(a),b("Banzai").post(g,a)};c.isInstreamAdStoryElement=function(a){return!1};c.fireEvent=function(a){a===void 0&&(a="default");var c=this.cacheTrackedElements?this.allTrackedElements:this.refreshAllTrackedElements();for(var d in c){var e=c[d],f=b("VisibilityTrackingHelper").getViewportInfo();f=this.isVisible(e,f);!f&&(d in this.visibleElementInfo||this.handleAllHiddenEvents)?this.handleEvent(e,{name:"hidden",cause:a}):f&&(!(d in this.visibleElementInfo)||this.handleAllVisibleEvents)&&this.handleEvent(e,{name:"visible",cause:a})}this.clearUntrackedVisibleElements()};c.isVisible=function(a,c){if(a==null)return!1;if(b("gkx")("820050")&&b("VisibilityTrackingHelper").isSnippetFlyoutVisible())return!1;a=b("getElementPosition")(a);return!!(a.x||a.y||a.width||a.height)&&a.y+a.height>=this.minOffsetVisibleFromTop&&a.y<=c.height-this.minOffsetVisibleFromBottom&&a.x+a.width>=this.minOffsetVisibleFromLeft&&a.x<=c.width-this.minOffsetVisibleFromRight};c.handleEvent=function(a,c){__p&&__p();var d=this.getElementID(a).toString(),e=this.getDataToLog(a),f;if(c.name==="visible"){var g=Math.floor(Date.now()/1e3);f=b("pageID").concat(":",g.toString(),":",this.getElementID(a).toString());this.visibleElementInfo[d]={visibility_id:f,elem:a}}else if(c.name==="hidden"){d in this.visibleElementInfo&&(f=this.visibleElementInfo[d].visibility_id,delete this.visibleElementInfo[d]);if(c.cause==="browser")return}this.sendDataToLog(Object.assign(e,{event:c.name,visibility_id:f}))};c.clearUntrackedVisibleElements=function(){var a=this.getAllTrackedElements();for(var b in this.visibleElementInfo)if(!(b in a)){var c=this.visibleElementInfo[b];c.elem&&this.handleEvent(c.elem,{name:"hidden",cause:"removed"})}};c.clearAllVisibleElements=function(a){a===void 0&&(a="default");var b=this.getAllTrackedElements();for(var c in b)c in this.visibleElementInfo&&this.handleEvent(b[c],{name:"hidden",cause:a});this.clearUntrackedVisibleElements()};c.updateVisibleElements=function(){this.clearAllVisibleElements(),this.fireEvent()};c.refreshAndFireEvent=function(a){this.refreshAllTrackedElements(),this.fireEventCallback(a)};c.onUnload=function(){this.clearAllVisibleElements(),this.listeners&&(this.listeners.release(),this.listeners=null),this.extraCleanup&&b("ErrorUtils").applyWithGuard(this.extraCleanup.bind(this))};a.init=function(b){return new a(b)};return a}();e.exports=a}),null);