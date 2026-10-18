var Vd=Object.defineProperty;var Gd=(n,e,t)=>e in n?Vd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var It=(n,e,t)=>Gd(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ic(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},ki=[],Nn=()=>{},Uf=()=>!1,Fo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Oo=n=>n.startsWith("onUpdate:"),Dt=Object.assign,rc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Wd=Object.prototype.hasOwnProperty,Qe=(n,e)=>Wd.call(n,e),Ne=Array.isArray,pi=n=>xs(n)==="[object Map]",Tr=n=>xs(n)==="[object Set]",jc=n=>xs(n)==="[object Date]",We=n=>typeof n=="function",mt=n=>typeof n=="string",On=n=>typeof n=="symbol",lt=n=>n!==null&&typeof n=="object",Nf=n=>(lt(n)||We(n))&&We(n.then)&&We(n.catch),Ff=Object.prototype.toString,xs=n=>Ff.call(n),Xd=n=>xs(n).slice(8,-1),Of=n=>xs(n)==="[object Object]",sc=n=>mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,es=ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},$d=/-\w/g,Xt=Bo(n=>n.replace($d,e=>e.slice(1).toUpperCase())),qd=/\B([A-Z])/g,Yi=Bo(n=>n.replace(qd,"-$1").toLowerCase()),zo=Bo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ra=Bo(n=>n?`on${zo(n)}`:""),In=(n,e)=>!Object.is(n,e),oo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Bf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},oc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Kc;const ko=()=>Kc||(Kc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ar(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=mt(i)?Zd(i):Ar(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(mt(n)||lt(n))return n}const Yd=/;(?![^(]*\))/g,jd=/:([^]+)/,Kd=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Zd(n){const e={};return n.replace(Kd,t=>t.startsWith("/*")?"":t).split(Yd).forEach(t=>{if(t){const i=t.split(jd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Tt(n){let e="";if(mt(n))e=n;else if(Ne(n))for(let t=0;t<n.length;t++){const i=Tt(n[t]);i&&(e+=i+" ")}else if(lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Jd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Qd=ic(Jd);function zf(n){return!!n||n===""}function ep(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=Ur(n[r],e[r],t);return i}function Zc(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of n){let o=-1;for(let a=0;a<i.length;a++)if(!r[a]&&Ur(s,i[a],t)){o=a;break}if(o<0)return!1;r[o]=1}return!0}function tp(n,e,t){let i=pi(n),r=pi(e);if(i||r||(i=Tr(n),r=Tr(e),i||r))return i&&r?Zc(n,e,t):!1;const s=Object.keys(n).length,o=Object.keys(e).length;if(s!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),u=e.hasOwnProperty(a);if(l&&!u||!l&&u||!Ur(n[a],e[a],t))return!1}return String(n)===String(e)}function Jc(n,e,t,i){t||(t=[new Map,new Map]);const[r,s]=t;if(r.has(n)||s.has(e))return r.get(n)===e&&s.get(e)===n;r.set(n,e),s.set(e,n);const o=i(n,e,t);return r.delete(n),s.delete(e),o}function Ur(n,e,t){if(n===e)return!0;let i=jc(n),r=jc(e);return i||r?i&&r?n.getTime()===e.getTime():!1:(i=On(n),r=On(e),i||r?n===e:(i=Ne(n),r=Ne(e),i||r?i&&r?Jc(n,e,t,ep):!1:(i=lt(n),r=lt(e),i||r?!i||!r?!1:Jc(n,e,t,tp):String(n)===String(e))))}function kf(n,e){return n.findIndex(t=>Ur(t,e))}const Hf=n=>!!(n&&n.__v_isRef===!0),je=n=>mt(n)?n:n==null?"":Ne(n)||lt(n)&&(n.toString===Ff||!We(n.toString))?Hf(n)?je(n.value):JSON.stringify(n,Vf,2):String(n),Vf=(n,e)=>Hf(e)?Vf(n,e.value):pi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[sa(i,s)+" =>"]=r,t),{})}:Tr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>sa(t))}:On(e)?sa(e):lt(e)&&!Ne(e)&&!Of(e)?String(e):e,sa=(n,e="")=>{var t;return On(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class np{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Lt&&(Lt.active?(this.parent=Lt,this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Lt;try{return Lt=this,e()}finally{Lt=t}}}on(){++this._on===1&&(this.prevScope=Lt,Lt=this)}off(){if(this._on>0&&--this._on===0){if(Lt===this)Lt=this.prevScope;else{let e=Lt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ip(){return Lt}let ut;const oa=new WeakSet;class Gf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Lt&&(Lt.active?Lt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,oa.has(this)&&(oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qc(this),$f(this);const e=ut,t=bn;ut=this,bn=!0;try{return this.fn()}finally{qf(this),ut=e,bn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cc(e);this.deps=this.depsTail=void 0,Qc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ka(this)&&this.run()}get dirty(){return Ka(this)}}let Wf=0,ts,ns;function Xf(n,e=!1){if(n.flags|=8,e){n.next=ns,ns=n;return}n.next=ts,ts=n}function ac(){Wf++}function lc(){if(--Wf>0)return;if(ns){let e=ns;for(ns=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ts;){let e=ts;for(ts=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function $f(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function qf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),cc(i),rp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ka(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Yf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Yf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===cs)||(n.globalVersion=cs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ka(n))))return;n.flags|=2;const e=n.dep,t=ut,i=bn;ut=n,bn=!0;try{$f(n);const r=n.fn(n._value);(e.version===0||In(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ut=t,bn=i,qf(n),n.flags&=-3}}function cc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)cc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function rp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let bn=!0;const jf=[];function Bn(){jf.push(bn),bn=!1}function zn(){const n=jf.pop();bn=n===void 0?!0:n}function Qc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ut;ut=void 0;try{e()}finally{ut=t}}}let cs=0;class sp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ut||!bn||ut===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ut)t=this.activeLink=new sp(ut,this),ut.deps?(t.prevDep=ut.depsTail,ut.depsTail.nextDep=t,ut.depsTail=t):ut.deps=ut.depsTail=t,Kf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ut.depsTail,t.nextDep=void 0,ut.depsTail.nextDep=t,ut.depsTail=t,ut.deps===t&&(ut.deps=i)}return t}trigger(e){this.version++,cs++,this.notify(e)}notify(e){ac();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{lc()}}}function Kf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Kf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Za=new WeakMap,Wi=Symbol(""),Ja=Symbol(""),us=Symbol("");function Bt(n,e,t){if(bn&&ut){let i=Za.get(n);i||Za.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new uc),r.map=i,r.key=t),r.track()}}function Jn(n,e,t,i,r,s){const o=Za.get(n);if(!o){cs++;return}const a=l=>{l&&l.trigger()};if(ac(),e==="clear")o.forEach(a);else{const l=Ne(n),u=l&&sc(t);if(l&&t==="length"){const c=Number(i);o.forEach((p,h)=>{(h==="length"||h===us||!On(h)&&h>=c)&&a(p)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(us)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Wi)),pi(n)&&a(o.get(Ja)));break;case"delete":l||(a(o.get(Wi)),pi(n)&&a(o.get(Ja)));break;case"set":pi(n)&&a(o.get(Wi));break}}lc()}function Qi(n){const e=it(n);return e===n||(Bt(e,"iterate",us),hn(n))?e:kn(n)?mi(n)?e.map(t=>vi(dn(t))):e.map(vi):e.map(dn)}function Ho(n){return Bt(n=it(n),"iterate",us),n}function Rn(n,e){return kn(n)?vi(mi(n)?dn(e):e):dn(e)}const op={__proto__:null,[Symbol.iterator](){return aa(this,Symbol.iterator,n=>Rn(this,n))},concat(...n){return Qi(this).concat(...n.map(e=>Ne(e)?Qi(e):e))},entries(){return aa(this,"entries",n=>(n[1]=Rn(this,n[1]),n))},every(n,e){return Gn(this,"every",n,e,void 0,arguments)},filter(n,e){return Gn(this,"filter",n,e,t=>t.map(i=>Rn(this,i)),arguments)},find(n,e){return Gn(this,"find",n,e,t=>Rn(this,t),arguments)},findIndex(n,e){return Gn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Gn(this,"findLast",n,e,t=>Rn(this,t),arguments)},findLastIndex(n,e){return Gn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Gn(this,"forEach",n,e,void 0,arguments)},includes(...n){return la(this,"includes",n)},indexOf(...n){return la(this,"indexOf",n)},join(n){return Qi(this).join(n)},lastIndexOf(...n){return la(this,"lastIndexOf",n)},map(n,e){return Gn(this,"map",n,e,void 0,arguments)},pop(){return Hr(this,"pop")},push(...n){return Hr(this,"push",n)},reduce(n,...e){return tu(this,"reduce",n,e)},reduceRight(n,...e){return tu(this,"reduceRight",n,e)},shift(){return Hr(this,"shift")},some(n,e){return Gn(this,"some",n,e,void 0,arguments)},splice(...n){return Hr(this,"splice",n)},toReversed(){return Qi(this).toReversed()},toSorted(n){return Qi(this).toSorted(n)},toSpliced(...n){return Qi(this).toSpliced(...n)},unshift(...n){return Hr(this,"unshift",n)},values(){return aa(this,"values",n=>Rn(this,n))}};function aa(n,e,t){const i=Ho(n),r=i[e],s=r.call(i);if(i!==n&&!hn(n)){if(s[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(s));return o.next=()=>eu(s.next(),t),r!==Zf[e]&&Object.defineProperties(o,{return:{get(){const a=s.return;return typeof a=="function"?a.bind(s):a}},throw:{get(){const a=s.throw;return typeof a=="function"?a.bind(s):a}}}),o}s._next=s.next,s.next=()=>eu(s._next(),t)}return s}function eu(n,e){return n.done||(n.value=e(n.value)),n}const Zf=Array.prototype;function Gn(n,e,t,i,r,s){const o=Ho(n),a=o!==n&&!hn(n),l=o[e];if(l!==Zf[e]){const p=l.apply(n,s);return a?dn(p):p}let u=t;o!==n&&(a?u=function(p,h){return t.call(this,Rn(n,p),h,n)}:t.length>2&&(u=function(p,h){return t.call(this,p,h,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function tu(n,e,t,i){const r=Ho(n),s=r!==n&&!hn(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(u,c,p){return a&&(a=!1,u=Rn(n,u)),t.call(this,u,Rn(n,c),p,n)}):t.length>3&&(o=function(u,c,p){return t.call(this,u,c,p,n)}));const l=r[e](o,...i);return a?Rn(n,l):l}function la(n,e,t){const i=it(n);Bt(i,"iterate",us);const r=i[e](...t);return(r===-1||r===!1)&&dc(t[0])?(t[0]=it(t[0]),i[e](...t)):r}function Hr(n,e,t=[]){Bn(),ac();const i=it(n)[e].apply(n,t);return lc(),zn(),i}const ap=ic("__proto__,__v_isRef,__isVue"),Jf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(On));function lp(n){On(n)||(n=String(n));const e=it(this);return Bt(e,"has",n),e.hasOwnProperty(n)}class Qf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?vp:ih:s?nh:th).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ne(e);if(!r){let l;if(o&&(l=op[t]))return l;if(t==="hasOwnProperty")return lp}const a=Reflect.get(e,t,bt(e)?e:i);if((On(t)?Jf.has(t):ap(t))||(r||Bt(e,"get",t),s))return a;if(bt(a)){const l=o&&sc(t)?a:a.value;return r&&lt(l)?el(l):l}return lt(a)?r?el(a):Vo(a):a}}class eh extends Qf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ne(e)&&sc(t);if(!this._isShallow){const u=kn(s);if(!hn(i)&&!kn(i)&&(s=it(s),i=it(i)),!o&&bt(s)&&!bt(i))return u||(s.value=i),!0}const a=o?Number(t)<e.length:Qe(e,t),l=Reflect.set(e,t,i,bt(e)?e:r);return e===it(r)&&l&&(a?In(i,s)&&Jn(e,"set",t,i):Jn(e,"add",t,i)),l}deleteProperty(e,t){const i=Qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Jn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!On(t)||!Jf.has(t))&&Bt(e,"has",t),i}ownKeys(e){return Bt(e,"iterate",Ne(e)?"length":Wi),Reflect.ownKeys(e)}}class cp extends Qf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const up=new eh,fp=new cp,hp=new eh(!0);const Qa=n=>n,Ps=n=>Reflect.getPrototypeOf(n);function dp(n,e,t){return function(...i){const r=this.__v_raw,s=it(r),o=pi(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=t?Qa:e?vi:dn;return!e&&Bt(s,"iterate",l?Ja:Wi),Dt(Object.create(u),{next(){const{value:p,done:h}=u.next();return h?{value:p,done:h}:{value:a?[c(p[0]),c(p[1])]:c(p),done:h}}})}}function Ls(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function pp(n,e){const t={get(r){const s=this.__v_raw,o=it(s),a=it(r);n||(In(r,a)&&Bt(o,"get",r),Bt(o,"get",a));const{has:l}=Ps(o),u=e?Qa:n?vi:dn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Bt(it(r),"iterate",Wi),r.size},has(r){const s=this.__v_raw,o=it(s),a=it(r);return n||(In(r,a)&&Bt(o,"has",r),Bt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=it(a),u=e?Qa:n?vi:dn;return!n&&Bt(l,"iterate",Wi),a.forEach((c,p)=>r.call(s,u(c),u(p),o))}};return Dt(t,n?{add:Ls("add"),set:Ls("set"),delete:Ls("delete"),clear:Ls("clear")}:{add(r){const s=it(this),o=Ps(s),a=it(r),l=!e&&!hn(r)&&!kn(r)?a:r;return o.has.call(s,l)||In(r,l)&&o.has.call(s,r)||In(a,l)&&o.has.call(s,a)||(s.add(l),Jn(s,"add",l,l)),this},set(r,s){!e&&!hn(s)&&!kn(s)&&(s=it(s));const o=it(this),{has:a,get:l}=Ps(o);let u=a.call(o,r);u||(r=it(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?In(s,c)&&Jn(o,"set",r,s):Jn(o,"add",r,s),this},delete(r){const s=it(this),{has:o,get:a}=Ps(s);let l=o.call(s,r);l||(r=it(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Jn(s,"delete",r,void 0),u},clear(){const r=it(this),s=r.size!==0,o=r.clear();return s&&Jn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=dp(r,n,e)}),t}function fc(n,e){const t=pp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_isShallow"?e:r==="__v_raw"?i:Reflect.get(Qe(t,r)&&r in i?t:i,r,s)}const mp={get:fc(!1,!1)},gp={get:fc(!1,!0)},_p={get:fc(!0,!1)};const th=new WeakMap,nh=new WeakMap,ih=new WeakMap,vp=new WeakMap;function xp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vo(n){return kn(n)?n:hc(n,!1,up,mp,th)}function Mp(n){return hc(n,!1,hp,gp,nh)}function el(n){return hc(n,!0,fp,_p,ih)}function hc(n,e,t,i,r){if(!lt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=xp(Xd(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function mi(n){return kn(n)?mi(n.__v_raw):!!(n&&n.__v_isReactive)}function kn(n){return!!(n&&n.__v_isReadonly)}function hn(n){return!!(n&&n.__v_isShallow)}function dc(n){return n?!!n.__v_raw:!1}function it(n){const e=n&&n.__v_raw;return e?it(e):n}function Sp(n){return!Qe(n,"__v_skip")&&Object.isExtensible(n)&&Bf(n,"__v_skip",!0),n}const dn=n=>lt(n)?Vo(n):n,vi=n=>lt(n)?el(n):n;function bt(n){return n?n.__v_isRef===!0:!1}function at(n){return yp(n,!1)}function yp(n,e){return bt(n)?n:new Ep(n,e)}class Ep{constructor(e,t){this.dep=new uc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:dn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||hn(e)||kn(e);e=i?e:it(e),In(e,t)&&(this._rawValue=e,this._value=i?e:dn(e),this.dep.trigger())}}function dt(n){return bt(n)?n.value:n}const bp={get:(n,e,t)=>e==="__v_raw"?n:dt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return bt(r)&&!bt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function rh(n){return mi(n)?n:new Proxy(n,bp)}class Tp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new uc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=cs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return Xf(this,!0),!0}get value(){const e=this.dep.track();return Yf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ap(n,e,t=!1){let i,r;return We(n)?i=n:(i=n.get,r=n.set),new Tp(i,r,t)}const Ds={},Mo=new WeakMap;let Ui;function wp(n,e=!1,t=Ui){if(t){let i=Mo.get(t);i||Mo.set(t,i=[]),i.push(n)}}function Cp(n,e,t=ct){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,u=T=>r?T:hn(T)||r===!1||r===0?Qn(T,1):Qn(T);let c,p,h,m,_=!1,v=!1;if(bt(n)?(p=()=>n.value,_=hn(n)):mi(n)?(p=()=>u(n),_=!0):Ne(n)?(v=!0,_=n.some(T=>mi(T)||hn(T)),p=()=>n.map(T=>{if(bt(T))return T.value;if(mi(T))return u(T);if(We(T))return l?l(T,2):T()})):We(n)?e?p=l?()=>l(n,2):n:p=()=>{if(h){Bn();try{h()}finally{zn()}}const T=Ui;Ui=c;try{return l?l(n,3,[m]):n(m)}finally{Ui=T}}:p=Nn,e&&r){const T=p,U=r===!0?1/0:r;p=()=>Qn(T(),U)}const d=ip(),f=()=>{c.stop(),d&&d.active&&rc(d.effects,c)};if(s&&e){const T=e;e=(...U)=>{try{return T(...U)}finally{f()}}}let A=v?new Array(n.length).fill(Ds):Ds;const x=T=>{if(!(!(c.flags&1)||!c.dirty&&!T))if(e){const U=c.run();if(T||r||_||(v?U.some((D,R)=>In(D,A[R])):In(U,A))){const D=Ui;Bn();try{h&&h(),Ui=c;const R=[U,A===Ds?void 0:v&&A[0]===Ds?[]:A,m];A=U,l?l(e,3,R):e(...R)}finally{Ui=D,zn()}}}else c.run()};return a&&a(x),c=new Gf(p),c.scheduler=o?()=>o(x,!1):x,m=T=>wp(T,!1,c),h=c.onStop=()=>{const T=Mo.get(c);if(T){if(l)l(T,4);else for(const U of T)U();Mo.delete(c)}},e?i?x(!0):A=c.run():o?o(x.bind(null,!0),!0):c.run(),f.pause=c.pause.bind(c),f.resume=c.resume.bind(c),f.stop=f,f}function Qn(n,e=1/0,t){if(e<=0||!lt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,bt(n))Qn(n.value,e,t);else if(Ne(n))for(let i=0;i<n.length;i++)Qn(n[i],e,t);else if(Tr(n)||pi(n))n.forEach(i=>{Qn(i,e,t)});else if(Of(n)){for(const i in n)Qn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Qn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ms(n,e,t,i){try{return i?n(...i):n()}catch(r){Go(r,e,t)}}function Tn(n,e,t,i){if(We(n)){const r=Ms(n,e,t,i);return r&&Nf(r)&&r.catch(s=>{Go(s,e,t)}),r}if(Ne(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Tn(n[s],e,t,i));return r}}function Go(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let p=0;p<c.length;p++)if(c[p](n,l,u)===!1)return}a=a.parent}if(s){Bn(),Ms(s,null,10,[n,l,u]),zn();return}}Rp(n,t,r,i,o)}function Rp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Gt=[];let xn=-1;const Pn=[];let hi=null,mr=0;const sh=Promise.resolve();let So=null;function Pp(n){const e=So||sh;return n?e.then(this?n.bind(this):n):e}function Lp(n){let e=xn+1,t=Gt.length;for(;e<t;){const i=e+t>>>1,r=Gt[i],s=fs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function pc(n){if(!(n.flags&1)){const e=fs(n),t=Gt[Gt.length-1];!t||!(n.flags&2)&&e>=fs(t)?Gt.push(n):Gt.splice(Lp(e),0,n),n.flags|=1,oh()}}function oh(){So||(So=sh.then(ch))}function Dp(n){if(!Ne(n))hi&&n.id===-1?hi.splice(mr+1,0,n):n.flags&1||(Pn.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Pn.push(n[e]);oh()}function ah(n,e,t,i=xn+1){for(;i<Gt.length;i++){const r=Gt[i];if(r&&r.flags&2){if(n&&r.id!==n.uid||e!==void 0&&!(r.id>=e))continue;Gt.splice(i,1),i=n?i-1:xn,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function lh(n,e,t=0){if(Pn.length){let i=Pn,r=0;if(e){i=[];for(let o=0;o<Pn.length;o++){const a=Pn[o];(a.i!==void 0?!a.i||a.i.uid<t:e.has(a))?Pn[r++]=a:i.push(a)}}const s=[...new Set(i)].sort((o,a)=>fs(o)-fs(a));if(Pn.length=r,hi){for(let o=0;o<s.length;o++)hi.push(s[o]);return}for(hi=s,mr=0;mr<hi.length;mr++){const o=hi[mr];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}hi=null,mr=0}}let ca=!1;function Ip(n,e){if(ca){n();return}const t=e===void 0?void 0:new Set(Pn);n(),ca=!0;try{ah(void 0,e),lh(void 0,t,e)}finally{ca=!1}}const fs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ch(n){try{for(xn=0;xn<Gt.length;xn++){const e=Gt[xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ms(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xn<Gt.length;xn++){const e=Gt[xn];e&&(e.flags&=-2)}xn=-1,Gt.length=0,lh(),So=null,(Gt.length||Pn.length)&&ch()}}let sn=null,uh=null;function yo(n){const e=sn;return sn=n,uh=n&&n.type.__scopeId||null,e}function Up(n,e=sn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&du(-1);const s=yo(e),o=Xi.length;let a;try{a=n(...r)}finally{for(let l=Xi.length;l>o;l--)Uh();yo(s),i._d&&du(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function _r(n,e){if(sn===null)return n;const t=Yo(sn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ct]=e[r];s&&(We(s)&&(s={mounted:s,updated:s}),s.deep&&Qn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ti(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Bn(),Tn(l,t,8,[n.el,a,n,e]),zn())}}function Np(n,e){if(zt){let t=zt.provides;const i=zt.parent&&zt.parent.provides;i===t&&(t=zt.provides=Object.create(i)),t[n]=e}}function ao(n,e,t=!1){const i=Im();if(i||Mr){let r=Mr?Mr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}const Fp=Symbol.for("v-scx"),Op=()=>ao(Fp);function Bp(n,e){return mc(n,null,e)}function lo(n,e,t){return mc(n,e,t)}function mc(n,e,t=ct){const{immediate:i,deep:r,flush:s,once:o}=t,a=Dt({},t),l=e&&i||!e&&s!=="post";let u;if(ps){if(s==="sync"){const m=Op();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Nn,m.resume=Nn,m.pause=Nn,m}}const c=zt;a.call=(m,_,v)=>Tn(m,c,_,v);let p=!1;s==="post"?a.scheduler=m=>{m.i=c,jt(m,c&&c.suspense)}:s!=="sync"&&(p=!0,a.scheduler=(m,_)=>{_?m():pc(m)}),a.augmentJob=m=>{e&&(m.flags|=4),p&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const h=Cp(n,e,a);return ps&&(u?u.push(h):l&&h()),h}function zp(n,e,t){const i=this.proxy,r=mt(n)?n.includes(".")?fh(i,n):()=>i[n]:n.bind(i,i);let s;We(e)?s=e:(s=e.handler,t=e);const o=Ss(this),a=mc(r,s.bind(i),t);return o(),a}function fh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const kp=Symbol("_vte"),Wo=n=>n.__isTeleport,ua=Symbol("_leaveCb");function Hp(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==An){e=t;break}}return e}function hh(n){if(!gc(n))return Wo(n.type)&&n.children?Hp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&We(t.default))return t.default()}}function Eo(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Eo(Wo(t.type)&&hh(t)||t,e)}else if(n.shapeFlag&128)n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback);else if(n.transition=e,n.type===vt&&Ne(n.children)){const t=Sh(n.children,!1);t&&Eo(t,e)}}function tl(n){if(n.component)return tl(n.component.subTree);if(n.type===vt){const e=Ne(n.children)&&Sh(n.children,!1);return e?tl(e):void 0}if(n.type!==An)return n}function yi(n,e){return We(n)?Dt({name:n.name},e,{setup:n}):n}function dh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function nu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const bo=new WeakMap;function is(n,e,t,i,r=!1){if(Ne(n)){n.forEach((v,d)=>is(v,e&&(Ne(e)?e[d]:e),t,i,r));return}if(rs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&is(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Yo(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=e&&e.r,c=a.refs===ct?a.refs={}:a.refs,p=a.setupState,h=it(p),m=p===ct?Uf:v=>nu(c,v)?!1:Qe(h,v),_=(v,d)=>!(d&&nu(c,d));if(u!=null&&u!==l){if(iu(e),mt(u))c[u]=null,m(u)&&(p[u]=null);else if(bt(u)){const v=e;_(u,v.k)&&(u.value=null),v.k&&(c[v.k]=null)}}if(We(l))Ms(l,a,12,[o,c]);else{const v=mt(l),d=bt(l);if(v||d){const f=()=>{if(n.f){const A=v?m(l)?p[l]:c[l]:_()||!n.k?l.value:c[n.k];if(r)Ne(A)&&rc(A,s);else if(Ne(A))A.includes(s)||A.push(s);else if(v)c[l]=[s],m(l)&&(p[l]=c[l]);else{const x=[s];_(l,n.k)&&(l.value=x),n.k&&(c[n.k]=x)}}else v?(c[l]=o,m(l)&&(p[l]=o)):d&&(_(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const A=()=>{f(),bo.delete(n)};A.id=-1,bo.set(n,A),jt(A,t)}else iu(n),f()}}}function iu(n){const e=bo.get(n);e&&(e.flags|=8,bo.delete(n))}ko().requestIdleCallback;ko().cancelIdleCallback;const rs=n=>!!n.type.__asyncLoader,gc=n=>n.type.__isKeepAlive;function Vp(n,e){ph(n,"a",e)}function Gp(n,e){ph(n,"da",e)}function ph(n,e,t=zt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Xo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)gc(r.parent.vnode)&&Wp(i,e,t,r),r=r.parent}}function Wp(n,e,t,i){const r=Xo(e,n,i,!0);mh(()=>{rc(i[e],r)},t)}function Xo(n,e,t=zt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Bn();const a=Ss(t),l=Tn(e,t,n,o);return a(),zn(),l});return i?r.unshift(s):r.push(s),s}}const ri=n=>(e,t=zt)=>{(!ps||n==="sp")&&Xo(n,(...i)=>e(...i),t)},Xp=ri("bm"),ji=ri("m"),$p=ri("bu"),qp=ri("u"),Nr=ri("bum"),mh=ri("um"),Yp=ri("sp"),jp=ri("rtg"),Kp=ri("rtc");function Zp(n,e=zt){Xo("ec",n,e)}const Jp="components",gh=Symbol.for("v-ndc");function Qp(n){return mt(n)?em(Jp,n,!1)||n:n||gh}function em(n,e,t=!0,i=!1){const r=sn||zt;if(r){const s=r.type;{const a=Bm(s,!1);if(a&&(a===e||a===Xt(e)||a===zo(Xt(e))))return s}const o=ru(r[n]||s[n],e)||ru(r.appContext[n],e);return!o&&i?s:o}}function ru(n,e){return n&&(n[e]||n[Xt(e)]||n[zo(Xt(e))])}function Un(n,e,t,i){let r;const s=t,o=Ne(n);if(o||mt(n)){const a=o&&mi(n);let l=!1,u=!1;a&&(l=!hn(n),u=kn(n),n=Ho(n)),r=new Array(n.length);for(let c=0,p=n.length;c<p;c++)r[c]=e(l?u?vi(dn(n[c])):dn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)r=[];else{r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(lt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}const nl=n=>n?zh(n)?Yo(n):nl(n.parent):null,ss=Dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>nl(n.parent),$root:n=>nl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>vh(n),$forceUpdate:n=>n.f||(n.f=()=>{pc(n.update)}),$nextTick:n=>n.n||(n.n=Pp.bind(n.proxy)),$watch:n=>zp.bind(n)}),fa=(n,e)=>n!==ct&&!n.__isScriptSetup&&Qe(n,e),tm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(fa(i,e))return o[e]=1,i[e];if(r!==ct&&Qe(r,e))return o[e]=2,r[e];if(Qe(s,e))return o[e]=3,s[e];if(t!==ct&&Qe(t,e))return o[e]=4,t[e];il&&(o[e]=0)}}const u=ss[e];let c,p;if(u)return e==="$attrs"&&Bt(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[e]))return c;if(t!==ct&&Qe(t,e))return o[e]=4,t[e];if(p=l.config.globalProperties,Qe(p,e))return p[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return fa(r,e)?(r[e]=t,!0):i!==ct&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==ct&&a[0]!=="$"&&Qe(n,a)||fa(e,a)||Qe(s,a)||Qe(i,a)||Qe(ss,a)||Qe(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function su(n){return Ne(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let il=!0;function nm(n){const e=vh(n),t=n.proxy,i=n.ctx;il=!1,e.beforeCreate&&ou(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:p,mounted:h,beforeUpdate:m,updated:_,activated:v,deactivated:d,beforeDestroy:f,beforeUnmount:A,destroyed:x,unmounted:T,render:U,renderTracked:D,renderTriggered:R,errorCaptured:z,serverPrefetch:se,expose:y,inheritAttrs:E,components:I,directives:F,filters:H}=e;if(u&&im(u,i,null),o)for(const G in o){const B=o[G];We(B)&&(i[G]=B.bind(t))}if(r){const G=r.call(t,t);lt(G)&&(n.data=Vo(G))}if(il=!0,s)for(const G in s){const B=s[G],fe=We(B)?B.bind(t,t):We(B.get)?B.get.bind(t,t):Nn,he=!We(B)&&We(B.set)?B.set.bind(t):Nn,ge=Zt({get:fe,set:he});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Ae=>ge.value=Ae})}if(a)for(const G in a)_h(a[G],i,t,G);if(l){const G=We(l)?l.call(t):l;Reflect.ownKeys(G).forEach(B=>{Np(B,G[B])})}c&&ou(c,n,"c");function N(G,B){Ne(B)?B.forEach(fe=>G(fe.bind(t))):B&&G(B.bind(t))}if(N(Xp,p),N(ji,h),N($p,m),N(qp,_),N(Vp,v),N(Gp,d),N(Zp,z),N(Kp,D),N(jp,R),N(Nr,A),N(mh,T),N(Yp,se),Ne(y))if(y.length){const G=n.exposed||(n.exposed={});y.forEach(B=>{Object.defineProperty(G,B,{get:()=>t[B],set:fe=>t[B]=fe,enumerable:!0})})}else n.exposed||(n.exposed={});U&&n.render===Nn&&(n.render=U),E!=null&&(n.inheritAttrs=E),I&&(n.components=I),F&&(n.directives=F),se&&dh(n)}function im(n,e,t=Nn){Ne(n)&&(n=rl(n));for(const i in n){const r=n[i];let s;lt(r)?"default"in r?s=ao(r.from||i,r.default,!0):s=ao(r.from||i):s=ao(r),bt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function ou(n,e,t){Tn(Ne(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function _h(n,e,t,i){let r=i.includes(".")?fh(t,i):()=>t[i];if(mt(n)){const s=e[n];We(s)&&lo(r,s)}else if(We(n))lo(r,n.bind(t));else if(lt(n))if(Ne(n))n.forEach(s=>_h(s,e,t,i));else{const s=We(n.handler)?n.handler.bind(t):e[n.handler];We(s)&&lo(r,s,n)}}function vh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>To(l,u,o,!0)),To(l,e,o)),lt(e)&&s.set(e,l),l}function To(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&To(n,s,t,!0),r&&r.forEach(o=>To(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=rm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const rm={data:au,props:lu,emits:lu,methods:jr,computed:jr,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:jr,directives:jr,watch:om,provide:au,inject:sm};function au(n,e){return e?n?function(){return Dt(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)}:e:n}function sm(n,e){return jr(rl(n),rl(e))}function rl(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function kt(n,e){return n?[...new Set([].concat(n,e))]:e}function jr(n,e){return n?Dt(Object.create(null),n,e):e}function lu(n,e){return n?Ne(n)&&Ne(e)?[...new Set([...n,...e])]:Dt(Object.create(null),su(n),su(e??{})):e}function om(n,e){if(!n)return e;if(!e)return n;const t=Dt(Object.create(null),n);for(const i in e)t[i]=kt(n[i],e[i]);return t}function xh(){return{app:null,config:{isNativeTag:Uf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let am=0;function lm(n,e){return function(i,r=null){We(i)||(i=Dt({},i)),r!=null&&!lt(r)&&(r=null);const s=xh(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:am++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:km,get config(){return s.config},set config(c){},use(c,...p){return o.has(c)||(c&&We(c.install)?(o.add(c),c.install(u,...p)):We(c)&&(o.add(c),c(u,...p))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,p){return p?(s.components[c]=p,u):s.components[c]},directive(c,p){return p?(s.directives[c]=p,u):s.directives[c]},mount(c,p,h){if(!l){const m=u._ceVNode||$t(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(m,c,h),l=!0,u._container=c,c.__vue_app__=u,Yo(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Tn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,p){return s.provides[c]=p,u},runWithContext(c){const p=Mr;Mr=u;try{return c()}finally{Mr=p}}};return u}}let Mr=null;const cm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Xt(e)}Modifiers`]||n[`${Yi(e)}Modifiers`];function um(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let r=t;const s=e.startsWith("update:"),o=s&&cm(i,e.slice(7));o&&(o.trim&&(r=t.map(c=>mt(c)?c.trim():c)),o.number&&(r=r.map(oc)));let a,l=i[a=ra(e)]||i[a=ra(Xt(e))];!l&&s&&(l=i[a=ra(Yi(e))]),l&&Tn(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Tn(u,n,6,r)}}const fm=new WeakMap;function Mh(n,e,t=!1){const i=t?fm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!We(n)){const l=u=>{const c=Mh(u,e,!0);c&&(a=!0,Dt(o,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(lt(n)&&i.set(n,null),null):(Ne(s)?s.forEach(l=>o[l]=null):Dt(o,s),lt(n)&&i.set(n,o),o)}function $o(n,e){return!n||!Fo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,Yi(e))||Qe(n,e))}function cu(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:p,data:h,setupState:m,ctx:_,inheritAttrs:v}=n,d=yo(n);let f,A;try{if(t.shapeFlag&4){const T=r||i,U=T;f=Ln(u.call(U,T,c,p,m,h,_)),A=a}else{const T=e;f=Ln(T.length>1?T(p,{attrs:a,slots:o,emit:l}):T(p,null)),A=e.props?a:hm(a)}}catch(T){Xi.length=0,Go(T,n,1),f=$t(An)}let x=f;if(A&&v!==!1){const T=Object.keys(A),{shapeFlag:U}=x;T.length&&U&7&&(s&&T.some(Oo)&&(A=dm(A,s)),x=wr(x,A,!1,!0))}if(t.dirs&&(x=wr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition){const T=Wo(x.type)&&hh(x)||x;Eo(T,t.transition)}return f=x,yo(d),f}function Sh(n,e=!0){let t;for(let i=0;i<n.length;i++){const r=n[i];if(xc(r)){if(r.type!==An||r.children==="v-if"){if(t)return;t=r}}else return}return t}const hm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Fo(t))&&((e||(e={}))[t]=n[t]);return e},dm=(n,e)=>{const t={};for(const i in n)(!Oo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function pm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?uu(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let p=0;p<c.length;p++){const h=c[p];if(yh(o,i,h)&&!$o(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?uu(i,o,u):!0:!!o;return!1}function uu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(!Qe(n,s)||yh(e,n,s)&&!$o(t,s))return!0}return!1}function yh(n,e,t){const i=n[t],r=e[t];return t==="style"&&lt(i)&&lt(r)?!Ur(i,r):i!==r}function mm({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Eh={},bh=()=>Object.create(Eh),Th=n=>Object.getPrototypeOf(n)===Eh;function gm(n,e,t,i=!1){const r={},s=bh();n.propsDefaults=Object.create(null),Ah(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Mp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function _m(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=it(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let p=0;p<c.length;p++){let h=c[p];if($o(n.emitsOptions,h))continue;const m=e[h];if(l)if(Qe(s,h))m!==s[h]&&(s[h]=m,u=!0);else{const _=Xt(h);r[_]=sl(l,a,_,m,n,!1)}else m!==s[h]&&(s[h]=m,u=!0)}}}else{Ah(n,e,r,s)&&(u=!0);let c;for(const p in a)(!e||!Qe(e,p)&&((c=Yi(p))===p||!Qe(e,c)))&&(l?t&&(t[p]!==void 0||t[c]!==void 0)&&(r[p]=sl(l,a,p,void 0,n,!0)):delete r[p]);if(s!==a)for(const p in s)(!e||!Qe(e,p))&&(delete s[p],u=!0)}u&&Jn(n.attrs,"set","")}function Ah(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(es(l))continue;const u=e[l];let c;r&&Qe(r,c=Xt(l))?!s||!s.includes(c)?t[c]=u:(a||(a={}))[c]=u:$o(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=it(t),u=a||ct;for(let c=0;c<s.length;c++){const p=s[c];t[p]=sl(r,l,p,u[p],n,!Qe(u,p))}}return o}function sl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Qe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=Ss(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Yi(t))&&(i=!0))}return i}const vm=new WeakMap;function wh(n,e,t=!1){const i=t?vm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!We(n)){const c=p=>{l=!0;const[h,m]=wh(p,e,!0);Dt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return lt(n)&&i.set(n,ki),ki;if(Ne(s))for(let c=0;c<s.length;c++){const p=Xt(s[c]);fu(p)&&(o[p]=ct)}else if(s)for(const c in s){const p=Xt(c);if(fu(p)){const h=s[c],m=o[p]=Ne(h)||We(h)?{type:h}:Dt({},h),_=m.type;let v=!1,d=!0;if(Ne(_))for(let f=0;f<_.length;++f){const A=_[f],x=We(A)&&A.name;if(x==="Boolean"){v=!0;break}else x==="String"&&(d=!1)}else v=We(_)&&_.name==="Boolean";m[0]=v,m[1]=d,(v||Qe(m,"default"))&&a.push(p)}}const u=[o,a];return lt(n)&&i.set(n,u),u}function fu(n){return n[0]!=="$"&&!es(n)}const _c=n=>n==="_"||n==="_ctx"||n==="$stable",vc=n=>Ne(n)?n.map(Ln):[Ln(n)],xm=(n,e,t)=>{if(e._n)return e;const i=Up((...r)=>vc(e(...r)),t);return i._c=!1,i},Ch=(n,e,t)=>{const i=n._ctx;for(const r in n){if(_c(r))continue;const s=n[r];if(We(s))e[r]=xm(r,s,i);else if(s!=null){const o=vc(s);e[r]=()=>o}}},Rh=(n,e)=>{const t=vc(e);n.slots.default=()=>t},Ph=(n,e,t)=>{for(const i in e)(t||!_c(i))&&(n[i]=e[i])},Mm=(n,e,t)=>{const i=n.slots=bh();if(n.vnode.shapeFlag&32){const r=e._;r?(Ph(i,e,t),t&&Bf(i,"_",r,!0)):Ch(e,i)}else e&&Rh(n,e)},Sm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Ph(r,e,t):(s=!e.$stable,Ch(e,r)),o=e}else e&&(Rh(n,e),o={default:1});if(s)for(const a in r)!_c(a)&&o[a]==null&&delete r[a]},jt=Am;function ym(n){return Em(n)}function Em(n,e){const t=ko();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:p,nextSibling:h,setScopeId:m=Nn,insertStaticContent:_}=n,v=(b,C,M,q=null,W=null,$=null,J=void 0,ie=null,K=!!C.dynamicChildren)=>{if(b===C)return;b&&!Vr(b,C)&&(q=Me(b),Ae(b,W,$,!0),b=null),C.patchFlag===-2&&(K=!1,C.dynamicChildren=null),C.dynamicChildren&&b&&b.dynamicChildren&&b.dynamicChildren.hasOnce&&(C.dynamicChildren===ki&&(C.dynamicChildren=[]),C.dynamicChildren.hasOnce=!0);const{type:S,ref:g,shapeFlag:L}=C;switch(S){case qo:d(b,C,M,q);break;case An:f(b,C,M,q);break;case da:b==null&&A(C,M,q,J);break;case vt:I(b,C,M,q,W,$,J,ie,K);break;default:L&1?U(b,C,M,q,W,$,J,ie,K):L&6?F(b,C,M,q,W,$,J,ie,K):(L&64||L&128)&&S.process(b,C,M,q,W,$,J,ie,K,De)}g!=null&&W?is(g,b&&b.ref,$,C||b,!C):g==null&&b&&b.ref!=null&&is(b.ref,null,$,b,!0)},d=(b,C,M,q)=>{if(b==null)i(C.el=a(C.children),M,q);else{const W=C.el=b.el;C.children!==b.children&&u(W,C.children)}},f=(b,C,M,q)=>{b==null?i(C.el=l(C.children||""),M,q):C.el=b.el},A=(b,C,M,q)=>{[b.el,b.anchor]=_(b.children,C,M,q,b.el,b.anchor)},x=({el:b,anchor:C},M,q)=>{let W;for(;b&&b!==C;)W=h(b),i(b,M,q),b=W;i(C,M,q)},T=({el:b,anchor:C})=>{let M;for(;b&&b!==C;)M=h(b),r(b),b=M;r(C)},U=(b,C,M,q,W,$,J,ie,K)=>{if(C.type==="svg"?J="svg":C.type==="math"&&(J="mathml"),b==null)D(C,M,q,W,$,J,ie,K);else{const S=b.el&&b.el._isVueCE?b.el:null;try{S&&S._beginPatch(),se(b,C,W,$,J,ie,K)}finally{S&&S._endPatch()}}},D=(b,C,M,q,W,$,J,ie)=>{let K,S;const{props:g,shapeFlag:L,transition:X,dirs:ee}=b;if(K=b.el=o(b.type,$,g&&g.is,g),L&8?c(K,b.children):L&16&&z(b.children,K,null,q,W,ha(b,$),J,ie),ee&&Ti(b,null,q,"created"),R(K,b,b.scopeId,J,q),g){for(const de in g)de!=="value"&&!es(de)&&s(K,de,null,g[de],$,q);"value"in g&&s(K,"value",null,g.value,$),(S=g.onVnodeBeforeMount)&&wn(S,q,b)}ee&&Ti(b,null,q,"beforeMount");const Z=bm(W,X);Z&&X.beforeEnter(K),i(K,C,M),((S=g&&g.onVnodeMounted)||Z||ee)&&jt(()=>{try{S&&wn(S,q,b),Z&&X.enter(K),ee&&Ti(b,null,q,"mounted")}finally{}},W)},R=(b,C,M,q,W)=>{if(M&&m(b,M),q)for(let $=0;$<q.length;$++)m(b,q[$]);if(W){let $=W.subTree;if(C===$||Ih($.type)&&($.ssContent===C||$.ssFallback===C)){const J=W.vnode;R(b,J,J.scopeId,J.slotScopeIds,W.parent)}}},z=(b,C,M,q,W,$,J,ie,K=0)=>{for(let S=K;S<b.length;S++){const g=b[S]=ie?Zn(b[S]):Ln(b[S]);v(null,g,C,M,q,W,$,J,ie)}},se=(b,C,M,q,W,$,J)=>{const ie=C.el=b.el;let{patchFlag:K,dynamicChildren:S,dirs:g}=C;K|=b.patchFlag&16;const L=b.props||ct,X=C.props||ct;let ee;if(M&&Ai(M,!1),(ee=X.onVnodeBeforeUpdate)&&wn(ee,M,C,b),g&&Ti(C,b,M,"beforeUpdate"),M&&Ai(M,!0),S&&(!b.dynamicChildren||b.dynamicChildren.length!==S.length)&&(K=0,J=!1,S=null),(L.innerHTML&&X.innerHTML==null||L.textContent&&X.textContent==null)&&c(ie,""),S?y(b.dynamicChildren,S,ie,M,q,ha(C,W),$):J||B(b,C,ie,null,M,q,ha(C,W),$,!1),K>0){if(K&16)E(ie,L,X,M,W);else if(K&2&&L.class!==X.class&&s(ie,"class",null,X.class,W),K&4&&s(ie,"style",L.style,X.style,W),K&8){const Z=C.dynamicProps;for(let de=0;de<Z.length;de++){const ae=Z[de],pe=L[ae],Ue=X[ae];(Ue!==pe||ae==="value")&&s(ie,ae,pe,Ue,W,M)}}K&1&&b.children!==C.children&&c(ie,C.children)}else!J&&S==null&&E(ie,L,X,M,W);((ee=X.onVnodeUpdated)||g)&&jt(()=>{ee&&wn(ee,M,C,b),g&&Ti(C,b,M,"updated")},q)},y=(b,C,M,q,W,$,J)=>{for(let ie=0;ie<C.length;ie++){const K=b[ie],S=C[ie],g=K.el||ol(K),L=g&&(K.type===vt||!Vr(K,S)||K.shapeFlag&198)?p(g):M;v(K,S,L,null,q,W,$,J,!0)}},E=(b,C,M,q,W)=>{if(C!==M){if(C!==ct)for(const $ in C)!es($)&&!($ in M)&&s(b,$,C[$],null,W,q);for(const $ in M){if(es($))continue;const J=M[$],ie=C[$];J!==ie&&$!=="value"&&s(b,$,ie,J,W,q)}"value"in M&&s(b,"value",C.value,M.value,W)}},I=(b,C,M,q,W,$,J,ie,K)=>{const S=C.el=b?b.el:a(""),g=C.anchor=b?b.anchor:a("");let{patchFlag:L,dynamicChildren:X,slotScopeIds:ee}=C;ee&&(ie=ie?ie.concat(ee):ee),b==null?(i(S,M,q),i(g,M,q),z(C.children||[],M,g,W,$,J,ie,K)):L>0&&L&64&&X&&b.dynamicChildren&&b.dynamicChildren.length===X.length?(y(b.dynamicChildren,X,M,W,$,J,ie),(C.key!=null||W&&C===W.subTree)&&Lh(b,C,!0)):B(b,C,M,g,W,$,J,ie,K)},F=(b,C,M,q,W,$,J,ie,K)=>{C.slotScopeIds=ie,b==null?C.shapeFlag&512?W.ctx.activate(C,M,q,J,K):H(C,M,q,W,$,J,K):P(b,C,K)},H=(b,C,M,q,W,$,J)=>{const ie=b.component=Dm(b,q,W);if(gc(b)&&(ie.ctx.renderer=De),Um(ie,!1,J),ie.asyncDep){if(W&&W.registerDep(ie,N,J,$),!b.el){const K=ie.subTree=$t(An);f(null,K,C,M),b.placeholder=K.el}}else N(ie,b,C,M,W,$,J)},P=(b,C,M)=>{const q=C.component=b.component;if(pm(b,C,M))if(q.asyncDep&&!q.asyncResolved){C.el=b.el,C.placeholder=b.placeholder,G(q,C,M);return}else q.next=C,q.update();else C.el=b.el,C.placeholder=b.placeholder,q.vnode=C},N=(b,C,M,q,W,$,J)=>{const ie=()=>{if(b.isMounted){let{next:L,bu:X,u:ee,parent:Z,vnode:de}=b;{const xe=Dh(b);if(xe){L&&(L.el=de.el,G(b,L,J)),xe.asyncDep.then(()=>{jt(()=>{b.isUnmounted||S()},W)});return}}let ae=L,pe;Ai(b,!1),L?(L.el=de.el,G(b,L,J)):L=de,X&&oo(X),(pe=L.props&&L.props.onVnodeBeforeUpdate)&&wn(pe,Z,L,de),Ai(b,!0);const Ue=cu(b),ce=b.subTree;b.subTree=Ue,v(ce,Ue,p(ce.el),Me(ce),b,W,$),L.el=Ue.el,ae===null&&mm(b,Ue.el),ee&&jt(ee,W),(pe=L.props&&L.props.onVnodeUpdated)&&jt(()=>wn(pe,Z,L,de),W)}else{let L;const{el:X,props:ee}=C,{bm:Z,m:de,parent:ae,root:pe,type:Ue}=b,ce=rs(C);Ai(b,!1),Z&&oo(Z),!ce&&(L=ee&&ee.onVnodeBeforeMount)&&wn(L,ae,C),Ai(b,!0);{pe.ce&&pe.ce._hasShadowRoot()&&pe.ce._injectChildStyle(Ue,b.parent?b.parent.type:void 0);const xe=b.subTree=cu(b);v(null,xe,M,q,b,W,$),C.el=xe.el}if(de&&jt(de,W),!ce&&(L=ee&&ee.onVnodeMounted)){const xe=C;jt(()=>wn(L,ae,xe),W)}(C.shapeFlag&256||ae&&rs(ae.vnode)&&ae.vnode.shapeFlag&256)&&b.a&&jt(b.a,W),b.isMounted=!0,C=M=q=null}};b.scope.on();const K=b.effect=new Gf(ie);b.scope.off();const S=b.update=K.run.bind(K),g=b.job=K.runIfDirty.bind(K);g.i=b,g.id=b.uid,K.scheduler=()=>pc(g),Ai(b,!0),S()},G=(b,C,M)=>{C.component=b;const q=b.vnode.props;b.vnode=C,b.next=null,_m(b,C.props,q,M),Sm(b,C.children,M),Bn(),ah(b),zn()},B=(b,C,M,q,W,$,J,ie,K=!1)=>{const S=b&&b.children,g=b?b.shapeFlag:0,L=C.children,{patchFlag:X,shapeFlag:ee}=C;if(X>0){if(X&128){he(S,L,M,q,W,$,J,ie,K);return}else if(X&256){fe(S,L,M,q,W,$,J,ie,K);return}}ee&8?(g&16&&Ee(S,W,$),L!==S&&c(M,L)):g&16?ee&16?he(S,L,M,q,W,$,J,ie,K):Ee(S,W,$,!0):(g&8&&c(M,""),ee&16&&z(L,M,q,W,$,J,ie,K))},fe=(b,C,M,q,W,$,J,ie,K)=>{b=b||ki,C=C||ki;const S=b.length,g=C.length,L=Math.min(S,g);let X;for(X=0;X<L;X++){const ee=C[X]=K?Zn(C[X]):Ln(C[X]);v(b[X],ee,M,null,W,$,J,ie,K)}S>g?Ee(b,W,$,!0,!1,L):z(C,M,q,W,$,J,ie,K,L)},he=(b,C,M,q,W,$,J,ie,K)=>{let S=0;const g=C.length;let L=b.length-1,X=g-1;for(;S<=L&&S<=X;){const ee=b[S],Z=C[S]=K?Zn(C[S]):Ln(C[S]);if(Vr(ee,Z))v(ee,Z,M,null,W,$,J,ie,K);else break;S++}for(;S<=L&&S<=X;){const ee=b[L],Z=C[X]=K?Zn(C[X]):Ln(C[X]);if(Vr(ee,Z))v(ee,Z,M,null,W,$,J,ie,K);else break;L--,X--}if(S>L){if(S<=X){const ee=X+1,Z=ee<g?C[ee].el:q;for(;S<=X;)v(null,C[S]=K?Zn(C[S]):Ln(C[S]),M,Z,W,$,J,ie,K),S++}}else if(S>X)for(;S<=L;)Ae(b[S],W,$,!0),S++;else{const ee=S,Z=S,de=new Map;for(S=Z;S<=X;S++){const _e=C[S]=K?Zn(C[S]):Ln(C[S]);_e.key!=null&&de.set(_e.key,S)}let ae,pe=0;const Ue=X-Z+1;let ce=!1,xe=0;const Ie=new Array(Ue);for(S=0;S<Ue;S++)Ie[S]=0;for(S=ee;S<=L;S++){const _e=b[S];if(pe>=Ue){Ae(_e,W,$,!0);continue}let He;if(_e.key!=null)He=de.get(_e.key);else for(ae=Z;ae<=X;ae++)if(Ie[ae-Z]===0&&Vr(_e,C[ae])){He=ae;break}He===void 0?Ae(_e,W,$,!0):(Ie[He-Z]=S+1,He>=xe?xe=He:ce=!0,v(_e,C[He],M,null,W,$,J,ie,K),pe++)}const Fe=ce?Tm(Ie):ki;for(ae=Fe.length-1,S=Ue-1;S>=0;S--){const _e=Z+S,He=C[_e],Ve=C[_e+1],st=_e+1<g?Ve.el||ol(Ve):q;Ie[S]===0?v(null,He,M,st,W,$,J,ie,K):ce&&(ae<0||S!==Fe[ae]?ge(He,M,st,2):ae--)}}},ge=(b,C,M,q,W=null)=>{const{el:$,type:J,transition:ie,children:K,shapeFlag:S}=b;if(S&6){ge(b.component.subTree,C,M,q);return}if(S&128){b.suspense.move(C,M,q);return}if(S&64){J.move(b,C,M,De);return}if(J===vt){i($,C,M);for(let L=0;L<K.length;L++)ge(K[L],C,M,q);i(b.anchor,C,M);return}if(J===da){x(b,C,M);return}if(q!==2&&S&1&&ie)if(q===0)ie.persisted&&!$[ua]?i($,C,M):(ie.beforeEnter($),i($,C,M),jt(()=>ie.enter($),W));else{const{leave:L,delayLeave:X,afterLeave:ee}=ie,Z=()=>{b.ctx.isUnmounted?r($):i($,C,M)},de=()=>{const ae=$._isLeaving||!!$[ua];$._isLeaving&&$[ua](!0),ie.persisted&&!ae?Z():L($,()=>{Z(),ee&&ee()})};X?X($,Z,de):de()}else i($,C,M)},Ae=(b,C,M,q=!1,W=!1)=>{const{type:$,props:J,ref:ie,children:K,dynamicChildren:S,shapeFlag:g,patchFlag:L,dirs:X,cacheIndex:ee,memo:Z}=b;if((L===-2||S&&S.hasOnce)&&(W=!1),ie!=null&&(Bn(),is(ie,null,M,b,!0),zn()),ee!=null&&(!b.ctx||b.ctx===C)&&(C.renderCache[ee]=void 0),g&256){C.ctx.deactivate(b);return}const de=g&1&&X,ae=!rs(b);let pe;if(ae&&(pe=J&&J.onVnodeBeforeUnmount)&&wn(pe,C,b),g&6)ue(b.component,M,q);else{if(g&128){b.suspense.unmount(M,q);return}de&&Ti(b,null,C,"beforeUnmount"),g&64?b.type.remove(b,C,M,De,q):S&&!S.hasOnce&&($!==vt||L>0&&L&64)?Ee(S,C,M,!1,!0):($===vt&&L&384||!W&&g&16)&&Ee(K,C,M),q&&ze(b)}const Ue=Z!=null&&ee==null;(ae&&(pe=J&&J.onVnodeUnmounted)||de||Ue)&&jt(()=>{pe&&wn(pe,C,b),de&&Ti(b,null,C,"unmounted"),Ue&&(b.el=null)},M)},ze=b=>{const{type:C,el:M,anchor:q,transition:W}=b,$=C===vt;if($&&!W){re(M,q);return}if(C===da){T(b),W&&!W.persisted&&W.afterLeave&&W.afterLeave();return}const J=$?tl(b):b,ie=()=>{$?p(M)&&re(M,q):r(M),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(J&&J.shapeFlag&1&&W&&!W.persisted){const{leave:K,delayLeave:S}=W,g=J.el,L=()=>K(g,ie);S?S(g,ie,L):L()}else ie()},re=(b,C)=>{let M;for(;b!==C;)M=h(b),r(b),b=M;r(C)},ue=(b,C,M)=>{const{bum:q,scope:W,job:$,subTree:J,um:ie,m:K,a:S}=b;hu(K),hu(S),q&&oo(q),W.stop(),$?($.flags|=8,Ae(J,b,C,M)):b.vnode.el&&J&&(J.transition=b.vnode.transition,Ae(J,b,C,M)),ie&&jt(ie,C),jt(()=>{b.isUnmounted=!0},C)},Ee=(b,C,M,q=!1,W=!1,$=0)=>{for(let J=$;J<b.length;J++)Ae(b[J],C,M,q,W)},Me=b=>{if(b.shapeFlag&6)return Me(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const C=h(b.anchor||b.el),M=C&&C[kp];return M?h(M):C},Oe=(b,C,M)=>{const q=b&&C._vnode?void 0:b&&b.component?b.component.uid:Lm();Ip(()=>{b==null?C._vnode&&Ae(C._vnode,null,null,!0):v(C._vnode||null,b,C,null,null,null,M),C._vnode=b},q)},De={p:v,um:Ae,m:ge,r:ze,mt:H,mc:z,pc:B,pbc:y,n:Me,o:n};return{render:Oe,hydrate:void 0,createApp:lm(Oe)}}function ha({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ai({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function bm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Lh(n,e,t=!1){const i=n.children,r=e.children;if(Ne(i)&&Ne(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Zn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Lh(o,a)),a.type===qo&&(a.patchFlag===-1&&(a=r[s]=Zn(a)),a.el=o.el),a.type===An&&!a.el&&(a.el=o.el)}}function Tm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Dh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dh(e)}function hu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function ol(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?ol(e.subTree):null}const Ih=n=>n.__isSuspense;function Am(n,e){e&&e.pendingBranch?Ne(n)?e.effects.push(...n):e.effects.push(n):Dp(n)}const vt=Symbol.for("v-fgt"),qo=Symbol.for("v-txt"),An=Symbol.for("v-cmt"),da=Symbol.for("v-stc"),Xi=[];let on=null;function Ge(n=!1){Xi.push(on=n?null:[])}function Uh(){Xi.pop(),on=Xi[Xi.length-1]||null}let hs=1;function du(n,e=!1){hs+=n,n<0&&on&&e&&(on.hasOnce=!0)}function Nh(n){return n.dynamicChildren=hs>0?on||ki:null,Uh(),hs>0&&on&&on.push(n),n}function Xe(n,e,t,i,r,s){return Nh(j(n,e,t,i,r,s,!0))}function Fh(n,e,t,i,r){return Nh($t(n,e,t,i,r,!0))}function xc(n){return n?n.__v_isVNode===!0:!1}function Vr(n,e){return n.type===e.type&&n.key===e.key}const Oh=({key:n})=>n??null,co=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?mt(n)||bt(n)||We(n)?{i:sn,r:n,k:e,f:!!t}:n:null);function j(n,e=null,t=null,i=0,r=null,s=n===vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Oh(e),ref:e&&co(e),scopeId:uh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:sn};return a?(Ao(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=mt(t)?8:16),hs>0&&!o&&on&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&on.push(l),l}const $t=wm;function wm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===gh)&&(n=An),xc(n)){const a=wr(n,e,!0);return t&&Ao(a,t),hs>0&&!s&&on&&(a.shapeFlag&6?on[on.indexOf(n)]=a:on.push(a)),a.patchFlag=-2,a}if(zm(n)&&(n=n.__vccOpts),e){e=Cm(e);let{class:a,style:l}=e;a&&!mt(a)&&(e.class=Tt(a)),lt(l)&&(dc(l)&&!Ne(l)&&(l=Dt({},l)),e.style=Ar(l))}const o=mt(n)?1:Ih(n)?128:Wo(n)?64:lt(n)?4:We(n)?2:0;return j(n,e,t,i,r,o,s,!0)}function Cm(n){return n?dc(n)||Th(n)?Dt({},n):n:null}function wr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=e?Rm(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Oh(u),ref:e&&e.ref?t&&s?Ne(s)?s.concat(co(e)):[s,co(e)]:co(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==vt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&wr(n.ssContent),ssFallback:n.ssFallback&&wr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Eo(c,l.clone(c)),c}function Ot(n=" ",e=0){return $t(qo,null,n,e)}function Kt(n="",e=!1){return e?(Ge(),Fh(An,null,n)):$t(An,null,n)}function Ln(n){return n==null||typeof n=="boolean"?$t(An):Ne(n)?$t(vt,null,n.slice()):xc(n)?Zn(n):$t(qo,null,String(n))}function Zn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:wr(n)}function Ao(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ao(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Th(e)?e._ctx=sn:r===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(We(e)){if(i&65){Ao(n,{default:e});return}e={default:e,_ctx:sn},t=32}else e=String(e),i&64?(t=16,e=[Ot(e)]):t=8;n.children=e,n.shapeFlag|=t}function Rm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Tt([e.class,i.class]));else if(r==="style")e.style=Ar([e.style,i.style]);else if(Fo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ne(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!Oo(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function wn(n,e,t,i=null){Tn(n,e,7,[t,i])}const Pm=xh();let Bh=0;function Lm(){return Bh}function Dm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Pm,s={uid:Bh++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new np(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wh(i,r),emitsOptions:Mh(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=um.bind(null,s),n.ce&&n.ce(s),s}let zt=null;const Im=()=>zt||sn;let wo,ds;{const n=ko(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};wo=e("__VUE_INSTANCE_SETTERS__",t=>zt=t),ds=e("__VUE_SSR_SETTERS__",t=>ps=t)}const Ss=n=>{const e=zt;return wo(n),n.scope.on(),()=>{n.scope.off(),wo(e)}},pu=()=>{zt&&zt.scope.off(),wo(null)};function zh(n){return n.vnode.shapeFlag&4}let ps=!1;function Um(n,e=!1,t=!1){e&&ds(e);const{props:i,children:r}=n.vnode,s=zh(n);gm(n,i,s,e),Mm(n,r,t||e);const o=s?Nm(n,e):void 0;return e&&ds(!1),o}function Nm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,tm);const{setup:i}=t;if(i){Bn();const r=n.setupContext=i.length>1?Om(n):null,s=Ss(n),o=Ms(i,n,0,[n.props,r]),a=Nf(o);if(zn(),s(),(a||n.sp)&&!rs(n)&&dh(n),a){if(o.then(pu,pu),e)return o.then(l=>{ds(!0);try{mu(n,l,e)}finally{ds(!1)}}).catch(l=>{Go(l,n,0)});n.asyncDep=o}else mu(n,o)}else kh(n)}function mu(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:lt(e)&&(n.setupState=rh(e)),kh(n)}function kh(n,e,t){const i=n.type;n.render||(n.render=i.render||Nn);{const r=Ss(n);Bn();try{nm(n)}finally{zn(),r()}}}const Fm={get(n,e){return Bt(n,"get",""),n[e]}};function Om(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Fm),slots:n.slots,emit:n.emit,expose:e}}function Yo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(rh(Sp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ss)return ss[t](n)},has(e,t){return t in e||t in ss}})):n.proxy}function Bm(n,e=!0){return We(n)?n.displayName||n.name:n.name||e&&n.__name}function zm(n){return We(n)&&"__vccOpts"in n}const Zt=(n,e)=>Ap(n,e,ps),km="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let al;const gu=typeof window<"u"&&window.trustedTypes;if(gu)try{al=gu.createPolicy("vue",{createHTML:n=>n})}catch{}const Hh=al?n=>al.createHTML(n):n=>n,Hm="http://www.w3.org/2000/svg",Vm="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,_u=Kn&&Kn.createElement("template"),Gm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Kn.createElementNS(Hm,n):e==="mathml"?Kn.createElementNS(Vm,n):t?Kn.createElement(n,{is:t}):Kn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Kn.createTextNode(n),createComment:n=>Kn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Kn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{_u.innerHTML=Hh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=_u.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Wm=Symbol("_vtc");function Xm(n,e,t){const i=n[Wm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const vu=Symbol("_vod"),$m=Symbol("_vsh"),qm=Symbol(""),Ym=/(?:^|;)\s*display\s*:/;function jm(n,e,t){const i=n.style,r=mt(t);let s=!1;if(t&&!r){if(e)if(mt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Kr(i,a,"")}else for(const o in e)t[o]==null&&Kr(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?Zm(n,o,!mt(e)&&e?e[o]:void 0,a)||Kr(i,o,a):Kr(i,o,"")}}else if(r){if(e!==t){const o=i[qm];o&&(t+=";"+o),i.cssText=t,s=Ym.test(t)}}else e&&n.removeAttribute("style");vu in n&&((!r||e!==t)&&(n[vu]=s?i.display:""),n[$m]&&(i.display="none"))}const Is=/\s*!important$/;function Kr(n,e,t){if(Ne(t))t.forEach(i=>Kr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Is.test(t)?n.setProperty(e,t.replace(Is,""),"important"):n.setProperty(e,t);else{const i=Km(n,e);Is.test(t)?n.setProperty(Yi(i),t.replace(Is,""),"important"):n[i]=t}}const xu=["Webkit","Moz","ms"],pa={};function Km(n,e){const t=pa[e];if(t)return t;let i=Xt(e);if(i!=="filter"&&i in n)return pa[e]=i;i=zo(i);for(let r=0;r<xu.length;r++){const s=xu[r]+i;if(s in n)return pa[e]=s}return e}function Zm(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&mt(i)&&t===i}const Mu="http://www.w3.org/1999/xlink";function Su(n,e,t,i,r,s=Qd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Mu,e.slice(6,e.length)):n.setAttributeNS(Mu,e,t):t==null||s&&!zf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":On(t)?String(t):t)}function yu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Hh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=zf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Oi(n,e,t,i){n.addEventListener(e,t,i)}function Jm(n,e,t,i){n.removeEventListener(e,t,i)}const Eu=Symbol("_vei");function Qm(n,e,t,i,r=null){const s=n[Eu]||(n[Eu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=ng(e);if(i){const u=s[e]=sg(i,r);Oi(n,a,u,l)}else o&&(Jm(n,a,o,l),s[e]=void 0)}}const eg=/(Once|Passive|Capture)$/,tg=/^on:?(?:Once|Passive|Capture)$/;function ng(n){let e,t;for(;(t=n.match(eg))&&!tg.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Yi(n.slice(2)),e]}let ma=0;const ig=Promise.resolve(),rg=()=>ma||(ig.then(()=>ma=0),ma=Date.now());function sg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(Ne(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const u=o[l];u&&Tn(u,e,5,a)}}else Tn(r,e,5,[i])};return t.value=n,t.attached=rg(),t}const bu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,og=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Xm(n,i,o):e==="style"?jm(n,t,i):Fo(e)?Oo(e)||Qm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ag(n,e,i,o))?(yu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Su(n,e,i,o,s,e!=="value")):n._isVueCE&&(lg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!mt(i)))?yu(n,Xt(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Su(n,e,i,o))};function ag(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&bu(e)&&We(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return bu(e)&&mt(t)?!1:e in n}function lg(n,e){const t=n._def.props;if(!t)return!1;const i=Xt(e);return Array.isArray(t)?t.some(r=>Xt(r)===i):Object.keys(t).some(r=>Xt(r)===i)}const Co=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ne(e)?t=>oo(e,t):e};function cg(n){n.target.composing=!0}function Tu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hi=Symbol("_assign"),Us=Symbol("_initialValue");function ga(n,e,t){return e&&(n=n.trim()),t&&(n=oc(n)),n}const Zr={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[Us]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Us]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Hi]=Co(r);const s=i||r.props&&r.props.type==="number";Oi(n,e?"change":"input",o=>{o.target.composing||n[Hi](ga(n.value,t,s))}),(t||s)&&Oi(n,"change",()=>{n.value=ga(n.value,t,s)}),e||(Oi(n,"compositionstart",cg),Oi(n,"compositionend",Tu),Oi(n,"change",Tu))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[Us];delete n[Us],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[Hi](ga(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Hi]=Co(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?oc(n.value):n.value,l=e??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},ug={deep:!0,created(n,e,t){n[Hi]=Co(t),Oi(n,"change",()=>{const i=n._modelValue,r=fg(n),s=n.checked,o=n[Hi];if(Ne(i)){const a=kf(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const u=[...i];u.splice(a,1),o(u)}}else if(Tr(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(Vh(n,s))})},mounted:Au,beforeUpdate(n,e,t){n[Hi]=Co(t),Au(n,e,t)}};function Au(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(Ne(e))r=kf(e,i.props.value)>-1;else if(Tr(e))r=e.has(i.props.value);else{if(e===t)return;r=Ur(e,Vh(n,!0))}n.checked!==r&&(n.checked=r)}function fg(n){return"_value"in n?n._value:n.value}function Vh(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const hg=["ctrl","shift","alt","meta"],dg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>hg.some(t=>n[`${t}Key`]&&!e.includes(t))},pg=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=dg[e[o]];if(a&&a(r,e))return}return n(r,...s)})},mg=Dt({patchProp:og},Gm);let wu;function gg(){return wu||(wu=ym(mg))}const _g=(...n)=>{const e=gg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=xg(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,vg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function vg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function xg(n){return mt(n)?document.querySelector(n):n}const Mg="pixel-lab",ms="kv";function Gh(){return new Promise((n,e)=>{const t=indexedDB.open(Mg,1);t.onupgradeneeded=()=>t.result.createObjectStore(ms),t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function Sg(n){const e=await Gh();return new Promise((t,i)=>{const s=e.transaction(ms,"readonly").objectStore(ms).get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}async function yg(n,e){const t=await Gh();return new Promise((i,r)=>{const s=t.transaction(ms,"readwrite");s.objectStore(ms).put(e,n),s.oncomplete=()=>i(),s.onerror=()=>r(s.error)})}const ll="pixel-lab-sketch",cl="pixel-lab-form",Eg="pixel-lab-asset",bg="pixel-lab-project",Fr=1,le=32,Et=le*le;function Cu(n){const e=new Uint8Array(Et/8);for(let t=0;t<Et;t++)n[t]&&(e[t>>3]|=128>>(t&7));return Wh(e)}function Ru(n,e,t){const i=Xh(n);if(!i)return e.push(`${t}: not valid base64`),null;if(i.length!==Et/8)return e.push(`${t}: expected ${Et/8} bytes, got ${i.length}`),null;const r=new Array(Et);for(let s=0;s<Et;s++)r[s]=i[s>>3]&128>>(s&7)?1:0;return r}function Tg(n){return Wh(Uint8Array.from(n.map(e=>e&255)))}function Ag(n,e,t){const i=Xh(n);return i?i.length!==Et?(e.push(`${t}: expected ${Et} bytes, got ${i.length}`),null):Array.from(i):(e.push(`${t}: not valid base64`),null)}function Wh(n){let e="";for(let t=0;t<n.length;t+=4096)e+=String.fromCharCode(...n.subarray(t,t+4096));return btoa(e)}function Xh(n){if(typeof n!="string")return null;try{const e=atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}catch{return null}}function $h(){return{silhouette:new Array(Et).fill(0),heightHints:null,edgeHints:null,groundAnchor:{x:16,y:31},bounds:null,objectType:"rock",depthHint:.6}}function os(n){let e=le,t=le,i=-1,r=-1;for(let s=0;s<Et;s++){if(!n.silhouette[s])continue;const o=s%le,a=Math.floor(s/le);o<e&&(e=o),o>i&&(i=o),a<t&&(t=a),a>r&&(r=a)}return n.bounds=i<0?null:{x:e,y:t,w:i-e+1,h:r-t+1},n.bounds}function uo(n){return{kind:ll,version:Fr,width:le,height:le,objectType:n.objectType,depthHint:n.depthHint,bounds:n.bounds,groundAnchor:n.groundAnchor,silhouette:Cu(n.silhouette),heightHints:n.heightHints?Tg(n.heightHints):null,edgeHints:n.edgeHints?Cu(n.edgeHints):null}}function wg(n){const e=[];if(typeof n!="object"||n===null)return{sketch:null,errors:["sketch JSON must be an object"]};const t=n;t.kind!==ll&&e.push(`kind must be '${ll}'`),t.version!==Fr&&e.push(`unsupported sketch version ${JSON.stringify(t.version)}`),(t.width!==le||t.height!==le)&&e.push("only 32x32 sketches are supported in v0.1");const i=Ru(t.silhouette??"",e,"silhouette");let r=null;t.heightHints!=null&&(r=Ag(t.heightHints,e,"heightHints"));let s=null;t.edgeHints!=null&&(s=Ru(t.edgeHints,e,"edgeHints"));const o=t.groundAnchor;(!o||typeof o.x!="number"||typeof o.y!="number")&&e.push("groundAnchor must be {x,y} numbers");const a=t.bounds;a!=null&&!(typeof a.x=="number"&&typeof a.y=="number"&&typeof a.w=="number"&&typeof a.h=="number")&&e.push("bounds must be {x,y,w,h} integers");const l=t.depthHint??.6;if((typeof l!="number"||l<0||l>1)&&e.push("depthHint must be a number 0..1"),e.length)return{sketch:null,errors:e};const u={silhouette:i??new Array(Et).fill(0),heightHints:r,edgeHints:s,groundAnchor:{x:Math.round(o.x),y:Math.round(o.y)},bounds:a?{x:a.x,y:a.y,w:a.w,h:a.h}:null,objectType:String(t.objectType||"object"),depthHint:l};return os(u),{sketch:u,errors:[]}}function fo(n){return{kind:cl,version:Fr,units:n.units,coordinateSystem:n.coordinateSystem,groundAnchor:n.groundAnchor,meshes:n.meshes.map(e=>({name:e.name,positions:e.positions,faces:e.faces,region:e.region}))}}function Cg(n){const e=[];if(typeof n!="object"||n===null)return{form:null,errors:["form JSON must be an object"]};const t=n;t.kind!==cl&&e.push(`kind must be '${cl}'`),t.version!==Fr&&e.push(`unsupported form version ${JSON.stringify(t.version)}`),(t.units??"pixels")!=="pixels"&&e.push(`units must be 'pixels', got ${JSON.stringify(t.units)}`),(t.coordinateSystem??"right-handed-y-up")!=="right-handed-y-up"&&e.push(`coordinateSystem must be 'right-handed-y-up', got ${JSON.stringify(t.coordinateSystem)}`);const i=Array.isArray(t.meshes)?t.meshes:[];i.length||e.push("meshes must be a non-empty list");const r=[];for(let o=0;o<i.length;o++){const a=`meshes[${o}]`,l=i[o];if(typeof l!="object"||l===null){e.push(`${a}: must be an object`);continue}const u=typeof l.name=="string"&&l.name?l.name:`mesh${o}`,c=l.positions;let p=[];if(!Array.isArray(c)||!c.length||c.length%3!==0)e.push(`${a}.positions: flat xyz list, multiple of 3, non-empty`);else{const v=c.findIndex(d=>typeof d!="number"||!Number.isFinite(d));v>=0?e.push(`${a}.positions[${v}]: not a number`):p=c.map(Number)}const h=l.faces,m=p.length/3,_=[];!Array.isArray(h)||!h.length?e.push(`${a}.faces: non-empty list of triangles`):h.forEach((v,d)=>{if(!Array.isArray(v)||v.length!==3){e.push(`${a}.faces[${d}]: must be a triangle [a,b,c]`);return}if(!v.every(f=>Number.isInteger(f))){e.push(`${a}.faces[${d}]: indices must be integers`);return}if(Math.min(...v)<0||Math.max(...v)>=m){e.push(`${a}.faces[${d}]: index out of range (0..${m-1})`);return}_.push([...v])}),p.length&&_.length&&r.push({name:u,positions:p,faces:_,region:String(l.region||"body")})}const s=t.groundAnchor;return(!s||typeof s.x!="number"||typeof s.y!="number"||typeof s.z!="number")&&e.push("groundAnchor must be {x,y,z} numbers"),e.length?{form:null,errors:e}:{form:{meshes:r,units:"pixels",coordinateSystem:"right-handed-y-up",groundAnchor:{x:s.x,y:s.y,z:s.z}},errors:[]}}function Rg(n){return{kind:Eg,version:Fr,asset:n}}function Pg(n){return{kind:bg,version:Fr,project:n}}function Mc(n){return le-1-n}function ul(n){return(Math.imul(n,2654435761)>>>0)/4294967296}function Lg(n,e="rock"){const t=n.silhouette,i=[];for(let p=0;p<t.length;p++)t[p]&&i.push(p);const r=Mc(n.groundAnchor.y);if(!i.length)return{meshes:[],units:"pixels",coordinateSystem:"right-handed-y-up",groundAnchor:{x:n.groundAnchor.x,y:r,z:16}};os(n);const s=n.bounds??{w:1,h:1},o=Math.max(3,n.depthHint*Math.max(s.w,s.h)),a=[],l=[];function u(p,h,m,_){const v=a.length/3;a.push(...p,...h,...m,..._),l.push([v,v+1,v+2],[v,v+2,v+3])}const c=n.heightHints;for(const p of i){const h=p%le,m=Math.floor(p/le),_=.7+.3*ul(p),v=16+o/2*_,d=16-o/2*_,f=h,A=h+1,x=le-1-m;let T=le-m;c&&c[p]&&(m===0||!t[(m-1)*le+h])&&(T+=c[p]/255*o*.6),u([f,x,v],[A,x,v],[A,T,v],[f,T,v]),u([f,x,d],[f,T,d],[A,T,d],[A,x,d]);const U=[[h-1,m,[[f,x,v],[f,T,v],[f,T,d],[f,x,d]]],[h+1,m,[[A,x,v],[A,x,d],[A,T,d],[A,T,v]]],[h,m-1,[[f,T,v],[A,T,v],[A,T,d],[f,T,d]]],[h,m+1,[[f,x,v],[f,x,d],[A,x,d],[A,x,v]]]];for(const[D,R,z]of U)(D<0||D>=le||R<0||R>=le||!t[R*le+D])&&u(z[0],z[1],z[2],z[3])}return{meshes:[{name:e,positions:a,faces:l,region:"body"}],units:"pixels",coordinateSystem:"right-handed-y-up",groundAnchor:{x:n.groundAnchor.x,y:r,z:16}}}function Dg(n="rock",e=7,t=6,i=[16,8,16]){const r=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];let s=[[0,2,4],[2,1,4],[1,3,4],[3,0,4],[2,0,5],[1,2,5],[3,1,5],[0,3,5]];const o=new Map;function a(p,h){const m=p<h?`${p}_${h}`:`${h}_${p}`,_=o.get(m);if(_!==void 0)return _;const v=r[p],d=r[h],f=[(v[0]+d[0])/2,(v[1]+d[1])/2,(v[2]+d[2])/2],A=Math.hypot(f[0],f[1],f[2]);return r.push([f[0]/A,f[1]/A,f[2]/A]),o.set(m,r.length-1),r.length-1}const l=[];for(const[p,h,m]of s){const _=a(p,h),v=a(h,m),d=a(m,p);l.push([p,_,d],[_,h,v],[d,v,m],[_,v,d])}s=l;const u=[];return r.forEach((p,h)=>{const m=t*(.78+.22*ul(e*1e3+h));u.push(i[0]+p[0]*m,i[1]+p[1]*m*.8,i[2]+p[2]*m*(.85+.15*ul(h)))}),{meshes:[{name:n,positions:u,faces:s,region:"body"}],units:"pixels",coordinateSystem:"right-handed-y-up",groundAnchor:{x:16,y:0,z:16}}}function Sr(){return{yawDeg:0,pitchDeg:12,orthoScale:1,offsetX:0,offsetY:0,objYawDeg:0,objPitchDeg:0,objRollDeg:0,locked:!1}}function Ig(){return{azimuthDeg:-35,elevationDeg:55,intensity:1,ambient:.35,shadowEnabled:!0,shadowStrength:.55,shadowSoftness:.5}}function fl(){return{mode:"light-facing",strength:.8,width:1,threshold:.3}}const qh=["#000000","#222034","#45283c","#663931","#8f563b","#df7126","#d9a066","#eec39a","#fbf236","#99e550","#6abe30","#37946e","#4b692f","#524b24","#323c39","#3f3f74","#306082","#5b6ee1","#639bff","#5fcde4","#cbdbfc","#ffffff","#9badb7","#847e87","#696a6a","#595652","#76428a","#ac3232","#d95763","#d77bba","#8f974a","#8a6f30"],Ug=new Set(qh.map(n=>n.toLowerCase()));function Yh(n){return typeof n=="string"&&Ug.has(n.toLowerCase())}function ys(n){const e=n.replace("#","");return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function Pu(n){const[e,t,i]=ys(n);return(.2126*e+.7152*t+.0722*i)/255}function Ng(n){return[...n].sort((e,t)=>Pu(e)-Pu(t))}const Sc=6,hl={stone:{id:"stone",name:"Stone",ramp:["#222034","#323c39","#524b24","#847e87","#9badb7","#cbdbfc"],accent:"#cbdbfc",edgePreference:"light-facing",contrast:1},coal:{id:"coal",name:"Coal",ramp:["#000000","#222034","#323c39","#524b24","#696a6a","#9badb7"],accent:"#595652",edgePreference:"light-facing",contrast:1},iron_ore:{id:"iron_ore",name:"Iron Ore",ramp:["#222034","#45283c","#663931","#847e87","#d9a066","#eec39a"],accent:"#eec39a",edgePreference:"light-facing",contrast:1},copper_ore:{id:"copper_ore",name:"Copper Ore",ramp:["#323c39","#524b24","#8a6f30","#8f563b","#d77bba","#d9a066"],accent:"#df7126",edgePreference:"light-facing",contrast:1},gold_ore:{id:"gold_ore",name:"Gold Ore",ramp:["#323c39","#524b24","#8a6f30","#d9a066","#fbf236","#eec39a"],accent:"#fbf236",edgePreference:"light-facing",contrast:1}},jh="stone";function $i(n){return n&&hl[n]||hl[jh]}function Kh(n,e=Sc){const t=n.ramp;if(t.length===e)return[...t];if(e<=1)return[t[t.length-1]];if(t.length>e){const r=[];for(let s=0;s<e;s++)r.push(t[Math.round(s*(t.length-1)/(e-1))]);return r}const i=[...t];for(;i.length<e;)i.push(t[t.length-1]);return i}function Fg(n){const e=[];n.length||e.push("ramp must contain at least one color");for(const t of n)Yh(t)||e.push(`${t} is not a DawnBringer-32 color`);return e}function Og(n){return Ng(n.map(e=>e.toLowerCase()))}function Zh(n,e=Sc){return e<=1?"#ffffff":`#${Math.round(n*255/(e-1)).toString(16).padStart(2,"0").repeat(3)}`}function Bg(n,e,t=Sc){return Kh(n,t)[Math.max(0,Math.min(t-1,e))]}const Jh="pixel-lab/project/v1";function zg(n,e){const t=[];for(let i=0;i<e;i++)for(let r=0;r<n;r++)i>=e-2&&r>=2&&r<=n-4?t.push("stone"):r===Math.floor(n/2)||i===Math.floor(e/2)?t.push("dirt"):t.push("grass");return t}function Qh(){return{cols:10,rows:8,tiles:zg(10,8),placements:[],showGrid:!0,view:{x:0,y:0,zoom:1}}}const we=Vo({loaded:!1,mode:"scene",project:{assets:{},order:[],activeAssetId:null,sharedLight:Ig(),scene:Qh()},placingAssetId:null,selectedPlacementId:null,notice:null});function Ki(){const n=we.project.activeAssetId;return n?we.project.assets[n]??null:null}function dl(n){return n.light??we.project.sharedLight}function yc(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function ed(n){const e={id:yc(),name:n||`Asset ${we.project.order.length+1}`,createdAt:Date.now(),updatedAt:Date.now(),objectType:"rock",sketch:$h(),form:null,formSource:null,camera:null,light:null,edge:null,materialId:jh,levels:null,shadowAlpha:null,overrides:null,grayLevels:6,contrast:1,rampOverrides:null};return we.project.assets[e.id]=e,we.project.order.push(e.id),we.project.activeAssetId=e.id,e}function pt(n){n.updatedAt=Date.now()}function td(n){return n.sketch?(n.form=Lg(n.sketch,n.objectType),n.formSource="procedural",pt(n),null):"no sketch"}function pl(n,e,t){const i={id:yc(),assetId:n,tx:e,ty:t};return we.project.scene.placements.push(i),i}function kg(n){const e=we.project.scene;e.placements=e.placements.filter(t=>t.id!==n),we.selectedPlacementId===n&&(we.selectedPlacementId=null)}function Hg(n){const e=we.project.scene,t=e.placements.find(i=>i.id===n);t&&e.placements.push({id:yc(),assetId:t.assetId,tx:Math.min(e.cols-1,t.tx+1),ty:t.ty})}let _a=null;function Vg(){_a&&clearTimeout(_a),_a=setTimeout(()=>void nd(),400)}async function nd(){await yg(Jh,JSON.parse(JSON.stringify(we.project)))}async function Gg(){var n;try{const e=await Sg(Jh);e&&e.assets&&e.scene?(we.project=e,(n=we.project.scene.tiles)!=null&&n.length||(we.project.scene=Qh())):await Lu()}catch{await Lu()}lo(()=>we.project,()=>Vg(),{deep:!0}),we.loaded=!0}async function Lu(){const n=ed("Starter rock");n.objectType="rock";const e=$h();for(let t=20;t<=26;t++)for(let i=12;i<=19;i++)!(t===20&&(i===12||i===19))&&!(t===26&&i===12)&&(e.silhouette[t*le+i]=1);e.groundAnchor={x:16,y:26},n.sketch=e,n.form=Dg("rock",7,5,[16,21,16]),n.formSource="procedural",n.camera={...Sr(),locked:!0},pl(n.id,3,2),pl(n.id,7,5),await nd()}function Wg(n,e,t){const i=new Int16Array(Et);for(let r=0;r<Et;r++){if(n[r*4+3]<16){i[r]=-1;continue}let a=((.2126*n[r*4]+.7152*n[r*4+1]+.0722*n[r*4+2])/255-.5)*t+.5;a=Math.max(0,Math.min(.9999,a)),i[r]=Math.min(e-1,Math.floor(a*e))}return i}const ml=[[-1,0],[1,0],[0,-1],[0,1]];function gl(n,e,t){return e>=0&&e<le&&t>=0&&t<le&&n[t*le+e]>=0}function Xg(n,e,t,i){if(e.mode==="disabled"||e.strength<=0)return;const r=Math.hypot(t.x,t.y)||1,s=t.x/r,o=t.y/r,a=new Map,l=i-1,u=(c,p)=>{const h=n[c],m=h+(p-h)*e.strength;a.set(c,Math.min(l,Math.max(0,Math.round(m))))};for(let c=0;c<le;c++)for(let p=0;p<le;p++){const h=c*le+p;if(!(n[h]<0)){for(let m=1;m<=Math.max(1,e.width);m++)for(const[_,v]of ml){const d=p+_*m,f=c+v*m;if(!!gl(n,d,f))continue;const x=_*s+v*o;(e.mode==="light-facing"&&x>e.threshold||e.mode==="rim"&&x<-e.threshold)&&u(h,l)}if(e.mode==="hard")for(const[m,_]of ml){const v=p+m,d=c+_;if(!gl(n,v,d))continue;(n[h]-n[d*le+v])/Math.max(1,l)>e.threshold&&u(h,l)}e.mode==="specular"&&n[h]>=l-1&&u(h,l)}}for(const[c,p]of a)n[c]=p}function $g(n,e,t=.6){for(let i=0;i<le;i++)for(let r=0;r<le;r++){const s=i*le+r;if(!(e[s]>=0||n[s]===0)){for(const[o,a]of ml)if(gl(e,r+o,i+a)){n[s]=Math.min(255,Math.round(n[s]+255*t*.5));break}}}}function qg(n,e){if(e)for(let t=0;t<Et;t++){const i=e[t];i!=null&&(n[t]=i)}}function gs(n,e){const t=new Uint8ClampedArray(Et*4),i=e.background==="dark"?[18,19,22]:e.background==="light"?[240,240,244]:null;for(let r=0;r<Et;r++){const s=r*4,o=e.shadowAlpha?e.shadowAlpha[r]:0;if(o&&n[r]<0){const h=o/255;t[s]=i?i[0]*(1-h):0,t[s+1]=i?i[1]*(1-h):0,t[s+2]=i?i[2]*(1-h):0,t[s+3]=i?255:o;continue}const a=n[r];if(a<0){i?(t[s]=i[0],t[s+1]=i[1],t[s+2]=i[2],t[s+3]=255):t[s+3]=0;continue}const l=e.material?e.ramp?e.ramp[Math.max(0,Math.min(e.nLevels-1,a))]:Bg(e.material,a,e.nLevels):Zh(a,e.nLevels),[u,c,p]=ys(l);t[s]=u,t[s+1]=c,t[s+2]=p,t[s+3]=255}return t}function Yg(n){const e=new Uint8ClampedArray(Et*4);for(let t=0;t<Et;t++)e[t*4+3]=n[t];return e}function Ec(n,e){const t=e.renderSprite32();if(!t)return"nothing to render";const i=Wg(t.rgba,n.grayLevels,n.contrast),r=n.edge??fl();Xg(i,r,t.lightScreen,n.grayLevels);const s=new Uint8Array(t.shadowAlpha);return $g(s,i),qg(i,n.overrides),n.levels=Array.from(i),n.shadowAlpha=Array.from(s),null}function jg(n){return!!n.form&&n.form.meshes.length>0}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bc="169",Kg=0,Du=1,Zg=2,Tc=1,Jg=2,jn=3,xi=0,Jt=1,ei=2,gi=0,yr=1,Iu=2,Uu=3,Nu=4,Qg=5,Bi=100,e_=101,t_=102,n_=103,i_=104,r_=200,s_=201,o_=202,a_=203,_l=204,vl=205,l_=206,c_=207,u_=208,f_=209,h_=210,d_=211,p_=212,m_=213,g_=214,xl=0,Ml=1,Sl=2,Cr=3,yl=4,El=5,bl=6,Tl=7,Ac=0,__=1,v_=2,_i=0,x_=1,M_=2,S_=3,y_=4,E_=5,b_=6,T_=7,id=300,Rr=301,Pr=302,Al=303,wl=304,jo=306,Cl=1e3,Vi=1001,Rl=1002,un=1003,A_=1004,Ns=1005,Sn=1006,va=1007,Gi=1008,ii=1009,rd=1010,sd=1011,_s=1012,wc=1013,qi=1014,ti=1015,Es=1016,Cc=1017,Rc=1018,Lr=1020,od=35902,ad=1021,ld=1022,En=1023,cd=1024,ud=1025,Er=1026,Dr=1027,fd=1028,Pc=1029,hd=1030,Lc=1031,Dc=1033,ho=33776,po=33777,mo=33778,go=33779,Pl=35840,Ll=35841,Dl=35842,Il=35843,Ul=36196,Nl=37492,Fl=37496,Ol=37808,Bl=37809,zl=37810,kl=37811,Hl=37812,Vl=37813,Gl=37814,Wl=37815,Xl=37816,$l=37817,ql=37818,Yl=37819,jl=37820,Kl=37821,_o=36492,Zl=36494,Jl=36495,dd=36283,Ql=36284,ec=36285,tc=36286,w_=3200,C_=3201,pd=0,R_=1,di="",Cn="srgb",Ei="srgb-linear",Ic="display-p3",Ko="display-p3-linear",Ro="linear",ht="srgb",Po="rec709",Lo="p3",er=7680,Fu=519,P_=512,L_=513,D_=514,md=515,I_=516,U_=517,N_=518,F_=519,Ou=35044,Bu="300 es",ni=2e3,Do=2001;class Or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zu=1234567;const as=Math.PI/180,vs=180/Math.PI;function Br(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Wt(n,e,t){return Math.max(e,Math.min(t,n))}function Uc(n,e){return(n%e+e)%e}function O_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function B_(n,e,t){return n!==e?(t-n)/(e-n):0}function ls(n,e,t){return(1-t)*n+t*e}function z_(n,e,t,i){return ls(n,e,1-Math.exp(-t*i))}function k_(n,e=1){return e-Math.abs(Uc(n,e*2)-e)}function H_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function V_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function G_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function W_(n,e){return n+Math.random()*(e-n)}function X_(n){return n*(.5-Math.random())}function $_(n){n!==void 0&&(zu=n);let e=zu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function q_(n){return n*as}function Y_(n){return n*vs}function j_(n){return(n&n-1)===0&&n!==0}function K_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Z_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function J_(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),p=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*p,l*h,a*u);break;case"YZY":n.set(l*h,a*c,l*p,a*u);break;case"ZXZ":n.set(l*p,l*h,a*c,a*u);break;case"XZX":n.set(a*c,l*_,l*m,a*u);break;case"YXY":n.set(l*m,a*c,l*_,a*u);break;case"ZYZ":n.set(l*_,l*m,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function gr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const wi={DEG2RAD:as,RAD2DEG:vs,generateUUID:Br,clamp:Wt,euclideanModulo:Uc,mapLinear:O_,inverseLerp:B_,lerp:ls,damp:z_,pingpong:k_,smoothstep:H_,smootherstep:V_,randInt:G_,randFloat:W_,randFloatSpread:X_,seededRandom:$_,degToRad:q_,radToDeg:Y_,isPowerOfTwo:j_,ceilPowerOfTwo:K_,floorPowerOfTwo:Z_,setQuaternionFromProperEuler:J_,normalize:Ht,denormalize:gr};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,r,s,o,a,l,u){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],p=i[7],h=i[2],m=i[5],_=i[8],v=r[0],d=r[3],f=r[6],A=r[1],x=r[4],T=r[7],U=r[2],D=r[5],R=r[8];return s[0]=o*v+a*A+l*U,s[3]=o*d+a*x+l*D,s[6]=o*f+a*T+l*R,s[1]=u*v+c*A+p*U,s[4]=u*d+c*x+p*D,s[7]=u*f+c*T+p*R,s[2]=h*v+m*A+_*U,s[5]=h*d+m*x+_*D,s[8]=h*f+m*T+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],p=c*o-a*u,h=a*l-c*s,m=u*s-o*l,_=t*p+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=p*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xa.makeScale(e,t)),this}rotate(e){return this.premultiply(xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new qe;function gd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Q_(){const n=Io("canvas");return n.style.display="block",n}const ku={};function vo(n){n in ku||(ku[n]=!0,console.warn(n))}function ev(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function tv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Hu=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vu=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gr={[Ei]:{transfer:Ro,primaries:Po,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Cn]:{transfer:ht,primaries:Po,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ko]:{transfer:Ro,primaries:Lo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Vu),fromReference:n=>n.applyMatrix3(Hu)},[Ic]:{transfer:ht,primaries:Lo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Vu),fromReference:n=>n.applyMatrix3(Hu).convertLinearToSRGB()}},iv=new Set([Ei,Ko]),rt={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!iv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Gr[e].toReference,r=Gr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Gr[n].primaries},getTransfer:function(n){return n===di?Ro:Gr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Gr[e].luminanceCoefficients)}};function br(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ma(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let tr;class rv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{tr===void 0&&(tr=Io("canvas")),tr.width=e.width,tr.height=e.height;const i=tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Io("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=br(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(br(t[i]/255)*255):t[i]=br(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sv=0;class _d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=Br(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sa(r[o].image)):s.push(Sa(r[o]))}else s=Sa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ov=0;class Qt extends Or{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=Vi,r=Vi,s=Sn,o=Gi,a=En,l=ii,u=Qt.DEFAULT_ANISOTROPY,c=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=Br(),this.name="",this.source=new _d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cl:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cl:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=id;Qt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],p=l[8],h=l[1],m=l[5],_=l[9],v=l[2],d=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(p-v)<.01&&Math.abs(_-d)<.01){if(Math.abs(c+h)<.1&&Math.abs(p+v)<.1&&Math.abs(_+d)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,T=(m+1)/2,U=(f+1)/2,D=(c+h)/4,R=(p+v)/4,z=(_+d)/4;return x>T&&x>U?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=D/i,s=R/i):T>U?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=D/r,s=z/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=R/s,r=z/s),this.set(i,r,s,t),this}let A=Math.sqrt((d-_)*(d-_)+(p-v)*(p-v)+(h-c)*(h-c));return Math.abs(A)<.001&&(A=1),this.x=(d-_)/A,this.y=(p-v)/A,this.z=(h-c)/A,this.w=Math.acos((u+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class av extends Or{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _d(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends av{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vd extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lv extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],p=i[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=p;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(p!==v||l!==h||u!==m||c!==_){let d=1-a;const f=l*h+u*m+c*_+p*v,A=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const U=Math.sqrt(x),D=Math.atan2(U,f*A);d=Math.sin(d*D)/U,a=Math.sin(a*D)/U}const T=a*A;if(l=l*d+h*T,u=u*d+m*T,c=c*d+_*T,p=p*d+v*T,d===1-a){const U=1/Math.sqrt(l*l+u*u+c*c+p*p);l*=U,u*=U,c*=U,p*=U}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],p=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+c*p+l*m-u*h,e[t+1]=l*_+c*h+u*p-a*m,e[t+2]=u*_+c*m+a*h-l*p,e[t+3]=c*_-a*p-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),p=a(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*p+u*m*_,this._y=u*m*p-h*c*_,this._z=u*c*_+h*m*p,this._w=u*c*p-h*m*_;break;case"YXZ":this._x=h*c*p+u*m*_,this._y=u*m*p-h*c*_,this._z=u*c*_-h*m*p,this._w=u*c*p+h*m*_;break;case"ZXY":this._x=h*c*p-u*m*_,this._y=u*m*p+h*c*_,this._z=u*c*_+h*m*p,this._w=u*c*p-h*m*_;break;case"ZYX":this._x=h*c*p-u*m*_,this._y=u*m*p+h*c*_,this._z=u*c*_-h*m*p,this._w=u*c*p+h*m*_;break;case"YZX":this._x=h*c*p+u*m*_,this._y=u*m*p+h*c*_,this._z=u*c*_-h*m*p,this._w=u*c*p-h*m*_;break;case"XZY":this._x=h*c*p-u*m*_,this._y=u*m*p-h*c*_,this._z=u*c*_+h*m*p,this._w=u*c*p+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],p=t[10],h=i+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),p=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),p=2*(s*i-o*t);return this.x=t+l*u+o*p-a*c,this.y=i+l*c+a*u-s*p,this.z=r+l*p+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new Y,Gu=new bs;class Ts{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),Os.subVectors(this.max,Wr),nr.subVectors(e.a,Wr),ir.subVectors(e.b,Wr),rr.subVectors(e.c,Wr),oi.subVectors(ir,nr),ai.subVectors(rr,ir),Ci.subVectors(nr,rr);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ci.z,Ci.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ci.z,0,-Ci.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ci.y,Ci.x,0];return!Ea(t,nr,ir,rr,Os)||(t=[1,0,0,0,1,0,0,0,1],!Ea(t,nr,ir,rr,Os))?!1:(Bs.crossVectors(oi,ai),t=[Bs.x,Bs.y,Bs.z],Ea(t,nr,ir,rr,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],gn=new Y,Fs=new Ts,nr=new Y,ir=new Y,rr=new Y,oi=new Y,ai=new Y,Ci=new Y,Wr=new Y,Os=new Y,Bs=new Y,Ri=new Y;function Ea(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ri.fromArray(n,s);const a=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),l=e.dot(Ri),u=t.dot(Ri),c=i.dot(Ri);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const cv=new Ts,Xr=new Y,ba=new Y;class Zo{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);const t=Xr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(ba)),this.expandByPoint(Xr.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new Y,Ta=new Y,zs=new Y,li=new Y,Aa=new Y,ks=new Y,wa=new Y;class xd{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ta.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Ta);const s=e.distanceTo(t)*.5,o=-this.direction.dot(zs),a=li.dot(this.direction),l=-li.dot(zs),u=li.lengthSq(),c=Math.abs(1-o*o);let p,h,m,_;if(c>0)if(p=o*l-a,h=o*a-l,_=s*c,p>=0)if(h>=-_)if(h<=_){const v=1/c;p*=v,h*=v,m=p*(p+o*h+2*a)+h*(o*p+h+2*l)+u}else h=s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+u;else h=-s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+u;else h<=-_?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+u):h<=_?(p=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+u);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Ta).addScaledVector(zs,h),m}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),r=Xn.dot(Xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,p=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,r,s){Aa.subVectors(t,e),ks.subVectors(i,e),wa.crossVectors(Aa,ks);let o=this.direction.dot(wa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const l=a*this.direction.dot(ks.crossVectors(li,ks));if(l<0)return null;const u=a*this.direction.dot(Aa.cross(li));if(u<0||l+u>o)return null;const c=-a*li.dot(wa);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,r,s,o,a,l,u,c,p,h,m,_,v,d){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,p,h,m,_,v,d)}set(e,t,i,r,s,o,a,l,u,c,p,h,m,_,v,d){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=p,f[14]=h,f[3]=m,f[7]=_,f[11]=v,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*c,m=o*p,_=a*c,v=a*p;t[0]=l*c,t[4]=-l*p,t[8]=u,t[1]=m+_*u,t[5]=h-v*u,t[9]=-a*l,t[2]=v-h*u,t[6]=_+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*p,_=u*c,v=u*p;t[0]=h+v*a,t[4]=_*a-m,t[8]=o*u,t[1]=o*p,t[5]=o*c,t[9]=-a,t[2]=m*a-_,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*p,_=u*c,v=u*p;t[0]=h-v*a,t[4]=-o*p,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*c,t[9]=v-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*p,_=a*c,v=a*p;t[0]=l*c,t[4]=_*u-m,t[8]=h*u+v,t[1]=l*p,t[5]=v*u+h,t[9]=m*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,_=a*l,v=a*u;t[0]=l*c,t[4]=v-h*p,t[8]=_*p+m,t[1]=p,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*p+_,t[10]=h-v*p}else if(e.order==="XZY"){const h=o*l,m=o*u,_=a*l,v=a*u;t[0]=l*c,t[4]=-p,t[8]=u*c,t[1]=h*p+v,t[5]=o*c,t[9]=m*p-_,t[2]=_*p-m,t[6]=a*c,t[10]=v*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uv,e,fv)}lookAt(e,t,i){const r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ci.crossVectors(i,nn),ci.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ci.crossVectors(i,nn)),ci.normalize(),Hs.crossVectors(nn,ci),r[0]=ci.x,r[4]=Hs.x,r[8]=nn.x,r[1]=ci.y,r[5]=Hs.y,r[9]=nn.y,r[2]=ci.z,r[6]=Hs.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],p=i[5],h=i[9],m=i[13],_=i[2],v=i[6],d=i[10],f=i[14],A=i[3],x=i[7],T=i[11],U=i[15],D=r[0],R=r[4],z=r[8],se=r[12],y=r[1],E=r[5],I=r[9],F=r[13],H=r[2],P=r[6],N=r[10],G=r[14],B=r[3],fe=r[7],he=r[11],ge=r[15];return s[0]=o*D+a*y+l*H+u*B,s[4]=o*R+a*E+l*P+u*fe,s[8]=o*z+a*I+l*N+u*he,s[12]=o*se+a*F+l*G+u*ge,s[1]=c*D+p*y+h*H+m*B,s[5]=c*R+p*E+h*P+m*fe,s[9]=c*z+p*I+h*N+m*he,s[13]=c*se+p*F+h*G+m*ge,s[2]=_*D+v*y+d*H+f*B,s[6]=_*R+v*E+d*P+f*fe,s[10]=_*z+v*I+d*N+f*he,s[14]=_*se+v*F+d*G+f*ge,s[3]=A*D+x*y+T*H+U*B,s[7]=A*R+x*E+T*P+U*fe,s[11]=A*z+x*I+T*N+U*he,s[15]=A*se+x*F+T*G+U*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],p=e[6],h=e[10],m=e[14],_=e[3],v=e[7],d=e[11],f=e[15];return _*(+s*l*p-r*u*p-s*a*h+i*u*h+r*a*m-i*l*m)+v*(+t*l*m-t*u*h+s*o*h-r*o*m+r*u*c-s*l*c)+d*(+t*u*p-t*a*m-s*o*p+i*o*m+s*a*c-i*u*c)+f*(-r*a*c-t*l*p+t*a*h+r*o*p-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],p=e[9],h=e[10],m=e[11],_=e[12],v=e[13],d=e[14],f=e[15],A=p*d*u-v*h*u+v*l*m-a*d*m-p*l*f+a*h*f,x=_*h*u-c*d*u-_*l*m+o*d*m+c*l*f-o*h*f,T=c*v*u-_*p*u+_*a*m-o*v*m-c*a*f+o*p*f,U=_*p*l-c*v*l-_*a*h+o*v*h+c*a*d-o*p*d,D=t*A+i*x+r*T+s*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=A*R,e[1]=(v*h*s-p*d*s-v*r*m+i*d*m+p*r*f-i*h*f)*R,e[2]=(a*d*s-v*l*s+v*r*u-i*d*u-a*r*f+i*l*f)*R,e[3]=(p*l*s-a*h*s-p*r*u+i*h*u+a*r*m-i*l*m)*R,e[4]=x*R,e[5]=(c*d*s-_*h*s+_*r*m-t*d*m-c*r*f+t*h*f)*R,e[6]=(_*l*s-o*d*s-_*r*u+t*d*u+o*r*f-t*l*f)*R,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*m+t*l*m)*R,e[8]=T*R,e[9]=(_*p*s-c*v*s-_*i*m+t*v*m+c*i*f-t*p*f)*R,e[10]=(o*v*s-_*a*s+_*i*u-t*v*u-o*i*f+t*a*f)*R,e[11]=(c*a*s-o*p*s-c*i*u+t*p*u+o*i*m-t*a*m)*R,e[12]=U*R,e[13]=(c*v*r-_*p*r+_*i*h-t*v*h-c*i*d+t*p*d)*R,e[14]=(_*a*r-o*v*r-_*i*l+t*v*l+o*i*d-t*a*d)*R,e[15]=(o*p*r-c*a*r+c*i*l-t*p*l-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,p=a+a,h=s*u,m=s*c,_=s*p,v=o*c,d=o*p,f=a*p,A=l*u,x=l*c,T=l*p,U=i.x,D=i.y,R=i.z;return r[0]=(1-(v+f))*U,r[1]=(m+T)*U,r[2]=(_-x)*U,r[3]=0,r[4]=(m-T)*D,r[5]=(1-(h+f))*D,r[6]=(d+A)*D,r[7]=0,r[8]=(_+x)*R,r[9]=(d-A)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=sr.set(r[0],r[1],r[2]).length();const o=sr.set(r[4],r[5],r[6]).length(),a=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const u=1/s,c=1/o,p=1/a;return _n.elements[0]*=u,_n.elements[1]*=u,_n.elements[2]*=u,_n.elements[4]*=c,_n.elements[5]*=c,_n.elements[6]*=c,_n.elements[8]*=p,_n.elements[9]*=p,_n.elements[10]*=p,t.setFromRotationMatrix(_n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ni){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),p=(t+e)/(t-e),h=(i+r)/(i-r);let m,_;if(a===ni)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Do)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ni){const l=this.elements,u=1/(t-e),c=1/(i-r),p=1/(o-s),h=(t+e)*u,m=(i+r)*c;let _,v;if(a===ni)_=(o+s)*p,v=-2*p;else if(a===Do)_=s*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const sr=new Y,_n=new gt,uv=new Y(0,0,0),fv=new Y(1,1,1),ci=new Y,Hs=new Y,nn=new Y,Wu=new gt,Xu=new bs;class Hn{constructor(e=0,t=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],p=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hv=0;const $u=new Y,or=new bs,$n=new gt,Vs=new Y,$r=new Y,dv=new Y,pv=new bs,qu=new Y(1,0,0),Yu=new Y(0,1,0),ju=new Y(0,0,1),Ku={type:"added"},mv={type:"removed"},ar={type:"childadded",child:null},Ca={type:"childremoved",child:null};class Rt extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new Y,t=new Hn,i=new bs,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new qe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis(ju,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis(ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vs.copy(e):Vs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt($r,Vs,this.up):$n.lookAt(Vs,$r,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),or.setFromRotationMatrix($n),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ku),ar.child=e,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mv),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ku),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,dv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new Y(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new Y,qn=new Y,Ra=new Y,Yn=new Y,lr=new Y,cr=new Y,Zu=new Y,Pa=new Y,La=new Y,Da=new Y,Ia=new xt,Ua=new xt,Na=new xt;class yn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vn.subVectors(r,t),qn.subVectors(i,t),Ra.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(qn),l=vn.dot(Ra),u=qn.dot(qn),c=qn.dot(Ra),p=o*u-a*a;if(p===0)return s.set(0,0,0),null;const h=1/p,m=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ia.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Ia.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,i),Na.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ia,s.x),o.addScaledVector(Ua,s.y),o.addScaledVector(Na,s.z),o}static isFrontFacing(e,t,i,r){return vn.subVectors(i,t),qn.subVectors(e,t),vn.cross(qn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),vn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;lr.subVectors(r,i),cr.subVectors(s,i),Pa.subVectors(e,i);const l=lr.dot(Pa),u=cr.dot(Pa);if(l<=0&&u<=0)return t.copy(i);La.subVectors(e,r);const c=lr.dot(La),p=cr.dot(La);if(c>=0&&p<=c)return t.copy(r);const h=l*p-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(lr,o);Da.subVectors(e,s);const m=lr.dot(Da),_=cr.dot(Da);if(_>=0&&m<=_)return t.copy(s);const v=m*u-l*_;if(v<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(cr,a);const d=c*_-m*p;if(d<=0&&p-c>=0&&m-_>=0)return Zu.subVectors(s,r),a=(p-c)/(p-c+(m-_)),t.copy(r).addScaledVector(Zu,a);const f=1/(d+v+h);return o=v*f,a=h*f,t.copy(i).addScaledVector(lr,o).addScaledVector(cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Fa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=Uc(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Fa(o,s,e+1/3),this.g=Fa(o,s,e),this.b=Fa(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cn){const i=Sd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return rt.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Wt(Nt.r*255,0,255))*65536+Math.round(Wt(Nt.g*255,0,255))*256+Math.round(Wt(Nt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,r=Nt.g,s=Nt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const p=o-a;switch(u=c<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Cn){rt.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,r=Nt.b;return e!==Cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Gs);const i=ls(ui.h,Gs.h,t),r=ls(ui.s,Gs.s,t),s=ls(ui.l,Gs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ke;Ke.NAMES=Sd;let gv=0;class Zi extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=yr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=vl,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_l&&(i.blendSrc=this.blendSrc),this.blendDst!==vl&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nc extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new Y,Ws=new et;class Fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ou,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ou&&(e.usage=this.usage),e}}class yd extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ed extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class an extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _v=0;const cn=new gt,Oa=new Rt,ur=new Y,rn=new Ts,qr=new Ts,Ct=new Y;class pn extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?Ed:yd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return Oa.lookAt(e),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new an(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(rn.min,qr.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,qr.max),rn.expandByPoint(Ct)):(rn.expandByPoint(qr.min),rn.expandByPoint(qr.max))}rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ct.fromBufferAttribute(a,u),l&&(ur.fromBufferAttribute(e,u),Ct.add(ur)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new Y,l[z]=new Y;const u=new Y,c=new Y,p=new Y,h=new et,m=new et,_=new et,v=new Y,d=new Y;function f(z,se,y){u.fromBufferAttribute(i,z),c.fromBufferAttribute(i,se),p.fromBufferAttribute(i,y),h.fromBufferAttribute(s,z),m.fromBufferAttribute(s,se),_.fromBufferAttribute(s,y),c.sub(u),p.sub(u),m.sub(h),_.sub(h);const E=1/(m.x*_.y-_.x*m.y);isFinite(E)&&(v.copy(c).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(E),d.copy(p).multiplyScalar(m.x).addScaledVector(c,-_.x).multiplyScalar(E),a[z].add(v),a[se].add(v),a[y].add(v),l[z].add(d),l[se].add(d),l[y].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let z=0,se=A.length;z<se;++z){const y=A[z],E=y.start,I=y.count;for(let F=E,H=E+I;F<H;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new Y,T=new Y,U=new Y,D=new Y;function R(z){U.fromBufferAttribute(r,z),D.copy(U);const se=a[z];x.copy(se),x.sub(U.multiplyScalar(U.dot(se))).normalize(),T.crossVectors(D,se);const E=T.dot(l[z])<0?-1:1;o.setXYZW(z,x.x,x.y,x.z,E)}for(let z=0,se=A.length;z<se;++z){const y=A[z],E=y.start,I=y.count;for(let F=E,H=E+I;F<H;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,u=new Y,c=new Y,p=new Y;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),v=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,d),c.subVectors(o,s),p.subVectors(r,s),c.cross(p),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,d),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(d,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),p.subVectors(r,s),c.cross(p),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,p=a.normalized,h=new u.constructor(l.length*c);let m=0,_=0;for(let v=0,d=l.length;v<d;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*c;for(let f=0;f<c;f++)h[_++]=u[m++]}return new Fn(h,c,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,p=u.length;c<p;c++){const h=u[c],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let p=0,h=u.length;p<h;p++){const m=u[p];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],p=s[u];for(let h=0,m=p.length;h<m;h++)c.push(p[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ju=new gt,Pi=new xd,Xs=new Zo,Qu=new Y,$s=new Y,qs=new Y,Ys=new Y,Ba=new Y,js=new Y,ef=new Y,Ks=new Y;class fn extends Rt{constructor(e=new pn,t=new Nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){js.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],p=s[l];c!==0&&(Ba.fromBufferAttribute(p,e),o?js.addScaledVector(Ba,c):js.addScaledVector(Ba.sub(t),c))}t.add(js)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),!(Xs.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Xs,Qu)===null||Pi.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(Ju.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(Ju),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const d=h[_],f=o[d.materialIndex],A=Math.max(d.start,m.start),x=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let T=A,U=x;T<U;T+=3){const D=a.getX(T),R=a.getX(T+1),z=a.getX(T+2);r=Zs(this,f,e,i,u,c,p,D,R,z),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let d=_,f=v;d<f;d+=3){const A=a.getX(d),x=a.getX(d+1),T=a.getX(d+2);r=Zs(this,o,e,i,u,c,p,A,x,T),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const d=h[_],f=o[d.materialIndex],A=Math.max(d.start,m.start),x=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let T=A,U=x;T<U;T+=3){const D=T,R=T+1,z=T+2;r=Zs(this,f,e,i,u,c,p,D,R,z),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let d=_,f=v;d<f;d+=3){const A=d,x=d+1,T=d+2;r=Zs(this,o,e,i,u,c,p,A,x,T),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function vv(n,e,t,i,r,s,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xi,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ks);return u<t.near||u>t.far?null:{distance:u,point:Ks.clone(),object:n}}function Zs(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,$s),n.getVertexPosition(l,qs),n.getVertexPosition(u,Ys);const c=vv(n,e,t,i,$s,qs,Ys,ef);if(c){const p=new Y;yn.getBarycoord(ef,$s,qs,Ys,p),r&&(c.uv=yn.getInterpolatedAttribute(r,a,l,u,p,new et)),s&&(c.uv1=yn.getInterpolatedAttribute(s,a,l,u,p,new et)),o&&(c.normal=yn.getInterpolatedAttribute(o,a,l,u,p,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new Y,materialIndex:0};yn.getNormal($s,qs,Ys,h.normal),c.face=h,c.barycoord=p}return c}class As extends pn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],p=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new an(u,3)),this.setAttribute("normal",new an(c,3)),this.setAttribute("uv",new an(p,2));function _(v,d,f,A,x,T,U,D,R,z,se){const y=T/R,E=U/z,I=T/2,F=U/2,H=D/2,P=R+1,N=z+1;let G=0,B=0;const fe=new Y;for(let he=0;he<N;he++){const ge=he*E-F;for(let Ae=0;Ae<P;Ae++){const ze=Ae*y-I;fe[v]=ze*A,fe[d]=ge*x,fe[f]=H,u.push(fe.x,fe.y,fe.z),fe[v]=0,fe[d]=0,fe[f]=D>0?1:-1,c.push(fe.x,fe.y,fe.z),p.push(Ae/R),p.push(1-he/z),G+=1}}for(let he=0;he<z;he++)for(let ge=0;ge<R;ge++){const Ae=h+ge+P*he,ze=h+ge+P*(he+1),re=h+(ge+1)+P*(he+1),ue=h+(ge+1)+P*he;l.push(Ae,ze,ue),l.push(ze,re,ue),B+=6}a.addGroup(m,B,se),m+=B,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=Ir(n[t]);for(const r in i)e[r]=i[r]}return e}function xv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Mv={clone:Ir,merge:Vt};var Sv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sv,this.fragmentShader=yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=xv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Td extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new Y,tf=new et,nf=new et;class Mn extends Td{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,tf,nf),t.subVectors(nf,tf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(as*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fr=-90,hr=1;class Ev extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(fr,hr,e,t);r.layers=this.layers,this.add(r);const s=new Mn(fr,hr,e,t);s.layers=this.layers,this.add(s);const o=new Mn(fr,hr,e,t);o.layers=this.layers,this.add(o);const a=new Mn(fr,hr,e,t);a.layers=this.layers,this.add(a);const l=new Mn(fr,hr,e,t);l.layers=this.layers,this.add(l);const u=new Mn(fr,hr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Do)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(p,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ad extends Qt{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bv extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ad(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new As(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:gi});s.uniforms.tEquirect.value=t;const o=new fn(r,s),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Sn),new Ev(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const za=new Y,Tv=new Y,Av=new qe;class Ni{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=za.subVectors(i,t).cross(Tv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(za),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Av.getNormalMatrix(e),r=this.coplanarPoint(za).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Zo,Js=new Y;class Fc{constructor(e=new Ni,t=new Ni,i=new Ni,r=new Ni,s=new Ni,o=new Ni){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],p=r[6],h=r[7],m=r[8],_=r[9],v=r[10],d=r[11],f=r[12],A=r[13],x=r[14],T=r[15];if(i[0].setComponents(l-s,h-u,d-m,T-f).normalize(),i[1].setComponents(l+s,h+u,d+m,T+f).normalize(),i[2].setComponents(l+o,h+c,d+_,T+A).normalize(),i[3].setComponents(l-o,h-c,d-_,T-A).normalize(),i[4].setComponents(l-a,h-p,d-v,T-x).normalize(),t===ni)i[5].setComponents(l+a,h+p,d+v,T+x).normalize();else if(t===Do)i[5].setComponents(a,p,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Js.x=r.normal.x>0?e.max.x:e.min.x,Js.y=r.normal.y>0?e.max.y:e.min.y,Js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function wv(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,p=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let m;if(u instanceof Float32Array)m=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=n.SHORT;else if(u instanceof Uint32Array)m=n.UNSIGNED_INT;else if(u instanceof Int32Array)m=n.INT;else if(u instanceof Int8Array)m=n.BYTE;else if(u instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,u){const c=l.array,p=l.updateRanges;if(n.bindBuffer(u,a),p.length===0)n.bufferSubData(u,0,c);else{p.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<p.length;m++){const _=p[h],v=p[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,p[h]=v)}p.length=h+1;for(let m=0,_=p.length;m<_;m++){const v=p[m];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class ws extends pn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,p=e/a,h=t/l,m=[],_=[],v=[],d=[];for(let f=0;f<c;f++){const A=f*h-o;for(let x=0;x<u;x++){const T=x*p-s;_.push(T,-A,0),v.push(0,0,1),d.push(x/a),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<a;A++){const x=A+u*f,T=A+u*(f+1),U=A+1+u*(f+1),D=A+1+u*f;m.push(x,T,D),m.push(T,U,D)}this.setIndex(m),this.setAttribute("position",new an(_,3)),this.setAttribute("normal",new an(v,3)),this.setAttribute("uv",new an(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ov=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,f0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,g0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,M0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,A0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,O0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,px=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ux=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$x=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Cv,alphahash_pars_fragment:Rv,alphamap_fragment:Pv,alphamap_pars_fragment:Lv,alphatest_fragment:Dv,alphatest_pars_fragment:Iv,aomap_fragment:Uv,aomap_pars_fragment:Nv,batching_pars_vertex:Fv,batching_vertex:Ov,begin_vertex:Bv,beginnormal_vertex:zv,bsdfs:kv,iridescence_fragment:Hv,bumpmap_pars_fragment:Vv,clipping_planes_fragment:Gv,clipping_planes_pars_fragment:Wv,clipping_planes_pars_vertex:Xv,clipping_planes_vertex:$v,color_fragment:qv,color_pars_fragment:Yv,color_pars_vertex:jv,color_vertex:Kv,common:Zv,cube_uv_reflection_fragment:Jv,defaultnormal_vertex:Qv,displacementmap_pars_vertex:e0,displacementmap_vertex:t0,emissivemap_fragment:n0,emissivemap_pars_fragment:i0,colorspace_fragment:r0,colorspace_pars_fragment:s0,envmap_fragment:o0,envmap_common_pars_fragment:a0,envmap_pars_fragment:l0,envmap_pars_vertex:c0,envmap_physical_pars_fragment:M0,envmap_vertex:u0,fog_vertex:f0,fog_pars_vertex:h0,fog_fragment:d0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_pars_fragment:g0,lights_lambert_fragment:_0,lights_lambert_pars_fragment:v0,lights_pars_begin:x0,lights_toon_fragment:S0,lights_toon_pars_fragment:y0,lights_phong_fragment:E0,lights_phong_pars_fragment:b0,lights_physical_fragment:T0,lights_physical_pars_fragment:A0,lights_fragment_begin:w0,lights_fragment_maps:C0,lights_fragment_end:R0,logdepthbuf_fragment:P0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:I0,map_fragment:U0,map_pars_fragment:N0,map_particle_fragment:F0,map_particle_pars_fragment:O0,metalnessmap_fragment:B0,metalnessmap_pars_fragment:z0,morphinstance_vertex:k0,morphcolor_vertex:H0,morphnormal_vertex:V0,morphtarget_pars_vertex:G0,morphtarget_vertex:W0,normal_fragment_begin:X0,normal_fragment_maps:$0,normal_pars_fragment:q0,normal_pars_vertex:Y0,normal_vertex:j0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:ex,opaque_fragment:tx,packing:nx,premultiplied_alpha_fragment:ix,project_vertex:rx,dithering_fragment:sx,dithering_pars_fragment:ox,roughnessmap_fragment:ax,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:cx,shadowmap_pars_vertex:ux,shadowmap_vertex:fx,shadowmask_pars_fragment:hx,skinbase_vertex:dx,skinning_pars_vertex:px,skinning_vertex:mx,skinnormal_vertex:gx,specularmap_fragment:_x,specularmap_pars_fragment:vx,tonemapping_fragment:xx,tonemapping_pars_fragment:Mx,transmission_fragment:Sx,transmission_pars_fragment:yx,uv_pars_fragment:Ex,uv_pars_vertex:bx,uv_vertex:Tx,worldpos_vertex:Ax,background_vert:wx,background_frag:Cx,backgroundCube_vert:Rx,backgroundCube_frag:Px,cube_vert:Lx,cube_frag:Dx,depth_vert:Ix,depth_frag:Ux,distanceRGBA_vert:Nx,distanceRGBA_frag:Fx,equirect_vert:Ox,equirect_frag:Bx,linedashed_vert:zx,linedashed_frag:kx,meshbasic_vert:Hx,meshbasic_frag:Vx,meshlambert_vert:Gx,meshlambert_frag:Wx,meshmatcap_vert:Xx,meshmatcap_frag:$x,meshnormal_vert:qx,meshnormal_frag:Yx,meshphong_vert:jx,meshphong_frag:Kx,meshphysical_vert:Zx,meshphysical_frag:Jx,meshtoon_vert:Qx,meshtoon_frag:eM,points_vert:tM,points_frag:nM,shadow_vert:iM,shadow_frag:rM,sprite_vert:sM,sprite_frag:oM},ve={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Dn={basic:{uniforms:Vt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Vt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Vt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Vt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Vt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Vt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Vt([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Vt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Vt([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Vt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Vt([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Vt([ve.common,ve.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Vt([ve.lights,ve.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Dn.physical={uniforms:Vt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Qs={r:0,b:0,g:0},Di=new Hn,aM=new gt;function lM(n,e,t,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,u,c,p=null,h=0,m=null;function _(A){let x=A.isScene===!0?A.background:null;return x&&x.isTexture&&(x=(A.backgroundBlurriness>0?t:e).get(x)),x}function v(A){let x=!1;const T=_(A);T===null?f(a,l):T&&T.isColor&&(f(T,1),x=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(A,x){const T=_(x);T&&(T.isCubeTexture||T.mapping===jo)?(c===void 0&&(c=new fn(new As(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Ir(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(U,D,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Di.copy(x.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(aM.makeRotationFromEuler(Di)),c.material.toneMapped=rt.getTransfer(T.colorSpace)!==ht,(p!==T||h!==T.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,p=T,h=T.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new fn(new ws(2,2),new Si({name:"BackgroundMaterial",uniforms:Ir(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=rt.getTransfer(T.colorSpace)!==ht,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||h!==T.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,p=T,h=T.version,m=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function f(A,x){A.getRGB(Qs,bd(n)),i.buffers.color.setClear(Qs.r,Qs.g,Qs.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(A,x=1){a.set(A),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(a,l)},render:v,addToRenderList:d}}function cM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,E,I,F,H){let P=!1;const N=p(F,I,E);s!==N&&(s=N,u(s.object)),P=m(y,F,I,H),P&&_(y,F,I,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(P||o)&&(o=!1,T(y,E,I,F),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function p(y,E,I){const F=I.wireframe===!0;let H=i[y.id];H===void 0&&(H={},i[y.id]=H);let P=H[E.id];P===void 0&&(P={},H[E.id]=P);let N=P[F];return N===void 0&&(N=h(l()),P[F]=N),N}function h(y){const E=[],I=[],F=[];for(let H=0;H<t;H++)E[H]=0,I[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:I,attributeDivisors:F,object:y,attributes:{},index:null}}function m(y,E,I,F){const H=s.attributes,P=E.attributes;let N=0;const G=I.getAttributes();for(const B in G)if(G[B].location>=0){const he=H[B];let ge=P[B];if(ge===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),he===void 0||he.attribute!==ge||ge&&he.data!==ge.data)return!0;N++}return s.attributesNum!==N||s.index!==F}function _(y,E,I,F){const H={},P=E.attributes;let N=0;const G=I.getAttributes();for(const B in G)if(G[B].location>=0){let he=P[B];he===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(he=y.instanceColor));const ge={};ge.attribute=he,he&&he.data&&(ge.data=he.data),H[B]=ge,N++}s.attributes=H,s.attributesNum=N,s.index=F}function v(){const y=s.newAttributes;for(let E=0,I=y.length;E<I;E++)y[E]=0}function d(y){f(y,0)}function f(y,E){const I=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;I[y]=1,F[y]===0&&(n.enableVertexAttribArray(y),F[y]=1),H[y]!==E&&(n.vertexAttribDivisor(y,E),H[y]=E)}function A(){const y=s.newAttributes,E=s.enabledAttributes;for(let I=0,F=E.length;I<F;I++)E[I]!==y[I]&&(n.disableVertexAttribArray(I),E[I]=0)}function x(y,E,I,F,H,P,N){N===!0?n.vertexAttribIPointer(y,E,I,H,P):n.vertexAttribPointer(y,E,I,F,H,P)}function T(y,E,I,F){v();const H=F.attributes,P=I.getAttributes(),N=E.defaultAttributeValues;for(const G in P){const B=P[G];if(B.location>=0){let fe=H[G];if(fe===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),fe!==void 0){const he=fe.normalized,ge=fe.itemSize,Ae=e.get(fe);if(Ae===void 0)continue;const ze=Ae.buffer,re=Ae.type,ue=Ae.bytesPerElement,Ee=re===n.INT||re===n.UNSIGNED_INT||fe.gpuType===wc;if(fe.isInterleavedBufferAttribute){const Me=fe.data,Oe=Me.stride,De=fe.offset;if(Me.isInstancedInterleavedBuffer){for(let Ye=0;Ye<B.locationSize;Ye++)f(B.location+Ye,Me.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ye=0;Ye<B.locationSize;Ye++)d(B.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let Ye=0;Ye<B.locationSize;Ye++)x(B.location+Ye,ge/B.locationSize,re,he,Oe*ue,(De+ge/B.locationSize*Ye)*ue,Ee)}else{if(fe.isInstancedBufferAttribute){for(let Me=0;Me<B.locationSize;Me++)f(B.location+Me,fe.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Me=0;Me<B.locationSize;Me++)d(B.location+Me);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let Me=0;Me<B.locationSize;Me++)x(B.location+Me,ge/B.locationSize,re,he,ge*ue,ge/B.locationSize*Me*ue,Ee)}}else if(N!==void 0){const he=N[G];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(B.location,he);break;case 3:n.vertexAttrib3fv(B.location,he);break;case 4:n.vertexAttrib4fv(B.location,he);break;default:n.vertexAttrib1fv(B.location,he)}}}}A()}function U(){z();for(const y in i){const E=i[y];for(const I in E){const F=E[I];for(const H in F)c(F[H].object),delete F[H];delete E[I]}delete i[y]}}function D(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const I in E){const F=E[I];for(const H in F)c(F[H].object),delete F[H];delete E[I]}delete i[y.id]}function R(y){for(const E in i){const I=i[E];if(I[y.id]===void 0)continue;const F=I[y.id];for(const H in F)c(F[H].object),delete F[H];delete I[y.id]}}function z(){se(),o=!0,s!==r&&(s=r,u(s.object))}function se(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:se,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:d,disableUnusedAttributes:A}}function uM(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,p){p!==0&&(n.drawArraysInstanced(i,u,c,p),t.update(c,i,p))}function a(u,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,p);let m=0;for(let _=0;_<p;_++)m+=c[_];t.update(m,i,1)}function l(u,c,p,h){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)o(u[_],c[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,p);let _=0;for(let v=0;v<p;v++)_+=c[v];for(let v=0;v<h.length;v++)t.update(_,i,h[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==En&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const z=R===Es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ii&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ti&&!z)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const p=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:A,maxVaryings:x,maxFragmentUniforms:T,vertexTextures:U,maxSamples:D}}function hM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ni,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||r;return r=h,i=p.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){t=c(p,h,0)},this.setState=function(p,h,m){const _=p.clippingPlanes,v=p.clipIntersection,d=p.clipShadows,f=n.get(p);if(!r||_===null||_.length===0||s&&!d)s?c(null):u();else{const A=s?0:i,x=A*4;let T=f.clippingState||null;l.value=T,T=c(_,h,x,m);for(let U=0;U!==x;++U)T[U]=t[U];f.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(p,h,m,_){const v=p!==null?p.length:0;let d=null;if(v!==0){if(d=l.value,_!==!0||d===null){const f=m+v*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(d===null||d.length<f)&&(d=new Float32Array(f));for(let x=0,T=m;x!==v;++x,T+=4)o.copy(p[x]).applyMatrix4(A,a),o.normal.toArray(d,T),d[T+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,d}}function dM(n){let e=new WeakMap;function t(o,a){return a===Al?o.mapping=Rr:a===wl&&(o.mapping=Pr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Al||a===wl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new bv(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Oc extends Td{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vr=4,rf=[.125,.215,.35,.446,.526,.582],zi=20,ka=new Oc,sf=new Ke;let Ha=null,Va=0,Ga=0,Wa=!1;const Fi=(1+Math.sqrt(5))/2,dr=1/Fi,of=[new Y(-Fi,dr,0),new Y(Fi,dr,0),new Y(-dr,0,Fi),new Y(dr,0,Fi),new Y(0,Fi,-dr),new Y(0,Fi,dr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ha,Va,Ga),this._renderer.xr.enabled=Wa,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Es,format:En,colorSpace:Ei,depthBuffer:!1},r=lf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pM(s)),this._blurMaterial=mM(s,e,t)}return r}_compileMaterial(e){const t=new fn(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,i,r){const a=new Mn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,p=c.autoClear,h=c.toneMapping;c.getClearColor(sf),c.toneMapping=_i,c.autoClear=!1;const m=new Nc({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),_=new fn(new As,m);let v=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,v=!0):(m.color.copy(sf),v=!0);for(let f=0;f<6;f++){const A=f%3;A===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):A===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const x=this._cubeSize;eo(r,A*x,f>2?x:0,x,x),c.setRenderTarget(r),v&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=p,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Rr||e.mapping===Pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;eo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ka)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=of[(r-s-1)%of.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,p=new fn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*zi-1),v=s/_,d=isFinite(s)?1+Math.floor(c*v):zi;d>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${zi}`);const f=[];let A=0;for(let R=0;R<zi;++R){const z=R/v,se=Math.exp(-z*z/2);f.push(se),R===0?A+=se:R<d&&(A+=2*se)}for(let R=0;R<f.length;R++)f[R]=f[R]/A;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const T=this._sizeLods[r],U=3*T*(r>x-vr?r-x+vr:0),D=4*(this._cubeSize-T);eo(t,U,D,3*T,2*T),l.setRenderTarget(t),l.render(p,ka)}}function pM(n){const e=[],t=[],i=[];let r=n;const s=n-vr+1+rf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-vr?l=rf[o-n+vr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,p=1+u,h=[c,c,p,c,p,p,c,c,p,p,c,p],m=6,_=6,v=3,d=2,f=1,A=new Float32Array(v*_*m),x=new Float32Array(d*_*m),T=new Float32Array(f*_*m);for(let D=0;D<m;D++){const R=D%3*2/3-1,z=D>2?0:-1,se=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];A.set(se,v*_*D),x.set(h,d*_*D);const y=[D,D,D,D,D,D];T.set(y,f*_*D)}const U=new pn;U.setAttribute("position",new Fn(A,v)),U.setAttribute("uv",new Fn(x,d)),U.setAttribute("faceIndex",new Fn(T,f)),e.push(U),r>vr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lf(n,e,t){const i=new Mi(n,e,t);return i.texture.mapping=jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function eo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function mM(n,e,t){const i=new Float32Array(zi),r=new Y(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function cf(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function uf(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Al||l===wl,c=l===Rr||l===Pr;if(u||c){let p=e.get(a);const h=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new af(n)),p=u?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const m=a.image;return u&&m&&m.height>0||c&&m&&r(m)?(t===null&&(t=new af(n)),p=u?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function _M(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vM(n,e,t,i){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let d=0,f=v.length;d<f;d++)e.remove(v[d])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const _ in m){const v=m[_];for(let d=0,f=v.length;d<f;d++)e.update(v[d],n.ARRAY_BUFFER)}}function u(p){const h=[],m=p.index,_=p.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let x=0,T=A.length;x<T;x+=3){const U=A[x+0],D=A[x+1],R=A[x+2];h.push(U,D,D,R,R,U)}}else if(_!==void 0){const A=_.array;v=_.version;for(let x=0,T=A.length/3-1;x<T;x+=3){const U=x+0,D=x+1,R=x+2;h.push(U,D,D,R,R,U)}}else return;const d=new(gd(h)?Ed:yd)(h,1);d.version=v;const f=s.get(p);f&&e.remove(f),s.set(p,d)}function c(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:c}}function xM(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*o),t.update(m,i,1)}function u(h,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,h*o,_),t.update(m,i,_))}function c(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,_);let d=0;for(let f=0;f<_;f++)d+=m[f];t.update(d,i,1)}function p(h,m,_,v){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h.length;f++)u(h[f]/o,m[f],v[f]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,v,0,_);let f=0;for(let A=0;A<_;A++)f+=m[A];for(let A=0;A<v.length;A++)t.update(f,i,v[A])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=p}function MM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function SM(n,e,t){const i=new WeakMap,r=new xt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==p){let y=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let T=0;_===!0&&(T=1),v===!0&&(T=2),d===!0&&(T=3);let U=a.attributes.position.count*T,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const R=new Float32Array(U*D*4*p),z=new vd(R,U,D,p);z.type=ti,z.needsUpdate=!0;const se=T*4;for(let E=0;E<p;E++){const I=f[E],F=A[E],H=x[E],P=U*D*4*E;for(let N=0;N<I.count;N++){const G=N*se;_===!0&&(r.fromBufferAttribute(I,N),R[P+G+0]=r.x,R[P+G+1]=r.y,R[P+G+2]=r.z,R[P+G+3]=0),v===!0&&(r.fromBufferAttribute(F,N),R[P+G+4]=r.x,R[P+G+5]=r.y,R[P+G+6]=r.z,R[P+G+7]=0),d===!0&&(r.fromBufferAttribute(H,N),R[P+G+8]=r.x,R[P+G+9]=r.y,R[P+G+10]=r.z,R[P+G+11]=H.itemSize===4?r.w:1)}}h={count:p,texture:z,size:new et(U,D)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let d=0;d<u.length;d++)_+=u[d];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function yM(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,p=e.get(l,c);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return p}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Cd extends Qt{constructor(e,t,i,r,s,o,a,l,u,c=Er){if(c!==Er&&c!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Er&&(i=qi),i===void 0&&c===Dr&&(i=Lr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rd=new Qt,ff=new Cd(1,1),Pd=new vd,Ld=new lv,Dd=new Ad,hf=[],df=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function zr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=hf[r];if(s===void 0&&(s=new Float32Array(r),hf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Jo(n,e){let t=df[e];t===void 0&&(t=new Int32Array(e),df[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function EM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function wM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;gf.set(i),n.uniformMatrix2fv(this.addr,!1,gf),wt(t,i)}}function CM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;mf.set(i),n.uniformMatrix3fv(this.addr,!1,mf),wt(t,i)}}function RM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;pf.set(i),n.uniformMatrix4fv(this.addr,!1,pf),wt(t,i)}}function PM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function IM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function UM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function FM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function OM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function BM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ff.compareFunction=md,s=ff):s=Rd,t.setTexture2D(e||s,r)}function zM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ld,r)}function kM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Dd,r)}function HM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Pd,r)}function VM(n){switch(n){case 5126:return EM;case 35664:return bM;case 35665:return TM;case 35666:return AM;case 35674:return wM;case 35675:return CM;case 35676:return RM;case 5124:case 35670:return PM;case 35667:case 35671:return LM;case 35668:case 35672:return DM;case 35669:case 35673:return IM;case 5125:return UM;case 36294:return NM;case 36295:return FM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return HM}}function GM(n,e){n.uniform1fv(this.addr,e)}function WM(n,e){const t=zr(e,this.size,2);n.uniform2fv(this.addr,t)}function XM(n,e){const t=zr(e,this.size,3);n.uniform3fv(this.addr,t)}function $M(n,e){const t=zr(e,this.size,4);n.uniform4fv(this.addr,t)}function qM(n,e){const t=zr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function YM(n,e){const t=zr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jM(n,e){const t=zr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KM(n,e){n.uniform1iv(this.addr,e)}function ZM(n,e){n.uniform2iv(this.addr,e)}function JM(n,e){n.uniform3iv(this.addr,e)}function QM(n,e){n.uniform4iv(this.addr,e)}function eS(n,e){n.uniform1uiv(this.addr,e)}function tS(n,e){n.uniform2uiv(this.addr,e)}function nS(n,e){n.uniform3uiv(this.addr,e)}function iS(n,e){n.uniform4uiv(this.addr,e)}function rS(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Rd,s[o])}function sS(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ld,s[o])}function oS(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Dd,s[o])}function aS(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Pd,s[o])}function lS(n){switch(n){case 5126:return GM;case 35664:return WM;case 35665:return XM;case 35666:return $M;case 35674:return qM;case 35675:return YM;case 35676:return jM;case 5124:case 35670:return KM;case 35667:case 35671:return ZM;case 35668:case 35672:return JM;case 35669:case 35673:return QM;case 5125:return eS;case 36294:return tS;case 36295:return nS;case 36296:return iS;case 35678:case 36198:case 36298:case 36306:case 35682:return rS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return oS;case 36289:case 36303:case 36311:case 36292:return aS}}class cS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=VM(t.type)}}class uS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lS(t.type)}}class fS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function _f(n,e){n.seq.push(e),n.map[e.id]=e}function hS(n,e,t){const i=n.name,r=i.length;for(Xa.lastIndex=0;;){const s=Xa.exec(i),o=Xa.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){_f(t,u===void 0?new cS(a,n,e):new uS(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new fS(a),_f(t,p)),t=p}}}class xo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);hS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function vf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dS=37297;let pS=0;function mS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function gS(n){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(n);let i;switch(e===t?i="":e===Lo&&t===Po?i="LinearDisplayP3ToLinearSRGB":e===Po&&t===Lo&&(i="LinearSRGBToLinearDisplayP3"),n){case Ei:case Ko:return[i,"LinearTransferOETF"];case Cn:case Ic:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function xf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+mS(n.getShaderSource(e),o)}else return r}function _S(n,e){const t=gS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vS(n,e){let t;switch(e){case x_:t="Linear";break;case M_:t="Reinhard";break;case S_:t="Cineon";break;case y_:t="ACESFilmic";break;case b_:t="AgX";break;case T_:t="Neutral";break;case E_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const to=new Y;function xS(){rt.getLuminanceCoefficients(to);const n=to.x.toFixed(4),e=to.y.toFixed(4),t=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function SS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Jr(n){return n!==""}function Mf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ES=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(n){return n.replace(ES,TS)}const bS=new Map;function TS(n,e){let t=$e[e];if(t===void 0){const i=bS.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nc(t)}const AS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(n){return n.replace(AS,wS)}function wS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ef(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function RS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rr:case Pr:e="ENVMAP_TYPE_CUBE";break;case jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pr:e="ENVMAP_MODE_REFRACTION";break}return e}function LS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ac:e="ENVMAP_BLENDING_MULTIPLY";break;case __:e="ENVMAP_BLENDING_MIX";break;case v_:e="ENVMAP_BLENDING_ADD";break}return e}function DS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function IS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=CS(t),u=RS(t),c=PS(t),p=LS(t),h=DS(t),m=MS(t),_=SS(s),v=r.createProgram();let d,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Jr).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Jr).join(`
`),f.length>0&&(f+=`
`)):(d=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),f=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?$e.tonemapping_pars_fragment:"",t.toneMapping!==_i?vS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,_S("linearToOutputTexel",t.outputColorSpace),xS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),o=nc(o),o=Mf(o,t),o=Sf(o,t),a=nc(a),a=Mf(a,t),a=Sf(a,t),o=yf(o),a=yf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=A+d+o,T=A+f+a,U=vf(r,r.VERTEX_SHADER,x),D=vf(r,r.FRAGMENT_SHADER,T);r.attachShader(v,U),r.attachShader(v,D),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(E){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(v).trim(),F=r.getShaderInfoLog(U).trim(),H=r.getShaderInfoLog(D).trim();let P=!0,N=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(P=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,U,D);else{const G=xf(r,U,"vertex"),B=xf(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+G+`
`+B)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||H==="")&&(N=!1);N&&(E.diagnostics={runnable:P,programLog:I,vertexShader:{log:F,prefix:d},fragmentShader:{log:H,prefix:f}})}r.deleteShader(U),r.deleteShader(D),z=new xo(r,v),se=yS(r,v)}let z;this.getUniforms=function(){return z===void 0&&R(this),z};let se;this.getAttributes=function(){return se===void 0&&R(this),se};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,dS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=D,this}let US=0;class NS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new FS(e),t.set(e,i)),i}}class FS{constructor(e){this.id=US++,this.code=e,this.usedTimes=0}}function OS(n,e,t,i,r,s,o){const a=new Md,l=new NS,u=new Set,c=[],p=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,m=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return u.add(y),y===0?"uv":`uv${y}`}function f(y,E,I,F,H){const P=F.fog,N=H.geometry,G=y.isMeshStandardMaterial?F.environment:null,B=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),fe=B&&B.mapping===jo?B.image.height:null,he=v[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const ge=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ae=ge!==void 0?ge.length:0;let ze=0;N.morphAttributes.position!==void 0&&(ze=1),N.morphAttributes.normal!==void 0&&(ze=2),N.morphAttributes.color!==void 0&&(ze=3);let re,ue,Ee,Me;if(he){const Yt=Dn[he];re=Yt.vertexShader,ue=Yt.fragmentShader}else re=y.vertexShader,ue=y.fragmentShader,l.update(y),Ee=l.getVertexShaderID(y),Me=l.getFragmentShaderID(y);const Oe=n.getRenderTarget(),De=H.isInstancedMesh===!0,Ye=H.isBatchedMesh===!0,b=!!y.map,C=!!y.matcap,M=!!B,q=!!y.aoMap,W=!!y.lightMap,$=!!y.bumpMap,J=!!y.normalMap,ie=!!y.displacementMap,K=!!y.emissiveMap,S=!!y.metalnessMap,g=!!y.roughnessMap,L=y.anisotropy>0,X=y.clearcoat>0,ee=y.dispersion>0,Z=y.iridescence>0,de=y.sheen>0,ae=y.transmission>0,pe=L&&!!y.anisotropyMap,Ue=X&&!!y.clearcoatMap,ce=X&&!!y.clearcoatNormalMap,xe=X&&!!y.clearcoatRoughnessMap,Ie=Z&&!!y.iridescenceMap,Fe=Z&&!!y.iridescenceThicknessMap,_e=de&&!!y.sheenColorMap,He=de&&!!y.sheenRoughnessMap,Ve=!!y.specularMap,st=!!y.specularColorMap,O=!!y.specularIntensityMap,be=ae&&!!y.transmissionMap,ne=ae&&!!y.thicknessMap,oe=!!y.gradientMap,Se=!!y.alphaMap,Te=y.alphaTest>0,Ze=!!y.alphaHash,St=!!y.extensions;let qt=_i;y.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(qt=n.toneMapping);const Je={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:re,fragmentShader:ue,defines:y.defines,customVertexShaderID:Ee,customFragmentShaderID:Me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Ye,batchingColor:Ye&&H._colorsTexture!==null,instancing:De,instancingColor:De&&H.instanceColor!==null,instancingMorph:De&&H.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Oe===null?n.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Ei,alphaToCoverage:!!y.alphaToCoverage,map:b,matcap:C,envMap:M,envMapMode:M&&B.mapping,envMapCubeUVHeight:fe,aoMap:q,lightMap:W,bumpMap:$,normalMap:J,displacementMap:m&&ie,emissiveMap:K,normalMapObjectSpace:J&&y.normalMapType===R_,normalMapTangentSpace:J&&y.normalMapType===pd,metalnessMap:S,roughnessMap:g,anisotropy:L,anisotropyMap:pe,clearcoat:X,clearcoatMap:Ue,clearcoatNormalMap:ce,clearcoatRoughnessMap:xe,dispersion:ee,iridescence:Z,iridescenceMap:Ie,iridescenceThicknessMap:Fe,sheen:de,sheenColorMap:_e,sheenRoughnessMap:He,specularMap:Ve,specularColorMap:st,specularIntensityMap:O,transmission:ae,transmissionMap:be,thicknessMap:ne,gradientMap:oe,opaque:y.transparent===!1&&y.blending===yr&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:Te,alphaHash:Ze,combine:y.combine,mapUv:b&&d(y.map.channel),aoMapUv:q&&d(y.aoMap.channel),lightMapUv:W&&d(y.lightMap.channel),bumpMapUv:$&&d(y.bumpMap.channel),normalMapUv:J&&d(y.normalMap.channel),displacementMapUv:ie&&d(y.displacementMap.channel),emissiveMapUv:K&&d(y.emissiveMap.channel),metalnessMapUv:S&&d(y.metalnessMap.channel),roughnessMapUv:g&&d(y.roughnessMap.channel),anisotropyMapUv:pe&&d(y.anisotropyMap.channel),clearcoatMapUv:Ue&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&d(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:He&&d(y.sheenRoughnessMap.channel),specularMapUv:Ve&&d(y.specularMap.channel),specularColorMapUv:st&&d(y.specularColorMap.channel),specularIntensityMapUv:O&&d(y.specularIntensityMap.channel),transmissionMapUv:be&&d(y.transmissionMap.channel),thicknessMapUv:ne&&d(y.thicknessMap.channel),alphaMapUv:Se&&d(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(J||L),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!N.attributes.uv&&(b||Se),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:qt,decodeVideoTexture:b&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ei,flipSided:y.side===Jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:St&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&y.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Je.vertexUv1s=u.has(1),Je.vertexUv2s=u.has(2),Je.vertexUv3s=u.has(3),u.clear(),Je}function A(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(x(E,y),T(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function T(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function U(y){const E=v[y.type];let I;if(E){const F=Dn[E];I=Mv.clone(F.uniforms)}else I=y.uniforms;return I}function D(y,E){let I;for(let F=0,H=c.length;F<H;F++){const P=c[F];if(P.cacheKey===E){I=P,++I.usedTimes;break}}return I===void 0&&(I=new IS(n,E,y,s),c.push(I)),I}function R(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function z(y){l.remove(y)}function se(){l.dispose()}return{getParameters:f,getProgramCacheKey:A,getUniforms:U,acquireProgram:D,releaseProgram:R,releaseShaderCache:z,programs:c,dispose:se}}function BS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function zS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Tf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(p,h,m,_,v,d){let f=n[e];return f===void 0?(f={id:p.id,object:p,geometry:h,material:m,groupOrder:_,renderOrder:p.renderOrder,z:v,group:d},n[e]=f):(f.id=p.id,f.object=p,f.geometry=h,f.material=m,f.groupOrder=_,f.renderOrder=p.renderOrder,f.z=v,f.group=d),e++,f}function a(p,h,m,_,v,d){const f=o(p,h,m,_,v,d);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(p,h,m,_,v,d){const f=o(p,h,m,_,v,d);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function u(p,h){t.length>1&&t.sort(p||zS),i.length>1&&i.sort(h||bf),r.length>1&&r.sort(h||bf)}function c(){for(let p=e,h=n.length;p<h;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function kS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Tf,n.set(i,[o])):r>=s.length?(o=new Tf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function HS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Ke};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function VS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let GS=0;function WS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XS(n){const e=new HS,t=VS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,s=new gt,o=new gt;function a(u){let c=0,p=0,h=0;for(let se=0;se<9;se++)i.probe[se].set(0,0,0);let m=0,_=0,v=0,d=0,f=0,A=0,x=0,T=0,U=0,D=0,R=0;u.sort(WS);for(let se=0,y=u.length;se<y;se++){const E=u[se],I=E.color,F=E.intensity,H=E.distance,P=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)c+=I.r*F,p+=I.g*F,h+=I.b*F;else if(E.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(E.sh.coefficients[N],F);R++}else if(E.isDirectionalLight){const N=e.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const G=E.shadow,B=t.get(E);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=P,i.directionalShadowMatrix[m]=E.shadow.matrix,A++}i.directional[m]=N,m++}else if(E.isSpotLight){const N=e.get(E);N.position.setFromMatrixPosition(E.matrixWorld),N.color.copy(I).multiplyScalar(F),N.distance=H,N.coneCos=Math.cos(E.angle),N.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),N.decay=E.decay,i.spot[v]=N;const G=E.shadow;if(E.map&&(i.spotLightMap[U]=E.map,U++,G.updateMatrices(E),E.castShadow&&D++),i.spotLightMatrix[v]=G.matrix,E.castShadow){const B=t.get(E);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.spotShadow[v]=B,i.spotShadowMap[v]=P,T++}v++}else if(E.isRectAreaLight){const N=e.get(E);N.color.copy(I).multiplyScalar(F),N.halfWidth.set(E.width*.5,0,0),N.halfHeight.set(0,E.height*.5,0),i.rectArea[d]=N,d++}else if(E.isPointLight){const N=e.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),N.distance=E.distance,N.decay=E.decay,E.castShadow){const G=E.shadow,B=t.get(E);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=P,i.pointShadowMatrix[_]=E.shadow.matrix,x++}i.point[_]=N,_++}else if(E.isHemisphereLight){const N=e.get(E);N.skyColor.copy(E.color).multiplyScalar(F),N.groundColor.copy(E.groundColor).multiplyScalar(F),i.hemi[f]=N,f++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=p,i.ambient[2]=h;const z=i.hash;(z.directionalLength!==m||z.pointLength!==_||z.spotLength!==v||z.rectAreaLength!==d||z.hemiLength!==f||z.numDirectionalShadows!==A||z.numPointShadows!==x||z.numSpotShadows!==T||z.numSpotMaps!==U||z.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=d,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=T+U-D,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,z.directionalLength=m,z.pointLength=_,z.spotLength=v,z.rectAreaLength=d,z.hemiLength=f,z.numDirectionalShadows=A,z.numPointShadows=x,z.numSpotShadows=T,z.numSpotMaps=U,z.numLightProbes=R,i.version=GS++)}function l(u,c){let p=0,h=0,m=0,_=0,v=0;const d=c.matrixWorldInverse;for(let f=0,A=u.length;f<A;f++){const x=u[f];if(x.isDirectionalLight){const T=i.directional[p];T.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),p++}else if(x.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),m++}else if(x.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),o.identity(),s.copy(x.matrixWorld),s.premultiply(d),o.extractRotation(s),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),h++}else if(x.isHemisphereLight){const T=i.hemi[v];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(d),v++}}}return{setup:a,setupView:l,state:i}}function Af(n){const e=new XS(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function $S(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Af(n),e.set(r,[a])):s>=o.length?(a=new Af(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class qS extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YS extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ZS(n,e,t){let i=new Fc;const r=new et,s=new et,o=new xt,a=new qS({depthPacking:C_}),l=new YS,u={},c=t.maxTextureSize,p={[xi]:Jt,[Jt]:xi,[ei]:ei},h=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:jS,fragmentShader:KS}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new fn(_,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let f=this.type;this.render=function(D,R,z){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||D.length===0)return;const se=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),I=n.state;I.setBlending(gi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=f!==jn&&this.type===jn,H=f===jn&&this.type!==jn;for(let P=0,N=D.length;P<N;P++){const G=D[P],B=G.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const fe=B.getFrameExtents();if(r.multiply(fe),s.copy(B.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/fe.x),r.x=s.x*fe.x,B.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/fe.y),r.y=s.y*fe.y,B.mapSize.y=s.y)),B.map===null||F===!0||H===!0){const ge=this.type!==jn?{minFilter:un,magFilter:un}:{};B.map!==null&&B.map.dispose(),B.map=new Mi(r.x,r.y,ge),B.map.texture.name=G.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const he=B.getViewportCount();for(let ge=0;ge<he;ge++){const Ae=B.getViewport(ge);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),I.viewport(o),B.updateMatrices(G,ge),i=B.getFrustum(),T(R,z,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===jn&&A(B,z),B.needsUpdate=!1}f=this.type,d.needsUpdate=!1,n.setRenderTarget(se,y,E)};function A(D,R){const z=e.update(v);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Mi(r.x,r.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(R,null,z,h,v,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(R,null,z,m,v,null)}function x(D,R,z,se){let y=null;const E=z.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(E!==void 0)y=E;else if(y=z.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const I=y.uuid,F=R.uuid;let H=u[I];H===void 0&&(H={},u[I]=H);let P=H[F];P===void 0&&(P=y.clone(),H[F]=P,R.addEventListener("dispose",U)),y=P}if(y.visible=R.visible,y.wireframe=R.wireframe,se===jn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:p[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,z.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=n.properties.get(y);I.light=z}return y}function T(D,R,z,se,y){if(D.visible===!1)return;if(D.layers.test(R.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===jn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,D.matrixWorld);const F=e.update(D),H=D.material;if(Array.isArray(H)){const P=F.groups;for(let N=0,G=P.length;N<G;N++){const B=P[N],fe=H[B.materialIndex];if(fe&&fe.visible){const he=x(D,fe,se,y);D.onBeforeShadow(n,D,R,z,F,he,B),n.renderBufferDirect(z,null,F,he,D,B),D.onAfterShadow(n,D,R,z,F,he,B)}}}else if(H.visible){const P=x(D,H,se,y);D.onBeforeShadow(n,D,R,z,F,P,null),n.renderBufferDirect(z,null,F,P,D,null),D.onAfterShadow(n,D,R,z,F,P,null)}}const I=D.children;for(let F=0,H=I.length;F<H;F++)T(I[F],R,z,se,y)}function U(D){D.target.removeEventListener("dispose",U);for(const z in u){const se=u[z],y=D.target.uuid;y in se&&(se[y].dispose(),delete se[y])}}}const JS={[xl]:Ml,[Sl]:bl,[yl]:Tl,[Cr]:El,[Ml]:xl,[bl]:Sl,[Tl]:yl,[El]:Cr};function QS(n){function e(){let O=!1;const be=new xt;let ne=null;const oe=new xt(0,0,0,0);return{setMask:function(Se){ne!==Se&&!O&&(n.colorMask(Se,Se,Se,Se),ne=Se)},setLocked:function(Se){O=Se},setClear:function(Se,Te,Ze,St,qt){qt===!0&&(Se*=St,Te*=St,Ze*=St),be.set(Se,Te,Ze,St),oe.equals(be)===!1&&(n.clearColor(Se,Te,Ze,St),oe.copy(be))},reset:function(){O=!1,ne=null,oe.set(-1,0,0,0)}}}function t(){let O=!1,be=!1,ne=null,oe=null,Se=null;return{setReversed:function(Te){be=Te},setTest:function(Te){Te?Ee(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(Te){ne!==Te&&!O&&(n.depthMask(Te),ne=Te)},setFunc:function(Te){if(be&&(Te=JS[Te]),oe!==Te){switch(Te){case xl:n.depthFunc(n.NEVER);break;case Ml:n.depthFunc(n.ALWAYS);break;case Sl:n.depthFunc(n.LESS);break;case Cr:n.depthFunc(n.LEQUAL);break;case yl:n.depthFunc(n.EQUAL);break;case El:n.depthFunc(n.GEQUAL);break;case bl:n.depthFunc(n.GREATER);break;case Tl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Te}},setLocked:function(Te){O=Te},setClear:function(Te){Se!==Te&&(n.clearDepth(Te),Se=Te)},reset:function(){O=!1,ne=null,oe=null,Se=null}}}function i(){let O=!1,be=null,ne=null,oe=null,Se=null,Te=null,Ze=null,St=null,qt=null;return{setTest:function(Je){O||(Je?Ee(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(Je){be!==Je&&!O&&(n.stencilMask(Je),be=Je)},setFunc:function(Je,Yt,Vn){(ne!==Je||oe!==Yt||Se!==Vn)&&(n.stencilFunc(Je,Yt,Vn),ne=Je,oe=Yt,Se=Vn)},setOp:function(Je,Yt,Vn){(Te!==Je||Ze!==Yt||St!==Vn)&&(n.stencilOp(Je,Yt,Vn),Te=Je,Ze=Yt,St=Vn)},setLocked:function(Je){O=Je},setClear:function(Je){qt!==Je&&(n.clearStencil(Je),qt=Je)},reset:function(){O=!1,be=null,ne=null,oe=null,Se=null,Te=null,Ze=null,St=null,qt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},p=new WeakMap,h=[],m=null,_=!1,v=null,d=null,f=null,A=null,x=null,T=null,U=null,D=new Ke(0,0,0),R=0,z=!1,se=null,y=null,E=null,I=null,F=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,N=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(G)[1]),P=N>=1):G.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),P=N>=2);let B=null,fe={};const he=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Ae=new xt().fromArray(he),ze=new xt().fromArray(ge);function re(O,be,ne,oe){const Se=new Uint8Array(4),Te=n.createTexture();n.bindTexture(O,Te),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<ne;Ze++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(be+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Te}const ue={};ue[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ee(n.DEPTH_TEST),s.setFunc(Cr),W(!1),$(Du),Ee(n.CULL_FACE),M(gi);function Ee(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Me(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Oe(O,be){return c[O]!==be?(n.bindFramebuffer(O,be),c[O]=be,O===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=be),O===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=be),!0):!1}function De(O,be){let ne=h,oe=!1;if(O){ne=p.get(be),ne===void 0&&(ne=[],p.set(be,ne));const Se=O.textures;if(ne.length!==Se.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Ze=Se.length;Te<Ze;Te++)ne[Te]=n.COLOR_ATTACHMENT0+Te;ne.length=Se.length,oe=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,oe=!0);oe&&n.drawBuffers(ne)}function Ye(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const b={[Bi]:n.FUNC_ADD,[e_]:n.FUNC_SUBTRACT,[t_]:n.FUNC_REVERSE_SUBTRACT};b[n_]=n.MIN,b[i_]=n.MAX;const C={[r_]:n.ZERO,[s_]:n.ONE,[o_]:n.SRC_COLOR,[_l]:n.SRC_ALPHA,[h_]:n.SRC_ALPHA_SATURATE,[u_]:n.DST_COLOR,[l_]:n.DST_ALPHA,[a_]:n.ONE_MINUS_SRC_COLOR,[vl]:n.ONE_MINUS_SRC_ALPHA,[f_]:n.ONE_MINUS_DST_COLOR,[c_]:n.ONE_MINUS_DST_ALPHA,[d_]:n.CONSTANT_COLOR,[p_]:n.ONE_MINUS_CONSTANT_COLOR,[m_]:n.CONSTANT_ALPHA,[g_]:n.ONE_MINUS_CONSTANT_ALPHA};function M(O,be,ne,oe,Se,Te,Ze,St,qt,Je){if(O===gi){_===!0&&(Me(n.BLEND),_=!1);return}if(_===!1&&(Ee(n.BLEND),_=!0),O!==Qg){if(O!==v||Je!==z){if((d!==Bi||x!==Bi)&&(n.blendEquation(n.FUNC_ADD),d=Bi,x=Bi),Je)switch(O){case yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Iu:n.blendFunc(n.ONE,n.ONE);break;case Uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Iu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}f=null,A=null,T=null,U=null,D.set(0,0,0),R=0,v=O,z=Je}return}Se=Se||be,Te=Te||ne,Ze=Ze||oe,(be!==d||Se!==x)&&(n.blendEquationSeparate(b[be],b[Se]),d=be,x=Se),(ne!==f||oe!==A||Te!==T||Ze!==U)&&(n.blendFuncSeparate(C[ne],C[oe],C[Te],C[Ze]),f=ne,A=oe,T=Te,U=Ze),(St.equals(D)===!1||qt!==R)&&(n.blendColor(St.r,St.g,St.b,qt),D.copy(St),R=qt),v=O,z=!1}function q(O,be){O.side===ei?Me(n.CULL_FACE):Ee(n.CULL_FACE);let ne=O.side===Jt;be&&(ne=!ne),W(ne),O.blending===yr&&O.transparent===!1?M(gi):M(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const oe=O.stencilWrite;o.setTest(oe),oe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ie(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ee(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function W(O){se!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),se=O)}function $(O){O!==Kg?(Ee(n.CULL_FACE),O!==y&&(O===Du?n.cullFace(n.BACK):O===Zg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),y=O}function J(O){O!==E&&(P&&n.lineWidth(O),E=O)}function ie(O,be,ne){O?(Ee(n.POLYGON_OFFSET_FILL),(I!==be||F!==ne)&&(n.polygonOffset(be,ne),I=be,F=ne)):Me(n.POLYGON_OFFSET_FILL)}function K(O){O?Ee(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function S(O){O===void 0&&(O=n.TEXTURE0+H-1),B!==O&&(n.activeTexture(O),B=O)}function g(O,be,ne){ne===void 0&&(B===null?ne=n.TEXTURE0+H-1:ne=B);let oe=fe[ne];oe===void 0&&(oe={type:void 0,texture:void 0},fe[ne]=oe),(oe.type!==O||oe.texture!==be)&&(B!==ne&&(n.activeTexture(ne),B=ne),n.bindTexture(O,be||ue[O]),oe.type=O,oe.texture=be)}function L(){const O=fe[B];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(O){Ae.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ae.copy(O))}function _e(O){ze.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ze.copy(O))}function He(O,be){let ne=l.get(be);ne===void 0&&(ne=new WeakMap,l.set(be,ne));let oe=ne.get(O);oe===void 0&&(oe=n.getUniformBlockIndex(be,O.name),ne.set(O,oe))}function Ve(O,be){const oe=l.get(be).get(O);a.get(be)!==oe&&(n.uniformBlockBinding(be,oe,O.__bindingPointIndex),a.set(be,oe))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},B=null,fe={},c={},p=new WeakMap,h=[],m=null,_=!1,v=null,d=null,f=null,A=null,x=null,T=null,U=null,D=new Ke(0,0,0),R=0,z=!1,se=null,y=null,E=null,I=null,F=null,Ae.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Ee,disable:Me,bindFramebuffer:Oe,drawBuffers:De,useProgram:Ye,setBlending:M,setMaterial:q,setFlipSided:W,setCullFace:$,setLineWidth:J,setPolygonOffset:ie,setScissorTest:K,activeTexture:S,bindTexture:g,unbindTexture:L,compressedTexImage2D:X,compressedTexImage3D:ee,texImage2D:xe,texImage3D:Ie,updateUBOMapping:He,uniformBlockBinding:Ve,texStorage2D:Ue,texStorage3D:ce,texSubImage2D:Z,texSubImage3D:de,compressedTexSubImage2D:ae,compressedTexSubImage3D:pe,scissor:Fe,viewport:_e,reset:st}}function wf(n,e,t,i){const r=ey(i);switch(t){case ad:return n*e;case cd:return n*e;case ud:return n*e*2;case fd:return n*e/r.components*r.byteLength;case Pc:return n*e/r.components*r.byteLength;case hd:return n*e*2/r.components*r.byteLength;case Lc:return n*e*2/r.components*r.byteLength;case ld:return n*e*3/r.components*r.byteLength;case En:return n*e*4/r.components*r.byteLength;case Dc:return n*e*4/r.components*r.byteLength;case ho:case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mo:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:case Il:return Math.max(n,16)*Math.max(e,8)/4;case Pl:case Dl:return Math.max(n,8)*Math.max(e,8)/2;case Ul:case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case _o:case Zl:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dd:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ec:case tc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ey(n){switch(n){case ii:case rd:return{byteLength:1,components:1};case _s:case sd:case Es:return{byteLength:2,components:1};case Cc:case Rc:return{byteLength:2,components:4};case qi:case wc:case ti:return{byteLength:4,components:1};case od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ty(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,c=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,g){return m?new OffscreenCanvas(S,g):Io("canvas")}function v(S,g,L){let X=1;const ee=K(S);if((ee.width>L||ee.height>L)&&(X=L/Math.max(ee.width,ee.height)),X<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const Z=Math.floor(X*ee.width),de=Math.floor(X*ee.height);p===void 0&&(p=_(Z,de));const ae=g?_(Z,de):p;return ae.width=Z,ae.height=de,ae.getContext("2d").drawImage(S,0,0,Z,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+de+")."),ae}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),S;return S}function d(S){return S.generateMipmaps&&S.minFilter!==un&&S.minFilter!==Sn}function f(S){n.generateMipmap(S)}function A(S,g,L,X,ee=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Z=g;if(g===n.RED&&(L===n.FLOAT&&(Z=n.R32F),L===n.HALF_FLOAT&&(Z=n.R16F),L===n.UNSIGNED_BYTE&&(Z=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.R8UI),L===n.UNSIGNED_SHORT&&(Z=n.R16UI),L===n.UNSIGNED_INT&&(Z=n.R32UI),L===n.BYTE&&(Z=n.R8I),L===n.SHORT&&(Z=n.R16I),L===n.INT&&(Z=n.R32I)),g===n.RG&&(L===n.FLOAT&&(Z=n.RG32F),L===n.HALF_FLOAT&&(Z=n.RG16F),L===n.UNSIGNED_BYTE&&(Z=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RG8UI),L===n.UNSIGNED_SHORT&&(Z=n.RG16UI),L===n.UNSIGNED_INT&&(Z=n.RG32UI),L===n.BYTE&&(Z=n.RG8I),L===n.SHORT&&(Z=n.RG16I),L===n.INT&&(Z=n.RG32I)),g===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),L===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),L===n.UNSIGNED_INT&&(Z=n.RGB32UI),L===n.BYTE&&(Z=n.RGB8I),L===n.SHORT&&(Z=n.RGB16I),L===n.INT&&(Z=n.RGB32I)),g===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),L===n.UNSIGNED_INT&&(Z=n.RGBA32UI),L===n.BYTE&&(Z=n.RGBA8I),L===n.SHORT&&(Z=n.RGBA16I),L===n.INT&&(Z=n.RGBA32I)),g===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),g===n.RGBA){const de=ee?Ro:rt.getTransfer(X);L===n.FLOAT&&(Z=n.RGBA32F),L===n.HALF_FLOAT&&(Z=n.RGBA16F),L===n.UNSIGNED_BYTE&&(Z=de===ht?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(S,g){let L;return S?g===null||g===qi||g===Lr?L=n.DEPTH24_STENCIL8:g===ti?L=n.DEPTH32F_STENCIL8:g===_s&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===qi||g===Lr?L=n.DEPTH_COMPONENT24:g===ti?L=n.DEPTH_COMPONENT32F:g===_s&&(L=n.DEPTH_COMPONENT16),L}function T(S,g){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==un&&S.minFilter!==Sn?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function U(S){const g=S.target;g.removeEventListener("dispose",U),R(g),g.isVideoTexture&&c.delete(g)}function D(S){const g=S.target;g.removeEventListener("dispose",D),se(g)}function R(S){const g=i.get(S);if(g.__webglInit===void 0)return;const L=S.source,X=h.get(L);if(X){const ee=X[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&z(S),Object.keys(X).length===0&&h.delete(L)}i.remove(S)}function z(S){const g=i.get(S);n.deleteTexture(g.__webglTexture);const L=S.source,X=h.get(L);delete X[g.__cacheKey],o.memory.textures--}function se(S){const g=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let ee=0;ee<g.__webglFramebuffer[X].length;ee++)n.deleteFramebuffer(g.__webglFramebuffer[X][ee]);else n.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)n.deleteFramebuffer(g.__webglFramebuffer[X]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=S.textures;for(let X=0,ee=L.length;X<ee;X++){const Z=i.get(L[X]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(L[X])}i.remove(S)}let y=0;function E(){y=0}function I(){const S=y;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),y+=1,S}function F(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function H(S,g){const L=i.get(S);if(S.isVideoTexture&&J(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){const X=S.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(L,S,g);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function P(S,g){const L=i.get(S);if(S.version>0&&L.__version!==S.version){ze(L,S,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function N(S,g){const L=i.get(S);if(S.version>0&&L.__version!==S.version){ze(L,S,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function G(S,g){const L=i.get(S);if(S.version>0&&L.__version!==S.version){re(L,S,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const B={[Cl]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[Rl]:n.MIRRORED_REPEAT},fe={[un]:n.NEAREST,[A_]:n.NEAREST_MIPMAP_NEAREST,[Ns]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[va]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},he={[P_]:n.NEVER,[F_]:n.ALWAYS,[L_]:n.LESS,[md]:n.LEQUAL,[D_]:n.EQUAL,[N_]:n.GEQUAL,[I_]:n.GREATER,[U_]:n.NOTEQUAL};function ge(S,g){if(g.type===ti&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Sn||g.magFilter===va||g.magFilter===Ns||g.magFilter===Gi||g.minFilter===Sn||g.minFilter===va||g.minFilter===Ns||g.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,B[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,B[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,B[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,fe[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,fe[g.minFilter]),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,he[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===un||g.minFilter!==Ns&&g.minFilter!==Gi||g.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ae(S,g){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",U));const X=g.source;let ee=h.get(X);ee===void 0&&(ee={},h.set(X,ee));const Z=F(g);if(Z!==S.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),ee[Z].usedTimes++;const de=ee[S.__cacheKey];de!==void 0&&(ee[S.__cacheKey].usedTimes--,de.usedTimes===0&&z(g)),S.__cacheKey=Z,S.__webglTexture=ee[Z].texture}return L}function ze(S,g,L){let X=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=n.TEXTURE_3D);const ee=Ae(S,g),Z=g.source;t.bindTexture(X,S.__webglTexture,n.TEXTURE0+L);const de=i.get(Z);if(Z.version!==de.__version||ee===!0){t.activeTexture(n.TEXTURE0+L);const ae=rt.getPrimaries(rt.workingColorSpace),pe=g.colorSpace===di?null:rt.getPrimaries(g.colorSpace),Ue=g.colorSpace===di||ae===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ce=v(g.image,!1,r.maxTextureSize);ce=ie(g,ce);const xe=s.convert(g.format,g.colorSpace),Ie=s.convert(g.type);let Fe=A(g.internalFormat,xe,Ie,g.colorSpace,g.isVideoTexture);ge(X,g);let _e;const He=g.mipmaps,Ve=g.isVideoTexture!==!0,st=de.__version===void 0||ee===!0,O=Z.dataReady,be=T(g,ce);if(g.isDepthTexture)Fe=x(g.format===Dr,g.type),st&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Fe,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Fe,ce.width,ce.height,0,xe,Ie,null));else if(g.isDataTexture)if(He.length>0){Ve&&st&&t.texStorage2D(n.TEXTURE_2D,be,Fe,He[0].width,He[0].height);for(let ne=0,oe=He.length;ne<oe;ne++)_e=He[ne],Ve?O&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,Ie,_e.data):t.texImage2D(n.TEXTURE_2D,ne,Fe,_e.width,_e.height,0,xe,Ie,_e.data);g.generateMipmaps=!1}else Ve?(st&&t.texStorage2D(n.TEXTURE_2D,be,Fe,ce.width,ce.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,xe,Ie,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,ce.width,ce.height,0,xe,Ie,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ve&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Fe,He[0].width,He[0].height,ce.depth);for(let ne=0,oe=He.length;ne<oe;ne++)if(_e=He[ne],g.format!==En)if(xe!==null)if(Ve){if(O)if(g.layerUpdates.size>0){const Se=wf(_e.width,_e.height,g.format,g.type);for(const Te of g.layerUpdates){const Ze=_e.data.subarray(Te*Se/_e.data.BYTES_PER_ELEMENT,(Te+1)*Se/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Te,_e.width,_e.height,1,xe,Ze,0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,ce.depth,xe,_e.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Fe,_e.width,_e.height,ce.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,ce.depth,xe,Ie,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Fe,_e.width,_e.height,ce.depth,0,xe,Ie,_e.data)}else{Ve&&st&&t.texStorage2D(n.TEXTURE_2D,be,Fe,He[0].width,He[0].height);for(let ne=0,oe=He.length;ne<oe;ne++)_e=He[ne],g.format!==En?xe!==null?Ve?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Fe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?O&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,Ie,_e.data):t.texImage2D(n.TEXTURE_2D,ne,Fe,_e.width,_e.height,0,xe,Ie,_e.data)}else if(g.isDataArrayTexture)if(Ve){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Fe,ce.width,ce.height,ce.depth),O)if(g.layerUpdates.size>0){const ne=wf(ce.width,ce.height,g.format,g.type);for(const oe of g.layerUpdates){const Se=ce.data.subarray(oe*ne/ce.data.BYTES_PER_ELEMENT,(oe+1)*ne/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ce.width,ce.height,1,xe,Ie,Se)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,xe,Ie,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,ce.width,ce.height,ce.depth,0,xe,Ie,ce.data);else if(g.isData3DTexture)Ve?(st&&t.texStorage3D(n.TEXTURE_3D,be,Fe,ce.width,ce.height,ce.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,xe,Ie,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,ce.width,ce.height,ce.depth,0,xe,Ie,ce.data);else if(g.isFramebufferTexture){if(st)if(Ve)t.texStorage2D(n.TEXTURE_2D,be,Fe,ce.width,ce.height);else{let ne=ce.width,oe=ce.height;for(let Se=0;Se<be;Se++)t.texImage2D(n.TEXTURE_2D,Se,Fe,ne,oe,0,xe,Ie,null),ne>>=1,oe>>=1}}else if(He.length>0){if(Ve&&st){const ne=K(He[0]);t.texStorage2D(n.TEXTURE_2D,be,Fe,ne.width,ne.height)}for(let ne=0,oe=He.length;ne<oe;ne++)_e=He[ne],Ve?O&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,xe,Ie,_e):t.texImage2D(n.TEXTURE_2D,ne,Fe,xe,Ie,_e);g.generateMipmaps=!1}else if(Ve){if(st){const ne=K(ce);t.texStorage2D(n.TEXTURE_2D,be,Fe,ne.width,ne.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ie,ce)}else t.texImage2D(n.TEXTURE_2D,0,Fe,xe,Ie,ce);d(g)&&f(X),de.__version=Z.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function re(S,g,L){if(g.image.length!==6)return;const X=Ae(S,g),ee=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);const Z=i.get(ee);if(ee.version!==Z.__version||X===!0){t.activeTexture(n.TEXTURE0+L);const de=rt.getPrimaries(rt.workingColorSpace),ae=g.colorSpace===di?null:rt.getPrimaries(g.colorSpace),pe=g.colorSpace===di||de===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ue=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!Ue&&!ce?xe[oe]=v(g.image[oe],!0,r.maxCubemapSize):xe[oe]=ce?g.image[oe].image:g.image[oe],xe[oe]=ie(g,xe[oe]);const Ie=xe[0],Fe=s.convert(g.format,g.colorSpace),_e=s.convert(g.type),He=A(g.internalFormat,Fe,_e,g.colorSpace),Ve=g.isVideoTexture!==!0,st=Z.__version===void 0||X===!0,O=ee.dataReady;let be=T(g,Ie);ge(n.TEXTURE_CUBE_MAP,g);let ne;if(Ue){Ve&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,He,Ie.width,Ie.height);for(let oe=0;oe<6;oe++){ne=xe[oe].mipmaps;for(let Se=0;Se<ne.length;Se++){const Te=ne[Se];g.format!==En?Fe!==null?Ve?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Te.width,Te.height,Fe,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,He,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Te.width,Te.height,Fe,_e,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,He,Te.width,Te.height,0,Fe,_e,Te.data)}}}else{if(ne=g.mipmaps,Ve&&st){ne.length>0&&be++;const oe=K(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,He,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ce){Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Fe,_e,xe[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,He,xe[oe].width,xe[oe].height,0,Fe,_e,xe[oe].data);for(let Se=0;Se<ne.length;Se++){const Ze=ne[Se].image[oe].image;Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Ze.width,Ze.height,Fe,_e,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,He,Ze.width,Ze.height,0,Fe,_e,Ze.data)}}else{Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Fe,_e,xe[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,He,Fe,_e,xe[oe]);for(let Se=0;Se<ne.length;Se++){const Te=ne[Se];Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Fe,_e,Te.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,He,Fe,_e,Te.image[oe])}}}d(g)&&f(n.TEXTURE_CUBE_MAP),Z.__version=ee.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function ue(S,g,L,X,ee,Z){const de=s.convert(L.format,L.colorSpace),ae=s.convert(L.type),pe=A(L.internalFormat,de,ae,L.colorSpace);if(!i.get(g).__hasExternalTextures){const ce=Math.max(1,g.width>>Z),xe=Math.max(1,g.height>>Z);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,pe,ce,xe,g.depth,0,de,ae,null):t.texImage2D(ee,Z,pe,ce,xe,0,de,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),$(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,ee,i.get(L).__webglTexture,0,W(g)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,ee,i.get(L).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(S,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer){const X=g.depthTexture,ee=X&&X.isDepthTexture?X.type:null,Z=x(g.stencilBuffer,ee),de=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=W(g);$(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,Z,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,Z,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Z,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,S)}else{const X=g.textures;for(let ee=0;ee<X.length;ee++){const Z=X[ee],de=s.convert(Z.format,Z.colorSpace),ae=s.convert(Z.type),pe=A(Z.internalFormat,de,ae,Z.colorSpace),Ue=W(g);L&&$(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,pe,g.width,g.height):$(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,pe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,pe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H(g.depthTexture,0);const X=i.get(g.depthTexture).__webglTexture,ee=W(g);if(g.depthTexture.format===Er)$(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(g.depthTexture.format===Dr)$(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Oe(S){const g=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const X=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const ee=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",ee)};X.addEventListener("dispose",ee),g.__depthDisposeCallback=ee}g.__boundDepthTexture=X}if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Me(g.__webglFramebuffer,S)}else if(L){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=n.createRenderbuffer(),Ee(g.__webglDepthbuffer[X],S,!1);else{const ee=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ee(g.__webglDepthbuffer,S,!1);else{const X=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(S,g,L){const X=i.get(S);g!==void 0&&ue(X.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Oe(S)}function Ye(S){const g=S.texture,L=i.get(S),X=i.get(g);S.addEventListener("dispose",D);const ee=S.textures,Z=S.isWebGLCubeRenderTarget===!0,de=ee.length>1;if(de||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=g.version,o.memory.textures++),Z){L.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[ae]=[];for(let pe=0;pe<g.mipmaps.length;pe++)L.__webglFramebuffer[ae][pe]=n.createFramebuffer()}else L.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let ae=0;ae<g.mipmaps.length;ae++)L.__webglFramebuffer[ae]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(de)for(let ae=0,pe=ee.length;ae<pe;ae++){const Ue=i.get(ee[ae]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&$(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const pe=ee[ae];L.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ae]);const Ue=s.convert(pe.format,pe.colorSpace),ce=s.convert(pe.type),xe=A(pe.internalFormat,Ue,ce,pe.colorSpace,S.isXRRenderTarget===!0),Ie=W(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,xe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,L.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),ge(n.TEXTURE_CUBE_MAP,g);for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0)for(let pe=0;pe<g.mipmaps.length;pe++)ue(L.__webglFramebuffer[ae][pe],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,pe);else ue(L.__webglFramebuffer[ae],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);d(g)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ae=0,pe=ee.length;ae<pe;ae++){const Ue=ee[ae],ce=i.get(Ue);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),ge(n.TEXTURE_2D,Ue),ue(L.__webglFramebuffer,S,Ue,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),d(Ue)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,X.__webglTexture),ge(ae,g),g.mipmaps&&g.mipmaps.length>0)for(let pe=0;pe<g.mipmaps.length;pe++)ue(L.__webglFramebuffer[pe],S,g,n.COLOR_ATTACHMENT0,ae,pe);else ue(L.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,ae,0);d(g)&&f(ae),t.unbindTexture()}S.depthBuffer&&Oe(S)}function b(S){const g=S.textures;for(let L=0,X=g.length;L<X;L++){const ee=g[L];if(d(ee)){const Z=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(ee).__webglTexture;t.bindTexture(Z,de),f(Z),t.unbindTexture()}}}const C=[],M=[];function q(S){if(S.samples>0){if($(S)===!1){const g=S.textures,L=S.width,X=S.height;let ee=n.COLOR_BUFFER_BIT;const Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(S),ae=g.length>1;if(ae)for(let pe=0;pe<g.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let pe=0;pe<g.length;pe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[pe]);const Ue=i.get(g[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,L,X,0,0,L,X,ee,n.NEAREST),l===!0&&(C.length=0,M.length=0,C.push(n.COLOR_ATTACHMENT0+pe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(C.push(Z),M.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,M)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let pe=0;pe<g.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,de.__webglColorRenderbuffer[pe]);const Ue=i.get(g[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const g=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function W(S){return Math.min(r.maxSamples,S.samples)}function $(S){const g=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function J(S){const g=o.render.frame;c.get(S)!==g&&(c.set(S,g),S.update())}function ie(S,g){const L=S.colorSpace,X=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==Ei&&L!==di&&(rt.getTransfer(L)===ht?(X!==En||ee!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function K(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(u.width=S.naturalWidth||S.width,u.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(u.width=S.displayWidth,u.height=S.displayHeight):(u.width=S.width,u.height=S.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=E,this.setTexture2D=H,this.setTexture2DArray=P,this.setTexture3D=N,this.setTextureCube=G,this.rebindTextures=De,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=$}function ny(n,e){function t(i,r=di){let s;const o=rt.getTransfer(r);if(i===ii)return n.UNSIGNED_BYTE;if(i===Cc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===od)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rd)return n.BYTE;if(i===sd)return n.SHORT;if(i===_s)return n.UNSIGNED_SHORT;if(i===wc)return n.INT;if(i===qi)return n.UNSIGNED_INT;if(i===ti)return n.FLOAT;if(i===Es)return n.HALF_FLOAT;if(i===ad)return n.ALPHA;if(i===ld)return n.RGB;if(i===En)return n.RGBA;if(i===cd)return n.LUMINANCE;if(i===ud)return n.LUMINANCE_ALPHA;if(i===Er)return n.DEPTH_COMPONENT;if(i===Dr)return n.DEPTH_STENCIL;if(i===fd)return n.RED;if(i===Pc)return n.RED_INTEGER;if(i===hd)return n.RG;if(i===Lc)return n.RG_INTEGER;if(i===Dc)return n.RGBA_INTEGER;if(i===ho||i===po||i===mo||i===go)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===po)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===go)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pl||i===Ll||i===Dl||i===Il)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ll)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Il)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ul||i===Nl||i===Fl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ul||i===Nl)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ol||i===Bl||i===zl||i===kl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===$l||i===ql||i===Yl||i===jl||i===Kl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ol)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$l)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ql)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_o||i===Zl||i===Jl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_o)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dd||i===Ql||i===ec||i===tc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_o)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ql)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ec)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class iy extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qr extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ry={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const d=t.getJointPose(v,i),f=this._getHandJoint(u,v);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const c=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],h=c.position.distanceTo(p.position),m=.02,_=.005;u.inputState.pinching&&h>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ry)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ay{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Si({vertexShader:sy,fragmentShader:oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new ws(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ly extends Or{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,p=null,h=null,m=null,_=null;const v=new ay,d=t.getContextAttributes();let f=null,A=null;const x=[],T=[],U=new et;let D=null;const R=new Mn;R.layers.enable(1),R.viewport=new xt;const z=new Mn;z.layers.enable(2),z.viewport=new xt;const se=[R,z],y=new iy;y.layers.enable(1),y.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ue=x[re];return ue===void 0&&(ue=new $a,x[re]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(re){let ue=x[re];return ue===void 0&&(ue=new $a,x[re]=ue),ue.getGripSpace()},this.getHand=function(re){let ue=x[re];return ue===void 0&&(ue=new $a,x[re]=ue),ue.getHandSpace()};function F(re){const ue=T.indexOf(re.inputSource);if(ue===-1)return;const Ee=x[ue];Ee!==void 0&&(Ee.update(re.inputSource,re.frame,u||o),Ee.dispatchEvent({type:re.type,data:re.inputSource}))}function H(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",P);for(let re=0;re<x.length;re++){const ue=T[re];ue!==null&&(T[re]=null,x[re].disconnect(ue))}E=null,I=null,v.reset(),e.setRenderTarget(f),m=null,h=null,p=null,r=null,A=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(re){u=re},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",H),r.addEventListener("inputsourceschange",P),d.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const ue={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Mi(m.framebufferWidth,m.framebufferHeight,{format:En,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let ue=null,Ee=null,Me=null;d.depth&&(Me=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=d.stencil?Dr:Er,Ee=d.stencil?Lr:qi);const Oe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};p=new XRWebGLBinding(r,t),h=p.createProjectionLayer(Oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new Mi(h.textureWidth,h.textureHeight,{format:En,type:ii,depthTexture:new Cd(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function P(re){for(let ue=0;ue<re.removed.length;ue++){const Ee=re.removed[ue],Me=T.indexOf(Ee);Me>=0&&(T[Me]=null,x[Me].disconnect(Ee))}for(let ue=0;ue<re.added.length;ue++){const Ee=re.added[ue];let Me=T.indexOf(Ee);if(Me===-1){for(let De=0;De<x.length;De++)if(De>=T.length){T.push(Ee),Me=De;break}else if(T[De]===null){T[De]=Ee,Me=De;break}if(Me===-1)break}const Oe=x[Me];Oe&&Oe.connect(Ee)}}const N=new Y,G=new Y;function B(re,ue,Ee){N.setFromMatrixPosition(ue.matrixWorld),G.setFromMatrixPosition(Ee.matrixWorld);const Me=N.distanceTo(G),Oe=ue.projectionMatrix.elements,De=Ee.projectionMatrix.elements,Ye=Oe[14]/(Oe[10]-1),b=Oe[14]/(Oe[10]+1),C=(Oe[9]+1)/Oe[5],M=(Oe[9]-1)/Oe[5],q=(Oe[8]-1)/Oe[0],W=(De[8]+1)/De[0],$=Ye*q,J=Ye*W,ie=Me/(-q+W),K=ie*-q;if(ue.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(K),re.translateZ(ie),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Oe[10]===-1)re.projectionMatrix.copy(ue.projectionMatrix),re.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const S=Ye+ie,g=b+ie,L=$-K,X=J+(Me-K),ee=C*b/g*S,Z=M*b/g*S;re.projectionMatrix.makePerspective(L,X,ee,Z,S,g),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function fe(re,ue){ue===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ue.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ue=re.near,Ee=re.far;v.texture!==null&&(v.depthNear>0&&(ue=v.depthNear),v.depthFar>0&&(Ee=v.depthFar)),y.near=z.near=R.near=ue,y.far=z.far=R.far=Ee,(E!==y.near||I!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,I=y.far);const Me=re.parent,Oe=y.cameras;fe(y,Me);for(let De=0;De<Oe.length;De++)fe(Oe[De],Me);Oe.length===2?B(y,R,z):y.projectionMatrix.copy(R.projectionMatrix),he(re,y,Me)};function he(re,ue,Ee){Ee===null?re.matrix.copy(ue.matrixWorld):(re.matrix.copy(Ee.matrixWorld),re.matrix.invert(),re.matrix.multiply(ue.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ue.projectionMatrix),re.projectionMatrixInverse.copy(ue.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=vs*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(re){l=re,h!==null&&(h.fixedFoveation=re),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=re)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ge=null;function Ae(re,ue){if(c=ue.getViewerPose(u||o),_=ue,c!==null){const Ee=c.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let Me=!1;Ee.length!==y.cameras.length&&(y.cameras.length=0,Me=!0);for(let De=0;De<Ee.length;De++){const Ye=Ee[De];let b=null;if(m!==null)b=m.getViewport(Ye);else{const M=p.getViewSubImage(h,Ye);b=M.viewport,De===0&&(e.setRenderTargetTextures(A,M.colorTexture,h.ignoreDepthValues?void 0:M.depthStencilTexture),e.setRenderTarget(A))}let C=se[De];C===void 0&&(C=new Mn,C.layers.enable(De),C.viewport=new xt,se[De]=C),C.matrix.fromArray(Ye.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Ye.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(b.x,b.y,b.width,b.height),De===0&&(y.matrix.copy(C.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Me===!0&&y.cameras.push(C)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const De=p.getDepthInformation(Ee[0]);De&&De.isValid&&De.texture&&v.init(e,De,r.renderState)}}for(let Ee=0;Ee<x.length;Ee++){const Me=T[Ee],Oe=x[Ee];Me!==null&&Oe!==void 0&&Oe.update(Me,ue,u||o)}ge&&ge(re,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),_=null}const ze=new wd;ze.setAnimationLoop(Ae),this.setAnimationLoop=function(re){ge=re},this.dispose=function(){}}}const Ii=new Hn,cy=new gt;function uy(n,e){function t(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function i(d,f){f.color.getRGB(d.fogColor.value,bd(n)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function r(d,f,A,x,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(d,f):f.isMeshToonMaterial?(s(d,f),p(d,f)):f.isMeshPhongMaterial?(s(d,f),c(d,f)):f.isMeshStandardMaterial?(s(d,f),h(d,f),f.isMeshPhysicalMaterial&&m(d,f,T)):f.isMeshMatcapMaterial?(s(d,f),_(d,f)):f.isMeshDepthMaterial?s(d,f):f.isMeshDistanceMaterial?(s(d,f),v(d,f)):f.isMeshNormalMaterial?s(d,f):f.isLineBasicMaterial?(o(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?l(d,f,A,x):f.isSpriteMaterial?u(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,t(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Jt&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,t(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Jt&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,t(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,t(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const A=e.get(f),x=A.envMap,T=A.envMapRotation;x&&(d.envMap.value=x,Ii.copy(T),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),d.envMapRotation.value.setFromMatrix4(cy.makeRotationFromEuler(Ii)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,d.aoMapTransform))}function o(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,A,x){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*A,d.scale.value=x*.5,f.map&&(d.map.value=f.map,t(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function u(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function p(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function h(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,A){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Jt&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=A.texture,d.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,f){f.matcap&&(d.matcap.value=f.matcap)}function v(d,f){const A=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(A.matrixWorld),d.nearDistance.value=A.shadow.camera.near,d.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fy(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,x){const T=x.program;i.uniformBlockBinding(A,T)}function u(A,x){let T=r[A.id];T===void 0&&(_(A),T=c(A),r[A.id]=T,A.addEventListener("dispose",d));const U=x.program;i.updateUBOMapping(A,U);const D=e.render.frame;s[A.id]!==D&&(h(A),s[A.id]=D)}function c(A){const x=p();A.__bindingPointIndex=x;const T=n.createBuffer(),U=A.__size,D=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,U,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,T),T}function p(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const x=r[A.id],T=A.uniforms,U=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let D=0,R=T.length;D<R;D++){const z=Array.isArray(T[D])?T[D]:[T[D]];for(let se=0,y=z.length;se<y;se++){const E=z[se];if(m(E,D,se,U)===!0){const I=E.__offset,F=Array.isArray(E.value)?E.value:[E.value];let H=0;for(let P=0;P<F.length;P++){const N=F[P],G=v(N);typeof N=="number"||typeof N=="boolean"?(E.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,I+H,E.__data)):N.isMatrix3?(E.__data[0]=N.elements[0],E.__data[1]=N.elements[1],E.__data[2]=N.elements[2],E.__data[3]=0,E.__data[4]=N.elements[3],E.__data[5]=N.elements[4],E.__data[6]=N.elements[5],E.__data[7]=0,E.__data[8]=N.elements[6],E.__data[9]=N.elements[7],E.__data[10]=N.elements[8],E.__data[11]=0):(N.toArray(E.__data,H),H+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,x,T,U){const D=A.value,R=x+"_"+T;if(U[R]===void 0)return typeof D=="number"||typeof D=="boolean"?U[R]=D:U[R]=D.clone(),!0;{const z=U[R];if(typeof D=="number"||typeof D=="boolean"){if(z!==D)return U[R]=D,!0}else if(z.equals(D)===!1)return z.copy(D),!0}return!1}function _(A){const x=A.uniforms;let T=0;const U=16;for(let R=0,z=x.length;R<z;R++){const se=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,E=se.length;y<E;y++){const I=se[y],F=Array.isArray(I.value)?I.value:[I.value];for(let H=0,P=F.length;H<P;H++){const N=F[H],G=v(N),B=T%U,fe=B%G.boundary,he=B+fe;T+=fe,he!==0&&U-he<G.storage&&(T+=U-he),I.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=G.storage}}}const D=T%U;return D>0&&(T+=U-D),A.__size=T,A.__cache={},this}function v(A){const x={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(x.boundary=4,x.storage=4):A.isVector2?(x.boundary=8,x.storage=8):A.isVector3||A.isColor?(x.boundary=16,x.storage=12):A.isVector4?(x.boundary=16,x.storage=16):A.isMatrix3?(x.boundary=48,x.storage=48):A.isMatrix4?(x.boundary=64,x.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),x}function d(A){const x=A.target;x.removeEventListener("dispose",d);const T=o.indexOf(x.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class hy{constructor(e={}){const{canvas:t=Q_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,d=null;const f=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this.toneMapping=_i,this.toneMappingExposure=1;const x=this;let T=!1,U=0,D=0,R=null,z=-1,se=null;const y=new xt,E=new xt;let I=null;const F=new Ke(0);let H=0,P=t.width,N=t.height,G=1,B=null,fe=null;const he=new xt(0,0,P,N),ge=new xt(0,0,P,N);let Ae=!1;const ze=new Fc;let re=!1,ue=!1;const Ee=new gt,Me=new gt,Oe=new Y,De=new xt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let b=!1;function C(){return R===null?G:1}let M=i;function q(w,k){return t.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bc}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Te,!1),M===null){const k="webgl2";if(M=q(k,w),M===null)throw q(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let W,$,J,ie,K,S,g,L,X,ee,Z,de,ae,pe,Ue,ce,xe,Ie,Fe,_e,He,Ve,st,O;function be(){W=new _M(M),W.init(),Ve=new ny(M,W),$=new fM(M,W,e,Ve),J=new QS(M),$.reverseDepthBuffer&&J.buffers.depth.setReversed(!0),ie=new MM(M),K=new BS,S=new ty(M,W,J,K,$,Ve,ie),g=new dM(x),L=new gM(x),X=new wv(M),st=new cM(M,X),ee=new vM(M,X,ie,st),Z=new yM(M,ee,X,ie),Fe=new SM(M,$,S),ce=new hM(K),de=new OS(x,g,L,W,$,st,ce),ae=new uy(x,K),pe=new kS,Ue=new $S(W),Ie=new lM(x,g,L,J,Z,h,l),xe=new ZS(x,Z,$),O=new fy(M,ie,$,J),_e=new uM(M,W,ie),He=new xM(M,W,ie),ie.programs=de.programs,x.capabilities=$,x.extensions=W,x.properties=K,x.renderLists=pe,x.shadowMap=xe,x.state=J,x.info=ie}be();const ne=new ly(x,M);this.xr=ne,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const w=W.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=W.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(P,N,!1))},this.getSize=function(w){return w.set(P,N)},this.setSize=function(w,k,Q=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,N=k,t.width=Math.floor(w*G),t.height=Math.floor(k*G),Q===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(P*G,N*G).floor()},this.setDrawingBufferSize=function(w,k,Q){P=w,N=k,G=Q,t.width=Math.floor(w*Q),t.height=Math.floor(k*Q),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(he)},this.setViewport=function(w,k,Q,te){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,k,Q,te),J.viewport(y.copy(he).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,k,Q,te){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,k,Q,te),J.scissor(E.copy(ge).multiplyScalar(G).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){J.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){B=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(w=!0,k=!0,Q=!0){let te=0;if(w){let V=!1;if(R!==null){const me=R.texture.format;V=me===Dc||me===Lc||me===Pc}if(V){const me=R.texture.type,ye=me===ii||me===qi||me===_s||me===Lr||me===Cc||me===Rc,Ce=Ie.getClearColor(),Re=Ie.getClearAlpha(),Be=Ce.r,ke=Ce.g,Pe=Ce.b;ye?(m[0]=Be,m[1]=ke,m[2]=Pe,m[3]=Re,M.clearBufferuiv(M.COLOR,0,m)):(_[0]=Be,_[1]=ke,_[2]=Pe,_[3]=Re,M.clearBufferiv(M.COLOR,0,_))}else te|=M.COLOR_BUFFER_BIT}k&&(te|=M.DEPTH_BUFFER_BIT,M.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(te|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),pe.dispose(),Ue.dispose(),K.dispose(),g.dispose(),L.dispose(),Z.dispose(),st.dispose(),O.dispose(),de.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Hc),ne.removeEventListener("sessionend",Vc),bi.stop()};function oe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=ie.autoReset,k=xe.enabled,Q=xe.autoUpdate,te=xe.needsUpdate,V=xe.type;be(),ie.autoReset=w,xe.enabled=k,xe.autoUpdate=Q,xe.needsUpdate=te,xe.type=V}function Te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ze(w){const k=w.target;k.removeEventListener("dispose",Ze),St(k)}function St(w){qt(w),K.remove(w)}function qt(w){const k=K.get(w).programs;k!==void 0&&(k.forEach(function(Q){de.releaseProgram(Q)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,Q,te,V,me){k===null&&(k=Ye);const ye=V.isMesh&&V.matrixWorld.determinant()<0,Ce=Bd(w,k,Q,te,V);J.setMaterial(te,ye);let Re=Q.index,Be=1;if(te.wireframe===!0){if(Re=ee.getWireframeAttribute(Q),Re===void 0)return;Be=2}const ke=Q.drawRange,Pe=Q.attributes.position;let ot=ke.start*Be,ft=(ke.start+ke.count)*Be;me!==null&&(ot=Math.max(ot,me.start*Be),ft=Math.min(ft,(me.start+me.count)*Be)),Re!==null?(ot=Math.max(ot,0),ft=Math.min(ft,Re.count)):Pe!=null&&(ot=Math.max(ot,0),ft=Math.min(ft,Pe.count));const _t=ft-ot;if(_t<0||_t===1/0)return;st.setup(V,te,Ce,Q,Re);let en,tt=_e;if(Re!==null&&(en=X.get(Re),tt=He,tt.setIndex(en)),V.isMesh)te.wireframe===!0?(J.setLineWidth(te.wireframeLinewidth*C()),tt.setMode(M.LINES)):tt.setMode(M.TRIANGLES);else if(V.isLine){let Le=te.linewidth;Le===void 0&&(Le=1),J.setLineWidth(Le*C()),V.isLineSegments?tt.setMode(M.LINES):V.isLineLoop?tt.setMode(M.LINE_LOOP):tt.setMode(M.LINE_STRIP)}else V.isPoints?tt.setMode(M.POINTS):V.isSprite&&tt.setMode(M.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)tt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))tt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Le=V._multiDrawStarts,Pt=V._multiDrawCounts,nt=V._multiDrawCount,mn=Re?X.get(Re).bytesPerElement:1,Ji=K.get(te).currentProgram.getUniforms();for(let tn=0;tn<nt;tn++)Ji.setValue(M,"_gl_DrawID",tn),tt.render(Le[tn]/mn,Pt[tn])}else if(V.isInstancedMesh)tt.renderInstances(ot,_t,V.count);else if(Q.isInstancedBufferGeometry){const Le=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Pt=Math.min(Q.instanceCount,Le);tt.renderInstances(ot,_t,Pt)}else tt.render(ot,_t)};function Je(w,k,Q){w.transparent===!0&&w.side===ei&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,Rs(w,k,Q),w.side=xi,w.needsUpdate=!0,Rs(w,k,Q),w.side=ei):Rs(w,k,Q)}this.compile=function(w,k,Q=null){Q===null&&(Q=w),d=Ue.get(Q),d.init(k),A.push(d),Q.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),w!==Q&&w.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights();const te=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const me=V.material;if(me)if(Array.isArray(me))for(let ye=0;ye<me.length;ye++){const Ce=me[ye];Je(Ce,Q,V),te.add(Ce)}else Je(me,Q,V),te.add(me)}),A.pop(),d=null,te},this.compileAsync=function(w,k,Q=null){const te=this.compile(w,k,Q);return new Promise(V=>{function me(){if(te.forEach(function(ye){K.get(ye).currentProgram.isReady()&&te.delete(ye)}),te.size===0){V(w);return}setTimeout(me,10)}W.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Yt=null;function Vn(w){Yt&&Yt(w)}function Hc(){bi.stop()}function Vc(){bi.start()}const bi=new wd;bi.setAnimationLoop(Vn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(w){Yt=w,ne.setAnimationLoop(w),w===null?bi.stop():bi.start()},ne.addEventListener("sessionstart",Hc),ne.addEventListener("sessionend",Vc),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(k),k=ne.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,k,R),d=Ue.get(w,A.length),d.init(k),A.push(d),Me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ze.setFromProjectionMatrix(Me),ue=this.localClippingEnabled,re=ce.init(this.clippingPlanes,ue),v=pe.get(w,f.length),v.init(),f.push(v),ne.enabled===!0&&ne.isPresenting===!0){const me=x.xr.getDepthSensingMesh();me!==null&&ea(me,k,-1/0,x.sortObjects)}ea(w,k,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(B,fe),b=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,b&&Ie.addToRenderList(v,w),this.info.render.frame++,re===!0&&ce.beginShadows();const Q=d.state.shadowsArray;xe.render(Q,w,k),re===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=v.opaque,V=v.transmissive;if(d.setupLights(),k.isArrayCamera){const me=k.cameras;if(V.length>0)for(let ye=0,Ce=me.length;ye<Ce;ye++){const Re=me[ye];Wc(te,V,w,Re)}b&&Ie.render(w);for(let ye=0,Ce=me.length;ye<Ce;ye++){const Re=me[ye];Gc(v,w,Re,Re.viewport)}}else V.length>0&&Wc(te,V,w,k),b&&Ie.render(w),Gc(v,w,k);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,k),st.resetDefaultState(),z=-1,se=null,A.pop(),A.length>0?(d=A[A.length-1],re===!0&&ce.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ea(w,k,Q,te){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ze.intersectsSprite(w)){te&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Me);const ye=Z.update(w),Ce=w.material;Ce.visible&&v.push(w,ye,Ce,Q,De.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ze.intersectsObject(w))){const ye=Z.update(w),Ce=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),De.copy(ye.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(Me)),Array.isArray(Ce)){const Re=ye.groups;for(let Be=0,ke=Re.length;Be<ke;Be++){const Pe=Re[Be],ot=Ce[Pe.materialIndex];ot&&ot.visible&&v.push(w,ye,ot,Q,De.z,Pe)}}else Ce.visible&&v.push(w,ye,Ce,Q,De.z,null)}}const me=w.children;for(let ye=0,Ce=me.length;ye<Ce;ye++)ea(me[ye],k,Q,te)}function Gc(w,k,Q,te){const V=w.opaque,me=w.transmissive,ye=w.transparent;d.setupLightsView(Q),re===!0&&ce.setGlobalState(x.clippingPlanes,Q),te&&J.viewport(y.copy(te)),V.length>0&&Cs(V,k,Q),me.length>0&&Cs(me,k,Q),ye.length>0&&Cs(ye,k,Q),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Wc(w,k,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[te.id]===void 0&&(d.state.transmissionRenderTarget[te.id]=new Mi(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?Es:ii,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const me=d.state.transmissionRenderTarget[te.id],ye=te.viewport||y;me.setSize(ye.z,ye.w);const Ce=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(F),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),b&&Ie.render(Q);const Re=x.toneMapping;x.toneMapping=_i;const Be=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),d.setupLightsView(te),re===!0&&ce.setGlobalState(x.clippingPlanes,te),Cs(w,Q,te),S.updateMultisampleRenderTarget(me),S.updateRenderTargetMipmap(me),W.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Pe=0,ot=k.length;Pe<ot;Pe++){const ft=k[Pe],_t=ft.object,en=ft.geometry,tt=ft.material,Le=ft.group;if(tt.side===ei&&_t.layers.test(te.layers)){const Pt=tt.side;tt.side=Jt,tt.needsUpdate=!0,Xc(_t,Q,te,en,tt,Le),tt.side=Pt,tt.needsUpdate=!0,ke=!0}}ke===!0&&(S.updateMultisampleRenderTarget(me),S.updateRenderTargetMipmap(me))}x.setRenderTarget(Ce),x.setClearColor(F,H),Be!==void 0&&(te.viewport=Be),x.toneMapping=Re}function Cs(w,k,Q){const te=k.isScene===!0?k.overrideMaterial:null;for(let V=0,me=w.length;V<me;V++){const ye=w[V],Ce=ye.object,Re=ye.geometry,Be=te===null?ye.material:te,ke=ye.group;Ce.layers.test(Q.layers)&&Xc(Ce,k,Q,Re,Be,ke)}}function Xc(w,k,Q,te,V,me){w.onBeforeRender(x,k,Q,te,V,me),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(x,k,Q,te,w,me),V.transparent===!0&&V.side===ei&&V.forceSinglePass===!1?(V.side=Jt,V.needsUpdate=!0,x.renderBufferDirect(Q,k,te,V,w,me),V.side=xi,V.needsUpdate=!0,x.renderBufferDirect(Q,k,te,V,w,me),V.side=ei):x.renderBufferDirect(Q,k,te,V,w,me),w.onAfterRender(x,k,Q,te,V,me)}function Rs(w,k,Q){k.isScene!==!0&&(k=Ye);const te=K.get(w),V=d.state.lights,me=d.state.shadowsArray,ye=V.state.version,Ce=de.getParameters(w,V.state,me,k,Q),Re=de.getProgramCacheKey(Ce);let Be=te.programs;te.environment=w.isMeshStandardMaterial?k.environment:null,te.fog=k.fog,te.envMap=(w.isMeshStandardMaterial?L:g).get(w.envMap||te.environment),te.envMapRotation=te.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",Ze),Be=new Map,te.programs=Be);let ke=Be.get(Re);if(ke!==void 0){if(te.currentProgram===ke&&te.lightsStateVersion===ye)return qc(w,Ce),ke}else Ce.uniforms=de.getUniforms(w),w.onBeforeCompile(Ce,x),ke=de.acquireProgram(Ce,Re),Be.set(Re,ke),te.uniforms=Ce.uniforms;const Pe=te.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=ce.uniform),qc(w,Ce),te.needsLights=kd(w),te.lightsStateVersion=ye,te.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.directionalShadowMap.value=V.state.directionalShadowMap,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotShadowMap.value=V.state.spotShadowMap,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMap.value=V.state.pointShadowMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),te.currentProgram=ke,te.uniformsList=null,ke}function $c(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=xo.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function qc(w,k){const Q=K.get(w);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.batchingColor=k.batchingColor,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.instancingMorph=k.instancingMorph,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function Bd(w,k,Q,te,V){k.isScene!==!0&&(k=Ye),S.resetTextureUnits();const me=k.fog,ye=te.isMeshStandardMaterial?k.environment:null,Ce=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ei,Re=(te.isMeshStandardMaterial?L:g).get(te.envMap||ye),Be=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ke=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Pe=!!Q.morphAttributes.position,ot=!!Q.morphAttributes.normal,ft=!!Q.morphAttributes.color;let _t=_i;te.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=x.toneMapping);const en=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,tt=en!==void 0?en.length:0,Le=K.get(te),Pt=d.state.lights;if(re===!0&&(ue===!0||w!==se)){const ln=w===se&&te.id===z;ce.setState(te,w,ln)}let nt=!1;te.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Pt.state.version||Le.outputColorSpace!==Ce||V.isBatchedMesh&&Le.batching===!1||!V.isBatchedMesh&&Le.batching===!0||V.isBatchedMesh&&Le.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Le.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Le.instancing===!1||!V.isInstancedMesh&&Le.instancing===!0||V.isSkinnedMesh&&Le.skinning===!1||!V.isSkinnedMesh&&Le.skinning===!0||V.isInstancedMesh&&Le.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Le.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Le.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Le.instancingMorph===!1&&V.morphTexture!==null||Le.envMap!==Re||te.fog===!0&&Le.fog!==me||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ce.numPlanes||Le.numIntersection!==ce.numIntersection)||Le.vertexAlphas!==Be||Le.vertexTangents!==ke||Le.morphTargets!==Pe||Le.morphNormals!==ot||Le.morphColors!==ft||Le.toneMapping!==_t||Le.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Le.__version=te.version);let mn=Le.currentProgram;nt===!0&&(mn=Rs(te,k,V));let Ji=!1,tn=!1,ta=!1;const Mt=mn.getUniforms(),si=Le.uniforms;if(J.useProgram(mn.program)&&(Ji=!0,tn=!0,ta=!0),te.id!==z&&(z=te.id,tn=!0),Ji||se!==w){$.reverseDepthBuffer?(Ee.copy(w.projectionMatrix),tv(Ee),nv(Ee),Mt.setValue(M,"projectionMatrix",Ee)):Mt.setValue(M,"projectionMatrix",w.projectionMatrix),Mt.setValue(M,"viewMatrix",w.matrixWorldInverse);const ln=Mt.map.cameraPosition;ln!==void 0&&ln.setValue(M,Oe.setFromMatrixPosition(w.matrixWorld)),$.logarithmicDepthBuffer&&Mt.setValue(M,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Mt.setValue(M,"isOrthographic",w.isOrthographicCamera===!0),se!==w&&(se=w,tn=!0,ta=!0)}if(V.isSkinnedMesh){Mt.setOptional(M,V,"bindMatrix"),Mt.setOptional(M,V,"bindMatrixInverse");const ln=V.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Mt.setValue(M,"boneTexture",ln.boneTexture,S))}V.isBatchedMesh&&(Mt.setOptional(M,V,"batchingTexture"),Mt.setValue(M,"batchingTexture",V._matricesTexture,S),Mt.setOptional(M,V,"batchingIdTexture"),Mt.setValue(M,"batchingIdTexture",V._indirectTexture,S),Mt.setOptional(M,V,"batchingColorTexture"),V._colorsTexture!==null&&Mt.setValue(M,"batchingColorTexture",V._colorsTexture,S));const na=Q.morphAttributes;if((na.position!==void 0||na.normal!==void 0||na.color!==void 0)&&Fe.update(V,Q,mn),(tn||Le.receiveShadow!==V.receiveShadow)&&(Le.receiveShadow=V.receiveShadow,Mt.setValue(M,"receiveShadow",V.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(si.envMap.value=Re,si.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&k.environment!==null&&(si.envMapIntensity.value=k.environmentIntensity),tn&&(Mt.setValue(M,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&zd(si,ta),me&&te.fog===!0&&ae.refreshFogUniforms(si,me),ae.refreshMaterialUniforms(si,te,G,N,d.state.transmissionRenderTarget[w.id]),xo.upload(M,$c(Le),si,S)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(xo.upload(M,$c(Le),si,S),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Mt.setValue(M,"center",V.center),Mt.setValue(M,"modelViewMatrix",V.modelViewMatrix),Mt.setValue(M,"normalMatrix",V.normalMatrix),Mt.setValue(M,"modelMatrix",V.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const ln=te.uniformsGroups;for(let ia=0,Hd=ln.length;ia<Hd;ia++){const Yc=ln[ia];O.update(Yc,mn),O.bind(Yc,mn)}}return mn}function zd(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function kd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,k,Q){K.get(w.texture).__webglTexture=k,K.get(w.depthTexture).__webglTexture=Q;const te=K.get(w);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=Q===void 0,te.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const Q=K.get(w);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,Q=0){R=w,U=k,D=Q;let te=!0,V=null,me=!1,ye=!1;if(w){const Re=K.get(w);if(Re.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(M.FRAMEBUFFER,null),te=!1;else if(Re.__webglFramebuffer===void 0)S.setupRenderTarget(w);else if(Re.__hasExternalTextures)S.rebindTextures(w,K.get(w.texture).__webglTexture,K.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pe=w.depthTexture;if(Re.__boundDepthTexture!==Pe){if(Pe!==null&&K.has(Pe)&&(w.width!==Pe.image.width||w.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(w)}}const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ye=!0);const ke=K.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[k])?V=ke[k][Q]:V=ke[k],me=!0):w.samples>0&&S.useMultisampledRTT(w)===!1?V=K.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?V=ke[Q]:V=ke,y.copy(w.viewport),E.copy(w.scissor),I=w.scissorTest}else y.copy(he).multiplyScalar(G).floor(),E.copy(ge).multiplyScalar(G).floor(),I=Ae;if(J.bindFramebuffer(M.FRAMEBUFFER,V)&&te&&J.drawBuffers(w,V),J.viewport(y),J.scissor(E),J.setScissorTest(I),me){const Re=K.get(w.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+k,Re.__webglTexture,Q)}else if(ye){const Re=K.get(w.texture),Be=k||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Re.__webglTexture,Q||0,Be)}z=-1},this.readRenderTargetPixels=function(w,k,Q,te,V,me,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){J.bindFramebuffer(M.FRAMEBUFFER,Ce);try{const Re=w.texture,Be=Re.format,ke=Re.type;if(!$.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-te&&Q>=0&&Q<=w.height-V&&M.readPixels(k,Q,te,V,Ve.convert(Be),Ve.convert(ke),me)}finally{const Re=R!==null?K.get(R).__webglFramebuffer:null;J.bindFramebuffer(M.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,k,Q,te,V,me,ye){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){const Re=w.texture,Be=Re.format,ke=Re.type;if(!$.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-te&&Q>=0&&Q<=w.height-V){J.bindFramebuffer(M.FRAMEBUFFER,Ce);const Pe=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Pe),M.bufferData(M.PIXEL_PACK_BUFFER,me.byteLength,M.STREAM_READ),M.readPixels(k,Q,te,V,Ve.convert(Be),Ve.convert(ke),0);const ot=R!==null?K.get(R).__webglFramebuffer:null;J.bindFramebuffer(M.FRAMEBUFFER,ot);const ft=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await ev(M,ft,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Pe),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,me),M.deleteBuffer(Pe),M.deleteSync(ft),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,Q=0){w.isTexture!==!0&&(vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const te=Math.pow(2,-Q),V=Math.floor(w.image.width*te),me=Math.floor(w.image.height*te),ye=k!==null?k.x:0,Ce=k!==null?k.y:0;S.setTexture2D(w,0),M.copyTexSubImage2D(M.TEXTURE_2D,Q,0,0,ye,Ce,V,me),J.unbindTexture()},this.copyTextureToTexture=function(w,k,Q=null,te=null,V=0){w.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,w=arguments[1],k=arguments[2],V=arguments[3]||0,Q=null);let me,ye,Ce,Re,Be,ke;Q!==null?(me=Q.max.x-Q.min.x,ye=Q.max.y-Q.min.y,Ce=Q.min.x,Re=Q.min.y):(me=w.image.width,ye=w.image.height,Ce=0,Re=0),te!==null?(Be=te.x,ke=te.y):(Be=0,ke=0);const Pe=Ve.convert(k.format),ot=Ve.convert(k.type);S.setTexture2D(k,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,k.unpackAlignment);const ft=M.getParameter(M.UNPACK_ROW_LENGTH),_t=M.getParameter(M.UNPACK_IMAGE_HEIGHT),en=M.getParameter(M.UNPACK_SKIP_PIXELS),tt=M.getParameter(M.UNPACK_SKIP_ROWS),Le=M.getParameter(M.UNPACK_SKIP_IMAGES),Pt=w.isCompressedTexture?w.mipmaps[V]:w.image;M.pixelStorei(M.UNPACK_ROW_LENGTH,Pt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Pt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Ce),M.pixelStorei(M.UNPACK_SKIP_ROWS,Re),w.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,V,Be,ke,me,ye,Pe,ot,Pt.data):w.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,V,Be,ke,Pt.width,Pt.height,Pe,Pt.data):M.texSubImage2D(M.TEXTURE_2D,V,Be,ke,me,ye,Pe,ot,Pt),M.pixelStorei(M.UNPACK_ROW_LENGTH,ft),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,_t),M.pixelStorei(M.UNPACK_SKIP_PIXELS,en),M.pixelStorei(M.UNPACK_SKIP_ROWS,tt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Le),V===0&&k.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(w,k,Q=null,te=null,V=0){w.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,te=arguments[1]||null,w=arguments[2],k=arguments[3],V=arguments[4]||0);let me,ye,Ce,Re,Be,ke,Pe,ot,ft;const _t=w.isCompressedTexture?w.mipmaps[V]:w.image;Q!==null?(me=Q.max.x-Q.min.x,ye=Q.max.y-Q.min.y,Ce=Q.max.z-Q.min.z,Re=Q.min.x,Be=Q.min.y,ke=Q.min.z):(me=_t.width,ye=_t.height,Ce=_t.depth,Re=0,Be=0,ke=0),te!==null?(Pe=te.x,ot=te.y,ft=te.z):(Pe=0,ot=0,ft=0);const en=Ve.convert(k.format),tt=Ve.convert(k.type);let Le;if(k.isData3DTexture)S.setTexture3D(k,0),Le=M.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)S.setTexture2DArray(k,0),Le=M.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,k.unpackAlignment);const Pt=M.getParameter(M.UNPACK_ROW_LENGTH),nt=M.getParameter(M.UNPACK_IMAGE_HEIGHT),mn=M.getParameter(M.UNPACK_SKIP_PIXELS),Ji=M.getParameter(M.UNPACK_SKIP_ROWS),tn=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,_t.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,_t.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Re),M.pixelStorei(M.UNPACK_SKIP_ROWS,Be),M.pixelStorei(M.UNPACK_SKIP_IMAGES,ke),w.isDataTexture||w.isData3DTexture?M.texSubImage3D(Le,V,Pe,ot,ft,me,ye,Ce,en,tt,_t.data):k.isCompressedArrayTexture?M.compressedTexSubImage3D(Le,V,Pe,ot,ft,me,ye,Ce,en,_t.data):M.texSubImage3D(Le,V,Pe,ot,ft,me,ye,Ce,en,tt,_t),M.pixelStorei(M.UNPACK_ROW_LENGTH,Pt),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,nt),M.pixelStorei(M.UNPACK_SKIP_PIXELS,mn),M.pixelStorei(M.UNPACK_SKIP_ROWS,Ji),M.pixelStorei(M.UNPACK_SKIP_IMAGES,tn),V===0&&k.generateMipmaps&&M.generateMipmap(Le),J.unbindTexture()},this.initRenderTarget=function(w){K.get(w).__webglFramebuffer===void 0&&S.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),J.unbindTexture()},this.resetState=function(){U=0,D=0,R=null,J.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ic?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===Ko?"display-p3":"srgb"}}class dy extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zc extends Zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uo=new Y,No=new Y,Cf=new gt,Yr=new xd,no=new Zo,qa=new Y,Rf=new Y;class Id extends Rt{constructor(e=new pn,t=new zc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Uo.fromBufferAttribute(t,r-1),No.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Uo.distanceTo(No);e.setAttribute("lineDistance",new an(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(r),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;Cf.copy(r).invert(),Yr.copy(e.ray).applyMatrix4(Cf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const m=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let v=m,d=_-1;v<d;v+=u){const f=c.getX(v),A=c.getX(v+1),x=io(this,e,Yr,l,f,A);x&&t.push(x)}if(this.isLineLoop){const v=c.getX(_-1),d=c.getX(m),f=io(this,e,Yr,l,v,d);f&&t.push(f)}}else{const m=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=m,d=_-1;v<d;v+=u){const f=io(this,e,Yr,l,v,v+1);f&&t.push(f)}if(this.isLineLoop){const v=io(this,e,Yr,l,_-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function io(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Uo.fromBufferAttribute(o,r),No.fromBufferAttribute(o,s),t.distanceSqToSegment(Uo,No,qa,Rf)>i)return;qa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(qa);if(!(l<e.near||l>e.far))return{distance:l,point:Rf.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}class kc extends pn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],p=[],h=[],m=[];let _=0;const v=[],d=i/2;let f=0;A(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new an(p,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(m,2));function A(){const T=new Y,U=new Y;let D=0;const R=(t-e)/i;for(let z=0;z<=s;z++){const se=[],y=z/s,E=y*(t-e)+e;for(let I=0;I<=r;I++){const F=I/r,H=F*l+a,P=Math.sin(H),N=Math.cos(H);U.x=E*P,U.y=-y*i+d,U.z=E*N,p.push(U.x,U.y,U.z),T.set(P,R,N).normalize(),h.push(T.x,T.y,T.z),m.push(F,1-y),se.push(_++)}v.push(se)}for(let z=0;z<r;z++)for(let se=0;se<s;se++){const y=v[se][z],E=v[se+1][z],I=v[se+1][z+1],F=v[se][z+1];e>0&&(c.push(y,E,F),D+=3),t>0&&(c.push(E,I,F),D+=3)}u.addGroup(f,D,0),f+=D}function x(T){const U=_,D=new et,R=new Y;let z=0;const se=T===!0?e:t,y=T===!0?1:-1;for(let I=1;I<=r;I++)p.push(0,d*y,0),h.push(0,y,0),m.push(.5,.5),_++;const E=_;for(let I=0;I<=r;I++){const H=I/r*l+a,P=Math.cos(H),N=Math.sin(H);R.x=se*N,R.y=d*y,R.z=se*P,p.push(R.x,R.y,R.z),h.push(0,y,0),D.x=P*.5+.5,D.y=N*.5*y+.5,m.push(D.x,D.y),_++}for(let I=0;I<r;I++){const F=U+I,H=E+I;T===!0?c.push(H,H+1,F):c.push(H+1,H,F),z+=3}u.addGroup(f,z,T===!0?1:2),f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class py extends Zi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class my extends Zi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pd,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ud extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ya=new gt,Pf=new Y,Lf=new Y;class gy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fc,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pf),Lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lf),t.updateMatrixWorld(),Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _y extends gy{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vy extends Ud{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new _y}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xy extends Ud{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Df=new Y;let ro,ja;class My extends Rt{constructor(e=new Y(0,0,1),t=new Y(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",ro===void 0&&(ro=new pn,ro.setAttribute("position",new an([0,0,0,0,1,0],3)),ja=new kc(0,.5,1,5,1),ja.translate(0,-.5,0)),this.position.copy(t),this.line=new Id(ro,new zc({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new fn(ja,new Nc({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Df.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Df,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bc);const Ft=32,pr=new Y(16,16,16);class Sy{constructor(){It(this,"renderer");It(this,"scene",new dy);It(this,"camera");It(this,"group",new Qr);It(this,"sun",new vy(16777215,1));It(this,"ambient",new xy(16777215,.35));It(this,"ground");It(this,"arrow",new My);It(this,"guide");It(this,"rt",new Mi(Ft,Ft));It(this,"cam",{yawDeg:0,pitchDeg:12,orthoScale:1,offsetX:0,offsetY:0,objYawDeg:0,objPitchDeg:0,objRollDeg:0,locked:!1});It(this,"lightCfg",{azimuthDeg:-35,elevationDeg:55,intensity:1,ambient:.35,shadowEnabled:!0,shadowStrength:.55,shadowSoftness:.5});It(this,"container",null);It(this,"ro",null);It(this,"objectMats",[]);this.renderer=new hy({antialias:!1,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tc,this.camera=new Oc(-16,16,16,-16,.1,400),this.scene.add(this.group,this.sun,this.sun.target,this.ambient,this.arrow);const e=new ws(Ft*2,Ft*2);e.rotateX(-Math.PI/2),this.ground=new fn(e,new py({opacity:.55})),this.ground.receiveShadow=!0,this.ground.position.set(16,0,16),this.scene.add(this.ground);const t=new pn().setFromPoints([new Y,new Y]);this.guide=new Id(t,new zc({color:16511542})),this.scene.add(this.guide),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);const i=this.sun.shadow.camera;i.left=-28,i.right=28,i.top=28,i.bottom=-28,i.far=200,this.sun.shadow.bias=-.002,this.applyLight(),this.applyCamera()}mount(e){this.container=e,e.appendChild(this.renderer.domElement),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize()}unmount(){var e,t;(e=this.ro)==null||e.disconnect(),this.ro=null,this.renderer.domElement.parentElement===this.container&&((t=this.container)==null||t.removeChild(this.renderer.domElement)),this.container=null}dispose(){this.unmount(),this.rt.dispose(),this.renderer.dispose()}resize(){if(!this.container)return;const e=this.container.clientWidth,t=this.container.clientHeight;this.renderer.setSize(e,t,!1);const i=e/t,r=16*this.cam.orthoScale;i>=1?this.setFrustum(-r*i,r*i,r,-r):this.setFrustum(-r,r,r/i,-r/i),this.renderOnce()}setFrustum(e,t,i,r){this.camera.left=e,this.camera.right=t,this.camera.top=i,this.camera.bottom=r,this.camera.updateProjectionMatrix()}setForm(e){if(this.group.clear(),this.objectMats=[],e)for(const t of e.meshes){const i=t.positions.map(a=>a-16),r=new pn;r.setAttribute("position",new an(i,3)),r.setIndex(t.faces.flat()),r.computeVertexNormals();const s=new my({color:16777215,flatShading:!0}),o=new fn(r,s);o.castShadow=!0,o.receiveShadow=!1,this.objectMats.push(s),this.group.add(o)}this.renderOnce()}setGroundY(e){this.ground.position.y=e,this.renderOnce()}setLight(e){this.lightCfg={...e},this.applyLight(),this.renderOnce()}setCamera(e){this.cam={...e},this.applyCamera(),this.resize()}getCamera(){return{...this.cam}}lightDir(){const e=wi.degToRad(this.lightCfg.azimuthDeg),t=wi.degToRad(this.lightCfg.elevationDeg);return new Y(Math.cos(t)*Math.sin(e),Math.sin(t),Math.cos(t)*Math.cos(e))}applyLight(){const e=this.lightDir();this.sun.position.copy(pr).addScaledVector(e,80),this.sun.target.position.copy(pr),this.sun.intensity=this.lightCfg.intensity,this.sun.castShadow=this.lightCfg.shadowEnabled,this.sun.shadow.radius=1+this.lightCfg.shadowSoftness*8,this.ambient.intensity=this.lightCfg.ambient,this.ground.material.opacity=this.lightCfg.shadowStrength,this.arrow.position.copy(pr),this.arrow.setDirection(e),this.arrow.setLength(14,3,2),this.arrow.setColor(new Ke(16511542));const t=new Y(pr.x,this.ground.position.y+.05,pr.z),i=new Y(-e.x,0,-e.z);i.lengthSq()>1e-6&&i.normalize();const r=t.clone().addScaledVector(i,12);this.guide.geometry.setFromPoints([t,r])}applyCamera(){const e=this.cam,t=wi.degToRad(e.yawDeg),i=wi.degToRad(e.pitchDeg),s=new Y(Math.cos(i)*Math.sin(t),Math.sin(i),Math.cos(i)*Math.cos(t)).multiplyScalar(120).add(new Y(16+e.offsetX,16+e.offsetY,16));this.camera.position.copy(s),this.camera.up.set(0,1,0),this.camera.lookAt(16+e.offsetX,16+e.offsetY,16),this.group.rotation.set(wi.degToRad(e.objPitchDeg),wi.degToRad(e.objYawDeg),wi.degToRad(e.objRollDeg)),this.group.position.copy(pr)}renderOnce(){this.renderPasses(!1)}lightScreenDir(){const e=this.lightDir(),t=new Y().setFromMatrixColumn(this.camera.matrixWorld,0),i=new Y().setFromMatrixColumn(this.camera.matrixWorld,1);return{x:e.dot(t),y:-e.dot(i)}}renderPasses(e){const t=this.renderer.getRenderTarget(),i=!e;if(this.arrow.visible=i,this.guide.visible=i,!e)return this.ground.visible=!0,this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(t),null;this.ground.visible=!1,this.renderer.setRenderTarget(this.rt),this.renderer.setClearColor(0,0),this.renderer.clear(),this.renderer.render(this.scene,this.camera);const r=new Uint8Array(Ft*Ft*4);this.renderer.readRenderTargetPixels(this.rt,0,0,Ft,Ft,r),this.ground.visible=!0;for(const a of this.objectMats)a.colorWrite=!1;this.renderer.clear(),this.renderer.render(this.scene,this.camera);const s=new Uint8Array(Ft*Ft*4);this.renderer.readRenderTargetPixels(this.rt,0,0,Ft,Ft,s);const o=new Uint8Array(Ft*Ft);for(let a=0;a<Ft*Ft;a++)o[a]=s[a*4+3];for(const a of this.objectMats)a.colorWrite=!0;return this.arrow.visible=!0,this.guide.visible=!0,this.renderer.setRenderTarget(t),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera),{rgba:r,shadowAlpha:o,lightScreen:this.lightScreenDir()}}renderSprite32(){if(!this.objectMats.length)return null;this.setFrustum(-16*this.cam.orthoScale,16*this.cam.orthoScale,16*this.cam.orthoScale,-16*this.cam.orthoScale);const e=this.renderPasses(!0);return this.resize(),e}}let so=null;function Qo(){return so||(so=new Sy),window.__pixelLabScene=so,so}function Nd(n,e,t,i,r){const s=document.createElement("canvas");s.width=le,s.height=le,s.getContext("2d").putImageData(new ImageData(new Uint8ClampedArray(e),le,le),0,0),n.imageSmoothingEnabled=!1,n.drawImage(s,t,i,le*r,le*r)}function yy(n,e,t){const i=e.getBoundingClientRect(),r=(n.clientX-i.left)*(e.width/i.width),s=(n.clientY-i.top)*(e.height/i.height),o=Math.floor((r-t.x)/t.zoom),a=Math.floor((s-t.y)/t.zoom);return o<0||o>=le||a<0||a>=le?null:{x:o,y:a}}const Ey={class:"preview-pane"},by={class:"pv-label"},Ty={class:"pv-toggles"},kr=yi({__name:"PreviewPane",setup(n){const e=at(null),t=at(!1),i=at("transparent"),r=at(!1),s=typeof matchMedia=="function"&&matchMedia("(max-width: 520px)").matches,o=Zt(()=>Ki()),a=Zt(()=>t.value?le:s?le*2:le*3);function l(){var p;const c=o.value;if(!c)return null;if(c.levels){const h=c.shadowAlpha?Uint8Array.from(c.shadowAlpha):null;return gs(Int16Array.from(c.levels),{nLevels:c.grayLevels,material:r.value?null:$i(c.materialId),shadowAlpha:h,background:i.value,ramp:(p=c.rampOverrides)==null?void 0:p[c.materialId]})}if(c.sketch){const h=new Uint8ClampedArray(Et*4);for(let m=0;m<Et;m++){if(!c.sketch.silhouette[m])continue;const[_,v,d]=ys("#9badb7");h[m*4]=_,h[m*4+1]=v,h[m*4+2]=d,h[m*4+3]=255}return h}return null}Bp(()=>{var m,_,v,d,f;const c=e.value;if(!c)return;c.width=a.value,c.height=a.value;const p=c.getContext("2d");p.clearRect(0,0,c.width,c.height);const h=l();h&&Nd(p,h,0,0,a.value/le),(m=o.value)==null||m.levels,(_=o.value)==null||_.shadowAlpha,(d=(v=o.value)==null?void 0:v.sketch)==null||d.silhouette,(f=o.value)==null||f.materialId,r.value,i.value});function u(){i.value=i.value==="transparent"?"dark":i.value==="dark"?"light":"transparent"}return(c,p)=>(Ge(),Xe("div",Ey,[j("canvas",{ref_key:"canvas",ref:e},null,512),j("div",by,je(t.value?"1:1":"3x")+" actual output",1),j("div",Ty,[j("button",{class:Tt({on:t.value}),onClick:p[0]||(p[0]=h=>t.value=!t.value),title:"1:1 pixels"},"1:1",2),j("button",{onClick:u,title:"background"},"BG"),j("button",{class:Tt({on:r.value}),onClick:p[1]||(p[1]=h=>r.value=!r.value),title:"grayscale"},"G",2)])]))}}),Ay={class:"workspace"},wy={class:"tool-row",style:{position:"absolute",bottom:"0",left:"0",right:"0","border-top":"1px solid var(--line)","border-bottom":"none"}},Cy=["disabled"],Ry=["disabled"],Py=["onClick"],Ly={key:0,class:"notice"},Dy=yi({__name:"SceneView",setup(n){const e=at(null);let t,i,r=!0,s=0;const o=new Map;function a(E){return(Math.imul(E,2654435761)>>>0)/4294967296}function l(E){let I=o.get(E);if(I)return I;I=document.createElement("canvas"),I.width=le,I.height=le;const F=I.getContext("2d"),H=F.createImageData(le,le),P={grass:["#6abe30","#6abe30","#37946e","#4b692f","#6abe30"],dirt:["#8f563b","#8f563b","#663931","#d9a066","#8f563b"],stone:["#696a6a","#847e87","#595652","#696a6a","#9badb7"]},N=P[E]??P.grass;for(let G=0;G<le*le;G++){const[B,fe,he]=ys(N[Math.floor(a(G*7+E.length)*N.length)]);H.data[G*4]=B,H.data[G*4+1]=fe,H.data[G*4+2]=he,H.data[G*4+3]=255}return F.putImageData(H,0,0),o.set(E,I),I}const u=new Map;function c(E){var N;const I=we.project.assets[E];if(!(I!=null&&I.levels))return null;const F=`${E}:${I.updatedAt}`;let H=u.get(F);if(H)return H;const P=gs(Int16Array.from(I.levels),{nLevels:I.grayLevels,material:$i(I.materialId),shadowAlpha:I.shadowAlpha?Uint8Array.from(I.shadowAlpha):null,background:"transparent",ramp:(N=I.rampOverrides)==null?void 0:N[I.materialId]});return H=document.createElement("canvas"),H.width=le,H.height=le,H.getContext("2d").putImageData(new ImageData(P,le,le),0,0),u.size>200&&u.clear(),u.set(F,H),H}function p(){r=!1;const E=we.project.scene,I=t.width,F=t.height;i.fillStyle="#0d0e10",i.fillRect(0,0,I,F);const H=E.view.zoom,P=le*H;for(let N=0;N<E.rows;N++)for(let G=0;G<E.cols;G++)i.drawImage(l(E.tiles[N*E.cols+G]??"grass"),E.view.x+G*P,E.view.y+N*P,P,P);if(E.showGrid){i.strokeStyle="rgba(255,255,255,0.08)",i.lineWidth=1;for(let N=0;N<=E.cols;N++)i.beginPath(),i.moveTo(E.view.x+N*P,E.view.y),i.lineTo(E.view.x+N*P,E.view.y+E.rows*P),i.stroke();for(let N=0;N<=E.rows;N++)i.beginPath(),i.moveTo(E.view.x,E.view.y+N*P),i.lineTo(E.view.x+E.cols*P,E.view.y+N*P),i.stroke()}for(const N of E.placements){const G=c(N.assetId);G&&(i.drawImage(G,E.view.x+N.tx*P,E.view.y+N.ty*P,P,P),we.selectedPlacementId===N.id&&(i.strokeStyle="#5fcde4",i.lineWidth=2,i.strokeRect(E.view.x+N.tx*P+1,E.view.y+N.ty*P+1,P-2,P-2)))}}function h(){r&&p(),s=requestAnimationFrame(h)}const m=new Map;let _=null,v=!1,d=!1,f=0,A=1;function x(E){const I=t.getBoundingClientRect();return{x:(E.clientX-I.left)*(t.width/I.width),y:(E.clientY-I.top)*(t.height/I.height)}}function T(E,I){const F=we.project.scene,H=Math.floor((E-F.view.x)/(le*F.view.zoom)),P=Math.floor((I-F.view.y)/(le*F.view.zoom));return H<0||H>=F.cols||P<0||P>=F.rows?null:{x:H,y:P}}function U(E,I){const F=we.project.scene,H=T(E,I);return H?F.placements.find(P=>P.tx===H.x&&P.ty===H.y)??null:null}function D(E){t.setPointerCapture(E.pointerId);const I=x(E);if(m.set(E.pointerId,I),d=!1,m.size===2){const[H,P]=[...m.values()];f=Math.hypot(H.x-P.x,H.y-P.y),A=we.project.scene.view.zoom,(H.x+P.x)/2,(H.y+P.y)/2,_=null,v=!1;return}const F=U(I.x,I.y);F?(_=F.id,we.selectedPlacementId=F.id):v=!0,r=!0}function R(E){if(!m.has(E.pointerId))return;const I=x(E),F=m.get(E.pointerId);m.set(E.pointerId,I);const H=we.project.scene;if(m.size===2){const[G,B]=[...m.values()],fe=Math.hypot(G.x-B.x,G.y-B.y);if(f>0){const he=Math.min(6,Math.max(.4,A*(fe/f))),ge={x:(G.x+B.x)/2,y:(G.y+B.y)/2};H.view.x=ge.x-(ge.x-H.view.x)*he/H.view.zoom,H.view.y=ge.y-(ge.y-H.view.y)*he/H.view.zoom,H.view.zoom=he}r=!0;return}const P=I.x-F.x,N=I.y-F.y;if(Math.abs(P)+Math.abs(N)>1&&(d=!0),_){const G=T(I.x,I.y);if(G){const B=H.placements.find(fe=>fe.id===_);B&&(B.tx!==G.x||B.ty!==G.y)&&(B.tx=G.x,B.ty=G.y)}}else v&&(H.view.x+=P,H.view.y+=N);r=!0}function z(E){const I=x(E);if(we.project.scene,m.size===1&&!d)if(we.placingAssetId){const F=T(I.x,I.y);F&&(pl(we.placingAssetId,F.x,F.y),we.placingAssetId=null)}else{const F=U(I.x,I.y);we.selectedPlacementId=(F==null?void 0:F.id)??null}m.delete(E.pointerId),m.size<2&&(f=0),m.size===0&&(_=null,v=!1),r=!0}ji(()=>{var H;t=document.createElement("canvas"),e.value.appendChild(t),i=t.getContext("2d");const E=()=>{t.width=e.value.clientWidth*devicePixelRatio,t.height=e.value.clientHeight*devicePixelRatio,r=!0};E(),window.addEventListener("resize",E),t._fit=E,t.addEventListener("pointerdown",D),t.addEventListener("pointermove",R),t.addEventListener("pointerup",z),t.addEventListener("pointercancel",z);const I=we.project.scene;if(I.view.x===0&&I.view.y===0){const P=t.width,N=t.height;I.view.zoom=Math.min(P/(I.cols*le),N/(I.rows*le))*.9,I.view.x=(P-I.cols*le*I.view.zoom)/2,I.view.y=(N-I.rows*le*I.view.zoom)/2}h();const F=Qo();for(const P of we.project.scene.placements){const N=we.project.assets[P.assetId];N&&!N.levels&&((H=N.form)!=null&&H.meshes.length)&&(F.setForm(N.form),F.setGroundY(N.form.groundAnchor.y),F.setCamera(N.camera??Sr()),F.setLight(dl(N)),Ec(N,F))}r=!0}),Nr(()=>{cancelAnimationFrame(s),window.removeEventListener("resize",t._fit)});function se(){ed(),we.mode="sketch"}function y(E){we.placingAssetId=we.placingAssetId===E?null:E}return(E,I)=>(Ge(),Xe("div",Ay,[j("div",{ref_key:"host",ref:e,class:"canvas-host"},null,512),$t(kr),j("div",wy,[j("button",{class:"primary",onClick:se},"+ Create New"),j("button",{class:Tt({on:dt(we).project.scene.showGrid}),onClick:I[0]||(I[0]=F=>{dt(we).project.scene.showGrid=!dt(we).project.scene.showGrid,bt(r)?r.value=!0:r=!0})},"Grid",2),j("button",{disabled:!dt(we).selectedPlacementId,onClick:I[1]||(I[1]=F=>{dt(Hg)(dt(we).selectedPlacementId),bt(r)?r.value=!0:r=!0})},"Duplicate",8,Cy),j("button",{class:"danger",disabled:!dt(we).selectedPlacementId,onClick:I[2]||(I[2]=F=>{dt(kg)(dt(we).selectedPlacementId),bt(r)?r.value=!0:r=!0})},"Remove",8,Ry),I[3]||(I[3]=j("span",{style:{flex:"1"}},null,-1)),(Ge(!0),Xe(vt,null,Un(dt(we).project.order,F=>{var H;return Ge(),Xe("button",{key:F,class:Tt(["chip",{on:dt(we).placingAssetId===F}]),onClick:P=>y(F)},je((H=dt(we).project.assets[F])==null?void 0:H.name),11,Py)}),128))]),dt(we).placingAssetId?(Ge(),Xe("div",Ly,"Tap a tile to place the sprite")):Kt("",!0)]))}});function xr(n,e){const t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"});Fd(t,e)}function Fd(n,e){const t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,i.click(),setTimeout(()=>URL.revokeObjectURL(t),4e3)}function If(n,e){const t=document.createElement("canvas");t.width=le,t.height=le,t.getContext("2d").putImageData(new ImageData(new Uint8ClampedArray(n),le,le),0,0),t.toBlob(r=>r&&Fd(r,e),"image/png")}function Od(){return new Promise(n=>{const e=document.createElement("input");e.type="file",e.accept="application/json,.json",e.onchange=async()=>{var i;const t=(i=e.files)==null?void 0:i[0];if(!t)return n(null);try{n(JSON.parse(await t.text()))}catch{n(null)}},e.oncancel=()=>n(null),e.click()})}const Iy={class:"workspace"},Uy={class:"sketch-top"},Ny=["disabled"],Fy=["disabled"],Oy={class:"tool-row",style:{position:"absolute",top:"46px",left:"0",right:"0"}},By=["onClick"],zy=["onClick"],ky=["src"],Hy=["onClick"],Vy=["src"],Gy={class:"bottom-bar",style:{position:"absolute",bottom:"0",left:"0",right:"0"}},Wy={key:1,class:"notice err"},Xy={key:2,class:"sheet"},$y={class:"sheet-body"},qy={class:"ctl-row"},Yy={class:"ctl-row"},jy={class:"val"},Ky={class:"ctl-row"},Zy={class:"val"},Jy={key:0,class:"hint"},Qy=yi({__name:"SketchView",setup(n){const e=at(null);let t,i,r=!0,s=0;const o=Zt(()=>Ki()),a=at(!1),l=at(null),u=at(200),c=at("pencil"),p=[{id:"pencil",label:"Pencil"},{id:"eraser",label:"Eraser"},{id:"fill",label:"Fill"},{id:"line",label:"Line"},{id:"silhouette",label:"Silhouette"},{id:"height",label:"Height"},{id:"edge",label:"Edge"},{id:"anchor",label:"Anchor"}],h={x:40,y:40,zoom:12},m=[],_=[],v=at(0),d=at(0);function f(){const b=o.value.sketch;return{sil:[...b.silhouette],hh:b.heightHints?[...b.heightHints]:null,eh:b.edgeHints?[...b.edgeHints]:null}}function A(){m.push(f()),m.length>60&&m.shift(),_.length=0,v.value=m.length,d.value=0}function x(){m.length&&(_.push(f()),U(m.pop()),v.value=m.length,d.value=_.length)}function T(){_.length&&(m.push(f()),U(_.pop()),v.value=m.length,d.value=_.length)}function U(b){const C=o.value.sketch;C.silhouette=[...b.sil],C.heightHints=b.hh?[...b.hh]:null,C.edgeHints=b.eh?[...b.eh]:null,os(C),pt(o.value),r=!0}function D(){const b=o.value.sketch;b.heightHints||(b.heightHints=new Array(1024).fill(0)),b.edgeHints||(b.edgeHints=new Array(1024).fill(0))}function R(b,C){const M=o.value.sketch,q=C*le+b;switch(c.value){case"pencil":M.silhouette[q]=1;break;case"eraser":M.silhouette[q]=0;break;case"silhouette":for(let W=-1;W<=1;W++)for(let $=-1;$<=1;$++){const J=b+$,ie=C+W;J>=0&&J<le&&ie>=0&&ie<le&&(M.silhouette[ie*le+J]=1)}break;case"height":D(),M.heightHints[q]=u.value;break;case"edge":D(),M.edgeHints[q]=1;break}}function z(b,C){const M=o.value.sketch,q=M.silhouette[C*le+b],W=q?0:1,$=[[b,C]],J=new Set;for(;$.length;){const[ie,K]=$.pop();if(ie<0||ie>=le||K<0||K>=le)continue;const S=K*le+ie;J.has(S)||M.silhouette[S]!==q||(J.add(S),M.silhouette[S]=W,$.push([ie-1,K],[ie+1,K],[ie,K-1],[ie,K+1]))}}let se=null;function y(b,C){const M=o.value.sketch;if(!se){M.silhouette[C*le+b]=1;return}let{x:q,y:W}=se;const $=Math.abs(b-q),J=Math.abs(C-W),ie=q<b?1:-1,K=W<C?1:-1;let S=$-J;for(;M.silhouette[W*le+q]=1,!(q===b&&W===C);){const g=2*S;g>-J&&(S-=J,q+=ie),g<$&&(S+=$,W+=K)}se=null}const E=new Map;let I=!1,F=0,H=1;function P(b){const C=t.getBoundingClientRect(),M=(b.clientX-C.left)*(t.width/C.width),q=(b.clientY-C.top)*(t.height/C.height),W=Math.floor((M-h.x)/h.zoom),$=Math.floor((q-h.y)/h.zoom);return W<0||W>=le||$<0||$>=le?null:{x:W,y:$}}function N(b){t.setPointerCapture(b.pointerId);const C={x:b.clientX,y:b.clientY};if(E.set(b.pointerId,C),E.size===2){const[q,W]=[...E.values()];F=Math.hypot(q.x-W.x,q.y-W.y),H=h.zoom,I=!1;return}const M=P(b);if(M){if(c.value==="anchor"){o.value.sketch.groundAnchor={x:M.x,y:M.y},pt(o.value),r=!0;return}if(A(),c.value==="fill"){z(M.x,M.y),os(o.value.sketch),pt(o.value),r=!0;return}if(c.value==="line"){se=M,I=!0;return}I=!0,R(M.x,M.y),r=!0}}function G(b){if(!E.has(b.pointerId))return;if(E.set(b.pointerId,{x:b.clientX,y:b.clientY}),E.size===2){const[M,q]=[...E.values()],W=Math.hypot(M.x-q.x,M.y-q.y);F>0&&(h.zoom=Math.min(40,Math.max(2,H*(W/F)))),r=!0;return}if(!I)return;const C=P(b);if(C){if(c.value==="line"){se=C,r=!0;return}R(C.x,C.y),r=!0}}function B(b){const C=P(b);I&&c.value==="line"&&C&&se&&y(C.x,C.y),E.delete(b.pointerId),E.size<2&&(F=0),E.size===0&&I&&(I=!1,os(o.value.sketch),pt(o.value)),r=!0}function fe(){var J,ie;r=!1;const b=o.value,C=t.width,M=t.height;if(i.fillStyle="#0d0e10",i.fillRect(0,0,C,M),!(b!=null&&b.sketch))return;const q=b.sketch,W=le*h.zoom;for(let K=0;K<le;K++)for(let S=0;S<le;S++)i.fillStyle=(S+K)%2?"#1a1c20":"#15171b",i.fillRect(h.x+S*h.zoom,h.y+K*h.zoom,h.zoom,h.zoom);for(let K=0;K<le;K++)for(let S=0;S<le;S++){const g=K*le+S,L=h.x+S*h.zoom,X=h.y+K*h.zoom;if(q.silhouette[g]){const[ee,Z,de]=ys("#9badb7");i.fillStyle=`rgb(${ee},${Z},${de})`,i.fillRect(L,X,h.zoom,h.zoom)}(J=q.heightHints)!=null&&J[g]&&(i.fillStyle=`rgba(251,242,54,${q.heightHints[g]/510})`,i.fillRect(L,X,h.zoom,h.zoom)),(ie=q.edgeHints)!=null&&ie[g]&&(i.strokeStyle="#5fcde4",i.lineWidth=2,i.strokeRect(L+1,X+1,h.zoom-2,h.zoom-2))}i.strokeStyle="rgba(255,255,255,0.07)",i.lineWidth=1;for(let K=0;K<=le;K++)i.beginPath(),i.moveTo(h.x+K*h.zoom,h.y),i.lineTo(h.x+K*h.zoom,h.y+W),i.stroke(),i.beginPath(),i.moveTo(h.x,h.y+K*h.zoom),i.lineTo(h.x+W,h.y+K*h.zoom),i.stroke();q.bounds&&(i.strokeStyle="#fbf236",i.setLineDash([4,3]),i.strokeRect(h.x+q.bounds.x*h.zoom,h.y+q.bounds.y*h.zoom,q.bounds.w*h.zoom,q.bounds.h*h.zoom),i.setLineDash([]));const $=q.groundAnchor;i.strokeStyle="#6abe30",i.lineWidth=2,i.beginPath(),i.moveTo(h.x,h.y+($.y+1)*h.zoom),i.lineTo(h.x+W,h.y+($.y+1)*h.zoom),i.stroke(),i.fillStyle="#6abe30",i.fillRect(h.x+$.x*h.zoom-3,h.y+($.y+1)*h.zoom-3,6,6)}function he(){r&&fe(),s=requestAnimationFrame(he)}ji(()=>{t=document.createElement("canvas"),e.value.appendChild(t),i=t.getContext("2d");const b=()=>{t.width=e.value.clientWidth*devicePixelRatio,t.height=e.value.clientHeight*devicePixelRatio,h.zoom=Math.min(t.width,t.height)/(le+4),h.x=(t.width-le*h.zoom)/2,h.y=(t.height-le*h.zoom)/2,r=!0};b(),window.addEventListener("resize",b),t._fit=b,t.addEventListener("pointerdown",N),t.addEventListener("pointermove",G),t.addEventListener("pointerup",B),t.addEventListener("pointercancel",B),he()}),Nr(()=>{cancelAnimationFrame(s),window.removeEventListener("resize",t._fit)});const ge=at(null),Ae=at(null),ze=Zt(()=>{var b;return((b=o.value)==null?void 0:b.references)??[]});function re(){var b;if(ze.value.length>=4){we.notice="Max 4 references";return}(b=ge.value)==null||b.click()}async function ue(b){const C=b.target.files;if(!(C!=null&&C.length)||!o.value)return;const M=o.value;M.references=[...M.references??[]];for(const q of[...C].slice(0,4-M.references.length))M.references.push(await Ee(q));pt(M),b.target.value=""}function Ee(b){return new Promise((C,M)=>{const q=new Image;q.onload=()=>{const $=Math.min(1,512/Math.max(q.width,q.height)),J=document.createElement("canvas");J.width=Math.round(q.width*$),J.height=Math.round(q.height*$),J.getContext("2d").drawImage(q,0,0,J.width,J.height),URL.revokeObjectURL(q.src),C(J.toDataURL("image/png"))},q.onerror=M,q.src=URL.createObjectURL(b)})}function Me(b){const C=o.value;C!=null&&C.references&&(C.references.splice(b,1),C.references.length||(C.references=void 0),pt(C))}function Oe(){const b=o.value;b!=null&&b.sketch&&xr(uo(b.sketch),`${b.name.replace(/\s+/g,"-")}-sketch.json`)}async function De(){l.value=null;const b=await Od();if(b==null)return;const{sketch:C,errors:M}=wg(b);if(!C){l.value=M.join(`
`);return}o.value.sketch=C,pt(o.value),r=!0}function Ye(){const b=o.value;if(!b.form){const C=td(b);if(C){l.value=C;return}}we.mode="form"}return(b,C)=>(Ge(),Xe("div",Iy,[j("div",{ref_key:"host",ref:e,class:"canvas-host"},null,512),$t(kr),j("div",Uy,[_r(j("input",{class:"asset-name","onUpdate:modelValue":C[0]||(C[0]=M=>o.value.name=M),onInput:C[1]||(C[1]=M=>dt(pt)(o.value))},null,544),[[Zr,o.value.name]]),j("button",{onClick:x,disabled:!v.value,title:"Undo"},"↩",8,Ny),j("button",{onClick:T,disabled:!d.value,title:"Redo"},"↪",8,Fy)]),j("div",Oy,[(Ge(),Xe(vt,null,Un(p,M=>j("button",{key:M.id,class:Tt({on:c.value===M.id}),onClick:q=>c.value=M.id},je(M.label),11,By)),64))]),j("div",{class:Tt(["ref-strip",{empty:!ze.value.length}])},[ze.value.length?(Ge(),Xe(vt,{key:0},[(Ge(!0),Xe(vt,null,Un(ze.value,(M,q)=>(Ge(),Xe("div",{key:q,class:"ref-thumb",onClick:W=>Ae.value=q},[j("img",{src:M,alt:"reference"},null,8,ky),j("button",{class:"ref-x",onClick:pg(W=>Me(q),["stop"])},"×",8,Hy)],8,zy))),128)),ze.value.length<4?(Ge(),Xe("button",{key:0,class:"ref-add small",onClick:re},"＋")):Kt("",!0)],64)):(Ge(),Xe("button",{key:1,class:"ref-add",onClick:re},"＋ Reference (optional)"))],2),j("input",{ref_key:"refFile",ref:ge,type:"file",accept:"image/*",multiple:"",hidden:"",onChange:ue},null,544),Ae.value!=null?(Ge(),Xe("div",{key:0,class:"ref-overlay",onClick:C[2]||(C[2]=M=>Ae.value=null)},[j("img",{src:ze.value[Ae.value],alt:"reference enlarged"},null,8,Vy)])):Kt("",!0),j("div",Gy,[j("button",{onClick:C[3]||(C[3]=M=>dt(we).mode="scene")},"← Scene"),j("button",{onClick:Oe},"Export sketch"),j("button",{onClick:De},"Import"),j("button",{class:Tt({on:a.value}),onClick:C[4]||(C[4]=M=>a.value=!a.value)},"⚙",2),C[11]||(C[11]=j("span",{class:"spacer"},null,-1)),j("button",{class:"primary",onClick:Ye},"Generate 3D Form →")]),l.value?(Ge(),Xe("div",Wy,je(l.value),1)):Kt("",!0),a.value?(Ge(),Xe("div",Xy,[j("div",{class:"sheet-handle",onClick:C[5]||(C[5]=M=>a.value=!1)},"Sketch settings — tap to close"),j("div",$y,[j("div",qy,[C[12]||(C[12]=j("label",null,"Object type",-1)),_r(j("input",{type:"text","onUpdate:modelValue":C[6]||(C[6]=M=>o.value.sketch.objectType=M),onInput:C[7]||(C[7]=M=>dt(pt)(o.value))},null,544),[[Zr,o.value.sketch.objectType]])]),j("div",Yy,[j("label",null,[C[13]||(C[13]=Ot("Depth hint ",-1)),j("span",jy,je(o.value.sketch.depthHint.toFixed(2)),1)]),_r(j("input",{type:"range",min:"0.1",max:"1",step:"0.05","onUpdate:modelValue":C[8]||(C[8]=M=>o.value.sketch.depthHint=M),onInput:C[9]||(C[9]=M=>dt(pt)(o.value))},null,544),[[Zr,o.value.sketch.depthHint,void 0,{number:!0}]])]),j("div",Ky,[j("label",null,[C[14]||(C[14]=Ot("Height hint value ",-1)),j("span",Zy,je(u.value),1)]),_r(j("input",{type:"range",min:"32",max:"255",step:"8","onUpdate:modelValue":C[10]||(C[10]=M=>u.value=M)},null,512),[[Zr,u.value,void 0,{number:!0}]])]),o.value.sketch.bounds?(Ge(),Xe("div",Jy," Bounds: "+je(o.value.sketch.bounds.w)+"x"+je(o.value.sketch.bounds.h)+" at ("+je(o.value.sketch.bounds.x)+","+je(o.value.sketch.bounds.y)+") · Anchor: ("+je(o.value.sketch.groundAnchor.x)+","+je(o.value.sketch.groundAnchor.y)+") ",1)):Kt("",!0)])])):Kt("",!0)]))}}),eE={class:"workspace"},tE={class:"tool-row",style:{position:"absolute",top:"0",left:"0",right:"0"}},nE={class:"bottom-bar",style:{position:"absolute",bottom:"0",left:"0",right:"0"}},iE=["disabled"],rE=["disabled"],sE={key:0,class:"notice err"},oE=yi({__name:"FormView",setup(n){const e=at(null),t=at(null),i=at(!1),r=Zt(()=>Ki()),s=Qo();function o(){var T;const x=r.value;s.setForm((x==null?void 0:x.form)??null),s.setGroundY(x!=null&&x.form?x.form.groundAnchor.y:Mc(((T=x==null?void 0:x.sketch)==null?void 0:T.groundAnchor.y)??31)),s.setCamera((x==null?void 0:x.camera)??Sr()),s.setLight((x==null?void 0:x.light)??we.project.sharedLight)}const a=new Map;let l=0,u=1;function c(x){if(s.renderer.domElement.setPointerCapture(x.pointerId),a.set(x.pointerId,{x:x.clientX,y:x.clientY}),a.size===2){const[U,D]=[...a.values()];l=Math.hypot(U.x-D.x,U.y-D.y),u=s.getCamera().orthoScale}}function p(x){if(!a.has(x.pointerId))return;const T=a.get(x.pointerId);a.set(x.pointerId,{x:x.clientX,y:x.clientY});const U=s.getCamera();if(a.size===2){const[z,se]=[...a.values()],y=Math.hypot(z.x-se.x,z.y-se.y);l>0&&(U.orthoScale=Math.min(4,Math.max(.25,u*(l/y)))),s.setCamera(U);return}const D=x.clientX-T.x,R=x.clientY-T.y;i.value?(U.objYawDeg=(U.objYawDeg+D*.5)%360,U.objPitchDeg=Math.max(-89,Math.min(89,U.objPitchDeg-R*.5))):(U.yawDeg=(U.yawDeg+D*.5)%360,U.pitchDeg=Math.max(-85,Math.min(85,U.pitchDeg+R*.5))),s.setCamera(U)}function h(x){a.delete(x.pointerId),a.size<2&&(l=0);const T=r.value;T&&(T.camera=s.getCamera(),pt(T))}ji(()=>{s.mount(e.value),o();const x=s.renderer.domElement;x.addEventListener("pointerdown",c),x.addEventListener("pointermove",p),x.addEventListener("pointerup",h),x.addEventListener("pointercancel",h)}),Nr(()=>{const x=s.renderer.domElement;x.removeEventListener("pointerdown",c),x.removeEventListener("pointermove",p),x.removeEventListener("pointerup",h),x.removeEventListener("pointercancel",h),s.unmount()});function m(x){const T={...Sr(),...s.getCamera()};x==="front"&&(T.yawDeg=0,T.pitchDeg=4),x==="iso"&&(T.yawDeg=-35,T.pitchDeg=28),x==="top"&&(T.yawDeg=0,T.pitchDeg=85),x==="left"&&(T.yawDeg=-90,T.pitchDeg=8),s.setCamera(T)}function _(){s.setCamera(Sr())}function v(){t.value=null;const x=r.value;if(!x)return;const T=td(x);if(T){t.value=T;return}s.setForm(x.form),s.setGroundY(x.form.groundAnchor.y)}function d(){const x=r.value;x!=null&&x.form&&xr(fo(x.form),`${x.name.replace(/\s+/g,"-")}-form.json`)}async function f(){t.value=null;const x=await Od();if(x==null)return;const{form:T,errors:U}=Cg(x);if(!T){t.value=U.join(`
`);return}const D=r.value;D.form=T,D.formSource="import",pt(D),s.setForm(T),s.setGroundY(T.groundAnchor.y)}function A(){const x=r.value;x&&(x.camera={...s.getCamera(),locked:!0},pt(x),we.mode="light")}return(x,T)=>{var U,D;return Ge(),Xe("div",eE,[j("div",{ref_key:"host",ref:e,class:"canvas-host"},null,512),$t(kr),j("div",tE,[j("button",{onClick:T[0]||(T[0]=R=>m("front"))},"Front"),j("button",{onClick:T[1]||(T[1]=R=>m("iso"))},"Iso"),j("button",{onClick:T[2]||(T[2]=R=>m("top"))},"Top"),j("button",{onClick:T[3]||(T[3]=R=>m("left"))},"Left"),j("button",{onClick:_},"Reset"),j("button",{class:Tt({on:i.value}),onClick:T[4]||(T[4]=R=>i.value=!i.value)},je(i.value?"Object":"Camera"),3)]),j("div",nE,[j("button",{onClick:v},"Generate"),j("button",{onClick:f},"Import form"),j("button",{disabled:!((U=r.value)!=null&&U.form),onClick:d},"Export form",8,iE),T[5]||(T[5]=j("span",{class:"spacer"},null,-1)),j("button",{class:"primary",disabled:!((D=r.value)!=null&&D.form),onClick:A},"Set Final View →",8,rE)]),t.value?(Ge(),Xe("div",sE,je(t.value),1)):Kt("",!0)])}}}),aE={class:"workspace"},lE={class:"sheet",style:{position:"absolute",bottom:"64px"}},cE={class:"sheet-body",style:{"max-height":"42vh"}},uE={class:"ctl-row"},fE=["checked"],hE={class:"ctl-grid"},dE={class:"ctl-row"},pE={class:"val"},mE=["value"],gE={class:"ctl-row"},_E={class:"val"},vE=["value"],xE={class:"ctl-row"},ME={class:"val"},SE=["value"],yE={class:"ctl-row"},EE={class:"val"},bE=["value"],TE={class:"ctl-row"},AE={class:"val"},wE=["checked"],CE={class:"ctl-row"},RE={class:"val"},PE=["value"],LE={class:"ctl-row"},DE={class:"val"},IE=["value"],UE={class:"ctl-row"},NE={class:"chip-list"},FE=["onClick"],OE={key:0,class:"ctl-grid"},BE={class:"ctl-row"},zE={class:"val"},kE=["value"],HE={class:"ctl-row"},VE={class:"val"},GE=["value"],WE={class:"ctl-row"},XE={class:"val"},$E=["value"],qE={key:0,class:"notice err"},YE=yi({__name:"LightView",setup(n){const e=at(null),t=at(null),i=Zt(()=>Ki()),r=Qo(),s=Zt(()=>{const d=i.value;return d?dl(d):we.project.sharedLight}),o=Zt(()=>{var d;return((d=i.value)==null?void 0:d.edge)??fl()}),a=Zt({get:()=>{var d;return!!((d=i.value)!=null&&d.light)},set:d=>{const f=i.value;f&&(f.light=d?{...we.project.sharedLight}:null,pt(f),r.setLight(dl(f)))}});function l(d,f){const A=i.value;if(!A)return;const x=A.light??we.project.sharedLight;x[d]=f,pt(A),r.setLight(x)}function u(d,f){const A=i.value;if(!A)return;const x=A.edge??{...fl()};x[d]=f,A.edge=x,pt(A)}const c=[{id:"disabled",label:"Disabled"},{id:"light-facing",label:"Light-facing"},{id:"hard",label:"Hard edge"},{id:"rim",label:"Rim accent"},{id:"specular",label:"Specular"}],p=new Map;function h(d){r.renderer.domElement.setPointerCapture(d.pointerId),p.set(d.pointerId,{x:d.clientX,y:d.clientY})}function m(d){if(!p.has(d.pointerId)||p.size!==1)return;const f=p.get(d.pointerId);p.set(d.pointerId,{x:d.clientX,y:d.clientY});const A=r.getCamera();A.yawDeg=(A.yawDeg+(d.clientX-f.x)*.5)%360,A.pitchDeg=Math.max(-85,Math.min(85,A.pitchDeg+(d.clientY-f.y)*.5)),r.setCamera(A)}function _(d){p.delete(d.pointerId);const f=i.value;f&&(f.camera=r.getCamera())}ji(()=>{r.mount(e.value);const d=i.value;r.setForm((d==null?void 0:d.form)??null),r.setGroundY(d!=null&&d.form?d.form.groundAnchor.y:Mc(31)),r.setCamera((d==null?void 0:d.camera)??Sr()),r.setLight(s.value);const f=r.renderer.domElement;f.addEventListener("pointerdown",h),f.addEventListener("pointermove",m),f.addEventListener("pointerup",_),f.addEventListener("pointercancel",_)}),Nr(()=>{const d=r.renderer.domElement;d.removeEventListener("pointerdown",h),d.removeEventListener("pointermove",m),d.removeEventListener("pointerup",_),d.removeEventListener("pointercancel",_),r.unmount()});function v(){t.value=null;const d=i.value;if(!d)return;const f=Ec(d,r);if(f){t.value=f;return}we.mode="material"}return(d,f)=>(Ge(),Xe("div",aE,[j("div",{ref_key:"host",ref:e,class:"canvas-host"},null,512),$t(kr),j("div",lE,[j("div",cE,[j("div",uE,[j("label",null,[j("input",{type:"checkbox",checked:a.value,onChange:f[0]||(f[0]=A=>a.value=A.target.checked)},null,40,fE),f[11]||(f[11]=Ot(" Asset-specific override ",-1)),f[12]||(f[12]=j("span",{class:"hint"},"(off = shared scene preset)",-1))])]),j("div",hE,[j("div",dE,[j("label",null,[f[13]||(f[13]=Ot("Azimuth ",-1)),j("span",pE,je(s.value.azimuthDeg)+"°",1)]),j("input",{type:"range",min:"-180",max:"180",step:"5",value:s.value.azimuthDeg,onInput:f[1]||(f[1]=A=>l("azimuthDeg",+A.target.value))},null,40,mE)]),j("div",gE,[j("label",null,[f[14]||(f[14]=Ot("Elevation ",-1)),j("span",_E,je(s.value.elevationDeg)+"°",1)]),j("input",{type:"range",min:"5",max:"85",step:"5",value:s.value.elevationDeg,onInput:f[2]||(f[2]=A=>l("elevationDeg",+A.target.value))},null,40,vE)]),j("div",xE,[j("label",null,[f[15]||(f[15]=Ot("Intensity ",-1)),j("span",ME,je(s.value.intensity.toFixed(2)),1)]),j("input",{type:"range",min:"0",max:"2",step:"0.05",value:s.value.intensity,onInput:f[3]||(f[3]=A=>l("intensity",+A.target.value))},null,40,SE)]),j("div",yE,[j("label",null,[f[16]||(f[16]=Ot("Ambient ",-1)),j("span",EE,je(s.value.ambient.toFixed(2)),1)]),j("input",{type:"range",min:"0",max:"1",step:"0.05",value:s.value.ambient,onInput:f[4]||(f[4]=A=>l("ambient",+A.target.value))},null,40,bE)]),j("div",TE,[j("label",null,[f[17]||(f[17]=Ot("Shadow ",-1)),j("span",AE,je(s.value.shadowEnabled?"on":"off"),1)]),j("input",{type:"checkbox",checked:s.value.shadowEnabled,onChange:f[5]||(f[5]=A=>l("shadowEnabled",A.target.checked))},null,40,wE)]),j("div",CE,[j("label",null,[f[18]||(f[18]=Ot("Shadow strength ",-1)),j("span",RE,je(s.value.shadowStrength.toFixed(2)),1)]),j("input",{type:"range",min:"0",max:"1",step:"0.05",value:s.value.shadowStrength,onInput:f[6]||(f[6]=A=>l("shadowStrength",+A.target.value))},null,40,PE)]),j("div",LE,[j("label",null,[f[19]||(f[19]=Ot("Shadow softness ",-1)),j("span",DE,je(s.value.shadowSoftness.toFixed(2)),1)]),j("input",{type:"range",min:"0",max:"1",step:"0.05",value:s.value.shadowSoftness,onInput:f[7]||(f[7]=A=>l("shadowSoftness",+A.target.value))},null,40,IE)])]),j("div",UE,[f[20]||(f[20]=j("label",null,"Edge highlight",-1)),j("div",NE,[(Ge(),Xe(vt,null,Un(c,A=>j("button",{key:A.id,class:Tt(["chip",{on:o.value.mode===A.id}]),onClick:x=>u("mode",A.id)},je(A.label),11,FE)),64))])]),o.value.mode!=="disabled"?(Ge(),Xe("div",OE,[j("div",BE,[j("label",null,[f[21]||(f[21]=Ot("Edge strength ",-1)),j("span",zE,je(o.value.strength.toFixed(2)),1)]),j("input",{type:"range",min:"0",max:"1",step:"0.05",value:o.value.strength,onInput:f[8]||(f[8]=A=>u("strength",+A.target.value))},null,40,kE)]),j("div",HE,[j("label",null,[f[22]||(f[22]=Ot("Edge width (px) ",-1)),j("span",VE,je(o.value.width),1)]),j("input",{type:"range",min:"1",max:"3",step:"1",value:o.value.width,onInput:f[9]||(f[9]=A=>u("width",+A.target.value))},null,40,GE)]),j("div",WE,[j("label",null,[f[23]||(f[23]=Ot("Edge threshold ",-1)),j("span",XE,je(o.value.threshold.toFixed(2)),1)]),j("input",{type:"range",min:"0",max:"1",step:"0.05",value:o.value.threshold,onInput:f[10]||(f[10]=A=>u("threshold",+A.target.value))},null,40,$E)])])):Kt("",!0)])]),j("div",{class:"bottom-bar",style:{position:"absolute",bottom:"0",left:"0",right:"0"}},[f[24]||(f[24]=j("span",{class:"hint"},"Drag to rotate · light gizmo + ground guide visible",-1)),f[25]||(f[25]=j("span",{class:"spacer"},null,-1)),j("button",{class:"primary",onClick:v},"Render grayscale →")]),t.value?(Ge(),Xe("div",qE,je(t.value),1)):Kt("",!0)]))}}),jE={class:"workspace pv-pad",style:{"overflow-y":"auto"}},KE={style:{margin:"4px 0 10px"}},ZE={class:"chip-list",style:{"margin-bottom":"12px"}},JE=["onClick"],QE={class:"side-by-side",style:{"margin-bottom":"12px"}},eb=["onClick"],tb={class:"ctl-row",style:{"max-width":"340px"}},nb={class:"ctl-row",style:{"max-width":"340px"}},ib={class:"val"},rb={class:"ctl-row"},sb={class:"ramp-row"},ob=["title","onClick"],ab={key:0,class:"lv-grid",style:{"max-width":"340px","margin-top":"8px"}},lb=["title","onClick"],cb={key:0,class:"error-text"},ub=yi({__name:"MaterialView",setup(n){const e=Zt(()=>Ki()),t=at(null),i=at(!1),r=at(null),s=at(!1),o=Zt(()=>{var d;return $i((d=e.value)==null?void 0:d.materialId)}),a=Object.values(hl);function l(d){var A;const f=e.value;return((A=f==null?void 0:f.rampOverrides)==null?void 0:A[d.id])??Kh(d,(f==null?void 0:f.grayLevels)??6)}function u(d){const f=e.value;f&&(f.materialId=d,pt(f))}function c(d,f){var x;const A=e.value;return A!=null&&A.levels?gs(Int16Array.from(A.levels),{nLevels:A.grayLevels,material:f?null:$i(d),shadowAlpha:A.shadowAlpha?Uint8Array.from(A.shadowAlpha):null,background:"dark",ramp:(x=A.rampOverrides)==null?void 0:x[d]}):null}function p(d,f,A=!1){const x=c(f,A);d.width=le*4,d.height=le*4;const T=d.getContext("2d");T.clearRect(0,0,d.width,d.height),x&&Nd(T,x,0,0,4)}function h(d,f){const A=d;A&&queueMicrotask(()=>p(A,f,s.value))}function m(d){const f=e.value;if(!f||r.value==null)return;const A=f.materialId,x=[...l(o.value)];x[r.value]=d;const T=Fg(x);if(T.length){t.value=T.join(`
`);return}f.rampOverrides={...f.rampOverrides??{},[A]:Og(x)},r.value=null,pt(f)}function _(){const d=e.value;d&&(d.rampOverrides&&delete d.rampOverrides[d.materialId],pt(d))}function v(){we.mode="sprite"}return(d,f)=>{var A,x,T;return Ge(),Xe("div",jE,[$t(kr),j("h3",KE,"Material — "+je(o.value.name),1),j("div",ZE,[(Ge(!0),Xe(vt,null,Un(dt(a),U=>{var D;return Ge(),Xe("button",{key:U.id,class:Tt(["chip",{on:((D=e.value)==null?void 0:D.materialId)===U.id}]),onClick:R=>u(U.id)},je(U.name),11,JE)}),128))]),j("div",QE,[(Ge(!0),Xe(vt,null,Un(dt(a),U=>(Ge(),Xe("figure",{key:U.id},[j("canvas",{ref_for:!0,ref:D=>h(D,U.id),onClick:D=>u(U.id),style:{cursor:"pointer"}},null,8,eb),j("figcaption",null,je(U.name),1)]))),128))]),j("div",tb,[j("label",null,[_r(j("input",{type:"checkbox","onUpdate:modelValue":f[0]||(f[0]=U=>s.value=U)},null,512),[[ug,s.value]]),f[3]||(f[3]=Ot(" Grayscale inspection ",-1))])]),j("div",nb,[j("label",null,[f[4]||(f[4]=Ot("Contrast ",-1)),j("span",ib,je((A=e.value)==null?void 0:A.contrast.toFixed(2)),1)]),_r(j("input",{type:"range",min:"0.5",max:"2",step:"0.05","onUpdate:modelValue":f[1]||(f[1]=U=>e.value.contrast=U),onChange:f[2]||(f[2]=U=>dt(pt)(e.value))},null,544),[[Zr,e.value.contrast,void 0,{number:!0}]])]),j("div",rb,[f[5]||(f[5]=j("label",null,"Ramp (dark → light, DB32 only)",-1)),j("div",sb,[(Ge(!0),Xe(vt,null,Un(l(o.value),(U,D)=>(Ge(),Xe("span",{key:D,class:Tt(["swatch",{on:r.value===D}]),style:Ar({background:U}),title:U,onClick:R=>{i.value=!0,r.value=D}},null,14,ob))),128)),(T=(x=e.value)==null?void 0:x.rampOverrides)!=null&&T[o.value.id]?(Ge(),Xe("button",{key:0,onClick:_},"Reset")):Kt("",!0)]),r.value!=null?(Ge(),Xe("div",ab,[(Ge(!0),Xe(vt,null,Un(dt(qh),U=>(Ge(),Xe("span",{key:U,class:Tt(["swatch",{on:dt(Yh)(U)}]),style:Ar({background:U}),title:U,onClick:D=>m(U)},null,14,lb))),128))])):Kt("",!0)]),t.value?(Ge(),Xe("div",cb,je(t.value),1)):Kt("",!0),j("div",{class:"bottom-bar",style:{position:"sticky",bottom:"0",margin:"8px -10px -10px"}},[f[6]||(f[6]=j("span",{class:"hint"},"Switching materials never recreates geometry",-1)),f[7]||(f[7]=j("span",{class:"spacer"},null,-1)),j("button",{class:"primary",onClick:v},"Sprite →")])])}}}),fb={class:"workspace"},hb={class:"tool-row",style:{position:"absolute",top:"0",left:"0",right:"0"}},db=["title","onClick"],pb=["disabled"],mb={class:"bottom-bar",style:{position:"absolute",bottom:"0",left:"0",right:"0"}},gb=["disabled"],_b={key:0,class:"notice"},vb={key:1,class:"notice err"},xb=yi({__name:"SpriteView",setup(n){const e=at(null);let t,i,r=!0,s=0;const o=Zt(()=>Ki()),a=at(null),l=at(!1),u=at(null),c={x:0,y:0,zoom:14},p=Qo();function h(){var G;const P=o.value;if(!P)return[];const N=[];for(let B=0;B<P.grayLevels;B++)N.push(l.value?Zh(B,P.grayLevels):(G=P.rampOverrides)!=null&&G[P.materialId]?P.rampOverrides[P.materialId][B]:$i(P.materialId).ramp[B]??"#000000");return N}function m(){var ge;r=!1;const P=o.value,N=t.width,G=t.height;if(i.fillStyle="#0d0e10",i.fillRect(0,0,N,G),!(P!=null&&P.levels))return;const B=gs(Int16Array.from(P.levels),{nLevels:P.grayLevels,material:l.value?null:$i(P.materialId),shadowAlpha:P.shadowAlpha?Uint8Array.from(P.shadowAlpha):null,background:"transparent",ramp:(ge=P.rampOverrides)==null?void 0:ge[P.materialId]}),fe=le*c.zoom;for(let Ae=0;Ae<le;Ae++)for(let ze=0;ze<le;ze++)i.fillStyle=(ze+Ae)%2?"#1a1c20":"#15171b",i.fillRect(c.x+ze*c.zoom,c.y+Ae*c.zoom,c.zoom,c.zoom);const he=document.createElement("canvas");he.width=le,he.height=le,he.getContext("2d").putImageData(new ImageData(B,le,le),0,0),i.imageSmoothingEnabled=!1,i.drawImage(he,c.x,c.y,fe,fe),i.strokeStyle="rgba(255,255,255,0.07)";for(let Ae=0;Ae<=le;Ae++)i.beginPath(),i.moveTo(c.x+Ae*c.zoom,c.y),i.lineTo(c.x+Ae*c.zoom,c.y+fe),i.stroke(),i.beginPath(),i.moveTo(c.x,c.y+Ae*c.zoom),i.lineTo(c.x+fe,c.y+Ae*c.zoom),i.stroke();if(P.overrides){i.fillStyle="#5fcde4";for(let Ae=0;Ae<1024;Ae++)if(P.overrides[Ae]!=null){const ze=Ae%le,re=Math.floor(Ae/le);i.fillRect(c.x+ze*c.zoom,c.y+re*c.zoom,3,3)}}}function _(){r&&m(),s=requestAnimationFrame(_)}const v=at(!1);function d(P){const N=o.value;if(!N||u.value===null)return;const G=yy(P,t,c);if(!G)return;const B=G.y*le+G.x;N.overrides||(N.overrides=new Array(1024).fill(null)),N.overrides[B]=u.value,N.levels[B]=u.value,r=!0}function f(P){u.value!==null&&(t.setPointerCapture(P.pointerId),v.value=!0,d(P))}function A(P){v.value&&d(P)}function x(P){v.value&&(v.value=!1,o.value&&pt(o.value))}ji(()=>{t=document.createElement("canvas"),e.value.appendChild(t),i=t.getContext("2d");const P=()=>{t.width=e.value.clientWidth*devicePixelRatio,t.height=e.value.clientHeight*devicePixelRatio,c.zoom=Math.min(t.width,t.height)/(le+4),c.x=(t.width-le*c.zoom)/2,c.y=(t.height-le*c.zoom)/2,r=!0};P(),window.addEventListener("resize",P),t._fit=P,t.addEventListener("pointerdown",f),t.addEventListener("pointermove",A),t.addEventListener("pointerup",x),t.addEventListener("pointercancel",x),_()}),Nr(()=>{cancelAnimationFrame(s),window.removeEventListener("resize",t._fit)});function T(){var N;const P=o.value;return gs(Int16Array.from(P.levels),{nLevels:P.grayLevels,material:l.value?null:$i(P.materialId),shadowAlpha:P.shadowAlpha?Uint8Array.from(P.shadowAlpha):null,background:"transparent",ramp:(N=P.rampOverrides)==null?void 0:N[P.materialId]})}function U(){return o.value.name.replace(/\s+/g,"-")}function D(){If(T(),`${U()}-32.png`)}function R(){const P=o.value;P!=null&&P.shadowAlpha&&If(Yg(Uint8Array.from(P.shadowAlpha)),`${U()}-shadow.png`)}function z(){const P=o.value;xr(Rg({...P,sketch:P.sketch?uo(P.sketch):null,form:P.form?fo(P.form):null}),`${U()}-asset.json`)}function se(){const P=o.value;P!=null&&P.sketch&&xr(uo(P.sketch),`${U()}-sketch.json`)}function y(){const P=o.value;P!=null&&P.form&&xr(fo(P.form),`${U()}-form.json`)}function E(){const P=we.project;xr(Pg({...P,assets:Object.fromEntries(Object.entries(P.assets).map(([N,G])=>[N,{...G,sketch:G.sketch?uo(G.sketch):null,form:G.form?fo(G.form):null}]))}),"pixel-lab-project.json")}function I(){const P=o.value;P&&(P.overrides=null,pt(P),r=!0)}function F(){const P=o.value;if(!P)return;const N=Ec(P,p);if(N){a.value=N;return}pt(P),r=!0}function H(){const P=o.value;P&&(we.placingAssetId=P.id,we.mode="scene")}return(P,N)=>{var G,B;return Ge(),Xe("div",fb,[j("div",{ref_key:"host",ref:e,class:"canvas-host"},null,512),$t(kr),j("div",hb,[j("button",{class:Tt({on:l.value}),onClick:N[0]||(N[0]=fe=>{l.value=!l.value,bt(r)?r.value=!0:r=!0})},"Gray",2),(Ge(!0),Xe(vt,null,Un(h(),(fe,he)=>(Ge(),Xe("button",{key:he,class:Tt(["swatch",{on:u.value===he}]),style:Ar({background:fe}),title:`level ${he}`,onClick:ge=>u.value=u.value===he?null:he},null,14,db))),128)),j("button",{class:Tt({on:u.value===-1}),onClick:N[1]||(N[1]=fe=>u.value=u.value===-1?null:-1)},"Erase",2),j("button",{onClick:I,disabled:!((G=o.value)!=null&&G.overrides)},"Reset edits",8,pb),j("button",{onClick:F},"Re-render")]),j("div",mb,[j("button",{onClick:D},"PNG"),j("button",{onClick:R,disabled:!((B=o.value)!=null&&B.shadowAlpha)},"Shadow PNG",8,gb),j("button",{onClick:z},"Asset"),j("button",{onClick:se},"Sketch"),j("button",{onClick:y},"Form"),j("button",{onClick:E},"Project"),N[2]||(N[2]=j("span",{class:"spacer"},null,-1)),j("button",{class:"primary",onClick:H},"Place in scene →")]),u.value!==null?(Ge(),Xe("div",_b,"Editing overrides — tap/drag pixels")):Kt("",!0),a.value?(Ge(),Xe("div",vb,je(a.value),1)):Kt("",!0)])}}}),Mb={class:"app-shell"},Sb={class:"app-header"},yb={class:"stepper"},Eb=["disabled","onClick"],bb={class:"app-main"},Tb={key:1,class:"hint",style:{padding:"24px"}},Ab=yi({__name:"App",setup(n){ji(()=>void Gg());const e=[{id:"scene",label:"Scene"},{id:"sketch",label:"Sketch"},{id:"form",label:"3D Form"},{id:"light",label:"Light"},{id:"material",label:"Material"},{id:"sprite",label:"Sprite"}];function t(s){const o=Ki();switch(s){case"scene":return!0;case"sketch":return!!o;case"form":return!!o;case"light":return!!o&&jg(o);case"material":return!!o&&!!o.levels;case"sprite":return!!o&&!!o.levels}}function i(s){t(s)&&(we.mode=s)}const r=Zt(()=>({scene:Dy,sketch:Qy,form:oE,light:YE,material:ub,sprite:xb})[we.mode]);return(s,o)=>(Ge(),Xe("div",Mb,[j("header",Sb,[o[0]||(o[0]=j("div",{class:"app-title"},"Pixel Lab",-1)),j("nav",yb,[(Ge(),Xe(vt,null,Un(e,a=>j("button",{key:a.id,class:Tt({current:dt(we).mode===a.id}),disabled:!t(a.id),onClick:l=>i(a.id)},je(a.label),11,Eb)),64))])]),j("main",bb,[dt(we).loaded?(Ge(),Fh(Qp(r.value),{key:0})):(Ge(),Xe("div",Tb,"Loading…"))])]))}});_g(Ab).mount("#app");
