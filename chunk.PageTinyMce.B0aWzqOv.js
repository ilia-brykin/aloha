import{A as d}from"./chunk.ATinymce.BwFOKtT3.js";import{m as i,N as r,P as m,O as o,aL as a,J as s}from"./chunk.vendor.DQz1Isc4.js";import{_ as u}from"./bundle.index.Dn7qpWjQ.js";import"./chunk.UiMixinProps.BvCyZ1Ij.js";import"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.vendor-tinymce.cPIiul0H.js";const p={name:"PageTinyMce",components:{ATinymce:d},data(){return{model1:"aloha",model2:"hola"}},created(){setTimeout(()=>{this.model2="Aloha"},1e3)}},c=o("h1",null,"ATinymce",-1),y=o("h2",null,"Input",-1),V=o("h2",null,"Input",-1);function f(e,l,h,T,A,_){const n=i("a-tinymce");return s(),r("div",null,[c,y,m(n,{id:"input1",modelValue:e.model1,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model1=t),type:"text",label:"ATinymce 1",required:!0},null,8,["modelValue"]),o("div",null,"model1: "+a(e.model1),1),V,m(n,{id:"input2",modelValue:e.model2,"onUpdate:modelValue":l[1]||(l[1]=t=>e.model2=t),type:"text",label:"ATinymce 2",required:!0},null,8,["modelValue"]),o("div",null,"model2: "+a(e.model2),1)])}const b=u(p,[["render",f]]);export{b as default};