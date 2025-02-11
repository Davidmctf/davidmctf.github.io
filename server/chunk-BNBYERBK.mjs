import './polyfills.server.mjs';
import{$ as Be,$a as Ge,$b as Wi,Aa as ki,B as tt,Ba as Ii,Bc as Zn,C as st,Cc as qi,D as Ut,Db as se,E as Fn,Ea as U,F as $t,Fa as Ai,G as mi,H as _n,J as _e,K as ht,Ka as Ye,L as Wn,Lb as zi,M as gi,Ma as Vn,Mc as Yi,N as vi,Na as Oi,Nc as Gi,O as yi,Oa as qn,Ob as Fi,P as G,Pa as Tt,Pb as Gn,Q as bi,Qa as Ei,Qb as Xn,R as A,Ra as Ti,Rb as _i,S as L,T as ne,Ta as Mi,Tb as Xe,U as Hn,Ua as Pi,V as We,Va as Yn,W as re,Wa as Di,X as He,Y as ie,_b as Qe,a as ui,b as fi,ba as C,ca as Ve,d as Ln,da as wi,dc as Hi,e as Un,ea as V,f as J,fc as Bi,g as B,gc as zt,ic as Vi,j as Ot,jb as Ni,jc as Qn,kc as oe,la as pt,ma as m,n as F,o as y,ob as ji,p as dt,pa as Ci,pb as Li,q as di,qa as Si,r as hi,ra as xi,rb as Ui,s as S,sb as $i,t as Fe,ta as ae,u as _,ua as mt,v as $n,va as Et,w as pi,wa as qe,x as zn,xa as Ri,ya as Bn,yc as Kn}from"./chunk-M7WVMLLS.mjs";import{a as v,b as z,h as D,i as Z,j as at}from"./chunk-RM3VWOYP.mjs";var b="primary",ke=Symbol("RouteTitle"),rr=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let r=this.params[e];return Array.isArray(r)?r[0]:r}return null}getAll(e){if(this.has(e)){let r=this.params[e];return Array.isArray(r)?r:[r]}return[]}get keys(){return Object.keys(this.params)}};function Bt(t){return new rr(t)}function Hs(t,e,r){let n=r.path.split("/");if(n.length>t.length||r.pathMatch==="full"&&(e.hasChildren()||n.length<t.length))return null;let i={};for(let a=0;a<n.length;a++){let s=n[a],o=t[a];if(s.startsWith(":"))i[s.substring(1)]=o;else if(s!==o.path)return null}return{consumed:t.slice(0,n.length),posParams:i}}function Bs(t,e){if(t.length!==e.length)return!1;for(let r=0;r<t.length;++r)if(!et(t[r],e[r]))return!1;return!0}function et(t,e){let r=t?ir(t):void 0,n=e?ir(e):void 0;if(!r||!n||r.length!=n.length)return!1;let i;for(let a=0;a<r.length;a++)if(i=r[a],!ra(t[i],e[i]))return!1;return!0}function ir(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function ra(t,e){if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;let r=[...t].sort(),n=[...e].sort();return r.every((i,a)=>n[a]===i)}else return t===e}function ia(t){return t.length>0?t[t.length-1]:null}function wt(t){return di(t)?t:Fi(t)?F(Promise.resolve(t)):y(t)}var Vs={exact:sa,subset:oa},aa={exact:qs,subset:Ys,ignored:()=>!0};function Xi(t,e,r){return Vs[r.paths](t.root,e.root,r.matrixParams)&&aa[r.queryParams](t.queryParams,e.queryParams)&&!(r.fragment==="exact"&&t.fragment!==e.fragment)}function qs(t,e){return et(t,e)}function sa(t,e,r){if(!Pt(t.segments,e.segments)||!Je(t.segments,e.segments,r)||t.numberOfChildren!==e.numberOfChildren)return!1;for(let n in e.children)if(!t.children[n]||!sa(t.children[n],e.children[n],r))return!1;return!0}function Ys(t,e){return Object.keys(e).length<=Object.keys(t).length&&Object.keys(e).every(r=>ra(t[r],e[r]))}function oa(t,e,r){return ca(t,e,e.segments,r)}function ca(t,e,r,n){if(t.segments.length>r.length){let i=t.segments.slice(0,r.length);return!(!Pt(i,r)||e.hasChildren()||!Je(i,r,n))}else if(t.segments.length===r.length){if(!Pt(t.segments,r)||!Je(t.segments,r,n))return!1;for(let i in e.children)if(!t.children[i]||!oa(t.children[i],e.children[i],n))return!1;return!0}else{let i=r.slice(0,t.segments.length),a=r.slice(t.segments.length);return!Pt(t.segments,i)||!Je(t.segments,i,n)||!t.children[b]?!1:ca(t.children[b],e,a,n)}}function Je(t,e,r){return e.every((n,i)=>aa[r](t[i].parameters,n.parameters))}var gt=class{constructor(e=new w([],{}),r={},n=null){this.root=e,this.queryParams=r,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Bt(this.queryParams),this._queryParamMap}toString(){return Qs.serialize(this)}},w=class{constructor(e,r){this.segments=e,this.children=r,this.parent=null,Object.values(r).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return tn(this)}},Mt=class{constructor(e,r){this.path=e,this.parameters=r}get parameterMap(){return this._parameterMap??=Bt(this.parameters),this._parameterMap}toString(){return ua(this)}};function Gs(t,e){return Pt(t,e)&&t.every((r,n)=>et(r.parameters,e[n].parameters))}function Pt(t,e){return t.length!==e.length?!1:t.every((r,n)=>r.path===e[n].path)}function Xs(t,e){let r=[];return Object.entries(t.children).forEach(([n,i])=>{n===b&&(r=r.concat(e(i,n)))}),Object.entries(t.children).forEach(([n,i])=>{n!==b&&(r=r.concat(e(i,n)))}),r}var Gt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:()=>new pe,providedIn:"root"});let t=e;return t})(),pe=class{parse(e){let r=new sr(e);return new gt(r.parseRootSegment(),r.parseQueryParams(),r.parseFragment())}serialize(e){let r=`/${ce(e.root,!0)}`,n=Js(e.queryParams),i=typeof e.fragment=="string"?`#${Ks(e.fragment)}`:"";return`${r}${n}${i}`}},Qs=new pe;function tn(t){return t.segments.map(e=>ua(e)).join("/")}function ce(t,e){if(!t.hasChildren())return tn(t);if(e){let r=t.children[b]?ce(t.children[b],!1):"",n=[];return Object.entries(t.children).forEach(([i,a])=>{i!==b&&n.push(`${i}:${ce(a,!1)}`)}),n.length>0?`${r}(${n.join("//")})`:r}else{let r=Xs(t,(n,i)=>i===b?[ce(t.children[b],!1)]:[`${i}:${ce(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[b]!=null?`${tn(t)}/${r[0]}`:`${tn(t)}/(${r.join("//")})`}}function la(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ke(t){return la(t).replace(/%3B/gi,";")}function Ks(t){return encodeURI(t)}function ar(t){return la(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function en(t){return decodeURIComponent(t)}function Qi(t){return en(t.replace(/\+/g,"%20"))}function ua(t){return`${ar(t.path)}${Zs(t.parameters)}`}function Zs(t){return Object.entries(t).map(([e,r])=>`;${ar(e)}=${ar(r)}`).join("")}function Js(t){let e=Object.entries(t).map(([r,n])=>Array.isArray(n)?n.map(i=>`${Ke(r)}=${Ke(i)}`).join("&"):`${Ke(r)}=${Ke(n)}`).filter(r=>r);return e.length?`?${e.join("&")}`:""}var to=/^[^\/()?;#]+/;function Jn(t){let e=t.match(to);return e?e[0]:""}var eo=/^[^\/()?;=#]+/;function no(t){let e=t.match(eo);return e?e[0]:""}var ro=/^[^=?&#]+/;function io(t){let e=t.match(ro);return e?e[0]:""}var ao=/^[^&#]+/;function so(t){let e=t.match(ao);return e?e[0]:""}var sr=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new w([],{}):new w([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let r={};this.peekStartsWith("/(")&&(this.capture("/"),r=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(r).length>0)&&(n[b]=new w(e,r)),n}parseSegment(){let e=Jn(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new L(4009,!1);return this.capture(e),new Mt(en(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let r=no(this.remaining);if(!r)return;this.capture(r);let n="";if(this.consumeOptional("=")){let i=Jn(this.remaining);i&&(n=i,this.capture(n))}e[en(r)]=en(n)}parseQueryParam(e){let r=io(this.remaining);if(!r)return;this.capture(r);let n="";if(this.consumeOptional("=")){let s=so(this.remaining);s&&(n=s,this.capture(n))}let i=Qi(r),a=Qi(n);if(e.hasOwnProperty(i)){let s=e[i];Array.isArray(s)||(s=[s],e[i]=s),s.push(a)}else e[i]=a}parseParens(e){let r={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Jn(this.remaining),i=this.remaining[n.length];if(i!=="/"&&i!==")"&&i!==";")throw new L(4010,!1);let a;n.indexOf(":")>-1?(a=n.slice(0,n.indexOf(":")),this.capture(a),this.capture(":")):e&&(a=b);let s=this.parseChildren();r[a]=Object.keys(s).length===1?s[b]:new w([],s),this.consumeOptional("//")}return r}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new L(4011,!1)}};function fa(t){return t.segments.length>0?new w([],{[b]:t}):t}function da(t){let e={};for(let[n,i]of Object.entries(t.children)){let a=da(i);if(n===b&&a.segments.length===0&&a.hasChildren())for(let[s,o]of Object.entries(a.children))e[s]=o;else(a.segments.length>0||a.hasChildren())&&(e[n]=a)}let r=new w(t.segments,e);return oo(r)}function oo(t){if(t.numberOfChildren===1&&t.children[b]){let e=t.children[b];return new w(t.segments.concat(e.segments),e.children)}return t}function Vt(t){return t instanceof gt}function co(t,e,r=null,n=null){let i=ha(t);return pa(i,e,r,n)}function ha(t){let e;function r(a){let s={};for(let c of a.children){let l=r(c);s[c.outlet]=l}let o=new w(a.url,s);return a===t&&(e=o),o}let n=r(t.root),i=fa(n);return e??i}function pa(t,e,r,n){let i=t;for(;i.parent;)i=i.parent;if(e.length===0)return tr(i,i,i,r,n);let a=lo(e);if(a.toRoot())return tr(i,i,new w([],{}),r,n);let s=uo(a,i,t),o=s.processChildren?fe(s.segmentGroup,s.index,a.commands):ga(s.segmentGroup,s.index,a.commands);return tr(i,s.segmentGroup,o,r,n)}function nn(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function me(t){return typeof t=="object"&&t!=null&&t.outlets}function tr(t,e,r,n,i){let a={};n&&Object.entries(n).forEach(([c,l])=>{a[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let s;t===e?s=r:s=ma(t,e,r);let o=fa(da(s));return new gt(o,a,i)}function ma(t,e,r){let n={};return Object.entries(t.children).forEach(([i,a])=>{a===e?n[i]=r:n[i]=ma(a,e,r)}),new w(t.segments,n)}var rn=class{constructor(e,r,n){if(this.isAbsolute=e,this.numberOfDoubleDots=r,this.commands=n,e&&n.length>0&&nn(n[0]))throw new L(4003,!1);let i=n.find(me);if(i&&i!==ia(n))throw new L(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function lo(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new rn(!0,0,t);let e=0,r=!1,n=t.reduce((i,a,s)=>{if(typeof a=="object"&&a!=null){if(a.outlets){let o={};return Object.entries(a.outlets).forEach(([c,l])=>{o[c]=typeof l=="string"?l.split("/"):l}),[...i,{outlets:o}]}if(a.segmentPath)return[...i,a.segmentPath]}return typeof a!="string"?[...i,a]:s===0?(a.split("/").forEach((o,c)=>{c==0&&o==="."||(c==0&&o===""?r=!0:o===".."?e++:o!=""&&i.push(o))}),i):[...i,a]},[]);return new rn(r,e,n)}var Wt=class{constructor(e,r,n){this.segmentGroup=e,this.processChildren=r,this.index=n}};function uo(t,e,r){if(t.isAbsolute)return new Wt(e,!0,0);if(!r)return new Wt(e,!1,NaN);if(r.parent===null)return new Wt(r,!0,0);let n=nn(t.commands[0])?0:1,i=r.segments.length-1+n;return fo(r,i,t.numberOfDoubleDots)}function fo(t,e,r){let n=t,i=e,a=r;for(;a>i;){if(a-=i,n=n.parent,!n)throw new L(4005,!1);i=n.segments.length}return new Wt(n,!1,i-a)}function ho(t){return me(t[0])?t[0].outlets:{[b]:t}}function ga(t,e,r){if(t??=new w([],{}),t.segments.length===0&&t.hasChildren())return fe(t,e,r);let n=po(t,e,r),i=r.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let a=new w(t.segments.slice(0,n.pathIndex),{});return a.children[b]=new w(t.segments.slice(n.pathIndex),t.children),fe(a,0,i)}else return n.match&&i.length===0?new w(t.segments,{}):n.match&&!t.hasChildren()?or(t,e,r):n.match?fe(t,0,i):or(t,e,r)}function fe(t,e,r){if(r.length===0)return new w(t.segments,{});{let n=ho(r),i={};if(Object.keys(n).some(a=>a!==b)&&t.children[b]&&t.numberOfChildren===1&&t.children[b].segments.length===0){let a=fe(t.children[b],e,r);return new w(t.segments,a.children)}return Object.entries(n).forEach(([a,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(i[a]=ga(t.children[a],e,s))}),Object.entries(t.children).forEach(([a,s])=>{n[a]===void 0&&(i[a]=s)}),new w(t.segments,i)}}function po(t,e,r){let n=0,i=e,a={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(n>=r.length)return a;let s=t.segments[i],o=r[n];if(me(o))break;let c=`${o}`,l=n<r.length-1?r[n+1]:null;if(i>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!Zi(c,l,s))return a;n+=2}else{if(!Zi(c,{},s))return a;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function or(t,e,r){let n=t.segments.slice(0,e),i=0;for(;i<r.length;){let a=r[i];if(me(a)){let c=mo(a.outlets);return new w(n,c)}if(i===0&&nn(r[0])){let c=t.segments[e];n.push(new Mt(c.path,Ki(r[0]))),i++;continue}let s=me(a)?a.outlets[b]:`${a}`,o=i<r.length-1?r[i+1]:null;s&&o&&nn(o)?(n.push(new Mt(s,Ki(o))),i+=2):(n.push(new Mt(s,{})),i++)}return new w(n,{})}function mo(t){let e={};return Object.entries(t).forEach(([r,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(e[r]=or(new w([],{}),0,n))}),e}function Ki(t){let e={};return Object.entries(t).forEach(([r,n])=>e[r]=`${n}`),e}function Zi(t,e,r){return t==r.path&&et(e,r.parameters)}var de="imperative",P=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(P||{}),Y=class{constructor(e,r){this.id=e,this.url=r}},qt=class extends Y{constructor(e,r,n="imperative",i=null){super(e,r),this.type=P.NavigationStart,this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},nt=class extends Y{constructor(e,r,n){super(e,r),this.urlAfterRedirects=n,this.type=P.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},q=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(q||{}),an=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(an||{}),vt=class extends Y{constructor(e,r,n,i){super(e,r),this.reason=n,this.code=i,this.type=P.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},yt=class extends Y{constructor(e,r,n,i){super(e,r),this.reason=n,this.code=i,this.type=P.NavigationSkipped}},ge=class extends Y{constructor(e,r,n,i){super(e,r),this.error=n,this.target=i,this.type=P.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},sn=class extends Y{constructor(e,r,n,i){super(e,r),this.urlAfterRedirects=n,this.state=i,this.type=P.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cr=class extends Y{constructor(e,r,n,i){super(e,r),this.urlAfterRedirects=n,this.state=i,this.type=P.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},lr=class extends Y{constructor(e,r,n,i,a){super(e,r),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=a,this.type=P.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ur=class extends Y{constructor(e,r,n,i){super(e,r),this.urlAfterRedirects=n,this.state=i,this.type=P.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fr=class extends Y{constructor(e,r,n,i){super(e,r),this.urlAfterRedirects=n,this.state=i,this.type=P.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},dr=class{constructor(e){this.route=e,this.type=P.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},hr=class{constructor(e){this.route=e,this.type=P.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},pr=class{constructor(e){this.snapshot=e,this.type=P.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},mr=class{constructor(e){this.snapshot=e,this.type=P.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},gr=class{constructor(e){this.snapshot=e,this.type=P.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ve=class{constructor(e){this.snapshot=e,this.type=P.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},on=class{constructor(e,r,n){this.routerEvent=e,this.position=r,this.anchor=n,this.type=P.Scroll}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},ye=class{},be=class{constructor(e){this.url=e}};var vr=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new Ie,this.attachRef=null}},Ie=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(n,i){let a=this.getOrCreateContext(n);a.outlet=i,this.contexts.set(n,a)}onChildOutletDestroyed(n){let i=this.getContext(n);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let i=this.getContext(n);return i||(i=new vr,this.contexts.set(n,i)),i}getContext(n){return this.contexts.get(n)||null}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),cn=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let r=this.pathFromRoot(e);return r.length>1?r[r.length-2]:null}children(e){let r=yr(e,this._root);return r?r.children.map(n=>n.value):[]}firstChild(e){let r=yr(e,this._root);return r&&r.children.length>0?r.children[0].value:null}siblings(e){let r=br(e,this._root);return r.length<2?[]:r[r.length-2].children.map(i=>i.value).filter(i=>i!==e)}pathFromRoot(e){return br(e,this._root).map(r=>r.value)}};function yr(t,e){if(t===e.value)return e;for(let r of e.children){let n=yr(t,r);if(n)return n}return null}function br(t,e){if(t===e.value)return[e];for(let r of e.children){let n=br(t,r);if(n.length)return n.unshift(e),n}return[]}var W=class{constructor(e,r){this.value=e,this.children=r}toString(){return`TreeNode(${this.value})`}};function _t(t){let e={};return t&&t.children.forEach(r=>e[r.value.outlet]=r),e}var ln=class extends cn{constructor(e,r){super(e),this.snapshot=r,Er(this,e)}toString(){return this.snapshot.toString()}};function va(t){let e=go(t),r=new B([new Mt("",{})]),n=new B({}),i=new B({}),a=new B({}),s=new B(""),o=new bt(r,n,a,s,i,b,t,e.root);return o.snapshot=e.root,new ln(new W(o,[]),e)}function go(t){let e={},r={},n={},i="",a=new we([],e,n,i,r,b,t,null,{});return new un("",new W(a,[]))}var bt=class{constructor(e,r,n,i,a,s,o,c){this.urlSubject=e,this.paramsSubject=r,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=a,this.outlet=s,this.component=o,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(S(l=>l[ke]))??y(void 0),this.url=e,this.params=r,this.queryParams=n,this.fragment=i,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(S(e=>Bt(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(S(e=>Bt(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Or(t,e,r="emptyOnly"){let n,{routeConfig:i}=t;return e!==null&&(r==="always"||i?.path===""||!e.component&&!e.routeConfig?.loadComponent)?n={params:v(v({},e.params),t.params),data:v(v({},e.data),t.data),resolve:v(v(v(v({},t.data),e.data),i?.data),t._resolvedData)}:n={params:v({},t.params),data:v({},t.data),resolve:v(v({},t.data),t._resolvedData??{})},i&&ba(i)&&(n.resolve[ke]=i.title),n}var we=class{get title(){return this.data?.[ke]}constructor(e,r,n,i,a,s,o,c,l){this.url=e,this.params=r,this.queryParams=n,this.fragment=i,this.data=a,this.outlet=s,this.component=o,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Bt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Bt(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(n=>n.toString()).join("/"),r=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${r}')`}},un=class extends cn{constructor(e,r){super(r),this.url=e,Er(this,r)}toString(){return ya(this._root)}};function Er(t,e){e.value._routerState=t,e.children.forEach(r=>Er(t,r))}function ya(t){let e=t.children.length>0?` { ${t.children.map(ya).join(", ")} } `:"";return`${t.value}${e}`}function er(t){if(t.snapshot){let e=t.snapshot,r=t._futureSnapshot;t.snapshot=r,et(e.queryParams,r.queryParams)||t.queryParamsSubject.next(r.queryParams),e.fragment!==r.fragment&&t.fragmentSubject.next(r.fragment),et(e.params,r.params)||t.paramsSubject.next(r.params),Bs(e.url,r.url)||t.urlSubject.next(r.url),et(e.data,r.data)||t.dataSubject.next(r.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function wr(t,e){let r=et(t.params,e.params)&&Gs(t.url,e.url),n=!t.parent!=!e.parent;return r&&!n&&(!t.parent||wr(t.parent,e.parent))}function ba(t){return typeof t.title=="string"||t.title===null}var vo=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=b,this.activateEvents=new ne,this.deactivateEvents=new ne,this.attachEvents=new ne,this.detachEvents=new ne,this.parentContexts=m(Ie),this.location=m(Ti),this.changeDetector=m(qn),this.environmentInjector=m(ae),this.inputBinder=m(pn,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(n){if(n.name){let{firstChange:i,previousValue:a}=n.name;if(i)return;this.isTrackedInParentContexts(a)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(a)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new L(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new L(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new L(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,i){this.activated=n,this._activatedRoute=i,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,i){if(this.isActivated)throw new L(4013,!1);this._activatedRoute=n;let a=this.location,o=n.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Cr(n,c,a.injector);this.activated=a.createComponent(o,{index:a.length,injector:l,environmentInjector:i??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=ie({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Et]});let t=e;return t})(),Cr=class{constructor(e,r,n){this.route=e,this.childContexts=r,this.parent=n}get(e,r){return e===bt?this.route:e===Ie?this.childContexts:this.parent.get(e,r)}},pn=new V(""),Ji=(()=>{let e=class e{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(n){this.unsubscribeFromRouteData(n),this.subscribeToRouteData(n)}unsubscribeFromRouteData(n){this.outletDataSubscriptions.get(n)?.unsubscribe(),this.outletDataSubscriptions.delete(n)}subscribeToRouteData(n){let{activatedRoute:i}=n,a=Fe([i.queryParams,i.params,i.data]).pipe(G(([s,o,c],l)=>(c=v(v(v({},s),o),c),l===0?y(c):Promise.resolve(c)))).subscribe(s=>{if(!n.isActivated||!n.activatedComponentRef||n.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(n);return}let o=Wi(i.component);if(!o){this.unsubscribeFromRouteData(n);return}for(let{templateName:c}of o.inputs)n.activatedComponentRef.setInput(c,s[c])});this.outletDataSubscriptions.set(n,a)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac});let t=e;return t})();function yo(t,e,r){let n=Ce(t,e._root,r?r._root:void 0);return new ln(n,e)}function Ce(t,e,r){if(r&&t.shouldReuseRoute(e.value,r.value.snapshot)){let n=r.value;n._futureSnapshot=e.value;let i=bo(t,e,r);return new W(n,i)}else{if(t.shouldAttach(e.value)){let a=t.retrieve(e.value);if(a!==null){let s=a.route;return s.value._futureSnapshot=e.value,s.children=e.children.map(o=>Ce(t,o)),s}}let n=wo(e.value),i=e.children.map(a=>Ce(t,a));return new W(n,i)}}function bo(t,e,r){return e.children.map(n=>{for(let i of r.children)if(t.shouldReuseRoute(n.value,i.value.snapshot))return Ce(t,n,i);return Ce(t,n)})}function wo(t){return new bt(new B(t.url),new B(t.params),new B(t.queryParams),new B(t.fragment),new B(t.data),t.outlet,t.component,t)}var wa="ngNavigationCancelingError";function Ca(t,e){let{redirectTo:r,navigationBehaviorOptions:n}=Vt(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,i=Sa(!1,q.Redirect);return i.url=r,i.navigationBehaviorOptions=n,i}function Sa(t,e){let r=new Error(`NavigationCancelingError: ${t||""}`);return r[wa]=!0,r.cancellationCode=e,r}function Co(t){return xa(t)&&Vt(t.url)}function xa(t){return!!t&&t[wa]}var So=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=re({type:e,selectors:[["ng-component"]],standalone:!0,features:[se],decls:1,vars:0,template:function(i,a){i&1&&Ni(0,"router-outlet")},dependencies:[vo],encapsulation:2});let t=e;return t})();function xo(t,e){return t.providers&&!t._injector&&(t._injector=Yn(t.providers,e,`Route: ${t.path}`)),t._injector??e}function Tr(t){let e=t.children&&t.children.map(Tr),r=e?z(v({},t),{children:e}):v({},t);return!r.component&&!r.loadComponent&&(e||r.loadChildren)&&r.outlet&&r.outlet!==b&&(r.component=So),r}function rt(t){return t.outlet||b}function Ro(t,e){let r=t.filter(n=>rt(n)===e);return r.push(...t.filter(n=>rt(n)!==e)),r}function Ae(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let e=t.parent;e;e=e.parent){let r=e.routeConfig;if(r?._loadedInjector)return r._loadedInjector;if(r?._injector)return r._injector}return null}var ko=(t,e,r,n)=>S(i=>(new Sr(e,i.targetRouterState,i.currentRouterState,r,n).activate(t),i)),Sr=class{constructor(e,r,n,i,a){this.routeReuseStrategy=e,this.futureState=r,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=a}activate(e){let r=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(r,n,e),er(this.futureState.root),this.activateChildRoutes(r,n,e)}deactivateChildRoutes(e,r,n){let i=_t(r);e.children.forEach(a=>{let s=a.value.outlet;this.deactivateRoutes(a,i[s],n),delete i[s]}),Object.values(i).forEach(a=>{this.deactivateRouteAndItsChildren(a,n)})}deactivateRoutes(e,r,n){let i=e.value,a=r?r.value:null;if(i===a)if(i.component){let s=n.getContext(i.outlet);s&&this.deactivateChildRoutes(e,r,s.children)}else this.deactivateChildRoutes(e,r,n);else a&&this.deactivateRouteAndItsChildren(r,n)}deactivateRouteAndItsChildren(e,r){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,r):this.deactivateRouteAndOutlet(e,r)}detachAndStoreRouteSubtree(e,r){let n=r.getContext(e.value.outlet),i=n&&e.value.component?n.children:r,a=_t(e);for(let s of Object.values(a))this.deactivateRouteAndItsChildren(s,i);if(n&&n.outlet){let s=n.outlet.detach(),o=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:s,route:e,contexts:o})}}deactivateRouteAndOutlet(e,r){let n=r.getContext(e.value.outlet),i=n&&e.value.component?n.children:r,a=_t(e);for(let s of Object.values(a))this.deactivateRouteAndItsChildren(s,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(e,r,n){let i=_t(r);e.children.forEach(a=>{this.activateRoutes(a,i[a.value.outlet],n),this.forwardEvent(new ve(a.value.snapshot))}),e.children.length&&this.forwardEvent(new mr(e.value.snapshot))}activateRoutes(e,r,n){let i=e.value,a=r?r.value:null;if(er(i),i===a)if(i.component){let s=n.getOrCreateContext(i.outlet);this.activateChildRoutes(e,r,s.children)}else this.activateChildRoutes(e,r,n);else if(i.component){let s=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let o=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(o.contexts),s.attachRef=o.componentRef,s.route=o.route.value,s.outlet&&s.outlet.attach(o.componentRef,o.route.value),er(o.route.value),this.activateChildRoutes(e,null,s.children)}else{let o=Ae(i.snapshot);s.attachRef=null,s.route=i,s.injector=o,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(e,null,s.children)}}else this.activateChildRoutes(e,null,n)}},fn=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Ht=class{constructor(e,r){this.component=e,this.route=r}};function Io(t,e,r){let n=t._root,i=e?e._root:null;return le(n,i,r,[n.value])}function Ao(t){let e=t.routeConfig?t.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:t,guards:e}}function Xt(t,e){let r=Symbol(),n=e.get(t,r);return n===r?typeof t=="function"&&!wi(t)?t:e.get(t):n}function le(t,e,r,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let a=_t(e);return t.children.forEach(s=>{Oo(s,a[s.value.outlet],r,n.concat([s.value]),i),delete a[s.value.outlet]}),Object.entries(a).forEach(([s,o])=>he(o,r.getContext(s),i)),i}function Oo(t,e,r,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let a=t.value,s=e?e.value:null,o=r?r.getContext(t.value.outlet):null;if(s&&a.routeConfig===s.routeConfig){let c=Eo(s,a,a.routeConfig.runGuardsAndResolvers);c?i.canActivateChecks.push(new fn(n)):(a.data=s.data,a._resolvedData=s._resolvedData),a.component?le(t,e,o?o.children:null,n,i):le(t,e,r,n,i),c&&o&&o.outlet&&o.outlet.isActivated&&i.canDeactivateChecks.push(new Ht(o.outlet.component,s))}else s&&he(e,o,i),i.canActivateChecks.push(new fn(n)),a.component?le(t,null,o?o.children:null,n,i):le(t,null,r,n,i);return i}function Eo(t,e,r){if(typeof r=="function")return r(t,e);switch(r){case"pathParamsChange":return!Pt(t.url,e.url);case"pathParamsOrQueryParamsChange":return!Pt(t.url,e.url)||!et(t.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!wr(t,e)||!et(t.queryParams,e.queryParams);case"paramsChange":default:return!wr(t,e)}}function he(t,e,r){let n=_t(t),i=t.value;Object.entries(n).forEach(([a,s])=>{i.component?e?he(s,e.children.getContext(a),r):he(s,null,r):he(s,e,r)}),i.component?e&&e.outlet&&e.outlet.isActivated?r.canDeactivateChecks.push(new Ht(e.outlet.component,i)):r.canDeactivateChecks.push(new Ht(null,i)):r.canDeactivateChecks.push(new Ht(null,i))}function Oe(t){return typeof t=="function"}function To(t){return typeof t=="boolean"}function Mo(t){return t&&Oe(t.canLoad)}function Po(t){return t&&Oe(t.canActivate)}function Do(t){return t&&Oe(t.canActivateChild)}function No(t){return t&&Oe(t.canDeactivate)}function jo(t){return t&&Oe(t.canMatch)}function Ra(t){return t instanceof hi||t?.name==="EmptyError"}var Ze=Symbol("INITIAL_VALUE");function Yt(){return G(t=>Fe(t.map(e=>e.pipe($t(1),yi(Ze)))).pipe(S(e=>{for(let r of e)if(r!==!0){if(r===Ze)return Ze;if(r===!1||r instanceof gt)return r}return!0}),tt(e=>e!==Ze),$t(1)))}function Lo(t,e){return _(r=>{let{targetSnapshot:n,currentSnapshot:i,guards:{canActivateChecks:a,canDeactivateChecks:s}}=r;return s.length===0&&a.length===0?y(z(v({},r),{guardsResult:!0})):Uo(s,n,i,t).pipe(_(o=>o&&To(o)?$o(n,a,t,e):y(o)),S(o=>z(v({},r),{guardsResult:o})))})}function Uo(t,e,r,n){return F(t).pipe(_(i=>Ho(i.component,i.route,r,e,n)),ht(i=>i!==!0,!0))}function $o(t,e,r,n){return F(e).pipe(Ut(i=>pi(Fo(i.route.parent,n),zo(i.route,n),Wo(t,i.path,r),_o(t,i.route,r))),ht(i=>i!==!0,!0))}function zo(t,e){return t!==null&&e&&e(new gr(t)),y(!0)}function Fo(t,e){return t!==null&&e&&e(new pr(t)),y(!0)}function _o(t,e,r){let n=e.routeConfig?e.routeConfig.canActivate:null;if(!n||n.length===0)return y(!0);let i=n.map(a=>zn(()=>{let s=Ae(e)??r,o=Xt(a,s),c=Po(o)?o.canActivate(e,t):mt(s,()=>o(e,t));return wt(c).pipe(ht())}));return y(i).pipe(Yt())}function Wo(t,e,r){let n=e[e.length-1],a=e.slice(0,e.length-1).reverse().map(s=>Ao(s)).filter(s=>s!==null).map(s=>zn(()=>{let o=s.guards.map(c=>{let l=Ae(s.node)??r,u=Xt(c,l),f=Do(u)?u.canActivateChild(n,t):mt(l,()=>u(n,t));return wt(f).pipe(ht())});return y(o).pipe(Yt())}));return y(a).pipe(Yt())}function Ho(t,e,r,n,i){let a=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!a||a.length===0)return y(!0);let s=a.map(o=>{let c=Ae(e)??i,l=Xt(o,c),u=No(l)?l.canDeactivate(t,e,r,n):mt(c,()=>l(t,e,r,n));return wt(u).pipe(ht())});return y(s).pipe(Yt())}function Bo(t,e,r,n){let i=e.canLoad;if(i===void 0||i.length===0)return y(!0);let a=i.map(s=>{let o=Xt(s,t),c=Mo(o)?o.canLoad(e,r):mt(t,()=>o(e,r));return wt(c)});return y(a).pipe(Yt(),ka(n))}function ka(t){return fi(A(e=>{if(Vt(e))throw Ca(t,e)}),S(e=>e===!0))}function Vo(t,e,r,n){let i=e.canMatch;if(!i||i.length===0)return y(!0);let a=i.map(s=>{let o=Xt(s,t),c=jo(o)?o.canMatch(e,r):mt(t,()=>o(e,r));return wt(c)});return y(a).pipe(Yt(),ka(n))}var Se=class{constructor(e){this.segmentGroup=e||null}},dn=class extends Error{constructor(e){super(),this.urlTree=e}};function Ft(t){return dt(new Se(t))}function qo(t){return dt(new L(4e3,!1))}function Yo(t){return dt(Sa(!1,q.GuardRejected))}var xr=class{constructor(e,r){this.urlSerializer=e,this.urlTree=r}lineralizeSegments(e,r){let n=[],i=r.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return y(n);if(i.numberOfChildren>1||!i.children[b])return qo(e.redirectTo);i=i.children[b]}}applyRedirectCommands(e,r,n){let i=this.applyRedirectCreateUrlTree(r,this.urlSerializer.parse(r),e,n);if(r.startsWith("/"))throw new dn(i);return i}applyRedirectCreateUrlTree(e,r,n,i){let a=this.createSegmentGroup(e,r.root,n,i);return new gt(a,this.createQueryParams(r.queryParams,this.urlTree.queryParams),r.fragment)}createQueryParams(e,r){let n={};return Object.entries(e).forEach(([i,a])=>{if(typeof a=="string"&&a.startsWith(":")){let o=a.substring(1);n[i]=r[o]}else n[i]=a}),n}createSegmentGroup(e,r,n,i){let a=this.createSegments(e,r.segments,n,i),s={};return Object.entries(r.children).forEach(([o,c])=>{s[o]=this.createSegmentGroup(e,c,n,i)}),new w(a,s)}createSegments(e,r,n,i){return r.map(a=>a.path.startsWith(":")?this.findPosParam(e,a,i):this.findOrReturn(a,n))}findPosParam(e,r,n){let i=n[r.path.substring(1)];if(!i)throw new L(4001,!1);return i}findOrReturn(e,r){let n=0;for(let i of r){if(i.path===e.path)return r.splice(n),i;n++}return e}},Rr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Go(t,e,r,n,i){let a=Mr(t,e,r);return a.matched?(n=xo(e,n),Vo(n,e,r,i).pipe(S(s=>s===!0?a:v({},Rr)))):y(a)}function Mr(t,e,r){if(e.path==="**")return Xo(r);if(e.path==="")return e.pathMatch==="full"&&(t.hasChildren()||r.length>0)?v({},Rr):{matched:!0,consumedSegments:[],remainingSegments:r,parameters:{},positionalParamSegments:{}};let i=(e.matcher||Hs)(r,t,e);if(!i)return v({},Rr);let a={};Object.entries(i.posParams??{}).forEach(([o,c])=>{a[o]=c.path});let s=i.consumed.length>0?v(v({},a),i.consumed[i.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:i.consumed,remainingSegments:r.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function Xo(t){return{matched:!0,parameters:t.length>0?ia(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function ta(t,e,r,n){return r.length>0&&Zo(t,r,n)?{segmentGroup:new w(e,Ko(n,new w(r,t.children))),slicedSegments:[]}:r.length===0&&Jo(t,r,n)?{segmentGroup:new w(t.segments,Qo(t,r,n,t.children)),slicedSegments:r}:{segmentGroup:new w(t.segments,t.children),slicedSegments:r}}function Qo(t,e,r,n){let i={};for(let a of r)if(mn(t,e,a)&&!n[rt(a)]){let s=new w([],{});i[rt(a)]=s}return v(v({},n),i)}function Ko(t,e){let r={};r[b]=e;for(let n of t)if(n.path===""&&rt(n)!==b){let i=new w([],{});r[rt(n)]=i}return r}function Zo(t,e,r){return r.some(n=>mn(t,e,n)&&rt(n)!==b)}function Jo(t,e,r){return r.some(n=>mn(t,e,n))}function mn(t,e,r){return(t.hasChildren()||e.length>0)&&r.pathMatch==="full"?!1:r.path===""}function tc(t,e,r,n){return rt(t)!==n&&(n===b||!mn(e,r,t))?!1:Mr(e,t,r).matched}function ec(t,e,r){return e.length===0&&!t.children[r]}var kr=class{};function nc(t,e,r,n,i,a,s="emptyOnly"){return new Ir(t,e,r,n,i,s,a).recognize()}var rc=31,Ir=class{constructor(e,r,n,i,a,s,o){this.injector=e,this.configLoader=r,this.rootComponentType=n,this.config=i,this.urlTree=a,this.paramsInheritanceStrategy=s,this.urlSerializer=o,this.applyRedirects=new xr(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new L(4002,`'${e.segmentGroup}'`)}recognize(){let e=ta(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(S(r=>{let n=new we([],Object.freeze({}),Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,{},b,this.rootComponentType,null,{}),i=new W(n,r),a=new un("",i),s=co(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(s),this.inheritParamsAndData(a._root,null),{state:a,tree:s}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,b).pipe(st(n=>{if(n instanceof dn)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Se?this.noMatchError(n):n}))}inheritParamsAndData(e,r){let n=e.value,i=Or(n,r,this.paramsInheritanceStrategy);n.params=Object.freeze(i.params),n.data=Object.freeze(i.data),e.children.forEach(a=>this.inheritParamsAndData(a,n))}processSegmentGroup(e,r,n,i){return n.segments.length===0&&n.hasChildren()?this.processChildren(e,r,n):this.processSegment(e,r,n,n.segments,i,!0).pipe(S(a=>a instanceof W?[a]:[]))}processChildren(e,r,n){let i=[];for(let a of Object.keys(n.children))a==="primary"?i.unshift(a):i.push(a);return F(i).pipe(Ut(a=>{let s=n.children[a],o=Ro(r,a);return this.processSegmentGroup(e,o,s,a)}),vi((a,s)=>(a.push(...s),a)),Fn(null),gi(),_(a=>{if(a===null)return Ft(n);let s=Ia(a);return ic(s),y(s)}))}processSegment(e,r,n,i,a,s){return F(r).pipe(Ut(o=>this.processSegmentAgainstRoute(o._injector??e,r,o,n,i,a,s).pipe(st(c=>{if(c instanceof Se)return y(null);throw c}))),ht(o=>!!o),st(o=>{if(Ra(o))return ec(n,i,a)?y(new kr):Ft(n);throw o}))}processSegmentAgainstRoute(e,r,n,i,a,s,o){return tc(n,i,a,s)?n.redirectTo===void 0?this.matchSegmentAgainstRoute(e,i,n,a,s):this.allowRedirects&&o?this.expandSegmentAgainstRouteUsingRedirect(e,i,r,n,a,s):Ft(i):Ft(i)}expandSegmentAgainstRouteUsingRedirect(e,r,n,i,a,s){let{matched:o,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=Mr(r,i,a);if(!o)return Ft(r);i.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>rc&&(this.allowRedirects=!1));let f=this.applyRedirects.applyRedirectCommands(c,i.redirectTo,l);return this.applyRedirects.lineralizeSegments(i,f).pipe(_(d=>this.processSegment(e,n,r,d.concat(u),s,!1)))}matchSegmentAgainstRoute(e,r,n,i,a){let s=Go(r,n,i,e,this.urlSerializer);return n.path==="**"&&(r.children={}),s.pipe(G(o=>o.matched?(e=n._injector??e,this.getChildConfig(e,n,i).pipe(G(({routes:c})=>{let l=n._loadedInjector??e,{consumedSegments:u,remainingSegments:f,parameters:d}=o,g=new we(u,d,Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,sc(n),rt(n),n.component??n._loadedComponent??null,n,oc(n)),{segmentGroup:I,slicedSegments:E}=ta(r,u,f,c);if(E.length===0&&I.hasChildren())return this.processChildren(l,c,I).pipe(S(T=>T===null?null:new W(g,T)));if(c.length===0&&E.length===0)return y(new W(g,[]));let N=rt(n)===a;return this.processSegment(l,c,I,E,N?b:a,!0).pipe(S(T=>new W(g,T instanceof W?[T]:[])))}))):Ft(r)))}getChildConfig(e,r,n){return r.children?y({routes:r.children,injector:e}):r.loadChildren?r._loadedRoutes!==void 0?y({routes:r._loadedRoutes,injector:r._loadedInjector}):Bo(e,r,n,this.urlSerializer).pipe(_(i=>i?this.configLoader.loadChildren(e,r).pipe(A(a=>{r._loadedRoutes=a.routes,r._loadedInjector=a.injector})):Yo(r))):y({routes:[],injector:e})}};function ic(t){t.sort((e,r)=>e.value.outlet===b?-1:r.value.outlet===b?1:e.value.outlet.localeCompare(r.value.outlet))}function ac(t){let e=t.value.routeConfig;return e&&e.path===""}function Ia(t){let e=[],r=new Set;for(let n of t){if(!ac(n)){e.push(n);continue}let i=e.find(a=>n.value.routeConfig===a.value.routeConfig);i!==void 0?(i.children.push(...n.children),r.add(i)):e.push(n)}for(let n of r){let i=Ia(n.children);e.push(new W(n.value,i))}return e.filter(n=>!r.has(n))}function sc(t){return t.data||{}}function oc(t){return t.resolve||{}}function cc(t,e,r,n,i,a){return _(s=>nc(t,e,r,n,s.extractedUrl,i,a).pipe(S(({state:o,tree:c})=>z(v({},s),{targetSnapshot:o,urlAfterRedirects:c}))))}function lc(t,e){return _(r=>{let{targetSnapshot:n,guards:{canActivateChecks:i}}=r;if(!i.length)return y(r);let a=new Set(i.map(c=>c.route)),s=new Set;for(let c of a)if(!s.has(c))for(let l of Aa(c))s.add(l);let o=0;return F(s).pipe(Ut(c=>a.has(c)?uc(c,n,t,e):(c.data=Or(c,c.parent,t).resolve,y(void 0))),A(()=>o++),Wn(1),_(c=>o===s.size?y(r):Ot))})}function Aa(t){let e=t.children.map(r=>Aa(r)).flat();return[t,...e]}function uc(t,e,r,n){let i=t.routeConfig,a=t._resolve;return i?.title!==void 0&&!ba(i)&&(a[ke]=i.title),fc(a,t,e,n).pipe(S(s=>(t._resolvedData=s,t.data=Or(t,t.parent,r).resolve,null)))}function fc(t,e,r,n){let i=ir(t);if(i.length===0)return y({});let a={};return F(i).pipe(_(s=>dc(t[s],e,r,n).pipe(ht(),A(o=>{a[s]=o}))),Wn(1),mi(a),st(s=>Ra(s)?Ot:dt(s)))}function dc(t,e,r,n){let i=Ae(e)??n,a=Xt(t,i),s=a.resolve?a.resolve(e,r):mt(i,()=>a(e,r));return wt(s)}function nr(t){return G(e=>{let r=t(e);return r?F(r).pipe(S(()=>e)):y(e)})}var Oa=(()=>{let e=class e{buildTitle(n){let i,a=n.root;for(;a!==void 0;)i=this.getResolvedTitleForRoute(a)??i,a=a.children.find(s=>s.outlet===b);return i}getResolvedTitleForRoute(n){return n.data[ke]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:()=>m(hc),providedIn:"root"});let t=e;return t})(),hc=(()=>{let e=class e extends Oa{constructor(n){super(),this.title=n}updateTitle(n){let i=this.buildTitle(n);i!==void 0&&this.title.setTitle(i)}};e.\u0275fac=function(i){return new(i||e)(pt(Yi))},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Qt=new V("",{providedIn:"root",factory:()=>({})}),xe=new V(""),Pr=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=m(Xe)}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return y(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let i=wt(n.loadComponent()).pipe(S(Ea),A(s=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=s}),_e(()=>{this.componentLoaders.delete(n)})),a=new Un(i,()=>new J).pipe(Ln());return this.componentLoaders.set(n,a),a}loadChildren(n,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return y({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=pc(i,this.compiler,n,this.onLoadEndListener).pipe(_e(()=>{this.childrenLoaders.delete(i)})),o=new Un(s,()=>new J).pipe(Ln());return this.childrenLoaders.set(i,o),o}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function pc(t,e,r,n){return wt(t.loadChildren()).pipe(S(Ea),_(i=>i instanceof Pi||Array.isArray(i)?y(i):F(e.compileModuleAsync(i))),S(i=>{n&&n(t);let a,s,o=!1;return Array.isArray(i)?(s=i,o=!0):(a=i.create(r).injector,s=a.get(xe,[],{optional:!0,self:!0}).flat()),{routes:s.map(Tr),injector:a}}))}function mc(t){return t&&typeof t=="object"&&"default"in t}function Ea(t){return mc(t)?t.default:t}var Dr=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:()=>m(gc),providedIn:"root"});let t=e;return t})(),gc=(()=>{let e=class e{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,i){return n}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Ta=new V(""),Ma=new V("");function vc(t,e,r){let n=t.get(Ma),i=t.get(Hi);return t.get(Tt).runOutsideAngular(()=>{if(!i.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,Promise.resolve();let a,s=new Promise(l=>{a=l}),o=i.startViewTransition(()=>(a(),yc(t))),{onViewTransitionCreated:c}=n;return c&&mt(t,()=>c({transition:o,from:e,to:r})),s})}function yc(t){return new Promise(e=>{Ei(e,{injector:t})})}var gn=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new J,this.transitionAbortSubject=new J,this.configLoader=m(Pr),this.environmentInjector=m(ae),this.urlSerializer=m(Gt),this.rootContexts=m(Ie),this.location=m(oe),this.inputBindingEnabled=m(pn,{optional:!0})!==null,this.titleStrategy=m(Oa),this.options=m(Qt,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=m(Dr),this.createViewTransition=m(Ta,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>y(void 0),this.rootComponentType=null;let n=a=>this.events.next(new dr(a)),i=a=>this.events.next(new hr(a));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=n}complete(){this.transitions?.complete()}handleNavigationRequest(n){let i=++this.navigationId;this.transitions?.next(z(v(v({},this.transitions.value),n),{id:i}))}setupNavigations(n,i,a){return this.transitions=new B({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:de,restoredState:null,currentSnapshot:a.snapshot,targetSnapshot:null,currentRouterState:a,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(tt(s=>s.id!==0),S(s=>z(v({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),G(s=>{this.currentTransition=s;let o=!1,c=!1;return y(s).pipe(A(l=>{this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?z(v({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),G(l=>{let u=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=l.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!u&&f!=="reload"){let d="";return this.events.next(new yt(l.id,this.urlSerializer.serialize(l.rawUrl),d,an.IgnoredSameUrlNavigation)),l.resolve(null),Ot}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return y(l).pipe(G(d=>{let g=this.transitions?.getValue();return this.events.next(new qt(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),g!==this.transitions?.getValue()?Ot:Promise.resolve(d)}),cc(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy),A(d=>{s.targetSnapshot=d.targetSnapshot,s.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=z(v({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let g=new sn(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(g)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:d,extractedUrl:g,source:I,restoredState:E,extras:N}=l,T=new qt(d,this.urlSerializer.serialize(g),I,E);this.events.next(T);let M=va(this.rootComponentType).snapshot;return this.currentTransition=s=z(v({},l),{targetSnapshot:M,urlAfterRedirects:g,extras:z(v({},N),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=g,y(s)}else{let d="";return this.events.next(new yt(l.id,this.urlSerializer.serialize(l.extractedUrl),d,an.IgnoredByUrlHandlingStrategy)),l.resolve(null),Ot}}),A(l=>{let u=new cr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),S(l=>(this.currentTransition=s=z(v({},l),{guards:Io(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),s)),Lo(this.environmentInjector,l=>this.events.next(l)),A(l=>{if(s.guardsResult=l.guardsResult,Vt(l.guardsResult))throw Ca(this.urlSerializer,l.guardsResult);let u=new lr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),tt(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",q.GuardRejected),!1)),nr(l=>{if(l.guards.canActivateChecks.length)return y(l).pipe(A(u=>{let f=new ur(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(f)}),G(u=>{let f=!1;return y(u).pipe(lc(this.paramsInheritanceStrategy,this.environmentInjector),A({next:()=>f=!0,complete:()=>{f||this.cancelNavigationTransition(u,"",q.NoDataFromResolver)}}))}),A(u=>{let f=new fr(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(f)}))}),nr(l=>{let u=f=>{let d=[];f.routeConfig?.loadComponent&&!f.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(f.routeConfig).pipe(A(g=>{f.component=g}),S(()=>{})));for(let g of f.children)d.push(...u(g));return d};return Fe(u(l.targetSnapshot.root)).pipe(Fn(null),$t(1))}),nr(()=>this.afterPreactivation()),G(()=>{let{currentSnapshot:l,targetSnapshot:u}=s,f=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return f?F(f).pipe(S(()=>s)):y(s)}),S(l=>{let u=yo(n.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=s=z(v({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,s}),A(()=>{this.events.next(new ye)}),ko(this.rootContexts,n.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),$t(1),A({next:l=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new nt(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{o=!0}}),bi(this.transitionAbortSubject.pipe(A(l=>{throw l}))),_e(()=>{!o&&!c&&this.cancelNavigationTransition(s,"",q.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),st(l=>{if(c=!0,xa(l))this.events.next(new vt(s.id,this.urlSerializer.serialize(s.extractedUrl),l.message,l.cancellationCode)),Co(l)?this.events.next(new be(l.url)):s.resolve(!1);else{this.events.next(new ge(s.id,this.urlSerializer.serialize(s.extractedUrl),l,s.targetSnapshot??void 0));try{s.resolve(n.errorHandler(l))}catch(u){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(u)}}return Ot}))}))}cancelNavigationTransition(n,i,a){let s=new vt(n.id,this.urlSerializer.serialize(n.extractedUrl),i,a);this.events.next(s),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function bc(t){return t!==de}var wc=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:()=>m(Cc),providedIn:"root"});let t=e;return t})(),Ar=class{shouldDetach(e){return!1}store(e,r){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,r){return e.routeConfig===r.routeConfig}},Cc=(()=>{let e=class e extends Ar{};e.\u0275fac=(()=>{let n;return function(a){return(n||(n=qe(e)))(a||e)}})(),e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Pa=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:()=>m(Sc),providedIn:"root"});let t=e;return t})(),Sc=(()=>{let e=class e extends Pa{constructor(){super(...arguments),this.location=m(oe),this.urlSerializer=m(Gt),this.options=m(Qt,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=m(Dr),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new gt,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=va(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(i=>{i.type==="popstate"&&n(i.url,i.state)})}handleRouterEvent(n,i){if(n instanceof qt)this.stateMemento=this.createStateMemento();else if(n instanceof yt)this.rawUrlTree=i.initialUrl;else if(n instanceof sn){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let a=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(a,i)}}else n instanceof ye?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,i))):n instanceof vt&&(n.code===q.GuardRejected||n.code===q.NoDataFromResolver)?this.restoreHistory(i):n instanceof ge?this.restoreHistory(i,!0):n instanceof nt&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,i){let a=this.urlSerializer.serialize(n);if(this.location.isCurrentPathEqualTo(a)||i.extras.replaceUrl){let s=this.browserPageId,o=v(v({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(a,"",o)}else{let s=v(v({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(a,"",s)}}restoreHistory(n,i=!1){if(this.canceledNavigationResolution==="computed"){let a=this.browserPageId,s=this.currentPageId-a;s!==0?this.location.historyGo(s):this.currentUrlTree===n.finalUrl&&s===0&&(this.resetState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,i){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:i}:{navigationId:n}}};e.\u0275fac=(()=>{let n;return function(a){return(n||(n=qe(e)))(a||e)}})(),e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ue=function(t){return t[t.COMPLETE=0]="COMPLETE",t[t.FAILED=1]="FAILED",t[t.REDIRECTING=2]="REDIRECTING",t}(ue||{});function Da(t,e){t.events.pipe(tt(r=>r instanceof nt||r instanceof vt||r instanceof ge||r instanceof yt),S(r=>r instanceof nt||r instanceof yt?ue.COMPLETE:(r instanceof vt?r.code===q.Redirect||r.code===q.SupersededByNewNavigation:!1)?ue.REDIRECTING:ue.FAILED),tt(r=>r!==ue.REDIRECTING),$t(1)).subscribe(()=>{e()})}function xc(t){throw t}var Rc={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},kc={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},X=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=m(zi),this.stateManager=m(Pa),this.options=m(Qt,{optional:!0})||{},this.pendingTasks=m(Di),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=m(gn),this.urlSerializer=m(Gt),this.location=m(oe),this.urlHandlingStrategy=m(Dr),this._events=new J,this.errorHandler=this.options.errorHandler||xc,this.navigated=!1,this.routeReuseStrategy=m(wc),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=m(xe,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!m(pn,{optional:!0}),this.eventsSubscription=new ui,this.isNgZoneEnabled=m(Tt)instanceof Tt&&Tt.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:n=>{this.console.warn(n)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(i=>{try{let a=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(a!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof vt&&i.code!==q.Redirect&&i.code!==q.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof nt)this.navigated=!0;else if(i instanceof be){let o=this.urlHandlingStrategy.merge(i.url,a.currentRawUrl),c={info:a.extras.info,skipLocationChange:a.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||bc(a.source)};this.scheduleNavigation(o,de,null,c,{resolve:a.resolve,reject:a.reject,promise:a.promise})}}Ac(i)&&this._events.next(i)}catch(a){this.navigationTransitions.transitionAbortSubject.next(a)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),de,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(n,"popstate",i)},0)})}navigateToSyncWithBrowser(n,i,a){let s={replaceUrl:!0},o=a?.navigationId?a:null;if(a){let l=v({},a);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(s.state=l)}let c=this.parseUrl(n);this.scheduleNavigation(c,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(Tr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,i={}){let{relativeTo:a,queryParams:s,fragment:o,queryParamsHandling:c,preserveFragment:l}=i,u=l?this.currentUrlTree.fragment:o,f=null;switch(c){case"merge":f=v(v({},this.currentUrlTree.queryParams),s);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=s||null}f!==null&&(f=this.removeEmptyProps(f));let d;try{let g=a?a.snapshot:this.routerState.snapshot.root;d=ha(g)}catch{(typeof n[0]!="string"||!n[0].startsWith("/"))&&(n=[]),d=this.currentUrlTree.root}return pa(d,n,f,u??null)}navigateByUrl(n,i={skipLocationChange:!1}){let a=Vt(n)?n:this.parseUrl(n),s=this.urlHandlingStrategy.merge(a,this.rawUrlTree);return this.scheduleNavigation(s,de,null,i)}navigate(n,i={skipLocationChange:!1}){return Ic(n),this.navigateByUrl(this.createUrlTree(n,i),i)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch{return this.urlSerializer.parse("/")}}isActive(n,i){let a;if(i===!0?a=v({},Rc):i===!1?a=v({},kc):a=i,Vt(n))return Xi(this.currentUrlTree,n,a);let s=this.parseUrl(n);return Xi(this.currentUrlTree,s,a)}removeEmptyProps(n){return Object.entries(n).reduce((i,[a,s])=>(s!=null&&(i[a]=s),i),{})}scheduleNavigation(n,i,a,s,o){if(this.disposed)return Promise.resolve(!1);let c,l,u;o?(c=o.resolve,l=o.reject,u=o.promise):u=new Promise((d,g)=>{c=d,l=g});let f=this.pendingTasks.add();return Da(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:a,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:s,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(d=>Promise.reject(d))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Ic(t){for(let e=0;e<t.length;e++)if(t[e]==null)throw new L(4008,!1)}function Ac(t){return!(t instanceof ye)&&!(t instanceof be)}var Ju=(()=>{let e=class e{constructor(n,i,a,s,o,c){this.router=n,this.route=i,this.tabIndexAttribute=a,this.renderer=s,this.el=o,this.locationStrategy=c,this.href=null,this.commands=null,this.onChanges=new J,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1;let l=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=n.events.subscribe(u=>{u instanceof nt&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(n){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",n)}ngOnChanges(n){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(n){n!=null?(this.commands=Array.isArray(n)?n:[n],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(n,i,a,s,o){let c=this.urlTree;if(c===null||this.isAnchorElement&&(n!==0||i||a||s||o||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(c,l),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let n=this.urlTree;this.href=n!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(n)):null;let i=this.href===null?null:Ii(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",i)}applyAttributeValue(n,i){let a=this.renderer,s=this.el.nativeElement;i!==null?a.setAttribute(s,n,i):a.removeAttribute(s,n)}get urlTree(){return this.commands===null?null:this.router.createUrlTree(this.commands,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}};e.\u0275fac=function(i){return new(i||e)(U(X),U(bt),Ri("tabindex"),U(Ye),U(Be),U(zt))},e.\u0275dir=ie({type:e,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(i,a){i&1&&Li("click",function(o){return a.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),i&2&&Ge("target",a.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[We.HasDecoratorInputTransform,"preserveFragment","preserveFragment",Qe],skipLocationChange:[We.HasDecoratorInputTransform,"skipLocationChange","skipLocationChange",Qe],replaceUrl:[We.HasDecoratorInputTransform,"replaceUrl","replaceUrl",Qe],routerLink:"routerLink"},standalone:!0,features:[Mi,Et]});let t=e;return t})();var hn=class{},tf=(()=>{let e=class e{preload(n,i){return i().pipe(st(()=>y(null)))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Oc=(()=>{let e=class e{constructor(n,i,a,s,o){this.router=n,this.injector=a,this.preloadingStrategy=s,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(tt(n=>n instanceof nt),Ut(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(n,i){let a=[];for(let s of i){s.providers&&!s._injector&&(s._injector=Yn(s.providers,n,`Route: ${s.path}`));let o=s._injector??n,c=s._loadedInjector??o;(s.loadChildren&&!s._loadedRoutes&&s.canLoad===void 0||s.loadComponent&&!s._loadedComponent)&&a.push(this.preloadConfig(o,s)),(s.children||s._loadedRoutes)&&a.push(this.processRoutes(c,s.children??s._loadedRoutes))}return F(a).pipe($n())}preloadConfig(n,i){return this.preloadingStrategy.preload(i,()=>{let a;i.loadChildren&&i.canLoad===void 0?a=this.loader.loadChildren(n,i):a=y(null);let s=a.pipe(_(o=>o===null?y(void 0):(i._loadedRoutes=o.routes,i._loadedInjector=o.injector,this.processRoutes(o.injector??n,o.routes))));if(i.loadComponent&&!i._loadedComponent){let o=this.loader.loadComponent(i);return F([s,o]).pipe($n())}else return s})}};e.\u0275fac=function(i){return new(i||e)(pt(X),pt(Xe),pt(ae),pt(hn),pt(Pr))},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Nr=new V(""),Na=(()=>{let e=class e{constructor(n,i,a,s,o={}){this.urlSerializer=n,this.transitions=i,this.viewportScroller=a,this.zone=s,this.options=o,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},o.scrollPositionRestoration||="disabled",o.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(n=>{n instanceof qt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=n.navigationTrigger,this.restoredId=n.restoredState?n.restoredState.navigationId:0):n instanceof nt?(this.lastId=n.id,this.scheduleScrollEvent(n,this.urlSerializer.parse(n.urlAfterRedirects).fragment)):n instanceof yt&&n.code===an.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(n,this.urlSerializer.parse(n.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(n=>{n instanceof on&&(n.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(n.position):n.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(n.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(n,i){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new on(n,this.lastSource==="popstate"?this.store[this.restoredId]:null,i))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}};e.\u0275fac=function(i){Ai()},e.\u0275prov=C({token:e,factory:e.\u0275fac});let t=e;return t})();function ef(t,...e){return xi([{provide:xe,multi:!0,useValue:t},[],{provide:bt,useFactory:ja,deps:[X]},{provide:Xn,multi:!0,useFactory:La},e.map(r=>r.\u0275providers)])}function ja(t){return t.routerState.root}function Ct(t,e){return{\u0275kind:t,\u0275providers:e}}function nf(t={}){return Ct(4,[{provide:Nr,useFactory:()=>{let r=m(Kn),n=m(Tt),i=m(gn),a=m(Gt);return new Na(a,i,r,n,t)}}])}function La(){let t=m(Bn);return e=>{let r=t.get(_i);if(e!==r.components[0])return;let n=t.get(X),i=t.get(Ua);t.get(jr)===1&&n.initialNavigation(),t.get($a,null,Hn.Optional)?.setUpPreloading(),t.get(Nr,null,Hn.Optional)?.init(),n.resetRootComponentType(r.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var Ua=new V("",{factory:()=>new J}),jr=new V("",{providedIn:"root",factory:()=>1});function Ec(){return Ct(2,[{provide:jr,useValue:0},{provide:Gn,multi:!0,deps:[Bn],useFactory:e=>{let r=e.get(Bi,Promise.resolve());return()=>r.then(()=>new Promise(n=>{let i=e.get(X),a=e.get(Ua);Da(i,()=>{n(!0)}),e.get(gn).afterPreactivation=()=>(n(!0),a.closed?y(void 0):a),i.initialNavigation()}))}}])}function Tc(){return Ct(3,[{provide:Gn,multi:!0,useFactory:()=>{let e=m(X);return()=>{e.setUpLocationChangeListener()}}},{provide:jr,useValue:2}])}var $a=new V("");function Mc(t){return Ct(0,[{provide:$a,useExisting:Oc},{provide:hn,useExisting:t}])}function rf(t){return Ct(5,[{provide:Qt,useValue:t}])}function af(){return Ct(6,[{provide:zt,useClass:Qn}])}function Pc(){return Ct(8,[Ji,{provide:pn,useExisting:Ji}])}function Dc(t){let e=[{provide:Ta,useValue:vc},{provide:Ma,useValue:v({skipNextTransition:!!t?.skipInitialTransition},t)}];return Ct(9,e)}var ea=new V("ROUTER_FORROOT_GUARD"),Nc=[oe,{provide:Gt,useClass:pe},X,Ie,{provide:bt,useFactory:ja,deps:[X]},Pr,[]],sf=(()=>{let e=class e{constructor(n){}static forRoot(n,i){return{ngModule:e,providers:[Nc,[],{provide:xe,multi:!0,useValue:n},{provide:ea,useFactory:$c,deps:[[X,new Ci,new Si]]},{provide:Qt,useValue:i||{}},i?.useHash?Lc():Uc(),jc(),i?.preloadingStrategy?Mc(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?zc(i):[],i?.bindToComponentInputs?Pc().\u0275providers:[],i?.enableViewTransitions?Dc().\u0275providers:[],Fc()]}}static forChild(n){return{ngModule:e,providers:[{provide:xe,multi:!0,useValue:n}]}}};e.\u0275fac=function(i){return new(i||e)(pt(ea,8))},e.\u0275mod=He({type:e}),e.\u0275inj=Ve({});let t=e;return t})();function jc(){return{provide:Nr,useFactory:()=>{let t=m(Kn),e=m(Tt),r=m(Qt),n=m(gn),i=m(Gt);return r.scrollOffset&&t.setOffset(r.scrollOffset),new Na(i,n,t,e,r)}}}function Lc(){return{provide:zt,useClass:Qn}}function Uc(){return{provide:zt,useClass:Vi}}function $c(t){return"guarded"}function zc(t){return[t.initialNavigation==="disabled"?Tc().\u0275providers:[],t.initialNavigation==="enabledBlocking"?Ec().\u0275providers:[]]}var na=new V("");function Fc(){return[{provide:na,useFactory:La},{provide:Xn,multi:!0,useExisting:na}]}var hf=(()=>{var e,r,n;let i=class i{constructor(){Z(this,e,void 0);Z(this,r,void 0);Z(this,n,void 0);at(this,e,"https://reqres.in/api/users"),at(this,r,m(qi)),at(this,n,Oi({users:[],loading:!0})),this.users=Vn(()=>D(this,n).call(this).users),this.loading=Vn(()=>D(this,n).call(this).loading)}getUsers(){let s=`${D(this,e)}`,o=new Zn;return D(this,r).get(s,{params:o}).pipe(_n(1500),A({next:c=>D(this,n).set({loading:!1,users:c.data}),error:c=>dt(()=>c),complete:()=>{}}),st(c=>dt(()=>c)))}getUserById(s){let o=`${D(this,e)}/${s}`,c=new Zn().set("id",s);return D(this,r).get(o,{params:c}).pipe(_n(1500))}};e=new WeakMap,r=new WeakMap,n=new WeakMap,i.\u0275fac=function(o){return new(o||i)},i.\u0275prov=C({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();var za=(()=>{let e=class e{isValid(n){return n!=null&&n.toString().trim()!==""}isNumber(n){return this.isValid(n)&&!isNaN(Number(n))}isObject(n){return n!=null&&Object.getPrototypeOf(n)===Object.prototype}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var wf=(()=>{var e,r;let n=class n{constructor(){Z(this,e,m(za));Z(this,r,"")}set UserAgent(a){at(this,r,a)}get UserAgent(){return structuredClone(D(this,r))}isMobile(){let a={Android:()=>this.UserAgent.match(/android/i),BlackBerry:()=>this.UserAgent.match(/blackberry/i),iOS:()=>this.UserAgent.match(/iphone|ipad|ipod/i),Opera:()=>this.UserAgent.match(/opera mini/i),Windows:()=>this.UserAgent.match(/iemobile/i),any:()=>a.Android()||a.BlackBerry()||a.iOS()||a.Opera()||a.Windows()};return D(this,e).isValid(a.any())&&a.any()!==!1}sortArrayByKey(a,s,o="asc",c=!1){return a.sort((l,u)=>{let f=c?parseFloat(l[s]):l[s],d=c?parseFloat(u[s]):u[s];return o==="asc"?f<d?-1:f>d?1:0:f>d?-1:f<d?1:0})}};e=new WeakMap,r=new WeakMap,n.\u0275fac=function(s){return new(s||n)},n.\u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();var Af=(()=>{var e,r;let n=class n{constructor(){Z(this,e,void 0);Z(this,r,void 0);at(this,e,m(X)),at(this,r,new J),this.currentRoute$=D(this,r).asObservable()}setCurrentRoute(){return D(this,e).events.pipe(tt(a=>a instanceof ve),tt(a=>a.snapshot.firstChild===null),A(()=>{D(this,r).next(D(this,e).url)}))}};e=new WeakMap,r=new WeakMap,n.\u0275fac=function(s){return new(s||n)},n.\u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();function Fa(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Fa(Object(r),!0).forEach(function(n){O(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Fa(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function On(t){"@babel/helpers - typeof";return On=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},On(t)}function _c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Wc(t,e,r){return e&&_a(t.prototype,e),r&&_a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Kr(t,e){return Bc(t)||qc(t,e)||ds(t,e)||Gc()}function Ue(t){return Hc(t)||Vc(t)||ds(t)||Yc()}function Hc(t){if(Array.isArray(t))return Fr(t)}function Bc(t){if(Array.isArray(t))return t}function Vc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function qc(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n=[],i=!0,a=!1,s,o;try{for(r=r.call(t);!(i=(s=r.next()).done)&&(n.push(s.value),!(e&&n.length===e));i=!0);}catch(c){a=!0,o=c}finally{try{!i&&r.return!=null&&r.return()}finally{if(a)throw o}}return n}}function ds(t,e){if(t){if(typeof t=="string")return Fr(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Fr(t,e)}}function Fr(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Yc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wa=function(){},Zr={},hs={},ps=null,ms={mark:Wa,measure:Wa};try{typeof window<"u"&&(Zr=window),typeof document<"u"&&(hs=document),typeof MutationObserver<"u"&&(ps=MutationObserver),typeof performance<"u"&&(ms=performance)}catch{}var Xc=Zr.navigator||{},Ha=Xc.userAgent,Ba=Ha===void 0?"":Ha,xt=Zr,R=hs,Va=ps,vn=ms,jf=!!xt.document,ut=!!R.documentElement&&!!R.head&&typeof R.addEventListener=="function"&&typeof R.createElement=="function",gs=~Ba.indexOf("MSIE")||~Ba.indexOf("Trident/"),yn,bn,wn,Cn,Sn,ot="___FONT_AWESOME___",_r=16,vs="fa",ys="svg-inline--fa",jt="data-fa-i2svg",Wr="data-fa-pseudo-element",Qc="data-fa-pseudo-element-pending",Jr="data-prefix",ti="data-icon",qa="fontawesome-i2svg",Kc="async",Zc=["HTML","HEAD","STYLE","SCRIPT"],bs=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),x="classic",k="sharp",ei=[x,k];function $e(t){return new Proxy(t,{get:function(r,n){return n in r?r[n]:r[x]}})}var Pe=$e((yn={},O(yn,x,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),O(yn,k,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),yn)),De=$e((bn={},O(bn,x,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(bn,k,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),bn)),Ne=$e((wn={},O(wn,x,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(wn,k,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),wn)),Jc=$e((Cn={},O(Cn,x,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(Cn,k,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Cn)),tl=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ws="fa-layers-text",el=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,nl=$e((Sn={},O(Sn,x,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(Sn,k,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Sn)),Cs=[1,2,3,4,5,6,7,8,9,10],rl=Cs.concat([11,12,13,14,15,16,17,18,19,20]),il=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Dt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},je=new Set;Object.keys(De[x]).map(je.add.bind(je));Object.keys(De[k]).map(je.add.bind(je));var al=[].concat(ei,Ue(je),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Dt.GROUP,Dt.SWAP_OPACITY,Dt.PRIMARY,Dt.SECONDARY]).concat(Cs.map(function(t){return"".concat(t,"x")})).concat(rl.map(function(t){return"w-".concat(t)})),Te=xt.FontAwesomeConfig||{};function sl(t){var e=R.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ol(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}R&&typeof R.querySelector=="function"&&(Ya=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Ya.forEach(function(t){var e=Kr(t,2),r=e[0],n=e[1],i=ol(sl(r));i!=null&&(Te[n]=i)}));var Ya,Ss={styleDefault:"solid",familyDefault:"classic",cssPrefix:vs,replacementClass:ys,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Te.familyPrefix&&(Te.cssPrefix=Te.familyPrefix);var te=h(h({},Ss),Te);te.autoReplaceSvg||(te.observeMutations=!1);var p={};Object.keys(Ss).forEach(function(t){Object.defineProperty(p,t,{enumerable:!0,set:function(r){te[t]=r,Me.forEach(function(n){return n(p)})},get:function(){return te[t]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(e){te.cssPrefix=e,Me.forEach(function(r){return r(p)})},get:function(){return te.cssPrefix}});xt.FontAwesomeConfig=p;var Me=[];function cl(t){return Me.push(t),function(){Me.splice(Me.indexOf(t),1)}}var St=_r,it={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ll(t){if(!(!t||!ut)){var e=R.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var r=R.head.childNodes,n=null,i=r.length-1;i>-1;i--){var a=r[i],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=a)}return R.head.insertBefore(e,n),t}}var ul="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Le(){for(var t=12,e="";t-- >0;)e+=ul[Math.random()*62|0];return e}function ee(t){for(var e=[],r=(t||[]).length>>>0;r--;)e[r]=t[r];return e}function ni(t){return t.classList?ee(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function xs(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fl(t){return Object.keys(t||{}).reduce(function(e,r){return e+"".concat(r,'="').concat(xs(t[r]),'" ')},"").trim()}function Mn(t){return Object.keys(t||{}).reduce(function(e,r){return e+"".concat(r,": ").concat(t[r].trim(),";")},"")}function ri(t){return t.size!==it.size||t.x!==it.x||t.y!==it.y||t.rotate!==it.rotate||t.flipX||t.flipY}function dl(t){var e=t.transform,r=t.containerWidth,n=t.iconWidth,i={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(a," ").concat(s," ").concat(o)},l={transform:"translate(".concat(n/2*-1," -256)")};return{outer:i,inner:c,path:l}}function hl(t){var e=t.transform,r=t.width,n=r===void 0?_r:r,i=t.height,a=i===void 0?_r:i,s=t.startCentered,o=s===void 0?!1:s,c="";return o&&gs?c+="translate(".concat(e.x/St-n/2,"em, ").concat(e.y/St-a/2,"em) "):o?c+="translate(calc(-50% + ".concat(e.x/St,"em), calc(-50% + ").concat(e.y/St,"em)) "):c+="translate(".concat(e.x/St,"em, ").concat(e.y/St,"em) "),c+="scale(".concat(e.size/St*(e.flipX?-1:1),", ").concat(e.size/St*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var pl=`:root, :host {
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
}`;function Rs(){var t=vs,e=ys,r=p.cssPrefix,n=p.replacementClass,i=pl;if(r!==t||n!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");i=i.replace(a,".".concat(r,"-")).replace(s,"--".concat(r,"-")).replace(o,".".concat(n))}return i}var Ga=!1;function Lr(){p.autoAddCss&&!Ga&&(ll(Rs()),Ga=!0)}var ml={mixout:function(){return{dom:{css:Rs,insertCss:Lr}}},hooks:function(){return{beforeDOMElementCreation:function(){Lr()},beforeI2svg:function(){Lr()}}}},ct=xt||{};ct[ot]||(ct[ot]={});ct[ot].styles||(ct[ot].styles={});ct[ot].hooks||(ct[ot].hooks={});ct[ot].shims||(ct[ot].shims=[]);var Q=ct[ot],ks=[],gl=function t(){R.removeEventListener("DOMContentLoaded",t),En=1,ks.map(function(e){return e()})},En=!1;ut&&(En=(R.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(R.readyState),En||R.addEventListener("DOMContentLoaded",gl));function vl(t){ut&&(En?setTimeout(t,0):ks.push(t))}function ze(t){var e=t.tag,r=t.attributes,n=r===void 0?{}:r,i=t.children,a=i===void 0?[]:i;return typeof t=="string"?xs(t):"<".concat(e," ").concat(fl(n),">").concat(a.map(ze).join(""),"</").concat(e,">")}function Xa(t,e,r){if(t&&t[e]&&t[e][r])return{prefix:e,iconName:r,icon:t[e][r]}}var yl=function(e,r){return function(n,i,a,s){return e.call(r,n,i,a,s)}},Ur=function(e,r,n,i){var a=Object.keys(e),s=a.length,o=i!==void 0?yl(r,i):r,c,l,u;for(n===void 0?(c=1,u=e[a[0]]):(c=0,u=n);c<s;c++)l=a[c],u=o(u,e[l],l,e);return u};function bl(t){for(var e=[],r=0,n=t.length;r<n;){var i=t.charCodeAt(r++);if(i>=55296&&i<=56319&&r<n){var a=t.charCodeAt(r++);(a&64512)==56320?e.push(((i&1023)<<10)+(a&1023)+65536):(e.push(i),r--)}else e.push(i)}return e}function Hr(t){var e=bl(t);return e.length===1?e[0].toString(16):null}function wl(t,e){var r=t.length,n=t.charCodeAt(e),i;return n>=55296&&n<=56319&&r>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(n-55296)*1024+i-56320+65536:n}function Qa(t){return Object.keys(t).reduce(function(e,r){var n=t[r],i=!!n.icon;return i?e[n.iconName]=n.icon:e[r]=n,e},{})}function Br(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.skipHooks,i=n===void 0?!1:n,a=Qa(e);typeof Q.hooks.addPack=="function"&&!i?Q.hooks.addPack(t,Qa(e)):Q.styles[t]=h(h({},Q.styles[t]||{}),a),t==="fas"&&Br("fa",e)}var xn,Rn,kn,Kt=Q.styles,Cl=Q.shims,Sl=(xn={},O(xn,x,Object.values(Ne[x])),O(xn,k,Object.values(Ne[k])),xn),ii=null,Is={},As={},Os={},Es={},Ts={},xl=(Rn={},O(Rn,x,Object.keys(Pe[x])),O(Rn,k,Object.keys(Pe[k])),Rn);function Rl(t){return~al.indexOf(t)}function kl(t,e){var r=e.split("-"),n=r[0],i=r.slice(1).join("-");return n===t&&i!==""&&!Rl(i)?i:null}var Ms=function(){var e=function(a){return Ur(Kt,function(s,o,c){return s[c]=Ur(o,a,{}),s},{})};Is=e(function(i,a,s){if(a[3]&&(i[a[3]]=s),a[2]){var o=a[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=s})}return i}),As=e(function(i,a,s){if(i[s]=s,a[2]){var o=a[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=s})}return i}),Ts=e(function(i,a,s){var o=a[2];return i[s]=s,o.forEach(function(c){i[c]=s}),i});var r="far"in Kt||p.autoFetchSvg,n=Ur(Cl,function(i,a){var s=a[0],o=a[1],c=a[2];return o==="far"&&!r&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:c}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});Os=n.names,Es=n.unicodes,ii=Pn(p.styleDefault,{family:p.familyDefault})};cl(function(t){ii=Pn(t.styleDefault,{family:p.familyDefault})});Ms();function ai(t,e){return(Is[t]||{})[e]}function Il(t,e){return(As[t]||{})[e]}function Nt(t,e){return(Ts[t]||{})[e]}function Ps(t){return Os[t]||{prefix:null,iconName:null}}function Al(t){var e=Es[t],r=ai("fas",t);return e||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Rt(){return ii}var si=function(){return{prefix:null,iconName:null,rest:[]}};function Pn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.family,n=r===void 0?x:r,i=Pe[n][t],a=De[n][t]||De[n][i],s=t in Q.styles?t:null;return a||s||null}var Ka=(kn={},O(kn,x,Object.keys(Ne[x])),O(kn,k,Object.keys(Ne[k])),kn);function Dn(t){var e,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.skipLookups,i=n===void 0?!1:n,a=(e={},O(e,x,"".concat(p.cssPrefix,"-").concat(x)),O(e,k,"".concat(p.cssPrefix,"-").concat(k)),e),s=null,o=x;(t.includes(a[x])||t.some(function(l){return Ka[x].includes(l)}))&&(o=x),(t.includes(a[k])||t.some(function(l){return Ka[k].includes(l)}))&&(o=k);var c=t.reduce(function(l,u){var f=kl(p.cssPrefix,u);if(Kt[u]?(u=Sl[o].includes(u)?Jc[o][u]:u,s=u,l.prefix=u):xl[o].indexOf(u)>-1?(s=u,l.prefix=Pn(u,{family:o})):f?l.iconName=f:u!==p.replacementClass&&u!==a[x]&&u!==a[k]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var d=s==="fa"?Ps(l.iconName):{},g=Nt(l.prefix,l.iconName);d.prefix&&(s=null),l.iconName=d.iconName||g||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!Kt.far&&Kt.fas&&!p.autoFetchSvg&&(l.prefix="fas")}return l},si());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===k&&(Kt.fass||p.autoFetchSvg)&&(c.prefix="fass",c.iconName=Nt(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||s==="fa")&&(c.prefix=Rt()||"fas"),c}var Ol=function(){function t(){_c(this,t),this.definitions={}}return Wc(t,[{key:"add",value:function(){for(var r=this,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){r.definitions[o]=h(h({},r.definitions[o]||{}),s[o]),Br(o,s[o]);var c=Ne[x][o];c&&Br(c,s[o]),Ms()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,n){var i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(function(a){var s=i[a],o=s.prefix,c=s.iconName,l=s.icon,u=l[2];r[o]||(r[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(r[o][f]=l)}),r[o][c]=l}),r}}]),t}(),Za=[],Zt={},Jt={},El=Object.keys(Jt);function Tl(t,e){var r=e.mixoutsTo;return Za=t,Zt={},Object.keys(Jt).forEach(function(n){El.indexOf(n)===-1&&delete Jt[n]}),Za.forEach(function(n){var i=n.mixout?n.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(r[s]=i[s]),On(i[s])==="object"&&Object.keys(i[s]).forEach(function(o){r[s]||(r[s]={}),r[s][o]=i[s][o]})}),n.hooks){var a=n.hooks();Object.keys(a).forEach(function(s){Zt[s]||(Zt[s]=[]),Zt[s].push(a[s])})}n.provides&&n.provides(Jt)}),r}function Vr(t,e){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];var a=Zt[t]||[];return a.forEach(function(s){e=s.apply(null,[e].concat(n))}),e}function Lt(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var i=Zt[t]||[];i.forEach(function(a){a.apply(null,r)})}function lt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Jt[t]?Jt[t].apply(null,e):void 0}function qr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,r=t.prefix||Rt();if(e)return e=Nt(r,e)||e,Xa(Ds.definitions,r,e)||Xa(Q.styles,r,e)}var Ds=new Ol,Ml=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,Lt("noAuto")},Pl={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ut?(Lt("beforeI2svg",e),lt("pseudoElements2svg",e),lt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,vl(function(){Nl({autoReplaceSvgRoot:r}),Lt("watch",e)})}},Dl={icon:function(e){if(e===null)return null;if(On(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Nt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var r=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Pn(e[0]);return{prefix:n,iconName:Nt(n,r)||r}}if(typeof e=="string"&&(e.indexOf("".concat(p.cssPrefix,"-"))>-1||e.match(tl))){var i=Dn(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Rt(),iconName:Nt(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var a=Rt();return{prefix:a,iconName:Nt(a,e)||e}}}},H={noAuto:Ml,config:p,dom:Pl,parse:Dl,library:Ds,findIconDefinition:qr,toHtml:ze},Nl=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.autoReplaceSvgRoot,n=r===void 0?R:r;(Object.keys(Q.styles).length>0||p.autoFetchSvg)&&ut&&p.autoReplaceSvg&&H.dom.i2svg({node:n})};function Nn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return ze(n)})}}),Object.defineProperty(t,"node",{get:function(){if(ut){var n=R.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function jl(t){var e=t.children,r=t.main,n=t.mask,i=t.attributes,a=t.styles,s=t.transform;if(ri(s)&&r.found&&!n.found){var o=r.width,c=r.height,l={x:o/c/2,y:.5};i.style=Mn(h(h({},a),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Ll(t){var e=t.prefix,r=t.iconName,n=t.children,i=t.attributes,a=t.symbol,s=a===!0?"".concat(e,"-").concat(p.cssPrefix,"-").concat(r):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},i),{},{id:s}),children:n}]}]}function oi(t){var e=t.icons,r=e.main,n=e.mask,i=t.prefix,a=t.iconName,s=t.transform,o=t.symbol,c=t.title,l=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,g=d===void 0?!1:d,I=n.found?n:r,E=I.width,N=I.height,T=i==="fak",M=[p.replacementClass,a?"".concat(p.cssPrefix,"-").concat(a):""].filter(function(ft){return f.classes.indexOf(ft)===-1}).filter(function(ft){return ft!==""||!!ft}).concat(f.classes).join(" "),j={children:[],attributes:h(h({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:M,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(N)})},K=T&&!~f.classes.indexOf("fa-fw")?{width:"".concat(E/N*16*.0625,"em")}:{};g&&(j.attributes[jt]=""),c&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(u||Le())},children:[c]}),delete j.attributes.title);var $=h(h({},j),{},{prefix:i,iconName:a,main:r,mask:n,maskId:l,transform:s,symbol:o,styles:h(h({},K),f.styles)}),It=n.found&&r.found?lt("generateAbstractMask",$)||{children:[],attributes:{}}:lt("generateAbstractIcon",$)||{children:[],attributes:{}},At=It.children,jn=It.attributes;return $.children=At,$.attributes=jn,o?Ll($):jl($)}function Ja(t){var e=t.content,r=t.width,n=t.height,i=t.transform,a=t.title,s=t.extra,o=t.watchable,c=o===void 0?!1:o,l=h(h(h({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});c&&(l[jt]="");var u=h({},s.styles);ri(i)&&(u.transform=hl({transform:i,startCentered:!0,width:r,height:n}),u["-webkit-transform"]=u.transform);var f=Mn(u);f.length>0&&(l.style=f);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function Ul(t){var e=t.content,r=t.title,n=t.extra,i=h(h(h({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")}),a=Mn(n.styles);a.length>0&&(i.style=a);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),r&&s.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),s}var $r=Q.styles;function Yr(t){var e=t[0],r=t[1],n=t.slice(4),i=Kr(n,1),a=i[0],s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Dt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Dt.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:r,icon:s}}var $l={found:!1,width:512,height:512};function zl(t,e){!bs&&!p.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gr(t,e){var r=e;return e==="fa"&&p.styleDefault!==null&&(e=Rt()),new Promise(function(n,i){var a={found:!1,width:512,height:512,icon:lt("missingIconAbstract")||{}};if(r==="fa"){var s=Ps(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&$r[e]&&$r[e][t]){var o=$r[e][t];return n(Yr(o))}zl(t,e),n(h(h({},$l),{},{icon:p.showMissingIcons&&t?lt("missingIconAbstract")||{}:{}}))})}var ts=function(){},Xr=p.measurePerformance&&vn&&vn.mark&&vn.measure?vn:{mark:ts,measure:ts},Ee='FA "6.5.1"',Fl=function(e){return Xr.mark("".concat(Ee," ").concat(e," begins")),function(){return Ns(e)}},Ns=function(e){Xr.mark("".concat(Ee," ").concat(e," ends")),Xr.measure("".concat(Ee," ").concat(e),"".concat(Ee," ").concat(e," begins"),"".concat(Ee," ").concat(e," ends"))},ci={begin:Fl,end:Ns},In=function(){};function es(t){var e=t.getAttribute?t.getAttribute(jt):null;return typeof e=="string"}function _l(t){var e=t.getAttribute?t.getAttribute(Jr):null,r=t.getAttribute?t.getAttribute(ti):null;return e&&r}function Wl(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function Hl(){if(p.autoReplaceSvg===!0)return An.replace;var t=An[p.autoReplaceSvg];return t||An.replace}function Bl(t){return R.createElementNS("http://www.w3.org/2000/svg",t)}function Vl(t){return R.createElement(t)}function js(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.ceFn,n=r===void 0?t.tag==="svg"?Bl:Vl:r;if(typeof t=="string")return R.createTextNode(t);var i=n(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var a=t.children||[];return a.forEach(function(s){i.appendChild(js(s,{ceFn:n}))}),i}function ql(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var An={replace:function(e){var r=e[0];if(r.parentNode)if(e[1].forEach(function(i){r.parentNode.insertBefore(js(i),r)}),r.getAttribute(jt)===null&&p.keepOriginalSource){var n=R.createComment(ql(r));r.parentNode.replaceChild(n,r)}else r.remove()},nest:function(e){var r=e[0],n=e[1];if(~ni(r).indexOf(p.replacementClass))return An.replace(e);var i=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var a=n[0].attributes.class.split(" ").reduce(function(o,c){return c===p.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",a.toNode.join(" "))}var s=n.map(function(o){return ze(o)}).join(`
`);r.setAttribute(jt,""),r.innerHTML=s}};function ns(t){t()}function Ls(t,e){var r=typeof e=="function"?e:In;if(t.length===0)r();else{var n=ns;p.mutateApproach===Kc&&(n=xt.requestAnimationFrame||ns),n(function(){var i=Hl(),a=ci.begin("mutate");t.map(i),a(),r()})}}var li=!1;function Us(){li=!0}function Qr(){li=!1}var Tn=null;function rs(t){if(Va&&p.observeMutations){var e=t.treeCallback,r=e===void 0?In:e,n=t.nodeCallback,i=n===void 0?In:n,a=t.pseudoElementsCallback,s=a===void 0?In:a,o=t.observeMutationsRoot,c=o===void 0?R:o;Tn=new Va(function(l){if(!li){var u=Rt();ee(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!es(f.addedNodes[0])&&(p.searchPseudoElements&&s(f.target),r(f.target)),f.type==="attributes"&&f.target.parentNode&&p.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&es(f.target)&&~il.indexOf(f.attributeName))if(f.attributeName==="class"&&_l(f.target)){var d=Dn(ni(f.target)),g=d.prefix,I=d.iconName;f.target.setAttribute(Jr,g||u),I&&f.target.setAttribute(ti,I)}else Wl(f.target)&&i(f.target)})}}),ut&&Tn.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Yl(){Tn&&Tn.disconnect()}function Gl(t){var e=t.getAttribute("style"),r=[];return e&&(r=e.split(";").reduce(function(n,i){var a=i.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(n[s]=o.join(":").trim()),n},{})),r}function Xl(t){var e=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",i=Dn(ni(t));return i.prefix||(i.prefix=Rt()),e&&r&&(i.prefix=e,i.iconName=r),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=Il(i.prefix,t.innerText)||ai(i.prefix,Hr(t.innerText))),!i.iconName&&p.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Ql(t){var e=ee(t.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),r=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return p.autoA11y&&(r?e["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(n||Le()):(e["aria-hidden"]="true",e.focusable="false")),e}function Kl(){return{iconName:null,title:null,titleId:null,prefix:null,transform:it,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function is(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=Xl(t),n=r.iconName,i=r.prefix,a=r.rest,s=Ql(t),o=Vr("parseNodeAttributes",{},t),c=e.styleParser?Gl(t):[];return h({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:it,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:c,attributes:s}},o)}var Zl=Q.styles;function $s(t){var e=p.autoReplaceSvg==="nest"?is(t,{styleParser:!1}):is(t);return~e.extra.classes.indexOf(ws)?lt("generateLayersText",t,e):lt("generateSvgReplacementMutation",t,e)}var kt=new Set;ei.map(function(t){kt.add("fa-".concat(t))});Object.keys(Pe[x]).map(kt.add.bind(kt));Object.keys(Pe[k]).map(kt.add.bind(kt));kt=Ue(kt);function as(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ut)return Promise.resolve();var r=R.documentElement.classList,n=function(f){return r.add("".concat(qa,"-").concat(f))},i=function(f){return r.remove("".concat(qa,"-").concat(f))},a=p.autoFetchSvg?kt:ei.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Zl));a.includes("fa")||a.push("fa");var s=[".".concat(ws,":not([").concat(jt,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(jt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=ee(t.querySelectorAll(s))}catch{}if(o.length>0)n("pending"),i("complete");else return Promise.resolve();var c=ci.begin("onTree"),l=o.reduce(function(u,f){try{var d=$s(f);d&&u.push(d)}catch(g){bs||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(d){Ls(d,function(){n("active"),n("complete"),i("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(d){c(),f(d)})})}function Jl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$s(t).then(function(r){r&&Ls([r],e)})}function tu(t){return function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:qr(e||{}),i=r.mask;return i&&(i=(i||{}).icon?i:qr(i||{})),t(n,h(h({},r),{},{mask:i}))}}var eu=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?it:n,a=r.symbol,s=a===void 0?!1:a,o=r.mask,c=o===void 0?null:o,l=r.maskId,u=l===void 0?null:l,f=r.title,d=f===void 0?null:f,g=r.titleId,I=g===void 0?null:g,E=r.classes,N=E===void 0?[]:E,T=r.attributes,M=T===void 0?{}:T,j=r.styles,K=j===void 0?{}:j;if(e){var $=e.prefix,It=e.iconName,At=e.icon;return Nn(h({type:"icon"},e),function(){return Lt("beforeDOMElementCreation",{iconDefinition:e,params:r}),p.autoA11y&&(d?M["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(I||Le()):(M["aria-hidden"]="true",M.focusable="false")),oi({icons:{main:Yr(At),mask:c?Yr(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:It,transform:h(h({},it),i),symbol:s,title:d,maskId:u,titleId:I,extra:{attributes:M,styles:K,classes:N}})})}},nu={mixout:function(){return{icon:tu(eu)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=as,r.nodeCallback=Jl,r}}},provides:function(e){e.i2svg=function(r){var n=r.node,i=n===void 0?R:n,a=r.callback,s=a===void 0?function(){}:a;return as(i,s)},e.generateSvgReplacementMutation=function(r,n){var i=n.iconName,a=n.title,s=n.titleId,o=n.prefix,c=n.transform,l=n.symbol,u=n.mask,f=n.maskId,d=n.extra;return new Promise(function(g,I){Promise.all([Gr(i,o),u.iconName?Gr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var N=Kr(E,2),T=N[0],M=N[1];g([r,oi({icons:{main:T,mask:M},prefix:o,iconName:i,transform:c,symbol:l,maskId:f,title:a,titleId:s,extra:d,watchable:!0})])}).catch(I)})},e.generateAbstractIcon=function(r){var n=r.children,i=r.attributes,a=r.main,s=r.transform,o=r.styles,c=Mn(o);c.length>0&&(i.style=c);var l;return ri(s)&&(l=lt("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:i}}}},ru={mixout:function(){return{layer:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.classes,a=i===void 0?[]:i;return Nn({type:"layer"},function(){Lt("beforeDOMElementCreation",{assembler:r,params:n});var s=[];return r(function(o){Array.isArray(o)?o.map(function(c){s=s.concat(c.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(Ue(a)).join(" ")},children:s}]})}}}},iu={mixout:function(){return{counter:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.title,a=i===void 0?null:i,s=n.classes,o=s===void 0?[]:s,c=n.attributes,l=c===void 0?{}:c,u=n.styles,f=u===void 0?{}:u;return Nn({type:"counter",content:r},function(){return Lt("beforeDOMElementCreation",{content:r,params:n}),Ul({content:r.toString(),title:a,extra:{attributes:l,styles:f,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(Ue(o))}})})}}}},au={mixout:function(){return{text:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,a=i===void 0?it:i,s=n.title,o=s===void 0?null:s,c=n.classes,l=c===void 0?[]:c,u=n.attributes,f=u===void 0?{}:u,d=n.styles,g=d===void 0?{}:d;return Nn({type:"text",content:r},function(){return Lt("beforeDOMElementCreation",{content:r,params:n}),Ja({content:r,transform:h(h({},it),a),title:o,extra:{attributes:f,styles:g,classes:["".concat(p.cssPrefix,"-layers-text")].concat(Ue(l))}})})}}},provides:function(e){e.generateLayersText=function(r,n){var i=n.title,a=n.transform,s=n.extra,o=null,c=null;if(gs){var l=parseInt(getComputedStyle(r).fontSize,10),u=r.getBoundingClientRect();o=u.width/l,c=u.height/l}return p.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([r,Ja({content:r.innerHTML,width:o,height:c,transform:a,title:i,extra:s,watchable:!0})])}}},su=new RegExp('"',"ug"),ss=[1105920,1112319];function ou(t){var e=t.replace(su,""),r=wl(e,0),n=r>=ss[0]&&r<=ss[1],i=e.length===2?e[0]===e[1]:!1;return{value:Hr(i?e[0]:e),isSecondary:n||i}}function os(t,e){var r="".concat(Qc).concat(e.replace(":","-"));return new Promise(function(n,i){if(t.getAttribute(r)!==null)return n();var a=ee(t.children),s=a.filter(function(At){return At.getAttribute(Wr)===e})[0],o=xt.getComputedStyle(t,e),c=o.getPropertyValue("font-family").match(el),l=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(s&&!c)return t.removeChild(s),n();if(c&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?k:x,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?De[d][c[2].toLowerCase()]:nl[d][l],I=ou(f),E=I.value,N=I.isSecondary,T=c[0].startsWith("FontAwesome"),M=ai(g,E),j=M;if(T){var K=Al(E);K.iconName&&K.prefix&&(M=K.iconName,g=K.prefix)}if(M&&!N&&(!s||s.getAttribute(Jr)!==g||s.getAttribute(ti)!==j)){t.setAttribute(r,j),s&&t.removeChild(s);var $=Kl(),It=$.extra;It.attributes[Wr]=e,Gr(M,g).then(function(At){var jn=oi(h(h({},$),{},{icons:{main:At,mask:si()},prefix:g,iconName:j,extra:It,watchable:!0})),ft=R.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ft,t.firstChild):t.appendChild(ft),ft.outerHTML=jn.map(function(_s){return ze(_s)}).join(`
`),t.removeAttribute(r),n()}).catch(i)}else n()}else n()})}function cu(t){return Promise.all([os(t,"::before"),os(t,"::after")])}function lu(t){return t.parentNode!==document.head&&!~Zc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function cs(t){if(ut)return new Promise(function(e,r){var n=ee(t.querySelectorAll("*")).filter(lu).map(cu),i=ci.begin("searchPseudoElements");Us(),Promise.all(n).then(function(){i(),Qr(),e()}).catch(function(){i(),Qr(),r()})})}var uu={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=cs,r}}},provides:function(e){e.pseudoElements2svg=function(r){var n=r.node,i=n===void 0?R:n;p.searchPseudoElements&&cs(i)}}},ls=!1,fu={mixout:function(){return{dom:{unwatch:function(){Us(),ls=!0}}}},hooks:function(){return{bootstrap:function(){rs(Vr("mutationObserverCallbacks",{}))},noAuto:function(){Yl()},watch:function(r){var n=r.observeMutationsRoot;ls?Qr():rs(Vr("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},us=function(e){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,i){var a=i.toLowerCase().split("-"),s=a[0],o=a.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},r)},du={mixout:function(){return{parse:{transform:function(r){return us(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,n){var i=n.getAttribute("data-fa-transform");return i&&(r.transform=us(i)),r}}},provides:function(e){e.generateAbstractTransformGrouping=function(r){var n=r.main,i=r.transform,a=r.containerWidth,s=r.iconWidth,o={transform:"translate(".concat(a/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},d={transform:"translate(".concat(s/2*-1," -256)")},g={outer:o,inner:f,path:d};return{tag:"g",attributes:h({},g.outer),children:[{tag:"g",attributes:h({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:h(h({},n.icon.attributes),g.path)}]}]}}}},zr={x:0,y:0,width:"100%",height:"100%"};function fs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function hu(t){return t.tag==="g"?t.children:[t]}var pu={hooks:function(){return{parseNodeAttributes:function(r,n){var i=n.getAttribute("data-fa-mask"),a=i?Dn(i.split(" ").map(function(s){return s.trim()})):si();return a.prefix||(a.prefix=Rt()),r.mask=a,r.maskId=n.getAttribute("data-fa-mask-id"),r}}},provides:function(e){e.generateAbstractMask=function(r){var n=r.children,i=r.attributes,a=r.main,s=r.mask,o=r.maskId,c=r.transform,l=a.width,u=a.icon,f=s.width,d=s.icon,g=dl({transform:c,containerWidth:f,iconWidth:l}),I={tag:"rect",attributes:h(h({},zr),{},{fill:"white"})},E=u.children?{children:u.children.map(fs)}:{},N={tag:"g",attributes:h({},g.inner),children:[fs(h({tag:u.tag,attributes:h(h({},u.attributes),g.path)},E))]},T={tag:"g",attributes:h({},g.outer),children:[N]},M="mask-".concat(o||Le()),j="clip-".concat(o||Le()),K={tag:"mask",attributes:h(h({},zr),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,T]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:hu(d)},K]};return n.push($,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(M,")")},zr)}),{children:n,attributes:i}}}},mu={provides:function(e){var r=!1;xt.matchMedia&&(r=xt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:h(h({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=h(h({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:h(h({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||o.children.push({tag:"animate",attributes:h(h({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:h(h({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:h(h({},s),{},{values:"1;0;0;0;0;1;"})}]}),r||n.push({tag:"path",attributes:h(h({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},gu={hooks:function(){return{parseNodeAttributes:function(r,n){var i=n.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return r.symbol=a,r}}}},vu=[ml,nu,ru,iu,au,uu,fu,du,pu,mu,gu];Tl(vu,{mixoutsTo:H});var Lf=H.noAuto,Uf=H.config,$f=H.library,zf=H.dom,zs=H.parse,Ff=H.findIconDefinition,_f=H.toHtml,Fs=H.icon,Wf=H.layer,yu=H.text,bu=H.counter;var wu=["*"],Cu=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},Su=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},xu=t=>{let e={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:t.rotate!==null,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(e).map(r=>e[r]?r:null).filter(r=>r)},Ru=t=>t.prefix!==void 0&&t.iconName!==void 0,ku=(t,e)=>Ru(t)?t:typeof t=="string"?{prefix:e,iconName:t}:{prefix:t[0],iconName:t[1]},Iu=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Au=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...n){for(let i of n){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let a of i.icon[2])typeof a=="string"&&(this.definitions[i.prefix][a]=i)}}addIconPacks(...n){for(let i of n){let a=Object.keys(i).map(s=>i[s]);this.addIcons(...a)}}getIconDefinition(n,i){return n in this.definitions&&i in this.definitions[n]?this.definitions[n][i]:null}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Ou=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=ie({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[Et]});let t=e;return t})(),Eu=(()=>{let e=class e{constructor(n,i){this.renderer=n,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}};e.\u0275fac=function(i){return new(i||e)(U(Ye),U(Be))},e.\u0275cmp=re({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[Et,se],ngContentSelectors:wu,decls:1,vars:0,template:function(i,a){i&1&&(Ui(),$i(0))},encapsulation:2});let t=e;return t})(),Yf=(()=>{let e=class e{set spin(n){this.animation=n?"spin":void 0}set pulse(n){this.animation=n?"spin-pulse":void 0}constructor(n,i,a,s,o){this.sanitizer=n,this.config=i,this.iconLibrary=a,this.stackItem=s,this.classes=[],o!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){Su();return}if(n){let i=this.icon!=null?this.icon:this.config.fallbackIcon,a=this.findIconDefinition(i);if(a!=null){let s=this.buildParams();this.renderIcon(a,s)}}}render(){this.ngOnChanges({})}findIconDefinition(n){let i=ku(n,this.config.defaultPrefix);if("icon"in i)return i;let a=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return a??(Cu(i),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?zs.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...xu(n),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(n,i){let a=Fs(n,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(a.html.join(`
`))}};e.\u0275fac=function(i){return new(i||e)(U(Gi),U(Iu),U(Au),U(Ou,8),U(Eu,8))},e.\u0275cmp=re({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,a){i&2&&(ji("innerHTML",a.renderedIconHTML,ki),Ge("title",a.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[Et,se],decls:0,vars:0,template:function(i,a){},encapsulation:2});let t=e;return t})();var Gf=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=He({type:e}),e.\u0275inj=Ve({});let t=e;return t})();export{vo as a,X as b,Ju as c,tf as d,ef as e,nf as f,Ec as g,Mc as h,rf as i,af as j,Pc as k,Dc as l,sf as m,Af as n,hf as o,wf as p,Au as q,Yf as r,Gf as s};
