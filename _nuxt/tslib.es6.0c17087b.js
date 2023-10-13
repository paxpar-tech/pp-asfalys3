function ft(t,e){t.indexOf(e)===-1&&t.push(e)}function Wt(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const et=(t,e,n)=>Math.min(Math.max(n,t),e),d={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},R=t=>typeof t=="number",O=t=>Array.isArray(t)&&!R(t[0]),ht=(t,e,n)=>{const s=e-t;return((n-t)%s+s)%s+t};function dt(t,e){return O(t)?t[ht(0,t.length,e)]:t}const nt=(t,e,n)=>-n*t+n*e+t,st=()=>{},b=t=>t,Z=(t,e,n)=>e-t===0?1:(n-t)/(e-t);function it(t,e){const n=t[t.length-1];for(let s=1;s<=e;s++){const i=Z(0,e,s);t.push(nt(n,1,i))}}function pt(t){const e=[0];return it(e,t-1),e}function mt(t,e=pt(t.length),n=b){const s=t.length,i=s-e.length;return i>0&&it(e,i),r=>{let a=0;for(;a<s-2&&!(r<e[a+1]);a++);let o=et(0,1,Z(e[a],e[a+1],r));return o=dt(n,a)(o),nt(t[a],t[a+1],o)}}const rt=t=>Array.isArray(t)&&R(t[0]),B=t=>typeof t=="object"&&!!t.createAnimation,I=t=>typeof t=="function",gt=t=>typeof t=="string",M={ms:t=>t*1e3,s:t=>t/1e3},at=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,yt=1e-7,vt=12;function bt(t,e,n,s,i){let r,a,o=0;do a=e+(n-e)/2,r=at(a,s,i)-t,r>0?n=a:e=a;while(Math.abs(r)>yt&&++o<vt);return a}function P(t,e,n,s){if(t===e&&n===s)return b;const i=r=>bt(r,0,1,t,n);return r=>r===0||r===1?r:at(i(r),e,s)}const Tt=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const s=n*t,i=e==="end"?Math.floor(s):Math.ceil(s);return et(0,1,i/t)},J={ease:P(.25,.1,.25,1),"ease-in":P(.42,0,1,1),"ease-in-out":P(.42,0,.58,1),"ease-out":P(0,0,.58,1)},St=/\((.*?)\)/;function K(t){if(I(t))return t;if(rt(t))return P(...t);if(J[t])return J[t];if(t.startsWith("steps")){const e=St.exec(t);if(e){const n=e[1].split(",");return Tt(parseFloat(n[0]),n[1].trim())}}return b}class Xt{constructor(e,n=[0,1],{easing:s,duration:i=d.duration,delay:r=d.delay,endDelay:a=d.endDelay,repeat:o=d.repeat,offset:f,direction:g="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=b,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((m,l)=>{this.resolve=m,this.reject=l}),s=s||d.easing,B(s)){const m=s.createAnimation(n);s=m.easing,n=m.keyframes||n,i=m.duration||i}this.repeat=o,this.easing=O(s)?b:K(s),this.updateDuration(i);const j=mt(n,f,O(s)?s.map(K):b);this.tick=m=>{var l;r=r;let h=0;this.pauseTime!==void 0?h=this.pauseTime:h=(m-this.startTime)*this.rate,this.t=h,h/=1e3,h=Math.max(h-r,0),this.playState==="finished"&&this.pauseTime===void 0&&(h=this.totalDuration);const w=h/this.duration;let E=Math.floor(w),y=w%1;!y&&w>=1&&(y=1),y===1&&E--;const _=E%2;(g==="reverse"||g==="alternate"&&_||g==="alternate-reverse"&&!_)&&(y=1-y);const x=h>=this.totalDuration?1:Math.min(y,1),S=j(this.easing(x));e(S),this.pauseTime===void 0&&(this.playState==="finished"||h>=this.totalDuration+a)?(this.playState="finished",(l=this.resolve)===null||l===void 0||l.call(this,S)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const e=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=e-this.pauseTime:this.startTime||(this.startTime=e),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var e;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(e=this.reject)===null||e===void 0||e.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(e){this.duration=e,this.totalDuration=e*(this.repeat+1)}get currentTime(){return this.t}set currentTime(e){this.pauseTime!==void 0||this.rate===0?this.pauseTime=e:this.startTime=performance.now()-e/this.rate}get playbackRate(){return this.rate}set playbackRate(e){this.rate=e}}class At{setAnimation(e){this.animation=e,e==null||e.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const C=new WeakMap;function ot(t){return C.has(t)||C.set(t,{transforms:[],values:new Map}),C.get(t)}function Ot(t,e){return t.has(e)||t.set(e,new At),t.get(e)}const wt=["","X","Y","Z"],Et=["translate","scale","rotate","skew"],$={x:"translateX",y:"translateY",z:"translateZ"},Q={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},xt={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:Q,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:b},skew:Q},F=new Map,G=t=>`--motion-${t}`,z=["x","y","z"];Et.forEach(t=>{wt.forEach(e=>{z.push(t+e),F.set(G(t+e),xt[t])})});const Dt=(t,e)=>z.indexOf(t)-z.indexOf(e),Pt=new Set(z),ct=t=>Pt.has(t),Mt=(t,e)=>{$[e]&&(e=$[e]);const{transforms:n}=ot(t);ft(n,e),t.style.transform=Rt(n)},Rt=t=>t.sort(Dt).reduce(It,"").trim(),It=(t,e)=>`${t} ${e}(var(${G(e)}))`,W=t=>t.startsWith("--"),Y=new Set;function Ft(t){if(!Y.has(t)){Y.add(t);try{const{syntax:e,initialValue:n}=F.has(t)?F.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch{}}}const L=(t,e)=>document.createElement("div").animate(t,e),k={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{L({opacity:[1]})}catch{return!1}return!0},finished:()=>!!L({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{L({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},N={},A={};for(const t in k)A[t]=()=>(N[t]===void 0&&(N[t]=k[t]()),N[t]);const jt=.015,_t=(t,e)=>{let n="";const s=Math.round(e/jt);for(let i=0;i<s;i++)n+=t(Z(0,s-1,i))+", ";return n.substring(0,n.length-2)},tt=(t,e)=>I(t)?A.linearEasing()?`linear(${_t(t,e)})`:d.easing:rt(t)?Vt(t):t,Vt=([t,e,n,s])=>`cubic-bezier(${t}, ${e}, ${n}, ${s})`;function qt(t,e){for(let n=0;n<t.length;n++)t[n]===null&&(t[n]=n?t[n-1]:e());return t}const Ut=t=>Array.isArray(t)?t:[t];function X(t){return $[t]&&(t=$[t]),ct(t)?G(t):t}const U={get:(t,e)=>{e=X(e);let n=W(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&n!==0){const s=F.get(e);s&&(n=s.initialValue)}return n},set:(t,e,n)=>{e=X(e),W(e)?t.style.setProperty(e,n):t.style[e]=n}};function lt(t,e=!0){if(!(!t||t.playState==="finished"))try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch{}}function $t(t,e){var n;let s=(e==null?void 0:e.toDefaultUnit)||b;const i=t[t.length-1];if(gt(i)){const r=((n=i.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";r&&(s=a=>a+r)}return s}function zt(){return window.__MOTION_DEV_TOOLS_RECORD}function Zt(t,e,n,s={},i){const r=zt(),a=s.record!==!1&&r;let o,{duration:f=d.duration,delay:g=d.delay,endDelay:j=d.endDelay,repeat:m=d.repeat,easing:l=d.easing,persist:h=!1,direction:w,offset:E,allowWebkitAcceleration:y=!1}=s;const _=ot(t),x=ct(e);let S=A.waapi();x&&Mt(t,e);const p=X(e),V=Ot(_.values,p),v=F.get(p);return lt(V.animation,!(B(l)&&V.generator)&&s.record!==!1),()=>{const q=()=>{var c,D;return(D=(c=U.get(t,p))!==null&&c!==void 0?c:v==null?void 0:v.initialValue)!==null&&D!==void 0?D:0};let u=qt(Ut(n),q);const H=$t(u,v);if(B(l)){const c=l.createAnimation(u,e!=="opacity",q,p,V);l=c.easing,u=c.keyframes||u,f=c.duration||f}if(W(p)&&(A.cssRegisterProperty()?Ft(p):S=!1),x&&!A.linearEasing()&&(I(l)||O(l)&&l.some(I))&&(S=!1),S){v&&(u=u.map(T=>R(T)?v.toDefaultUnit(T):T)),u.length===1&&(!A.partialKeyframes()||a)&&u.unshift(q());const c={delay:M.ms(g),duration:M.ms(f),endDelay:M.ms(j),easing:O(l)?void 0:tt(l,f),direction:w,iterations:m+1,fill:"both"};o=t.animate({[p]:u,offset:E,easing:O(l)?l.map(T=>tt(T,f)):void 0},c),o.finished||(o.finished=new Promise((T,ut)=>{o.onfinish=T,o.oncancel=ut}));const D=u[u.length-1];o.finished.then(()=>{h||(U.set(t,p,D),o.cancel())}).catch(st),y||(o.playbackRate=1.000001)}else if(i&&x)u=u.map(c=>typeof c=="string"?parseFloat(c):c),u.length===1&&u.unshift(parseFloat(q())),o=new i(c=>{U.set(t,p,H?H(c):c)},u,Object.assign(Object.assign({},s),{duration:f,easing:l}));else{const c=u[u.length-1];U.set(t,p,v&&R(c)?v.toDefaultUnit(c):c)}return a&&r(t,e,u,{duration:f,delay:g,easing:l,repeat:m,offset:E},"motion-one"),V.setAnimation(o),o}}const Gt=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);function Ht(t,e){var n;return typeof t=="string"?e?((n=e[t])!==null&&n!==void 0||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const Ct=t=>t(),Jt=(t,e,n=d.duration)=>new Proxy({animations:t.map(Ct).filter(Boolean),duration:n,options:e},Nt),Lt=t=>t.animations[0],Nt={get:(t,e)=>{const n=Lt(t);switch(e){case"duration":return t.duration;case"currentTime":return M.s((n==null?void 0:n[e])||0);case"playbackRate":case"playState":return n==null?void 0:n[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(Bt)).catch(st)),t.finished;case"stop":return()=>{t.animations.forEach(s=>lt(s))};case"forEachNative":return s=>{t.animations.forEach(i=>s(i,t))};default:return typeof(n==null?void 0:n[e])>"u"?void 0:()=>t.animations.forEach(s=>s[e]())}},set:(t,e,n)=>{switch(e){case"currentTime":n=M.ms(n);case"playbackRate":for(let s=0;s<t.animations.length;s++)t.animations[s][e]=n;return!0}return!1}},Bt=t=>t.finished;function Qt(t=.1,{start:e=0,from:n=0,easing:s}={}){return(i,r)=>{const a=R(n)?n:Kt(n,r),o=Math.abs(a-i);let f=t*o;if(s){const g=r*t;f=K(s)(f/g)*g}return e+f}}function Kt(t,e){if(t==="first")return 0;{const n=e-1;return t==="last"?n:n/2}}function Yt(t,e,n){return I(t)?t(e,n):t}function kt(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}export{Xt as A,kt as _,Zt as a,gt as b,Ht as c,Gt as d,d as e,B as f,dt as g,Yt as h,R as i,pt as j,Ut as k,it as l,nt as m,I as n,mt as o,Z as p,b as q,Wt as r,Qt as s,Jt as w};