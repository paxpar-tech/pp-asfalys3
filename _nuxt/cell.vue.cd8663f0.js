import{d as V,r as C,N as s,b as t,c as i,K as n,L as p,F as m,a1 as N,Y as B,c3 as S,e as D,G as v,t as x,g as E,f as F,n as I,O as K}from"./entry.1b7ba420.js";const L=["data-tip"],d="??:",R=V({__name:"cell",props:{text:{}},setup(k){const o=k,c=C(!1),a=s(()=>{var e="";return o.text&&(e=o.text.toString().split(d)[0]),e}),_=s(()=>{if(o.text){const e=o.text.toString().split(d);if(e.length>1)return e[1]}}),g=s(()=>{var e="text-2xl";return o.text&&(e=o.text.toString().split(d)[0].length>3?"text-sm":"text-2xl"),e}),y=s(()=>["✅","V","v","yes","oui"].includes(a.value)),h=s(()=>["❌","X","x","no","non"].includes(a.value)),z=s(()=>["∞","+oo","inf"].includes(a.value)),f=s(()=>{const e=a.value.match(/\:opt\:([^\:]*)\:([^\:]*)\:([^\:]*)/);return e?[{code:e[1],price:e[2],lib:e[3]}]:[]});return s(()=>{const e=a.value.match(/\:opt\:([^\:]*)\:([^\:]*)\:([^\:]*)/);return e&&(e[1],e[2],e[3]),!1}),(e,r)=>{const l=K;return t(),i("p",{class:I([n(g),"flex items-center text-gray-400"])},[n(y)?(t(),p(l,{key:0,name:"mdi:check-circle-outline",size:"32",class:"text-green-600"})):n(h)?(t(),p(l,{key:1,name:"mdi:cancel",size:"32",class:"text-red-600"})):n(z)?(t(),p(l,{key:2,name:"mdi:infinity",size:"32",class:"text-green-600"})):n(f).length>0?(t(),i("span",{key:3,onClick:r[1]||(r[1]=u=>c.value=!c.value)},[(t(!0),i(m,null,N(n(f),u=>(t(),i(m,null,[B(D("input",{type:"checkbox","onUpdate:modelValue":r[0]||(r[0]=b=>c.value=b),class:"checkbox"},null,512),[[S,c.value]]),v(" "+x(u.lib)+" +"+x(u.price)+"€ ",1)],64))),256))])):(t(),i(m,{key:4},[v(x(n(a)),1)],64)),n(_)?(t(),i("div",{key:5,"data-tip":n(_),class:"tooltip tooltip-top ml-2"},[E(l,{name:"mdi:tooltip-text-outline",size:"18"})],8,L)):F("",!0)],2)}}});export{R as _};
