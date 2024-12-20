import{A as p,a as D}from"./chunk.AlohaExample.DJmek8S2.js";import{A as C}from"./chunk.AlohaTableProps.Dg3ZyLMk.js";import{A as U}from"./chunk.AShowMore.BgcyEQPl.js";import{A as l,_ as c,g as v}from"./bundle.index.BNDXU1qV.js";import{k as o,J as i,aJ as s,H as A,N as u,O as a,aL as f,a as R}from"./chunk.vendor.z3GIbCk9.js";import"./chunk.vendor-lodash.C_VDyCZ-.js";import"./chunk.ATable.Dyg6RlFe.js";import"./chunk.utilsMath.Ch_ZSUE4.js";import"./chunk.AForm.BvR5IxMG.js";import"./chunk.ADatepicker.CV7iQEiu.js";import"./chunk.UiMixinProps.C6KoMHL_.js";import"./chunk.AInputNumber.BDT4S_uW.js";function B(){return{codeHtml:`<a-translation
  tag="button"
  class="a_btn a_btn_secondary"
  aria-label="_SHOW_MORE_"
>+</a-translation>`}}function G(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationAriaLabel",
  components: {
    ATranslation,
  },
};`}}const X={name:"PageTranslationAriaLabel",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=B(),{codeJs:e}=G();return{codeHtml:t,codeJs:e}}},y={class:"a_columns a_columns_count_12"},W={class:"a_column a_column_4 a_column_12_tablet"};function F(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_ARIA_LABEL_HEADER_",description:"_A_TRANSLATION_GROUP_ARIA_LABEL_DESCRIPTION_"},{default:s(()=>[u("div",y,[u("div",W,[a(n,{class:"a_btn a_btn_secondary",tag:"button","aria-label":"_A_TRANSLATION_SHOW_MORE_"},{default:s(()=>e[0]||(e[0]=[f("+")])),_:1})])])]),_:1},8,["code-html","code-js"])}const k=c(X,[["render",F]]);function q(){return{codeHtml:`<a-translation
  text="_SHOW_MORE_"
