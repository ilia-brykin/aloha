import{A as m}from"./chunk.AInputNumber.D7-F2j3f.js";import{m as r,N as s,P as d,O as o,aL as u,J as i}from"./chunk.vendor.DQz1Isc4.js";import{_ as p}from"./bundle.index.Cv6dkyGa.js";import"./chunk.UiMixinProps.BvCyZ1Ij.js";import"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.utilsMath.1mfWsA3R.js";import"./chunk.vendor-tinymce.cPIiul0H.js";const a={name:"PageInputNumber",components:{AInputNumber:m},data(){return{model1:10,model2:123,model3:321,model4:432}},methods:{changeModel1(e){console.log("arg",e)}}},f=o("h1",null,"Input number",-1),b=o("h2",null,'type "number"',-1),g=o("h2",null,'type "integerNonNegative"',-1),V=o("h2",null,'type "integerPositive"',-1),y=o("h2",null,'type "integer"',-1),v=o("input",{type:"number"},null,-1),N=o("button",{class:"a_btn a_btn_primary"},"Temp",-1);function I(e,l,_,h,P,q){const n=r("a-input-number");return i(),s("div",null,[f,b,d(n,{id:"input1",modelValue:e.model1,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model1=t),type:"number",label:"Input langeeeeeeeeeeeeeeeeeee textdffdgfdgdsfdsfdsfdsfdsfdsfsdfsfdd",required:!0,step:2,errors:"not valid"},null,8,["modelValue"]),o("div",null,"model1: "+u(e.model1),1),g,d(n,{id:"input2",modelValue:e.model2,"onUpdate:modelValue":l[1]||(l[1]=t=>e.model2=t),type:"integerNonNegative",label:"Input 2",required:!0,step:2,disabled:!0},null,8,["modelValue"]),o("div",null,"model2: "+u(e.model2),1),V,d(n,{id:"input3",modelValue:e.model3,"onUpdate:modelValue":l[2]||(l[2]=t=>e.model3=t),type:"integerPositive",label:"Input 3",required:!0,step:3,"controls-type":"none"},null,8,["modelValue"]),o("div",null,"model3: "+u(e.model3),1),y,d(n,{id:"input4",modelValue:e.model4,"onUpdate:modelValue":l[3]||(l[3]=t=>e.model4=t),type:"integer",label:"Input 4",required:!0,step:4},null,8,["modelValue"]),o("div",null,"model4: "+u(e.model4),1),v,N])}const E=p(a,[["render",I]]);export{E as default};
