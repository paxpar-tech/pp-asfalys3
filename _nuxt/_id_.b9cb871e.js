import{d as g,s as w,M as v,r as b,N as B,b as s,c,K as o,t as r,f as p,e,g as m,w as _,L as N,O as S}from"./entry.7b81283e.js";import{_ as $}from"./main2.vue.e67d0393.js";import{_ as z}from"./result.vue.e717a4a8.js";import{_ as C}from"./debug-panel.vue.a35e5876.js";import"./links.a81fdb64.js";import"./link.9523e5bb.js";import"./useToast.a6fbb8a6.js";import"./usePaxparAPI.3519fc4b.js";import"./fetch.e2d5dffe.js";import"./url.6edfad5e.js";import"./factice.vue.4e858ceb.js";import"./simple.vue.d2deb17a.js";import"./checktools.b7529971.js";import"./basic.vue.b7bd18ef.js";import"./exception.vue.8bcf7f0d.js";import"./pubkey.vue.ac8864ed.js";import"./traceback.vue.6f2c648b.js";import"./default.vue.add80312.js";import"./transition.e582e7e7.js";import"./datav.vue.1167e78b.js";import"./CopyButton.vue.72900732.js";import"./index.be2adabc.js";import"./nonconformity.vue.dda34d09.js";import"./useFeatureFlag.2f835f30.js";const D={class:"flex flex-col items-center"},E=e("p",null,"Déposez un document PDF à analyser",-1),O={key:0},V={class:"mx-0 md:mx-20 xl:mx-40 my-10"},j={class:"card bg-base-100 shadow-xl",style:{"min-height":"500px"}},U={class:"card-body"},F={key:0,class:"items-center align-middle p-28"},mo=g({__name:"[[id]]",setup(K){const n=w().params.id,i=v({}),t=b(!1),d=`/api/pdf/check/${n}`;function u(){t.value=!0}function f(l){t.value=!1,Object.assign(i,l)}const a=B(()=>Object.keys(i).length==0);return(l,M)=>{const h=S,k=$,x=z,y=C;return s(),c("div",D,[E,o(n)?(s(),c("p",O,"checklist "+r(o(n)),1)):p("",!0),e("div",V,[e("div",j,[e("div",U,[m(k,{"show-files":!1,"upload-url":d,"session-path":"check",onUploadStart:u,onUploadSuccess:f},{default:_(()=>[o(a)?(s(),c("div",F,[m(h,{name:"mdi:file-arrow-up-down-outline",size:"128"})])):p("",!0)]),_:1}),!o(a)&&!o(t)?(s(),N(x,{key:0,node:o(i),show_root:!1,hide_modes_selector:!1,mode:"simple"},null,8,["node"])):p("",!0),m(y,null,{default:_(()=>[e("p",null,"uploading = "+r(o(t)),1),e("p",null,"nodeEmpty = "+r(o(a)),1)]),_:1})])])])])}}});export{mo as default};