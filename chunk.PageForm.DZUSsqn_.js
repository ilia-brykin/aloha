import{L as s,_ as r}from"./bundle.index.C2NUxb1F.js";import{k as n,M as u,N as e,O as i,aQ as t,aR as d,H as p}from"./chunk.vendor.DTe1dwcY.js";import"./chunk.vendor-lodash.DYgvgMhr.js";import"./chunk.translations-ar.BN5q-o8a.js";import"./chunk.translations-de.CbcaW5-6.js";import"./chunk.translations-en.D0gUYDYQ.js";import"./chunk.translations-es.CdQwNuNd.js";import"./chunk.translations-fr.DtMvhluH.js";import"./chunk.translations-hr.BYXQ86E6.js";import"./chunk.translations-it.B_ya8rE6.js";import"./chunk.translations-ru.CoPIOQIk.js";const A={name:"PageForm",components:{AForm:s},data(){return{model:{alohadate:"2023-01-10",aloha_textarea:"dsffd",aloha71:!0,aloha72:!1},selectData:[{label:"Aloha 1",id:"aloha_1",group:"group 1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3",group:"group 1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 6",id:"aloha_6",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7",id:"aloha_7",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8",id:"aloha_8"}],errors:void 0}},computed:{data(){return[{type:"textarea",label:"Aloha tiny",id:"aloha_textarea",classColumn:"a_column a_column_8",required:!0,disabled:!0},{type:"color",label:"Aloha Color",id:"alohaColor",classColumn:"a_column_8",required:!0},{type:"text",label:"Aloha 1",id:"aloha1",classColumn:"a_column_8",required:!0,isHide:!0},{type:"number",label:"Aloha 1",id:"aloha1_number",classColumn:"a_column_3",step:.01,required:!0},{type:"date",label:"Aloha date",id:"alohadate",classColumn:"a_column_8",required:!0},{type:"file",label:"Aloha File",id:"alohaFile",classColumn:"a_column_8",required:!0},{type:"file",label:"Aloha File Multiple",id:"alohaFileMultiple",classColumn:"a_column_8",required:!0,isMultiple:!0},{type:"text",label:"Aloha 2",id:"aloha2",classColumn:"a_column_4",helpText:"ALOHA help!!!"},{type:"select",label:"Aloha 3",id:"aloha3",classColumn:"a_column_5",keyId:"id",keyLabel:"label",search:!0,keyGroup:"group",data:this.selectData,helpText:"ALOHA help!!!",change:this.changeAloha},{type:"text",label:"Aloha 4",id:"aloha4",classColumn:"a_column_4",dependencies:[{id:"aloha3",value:"aloha_1"}]},{type:"text",label:"Aloha 5",id:"aloha5",classColumn:"a_column_4",dependencies:{id:"aloha3",value:"aloha_2"}},{type:"textarea",label:"Aloha 6",id:"aloha6",classColumn:"a_column_12",helpText:"ALOHA help!!!"},{type:"switch",label:"Aloha 7",id:"aloha7",classColumn:"a_column_5",helpText:"ALOHA help!!!",disabled:!1},{type:"switch",label:"Aloha 71",id:"aloha71",classColumn:"a_column_5",helpText:"ALOHA help!!!",disabled:!0},{type:"switch",label:"Aloha 72",id:"aloha72",classColumn:"a_column_5",helpText:"ALOHA help!!!",disabled:!0},{type:"oneCheckbox",label:"Aloha 8",id:"aloha8",classColumn:"a_column_5",helpText:"ALOHA help!!!"},{type:"checkbox",label:"Aloha 9",id:"aloha9",classColumn:"a_column_6",keyId:"id",keyLabel:"label",data:this.selectData,helpText:"ALOHA help!!!"},{type:"radio",label:"Aloha 10",id:"aloha10",classColumn:"a_column_6",keyId:"id",keyLabel:"label",data:this.selectData,helpText:"ALOHA help!!!"},{type:"fieldset",label:"Aloha 11",id:"aloha11",classColumn:"a_column_8",helpText:"ALOHA help!!!",children:[{type:"text",label:"Aloha 12",id:"aloha12",classColumn:"a_column_4"},{type:"text",label:"Aloha 13",id:"aloha13",classColumn:"a_column_8"},{type:"fieldset",label:"Aloha fieldset",id:"aloha111",classColumn:"a_column_8",helpText:"ALOHA help!!!",children:[{type:"text",label:"Aloha 12",id:"aloha122",classColumn:"a_column_4"},{type:"text",label:"Aloha 13",id:"aloha132",classColumn:"a_column_8"}]}]},{type:"fieldset",id:"aloha112",classColumn:"a_column_8",inputClass:"a_p_0",helpText:"fieldset without border",hasBorder:!1,children:[{type:"text",label:"Aloha 12",id:"aloha122",classColumn:"a_column_4"},{type:"text",label:"Aloha 13",id:"aloha132",classColumn:"a_column_8"}]},{type:"group",id:"group1",helpText:"group text",children:[{type:"text",label:"Group text",labelClass:"a_column_4 a_text_right",id:"group_text",classColumn:"a_column_4"},{type:"switch",label:"Group switch",id:"group_switch",classColumn:"a_column_4",labelClass:"a_sr_only",helpText:"ALOHA help!!!"}]},{type:"template",id:"aloha14",classColumn:"a_column_8",html:"<strong>TEMPLATE</strong>"},{type:"text",label:"test.test.test",id:"test.test.test",required:!0}]}},methods:{validate(){const l="Example invalid text";this.errors={aloha_tiny:[l],aloha1:[l,l],aloha2:[l],aloha3:[l],aloha4:[l],aloha5:[l],aloha6:[l],aloha7:[l],aloha8:[l],aloha9:[l],aloha10:[l],aloha11:[l],aloha12:[l],aloha13:[l]}},reset(){this.errors=void 0},changeAloha(l){console.log("arg",l)}}};function m(l,a,_,c,b,y){const h=n("a-form");return p(),u("div",null,[a[5]||(a[5]=e("h1",null,"AForm",-1)),e("button",{class:"a_btn a_btn_primary",type:"button",onClick:a[0]||(a[0]=(...o)=>l.validate&&l.validate(...o))},"Validation"),e("button",{class:"a_btn a_btn_secondary a_ml_2",type:"button",onClick:a[1]||(a[1]=(...o)=>l.reset&&l.reset(...o))},"Reset"),i(h,{modelValue:l.model,"onUpdate:modelValue":a[2]||(a[2]=o=>l.model=o),data:l.data,errors:l.errors,"id-prefix":"test_"},{formPrepend:t(()=>a[3]||(a[3]=[e("div",null,[e("strong",null,'SLOT "formPrepend"')],-1)])),formAppend:t(()=>a[4]||(a[4]=[e("div",null,[e("strong",null,'SLOT "formAppend"')],-1)])),_:1},8,["modelValue","data","errors"]),a[6]||(a[6]=e("br",null,null,-1)),e("pre",null,d(l.model),1)])}const w=r(A,[["render",m]]);export{w as default};