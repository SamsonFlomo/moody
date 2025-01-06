(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Hh={exports:{}},wa={},Gh={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function C0(){if(Mm)return Ae;Mm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=C&&O[C]||O["@@iterator"],typeof O=="function"?O:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Q={};function $(O,B,le){this.props=O,this.context=B,this.refs=Q,this.updater=le||j}$.prototype.isReactComponent={},$.prototype.setState=function(O,B){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,B,"setState")},$.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function fe(){}fe.prototype=$.prototype;function pe(O,B,le){this.props=O,this.context=B,this.refs=Q,this.updater=le||j}var ge=pe.prototype=new fe;ge.constructor=pe,G(ge,$.prototype),ge.isPureReactComponent=!0;var we=Array.isArray,Fe=Object.prototype.hasOwnProperty,Te={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(O,B,le){var Ie,Se={},Ne=null,Le=null;if(B!=null)for(Ie in B.ref!==void 0&&(Le=B.ref),B.key!==void 0&&(Ne=""+B.key),B)Fe.call(B,Ie)&&!N.hasOwnProperty(Ie)&&(Se[Ie]=B[Ie]);var Me=arguments.length-2;if(Me===1)Se.children=le;else if(1<Me){for(var Be=Array(Me),gt=0;gt<Me;gt++)Be[gt]=arguments[gt+2];Se.children=Be}if(O&&O.defaultProps)for(Ie in Me=O.defaultProps,Me)Se[Ie]===void 0&&(Se[Ie]=Me[Ie]);return{$$typeof:i,type:O,key:Ne,ref:Le,props:Se,_owner:Te.current}}function A(O,B){return{$$typeof:i,type:O.type,key:B,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function V(O){var B={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(le){return B[le]})}var D=/\/+/g;function S(O,B){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):B.toString(36)}function Ye(O,B,le,Ie,Se){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var Le=!1;if(O===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(O.$$typeof){case i:case e:Le=!0}}if(Le)return Le=O,Se=Se(Le),O=Ie===""?"."+S(Le,0):Ie,we(Se)?(le="",O!=null&&(le=O.replace(D,"$&/")+"/"),Ye(Se,B,le,"",function(gt){return gt})):Se!=null&&(R(Se)&&(Se=A(Se,le+(!Se.key||Le&&Le.key===Se.key?"":(""+Se.key).replace(D,"$&/")+"/")+O)),B.push(Se)),1;if(Le=0,Ie=Ie===""?".":Ie+":",we(O))for(var Me=0;Me<O.length;Me++){Ne=O[Me];var Be=Ie+S(Ne,Me);Le+=Ye(Ne,B,le,Be,Se)}else if(Be=x(O),typeof Be=="function")for(O=Be.call(O),Me=0;!(Ne=O.next()).done;)Ne=Ne.value,Be=Ie+S(Ne,Me++),Le+=Ye(Ne,B,le,Be,Se);else if(Ne==="object")throw B=String(O),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Le}function kt(O,B,le){if(O==null)return O;var Ie=[],Se=0;return Ye(O,Ie,"","",function(Ne){return B.call(le,Ne,Se++)}),Ie}function Nt(O){if(O._status===-1){var B=O._result;B=B(),B.then(function(le){(O._status===0||O._status===-1)&&(O._status=1,O._result=le)},function(le){(O._status===0||O._status===-1)&&(O._status=2,O._result=le)}),O._status===-1&&(O._status=0,O._result=B)}if(O._status===1)return O._result.default;throw O._result}var je={current:null},J={transition:null},ce={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:J,ReactCurrentOwner:Te};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:kt,forEach:function(O,B,le){kt(O,function(){B.apply(this,arguments)},le)},count:function(O){var B=0;return kt(O,function(){B++}),B},toArray:function(O){return kt(O,function(B){return B})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ae.Component=$,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=pe,Ae.StrictMode=s,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Ae.act=ee,Ae.cloneElement=function(O,B,le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ie=G({},O.props),Se=O.key,Ne=O.ref,Le=O._owner;if(B!=null){if(B.ref!==void 0&&(Ne=B.ref,Le=Te.current),B.key!==void 0&&(Se=""+B.key),O.type&&O.type.defaultProps)var Me=O.type.defaultProps;for(Be in B)Fe.call(B,Be)&&!N.hasOwnProperty(Be)&&(Ie[Be]=B[Be]===void 0&&Me!==void 0?Me[Be]:B[Be])}var Be=arguments.length-2;if(Be===1)Ie.children=le;else if(1<Be){Me=Array(Be);for(var gt=0;gt<Be;gt++)Me[gt]=arguments[gt+2];Ie.children=Me}return{$$typeof:i,type:O.type,key:Se,ref:Ne,props:Ie,_owner:Le}},Ae.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Ae.createElement=I,Ae.createFactory=function(O){var B=I.bind(null,O);return B.type=O,B},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(O){return{$$typeof:f,render:O}},Ae.isValidElement=R,Ae.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Nt}},Ae.memo=function(O,B){return{$$typeof:v,type:O,compare:B===void 0?null:B}},Ae.startTransition=function(O){var B=J.transition;J.transition={};try{O()}finally{J.transition=B}},Ae.unstable_act=ee,Ae.useCallback=function(O,B){return je.current.useCallback(O,B)},Ae.useContext=function(O){return je.current.useContext(O)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(O){return je.current.useDeferredValue(O)},Ae.useEffect=function(O,B){return je.current.useEffect(O,B)},Ae.useId=function(){return je.current.useId()},Ae.useImperativeHandle=function(O,B,le){return je.current.useImperativeHandle(O,B,le)},Ae.useInsertionEffect=function(O,B){return je.current.useInsertionEffect(O,B)},Ae.useLayoutEffect=function(O,B){return je.current.useLayoutEffect(O,B)},Ae.useMemo=function(O,B){return je.current.useMemo(O,B)},Ae.useReducer=function(O,B,le){return je.current.useReducer(O,B,le)},Ae.useRef=function(O){return je.current.useRef(O)},Ae.useState=function(O){return je.current.useState(O)},Ae.useSyncExternalStore=function(O,B,le){return je.current.useSyncExternalStore(O,B,le)},Ae.useTransition=function(){return je.current.useTransition()},Ae.version="18.3.1",Ae}var bm;function Od(){return bm||(bm=1,Gh.exports=C0()),Gh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function P0(){if(Um)return wa;Um=1;var i=Od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,v){var w,C={},x=null,j=null;v!==void 0&&(x=""+v),g.key!==void 0&&(x=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(C[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)C[w]===void 0&&(C[w]=g[w]);return{$$typeof:e,type:f,key:x,ref:j,props:C,_owner:o.current}}return wa.Fragment=t,wa.jsx=h,wa.jsxs=h,wa}var Fm;function k0(){return Fm||(Fm=1,Hh.exports=P0()),Hh.exports}var re=k0(),ln=Od(),mu={},Kh={exports:{}},Yt={},Qh={exports:{}},Yh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function N0(){return jm||(jm=1,function(i){function e(J,ce){var ee=J.length;J.push(ce);e:for(;0<ee;){var O=ee-1>>>1,B=J[O];if(0<o(B,ce))J[O]=ce,J[ee]=B,ee=O;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var ce=J[0],ee=J.pop();if(ee!==ce){J[0]=ee;e:for(var O=0,B=J.length,le=B>>>1;O<le;){var Ie=2*(O+1)-1,Se=J[Ie],Ne=Ie+1,Le=J[Ne];if(0>o(Se,ee))Ne<B&&0>o(Le,Se)?(J[O]=Le,J[Ne]=ee,O=Ne):(J[O]=Se,J[Ie]=ee,O=Ie);else if(Ne<B&&0>o(Le,ee))J[O]=Le,J[Ne]=ee,O=Ne;else break e}}return ce}function o(J,ce){var ee=J.sortIndex-ce.sortIndex;return ee!==0?ee:J.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,f=h.now();i.unstable_now=function(){return h.now()-f}}var g=[],v=[],w=1,C=null,x=3,j=!1,G=!1,Q=!1,$=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(J){for(var ce=t(v);ce!==null;){if(ce.callback===null)s(v);else if(ce.startTime<=J)s(v),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(v)}}function we(J){if(Q=!1,ge(J),!G)if(t(g)!==null)G=!0,Nt(Fe);else{var ce=t(v);ce!==null&&je(we,ce.startTime-J)}}function Fe(J,ce){G=!1,Q&&(Q=!1,fe(I),I=-1),j=!0;var ee=x;try{for(ge(ce),C=t(g);C!==null&&(!(C.expirationTime>ce)||J&&!V());){var O=C.callback;if(typeof O=="function"){C.callback=null,x=C.priorityLevel;var B=O(C.expirationTime<=ce);ce=i.unstable_now(),typeof B=="function"?C.callback=B:C===t(g)&&s(g),ge(ce)}else s(g);C=t(g)}if(C!==null)var le=!0;else{var Ie=t(v);Ie!==null&&je(we,Ie.startTime-ce),le=!1}return le}finally{C=null,x=ee,j=!1}}var Te=!1,N=null,I=-1,A=5,R=-1;function V(){return!(i.unstable_now()-R<A)}function D(){if(N!==null){var J=i.unstable_now();R=J;var ce=!0;try{ce=N(!0,J)}finally{ce?S():(Te=!1,N=null)}}else Te=!1}var S;if(typeof pe=="function")S=function(){pe(D)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,kt=Ye.port2;Ye.port1.onmessage=D,S=function(){kt.postMessage(null)}}else S=function(){$(D,0)};function Nt(J){N=J,Te||(Te=!0,S())}function je(J,ce){I=$(function(){J(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){G||j||(G=!0,Nt(Fe))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(J){switch(x){case 1:case 2:case 3:var ce=3;break;default:ce=x}var ee=x;x=ce;try{return J()}finally{x=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,ce){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=x;x=J;try{return ce()}finally{x=ee}},i.unstable_scheduleCallback=function(J,ce,ee){var O=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?O+ee:O):ee=O,J){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ee+B,J={id:w++,callback:ce,priorityLevel:J,startTime:ee,expirationTime:B,sortIndex:-1},ee>O?(J.sortIndex=ee,e(v,J),t(g)===null&&J===t(v)&&(Q?(fe(I),I=-1):Q=!0,je(we,ee-O))):(J.sortIndex=B,e(g,J),G||j||(G=!0,Nt(Fe))),J},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(J){var ce=x;return function(){var ee=x;x=ce;try{return J.apply(this,arguments)}finally{x=ee}}}}(Yh)),Yh}var zm;function D0(){return zm||(zm=1,Qh.exports=N0()),Qh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function V0(){if(Bm)return Yt;Bm=1;var i=Od(),e=D0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},C={};function x(n){return g.call(C,n)?!0:g.call(w,n)?!1:v.test(n)?C[n]=!0:(w[n]=!0,!1)}function j(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function G(n,r,a,c){if(r===null||typeof r>"u"||j(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Q(n,r,a,c,d,m,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=m,this.removeEmptyString=_}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new Q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];$[r]=new Q(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new Q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new Q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new Q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new Q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new Q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new Q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new Q(n,5,!1,n.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function pe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(fe,pe);$[r]=new Q(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(fe,pe);$[r]=new Q(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(fe,pe);$[r]=new Q(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new Q(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new Q(n,1,!1,n.toLowerCase(),null,!0,!0)});function ge(n,r,a,c){var d=$.hasOwnProperty(r)?$[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(G(r,a,d,c)&&(a=null),c||d===null?x(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var we=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fe=Symbol.for("react.element"),Te=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),V=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),J=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,O;function B(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var le=!1;function Ie(n,r){if(!n||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),m=c.stack.split(`
`),_=d.length-1,T=m.length-1;1<=_&&0<=T&&d[_]!==m[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==m[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==m[T]){var P=`
`+d[_].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=_&&0<=T);break}}}finally{le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function Se(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Te:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case Ye:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case D:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function gt(n){var r=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,m.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function nr(n){n._valueTracker||(n._valueTracker=gt(n))}function us(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Dr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ti(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function cs(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Co(n,r){r=r.checked,r!=null&&ge(n,"checked",r,!1)}function Po(n,r){Co(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?hs(n,r.type,a):r.hasOwnProperty("defaultValue")&&hs(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function el(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function hs(n,r,a){(r!=="number"||Dr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var rr=Array.isArray;function ir(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function ko(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ds(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(rr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function fs(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function No(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ut(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ut(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var sr,Do=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=sr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Vr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Si=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(n){Si.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ii[r]=Ii[n]})});function Vo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ii.hasOwnProperty(n)&&Ii[n]?(""+r).trim():r+"px"}function Oo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Vo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var xo=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lo(n,r){if(r){if(xo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Mo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ai=null;function ps(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ms=null,cn=null,jn=null;function gs(n){if(n=oa(n)){if(typeof ms!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Nl(r),ms(n.stateNode,n.type,r))}}function zn(n){cn?jn?jn.push(n):jn=[n]:cn=n}function bo(){if(cn){var n=cn,r=jn;if(jn=cn=null,gs(n),r)for(n=0;n<r.length;n++)gs(r[n])}}function Ri(n,r){return n(r)}function Uo(){}var or=!1;function Fo(n,r,a){if(or)return n(r,a);or=!0;try{return Ri(n,r,a)}finally{or=!1,(cn!==null||jn!==null)&&(Uo(),bo())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=Nl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ys=!1;if(f)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){ys=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{ys=!1}function Ci(n,r,a,c,d,m,_,T,P){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(H){this.onError(H)}}var Pi=!1,_s=null,Tn=!1,jo=null,Ec={onError:function(n){Pi=!0,_s=n}};function vs(n,r,a,c,d,m,_,T,P){Pi=!1,_s=null,Ci.apply(Ec,arguments)}function tl(n,r,a,c,d,m,_,T,P){if(vs.apply(this,arguments),Pi){if(Pi){var U=_s;Pi=!1,_s=null}else throw Error(t(198));Tn||(Tn=!0,jo=U)}}function In(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function ki(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Sn(n){if(In(n)!==n)throw Error(t(188))}function nl(n){var r=n.alternate;if(!r){if(r=In(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Sn(d),n;if(m===c)return Sn(d),r;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=m;break}if(T===c){_=!0,c=d,a=m;break}T=T.sibling}if(!_){for(T=m.child;T;){if(T===a){_=!0,a=m,c=d;break}if(T===c){_=!0,c=m,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function zo(n){return n=nl(n),n!==null?Es(n):null}function Es(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Es(n);if(r!==null)return r;n=n.sibling}return null}var ws=e.unstable_scheduleCallback,Bo=e.unstable_cancelCallback,rl=e.unstable_shouldYield,wc=e.unstable_requestPaint,$e=e.unstable_now,il=e.unstable_getCurrentPriorityLevel,Ni=e.unstable_ImmediatePriority,Or=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,$o=e.unstable_LowPriority,sl=e.unstable_IdlePriority,Di=null,en=null;function ol(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Di,n,void 0,(n.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:ll,qo=Math.log,al=Math.LN2;function ll(n){return n>>>=0,n===0?32:31-(qo(n)/al|0)|0}var Ts=64,Is=4194304;function xr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Vi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=xr(T):(m&=_,m!==0&&(c=xr(m)))}else _=a&~d,_!==0?c=xr(_):m!==0&&(c=xr(m));if(c===0)return 0;if(r!==0&&r!==c&&!(r&d)&&(d=c&-c,m=r&-r,d>=m||d===16&&(m&4194240)!==0))return r;if(c&4&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ft(r),d=1<<a,c|=n[a],r&=~d;return c}function Tc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ar(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var _=31-Ft(m),T=1<<_,P=d[_];P===-1?(!(T&a)||T&c)&&(d[_]=Tc(T,r)):P<=r&&(n.expiredLanes|=T),m&=~T}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Oi(){var n=Ts;return Ts<<=1,!(Ts&4194240)&&(Ts=64),n}function Lr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Mr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ft(r),n[r]=a}function ze(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ft(a),m=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function br(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ft(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Pe=0;function Ur(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var ul,Ss,cl,hl,dl,Wo=!1,Bn=[],Tt=null,An=null,Rn=null,Fr=new Map,dn=new Map,$n=[],Ic="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fl(n,r){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Fr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(r.pointerId)}}function $t(n,r,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},r!==null&&(r=oa(r),r!==null&&Ss(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Sc(n,r,a,c,d){switch(r){case"focusin":return Tt=$t(Tt,n,r,a,c,d),!0;case"dragenter":return An=$t(An,n,r,a,c,d),!0;case"mouseover":return Rn=$t(Rn,n,r,a,c,d),!0;case"pointerover":var m=d.pointerId;return Fr.set(m,$t(Fr.get(m)||null,n,r,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,dn.set(m,$t(dn.get(m)||null,n,r,a,c,d)),!0}return!1}function pl(n){var r=Ui(n.target);if(r!==null){var a=In(r);if(a!==null){if(r=a.tag,r===13){if(r=ki(a),r!==null){n.blockedOn=r,dl(n.priority,function(){cl(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function lr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=As(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ai=c,a.target.dispatchEvent(c),Ai=null}else return r=oa(a),r!==null&&Ss(r),n.blockedOn=a,!1;r.shift()}return!0}function xi(n,r,a){lr(n)&&a.delete(r)}function ml(){Wo=!1,Tt!==null&&lr(Tt)&&(Tt=null),An!==null&&lr(An)&&(An=null),Rn!==null&&lr(Rn)&&(Rn=null),Fr.forEach(xi),dn.forEach(xi)}function Cn(n,r){n.blockedOn===r&&(n.blockedOn=null,Wo||(Wo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ml)))}function Pn(n){function r(d){return Cn(d,n)}if(0<Bn.length){Cn(Bn[0],n);for(var a=1;a<Bn.length;a++){var c=Bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&Cn(Tt,n),An!==null&&Cn(An,n),Rn!==null&&Cn(Rn,n),Fr.forEach(r),dn.forEach(r),a=0;a<$n.length;a++)c=$n[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<$n.length&&(a=$n[0],a.blockedOn===null);)pl(a),a.blockedOn===null&&$n.shift()}var ur=we.ReactCurrentBatchConfig,jr=!0;function Ke(n,r,a,c){var d=Pe,m=ur.transition;ur.transition=null;try{Pe=1,Ho(n,r,a,c)}finally{Pe=d,ur.transition=m}}function Ac(n,r,a,c){var d=Pe,m=ur.transition;ur.transition=null;try{Pe=4,Ho(n,r,a,c)}finally{Pe=d,ur.transition=m}}function Ho(n,r,a,c){if(jr){var d=As(n,r,a,c);if(d===null)Mc(n,r,c,Li,a),fl(n,c);else if(Sc(d,n,r,a,c))c.stopPropagation();else if(fl(n,c),r&4&&-1<Ic.indexOf(n)){for(;d!==null;){var m=oa(d);if(m!==null&&ul(m),m=As(n,r,a,c),m===null&&Mc(n,r,c,Li,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Mc(n,r,c,null,a)}}var Li=null;function As(n,r,a,c){if(Li=null,n=ps(c),n=Ui(n),n!==null)if(r=In(n),r===null)n=null;else if(a=r.tag,a===13){if(n=ki(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Li=n,null}function Go(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(il()){case Ni:return 1;case Or:return 4;case hn:case $o:return 16;case sl:return 536870912;default:return 16}default:return 16}}var nn=null,Rs=null,qt=null;function Ko(){if(qt)return qt;var n,r=Rs,a=r.length,c,d="value"in nn?nn.value:nn.textContent,m=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[m-c];c++);return qt=d.slice(n,1<c?1-c:void 0)}function Cs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function qn(){return!0}function Qo(){return!1}function It(n){function r(a,c,d,m,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?qn:Qo,this.isPropagationStopped=Qo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),r}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ps=It(kn),Wn=ee({},kn,{view:0,detail:0}),Rc=It(Wn),ks,cr,zr,Mi=ee({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==zr&&(zr&&n.type==="mousemove"?(ks=n.screenX-zr.screenX,cr=n.screenY-zr.screenY):cr=ks=0,zr=n),ks)},movementY:function(n){return"movementY"in n?n.movementY:cr}}),Ns=It(Mi),Yo=ee({},Mi,{dataTransfer:0}),gl=It(Yo),Ds=ee({},Wn,{relatedTarget:0}),Vs=It(Ds),yl=ee({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),hr=It(yl),_l=ee({},kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vl=It(_l),El=ee({},kn,{data:0}),Xo=It(El),Os={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=wl[n])?!!r[n]:!1}function Hn(){return Tl}var l=ee({},Wn,{key:function(n){if(n.key){var r=Os[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Cs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(n){return n.type==="keypress"?Cs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Cs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=It(l),y=ee({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=It(y),L=ee({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn}),F=It(L),X=ee({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=It(X),ht=ee({},Mi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=It(ht),yt=[9,13,27,32],it=f&&"CompositionEvent"in window,fn=null;f&&"documentMode"in document&&(fn=document.documentMode);var rn=f&&"TextEvent"in window&&!fn,bi=f&&(!it||fn&&8<fn&&11>=fn),xs=" ",Nf=!1;function Df(n,r){switch(n){case"keyup":return yt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function Sv(n,r){switch(n){case"compositionend":return Vf(r);case"keypress":return r.which!==32?null:(Nf=!0,xs);case"textInput":return n=r.data,n===xs&&Nf?null:n;default:return null}}function Av(n,r){if(Ls)return n==="compositionend"||!it&&Df(n,r)?(n=Ko(),qt=Rs=nn=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return bi&&r.locale!=="ko"?null:r.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Rv[n.type]:r==="textarea"}function xf(n,r,a,c){zn(c),r=Cl(r,"onChange"),0<r.length&&(a=new Ps("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Jo=null,Zo=null;function Cv(n){Jf(n,0)}function Il(n){var r=js(n);if(us(r))return n}function Pv(n,r){if(n==="change")return r}var Lf=!1;if(f){var Cc;if(f){var Pc="oninput"in document;if(!Pc){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),Pc=typeof Mf.oninput=="function"}Cc=Pc}else Cc=!1;Lf=Cc&&(!document.documentMode||9<document.documentMode)}function bf(){Jo&&(Jo.detachEvent("onpropertychange",Uf),Zo=Jo=null)}function Uf(n){if(n.propertyName==="value"&&Il(Zo)){var r=[];xf(r,Zo,n,ps(n)),Fo(Cv,r)}}function kv(n,r,a){n==="focusin"?(bf(),Jo=r,Zo=a,Jo.attachEvent("onpropertychange",Uf)):n==="focusout"&&bf()}function Nv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Il(Zo)}function Dv(n,r){if(n==="click")return Il(r)}function Vv(n,r){if(n==="input"||n==="change")return Il(r)}function Ov(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Nn=typeof Object.is=="function"?Object.is:Ov;function ea(n,r){if(Nn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Nn(n[d],r[d]))return!1}return!0}function Ff(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function jf(n,r){var a=Ff(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ff(a)}}function zf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?zf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Bf(){for(var n=window,r=Dr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Dr(n.document)}return r}function kc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function xv(n){var r=Bf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&zf(a.ownerDocument.documentElement,a)){if(c!==null&&kc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=jf(a,m);var _=jf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Lv=f&&"documentMode"in document&&11>=document.documentMode,Ms=null,Nc=null,ta=null,Dc=!1;function $f(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dc||Ms==null||Ms!==Dr(c)||(c=Ms,"selectionStart"in c&&kc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ta&&ea(ta,c)||(ta=c,c=Cl(Nc,"onSelect"),0<c.length&&(r=new Ps("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ms)))}function Sl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var bs={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Vc={},qf={};f&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Al(n){if(Vc[n])return Vc[n];if(!bs[n])return n;var r=bs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in qf)return Vc[n]=r[a];return n}var Wf=Al("animationend"),Hf=Al("animationiteration"),Gf=Al("animationstart"),Kf=Al("transitionend"),Qf=new Map,Yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(n,r){Qf.set(n,r),u(r,[n])}for(var Oc=0;Oc<Yf.length;Oc++){var xc=Yf[Oc],Mv=xc.toLowerCase(),bv=xc[0].toUpperCase()+xc.slice(1);Br(Mv,"on"+bv)}Br(Wf,"onAnimationEnd"),Br(Hf,"onAnimationIteration"),Br(Gf,"onAnimationStart"),Br("dblclick","onDoubleClick"),Br("focusin","onFocus"),Br("focusout","onBlur"),Br(Kf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uv=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Xf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,tl(c,r,void 0,n),n.currentTarget=null}function Jf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],P=T.instance,U=T.currentTarget;if(T=T.listener,P!==m&&d.isPropagationStopped())break e;Xf(d,T,U),m=P}else for(_=0;_<c.length;_++){if(T=c[_],P=T.instance,U=T.currentTarget,T=T.listener,P!==m&&d.isPropagationStopped())break e;Xf(d,T,U),m=P}}}if(Tn)throw n=jo,Tn=!1,jo=null,n}function We(n,r){var a=r[Bc];a===void 0&&(a=r[Bc]=new Set);var c=n+"__bubble";a.has(c)||(Zf(r,n,2,!1),a.add(c))}function Lc(n,r,a){var c=0;r&&(c|=4),Zf(a,n,c,r)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function ra(n){if(!n[Rl]){n[Rl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Uv.has(a)||Lc(a,!1,n),Lc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Rl]||(r[Rl]=!0,Lc("selectionchange",!1,r))}}function Zf(n,r,a,c){switch(Go(r)){case 1:var d=Ke;break;case 4:d=Ac;break;default:d=Ho}a=d.bind(null,r,a,n),d=void 0,!ys||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Mc(n,r,a,c,d){var m=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var P=_.tag;if((P===3||P===4)&&(P=_.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Ui(T),_===null)return;if(P=_.tag,P===5||P===6){c=m=_;continue e}T=T.parentNode}}c=c.return}Fo(function(){var U=m,H=ps(a),K=[];e:{var W=Qf.get(n);if(W!==void 0){var Z=Ps,se=n;switch(n){case"keypress":if(Cs(a)===0)break e;case"keydown":case"keyup":Z=p;break;case"focusin":se="focus",Z=Vs;break;case"focusout":se="blur",Z=Vs;break;case"beforeblur":case"afterblur":Z=Vs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=gl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=F;break;case Wf:case Hf:case Gf:Z=hr;break;case Kf:Z=Ue;break;case"scroll":Z=Rc;break;case"wheel":Z=De;break;case"copy":case"cut":case"paste":Z=vl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var oe=(r&4)!==0,nt=!oe&&n==="scroll",M=oe?W!==null?W+"Capture":null:W;oe=[];for(var k=U,b;k!==null;){b=k;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,M!==null&&(Y=tt(k,M),Y!=null&&oe.push(ia(k,Y,b)))),nt)break;k=k.return}0<oe.length&&(W=new Z(W,se,null,a,H),K.push({event:W,listeners:oe}))}}if(!(r&7)){e:{if(W=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",W&&a!==Ai&&(se=a.relatedTarget||a.fromElement)&&(Ui(se)||se[dr]))break e;if((Z||W)&&(W=H.window===H?H:(W=H.ownerDocument)?W.defaultView||W.parentWindow:window,Z?(se=a.relatedTarget||a.toElement,Z=U,se=se?Ui(se):null,se!==null&&(nt=In(se),se!==nt||se.tag!==5&&se.tag!==6)&&(se=null)):(Z=null,se=U),Z!==se)){if(oe=Ns,Y="onMouseLeave",M="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(oe=E,Y="onPointerLeave",M="onPointerEnter",k="pointer"),nt=Z==null?W:js(Z),b=se==null?W:js(se),W=new oe(Y,k+"leave",Z,a,H),W.target=nt,W.relatedTarget=b,Y=null,Ui(H)===U&&(oe=new oe(M,k+"enter",se,a,H),oe.target=b,oe.relatedTarget=nt,Y=oe),nt=Y,Z&&se)t:{for(oe=Z,M=se,k=0,b=oe;b;b=Us(b))k++;for(b=0,Y=M;Y;Y=Us(Y))b++;for(;0<k-b;)oe=Us(oe),k--;for(;0<b-k;)M=Us(M),b--;for(;k--;){if(oe===M||M!==null&&oe===M.alternate)break t;oe=Us(oe),M=Us(M)}oe=null}else oe=null;Z!==null&&ep(K,W,Z,oe,!1),se!==null&&nt!==null&&ep(K,nt,se,oe,!0)}}e:{if(W=U?js(U):window,Z=W.nodeName&&W.nodeName.toLowerCase(),Z==="select"||Z==="input"&&W.type==="file")var ae=Pv;else if(Of(W))if(Lf)ae=Vv;else{ae=Nv;var he=kv}else(Z=W.nodeName)&&Z.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(ae=Dv);if(ae&&(ae=ae(n,U))){xf(K,ae,a,H);break e}he&&he(n,W,U),n==="focusout"&&(he=W._wrapperState)&&he.controlled&&W.type==="number"&&hs(W,"number",W.value)}switch(he=U?js(U):window,n){case"focusin":(Of(he)||he.contentEditable==="true")&&(Ms=he,Nc=U,ta=null);break;case"focusout":ta=Nc=Ms=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,$f(K,a,H);break;case"selectionchange":if(Lv)break;case"keydown":case"keyup":$f(K,a,H)}var de;if(it)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Ls?Df(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(bi&&a.locale!=="ko"&&(Ls||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ls&&(de=Ko()):(nn=H,Rs="value"in nn?nn.value:nn.textContent,Ls=!0)),he=Cl(U,ye),0<he.length&&(ye=new Xo(ye,n,null,a,H),K.push({event:ye,listeners:he}),de?ye.data=de:(de=Vf(a),de!==null&&(ye.data=de)))),(de=rn?Sv(n,a):Av(n,a))&&(U=Cl(U,"onBeforeInput"),0<U.length&&(H=new Xo("onBeforeInput","beforeinput",null,a,H),K.push({event:H,listeners:U}),H.data=de))}Jf(K,r)})}function ia(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Cl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=tt(n,a),m!=null&&c.unshift(ia(n,m,d)),m=tt(n,r),m!=null&&c.push(ia(n,m,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ep(n,r,a,c,d){for(var m=r._reactName,_=[];a!==null&&a!==c;){var T=a,P=T.alternate,U=T.stateNode;if(P!==null&&P===c)break;T.tag===5&&U!==null&&(T=U,d?(P=tt(a,m),P!=null&&_.unshift(ia(a,P,T))):d||(P=tt(a,m),P!=null&&_.push(ia(a,P,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var Fv=/\r\n?/g,jv=/\u0000|\uFFFD/g;function tp(n){return(typeof n=="string"?n:""+n).replace(Fv,`
`).replace(jv,"")}function Pl(n,r,a){if(r=tp(r),tp(n)!==r&&a)throw Error(t(425))}function kl(){}var bc=null,Uc=null;function Fc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,zv=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,Bv=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(n){return np.resolve(null).then(n).catch($v)}:jc;function $v(n){setTimeout(function(){throw n})}function zc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Pn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Pn(r)}function $r(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function rp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Fs,sa="__reactProps$"+Fs,dr="__reactContainer$"+Fs,Bc="__reactEvents$"+Fs,qv="__reactListeners$"+Fs,Wv="__reactHandles$"+Fs;function Ui(n){var r=n[Gn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[dr]||a[Gn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=rp(n);n!==null;){if(a=n[Gn])return a;n=rp(n)}return r}n=a,a=n.parentNode}return null}function oa(n){return n=n[Gn]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function js(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Nl(n){return n[sa]||null}var $c=[],zs=-1;function qr(n){return{current:n}}function He(n){0>zs||(n.current=$c[zs],$c[zs]=null,zs--)}function qe(n,r){zs++,$c[zs]=n.current,n.current=r}var Wr={},Dt=qr(Wr),Wt=qr(!1),Fi=Wr;function Bs(n,r){var a=n.type.contextTypes;if(!a)return Wr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=r[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function Dl(){He(Wt),He(Dt)}function ip(n,r,a){if(Dt.current!==Wr)throw Error(t(168));qe(Dt,r),qe(Wt,a)}function sp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return ee({},a,c)}function Vl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Wr,Fi=Dt.current,qe(Dt,n),qe(Wt,Wt.current),!0}function op(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=sp(n,r,Fi),c.__reactInternalMemoizedMergedChildContext=n,He(Wt),He(Dt),qe(Dt,n)):He(Wt),qe(Wt,a)}var fr=null,Ol=!1,qc=!1;function ap(n){fr===null?fr=[n]:fr.push(n)}function Hv(n){Ol=!0,ap(n)}function Hr(){if(!qc&&fr!==null){qc=!0;var n=0,r=Pe;try{var a=fr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}fr=null,Ol=!1}catch(d){throw fr!==null&&(fr=fr.slice(n+1)),ws(Ni,Hr),d}finally{Pe=r,qc=!1}}return null}var $s=[],qs=0,xl=null,Ll=0,pn=[],mn=0,ji=null,pr=1,mr="";function zi(n,r){$s[qs++]=Ll,$s[qs++]=xl,xl=n,Ll=r}function lp(n,r,a){pn[mn++]=pr,pn[mn++]=mr,pn[mn++]=ji,ji=n;var c=pr;n=mr;var d=32-Ft(c)-1;c&=~(1<<d),a+=1;var m=32-Ft(r)+d;if(30<m){var _=d-d%5;m=(c&(1<<_)-1).toString(32),c>>=_,d-=_,pr=1<<32-Ft(r)+d|a<<d|c,mr=m+n}else pr=1<<m|a<<d|c,mr=n}function Wc(n){n.return!==null&&(zi(n,1),lp(n,1,0))}function Hc(n){for(;n===xl;)xl=$s[--qs],$s[qs]=null,Ll=$s[--qs],$s[qs]=null;for(;n===ji;)ji=pn[--mn],pn[mn]=null,mr=pn[--mn],pn[mn]=null,pr=pn[--mn],pn[mn]=null}var sn=null,on=null,Qe=!1,Dn=null;function up(n,r){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function cp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,sn=n,on=$r(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,sn=n,on=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ji!==null?{id:pr,overflow:mr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function Gc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Kc(n){if(Qe){var r=on;if(r){var a=r;if(!cp(n,r)){if(Gc(n))throw Error(t(418));r=$r(a.nextSibling);var c=sn;r&&cp(n,r)?up(c,a):(n.flags=n.flags&-4097|2,Qe=!1,sn=n)}}else{if(Gc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,sn=n}}}function hp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Ml(n){if(n!==sn)return!1;if(!Qe)return hp(n),Qe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Fc(n.type,n.memoizedProps)),r&&(r=on)){if(Gc(n))throw dp(),Error(t(418));for(;r;)up(n,r),r=$r(r.nextSibling)}if(hp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){on=$r(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}on=null}}else on=sn?$r(n.stateNode.nextSibling):null;return!0}function dp(){for(var n=on;n;)n=$r(n.nextSibling)}function Ws(){on=sn=null,Qe=!1}function Qc(n){Dn===null?Dn=[n]:Dn.push(n)}var Gv=we.ReactCurrentBatchConfig;function aa(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===m?r.ref:(r=function(_){var T=d.refs;_===null?delete T[m]:T[m]=_},r._stringRef=m,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function bl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function fp(n){var r=n._init;return r(n._payload)}function pp(n){function r(M,k){if(n){var b=M.deletions;b===null?(M.deletions=[k],M.flags|=16):b.push(k)}}function a(M,k){if(!n)return null;for(;k!==null;)r(M,k),k=k.sibling;return null}function c(M,k){for(M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function d(M,k){return M=ei(M,k),M.index=0,M.sibling=null,M}function m(M,k,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<k?(M.flags|=2,k):b):(M.flags|=2,k)):(M.flags|=1048576,k)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,k,b,Y){return k===null||k.tag!==6?(k=jh(b,M.mode,Y),k.return=M,k):(k=d(k,b),k.return=M,k)}function P(M,k,b,Y){var ae=b.type;return ae===N?H(M,k,b.props.children,Y,b.key):k!==null&&(k.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Nt&&fp(ae)===k.type)?(Y=d(k,b.props),Y.ref=aa(M,k,b),Y.return=M,Y):(Y=au(b.type,b.key,b.props,null,M.mode,Y),Y.ref=aa(M,k,b),Y.return=M,Y)}function U(M,k,b,Y){return k===null||k.tag!==4||k.stateNode.containerInfo!==b.containerInfo||k.stateNode.implementation!==b.implementation?(k=zh(b,M.mode,Y),k.return=M,k):(k=d(k,b.children||[]),k.return=M,k)}function H(M,k,b,Y,ae){return k===null||k.tag!==7?(k=Qi(b,M.mode,Y,ae),k.return=M,k):(k=d(k,b),k.return=M,k)}function K(M,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return k=jh(""+k,M.mode,b),k.return=M,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Fe:return b=au(k.type,k.key,k.props,null,M.mode,b),b.ref=aa(M,null,k),b.return=M,b;case Te:return k=zh(k,M.mode,b),k.return=M,k;case Nt:var Y=k._init;return K(M,Y(k._payload),b)}if(rr(k)||ce(k))return k=Qi(k,M.mode,b,null),k.return=M,k;bl(M,k)}return null}function W(M,k,b,Y){var ae=k!==null?k.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ae!==null?null:T(M,k,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Fe:return b.key===ae?P(M,k,b,Y):null;case Te:return b.key===ae?U(M,k,b,Y):null;case Nt:return ae=b._init,W(M,k,ae(b._payload),Y)}if(rr(b)||ce(b))return ae!==null?null:H(M,k,b,Y,null);bl(M,b)}return null}function Z(M,k,b,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(b)||null,T(k,M,""+Y,ae);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Fe:return M=M.get(Y.key===null?b:Y.key)||null,P(k,M,Y,ae);case Te:return M=M.get(Y.key===null?b:Y.key)||null,U(k,M,Y,ae);case Nt:var he=Y._init;return Z(M,k,b,he(Y._payload),ae)}if(rr(Y)||ce(Y))return M=M.get(b)||null,H(k,M,Y,ae,null);bl(k,Y)}return null}function se(M,k,b,Y){for(var ae=null,he=null,de=k,ye=k=0,Et=null;de!==null&&ye<b.length;ye++){de.index>ye?(Et=de,de=null):Et=de.sibling;var xe=W(M,de,b[ye],Y);if(xe===null){de===null&&(de=Et);break}n&&de&&xe.alternate===null&&r(M,de),k=m(xe,k,ye),he===null?ae=xe:he.sibling=xe,he=xe,de=Et}if(ye===b.length)return a(M,de),Qe&&zi(M,ye),ae;if(de===null){for(;ye<b.length;ye++)de=K(M,b[ye],Y),de!==null&&(k=m(de,k,ye),he===null?ae=de:he.sibling=de,he=de);return Qe&&zi(M,ye),ae}for(de=c(M,de);ye<b.length;ye++)Et=Z(de,M,ye,b[ye],Y),Et!==null&&(n&&Et.alternate!==null&&de.delete(Et.key===null?ye:Et.key),k=m(Et,k,ye),he===null?ae=Et:he.sibling=Et,he=Et);return n&&de.forEach(function(ti){return r(M,ti)}),Qe&&zi(M,ye),ae}function oe(M,k,b,Y){var ae=ce(b);if(typeof ae!="function")throw Error(t(150));if(b=ae.call(b),b==null)throw Error(t(151));for(var he=ae=null,de=k,ye=k=0,Et=null,xe=b.next();de!==null&&!xe.done;ye++,xe=b.next()){de.index>ye?(Et=de,de=null):Et=de.sibling;var ti=W(M,de,xe.value,Y);if(ti===null){de===null&&(de=Et);break}n&&de&&ti.alternate===null&&r(M,de),k=m(ti,k,ye),he===null?ae=ti:he.sibling=ti,he=ti,de=Et}if(xe.done)return a(M,de),Qe&&zi(M,ye),ae;if(de===null){for(;!xe.done;ye++,xe=b.next())xe=K(M,xe.value,Y),xe!==null&&(k=m(xe,k,ye),he===null?ae=xe:he.sibling=xe,he=xe);return Qe&&zi(M,ye),ae}for(de=c(M,de);!xe.done;ye++,xe=b.next())xe=Z(de,M,ye,xe.value,Y),xe!==null&&(n&&xe.alternate!==null&&de.delete(xe.key===null?ye:xe.key),k=m(xe,k,ye),he===null?ae=xe:he.sibling=xe,he=xe);return n&&de.forEach(function(R0){return r(M,R0)}),Qe&&zi(M,ye),ae}function nt(M,k,b,Y){if(typeof b=="object"&&b!==null&&b.type===N&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Fe:e:{for(var ae=b.key,he=k;he!==null;){if(he.key===ae){if(ae=b.type,ae===N){if(he.tag===7){a(M,he.sibling),k=d(he,b.props.children),k.return=M,M=k;break e}}else if(he.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Nt&&fp(ae)===he.type){a(M,he.sibling),k=d(he,b.props),k.ref=aa(M,he,b),k.return=M,M=k;break e}a(M,he);break}else r(M,he);he=he.sibling}b.type===N?(k=Qi(b.props.children,M.mode,Y,b.key),k.return=M,M=k):(Y=au(b.type,b.key,b.props,null,M.mode,Y),Y.ref=aa(M,k,b),Y.return=M,M=Y)}return _(M);case Te:e:{for(he=b.key;k!==null;){if(k.key===he)if(k.tag===4&&k.stateNode.containerInfo===b.containerInfo&&k.stateNode.implementation===b.implementation){a(M,k.sibling),k=d(k,b.children||[]),k.return=M,M=k;break e}else{a(M,k);break}else r(M,k);k=k.sibling}k=zh(b,M.mode,Y),k.return=M,M=k}return _(M);case Nt:return he=b._init,nt(M,k,he(b._payload),Y)}if(rr(b))return se(M,k,b,Y);if(ce(b))return oe(M,k,b,Y);bl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,k!==null&&k.tag===6?(a(M,k.sibling),k=d(k,b),k.return=M,M=k):(a(M,k),k=jh(b,M.mode,Y),k.return=M,M=k),_(M)):a(M,k)}return nt}var Hs=pp(!0),mp=pp(!1),Ul=qr(null),Fl=null,Gs=null,Yc=null;function Xc(){Yc=Gs=Fl=null}function Jc(n){var r=Ul.current;He(Ul),n._currentValue=r}function Zc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Ks(n,r){Fl=n,Yc=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Gt=!0),n.firstContext=null)}function gn(n){var r=n._currentValue;if(Yc!==n)if(n={context:n,memoizedValue:r,next:null},Gs===null){if(Fl===null)throw Error(t(308));Gs=n,Fl.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return r}var Bi=null;function eh(n){Bi===null?Bi=[n]:Bi.push(n)}function gp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,eh(r)):(a.next=d.next,d.next=a),r.interleaved=a,gr(n,c)}function gr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Gr=!1;function th(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Kr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Oe&2){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,gr(n,a)}return d=c.interleaved,d===null?(r.next=r,eh(c)):(r.next=d.next,d.next=r),c.interleaved=r,gr(n,a)}function jl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,br(n,a)}}function _p(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=_:m=m.next=_,a=a.next}while(a!==null);m===null?d=m=r:m=m.next=r}else d=m=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function zl(n,r,a,c){var d=n.updateQueue;Gr=!1;var m=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var P=T,U=P.next;P.next=null,_===null?m=U:_.next=U,_=P;var H=n.alternate;H!==null&&(H=H.updateQueue,T=H.lastBaseUpdate,T!==_&&(T===null?H.firstBaseUpdate=U:T.next=U,H.lastBaseUpdate=P))}if(m!==null){var K=d.baseState;_=0,H=U=P=null,T=m;do{var W=T.lane,Z=T.eventTime;if((c&W)===W){H!==null&&(H=H.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var se=n,oe=T;switch(W=r,Z=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){K=se.call(Z,K,W);break e}K=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,W=typeof se=="function"?se.call(Z,K,W):se,W==null)break e;K=ee({},K,W);break e;case 2:Gr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[T]:W.push(T))}else Z={eventTime:Z,lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},H===null?(U=H=Z,P=K):H=H.next=Z,_|=W;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;W=T,T=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(H===null&&(P=K),d.baseState=P,d.firstBaseUpdate=U,d.lastBaseUpdate=H,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else m===null&&(d.shared.lanes=0);Wi|=_,n.lanes=_,n.memoizedState=K}}function vp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var la={},Kn=qr(la),ua=qr(la),ca=qr(la);function $i(n){if(n===la)throw Error(t(174));return n}function nh(n,r){switch(qe(ca,r),qe(ua,n),qe(Kn,la),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ct(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ct(r,n)}He(Kn),qe(Kn,r)}function Qs(){He(Kn),He(ua),He(ca)}function Ep(n){$i(ca.current);var r=$i(Kn.current),a=ct(r,n.type);r!==a&&(qe(ua,n),qe(Kn,a))}function rh(n){ua.current===n&&(He(Kn),He(ua))}var Xe=qr(0);function Bl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ih=[];function sh(){for(var n=0;n<ih.length;n++)ih[n]._workInProgressVersionPrimary=null;ih.length=0}var $l=we.ReactCurrentDispatcher,oh=we.ReactCurrentBatchConfig,qi=0,Je=null,dt=null,_t=null,ql=!1,ha=!1,da=0,Kv=0;function Vt(){throw Error(t(321))}function ah(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Nn(n[a],r[a]))return!1;return!0}function lh(n,r,a,c,d,m){if(qi=m,Je=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$l.current=n===null||n.memoizedState===null?Jv:Zv,n=a(c,d),ha){m=0;do{if(ha=!1,da=0,25<=m)throw Error(t(301));m+=1,_t=dt=null,r.updateQueue=null,$l.current=e0,n=a(c,d)}while(ha)}if($l.current=Gl,r=dt!==null&&dt.next!==null,qi=0,_t=dt=Je=null,ql=!1,r)throw Error(t(300));return n}function uh(){var n=da!==0;return da=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Je.memoizedState=_t=n:_t=_t.next=n,_t}function yn(){if(dt===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=dt.next;var r=_t===null?Je.memoizedState:_t.next;if(r!==null)_t=r,dt=n;else{if(n===null)throw Error(t(310));dt=n,n={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},_t===null?Je.memoizedState=_t=n:_t=_t.next=n}return _t}function fa(n,r){return typeof r=="function"?r(n):r}function ch(n){var r=yn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=dt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var _=d.next;d.next=m.next,m.next=_}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var T=_=null,P=null,U=m;do{var H=U.lane;if((qi&H)===H)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var K={lane:H,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(T=P=K,_=c):P=P.next=K,Je.lanes|=H,Wi|=H}U=U.next}while(U!==null&&U!==m);P===null?_=c:P.next=T,Nn(c,r.memoizedState)||(Gt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Je.lanes|=m,Wi|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function hh(n){var r=yn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do m=n(m,_.action),_=_.next;while(_!==d);Nn(m,r.memoizedState)||(Gt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),a.lastRenderedState=m}return[m,c]}function wp(){}function Tp(n,r){var a=Je,c=yn(),d=r(),m=!Nn(c.memoizedState,d);if(m&&(c.memoizedState=d,Gt=!0),c=c.queue,dh(Ap.bind(null,a,c,n),[n]),c.getSnapshot!==r||m||_t!==null&&_t.memoizedState.tag&1){if(a.flags|=2048,pa(9,Sp.bind(null,a,c,d,r),void 0,null),vt===null)throw Error(t(349));qi&30||Ip(a,r,d)}return d}function Ip(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Sp(n,r,a,c){r.value=a,r.getSnapshot=c,Rp(r)&&Cp(n)}function Ap(n,r,a){return a(function(){Rp(r)&&Cp(n)})}function Rp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Nn(n,a)}catch{return!0}}function Cp(n){var r=gr(n,1);r!==null&&Ln(r,n,1,-1)}function Pp(n){var r=Qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:n},r.queue=n,n=n.dispatch=Xv.bind(null,Je,n),[r.memoizedState,n]}function pa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function kp(){return yn().memoizedState}function Wl(n,r,a,c){var d=Qn();Je.flags|=n,d.memoizedState=pa(1|r,a,void 0,c===void 0?null:c)}function Hl(n,r,a,c){var d=yn();c=c===void 0?null:c;var m=void 0;if(dt!==null){var _=dt.memoizedState;if(m=_.destroy,c!==null&&ah(c,_.deps)){d.memoizedState=pa(r,a,m,c);return}}Je.flags|=n,d.memoizedState=pa(1|r,a,m,c)}function Np(n,r){return Wl(8390656,8,n,r)}function dh(n,r){return Hl(2048,8,n,r)}function Dp(n,r){return Hl(4,2,n,r)}function Vp(n,r){return Hl(4,4,n,r)}function Op(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function xp(n,r,a){return a=a!=null?a.concat([n]):null,Hl(4,4,Op.bind(null,r,n),a)}function fh(){}function Lp(n,r){var a=yn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&ah(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Mp(n,r){var a=yn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&ah(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function bp(n,r,a){return qi&21?(Nn(a,r)||(a=Oi(),Je.lanes|=a,Wi|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a)}function Qv(n,r){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=oh.transition;oh.transition={};try{n(!1),r()}finally{Pe=a,oh.transition=c}}function Up(){return yn().memoizedState}function Yv(n,r,a){var c=Jr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Fp(n))jp(r,a);else if(a=gp(n,r,a,c),a!==null){var d=Bt();Ln(a,n,c,d),zp(a,r,c)}}function Xv(n,r,a){var c=Jr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fp(n))jp(r,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var _=r.lastRenderedState,T=m(_,a);if(d.hasEagerState=!0,d.eagerState=T,Nn(T,_)){var P=r.interleaved;P===null?(d.next=d,eh(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}a=gp(n,r,d,c),a!==null&&(d=Bt(),Ln(a,n,c,d),zp(a,r,c))}}function Fp(n){var r=n.alternate;return n===Je||r!==null&&r===Je}function jp(n,r){ha=ql=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function zp(n,r,a){if(a&4194240){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,br(n,a)}}var Gl={readContext:gn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},Jv={readContext:gn,useCallback:function(n,r){return Qn().memoizedState=[n,r===void 0?null:r],n},useContext:gn,useEffect:Np,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Wl(4194308,4,Op.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Wl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Wl(4,2,n,r)},useMemo:function(n,r){var a=Qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Yv.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var r=Qn();return n={current:n},r.memoizedState=n},useState:Pp,useDebugValue:fh,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=Pp(!1),r=n[0];return n=Qv.bind(null,n[1]),Qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Je,d=Qn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),vt===null)throw Error(t(349));qi&30||Ip(c,r,a)}d.memoizedState=a;var m={value:a,getSnapshot:r};return d.queue=m,Np(Ap.bind(null,c,m,n),[n]),c.flags|=2048,pa(9,Sp.bind(null,c,m,a,r),void 0,null),a},useId:function(){var n=Qn(),r=vt.identifierPrefix;if(Qe){var a=mr,c=pr;a=(c&~(1<<32-Ft(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=da++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Kv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Zv={readContext:gn,useCallback:Lp,useContext:gn,useEffect:dh,useImperativeHandle:xp,useInsertionEffect:Dp,useLayoutEffect:Vp,useMemo:Mp,useReducer:ch,useRef:kp,useState:function(){return ch(fa)},useDebugValue:fh,useDeferredValue:function(n){var r=yn();return bp(r,dt.memoizedState,n)},useTransition:function(){var n=ch(fa)[0],r=yn().memoizedState;return[n,r]},useMutableSource:wp,useSyncExternalStore:Tp,useId:Up,unstable_isNewReconciler:!1},e0={readContext:gn,useCallback:Lp,useContext:gn,useEffect:dh,useImperativeHandle:xp,useInsertionEffect:Dp,useLayoutEffect:Vp,useMemo:Mp,useReducer:hh,useRef:kp,useState:function(){return hh(fa)},useDebugValue:fh,useDeferredValue:function(n){var r=yn();return dt===null?r.memoizedState=n:bp(r,dt.memoizedState,n)},useTransition:function(){var n=hh(fa)[0],r=yn().memoizedState;return[n,r]},useMutableSource:wp,useSyncExternalStore:Tp,useId:Up,unstable_isNewReconciler:!1};function Vn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function ph(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Kl={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Jr(n),m=yr(c,d);m.payload=r,a!=null&&(m.callback=a),r=Kr(n,m,d),r!==null&&(Ln(r,n,d,c),jl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Jr(n),m=yr(c,d);m.tag=1,m.payload=r,a!=null&&(m.callback=a),r=Kr(n,m,d),r!==null&&(Ln(r,n,d,c),jl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=Jr(n),d=yr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Kr(n,d,c),r!==null&&(Ln(r,n,c,a),jl(r,n,c))}};function Bp(n,r,a,c,d,m,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,_):r.prototype&&r.prototype.isPureReactComponent?!ea(a,c)||!ea(d,m):!0}function $p(n,r,a){var c=!1,d=Wr,m=r.contextType;return typeof m=="object"&&m!==null?m=gn(m):(d=Ht(r)?Fi:Dt.current,c=r.contextTypes,m=(c=c!=null)?Bs(n,d):Wr),r=new r(a,m),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Kl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),r}function qp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Kl.enqueueReplaceState(r,r.state,null)}function mh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},th(n);var m=r.contextType;typeof m=="object"&&m!==null?d.context=gn(m):(m=Ht(r)?Fi:Dt.current,d.context=Bs(n,m)),d.state=n.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(ph(n,r,m,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Kl.enqueueReplaceState(d,d.state,null),zl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,r){try{var a="",c=r;do a+=Se(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:r,stack:d,digest:null}}function gh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function yh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var t0=typeof WeakMap=="function"?WeakMap:Map;function Wp(n,r,a){a=yr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){tu||(tu=!0,Vh=c),yh(n,r)},a}function Hp(n,r,a){a=yr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){yh(n,r)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){yh(n,r),typeof c!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Gp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new t0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=m0.bind(null,n,r,a),r.then(n,n))}function Kp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Qp(n,r,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=yr(-1,1),r.tag=2,Kr(a,r,1))),a.lanes|=1),n)}var n0=we.ReactCurrentOwner,Gt=!1;function zt(n,r,a,c){r.child=n===null?mp(r,null,a,c):Hs(r,n.child,a,c)}function Yp(n,r,a,c,d){a=a.render;var m=r.ref;return Ks(r,d),c=lh(n,r,a,c,m,d),a=uh(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Qe&&a&&Wc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Xp(n,r,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Fh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=m,Jp(n,r,m,c,d)):(n=au(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!(n.lanes&d)){var _=m.memoizedProps;if(a=a.compare,a=a!==null?a:ea,a(_,c)&&n.ref===r.ref)return _r(n,r,d)}return r.flags|=1,n=ei(m,c),n.ref=r.ref,n.return=r,r.child=n}function Jp(n,r,a,c,d){if(n!==null){var m=n.memoizedProps;if(ea(m,c)&&n.ref===r.ref)if(Gt=!1,r.pendingProps=c=m,(n.lanes&d)!==0)n.flags&131072&&(Gt=!0);else return r.lanes=n.lanes,_r(n,r,d)}return _h(n,r,a,c,d)}function Zp(n,r,a){var c=r.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(Js,an),an|=a;else{if(!(a&1073741824))return n=m!==null?m.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qe(Js,an),an|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,qe(Js,an),an|=c}else m!==null?(c=m.baseLanes|a,r.memoizedState=null):c=a,qe(Js,an),an|=c;return zt(n,r,d,a),r.child}function em(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function _h(n,r,a,c,d){var m=Ht(a)?Fi:Dt.current;return m=Bs(r,m),Ks(r,d),a=lh(n,r,a,c,m,d),c=uh(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Qe&&c&&Wc(r),r.flags|=1,zt(n,r,a,d),r.child)}function tm(n,r,a,c,d){if(Ht(a)){var m=!0;Vl(r)}else m=!1;if(Ks(r,d),r.stateNode===null)Yl(n,r),$p(r,a,c),mh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var P=_.context,U=a.contextType;typeof U=="object"&&U!==null?U=gn(U):(U=Ht(a)?Fi:Dt.current,U=Bs(r,U));var H=a.getDerivedStateFromProps,K=typeof H=="function"||typeof _.getSnapshotBeforeUpdate=="function";K||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||P!==U)&&qp(r,_,c,U),Gr=!1;var W=r.memoizedState;_.state=W,zl(r,c,_,d),P=r.memoizedState,T!==c||W!==P||Wt.current||Gr?(typeof H=="function"&&(ph(r,a,H,c),P=r.memoizedState),(T=Gr||Bp(r,a,T,c,W,P,U))?(K||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),_.props=c,_.state=P,_.context=U,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,yp(n,r),T=r.memoizedProps,U=r.type===r.elementType?T:Vn(r.type,T),_.props=U,K=r.pendingProps,W=_.context,P=a.contextType,typeof P=="object"&&P!==null?P=gn(P):(P=Ht(a)?Fi:Dt.current,P=Bs(r,P));var Z=a.getDerivedStateFromProps;(H=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==K||W!==P)&&qp(r,_,c,P),Gr=!1,W=r.memoizedState,_.state=W,zl(r,c,_,d);var se=r.memoizedState;T!==K||W!==se||Wt.current||Gr?(typeof Z=="function"&&(ph(r,a,Z,c),se=r.memoizedState),(U=Gr||Bp(r,a,U,c,W,se,P)||!1)?(H||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,se,P),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,se,P)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=se),_.props=c,_.state=se,_.context=P,c=U):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),c=!1)}return vh(n,r,a,c,m,d)}function vh(n,r,a,c,d,m){em(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&op(r,a,!1),_r(n,r,m);c=r.stateNode,n0.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Hs(r,n.child,null,m),r.child=Hs(r,null,T,m)):zt(n,r,T,m),r.memoizedState=c.state,d&&op(r,a,!0),r.child}function nm(n){var r=n.stateNode;r.pendingContext?ip(n,r.pendingContext,r.pendingContext!==r.context):r.context&&ip(n,r.context,!1),nh(n,r.containerInfo)}function rm(n,r,a,c,d){return Ws(),Qc(d),r.flags|=256,zt(n,r,a,c),r.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function wh(n){return{baseLanes:n,cachePool:null,transitions:null}}function im(n,r,a){var c=r.pendingProps,d=Xe.current,m=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(m=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Xe,d&1),n===null)return Kc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(_=c.children,n=c.fallback,m?(c=r.mode,m=r.child,_={mode:"hidden",children:_},!(c&1)&&m!==null?(m.childLanes=0,m.pendingProps=_):m=lu(_,c,0,null),n=Qi(n,c,a,null),m.return=r,n.return=r,m.sibling=n,r.child=m,r.child.memoizedState=wh(a),r.memoizedState=Eh,n):Th(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return r0(n,r,_,c,T,d,a);if(m){m=c.fallback,_=r.mode,d=n.child,T=d.sibling;var P={mode:"hidden",children:c.children};return!(_&1)&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=ei(d,P),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?m=ei(T,m):(m=Qi(m,_,a,null),m.flags|=2),m.return=r,c.return=r,c.sibling=m,r.child=c,c=m,m=r.child,_=n.child.memoizedState,_=_===null?wh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},m.memoizedState=_,m.childLanes=n.childLanes&~a,r.memoizedState=Eh,c}return m=n.child,n=m.sibling,c=ei(m,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Th(n,r){return r=lu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ql(n,r,a,c){return c!==null&&Qc(c),Hs(r,n.child,null,a),n=Th(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function r0(n,r,a,c,d,m,_){if(a)return r.flags&256?(r.flags&=-257,c=gh(Error(t(422))),Ql(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(m=c.fallback,d=r.mode,c=lu({mode:"visible",children:c.children},d,0,null),m=Qi(m,d,_,null),m.flags|=2,c.return=r,m.return=r,c.sibling=m,r.child=c,r.mode&1&&Hs(r,n.child,null,_),r.child.memoizedState=wh(_),r.memoizedState=Eh,m);if(!(r.mode&1))return Ql(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,m=Error(t(419)),c=gh(m,c,void 0),Ql(n,r,_,c)}if(T=(_&n.childLanes)!==0,Gt||T){if(c=vt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|_)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,gr(n,d),Ln(c,n,d,-1))}return Uh(),c=gh(Error(t(421))),Ql(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=g0.bind(null,n),d._reactRetry=r,null):(n=m.treeContext,on=$r(d.nextSibling),sn=r,Qe=!0,Dn=null,n!==null&&(pn[mn++]=pr,pn[mn++]=mr,pn[mn++]=ji,pr=n.id,mr=n.overflow,ji=r),r=Th(r,c.children),r.flags|=4096,r)}function sm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Zc(n.return,r,a)}function Ih(n,r,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function om(n,r,a){var c=r.pendingProps,d=c.revealOrder,m=c.tail;if(zt(n,r,c.children,a),c=Xe.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&sm(n,a,r);else if(n.tag===19)sm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Xe,c),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Bl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Ih(r,!1,d,a,m);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Bl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Ih(r,!0,a,null,m);break;case"together":Ih(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Yl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function _r(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Wi|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ei(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ei(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function i0(n,r,a){switch(r.tag){case 3:nm(r),Ws();break;case 5:Ep(r);break;case 1:Ht(r.type)&&Vl(r);break;case 4:nh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;qe(Ul,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(qe(Xe,Xe.current&1),r.flags|=128,null):a&r.child.childLanes?im(n,r,a):(qe(Xe,Xe.current&1),n=_r(n,r,a),n!==null?n.sibling:null);qe(Xe,Xe.current&1);break;case 19:if(c=(a&r.childLanes)!==0,n.flags&128){if(c)return om(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Xe,Xe.current),c)break;return null;case 22:case 23:return r.lanes=0,Zp(n,r,a)}return _r(n,r,a)}var am,Sh,lm,um;am=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Sh=function(){},lm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,$i(Kn.current);var m=null;switch(a){case"input":d=Ti(n,d),c=Ti(n,c),m=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),m=[];break;case"textarea":d=ko(n,d),c=ko(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=kl)}Lo(a,c);var _;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var T=d[U];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?m||(m=[]):(m=m||[]).push(U,null));for(U in c){var P=c[U];if(T=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&P!==T&&(P!=null||T!=null))if(U==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||P&&P.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in P)P.hasOwnProperty(_)&&T[_]!==P[_]&&(a||(a={}),a[_]=P[_])}else a||(m||(m=[]),m.push(U,a)),a=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,T=T?T.__html:void 0,P!=null&&T!==P&&(m=m||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&We("scroll",n),m||T===P||(m=[])):(m=m||[]).push(U,P))}a&&(m=m||[]).push("style",a);var U=m;(r.updateQueue=U)&&(r.flags|=4)}},um=function(n,r,a,c){a!==c&&(r.flags|=4)};function ma(n,r){if(!Qe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function s0(n,r,a){var c=r.pendingProps;switch(Hc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Ht(r.type)&&Dl(),Ot(r),null;case 3:return c=r.stateNode,Qs(),He(Wt),He(Dt),sh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ml(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Dn!==null&&(Lh(Dn),Dn=null))),Sh(n,r),Ot(r),null;case 5:rh(r);var d=$i(ca.current);if(a=r.type,n!==null&&r.stateNode!=null)lm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=$i(Kn.current),Ml(r)){c=r.stateNode,a=r.type;var m=r.memoizedProps;switch(c[Gn]=r,c[sa]=m,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<na.length;d++)We(na[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":cs(c,m),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},We("invalid",c);break;case"textarea":ds(c,m),We("invalid",c)}Lo(a,m),d=null;for(var _ in m)if(m.hasOwnProperty(_)){var T=m[_];_==="children"?typeof T=="string"?c.textContent!==T&&(m.suppressHydrationWarning!==!0&&Pl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(m.suppressHydrationWarning!==!0&&Pl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&We("scroll",c)}switch(a){case"input":nr(c),el(c,m,!0);break;case"textarea":nr(c),No(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=kl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ut(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Gn]=r,n[sa]=c,am(n,r,!1,!1),r.stateNode=n;e:{switch(_=Mo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<na.length;d++)We(na[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":cs(n,c),d=Ti(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),We("invalid",n);break;case"textarea":ds(n,c),d=ko(n,c),We("invalid",n);break;default:d=c}Lo(a,d),T=d;for(m in T)if(T.hasOwnProperty(m)){var P=T[m];m==="style"?Oo(n,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Do(n,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Vr(n,P):typeof P=="number"&&Vr(n,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&We("scroll",n):P!=null&&ge(n,m,P,_))}switch(a){case"input":nr(n),el(n,c,!1);break;case"textarea":nr(n),No(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?ir(n,!!c.multiple,m,!1):c.defaultValue!=null&&ir(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=kl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)um(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=$i(ca.current),$i(Kn.current),Ml(r)){if(c=r.stateNode,a=r.memoizedProps,c[Gn]=r,(m=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:Pl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pl(c.nodeValue,a,(n.mode&1)!==0)}m&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Gn]=r,r.stateNode=c}return Ot(r),null;case 13:if(He(Xe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&on!==null&&r.mode&1&&!(r.flags&128))dp(),Ws(),r.flags|=98560,m=!1;else if(m=Ml(r),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=r.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Gn]=r}else Ws(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Ot(r),m=!1}else Dn!==null&&(Lh(Dn),Dn=null),m=!0;if(!m)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Xe.current&1?ft===0&&(ft=3):Uh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Qs(),Sh(n,r),n===null&&ra(r.stateNode.containerInfo),Ot(r),null;case 10:return Jc(r.type._context),Ot(r),null;case 17:return Ht(r.type)&&Dl(),Ot(r),null;case 19:if(He(Xe),m=r.memoizedState,m===null)return Ot(r),null;if(c=(r.flags&128)!==0,_=m.rendering,_===null)if(c)ma(m,!1);else{if(ft!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(_=Bl(n),_!==null){for(r.flags|=128,ma(m,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)m=a,n=c,m.flags&=14680066,_=m.alternate,_===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=_.childLanes,m.lanes=_.lanes,m.child=_.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=_.memoizedProps,m.memoizedState=_.memoizedState,m.updateQueue=_.updateQueue,m.type=_.type,n=_.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Xe,Xe.current&1|2),r.child}n=n.sibling}m.tail!==null&&$e()>Zs&&(r.flags|=128,c=!0,ma(m,!1),r.lanes=4194304)}else{if(!c)if(n=Bl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ma(m,!0),m.tail===null&&m.tailMode==="hidden"&&!_.alternate&&!Qe)return Ot(r),null}else 2*$e()-m.renderingStartTime>Zs&&a!==1073741824&&(r.flags|=128,c=!0,ma(m,!1),r.lanes=4194304);m.isBackwards?(_.sibling=r.child,r.child=_):(a=m.last,a!==null?a.sibling=_:r.child=_,m.last=_)}return m.tail!==null?(r=m.tail,m.rendering=r,m.tail=r.sibling,m.renderingStartTime=$e(),r.sibling=null,a=Xe.current,qe(Xe,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return bh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?an&1073741824&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function o0(n,r){switch(Hc(r),r.tag){case 1:return Ht(r.type)&&Dl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Qs(),He(Wt),He(Dt),sh(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return rh(r),null;case 13:if(He(Xe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ws()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return He(Xe),null;case 4:return Qs(),null;case 10:return Jc(r.type._context),null;case 22:case 23:return bh(),null;case 24:return null;default:return null}}var Xl=!1,xt=!1,a0=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Xs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(n,r,c)}else a.current=null}function Ah(n,r,a){try{a()}catch(c){et(n,r,c)}}var cm=!1;function l0(n,r){if(bc=jr,n=Bf(),kc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var _=0,T=-1,P=-1,U=0,H=0,K=n,W=null;t:for(;;){for(var Z;K!==a||d!==0&&K.nodeType!==3||(T=_+d),K!==m||c!==0&&K.nodeType!==3||(P=_+c),K.nodeType===3&&(_+=K.nodeValue.length),(Z=K.firstChild)!==null;)W=K,K=Z;for(;;){if(K===n)break t;if(W===a&&++U===d&&(T=_),W===m&&++H===c&&(P=_),(Z=K.nextSibling)!==null)break;K=W,W=K.parentNode}K=Z}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:n,selectionRange:a},jr=!1,ne=r;ne!==null;)if(r=ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ne=n;else for(;ne!==null;){r=ne;try{var se=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,nt=se.memoizedState,M=r.stateNode,k=M.getSnapshotBeforeUpdate(r.elementType===r.type?oe:Vn(r.type,oe),nt);M.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){et(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,ne=n;break}ne=r.return}return se=cm,cm=!1,se}function ga(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Ah(r,a,m)}d=d.next}while(d!==c)}}function Jl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Rh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function hm(n){var r=n.alternate;r!==null&&(n.alternate=null,hm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Gn],delete r[sa],delete r[Bc],delete r[qv],delete r[Wv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function dm(n){return n.tag===5||n.tag===3||n.tag===4}function fm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||dm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ch(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=kl));else if(c!==4&&(n=n.child,n!==null))for(Ch(n,r,a),n=n.sibling;n!==null;)Ch(n,r,a),n=n.sibling}function Ph(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ph(n,r,a),n=n.sibling;n!==null;)Ph(n,r,a),n=n.sibling}var St=null,On=!1;function Qr(n,r,a){for(a=a.child;a!==null;)pm(n,r,a),a=a.sibling}function pm(n,r,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Di,a)}catch{}switch(a.tag){case 5:xt||Xs(a,r);case 6:var c=St,d=On;St=null,Qr(n,r,a),St=c,On=d,St!==null&&(On?(n=St,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):St.removeChild(a.stateNode));break;case 18:St!==null&&(On?(n=St,a=a.stateNode,n.nodeType===8?zc(n.parentNode,a):n.nodeType===1&&zc(n,a),Pn(n)):zc(St,a.stateNode));break;case 4:c=St,d=On,St=a.stateNode.containerInfo,On=!0,Qr(n,r,a),St=c,On=d;break;case 0:case 11:case 14:case 15:if(!xt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,_=m.destroy;m=m.tag,_!==void 0&&(m&2||m&4)&&Ah(a,r,_),d=d.next}while(d!==c)}Qr(n,r,a);break;case 1:if(!xt&&(Xs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){et(a,r,T)}Qr(n,r,a);break;case 21:Qr(n,r,a);break;case 22:a.mode&1?(xt=(c=xt)||a.memoizedState!==null,Qr(n,r,a),xt=c):Qr(n,r,a);break;default:Qr(n,r,a)}}function mm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new a0),r.forEach(function(c){var d=y0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function xn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:St=T.stateNode,On=!1;break e;case 3:St=T.stateNode.containerInfo,On=!0;break e;case 4:St=T.stateNode.containerInfo,On=!0;break e}T=T.return}if(St===null)throw Error(t(160));pm(m,_,d),St=null,On=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(U){et(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)gm(r,n),r=r.sibling}function gm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xn(r,n),Yn(n),c&4){try{ga(3,n,n.return),Jl(3,n)}catch(oe){et(n,n.return,oe)}try{ga(5,n,n.return)}catch(oe){et(n,n.return,oe)}}break;case 1:xn(r,n),Yn(n),c&512&&a!==null&&Xs(a,a.return);break;case 5:if(xn(r,n),Yn(n),c&512&&a!==null&&Xs(a,a.return),n.flags&32){var d=n.stateNode;try{Vr(d,"")}catch(oe){et(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,_=a!==null?a.memoizedProps:m,T=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{T==="input"&&m.type==="radio"&&m.name!=null&&Co(d,m),Mo(T,_);var U=Mo(T,m);for(_=0;_<P.length;_+=2){var H=P[_],K=P[_+1];H==="style"?Oo(d,K):H==="dangerouslySetInnerHTML"?Do(d,K):H==="children"?Vr(d,K):ge(d,H,K,U)}switch(T){case"input":Po(d,m);break;case"textarea":fs(d,m);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Z=m.value;Z!=null?ir(d,!!m.multiple,Z,!1):W!==!!m.multiple&&(m.defaultValue!=null?ir(d,!!m.multiple,m.defaultValue,!0):ir(d,!!m.multiple,m.multiple?[]:"",!1))}d[sa]=m}catch(oe){et(n,n.return,oe)}}break;case 6:if(xn(r,n),Yn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(oe){et(n,n.return,oe)}}break;case 3:if(xn(r,n),Yn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pn(r.containerInfo)}catch(oe){et(n,n.return,oe)}break;case 4:xn(r,n),Yn(n);break;case 13:xn(r,n),Yn(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Dh=$e())),c&4&&mm(n);break;case 22:if(H=a!==null&&a.memoizedState!==null,n.mode&1?(xt=(U=xt)||H,xn(r,n),xt=U):xn(r,n),Yn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!H&&n.mode&1)for(ne=n,H=n.child;H!==null;){for(K=ne=H;ne!==null;){switch(W=ne,Z=W.child,W.tag){case 0:case 11:case 14:case 15:ga(4,W,W.return);break;case 1:Xs(W,W.return);var se=W.stateNode;if(typeof se.componentWillUnmount=="function"){c=W,a=W.return;try{r=c,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(oe){et(c,a,oe)}}break;case 5:Xs(W,W.return);break;case 22:if(W.memoizedState!==null){vm(K);continue}}Z!==null?(Z.return=W,ne=Z):vm(K)}H=H.sibling}e:for(H=null,K=n;;){if(K.tag===5){if(H===null){H=K;try{d=K.stateNode,U?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(T=K.stateNode,P=K.memoizedProps.style,_=P!=null&&P.hasOwnProperty("display")?P.display:null,T.style.display=Vo("display",_))}catch(oe){et(n,n.return,oe)}}}else if(K.tag===6){if(H===null)try{K.stateNode.nodeValue=U?"":K.memoizedProps}catch(oe){et(n,n.return,oe)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;H===K&&(H=null),K=K.return}H===K&&(H=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:xn(r,n),Yn(n),c&4&&mm(n);break;case 21:break;default:xn(r,n),Yn(n)}}function Yn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(dm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Vr(d,""),c.flags&=-33);var m=fm(n);Ph(n,m,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=fm(n);Ch(n,T,_);break;default:throw Error(t(161))}}catch(P){et(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function u0(n,r,a){ne=n,ym(n)}function ym(n,r,a){for(var c=(n.mode&1)!==0;ne!==null;){var d=ne,m=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Xl;if(!_){var T=d.alternate,P=T!==null&&T.memoizedState!==null||xt;T=Xl;var U=xt;if(Xl=_,(xt=P)&&!U)for(ne=d;ne!==null;)_=ne,P=_.child,_.tag===22&&_.memoizedState!==null?Em(d):P!==null?(P.return=_,ne=P):Em(d);for(;m!==null;)ne=m,ym(m),m=m.sibling;ne=d,Xl=T,xt=U}_m(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,ne=m):_m(n)}}function _m(n){for(;ne!==null;){var r=ne;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:xt||Jl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!xt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Vn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=r.updateQueue;m!==null&&vp(r,m,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}vp(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var H=U.memoizedState;if(H!==null){var K=H.dehydrated;K!==null&&Pn(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xt||r.flags&512&&Rh(r)}catch(W){et(r,r.return,W)}}if(r===n){ne=null;break}if(a=r.sibling,a!==null){a.return=r.return,ne=a;break}ne=r.return}}function vm(n){for(;ne!==null;){var r=ne;if(r===n){ne=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ne=a;break}ne=r.return}}function Em(n){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Jl(4,r)}catch(P){et(r,a,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){et(r,d,P)}}var m=r.return;try{Rh(r)}catch(P){et(r,m,P)}break;case 5:var _=r.return;try{Rh(r)}catch(P){et(r,_,P)}}}catch(P){et(r,r.return,P)}if(r===n){ne=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ne=T;break}ne=r.return}}var c0=Math.ceil,Zl=we.ReactCurrentDispatcher,kh=we.ReactCurrentOwner,_n=we.ReactCurrentBatchConfig,Oe=0,vt=null,st=null,At=0,an=0,Js=qr(0),ft=0,ya=null,Wi=0,eu=0,Nh=0,_a=null,Kt=null,Dh=0,Zs=1/0,vr=null,tu=!1,Vh=null,Yr=null,nu=!1,Xr=null,ru=0,va=0,Oh=null,iu=-1,su=0;function Bt(){return Oe&6?$e():iu!==-1?iu:iu=$e()}function Jr(n){return n.mode&1?Oe&2&&At!==0?At&-At:Gv.transition!==null?(su===0&&(su=Oi()),su):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:Go(n.type)),n):1}function Ln(n,r,a,c){if(50<va)throw va=0,Oh=null,Error(t(185));Mr(n,a,c),(!(Oe&2)||n!==vt)&&(n===vt&&(!(Oe&2)&&(eu|=a),ft===4&&Zr(n,At)),Qt(n,c),a===1&&Oe===0&&!(r.mode&1)&&(Zs=$e()+500,Ol&&Hr()))}function Qt(n,r){var a=n.callbackNode;ar(n,r);var c=Vi(n,n===vt?At:0);if(c===0)a!==null&&Bo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Bo(a),r===1)n.tag===0?Hv(Tm.bind(null,n)):ap(Tm.bind(null,n)),Bv(function(){!(Oe&6)&&Hr()}),a=null;else{switch(Ur(c)){case 1:a=Ni;break;case 4:a=Or;break;case 16:a=hn;break;case 536870912:a=sl;break;default:a=hn}a=Nm(a,wm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function wm(n,r){if(iu=-1,su=0,Oe&6)throw Error(t(327));var a=n.callbackNode;if(eo()&&n.callbackNode!==a)return null;var c=Vi(n,n===vt?At:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=ou(n,c);else{r=c;var d=Oe;Oe|=2;var m=Sm();(vt!==n||At!==r)&&(vr=null,Zs=$e()+500,Gi(n,r));do try{f0();break}catch(T){Im(n,T)}while(!0);Xc(),Zl.current=m,Oe=d,st!==null?r=0:(vt=null,At=0,r=ft)}if(r!==0){if(r===2&&(d=tn(n),d!==0&&(c=d,r=xh(n,d))),r===1)throw a=ya,Gi(n,0),Zr(n,c),Qt(n,$e()),a;if(r===6)Zr(n,c);else{if(d=n.current.alternate,!(c&30)&&!h0(d)&&(r=ou(n,c),r===2&&(m=tn(n),m!==0&&(c=m,r=xh(n,m))),r===1))throw a=ya,Gi(n,0),Zr(n,c),Qt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Ki(n,Kt,vr);break;case 3:if(Zr(n,c),(c&130023424)===c&&(r=Dh+500-$e(),10<r)){if(Vi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=jc(Ki.bind(null,n,Kt,vr),r);break}Ki(n,Kt,vr);break;case 4:if(Zr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ft(c);m=1<<_,_=r[_],_>d&&(d=_),c&=~m}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*c0(c/1960))-c,10<c){n.timeoutHandle=jc(Ki.bind(null,n,Kt,vr),c);break}Ki(n,Kt,vr);break;case 5:Ki(n,Kt,vr);break;default:throw Error(t(329))}}}return Qt(n,$e()),n.callbackNode===a?wm.bind(null,n):null}function xh(n,r){var a=_a;return n.current.memoizedState.isDehydrated&&(Gi(n,r).flags|=256),n=ou(n,r),n!==2&&(r=Kt,Kt=a,r!==null&&Lh(r)),n}function Lh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function h0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Nn(m(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Zr(n,r){for(r&=~Nh,r&=~eu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ft(r),c=1<<a;n[a]=-1,r&=~c}}function Tm(n){if(Oe&6)throw Error(t(327));eo();var r=Vi(n,0);if(!(r&1))return Qt(n,$e()),null;var a=ou(n,r);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(r=c,a=xh(n,c))}if(a===1)throw a=ya,Gi(n,0),Zr(n,r),Qt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ki(n,Kt,vr),Qt(n,$e()),null}function Mh(n,r){var a=Oe;Oe|=1;try{return n(r)}finally{Oe=a,Oe===0&&(Zs=$e()+500,Ol&&Hr())}}function Hi(n){Xr!==null&&Xr.tag===0&&!(Oe&6)&&eo();var r=Oe;Oe|=1;var a=_n.transition,c=Pe;try{if(_n.transition=null,Pe=1,n)return n()}finally{Pe=c,_n.transition=a,Oe=r,!(Oe&6)&&Hr()}}function bh(){an=Js.current,He(Js)}function Gi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,zv(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Hc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Dl();break;case 3:Qs(),He(Wt),He(Dt),sh();break;case 5:rh(c);break;case 4:Qs();break;case 13:He(Xe);break;case 19:He(Xe);break;case 10:Jc(c.type._context);break;case 22:case 23:bh()}a=a.return}if(vt=n,st=n=ei(n.current,null),At=an=r,ft=0,ya=null,Nh=eu=Wi=0,Kt=_a=null,Bi!==null){for(r=0;r<Bi.length;r++)if(a=Bi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var _=m.next;m.next=d,c.next=_}a.pending=c}Bi=null}return n}function Im(n,r){do{var a=st;try{if(Xc(),$l.current=Gl,ql){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ql=!1}if(qi=0,_t=dt=Je=null,ha=!1,da=0,kh.current=null,a===null||a.return===null){ft=1,ya=r,st=null;break}e:{var m=n,_=a.return,T=a,P=r;if(r=At,T.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,H=T,K=H.tag;if(!(H.mode&1)&&(K===0||K===11||K===15)){var W=H.alternate;W?(H.updateQueue=W.updateQueue,H.memoizedState=W.memoizedState,H.lanes=W.lanes):(H.updateQueue=null,H.memoizedState=null)}var Z=Kp(_);if(Z!==null){Z.flags&=-257,Qp(Z,_,T,m,r),Z.mode&1&&Gp(m,U,r),r=Z,P=U;var se=r.updateQueue;if(se===null){var oe=new Set;oe.add(P),r.updateQueue=oe}else se.add(P);break e}else{if(!(r&1)){Gp(m,U,r),Uh();break e}P=Error(t(426))}}else if(Qe&&T.mode&1){var nt=Kp(_);if(nt!==null){!(nt.flags&65536)&&(nt.flags|=256),Qp(nt,_,T,m,r),Qc(Ys(P,T));break e}}m=P=Ys(P,T),ft!==4&&(ft=2),_a===null?_a=[m]:_a.push(m),m=_;do{switch(m.tag){case 3:m.flags|=65536,r&=-r,m.lanes|=r;var M=Wp(m,P,r);_p(m,M);break e;case 1:T=P;var k=m.type,b=m.stateNode;if(!(m.flags&128)&&(typeof k.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Yr===null||!Yr.has(b)))){m.flags|=65536,r&=-r,m.lanes|=r;var Y=Hp(m,T,r);_p(m,Y);break e}}m=m.return}while(m!==null)}Rm(a)}catch(ae){r=ae,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function Sm(){var n=Zl.current;return Zl.current=Gl,n===null?Gl:n}function Uh(){(ft===0||ft===3||ft===2)&&(ft=4),vt===null||!(Wi&268435455)&&!(eu&268435455)||Zr(vt,At)}function ou(n,r){var a=Oe;Oe|=2;var c=Sm();(vt!==n||At!==r)&&(vr=null,Gi(n,r));do try{d0();break}catch(d){Im(n,d)}while(!0);if(Xc(),Oe=a,Zl.current=c,st!==null)throw Error(t(261));return vt=null,At=0,ft}function d0(){for(;st!==null;)Am(st)}function f0(){for(;st!==null&&!rl();)Am(st)}function Am(n){var r=km(n.alternate,n,an);n.memoizedProps=n.pendingProps,r===null?Rm(n):st=r,kh.current=null}function Rm(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=o0(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,st=null;return}}else if(a=s0(a,r,an),a!==null){st=a;return}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);ft===0&&(ft=5)}function Ki(n,r,a){var c=Pe,d=_n.transition;try{_n.transition=null,Pe=1,p0(n,r,a,c)}finally{_n.transition=d,Pe=c}return null}function p0(n,r,a,c){do eo();while(Xr!==null);if(Oe&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(ze(n,m),n===vt&&(st=vt=null,At=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||nu||(nu=!0,Nm(hn,function(){return eo(),null})),m=(a.flags&15990)!==0,a.subtreeFlags&15990||m){m=_n.transition,_n.transition=null;var _=Pe;Pe=1;var T=Oe;Oe|=4,kh.current=null,l0(n,a),gm(a,n),xv(Uc),jr=!!bc,Uc=bc=null,n.current=a,u0(a),wc(),Oe=T,Pe=_,_n.transition=m}else n.current=a;if(nu&&(nu=!1,Xr=n,ru=d),m=n.pendingLanes,m===0&&(Yr=null),ol(a.stateNode),Qt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(tu)throw tu=!1,n=Vh,Vh=null,n;return ru&1&&n.tag!==0&&eo(),m=n.pendingLanes,m&1?n===Oh?va++:(va=0,Oh=n):va=0,Hr(),null}function eo(){if(Xr!==null){var n=Ur(ru),r=_n.transition,a=Pe;try{if(_n.transition=null,Pe=16>n?16:n,Xr===null)var c=!1;else{if(n=Xr,Xr=null,ru=0,Oe&6)throw Error(t(331));var d=Oe;for(Oe|=4,ne=n.current;ne!==null;){var m=ne,_=m.child;if(ne.flags&16){var T=m.deletions;if(T!==null){for(var P=0;P<T.length;P++){var U=T[P];for(ne=U;ne!==null;){var H=ne;switch(H.tag){case 0:case 11:case 15:ga(8,H,m)}var K=H.child;if(K!==null)K.return=H,ne=K;else for(;ne!==null;){H=ne;var W=H.sibling,Z=H.return;if(hm(H),H===U){ne=null;break}if(W!==null){W.return=Z,ne=W;break}ne=Z}}}var se=m.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var nt=oe.sibling;oe.sibling=null,oe=nt}while(oe!==null)}}ne=m}}if(m.subtreeFlags&2064&&_!==null)_.return=m,ne=_;else e:for(;ne!==null;){if(m=ne,m.flags&2048)switch(m.tag){case 0:case 11:case 15:ga(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,ne=M;break e}ne=m.return}}var k=n.current;for(ne=k;ne!==null;){_=ne;var b=_.child;if(_.subtreeFlags&2064&&b!==null)b.return=_,ne=b;else e:for(_=k;ne!==null;){if(T=ne,T.flags&2048)try{switch(T.tag){case 0:case 11:case 15:Jl(9,T)}}catch(ae){et(T,T.return,ae)}if(T===_){ne=null;break e}var Y=T.sibling;if(Y!==null){Y.return=T.return,ne=Y;break e}ne=T.return}}if(Oe=d,Hr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Di,n)}catch{}c=!0}return c}finally{Pe=a,_n.transition=r}}return!1}function Cm(n,r,a){r=Ys(a,r),r=Wp(n,r,1),n=Kr(n,r,1),r=Bt(),n!==null&&(Mr(n,1,r),Qt(n,r))}function et(n,r,a){if(n.tag===3)Cm(n,n,a);else for(;r!==null;){if(r.tag===3){Cm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Yr===null||!Yr.has(c))){n=Ys(a,n),n=Hp(r,n,1),r=Kr(r,n,1),n=Bt(),r!==null&&(Mr(r,1,n),Qt(r,n));break}}r=r.return}}function m0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,vt===n&&(At&a)===a&&(ft===4||ft===3&&(At&130023424)===At&&500>$e()-Dh?Gi(n,0):Nh|=a),Qt(n,r)}function Pm(n,r){r===0&&(n.mode&1?(r=Is,Is<<=1,!(Is&130023424)&&(Is=4194304)):r=1);var a=Bt();n=gr(n,r),n!==null&&(Mr(n,r,a),Qt(n,a))}function g0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Pm(n,a)}function y0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Pm(n,a)}var km;km=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wt.current)Gt=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Gt=!1,i0(n,r,a);Gt=!!(n.flags&131072)}else Gt=!1,Qe&&r.flags&1048576&&lp(r,Ll,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Yl(n,r),n=r.pendingProps;var d=Bs(r,Dt.current);Ks(r,a),d=lh(null,r,c,n,d,a);var m=uh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(c)?(m=!0,Vl(r)):m=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,th(r),d.updater=Kl,r.stateNode=d,d._reactInternals=r,mh(r,c,n,a),r=vh(null,r,c,!0,m,a)):(r.tag=0,Qe&&m&&Wc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Yl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=v0(c),n=Vn(c,n),d){case 0:r=_h(null,r,c,n,a);break e;case 1:r=tm(null,r,c,n,a);break e;case 11:r=Yp(null,r,c,n,a);break e;case 14:r=Xp(null,r,c,Vn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),_h(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),tm(n,r,c,d,a);case 3:e:{if(nm(r),n===null)throw Error(t(387));c=r.pendingProps,m=r.memoizedState,d=m.element,yp(n,r),zl(r,c,null,a);var _=r.memoizedState;if(c=_.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){d=Ys(Error(t(423)),r),r=rm(n,r,c,a,d);break e}else if(c!==d){d=Ys(Error(t(424)),r),r=rm(n,r,c,a,d);break e}else for(on=$r(r.stateNode.containerInfo.firstChild),sn=r,Qe=!0,Dn=null,a=mp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ws(),c===d){r=_r(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return Ep(r),n===null&&Kc(r),c=r.type,d=r.pendingProps,m=n!==null?n.memoizedProps:null,_=d.children,Fc(c,d)?_=null:m!==null&&Fc(c,m)&&(r.flags|=32),em(n,r),zt(n,r,_,a),r.child;case 6:return n===null&&Kc(r),null;case 13:return im(n,r,a);case 4:return nh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Hs(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),Yp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,m=r.memoizedProps,_=d.value,qe(Ul,c._currentValue),c._currentValue=_,m!==null)if(Nn(m.value,_)){if(m.children===d.children&&!Wt.current){r=_r(n,r,a);break e}}else for(m=r.child,m!==null&&(m.return=r);m!==null;){var T=m.dependencies;if(T!==null){_=m.child;for(var P=T.firstContext;P!==null;){if(P.context===c){if(m.tag===1){P=yr(-1,a&-a),P.tag=2;var U=m.updateQueue;if(U!==null){U=U.shared;var H=U.pending;H===null?P.next=P:(P.next=H.next,H.next=P),U.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),Zc(m.return,a,r),T.lanes|=a;break}P=P.next}}else if(m.tag===10)_=m.type===r.type?null:m.child;else if(m.tag===18){if(_=m.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),Zc(_,a,r),_=m.sibling}else _=m.child;if(_!==null)_.return=m;else for(_=m;_!==null;){if(_===r){_=null;break}if(m=_.sibling,m!==null){m.return=_.return,_=m;break}_=_.return}m=_}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Ks(r,a),d=gn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=Vn(c,r.pendingProps),d=Vn(c.type,d),Xp(n,r,c,d,a);case 15:return Jp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),Yl(n,r),r.tag=1,Ht(c)?(n=!0,Vl(r)):n=!1,Ks(r,a),$p(r,c,d),mh(r,c,d,a),vh(null,r,c,!0,n,a);case 19:return om(n,r,a);case 22:return Zp(n,r,a)}throw Error(t(156,r.tag))};function Nm(n,r){return ws(n,r)}function _0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,r,a,c){return new _0(n,r,a,c)}function Fh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function v0(n){if(typeof n=="function")return Fh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===D)return 11;if(n===kt)return 14}return 2}function ei(n,r){var a=n.alternate;return a===null?(a=vn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function au(n,r,a,c,d,m){var _=2;if(c=n,typeof n=="function")Fh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return Qi(a.children,d,m,r);case I:_=8,d|=8;break;case A:return n=vn(12,a,r,d|2),n.elementType=A,n.lanes=m,n;case S:return n=vn(13,a,r,d),n.elementType=S,n.lanes=m,n;case Ye:return n=vn(19,a,r,d),n.elementType=Ye,n.lanes=m,n;case je:return lu(a,d,m,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:_=10;break e;case V:_=9;break e;case D:_=11;break e;case kt:_=14;break e;case Nt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=vn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=m,r}function Qi(n,r,a,c){return n=vn(7,n,c,r),n.lanes=a,n}function lu(n,r,a,c){return n=vn(22,n,c,r),n.elementType=je,n.lanes=a,n.stateNode={isHidden:!1},n}function jh(n,r,a){return n=vn(6,n,null,r),n.lanes=a,n}function zh(n,r,a){return r=vn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function E0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lr(0),this.expirationTimes=Lr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Bh(n,r,a,c,d,m,_,T,P){return n=new E0(n,r,a,T,P),r===1?(r=1,m===!0&&(r|=8)):r=0,m=vn(3,null,null,r),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},th(m),n}function w0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Dm(n){if(!n)return Wr;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return sp(n,a,r)}return r}function Vm(n,r,a,c,d,m,_,T,P){return n=Bh(a,c,!0,n,d,m,_,T,P),n.context=Dm(null),a=n.current,c=Bt(),d=Jr(a),m=yr(c,d),m.callback=r??null,Kr(a,m,d),n.current.lanes=d,Mr(n,d,c),Qt(n,c),n}function uu(n,r,a,c){var d=r.current,m=Bt(),_=Jr(d);return a=Dm(a),r.context===null?r.context=a:r.pendingContext=a,r=yr(m,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Kr(d,r,_),n!==null&&(Ln(n,d,_,m),jl(n,d,_)),_}function cu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Om(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function $h(n,r){Om(n,r),(n=n.alternate)&&Om(n,r)}function T0(){return null}var xm=typeof reportError=="function"?reportError:function(n){console.error(n)};function qh(n){this._internalRoot=n}hu.prototype.render=qh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));uu(n,r,null,null)},hu.prototype.unmount=qh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Hi(function(){uu(null,n,null,null)}),r[dr]=null}};function hu(n){this._internalRoot=n}hu.prototype.unstable_scheduleHydration=function(n){if(n){var r=hl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<$n.length&&r!==0&&r<$n[a].priority;a++);$n.splice(a,0,n),a===0&&pl(n)}};function Wh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Lm(){}function I0(n,r,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var U=cu(_);m.call(U)}}var _=Vm(r,c,n,0,null,!1,!1,"",Lm);return n._reactRootContainer=_,n[dr]=_.current,ra(n.nodeType===8?n.parentNode:n),Hi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var U=cu(P);T.call(U)}}var P=Bh(n,0,!1,null,null,!1,!1,"",Lm);return n._reactRootContainer=P,n[dr]=P.current,ra(n.nodeType===8?n.parentNode:n),Hi(function(){uu(r,P,a,c)}),P}function fu(n,r,a,c,d){var m=a._reactRootContainer;if(m){var _=m;if(typeof d=="function"){var T=d;d=function(){var P=cu(_);T.call(P)}}uu(r,_,n,d)}else _=I0(a,r,n,d,c);return cu(_)}ul=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=xr(r.pendingLanes);a!==0&&(br(r,a|1),Qt(r,$e()),!(Oe&6)&&(Zs=$e()+500,Hr()))}break;case 13:Hi(function(){var c=gr(n,1);if(c!==null){var d=Bt();Ln(c,n,1,d)}}),$h(n,1)}},Ss=function(n){if(n.tag===13){var r=gr(n,134217728);if(r!==null){var a=Bt();Ln(r,n,134217728,a)}$h(n,134217728)}},cl=function(n){if(n.tag===13){var r=Jr(n),a=gr(n,r);if(a!==null){var c=Bt();Ln(a,n,r,c)}$h(n,r)}},hl=function(){return Pe},dl=function(n,r){var a=Pe;try{return Pe=n,r()}finally{Pe=a}},ms=function(n,r,a){switch(r){case"input":if(Po(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Nl(c);if(!d)throw Error(t(90));us(c),Po(c,d)}}}break;case"textarea":fs(n,a);break;case"select":r=a.value,r!=null&&ir(n,!!a.multiple,r,!1)}},Ri=Mh,Uo=Hi;var S0={usingClientEntryPoint:!1,Events:[oa,js,Nl,zn,bo,Mh]},Ea={findFiberByHostInstance:Ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A0={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zo(n),n===null?null:n.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||T0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Di=pu.inject(A0),en=pu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S0,Yt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(r))throw Error(t(200));return w0(n,r,null,a)},Yt.createRoot=function(n,r){if(!Wh(n))throw Error(t(299));var a=!1,c="",d=xm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Bh(n,1,!1,null,null,a,!1,c,d),n[dr]=r.current,ra(n.nodeType===8?n.parentNode:n),new qh(r)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=zo(r),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Hi(n)},Yt.hydrate=function(n,r,a){if(!du(r))throw Error(t(200));return fu(null,n,r,!0,a)},Yt.hydrateRoot=function(n,r,a){if(!Wh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",_=xm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Vm(r,null,n,1,a??null,d,!1,m,_),n[dr]=r.current,ra(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new hu(r)},Yt.render=function(n,r,a){if(!du(r))throw Error(t(200));return fu(null,n,r,!1,a)},Yt.unmountComponentAtNode=function(n){if(!du(n))throw Error(t(40));return n._reactRootContainer?(Hi(function(){fu(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Mh,Yt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!du(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fu(n,r,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var $m;function O0(){if($m)return Kh.exports;$m=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Kh.exports=V0(),Kh.exports}var qm;function x0(){if(qm)return mu;qm=1;var i=O0();return mu.createRoot=i.createRoot,mu.hydrateRoot=i.hydrateRoot,mu}var L0=x0(),Wm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},M0=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],f=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},dy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,f=h?i[o+1]:0,g=o+2<i.length,v=g?i[o+2]:0,w=u>>2,C=(u&3)<<4|f>>4;let x=(f&15)<<2|v>>6,j=v&63;g||(j=64,h||(x=64)),s.push(t[w],t[C],t[x],t[j])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(hy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):M0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],f=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const C=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||f==null||v==null||C==null)throw new b0;const x=u<<2|f>>4;if(s.push(x),v!==64){const j=f<<4&240|v>>2;if(s.push(j),C!==64){const G=v<<6&192|C;s.push(G)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class b0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const U0=function(i){const e=hy(i);return dy.encodeByteArray(e,!0)},Ou=function(i){return U0(i).replace(/\./g,"")},fy=function(i){try{return dy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=()=>F0().__FIREBASE_DEFAULTS__,z0=()=>{if(typeof process>"u"||typeof Wm>"u")return;const i=Wm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},B0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&fy(i[1]);return e&&JSON.parse(e)},Qu=()=>{try{return j0()||z0()||B0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},py=i=>{var e,t;return(t=(e=Qu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},$0=i=>{const e=py(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},my=()=>{var i;return(i=Qu())===null||i===void 0?void 0:i.config},gy=i=>{var e;return(e=Qu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Ou(JSON.stringify(t)),Ou(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function H0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function G0(){var i;const e=(i=Qu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function K0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Q0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Y0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function X0(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function J0(){return!G0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Z0(){try{return typeof indexedDB=="object"}catch{return!1}}function eE(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="FirebaseError";class kr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=tE,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?nE(u,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new kr(o,f,s)}}function nE(i,e){return i.replace(rE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const rE=/\{\$([^}]+)}/g;function iE(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function xu(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Hm(u)&&Hm(h)){if(!xu(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Hm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ta(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ia(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function sE(i,e){const t=new oE(i,e);return t.subscribe.bind(t)}class oE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");aE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Xh),o.error===void 0&&(o.error=Xh),o.complete===void 0&&(o.complete=Xh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aE(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Xh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(i){return i&&i._delegate?i._delegate:i}class ts{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new q0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cE(e))try{this.getOrInitializeService({instanceIdentifier:Yi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yi){return this.instances.has(e)}getOptions(e=Yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yi){return this.component?this.component.multipleInstances?e:Yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uE(i){return i===Yi?void 0:i}function cE(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Re||(Re={}));const dE={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},fE=Re.INFO,pE={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},mE=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=pE[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xd{constructor(e){this.name=e,this._logLevel=fE,this._logHandler=mE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const gE=(i,e)=>e.some(t=>i instanceof t);let Gm,Km;function yE(){return Gm||(Gm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _E(){return Km||(Km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yy=new WeakMap,ld=new WeakMap,_y=new WeakMap,Jh=new WeakMap,Ld=new WeakMap;function vE(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ai(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&yy.set(t,i)}).catch(()=>{}),Ld.set(e,i),e}function EE(i){if(ld.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});ld.set(i,e)}let ud={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return ld.get(i);if(e==="objectStoreNames")return i.objectStoreNames||_y.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ai(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function wE(i){ud=i(ud)}function TE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Zh(this),e,...t);return _y.set(s,e.sort?e.sort():[e]),ai(s)}:_E().includes(i)?function(...e){return i.apply(Zh(this),e),ai(yy.get(this))}:function(...e){return ai(i.apply(Zh(this),e))}}function IE(i){return typeof i=="function"?TE(i):(i instanceof IDBTransaction&&EE(i),gE(i,yE())?new Proxy(i,ud):i)}function ai(i){if(i instanceof IDBRequest)return vE(i);if(Jh.has(i))return Jh.get(i);const e=IE(i);return e!==i&&(Jh.set(i,e),Ld.set(e,i)),e}const Zh=i=>Ld.get(i);function SE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),f=ai(h);return s&&h.addEventListener("upgradeneeded",g=>{s(ai(h.result),g.oldVersion,g.newVersion,ai(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}const AE=["get","getKey","getAll","getAllKeys","count"],RE=["put","add","delete","clear"],ed=new Map;function Qm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(ed.get(e))return ed.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=RE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||AE.includes(t)))return;const u=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),o&&g.done]))[0]};return ed.set(e,u),u}wE(i=>({...i,get:(e,t,s)=>Qm(e,t)||i.get(e,t,s),has:(e,t)=>!!Qm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(PE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function PE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cd="@firebase/app",Ym="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new xd("@firebase/app"),kE="@firebase/app-compat",NE="@firebase/analytics-compat",DE="@firebase/analytics",VE="@firebase/app-check-compat",OE="@firebase/app-check",xE="@firebase/auth",LE="@firebase/auth-compat",ME="@firebase/database",bE="@firebase/data-connect",UE="@firebase/database-compat",FE="@firebase/functions",jE="@firebase/functions-compat",zE="@firebase/installations",BE="@firebase/installations-compat",$E="@firebase/messaging",qE="@firebase/messaging-compat",WE="@firebase/performance",HE="@firebase/performance-compat",GE="@firebase/remote-config",KE="@firebase/remote-config-compat",QE="@firebase/storage",YE="@firebase/storage-compat",XE="@firebase/firestore",JE="@firebase/vertexai",ZE="@firebase/firestore-compat",ew="firebase",tw="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="[DEFAULT]",nw={[cd]:"fire-core",[kE]:"fire-core-compat",[DE]:"fire-analytics",[NE]:"fire-analytics-compat",[OE]:"fire-app-check",[VE]:"fire-app-check-compat",[xE]:"fire-auth",[LE]:"fire-auth-compat",[ME]:"fire-rtdb",[bE]:"fire-data-connect",[UE]:"fire-rtdb-compat",[FE]:"fire-fn",[jE]:"fire-fn-compat",[zE]:"fire-iid",[BE]:"fire-iid-compat",[$E]:"fire-fcm",[qE]:"fire-fcm-compat",[WE]:"fire-perf",[HE]:"fire-perf-compat",[GE]:"fire-rc",[KE]:"fire-rc-compat",[QE]:"fire-gcs",[YE]:"fire-gcs-compat",[XE]:"fire-fst",[ZE]:"fire-fst-compat",[JE]:"fire-vertex","fire-js":"fire-js",[ew]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new Map,rw=new Map,dd=new Map;function Xm(i,e){try{i.container.addComponent(e)}catch(t){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function uo(i){const e=i.name;if(dd.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;dd.set(e,i);for(const t of Lu.values())Xm(t,i);for(const t of rw.values())Xm(t,i);return!0}function Md(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Mn(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},li=new $a("app","Firebase",iw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw li.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=tw;function vy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:hd,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw li.create("bad-app-name",{appName:String(o)});if(t||(t=my()),!t)throw li.create("no-options");const u=Lu.get(o);if(u){if(xu(t,u.options)&&xu(s,u.config))return u;throw li.create("duplicate-app",{appName:o})}const h=new hE(o);for(const g of dd.values())h.addComponent(g);const f=new sw(t,s,h);return Lu.set(o,f),f}function Ey(i=hd){const e=Lu.get(i);if(!e&&i===hd&&my())return vy();if(!e)throw li.create("no-app",{appName:i});return e}function ui(i,e,t){var s;let o=(s=nw[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const f=[`Unable to register library "${o}" with version "${e}":`];u&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(f.join(" "));return}uo(new ts(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="firebase-heartbeat-database",aw=1,Oa="firebase-heartbeat-store";let td=null;function wy(){return td||(td=SE(ow,aw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Oa)}catch(t){console.warn(t)}}}}).catch(i=>{throw li.create("idb-open",{originalErrorMessage:i.message})})),td}async function lw(i){try{const t=(await wy()).transaction(Oa),s=await t.objectStore(Oa).get(Ty(i));return await t.done,s}catch(e){if(e instanceof kr)Ar.warn(e.message);else{const t=li.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(t.message)}}}async function Jm(i,e){try{const s=(await wy()).transaction(Oa,"readwrite");await s.objectStore(Oa).put(e,Ty(i)),await s.done}catch(t){if(t instanceof kr)Ar.warn(t.message);else{const s=li.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ar.warn(s.message)}}}function Ty(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=1024,cw=30*24*60*60*1e3;class hw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fw(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Zm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=cw}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Ar.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zm(),{heartbeatsToSend:s,unsentEntries:o}=dw(this._heartbeatsCache.heartbeats),u=Ou(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ar.warn(t),""}}}function Zm(){return new Date().toISOString().substring(0,10)}function dw(i,e=uw){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),eg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),eg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class fw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z0()?eE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Jm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Jm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function eg(i){return Ou(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(i){uo(new ts("platform-logger",e=>new CE(e),"PRIVATE")),uo(new ts("heartbeat",e=>new hw(e),"PRIVATE")),ui(cd,Ym,i),ui(cd,Ym,"esm2017"),ui("fire-js","")}pw("");var mw="firebase",gw="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ui(mw,gw,"app");var tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zi,Iy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(R,V,D){for(var S=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)S[Ye-2]=arguments[Ye];return I.prototype[V].apply(R,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var R=Array(16);if(typeof I=="string")for(var V=0;16>V;++V)R[V]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(V=0;16>V;++V)R[V]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],V=N.g[2];var D=N.g[3],S=I+(D^A&(V^D))+R[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=D+(V^I&(A^V))+R[1]+3905402710&4294967295,D=I+(S<<12&4294967295|S>>>20),S=V+(A^D&(I^A))+R[2]+606105819&4294967295,V=D+(S<<17&4294967295|S>>>15),S=A+(I^V&(D^I))+R[3]+3250441966&4294967295,A=V+(S<<22&4294967295|S>>>10),S=I+(D^A&(V^D))+R[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=D+(V^I&(A^V))+R[5]+1200080426&4294967295,D=I+(S<<12&4294967295|S>>>20),S=V+(A^D&(I^A))+R[6]+2821735955&4294967295,V=D+(S<<17&4294967295|S>>>15),S=A+(I^V&(D^I))+R[7]+4249261313&4294967295,A=V+(S<<22&4294967295|S>>>10),S=I+(D^A&(V^D))+R[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=D+(V^I&(A^V))+R[9]+2336552879&4294967295,D=I+(S<<12&4294967295|S>>>20),S=V+(A^D&(I^A))+R[10]+4294925233&4294967295,V=D+(S<<17&4294967295|S>>>15),S=A+(I^V&(D^I))+R[11]+2304563134&4294967295,A=V+(S<<22&4294967295|S>>>10),S=I+(D^A&(V^D))+R[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=D+(V^I&(A^V))+R[13]+4254626195&4294967295,D=I+(S<<12&4294967295|S>>>20),S=V+(A^D&(I^A))+R[14]+2792965006&4294967295,V=D+(S<<17&4294967295|S>>>15),S=A+(I^V&(D^I))+R[15]+1236535329&4294967295,A=V+(S<<22&4294967295|S>>>10),S=I+(V^D&(A^V))+R[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=D+(A^V&(I^A))+R[6]+3225465664&4294967295,D=I+(S<<9&4294967295|S>>>23),S=V+(I^A&(D^I))+R[11]+643717713&4294967295,V=D+(S<<14&4294967295|S>>>18),S=A+(D^I&(V^D))+R[0]+3921069994&4294967295,A=V+(S<<20&4294967295|S>>>12),S=I+(V^D&(A^V))+R[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=D+(A^V&(I^A))+R[10]+38016083&4294967295,D=I+(S<<9&4294967295|S>>>23),S=V+(I^A&(D^I))+R[15]+3634488961&4294967295,V=D+(S<<14&4294967295|S>>>18),S=A+(D^I&(V^D))+R[4]+3889429448&4294967295,A=V+(S<<20&4294967295|S>>>12),S=I+(V^D&(A^V))+R[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=D+(A^V&(I^A))+R[14]+3275163606&4294967295,D=I+(S<<9&4294967295|S>>>23),S=V+(I^A&(D^I))+R[3]+4107603335&4294967295,V=D+(S<<14&4294967295|S>>>18),S=A+(D^I&(V^D))+R[8]+1163531501&4294967295,A=V+(S<<20&4294967295|S>>>12),S=I+(V^D&(A^V))+R[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=D+(A^V&(I^A))+R[2]+4243563512&4294967295,D=I+(S<<9&4294967295|S>>>23),S=V+(I^A&(D^I))+R[7]+1735328473&4294967295,V=D+(S<<14&4294967295|S>>>18),S=A+(D^I&(V^D))+R[12]+2368359562&4294967295,A=V+(S<<20&4294967295|S>>>12),S=I+(A^V^D)+R[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=D+(I^A^V)+R[8]+2272392833&4294967295,D=I+(S<<11&4294967295|S>>>21),S=V+(D^I^A)+R[11]+1839030562&4294967295,V=D+(S<<16&4294967295|S>>>16),S=A+(V^D^I)+R[14]+4259657740&4294967295,A=V+(S<<23&4294967295|S>>>9),S=I+(A^V^D)+R[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=D+(I^A^V)+R[4]+1272893353&4294967295,D=I+(S<<11&4294967295|S>>>21),S=V+(D^I^A)+R[7]+4139469664&4294967295,V=D+(S<<16&4294967295|S>>>16),S=A+(V^D^I)+R[10]+3200236656&4294967295,A=V+(S<<23&4294967295|S>>>9),S=I+(A^V^D)+R[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=D+(I^A^V)+R[0]+3936430074&4294967295,D=I+(S<<11&4294967295|S>>>21),S=V+(D^I^A)+R[3]+3572445317&4294967295,V=D+(S<<16&4294967295|S>>>16),S=A+(V^D^I)+R[6]+76029189&4294967295,A=V+(S<<23&4294967295|S>>>9),S=I+(A^V^D)+R[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=D+(I^A^V)+R[12]+3873151461&4294967295,D=I+(S<<11&4294967295|S>>>21),S=V+(D^I^A)+R[15]+530742520&4294967295,V=D+(S<<16&4294967295|S>>>16),S=A+(V^D^I)+R[2]+3299628645&4294967295,A=V+(S<<23&4294967295|S>>>9),S=I+(V^(A|~D))+R[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=D+(A^(I|~V))+R[7]+1126891415&4294967295,D=I+(S<<10&4294967295|S>>>22),S=V+(I^(D|~A))+R[14]+2878612391&4294967295,V=D+(S<<15&4294967295|S>>>17),S=A+(D^(V|~I))+R[5]+4237533241&4294967295,A=V+(S<<21&4294967295|S>>>11),S=I+(V^(A|~D))+R[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=D+(A^(I|~V))+R[3]+2399980690&4294967295,D=I+(S<<10&4294967295|S>>>22),S=V+(I^(D|~A))+R[10]+4293915773&4294967295,V=D+(S<<15&4294967295|S>>>17),S=A+(D^(V|~I))+R[1]+2240044497&4294967295,A=V+(S<<21&4294967295|S>>>11),S=I+(V^(A|~D))+R[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=D+(A^(I|~V))+R[15]+4264355552&4294967295,D=I+(S<<10&4294967295|S>>>22),S=V+(I^(D|~A))+R[6]+2734768916&4294967295,V=D+(S<<15&4294967295|S>>>17),S=A+(D^(V|~I))+R[13]+1309151649&4294967295,A=V+(S<<21&4294967295|S>>>11),S=I+(V^(A|~D))+R[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=D+(A^(I|~V))+R[11]+3174756917&4294967295,D=I+(S<<10&4294967295|S>>>22),S=V+(I^(D|~A))+R[2]+718787259&4294967295,V=D+(S<<15&4294967295|S>>>17),S=A+(D^(V|~I))+R[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(V+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+V&4294967295,N.g[3]=N.g[3]+D&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,R=this.B,V=this.h,D=0;D<I;){if(V==0)for(;D<=A;)o(this,N,D),D+=this.blockSize;if(typeof N=="string"){for(;D<I;)if(R[V++]=N.charCodeAt(D++),V==this.blockSize){o(this,R),V=0;break}}else for(;D<I;)if(R[V++]=N[D++],V==this.blockSize){o(this,R),V=0;break}}this.h=V,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var R=0;32>R;R+=8)N[A++]=this.g[I]>>>R&255;return N};function u(N,I){var A=f;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function h(N,I){this.h=I;for(var A=[],R=!0,V=N.length-1;0<=V;V--){var D=N[V]|0;R&&D==I||(A[V]=D,R=!1)}this.g=A}var f={};function g(N){return-128<=N&&128>N?u(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return C;if(0>N)return $(v(-N));for(var I=[],A=1,R=0;N>=A;R++)I[R]=N/A|0,A*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return $(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),R=C,V=0;V<N.length;V+=8){var D=Math.min(8,N.length-V),S=parseInt(N.substring(V,V+D),I);8>D?(D=v(Math.pow(I,D)),R=R.j(D).add(v(S))):(R=R.j(A),R=R.add(v(S)))}return R}var C=g(0),x=g(1),j=g(16777216);i=h.prototype,i.m=function(){if(Q(this))return-$(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var R=this.i(A);N+=(0<=R?R:4294967296+R)*I,I*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(G(this))return"0";if(Q(this))return"-"+$(this).toString(N);for(var I=v(Math.pow(N,6)),A=this,R="";;){var V=we(A,I).g;A=fe(A,V.j(I));var D=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=V,G(A))return D+R;for(;6>D.length;)D="0"+D;R=D+R}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function G(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function Q(N){return N.h==-1}i.l=function(N){return N=fe(this,N),Q(N)?-1:G(N)?0:1};function $(N){for(var I=N.g.length,A=[],R=0;R<I;R++)A[R]=~N.g[R];return new h(A,~N.h).add(x)}i.abs=function(){return Q(this)?$(this):this},i.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],R=0,V=0;V<=I;V++){var D=R+(this.i(V)&65535)+(N.i(V)&65535),S=(D>>>16)+(this.i(V)>>>16)+(N.i(V)>>>16);R=S>>>16,D&=65535,S&=65535,A[V]=S<<16|D}return new h(A,A[A.length-1]&-2147483648?-1:0)};function fe(N,I){return N.add($(I))}i.j=function(N){if(G(this)||G(N))return C;if(Q(this))return Q(N)?$(this).j($(N)):$($(this).j(N));if(Q(N))return $(this.j($(N)));if(0>this.l(j)&&0>N.l(j))return v(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],R=0;R<2*I;R++)A[R]=0;for(R=0;R<this.g.length;R++)for(var V=0;V<N.g.length;V++){var D=this.i(R)>>>16,S=this.i(R)&65535,Ye=N.i(V)>>>16,kt=N.i(V)&65535;A[2*R+2*V]+=S*kt,pe(A,2*R+2*V),A[2*R+2*V+1]+=D*kt,pe(A,2*R+2*V+1),A[2*R+2*V+1]+=S*Ye,pe(A,2*R+2*V+1),A[2*R+2*V+2]+=D*Ye,pe(A,2*R+2*V+2)}for(R=0;R<I;R++)A[R]=A[2*R+1]<<16|A[2*R];for(R=I;R<2*I;R++)A[R]=0;return new h(A,0)};function pe(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function ge(N,I){this.g=N,this.h=I}function we(N,I){if(G(I))throw Error("division by zero");if(G(N))return new ge(C,C);if(Q(N))return I=we($(N),I),new ge($(I.g),$(I.h));if(Q(I))return I=we(N,$(I)),new ge($(I.g),I.h);if(30<N.g.length){if(Q(N)||Q(I))throw Error("slowDivide_ only works with positive integers.");for(var A=x,R=I;0>=R.l(N);)A=Fe(A),R=Fe(R);var V=Te(A,1),D=Te(R,1);for(R=Te(R,2),A=Te(A,2);!G(R);){var S=D.add(R);0>=S.l(N)&&(V=V.add(A),D=S),R=Te(R,1),A=Te(A,1)}return I=fe(N,V.j(I)),new ge(V,I)}for(V=C;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),R=Math.ceil(Math.log(A)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),D=v(A),S=D.j(I);Q(S)||0<S.l(N);)A-=R,D=v(A),S=D.j(I);G(D)&&(D=x),V=V.add(D),N=fe(N,S)}return new ge(V,N)}i.A=function(N){return we(this,N).h},i.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],R=0;R<I;R++)A[R]=this.i(R)&N.i(R);return new h(A,this.h&N.h)},i.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],R=0;R<I;R++)A[R]=this.i(R)|N.i(R);return new h(A,this.h|N.h)},i.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],R=0;R<I;R++)A[R]=this.i(R)^N.i(R);return new h(A,this.h^N.h)};function Fe(N){for(var I=N.g.length+1,A=[],R=0;R<I;R++)A[R]=N.i(R)<<1|N.i(R-1)>>>31;return new h(A,N.h)}function Te(N,I){var A=I>>5;I%=32;for(var R=N.g.length-A,V=[],D=0;D<R;D++)V[D]=0<I?N.i(D+A)>>>I|N.i(D+A+1)<<32-I:N.i(D+A);return new h(V,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Iy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,Zi=h}).apply(typeof tg<"u"?tg:typeof self<"u"?self:typeof window<"u"?window:{});var gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sy,Sa,Ay,Iu,fd,Ry,Cy,Py;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,p,y){return l==Array.prototype||l==Object.prototype||(l[p]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof gu=="object"&&gu];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in y))break e;y=y[L]}l=l[l.length-1],E=y[l],p=p(E),p!=E&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}function u(l,p){l instanceof String&&(l+="");var y=0,E=!1,L={next:function(){if(!E&&y<l.length){var F=y++;return{value:p(F,l[F]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(l){var p=typeof l;return p=p!="object"?p:l?Array.isArray(l)?"array":p:"null",p=="array"||p=="object"&&typeof l.length=="number"}function v(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function w(l,p,y){return l.call.apply(l.bind,arguments)}function C(l,p,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(p,L)}}return function(){return l.apply(p,arguments)}}function x(l,p,y){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:C,x.apply(null,arguments)}function j(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function G(l,p){function y(){}y.prototype=p.prototype,l.aa=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,L,F){for(var X=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)X[Ue-2]=arguments[Ue];return p.prototype[L].apply(E,X)}}function Q(l){const p=l.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=l[E];return y}return[]}function $(l,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=l.length||0,F=E.length||0;l.length=L+F;for(let X=0;X<F;X++)l[L+X]=E[X]}else l.push(E)}}class fe{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function pe(l){return/^[\s\xa0]*$/.test(l)}function ge(){var l=f.navigator;return l&&(l=l.userAgent)?l:""}function we(l){return we[" "](l),l}we[" "]=function(){};var Fe=ge().indexOf("Gecko")!=-1&&!(ge().toLowerCase().indexOf("webkit")!=-1&&ge().indexOf("Edge")==-1)&&!(ge().indexOf("Trident")!=-1||ge().indexOf("MSIE")!=-1)&&ge().indexOf("Edge")==-1;function Te(l,p,y){for(const E in l)p.call(y,l[E],E,l)}function N(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function I(l){const p={};for(const y in l)p[y]=l[y];return p}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,p){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)l[y]=E[y];for(let F=0;F<A.length;F++)y=A[F],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function V(l){var p=1;l=l.split(":");const y=[];for(;0<p&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function D(l){f.setTimeout(()=>{throw l},0)}function S(){var l=ce;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class Ye{constructor(){this.h=this.g=null}add(p,y){const E=kt.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var kt=new fe(()=>new Nt,l=>l.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let je,J=!1,ce=new Ye,ee=()=>{const l=f.Promise.resolve(void 0);je=()=>{l.then(O)}};var O=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(y){D(y)}var p=kt;p.j(l),100>p.h&&(p.h++,l.next=p.g,p.g=l)}J=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return l}();function Se(l,p){if(le.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget){if(Fe){e:{try{we(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Se.aa.h.call(this)}}G(Se,le);var Ne={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(l,p,y,E,L){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=L,this.key=++Me,this.da=this.fa=!1}function gt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function nr(l){this.src=l,this.g={},this.h=0}nr.prototype.add=function(l,p,y,E,L){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var X=Dr(l,p,E,L);return-1<X?(p=l[X],y||(p.fa=!1)):(p=new Be(p,this.src,F,!!E,L),p.fa=y,l.push(p)),p};function us(l,p){var y=p.type;if(y in l.g){var E=l.g[y],L=Array.prototype.indexOf.call(E,p,void 0),F;(F=0<=L)&&Array.prototype.splice.call(E,L,1),F&&(gt(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Dr(l,p,y,E){for(var L=0;L<l.length;++L){var F=l[L];if(!F.da&&F.listener==p&&F.capture==!!y&&F.ha==E)return L}return-1}var Ti="closure_lm_"+(1e6*Math.random()|0),cs={};function Co(l,p,y,E,L){if(Array.isArray(p)){for(var F=0;F<p.length;F++)Co(l,p[F],y,E,L);return null}return y=No(y),l&&l[Le]?l.K(p,y,v(E)?!!E.capture:!!E,L):Po(l,p,y,!1,E,L)}function Po(l,p,y,E,L,F){if(!p)throw Error("Invalid event type");var X=v(L)?!!L.capture:!!L,Ue=ds(l);if(Ue||(l[Ti]=Ue=new nr(l)),y=Ue.add(p,y,E,X,F),y.proxy)return y;if(E=el(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Ie||(L=X),L===void 0&&(L=!1),l.addEventListener(p.toString(),E,L);else if(l.attachEvent)l.attachEvent(ir(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function el(){function l(y){return p.call(l.src,l.listener,y)}const p=ko;return l}function hs(l,p,y,E,L){if(Array.isArray(p))for(var F=0;F<p.length;F++)hs(l,p[F],y,E,L);else E=v(E)?!!E.capture:!!E,y=No(y),l&&l[Le]?(l=l.i,p=String(p).toString(),p in l.g&&(F=l.g[p],y=Dr(F,y,E,L),-1<y&&(gt(F[y]),Array.prototype.splice.call(F,y,1),F.length==0&&(delete l.g[p],l.h--)))):l&&(l=ds(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Dr(p,y,E,L)),(y=-1<l?p[l]:null)&&rr(y))}function rr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[Le])us(p.i,l);else{var y=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(y,E,l.capture):p.detachEvent?p.detachEvent(ir(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=ds(p))?(us(y,l),y.h==0&&(y.src=null,p[Ti]=null)):gt(l)}}}function ir(l){return l in cs?cs[l]:cs[l]="on"+l}function ko(l,p){if(l.da)l=!0;else{p=new Se(p,this);var y=l.listener,E=l.ha||l.src;l.fa&&rr(l),l=y.call(E,p)}return l}function ds(l){return l=l[Ti],l instanceof nr?l:null}var fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function No(l){return typeof l=="function"?l:(l[fs]||(l[fs]=function(p){return l.handleEvent(p)}),l[fs])}function ut(){B.call(this),this.i=new nr(this),this.M=this,this.F=null}G(ut,B),ut.prototype[Le]=!0,ut.prototype.removeEventListener=function(l,p,y,E){hs(this,l,p,y,E)};function ct(l,p){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new le(p,l);else if(p instanceof le)p.target=p.target||l;else{var L=p;p=new le(E,l),R(p,L)}if(L=!0,y)for(var F=y.length-1;0<=F;F--){var X=p.g=y[F];L=sr(X,E,!0,p)&&L}if(X=p.g=l,L=sr(X,E,!0,p)&&L,L=sr(X,E,!1,p)&&L,y)for(F=0;F<y.length;F++)X=p.g=y[F],L=sr(X,E,!1,p)&&L}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var l=this.i,p;for(p in l.g){for(var y=l.g[p],E=0;E<y.length;E++)gt(y[E]);delete l.g[p],l.h--}}this.F=null},ut.prototype.K=function(l,p,y,E){return this.i.add(String(l),p,!1,y,E)},ut.prototype.L=function(l,p,y,E){return this.i.add(String(l),p,!0,y,E)};function sr(l,p,y,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,F=0;F<p.length;++F){var X=p[F];if(X&&!X.da&&X.capture==y){var Ue=X.listener,ht=X.ha||X.src;X.fa&&us(l.i,X),L=Ue.call(ht,E)!==!1&&L}}return L&&!E.defaultPrevented}function Do(l,p,y){if(typeof l=="function")y&&(l=x(l,y));else if(l&&typeof l.handleEvent=="function")l=x(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(l,p||0)}function Vr(l){l.g=Do(()=>{l.g=null,l.i&&(l.i=!1,Vr(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class Ii extends B{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Vr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(l){B.call(this),this.h=l,this.g={}}G(Si,B);var Vo=[];function Oo(l){Te(l.g,function(p,y){this.g.hasOwnProperty(y)&&rr(p)},l),l.g={}}Si.prototype.N=function(){Si.aa.N.call(this),Oo(this)},Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xo=f.JSON.stringify,Lo=f.JSON.parse,Mo=class{stringify(l){return f.JSON.stringify(l,void 0)}parse(l){return f.JSON.parse(l,void 0)}};function Ai(){}Ai.prototype.h=null;function ps(l){return l.h||(l.h=l.i())}function ms(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jn(){le.call(this,"d")}G(jn,le);function gs(){le.call(this,"c")}G(gs,le);var zn={},bo=null;function Ri(){return bo=bo||new ut}zn.La="serverreachability";function Uo(l){le.call(this,zn.La,l)}G(Uo,le);function or(l){const p=Ri();ct(p,new Uo(p))}zn.STAT_EVENT="statevent";function Fo(l,p){le.call(this,zn.STAT_EVENT,l),this.stat=p}G(Fo,le);function tt(l){const p=Ri();ct(p,new Fo(p,l))}zn.Ma="timingevent";function ys(l,p){le.call(this,zn.Ma,l),this.size=p}G(ys,le);function wn(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){l()},p)}function Ci(){this.g=!0}Ci.prototype.xa=function(){this.g=!1};function Pi(l,p,y,E,L,F){l.info(function(){if(l.g)if(F)for(var X="",Ue=F.split("&"),ht=0;ht<Ue.length;ht++){var De=Ue[ht].split("=");if(1<De.length){var yt=De[0];De=De[1];var it=yt.split("_");X=2<=it.length&&it[1]=="type"?X+(yt+"="+De+"&"):X+(yt+"=redacted&")}}else X=null;else X=F;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+p+`
`+y+`
`+X})}function _s(l,p,y,E,L,F,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+p+`
`+y+`
`+F+" "+X})}function Tn(l,p,y,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ec(l,y)+(E?" "+E:"")})}function jo(l,p){l.info(function(){return"TIMEOUT: "+p})}Ci.prototype.info=function(){};function Ec(l,p){if(!l.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var X=1;X<L.length;X++)L[X]=""}}}}return xo(y)}catch{return p}}var vs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},In;function ki(){}G(ki,Ai),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},In=new ki;function Sn(l,p,y,E){this.j=l,this.i=p,this.l=y,this.R=E||1,this.U=new Si(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nl}function nl(){this.i=null,this.g="",this.h=!1}var zo={},Es={};function ws(l,p,y){l.L=1,l.v=br(tn(p)),l.m=y,l.P=!0,Bo(l,null)}function Bo(l,p){l.F=Date.now(),$e(l),l.A=tn(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Fr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new nl,l.g=El(l.j,y?p:null,!l.m),0<l.O&&(l.M=new Ii(x(l.Y,l,l.g),l.O)),p=l.U,y=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Vo[0]=L.toString()),L=Vo);for(var F=0;F<L.length;F++){var X=Co(y,L[F],E||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,p)):(l.u="GET",l.g.ea(l.A,l.u,null,p)),or(),Pi(l.i,l.u,l.A,l.l,l.R,l.m)}Sn.prototype.ca=function(l){l=l.target;const p=this.M;p&&qt(l)==3?p.j():this.Y(l)},Sn.prototype.Y=function(l){try{if(l==this.g)e:{const it=qt(this.g);var p=this.g.Ba();const fn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Ko(this.g)))){this.J||it!=4||p==7||(p==8||0>=fn?or(3):or(2)),Ni(this);var y=this.g.Z();this.X=y;t:if(rl(this)){var E=Ko(this.g);l="";var L=E.length,F=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Or(this);var X="";break t}this.h.i=new f.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,l+=this.h.i.decode(E[p],{stream:!(F&&p==L-1)});E.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=y==200,_s(this.i,this.u,this.A,this.l,this.R,it,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,ht=this.g;if((Ue=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pe(Ue)){var De=Ue;break t}}De=null}if(y=De)Tn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$o(this,y);else{this.o=!1,this.s=3,tt(12),hn(this),Or(this);break e}}if(this.P){y=!0;let rn;for(;!this.J&&this.C<X.length;)if(rn=wc(this,X),rn==Es){it==4&&(this.s=4,tt(14),y=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==zo){this.s=4,tt(15),Tn(this.i,this.l,X,"[Invalid Chunk]"),y=!1;break}else Tn(this.i,this.l,rn,null),$o(this,rn);if(rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||X.length!=0||this.h.h||(this.s=1,tt(16),y=!1),this.o=this.o&&y,!y)Tn(this.i,this.l,X,"[Invalid Chunked Response]"),hn(this),Or(this);else if(0<X.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Yo(yt),yt.M=!0,tt(11))}}else Tn(this.i,this.l,X,null),$o(this,X);it==4&&hn(this),this.o&&!this.J&&(it==4?Vs(this.j,this):(this.o=!1,$e(this)))}else Cs(this.g),y==400&&0<X.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),hn(this),Or(this)}}}catch{}finally{}};function rl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function wc(l,p){var y=l.C,E=p.indexOf(`
`,y);return E==-1?Es:(y=Number(p.substring(y,E)),isNaN(y)?zo:(E+=1,E+y>p.length?Es:(p=p.slice(E,E+y),l.C=E+y,p)))}Sn.prototype.cancel=function(){this.J=!0,hn(this)};function $e(l){l.S=Date.now()+l.I,il(l,l.I)}function il(l,p){if(l.B!=null)throw Error("WatchDog timer not null");l.B=wn(x(l.ba,l),p)}function Ni(l){l.B&&(f.clearTimeout(l.B),l.B=null)}Sn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(jo(this.i,this.A),this.L!=2&&(or(),tt(17)),hn(this),this.s=2,Or(this)):il(this,this.S-l)};function Or(l){l.j.G==0||l.J||Vs(l.j,l)}function hn(l){Ni(l);var p=l.M;p&&typeof p.ma=="function"&&p.ma(),l.M=null,Oo(l.U),l.g&&(p=l.g,l.g=null,p.abort(),p.ma())}function $o(l,p){try{var y=l.j;if(y.G!=0&&(y.g==l||Ft(y.h,l))){if(!l.K&&Ft(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ds(y),kn(y);else break e;Ns(y),tt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=wn(x(y.Za,y),6e3));if(1>=ol(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else hr(y,11)}else if((l.K||y.g==l)&&Ds(y),!pe(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let De=L[p];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const yt=De[3];yt!=null&&(y.la=yt,y.j.info("VER="+y.la));const it=De[4];it!=null&&(y.Aa=it,y.j.info("SVER="+y.Aa));const fn=De[5];fn!=null&&typeof fn=="number"&&0<fn&&(E=1.5*fn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const rn=l.g;if(rn){const bi=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bi){var F=E.h;F.g||bi.indexOf("spdy")==-1&&bi.indexOf("quic")==-1&&bi.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(qo(F,F.h),F.h=null))}if(E.D){const xs=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;xs&&(E.ya=xs,ze(E.I,E.D,xs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var X=l;if(E.qa=vl(E,E.J?E.ia:null,E.W),X.K){al(E.h,X);var Ue=X,ht=E.L;ht&&(Ue.I=ht),Ue.B&&(Ni(Ue),$e(Ue)),E.g=X}else Mi(E);0<y.i.length&&Wn(y)}else De[0]!="stop"&&De[0]!="close"||hr(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?hr(y,7):It(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}or(4)}catch{}}var sl=class{constructor(l,p){this.g=l,this.map=p}};function Di(l){this.l=l||10,f.PerformanceNavigationTiming?(l=f.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ol(l){return l.h?1:l.g?l.g.size:0}function Ft(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function qo(l,p){l.g?l.g.add(p):l.h=p}function al(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Di.prototype.cancel=function(){if(this.i=ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ll(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.D);return p}return Q(l.i)}function Ts(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var p=[],y=l.length,E=0;E<y;E++)p.push(l[E]);return p}p=[],y=0;for(E in l)p[y++]=l[E];return p}function Is(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var p=[];l=l.length;for(var y=0;y<l;y++)p.push(y);return p}p=[],y=0;for(const E in l)p[y++]=E;return p}}}function xr(l,p){if(l.forEach&&typeof l.forEach=="function")l.forEach(p,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,p,void 0);else for(var y=Is(l),E=Ts(l),L=E.length,F=0;F<L;F++)p.call(void 0,E[F],y&&y[F],l)}var Vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tc(l,p){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),L=null;if(0<=E){var F=l[y].substring(0,E);L=l[y].substring(E+1)}else F=l[y];p(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ar(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ar){this.h=l.h,Oi(this,l.j),this.o=l.o,this.g=l.g,Lr(this,l.s),this.l=l.l;var p=l.i,y=new Bn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Mr(this,y),this.m=l.m}else l&&(p=String(l).match(Vi))?(this.h=!1,Oi(this,p[1]||"",!0),this.o=Pe(p[2]||""),this.g=Pe(p[3]||"",!0),Lr(this,p[4]),this.l=Pe(p[5]||"",!0),Mr(this,p[6]||"",!0),this.m=Pe(p[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}ar.prototype.toString=function(){var l=[],p=this.j;p&&l.push(Ur(p,Ss,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Ur(p,Ss,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Ur(y,y.charAt(0)=="/"?hl:cl,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Ur(y,Wo)),l.join("")};function tn(l){return new ar(l)}function Oi(l,p,y){l.j=y?Pe(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Lr(l,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);l.s=p}else l.s=null}function Mr(l,p,y){p instanceof Bn?(l.i=p,$n(l.i,l.h)):(y||(p=Ur(p,dl)),l.i=new Bn(p,l.h))}function ze(l,p,y){l.i.set(p,y)}function br(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pe(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ur(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,ul),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ul(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ss=/[#\/\?@]/g,cl=/[#\?:]/g,hl=/[#\?]/g,dl=/[#\?@]/g,Wo=/#/g;function Bn(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Tt(l){l.g||(l.g=new Map,l.h=0,l.i&&Tc(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}i=Bn.prototype,i.add=function(l,p){Tt(this),this.i=null,l=dn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function An(l,p){Tt(l),p=dn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Rn(l,p){return Tt(l),p=dn(l,p),l.g.has(p)}i.forEach=function(l,p){Tt(this),this.g.forEach(function(y,E){y.forEach(function(L){l.call(p,L,E,this)},this)},this)},i.na=function(){Tt(this);const l=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const L=l[E];for(let F=0;F<L.length;F++)y.push(p[E])}return y},i.V=function(l){Tt(this);let p=[];if(typeof l=="string")Rn(this,l)&&(p=p.concat(this.g.get(dn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)p=p.concat(l[y])}return p},i.set=function(l,p){return Tt(this),this.i=null,l=dn(this,l),Rn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=this.V(l),0<l.length?String(l[0]):p):p};function Fr(l,p,y){An(l,p),0<y.length&&(l.i=null,l.g.set(dn(l,p),Q(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const F=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var L=F;X[E]!==""&&(L+="="+encodeURIComponent(String(X[E]))),l.push(L)}}return this.i=l.join("&")};function dn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function $n(l,p){p&&!l.j&&(Tt(l),l.i=null,l.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(An(this,E),Fr(this,L,y))},l)),l.j=p}function Ic(l,p){const y=new Ci;if(f.Image){const E=new Image;E.onload=j($t,y,"TestLoadImage: loaded",!0,p,E),E.onerror=j($t,y,"TestLoadImage: error",!1,p,E),E.onabort=j($t,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=j($t,y,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function fl(l,p){const y=new Ci,E=new AbortController,L=setTimeout(()=>{E.abort(),$t(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(F=>{clearTimeout(L),F.ok?$t(y,"TestPingServer: ok",!0,p):$t(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),$t(y,"TestPingServer: error",!1,p)})}function $t(l,p,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Sc(){this.g=new Mo}function pl(l,p,y){const E=y||"";try{xr(l,function(L,F){let X=L;v(L)&&(X=xo(L)),p.push(E+F+"="+encodeURIComponent(X))})}catch(L){throw p.push(E+"type="+encodeURIComponent("_badmap")),L}}function lr(l){this.l=l.Ub||null,this.j=l.eb||!1}G(lr,Ai),lr.prototype.g=function(){return new xi(this.l,this.j)},lr.prototype.i=function(l){return function(){return l}}({});function xi(l,p){ut.call(this),this.D=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(xi,ut),i=xi.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=p,this.readyState=1,Pn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(p.body=l),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ml(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ml(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Cn(this):Pn(this),this.readyState==3&&ml(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Cn(this))},i.Qa=function(l){this.g&&(this.response=l,Cn(this))},i.ga=function(){this.g&&Cn(this)};function Cn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Pn(l)}i.setRequestHeader=function(l,p){this.u.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function Pn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ur(l){let p="";return Te(l,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function jr(l,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=ur(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):ze(l,p,y))}function Ke(l){ut.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G(Ke,ut);var Ac=/^https?$/i,Ho=["POST","PUT"];i=Ke.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():In.g(),this.v=this.o?ps(this.o):ps(In),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(F){Li(this,F);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const F of E.keys())y.set(F,E.get(F));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(F=>F.toLowerCase()=="content-type"),L=f.FormData&&l instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Ho,p,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,X]of y)this.g.setRequestHeader(F,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rs(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){Li(this,F)}};function Li(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.m=5,As(l),nn(l)}function As(l){l.A||(l.A=!0,ct(l,"complete"),ct(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ct(this,"complete"),ct(this,"abort"),nn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Go(this):this.bb())},i.bb=function(){Go(this)};function Go(l){if(l.h&&typeof h<"u"&&(!l.v[1]||qt(l)!=4||l.Z()!=2)){if(l.u&&qt(l)==4)Do(l.Ea,0,l);else if(ct(l,"readystatechange"),qt(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=X===0){var L=String(l.D).match(Vi)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),E=!Ac.test(L?L.toLowerCase():"")}y=E}if(y)ct(l,"complete"),ct(l,"success");else{l.m=6;try{var F=2<qt(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",As(l)}}finally{nn(l)}}}}function nn(l,p){if(l.g){Rs(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,p||ct(l,"ready");try{y.onreadystatechange=E}catch{}}}function Rs(l){l.I&&(f.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function qt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),Lo(p)}};function Ko(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Cs(l){const p={};l=(l.g&&2<=qt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(pe(l[E]))continue;var y=V(l[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const F=p[L]||[];p[L]=F,F.push(y)}N(p,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function Qo(l){this.Aa=0,this.i=[],this.j=new Ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qn("baseRetryDelayMs",5e3,l),this.cb=qn("retryDelaySeedMs",1e4,l),this.Wa=qn("forwardChannelMaxRetries",2,l),this.wa=qn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Di(l&&l.concurrentRequestLimit),this.Da=new Sc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Qo.prototype,i.la=8,i.G=1,i.connect=function(l,p,y,E){tt(0),this.W=l,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=vl(this,null,this.W),Wn(this)};function It(l){if(Ps(l),l.G==3){var p=l.U++,y=tn(l.I);if(ze(y,"SID",l.K),ze(y,"RID",p),ze(y,"TYPE","terminate"),cr(l,y),p=new Sn(l,l.j,p),p.L=2,p.v=br(tn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=El(p.j,null),p.g.ea(p.v)),p.F=Date.now(),$e(p)}_l(l)}function kn(l){l.g&&(Yo(l),l.g.cancel(),l.g=null)}function Ps(l){kn(l),l.u&&(f.clearTimeout(l.u),l.u=null),Ds(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&f.clearTimeout(l.s),l.s=null)}function Wn(l){if(!en(l.h)&&!l.s){l.s=!0;var p=l.Ga;je||ee(),J||(je(),J=!0),ce.add(p,l),l.B=0}}function Rc(l,p){return ol(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=p.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=wn(x(l.Ga,l,p),yl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Sn(this,this.j,l);let F=this.o;if(this.S&&(F?(F=I(F),R(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=zr(this,L,p),y=tn(this.I),ze(y,"RID",l),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),cr(this,y),F&&(this.O?p="headers="+encodeURIComponent(String(ur(F)))+"&"+p:this.m&&jr(y,this.m,F)),qo(this.h,L),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",p),ze(y,"SID","null"),L.T=!0,ws(L,y,null)):ws(L,y,p),this.G=2}}else this.G==3&&(l?ks(this,l):this.i.length==0||en(this.h)||ks(this))};function ks(l,p){var y;p?y=p.l:y=l.U++;const E=tn(l.I);ze(E,"SID",l.K),ze(E,"RID",y),ze(E,"AID",l.T),cr(l,E),l.m&&l.o&&jr(E,l.m,l.o),y=new Sn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),p&&(l.i=p.D.concat(l.i)),p=zr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),qo(l.h,y),ws(y,E,p)}function cr(l,p){l.H&&Te(l.H,function(y,E){ze(p,E,y)}),l.l&&xr({},function(y,E){ze(p,E,y)})}function zr(l,p,y){y=Math.min(l.i.length,y);var E=l.l?x(l.l.Na,l.l,l):null;e:{var L=l.i;let F=-1;for(;;){const X=["count="+y];F==-1?0<y?(F=L[0].g,X.push("ofs="+F)):F=0:X.push("ofs="+F);let Ue=!0;for(let ht=0;ht<y;ht++){let De=L[ht].g;const yt=L[ht].map;if(De-=F,0>De)F=Math.max(0,L[ht].g-100),Ue=!1;else try{pl(yt,X,"req"+De+"_")}catch{E&&E(yt)}}if(Ue){E=X.join("&");break e}}}return l=l.i.splice(0,y),p.D=l,E}function Mi(l){if(!l.g&&!l.u){l.Y=1;var p=l.Fa;je||ee(),J||(je(),J=!0),ce.add(p,l),l.v=0}}function Ns(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=wn(x(l.Fa,l),yl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,gl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=wn(x(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),kn(this),gl(this))};function Yo(l){l.A!=null&&(f.clearTimeout(l.A),l.A=null)}function gl(l){l.g=new Sn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var p=tn(l.qa);ze(p,"RID","rpc"),ze(p,"SID",l.K),ze(p,"AID",l.T),ze(p,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(p,"TO",l.ja),ze(p,"TYPE","xmlhttp"),cr(l,p),l.m&&l.o&&jr(p,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=br(tn(p)),y.m=null,y.P=!0,Bo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,kn(this),Ns(this),tt(19))};function Ds(l){l.C!=null&&(f.clearTimeout(l.C),l.C=null)}function Vs(l,p){var y=null;if(l.g==p){Ds(l),Yo(l),l.g=null;var E=2}else if(Ft(l.h,p))y=p.D,al(l.h,p),E=1;else return;if(l.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=l.B;E=Ri(),ct(E,new ys(E,y)),Wn(l)}else Mi(l);else if(L=p.s,L==3||L==0&&0<p.X||!(E==1&&Rc(l,p)||E==2&&Ns(l)))switch(y&&0<y.length&&(p=l.h,p.i=p.i.concat(y)),L){case 1:hr(l,5);break;case 4:hr(l,10);break;case 3:hr(l,6);break;default:hr(l,2)}}}function yl(l,p){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*p}function hr(l,p){if(l.j.info("Error code "+p),p==2){var y=x(l.fb,l),E=l.Xa;const L=!E;E=new ar(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Oi(E,"https"),br(E),L?Ic(E.toString(),y):fl(E.toString(),y)}else tt(2);l.G=0,l.l&&l.l.sa(p),_l(l),Ps(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function _l(l){if(l.G=0,l.ka=[],l.l){const p=ll(l.h);(p.length!=0||l.i.length!=0)&&($(l.ka,p),$(l.ka,l.i),l.h.i.length=0,Q(l.i),l.i.length=0),l.l.ra()}}function vl(l,p,y){var E=y instanceof ar?tn(y):new ar(y);if(E.g!="")p&&(E.g=p+"."+E.g),Lr(E,E.s);else{var L=f.location;E=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var F=new ar(null);E&&Oi(F,E),p&&(F.g=p),L&&Lr(F,L),y&&(F.l=y),E=F}return y=l.D,p=l.ya,y&&p&&ze(E,y,p),ze(E,"VER",l.la),cr(l,E),E}function El(l,p,y){if(p&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Ca&&!l.pa?new Ke(new lr({eb:y})):new Ke(l.pa),p.Ha(l.J),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xo(){}i=Xo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Os(){}Os.prototype.g=function(l,p){return new jt(l,p)};function jt(l,p){ut.call(this),this.g=new Qo(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(l?l["X-WebChannel-Client-Profile"]=p.va:l={"X-WebChannel-Client-Profile":p.va}),this.g.S=l,(l=p&&p.Sb)&&!pe(l)&&(this.g.m=l),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!pe(p)&&(this.g.D=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Hn(this)}G(jt,ut),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){It(this.g)},jt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=xo(l),l=y);p.i.push(new sl(p.Ya++,l)),p.G==3&&Wn(p)},jt.prototype.N=function(){this.g.l=null,delete this.j,It(this.g),delete this.g,jt.aa.N.call(this)};function wl(l){jn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}G(wl,jn);function Tl(){gs.call(this),this.status=1}G(Tl,gs);function Hn(l){this.g=l}G(Hn,Xo),Hn.prototype.ua=function(){ct(this.g,"a")},Hn.prototype.ta=function(l){ct(this.g,new wl(l))},Hn.prototype.sa=function(l){ct(this.g,new Tl)},Hn.prototype.ra=function(){ct(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,Py=function(){return new Os},Cy=function(){return Ri()},Ry=zn,fd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vs.NO_ERROR=0,vs.TIMEOUT=8,vs.HTTP_ERROR=6,Iu=vs,tl.COMPLETE="complete",Ay=tl,ms.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Sa=ms,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Sy=Ke}).apply(typeof gu<"u"?gu:typeof self<"u"?self:typeof window<"u"?window:{});const ng="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new xd("@firebase/firestore");function to(){return ns.logLevel}function te(i,...e){if(ns.logLevel<=Re.DEBUG){const t=e.map(bd);ns.debug(`Firestore (${wo}): ${i}`,...t)}}function Rr(i,...e){if(ns.logLevel<=Re.ERROR){const t=e.map(bd);ns.error(`Firestore (${wo}): ${i}`,...t)}}function co(i,...e){if(ns.logLevel<=Re.WARN){const t=e.map(bd);ns.warn(`Firestore (${wo}): ${i}`,...t)}}function bd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(i="Unexpected state"){const e=`FIRESTORE (${wo}) INTERNAL ASSERTION FAILED: `+i;throw Rr(e),new Error(e)}function be(i,e){i||_e()}function Ee(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends kr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Mt.UNAUTHENTICATED))}shutdown(){}}class _w{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class vw{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new es;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new es,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},f=g=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>f(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new es)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new ky(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Mt(e)}}class Ew{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ww{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new Ew(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Iw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){be(this.o===void 0);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(be(typeof t.token=="string"),this.R=t.token,new Tw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=Sw(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function ke(i,e){return i<e?-1:i>e?1:0}function ho(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new pt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ie(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new pt(0,0))}static max(){return new ve(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(),s===void 0?s=e.length-t:s>e.length-t&&_e(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return xa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xa?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ge extends xa{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const Aw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends xa{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return Aw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ie(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ie(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(u(),o++)}if(u(),h)throw new ie(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Ge.fromString(e))}static fromName(e){return new ue(Ge.fromString(e).popFirst(5))}static empty(){return new ue(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Ge(e.slice()))}}function Rw(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new pt(t+1,0):new pt(t,s));return new di(o,ue.empty(),e)}function Cw(i){return new di(i.readTime,i.key,-1)}class di{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new di(ve.min(),ue.empty(),-1)}static max(){return new di(ve.max(),ue.empty(),-1)}}function Pw(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(i.documentKey,e.documentKey),t!==0?t:ke(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(i){if(i.code!==q.FAILED_PRECONDITION||i.message!==kw)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):z.reject(t)}static resolve(e){return new z((t,s)=>{t(e)})}static reject(e){return new z((t,s)=>{s(e)})}static waitFor(e){return new z((t,s)=>{let o=0,u=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=z.resolve(!1);for(const s of e)t=t.next(o=>o?z.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new z((s,o)=>{const u=e.length,h=new Array(u);let f=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next(w=>{h[v]=w,++f,f===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new z((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function Dw(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Io(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Yu.oe=-1;function Xu(i){return i==null}function Mu(i){return i===0&&1/i==-1/0}function Vw(i){return typeof i=="number"&&Number.isInteger(i)&&!Mu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=rg(e)),e=xw(i.get(t),e);return rg(e)}function xw(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function rg(i){return i+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function yi(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Dy(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yu(this.root,e,this.comparator,!1)}getReverseIterator(){return new yu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yu(this.root,e,this.comparator,!0)}}class yu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sg(this.data.getIterator())}getIteratorFrom(e){return new sg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class sg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new un([])}unionWith(e){let t=new mt(Ct.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ho(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Vy("Invalid base64 string: "+u):u}}(e);return new Pt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const Lw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fi(i){if(be(!!i),typeof i=="string"){let e=0;const t=Lw.exec(i);if(be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function pi(i){return typeof i=="string"?Pt.fromBase64String(i):Pt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ju(i){const e=i.mapValue.fields.__previous_value__;return Ud(e)?Ju(e):e}function La(i){const e=fi(i.mapValue.fields.__local_write_time__.timestampValue);return new pt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t,s,o,u,h,f,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=v}}class Ma{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ma("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ma&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ud(i)?4:Uw(i)?9007199254740991:bw(i)?10:11:_e()}function tr(i,e){if(i===e)return!0;const t=mi(i);if(t!==mi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return La(i).isEqual(La(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=fi(o.timestampValue),f=fi(u.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return pi(o.bytesValue).isEqual(pi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),f=rt(u.doubleValue);return h===f?Mu(h)===Mu(f):isNaN(h)&&isNaN(f)}return!1}(i,e);case 9:return ho(i.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},f=u.mapValue.fields||{};if(ig(h)!==ig(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!tr(h[g],f[g])))return!1;return!0}(i,e);default:return _e()}}function ba(i,e){return(i.values||[]).find(t=>tr(t,e))!==void 0}function fo(i,e){if(i===e)return 0;const t=mi(i),s=mi(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(i.booleanValue,e.booleanValue);case 2:return function(u,h){const f=rt(u.integerValue||u.doubleValue),g=rt(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1}(i,e);case 3:return og(i.timestampValue,e.timestampValue);case 4:return og(La(i),La(e));case 5:return ke(i.stringValue,e.stringValue);case 6:return function(u,h){const f=pi(u),g=pi(h);return f.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const f=u.split("/"),g=h.split("/");for(let v=0;v<f.length&&v<g.length;v++){const w=ke(f[v],g[v]);if(w!==0)return w}return ke(f.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const f=ke(rt(u.latitude),rt(h.latitude));return f!==0?f:ke(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return ag(i.arrayValue,e.arrayValue);case 10:return function(u,h){var f,g,v,w;const C=u.fields||{},x=h.fields||{},j=(f=C.value)===null||f===void 0?void 0:f.arrayValue,G=(g=x.value)===null||g===void 0?void 0:g.arrayValue,Q=ke(((v=j==null?void 0:j.values)===null||v===void 0?void 0:v.length)||0,((w=G==null?void 0:G.values)===null||w===void 0?void 0:w.length)||0);return Q!==0?Q:ag(j,G)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===_u.mapValue&&h===_u.mapValue)return 0;if(u===_u.mapValue)return 1;if(h===_u.mapValue)return-1;const f=u.fields||{},g=Object.keys(f),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let C=0;C<g.length&&C<w.length;++C){const x=ke(g[C],w[C]);if(x!==0)return x;const j=fo(f[g[C]],v[w[C]]);if(j!==0)return j}return ke(g.length,w.length)}(i.mapValue,e.mapValue);default:throw _e()}}function og(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return ke(i,e);const t=fi(i),s=fi(e),o=ke(t.seconds,s.seconds);return o!==0?o:ke(t.nanos,s.nanos)}function ag(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=fo(t[o],s[o]);if(u)return u}return ke(t.length,s.length)}function po(i){return pd(i)}function pd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=fi(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return pi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ue.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=pd(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${pd(t.fields[h])}`;return o+"}"}(i.mapValue):_e()}function Su(i){switch(mi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ju(i);return e?16+Su(e):16;case 5:return 2*i.stringValue.length;case 6:return pi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Su(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return yi(s.fields,(u,h)=>{o+=u.length+Su(h)}),o}(i.mapValue);default:throw _e()}}function lg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function md(i){return!!i&&"integerValue"in i}function Fd(i){return!!i&&"arrayValue"in i}function ug(i){return!!i&&"nullValue"in i}function cg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Au(i){return!!i&&"mapValue"in i}function bw(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Pa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return yi(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Pa(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function Uw(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Au(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pa(t)}setAll(e){let t=Ct.emptyPath(),s={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=Pa(h):o.push(f.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Au(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Au(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){yi(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Jt(Pa(this.value))}}function Oy(i){const e=[];return yi(i.fields,(t,s)=>{const o=new Ct([t]);if(Au(s)){const u=Oy(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,s,o,u,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=f}static newInvalidDocument(e){return new bt(e,0,ve.min(),ve.min(),ve.min(),Jt.empty(),0)}static newFoundDocument(e,t,s,o){return new bt(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new bt(e,2,t,ve.min(),ve.min(),Jt.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,ve.min(),ve.min(),Jt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t){this.position=e,this.inclusive=t}}function hg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=fo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function dg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!tr(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t="asc"){this.field=e,this.dir=t}}function Fw(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{}class at extends xy{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new zw(e,t,s):t==="array-contains"?new qw(e,s):t==="in"?new Ww(e,s):t==="not-in"?new Hw(e,s):t==="array-contains-any"?new Gw(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Bw(e,s):new $w(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(fo(t,this.value)):t!==null&&mi(this.value)===mi(t)&&this.matchesComparison(fo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends xy{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Fn(e,t)}matches(e){return Ly(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ly(i){return i.op==="and"}function My(i){return jw(i)&&Ly(i)}function jw(i){for(const e of i.filters)if(e instanceof Fn)return!1;return!0}function gd(i){if(i instanceof at)return i.field.canonicalString()+i.op.toString()+po(i.value);if(My(i))return i.filters.map(e=>gd(e)).join(",");{const e=i.filters.map(t=>gd(t)).join(",");return`${i.op}(${e})`}}function by(i,e){return i instanceof at?function(s,o){return o instanceof at&&s.op===o.op&&s.field.isEqual(o.field)&&tr(s.value,o.value)}(i,e):i instanceof Fn?function(s,o){return o instanceof Fn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,f)=>u&&by(h,o.filters[f]),!0):!1}(i,e):void _e()}function Uy(i){return i instanceof at?function(t){return`${t.field.canonicalString()} ${t.op} ${po(t.value)}`}(i):i instanceof Fn?function(t){return t.op.toString()+" {"+t.getFilters().map(Uy).join(" ,")+"}"}(i):"Filter"}class zw extends at{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class Bw extends at{constructor(e,t){super(e,"in",t),this.keys=Fy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $w extends at{constructor(e,t){super(e,"not-in",t),this.keys=Fy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Fy(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ue.fromName(s.referenceValue))}class qw extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fd(t)&&ba(t.arrayValue,this.value)}}class Ww extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ba(this.value.arrayValue,t)}}class Hw extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if(ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ba(this.value.arrayValue,t)}}class Gw extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ba(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,t=null,s=[],o=[],u=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=f,this.ue=null}}function fg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new Kw(i,e,t,s,o,u,h)}function jd(i){const e=Ee(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>gd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Xu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>po(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>po(s)).join(",")),e.ue=t}return e.ue}function zd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!Fw(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!by(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!dg(i.startAt,e.startAt)&&dg(i.endAt,e.endAt)}function yd(i){return ue.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t=null,s=[],o=[],u=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=f,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Qw(i,e,t,s,o,u,h,f){return new So(i,e,t,s,o,u,h,f)}function Bd(i){return new So(i)}function pg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function jy(i){return i.collectionGroup!==null}function ka(i){const e=Ee(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new mt(Ct.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(f=f.add(v.field))})}),f})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Ua(u,s))}),t.has(Ct.keyField().canonicalString())||e.ce.push(new Ua(Ct.keyField(),s))}return e.ce}function Xn(i){const e=Ee(i);return e.le||(e.le=Yw(e,ka(i))),e.le}function Yw(i,e){if(i.limitType==="F")return fg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Ua(o.field,u)});const t=i.endAt?new bu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new bu(i.startAt.position,i.startAt.inclusive):null;return fg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function _d(i,e){const t=i.filters.concat([e]);return new So(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function vd(i,e,t){return new So(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Zu(i,e){return zd(Xn(i),Xn(e))&&i.limitType===e.limitType}function zy(i){return`${jd(Xn(i))}|lt:${i.limitType}`}function no(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Uy(o)).join(", ")}]`),Xu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>po(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>po(o)).join(",")),`Target(${s})`}(Xn(i))}; limitType=${i.limitType})`}function ec(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of ka(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,f,g){const v=hg(h,f,g);return h.inclusive?v<=0:v<0}(s.startAt,ka(s),o)||s.endAt&&!function(h,f,g){const v=hg(h,f,g);return h.inclusive?v>=0:v>0}(s.endAt,ka(s),o))}(i,e)}function Xw(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function By(i){return(e,t)=>{let s=!1;for(const o of ka(i)){const u=Jw(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function Jw(i,e,t){const s=i.field.isKeyField()?ue.comparator(e.key,t.key):function(u,h,f){const g=h.data.field(u),v=f.data.field(u);return g!==null&&v!==null?fo(g,v):_e()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){yi(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return Dy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=new Ze(ue.comparator);function Cr(){return Zw}const $y=new Ze(ue.comparator);function Aa(...i){let e=$y;for(const t of i)e=e.insert(t.key,t);return e}function qy(i){let e=$y;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Xi(){return Na()}function Wy(){return Na()}function Na(){return new ss(i=>i.toString(),(i,e)=>i.isEqual(e))}const eT=new Ze(ue.comparator),tT=new mt(ue.comparator);function Ce(...i){let e=tT;for(const t of i)e=e.add(t);return e}const nT=new mt(ke);function rT(){return nT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mu(e)?"-0":e}}function Hy(i){return{integerValue:""+i}}function iT(i,e){return Vw(e)?Hy(e):$d(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this._=void 0}}function sT(i,e,t){return i instanceof Fa?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Ud(u)&&(u=Ju(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof ja?Ky(i,e):i instanceof za?Qy(i,e):function(o,u){const h=Gy(o,u),f=mg(h)+mg(o.Pe);return md(h)&&md(o.Pe)?Hy(f):$d(o.serializer,f)}(i,e)}function oT(i,e,t){return i instanceof ja?Ky(i,e):i instanceof za?Qy(i,e):t}function Gy(i,e){return i instanceof Uu?function(s){return md(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Fa extends tc{}class ja extends tc{constructor(e){super(),this.elements=e}}function Ky(i,e){const t=Yy(e);for(const s of i.elements)t.some(o=>tr(o,s))||t.push(s);return{arrayValue:{values:t}}}class za extends tc{constructor(e){super(),this.elements=e}}function Qy(i,e){let t=Yy(e);for(const s of i.elements)t=t.filter(o=>!tr(o,s));return{arrayValue:{values:t}}}class Uu extends tc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function mg(i){return rt(i.integerValue||i.doubleValue)}function Yy(i){return Fd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,t){this.field=e,this.transform=t}}function lT(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof ja&&o instanceof ja||s instanceof za&&o instanceof za?ho(s.elements,o.elements,tr):s instanceof Uu&&o instanceof Uu?tr(s.Pe,o.Pe):s instanceof Fa&&o instanceof Fa}(i.transform,e.transform)}class uT{constructor(e,t){this.version=e,this.transformResults=t}}class bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ru(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class nc{}function Xy(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new qd(i.key,bn.none()):new Wa(i.key,i.data,bn.none());{const t=i.data,s=Jt.empty();let o=new mt(Ct.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new _i(i.key,s,new un(o.toArray()),bn.none())}}function cT(i,e,t){i instanceof Wa?function(o,u,h){const f=o.value.clone(),g=yg(o.fieldTransforms,u,h.transformResults);f.setAll(g),u.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(i,e,t):i instanceof _i?function(o,u,h){if(!Ru(o.precondition,u))return void u.convertToUnknownDocument(h.version);const f=yg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Jy(o)),g.setAll(f),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Da(i,e,t,s){return i instanceof Wa?function(u,h,f,g){if(!Ru(u.precondition,h))return f;const v=u.value.clone(),w=_g(u.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof _i?function(u,h,f,g){if(!Ru(u.precondition,h))return f;const v=_g(u.fieldTransforms,g,h),w=h.data;return w.setAll(Jy(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(C=>C.field))}(i,e,t,s):function(u,h,f){return Ru(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(i,e,t)}function hT(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=Gy(s.transform,o||null);u!=null&&(t===null&&(t=Jt.empty()),t.set(s.field,u))}return t||null}function gg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&ho(s,o,(u,h)=>lT(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Wa extends nc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class _i extends nc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Jy(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function yg(i,e,t){const s=new Map;be(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,f=e.data.field(u.field);s.set(u.field,oT(h,f,t[o]))}return s}function _g(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,sT(u,h,e))}return s}class qd extends nc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dT extends nc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&cT(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Da(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Da(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Wy();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let f=this.applyToLocalView(h,u.mutatedFields);f=t.has(o.key)?null:f;const g=Xy(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ve.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ce())}isEqual(e){return this.batchId===e.batchId&&ho(this.mutations,e.mutations,(t,s)=>gg(t,s))&&ho(this.baseMutations,e.baseMutations,(t,s)=>gg(t,s))}}class Wd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length);let o=function(){return eT}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Wd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Ve;function gT(i){switch(i){default:return _e();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function Zy(i){if(i===void 0)return Rr("GRPC error has no .code"),q.UNKNOWN;switch(i){case ot.OK:return q.OK;case ot.CANCELLED:return q.CANCELLED;case ot.UNKNOWN:return q.UNKNOWN;case ot.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ot.INTERNAL:return q.INTERNAL;case ot.UNAVAILABLE:return q.UNAVAILABLE;case ot.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ot.NOT_FOUND:return q.NOT_FOUND;case ot.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ot.ABORTED:return q.ABORTED;case ot.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ot.DATA_LOSS:return q.DATA_LOSS;default:return _e()}}(Ve=ot||(ot={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=new Zi([4294967295,4294967295],0);function vg(i){const e=yT().encode(i),t=new Iy;return t.update(e),new Uint8Array(t.digest())}function Eg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Zi([t,s],0),new Zi([o,u],0)]}class Hd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ra(`Invalid padding: ${t}`);if(s<0)throw new Ra(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ra(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ra(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Zi.fromNumber(this.Te)}Ee(e,t,s){let o=e.add(t.multiply(Zi.fromNumber(s)));return o.compare(_T)===1&&(o=new Zi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=vg(e),[s,o]=Eg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Hd(u,o,t);return s.forEach(f=>h.insert(f)),h}insert(e){if(this.Te===0)return;const t=vg(e),[s,o]=Eg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ha.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new rc(ve.min(),o,new Ze(ke),Cr(),Ce())}}class Ha{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ha(s,t,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class e_{constructor(e,t){this.targetId=e,this.me=t}}class t_{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class wg{constructor(){this.fe=0,this.ge=Tg(),this.pe=Pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),t=Ce(),s=Ce();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e()}}),new Ha(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=Tg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class vT{constructor(e){this.Le=e,this.Be=new Map,this.ke=Cr(),this.qe=vu(),this.Qe=vu(),this.Ke=new Ze(ke)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:_e()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const u=o.target;if(yd(u))if(s===0){const h=new ue(u.path);this.We(t,h,bt.newNoDocument(h,ve.min()))}else be(s===1);else{const h=this.Ze(t);if(h!==s){const f=this.Xe(e),g=f?this.et(f,e,h):1;if(g!==0){this.He(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,f;try{h=pi(s).toUint8Array()}catch(g){if(g instanceof Vy)return co("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Hd(h,o,u)}catch(g){return co(g instanceof Ra?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.Te===0?null:f}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Le.nt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(f)||(this.We(t,u,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((u,h)=>{const f=this.Ye(h);if(f){if(u.current&&yd(f.target)){const g=new ue(f.target.path);this.st(g).has(h)||this.ot(h,g)||this.We(h,g,bt.newNoDocument(g,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Ce();this.Qe.forEach((u,h)=>{let f=!0;h.forEachWhile(g=>{const v=this.Ye(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new rc(e,t,this.Ke,this.ke,s);return this.ke=Cr(),this.qe=vu(),this.Qe=vu(),this.Ke=new Ze(ke),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new wg,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new mt(ke),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new mt(ke),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new wg),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function vu(){return new Ze(ue.comparator)}function Tg(){return new Ze(ue.comparator)}const ET={asc:"ASCENDING",desc:"DESCENDING"},wT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TT={and:"AND",or:"OR"};class IT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ed(i,e){return i.useProto3Json||Xu(e)?e:{value:e}}function Fu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function n_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function ST(i,e){return Fu(i,e.toTimestamp())}function Jn(i){return be(!!i),ve.fromTimestamp(function(t){const s=fi(t);return new pt(s.seconds,s.nanos)}(i))}function Gd(i,e){return wd(i,e).canonicalString()}function wd(i,e){const t=function(o){return new Ge(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function r_(i){const e=Ge.fromString(i);return be(l_(e)),e}function Td(i,e){return Gd(i.databaseId,e.path)}function nd(i,e){const t=r_(e);if(t.get(1)!==i.databaseId.projectId)throw new ie(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ie(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ue(s_(t))}function i_(i,e){return Gd(i.databaseId,e)}function AT(i){const e=r_(i);return e.length===4?Ge.emptyPath():s_(e)}function Id(i){return new Ge(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function s_(i){return be(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Ig(i,e,t){return{name:Td(i,e),fields:t.value.mapValue.fields}}function RT(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:_e()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(be(w===void 0||typeof w=="string"),Pt.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Pt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(v){const w=v.code===void 0?q.UNKNOWN:Zy(v.code);return new ie(w,v.message||"")}(h);t=new t_(s,o,u,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=nd(i,s.document.name),u=Jn(s.document.updateTime),h=s.document.createTime?Jn(s.document.createTime):ve.min(),f=new Jt({mapValue:{fields:s.document.fields}}),g=bt.newFoundDocument(o,u,h,f),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Cu(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=nd(i,s.document),u=s.readTime?Jn(s.readTime):ve.min(),h=bt.newNoDocument(o,u),f=s.removedTargetIds||[];t=new Cu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=nd(i,s.document),u=s.removedTargetIds||[];t=new Cu([],u,o,null)}else{if(!("filter"in e))return _e();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new mT(o,u),f=s.targetId;t=new e_(f,h)}}return t}function CT(i,e){let t;if(e instanceof Wa)t={update:Ig(i,e.key,e.value)};else if(e instanceof qd)t={delete:Td(i,e.key)};else if(e instanceof _i)t={update:Ig(i,e.key,e.data),updateMask:MT(e.fieldMask)};else{if(!(e instanceof dT))return _e();t={verify:Td(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const f=h.transform;if(f instanceof Fa)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ja)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof za)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Uu)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw _e()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:ST(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e()}(i,e.precondition)),t}function PT(i,e){return i&&i.length>0?(be(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Jn(o.updateTime):Jn(u);return h.isEqual(ve.min())&&(h=Jn(u)),new uT(h,o.transformResults||[])}(t,e))):[]}function kT(i,e){return{documents:[i_(i,e.path)]}}function NT(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=i_(i,o);const u=function(v){if(v.length!==0)return a_(Fn.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(x){return{field:ro(x.field),direction:OT(x.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Ed(i,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ct:t,parent:o}}function DT(i){let e=AT(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(C){const x=o_(C);return x instanceof Fn&&My(x)?x.getFilters():[x]}(t.where));let h=[];t.orderBy&&(h=function(C){return C.map(x=>function(G){return new Ua(io(G.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(G.direction))}(x))}(t.orderBy));let f=null;t.limit&&(f=function(C){let x;return x=typeof C=="object"?C.value:C,Xu(x)?null:x}(t.limit));let g=null;t.startAt&&(g=function(C){const x=!!C.before,j=C.values||[];return new bu(j,x)}(t.startAt));let v=null;return t.endAt&&(v=function(C){const x=!C.before,j=C.values||[];return new bu(j,x)}(t.endAt)),Qw(e,o,h,u,f,"F",g,v)}function VT(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function o_(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=io(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=io(t.unaryFilter.field);return at.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=io(t.unaryFilter.field);return at.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=io(t.unaryFilter.field);return at.create(h,"!=",{nullValue:"NULL_VALUE"});default:return _e()}}(i):i.fieldFilter!==void 0?function(t){return at.create(io(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _e()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Fn.create(t.compositeFilter.filters.map(s=>o_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e()}}(t.compositeFilter.op))}(i):_e()}function OT(i){return ET[i]}function xT(i){return wT[i]}function LT(i){return TT[i]}function ro(i){return{fieldPath:i.canonicalString()}}function io(i){return Ct.fromServerFormat(i.fieldPath)}function a_(i){return i instanceof at?function(t){if(t.op==="=="){if(cg(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NAN"}};if(ug(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cg(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NOT_NAN"}};if(ug(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ro(t.field),op:xT(t.op),value:t.value}}}(i):i instanceof Fn?function(t){const s=t.getFilters().map(o=>a_(o));return s.length===1?s[0]:{compositeFilter:{op:LT(t.op),filters:s}}}(i):_e()}function MT(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function l_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,s,o,u=ve.min(),h=ve.min(),f=Pt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new oi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.ht=e}}function UT(i){const e=DT({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?vd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.ln=new jT}addToCollectionParentIndex(e,t){return this.ln.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(di.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(di.min())}updateCollectionGroup(e,t,s){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class jT{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new mt(Ge.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new mt(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new mo(0)}static Qn(){return new mo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag([i,e],[t,s]){const o=ke(i,t);return o===0?ke(e,s):o}class zT{constructor(e){this.Gn=e,this.buffer=new mt(Ag),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Ag(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class BT{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Io(t)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await To(t)}await this.Yn(3e5)})}}class $T{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return z.resolve(Yu.oe);const s=new zT(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Sg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sg):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,u,h,f,g,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),o=this.params.maximumSequenceNumbersToCollect):o=C,h=Date.now(),this.nthSequenceNumber(e,o))).next(C=>(s=C,f=Date.now(),this.removeTargets(e,s,t))).next(C=>(u=C,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(C=>(v=Date.now(),to()<=Re.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${u} targets in `+(g-f)+`ms
	Removed ${C} documents in `+(v-g)+`ms
Total Duration: ${v-w}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:C})))}}function qT(i,e){return new $T(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(){this.changes=new ss(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Da(s.mutation,o,un.empty(),pt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ce()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ce()){const o=Xi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Aa();return u.forEach((f,g)=>{h=h.insert(f,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Xi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ce()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,s,o){let u=Cr();const h=Na(),f=function(){return Na()}();return t.forEach((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof _i)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Da(w.mutation,v,w.mutation.getFieldMask(),pt.now())):h.set(v.key,un.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var C;return f.set(v,new HT(w,(C=h.get(v))!==null&&C!==void 0?C:null))}),f))}recalculateAndSaveOverlays(e,t){const s=Na();let o=new Ze((h,f)=>h-f),u=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||un.empty();w=f.applyToLocalView(v,w),s.set(g,w);const C=(o.get(f.batchId)||Ce()).add(g);o=o.insert(f.batchId,C)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),v=g.key,w=g.value,C=Wy();w.forEach(x=>{if(!u.has(x)){const j=Xy(t.get(x),s.get(x));j!==null&&C.set(x,j),u=u.add(x)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,C))}return z.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ue.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):z.resolve(Xi());let f=-1,g=u;return h.next(v=>z.forEach(v,(w,C)=>(f<C.largestBatchId&&(f=C.largestBatchId),u.get(w)?z.resolve():this.remoteDocumentCache.getEntry(e,w).next(x=>{g=g.insert(w,x)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,g,v,Ce())).next(w=>({batchId:f,changes:qy(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next(s=>{let o=Aa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Aa();return this.indexManager.getCollectionParents(e,u).next(f=>z.forEach(f,g=>{const v=function(C,x){return new So(x,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((C,x)=>{h=h.insert(C,x)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,bt.newInvalidDocument(w)))});let f=Aa();return h.forEach((g,v)=>{const w=u.get(g);w!==void 0&&Da(w.mutation,v,un.empty(),pt.now()),ec(t,v)&&(f=f.insert(g,v))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return z.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Jn(o.createTime)}}(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:UT(o.bundledQuery),readTime:Jn(o.readTime)}}(t)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.overlays=new Ze(ue.comparator),this.Er=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Xi();return z.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Tt(e,t,u)}),z.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Er.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Er.delete(s)),z.resolve()}getOverlaysForCollection(e,t,s){const o=Xi(),u=t.length+1,h=new ue(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return z.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Ze((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Xi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const f=Xi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,w)=>f.set(v,w)),!(f.size()>=o)););return z.resolve(f)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new pT(t,s));let u=this.Er.get(t);u===void 0&&(u=Ce(),this.Er.set(t,u)),this.Er.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(){this.dr=new mt(wt.Ar),this.Rr=new mt(wt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new wt(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new wt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new ue(new Ge([])),s=new wt(t,e),o=new wt(t,e+1),u=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ue(new Ge([])),s=new wt(t,e),o=new wt(t,e+1);let u=Ce();return this.Rr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new wt(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class wt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ue.comparator(e.key,t.key)||ke(e.br,t.br)}static Vr(e,t){return ke(e.br,t.br)||ue.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new mt(wt.Ar)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new fT(u,t,s,o);this.mutationQueue.push(h);for(const f of o)this.vr=this.vr.add(new wt(f.key,u)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return z.resolve(h)}lookupMutationBatch(e,t){return z.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),u=o<0?0:o;return z.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new wt(t,0),o=new wt(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],h=>{const f=this.Cr(h.br);u.push(f)}),z.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mt(ke);return t.forEach(o=>{const u=new wt(o,0),h=new wt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],f=>{s=s.add(f.br)})}),z.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const h=new wt(new ue(u),0);let f=new mt(ke);return this.vr.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(f=f.add(g.br)),!0)},h),z.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){be(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return z.forEach(t.mutations,o=>{const u=new wt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new wt(t,0),o=this.vr.firstAfterOrEqual(s);return z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.Nr=e,this.docs=function(){return new Ze(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return z.resolve(s?s.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let s=Cr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():bt.newInvalidDocument(o))}),z.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Cr();const h=t.path,f=new ue(h.child("")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||Pw(Cw(w),s)<=0||(o.has(w.key)||ec(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return z.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e()}Lr(e,t){return z.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new ZT(this)}getSize(e){return z.resolve(this.size)}}class ZT extends WT{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),z.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.persistence=e,this.Br=new ss(t=>jd(t),zd),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.kr=0,this.qr=new Kd,this.targetCount=0,this.Qr=mo.qn()}forEachTarget(e,t){return this.Br.forEach((s,o)=>t(o)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),z.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new mo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Un(t),z.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Br.forEach((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.Br.delete(h),u.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),z.waitFor(u).next(()=>o)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return z.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),z.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),z.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),z.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return z.resolve(s)}containsKey(e,t){return z.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Yu(0),this.Ur=!1,this.Ur=!0,this.Wr=new YT,this.referenceDelegate=e(this),this.Gr=new eI(this),this.indexManager=new FT,this.remoteDocumentCache=function(o){return new JT(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new bT(t),this.jr=new KT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new QT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new XT(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new tI(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,t){return z.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class tI extends Nw{constructor(e){super(),this.currentSequenceNumber=e}}class Qd{constructor(e){this.persistence=e,this.Zr=new Kd,this.Xr=null}static ei(e){return new Qd(e)}get ti(){if(this.Xr)return this.Xr;throw _e()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),z.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),z.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.ti,s=>{const o=ue.fromPath(s);return this.ni(e,o).next(u=>{u||t.removeEntry(o,ve.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return z.or([()=>z.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class ju{constructor(e,t){this.persistence=e,this.ri=new ss(s=>Ow(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=qT(this,t)}static ei(e,t){return new ju(e,t)}Hr(){}Jr(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return z.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?z.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(f=>{f||(s++,u.removeEntry(h,ve.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),z.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),z.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Su(e.data.value)),t}ir(e,t,s){return z.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return z.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Ce(),o=Ce();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Yd(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return J0()?8:Dw(Ut())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new nI;return this.ts(e,t,h).next(f=>{if(u.result=f,this.Hi)return this.ns(e,t,h,f.size)})}).next(()=>u.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(to()<=Re.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",no(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),z.resolve()):(to()<=Re.DEBUG&&te("QueryEngine","Query:",no(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(to()<=Re.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",no(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(t))):z.resolve())}Xi(e,t){if(pg(t))return z.resolve(null);let s=Xn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=vd(t,null,"F"),s=Xn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ce(...u);return this.Zi.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.rs(t,f);return this.ss(t,v,h,g.readTime)?this.Xi(e,vd(t,null,"F")):this.os(e,v,t,g)}))})))}es(e,t,s,o){return pg(t)||o.isEqual(ve.min())?z.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,o)?z.resolve(null):(to()<=Re.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),no(t)),this.os(e,h,t,Rw(o,-1)).next(f=>f))})}rs(e,t){let s=new mt(By(e));return t.forEach((o,u)=>{ec(e,u)&&(s=s.add(u))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,t,s){return to()<=Re.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",no(t)),this.Zi.getDocumentsMatchingQuery(e,t,di.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Ze(ke),this.cs=new ss(u=>jd(u),zd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GT(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function sI(i,e,t,s){return new iI(i,e,t,s)}async function c_(i,e){const t=Ee(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],f=[];let g=Ce();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of u){f.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(v=>({Ts:v,removedBatchIds:h,addedBatchIds:f}))})})}function oI(i,e){const t=Ee(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.hs.newChangeBuffer({trackRemovals:!0});return function(f,g,v,w){const C=v.batch,x=C.keys();let j=z.resolve();return x.forEach(G=>{j=j.next(()=>w.getEntry(g,G)).next(Q=>{const $=v.docVersions.get(G);be($!==null),Q.version.compareTo($)<0&&(C.applyToRemoteDocument(Q,v),Q.isValidDocument()&&(Q.setReadTime(v.commitVersion),w.addEntry(Q)))})}),j.next(()=>f.mutationQueue.removeMutationBatch(g,C))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(f){let g=Ce();for(let v=0;v<f.mutationResults.length;++v)f.mutationResults[v].transformResults.length>0&&(g=g.add(f.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function h_(i){const e=Ee(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function aI(i,e){const t=Ee(i),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const f=[];e.targetChanges.forEach((w,C)=>{const x=o.get(C);if(!x)return;f.push(t.Gr.removeMatchingKeys(u,w.removedDocuments,C).next(()=>t.Gr.addMatchingKeys(u,w.addedDocuments,C)));let j=x.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(C)!==null?j=j.withResumeToken(Pt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(C,j),function(Q,$,fe){return Q.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=3e8?!0:fe.addedDocuments.size+fe.modifiedDocuments.size+fe.removedDocuments.size>0}(x,j,w)&&f.push(t.Gr.updateTargetData(u,j))});let g=Cr(),v=Ce();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),f.push(lI(u,h,e.documentUpdates).next(w=>{g=w.Is,v=w.Es})),!s.isEqual(ve.min())){const w=t.Gr.getLastRemoteSnapshotVersion(u).next(C=>t.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));f.push(w)}return z.waitFor(f).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,v)).next(()=>g)}).then(u=>(t.us=o,u))}function lI(i,e,t){let s=Ce(),o=Ce();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Cr();return t.forEach((f,g)=>{const v=u.get(f);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):te("LocalStore","Ignoring outdated watch update for ",f,". Current version:",v.version," Watch version:",g.version)}),{Is:h,Es:o}})}function uI(i,e){const t=Ee(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function cI(i,e){const t=Ee(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(u=>u?(o=u,z.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new oi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function Sd(i,e,t){const s=Ee(i),o=s.us.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Io(h))throw h;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function Rg(i,e,t){const s=Ee(i);let o=ve.min(),u=Ce();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,v,w){const C=Ee(g),x=C.cs.get(w);return x!==void 0?z.resolve(C.us.get(x)):C.Gr.getTargetData(v,w)}(s,h,Xn(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,f.targetId).next(g=>{u=g})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?u:Ce())).next(f=>(hI(s,Xw(e),f),{documents:f,ds:u})))}function hI(i,e,t){let s=i.ls.get(e)||ve.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.ls.set(e,s)}class Cg{constructor(){this.activeTargetIds=rT()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dI{constructor(){this._o=new Cg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Cg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu=null;function rd(){return Eu===null?Eu=function(){return 268435456+Math.round(2147483648*Math.random())}():Eu++,"0x"+Eu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class gI extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(t,s,o,u,h){const f=rd(),g=this.No(t,s.toUriEncodedString());te("RestConnection",`Sending RPC '${t}' ${f}:`,g,o);const v={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(v,u,h),this.Bo(t,g,v,o).then(w=>(te("RestConnection",`Received RPC '${t}' ${f}: `,w),w),w=>{throw co("RestConnection",`RPC '${t}' ${f} failed with error: `,w,"url: ",g,"request:",o),w})}ko(t,s,o,u,h,f){return this.Oo(t,s,o,u,h)}Lo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}No(t,s){const o=pI[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,o){const u=rd();return new Promise((h,f)=>{const g=new Sy;g.setWithCredentials(!0),g.listenOnce(Ay.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Iu.NO_ERROR:const w=g.getResponseJson();te(Lt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case Iu.TIMEOUT:te(Lt,`RPC '${e}' ${u} timed out`),f(new ie(q.DEADLINE_EXCEEDED,"Request time out"));break;case Iu.HTTP_ERROR:const C=g.getStatus();if(te(Lt,`RPC '${e}' ${u} failed with status:`,C,"response text:",g.getResponseText()),C>0){let x=g.getResponseJson();Array.isArray(x)&&(x=x[0]);const j=x==null?void 0:x.error;if(j&&j.status&&j.message){const G=function($){const fe=$.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(fe)>=0?fe:q.UNKNOWN}(j.status);f(new ie(G,j.message))}else f(new ie(q.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new ie(q.UNAVAILABLE,"Connection failed."));break;default:_e()}}finally{te(Lt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);te(Lt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",v,s,15)})}qo(e,t,s){const o=rd(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Py(),f=Cy(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Lo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");te(Lt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const C=h.createWebChannel(w,g);let x=!1,j=!1;const G=new mI({Eo:$=>{j?te(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(x||(te(Lt,`Opening RPC '${e}' stream ${o} transport.`),C.open(),x=!0),te(Lt,`RPC '${e}' stream ${o} sending:`,$),C.send($))},Ao:()=>C.close()}),Q=($,fe,pe)=>{$.listen(fe,ge=>{try{pe(ge)}catch(we){setTimeout(()=>{throw we},0)}})};return Q(C,Sa.EventType.OPEN,()=>{j||(te(Lt,`RPC '${e}' stream ${o} transport opened.`),G.So())}),Q(C,Sa.EventType.CLOSE,()=>{j||(j=!0,te(Lt,`RPC '${e}' stream ${o} transport closed`),G.Do())}),Q(C,Sa.EventType.ERROR,$=>{j||(j=!0,co(Lt,`RPC '${e}' stream ${o} transport errored:`,$),G.Do(new ie(q.UNAVAILABLE,"The operation could not be completed")))}),Q(C,Sa.EventType.MESSAGE,$=>{var fe;if(!j){const pe=$.data[0];be(!!pe);const ge=pe,we=(ge==null?void 0:ge.error)||((fe=ge[0])===null||fe===void 0?void 0:fe.error);if(we){te(Lt,`RPC '${e}' stream ${o} received error:`,we);const Fe=we.status;let Te=function(A){const R=ot[A];if(R!==void 0)return Zy(R)}(Fe),N=we.message;Te===void 0&&(Te=q.INTERNAL,N="Unknown error status: "+Fe+" with message "+we.message),j=!0,G.Do(new ie(Te,N)),C.close()}else te(Lt,`RPC '${e}' stream ${o} received:`,pe),G.vo(pe)}}),Q(f,Ry.STAT_EVENT,$=>{$.stat===fd.PROXY?te(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):$.stat===fd.NOPROXY&&te(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{G.bo()},0),G}}function id(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(i){return new IT(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,t,s,o,u,h,f,g){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new d_(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Rr(t.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new ie(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.E_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yI extends f_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=RT(this.serializer,e),s=function(u){if(!("targetChange"in u))return ve.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?Jn(h.readTime):ve.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=Id(this.serializer),t.addTarget=function(u,h){let f;const g=h.target;if(f=yd(g)?{documents:kT(u,g)}:{query:NT(u,g).ct},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=n_(u,h.resumeToken);const v=Ed(u,h.expectedCount);v!==null&&(f.expectedCount=v)}else if(h.snapshotVersion.compareTo(ve.min())>0){f.readTime=Fu(u,h.snapshotVersion.toTimestamp());const v=Ed(u,h.expectedCount);v!==null&&(f.expectedCount=v)}return f}(this.serializer,e);const s=VT(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=Id(this.serializer),t.removeTarget=e,this.c_(t)}}class _I extends f_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=PT(e.writeResults,e.commitTime),s=Jn(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=Id(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>CT(this.serializer,s))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ie(q.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,wd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie(q.UNKNOWN,u.toString())})}ko(e,t,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.ko(e,wd(t,s),o,h,f,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(q.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class EI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Rr(t),this.C_=!1):te("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{os(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(g){const v=Ee(g);v.k_.add(4),await Ga(v),v.K_.set("Unknown"),v.k_.delete(4),await sc(v)}(this))})}),this.K_=new EI(s,o)}}async function sc(i){if(os(i))for(const e of i.q_)await e(!0)}async function Ga(i){for(const e of i.q_)await e(!1)}function p_(i,e){const t=Ee(i);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),ef(t)?Zd(t):Ao(t).s_()&&Jd(t,e))}function Xd(i,e){const t=Ee(i),s=Ao(t);t.B_.delete(e),s.s_()&&m_(t,e),t.B_.size===0&&(s.s_()?s.a_():os(t)&&t.K_.set("Unknown"))}function Jd(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ao(i).V_(e)}function m_(i,e){i.U_.xe(e),Ao(i).m_(e)}function Zd(i){i.U_=new vT({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.B_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),Ao(i).start(),i.K_.F_()}function ef(i){return os(i)&&!Ao(i).i_()&&i.B_.size>0}function os(i){return Ee(i).k_.size===0}function g_(i){i.U_=void 0}async function TI(i){i.K_.set("Online")}async function II(i){i.B_.forEach((e,t)=>{Jd(i,e)})}async function SI(i,e){g_(i),ef(i)?(i.K_.O_(e),Zd(i)):i.K_.set("Unknown")}async function AI(i,e,t){if(i.K_.set("Online"),e instanceof t_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const f of u.targetIds)o.B_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.B_.delete(f),o.U_.removeTarget(f))}(i,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await zu(i,s)}else if(e instanceof Cu?i.U_.$e(e):e instanceof e_?i.U_.Je(e):i.U_.Ge(e),!t.isEqual(ve.min()))try{const s=await h_(i.localStore);t.compareTo(s)>=0&&await function(u,h){const f=u.U_.it(h);return f.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.B_.get(v);w&&u.B_.set(v,w.withResumeToken(g.resumeToken,h))}}),f.targetMismatches.forEach((g,v)=>{const w=u.B_.get(g);if(!w)return;u.B_.set(g,w.withResumeToken(Pt.EMPTY_BYTE_STRING,w.snapshotVersion)),m_(u,g);const C=new oi(w.target,g,v,w.sequenceNumber);Jd(u,C)}),u.remoteSyncer.applyRemoteEvent(f)}(i,t)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await zu(i,s)}}async function zu(i,e,t){if(!Io(e))throw e;i.k_.add(1),await Ga(i),i.K_.set("Offline"),t||(t=()=>h_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await t(),i.k_.delete(1),await sc(i)})}function y_(i,e){return e().catch(t=>zu(i,t,e))}async function oc(i){const e=Ee(i),t=gi(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;RI(e);)try{const o=await uI(e.localStore,s);if(o===null){e.L_.length===0&&t.a_();break}s=o.batchId,CI(e,o)}catch(o){await zu(e,o)}__(e)&&v_(e)}function RI(i){return os(i)&&i.L_.length<10}function CI(i,e){i.L_.push(e);const t=gi(i);t.s_()&&t.f_&&t.g_(e.mutations)}function __(i){return os(i)&&!gi(i).i_()&&i.L_.length>0}function v_(i){gi(i).start()}async function PI(i){gi(i).w_()}async function kI(i){const e=gi(i);for(const t of i.L_)e.g_(t.mutations)}async function NI(i,e,t){const s=i.L_.shift(),o=Wd.from(s,e,t);await y_(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await oc(i)}async function DI(i,e){e&&gi(i).f_&&await async function(s,o){if(function(h){return gT(h)&&h!==q.ABORTED}(o.code)){const u=s.L_.shift();gi(s).__(),await y_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await oc(s)}}(i,e),__(i)&&v_(i)}async function kg(i,e){const t=Ee(i);t.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=os(t);t.k_.add(3),await Ga(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await sc(t)}async function VI(i,e){const t=Ee(i);e?(t.k_.delete(2),await sc(t)):e||(t.k_.add(2),await Ga(t),t.K_.set("Unknown"))}function Ao(i){return i.W_||(i.W_=function(t,s,o){const u=Ee(t);return u.b_(),new yI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:TI.bind(null,i),mo:II.bind(null,i),po:SI.bind(null,i),R_:AI.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),ef(i)?Zd(i):i.K_.set("Unknown")):(await i.W_.stop(),g_(i))})),i.W_}function gi(i){return i.G_||(i.G_=function(t,s,o){const u=Ee(t);return u.b_(),new _I(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:()=>Promise.resolve(),mo:PI.bind(null,i),po:DI.bind(null,i),p_:kI.bind(null,i),y_:NI.bind(null,i)}),i.q_.push(async e=>{e?(i.G_.__(),await oc(i)):(await i.G_.stop(),i.L_.length>0&&(te("RemoteStore",`Stopping write stream with ${i.L_.length} pending writes`),i.L_=[]))})),i.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,f=new tf(e,t,h,o,u);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nf(i,e){if(Rr("AsyncQueue",`${e}: ${i}`),Io(i))return new ie(q.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{static emptySet(e){return new so(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=Aa(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof so)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new so;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.z_=new Ze(ue.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):_e():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class go{constructor(e,t,s,o,u,h,f,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new go(e,t,so.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class xI{constructor(){this.queries=Dg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=Ee(t),u=o.queries;o.queries=Dg(),u.forEach((h,f)=>{for(const g of f.J_)g.onError(s)})})(this,new ie(q.ABORTED,"Firestore shutting down"))}}function Dg(){return new ss(i=>zy(i),Zu)}async function LI(i,e){const t=Ee(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Y_()&&e.Z_()&&(s=2):(u=new OI,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await t.onListen(o,!0);break;case 1:u.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=nf(h,`Initialization of query '${no(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,u),u.J_.push(e),e.ea(t.onlineState),u.H_&&e.ta(u.H_)&&rf(t)}async function MI(i,e){const t=Ee(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.J_.indexOf(e);h>=0&&(u.J_.splice(h,1),u.J_.length===0?o=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function bI(i,e){const t=Ee(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const f of h.J_)f.ta(o)&&(s=!0);h.H_=o}}s&&rf(t)}function UI(i,e,t){const s=Ee(i),o=s.queries.get(e);if(o)for(const u of o.J_)u.onError(t);s.queries.delete(e)}function rf(i){i.X_.forEach(e=>{e.next()})}var Ad,Vg;(Vg=Ad||(Ad={})).na="default",Vg.Cache="cache";class FI{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new go(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Ad.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.key=e}}class w_{constructor(e){this.key=e}}class jI{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ce(),this.mutatedKeys=Ce(),this.Va=By(e),this.ma=new so(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new Ng,o=t?t.ma:this.ma;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,C)=>{const x=o.get(w),j=ec(this.query,C)?C:null,G=!!x&&this.mutatedKeys.has(x.key),Q=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let $=!1;x&&j?x.data.isEqual(j.data)?G!==Q&&(s.track({type:3,doc:j}),$=!0):this.ya(x,j)||(s.track({type:2,doc:j}),$=!0,(g&&this.Va(j,g)>0||v&&this.Va(j,v)<0)&&(f=!0)):!x&&j?(s.track({type:0,doc:j}),$=!0):x&&!j&&(s.track({type:1,doc:x}),$=!0,(g||v)&&(f=!0)),$&&(j?(h=h.add(j),u=Q?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:f,mutatedKeys:u}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,C)=>function(j,G){const Q=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e()}};return Q(j)-Q(G)}(w.type,C.type)||this.Va(w.doc,C.doc)),this.wa(s),o=o!=null&&o;const f=t&&!o?this.Sa():[],g=this.Ra.size===0&&this.current&&!o?1:0,v=g!==this.Aa;return this.Aa=g,h.length!==0||v?{snapshot:new go(this.query,e.ma,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ng,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ce(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new w_(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new E_(s))}),t}va(e){this.da=e.ds,this.Ra=Ce();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return go.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class zI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class BI{constructor(e){this.key=e,this.Fa=!1}}class $I{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new ss(f=>zy(f),Zu),this.Oa=new Map,this.Na=new Set,this.La=new Ze(ue.comparator),this.Ba=new Map,this.ka=new Kd,this.qa={},this.Qa=new Map,this.Ka=mo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function qI(i,e,t=!0){const s=C_(i);let o;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Ca()):o=await T_(s,e,t,!0),o}async function WI(i,e){const t=C_(i);await T_(t,e,!0,!1)}async function T_(i,e,t,s){const o=await cI(i.localStore,Xn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let f;return s&&(f=await HI(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&p_(i.remoteStore,o),f}async function HI(i,e,t,s,o){i.Ua=(C,x,j)=>async function(Q,$,fe,pe){let ge=$.view.ga(fe);ge.ss&&(ge=await Rg(Q.localStore,$.query,!1).then(({documents:N})=>$.view.ga(N,ge)));const we=pe&&pe.targetChanges.get($.targetId),Fe=pe&&pe.targetMismatches.get($.targetId)!=null,Te=$.view.applyChanges(ge,Q.isPrimaryClient,we,Fe);return xg(Q,$.targetId,Te.ba),Te.snapshot}(i,C,x,j);const u=await Rg(i.localStore,e,!0),h=new jI(e,u.ds),f=h.ga(u.documents),g=Ha.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(f,i.isPrimaryClient,g);xg(i,t,v.ba);const w=new zI(e,t,h);return i.xa.set(e,w),i.Oa.has(t)?i.Oa.get(t).push(e):i.Oa.set(t,[e]),v.snapshot}async function GI(i,e,t){const s=Ee(i),o=s.xa.get(e),u=s.Oa.get(o.targetId);if(u.length>1)return s.Oa.set(o.targetId,u.filter(h=>!Zu(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Sd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Xd(s.remoteStore,o.targetId),Rd(s,o.targetId)}).catch(To)):(Rd(s,o.targetId),await Sd(s.localStore,o.targetId,!0))}async function KI(i,e){const t=Ee(i),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Xd(t.remoteStore,s.targetId))}async function QI(i,e,t){const s=nS(i);try{const o=await function(h,f){const g=Ee(h),v=pt.now(),w=f.reduce((j,G)=>j.add(G.key),Ce());let C,x;return g.persistence.runTransaction("Locally write mutations","readwrite",j=>{let G=Cr(),Q=Ce();return g.hs.getEntries(j,w).next($=>{G=$,G.forEach((fe,pe)=>{pe.isValidDocument()||(Q=Q.add(fe))})}).next(()=>g.localDocuments.getOverlayedDocuments(j,G)).next($=>{C=$;const fe=[];for(const pe of f){const ge=hT(pe,C.get(pe.key).overlayedDocument);ge!=null&&fe.push(new _i(pe.key,ge,Oy(ge.value.mapValue),bn.exists(!0)))}return g.mutationQueue.addMutationBatch(j,v,fe,f)}).next($=>{x=$;const fe=$.applyToLocalDocumentSet(C,Q);return g.documentOverlayCache.saveOverlays(j,$.batchId,fe)})}).then(()=>({batchId:x.batchId,changes:qy(C)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,f,g){let v=h.qa[h.currentUser.toKey()];v||(v=new Ze(ke)),v=v.insert(f,g),h.qa[h.currentUser.toKey()]=v}(s,o.batchId,t),await Ka(s,o.changes),await oc(s.remoteStore)}catch(o){const u=nf(o,"Failed to persist write");t.reject(u)}}async function I_(i,e){const t=Ee(i);try{const s=await aI(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ba.get(u);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?be(h.Fa):o.removedDocuments.size>0&&(be(h.Fa),h.Fa=!1))}),await Ka(t,s,e)}catch(s){await To(s)}}function Og(i,e,t){const s=Ee(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((u,h)=>{const f=h.view.ea(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const g=Ee(h);g.onlineState=f;let v=!1;g.queries.forEach((w,C)=>{for(const x of C.J_)x.ea(f)&&(v=!0)}),v&&rf(g)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function YI(i,e,t){const s=Ee(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ba.get(e),u=o&&o.key;if(u){let h=new Ze(ue.comparator);h=h.insert(u,bt.newNoDocument(u,ve.min()));const f=Ce().add(u),g=new rc(ve.min(),new Map,new Ze(ke),h,f);await I_(s,g),s.La=s.La.remove(u),s.Ba.delete(e),sf(s)}else await Sd(s.localStore,e,!1).then(()=>Rd(s,e,t)).catch(To)}async function XI(i,e){const t=Ee(i),s=e.batch.batchId;try{const o=await oI(t.localStore,e);A_(t,s,null),S_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ka(t,o)}catch(o){await To(o)}}async function JI(i,e,t){const s=Ee(i);try{const o=await function(h,f){const g=Ee(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return g.mutationQueue.lookupMutationBatch(v,f).next(C=>(be(C!==null),w=C.keys(),g.mutationQueue.removeMutationBatch(v,C))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,f)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>g.localDocuments.getDocuments(v,w))})}(s.localStore,e);A_(s,e,t),S_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ka(s,o)}catch(o){await To(o)}}function S_(i,e){(i.Qa.get(e)||[]).forEach(t=>{t.resolve()}),i.Qa.delete(e)}function A_(i,e,t){const s=Ee(i);let o=s.qa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function Rd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Oa.get(e))i.xa.delete(s),t&&i.Ma.Wa(s,t);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(s=>{i.ka.containsKey(s)||R_(i,s)})}function R_(i,e){i.Na.delete(e.path.canonicalString());const t=i.La.get(e);t!==null&&(Xd(i.remoteStore,t),i.La=i.La.remove(e),i.Ba.delete(t),sf(i))}function xg(i,e,t){for(const s of t)s instanceof E_?(i.ka.addReference(s.key,e),ZI(i,s)):s instanceof w_?(te("SyncEngine","Document no longer in limbo: "+s.key),i.ka.removeReference(s.key,e),i.ka.containsKey(s.key)||R_(i,s.key)):_e()}function ZI(i,e){const t=e.key,s=t.path.canonicalString();i.La.get(t)||i.Na.has(s)||(te("SyncEngine","New document in limbo: "+t),i.Na.add(s),sf(i))}function sf(i){for(;i.Na.size>0&&i.La.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const t=new ue(Ge.fromString(e)),s=i.Ka.next();i.Ba.set(s,new BI(t)),i.La=i.La.insert(t,s),p_(i.remoteStore,new oi(Xn(Bd(t.path)),s,"TargetPurposeLimboResolution",Yu.oe))}}async function Ka(i,e,t){const s=Ee(i),o=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((f,g)=>{h.push(s.Ua(g,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const C=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,C?"current":"not-current")}if(v){o.push(v);const C=Yd.zi(g.targetId,v);u.push(C)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(g,v){const w=Ee(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>z.forEach(v,x=>z.forEach(x.Wi,j=>w.persistence.referenceDelegate.addReference(C,x.targetId,j)).next(()=>z.forEach(x.Gi,j=>w.persistence.referenceDelegate.removeReference(C,x.targetId,j)))))}catch(C){if(!Io(C))throw C;te("LocalStore","Failed to update sequence numbers: "+C)}for(const C of v){const x=C.targetId;if(!C.fromCache){const j=w.us.get(x),G=j.snapshotVersion,Q=j.withLastLimboFreeSnapshotVersion(G);w.us=w.us.insert(x,Q)}}}(s.localStore,u))}async function eS(i,e){const t=Ee(i);if(!t.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await c_(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(f=>{f.forEach(g=>{g.reject(new ie(q.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ka(t,s.Ts)}}function tS(i,e){const t=Ee(i),s=t.Ba.get(e);if(s&&s.Fa)return Ce().add(s.key);{let o=Ce();const u=t.Oa.get(e);if(!u)return o;for(const h of u){const f=t.xa.get(h);o=o.unionWith(f.view.fa)}return o}}function C_(i){const e=Ee(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=I_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YI.bind(null,e),e.Ma.R_=bI.bind(null,e.eventManager),e.Ma.Wa=UI.bind(null,e.eventManager),e}function nS(i){const e=Ee(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JI.bind(null,e),e}class Bu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ic(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return sI(this.persistence,new rI,e.initialUser,this.serializer)}ja(e){return new u_(Qd.ei,this.serializer)}za(e){return new dI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bu.provider={build:()=>new Bu};class rS extends Bu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){be(this.persistence.referenceDelegate instanceof ju);const s=this.persistence.referenceDelegate.garbageCollector;return new BT(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new u_(s=>ju.ei(s,t),this.serializer)}}class Cd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Og(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eS.bind(null,this.syncEngine),await VI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xI}()}createDatastore(e){const t=ic(e.databaseInfo.databaseId),s=function(u){return new gI(u)}(e.databaseInfo);return function(u,h,f,g){return new vI(u,h,f,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,f){return new wI(s,o,u,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Og(this.syncEngine,t,0),function(){return Pg.p()?new Pg:new fI}())}createSyncEngine(e,t){return function(o,u,h,f,g,v,w){const C=new $I(o,u,h,f,g,v);return w&&(C.$a=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Ee(o);te("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await Ga(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Cd.provider={build:()=>new Cd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=Ny.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{te("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(te("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=nf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function sd(i,e){i.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await c_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Lg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await oS(i);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>kg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>kg(e.remoteStore,o)),i._onlineComponents=e}async function oS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await sd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;co("Error using user provided cache. Falling back to memory cache: "+t),await sd(i,new Bu)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await sd(i,new rS(void 0));return i._offlineComponents}async function P_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await Lg(i,i._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await Lg(i,new Cd))),i._onlineComponents}function aS(i){return P_(i).then(e=>e.syncEngine)}async function Mg(i){const e=await P_(i),t=e.eventManager;return t.onListen=qI.bind(null,e.syncEngine),t.onUnlisten=GI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=WI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=KI.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(i,e,t){if(!t)throw new ie(q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function lS(i,e,t,s){if(e===!0&&s===!0)throw new ie(q.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Ug(i){if(!ue.isDocumentKey(i))throw new ie(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Fg(i){if(ue.isDocumentKey(i))throw new ie(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function ac(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e()}function ci(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ie(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ac(i);throw new ie(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=k_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new yw;switch(s.type){case"firstParty":return new ww(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=bg.get(t);s&&(te("ComponentProvider","Removing Datastore"),bg.delete(t),s.terminate())}(this),Promise.resolve()}}function uS(i,e,t,s={}){var o;const u=(i=ci(i,lc))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let f,g;if(typeof s.mockUserToken=="string")f=s.mockUserToken,g=Mt.MOCK_USER;else{f=W0(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ie(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Mt(v)}i._authCredentials=new _w(new ky(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new as(this.firestore,e,this._query)}}class Zt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}}class hi extends as{constructor(e,t,s){super(e,t,Bd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new ue(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function cS(i,e,...t){if(i=lt(i),N_("collection","path",e),i instanceof lc){const s=Ge.fromString(e,...t);return Fg(s),new hi(i,null,s)}{if(!(i instanceof Zt||i instanceof hi))throw new ie(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return Fg(s),new hi(i.firestore,null,s)}}function of(i,e,...t){if(i=lt(i),arguments.length===1&&(e=Ny.newId()),N_("doc","path",e),i instanceof lc){const s=Ge.fromString(e,...t);return Ug(s),new Zt(i,null,new ue(s))}{if(!(i instanceof Zt||i instanceof hi))throw new ie(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return Ug(s),new Zt(i.firestore,i instanceof hi?i.converter:null,new ue(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new d_(this,"async_queue_retry"),this.fu=()=>{const s=id();s&&te("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=id();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=id();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new es;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Io(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(s);throw Rr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=tf.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.du.push(o),o}pu(){this.Au&&_e()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Bg(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(i,["next","error","complete"])}class yo extends lc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new zg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zg(e),this._firestoreClient=void 0,await e}}}function hS(i,e){const t=typeof i=="object"?i:Ey(),s=typeof i=="string"?i:"(default)",o=Md(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=$0("firestore");u&&uS(o,...u)}return o}function D_(i){if(i._terminated)throw new ie(q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||dS(i),i._firestoreClient}function dS(i){var e,t,s;const o=i._freezeSettings(),u=function(f,g,v,w){return new Mw(f,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,k_(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new sS(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _o(Pt.fromBase64String(e))}catch(t){throw new ie(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _o(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=/^__.*__$/;class pS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new _i(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wa(e,this.data,t,this.fieldTransforms)}}class V_{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new _i(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function O_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class uf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new uf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Lu(e),o}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return $u(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(O_(this.Mu)&&fS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class mS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ic(e)}$u(e,t,s,o=!1){return new uf({Mu:e,methodName:t,Ku:s,path:Ct.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cf(i){const e=i._freezeSettings(),t=ic(i._databaseId);return new mS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function gS(i,e,t,s,o,u={}){const h=i.$u(u.merge||u.mergeFields?2:0,e,t,o);df("Data must be an object, but it was:",h,s);const f=x_(s,h);let g,v;if(u.merge)g=new un(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const C of u.mergeFields){const x=Pd(e,C,t);if(!h.contains(x))throw new ie(q.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);M_(w,x)||w.push(x)}g=new un(w),v=h.fieldTransforms.filter(C=>g.covers(C.field))}else g=null,v=h.fieldTransforms;return new pS(new Jt(f),g,v)}class hc extends cc{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hc}}class hf extends cc{_toFieldTransform(e){return new aT(e.path,new Fa)}isEqual(e){return e instanceof hf}}function yS(i,e,t,s){const o=i.$u(1,e,t);df("Data must be an object, but it was:",o,s);const u=[],h=Jt.empty();yi(s,(g,v)=>{const w=ff(e,g,t);v=lt(v);const C=o.Bu(w);if(v instanceof hc)u.push(w);else{const x=Qa(v,C);x!=null&&(u.push(w),h.set(w,x))}});const f=new un(u);return new V_(h,f,o.fieldTransforms)}function _S(i,e,t,s,o,u){const h=i.$u(1,e,t),f=[Pd(e,s,t)],g=[o];if(u.length%2!=0)throw new ie(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let x=0;x<u.length;x+=2)f.push(Pd(e,u[x])),g.push(u[x+1]);const v=[],w=Jt.empty();for(let x=f.length-1;x>=0;--x)if(!M_(v,f[x])){const j=f[x];let G=g[x];G=lt(G);const Q=h.Bu(j);if(G instanceof hc)v.push(j);else{const $=Qa(G,Q);$!=null&&(v.push(j),w.set(j,$))}}const C=new un(v);return new V_(w,C,h.fieldTransforms)}function vS(i,e,t,s=!1){return Qa(t,i.$u(s?4:3,e))}function Qa(i,e){if(L_(i=lt(i)))return df("Unsupported field value:",e,i),x_(i,e);if(i instanceof cc)return function(s,o){if(!O_(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const f of s){let g=Qa(f,o.ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=lt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return iT(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=pt.fromDate(s);return{timestampValue:Fu(o.serializer,u)}}if(s instanceof pt){const u=new pt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Fu(o.serializer,u)}}if(s instanceof af)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _o)return{bytesValue:n_(o.serializer,s._byteString)};if(s instanceof Zt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Gd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof lf)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw f.qu("VectorValues must only contain numeric values.");return $d(f.serializer,g)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${ac(s)}`)}(i,e)}function x_(i,e){const t={};return Dy(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yi(i,(s,o)=>{const u=Qa(o,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function L_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof pt||i instanceof af||i instanceof _o||i instanceof Zt||i instanceof cc||i instanceof lf)}function df(i,e,t){if(!L_(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=ac(t);throw s==="an object"?e.qu(i+" a custom object"):e.qu(i+" "+s)}}function Pd(i,e,t){if((e=lt(e))instanceof uc)return e._internalPath;if(typeof e=="string")return ff(i,e);throw $u("Field path arguments must be of type string or ",i,!1,void 0,t)}const ES=new RegExp("[~\\*/\\[\\]]");function ff(i,e,t){if(e.search(ES)>=0)throw $u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new uc(...e.split("."))._internalPath}catch{throw $u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function $u(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ie(q.INVALID_ARGUMENT,f+i+g)}function M_(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(dc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class wS extends b_{data(){return super.data()}}function dc(i,e){return typeof e=="string"?ff(i,e):e instanceof uc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ie(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pf{}class U_ extends pf{}function fc(i,e,...t){let s=[];e instanceof pf&&s.push(e),s=s.concat(t),function(u){const h=u.filter(g=>g instanceof mf).length,f=u.filter(g=>g instanceof pc).length;if(h>1||h>0&&f>0)throw new ie(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class pc extends U_{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new pc(e,t,s)}_apply(e){const t=this._parse(e);return F_(e._query,t),new as(e.firestore,e.converter,_d(e._query,t))}_parse(e){const t=cf(e.firestore);return function(u,h,f,g,v,w,C){let x;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ie(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){qg(C,w);const j=[];for(const G of C)j.push($g(g,u,G));x={arrayValue:{values:j}}}else x=$g(g,u,C)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||qg(C,w),x=vS(f,h,C,w==="in"||w==="not-in");return at.create(v,w,x)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Zn(i,e,t){const s=e,o=dc("where",i);return pc._create(o,s,t)}class mf extends pf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new mf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Fn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const f=u.getFlattenedFilters();for(const g of f)F_(h,g),h=_d(h,g)}(e._query,t),new as(e.firestore,e.converter,_d(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gf extends U_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new gf(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new ie(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ua(u,h)}(e._query,this._field,this._direction);return new as(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new So(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function mc(i,e="asc"){const t=e,s=dc("orderBy",i);return gf._create(s,t)}function $g(i,e,t){if(typeof(t=lt(t))=="string"){if(t==="")throw new ie(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jy(e)&&t.indexOf("/")!==-1)throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!ue.isDocumentKey(s))throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return lg(i,new ue(s))}if(t instanceof Zt)return lg(i,t._key);throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ac(t)}.`)}function qg(i,e){if(!Array.isArray(i)||i.length===0)throw new ie(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function F_(i,e){const t=function(o,u){for(const h of o)for(const f of h.getFlattenedFilters())if(u.indexOf(f.op)>=0)return f.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ie(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class IS{convertValue(e,t="none"){switch(mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return yi(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new lf(u)}convertGeoPoint(e){return new af(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ju(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(La(e));default:return null}}convertTimestamp(e){const t=fi(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);be(l_(s));const o=new Ma(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return o.isEqual(t)||Rr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class j_ extends b_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Pu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(dc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Pu extends j_{data(e={}){return super.data(e)}}class AS{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ca(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Pu(this._firestore,this._userDataWriter,s.key,s,new Ca(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const g=new Pu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ca(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>u||f.type!==3).map(f=>{const g=new Pu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ca(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return f.type!==0&&(v=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:RS(f.type),doc:g,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function RS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e()}}class z_ extends IS{constructor(e){super(),this.firestore=e}convertBytes(e){return new _o(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,t)}}function CS(i,e,t,...s){i=ci(i,Zt);const o=ci(i.firestore,yo),u=cf(o);let h;return h=typeof(e=lt(e))=="string"||e instanceof uc?_S(u,"updateDoc",i._key,e,t,s):yS(u,"updateDoc",i._key,e),yf(o,[h.toMutation(i._key,bn.exists(!0))])}function PS(i){return yf(ci(i.firestore,yo),[new qd(i._key,bn.none())])}function kS(i,e){const t=ci(i.firestore,yo),s=of(i),o=SS(i.converter,e);return yf(t,[gS(cf(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,bn.exists(!1))]).then(()=>s)}function gc(i,...e){var t,s,o;i=lt(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Bg(e[h])||(u=e[h],h++);const f={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Bg(e[h])){const C=e[h];e[h]=(t=C.next)===null||t===void 0?void 0:t.bind(C),e[h+1]=(s=C.error)===null||s===void 0?void 0:s.bind(C),e[h+2]=(o=C.complete)===null||o===void 0?void 0:o.bind(C)}let g,v,w;if(i instanceof Zt)v=ci(i.firestore,yo),w=Bd(i._key.path),g={next:C=>{e[h]&&e[h](NS(v,i,C))},error:e[h+1],complete:e[h+2]};else{const C=ci(i,as);v=ci(C.firestore,yo),w=C._query;const x=new z_(v);g={next:j=>{e[h]&&e[h](new AS(v,x,C,j))},error:e[h+1],complete:e[h+2]},TS(i._query)}return function(x,j,G,Q){const $=new iS(Q),fe=new FI(j,$,G);return x.asyncQueue.enqueueAndForget(async()=>LI(await Mg(x),fe)),()=>{$.eu(),x.asyncQueue.enqueueAndForget(async()=>MI(await Mg(x),fe))}}(D_(v),w,f,g)}function yf(i,e){return function(s,o){const u=new es;return s.asyncQueue.enqueueAndForget(async()=>QI(await aS(s),o,u)),u.promise}(D_(i),e)}function NS(i,e,t){const s=t.docs.get(e._key),o=new z_(i);return new j_(i,o,e._key,s,new Ca(t.hasPendingWrites,t.fromCache),e.converter)}function DS(){return new hf("serverTimestamp")}(function(e,t=!0){(function(o){wo=o})(Eo),uo(new ts("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),f=new yo(new vw(s.getProvider("auth-internal")),new Iw(s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ie(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ma(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),f._setSettings(u),f},"PUBLIC").setMultipleInstances(!0)),ui(ng,"4.7.5",e),ui(ng,"4.7.5","esm2017")})();function _f(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function B_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VS=B_,$_=new $a("auth","Firebase",B_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new xd("@firebase/auth");function OS(i,...e){qu.logLevel<=Re.WARN&&qu.warn(`Auth (${Eo}): ${i}`,...e)}function ku(i,...e){qu.logLevel<=Re.ERROR&&qu.error(`Auth (${Eo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(i,...e){throw Ef(i,...e)}function Un(i,...e){return Ef(i,...e)}function vf(i,e,t){const s=Object.assign(Object.assign({},VS()),{[e]:t});return new $a("auth","Firebase",s).create(e,{appName:i.name})}function Sr(i){return vf(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xS(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&En(i,"argument-error"),vf(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ef(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return $_.create(i,...e)}function me(i,e,...t){if(!i)throw Ef(e,...t)}function wr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ku(e),new Error(e)}function Pr(i,e){i||wr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function LS(){return Wg()==="http:"||Wg()==="https:"}function Wg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LS()||Q0()||"connection"in navigator)?navigator.onLine:!0}function bS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pr(t>e,"Short delay should be less than long delay!"),this.isMobile=H0()||Y0()}get(){return MS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(i,e){Pr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=new Ya(3e4,6e4);function vi(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Nr(i,e,t,s,o={}){return W_(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const f=qa(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:g},u);return K0()||(v.referrerPolicy="no-referrer"),q_.fetch()(H_(i,i.config.apiHost,t,f),v)})}async function W_(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},US),e);try{const o=new zS(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw wu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const f=u.ok?h.errorMessage:h.error.message,[g,v]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw wu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw wu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw wu(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw vf(i,w,v);En(i,w)}}catch(o){if(o instanceof kr)throw o;En(i,"network-request-failed",{message:String(o)})}}async function Xa(i,e,t,s,o={}){const u=await Nr(i,e,t,s,o);return"mfaPendingCredential"in u&&En(i,"multi-factor-auth-required",{_serverResponse:u}),u}function H_(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?wf(i.config,o):`${i.config.apiScheme}://${o}`}function jS(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Un(this.auth,"network-request-failed")),FS.get())})}}function wu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Un(i,e,s);return o.customData._tokenResponse=t,o}function Hg(i){return i!==void 0&&i.enterprise!==void 0}class BS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $S(i,e){return Nr(i,"GET","/v2/recaptchaConfig",vi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(i,e){return Nr(i,"POST","/v1/accounts:delete",e)}async function G_(i,e){return Nr(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WS(i,e=!1){const t=lt(i),s=await t.getIdToken(e),o=Tf(s);me(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Va(od(o.auth_time)),issuedAtTime:Va(od(o.iat)),expirationTime:Va(od(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function od(i){return Number(i)*1e3}function Tf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return ku("JWT malformed, contained fewer than 3 sections"),null;try{const o=fy(t);return o?JSON.parse(o):(ku("Failed to decode base64 JWT payload"),null)}catch(o){return ku("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Gg(i){const e=Tf(i);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof kr&&HS(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function HS({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Va(this.lastLoginAt),this.creationTime=Va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await vo(i,G_(t,{idToken:s}));me(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?K_(u.providerUserInfo):[],f=QS(i.providerData,h),g=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(f!=null&&f.length),w=g?v:!1,C={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Nd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,C)}async function KS(i){const e=lt(i);await Wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QS(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function K_(i){return i.map(e=>{var{providerId:t}=e,s=_f(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(i,e){const t=await W_(i,{},async()=>{const s=qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=H_(i,o,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",q_.fetch()(h,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function XS(i,e){return Nr(i,"POST","/v2/accounts:revokeToken",vi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){me(e.length!==0,"internal-error");const t=Gg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await YS(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new oo;return s&&(me(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(me(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(me(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(i,e){me(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=_f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Nd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await vo(this,this.stsTokenManager.getToken(this.auth,e));return me(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return WS(this,e)}reload(){return KS(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Wu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(Sr(this.auth));const e=await this.getIdToken();return await vo(this,qS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,f,g,v,w;const C=(s=t.displayName)!==null&&s!==void 0?s:void 0,x=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,G=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Q=(f=t.tenantId)!==null&&f!==void 0?f:void 0,$=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,fe=(v=t.createdAt)!==null&&v!==void 0?v:void 0,pe=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ge,emailVerified:we,isAnonymous:Fe,providerData:Te,stsTokenManager:N}=t;me(ge&&N,e,"internal-error");const I=oo.fromJSON(this.name,N);me(typeof ge=="string",e,"internal-error"),ni(C,e.name),ni(x,e.name),me(typeof we=="boolean",e,"internal-error"),me(typeof Fe=="boolean",e,"internal-error"),ni(j,e.name),ni(G,e.name),ni(Q,e.name),ni($,e.name),ni(fe,e.name),ni(pe,e.name);const A=new Tr({uid:ge,auth:e,email:x,emailVerified:we,displayName:C,isAnonymous:Fe,photoURL:G,phoneNumber:j,tenantId:Q,stsTokenManager:I,createdAt:fe,lastLoginAt:pe});return Te&&Array.isArray(Te)&&(A.providerData=Te.map(R=>Object.assign({},R))),$&&(A._redirectEventId=$),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new oo;o.updateFromServerResponse(t);const u=new Tr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Wu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];me(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?K_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),f=new oo;f.updateFromIdToken(s);const g=new Tr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Nd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Map;function Ir(i){Pr(i instanceof Function,"Expected a class definition");let e=Kg.get(i);return e?(Pr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Kg.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Q_.type="NONE";const Qg=Q_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(i,e,t){return`firebase:${i}:${e}:${t}`}class ao{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Nu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Nu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ao(Ir(Qg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Ir(Qg);const h=Nu(s,e.config.apiKey,e.name);let f=null;for(const v of t)try{const w=await v._get(h);if(w){const C=Tr._fromJSON(e,w);v!==u&&(f=C),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new ao(u,e,s):(u=g[0],f&&await u._set(h,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new ao(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Y_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tv(e))return"Blackberry";if(nv(e))return"Webos";if(X_(e))return"Safari";if((e.includes("chrome/")||J_(e))&&!e.includes("edge/"))return"Chrome";if(ev(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Y_(i=Ut()){return/firefox\//i.test(i)}function X_(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function J_(i=Ut()){return/crios\//i.test(i)}function Z_(i=Ut()){return/iemobile/i.test(i)}function ev(i=Ut()){return/android/i.test(i)}function tv(i=Ut()){return/blackberry/i.test(i)}function nv(i=Ut()){return/webos/i.test(i)}function If(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function JS(i=Ut()){var e;return If(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZS(){return X0()&&document.documentMode===10}function rv(i=Ut()){return If(i)||ev(i)||nv(i)||tv(i)||/windows phone/i.test(i)||Z_(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(i,e=[]){let t;switch(i){case"Browser":t=Yg(Ut());break;case"Worker":t=`${Yg(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Eo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,f)=>{try{const g=e(u);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(i,e={}){return Nr(i,"GET","/v2/passwordPolicy",vi(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=6;class r1{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:n1,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xg(this),this.idTokenSubscription=new Xg(this),this.beforeStateQueue=new e1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ir(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await ao.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await G_(this,{idToken:e}),s=await Tr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Mn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mn(this.app))return Promise.reject(Sr(this));const t=e?lt(e):null;return t&&me(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(Sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mn(this.app)?Promise.reject(Sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await t1(this),t=new r1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $a("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await XS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ir(e)||this._popupRedirectResolver;me(t,this,"argument-error"),this.redirectPersistenceManager=await ao.create(this,[Ir(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(f,this,"internal-error"),f.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&OS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ei(i){return lt(i)}class Xg{constructor(e){this.auth=e,this.observer=null,this.addObserver=sE(t=>this.observer=t)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function s1(i){yc=i}function sv(i){return yc.loadJS(i)}function o1(){return yc.recaptchaEnterpriseScript}function a1(){return yc.gapiScript}function l1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class u1{constructor(){this.enterprise=new c1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class c1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const h1="recaptcha-enterprise",ov="NO_RECAPTCHA";class d1{constructor(e){this.type=h1,this.auth=Ei(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,f)=>{$S(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const v=new BS(g);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(g=>{f(g)})})}function o(u,h,f){const g=window.grecaptcha;Hg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(ov)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new u1().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(f=>{if(!t&&Hg(window.grecaptcha))o(f,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=o1();g.length!==0&&(g+=f),sv(g).then(()=>{o(f,u,h)}).catch(v=>{h(v)})}}).catch(f=>{h(f)})})}}async function Jg(i,e,t,s=!1,o=!1){const u=new d1(i);let h;if(o)h=ov;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,v=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Dd(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Jg(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Jg(i,e,t,t==="getOobCode");return s(i,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(i,e){const t=Md(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(xu(u,e??{}))return o;En(o,"already-initialized")}return t.initialize({options:e})}function p1(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ir);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function m1(i,e,t){const s=Ei(i);me(s._canInitEmulator,s,"emulator-config-failed"),me(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=av(e),{host:h,port:f}=g1(e),g=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),y1()}function av(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function g1(i){const e=av(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Zg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Zg(h)}}}function Zg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function y1(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,t){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}async function _1(i,e){return Nr(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(i,e){return Xa(i,"POST","/v1/accounts:signInWithPassword",vi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(i,e){return Xa(i,"POST","/v1/accounts:signInWithEmailLink",vi(i,e))}async function w1(i,e){return Xa(i,"POST","/v1/accounts:signInWithEmailLink",vi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends Sf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ba(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ba(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(e,t,"signInWithPassword",v1);case"emailLink":return E1(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(e,s,"signUpPassword",_1);case"emailLink":return w1(e,{idToken:t,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(i,e){return Xa(i,"POST","/v1/accounts:signInWithIdp",vi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1="http://localhost";class rs extends Sf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):En("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=_f(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new rs(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return lo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,lo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lo(e,t)}buildRequest(){const e={requestUri:T1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S1(i){const e=Ta(Ia(i)).link,t=e?Ta(Ia(e)).deep_link_id:null,s=Ta(Ia(i)).deep_link_id;return(s?Ta(Ia(s)).link:null)||s||t||e||i}class Af{constructor(e){var t,s,o,u,h,f;const g=Ta(Ia(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,C=I1((o=g.mode)!==null&&o!==void 0?o:null);me(v&&w&&C,"argument-error"),this.apiKey=v,this.operation=C,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=S1(e);try{return new Af(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.providerId=Ro.PROVIDER_ID}static credential(e,t){return Ba._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Af.parseLink(t);return me(s,"argument-error"),Ba._fromEmailAndCode(e,s.code,s.tenantId)}}Ro.PROVIDER_ID="password";Ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends Rf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Ja{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rs._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Er.credential(t,s)}catch{return null}}}Er.GOOGLE_SIGN_IN_METHOD="google.com";Er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Ja{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.GITHUB_SIGN_IN_METHOD="github.com";ii.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Ja{constructor(){super("twitter.com")}static credential(e,t){return rs._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return si.credential(t,s)}catch{return null}}}si.TWITTER_SIGN_IN_METHOD="twitter.com";si.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A1(i,e){return Xa(i,"POST","/v1/accounts:signUp",vi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Tr._fromIdTokenResponse(e,s,o),h=ey(s);return new is({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=ey(s);return new is({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function ey(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu extends kr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Hu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Hu(e,t,s,o)}}function lv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Hu._fromErrorAndOperation(i,u,e,s):u})}async function R1(i,e,t=!1){const s=await vo(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return is._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(i,e,t=!1){const{auth:s}=i;if(Mn(s.app))return Promise.reject(Sr(s));const o="reauthenticate";try{const u=await vo(i,lv(s,o,e,i),t);me(u.idToken,s,"internal-error");const h=Tf(u.idToken);me(h,s,"internal-error");const{sub:f}=h;return me(i.uid===f,s,"user-mismatch"),is._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&En(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(i,e,t=!1){if(Mn(i.app))return Promise.reject(Sr(i));const s="signIn",o=await lv(i,s,e),u=await is._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function P1(i,e){return uv(Ei(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(i){const e=Ei(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function k1(i,e,t){if(Mn(i.app))return Promise.reject(Sr(i));const s=Ei(i),h=await Dd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",A1).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&cv(i),g}),f=await is._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(f.user),f}function N1(i,e,t){return Mn(i.app)?Promise.reject(Sr(i)):P1(lt(i),Ro.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&cv(i),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(i,e){return Nr(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=lt(i),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await vo(s,D1(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const f=s.providerData.find(({providerId:g})=>g==="password");f&&(f.displayName=s.displayName,f.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function O1(i,e,t,s){return lt(i).onIdTokenChanged(e,t,s)}function x1(i,e,t){return lt(i).beforeAuthStateChanged(e,t)}function hv(i,e,t,s){return lt(i).onAuthStateChanged(e,t,s)}function L1(i){return lt(i).signOut()}const Gu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gu,"1"),this.storage.removeItem(Gu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=1e3,b1=10;class fv extends dv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);ZS()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,b1):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},M1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fv.type="LOCAL";const U1=fv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv extends dv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pv.type="SESSION";const mv=pv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new _c(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async v=>v(t.origin,u)),g=await F1(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((f,g)=>{const v=Cf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(C){const x=C;if(x.data.eventId===v)switch(x.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(x.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(){return window}function z1(i){er().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function B1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $1(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function q1(){return gv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="firebaseLocalStorageDb",W1=1,Ku="firebaseLocalStorage",_v="fbase_key";class Za{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vc(i,e){return i.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function H1(){const i=indexedDB.deleteDatabase(yv);return new Za(i).toPromise()}function Vd(){const i=indexedDB.open(yv,W1);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Ku,{keyPath:_v})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Ku)?e(s):(s.close(),await H1(),e(await Vd()))})})}async function ty(i,e,t){const s=vc(i,!0).put({[_v]:e,value:t});return new Za(s).toPromise()}async function G1(i,e){const t=vc(i,!1).get(e),s=await new Za(t).toPromise();return s===void 0?null:s.value}function ny(i,e){const t=vc(i,!0).delete(e);return new Za(t).toPromise()}const K1=800,Q1=3;class vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Q1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(q1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await B1(),!this.activeServiceWorker)return;this.sender=new j1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vd();return await ty(e,Gu,"1"),await ny(e,Gu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ty(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>G1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ny(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=vc(o,!1).getAll();return new Za(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),K1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vv.type="LOCAL";const Y1=vv;new Ya(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(i,e){return e?Ir(e):(me(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf extends Sf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function X1(i){return uv(i.auth,new Pf(i),i.bypassAuthState)}function J1(i){const{auth:e,user:t}=i;return me(t,e,"internal-error"),C1(t,new Pf(i),i.bypassAuthState)}async function Z1(i){const{auth:e,user:t}=i;return me(t,e,"internal-error"),R1(t,new Pf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return X1;case"linkViaPopup":case"linkViaRedirect":return Z1;case"reauthViaPopup":case"reauthViaRedirect":return J1;default:En(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=new Ya(2e3,1e4);async function tA(i,e,t){if(Mn(i.app))return Promise.reject(Un(i,"operation-not-supported-in-this-environment"));const s=Ei(i);xS(i,e,Rf);const o=Ev(s,t);return new Ji(s,"signInViaPopup",e,o).executeNotNull()}class Ji extends wv{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Ji.currentPopupAction&&Ji.currentPopupAction.cancel(),Ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=Cf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eA.get())};e()}}Ji.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="pendingRedirect",Du=new Map;class rA extends wv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Du.get(this.auth._key());if(!e){try{const s=await iA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Du.set(this.auth._key(),e)}return this.bypassAuthState||Du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iA(i,e){const t=aA(e),s=oA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function sA(i,e){Du.set(i._key(),e)}function oA(i){return Ir(i._redirectPersistence)}function aA(i){return Nu(nA,i.config.apiKey,i.name)}async function lA(i,e,t=!1){if(Mn(i.app))return Promise.reject(Sr(i));const s=Ei(i),o=Ev(s,e),h=await new rA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=10*60*1e3;class cA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Tv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Un(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uA&&this.cachedEventUids.clear(),this.cachedEventUids.has(ry(e))}saveEventToCache(e){this.cachedEventUids.add(ry(e)),this.lastProcessedEventTime=Date.now()}}function ry(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Tv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hA(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tv(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(i,e={}){return Nr(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pA=/^https?/;async function mA(i){if(i.config.emulator)return;const{authorizedDomains:e}=await dA(i);for(const t of e)try{if(gA(t))return}catch{}En(i,"unauthorized-domain")}function gA(i){const e=kd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!pA.test(t))return!1;if(fA.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=new Ya(3e4,6e4);function iy(){const i=er().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function _A(i){return new Promise((e,t)=>{var s,o,u;function h(){iy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iy(),t(Un(i,"network-request-failed"))},timeout:yA.get()})}if(!((o=(s=er().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=er().gapi)===null||u===void 0)&&u.load)h();else{const f=l1("iframefcb");return er()[f]=()=>{gapi.load?h():t(Un(i,"network-request-failed"))},sv(`${a1()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Vu=null,e})}let Vu=null;function vA(i){return Vu=Vu||_A(i),Vu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=new Ya(5e3,15e3),wA="__/auth/iframe",TA="emulator/auth/iframe",IA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AA(i){const e=i.config;me(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?wf(e,TA):`https://${i.config.authDomain}/${wA}`,s={apiKey:e.apiKey,appName:i.name,v:Eo},o=SA.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${qa(s).slice(1)}`}async function RA(i){const e=await vA(i),t=er().gapi;return me(t,i,"internal-error"),e.open({where:document.body,url:AA(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IA,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Un(i,"network-request-failed"),f=er().setTimeout(()=>{u(h)},EA.get());function g(){er().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PA=500,kA=600,NA="_blank",DA="http://localhost";class sy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VA(i,e,t,s=PA,o=kA){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g=Object.assign(Object.assign({},CA),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ut().toLowerCase();t&&(f=J_(v)?NA:t),Y_(v)&&(e=e||DA,g.scrollbars="yes");const w=Object.entries(g).reduce((x,[j,G])=>`${x}${j}=${G},`,"");if(JS(v)&&f!=="_self")return OA(e||"",f),new sy(null);const C=window.open(e||"",f,w);me(C,i,"popup-blocked");try{C.focus()}catch{}return new sy(C)}function OA(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="__/auth/handler",LA="emulator/auth/handler",MA=encodeURIComponent("fac");async function oy(i,e,t,s,o,u){me(i.config.authDomain,i,"auth-domain-config-required"),me(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Eo,eventId:o};if(e instanceof Rf){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",iE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,C]of Object.entries({}))h[w]=C}if(e instanceof Ja){const w=e.getScopes().filter(C=>C!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await i._getAppCheckToken(),v=g?`#${MA}=${encodeURIComponent(g)}`:"";return`${bA(i)}?${qa(f).slice(1)}${v}`}function bA({config:i}){return i.emulator?wf(i,LA):`https://${i.authDomain}/${xA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="webStorageSupport";class UA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mv,this._completeRedirectFn=lA,this._overrideRedirectResult=sA}async _openPopup(e,t,s,o){var u;Pr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await oy(e,t,s,kd(),o);return VA(e,h,Cf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await oy(e,t,s,kd(),o);return z1(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Pr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await RA(e),s=new cA(e);return t.register("authEvent",o=>(me(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ad,{type:ad},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[ad];h!==void 0&&t(!!h),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rv()||X_()||If()}}const FA=UA;var ay="@firebase/auth",ly="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BA(i){uo(new ts("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;me(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iv(i)},v=new i1(s,o,u,g);return p1(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),uo(new ts("auth-internal",e=>{const t=Ei(e.getProvider("auth").getImmediate());return(s=>new jA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ui(ay,ly,zA(i)),ui(ay,ly,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=5*60,qA=gy("authIdTokenMaxAge")||$A;let uy=null;const WA=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>qA)return;const o=t==null?void 0:t.token;uy!==o&&(uy=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function HA(i=Ey()){const e=Md(i,"auth");if(e.isInitialized())return e.getImmediate();const t=f1(i,{popupRedirectResolver:FA,persistence:[Y1,U1,mv]}),s=gy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=WA(u.toString());x1(t,h,()=>h(t.currentUser)),O1(t,f=>h(f))}}const o=py("auth");return o&&m1(t,`http://${o}`),t}function GA(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}s1({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Un("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",GA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BA("Browser");const KA={apiKey:"AIzaSyCfrj364XdQGKkX0gsNA2l0LWs1JJSaQ1I",authDomain:"moody-e6de7.firebaseapp.com",projectId:"moody-e6de7",storageBucket:"moody-e6de7.firebasestorage.app"},kf=vy(KA),wi=HA(kf),QA=new Er,YA=hS(kf),ls=cS(YA,"posts");kf.options.projectId;const XA=async(i,e,t)=>{if(!i.body.trim()||!t){alert("Write about your feelling and select your mood emoji");return}console.log(t);const s=wi.currentUser;try{await kS(ls,{...i,uid:s.uid,createdAt:DS(),mood:t}),e({body:""})}catch(o){console.error("Error adding post:",o)}},JA=async i=>{try{const e=of(ls,i);await PS(e)}catch(e){console.error("Error deleting post:",e)}},ZA=async(i,e)=>{try{const t=of(ls,i);await CS(t,{body:e})}catch(t){console.error("Error updating post:",t)}},cy=(i,e)=>{const t=fc(ls,Zn("uid","==",i.uid),mc("createdAt","desc"));return gc(t,o=>{const u=o.docs.map(h=>({id:h.id,...h.data()}));e(u)})},eR=(i,e)=>{const t=new Date,s=new Date;t.setHours(0,0,0,0),s.setHours(23,59,59,999);const o=fc(ls,Zn("uid","==",i.uid),Zn("createdAt",">=",t),Zn("createdAt","<=",s),mc("createdAt","desc"));return gc(o,h=>{const f=h.docs.map(g=>({id:g.id,...g.data()}));e(f)})},tR=(i,e)=>{const t=new Date,s=new Date;t.setDate(t.getDate()-7),s.setDate(s.getDate());const o=fc(ls,Zn("uid","==",i.uid),Zn("createdAt",">=",t),Zn("createdAt","<=",s),mc("createdAt","desc"));return gc(o,h=>{const f=h.docs.map(g=>({id:g.id,...g.data()}));e(f)})},nR=(i,e)=>{const t=new Date,s=new Date;t.setDate(t.getDate()-30),s.setDate(s.getDate());const o=fc(ls,Zn("uid","==",i.uid),Zn("createdAt",">=",t),Zn("createdAt","<=",s),mc("createdAt","desc"));return gc(o,h=>{const f=h.docs.map(g=>({id:g.id,...g.data()}));e(f)})},rR=(i,e,t)=>{switch(i){case"Today":eR(e,t);break;case"Week":tR(e,t);break;case"Month":nR(e,t);break;case"All":cy(e,t);default:cy(e,t);break}},Iv=(i="all-filter-btn",e,t)=>hv(wi,o=>{e(u=>u.map(h=>{if(h.id===i){const f={...h,selected:"selected-filter"};return rR(h.value,o,t),f}else return{...h,selected:""}}))}),iR=(i,e,t,s,o)=>hv(wi,h=>{if(h){e(!0),i(v=>({...v,name:h.displayName,email:h.email,photoURL:h.photoURL,successMessage:"",errorMessage:""}));let g=o.find(v=>v.selected==="selected-filter").id;Iv(g,s,t)}else e(!1),i(f=>({...f,name:"",email:"",password:"",photoURL:"./images/default-profile-picture.jpeg",errorMessage:"",successMessage:""}))}),sR=async i=>{try{const e=await tA(wi,QA),{email:t}=e.user;i(s=>({...s,email:t,successMessage:"Google sign-in successful!",errorMessage:""}))}catch{i(t=>({...t,errorMessage:"Failed to sign in with Google. Please try again."}))}},oR=async(i,e)=>{try{await N1(wi,i.email,i.password),e(t=>({...t,successMessage:"Sign-in successful!",errorMessage:""}))}catch(t){e(s=>({...s,errorMessage:t.message,successMessage:""}))}},aR=async(i,e)=>{try{const s=(await k1(wi,i.email,i.password)).user;e(o=>({...o,successMessage:`Account created successfully for ${s.email}`,errorMessage:""}))}catch(t){e(s=>({...s,errorMessage:t.message,successMessage:""}))}},lR=i=>{L1(wi).then(()=>{i({email:"",password:"",errorMessage:"",successMessage:""})}).catch(e=>{console.error("Error signing out:",e)})},uR=(i,e)=>{if(!e.name&&!e.photoURL)return;const t={displayName:e.name,photoURL:e.photoURL};V1(wi.currentUser,t).then(()=>{i(s=>({...s,photoURL:t.photoURL,name:t.displayName}))}).catch(s=>{console.error("Error updating profile:",s)})};function cR({updatedUser:i,handleUpdateProfile:e,handleUpdateProfileChange:t,closeModal:s}){return re.jsx("div",{className:"modal-overlay",children:re.jsxs("div",{className:"modal",children:[re.jsx("button",{className:"close-btn",onClick:s,children:"x"}),re.jsx("h2",{children:"Update Profile"}),re.jsx("input",{id:"name",type:"text",value:i.name,onChange:t,placeholder:"John Doe",required:!0}),re.jsx("input",{id:"photoURL",type:"text",value:i.photoURL,onChange:t,placeholder:"https://example.com/profile-picture.jpg",required:!0}),re.jsx("button",{className:"primary-btn",onClick:e,children:"Update"})]})})}function hR({handleNewPostChange:i,handleAddPost:e,newPost:t}){return re.jsxs("div",{className:"post-section",children:[re.jsx("textarea",{id:"body",placeholder:"Write down how you're feeling...",value:t.body,onChange:i}),re.jsx("button",{id:"post-btn",className:"primary-btn",onClick:e,children:"Post"})]})}function dR({user:i,onSignOut:e,updatedUser:t,handleUpdateProfile:s,handleUpdateProfileChange:o,handleAddPost:u,handleDeletePost:h,handleUpdatePost:f,handleUpdatePostChange:g,handleNewPostChange:v,handleMoodClick:w,posts:C,newPost:x,mood:j,displayFormatedDate:G,replaceNewLines:Q,filterBtns:$,handleFilterBtnClick:fe,editingPost:pe,updateEditingPost:ge}){const[we,Fe]=ln.useState(!1),Te=()=>Fe(!we),N=j.map(R=>re.jsxs("button",{id:R.id,className:`mood-emoji-btn ${R.selected}`,onClick:w,children:[re.jsx("img",{src:R.imgUrl,alt:`An ${R.name} face emoji`}),R.name]},R.id)),I=C.map(R=>re.jsxs("div",{className:"post",children:[re.jsxs("div",{className:"header",children:[R.createdAt?re.jsx("h3",{children:G(R.createdAt)}):"Processing date...",re.jsx("img",{src:`./emojis/${R.mood}.png`})]}),re.jsxs("p",{children:[" ",Q(R.body)," "]}),re.jsxs("div",{className:"footer",children:[re.jsx("button",{onClick:()=>ge(R.id,R.body),className:"edit-color","aria-pressed":pe.id===R.id,children:"Edit"}),re.jsx("button",{onClick:()=>h(R.id),className:"delete-color",children:"Delete"})]})]},R.id)),A=$.map(R=>re.jsx("button",{id:R.id,className:`${R.id.split("-")[1]}-btn ${R.selected}`,onClick:fe,"aria-pressed":R.selected,children:R.value},R.id));return re.jsx("section",{id:"logged-in-view",children:re.jsxs("div",{className:"container",children:[re.jsxs("nav",{children:[re.jsx("button",{className:"update-profile-btn scale",onClick:Te,children:"Update Profile"}),re.jsx("button",{className:"sign-out-btn scale",onClick:e,children:re.jsx("img",{src:"./icons/icon-sign-out.svg",className:"icon-img-btn",alt:"Sign out icon"})})]}),re.jsx("div",{className:"app-container",children:re.jsxs("div",{className:"user-section",children:[re.jsx("img",{id:"user-profile-picture",src:i.photoURL,alt:`${i.name?i.name:"User"}'s profile picture`}),re.jsxs("h2",{id:"user-greeting",children:["Hello, ",i.name?i.name.split(" ")[0]:"my friend","! How are you?"]})]})}),re.jsx("div",{className:"mood-emojis",children:N}),re.jsx(hR,{handleNewPostChange:v,handleAddPost:u,newPost:x}),re.jsxs("div",{className:"filters-and-posts-section",children:[re.jsx("div",{className:"filters-section",children:A}),re.jsx("div",{className:"posts-section",children:C.length>0?I:re.jsx("p",{children:"No Posts Available"})})]}),pe.show&&re.jsx("div",{className:"modal-overlay",children:re.jsxs("div",{className:"modal edit-post-section",children:[re.jsx("textarea",{id:"body",placeholder:"Tell others how you're feeling...",value:pe.body,onChange:g}),re.jsx("button",{onClick:f,children:"Update Post"})]})}),we&&re.jsx(cR,{updatedUser:t,handleUpdateProfile:s,handleUpdateProfileChange:o,closeModal:Te})]})})}function fR({user:i,handleSignIn:e,handleCreateAccount:t,handleChange:s}){return re.jsxs("div",{className:"auth-fields-and-buttons",children:[re.jsx("input",{id:"email",type:"email",placeholder:"example@gmail.com",value:i.email,onChange:s,required:!0}),re.jsx("input",{id:"password",type:"password",placeholder:"*******",value:i.password,onChange:s,required:!0}),i.errorMessage&&re.jsx("p",{style:{color:"red"},children:i.errorMessage}),i.successMessage&&re.jsx("p",{style:{color:"green"},children:i.successMessage}),re.jsx("button",{id:"sign-in-btn",className:"primary-btn",onClick:e,children:"Sign in"}),re.jsx("button",{id:"create-account-btn",className:"secondary-btn",onClick:t,children:"Create Account"})]})}function pR({onGoogleSignIn:i}){return re.jsx("div",{className:"provider-buttons",children:re.jsxs("button",{id:"sign-in-with-google-btn",className:"provider-btn",onClick:i,children:[re.jsx("img",{src:"./providers/google.png",alt:"Google logo",className:"google-btn-logo"}),"Sign in with Google"]})})}function mR({onGoogleSignIn:i,handleSignIn:e,handleCreateAccount:t,handleChange:s,user:o}){return re.jsx("div",{id:"logged-out-view",children:re.jsxs("div",{className:"container",children:[re.jsx("h1",{className:"app-title",children:"Moody"}),re.jsx(pR,{onGoogleSignIn:i}),re.jsx(fR,{user:o,handleSignIn:e,handleCreateAccount:t,handleChange:s})]})})}const Tu=(i,e)=>{const{id:t,value:s}=i.target;e(o=>({...o,[t]:s}))},gR=(i,e)=>{i(t=>({...t,[e]:!t[e]}))},yR=(i,e,t)=>{const s=i.target.id;_R(e,s),t(i.target.id.slice(5))},_R=(i,e)=>{i(t=>t.map(s=>s.id===e?{...s,selected:"selected-emoji"}:{...s,selected:"unselected-emoji"}))},vR=(i,e)=>{i(t=>t.map(s=>({...s,selected:""}))),e("")},ER=i=>{const e=i.toDate(),t=e.getDate(),s=e.getFullYear(),u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()];let h=e.getHours(),f=e.getMinutes();return h=h<10?"0"+h:h,f=f<10?"0"+f:f,`${t} ${u} ${s} - ${h}:${f}`},wR=i=>i.split(/\n/g).map((e,t)=>re.jsxs(re.Fragment,{children:[e,re.jsx("br",{},t)]}));function TR(){const[i,e]=ln.useState({name:"",email:"",password:"",photoURL:"./images/default-profile-picture.jpeg",errorMessage:"",successMessage:""}),[t,s]=ln.useState([]),[o,u]=ln.useState(""),[h,f]=ln.useState({body:""}),[g,v]=ln.useState({show:!1,id:"",body:""}),[w,C]=ln.useState({name:"",photoURL:""}),[x,j]=ln.useState([{name:"Awful",imgUrl:"./emojis/1.png",id:"mood-1",selected:""},{name:"Bad",imgUrl:"./emojis/2.png",id:"mood-2",selected:""},{name:"Meh",imgUrl:"./emojis/3.png",id:"mood-3",selected:""},{name:"Good",imgUrl:"./emojis/4.png",id:"mood-4",selected:""},{name:"Amazing",imgUrl:"./emojis/5.png",id:"mood-5",selected:""}]),[G,Q]=ln.useState(JSON.parse(localStorage.getItem("filterBtns"))||[{id:"today-filter-btn",value:"Today",selected:""},{id:"week-filter-btn",value:"Week",selected:""},{id:"month-filter-btn",value:"Month",selected:""},{id:"all-filter-btn",value:"All",selected:""}]),[$,fe]=ln.useState(!1);ln.useEffect(()=>iR(e,fe,s,Q,G),[]),ln.useEffect(()=>{localStorage.setItem("filterBtns",JSON.stringify(G))},[G]);const pe=async D=>{D.preventDefault(),await oR(i,e)},ge=async D=>{D.preventDefault(),await aR(i,e)},we=()=>{lR(e),C({name:"",photoURL:""})},Fe=async()=>{await sR(e)},Te=()=>{uR(e,w),C({name:"",photoURL:""})},N=async()=>{await XA(h,f,o),vR(j,u)},I=async D=>{await JA(D)},A=async()=>{g.id&&(await ZA(g.id,g.body),R(" "," "))},R=(D,S)=>{gR(v,"show"),v(Ye=>({...Ye,id:D,body:S}))},V=(D,S)=>{Iv(D.target.id,S,s)};return re.jsx("main",{id:"App",children:$?re.jsx(dR,{user:i,onSignOut:we,updatedUser:w,handleUpdateProfile:Te,handleUpdateProfileChange:D=>Tu(D,C),handleNewPostChange:D=>Tu(D,f),handleAddPost:N,handleDeletePost:I,handleUpdatePost:A,handleUpdatePostChange:D=>Tu(D,v),newPost:h,posts:t,editingPost:g,updateEditingPost:R,mood:x,handleMoodClick:D=>yR(D,j,u),displayFormatedDate:ER,replaceNewLines:wR,filterBtns:G,handleFilterBtnClick:D=>V(D,Q)}):re.jsx(mR,{onGoogleSignIn:Fe,user:i,handleSignIn:pe,handleCreateAccount:ge,handleChange:D=>Tu(D,e)})})}L0.createRoot(document.getElementById("root")).render(re.jsx(ln.StrictMode,{children:re.jsx(TR,{})}));
