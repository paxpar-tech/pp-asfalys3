import{u as m}from"./index.fb55dbb0.js";import{d as v,r as h,N as y,b as s,c as o,K as i,f as p,e,F as f,$ as k,t as C,p as b,i as g,k as x}from"./entry.b5be8022.js";const c=t=>(b("data-v-63eb7158"),t=t(),g(),t),S={key:0,class:"copied"},w=c(()=>e("div",{class:"scrim"},null,-1)),B=c(()=>e("div",{class:"content"}," Copied! ",-1)),I=[w,B],T=c(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),N={class:"window"},F=c(()=>e("span",{class:"sign"},"$",-1)),V={class:"content"},$={key:1,class:"prompt"},j=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:_}=m(),n=h("init"),r=y(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{_(r.value.join(`
`)).then(()=>{n.value="copied",setTimeout(()=>{n.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,q)=>(s(),o("div",{class:"terminal",onClick:l},[i(n)==="copied"?(s(),o("div",S,I)):p("",!0),T,e("div",N,[(s(!0),o(f,null,k(i(r),d=>(s(),o("span",{key:d,class:"line"},[F,e("span",V,C(d),1)]))),128))]),i(n)!=="copied"?(s(),o("div",$," Click to copy ")):p("",!0)]))}});const E=x(j,[["__scopeId","data-v-63eb7158"]]);export{E as default};
