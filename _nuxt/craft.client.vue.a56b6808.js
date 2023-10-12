import{_ as Qe}from"./pdfview.vue.1658d4b0.js";import{_ as Xe}from"./icon.vue.a9f7bc1f.js";import{_ as Ze}from"./alert.vue.c2ddf374.js";import{_ as et}from"./main2.vue.00b432df.js";import{_ as tt}from"./result.vue.08d9e40e.js";import{_ as st}from"./Select.vue.0b70f222.js";import{_ as ot}from"./chooser.vue.d046899d.js";import{d as nt,E as at,a2 as it,r as i,M as I,N as Q,o as ct,b as d,c as y,e as t,g as u,K as s,t as m,F as xe,a1 as $e,n as k,Y as T,as as j,ao as M,L as x,f as $,w as X,O as lt,H as rt}from"./entry.1b7ba420.js";import{_ as dt}from"./debug-panel.vue.aa68d9bc.js";import ut from"./spinner.7c8bbc90.js";import{u as pt}from"./useToast.2a8aaca6.js";import{u as _t}from"./usePaxparAPI.0b4d6eb5.js";const mt={class:"flex-col p-2 m-2"},ft=t("input",{type:"checkbox",id:"preview-modal",class:"modal-toggle"},null,-1),ht={class:"modal"},vt={class:"modal-box w-11/12 max-w-5xl h-5/6"},gt=t("div",{class:"modal-action"},[t("label",{for:"preview-modal",class:"btn"},"Fermer")],-1),wt={class:"modal",id:"msg-modal"},bt={class:"modal-box"},yt={class:"font-bold text-lg"},kt=["innerHTML"],xt=t("div",{class:"modal-action"},[t("a",{href:"#",class:"btn"},"OK")],-1),$t={class:"flex flex-row"},Ct={class:"text-2xl"},St={class:"steps flex p-2 m-2"},Lt=["onClick"],Tt={class:"grow"},jt=["innerHTML"],zt=["innerHTML"],Ft=t("div",{id:"json_editor_form"},null,-1),Ot=["innerHTML"],Pt={key:1},At={class:"h-screen"},Et=["innerHTML"],Mt=t("h2",null,"Lors de la finalisation de mon document :",-1),Vt={class:"flex flex-wrap gap-3 m-4"},Ht={class:"btn btn-warning"},Ut=t("p",{class:"hidden lg:block"},"Annuler",-1),Dt=t("p",{class:"hidden lg:block"},"Prévisualiser",-1),Nt={class:"btn-group"},Bt=t("p",{class:"hidden lg:block"},"Précédent",-1),It=t("p",{class:"hidden lg:block"},"Suivant",-1),Rt=t("p",{class:"hidden lg:block"},"Finaliser",-1),qt={class:"form-control"},Kt={class:"label cursor-pointer"},Gt=t("span",{class:"label-text"},"showTemplateStep",-1),Jt=["checked"],Wt={class:"label cursor-pointer"},Yt=t("span",{class:"label-text"},"showCheckStep",-1),Qt=["checked"],Xt=t("h2",{class:"text-center text-white text-xl font-semibold"},"Génération...",-1),Zt=t("p",{class:"w-1/3 text-center text-white"}," Votre document est en cours de construction ",-1),R="m-5 text-lg",ps=nt({__name:"craft.client",props:{craft_id:{},craft:{}},async setup(Ce){let V,Z;const g=Ce;at({script:[{src:"https://cdn.jsdelivr.net/npm/@json-editor/json-editor@2.10.1/dist/jsoneditor.min.js",type:"text/javascript",async:!0}]});const q=pt(),{addAuthURL:ee,useFetchPP:H,getToken:Se}=_t(),te=([V,Z]=it(()=>Se()),V=await V,Z(),V),se=i(),z=i(),F=i(),Le={schema:{},disable_edit_json:!0,disable_properties:!0,no_additional_properties:!0,collapsed:!1,show_errors:"always",ajax:!0},c=i(""),f=I([]),U=i(),D=i(!1),oe=i(!1),ne=I([]),ae=i(0),Te=i("Message"),je=i("..."),N=i(!1),ie=i(!0),C=i(!1),ze=Q(()=>Object.keys(G).length==0),K=i(),G=I({}),p=I([]);var h=void 0;const J=i(),l=i(),b=i(!0);ct(async()=>{setTimeout(B,500)});async function Fe(e){const{data:o}=await H(`/api/craftform/${e}`);J.value=e,l.value=o.value}async function Oe(e){J.value=e.id,l.value=e}async function Pe(){g.craft_id!==void 0&&await Fe(g.craft_id),g.craft!==void 0&&await Oe(g.craft)}async function B(e,o){var _;e?l.value.craft_schema=e:await Pe(),C.value=l.value.checklist!=null;const a=(_=l.value)==null?void 0:_.craft_schema;if(h){const n=document.getElementById("json_editor_form");n.textContent=""}h=new JSONEditor(document.getElementById("json_editor_form"),{...Le,schema:a}),window.editor=h,h.on("ready",()=>{Object.assign(f,[{id:"10-drop",title:"Déposer"},{id:"20-form",title:"Saisir"},...He(),...Ae(),...Ee(),...Me(),{id:"90-finalize",title:"Finaliser"}]),p.slice(0),p.push(...f.map(n=>n.id)),typeof o<"u"?h.setValue(o):S(f[0]),h.on("change",()=>{b.value=!0})}),b.value=!1}function Ae(){const e=[];return C.value&&e.push({id:"70-check",title:"Vérifier"}),e}function Ee(){const e=[];return N.value&&e.push({id:"80-template",title:"Habiller"}),e}function Me(){const e=[];return ie.value&&e.push({id:"85-preview",title:"Visualiser"}),e}function Ve(e){const o=p.indexOf(e.id),a=p.indexOf(c.value);return o<=a?{"step-primary":!0}:{}}function He(){var o,a;const e=[];for(let _ of document.querySelectorAll("div[data-schemapath]")){const n=(o=_.attributes["data-schemapath"])==null?void 0:o.value;if(((a=_.attributes["data-schematype"])==null?void 0:a.value)=="object"&&(n.match(/\./g)||[]).length==1){const W=n.replace(/^(root\.)/,""),Y={id:n,title:W};e.push(Y)}}return e}function S(e){c.value=e.id;const o=p.indexOf(c.value);var a=0;for(let _ of p){const n=`div[data-schemapath="${_}"]`,P=document.querySelector(n);if(P){const w=P.parentElement;w&&(a==o?(w.hidden=!1,w.classList.remove("hidden")):(w.hidden=!0,w.classList.add("hidden")))}a+=1}}async function ce({factice:e}){D.value=!0,oe.value=!1;const o=h.getValue(),{data:a,error:_}=await H(`/api/craft/${g.craft_id}`,{method:"POST",body:{data_schema:o},params:{finalize:!e,options:ne.join(","),tmp_price:ae.value},toast:{success:{msg:e?"Document généré":"Document final généré"},error:{msg:"Erreur lors de la génération du document"}}});if(se.value=a.value,z.value=_.value,C.value===!0){const n=await H(`/api/pdf/check/${l.value.checklist}`,{method:"POST",body:{},params:{source_session:`craft/${J.value}/_output.pdf`},toast:{success:{msg:e?"Document vérifié":"Document final vérifié"},error:{msg:"Erreur lors de la vérification du document généré"}}});Object.assign(G,n.data.value)}D.value=!1}const Ue=Q(()=>{var e=p.indexOf(c.value);return e>0}),De=Q(()=>{var e=p.indexOf(c.value);return e+1<p.length});async function Ne(){var e=p.indexOf(c.value);e>0&&(e-=1,S(f[e]))}async function Be(){var e=p.indexOf(c.value);e+1<p.length&&(e+=1,S(f[e]))}async function O(){await ce({factice:!0}),await K.value.refresh(),b.value=!1}async function Ie(){if(c.value!=="90-finalize"){S(f[f.length-1]);return}await ce({factice:!1}),await qe({url:`/api/craft/${g.craft_id}/output.pdf`,label:"document.pdf"})}async function Re(){await U.value.reset(),await B(),S(f[0]),q.success("Formulaire initialisé !")}async function qe({url:e,label:o}){const{data:a}=await H(e,{responseType:"blob"}),_=new Blob([a.value],{type:"application/pdf"}),n=document.createElement("a");n.href=URL.createObjectURL(_),n.download=o,n.click(),URL.revokeObjectURL(n.href)}async function Ke(e){if(F.value=void 0,e.status=="accepted"){if(e.form_overload){const a={...h.getValue(),...e.form_overload};h.setValue(a)}if(e!=null&&e.extra_files&&await U.value.refresh(),e!=null&&e.craft_schema){const o=h.getValue();await B(e.craft_schema,o)}b.value=!0}e!=null&&e.msg&&(e.status=="accepted"?q.success(e.msg):q.error(e.msg))}async function Ge(e){F.value=e}return(e,o)=>{var le,re,de,ue,pe,_e,me,fe,he,ve,ge,we,be;const a=Qe,_=Xe,n=Ze,P=et,w=tt,W=st,Y=ot,L=lt,Je=rt,We=dt,Ye=ut;return d(),y("div",mt,[ft,t("div",ht,[t("div",vt,[u(a,{ref_key:"previewComponent",ref:K,url:s(ee)(`/api/craft/${e.craft_id}/output.pdf`,s(te)),nocache:""},null,8,["url"]),gt])]),t("div",wt,[t("div",bt,[t("h3",yt,m(s(Te)),1),t("p",{class:"py-4",innerHTML:s(je)},null,8,kt),xt])]),t("div",$t,[u(_,{def:((le=s(l))==null?void 0:le.image2)||((re=s(l))==null?void 0:re.image),class:"w-48"},null,8,["def"]),t("div",null,[t("p",Ct,m((de=s(l))==null?void 0:de.name),1),t("p",null,m((ue=s(l))==null?void 0:ue.desc),1)])]),t("ul",St,[(d(!0),y(xe,null,$e(s(f),r=>(d(),y("li",{key:r.id,class:k([Ve(r),"step grow"]),onClick:v=>S(r)},m(r.title),11,Lt))),128))]),T(t("div",Tt,[M(e.$slots,"10-drop",{},()=>{var r,v,A,E,ye,ke;return[t("div",{innerHTML:(A=(v=(r=s(l))==null?void 0:r.wizard)==null?void 0:v.messages)==null?void 0:A.step_drop_file,class:k(R)},null,8,jt),s(F)?(d(),x(n,{key:0,type:"error",msg:`${(ye=(E=s(F))==null?void 0:E.body)==null?void 0:ye.detail} (error ${(ke=s(F))==null?void 0:ke.status})`},null,8,["msg"])):$("",!0),u(P,{ref_key:"refdropfile",ref:U,uploadUrl:`/api/craft/file/${g.craft_id}`,sessionPath:`craft/${g.craft_id}`,onUploadSuccess:Ke,onUploadError:Ge},null,8,["uploadUrl","sessionPath"])]})],512),[[j,s(c)==="10-drop"]]),T(t("div",null,[t("div",{innerHTML:(me=(_e=(pe=s(l))==null?void 0:pe.wizard)==null?void 0:_e.messages)==null?void 0:me.step_input,class:k(R)},null,8,zt),Ft],512),[[j,s(c)==="20-form"||s(c).startsWith("root.")]]),T(t("div",null,[t("div",{innerHTML:(ve=(he=(fe=s(l))==null?void 0:fe.wizard)==null?void 0:he.messages)==null?void 0:ve.step_check,class:k(R)},null,8,Ot),M(e.$slots,"70-check",{},()=>[s(b)?(d(),x(n,{key:0,action:"Actualiser",onAction:O,msg:"Les données ont été modifiées, le contrôle n'est peut-être plus à jour."})):$("",!0),s(ze)?(d(),y("div",Pt,"Rien à vérifier.")):(d(),x(w,{key:2,node:s(G),show_root:!1,hide_modes_selector:!1,mode:"simple"},null,8,["node"]))])],512),[[j,s(c)==="70-check"]]),T(t("div",null,[M(e.$slots,"80-template",{},()=>{var r;return[(d(!0),y(xe,null,$e((r=s(l))==null?void 0:r.template_sets,v=>(d(),y("div",{key:v.id,class:"steps p-2 m-2 bg-blue-400"},[u(W,{template_set:v},null,8,["template_set"])]))),128))]})],512),[[j,s(c)==="80-template"]]),T(t("div",null,[M(e.$slots,"85-preview",{},()=>{var r,v,A,E;return[t("div",At,[!s(b)&&!s(z)?(d(),x(n,{key:0,type:"success",action:"Actualiser",onAction:O,msg:(r=s(se))==null?void 0:r.msg},null,8,["msg"])):$("",!0),s(b)?(d(),x(n,{key:1,action:"Actualiser",onAction:O,msg:"Les données ont été modifiées, le visuel n'est peut-être plus à jour."})):$("",!0),s(z)?(d(),x(n,{key:2,type:"error",action:"Actualiser",onAction:O,msg:`${(A=(v=s(z))==null?void 0:v.data)==null?void 0:A.detail} (error ${(E=s(z))==null?void 0:E.statusCode})`},null,8,["msg"])):$("",!0),u(a,{ref_key:"previewComponent",ref:K,url:s(ee)(`/api/craft/${e.craft_id}/output.pdf`,s(te)),nocache:""},null,8,["url"])])]})],512),[[j,s(c)==="85-preview"]]),T(t("div",null,[t("div",{innerHTML:(be=(we=(ge=s(l))==null?void 0:ge.wizard)==null?void 0:we.messages)==null?void 0:be.step_finalize,class:k(R)},null,8,Et),M(e.$slots,"90-finalize",{},()=>[Mt,u(Y)])],512),[[j,s(c)==="90-finalize"]]),t("div",Vt,[t("button",Ht,[u(Je,{to:"/gallery",noPrefetch:""},{default:X(()=>[u(L,{name:"mdi:keyboard-return",size:"36"})]),_:1})]),t("button",{onClick:Re,class:"btn btn-warning"},[u(L,{name:"mdi:backup-restore",size:"36"}),Ut]),s(ie)?$("",!0):(d(),y("button",{key:0,onClick:O,class:"btn gap-2"},[u(L,{name:"ic:outline-search",size:"36"}),Dt])),t("div",Nt,[t("button",{onClick:Ne,class:k(["btn btn-primary",s(Ue)?null:"btn-disabled"])},[u(L,{name:"ic:baseline-skip-previous",size:"36"}),Bt],2),t("button",{onClick:Be,class:k(["btn btn-primary",s(De)?null:"btn-disabled"])},[It,u(L,{name:"ic:baseline-skip-next",size:"36"})],2)]),t("button",{onClick:Ie,class:"btn btn-primary"},[u(L,{name:"ic:baseline-check-circle-outline",size:"36"}),Rt])]),u(We,{title:"components/wizard/main"},{default:X(()=>[t("p",null,"step : "+m(s(c)),1),t("p",null,"step_ids : "+m(s(p)),1),t("p",null,"steps : "+m(s(f)),1),t("p",null,"refdropfile : "+m(s(U)),1),t("p",null,"spinner_show : "+m(s(D)),1),t("p",null,"form_changed : "+m(s(oe)),1),t("p",null,"generate_options : "+m(s(ne)),1),t("p",null,"creditsTotal : "+m(s(ae)),1),t("button",{class:"btn",onClick:B},"init"),t("div",qt,[t("label",Kt,[Gt,t("input",{type:"checkbox",class:"toggle",checked:s(N),onClick:o[0]||(o[0]=r=>N.value=!s(N))},null,8,Jt)]),t("label",Wt,[Yt,t("input",{type:"checkbox",class:"toggle",checked:s(C),onClick:o[1]||(o[1]=r=>C.value=!s(C))},null,8,Qt)])])]),_:1}),s(D)?(d(),x(Ye,{key:0,ref:"spinner"},{default:X(()=>[Xt,Zt]),_:1},512)):$("",!0)])}}});export{ps as _};
