import{d as b,r as l,o as k,cm as f,bG as w,b as d,c as h,e as n,f as T,W as C,j as S}from"./entry.27274098.js";import{u as x}from"./useToast.29496c1c.js";const E={class:"stack w-full"},I={key:0},M=n("h1",null,"SVG load done test",-1),V=n("hr",null,null,-1),X=n("hr",null,null,-1),$=n("h1",null,"loaded SVG",-1),q=n("hr",null,null,-1),B=["innerHTML"],j=b({__name:"embed",props:{href:{}},setup(v,{expose:_}){const a=v,{$fetch2:y}=S(),u=l(),p=l(),m=l(!1),g=x();k(async()=>{if(a.href)try{var e=await y(a.href,{parseResponse:t=>t});e=e.replace('width="3840"','width="100%"'),e=e.replace('height="2160"','height="100%"'),u.value=e,setTimeout(i)}catch{g.error(`Erreur lors de la récupération de l'animation ${a.href}`)}});const i=()=>{const e=p.value.querySelector("svg");if(e){const o=[];for(var t=1;t<20;t++){const s=e.querySelector(`svg [ref='item${t}']`);s&&o.push(s)}o.forEach((s,r)=>{const{variant:c}=f(s,{initial:{y:100,opacity:0},enter:{y:0,opacity:1,transition:{type:"spring",stiffness:350,damping:20,delay:500+r*500,onComplete:()=>{c.value="levitate"}}},levitate:{y:15,transition:{duration:2e3,repeat:1/0,ease:"easeInOut",repeatType:"mirror"}}})})}if(e){const o=[];for(var t=1;t<20;t++){const r=e.querySelector(`svg [ref='target${t}']`);r&&o.push(r)}o.forEach((s,r)=>{const{variant:c}=f(s,{initial:{y:100,opacity:0},enter:{y:0,opacity:1,transition:{type:"spring",stiffness:350,damping:20,delay:500+r*500,onComplete:()=>{c.value="levitate"}}},levitate:{y:15,transition:{duration:2e3,repeat:1/0,ease:"easeInOut",repeatType:"mirror"}}})})}};return _({task:i}),(e,t)=>{const o=w("motion-fade");return d(),h("div",E,[m.value?(d(),h("div",I,[M,V,n("button",{class:"btn",onClick:i},"XXXX"),X,$,q])):T("",!0),C(n("div",{ref_key:"container",ref:p,class:"object-contain w-full",innerHTML:u.value},null,8,B),[[o]])])}}});export{j as default};
