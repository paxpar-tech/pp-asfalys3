import{d as h,b as o,c as l,F as f,$ as b,f as r,e as s,t as d,am as p,K as c,ad as m}from"./entry.b5be8022.js";const v={class:"carousel w-full"},y=["id","set"],g=["src"],k={key:1,class:"absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"},w={class:"hero"},$={class:"hero-content text-centser"},j={class:"max-w-md"},B={class:"text-5xl font-bold"},S={class:"text-3xl font-bold"},x={class:"btn btn-primary"},C={class:"absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"},F=["href"],N=["href"],E=h({__name:"carousel",props:{slides:{}},setup(_){const t=_;function u(){if(t.slides!==void 0)return t.slides;{const e=m();return Object.keys(e)}}const i=u();return(e,V)=>(o(),l("div",v,[(o(!0),l(f,null,b(c(i),(n,a)=>(o(),l("div",{id:`slide${a+1}`,set:e.slide_pos=a+1,class:"carousel-item relative w-full"},[t.slides!==void 0?(o(),l("img",{key:0,src:n.background,class:"w-full"},null,8,g)):r("",!0),t.slides!==void 0?(o(),l("div",k,[s("div",w,[s("div",$,[s("div",j,[s("h1",B,d(n.title),1),s("h1",S,d(n.desc),1),s("button",x,d(n.btnlabel),1)])])])])):r("",!0),t.slides===void 0?p(e.$slots,`slide${a+1}`,{key:2}):r("",!0),s("div",C,[s("a",{href:`#slide${e.slide_pos>1?e.slide_pos-1:c(i).length}`,class:"btn btn-circle"},"❮",8,F),s("a",{href:`#slide${e.slide_pos<c(i).length?e.slide_pos+1:1}`,class:"btn btn-circle"},"❯",8,N)])],8,y))),256))]))}});export{E as default};
