import{S as u,T as A,A as _,j as g,_ as P}from"./bundle.index.CW6wq-G7.js";import{d,W as h,Z as o,e as s,aS as x,V as y}from"./chunk.vendor.DOoIAE1K.js";import{Y as k}from"./chunk.vendor-lodash.BAE3VvPy.js";import{A as C}from"./chunk.AList.Ur8PTiGr.js";function I(){const e={ACheckbox:{name:"PageCheckbox"},AInput:{name:"PageInput"},AInputCurrency:{name:"PageInputCurrency"},ADatepicker:{name:"PageDatepicker"},ADatepickerRange:{name:"PageDatepickerRange"},AInputFile:void 0,AInputNumber:{name:"PageInputNumber"},AInputNumberRange:{name:"PageInputNumberRange"},AJson:{name:"PageJson"},AMultiselectOrdered:{name:"PageMultiselectOrdered"},AOneCheckbox:{name:"PageOneCheckbox"},ARadio:{name:"PageRadio"},ARouterLinkConfig:{name:"PageRouterLinkConfig"},ASelect:{name:"PageSelect"},ASwitch:{name:"PageSwitch"},ATemplate:{name:"PageTemplate"},ATextarea:{name:"PageTextarea"},AFieldset:{name:"PageFieldset"},AGroup:""};return{types:d(()=>{const t=[];return k.forEach({...A,...u},(a,r)=>{const p={type:e[a.name]?"link":"text",to:e[a.name],text:r};t.push(p)}),t})}}const f={name:"AlohaFormTypes",components:{AElement:g,AList:C,ATranslation:_},setup(){const{types:e}=I();return{types:e}}};function T(e,m,t,a,r,p){const c=s("a-translation"),i=s("a-element"),l=s("a-list");return y(),h("div",null,[o(c,{tag:"h2",html:"_A_UI_TYPES_FOR_USE_"}),o(l,{class:"a_list_without_styles",data:e.types},{listItem:x(({item:n})=>[o(i,{text:n.text,to:n.to,type:n.type},null,8,["text","to","type"])]),_:1},8,["data"])])}const F=P(f,[["render",T]]);export{F as A};