></a-translation>`}}function w(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationBasic",
  components: {
    ATranslation,
  },
};`}}const V={name:"PageTranslationBasic",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=q(),{codeJs:e}=w();return{codeHtml:t,codeJs:e}}};function Y(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_BASIC_USAGE_",props:"text"},{default:s(()=>[a(n,{text:"_A_TRANSLATION_SHOW_MORE_"})]),_:1},8,["code-html","code-js"])}const z=c(V,[["render",Y]]);function K(){return{codeHtml:`<a-translation
  :html="'_A_TRANSLATION_EXAMPLE_EXTRA_{{aloha}}_{{a}}_{{b}}_'"
  :extra="{ aloha: 'ALOHA', a: 10, b: 123 }"
></a-translation>`}}function Q(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationExtra",
  components: {
    ATranslation,
  },
};`}}const Z={name:"PageTranslationExtra",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=K(),{codeJs:e}=Q();return{codeHtml:t,codeJs:e}}},tt={class:"a_columns a_columns_count_12"},et={class:"a_column a_column_4 a_column_12_tablet"};function ot(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_EXTRA_HEADER_",description:"_A_TRANSLATION_GROUP_EXTRA_DESCRIPTION_"},{default:s(()=>[u("div",tt,[u("div",et,[a(n,{html:"_A_TRANSLATION_EXAMPLE_EXTRA_{{aloha}}_{{a}}_{{b}}_",extra:{aloha:"ALOHA",a:10,b:123}})])])]),_:1},8,["code-html","code-js"])}const at=c(Z,[["render",ot]]);function nt(){return{codeHtml:`<a-translation
  html="_A_TRANSLATION_EXAMPLE_HTML_"
></a-translation>`}}function _t(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationHtml",
  components: {
    ATranslation,
  },
  // "_A_TRANSLATION_EXAMPLE_HTML_": "<button class='a_btn a_btn_primary' onclick='alert("Aloha")'>Aloha</button>",
};`}}const st={name:"PageTranslationHtml",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=nt(),{codeJs:e}=_t();return{codeHtml:t,codeJs:e}}};function rt(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_HTML_HEADER_",description:"_A_TRANSLATION_GROUP_HTML_DESCRIPTION_",props:"html"},{default:s(()=>[a(n,{html:"_A_TRANSLATION_EXAMPLE_HTML_"})]),_:1},8,["code-html","code-js"])}const lt=c(st,[["render",rt]]);function ct(){return{codeHtml:`<a-translation
  html="_A_TRANSLATION_EXAMPLE_HTML_"
  text-before="$ "
  text-after=" €"
></a-translation>`}}function it(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationHtmlAfterBefore",
  components: {
    ATranslation,
  },
  // "_A_TRANSLATION_EXAMPLE_HTML_": "<button class='a_btn a_btn_primary' onclick='alert("Aloha")'>Aloha</button>",
};`}}const At={name:"PageTranslationHtmlAfterBefore",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=ct(),{codeJs:e}=it();return{codeHtml:t,codeJs:e}}};function dt(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_HTML_AFTER_BEFORE_HEADER_",description:"_A_TRANSLATION_GROUP_HTML_AFTER_BEFORE_DESCRIPTION_",props:["html","text-after","text-before"]},{default:s(()=>[a(n,{html:"_A_TRANSLATION_EXAMPLE_HTML_","text-before":"$ ","text-after":" €"})]),_:1},8,["code-html","code-js"])}const mt=c(At,[["render",dt]]);function Tt(){return{codeHtml:`<a-translation
  tag="input"
  placeholder="_SHOW_MORE_"
></a-translation>`}}function pt(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationPlaceholder",
  components: {
    ATranslation,
  },
};`}}const ut={name:"PageTranslationPlaceholder",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=Tt(),{codeJs:e}=pt();return{codeHtml:t,codeJs:e}}};function ft(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_PLACEHOLDER_HEADER_",description:"_A_TRANSLATION_GROUP_PLACEHOLDER_DESCRIPTION_",props:["tag","placeholder"]},{default:s(()=>[a(n,{tag:"input",placeholder:"_A_TRANSLATION_SHOW_MORE_"})]),_:1},8,["code-html","code-js"])}const Ot=c(ut,[["render",ft]]);function Rt(){return{codeHtml:`<a-translation
  safe-html="_A_TRANSLATION_EXAMPLE_HTML_"
></a-translation>`}}function Nt(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationSafeHtml",
  components: {
    ATranslation,
  },
  // "_A_TRANSLATION_EXAMPLE_HTML_": "<button class='a_btn a_btn_primary' onclick='alert("Aloha")'>Aloha</button>",
};`}}const Pt={name:"PageTranslationSafeHtml",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=Rt(),{codeJs:e}=Nt();return{codeHtml:t,codeJs:e}}};function ht(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_SAFE_HTML_HEADER_",description:"_A_TRANSLATION_GROUP_SAFE_HTML_DESCRIPTION_",props:"safe-html"},{default:s(()=>[a(n,{"safe-html":"_A_TRANSLATION_EXAMPLE_HTML_"})]),_:1},8,["code-html","code-js"])}const Et=c(Pt,[["render",ht]]);function It(){return{codeHtml:`<a-translation
  text-before="+ "
  text-after=" -"
>Aloha</a-translation>`}}function St(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationSlotDefault",
  components: {
    ATranslation,
  },
};`}}const Ht={name:"PageTranslationSlotDefault",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=It(),{codeJs:e}=St();return{codeHtml:t,codeJs:e}}},$t={class:"a_columns a_columns_count_12"},Lt={class:"a_column a_column_4 a_column_12_tablet"};function gt(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_SLOT_DEFAULT_HEADER_",description:"_A_TRANSLATION_GROUP_SLOT_DEFAULT_DESCRIPTION_"},{default:s(()=>[u("div",$t,[u("div",Lt,[a(n,{"text-before":"+ ","text-after":" -"},{default:s(()=>e[0]||(e[0]=[f("Aloha")])),_:1})])])]),_:1},8,["code-html","code-js"])}const xt=c(Ht,[["render",gt]]);function bt(){return{codeHtml:`<a-translation
  text="_SHOW_MORE_"
  text-after=" *(Aloha)"
></a-translation>`}}function Jt(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationTextAfter",
  components: {
    ATranslation,
  },
};`}}const Mt={name:"PageTranslationTextAfter",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=bt(),{codeJs:e}=Jt();return{codeHtml:t,codeJs:e}}};function jt(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TEXT_AFTER_HEADER_",description:"_A_TRANSLATION_GROUP_TEXT_AFTER_DESCRIPTION_",props:"text-after"},{default:s(()=>[a(n,{text:"_A_TRANSLATION_SHOW_MORE_","text-after":" *(Aloha)"})]),_:1},8,["code-html","code-js"])}const Dt=c(Mt,[["render",jt]]);function Ct(){return{codeHtml:`<a-translation
  text="_A_TRANSLATION_SHOW_MORE_"
  text-after=" (Text After)"
  text-before="(Text before) "
></a-translation>`}}function Ut(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationTextAfterBefore",
  components: {
    ATranslation,
  },
};`}}const vt={name:"PageTranslationTextAfterBefore",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=Ct(),{codeJs:e}=Ut();return{codeHtml:t,codeJs:e}}};function Bt(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TEXT_AFTER_BEFORE_HEADER_",description:"_A_TRANSLATION_GROUP_TEXT_AFTER_BEFORE_DESCRIPTION_",props:["text-after","text-before"]},{default:s(()=>[a(n,{text:"_A_TRANSLATION_SHOW_MORE_","text-after":" (Text After)","text-before":"(Text before) "})]),_:1},8,["code-html","code-js"])}const Gt=c(vt,[["render",Bt]]);function Xt(){return{codeHtml:`<a-translation
  text="_A_TRANSLATION_SHOW_MORE_"
  text-before="$Aloha$ "
></a-translation>`}}function yt(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationTextBefore",
  components: {
    ATranslation,
  },
};`}}const Wt={name:"PageTranslationTextBefore",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=Xt(),{codeJs:e}=yt();return{codeHtml:t,codeJs:e}}};function Ft(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TEXT_BEFORE_HEADER_",description:"_A_TRANSLATION_GROUP_TEXT_BEFORE_DESCRIPTION_",props:"text-before"},{default:s(()=>[a(n,{text:"_A_TRANSLATION_SHOW_MORE_","text-before":"$Aloha$ "})]),_:1},8,["code-html","code-js"])}const kt=c(Wt,[["render",Ft]]);function qt(){return{codeHtml:`<a-translation
  :text="{ mobile: '_A_TRANSLATION_SHOW_MORE_', desktop: '_A_TRANSLATION_SHOW_LESS_' }"
></a-translation>`}}function wt(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationTextObject",
  components: {
    ATranslation,
  },
};`}}const Vt={name:"PageTranslationTextObject",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=qt(),{codeJs:e}=wt();return{codeHtml:t,codeJs:e}}};function Yt(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TEXT_OBJECT_HEADER_",description:"_A_TRANSLATION_GROUP_TEXT_OBJECT_DESCRIPTION_",props:"text (as object)"},{default:s(()=>[a(n,{text:{mobile:"_A_TRANSLATION_SHOW_MORE_",desktop:"_A_TRANSLATION_SHOW_LESS_"}})]),_:1},8,["code-html","code-js"])}const zt=c(Vt,[["render",Yt]]);function Kt(){return{codeHtml:`<a-translation
  title="_SHOW_MORE_"
>Aloha</a-translation>`}}function Qt(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationTitle",
  components: {
    ATranslation,
  },
};`}}const Zt={name:"PageTranslationTitle",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=Kt(),{codeJs:e}=Qt();return{codeHtml:t,codeJs:e}}},te={class:"a_columns a_columns_count_12"},ee={class:"a_column a_column_4 a_column_12_tablet"};function oe(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TITLE_HEADER_",description:"_A_TRANSLATION_GROUP_TITLE_DESCRIPTION_"},{default:s(()=>[u("div",te,[u("div",ee,[a(n,{title:"_A_TRANSLATION_SHOW_MORE_"},{default:s(()=>e[0]||(e[0]=[f("Aloha")])),_:1})])])]),_:1},8,["code-html","code-js"])}const ae=c(Zt,[["render",oe]]);function ne(){return{codeHtml:`<a-translation
  :title="['_A_TRANSLATION_SHOW_MORE_', '_A_TRANSLATION_SHOW_MORE_', 'Aloha']"
>Aloha</a-translation>`}}function _e(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationTitleArray",
  components: {
    ATranslation,
  },
};`}}const se={name:"PageTranslationTitleArray",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=ne(),{codeJs:e}=_e();return{codeHtml:t,codeJs:e}}},re={class:"a_columns a_columns_count_12"},le={class:"a_column a_column_4 a_column_12_tablet"};function ce(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TITLE_ARRAY_HEADER_",description:"_A_TRANSLATION_GROUP_TITLE_ARRAY_DESCRIPTION_"},{default:s(()=>[u("div",re,[u("div",le,[a(n,{title:["_A_TRANSLATION_SHOW_MORE_","_A_TRANSLATION_SHOW_MORE_","Aloha"]},{default:s(()=>e[0]||(e[0]=[f("Aloha")])),_:1})])])]),_:1},8,["code-html","code-js"])}const ie=c(se,[["render",ce]]);function Ae(){return{codeHtml:`<a-translation
  :title="{ desktop: '_A_TRANSLATION_SHOW_MORE_' }"
>Aloha</a-translation>`}}function de(){return{codeJs:`import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationTitleObject",
  components: {
    ATranslation,
  },
};`}}const me={name:"PageTranslationTitleObject",components:{AlohaExample:p,ATranslation:l},setup(){const{codeHtml:t}=Ae(),{codeJs:e}=de();return{codeHtml:t,codeJs:e}}},Te={class:"a_columns a_columns_count_12"},pe={class:"a_column a_column_4 a_column_12_tablet"};function ue(t,e,r,d,m,T){const n=o("a-translation"),_=o("aloha-example");return A(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TITLE_OBJECT_HEADER_",description:"_A_TRANSLATION_GROUP_TITLE_OBJECT_DESCRIPTION_"},{default:s(()=>[u("div",Te,[u("div",pe,[a(n,{title:{desktop:"_A_TRANSLATION_SHOW_MORE_"}},{default:s(()=>e[0]||(e[0]=[f("Aloha")])),_:1})])])]),_:1},8,["code-html","code-js"])}const fe=c(me,[["render",ue]]);function Oe(){const t=R(()=>v({placeholder:"_A_TRANSLATION_COMPONENT_NAME_"}));return{pageTitle:R(()=>`ATranslation${t.value?` (${t.value})`:""}`)}}function Re(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"extra",description:"_A_TRANSLATION_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"html",description:"_A_TRANSLATION_PROPS_HTML_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"placeholder",description:"_A_TRANSLATION_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"safe-html",description:"_A_TRANSLATION_PROPS_SAFE_HTML_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"tag",description:"_A_TRANSLATION_PROPS_TAG_DESCRIPTION_",type:"String",default:"div",required:!1},{name:"text",description:"_A_TRANSLATION_PROPS_TEXT_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"text-after",description:"_A_TRANSLATION_PROPS_TEXT_AFTER_DESCRIPTION_",type:"String / Number / Object",default:"",required:!1},{name:"text-before",description:"_A_TRANSLATION_PROPS_TEXT_BEFORE_DESCRIPTION_",type:"String / Number / Object",default:"",required:!1},{name:"title",description:"_A_TRANSLATION_PROPS_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1}]}}function Ne(){return{dataSlots:[{name:"default",description:"_A_TRANSLATION_SLOT_DEFAULT_DESCRIPTION_"}]}}const Pe={name:"PageTranslation",components:{AlohaPage:D,AlohaTableProps:C,AShowMore:U,ATranslation:l,PageTranslationAriaLabel:k,PageTranslationBasic:z,PageTranslationExtra:at,PageTranslationHtml:lt,PageTranslationHtmlAfterBefore:mt,PageTranslationPlaceholder:Ot,PageTranslationSafeHtml:Et,PageTranslationSlotDefault:xt,PageTranslationTextAfter:Dt,PageTranslationTextAfterBefore:Gt,PageTranslationTextBefore:kt,PageTranslationTextObject:zt,PageTranslationTitle:ae,PageTranslationTitleArray:ie,PageTranslationTitleObject:fe},setup(){const{pageTitle:t}=Oe(),{dataProps:e}=Re(),{dataSlots:r}=Ne();return{dataProps:e,dataSlots:r,pageTitle:t}}};function he(t,e,r,d,m,T){const n=o("a-translation"),_=o("page-translation-basic"),N=o("page-translation-text-after"),P=o("page-translation-text-before"),h=o("page-translation-text-after-before"),E=o("page-translation-text-object"),I=o("page-translation-safe-html"),S=o("page-translation-html"),H=o("page-translation-html-after-before"),$=o("page-translation-placeholder"),L=o("page-translation-aria-label"),g=o("page-translation-title"),x=o("page-translation-title-object"),b=o("page-translation-title-array"),J=o("page-translation-extra"),M=o("page-translation-slot-default"),O=o("aloha-table-props"),j=o("aloha-page");return A(),i(j,{"page-title":t.pageTitle},{body:s(()=>[a(n,{tag:"p",html:"_A_TRANSLATION_COMPONENT_DESCRIPTION_"}),a(_),a(N),a(P),a(h),a(E),a(I),a(S),a(H),a($),a(L),a(g),a(x),a(b),a(J),a(M),a(O,{data:t.dataProps},null,8,["data"]),a(O,{"table-label":"Slots",data:t.dataSlots,columns:["name","description"]},null,8,["data"])]),_:1},8,["page-title"])}const De=c(Pe,[["render",he]]);export{De as default};
