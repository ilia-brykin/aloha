import{i as s,E as a,j as l,_ as p}from"./bundle.index.TDRGJtdO.js";import{M as f,N as i,H as c}from"./chunk.vendor.Ca3-nzbX.js";import"./chunk.vendor-lodash.-viuv_rg.js";import"./chunk.translations-ar.CGH9gktb.js";import"./chunk.translations-de.S4PF1KYg.js";import"./chunk.translations-en.Ck05aPwN.js";import"./chunk.translations-es.CN4IYWAw.js";import"./chunk.translations-fr.CCwWtZH3.js";import"./chunk.translations-hr.C7fo1LlO.js";import"./chunk.translations-it.BFH_rAJL.js";import"./chunk.translations-ru.C3zXigta.js";const u={name:"PageConfirm",components:{AModal:s},setup(){const{closeConfirm:t,openConfirm:o}=l(),n=()=>{console.log("save"),t()};return{openConfirmLocal:()=>{o({headerText:"Aloha",bodyHtml:"<div>Aloha <strong>Hola</strong></div>",save:n,close:()=>{console.log("close")},selectorClose:"#btn_confirm"})},openConfirmWithTimeout:()=>{o({headerText:"Aloha",bodyHtml:"<div>Aloha <strong>Hola</strong></div>",save:n,selectorClose:"#btn_confirm_timeout"}),setTimeout(()=>{a.$emit("closeModalConfirm")},5e3)}}}};function C(t,o,n,r,m,d){return c(),f("div",null,[o[2]||(o[2]=i("h1",null,"AConfirm",-1)),i("button",{class:"a_btn a_btn_primary",id:"btn_confirm",type:"button",onClick:o[0]||(o[0]=(...e)=>t.openConfirmLocal&&t.openConfirmLocal(...e))},"Open confirm"),i("button",{class:"a_btn a_btn_primary",id:"btn_confirm_timeout",type:"button",onClick:o[1]||(o[1]=(...e)=>t.openConfirmWithTimeout&&t.openConfirmWithTimeout(...e))},"Open confirm with timeout")])}const B=p(u,[["render",C]]);export{B as default};
