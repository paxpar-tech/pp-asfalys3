import{d as h,b as o,c as l,e as s,n as a,t as n,F as r,$ as p,J as u,w as x,D as b,E as g,k as y}from"./entry.6e3cf9f3.js";const w={class:"flex flex-col justify-center w-full px-4 md:w-1/2"},v={class:"mb-4 text-center md:text-left text-eight leading-eight"},B={class:"flex flex-col mb-4 text-center md:text-left"},S=["href"],k={class:"w-full px-4 md:w-1/2"},C=["src"],N=h({__name:"BenefitsSectionSingle",props:{benefit:{}},setup($){return(e,z)=>{var i,c;const d=g;return o(),l(r,null,[s("div",w,[s("h3",{class:a([[(i=e.benefit.styles)==null?void 0:i.text],"mb-4 text-center text-four leading-four font-display-weight md:mb-2 md:text-left"])},n(e.benefit.title)+" "+n((c=e.benefit.styles)==null?void 0:c.text),3),s("p",v,n(e.benefit.description),1),s("div",B,[(o(!0),l(r,null,p(e.benefit.links,(t,m)=>{var f,_;return o(),l(r,null,[t.type==="external"?(o(),l("a",{key:t.text,class:a([[(f=e.benefit.styles)==null?void 0:f.text],"font-bold-body-weight has-hover:hover:opacity-50"]),href:t.href,rel:"noopener nofollow noreferrer",target:"_blank"},n(t.text)+" → ",11,S)):(o(),u(d,{key:t.text+m,class:a([[(_=e.benefit.styles)==null?void 0:_.text],"font-bold-body-weight has-hover:hover:opacity-50"]),to:t.route},{default:x(()=>[b(n(t.text)+" → ",1)]),_:2},1032,["class","to"]))],64)}),256))])]),s("div",k,[s("img",{width:"1200",height:"800",loading:"lazy",src:`${e.benefit.image}`,alt:"",class:"w-full max-w-sm m-auto md:max-w-full"},null,8,C)])],64)}}});const E=y(N,[["__scopeId","data-v-1861f5e4"]]);export{E as default};
