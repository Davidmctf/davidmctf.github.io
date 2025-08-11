import './polyfills.server.mjs';
import{A as S,B as re,Ba as me,E as N,M as se,N as oe,P as it,R as le,Ra as he,Ua as pe,Va as ge,ba as fe,bc as ye,c as ae,cc as be,ha as ce,ia as T,ic as ve,k as bt,lc as xe,ma as kt,na as ue,oa as de,pc as ke,q as vt,qb as At,r as ie,t as xt,x as at}from"./chunk-7DRXT4FW.mjs";import{g,h as w,i as O}from"./chunk-G4RTEFQG.mjs";var nr=(()=>{var e,a,n;let i=class i{constructor(){w(this,e);w(this,a);w(this,n);O(this,e,"https://jsonplaceholder.typicode.com/users"),O(this,a,N(be)),O(this,n,oe({users:[],loading:!0})),this.users=At(()=>g(this,n).call(this).users),this.loading=At(()=>g(this,n).call(this).loading)}getUsers(){let s=`${g(this,e)}`,o=new ye;return g(this,a).get(s,{params:o}).pipe(xt(1500),at({next:u=>g(this,n).set({loading:!1,users:u}),error:u=>bt(()=>u),complete:()=>{}}),ie(u=>bt(()=>u)))}getUserById(s){let o=`${g(this,e)}/${s}`;return g(this,a).get(o).pipe(xt(1500))}};e=new WeakMap,a=new WeakMap,n=new WeakMap,i.\u0275fac=function(o){return new(o||i)},i.\u0275prov=S({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();function jn(t,e,a){return(e=Hn(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Ae(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Ae(Object(a),!0).forEach(function(n){jn(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Ae(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function Wn(t,e){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var n=a.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Hn(t){var e=Wn(t,"string");return typeof e=="symbol"?e:e+""}var Se=()=>{},Bt={},qe={},Ke=null,Qe={mark:Se,measure:Se};try{typeof window<"u"&&(Bt=window),typeof document<"u"&&(qe=document),typeof MutationObserver<"u"&&(Ke=MutationObserver),typeof performance<"u"&&(Qe=performance)}catch{}var{userAgent:we=""}=Bt.navigator||{},z=Bt,p=qe,Ie=Ke,st=Qe,rr=!!z.document,_=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",Je=~we.indexOf("MSIE")||~we.indexOf("Trident/"),Un=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Yn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ze={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},$n={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],y="classic",dt="duotone",Bn="sharp",Vn="sharp-duotone",en=[y,dt,Bn,Vn],Gn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Xn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},qn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Kn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Qn=["fak","fa-kit","fakd","fa-kit-duotone"],Ce={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Jn=["kit"],Zn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ta=["fak","fakd"],ea={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ee={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},na=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],aa=["fak","fa-kit","fakd","fa-kit-duotone"],ia={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ra={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},sa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ot={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},oa=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Pt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...na,...oa],la=["solid","regular","light","thin","duotone","brands"],nn=[1,2,3,4,5,6,7,8,9,10],fa=nn.concat([11,12,13,14,15,16,17,18,19,20]),ca=[...Object.keys(sa),...la,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY].concat(nn.map(t=>"".concat(t,"x"))).concat(fa.map(t=>"w-".concat(t))),ua={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},P="___FONT_AWESOME___",Ft=16,an="fa",rn="svg-inline--fa",H="data-fa-i2svg",_t="data-fa-pseudo-element",da="data-fa-pseudo-element-pending",Vt="data-prefix",Gt="data-icon",Oe="fontawesome-i2svg",ma="async",ha=["HTML","HEAD","STYLE","SCRIPT"],sn=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})();function et(t){return new Proxy(t,{get(e,a){return a in e?e[a]:e[y]}})}var on=l({},Ze);on[y]=l(l(l(l({},{"fa-duotone":"duotone"}),Ze[y]),Ce.kit),Ce["kit-duotone"]);var pa=et(on),Dt=l({},Kn);Dt[y]=l(l(l(l({},{duotone:"fad"}),Dt[y]),Ee.kit),Ee["kit-duotone"]);var Pe=et(Dt),Nt=l({},Ot);Nt[y]=l(l({},Nt[y]),ea.kit);var Xt=et(Nt),Tt=l({},ra);Tt[y]=l(l({},Tt[y]),Zn.kit);var sr=et(Tt),ga=Un,ln="fa-layers-text",ya=Yn,ba=l({},Gn),or=et(ba),va=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],St=$n,xa=[...Jn,...ca],Q=z.FontAwesomeConfig||{};function ka(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Aa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[a,n]=e,i=Aa(ka(a));i!=null&&(Q[n]=i)});var fn={styleDefault:"solid",familyDefault:y,cssPrefix:an,replacementClass:rn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);var X=l(l({},fn),Q);X.autoReplaceSvg||(X.observeMutations=!1);var f={};Object.keys(fn).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(e){X[t]=e,J.forEach(a=>a(f))},get:function(){return X[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){X.cssPrefix=t,J.forEach(e=>e(f))},get:function(){return X.cssPrefix}});z.FontAwesomeConfig=f;var J=[];function Sa(t){return J.push(t),()=>{J.splice(J.indexOf(t),1)}}var M=Ft,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wa(t){if(!t||!_)return;let e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;let a=p.head.childNodes,n=null;for(let i=a.length-1;i>-1;i--){let r=a[i],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=r)}return p.head.insertBefore(e,n),t}var Ia="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Z(){let t=12,e="";for(;t-- >0;)e+=Ia[Math.random()*62|0];return e}function q(t){let e=[];for(let a=(t||[]).length>>>0;a--;)e[a]=t[a];return e}function qt(t){return t.classList?q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function cn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ca(t){return Object.keys(t||{}).reduce((e,a)=>e+"".concat(a,'="').concat(cn(t[a]),'" '),"").trim()}function mt(t){return Object.keys(t||{}).reduce((e,a)=>e+"".concat(a,": ").concat(t[a].trim(),";"),"")}function Kt(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function Ea(t){let{transform:e,containerWidth:a,iconWidth:n}=t,i={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(r," ").concat(s," ").concat(o)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:i,inner:u,path:c}}function Oa(t){let{transform:e,width:a=Ft,height:n=Ft,startCentered:i=!1}=t,r="";return i&&Je?r+="translate(".concat(e.x/M-a/2,"em, ").concat(e.y/M-n/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/M,"em), calc(-50% + ").concat(e.y/M,"em)) "):r+="translate(".concat(e.x/M,"em, ").concat(e.y/M,"em) "),r+="scale(".concat(e.size/M*(e.flipX?-1:1),", ").concat(e.size/M*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var Pa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function un(){let t=an,e=rn,a=f.cssPrefix,n=f.replacementClass,i=Pa;if(a!==t||n!==e){let r=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(a,"-")).replace(s,"--".concat(a,"-")).replace(o,".".concat(n))}return i}var Fe=!1;function wt(){f.autoAddCss&&!Fe&&(wa(un()),Fe=!0)}var Fa={mixout(){return{dom:{css:un,insertCss:wt}}},hooks(){return{beforeDOMElementCreation(){wt()},beforeI2svg(){wt()}}}},F=z||{};F[P]||(F[P]={});F[P].styles||(F[P].styles={});F[P].hooks||(F[P].hooks={});F[P].shims||(F[P].shims=[]);var C=F[P],dn=[],mn=function(){p.removeEventListener("DOMContentLoaded",mn),ct=1,dn.map(t=>t())},ct=!1;_&&(ct=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),ct||p.addEventListener("DOMContentLoaded",mn));function _a(t){_&&(ct?setTimeout(t,0):dn.push(t))}function nt(t){let{tag:e,attributes:a={},children:n=[]}=t;return typeof t=="string"?cn(t):"<".concat(e," ").concat(Ca(a),">").concat(n.map(nt).join(""),"</").concat(e,">")}function _e(t,e,a){if(t&&t[e]&&t[e][a])return{prefix:e,iconName:a,icon:t[e][a]}}var Da=function(e,a){return function(n,i,r,s){return e.call(a,n,i,r,s)}},It=function(e,a,n,i){var r=Object.keys(e),s=r.length,o=i!==void 0?Da(a,i):a,u,c,d;for(n===void 0?(u=1,d=e[r[0]]):(u=0,d=n);u<s;u++)c=r[u],d=o(d,e[c],c,e);return d};function Na(t){let e=[],a=0,n=t.length;for(;a<n;){let i=t.charCodeAt(a++);if(i>=55296&&i<=56319&&a<n){let r=t.charCodeAt(a++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),a--)}else e.push(i)}return e}function Mt(t){let e=Na(t);return e.length===1?e[0].toString(16):null}function Ta(t,e){let a=t.length,n=t.charCodeAt(e),i;return n>=55296&&n<=56319&&a>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(n-55296)*1024+i-56320+65536:n}function De(t){return Object.keys(t).reduce((e,a)=>{let n=t[a];return!!n.icon?e[n.iconName]=n.icon:e[a]=n,e},{})}function zt(t,e){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:n=!1}=a,i=De(e);typeof C.hooks.addPack=="function"&&!n?C.hooks.addPack(t,De(e)):C.styles[t]=l(l({},C.styles[t]||{}),i),t==="fas"&&zt("fa",e)}var{styles:tt,shims:Ma}=C,hn=Object.keys(Xt),za=hn.reduce((t,e)=>(t[e]=Object.keys(Xt[e]),t),{}),Qt=null,pn={},gn={},yn={},bn={},vn={};function La(t){return~xa.indexOf(t)}function Ra(t,e){let a=e.split("-"),n=a[0],i=a.slice(1).join("-");return n===t&&i!==""&&!La(i)?i:null}var xn=()=>{let t=n=>It(tt,(i,r,s)=>(i[s]=It(r,n,{}),i),{});pn=t((n,i,r)=>(i[3]&&(n[i[3]]=r),i[2]&&i[2].filter(o=>typeof o=="number").forEach(o=>{n[o.toString(16)]=r}),n)),gn=t((n,i,r)=>(n[r]=r,i[2]&&i[2].filter(o=>typeof o=="string").forEach(o=>{n[o]=r}),n)),vn=t((n,i,r)=>{let s=i[2];return n[r]=r,s.forEach(o=>{n[o]=r}),n});let e="far"in tt||f.autoFetchSvg,a=It(Ma,(n,i)=>{let r=i[0],s=i[1],o=i[2];return s==="far"&&!e&&(s="fas"),typeof r=="string"&&(n.names[r]={prefix:s,iconName:o}),typeof r=="number"&&(n.unicodes[r.toString(16)]={prefix:s,iconName:o}),n},{names:{},unicodes:{}});yn=a.names,bn=a.unicodes,Qt=ht(f.styleDefault,{family:f.familyDefault})};Sa(t=>{Qt=ht(t.styleDefault,{family:f.familyDefault})});xn();function Jt(t,e){return(pn[t]||{})[e]}function ja(t,e){return(gn[t]||{})[e]}function W(t,e){return(vn[t]||{})[e]}function kn(t){return yn[t]||{prefix:null,iconName:null}}function Wa(t){let e=bn[t],a=Jt("fas",t);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function L(){return Qt}var An=()=>({prefix:null,iconName:null,rest:[]});function Ha(t){let e=y,a=hn.reduce((n,i)=>(n[i]="".concat(f.cssPrefix,"-").concat(i),n),{});return en.forEach(n=>{(t.includes(a[n])||t.some(i=>za[n].includes(i)))&&(e=n)}),e}function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:a=y}=e,n=pa[a][t];if(a===dt&&!t)return"fad";let i=Pe[a][t]||Pe[a][n],r=t in C.styles?t:null;return i||r||null}function Ua(t){let e=[],a=null;return t.forEach(n=>{let i=Ra(f.cssPrefix,n);i?a=i:n&&e.push(n)}),{iconName:a,rest:e}}function Ne(t){return t.sort().filter((e,a,n)=>n.indexOf(e)===a)}function pt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:a=!1}=e,n=null,i=Pt.concat(aa),r=Ne(t.filter(h=>i.includes(h))),s=Ne(t.filter(h=>!Pt.includes(h))),o=r.filter(h=>(n=h,!tn.includes(h))),[u=null]=o,c=Ha(r),d=l(l({},Ua(s)),{},{prefix:ht(u,{family:c})});return l(l(l({},d),Va({values:t,family:c,styles:tt,config:f,canonical:d,givenPrefix:n})),Ya(a,n,d))}function Ya(t,e,a){let{prefix:n,iconName:i}=a;if(t||!n||!i)return{prefix:n,iconName:i};let r=e==="fa"?kn(i):{},s=W(n,i);return i=r.iconName||s||i,n=r.prefix||n,n==="far"&&!tt.far&&tt.fas&&!f.autoFetchSvg&&(n="fas"),{prefix:n,iconName:i}}var $a=en.filter(t=>t!==y||t!==dt),Ba=Object.keys(Ot).filter(t=>t!==y).map(t=>Object.keys(Ot[t])).flat();function Va(t){let{values:e,family:a,canonical:n,givenPrefix:i="",styles:r={},config:s={}}=t,o=a===dt,u=e.includes("fa-duotone")||e.includes("fad"),c=s.familyDefault==="duotone",d=n.prefix==="fad"||n.prefix==="fa-duotone";if(!o&&(u||c||d)&&(n.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(n.prefix="fab"),!n.prefix&&$a.includes(a)&&(Object.keys(r).find(m=>Ba.includes(m))||s.autoFetchSvg)){let m=qn.get(a).defaultShortPrefixId;n.prefix=m,n.iconName=W(n.prefix,n.iconName)||n.iconName}return(n.prefix==="fa"||i==="fa")&&(n.prefix=L()||"fas"),n}var Lt=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];let i=a.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=l(l({},this.definitions[r]||{}),i[r]),zt(r,i[r]);let s=Xt[y][r];s&&zt(s,i[r]),xn()})}reset(){this.definitions={}}_pullDefinitions(e,a){let n=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(n).map(i=>{let{prefix:r,iconName:s,icon:o}=n[i],u=o[2];e[r]||(e[r]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[r][c]=o)}),e[r][s]=o}),e}},Te=[],V={},G={},Ga=Object.keys(G);function Xa(t,e){let{mixoutsTo:a}=e;return Te=t,V={},Object.keys(G).forEach(n=>{Ga.indexOf(n)===-1&&delete G[n]}),Te.forEach(n=>{let i=n.mixout?n.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(a[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(s=>{a[r]||(a[r]={}),a[r][s]=i[r][s]})}),n.hooks){let r=n.hooks();Object.keys(r).forEach(s=>{V[s]||(V[s]=[]),V[s].push(r[s])})}n.provides&&n.provides(G)}),a}function Rt(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];return(V[t]||[]).forEach(s=>{e=s.apply(null,[e,...n])}),e}function U(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];(V[t]||[]).forEach(r=>{r.apply(null,a)})}function R(){let t=arguments[0],e=Array.prototype.slice.call(arguments,1);return G[t]?G[t].apply(null,e):void 0}function jt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t,a=t.prefix||L();if(e)return e=W(a,e)||e,_e(Sn.definitions,a,e)||_e(C.styles,a,e)}var Sn=new Lt,qa=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,U("noAuto")},Ka={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(U("beforeI2svg",t),R("pseudoElements2svg",t),R("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,_a(()=>{Ja({autoReplaceSvgRoot:e}),U("watch",t)})}},Qa={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=ht(t[0]);return{prefix:a,iconName:W(a,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(ga))){let e=pt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||L(),iconName:W(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){let e=L();return{prefix:e,iconName:W(e,t)||t}}}},x={noAuto:qa,config:f,dom:Ka,parse:Qa,library:Sn,findIconDefinition:jt,toHtml:nt},Ja=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=p}=t;(Object.keys(C.styles).length>0||f.autoFetchSvg)&&_&&f.autoReplaceSvg&&x.dom.i2svg({node:e})};function gt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(a=>nt(a))}}),Object.defineProperty(t,"node",{get:function(){if(!_)return;let a=p.createElement("div");return a.innerHTML=t.html,a.children}}),t}function Za(t){let{children:e,main:a,mask:n,attributes:i,styles:r,transform:s}=t;if(Kt(s)&&a.found&&!n.found){let{width:o,height:u}=a,c={x:o/u/2,y:.5};i.style=mt(l(l({},r),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function ti(t){let{prefix:e,iconName:a,children:n,attributes:i,symbol:r}=t,s=r===!0?"".concat(e,"-").concat(f.cssPrefix,"-").concat(a):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},i),{},{id:s}),children:n}]}]}function Zt(t){let{icons:{main:e,mask:a},prefix:n,iconName:i,transform:r,symbol:s,title:o,maskId:u,titleId:c,extra:d,watchable:h=!1}=t,{width:m,height:b}=a.found?a:e,D=ta.includes(n),j=[f.replacementClass,i?"".concat(f.cssPrefix,"-").concat(i):""].filter(B=>d.classes.indexOf(B)===-1).filter(B=>B!==""||!!B).concat(d.classes).join(" "),k={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":n,"data-icon":i,class:j,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(b)})},E=D&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/b*16*.0625,"em")}:{};h&&(k.attributes[H]=""),o&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(c||Z())},children:[o]}),delete k.attributes.title);let v=l(l({},k),{},{prefix:n,iconName:i,main:e,mask:a,maskId:u,transform:r,symbol:s,styles:l(l({},E),d.styles)}),{children:A,attributes:$}=a.found&&e.found?R("generateAbstractMask",v)||{children:[],attributes:{}}:R("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=A,v.attributes=$,s?ti(v):Za(v)}function Me(t){let{content:e,width:a,height:n,transform:i,title:r,extra:s,watchable:o=!1}=t,u=l(l(l({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});o&&(u[H]="");let c=l({},s.styles);Kt(i)&&(c.transform=Oa({transform:i,startCentered:!0,width:a,height:n}),c["-webkit-transform"]=c.transform);let d=mt(c);d.length>0&&(u.style=d);let h=[];return h.push({tag:"span",attributes:u,children:[e]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function ei(t){let{content:e,title:a,extra:n}=t,i=l(l(l({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),r=mt(n.styles);r.length>0&&(i.style=r);let s=[];return s.push({tag:"span",attributes:i,children:[e]}),a&&s.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),s}var{styles:Ct}=C;function Wt(t){let e=t[0],a=t[1],[n]=t.slice(4),i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(St.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(St.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(St.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:a,icon:i}}var ni={found:!1,width:512,height:512};function ai(t,e){!sn&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ht(t,e){let a=e;return e==="fa"&&f.styleDefault!==null&&(e=L()),new Promise((n,i)=>{if(a==="fa"){let r=kn(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Ct[e]&&Ct[e][t]){let r=Ct[e][t];return n(Wt(r))}ai(t,e),n(l(l({},ni),{},{icon:f.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}var ze=()=>{},Ut=f.measurePerformance&&st&&st.mark&&st.measure?st:{mark:ze,measure:ze},K='FA "6.7.2"',ii=t=>(Ut.mark("".concat(K," ").concat(t," begins")),()=>wn(t)),wn=t=>{Ut.mark("".concat(K," ").concat(t," ends")),Ut.measure("".concat(K," ").concat(t),"".concat(K," ").concat(t," begins"),"".concat(K," ").concat(t," ends"))},te={begin:ii,end:wn},lt=()=>{};function Le(t){return typeof(t.getAttribute?t.getAttribute(H):null)=="string"}function ri(t){let e=t.getAttribute?t.getAttribute(Vt):null,a=t.getAttribute?t.getAttribute(Gt):null;return e&&a}function si(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function oi(){return f.autoReplaceSvg===!0?ft.replace:ft[f.autoReplaceSvg]||ft.replace}function li(t){return p.createElementNS("http://www.w3.org/2000/svg",t)}function fi(t){return p.createElement(t)}function In(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:a=t.tag==="svg"?li:fi}=e;if(typeof t=="string")return p.createTextNode(t);let n=a(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){n.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){n.appendChild(In(r,{ceFn:a}))}),n}function ci(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ft={replace:function(t){let e=t[0];if(e.parentNode)if(t[1].forEach(a=>{e.parentNode.insertBefore(In(a),e)}),e.getAttribute(H)===null&&f.keepOriginalSource){let a=p.createComment(ci(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(t){let e=t[0],a=t[1];if(~qt(e).indexOf(f.replacementClass))return ft.replace(t);let n=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){let r=a[0].attributes.class.split(" ").reduce((s,o)=>(o===f.replacementClass||o.match(n)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});a[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}let i=a.map(r=>nt(r)).join(`
`);e.setAttribute(H,""),e.innerHTML=i}};function Re(t){t()}function Cn(t,e){let a=typeof e=="function"?e:lt;if(t.length===0)a();else{let n=Re;f.mutateApproach===ma&&(n=z.requestAnimationFrame||Re),n(()=>{let i=oi(),r=te.begin("mutate");t.map(i),r(),a()})}}var ee=!1;function En(){ee=!0}function Yt(){ee=!1}var ut=null;function je(t){if(!Ie||!f.observeMutations)return;let{treeCallback:e=lt,nodeCallback:a=lt,pseudoElementsCallback:n=lt,observeMutationsRoot:i=p}=t;ut=new Ie(r=>{if(ee)return;let s=L();q(r).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Le(o.addedNodes[0])&&(f.searchPseudoElements&&n(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&f.searchPseudoElements&&n(o.target.parentNode),o.type==="attributes"&&Le(o.target)&&~va.indexOf(o.attributeName))if(o.attributeName==="class"&&ri(o.target)){let{prefix:u,iconName:c}=pt(qt(o.target));o.target.setAttribute(Vt,u||s),c&&o.target.setAttribute(Gt,c)}else si(o.target)&&a(o.target)})}),_&&ut.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ui(){ut&&ut.disconnect()}function di(t){let e=t.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce((n,i)=>{let r=i.split(":"),s=r[0],o=r.slice(1);return s&&o.length>0&&(n[s]=o.join(":").trim()),n},{})),a}function mi(t){let e=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",i=pt(qt(t));return i.prefix||(i.prefix=L()),e&&a&&(i.prefix=e,i.iconName=a),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=ja(i.prefix,t.innerText)||Jt(i.prefix,Mt(t.innerText))),!i.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function hi(t){let e=q(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),a=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return f.autoA11y&&(a?e["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(n||Z()):(e["aria-hidden"]="true",e.focusable="false")),e}function pi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function We(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:a,prefix:n,rest:i}=mi(t),r=hi(t),s=Rt("parseNodeAttributes",{},t),o=e.styleParser?di(t):[];return l({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:n,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:r}},s)}var{styles:gi}=C;function On(t){let e=f.autoReplaceSvg==="nest"?We(t,{styleParser:!1}):We(t);return~e.extra.classes.indexOf(ln)?R("generateLayersText",t,e):R("generateSvgReplacementMutation",t,e)}function yi(){return[...Qn,...Pt]}function He(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();let a=p.documentElement.classList,n=d=>a.add("".concat(Oe,"-").concat(d)),i=d=>a.remove("".concat(Oe,"-").concat(d)),r=f.autoFetchSvg?yi():tn.concat(Object.keys(gi));r.includes("fa")||r.push("fa");let s=[".".concat(ln,":not([").concat(H,"])")].concat(r.map(d=>".".concat(d,":not([").concat(H,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=q(t.querySelectorAll(s))}catch{}if(o.length>0)n("pending"),i("complete");else return Promise.resolve();let u=te.begin("onTree"),c=o.reduce((d,h)=>{try{let m=On(h);m&&d.push(m)}catch(m){sn||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,h)=>{Promise.all(c).then(m=>{Cn(m,()=>{n("active"),n("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),h(m)})})}function bi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;On(t).then(a=>{a&&Cn([a],e)})}function vi(t){return function(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:jt(e||{}),{mask:i}=a;return i&&(i=(i||{}).icon?i:jt(i||{})),t(n,l(l({},a),{},{mask:i}))}}var xi=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:a=I,symbol:n=!1,mask:i=null,maskId:r=null,title:s=null,titleId:o=null,classes:u=[],attributes:c={},styles:d={}}=e;if(!t)return;let{prefix:h,iconName:m,icon:b}=t;return gt(l({type:"icon"},t),()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:e}),f.autoA11y&&(s?c["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(o||Z()):(c["aria-hidden"]="true",c.focusable="false")),Zt({icons:{main:Wt(b),mask:i?Wt(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:m,transform:l(l({},I),a),symbol:n,title:s,maskId:r,titleId:o,extra:{attributes:c,styles:d,classes:u}})))},ki={mixout(){return{icon:vi(xi)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=He,t.nodeCallback=bi,t}}},provides(t){t.i2svg=function(e){let{node:a=p,callback:n=()=>{}}=e;return He(a,n)},t.generateSvgReplacementMutation=function(e,a){let{iconName:n,title:i,titleId:r,prefix:s,transform:o,symbol:u,mask:c,maskId:d,extra:h}=a;return new Promise((m,b)=>{Promise.all([Ht(n,s),c.iconName?Ht(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(D=>{let[j,k]=D;m([e,Zt({icons:{main:j,mask:k},prefix:s,iconName:n,transform:o,symbol:u,maskId:d,title:i,titleId:r,extra:h,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:a,attributes:n,main:i,transform:r,styles:s}=e,o=mt(s);o.length>0&&(n.style=o);let u;return Kt(r)&&(u=R("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:n}}}},Ai={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:a=[]}=e;return gt({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:e});let n=[];return t(i=>{Array.isArray(i)?i.map(r=>{n=n.concat(r.abstract)}):n=n.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...a].join(" ")},children:n}]})}}}},Si={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:a=null,classes:n=[],attributes:i={},styles:r={}}=e;return gt({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),ei({content:t.toString(),title:a,extra:{attributes:i,styles:r,classes:["".concat(f.cssPrefix,"-layers-counter"),...n]}})))}}}},wi={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:a=I,title:n=null,classes:i=[],attributes:r={},styles:s={}}=e;return gt({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),Me({content:t,transform:l(l({},I),a),title:n,extra:{attributes:r,styles:s,classes:["".concat(f.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,a){let{title:n,transform:i,extra:r}=a,s=null,o=null;if(Je){let u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/u,o=c.height/u}return f.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,Me({content:e.innerHTML,width:s,height:o,transform:i,title:n,extra:r,watchable:!0})])}}},Ii=new RegExp('"',"ug"),Ue=[1105920,1112319],Ye=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Xn),ua),ia),$t=Object.keys(Ye).reduce((t,e)=>(t[e.toLowerCase()]=Ye[e],t),{}),Ci=Object.keys($t).reduce((t,e)=>{let a=$t[e];return t[e]=a[900]||[...Object.entries(a)][0][1],t},{});function Ei(t){let e=t.replace(Ii,""),a=Ta(e,0),n=a>=Ue[0]&&a<=Ue[1],i=e.length===2?e[0]===e[1]:!1;return{value:Mt(i?e[0]:e),isSecondary:n||i}}function Oi(t,e){let a=t.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),i=isNaN(n)?"normal":n;return($t[a]||{})[i]||Ci[a]}function $e(t,e){let a="".concat(da).concat(e.replace(":","-"));return new Promise((n,i)=>{if(t.getAttribute(a)!==null)return n();let s=q(t.children).filter(m=>m.getAttribute(_t)===e)[0],o=z.getComputedStyle(t,e),u=o.getPropertyValue("font-family"),c=u.match(ya),d=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(s&&!c)return t.removeChild(s),n();if(c&&h!=="none"&&h!==""){let m=o.getPropertyValue("content"),b=Oi(u,d),{value:D,isSecondary:j}=Ei(m),k=c[0].startsWith("FontAwesome"),E=Jt(b,D),v=E;if(k){let A=Wa(D);A.iconName&&A.prefix&&(E=A.iconName,b=A.prefix)}if(E&&!j&&(!s||s.getAttribute(Vt)!==b||s.getAttribute(Gt)!==v)){t.setAttribute(a,v),s&&t.removeChild(s);let A=pi(),{extra:$}=A;$.attributes[_t]=e,Ht(E,b).then(B=>{let Ln=Zt(l(l({},A),{},{icons:{main:B,mask:An()},prefix:b,iconName:v,extra:$,watchable:!0})),yt=p.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(yt,t.firstChild):t.appendChild(yt),yt.outerHTML=Ln.map(Rn=>nt(Rn)).join(`
`),t.removeAttribute(a),n()}).catch(i)}else n()}else n()})}function Pi(t){return Promise.all([$e(t,"::before"),$e(t,"::after")])}function Fi(t){return t.parentNode!==document.head&&!~ha.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(_t)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Be(t){if(_)return new Promise((e,a)=>{let n=q(t.querySelectorAll("*")).filter(Fi).map(Pi),i=te.begin("searchPseudoElements");En(),Promise.all(n).then(()=>{i(),Yt(),e()}).catch(()=>{i(),Yt(),a()})})}var _i={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Be,t}}},provides(t){t.pseudoElements2svg=function(e){let{node:a=p}=e;f.searchPseudoElements&&Be(a)}}},Ve=!1,Di={mixout(){return{dom:{unwatch(){En(),Ve=!0}}}},hooks(){return{bootstrap(){je(Rt("mutationObserverCallbacks",{}))},noAuto(){ui()},watch(t){let{observeMutationsRoot:e}=t;Ve?Yt():je(Rt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Ge=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((a,n)=>{let i=n.toLowerCase().split("-"),r=i[0],s=i.slice(1).join("-");if(r&&s==="h")return a.flipX=!0,a;if(r&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(r){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},Ni={mixout(){return{parse:{transform:t=>Ge(t)}}},hooks(){return{parseNodeAttributes(t,e){let a=e.getAttribute("data-fa-transform");return a&&(t.transform=Ge(a)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:a,transform:n,containerWidth:i,iconWidth:r}=e,s={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(o," ").concat(u," ").concat(c)},h={transform:"translate(".concat(r/2*-1," -256)")},m={outer:s,inner:d,path:h};return{tag:"g",attributes:l({},m.outer),children:[{tag:"g",attributes:l({},m.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:l(l({},a.icon.attributes),m.path)}]}]}}}},Et={x:0,y:0,width:"100%",height:"100%"};function Xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ti(t){return t.tag==="g"?t.children:[t]}var Mi={hooks(){return{parseNodeAttributes(t,e){let a=e.getAttribute("data-fa-mask"),n=a?pt(a.split(" ").map(i=>i.trim())):An();return n.prefix||(n.prefix=L()),t.mask=n,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:a,attributes:n,main:i,mask:r,maskId:s,transform:o}=e,{width:u,icon:c}=i,{width:d,icon:h}=r,m=Ea({transform:o,containerWidth:d,iconWidth:u}),b={tag:"rect",attributes:l(l({},Et),{},{fill:"white"})},D=c.children?{children:c.children.map(Xe)}:{},j={tag:"g",attributes:l({},m.inner),children:[Xe(l({tag:c.tag,attributes:l(l({},c.attributes),m.path)},D))]},k={tag:"g",attributes:l({},m.outer),children:[j]},E="mask-".concat(s||Z()),v="clip-".concat(s||Z()),A={tag:"mask",attributes:l(l({},Et),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,k]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:Ti(h)},A]};return a.push($,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(E,")")},Et)}),{children:a,attributes:n}}}},zi={provides(t){let e=!1;z.matchMedia&&(e=z.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let a=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:l(l({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let r=l(l({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},r),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:l(l({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:l(l({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Li={hooks(){return{parseNodeAttributes(t,e){let a=e.getAttribute("data-fa-symbol"),n=a===null?!1:a===""?!0:a;return t.symbol=n,t}}}},Ri=[Fa,ki,Ai,Si,wi,_i,Di,Ni,Mi,zi,Li];Xa(Ri,{mixoutsTo:x});var lr=x.noAuto,Pn=x.config,fr=x.library,Fn=x.dom,_n=x.parse,cr=x.findIconDefinition,ur=x.toHtml,Dn=x.icon,dr=x.layer,ji=x.text,Wi=x.counter;var Hi=["*"],Ui=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},Yi=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},$i=t=>{let e={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:t.rotate!==null,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(e).map(a=>e[a]?a:null).filter(a=>a)},ne=new WeakSet,Nn="fa-auto-css";function Bi(t,e){if(!e.autoAddCss||ne.has(t))return;if(t.getElementById(Nn)!=null){e.autoAddCss=!1,ne.add(t);return}let a=t.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",Nn),a.innerHTML=Fn.css();let n=t.head.childNodes,i=null;for(let r=n.length-1;r>-1;r--){let s=n[r],o=s.nodeName.toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}t.head.insertBefore(a,i),e.autoAddCss=!1,ne.add(t)}var Vi=t=>t.prefix!==void 0&&t.iconName!==void 0,Gi=(t,e)=>Vi(t)?t:Array.isArray(t)&&t.length===2?{prefix:t[0],iconName:t[1]}:{prefix:e,iconName:t},Xi=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(n){Pn.autoAddCss=n,this._autoAddCss=n}get autoAddCss(){return this._autoAddCss}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),qi=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...n){for(let i of n){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let r of i.icon[2])typeof r=="string"&&(this.definitions[i.prefix][r]=i)}}addIconPacks(...n){for(let i of n){let r=Object.keys(i).map(s=>i[s]);this.addIcons(...r)}}getIconDefinition(n,i){return n in this.definitions&&i in this.definitions[n]?this.definitions[n][i]:null}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Ki=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=de({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[it]});let t=e;return t})(),Qi=(()=>{let e=class e{constructor(n,i){this.renderer=n,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}};e.\u0275fac=function(i){return new(i||e)(T(ce),T(le))},e.\u0275cmp=kt({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},features:[it],ngContentSelectors:Hi,decls:1,vars:0,template:function(i,r){i&1&&(pe(),ge(0))},encapsulation:2});let t=e;return t})(),Or=(()=>{let e=class e{constructor(n,i,r,s,o){this.sanitizer=n,this.config=i,this.iconLibrary=r,this.stackItem=s,this.document=N(se),o!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){Yi();return}if(n){let i=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(i!=null){let r=this.buildParams();Bi(this.document,this.config);let s=Dn(i,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(n){let i=Gi(n,this.config.defaultPrefix);if("icon"in i)return i;let r=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return r??(Ui(i),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?_n.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:$i(n),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}};e.\u0275fac=function(i){return new(i||e)(T(ve),T(Xi),T(qi),T(Ki,8),T(Qi,8))},e.\u0275cmp=kt({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,r){i&2&&(he("innerHTML",r.renderedIconHTML,fe),me("title",r.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[it],decls:0,vars:0,template:function(i,r){},encapsulation:2});let t=e;return t})();var Pr=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=ue({type:e}),e.\u0275inj=re({});let t=e;return t})();var Mr=(()=>{var e,a;let n=class n{constructor(){w(this,e);w(this,a);O(this,e,N(ke)),O(this,a,new ae),this.currentRoute$=g(this,a).asObservable()}setCurrentRoute(){return g(this,e).events.pipe(vt(r=>r instanceof xe),vt(r=>r.snapshot.firstChild===null),at(()=>{g(this,a).next(g(this,e).url)}))}};e=new WeakMap,a=new WeakMap,n.\u0275fac=function(s){return new(s||n)},n.\u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();var Tn=(()=>{let e=class e{isValid(n){return n!=null&&n.toString().trim()!==""}isNumber(n){return this.isValid(n)&&!isNaN(Number(n))}isObject(n){return n!=null&&Object.getPrototypeOf(n)===Object.prototype}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ur=(()=>{var e,a;let n=class n{constructor(){w(this,e,N(Tn));w(this,a,"")}set UserAgent(r){O(this,a,r)}get UserAgent(){return structuredClone(g(this,a))}isMobile(){let r={Android:()=>this.UserAgent.match(/android/i),BlackBerry:()=>this.UserAgent.match(/blackberry/i),iOS:()=>this.UserAgent.match(/iphone|ipad|ipod/i),Opera:()=>this.UserAgent.match(/opera mini/i),Windows:()=>this.UserAgent.match(/iemobile/i),any:()=>r.Android()||r.BlackBerry()||r.iOS()||r.Opera()||r.Windows()};return g(this,e).isValid(r.any())&&r.any()!==!1}sortArrayByKey(r,s,o="asc",u=!1){return r.sort((c,d)=>{let h=u?parseFloat(c[s]):c[s],m=u?parseFloat(d[s]):d[s];return o==="asc"?h<m?-1:h>m?1:0:h>m?-1:h<m?1:0})}};e=new WeakMap,a=new WeakMap,n.\u0275fac=function(s){return new(s||n)},n.\u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();var Y=function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t}(Y||{}),Kr="*";function Qr(t,e){return{type:Y.Trigger,name:t,definitions:e,options:{}}}function Jr(t,e=null){return{type:Y.Animate,styles:e,timings:t}}function Zr(t,e=null){return{type:Y.Sequence,steps:t,options:e}}function ts(t){return{type:Y.Style,styles:t,offset:null}}function es(t,e,a){return{type:Y.State,name:t,styles:e,options:a}}function ns(t,e,a=null){return{type:Y.Transition,expr:t,animation:e,options:a}}var Mn=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(e=0,a=0){this.totalTime=e+a}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let a=e=="start"?this._onStartFns:this._onDoneFns;a.forEach(n=>n()),a.length=0}},zn=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(e){this.players=e;let a=0,n=0,i=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(s=>{s.onDone(()=>{++a==r&&this._onFinish()}),s.onDestroy(()=>{++n==r&&this._onDestroy()}),s.onStart(()=>{++i==r&&this._onStart()})}),this.totalTime=this.players.reduce((s,o)=>Math.max(s,o.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let a=e*this.totalTime;this.players.forEach(n=>{let i=n.totalTime?Math.min(1,a/n.totalTime):1;n.setPosition(i)})}getPosition(){let e=this.players.reduce((a,n)=>a===null||n.totalTime>a.totalTime?n:a,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let a=e=="start"?this._onStartFns:this._onDoneFns;a.forEach(n=>n()),a.length=0}},as="!";export{Mr as a,nr as b,Ur as c,qi as d,Or as e,Pr as f,Y as g,Kr as h,Qr as i,Jr as j,Zr as k,ts as l,es as m,ns as n,Mn as o,zn as p,as as q};
