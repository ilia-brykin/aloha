import{A as m,a as S}from"./chunk.AlohaExample.ChxWiDiP.js";import{A as x}from"./chunk.AlohaTableProps.D8vLipvz.js";import{A as R}from"./chunk.AlohaTableTranslate.D2ze4alS.js";import{p as E,c as H,v as D,_ as r,g as J,A as K}from"./bundle.index.C2NUxb1F.js";import{f as Y}from"./chunk.vendor-lodash.DYgvgMhr.js";import{t as B,r as U,h as y,bn as j,k as n,J as d,aQ as i,H as u,O as a,N as P,a as f}from"./chunk.vendor.DTe1dwcY.js";import"./chunk.APageTabTitle.DIecKEHM.js";import"./chunk.AlohaHighlightjs.BnoxTF5z.js";import"./chunk.ATable.hE8M53xS.js";import"./chunk.translations-ar.BN5q-o8a.js";import"./chunk.translations-de.CbcaW5-6.js";import"./chunk.translations-en.D0gUYDYQ.js";import"./chunk.translations-es.CdQwNuNd.js";import"./chunk.translations-fr.DtMvhluH.js";import"./chunk.translations-hr.BYXQ86E6.js";import"./chunk.translations-it.B_ya8rE6.js";import"./chunk.translations-ru.CoPIOQIk.js";function v(t){const o=B(t,"textCopy"),c=U(void 0),{addNotification:p}=E();return{copyText:async()=>{var e;let _="";if(o.value?_=o.value:(e=c.value)!=null&&e.$el&&Y(c.value.$el.children,s=>{s.classList.contains("a_sr_only")||(_+=s.textContent)}),_)try{await navigator.clipboard.writeText(_),p({text:"_A_LINK_COPY_COPIED_TO_CLIPBOARD_"})}catch(s){console.error(s)}},linkRef:c}}const h={name:"ALinkCopy",props:{alwaysTranslate:{type:Boolean,required:!1},buttonOptions:{type:Object,required:!1,default:()=>({})},buttonPosition:{type:String,required:!1,default:"right",validator:t=>["right","left"].indexOf(t)!==-1},class:{type:[String,Object],required:!1,default:void 0},classDefault:{type:String,required:!1,default:"a_btn_group"},disabled:{type:Boolean,required:!1},linkOptions:{type:Object,required:!1,default:()=>({})},textCopy:{type:String,required:!1,default:void 0}},setup(){const{copyText:t,linkRef:o}=v();return{copyText:t,linkRef:o}},render(){var o,c;const t=y(H,{alwaysTranslate:this.alwaysTranslate,class:"a_btn a_btn_secondary",disabled:this.disabled,iconLeft:j,textScreenReader:"_A_LINK_COPY_BTN_TITLE_",title:"_A_LINK_COPY_BTN_TITLE_",onClick:this.copyText,...this.buttonOptions},(o=this.$slots)==null?void 0:o.button);return y("div",{class:[this.classDefault,this.class],role:"group"},[this.buttonPosition==="left"&&t,y(D,{ref:"linkRef",alwaysTranslate:this.alwaysTranslate,disabled:this.disabled,...this.linkOptions},(c=this.$slots)==null?void 0:c.link),this.buttonPosition==="right"&&t])}};function G(){return{codeHtml:`<a-link-copy
  :button-options="{ class: 'a_btn a_btn_primary', text: 'copy' }"
  :link-options="{ class: 'a_btn a_btn_primary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="github"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  :button-options="{ iconLeft: 'FloppyDisk' }"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function q(){return{codeJs:`import { 
  ALinkCopy,
} from "aloha-vue";
    
export default {
  name: "PageLinkCopyButtonOptions",
  components: {
    ALinkCopy,
  },
};`}}const w={name:"PageLinkCopyButtonOptions",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=G(),{codeJs:o}=q();return{codeHtml:t,codeJs:o}}};function F(t,o,c,p,l,_){const e=n("a-link-copy"),s=n("aloha-example");return u(),d(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_BUTTON_OPTIONS_HEADER_",description:"_A_LINK_COPY_GROUP_BUTTON_OPTIONS_DESCRIPTION_",props:"button-options"},{default:i(()=>[a(e,{"button-options":{class:"a_btn a_btn_primary",text:"copy"},"link-options":{class:"a_btn a_btn_primary",text:"https://github.com/",href:"https://github.com/"},"text-copy":"github"}),a(e,{class:"a_ml_2","button-options":{iconLeft:"FloppyDisk"},"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}})]),_:1},8,["code-html","code-js"])}const M=r(w,[["render",F]]);function X(){return{codeHtml:`<a-link-copy
  button-position="left"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  button-position="right"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function V(){return{codeJs:`import { 
  ALinkCopy,
} from "aloha-vue";
    
export default {
  name: "PageLinkCopyButtonPosition",
  components: {
    ALinkCopy,
  },
};`}}const Q={name:"PageLinkCopyButtonPosition",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=X(),{codeJs:o}=V();return{codeHtml:t,codeJs:o}}};function z(t,o,c,p,l,_){const e=n("a-link-copy"),s=n("aloha-example");return u(),d(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_BUTTON_POSITION_HEADER_",description:"_A_LINK_COPY_GROUP_BUTTON_POSITION_DESCRIPTION_",props:"button-position"},{default:i(()=>[a(e,{"button-position":"left","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}}),a(e,{class:"a_ml_2","button-position":"right","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}})]),_:1},8,["code-html","code-js"])}const W=r(Q,[["render",z]]);function Z(){return{codeHtml:`<a-link-copy
  class="a_btn_group_small"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>
<a-link-copy
  class="a_btn_group_large a_ml_2"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function tt(){return{codeJs:`import { 
  ALinkCopy,
} from "aloha-vue";
    
export default {
  name: "PageLinkCopyClass",
  components: {
    ALinkCopy,
  },
};`}}const ot={name:"PageLinkCopyClass",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=Z(),{codeJs:o}=tt();return{codeHtml:t,codeJs:o}}};function nt(t,o,c,p,l,_){const e=n("a-link-copy"),s=n("aloha-example");return u(),d(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_CLASS_HEADER_",description:"_A_LINK_COPY_GROUP_CLASS_DESCRIPTION_",props:"class"},{default:i(()=>[a(e,{class:"a_btn_group_small","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}}),a(e,{class:"a_btn_group_large a_ml_2","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}})]),_:1},8,["code-html","code-js"])}const et=r(ot,[["render",nt]]);function at(){return{codeHtml:`<a-link-copy
  :button-options="{ class: 'a_btn a_btn_secondary a_ml_3' }"
  class-default=""
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function st(){return{codeJs:`import { 
  ALinkCopy,
} from "aloha-vue";
    
export default {
  name: "PageLinkCopyClassDefault",
  components: {
    ALinkCopy,
  },
};`}}const ct={name:"PageLinkCopyClassDefault",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=at(),{codeJs:o}=st();return{codeHtml:t,codeJs:o}}};function _t(t,o,c,p,l,_){const e=n("a-link-copy"),s=n("aloha-example");return u(),d(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_CLASS_DEFAULT_HEADER_",description:"_A_LINK_COPY_GROUP_CLASS_DEFAULT_DESCRIPTION_",props:"class-default"},{default:i(()=>[a(e,{"button-options":{class:"a_btn a_btn_secondary a_ml_3"},"class-default":"","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}})]),_:1},8,["code-html","code-js"])}const pt=r(ct,[["render",_t]]);function it(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  :disabled="true"
></a-link-copy>`}}function lt(){return{codeJs:`import { 
  ALinkCopy,
} from "aloha-vue";
    
export default {
  name: "PageLinkCopyDisabled",
  components: {
    ALinkCopy,
  },
};`}}const rt={name:"PageLinkCopyDisabled",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=it(),{codeJs:o}=lt();return{codeHtml:t,codeJs:o}}};function dt(t,o,c,p,l,_){const e=n("a-link-copy"),s=n("aloha-example");return u(),d(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_DISABLED_HEADER_",description:"_A_LINK_COPY_GROUP_DISABLED_DESCRIPTION_",props:"disabled"},{default:i(()=>[a(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"},disabled:!0})]),_:1},8,["code-html","code-js"])}const ut=r(rt,[["render",dt]]);function mt(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`}}function ht(){return{codeJs:`import { 
  ALinkCopy,
} from "aloha-vue";
    
export default {
  name: "PageLinkCopyLinkOptions",
  components: {
    ALinkCopy,
  },
};`}}const yt={name:"PageLinkCopyLinkOptions",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=mt(),{codeJs:o}=ht();return{codeHtml:t,codeJs:o}}};function bt(t,o,c,p,l,_){const e=n("a-link-copy"),s=n("aloha-example");return u(),d(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_LINK_OPTIONS_HEADER_",description:"_A_LINK_COPY_GROUP_LINK_OPTIONS_DESCRIPTION_",props:"link-options"},{default:i(()=>[a(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}})]),_:1},8,["code-html","code-js"])}const ft=r(yt,[["render",bt]]);function Pt(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', href: 'https://github.com/' }"
>
  <template
    v-slot:button
  >
    <strong>copy</strong>
  </template>
</a-link-copy>`}}function kt(){return{codeJs:`import { 
  ALinkCopy,
} from "aloha-vue";
    
export default {
  name: "PageLinkCopySlotButton",
  components: {
    ALinkCopy,
  },
};`}}const gt={name:"PageLinkCopySlotButton",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=Pt(),{codeJs:o}=kt();return{codeHtml:t,codeJs:o}}};function Ot(t,o,c,p,l,_){const e=n("a-link-copy"),s=n("aloha-example");return u(),d(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_SLOT_BUTTON_HEADER_",description:"_A_LINK_COPY_GROUP_SLOT_BUTTON_DESCRIPTION_",slots:"button"},{default:i(()=>[a(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"}},{button:i(()=>o[0]||(o[0]=[P("strong",null,"copy",-1)])),_:1})]),_:1},8,["code-html","code-js"])}const Ct=r(gt,[["render",Ot]]);function Lt(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', href: 'https://github.com/' }"
>
  <template
    v-slot:link
  >
    <strong>github.com</strong>
  </template>
</a-link-copy>`}}function It(){return{codeJs:`import { 
  ALinkCopy,
} from "aloha-vue";
    
export default {
  name: "PageLinkCopySlotLink",
  components: {
    ALinkCopy,
  },
};`}}const At={name:"PageLinkCopySlotLink",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=Lt(),{codeJs:o}=It();return{codeHtml:t,codeJs:o}}};function Tt(t,o,c,p,l,_){const e=n("a-link-copy"),s=n("aloha-example");return u(),d(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_SLOT_LINK_HEADER_",description:"_A_LINK_COPY_GROUP_SLOT_LINK_DESCRIPTION_",slots:"link"},{default:i(()=>[a(e,{"link-options":{class:"a_btn a_btn_secondary",href:"https://github.com/"}},{link:i(()=>o[0]||(o[0]=[P("strong",null,"github.com",-1)])),_:1})]),_:1},8,["code-html","code-js"])}const Nt=r(At,[["render",Tt]]);function $t(){return{codeHtml:`<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="github"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="Aloha"
></a-link-copy>`}}function St(){return{codeJs:`import { 
  ALinkCopy,
} from "aloha-vue";
    
export default {
  name: "PageLinkCopyTextCopy",
  components: {
    ALinkCopy,
  },
};`}}const xt={name:"PageLinkCopyTextCopy",components:{ALinkCopy:h,AlohaExample:m},setup(){const{codeHtml:t}=$t(),{codeJs:o}=St();return{codeHtml:t,codeJs:o}}};function Rt(t,o,c,p,l,_){const e=n("a-link-copy"),s=n("aloha-example");return u(),d(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_LINK_COPY_GROUP_TEXT_COPY_HEADER_",description:"_A_LINK_COPY_GROUP_TEXT_COPY_DESCRIPTION_",props:"text-copy"},{default:i(()=>[a(e,{"link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"},"text-copy":"github"}),a(e,{class:"a_ml_2","link-options":{class:"a_btn a_btn_secondary",text:"https://github.com/",href:"https://github.com/"},"text-copy":"Aloha"})]),_:1},8,["code-html","code-js"])}const Et=r(xt,[["render",Rt]]);function Ht(){const t=f(()=>J({placeholder:"_A_LINK_COPY_COMPONENT_NAME_"}));return{pageTitle:f(()=>`ALinkCopy${t.value?` (${t.value})`:""}`)}}function Dt(){return{dataProps:[{name:"button-options",description:"_A_LINK_COPY_PROPS_BUTTON_OPTIONS_",type:"Object",default:"() => ({})",required:!1},{name:"button-position",description:"_A_LINK_COPY_PROPS_BUTTON_POSITION_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"class",description:"_A_LINK_COPY_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"class-default",description:"_A_LINK_COPY_PROPS_CLASS_DEFAULT_DESCRIPTION_",type:"String",default:"a_btn_group",required:!1},{name:"disabled",description:"_A_LINK_COPY_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"link-options",description:"_A_LINK_COPY_PROPS_LINK_OPTIONS_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"textCopy",description:"_A_LINK_COPY_PROPS_TEXT_COPY_DESCRIPTION_",type:"String",default:void 0,required:!1}]}}function Jt(){return{dataSlots:[{name:"button",description:"_A_LINK_COPY_SLOT_BUTTON_DESCRIPTION_"},{name:"link",description:"_A_LINK_COPY_SLOT_LINK_DESCRIPTION_"}]}}function Kt(){return{dataTranslate:["_A_LINK_COPY_BTN_TITLE_","_A_LINK_COPY_COPIED_TO_CLIPBOARD_"]}}const Yt={name:"PageLinkCopy",components:{AlohaPage:S,AlohaTableProps:x,AlohaTableTranslate:R,ATranslation:K,PageLinkCopyButtonOptions:M,PageLinkCopyButtonPosition:W,PageLinkCopyClass:et,PageLinkCopyClassDefault:pt,PageLinkCopyDisabled:ut,PageLinkCopyLinkOptions:ft,PageLinkCopySlotButton:Ct,PageLinkCopySlotLink:Nt,PageLinkCopyTextCopy:Et},setup(){const{pageTitle:t}=Ht(),{dataProps:o}=Dt(),{dataSlots:c}=Jt(),{dataTranslate:p}=Kt();return{dataProps:o,dataSlots:c,dataTranslate:p,pageTitle:t}}};function Bt(t,o,c,p,l,_){const e=n("a-translation"),s=n("page-link-copy-link-options"),k=n("page-link-copy-class"),g=n("page-link-copy-class-default"),O=n("page-link-copy-disabled"),C=n("page-link-copy-text-copy"),L=n("page-link-copy-button-options"),I=n("page-link-copy-button-position"),A=n("page-link-copy-slot-link"),T=n("page-link-copy-slot-button"),b=n("aloha-table-props"),N=n("aloha-table-translate"),$=n("aloha-page");return u(),d($,{"page-title":t.pageTitle},{body:i(()=>[a(e,{tag:"p",html:"_A_LINK_COPY_COMPONENT_DESCRIPTION_"}),a(s),a(k),a(g),a(O),a(C),a(L),a(I),a(A),a(T),a(b,{data:t.dataProps},null,8,["data"]),a(b,{"table-label":"Slots",data:t.dataSlots,columns:["name","description"]},null,8,["data"]),a(N,{data:t.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const eo=r(Yt,[["render",Bt]]);export{eo as default};