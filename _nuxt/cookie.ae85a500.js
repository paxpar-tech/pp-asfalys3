import{h as u,c as l,e as n,t as r,K as a,b as s}from"./entry.27274098.js";const p={__name:"cookie",setup(i){const e=u("counter");return e.value=e.value||Math.round(Math.random()*1e3),(v,t)=>(s(),l("div",null,[n("h1",null,"Counter: "+r(a(e)||"-"),1),n("button",{onClick:t[0]||(t[0]=o=>e.value=null)},"reset"),n("button",{onClick:t[1]||(t[1]=o=>e.value--)},"-"),n("button",{onClick:t[2]||(t[2]=o=>e.value++)},"+")]))}};export{p as default};
