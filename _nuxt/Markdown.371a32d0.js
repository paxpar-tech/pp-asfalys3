import s from"./ContentSlot.9ffbd507.js";import{d as o,a3 as m,L as p,aE as u}from"./entry.2d2af821.js";import"./MDCSlot.0ef9d6a7.js";import"./node.676c5e99.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:a}=m(),r=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};