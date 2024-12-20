import{A as m,a as S}from"./chunk.AlohaExample.BLz9gN2Z.js";import{A as x}from"./chunk.AlohaTableProps.BjadU66y.js";import{A as R}from"./chunk.AlohaTableTranslate.BYCMwae4.js";import{k as E,b as H,Z as D,_ as r,g as J,A as K}from"./bundle.index.DdISXs5g.js";import{f as Y}from"./chunk.vendor-lodash.-viuv_rg.js";import{t as B,r as U,h as y,bl as j,k as n,J as d,aJ as p,H as u,O as s,N as f,a as b}from"./chunk.vendor.Ca3-nzbX.js";import"./chunk.ATable.D_Vt9HVL.js";import"./chunk.utilsMath.DoITS5e9.js";import"./chunk.AForm.Co8MwwF3.js";import"./chunk.ADatepicker.BTkrfBVR.js";import"./chunk.UiMixinProps.SXpQQH-L.js";import"./chunk.AInputNumber.GFn6WRJ1.js";function v(t){const o=B(t,"textCopy"),c=U(void 0),{addNotification:i}=E();return{copyText:async()=>{var e;let _="";if(o.value?_=o.value:(e=c.value)!=null&&e.$el&&Y(c.value.$el.children,a=>{a.classList.contains("a_sr_only")||(_+=a.textContent)}),_)try{await navigator.clipboard.writeText(_),i({text:"_A_LINK_COPY_COPIED_TO_CLIPBOARD_"})}catch(a){console.error(a)}},linkRef:c}}const h={name:"ALinkCopy",props:{alwaysTranslate:{type:Boolean,required:!1},buttonOptions:{type:Object,required:!1,default:()=>({})},buttonPosition:{type:String,required:!1,default:"right",validator:t=>["right","left"].indexOf(t)!==-1},class:{type:[String,Object],required:!1,default:void 0},classDefault:{type:String,required:!1,default:"a_btn_group"},disabled:{type:Boolean,required:!1},linkOptions:{type:Object,required:!1,default:()=>({})},textCopy:{type:String,required:!1,default:void 0}},setup(){const{copyText:t,linkRef:o}=v();return{copyText:t,linkRef:o}},render(){var o,c;const t=y(H,{alwaysTranslate:this.alwaysTranslate,class:"a_btn a_btn_secondary",disabled:this.disabled,iconLeft:j,textScreenReader:"_A_LINK_COPY_BTN_TITLE_",title:"_A_LINK_COPY_BTN_TITLE_",onClick:this.copyText,...this.buttonOptions},(o=this.$slots)==null?void 0:o.button);return y("div",{class:[this.classDefault,this.class],role:"group"},[this.buttonPosition==="left"&&t,y(D,{ref:"linkRef",alwaysTranslate:this.alwaysTranslate,disabled:this.disabled,...this.linkOptions},(c=this.$slots)==null?void 0:c.link),this.buttonPosition==="right"&&t])}};function G(){return{codeHtml:`<a-link-copy
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
};`}}const w={name:"PageLinkCopyButtonOptions",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=G(),{codeJs:o}=q();return{codeHtml:t,codeJs:o}}};function F(t,o,c,i,l,_){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_BUTTON_OPTIONS_HEADER_",description:"_A_LINK_COPY_GROUP_BUTTON_OPTIONS_DESCRIPTION_",props:"button-options"},{default:p(()=>[s(e,{"button-options":{class:"a_btn a_btn_primary",text:"copy"},"link-options":{class:"a_btn a_btn_primary",text:"https://github.com/",href:"https://github.com/"},"text-copy":"github"}),s(e,{class:"a_ml_2","button-options":{iconLeft:"FloppyDisk"},"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}})]),_:1},8,["code-html","code-js"])}const M=r(w,[["render",F]]);function X(){return{codeHtml:`<a-link-copy
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
};`}}const Z={name:"PageLinkCopyButtonPosition",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=X(),{codeJs:o}=V();return{codeHtml:t,codeJs:o}}};function z(t,o,c,i,l,_){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_BUTTON_POSITION_HEADER_",description:"_A_LINK_COPY_GROUP_BUTTON_POSITION_DESCRIPTION_",props:"button-position"},{default:p(()=>[s(e,{"button-position":"left","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}}),s(e,{class:"a_ml_2","button-position":"right","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}})]),_:1},8,["code-html","code-js"])}const Q=r(Z,[["render",z]]);function W(){return{codeHtml:`<a-link-copy
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
};`}}const ot={name:"PageLinkCopyClass",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=W(),{codeJs:o}=tt();return{codeHtml:t,codeJs:o}}};function nt(t,o,c,i,l,_){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_CLASS_HEADER_",description:"_A_LINK_COPY_GROUP_CLASS_DESCRIPTION_",props:"class"},{default:p(()=>[s(e,{class:"a_btn_group_small","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}}),s(e,{class:"a_btn_group_large a_ml_2","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}})]),_:1},8,["code-html","code-js"])}const et=r(ot,[["render",nt]]);function st(){return{codeHtml:`<a-link-copy
  :button-options="{ class: 'a_btn a_btn_secondary a_ml_3' }"
  class-default=""
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function at(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyClassDefault",
  components: {
    ALinkCopy,
  },
};`}}const ct={name:"PageLinkCopyClassDefault",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=st(),{codeJs:o}=at();return{codeHtml:t,codeJs:o}}};function _t(t,o,c,i,l,_){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_CLASS_DEFAULT_HEADER_",description:"_A_LINK_COPY_GROUP_CLASS_DEFAULT_DESCRIPTION_",props:"class-default"},{default:p(()=>[s(e,{"button-options":{class:"a_btn a_btn_secondary a_ml_3"},"class-default":"","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}})]),_:1},8,["code-html","code-js"])}const it=r(ct,[["render",_t]]);function pt(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  :disabled="true"
></a-link-copy>`}}function lt(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyDisabled",
  components: {
    ALinkCopy,
  },
};`}}const rt={name:"PageLinkCopyDisabled",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=pt(),{codeJs:o}=lt();return{codeHtml:t,codeJs:o}}};function dt(t,o,c,i,l,_){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_DISABLED_HEADER_",description:"_A_LINK_COPY_GROUP_DISABLED_DESCRIPTION_",props:"disabled"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"},disabled:!0})]),_:1},8,["code-html","code-js"])}const ut=r(rt,[["render",dt]]);function mt(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function ht(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyLinkOptions",
  components: {
    ALinkCopy,
  },
};`}}const yt={name:"PageLinkCopyLinkOptions",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=mt(),{codeJs:o}=ht();return{codeHtml:t,codeJs:o}}};function kt(t,o,c,i,l,_){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_LINK_OPTIONS_HEADER_",description:"_A_LINK_COPY_GROUP_LINK_OPTIONS_DESCRIPTION_",props:"link-options"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}})]),_:1},8,["code-html","code-js"])}const bt=r(yt,[["render",kt]]);function ft(){return{codeHtml:`<a-link-copy
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
};`}}const Ct={name:"PageLinkCopySlotButton",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=ft(),{codeJs:o}=Pt();return{codeHtml:t,codeJs:o}}};function gt(t,o,c,i,l,_){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_SLOT_BUTTON_HEADER_",description:"_A_LINK_COPY_GROUP_SLOT_BUTTON_DESCRIPTION_",slots:"button"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},{button:p(()=>o[0]||(o[0]=[f("strong",null,"copy",-1)])),_:1})]),_:1},8,["code-html","code-js"])}const Lt=r(Ct,[["render",gt]]);function Ot(){return{codeHtml:`<a-link-copy
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
};`}}const It={name:"PageLinkCopySlotLink",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=Ot(),{codeJs:o}=At();return{codeHtml:t,codeJs:o}}};function Tt(t,o,c,i,l,_){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_SLOT_LINK_HEADER_",description:"_A_LINK_COPY_GROUP_SLOT_LINK_DESCRIPTION_",slots:"link"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",href:"https://github.com/"}},{link:p(()=>o[0]||(o[0]=[f("strong",null,"github.com",-1)])),_:1})]),_:1},8,["code-html","code-js"])}const Nt=r(It,[["render",Tt]]);function $t(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="github"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="Aloha"
></a-link-copy>`}}function St(){return{codeJs:`import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyTextCopy",
  components: {
    ALinkCopy,
  },
};`}}const xt={name:"PageLinkCopyTextCopy",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=$t(),{codeJs:o}=St();return{codeHtml:t,codeJs:o}}};function Rt(t,o,c,i,l,_){const e=n("a-link-copy"),a=n("aloha-example");return u(),d(a,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_TEXT_COPY_HEADER_",description:"_A_LINK_COPY_GROUP_TEXT_COPY_DESCRIPTION_",props:"text-copy"},{default:p(()=>[s(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"},"text-copy":"github"}),s(e,{class:"a_ml_2","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"},"text-copy":"Aloha"})]),_:1},8,["code-html","code-js"])}const Et=r(xt,[["render",Rt]]);function Ht(){const t=b(()=>J({placeholder:"_A_LINK_COPY_COMPONENT_NAME_"}));return{pageTitle:b(()=>`ALinkCopy${t.value?` (${t.value})`:""}`)}}function Dt(){return{dataProps:[{name:"button-options",description:"_A_LINK_COPY_PROPS_BUTTON_OPTIONS_",type:"Object",default:"() => ({})",required:!1},{name:"button-position",description:"_A_LINK_COPY_PROPS_BUTTON_POSITION_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"class",description:"_A_LINK_COPY_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"class-default",description:"_A_LINK_COPY_PROPS_CLASS_DEFAULT_DESCRIPTION_",type:"String",default:"a_btn_group",required:!1},{name:"disabled",description:"_A_LINK_COPY_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"link-options",description:"_A_LINK_COPY_PROPS_LINK_OPTIONS_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"textCopy",description:"_A_LINK_COPY_PROPS_TEXT_COPY_DESCRIPTION_",type:"String",default:void 0,required:!1}]}}function Jt(){return{dataSlots:[{name:"button",description:"_A_LINK_COPY_SLOT_BUTTON_DESCRIPTION_"},{name:"link",description:"_A_LINK_COPY_SLOT_LINK_DESCRIPTION_"}]}}function Kt(){return{dataTranslate:["_A_LINK_COPY_BTN_TITLE_","_A_LINK_COPY_COPIED_TO_CLIPBOARD_"]}}const Yt={name:"PageLinkCopy",components:{AlohaPage:S,AlohaTableProps:x,AlohaTableTranslate:R,ATranslation:K,PageLinkCopyButtonOptions:M,PageLinkCopyButtonPosition:Q,PageLinkCopyClass:et,PageLinkCopyClassDefault:it,PageLinkCopyDisabled:ut,PageLinkCopyLinkOptions:bt,PageLinkCopySlotButton:Lt,PageLinkCopySlotLink:Nt,PageLinkCopyTextCopy:Et},setup(){const{pageTitle:t}=Ht(),{dataProps:o}=Dt(),{dataSlots:c}=Jt(),{dataTranslate:i}=Kt();return{dataProps:o,dataSlots:c,dataTranslate:i,pageTitle:t}}};function Bt(t,o,c,i,l,_){const e=n("a-translation"),a=n("page-link-copy-link-options"),P=n("page-link-copy-class"),C=n("page-link-copy-class-default"),g=n("page-link-copy-disabled"),L=n("page-link-copy-text-copy"),O=n("page-link-copy-button-options"),A=n("page-link-copy-button-position"),I=n("page-link-copy-slot-link"),T=n("page-link-copy-slot-button"),k=n("aloha-table-props"),N=n("aloha-table-translate"),$=n("aloha-page");return u(),d($,{"page-title":t.pageTitle},{body:p(()=>[s(e,{tag:"p",html:"_A_LINK_COPY_COMPONENT_DESCRIPTION_"}),s(a),s(P),s(C),s(g),s(L),s(O),s(A),s(I),s(T),s(k,{data:t.dataProps},null,8,["data"]),s(k,{"table-label":"Slots",data:t.dataSlots,columns:["name","description"]},null,8,["data"]),s(N,{data:t.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Qt=r(Yt,[["render",Bt]]);export{Qt as default};
