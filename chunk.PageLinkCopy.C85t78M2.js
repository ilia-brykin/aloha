import{A as m,a as S}from"./chunk.AlohaExample.A9Ef-QbL.js";import{A as x}from"./chunk.AlohaTableProps.CpO8HcfR.js";import{A as R}from"./chunk.AlohaTableTranslate.0W11qYzs.js";import{k as E,b as H,a0 as D,_ as r,g as J,A as K}from"./bundle.index.Dn7qpWjQ.js";import{f as Y}from"./chunk.vendor-lodash.Cgq9oNCy.js";import{t as B,r as U,h as y,bm as j,m as n,K as d,aK as p,J as u,P as s,O as f,a as b}from"./chunk.vendor.DQz1Isc4.js";import"./chunk.ATable.D_xPGUZc.js";import"./chunk.utilsMath.1mfWsA3R.js";import"./chunk.AForm.YXJwVyl2.js";import"./chunk.ADatepicker.CCF6HQX3.js";import"./chunk.UiMixinProps.BvCyZ1Ij.js";import"./chunk.AInputNumber.CRj1UTFu.js";import"./chunk.ATinymce.BwFOKtT3.js";import"./chunk.vendor-tinymce.cPIiul0H.js";function v(t){const o=B(t,"textCopy"),c=U(void 0),{addNotification:_}=E();return{copyText:async()=>{var e;let i="";if(o.value?i=o.value:(e=c.value)!=null&&e.$el&&Y(c.value.$el.children,a=>{a.classList.contains("a_sr_only")||(i+=a.textContent)}),i)try{await navigator.clipboard.writeText(i),_({text:"_A_LINK_COPY_COPIED_TO_CLIPBOARD_"})}catch(a){console.error(a)}},linkRef:c}}const h={name:"ALinkCopy",props:{alwaysTranslate:{type:Boolean,required:!1},buttonOptions:{type:Object,required:!1,default:()=>({})},buttonPosition:{type:String,required:!1,default:"right",validator:t=>["right","left"].indexOf(t)!==-1},class:{type:[String,Object],required:!1,default:void 0},classDefault:{type:String,required:!1,default:"a_btn_group"},disabled:{type:Boolean,required:!1},linkOptions:{type:Object,required:!1,default:()=>({})},textCopy:{type:String,required:!1,default:void 0}},setup(){const{copyText:t,linkRef:o}=v();return{copyText:t,linkRef:o}},render(){var o,c;const t=y(H,{alwaysTranslate:this.alwaysTranslate,class:"a_btn a_btn_secondary",disabled:this.disabled,iconLeft:j,textScreenReader:"_A_LINK_COPY_BTN_TITLE_",title:"_A_LINK_COPY_BTN_TITLE_",onClick:this.copyText,...this.buttonOptions},(o=this.$slots)==null?void 0:o.button);return y("div",{class:[this.classDefault,this.class],role:"group"},[this.buttonPosition==="left"&&t,y(D,{ref:"linkRef",alwaysTranslate:this.alwaysTranslate,disabled:this.disabled,...this.linkOptions},(c=this.$slots)==null?void 0:c.link),this.buttonPosition==="right"&&t])}};function G(){return{codeHtml:`<a-link-copy
  :button-options="{ class: 'a_btn a_btn_primary', text: 'copy' }"
  :link-options="{ class: 'a_btn a_btn_primary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="github"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  :button-options="{ iconLeft: 'FloppyDisk' }"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function q(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyButtonOptions",
  components: {
    ALinkCopy,
  },
};`}}const w={name:"PageLinkCopyButtonOptions",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=G(),{codeJs:o}=q();return{codeHtml:t,codeJs:o}}};function F(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_BUTTON_OPTIONS_HEADER_",description:"_A_LINK_COPY_GROUP_BUTTON_OPTIONS_DESCRIPTION_",props:"button-options"},{default:p(()=>[s(e,{"button-options":{class:"a_btn a_btn_primary",text:"copy"},"link-options":{class:"a_btn a_btn_primary",text:"https://github.com/",href:"https://github.com/"},"text-copy":"github"},null,8,["link-options"]),s(e,{class:"a_ml_2","button-options":{iconLeft:"FloppyDisk"},"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},null,8,["link-options"])]),_:1},8,["code-html","code-js"])}const M=r(w,[["render",F]]);function X(){return{codeHtml:`<a-link-copy
  button-position="left"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  button-position="right"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function V(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyButtonPosition",
  components: {
    ALinkCopy,
  },
};`}}const z={name:"PageLinkCopyButtonPosition",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=X(),{codeJs:o}=V();return{codeHtml:t,codeJs:o}}};function Q(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_BUTTON_POSITION_HEADER_",description:"_A_LINK_COPY_GROUP_BUTTON_POSITION_DESCRIPTION_",props:"button-position"},{default:p(()=>[s(e,{"button-position":"left","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},null,8,["link-options"]),s(e,{class:"a_ml_2","button-position":"right","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},null,8,["link-options"])]),_:1},8,["code-html","code-js"])}const W=r(z,[["render",Q]]);function Z(){return{codeHtml:`<a-link-copy
  class="a_btn_group_small"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>
<a-link-copy
  class="a_btn_group_large a_ml_2"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function tt(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyClass",
  components: {
    ALinkCopy,
  },
};`}}const ot={name:"PageLinkCopyClass",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=Z(),{codeJs:o}=tt();return{codeHtml:t,codeJs:o}}};function nt(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_CLASS_HEADER_",description:"_A_LINK_COPY_GROUP_CLASS_DESCRIPTION_",props:"class"},{default:p(()=>[s(e,{class:"a_btn_group_small","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},null,8,["link-options"]),s(e,{class:"a_btn_group_large a_ml_2","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},null,8,["link-options"])]),_:1},8,["code-html","code-js"])}const et=r(ot,[["render",nt]]);function st(){return{codeHtml:`<a-link-copy
  :button-options="{ class: 'a_btn a_btn_secondary a_ml_3' }"
  class-default=""
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function at(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyClassDefault",
  components: {
    ALinkCopy,
  },
};`}}const ct={name:"PageLinkCopyClassDefault",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=st(),{codeJs:o}=at();return{codeHtml:t,codeJs:o}}};function it(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_CLASS_DEFAULT_HEADER_",description:"_A_LINK_COPY_GROUP_CLASS_DEFAULT_DESCRIPTION_",props:"class-default"},{default:p(()=>[s(e,{"button-options":{class:"a_btn a_btn_secondary a_ml_3"},"class-default":"","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},null,8,["link-options"])]),_:1},8,["code-html","code-js"])}const _t=r(ct,[["render",it]]);function pt(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  :disabled="true"
></a-link-copy>`}}function lt(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyDisabled",
  components: {
    ALinkCopy,
  },
};`}}const rt={name:"PageLinkCopyDisabled",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=pt(),{codeJs:o}=lt();return{codeHtml:t,codeJs:o}}};function dt(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_DISABLED_HEADER_",description:"_A_LINK_COPY_GROUP_DISABLED_DESCRIPTION_",props:"disabled"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"},disabled:!0},null,8,["link-options"])]),_:1},8,["code-html","code-js"])}const ut=r(rt,[["render",dt]]);function mt(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function ht(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyLinkOptions",
  components: {
    ALinkCopy,
  },
};`}}const yt={name:"PageLinkCopyLinkOptions",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=mt(),{codeJs:o}=ht();return{codeHtml:t,codeJs:o}}};function kt(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_LINK_OPTIONS_HEADER_",description:"_A_LINK_COPY_GROUP_LINK_OPTIONS_DESCRIPTION_",props:"link-options"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},null,8,["link-options"])]),_:1},8,["code-html","code-js"])}const bt=r(yt,[["render",kt]]);function ft(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', href: 'https://github.com/' }"
>
  <template
    v-slot:button
  >
    <strong>copy</strong>
  </template>
</a-link-copy>`}}function Pt(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopySlotButton",
  components: {
    ALinkCopy,
  },
};`}}const Ct={name:"PageLinkCopySlotButton",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=ft(),{codeJs:o}=Pt();return{codeHtml:t,codeJs:o}}},gt=f("strong",null,"copy",-1);function Lt(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_SLOT_BUTTON_HEADER_",description:"_A_LINK_COPY_GROUP_SLOT_BUTTON_DESCRIPTION_",slots:"button"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},{button:p(()=>[gt]),_:1},8,["link-options"])]),_:1},8,["code-html","code-js"])}const Ot=r(Ct,[["render",Lt]]);function At(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', href: 'https://github.com/' }"
>
  <template
    v-slot:link
  >
    <strong>github.com</strong>
  </template>
</a-link-copy>`}}function It(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopySlotLink",
  components: {
    ALinkCopy,
  },
};`}}const Tt={name:"PageLinkCopySlotLink",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=At(),{codeJs:o}=It();return{codeHtml:t,codeJs:o}}},Nt=f("strong",null,"github.com",-1);function $t(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_SLOT_LINK_HEADER_",description:"_A_LINK_COPY_GROUP_SLOT_LINK_DESCRIPTION_",slots:"link"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",href:"https://github.com/"}},{link:p(()=>[Nt]),_:1},8,["link-options"])]),_:1},8,["code-html","code-js"])}const St=r(Tt,[["render",$t]]);function xt(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="github"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="Aloha"
></a-link-copy>`}}function Rt(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyTextCopy",
  components: {
    ALinkCopy,
  },
};`}}const Et={name:"PageLinkCopyTextCopy",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=xt(),{codeJs:o}=Rt();return{codeHtml:t,codeJs:o}}};function Ht(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_TEXT_COPY_HEADER_",description:"_A_LINK_COPY_GROUP_TEXT_COPY_DESCRIPTION_",props:"text-copy"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"},"text-copy":"github"},null,8,["link-options"]),s(e,{class:"a_ml_2","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"},"text-copy":"Aloha"},null,8,["link-options"])]),_:1},8,["code-html","code-js"])}const Dt=r(Et,[["render",Ht]]);function Jt(){const t=b(()=>J({placeholder:"_A_LINK_COPY_COMPONENT_NAME_"}));return{pageTitle:b(()=>`ALinkCopy${t.value?` (${t.value})`:""}`)}}function Kt(){return{dataProps:[{name:"button-options",description:"_A_LINK_COPY_PROPS_BUTTON_OPTIONS_",type:"Object",default:"() => ({})",required:!1},{name:"button-position",description:"_A_LINK_COPY_PROPS_BUTTON_POSITION_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"class",description:"_A_LINK_COPY_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"class-default",description:"_A_LINK_COPY_PROPS_CLASS_DEFAULT_DESCRIPTION_",type:"String",default:"a_btn_group",required:!1},{name:"disabled",description:"_A_LINK_COPY_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"link-options",description:"_A_LINK_COPY_PROPS_LINK_OPTIONS_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"textCopy",description:"_A_LINK_COPY_PROPS_TEXT_COPY_DESCRIPTION_",type:"String",default:void 0,required:!1}]}}function Yt(){return{dataSlots:[{name:"button",description:"_A_LINK_COPY_SLOT_BUTTON_DESCRIPTION_"},{name:"link",description:"_A_LINK_COPY_SLOT_LINK_DESCRIPTION_"}]}}function Bt(){return{dataTranslate:["_A_LINK_COPY_BTN_TITLE_","_A_LINK_COPY_COPIED_TO_CLIPBOARD_"]}}const Ut={name:"PageLinkCopy",components:{AlohaPage:S,AlohaTableProps:x,AlohaTableTranslate:R,ATranslation:K,PageLinkCopyButtonOptions:M,PageLinkCopyButtonPosition:W,PageLinkCopyClass:et,PageLinkCopyClassDefault:_t,PageLinkCopyDisabled:ut,PageLinkCopyLinkOptions:bt,PageLinkCopySlotButton:Ot,PageLinkCopySlotLink:St,PageLinkCopyTextCopy:Dt},setup(){const{pageTitle:t}=Jt(),{dataProps:o}=Kt(),{dataSlots:c}=Yt(),{dataTranslate:_}=Bt();return{dataProps:o,dataSlots:c,dataTranslate:_,pageTitle:t}}};function jt(t,o,c,_,l,i){const e=n("a-translation"),a=n("page-link-copy-link-options"),P=n("page-link-copy-class"),C=n("page-link-copy-class-default"),g=n("page-link-copy-disabled"),L=n("page-link-copy-text-copy"),O=n("page-link-copy-button-options"),A=n("page-link-copy-button-position"),I=n("page-link-copy-slot-link"),T=n("page-link-copy-slot-button"),k=n("aloha-table-props"),N=n("aloha-table-translate"),$=n("aloha-page");return u(),d($,{"page-title":t.pageTitle},{body:p(()=>[s(e,{tag:"p",html:"_A_LINK_COPY_COMPONENT_DESCRIPTION_"}),s(a),s(P),s(C),s(g),s(L),s(O),s(A),s(I),s(T),s(k,{data:t.dataProps},null,8,["data"]),s(k,{"table-label":"Slots",data:t.dataSlots,columns:["name","description"]},null,8,["data"]),s(N,{data:t.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const no=r(Ut,[["render",jt]]);export{no as default};
