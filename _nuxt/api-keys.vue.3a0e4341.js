import{d as y,U as h,r as s,b as n,c as o,e,K as l,f as i,t as m,F as x,Z as f}from"./entry.27274098.js";const v=e("h1",null,"API keys",-1),g={class:"card w-96 bg-base-100 shadow-xl"},w={key:0,class:"card-body"},N=f('<h2 class="card-title">New API token</h2><p>Set the token name and expiry date</p><div class="form-control"><input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs"><input type="text" placeholder="Expiry date" class="input input-bordered w-full max-w-xs"><p>Restrict the token scope :</p><label class="label cursor-pointer"><span class="label-text">full</span><input type="checkbox" class="toggle" checked></label><label class="label cursor-pointer"><span class="label-text">not implemented</span><input type="checkbox" class="toggle"></label><label class="label cursor-pointer"><span class="label-text">not implemented</span><input type="checkbox" class="toggle"></label></div>',3),C={key:1,class:"card-body"},S=e("span",{class:"loading loading-dots loading-md"},null,-1),j=[S],B={key:2,class:"card-body"},E=e("p",null,"Please keep this token in a safe place :",-1),A=y({__name:"api-keys",setup(P){const p=h(),t=s("input"),d=s(),u=s(""),b=s([]),c=s();async function _(){t.value="process";const{data:a,error:r}=await p.functions.invoke("token",{body:{name:u.value,expiry:d.value,scope:b.value}});console.log({data:a,error:r}),a&&(c.value=a.jwt,t.value="result")}async function k(){t.value="input",c.value=""}return(a,r)=>(n(),o(x,null,[v,e("div",g,[l(t)=="input"?(n(),o("div",w,[N,e("div",{class:"card-actions justify-end"},[e("button",{onClick:_,class:"btn btn-primary"},"Generate")])])):i("",!0),l(t)=="process"?(n(),o("div",C,j)):i("",!0),l(t)=="result"?(n(),o("div",B,[E,e("p",null,m(l(c)),1),e("div",{class:"card-actions justify-end"},[e("button",{onClick:k,class:"btn btn-primary"},"Done")])])):i("",!0)])],64))}});export{A as _};
