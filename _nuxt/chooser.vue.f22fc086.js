import{d as _,b as a,c as n,G as m,t as o,F as c,a0 as r,e,g as l,K as d,f as u,O as p}from"./entry.27274098.js";const h=[{id:"MCD",name:"Chave Móvel Digital",icon:"fa6-solid:file-signature"},{id:"Chambersign",name:"Chambersign",icon:"akar-icons:hand"},{id:"LexPersona",name:"LexPersona"},{id:"LuxTrust",name:"LuxTrust"},{id:"YouSign",name:"YouSign"}],g=[{id:"MCD",name:"Chave Móvel Digital",icon:"fa6-solid:file-signature"},{id:"Chambersign",name:"Chambersign",icon:"akar-icons:hand"}],b={class:"mx-28"},f={key:"provider.id",class:"form-control"},x={class:"label cursor-pointer"},k={class:"label-text"},C={class:"label-text"},v=e("input",{type:"radio",name:"radio-6",class:"radio",checked:""},null,-1),y={key:"provider.id",class:"form-control"},D={class:"label cursor-pointer"},L={class:"label-text"},N={class:"label-text"},S=e("input",{type:"radio",name:"radio-6",class:"radio",checked:""},null,-1),V={key:2,class:"form-control"},B={class:"label cursor-pointer"},M={class:"label-text"},T=e("span",{class:"label-text"},"Je ne signe pas",-1),z=e("input",{type:"radio",name:"radio-6",class:"radio"},null,-1),E=_({__name:"chooser",props:{disable_no_sign:{type:Boolean,default:!1},source:{default:"accounts"}},setup(J){return(i,O)=>{const t=p;return a(),n("div",b,[m(" disable_no_sign = "+o(i.disable_no_sign)+" ",1),i.source=="providers"?(a(!0),n(c,{key:0},r(d(h),s=>(a(),n("div",f,[e("label",x,[e("span",k,[l(t,{name:s.icon||"fa6-solid:file-signature",size:"64"},null,8,["name"])]),e("span",C,"Je signe avec "+o(s.name)+" xx"+o(s.icon),1),v])]))),128)):(a(!0),n(c,{key:1},r(d(g),s=>(a(),n("div",y,[e("label",D,[e("span",L,[l(t,{name:s.icon||"fa6-solid:file-signature",size:"64"},null,8,["name"])]),e("span",N,"Je signe avec "+o(s.name)+" xx"+o(s.icon),1),S])]))),128)),i.disable_no_sign===!1?(a(),n("div",V,[e("label",B,[e("span",M,[l(t,{name:"akar-icons:hand",size:"64"})]),T,z])])):u("",!0)])}}});export{E as _};
