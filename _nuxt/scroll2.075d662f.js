import{d as x,E as h,r as s,b as y,c as S,e as c,am as b,g as f,K as w,Y as V,O as E}from"./entry.27274098.js";import A from"./svg.e8a8c75d.js";import"./useToast.29496c1c.js";const q={class:"hero-content flex-col lg:flex-row"},k={class:"w-1/2"},B={class:"w-1/2"},X={class:"btn btn-circle btn-outline"},L=x({__name:"scroll2",props:{href:{},show_hidden_layers:{type:Boolean,default:!1}},setup(_){const p=_;h({script:["https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"]});const o=s(),a=s(document.querySelectorAll("xxxx")),i=s(document.querySelectorAll("xxxx")),u=s(document.querySelectorAll("xxxx"));function v(){p.show_hidden_layers===!1&&u.value.forEach((e,t)=>{e.style.opacity="0.0"}),i.value.forEach((e,t)=>{const l=a.value[t];e.style.opacity="0.0",e.animate({transform:["translateX(300px)","translateX(0px)"],opacity:[0,1]},{timeline:new ViewTimeline({subject:l}),rangeStart:"entry 0%",rangeEnd:"cover 20%",fill:"forwards"})}),a.value.forEach((e,t)=>{e.querySelectorAll(".scroll-sub-section").forEach((r,n)=>{const d=20+n*10,m=50+n*10;console.log("range",d,m),r.animate({transform:["translateX(200px)","translateX(0px)"],opacity:[0,1]},{timeline:new ViewTimeline({subject:e}),rangeStart:`entry ${d}%`,rangeEnd:`cover ${m}%`,fill:"forwards"})})})}function g(){o.value&&(console.info("SVG loaded, starting scroll animation ...",o.value),a.value=document.querySelectorAll(".scroll-section"),i.value=o.value.querySelectorAll("svg [inkscape\\:label^='stage']"),u.value=o.value.querySelectorAll("svg [inkscape\\:label^='hidden']"),v())}return(e,t)=>{const l=E,r=A;return y(),S("div",q,[c("div",k,[b(e.$slots,"default")]),c("div",B,[c("button",X,[f(l,{inline:"",name:"mdi:shield-bug",size:"24"})]),f(r,{modelValue:w(o),"onUpdate:modelValue":t[0]||(t[0]=n=>V(o)?o.value=n:null),onLoaded:g,class:"background-anim",href:e.href},null,8,["modelValue","href"])])])}}});export{L as default};
