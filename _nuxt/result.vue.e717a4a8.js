import{d as B,r as N,N as x,b as n,c,e as t,g as m,K as s,G as p,t as l,F as V,$ as z,n as q,L as i,f as a,w as F,O as L}from"./entry.7b81283e.js";import{_ as S}from"./factice.vue.4e858ceb.js";import{_ as A}from"./simple.vue.d2deb17a.js";import{_ as D}from"./basic.vue.b7bd18ef.js";import{_ as E}from"./datav.vue.1167e78b.js";import{_ as G}from"./nonconformity.vue.dda34d09.js";import{_ as I}from"./debug-panel.vue.a35e5876.js";const K={key:0,class:"navbar bg-base-100"},M=t("div",{class:"navbar-start"},null,-1),O={class:"navbar-center"},R={key:0,class:"dropdown overflow-visible"},T={tabindex:"0",class:"btn btn-ghost normal-case text-xl flex"},j={tabindex:"0",class:"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"},H=["onClick"],J=t("div",{class:"navbar-end"},null,-1),P={class:""},se=B({__name:"result",props:{node:{},show_root:{type:Boolean,default:!1},hide_modes_selector:{type:Boolean,default:!0},mode:{default:"basic"},auto_propagate_status:{type:Boolean,default:!0}},setup(f){const e=N(f.mode);function h(o){e.value=o}const r={simple:{icon:"mdi:home",title:"vue simplifiée"},basic:{icon:"mdi:menu-swap",title:"vue de base"},nonconformity:{icon:"mdi:alert-decagram",title:"vue non-conformité"},datav:{icon:"mdi:database-search",title:"vue données"},semantic:{icon:"mdi:head-snowflake-outline",title:"vue sémantique",factice:!0},timeline:{icon:"mdi:table-clock",title:"vue timeline",factice:!0},geographic:{icon:"mdi:earth",title:"vue géographique",factice:!0},chat:{icon:"mdi:message-reply-text-outline",title:"chat IA",factice:!0},notebook:{icon:"mdi:notebook-multiple",title:"vue notebook",factice:!0}},v=x(()=>e.value=="simple"?"ppw-checklist-mode-simple":e.value=="basic"?"ppw-checklist-mode-basic":e.value=="nonconformity"?"ppw-checklist-mode-nonconformity":e.value=="datav"?"ppw-checklist-mode-datav":"ppw-checklist-mode-basic");function w(o){console.log(`redirect mode ${e} ...`),e.value=o}return(o,U)=>{const _=L,b=S,k=A,y=D,g=E,$=G,C=I;return n(),c("div",null,[o.hide_modes_selector?a("",!0):(n(),c("div",K,[M,t("div",O,[(n(),c("div",R,[t("a",T,[m(_,{name:r[s(e)].icon,size:"32"},null,8,["name"]),p(" "+l(r[s(e)].title),1)]),t("ul",j,[(n(),c(V,null,z(r,(d,u)=>t("li",null,[t("a",{onClick:W=>h(u),class:q(u==s(e)?"active":null)},[m(_,{name:d.icon,size:"32"},null,8,["name"]),p(" "+l(d.title)+" ",1),d.factice?(n(),i(b,{key:0})):a("",!0)],10,H)])),64))])]))]),J])),t("div",P,[s(e)==="simple"?(n(),i(k,{key:0,node:o.node,onRedirect:w},null,8,["node"])):a("",!0),s(e)==="basic"?(n(),i(y,{key:1,node:o.node,show_root:o.show_root},null,8,["node","show_root"])):a("",!0),s(e)==="datav"?(n(),i(g,{key:2,node:o.node,show_root:o.show_root},null,8,["node","show_root"])):a("",!0),s(e)==="nonconformity"?(n(),i($,{key:3,node:o.node,show_root:o.show_root},null,8,["node","show_root"])):a("",!0)]),m(C,null,{default:F(()=>[t("p",null,"mode : "+l(s(e)),1),t("p",null,"modeComponent : "+l(s(v)),1)]),_:1})])}}});export{se as _};