import{I as m,a1 as S,L as a,d as _,am as b,b as $,c as I,n as w,p as P,i as C,e as x,k as u,af as E,r as D,a2 as r}from"./entry.6e3cf9f3.js";import j from"./ComponentPlaygroundData.0be17083.js";import"./TabsHeader.36d7e80e.js";import"./ComponentPlaygroundProps.425f4c8d.js";import"./ProseH4.209f39c3.js";import"./ProseCodeInline.31fdc91b.js";import"./Badge.bd8376bf.js";import"./slot.49e6ad1a.js";import"./node.676c5e99.js";import"./ProseP.7dd52133.js";import"./index.d919ad81.js";import"./ComponentPlaygroundSlots.vue.bc406431.js";import"./ComponentPlaygroundTokens.vue.89b0e987.js";async function z(o){const e=m(o);{const{data:n}=await S(`nuxt-component-meta${e?`-${e}`:""}`,()=>$fetch(`/api/component-meta${e?`/${e}`:""}`));return a(()=>n.value)}}const B=o=>(P("data-v-5fd4c706"),o=o(),C(),o),k=B(()=>x("div",{class:"ellipsis-item"},null,-1)),N=[k],V=_({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(o){const e=o,n=a(()=>((t=e)=>t.top)()),s=a(()=>((t=e)=>t.left)()),c=a(()=>((t=e)=>t.right)()),i=a(()=>((t=e)=>t.zIndex)()),f=a(()=>((t=e)=>t.width)()),g=a(()=>((t=e)=>t.height)()),y=a(()=>((t=e)=>`blur(${t.blur})`)()),h=a(()=>((t=e)=>{var l,p,d;return`linear-gradient(97.62deg, ${(l=t==null?void 0:t.colors)==null?void 0:l[0]} 2.27%, ${(p=t==null?void 0:t.colors)==null?void 0:p[1]} 50.88%, ${(d=t==null?void 0:t.colors)==null?void 0:d[2]} 98.48%)`})()),{$pinceau:v}=b(e,void 0,{_cCN_top:n,_eih_insetInlineStart:s,_IfB_insetInlineEnd:c,_SsE_zIndex:i,_wj8_maxWidth:f,_t33_height:g,_Jfd_filter:y,_yUj_background:h});return(t,l)=>($(),I("div",{class:w(["ellipsis",[m(v)]])},N,2))}});const q=u(V,[["__scopeId","data-v-5fd4c706"]]),A=_({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const e=a(()=>E(o.component)),n=D({...o.props}),s=await z(o.component);return{as:e,formProps:n,componentData:s}},render(o){const e=Object.entries(this.$slots).reduce((n,[s,c])=>{if(s.startsWith("component-")){const i=s.replace("component-","");n[i]=c}return n},{});return r("div",{class:"component-playground"},[r("div",{class:"component-playground-wrapper"},[r(q,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),r(o.as,{...o.formProps,class:"component-playground-component"},{...e})]),r(j,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const X=u(A,[["__scopeId","data-v-9ca9b996"]]);export{X as default};
