import{Aa as O6,B as d6,Ba as I6,C as L6,Ca as U6,Da as G6,E as g6,Ea as W6,Ga as g,H as b6,Ha as Q,Ja as Z6,Ka as o3,Ma as g1,Na as t3,Oa as i2,Ra as j6,S as x6,Sa as K6,a as a2,aa as f3,b as M6,ea as N6,fa as S6,ga as y6,l as x,ma as w6,n as i3,na as k6,o as s3,oa as A6,pa as T6,qa as P6,r as L1,ra as F6,s as n3,sa as E6,t as l3,ta as D6,u as u6,ua as B6,v as e2,w as r2,x as C6,xa as R6,ya as q6,za as _6}from"./chunk-DU3K6HJM.js";var $6=[{path:"",loadChildren:()=>import("./chunk-QRSCA5K2.js").then(r=>r.routes)},{path:"**",redirectTo:"",pathMatch:"full"}];function Q6(r){return new x(3e3,!1)}function tn(){return new x(3100,!1)}function mn(){return new x(3101,!1)}function zn(r){return new x(3001,!1)}function hn(r){return new x(3003,!1)}function vn(r){return new x(3004,!1)}function Hn(r,c){return new x(3005,!1)}function pn(){return new x(3006,!1)}function Vn(){return new x(3007,!1)}function Mn(r,c){return new x(3008,!1)}function un(r){return new x(3002,!1)}function Cn(r,c,a,e,i){return new x(3010,!1)}function dn(){return new x(3011,!1)}function Ln(){return new x(3012,!1)}function gn(){return new x(3200,!1)}function bn(){return new x(3202,!1)}function xn(){return new x(3013,!1)}function Nn(r){return new x(3014,!1)}function Sn(r){return new x(3015,!1)}function yn(r){return new x(3016,!1)}function wn(r,c){return new x(3404,!1)}function kn(r){return new x(3502,!1)}function An(r){return new x(3503,!1)}function Tn(){return new x(3300,!1)}function Pn(r){return new x(3504,!1)}function Fn(r){return new x(3301,!1)}function En(r,c){return new x(3302,!1)}function Dn(r){return new x(3303,!1)}function Bn(r,c){return new x(3400,!1)}function Rn(r){return new x(3401,!1)}function qn(r){return new x(3402,!1)}function _n(r,c){return new x(3505,!1)}function n1(r){switch(r.length){case 0:return new g1;case 1:return r[0];default:return new t3(r)}}function t8(r,c,a=new Map,e=new Map){let i=[],s=[],n=-1,l=null;if(c.forEach(f=>{let o=f.get("offset"),t=o==n,m=t&&l||new Map;f.forEach((z,h)=>{let v=h,M=z;if(h!=="offset")switch(v=r.normalizePropertyName(v,i),M){case i2:M=a.get(h);break;case Q:M=e.get(h);break;default:M=r.normalizeStyleValue(h,v,M,i);break}m.set(v,M)}),t||s.push(m),l=m,n=o}),i.length)throw kn(i);return s}function F3(r,c,a,e){switch(c){case"start":r.onStart(()=>e(a&&m3(a,"start",r)));break;case"done":r.onDone(()=>e(a&&m3(a,"done",r)));break;case"destroy":r.onDestroy(()=>e(a&&m3(a,"destroy",r)));break}}function m3(r,c,a){let e=a.totalTime,i=!!a.disabled,s=E3(r.element,r.triggerName,r.fromState,r.toState,c||r.phaseName,e??r.totalTime,i),n=r._data;return n!=null&&(s._data=n),s}function E3(r,c,a,e,i="",s=0,n){return{element:r,triggerName:c,fromState:a,toState:e,phaseName:i,totalTime:s,disabled:!!n}}function U(r,c,a){let e=r.get(c);return e||r.set(c,e=a),e}function Y6(r){let c=r.indexOf(":"),a=r.substring(1,c),e=r.slice(c+1);return[a,e]}var On=typeof document>"u"?null:document.documentElement;function D3(r){let c=r.parentNode||r.host||null;return c===On?null:c}function In(r){return r.substring(1,6)=="ebkit"}var h1=null,X6=!1;function Un(r){h1||(h1=Gn()||{},X6=h1.style?"WebkitAppearance"in h1.style:!1);let c=!0;return h1.style&&!In(r)&&(c=r in h1.style,!c&&X6&&(c="Webkit"+r.charAt(0).toUpperCase()+r.slice(1)in h1.style)),c}function Gn(){return typeof document<"u"?document.body:null}function m8(r,c){for(;c;){if(c===r)return!0;c=D3(c)}return!1}function z8(r,c,a){if(a)return Array.from(r.querySelectorAll(c));let e=r.querySelector(c);return e?[e]:[]}var B3=(()=>{let c=class c{validateStyleProperty(e){return Un(e)}matchesElement(e,i){return!1}containsElement(e,i){return m8(e,i)}getParentElement(e){return D3(e)}query(e,i,s){return z8(e,i,s)}computeStyle(e,i,s){return s||""}animate(e,i,s,n,l,f=[],o){return new g1(s,n)}};c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=L1({token:c,factory:c.\u0275fac});let r=c;return r})(),O3=class O3{};O3.NOOP=new B3;var p1=O3,V1=class{};var Wn=1e3,h8="{{",Zn="}}",v8="ng-enter",V3="ng-leave",s2="ng-trigger",t2=".ng-trigger",J6="ng-animating",M3=".ng-animating";function J(r){if(typeof r=="number")return r;let c=r.match(/^(-?[\.\d]+)(m?s)/);return!c||c.length<2?0:u3(parseFloat(c[1]),c[2])}function u3(r,c){switch(c){case"s":return r*Wn;default:return r}}function m2(r,c,a){return r.hasOwnProperty("duration")?r:jn(r,c,a)}function jn(r,c,a){let e=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,i,s=0,n="";if(typeof r=="string"){let l=r.match(e);if(l===null)return c.push(Q6(r)),{duration:0,delay:0,easing:""};i=u3(parseFloat(l[1]),l[2]);let f=l[3];f!=null&&(s=u3(parseFloat(f),l[4]));let o=l[5];o&&(n=o)}else i=r;if(!a){let l=!1,f=c.length;i<0&&(c.push(tn()),l=!0),s<0&&(c.push(mn()),l=!0),l&&c.splice(f,0,Q6(r))}return{duration:i,delay:s,easing:n}}function Kn(r){return r.length?r[0]instanceof Map?r:r.map(c=>new Map(Object.entries(c))):[]}function Y(r,c,a){c.forEach((e,i)=>{let s=R3(i);a&&!a.has(i)&&a.set(i,r.style[s]),r.style[s]=e})}function H1(r,c){c.forEach((a,e)=>{let i=R3(e);r.style[i]=""})}function T1(r){return Array.isArray(r)?r.length==1?r[0]:Z6(r):r}function $n(r,c,a){let e=c.params||{},i=H8(r);i.length&&i.forEach(s=>{e.hasOwnProperty(s)||a.push(zn(s))})}var C3=new RegExp(`${h8}\\s*(.+?)\\s*${Zn}`,"g");function H8(r){let c=[];if(typeof r=="string"){let a;for(;a=C3.exec(r);)c.push(a[1]);C3.lastIndex=0}return c}function F1(r,c,a){let e=`${r}`,i=e.replace(C3,(s,n)=>{let l=c[n];return l==null&&(a.push(hn(n)),l=""),l.toString()});return i==e?r:i}var Qn=/-+([a-z0-9])/g;function R3(r){return r.replace(Qn,(...c)=>c[1].toUpperCase())}function Yn(r,c){return r===0||c===0}function Xn(r,c,a){if(a.size&&c.length){let e=c[0],i=[];if(a.forEach((s,n)=>{e.has(n)||i.push(n),e.set(n,s)}),i.length)for(let s=1;s<c.length;s++){let n=c[s];i.forEach(l=>n.set(l,q3(r,l)))}}return c}function I(r,c,a){switch(c.type){case g.Trigger:return r.visitTrigger(c,a);case g.State:return r.visitState(c,a);case g.Transition:return r.visitTransition(c,a);case g.Sequence:return r.visitSequence(c,a);case g.Group:return r.visitGroup(c,a);case g.Animate:return r.visitAnimate(c,a);case g.Keyframes:return r.visitKeyframes(c,a);case g.Style:return r.visitStyle(c,a);case g.Reference:return r.visitReference(c,a);case g.AnimateChild:return r.visitAnimateChild(c,a);case g.AnimateRef:return r.visitAnimateRef(c,a);case g.Query:return r.visitQuery(c,a);case g.Stagger:return r.visitStagger(c,a);default:throw vn(c.type)}}function q3(r,c){return window.getComputedStyle(r)[c]}var Jn=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),z2=class extends V1{normalizePropertyName(c,a){return R3(c)}normalizeStyleValue(c,a,e,i){let s="",n=e.toString().trim();if(Jn.has(a)&&e!==0&&e!=="0")if(typeof e=="number")s="px";else{let l=e.match(/^[+-]?[\d\.]+([a-z]*)$/);l&&l[1].length==0&&i.push(Hn(c,e))}return n+s}};var h2="*";function cl(r,c){let a=[];return typeof r=="string"?r.split(/\s*,\s*/).forEach(e=>al(e,a,c)):a.push(r),a}function al(r,c,a){if(r[0]==":"){let f=el(r,a);if(typeof f=="function"){c.push(f);return}r=f}let e=r.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(e==null||e.length<4)return a.push(Sn(r)),c;let i=e[1],s=e[2],n=e[3];c.push(c8(i,n));let l=i==h2&&n==h2;s[0]=="<"&&!l&&c.push(c8(n,i))}function el(r,c){switch(r){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(a,e)=>parseFloat(e)>parseFloat(a);case":decrement":return(a,e)=>parseFloat(e)<parseFloat(a);default:return c.push(yn(r)),"* => *"}}var n2=new Set(["true","1"]),l2=new Set(["false","0"]);function c8(r,c){let a=n2.has(r)||l2.has(r),e=n2.has(c)||l2.has(c);return(i,s)=>{let n=r==h2||r==i,l=c==h2||c==s;return!n&&a&&typeof i=="boolean"&&(n=i?n2.has(r):l2.has(r)),!l&&e&&typeof s=="boolean"&&(l=s?n2.has(c):l2.has(c)),n&&l}}var p8=":self",rl=new RegExp(`s*${p8}s*,?`,"g");function V8(r,c,a,e){return new d3(r).build(c,a,e)}var a8="",d3=class{constructor(c){this._driver=c}build(c,a,e){let i=new L3(a);return this._resetContextStyleTimingState(i),I(this,T1(c),i)}_resetContextStyleTimingState(c){c.currentQuerySelector=a8,c.collectedStyles=new Map,c.collectedStyles.set(a8,new Map),c.currentTime=0}visitTrigger(c,a){let e=a.queryCount=0,i=a.depCount=0,s=[],n=[];return c.name.charAt(0)=="@"&&a.errors.push(pn()),c.definitions.forEach(l=>{if(this._resetContextStyleTimingState(a),l.type==g.State){let f=l,o=f.name;o.toString().split(/\s*,\s*/).forEach(t=>{f.name=t,s.push(this.visitState(f,a))}),f.name=o}else if(l.type==g.Transition){let f=this.visitTransition(l,a);e+=f.queryCount,i+=f.depCount,n.push(f)}else a.errors.push(Vn())}),{type:g.Trigger,name:c.name,states:s,transitions:n,queryCount:e,depCount:i,options:null}}visitState(c,a){let e=this.visitStyle(c.styles,a),i=c.options&&c.options.params||null;if(e.containsDynamicStyles){let s=new Set,n=i||{};e.styles.forEach(l=>{l instanceof Map&&l.forEach(f=>{H8(f).forEach(o=>{n.hasOwnProperty(o)||s.add(o)})})}),s.size&&a.errors.push(Mn(c.name,[...s.values()]))}return{type:g.State,name:c.name,style:e,options:i?{params:i}:null}}visitTransition(c,a){a.queryCount=0,a.depCount=0;let e=I(this,T1(c.animation),a),i=cl(c.expr,a.errors);return{type:g.Transition,matchers:i,animation:e,queryCount:a.queryCount,depCount:a.depCount,options:v1(c.options)}}visitSequence(c,a){return{type:g.Sequence,steps:c.steps.map(e=>I(this,e,a)),options:v1(c.options)}}visitGroup(c,a){let e=a.currentTime,i=0,s=c.steps.map(n=>{a.currentTime=e;let l=I(this,n,a);return i=Math.max(i,a.currentTime),l});return a.currentTime=i,{type:g.Group,steps:s,options:v1(c.options)}}visitAnimate(c,a){let e=ll(c.timings,a.errors);a.currentAnimateTimings=e;let i,s=c.styles?c.styles:o3({});if(s.type==g.Keyframes)i=this.visitKeyframes(s,a);else{let n=c.styles,l=!1;if(!n){l=!0;let o={};e.easing&&(o.easing=e.easing),n=o3(o)}a.currentTime+=e.duration+e.delay;let f=this.visitStyle(n,a);f.isEmptyStep=l,i=f}return a.currentAnimateTimings=null,{type:g.Animate,timings:e,style:i,options:null}}visitStyle(c,a){let e=this._makeStyleAst(c,a);return this._validateStyleAst(e,a),e}_makeStyleAst(c,a){let e=[],i=Array.isArray(c.styles)?c.styles:[c.styles];for(let l of i)typeof l=="string"?l===Q?e.push(l):a.errors.push(un(l)):e.push(new Map(Object.entries(l)));let s=!1,n=null;return e.forEach(l=>{if(l instanceof Map&&(l.has("easing")&&(n=l.get("easing"),l.delete("easing")),!s)){for(let f of l.values())if(f.toString().indexOf(h8)>=0){s=!0;break}}}),{type:g.Style,styles:e,easing:n,offset:c.offset,containsDynamicStyles:s,options:null}}_validateStyleAst(c,a){let e=a.currentAnimateTimings,i=a.currentTime,s=a.currentTime;e&&s>0&&(s-=e.duration+e.delay),c.styles.forEach(n=>{typeof n!="string"&&n.forEach((l,f)=>{let o=a.collectedStyles.get(a.currentQuerySelector),t=o.get(f),m=!0;t&&(s!=i&&s>=t.startTime&&i<=t.endTime&&(a.errors.push(Cn(f,t.startTime,t.endTime,s,i)),m=!1),s=t.startTime),m&&o.set(f,{startTime:s,endTime:i}),a.options&&$n(l,a.options,a.errors)})})}visitKeyframes(c,a){let e={type:g.Keyframes,styles:[],options:null};if(!a.currentAnimateTimings)return a.errors.push(dn()),e;let i=1,s=0,n=[],l=!1,f=!1,o=0,t=c.steps.map(S=>{let L=this._makeStyleAst(S,a),N=L.offset!=null?L.offset:nl(L.styles),y=0;return N!=null&&(s++,y=L.offset=N),f=f||y<0||y>1,l=l||y<o,o=y,n.push(y),L});f&&a.errors.push(Ln()),l&&a.errors.push(gn());let m=c.steps.length,z=0;s>0&&s<m?a.errors.push(bn()):s==0&&(z=i/(m-1));let h=m-1,v=a.currentTime,M=a.currentAnimateTimings,d=M.duration;return t.forEach((S,L)=>{let N=z>0?L==h?1:z*L:n[L],y=N*d;a.currentTime=v+M.delay+y,M.duration=y,this._validateStyleAst(S,a),S.offset=N,e.styles.push(S)}),e}visitReference(c,a){return{type:g.Reference,animation:I(this,T1(c.animation),a),options:v1(c.options)}}visitAnimateChild(c,a){return a.depCount++,{type:g.AnimateChild,options:v1(c.options)}}visitAnimateRef(c,a){return{type:g.AnimateRef,animation:this.visitReference(c.animation,a),options:v1(c.options)}}visitQuery(c,a){let e=a.currentQuerySelector,i=c.options||{};a.queryCount++,a.currentQuery=c;let[s,n]=il(c.selector);a.currentQuerySelector=e.length?e+" "+s:s,U(a.collectedStyles,a.currentQuerySelector,new Map);let l=I(this,T1(c.animation),a);return a.currentQuery=null,a.currentQuerySelector=e,{type:g.Query,selector:s,limit:i.limit||0,optional:!!i.optional,includeSelf:n,animation:l,originalSelector:c.selector,options:v1(c.options)}}visitStagger(c,a){a.currentQuery||a.errors.push(xn());let e=c.timings==="full"?{duration:0,delay:0,easing:"full"}:m2(c.timings,a.errors,!0);return{type:g.Stagger,animation:I(this,T1(c.animation),a),timings:e,options:null}}};function il(r){let c=!!r.split(/\s*,\s*/).find(a=>a==p8);return c&&(r=r.replace(rl,"")),r=r.replace(/@\*/g,t2).replace(/@\w+/g,a=>t2+"-"+a.slice(1)).replace(/:animating/g,M3),[r,c]}function sl(r){return r?a2({},r):null}var L3=class{constructor(c){this.errors=c,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles=new Map,this.options=null,this.unsupportedCSSPropertiesFound=new Set}};function nl(r){if(typeof r=="string")return null;let c=null;if(Array.isArray(r))r.forEach(a=>{if(a instanceof Map&&a.has("offset")){let e=a;c=parseFloat(e.get("offset")),e.delete("offset")}});else if(r instanceof Map&&r.has("offset")){let a=r;c=parseFloat(a.get("offset")),a.delete("offset")}return c}function ll(r,c){if(r.hasOwnProperty("duration"))return r;if(typeof r=="number"){let s=m2(r,c).duration;return z3(s,0,"")}let a=r;if(a.split(/\s+/).some(s=>s.charAt(0)=="{"&&s.charAt(1)=="{")){let s=z3(0,0,"");return s.dynamic=!0,s.strValue=a,s}let i=m2(a,c);return z3(i.duration,i.delay,i.easing)}function v1(r){return r?(r=a2({},r),r.params&&(r.params=sl(r.params))):r={},r}function z3(r,c,a){return{duration:r,delay:c,easing:a}}function _3(r,c,a,e,i,s,n=null,l=!1){return{type:1,element:r,keyframes:c,preStyleProps:a,postStyleProps:e,duration:i,delay:s,totalTime:i+s,easing:n,subTimeline:l}}var E1=class{constructor(){this._map=new Map}get(c){return this._map.get(c)||[]}append(c,a){let e=this._map.get(c);e||this._map.set(c,e=[]),e.push(...a)}has(c){return this._map.has(c)}clear(){this._map.clear()}},fl=1,ol=":enter",tl=new RegExp(ol,"g"),ml=":leave",zl=new RegExp(ml,"g");function M8(r,c,a,e,i,s=new Map,n=new Map,l,f,o=[]){return new g3().buildKeyframes(r,c,a,e,i,s,n,l,f,o)}var g3=class{buildKeyframes(c,a,e,i,s,n,l,f,o,t=[]){o=o||new E1;let m=new b3(c,a,o,i,s,t,[]);m.options=f;let z=f.delay?J(f.delay):0;m.currentTimeline.delayNextStep(z),m.currentTimeline.setStyles([n],null,m.errors,f),I(this,e,m);let h=m.timelines.filter(v=>v.containsAnimation());if(h.length&&l.size){let v;for(let M=h.length-1;M>=0;M--){let d=h[M];if(d.element===a){v=d;break}}v&&!v.allowOnlyTimelineStyles()&&v.setStyles([l],null,m.errors,f)}return h.length?h.map(v=>v.buildKeyframes()):[_3(a,[],[],[],0,z,"",!1)]}visitTrigger(c,a){}visitState(c,a){}visitTransition(c,a){}visitAnimateChild(c,a){let e=a.subInstructions.get(a.element);if(e){let i=a.createSubContext(c.options),s=a.currentTimeline.currentTime,n=this._visitSubInstructions(e,i,i.options);s!=n&&a.transformIntoNewTimeline(n)}a.previousNode=c}visitAnimateRef(c,a){let e=a.createSubContext(c.options);e.transformIntoNewTimeline(),this._applyAnimationRefDelays([c.options,c.animation.options],a,e),this.visitReference(c.animation,e),a.transformIntoNewTimeline(e.currentTimeline.currentTime),a.previousNode=c}_applyAnimationRefDelays(c,a,e){for(let i of c){let s=i?.delay;if(s){let n=typeof s=="number"?s:J(F1(s,i?.params??{},a.errors));e.delayNextStep(n)}}}_visitSubInstructions(c,a,e){let s=a.currentTimeline.currentTime,n=e.duration!=null?J(e.duration):null,l=e.delay!=null?J(e.delay):null;return n!==0&&c.forEach(f=>{let o=a.appendInstructionToTimeline(f,n,l);s=Math.max(s,o.duration+o.delay)}),s}visitReference(c,a){a.updateOptions(c.options,!0),I(this,c.animation,a),a.previousNode=c}visitSequence(c,a){let e=a.subContextCount,i=a,s=c.options;if(s&&(s.params||s.delay)&&(i=a.createSubContext(s),i.transformIntoNewTimeline(),s.delay!=null)){i.previousNode.type==g.Style&&(i.currentTimeline.snapshotCurrentStyles(),i.previousNode=v2);let n=J(s.delay);i.delayNextStep(n)}c.steps.length&&(c.steps.forEach(n=>I(this,n,i)),i.currentTimeline.applyStylesToKeyframe(),i.subContextCount>e&&i.transformIntoNewTimeline()),a.previousNode=c}visitGroup(c,a){let e=[],i=a.currentTimeline.currentTime,s=c.options&&c.options.delay?J(c.options.delay):0;c.steps.forEach(n=>{let l=a.createSubContext(c.options);s&&l.delayNextStep(s),I(this,n,l),i=Math.max(i,l.currentTimeline.currentTime),e.push(l.currentTimeline)}),e.forEach(n=>a.currentTimeline.mergeTimelineCollectedStyles(n)),a.transformIntoNewTimeline(i),a.previousNode=c}_visitTiming(c,a){if(c.dynamic){let e=c.strValue,i=a.params?F1(e,a.params,a.errors):e;return m2(i,a.errors)}else return{duration:c.duration,delay:c.delay,easing:c.easing}}visitAnimate(c,a){let e=a.currentAnimateTimings=this._visitTiming(c.timings,a),i=a.currentTimeline;e.delay&&(a.incrementTime(e.delay),i.snapshotCurrentStyles());let s=c.style;s.type==g.Keyframes?this.visitKeyframes(s,a):(a.incrementTime(e.duration),this.visitStyle(s,a),i.applyStylesToKeyframe()),a.currentAnimateTimings=null,a.previousNode=c}visitStyle(c,a){let e=a.currentTimeline,i=a.currentAnimateTimings;!i&&e.hasCurrentStyleProperties()&&e.forwardFrame();let s=i&&i.easing||c.easing;c.isEmptyStep?e.applyEmptyStep(s):e.setStyles(c.styles,s,a.errors,a.options),a.previousNode=c}visitKeyframes(c,a){let e=a.currentAnimateTimings,i=a.currentTimeline.duration,s=e.duration,l=a.createSubContext().currentTimeline;l.easing=e.easing,c.styles.forEach(f=>{let o=f.offset||0;l.forwardTime(o*s),l.setStyles(f.styles,f.easing,a.errors,a.options),l.applyStylesToKeyframe()}),a.currentTimeline.mergeTimelineCollectedStyles(l),a.transformIntoNewTimeline(i+s),a.previousNode=c}visitQuery(c,a){let e=a.currentTimeline.currentTime,i=c.options||{},s=i.delay?J(i.delay):0;s&&(a.previousNode.type===g.Style||e==0&&a.currentTimeline.hasCurrentStyleProperties())&&(a.currentTimeline.snapshotCurrentStyles(),a.previousNode=v2);let n=e,l=a.invokeQuery(c.selector,c.originalSelector,c.limit,c.includeSelf,!!i.optional,a.errors);a.currentQueryTotal=l.length;let f=null;l.forEach((o,t)=>{a.currentQueryIndex=t;let m=a.createSubContext(c.options,o);s&&m.delayNextStep(s),o===a.element&&(f=m.currentTimeline),I(this,c.animation,m),m.currentTimeline.applyStylesToKeyframe();let z=m.currentTimeline.currentTime;n=Math.max(n,z)}),a.currentQueryIndex=0,a.currentQueryTotal=0,a.transformIntoNewTimeline(n),f&&(a.currentTimeline.mergeTimelineCollectedStyles(f),a.currentTimeline.snapshotCurrentStyles()),a.previousNode=c}visitStagger(c,a){let e=a.parentContext,i=a.currentTimeline,s=c.timings,n=Math.abs(s.duration),l=n*(a.currentQueryTotal-1),f=n*a.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":f=l-f;break;case"full":f=e.currentStaggerTime;break}let t=a.currentTimeline;f&&t.delayNextStep(f);let m=t.currentTime;I(this,c.animation,a),a.previousNode=c,e.currentStaggerTime=i.currentTime-m+(i.startTime-e.currentTimeline.startTime)}},v2={},b3=class r{constructor(c,a,e,i,s,n,l,f){this._driver=c,this.element=a,this.subInstructions=e,this._enterClassName=i,this._leaveClassName=s,this.errors=n,this.timelines=l,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=v2,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=f||new H2(this._driver,a,0),l.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(c,a){if(!c)return;let e=c,i=this.options;e.duration!=null&&(i.duration=J(e.duration)),e.delay!=null&&(i.delay=J(e.delay));let s=e.params;if(s){let n=i.params;n||(n=this.options.params={}),Object.keys(s).forEach(l=>{(!a||!n.hasOwnProperty(l))&&(n[l]=F1(s[l],n,this.errors))})}}_copyOptions(){let c={};if(this.options){let a=this.options.params;if(a){let e=c.params={};Object.keys(a).forEach(i=>{e[i]=a[i]})}}return c}createSubContext(c=null,a,e){let i=a||this.element,s=new r(this._driver,i,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(i,e||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(c),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(c){return this.previousNode=v2,this.currentTimeline=this.currentTimeline.fork(this.element,c),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(c,a,e){let i={duration:a??c.duration,delay:this.currentTimeline.currentTime+(e??0)+c.delay,easing:""},s=new x3(this._driver,c.element,c.keyframes,c.preStyleProps,c.postStyleProps,i,c.stretchStartingKeyframe);return this.timelines.push(s),i}incrementTime(c){this.currentTimeline.forwardTime(this.currentTimeline.duration+c)}delayNextStep(c){c>0&&this.currentTimeline.delayNextStep(c)}invokeQuery(c,a,e,i,s,n){let l=[];if(i&&l.push(this.element),c.length>0){c=c.replace(tl,"."+this._enterClassName),c=c.replace(zl,"."+this._leaveClassName);let f=e!=1,o=this._driver.query(this.element,c,f);e!==0&&(o=e<0?o.slice(o.length+e,o.length):o.slice(0,e)),l.push(...o)}return!s&&l.length==0&&n.push(Nn(a)),l}},H2=class r{constructor(c,a,e,i){this._driver=c,this.element=a,this.startTime=e,this._elementTimelineStylesLookup=i,this.duration=0,this.easing=null,this._previousKeyframe=new Map,this._currentKeyframe=new Map,this._keyframes=new Map,this._styleSummary=new Map,this._localTimelineStyles=new Map,this._pendingStyles=new Map,this._backFill=new Map,this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(a),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(a,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(c){let a=this._keyframes.size===1&&this._pendingStyles.size;this.duration||a?(this.forwardTime(this.currentTime+c),a&&this.snapshotCurrentStyles()):this.startTime+=c}fork(c,a){return this.applyStylesToKeyframe(),new r(this._driver,c,a||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=fl,this._loadKeyframe()}forwardTime(c){this.applyStylesToKeyframe(),this.duration=c,this._loadKeyframe()}_updateStyle(c,a){this._localTimelineStyles.set(c,a),this._globalTimelineStyles.set(c,a),this._styleSummary.set(c,{time:this.currentTime,value:a})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(c){c&&this._previousKeyframe.set("easing",c);for(let[a,e]of this._globalTimelineStyles)this._backFill.set(a,e||Q),this._currentKeyframe.set(a,Q);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(c,a,e,i){a&&this._previousKeyframe.set("easing",a);let s=i&&i.params||{},n=hl(c,this._globalTimelineStyles);for(let[l,f]of n){let o=F1(f,s,e);this._pendingStyles.set(l,o),this._localTimelineStyles.has(l)||this._backFill.set(l,this._globalTimelineStyles.get(l)??Q),this._updateStyle(l,o)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((c,a)=>{this._currentKeyframe.set(a,c)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((c,a)=>{this._currentKeyframe.has(a)||this._currentKeyframe.set(a,c)}))}snapshotCurrentStyles(){for(let[c,a]of this._localTimelineStyles)this._pendingStyles.set(c,a),this._updateStyle(c,a)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let c=[];for(let a in this._currentKeyframe)c.push(a);return c}mergeTimelineCollectedStyles(c){c._styleSummary.forEach((a,e)=>{let i=this._styleSummary.get(e);(!i||a.time>i.time)&&this._updateStyle(e,a.value)})}buildKeyframes(){this.applyStylesToKeyframe();let c=new Set,a=new Set,e=this._keyframes.size===1&&this.duration===0,i=[];this._keyframes.forEach((l,f)=>{let o=new Map([...this._backFill,...l]);o.forEach((t,m)=>{t===i2?c.add(m):t===Q&&a.add(m)}),e||o.set("offset",f/this.duration),i.push(o)});let s=[...c.values()],n=[...a.values()];if(e){let l=i[0],f=new Map(l);l.set("offset",0),f.set("offset",1),i=[l,f]}return _3(this.element,i,s,n,this.duration,this.startTime,this.easing,!1)}},x3=class extends H2{constructor(c,a,e,i,s,n,l=!1){super(c,a,n.delay),this.keyframes=e,this.preStyleProps=i,this.postStyleProps=s,this._stretchStartingKeyframe=l,this.timings={duration:n.duration,delay:n.delay,easing:n.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let c=this.keyframes,{delay:a,duration:e,easing:i}=this.timings;if(this._stretchStartingKeyframe&&a){let s=[],n=e+a,l=a/n,f=new Map(c[0]);f.set("offset",0),s.push(f);let o=new Map(c[0]);o.set("offset",e8(l)),s.push(o);let t=c.length-1;for(let m=1;m<=t;m++){let z=new Map(c[m]),h=z.get("offset"),v=a+h*e;z.set("offset",e8(v/n)),s.push(z)}e=n,a=0,i="",c=s}return _3(this.element,c,this.preStyleProps,this.postStyleProps,e,a,i,!0)}};function e8(r,c=3){let a=Math.pow(10,c-1);return Math.round(r*a)/a}function hl(r,c){let a=new Map,e;return r.forEach(i=>{if(i==="*"){e??=c.keys();for(let s of e)a.set(s,Q)}else for(let[s,n]of i)a.set(s,n)}),a}function r8(r,c,a,e,i,s,n,l,f,o,t,m,z){return{type:0,element:r,triggerName:c,isRemovalTransition:i,fromState:a,fromStyles:s,toState:e,toStyles:n,timelines:l,queriedElements:f,preStyleProps:o,postStyleProps:t,totalTime:m,errors:z}}var h3={},p2=class{constructor(c,a,e){this._triggerName=c,this.ast=a,this._stateStyles=e}match(c,a,e,i){return vl(this.ast.matchers,c,a,e,i)}buildStyles(c,a,e){let i=this._stateStyles.get("*");return c!==void 0&&(i=this._stateStyles.get(c?.toString())||i),i?i.buildStyles(a,e):new Map}build(c,a,e,i,s,n,l,f,o,t){let m=[],z=this.ast.options&&this.ast.options.params||h3,h=l&&l.params||h3,v=this.buildStyles(e,h,m),M=f&&f.params||h3,d=this.buildStyles(i,M,m),S=new Set,L=new Map,N=new Map,y=i==="void",F={params:u8(M,z),delay:this.ast.options?.delay},D=t?[]:M8(c,a,this.ast.animation,s,n,v,d,F,o,m),A=0;return D.forEach(B=>{A=Math.max(B.duration+B.delay,A)}),m.length?r8(a,this._triggerName,e,i,y,v,d,[],[],L,N,A,m):(D.forEach(B=>{let q=B.element,i1=U(L,q,new Set);B.preStyleProps.forEach(m1=>i1.add(m1));let v6=U(N,q,new Set);B.postStyleProps.forEach(m1=>v6.add(m1)),q!==a&&S.add(q)}),r8(a,this._triggerName,e,i,y,v,d,D,[...S.values()],L,N,A))}};function vl(r,c,a,e,i){return r.some(s=>s(c,a,e,i))}function u8(r,c){let a=a2({},c);return Object.entries(r).forEach(([e,i])=>{i!=null&&(a[e]=i)}),a}var N3=class{constructor(c,a,e){this.styles=c,this.defaultParams=a,this.normalizer=e}buildStyles(c,a){let e=new Map,i=u8(c,this.defaultParams);return this.styles.styles.forEach(s=>{typeof s!="string"&&s.forEach((n,l)=>{n&&(n=F1(n,i,a));let f=this.normalizer.normalizePropertyName(l,a);n=this.normalizer.normalizeStyleValue(l,f,n,a),e.set(l,n)})}),e}};function Hl(r,c,a){return new S3(r,c,a)}var S3=class{constructor(c,a,e){this.name=c,this.ast=a,this._normalizer=e,this.transitionFactories=[],this.states=new Map,a.states.forEach(i=>{let s=i.options&&i.options.params||{};this.states.set(i.name,new N3(i.style,s,e))}),i8(this.states,"true","1"),i8(this.states,"false","0"),a.transitions.forEach(i=>{this.transitionFactories.push(new p2(c,i,this.states))}),this.fallbackTransition=pl(c,this.states,this._normalizer)}get containsQueries(){return this.ast.queryCount>0}matchTransition(c,a,e,i){return this.transitionFactories.find(n=>n.match(c,a,e,i))||null}matchStyles(c,a,e){return this.fallbackTransition.buildStyles(c,a,e)}};function pl(r,c,a){let e=[(n,l)=>!0],i={type:g.Sequence,steps:[],options:null},s={type:g.Transition,animation:i,matchers:e,options:null,queryCount:0,depCount:0};return new p2(r,s,c)}function i8(r,c,a){r.has(c)?r.has(a)||r.set(a,r.get(c)):r.has(a)&&r.set(c,r.get(a))}var Vl=new E1,y3=class{constructor(c,a,e){this.bodyNode=c,this._driver=a,this._normalizer=e,this._animations=new Map,this._playersById=new Map,this.players=[]}register(c,a){let e=[],i=[],s=V8(this._driver,a,e,i);if(e.length)throw An(e);i.length&&void 0,this._animations.set(c,s)}_buildPlayer(c,a,e){let i=c.element,s=t8(this._normalizer,c.keyframes,a,e);return this._driver.animate(i,s,c.duration,c.delay,c.easing,[],!0)}create(c,a,e={}){let i=[],s=this._animations.get(c),n,l=new Map;if(s?(n=M8(this._driver,a,s,v8,V3,new Map,new Map,e,Vl,i),n.forEach(t=>{let m=U(l,t.element,new Map);t.postStyleProps.forEach(z=>m.set(z,null))})):(i.push(Tn()),n=[]),i.length)throw Pn(i);l.forEach((t,m)=>{t.forEach((z,h)=>{t.set(h,this._driver.computeStyle(m,h,Q))})});let f=n.map(t=>{let m=l.get(t.element);return this._buildPlayer(t,new Map,m)}),o=n1(f);return this._playersById.set(c,o),o.onDestroy(()=>this.destroy(c)),this.players.push(o),o}destroy(c){let a=this._getPlayer(c);a.destroy(),this._playersById.delete(c);let e=this.players.indexOf(a);e>=0&&this.players.splice(e,1)}_getPlayer(c){let a=this._playersById.get(c);if(!a)throw Fn(c);return a}listen(c,a,e,i){let s=E3(a,"","","");return F3(this._getPlayer(c),e,s,i),()=>{}}command(c,a,e,i){if(e=="register"){this.register(c,i[0]);return}if(e=="create"){let n=i[0]||{};this.create(c,a,n);return}let s=this._getPlayer(c);switch(e){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(i[0]));break;case"destroy":this.destroy(c);break}}},s8="ng-animate-queued",Ml=".ng-animate-queued",v3="ng-animate-disabled",ul=".ng-animate-disabled",Cl="ng-star-inserted",dl=".ng-star-inserted",Ll=[],C8={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},gl={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},j="__ng_removed",D1=class{get params(){return this.options.params}constructor(c,a=""){this.namespaceId=a;let e=c&&c.hasOwnProperty("value"),i=e?c.value:c;if(this.value=xl(i),e){let s=c,{value:n}=s,l=M6(s,["value"]);this.options=l}else this.options={};this.options.params||(this.options.params={})}absorbOptions(c){let a=c.params;if(a){let e=this.options.params;Object.keys(a).forEach(i=>{e[i]==null&&(e[i]=a[i])})}}},P1="void",H3=new D1(P1),w3=class{constructor(c,a,e){this.id=c,this.hostElement=a,this._engine=e,this.players=[],this._triggers=new Map,this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+c,Z(a,this._hostClassName)}listen(c,a,e,i){if(!this._triggers.has(a))throw En(e,a);if(e==null||e.length==0)throw Dn(a);if(!Nl(e))throw Bn(e,a);let s=U(this._elementListeners,c,[]),n={name:a,phase:e,callback:i};s.push(n);let l=U(this._engine.statesByElement,c,new Map);return l.has(a)||(Z(c,s2),Z(c,s2+"-"+a),l.set(a,H3)),()=>{this._engine.afterFlush(()=>{let f=s.indexOf(n);f>=0&&s.splice(f,1),this._triggers.has(a)||l.delete(a)})}}register(c,a){return this._triggers.has(c)?!1:(this._triggers.set(c,a),!0)}_getTrigger(c){let a=this._triggers.get(c);if(!a)throw Rn(c);return a}trigger(c,a,e,i=!0){let s=this._getTrigger(a),n=new B1(this.id,a,c),l=this._engine.statesByElement.get(c);l||(Z(c,s2),Z(c,s2+"-"+a),this._engine.statesByElement.set(c,l=new Map));let f=l.get(a),o=new D1(e,this.id);if(!(e&&e.hasOwnProperty("value"))&&f&&o.absorbOptions(f.options),l.set(a,o),f||(f=H3),!(o.value===P1)&&f.value===o.value){if(!wl(f.params,o.params)){let M=[],d=s.matchStyles(f.value,f.params,M),S=s.matchStyles(o.value,o.params,M);M.length?this._engine.reportError(M):this._engine.afterFlush(()=>{H1(c,d),Y(c,S)})}return}let z=U(this._engine.playersByElement,c,[]);z.forEach(M=>{M.namespaceId==this.id&&M.triggerName==a&&M.queued&&M.destroy()});let h=s.matchTransition(f.value,o.value,c,o.params),v=!1;if(!h){if(!i)return;h=s.fallbackTransition,v=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:c,triggerName:a,transition:h,fromState:f,toState:o,player:n,isFallbackTransition:v}),v||(Z(c,s8),n.onStart(()=>{b1(c,s8)})),n.onDone(()=>{let M=this.players.indexOf(n);M>=0&&this.players.splice(M,1);let d=this._engine.playersByElement.get(c);if(d){let S=d.indexOf(n);S>=0&&d.splice(S,1)}}),this.players.push(n),z.push(n),n}deregister(c){this._triggers.delete(c),this._engine.statesByElement.forEach(a=>a.delete(c)),this._elementListeners.forEach((a,e)=>{this._elementListeners.set(e,a.filter(i=>i.name!=c))})}clearElementCache(c){this._engine.statesByElement.delete(c),this._elementListeners.delete(c);let a=this._engine.playersByElement.get(c);a&&(a.forEach(e=>e.destroy()),this._engine.playersByElement.delete(c))}_signalRemovalForInnerTriggers(c,a){let e=this._engine.driver.query(c,t2,!0);e.forEach(i=>{if(i[j])return;let s=this._engine.fetchNamespacesByElement(i);s.size?s.forEach(n=>n.triggerLeaveAnimation(i,a,!1,!0)):this.clearElementCache(i)}),this._engine.afterFlushAnimationsDone(()=>e.forEach(i=>this.clearElementCache(i)))}triggerLeaveAnimation(c,a,e,i){let s=this._engine.statesByElement.get(c),n=new Map;if(s){let l=[];if(s.forEach((f,o)=>{if(n.set(o,f.value),this._triggers.has(o)){let t=this.trigger(c,o,P1,i);t&&l.push(t)}}),l.length)return this._engine.markElementAsRemoved(this.id,c,!0,a,n),e&&n1(l).onDone(()=>this._engine.processLeaveNode(c)),!0}return!1}prepareLeaveAnimationListeners(c){let a=this._elementListeners.get(c),e=this._engine.statesByElement.get(c);if(a&&e){let i=new Set;a.forEach(s=>{let n=s.name;if(i.has(n))return;i.add(n);let f=this._triggers.get(n).fallbackTransition,o=e.get(n)||H3,t=new D1(P1),m=new B1(this.id,n,c);this._engine.totalQueuedPlayers++,this._queue.push({element:c,triggerName:n,transition:f,fromState:o,toState:t,player:m,isFallbackTransition:!0})})}}removeNode(c,a){let e=this._engine;if(c.childElementCount&&this._signalRemovalForInnerTriggers(c,a),this.triggerLeaveAnimation(c,a,!0))return;let i=!1;if(e.totalAnimations){let s=e.players.length?e.playersByQueriedElement.get(c):[];if(s&&s.length)i=!0;else{let n=c;for(;n=n.parentNode;)if(e.statesByElement.get(n)){i=!0;break}}}if(this.prepareLeaveAnimationListeners(c),i)e.markElementAsRemoved(this.id,c,!1,a);else{let s=c[j];(!s||s===C8)&&(e.afterFlush(()=>this.clearElementCache(c)),e.destroyInnerAnimations(c),e._onRemovalComplete(c,a))}}insertNode(c,a){Z(c,this._hostClassName)}drainQueuedTransitions(c){let a=[];return this._queue.forEach(e=>{let i=e.player;if(i.destroyed)return;let s=e.element,n=this._elementListeners.get(s);n&&n.forEach(l=>{if(l.name==e.triggerName){let f=E3(s,e.triggerName,e.fromState.value,e.toState.value);f._data=c,F3(e.player,l.phase,f,l.callback)}}),i.markedForDestroy?this._engine.afterFlush(()=>{i.destroy()}):a.push(e)}),this._queue=[],a.sort((e,i)=>{let s=e.transition.ast.depCount,n=i.transition.ast.depCount;return s==0||n==0?s-n:this._engine.driver.containsElement(e.element,i.element)?1:-1})}destroy(c){this.players.forEach(a=>a.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,c)}},k3=class{_onRemovalComplete(c,a){this.onRemovalComplete(c,a)}constructor(c,a,e,i){this.bodyNode=c,this.driver=a,this._normalizer=e,this.scheduler=i,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(s,n)=>{}}get queuedPlayers(){let c=[];return this._namespaceList.forEach(a=>{a.players.forEach(e=>{e.queued&&c.push(e)})}),c}createNamespace(c,a){let e=new w3(c,a,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,a)?this._balanceNamespaceList(e,a):(this.newHostElements.set(a,e),this.collectEnterElement(a)),this._namespaceLookup[c]=e}_balanceNamespaceList(c,a){let e=this._namespaceList,i=this.namespacesByHostElement;if(e.length-1>=0){let n=!1,l=this.driver.getParentElement(a);for(;l;){let f=i.get(l);if(f){let o=e.indexOf(f);e.splice(o+1,0,c),n=!0;break}l=this.driver.getParentElement(l)}n||e.unshift(c)}else e.push(c);return i.set(a,c),c}register(c,a){let e=this._namespaceLookup[c];return e||(e=this.createNamespace(c,a)),e}registerTrigger(c,a,e){let i=this._namespaceLookup[c];i&&i.register(a,e)&&this.totalAnimations++}destroy(c,a){c&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let e=this._fetchNamespace(c);this.namespacesByHostElement.delete(e.hostElement);let i=this._namespaceList.indexOf(e);i>=0&&this._namespaceList.splice(i,1),e.destroy(a),delete this._namespaceLookup[c]}))}_fetchNamespace(c){return this._namespaceLookup[c]}fetchNamespacesByElement(c){let a=new Set,e=this.statesByElement.get(c);if(e){for(let i of e.values())if(i.namespaceId){let s=this._fetchNamespace(i.namespaceId);s&&a.add(s)}}return a}trigger(c,a,e,i){if(f2(a)){let s=this._fetchNamespace(c);if(s)return s.trigger(a,e,i),!0}return!1}insertNode(c,a,e,i){if(!f2(a))return;let s=a[j];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;let n=this.collectedLeaveElements.indexOf(a);n>=0&&this.collectedLeaveElements.splice(n,1)}if(c){let n=this._fetchNamespace(c);n&&n.insertNode(a,e)}i&&this.collectEnterElement(a)}collectEnterElement(c){this.collectedEnterElements.push(c)}markElementAsDisabled(c,a){a?this.disabledNodes.has(c)||(this.disabledNodes.add(c),Z(c,v3)):this.disabledNodes.has(c)&&(this.disabledNodes.delete(c),b1(c,v3))}removeNode(c,a,e){if(f2(a)){this.scheduler?.notify();let i=c?this._fetchNamespace(c):null;i?i.removeNode(a,e):this.markElementAsRemoved(c,a,!1,e);let s=this.namespacesByHostElement.get(a);s&&s.id!==c&&s.removeNode(a,e)}else this._onRemovalComplete(a,e)}markElementAsRemoved(c,a,e,i,s){this.collectedLeaveElements.push(a),a[j]={namespaceId:c,setForRemoval:i,hasAnimation:e,removedBeforeQueried:!1,previousTriggersValues:s}}listen(c,a,e,i,s){return f2(a)?this._fetchNamespace(c).listen(a,e,i,s):()=>{}}_buildInstruction(c,a,e,i,s){return c.transition.build(this.driver,c.element,c.fromState.value,c.toState.value,e,i,c.fromState.options,c.toState.options,a,s)}destroyInnerAnimations(c){let a=this.driver.query(c,t2,!0);a.forEach(e=>this.destroyActiveAnimationsForElement(e)),this.playersByQueriedElement.size!=0&&(a=this.driver.query(c,M3,!0),a.forEach(e=>this.finishActiveQueriedAnimationOnElement(e)))}destroyActiveAnimationsForElement(c){let a=this.playersByElement.get(c);a&&a.forEach(e=>{e.queued?e.markedForDestroy=!0:e.destroy()})}finishActiveQueriedAnimationOnElement(c){let a=this.playersByQueriedElement.get(c);a&&a.forEach(e=>e.finish())}whenRenderingDone(){return new Promise(c=>{if(this.players.length)return n1(this.players).onDone(()=>c());c()})}processLeaveNode(c){let a=c[j];if(a&&a.setForRemoval){if(c[j]=C8,a.namespaceId){this.destroyInnerAnimations(c);let e=this._fetchNamespace(a.namespaceId);e&&e.clearElementCache(c)}this._onRemovalComplete(c,a.setForRemoval)}c.classList?.contains(v3)&&this.markElementAsDisabled(c,!1),this.driver.query(c,ul,!0).forEach(e=>{this.markElementAsDisabled(e,!1)})}flush(c=-1){let a=[];if(this.newHostElements.size&&(this.newHostElements.forEach((e,i)=>this._balanceNamespaceList(e,i)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let e=0;e<this.collectedEnterElements.length;e++){let i=this.collectedEnterElements[e];Z(i,Cl)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let e=[];try{a=this._flushAnimations(e,c)}finally{for(let i=0;i<e.length;i++)e[i]()}}else for(let e=0;e<this.collectedLeaveElements.length;e++){let i=this.collectedLeaveElements[e];this.processLeaveNode(i)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(e=>e()),this._flushFns=[],this._whenQuietFns.length){let e=this._whenQuietFns;this._whenQuietFns=[],a.length?n1(a).onDone(()=>{e.forEach(i=>i())}):e.forEach(i=>i())}}reportError(c){throw qn(c)}_flushAnimations(c,a){let e=new E1,i=[],s=new Map,n=[],l=new Map,f=new Map,o=new Map,t=new Set;this.disabledNodes.forEach(p=>{t.add(p);let u=this.driver.query(p,Ml,!0);for(let C=0;C<u.length;C++)t.add(u[C])});let m=this.bodyNode,z=Array.from(this.statesByElement.keys()),h=f8(z,this.collectedEnterElements),v=new Map,M=0;h.forEach((p,u)=>{let C=v8+M++;v.set(u,C),p.forEach(b=>Z(b,C))});let d=[],S=new Set,L=new Set;for(let p=0;p<this.collectedLeaveElements.length;p++){let u=this.collectedLeaveElements[p],C=u[j];C&&C.setForRemoval&&(d.push(u),S.add(u),C.hasAnimation?this.driver.query(u,dl,!0).forEach(b=>S.add(b)):L.add(u))}let N=new Map,y=f8(z,Array.from(S));y.forEach((p,u)=>{let C=V3+M++;N.set(u,C),p.forEach(b=>Z(b,C))}),c.push(()=>{h.forEach((p,u)=>{let C=v.get(u);p.forEach(b=>b1(b,C))}),y.forEach((p,u)=>{let C=N.get(u);p.forEach(b=>b1(b,C))}),d.forEach(p=>{this.processLeaveNode(p)})});let F=[],D=[];for(let p=this._namespaceList.length-1;p>=0;p--)this._namespaceList[p].drainQueuedTransitions(a).forEach(C=>{let b=C.player,R=C.element;if(F.push(b),this.collectedEnterElements.length){let _=R[j];if(_&&_.setForMove){if(_.previousTriggersValues&&_.previousTriggersValues.has(C.triggerName)){let z1=_.previousTriggersValues.get(C.triggerName),W=this.statesByElement.get(C.element);if(W&&W.has(C.triggerName)){let c2=W.get(C.triggerName);c2.value=z1,W.set(C.triggerName,c2)}}b.destroy();return}}let $=!m||!this.driver.containsElement(m,R),O=N.get(R),s1=v.get(R),T=this._buildInstruction(C,e,s1,O,$);if(T.errors&&T.errors.length){D.push(T);return}if($){b.onStart(()=>H1(R,T.fromStyles)),b.onDestroy(()=>Y(R,T.toStyles)),i.push(b);return}if(C.isFallbackTransition){b.onStart(()=>H1(R,T.fromStyles)),b.onDestroy(()=>Y(R,T.toStyles)),i.push(b);return}let V6=[];T.timelines.forEach(_=>{_.stretchStartingKeyframe=!0,this.disabledNodes.has(_.element)||V6.push(_)}),T.timelines=V6,e.append(R,T.timelines);let on={instruction:T,player:b,element:R};n.push(on),T.queriedElements.forEach(_=>U(l,_,[]).push(b)),T.preStyleProps.forEach((_,z1)=>{if(_.size){let W=f.get(z1);W||f.set(z1,W=new Set),_.forEach((c2,r3)=>W.add(r3))}}),T.postStyleProps.forEach((_,z1)=>{let W=o.get(z1);W||o.set(z1,W=new Set),_.forEach((c2,r3)=>W.add(r3))})});if(D.length){let p=[];D.forEach(u=>{p.push(_n(u.triggerName,u.errors))}),F.forEach(u=>u.destroy()),this.reportError(p)}let A=new Map,B=new Map;n.forEach(p=>{let u=p.element;e.has(u)&&(B.set(u,u),this._beforeAnimationBuild(p.player.namespaceId,p.instruction,A))}),i.forEach(p=>{let u=p.element;this._getPreviousPlayers(u,!1,p.namespaceId,p.triggerName,null).forEach(b=>{U(A,u,[]).push(b),b.destroy()})});let q=d.filter(p=>o8(p,f,o)),i1=new Map;l8(i1,this.driver,L,o,Q).forEach(p=>{o8(p,f,o)&&q.push(p)});let m1=new Map;h.forEach((p,u)=>{l8(m1,this.driver,new Set(p),f,i2)}),q.forEach(p=>{let u=i1.get(p),C=m1.get(p);i1.set(p,new Map([...u?.entries()??[],...C?.entries()??[]]))});let e3=[],H6=[],p6={};n.forEach(p=>{let{element:u,player:C,instruction:b}=p;if(e.has(u)){if(t.has(u)){C.onDestroy(()=>Y(u,b.toStyles)),C.disabled=!0,C.overrideTotalTime(b.totalTime),i.push(C);return}let R=p6;if(B.size>1){let O=u,s1=[];for(;O=O.parentNode;){let T=B.get(O);if(T){R=T;break}s1.push(O)}s1.forEach(T=>B.set(T,R))}let $=this._buildAnimation(C.namespaceId,b,A,s,m1,i1);if(C.setRealPlayer($),R===p6)e3.push(C);else{let O=this.playersByElement.get(R);O&&O.length&&(C.parentPlayer=n1(O)),i.push(C)}}else H1(u,b.fromStyles),C.onDestroy(()=>Y(u,b.toStyles)),H6.push(C),t.has(u)&&i.push(C)}),H6.forEach(p=>{let u=s.get(p.element);if(u&&u.length){let C=n1(u);p.setRealPlayer(C)}}),i.forEach(p=>{p.parentPlayer?p.syncPlayerEvents(p.parentPlayer):p.destroy()});for(let p=0;p<d.length;p++){let u=d[p],C=u[j];if(b1(u,V3),C&&C.hasAnimation)continue;let b=[];if(l.size){let $=l.get(u);$&&$.length&&b.push(...$);let O=this.driver.query(u,M3,!0);for(let s1=0;s1<O.length;s1++){let T=l.get(O[s1]);T&&T.length&&b.push(...T)}}let R=b.filter($=>!$.destroyed);R.length?Sl(this,u,R):this.processLeaveNode(u)}return d.length=0,e3.forEach(p=>{this.players.push(p),p.onDone(()=>{p.destroy();let u=this.players.indexOf(p);this.players.splice(u,1)}),p.play()}),e3}afterFlush(c){this._flushFns.push(c)}afterFlushAnimationsDone(c){this._whenQuietFns.push(c)}_getPreviousPlayers(c,a,e,i,s){let n=[];if(a){let l=this.playersByQueriedElement.get(c);l&&(n=l)}else{let l=this.playersByElement.get(c);if(l){let f=!s||s==P1;l.forEach(o=>{o.queued||!f&&o.triggerName!=i||n.push(o)})}}return(e||i)&&(n=n.filter(l=>!(e&&e!=l.namespaceId||i&&i!=l.triggerName))),n}_beforeAnimationBuild(c,a,e){let i=a.triggerName,s=a.element,n=a.isRemovalTransition?void 0:c,l=a.isRemovalTransition?void 0:i;for(let f of a.timelines){let o=f.element,t=o!==s,m=U(e,o,[]);this._getPreviousPlayers(o,t,n,l,a.toState).forEach(h=>{let v=h.getRealPlayer();v.beforeDestroy&&v.beforeDestroy(),h.destroy(),m.push(h)})}H1(s,a.fromStyles)}_buildAnimation(c,a,e,i,s,n){let l=a.triggerName,f=a.element,o=[],t=new Set,m=new Set,z=a.timelines.map(v=>{let M=v.element;t.add(M);let d=M[j];if(d&&d.removedBeforeQueried)return new g1(v.duration,v.delay);let S=M!==f,L=yl((e.get(M)||Ll).map(A=>A.getRealPlayer())).filter(A=>{let B=A;return B.element?B.element===M:!1}),N=s.get(M),y=n.get(M),F=t8(this._normalizer,v.keyframes,N,y),D=this._buildPlayer(v,F,L);if(v.subTimeline&&i&&m.add(M),S){let A=new B1(c,l,M);A.setRealPlayer(D),o.push(A)}return D});o.forEach(v=>{U(this.playersByQueriedElement,v.element,[]).push(v),v.onDone(()=>bl(this.playersByQueriedElement,v.element,v))}),t.forEach(v=>Z(v,J6));let h=n1(z);return h.onDestroy(()=>{t.forEach(v=>b1(v,J6)),Y(f,a.toStyles)}),m.forEach(v=>{U(i,v,[]).push(h)}),h}_buildPlayer(c,a,e){return a.length>0?this.driver.animate(c.element,a,c.duration,c.delay,c.easing,e):new g1(c.duration,c.delay)}},B1=class{constructor(c,a,e){this.namespaceId=c,this.triggerName=a,this.element=e,this._player=new g1,this._containsRealPlayer=!1,this._queuedCallbacks=new Map,this.destroyed=!1,this.parentPlayer=null,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(c){this._containsRealPlayer||(this._player=c,this._queuedCallbacks.forEach((a,e)=>{a.forEach(i=>F3(c,e,void 0,i))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(c.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(c){this.totalTime=c}syncPlayerEvents(c){let a=this._player;a.triggerCallback&&c.onStart(()=>a.triggerCallback("start")),c.onDone(()=>this.finish()),c.onDestroy(()=>this.destroy())}_queueEvent(c,a){U(this._queuedCallbacks,c,[]).push(a)}onDone(c){this.queued&&this._queueEvent("done",c),this._player.onDone(c)}onStart(c){this.queued&&this._queueEvent("start",c),this._player.onStart(c)}onDestroy(c){this.queued&&this._queueEvent("destroy",c),this._player.onDestroy(c)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(c){this.queued||this._player.setPosition(c)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(c){let a=this._player;a.triggerCallback&&a.triggerCallback(c)}};function bl(r,c,a){let e=r.get(c);if(e){if(e.length){let i=e.indexOf(a);e.splice(i,1)}e.length==0&&r.delete(c)}return e}function xl(r){return r??null}function f2(r){return r&&r.nodeType===1}function Nl(r){return r=="start"||r=="done"}function n8(r,c){let a=r.style.display;return r.style.display=c??"none",a}function l8(r,c,a,e,i){let s=[];a.forEach(f=>s.push(n8(f)));let n=[];e.forEach((f,o)=>{let t=new Map;f.forEach(m=>{let z=c.computeStyle(o,m,i);t.set(m,z),(!z||z.length==0)&&(o[j]=gl,n.push(o))}),r.set(o,t)});let l=0;return a.forEach(f=>n8(f,s[l++])),n}function f8(r,c){let a=new Map;if(r.forEach(l=>a.set(l,[])),c.length==0)return a;let e=1,i=new Set(c),s=new Map;function n(l){if(!l)return e;let f=s.get(l);if(f)return f;let o=l.parentNode;return a.has(o)?f=o:i.has(o)?f=e:f=n(o),s.set(l,f),f}return c.forEach(l=>{let f=n(l);f!==e&&a.get(f).push(l)}),a}function Z(r,c){r.classList?.add(c)}function b1(r,c){r.classList?.remove(c)}function Sl(r,c,a){n1(a).onDone(()=>r.processLeaveNode(c))}function yl(r){let c=[];return d8(r,c),c}function d8(r,c){for(let a=0;a<r.length;a++){let e=r[a];e instanceof t3?d8(e.players,c):c.push(e)}}function wl(r,c){let a=Object.keys(r),e=Object.keys(c);if(a.length!=e.length)return!1;for(let i=0;i<a.length;i++){let s=a[i];if(!c.hasOwnProperty(s)||r[s]!==c[s])return!1}return!0}function o8(r,c,a){let e=a.get(r);if(!e)return!1;let i=c.get(r);return i?e.forEach(s=>i.add(s)):c.set(r,e),a.delete(r),!0}var N1=class{constructor(c,a,e,i){this._driver=a,this._normalizer=e,this._triggerCache={},this.onRemovalComplete=(s,n)=>{},this._transitionEngine=new k3(c.body,a,e,i),this._timelineEngine=new y3(c.body,a,e),this._transitionEngine.onRemovalComplete=(s,n)=>this.onRemovalComplete(s,n)}registerTrigger(c,a,e,i,s){let n=c+"-"+i,l=this._triggerCache[n];if(!l){let f=[],o=[],t=V8(this._driver,s,f,o);if(f.length)throw wn(i,f);o.length&&void 0,l=Hl(i,t,this._normalizer),this._triggerCache[n]=l}this._transitionEngine.registerTrigger(a,i,l)}register(c,a){this._transitionEngine.register(c,a)}destroy(c,a){this._transitionEngine.destroy(c,a)}onInsert(c,a,e,i){this._transitionEngine.insertNode(c,a,e,i)}onRemove(c,a,e){this._transitionEngine.removeNode(c,a,e)}disableAnimations(c,a){this._transitionEngine.markElementAsDisabled(c,a)}process(c,a,e,i){if(e.charAt(0)=="@"){let[s,n]=Y6(e),l=i;this._timelineEngine.command(s,a,n,l)}else this._transitionEngine.trigger(c,a,e,i)}listen(c,a,e,i,s){if(e.charAt(0)=="@"){let[n,l]=Y6(e);return this._timelineEngine.listen(n,a,l,s)}return this._transitionEngine.listen(c,a,e,i,s)}flush(c=-1){this._transitionEngine.flush(c)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(c){this._transitionEngine.afterFlushAnimationsDone(c)}};function kl(r,c){let a=null,e=null;return Array.isArray(c)&&c.length?(a=p3(c[0]),c.length>1&&(e=p3(c[c.length-1]))):c instanceof Map&&(a=p3(c)),a||e?new A3(r,a,e):null}var x1=class x1{constructor(c,a,e){this._element=c,this._startStyles=a,this._endStyles=e,this._state=0;let i=x1.initialStylesByElement.get(c);i||x1.initialStylesByElement.set(c,i=new Map),this._initialStyles=i}start(){this._state<1&&(this._startStyles&&Y(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Y(this._element,this._initialStyles),this._endStyles&&(Y(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(x1.initialStylesByElement.delete(this._element),this._startStyles&&(H1(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(H1(this._element,this._endStyles),this._endStyles=null),Y(this._element,this._initialStyles),this._state=3)}};x1.initialStylesByElement=new WeakMap;var A3=x1;function p3(r){let c=null;return r.forEach((a,e)=>{Al(e)&&(c=c||new Map,c.set(e,a))}),c}function Al(r){return r==="display"||r==="position"}var V2=class{constructor(c,a,e,i){this.element=c,this.keyframes=a,this.options=e,this._specialStyles=i,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this._originalOnDoneFns=[],this._originalOnStartFns=[],this.time=0,this.parentPlayer=null,this.currentSnapshot=new Map,this._duration=e.duration,this._delay=e.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(c=>c()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;let c=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,c,this.options),this._finalKeyframe=c.length?c[c.length-1]:new Map;let a=()=>this._onFinish();this.domPlayer.addEventListener("finish",a),this.onDestroy(()=>{this.domPlayer.removeEventListener("finish",a)})}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(c){let a=[];return c.forEach(e=>{a.push(Object.fromEntries(e))}),a}_triggerWebAnimation(c,a,e){return c.animate(this._convertKeyframesToObject(a),e)}onStart(c){this._originalOnStartFns.push(c),this._onStartFns.push(c)}onDone(c){this._originalOnDoneFns.push(c),this._onDoneFns.push(c)}onDestroy(c){this._onDestroyFns.push(c)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(c=>c()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(c=>c()),this._onDestroyFns=[])}setPosition(c){this.domPlayer===void 0&&this.init(),this.domPlayer.currentTime=c*this.time}getPosition(){return+(this.domPlayer.currentTime??0)/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){let c=new Map;this.hasStarted()&&this._finalKeyframe.forEach((e,i)=>{i!=="offset"&&c.set(i,this._finished?e:q3(this.element,i))}),this.currentSnapshot=c}triggerCallback(c){let a=c==="start"?this._onStartFns:this._onDoneFns;a.forEach(e=>e()),a.length=0}},M2=class{validateStyleProperty(c){return!0}validateAnimatableStyleProperty(c){return!0}matchesElement(c,a){return!1}containsElement(c,a){return m8(c,a)}getParentElement(c){return D3(c)}query(c,a,e){return z8(c,a,e)}computeStyle(c,a,e){return q3(c,a)}animate(c,a,e,i,s,n=[]){let l=i==0?"both":"forwards",f={duration:e,delay:i,fill:l};s&&(f.easing=s);let o=new Map,t=n.filter(h=>h instanceof V2);Yn(e,i)&&t.forEach(h=>{h.currentSnapshot.forEach((v,M)=>o.set(M,v))});let m=Kn(a).map(h=>new Map(h));m=Xn(c,m,o);let z=kl(c,m);return new V2(c,m,f,z)}};var o2="@",L8="@.disabled",u2=class{constructor(c,a,e,i){this.namespaceId=c,this.delegate=a,this.engine=e,this._onDestroy=i,this.\u0275type=0}get data(){return this.delegate.data}destroyNode(c){this.delegate.destroyNode?.(c)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(c,a){return this.delegate.createElement(c,a)}createComment(c){return this.delegate.createComment(c)}createText(c){return this.delegate.createText(c)}appendChild(c,a){this.delegate.appendChild(c,a),this.engine.onInsert(this.namespaceId,a,c,!1)}insertBefore(c,a,e,i=!0){this.delegate.insertBefore(c,a,e),this.engine.onInsert(this.namespaceId,a,c,i)}removeChild(c,a,e){this.engine.onRemove(this.namespaceId,a,this.delegate)}selectRootElement(c,a){return this.delegate.selectRootElement(c,a)}parentNode(c){return this.delegate.parentNode(c)}nextSibling(c){return this.delegate.nextSibling(c)}setAttribute(c,a,e,i){this.delegate.setAttribute(c,a,e,i)}removeAttribute(c,a,e){this.delegate.removeAttribute(c,a,e)}addClass(c,a){this.delegate.addClass(c,a)}removeClass(c,a){this.delegate.removeClass(c,a)}setStyle(c,a,e,i){this.delegate.setStyle(c,a,e,i)}removeStyle(c,a,e){this.delegate.removeStyle(c,a,e)}setProperty(c,a,e){a.charAt(0)==o2&&a==L8?this.disableAnimations(c,!!e):this.delegate.setProperty(c,a,e)}setValue(c,a){this.delegate.setValue(c,a)}listen(c,a,e){return this.delegate.listen(c,a,e)}disableAnimations(c,a){this.engine.disableAnimations(c,a)}},T3=class extends u2{constructor(c,a,e,i,s){super(a,e,i,s),this.factory=c,this.namespaceId=a}setProperty(c,a,e){a.charAt(0)==o2?a.charAt(1)=="."&&a==L8?(e=e===void 0?!0:!!e,this.disableAnimations(c,e)):this.engine.process(this.namespaceId,c,a.slice(1),e):this.delegate.setProperty(c,a,e)}listen(c,a,e){if(a.charAt(0)==o2){let i=Tl(c),s=a.slice(1),n="";return s.charAt(0)!=o2&&([s,n]=Pl(s)),this.engine.listen(this.namespaceId,i,s,n,l=>{let f=l._data||-1;this.factory.scheduleListenerCallback(f,e,l)})}return this.delegate.listen(c,a,e)}};function Tl(r){switch(r){case"body":return document.body;case"document":return document;case"window":return window;default:return r}}function Pl(r){let c=r.indexOf("."),a=r.substring(0,c),e=r.slice(c+1);return[a,e]}var C2=class{constructor(c,a,e){this.delegate=c,this.engine=a,this._zone=e,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,a.onRemovalComplete=(i,s)=>{let n=s?.parentNode(i);n&&s.removeChild(n,i)}}createRenderer(c,a){let e="",i=this.delegate.createRenderer(c,a);if(!c||!a?.data?.animation){let o=this._rendererCache,t=o.get(i);if(!t){let m=()=>o.delete(i);t=new u2(e,i,this.engine,m),o.set(i,t)}return t}let s=a.id,n=a.id+"-"+this._currentId;this._currentId++,this.engine.register(n,c);let l=o=>{Array.isArray(o)?o.forEach(l):this.engine.registerTrigger(s,n,c,o.name,o)};return a.data.animation.forEach(l),new T3(this,n,i,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(c,a,e){if(c>=0&&c<this._microtaskId){this._zone.run(()=>a(e));return}let i=this._animationCallbacksBuffer;i.length==0&&queueMicrotask(()=>{this._zone.run(()=>{i.forEach(s=>{let[n,l]=s;n(l)}),this._animationCallbacksBuffer=[]})}),i.push([a,e])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}};var El=(()=>{let c=class c extends N1{constructor(e,i,s){super(e,i,s,r2(d6,{optional:!0}))}ngOnDestroy(){this.flush()}};c.\u0275fac=function(i){return new(i||c)(e2(S6),e2(p1),e2(V1))},c.\u0275prov=L1({token:c,factory:c.\u0275fac});let r=c;return r})();function Dl(){return new z2}function Bl(r,c,a){return new C2(r,c,a)}var g8=[{provide:V1,useFactory:Dl},{provide:N1,useClass:El},{provide:L6,useFactory:Bl,deps:[T6,N1,b6]}],Rl=[{provide:p1,useFactory:()=>new M2},{provide:l3,useValue:"BrowserAnimations"},...g8],v$=[{provide:p1,useClass:B3},{provide:l3,useValue:"NoopAnimations"},...g8];function b8(){return g6("NgEagerAnimations"),[...Rl]}function ql(r){let c=r,a=Math.floor(Math.abs(r)),e=r.toString().replace(/^[^.]*\.?/,"").length,i=parseInt(r.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return c===1?1:i===0&&a!==0&&a%1e6===0&&e===0||!(i>=0&&i<=5)?4:5}var x8=["es-MX",[["a.\xA0m.","p.\xA0m."],void 0,void 0],void 0,[["D","L","M","M","J","V","S"],["dom","lun","mar","mi\xE9","jue","vie","s\xE1b"],["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"],["DO","LU","MA","MI","JU","VI","SA"]],void 0,[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],void 0,[["a. C.","d. C."],void 0,["antes de Cristo","despu\xE9s de Cristo"]],0,[6,0],["dd/MM/yy","d MMM y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}","{1} {0}","{1}, {0}",void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","\xA4#,##0.00","#E0"],"MXN","$","peso mexicano",{AUD:[void 0,"$"],BRL:[void 0,"R$"],BYN:[void 0,"p."],CAD:[void 0,"$"],CNY:[void 0,"\xA5"],ESP:["\u20A7"],EUR:[void 0,"\u20AC"],GBP:[void 0,"\xA3"],HKD:[void 0,"$"],ILS:[void 0,"\u20AA"],INR:[void 0,"\u20B9"],JPY:[void 0,"\xA5"],KRW:[void 0,"\u20A9"],MRO:["MRU"],MRU:["UM"],MXN:["$"],NZD:[void 0,"$"],PHP:[void 0,"\u20B1"],TWD:[void 0,"NT$"],USD:[void 0,"$"],VND:[void 0,"\u20AB"],XAF:[],XCD:[void 0,"$"],XOF:[]},"ltr",ql];y6(x8);var N8={providers:[q6($6,U6(),O6(R6),G6(),I6({paramsInheritanceStrategy:"always"}),W6(),_6()),C6(K6,j6),b8(),w6(k6(),A6()),D6(E6({includePostRequests:!0})),{provide:N6,useValue:"es-MX"},{provide:u6,useValue:{disableImageSizeWarning:!0,disableImageLazyLoadWarning:!0}},F6]};function S8(r,c){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);c&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),a.push.apply(a,e)}return a}function H(r){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?S8(Object(a),!0).forEach(function(e){E(r,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):S8(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))})}return r}function T2(r){"@babel/helpers - typeof";return T2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},T2(r)}function _l(r,c){if(!(r instanceof c))throw new TypeError("Cannot call a class as a function")}function y8(r,c){for(var a=0;a<c.length;a++){var e=c[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function Ol(r,c,a){return c&&y8(r.prototype,c),a&&y8(r,a),Object.defineProperty(r,"prototype",{writable:!1}),r}function E(r,c,a){return c in r?Object.defineProperty(r,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[c]=a,r}function r4(r,c){return Ul(r)||Wl(r,c)||J8(r,c)||jl()}function Z1(r){return Il(r)||Gl(r)||J8(r)||Zl()}function Il(r){if(Array.isArray(r))return Z3(r)}function Ul(r){if(Array.isArray(r))return r}function Gl(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Wl(r,c){var a=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(a!=null){var e=[],i=!0,s=!1,n,l;try{for(a=a.call(r);!(i=(n=a.next()).done)&&(e.push(n.value),!(c&&e.length===c));i=!0);}catch(f){s=!0,l=f}finally{try{!i&&a.return!=null&&a.return()}finally{if(s)throw l}}return e}}function J8(r,c){if(r){if(typeof r=="string")return Z3(r,c);var a=Object.prototype.toString.call(r).slice(8,-1);if(a==="Object"&&r.constructor&&(a=r.constructor.name),a==="Map"||a==="Set")return Array.from(r);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Z3(r,c)}}function Z3(r,c){(c==null||c>r.length)&&(c=r.length);for(var a=0,e=new Array(c);a<c;a++)e[a]=r[a];return e}function Zl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var w8=function(){},i4={},c0={},a0=null,e0={mark:w8,measure:w8};try{typeof window<"u"&&(i4=window),typeof document<"u"&&(c0=document),typeof MutationObserver<"u"&&(a0=MutationObserver),typeof performance<"u"&&(e0=performance)}catch{}var Kl=i4.navigator||{},k8=Kl.userAgent,A8=k8===void 0?"":k8,f1=i4,k=c0,T8=a0,d2=e0,S$=!!f1.document,r1=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",r0=~A8.indexOf("MSIE")||~A8.indexOf("Trident/"),L2,g2,b2,x2,N2,c1="___FONT_AWESOME___",j3=16,i0="fa",s0="svg-inline--fa",C1="data-fa-i2svg",K3="data-fa-pseudo-element",$l="data-fa-pseudo-element-pending",s4="data-prefix",n4="data-icon",P8="fontawesome-i2svg",Ql="async",Yl=["HTML","HEAD","STYLE","SCRIPT"],n0=function(){try{return!0}catch{return!1}}(),w="classic",P="sharp",l4=[w,P];function j1(r){return new Proxy(r,{get:function(a,e){return e in a?a[e]:a[w]}})}var O1=j1((L2={},E(L2,w,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),E(L2,P,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),L2)),I1=j1((g2={},E(g2,w,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),E(g2,P,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),g2)),U1=j1((b2={},E(b2,w,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),E(b2,P,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),b2)),Xl=j1((x2={},E(x2,w,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),E(x2,P,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),x2)),Jl=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,l0="fa-layers-text",cf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,af=j1((N2={},E(N2,w,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),E(N2,P,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),N2)),f0=[1,2,3,4,5,6,7,8,9,10],ef=f0.concat([11,12,13,14,15,16,17,18,19,20]),rf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],M1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},G1=new Set;Object.keys(I1[w]).map(G1.add.bind(G1));Object.keys(I1[P]).map(G1.add.bind(G1));var sf=[].concat(l4,Z1(G1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",M1.GROUP,M1.SWAP_OPACITY,M1.PRIMARY,M1.SECONDARY]).concat(f0.map(function(r){return"".concat(r,"x")})).concat(ef.map(function(r){return"w-".concat(r)})),q1=f1.FontAwesomeConfig||{};function nf(r){var c=k.querySelector("script["+r+"]");if(c)return c.getAttribute(r)}function lf(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}k&&typeof k.querySelector=="function"&&(F8=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],F8.forEach(function(r){var c=r4(r,2),a=c[0],e=c[1],i=lf(nf(a));i!=null&&(q1[e]=i)}));var F8,o0={styleDefault:"solid",familyDefault:"classic",cssPrefix:i0,replacementClass:s0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};q1.familyPrefix&&(q1.cssPrefix=q1.familyPrefix);var k1=H(H({},o0),q1);k1.autoReplaceSvg||(k1.observeMutations=!1);var V={};Object.keys(o0).forEach(function(r){Object.defineProperty(V,r,{enumerable:!0,set:function(a){k1[r]=a,_1.forEach(function(e){return e(V)})},get:function(){return k1[r]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(c){k1.cssPrefix=c,_1.forEach(function(a){return a(V)})},get:function(){return k1.cssPrefix}});f1.FontAwesomeConfig=V;var _1=[];function ff(r){return _1.push(r),function(){_1.splice(_1.indexOf(r),1)}}var l1=j3,X={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function of(r){if(!(!r||!r1)){var c=k.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=r;for(var a=k.head.childNodes,e=null,i=a.length-1;i>-1;i--){var s=a[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=s)}return k.head.insertBefore(c,e),r}}var tf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function W1(){for(var r=12,c="";r-- >0;)c+=tf[Math.random()*62|0];return c}function A1(r){for(var c=[],a=(r||[]).length>>>0;a--;)c[a]=r[a];return c}function f4(r){return r.classList?A1(r.classList):(r.getAttribute("class")||"").split(" ").filter(function(c){return c})}function t0(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function mf(r){return Object.keys(r||{}).reduce(function(c,a){return c+"".concat(a,'="').concat(t0(r[a]),'" ')},"").trim()}function E2(r){return Object.keys(r||{}).reduce(function(c,a){return c+"".concat(a,": ").concat(r[a].trim(),";")},"")}function o4(r){return r.size!==X.size||r.x!==X.x||r.y!==X.y||r.rotate!==X.rotate||r.flipX||r.flipY}function zf(r){var c=r.transform,a=r.containerWidth,e=r.iconWidth,i={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(c.x*32,", ").concat(c.y*32,") "),n="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),l="rotate(".concat(c.rotate," 0 0)"),f={transform:"".concat(s," ").concat(n," ").concat(l)},o={transform:"translate(".concat(e/2*-1," -256)")};return{outer:i,inner:f,path:o}}function hf(r){var c=r.transform,a=r.width,e=a===void 0?j3:a,i=r.height,s=i===void 0?j3:i,n=r.startCentered,l=n===void 0?!1:n,f="";return l&&r0?f+="translate(".concat(c.x/l1-e/2,"em, ").concat(c.y/l1-s/2,"em) "):l?f+="translate(calc(-50% + ".concat(c.x/l1,"em), calc(-50% + ").concat(c.y/l1,"em)) "):f+="translate(".concat(c.x/l1,"em, ").concat(c.y/l1,"em) "),f+="scale(".concat(c.size/l1*(c.flipX?-1:1),", ").concat(c.size/l1*(c.flipY?-1:1),") "),f+="rotate(".concat(c.rotate,"deg) "),f}var vf=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function m0(){var r=i0,c=s0,a=V.cssPrefix,e=V.replacementClass,i=vf;if(a!==r||e!==c){var s=new RegExp("\\.".concat(r,"\\-"),"g"),n=new RegExp("\\--".concat(r,"\\-"),"g"),l=new RegExp("\\.".concat(c),"g");i=i.replace(s,".".concat(a,"-")).replace(n,"--".concat(a,"-")).replace(l,".".concat(e))}return i}var E8=!1;function I3(){V.autoAddCss&&!E8&&(of(m0()),E8=!0)}var Hf={mixout:function(){return{dom:{css:m0,insertCss:I3}}},hooks:function(){return{beforeDOMElementCreation:function(){I3()},beforeI2svg:function(){I3()}}}},a1=f1||{};a1[c1]||(a1[c1]={});a1[c1].styles||(a1[c1].styles={});a1[c1].hooks||(a1[c1].hooks={});a1[c1].shims||(a1[c1].shims=[]);var K=a1[c1],z0=[],pf=function r(){k.removeEventListener("DOMContentLoaded",r),P2=1,z0.map(function(c){return c()})},P2=!1;r1&&(P2=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),P2||k.addEventListener("DOMContentLoaded",pf));function Vf(r){r1&&(P2?setTimeout(r,0):z0.push(r))}function K1(r){var c=r.tag,a=r.attributes,e=a===void 0?{}:a,i=r.children,s=i===void 0?[]:i;return typeof r=="string"?t0(r):"<".concat(c," ").concat(mf(e),">").concat(s.map(K1).join(""),"</").concat(c,">")}function D8(r,c,a){if(r&&r[c]&&r[c][a])return{prefix:c,iconName:a,icon:r[c][a]}}var Mf=function(c,a){return function(e,i,s,n){return c.call(a,e,i,s,n)}},U3=function(c,a,e,i){var s=Object.keys(c),n=s.length,l=i!==void 0?Mf(a,i):a,f,o,t;for(e===void 0?(f=1,t=c[s[0]]):(f=0,t=e);f<n;f++)o=s[f],t=l(t,c[o],o,c);return t};function uf(r){for(var c=[],a=0,e=r.length;a<e;){var i=r.charCodeAt(a++);if(i>=55296&&i<=56319&&a<e){var s=r.charCodeAt(a++);(s&64512)==56320?c.push(((i&1023)<<10)+(s&1023)+65536):(c.push(i),a--)}else c.push(i)}return c}function $3(r){var c=uf(r);return c.length===1?c[0].toString(16):null}function Cf(r,c){var a=r.length,e=r.charCodeAt(c),i;return e>=55296&&e<=56319&&a>c+1&&(i=r.charCodeAt(c+1),i>=56320&&i<=57343)?(e-55296)*1024+i-56320+65536:e}function B8(r){return Object.keys(r).reduce(function(c,a){var e=r[a],i=!!e.icon;return i?c[e.iconName]=e.icon:c[a]=e,c},{})}function Q3(r,c){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,i=e===void 0?!1:e,s=B8(c);typeof K.hooks.addPack=="function"&&!i?K.hooks.addPack(r,B8(c)):K.styles[r]=H(H({},K.styles[r]||{}),s),r==="fas"&&Q3("fa",c)}var S2,y2,w2,S1=K.styles,df=K.shims,Lf=(S2={},E(S2,w,Object.values(U1[w])),E(S2,P,Object.values(U1[P])),S2),t4=null,h0={},v0={},H0={},p0={},V0={},gf=(y2={},E(y2,w,Object.keys(O1[w])),E(y2,P,Object.keys(O1[P])),y2);function bf(r){return~sf.indexOf(r)}function xf(r,c){var a=c.split("-"),e=a[0],i=a.slice(1).join("-");return e===r&&i!==""&&!bf(i)?i:null}var M0=function(){var c=function(s){return U3(S1,function(n,l,f){return n[f]=U3(l,s,{}),n},{})};h0=c(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var l=s[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){i[f.toString(16)]=n})}return i}),v0=c(function(i,s,n){if(i[n]=n,s[2]){var l=s[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){i[f]=n})}return i}),V0=c(function(i,s,n){var l=s[2];return i[n]=n,l.forEach(function(f){i[f]=n}),i});var a="far"in S1||V.autoFetchSvg,e=U3(df,function(i,s){var n=s[0],l=s[1],f=s[2];return l==="far"&&!a&&(l="fas"),typeof n=="string"&&(i.names[n]={prefix:l,iconName:f}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:l,iconName:f}),i},{names:{},unicodes:{}});H0=e.names,p0=e.unicodes,t4=D2(V.styleDefault,{family:V.familyDefault})};ff(function(r){t4=D2(r.styleDefault,{family:V.familyDefault})});M0();function m4(r,c){return(h0[r]||{})[c]}function Nf(r,c){return(v0[r]||{})[c]}function u1(r,c){return(V0[r]||{})[c]}function u0(r){return H0[r]||{prefix:null,iconName:null}}function Sf(r){var c=p0[r],a=m4("fas",r);return c||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function o1(){return t4}var z4=function(){return{prefix:null,iconName:null,rest:[]}};function D2(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.family,e=a===void 0?w:a,i=O1[e][r],s=I1[e][r]||I1[e][i],n=r in K.styles?r:null;return s||n||null}var R8=(w2={},E(w2,w,Object.keys(U1[w])),E(w2,P,Object.keys(U1[P])),w2);function B2(r){var c,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,i=e===void 0?!1:e,s=(c={},E(c,w,"".concat(V.cssPrefix,"-").concat(w)),E(c,P,"".concat(V.cssPrefix,"-").concat(P)),c),n=null,l=w;(r.includes(s[w])||r.some(function(o){return R8[w].includes(o)}))&&(l=w),(r.includes(s[P])||r.some(function(o){return R8[P].includes(o)}))&&(l=P);var f=r.reduce(function(o,t){var m=xf(V.cssPrefix,t);if(S1[t]?(t=Lf[l].includes(t)?Xl[l][t]:t,n=t,o.prefix=t):gf[l].indexOf(t)>-1?(n=t,o.prefix=D2(t,{family:l})):m?o.iconName=m:t!==V.replacementClass&&t!==s[w]&&t!==s[P]&&o.rest.push(t),!i&&o.prefix&&o.iconName){var z=n==="fa"?u0(o.iconName):{},h=u1(o.prefix,o.iconName);z.prefix&&(n=null),o.iconName=z.iconName||h||o.iconName,o.prefix=z.prefix||o.prefix,o.prefix==="far"&&!S1.far&&S1.fas&&!V.autoFetchSvg&&(o.prefix="fas")}return o},z4());return(r.includes("fa-brands")||r.includes("fab"))&&(f.prefix="fab"),(r.includes("fa-duotone")||r.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===P&&(S1.fass||V.autoFetchSvg)&&(f.prefix="fass",f.iconName=u1(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=o1()||"fas"),f}var yf=function(){function r(){_l(this,r),this.definitions={}}return Ol(r,[{key:"add",value:function(){for(var a=this,e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){a.definitions[l]=H(H({},a.definitions[l]||{}),n[l]),Q3(l,n[l]);var f=U1[w][l];f&&Q3(f,n[l]),M0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var i=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(i).map(function(s){var n=i[s],l=n.prefix,f=n.iconName,o=n.icon,t=o[2];a[l]||(a[l]={}),t.length>0&&t.forEach(function(m){typeof m=="string"&&(a[l][m]=o)}),a[l][f]=o}),a}}]),r}(),q8=[],y1={},w1={},wf=Object.keys(w1);function kf(r,c){var a=c.mixoutsTo;return q8=r,y1={},Object.keys(w1).forEach(function(e){wf.indexOf(e)===-1&&delete w1[e]}),q8.forEach(function(e){var i=e.mixout?e.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(a[n]=i[n]),T2(i[n])==="object"&&Object.keys(i[n]).forEach(function(l){a[n]||(a[n]={}),a[n][l]=i[n][l]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(n){y1[n]||(y1[n]=[]),y1[n].push(s[n])})}e.provides&&e.provides(w1)}),a}function Y3(r,c){for(var a=arguments.length,e=new Array(a>2?a-2:0),i=2;i<a;i++)e[i-2]=arguments[i];var s=y1[r]||[];return s.forEach(function(n){c=n.apply(null,[c].concat(e))}),c}function d1(r){for(var c=arguments.length,a=new Array(c>1?c-1:0),e=1;e<c;e++)a[e-1]=arguments[e];var i=y1[r]||[];i.forEach(function(s){s.apply(null,a)})}function e1(){var r=arguments[0],c=Array.prototype.slice.call(arguments,1);return w1[r]?w1[r].apply(null,c):void 0}function X3(r){r.prefix==="fa"&&(r.prefix="fas");var c=r.iconName,a=r.prefix||o1();if(c)return c=u1(a,c)||c,D8(C0.definitions,a,c)||D8(K.styles,a,c)}var C0=new yf,Af=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,d1("noAuto")},Tf={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return r1?(d1("beforeI2svg",c),e1("pseudoElements2svg",c),e1("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,Vf(function(){Ff({autoReplaceSvgRoot:a}),d1("watch",c)})}},Pf={icon:function(c){if(c===null)return null;if(T2(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:u1(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var a=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=D2(c[0]);return{prefix:e,iconName:u1(e,a)||a}}if(typeof c=="string"&&(c.indexOf("".concat(V.cssPrefix,"-"))>-1||c.match(Jl))){var i=B2(c.split(" "),{skipLookups:!0});return{prefix:i.prefix||o1(),iconName:u1(i.prefix,i.iconName)||i.iconName}}if(typeof c=="string"){var s=o1();return{prefix:s,iconName:u1(s,c)||c}}}},G={noAuto:Af,config:V,dom:Tf,parse:Pf,library:C0,findIconDefinition:X3,toHtml:K1},Ff=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot,e=a===void 0?k:a;(Object.keys(K.styles).length>0||V.autoFetchSvg)&&r1&&V.autoReplaceSvg&&G.dom.i2svg({node:e})};function R2(r,c){return Object.defineProperty(r,"abstract",{get:c}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(function(e){return K1(e)})}}),Object.defineProperty(r,"node",{get:function(){if(r1){var e=k.createElement("div");return e.innerHTML=r.html,e.children}}}),r}function Ef(r){var c=r.children,a=r.main,e=r.mask,i=r.attributes,s=r.styles,n=r.transform;if(o4(n)&&a.found&&!e.found){var l=a.width,f=a.height,o={x:l/f/2,y:.5};i.style=E2(H(H({},s),{},{"transform-origin":"".concat(o.x+n.x/16,"em ").concat(o.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:c}]}function Df(r){var c=r.prefix,a=r.iconName,e=r.children,i=r.attributes,s=r.symbol,n=s===!0?"".concat(c,"-").concat(V.cssPrefix,"-").concat(a):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:H(H({},i),{},{id:n}),children:e}]}]}function h4(r){var c=r.icons,a=c.main,e=c.mask,i=r.prefix,s=r.iconName,n=r.transform,l=r.symbol,f=r.title,o=r.maskId,t=r.titleId,m=r.extra,z=r.watchable,h=z===void 0?!1:z,v=e.found?e:a,M=v.width,d=v.height,S=i==="fak",L=[V.replacementClass,s?"".concat(V.cssPrefix,"-").concat(s):""].filter(function(q){return m.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(m.classes).join(" "),N={children:[],attributes:H(H({},m.attributes),{},{"data-prefix":i,"data-icon":s,class:L,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(d)})},y=S&&!~m.classes.indexOf("fa-fw")?{width:"".concat(M/d*16*.0625,"em")}:{};h&&(N.attributes[C1]=""),f&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(t||W1())},children:[f]}),delete N.attributes.title);var F=H(H({},N),{},{prefix:i,iconName:s,main:a,mask:e,maskId:o,transform:n,symbol:l,styles:H(H({},y),m.styles)}),D=e.found&&a.found?e1("generateAbstractMask",F)||{children:[],attributes:{}}:e1("generateAbstractIcon",F)||{children:[],attributes:{}},A=D.children,B=D.attributes;return F.children=A,F.attributes=B,l?Df(F):Ef(F)}function _8(r){var c=r.content,a=r.width,e=r.height,i=r.transform,s=r.title,n=r.extra,l=r.watchable,f=l===void 0?!1:l,o=H(H(H({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});f&&(o[C1]="");var t=H({},n.styles);o4(i)&&(t.transform=hf({transform:i,startCentered:!0,width:a,height:e}),t["-webkit-transform"]=t.transform);var m=E2(t);m.length>0&&(o.style=m);var z=[];return z.push({tag:"span",attributes:o,children:[c]}),s&&z.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),z}function Bf(r){var c=r.content,a=r.title,e=r.extra,i=H(H(H({},e.attributes),a?{title:a}:{}),{},{class:e.classes.join(" ")}),s=E2(e.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[c]}),a&&n.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),n}var G3=K.styles;function J3(r){var c=r[0],a=r[1],e=r.slice(4),i=r4(e,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(M1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(M1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(M1.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:c,height:a,icon:n}}var Rf={found:!1,width:512,height:512};function qf(r,c){!n0&&!V.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(c,'" is missing.'))}function c4(r,c){var a=c;return c==="fa"&&V.styleDefault!==null&&(c=o1()),new Promise(function(e,i){var s={found:!1,width:512,height:512,icon:e1("missingIconAbstract")||{}};if(a==="fa"){var n=u0(r)||{};r=n.iconName||r,c=n.prefix||c}if(r&&c&&G3[c]&&G3[c][r]){var l=G3[c][r];return e(J3(l))}qf(r,c),e(H(H({},Rf),{},{icon:V.showMissingIcons&&r?e1("missingIconAbstract")||{}:{}}))})}var O8=function(){},a4=V.measurePerformance&&d2&&d2.mark&&d2.measure?d2:{mark:O8,measure:O8},R1='FA "6.5.1"',_f=function(c){return a4.mark("".concat(R1," ").concat(c," begins")),function(){return d0(c)}},d0=function(c){a4.mark("".concat(R1," ").concat(c," ends")),a4.measure("".concat(R1," ").concat(c),"".concat(R1," ").concat(c," begins"),"".concat(R1," ").concat(c," ends"))},v4={begin:_f,end:d0},k2=function(){};function I8(r){var c=r.getAttribute?r.getAttribute(C1):null;return typeof c=="string"}function Of(r){var c=r.getAttribute?r.getAttribute(s4):null,a=r.getAttribute?r.getAttribute(n4):null;return c&&a}function If(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(V.replacementClass)}function Uf(){if(V.autoReplaceSvg===!0)return A2.replace;var r=A2[V.autoReplaceSvg];return r||A2.replace}function Gf(r){return k.createElementNS("http://www.w3.org/2000/svg",r)}function Wf(r){return k.createElement(r)}function L0(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.ceFn,e=a===void 0?r.tag==="svg"?Gf:Wf:a;if(typeof r=="string")return k.createTextNode(r);var i=e(r.tag);Object.keys(r.attributes||[]).forEach(function(n){i.setAttribute(n,r.attributes[n])});var s=r.children||[];return s.forEach(function(n){i.appendChild(L0(n,{ceFn:e}))}),i}function Zf(r){var c=" ".concat(r.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var A2={replace:function(c){var a=c[0];if(a.parentNode)if(c[1].forEach(function(i){a.parentNode.insertBefore(L0(i),a)}),a.getAttribute(C1)===null&&V.keepOriginalSource){var e=k.createComment(Zf(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(c){var a=c[0],e=c[1];if(~f4(a).indexOf(V.replacementClass))return A2.replace(c);var i=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(l,f){return f===V.replacementClass||f.match(i)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",s.toNode.join(" "))}var n=e.map(function(l){return K1(l)}).join(`
`);a.setAttribute(C1,""),a.innerHTML=n}};function U8(r){r()}function g0(r,c){var a=typeof c=="function"?c:k2;if(r.length===0)a();else{var e=U8;V.mutateApproach===Ql&&(e=f1.requestAnimationFrame||U8),e(function(){var i=Uf(),s=v4.begin("mutate");r.map(i),s(),a()})}}var H4=!1;function b0(){H4=!0}function e4(){H4=!1}var F2=null;function G8(r){if(T8&&V.observeMutations){var c=r.treeCallback,a=c===void 0?k2:c,e=r.nodeCallback,i=e===void 0?k2:e,s=r.pseudoElementsCallback,n=s===void 0?k2:s,l=r.observeMutationsRoot,f=l===void 0?k:l;F2=new T8(function(o){if(!H4){var t=o1();A1(o).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!I8(m.addedNodes[0])&&(V.searchPseudoElements&&n(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&V.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&I8(m.target)&&~rf.indexOf(m.attributeName))if(m.attributeName==="class"&&Of(m.target)){var z=B2(f4(m.target)),h=z.prefix,v=z.iconName;m.target.setAttribute(s4,h||t),v&&m.target.setAttribute(n4,v)}else If(m.target)&&i(m.target)})}}),r1&&F2.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function jf(){F2&&F2.disconnect()}function Kf(r){var c=r.getAttribute("style"),a=[];return c&&(a=c.split(";").reduce(function(e,i){var s=i.split(":"),n=s[0],l=s.slice(1);return n&&l.length>0&&(e[n]=l.join(":").trim()),e},{})),a}function $f(r){var c=r.getAttribute("data-prefix"),a=r.getAttribute("data-icon"),e=r.innerText!==void 0?r.innerText.trim():"",i=B2(f4(r));return i.prefix||(i.prefix=o1()),c&&a&&(i.prefix=c,i.iconName=a),i.iconName&&i.prefix||(i.prefix&&e.length>0&&(i.iconName=Nf(i.prefix,r.innerText)||m4(i.prefix,$3(r.innerText))),!i.iconName&&V.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=r.firstChild.data)),i}function Qf(r){var c=A1(r.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),a=r.getAttribute("title"),e=r.getAttribute("data-fa-title-id");return V.autoA11y&&(a?c["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(e||W1()):(c["aria-hidden"]="true",c.focusable="false")),c}function Yf(){return{iconName:null,title:null,titleId:null,prefix:null,transform:X,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function W8(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=$f(r),e=a.iconName,i=a.prefix,s=a.rest,n=Qf(r),l=Y3("parseNodeAttributes",{},r),f=c.styleParser?Kf(r):[];return H({iconName:e,title:r.getAttribute("title"),titleId:r.getAttribute("data-fa-title-id"),prefix:i,transform:X,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:n}},l)}var Xf=K.styles;function x0(r){var c=V.autoReplaceSvg==="nest"?W8(r,{styleParser:!1}):W8(r);return~c.extra.classes.indexOf(l0)?e1("generateLayersText",r,c):e1("generateSvgReplacementMutation",r,c)}var t1=new Set;l4.map(function(r){t1.add("fa-".concat(r))});Object.keys(O1[w]).map(t1.add.bind(t1));Object.keys(O1[P]).map(t1.add.bind(t1));t1=Z1(t1);function Z8(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!r1)return Promise.resolve();var a=k.documentElement.classList,e=function(m){return a.add("".concat(P8,"-").concat(m))},i=function(m){return a.remove("".concat(P8,"-").concat(m))},s=V.autoFetchSvg?t1:l4.map(function(t){return"fa-".concat(t)}).concat(Object.keys(Xf));s.includes("fa")||s.push("fa");var n=[".".concat(l0,":not([").concat(C1,"])")].concat(s.map(function(t){return".".concat(t,":not([").concat(C1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=A1(r.querySelectorAll(n))}catch{}if(l.length>0)e("pending"),i("complete");else return Promise.resolve();var f=v4.begin("onTree"),o=l.reduce(function(t,m){try{var z=x0(m);z&&t.push(z)}catch(h){n0||h.name==="MissingIcon"&&console.error(h)}return t},[]);return new Promise(function(t,m){Promise.all(o).then(function(z){g0(z,function(){e("active"),e("complete"),i("pending"),typeof c=="function"&&c(),f(),t()})}).catch(function(z){f(),m(z)})})}function Jf(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;x0(r).then(function(a){a&&g0([a],c)})}function co(r){return function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(c||{}).icon?c:X3(c||{}),i=a.mask;return i&&(i=(i||{}).icon?i:X3(i||{})),r(e,H(H({},a),{},{mask:i}))}}var ao=function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,i=e===void 0?X:e,s=a.symbol,n=s===void 0?!1:s,l=a.mask,f=l===void 0?null:l,o=a.maskId,t=o===void 0?null:o,m=a.title,z=m===void 0?null:m,h=a.titleId,v=h===void 0?null:h,M=a.classes,d=M===void 0?[]:M,S=a.attributes,L=S===void 0?{}:S,N=a.styles,y=N===void 0?{}:N;if(c){var F=c.prefix,D=c.iconName,A=c.icon;return R2(H({type:"icon"},c),function(){return d1("beforeDOMElementCreation",{iconDefinition:c,params:a}),V.autoA11y&&(z?L["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(v||W1()):(L["aria-hidden"]="true",L.focusable="false")),h4({icons:{main:J3(A),mask:f?J3(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:D,transform:H(H({},X),i),symbol:n,title:z,maskId:t,titleId:v,extra:{attributes:L,styles:y,classes:d}})})}},eo={mixout:function(){return{icon:co(ao)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Z8,a.nodeCallback=Jf,a}}},provides:function(c){c.i2svg=function(a){var e=a.node,i=e===void 0?k:e,s=a.callback,n=s===void 0?function(){}:s;return Z8(i,n)},c.generateSvgReplacementMutation=function(a,e){var i=e.iconName,s=e.title,n=e.titleId,l=e.prefix,f=e.transform,o=e.symbol,t=e.mask,m=e.maskId,z=e.extra;return new Promise(function(h,v){Promise.all([c4(i,l),t.iconName?c4(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var d=r4(M,2),S=d[0],L=d[1];h([a,h4({icons:{main:S,mask:L},prefix:l,iconName:i,transform:f,symbol:o,maskId:m,title:s,titleId:n,extra:z,watchable:!0})])}).catch(v)})},c.generateAbstractIcon=function(a){var e=a.children,i=a.attributes,s=a.main,n=a.transform,l=a.styles,f=E2(l);f.length>0&&(i.style=f);var o;return o4(n)&&(o=e1("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(o||s.icon),{children:e,attributes:i}}}},ro={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.classes,s=i===void 0?[]:i;return R2({type:"layer"},function(){d1("beforeDOMElementCreation",{assembler:a,params:e});var n=[];return a(function(l){Array.isArray(l)?l.map(function(f){n=n.concat(f.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(Z1(s)).join(" ")},children:n}]})}}}},io={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.title,s=i===void 0?null:i,n=e.classes,l=n===void 0?[]:n,f=e.attributes,o=f===void 0?{}:f,t=e.styles,m=t===void 0?{}:t;return R2({type:"counter",content:a},function(){return d1("beforeDOMElementCreation",{content:a,params:e}),Bf({content:a.toString(),title:s,extra:{attributes:o,styles:m,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(Z1(l))}})})}}}},so={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,s=i===void 0?X:i,n=e.title,l=n===void 0?null:n,f=e.classes,o=f===void 0?[]:f,t=e.attributes,m=t===void 0?{}:t,z=e.styles,h=z===void 0?{}:z;return R2({type:"text",content:a},function(){return d1("beforeDOMElementCreation",{content:a,params:e}),_8({content:a,transform:H(H({},X),s),title:l,extra:{attributes:m,styles:h,classes:["".concat(V.cssPrefix,"-layers-text")].concat(Z1(o))}})})}}},provides:function(c){c.generateLayersText=function(a,e){var i=e.title,s=e.transform,n=e.extra,l=null,f=null;if(r0){var o=parseInt(getComputedStyle(a).fontSize,10),t=a.getBoundingClientRect();l=t.width/o,f=t.height/o}return V.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([a,_8({content:a.innerHTML,width:l,height:f,transform:s,title:i,extra:n,watchable:!0})])}}},no=new RegExp('"',"ug"),j8=[1105920,1112319];function lo(r){var c=r.replace(no,""),a=Cf(c,0),e=a>=j8[0]&&a<=j8[1],i=c.length===2?c[0]===c[1]:!1;return{value:$3(i?c[0]:c),isSecondary:e||i}}function K8(r,c){var a="".concat($l).concat(c.replace(":","-"));return new Promise(function(e,i){if(r.getAttribute(a)!==null)return e();var s=A1(r.children),n=s.filter(function(A){return A.getAttribute(K3)===c})[0],l=f1.getComputedStyle(r,c),f=l.getPropertyValue("font-family").match(cf),o=l.getPropertyValue("font-weight"),t=l.getPropertyValue("content");if(n&&!f)return r.removeChild(n),e();if(f&&t!=="none"&&t!==""){var m=l.getPropertyValue("content"),z=~["Sharp"].indexOf(f[2])?P:w,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?I1[z][f[2].toLowerCase()]:af[z][o],v=lo(m),M=v.value,d=v.isSecondary,S=f[0].startsWith("FontAwesome"),L=m4(h,M),N=L;if(S){var y=Sf(M);y.iconName&&y.prefix&&(L=y.iconName,h=y.prefix)}if(L&&!d&&(!n||n.getAttribute(s4)!==h||n.getAttribute(n4)!==N)){r.setAttribute(a,N),n&&r.removeChild(n);var F=Yf(),D=F.extra;D.attributes[K3]=c,c4(L,h).then(function(A){var B=h4(H(H({},F),{},{icons:{main:A,mask:z4()},prefix:h,iconName:N,extra:D,watchable:!0})),q=k.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?r.insertBefore(q,r.firstChild):r.appendChild(q),q.outerHTML=B.map(function(i1){return K1(i1)}).join(`