import{d as h,u as f,b as o,c as s,F as v,$ as y,n as a,e as g,t as k,I as x,as as S,J as A,f as C,k as T}from"./entry.6e3cf9f3.js";import{u as $}from"./useScrollspy.47e8a3d1.js";const q={class:"docs-toc-links"},B=["href","onClick"],D=h({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(d,{emit:n}){const u=f(),{activeHeadings:l,updateHeadings:i}=$();setTimeout(()=>{i([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300);function _(t){u.push(`#${t}`),n("move",t)}function m(t){n("move",t)}return(t,c)=>{const p=L;return o(),s("ul",q,[(o(!0),s(v,null,y(d.links,e=>(o(),s("li",{key:e.text,class:a([`depth-${e.depth}`])},[g("a",{href:`#${e.id}`,class:a([x(l).includes(e.id)&&"active"]),onClick:S(r=>_(e.id),["prevent"])},k(e.text),11,B),e.children?(o(),A(p,{key:0,links:e.children,onMove:c[0]||(c[0]=r=>m(r))},null,8,["links"])):C("",!0)],2))),128))])}}});const L=T(D,[["__scopeId","data-v-a97df893"]]);export{L as default};
