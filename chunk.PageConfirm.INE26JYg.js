import{i as m,E as a,j as l,_ as p}from"./bundle.index.8Q71sPSv.js";import{N as f,O as i,J as c}from"./chunk.vendor.64oIaR0X.js";import"./chunk.vendor-lodash.LcYqUmOZ.js";import"./chunk.vendor-tinymce.BwLm5pZR.js";const u={name:"PageConfirm",components:{AModal:m},setup(){const{closeConfirm:n,openConfirm:o}=l(),t=()=>{console.log("save"),n()};return{openConfirmLocal:()=>{o({headerText:"Aloha",bodyHtml:"<div>Aloha <strong>Hola</strong></div>",save:t,close:()=>{console.log("close")},selectorClose:"#btn_confirm"})},openConfirmWithTimeout:()=>{o({headerText:"Aloha",bodyHtml:"<div>Aloha <strong>Hola</strong></div>",save:t,selectorClose:"#btn_confirm_timeout"}),setTimeout(()=>{a.$emit("closeModalConfirm")},5e3)}}}};function C(n,o,t,r,s,d){return c(),f("div",null,[o[2]||(o[2]=i("h1",null,"AConfirm",-1)),i("button",{class:"a_btn a_btn_primary",id:"btn_confirm",type:"button",onClick:o[0]||(o[0]=(...e)=>n.openConfirmLocal&&n.openConfirmLocal(...e))},"Open confirm"),i("button",{class:"a_btn a_btn_primary",id:"btn_confirm_timeout",type:"button",onClick:o[1]||(o[1]=(...e)=>n.openConfirmWithTimeout&&n.openConfirmWithTimeout(...e))},"Open confirm with timeout")])}const A=p(u,[["render",C]]);export{A as default};
