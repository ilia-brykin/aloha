import{A as m,a as S}from"./chunk.AlohaExample.CyUlGLtF.js";import{A as x}from"./chunk.AlohaTableProps.pdFwqyjt.js";import{A as R}from"./chunk.AlohaTableTranslate.DnfbcPPl.js";import{k as E,b as H,a0 as D,_ as r,g as J,A as K}from"./bundle.index.nIhxAj4P.js";import{f as Y}from"./chunk.vendor-lodash.ClBXVCWL.js";import{t as B,r as U,h as y,m as n,C as d,L as p,B as u,G as s,F as f,a as b}from"./chunk.vendor.D-Y3mz6a.js";import"./chunk.ATable.CQRSk7Vg.js";import"./chunk.utilsMath.7PmiGUbm.js";import"./chunk.AForm.DQGeW1Bh.js";import"./chunk.ADatepicker.CgTK6HZB.js";import"./chunk.UiMixinProps.BVfs3aDc.js";import"./chunk.AInputNumber.ehw7dUaS.js";import"./chunk.ATinymce.CED0CXMl.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";function j(t){const o=B(t,"textCopy"),c=U(void 0),{addNotification:_}=E();return{copyText:async()=>{var e;let i="";if(o.value?i=o.value:(e=c.value)!=null&&e.$el&&Y(c.value.$el.children,a=>{a.classList.contains("a_sr_only")||(i+=a.textContent)}),i)try{await navigator.clipboard.writeText(i),_({text:"_A_LINK_COPY_COPIED_TO_CLIPBOARD_"})}catch(a){console.error(a)}},linkRef:c}}const h={name:"ALinkCopy",props:{alwaysTranslate:{type:Boolean,required:!1},buttonOptions:{type:Object,required:!1,default:()=>({})},buttonPosition:{type:String,required:!1,default:"right",validator:t=>["right","left"].indexOf(t)!==-1},class:{type:[String,Object],required:!1,default:void 0},classDefault:{type:String,required:!1,default:"a_btn_group"},disabled:{type:Boolean,required:!1},linkOptions:{type:Object,required:!1,default:()=>({})},textCopy:{type:String,required:!1,default:void 0}},setup(){const{copyText:t,linkRef:o}=j();return{copyText:t,linkRef:o}},render(){var o,c;const t=y(H,{alwaysTranslate:this.alwaysTranslate,class:"a_btn a_btn_secondary",disabled:this.disabled,iconLeft:"Files",textScreenReader:"_A_LINK_COPY_BTN_TITLE_",title:"_A_LINK_COPY_BTN_TITLE_",onClick:this.copyText,...this.buttonOptions},(o=this.$slots)==null?void 0:o.button);return y("div",{class:[this.classDefault,this.class],role:"group"},[this.buttonPosition==="left"&&t,y(D,{ref:"linkRef",alwaysTranslate:this.alwaysTranslate,disabled:this.disabled,...this.linkOptions},(c=this.$slots)==null?void 0:c.link),this.buttonPosition==="right"&&t])}};function v(){return{codeHtml:`<a-link-copy
  :button-options="{ class: 'a_btn a_btn_primary', text: 'copy' }"
  :link-options="{ class: 'a_btn a_btn_primary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="github"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  :button-options="{ iconLeft: 'FloppyDisk' }"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function G(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyButtonOptions",
  components: {
    ALinkCopy,
  },
};`}}const q={name:"PageLinkCopyButtonOptions",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=v(),{codeJs:o}=G();return{codeHtml:t,codeJs:o}}};function w(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_BUTTON_OPTIONS_HEADER_",description:"_A_LINK_COPY_GROUP_BUTTON_OPTIONS_DESCRIPTION_",props:"button-options"},{default:p(()=>[s(e,{"button-options":{class:"a_btn a_btn_primary",text:"copy"},"link-options":{class:"a_btn a_btn_primary",text:"https://github.com/",href:"https://github.com/"},"text-copy":"github"},null,8,["link-options"]),s(e,{class:"a_ml_2","button-options":{iconLeft:"FloppyDisk"},"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},null,8,["link-options"])]),_:1},8,["code-html","code-js"])}const F=r(q,[["render",w]]);function M(){return{codeHtml:`<a-link-copy
  button-position="left"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  button-position="right"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function X(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyButtonPosition",
  components: {
    ALinkCopy,
  },
};`}}const V={name:"PageLinkCopyButtonPosition",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=M(),{codeJs:o}=X();return{codeHtml:t,codeJs:o}}};function z(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_BUTTON_POSITION_HEADER_",description:"_A_LINK_COPY_GROUP_BUTTON_POSITION_DESCRIPTION_",props:"button-position"},{default:p(()=>[s(e,{"button-position":"left","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},null,8,["link-options"]),s(e,{class:"a_ml_2","button-position":"right","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},null,8,["link-options"])]),_:1},8,["code-html","code-js"])}const Q=r(V,[["render",z]]);function W(){return{codeHtml:`<a-link-copy
  class="a_btn_group_small"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>
<a-link-copy
  class="a_btn_group_large a_ml_2"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function Z(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyClass",
  components: {
    ALinkCopy,
  },
};`}}const tt={name:"PageLinkCopyClass",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=W(),{codeJs:o}=Z();return{codeHtml:t,codeJs:o}}};function ot(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_CLASS_HEADER_",description:"_A_LINK_COPY_GROUP_CLASS_DESCRIPTION_",props:"class"},{default:p(()=>[s(e,{class:"a_btn_group_small","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},null,8,["link-options"]),s(e,{class:"a_btn_group_large a_ml_2","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},null,8,["link-options"])]),_:1},8,["code-html","code-js"])}const nt=r(tt,[["render",ot]]);function et(){return{codeHtml:`<a-link-copy
  :button-options="{ class: 'a_btn a_btn_secondary a_ml_3' }"
  class-default=""
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function st(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyClassDefault",
  components: {
    ALinkCopy,
  },
};`}}const at={name:"PageLinkCopyClassDefault",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=et(),{codeJs:o}=st();return{codeHtml:t,codeJs:o}}};function ct(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_CLASS_DEFAULT_HEADER_",description:"_A_LINK_COPY_GROUP_CLASS_DEFAULT_DESCRIPTION_",props:"class-default"},{default:p(()=>[s(e,{"button-options":{class:"a_btn a_btn_secondary a_ml_3"},"class-default":"","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},null,8,["link-options"])]),_:1},8,["code-html","code-js"])}const it=r(at,[["render",ct]]);function _t(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  :disabled="true"
></a-link-copy>`}}function pt(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyDisabled",
  components: {
    ALinkCopy,
  },
};`}}const lt={name:"PageLinkCopyDisabled",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=_t(),{codeJs:o}=pt();return{codeHtml:t,codeJs:o}}};function rt(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_DISABLED_HEADER_",description:"_A_LINK_COPY_GROUP_DISABLED_DESCRIPTION_",props:"disabled"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"},disabled:!0},null,8,["link-options"])]),_:1},8,["code-html","code-js"])}const dt=r(lt,[["render",rt]]);function ut(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function mt(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyLinkOptions",
  components: {
    ALinkCopy,
  },
};`}}const ht={name:"PageLinkCopyLinkOptions",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=ut(),{codeJs:o}=mt();return{codeHtml:t,codeJs:o}}};function yt(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_LINK_OPTIONS_HEADER_",description:"_A_LINK_COPY_GROUP_LINK_OPTIONS_DESCRIPTION_",props:"link-options"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},null,8,["link-options"])]),_:1},8,["code-html","code-js"])}const kt=r(ht,[["render",yt]]);function bt(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', href: 'https://github.com/' }"
>
  <template
    v-slot:button
  >
    <strong>copy</strong>
  </template>
</a-link-copy>`}}function ft(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopySlotButton",
  components: {
    ALinkCopy,
  },
};`}}const Pt={name:"PageLinkCopySlotButton",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=bt(),{codeJs:o}=ft();return{codeHtml:t,codeJs:o}}},Ct=f("strong",null,"copy",-1);function gt(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_SLOT_BUTTON_HEADER_",description:"_A_LINK_COPY_GROUP_SLOT_BUTTON_DESCRIPTION_",slots:"button"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},{button:p(()=>[Ct]),_:1},8,["link-options"])]),_:1},8,["code-html","code-js"])}const Lt=r(Pt,[["render",gt]]);function Ot(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', href: 'https://github.com/' }"
>
  <template
    v-slot:link
  >
    <strong>github.com</strong>
  </template>
</a-link-copy>`}}function At(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopySlotLink",
  components: {
    ALinkCopy,
  },
};`}}const It={name:"PageLinkCopySlotLink",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=Ot(),{codeJs:o}=At();return{codeHtml:t,codeJs:o}}},Tt=f("strong",null,"github.com",-1);function Nt(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_SLOT_LINK_HEADER_",description:"_A_LINK_COPY_GROUP_SLOT_LINK_DESCRIPTION_",slots:"link"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",href:"https://github.com/"}},{link:p(()=>[Tt]),_:1},8,["link-options"])]),_:1},8,["code-html","code-js"])}const $t=r(It,[["render",Nt]]);function St(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="github"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="Aloha"
></a-link-copy>`}}function xt(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyTextCopy",
  components: {
    ALinkCopy,
  },
};`}}const Rt={name:"PageLinkCopyTextCopy",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=St(),{codeJs:o}=xt();return{codeHtml:t,codeJs:o}}};function Et(t,o,c,_,l,i){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_TEXT_COPY_HEADER_",description:"_A_LINK_COPY_GROUP_TEXT_COPY_DESCRIPTION_",props:"text-copy"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"},"text-copy":"github"},null,8,["link-options"]),s(e,{class:"a_ml_2","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"},"text-copy":"Aloha"},null,8,["link-options"])]),_:1},8,["code-html","code-js"])}const Ht=r(Rt,[["render",Et]]);function Dt(){const t=b(()=>J({placeholder:"_A_LINK_COPY_COMPONENT_NAME_"}));return{pageTitle:b(()=>`ALinkCopy${t.value?` (${t.value})`:""}`)}}function Jt(){return{dataProps:[{name:"button-options",description:"_A_LINK_COPY_PROPS_BUTTON_OPTIONS_",type:"Object",default:"() => ({})",required:!1},{name:"button-position",description:"_A_LINK_COPY_PROPS_BUTTON_POSITION_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"class",description:"_A_LINK_COPY_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"class-default",description:"_A_LINK_COPY_PROPS_CLASS_DEFAULT_DESCRIPTION_",type:"String",default:"a_btn_group",required:!1},{name:"disabled",description:"_A_LINK_COPY_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"link-options",description:"_A_LINK_COPY_PROPS_LINK_OPTIONS_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"textCopy",description:"_A_LINK_COPY_PROPS_TEXT_COPY_DESCRIPTION_",type:"String",default:void 0,required:!1}]}}function Kt(){return{dataSlots:[{name:"button",description:"_A_LINK_COPY_SLOT_BUTTON_DESCRIPTION_"},{name:"link",description:"_A_LINK_COPY_SLOT_LINK_DESCRIPTION_"}]}}function Yt(){return{dataTranslate:["_A_LINK_COPY_BTN_TITLE_","_A_LINK_COPY_COPIED_TO_CLIPBOARD_"]}}const Bt={name:"PageLinkCopy",components:{AlohaPage:S,AlohaTableProps:x,AlohaTableTranslate:R,ATranslation:K,PageLinkCopyButtonOptions:F,PageLinkCopyButtonPosition:Q,PageLinkCopyClass:nt,PageLinkCopyClassDefault:it,PageLinkCopyDisabled:dt,PageLinkCopyLinkOptions:kt,PageLinkCopySlotButton:Lt,PageLinkCopySlotLink:$t,PageLinkCopyTextCopy:Ht},setup(){const{pageTitle:t}=Dt(),{dataProps:o}=Jt(),{dataSlots:c}=Kt(),{dataTranslate:_}=Yt();return{dataProps:o,dataSlots:c,dataTranslate:_,pageTitle:t}}};function Ut(t,o,c,_,l,i){const e=n("a-translation"),a=n("page-link-copy-link-options"),P=n("page-link-copy-class"),C=n("page-link-copy-class-default"),g=n("page-link-copy-disabled"),L=n("page-link-copy-text-copy"),O=n("page-link-copy-button-options"),A=n("page-link-copy-button-position"),I=n("page-link-copy-slot-link"),T=n("page-link-copy-slot-button"),k=n("aloha-table-props"),N=n("aloha-table-translate"),$=n("aloha-page");return u(),d($,{"page-title":t.pageTitle},{body:p(()=>[s(e,{tag:"p",html:"_A_LINK_COPY_COMPONENT_DESCRIPTION_"}),s(a),s(P),s(C),s(g),s(L),s(O),s(A),s(I),s(T),s(k,{data:t.dataProps},null,8,["data"]),s(k,{"table-label":"Slots",data:t.dataSlots,columns:["name","description"]},null,8,["data"]),s(N,{data:t.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const oo=r(Bt,[["render",Ut]]);export{oo as default};
