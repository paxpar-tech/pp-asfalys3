import{d as g,N as u,b as r,c,g as f,K as n,e as i,G as E,t as m,am as N,f as _,n as b,O as y}from"./entry.27274098.js";const C={key:0},O=g({__name:"alert",props:{msg:{},type:{default:"info"},action:{}},emits:["action"],setup(l,{emit:d}){const t=l,s={info:{class:"alert-info",icon:"mdi:information-variant-box",msg:"INFO"},success:{class:"alert-success",icon:"mdi:check-circle",msg:"SUCCEESS"},warning:{class:"alert-warning",icon:"mdi:alert",msg:"WARNING"},error:{class:"alert-error",icon:"mdi:alert-decagram",msg:"ERROR"},deprecated:{class:"alert-error",icon:"mdi:hand-back-left",msg:"DEPRECATED"},notimplemented:{class:"alert-warning",icon:"mdi:hands-pray",msg:"NOT IMPLEMENTED"},todo:{class:"alert-info",icon:"mdi:gesture-double-tap",msg:"TODO"}},a=u(()=>t.type in s?s[t.type]:s.info);return(e,o)=>{const p=y;return r(),c("div",{class:b(["alert m-2",n(a).class])},[f(p,{name:n(a).icon,size:"36"},null,8,["name"]),i("span",null,[E(m(e.msg||n(a).msg)+" ",1),N(e.$slots,"default")]),e.action?(r(),c("div",C,[i("button",{onClick:o[0]||(o[0]=T=>d("action")),class:"btn btn-sm btn-primary"},m(e.action),1)])):_("",!0)],2)}}});export{O as _};
