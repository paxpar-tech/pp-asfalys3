import{d as w,r as i,l as x,N as B,o as T,K as s,b as l,c,g as $,w as C,n as b,e as u,t as E,F as N,$ as R,aw as z,T as I,f as L}from"./entry.b5be8022.js";import{a as g}from"./animate.es.f9afe816.js";import{t as V}from"./index.es.9f4130be.js";import{s as F}from"./tslib.es6.0c17087b.js";const M={key:0,class:"block relative w-full h-18"},P={class:"absolute -z-[1] w-[2rem] h-[2rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"},S=5e3,q=w({__name:"BrandsRotator",props:{brands:{default:()=>[]}},setup(v){const o=v,d=i();x().public;const h=i(null);function n(e,a){return Math.random()*(a-e)+e}const t=i();B(()=>o.brands.filter(e=>e.active));function m(e,a=()=>{}){var f;V([[e,{opacity:0,scale:.5,filter:"blur(20px)"},{duration:0}],[e,{opacity:1,scale:1,filter:"blur(0px)"},{duration:.5,easing:"ease-in-out"}]]);const r=new Image;r.src=`${(f=t.value)==null?void 0:f.imgPath}`,r.addEventListener("load",()=>{var p;Array.from((p=e.children[1])==null?void 0:p.children).forEach(k=>{g(k,{x:`${n(-50,50)}vw`,y:`${n(-50,50)}vh`,scale:n(1,3),rotate:n(-20,20),opacity:n(.05,.4)},{duration:.5,delay:F(.05),easing:"ease-in-out"})})})}function y(e,a){g(e,{opacity:0,scale:.5,filter:"blur(20px)"},{duration:.5,easing:"ease-in-out"}),setTimeout(()=>{a()},500)}function _(){let e=0,a=o.brands[e];h.value=setInterval(()=>{document.hidden||(a.active=!1,e=(e+1)%o.brands.length,a=o.brands[e],a.active=!0,t.value=a)},S)}return T(()=>{_(),setTimeout(()=>m(d.value),100)}),(e,a)=>s(t)?(l(),c("span",M,[$(I,{appear:"",css:!1,onEnter:m,onLeave:y},{default:C(()=>[(l(),c("div",{ref_key:"brandRef",ref:d,key:s(t).slug,class:b(["w-full absolute top-0 left-0 opacity-0",`text-${s(t).slug}-base`])},[u("span",null,E(s(t).name),1),u("div",P,[(l(),c(N,null,R(20,r=>u("div",{key:r,class:b(["absolute w-[2rem] h-[2rem] top-0 left-0 bg-no-repeat bg-center bg-contain opacity-0",[r%2&&"hidden md:block"]]),style:z(`background-image: url(${s(t).imgPath})`)},null,6)),64))])],2))]),_:1})])):L("",!0)}});export{q as _};
