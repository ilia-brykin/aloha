import{A as T,a as M}from"./chunk.AlohaExample.EbzvMVYS.js";import{A as C}from"./chunk.AlohaTableProps.tNGf395N.js";import{A as U}from"./chunk.AShowMore.BGgGWiss.js";import{A as l,_ as c,g as v}from"./bundle.index.CDxzPDXT.js";import{k as o,J as i,aO as s,H as d,N as u,O as n,aQ as f,a as R}from"./chunk.vendor.QyCKSPD8.js";import"./chunk.APageTabTitle.BuENQV3G.js";import"./chunk.AlohaHighlightjs.B-JG9i3D.js";import"./chunk.vendor-lodash.GuFqEw-8.js";import"./chunk.ATable.B3GW_q_G.js";import"./chunk.translations-ar.D11AFw12.js";import"./chunk.translations-de.pyWcnzxU.js";import"./chunk.translations-en.BA0L_EKE.js";import"./chunk.translations-es.C8Ue-qtF.js";import"./chunk.translations-fr.B97VMxCC.js";import"./chunk.translations-hr.DPNXGA_z.js";import"./chunk.translations-it.DrIj1yZQ.js";import"./chunk.translations-ru.B1FeJYZT.js";function B(){return{codeHtml:`<a-translation
  tag="button"
  class="a_btn a_btn_secondary"
  aria-label="_SHOW_MORE_"
>+</a-translation>`}}function G(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationAriaLabel",
  components: {
    ATranslation,
  },
};`}}const W={name:"PageTranslationAriaLabel",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=B(),{codeJs:e}=G();return{codeHtml:t,codeJs:e}}},X={class:"a_columns a_columns_count_12"},y={class:"a_column a_column_4 a_column_12_tablet"};function F(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_ARIA_LABEL_HEADER_",description:"_A_TRANSLATION_GROUP_ARIA_LABEL_DESCRIPTION_"},{default:s(()=>[u("div",X,[u("div",y,[n(a,{class:"a_btn a_btn_secondary",tag:"button","aria-label":"_A_TRANSLATION_SHOW_MORE_"},{default:s(()=>e[0]||(e[0]=[f("+")])),_:1})])])]),_:1},8,["code-html","code-js"])}const q=c(W,[["render",F]]);function k(){return{codeHtml:`<a-translation
  text="_SHOW_MORE_"
></a-translation>`}}function w(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationBasic",
  components: {
    ATranslation,
  },
};`}}const V={name:"PageTranslationBasic",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=k(),{codeJs:e}=w();return{codeHtml:t,codeJs:e}}};function Y(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_BASIC_USAGE_",props:"text"},{default:s(()=>[n(a,{text:"_A_TRANSLATION_SHOW_MORE_"})]),_:1},8,["code-html","code-js"])}const Q=c(V,[["render",Y]]);function z(){return{codeHtml:`<a-translation
  :html="'_A_TRANSLATION_EXAMPLE_EXTRA_{{aloha}}_{{a}}_{{b}}_'"
  :extra="{ aloha: 'ALOHA', a: 10, b: 123 }"
></a-translation>`}}function K(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationExtra",
  components: {
    ATranslation,
  },
};`}}const Z={name:"PageTranslationExtra",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=z(),{codeJs:e}=K();return{codeHtml:t,codeJs:e}}},tt={class:"a_columns a_columns_count_12"},et={class:"a_column a_column_4 a_column_12_tablet"};function ot(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_EXTRA_HEADER_",description:"_A_TRANSLATION_GROUP_EXTRA_DESCRIPTION_"},{default:s(()=>[u("div",tt,[u("div",et,[n(a,{html:"_A_TRANSLATION_EXAMPLE_EXTRA_{{aloha}}_{{a}}_{{b}}_",extra:{aloha:"ALOHA",a:10,b:123}})])])]),_:1},8,["code-html","code-js"])}const nt=c(Z,[["render",ot]]);function at(){return{codeHtml:`<a-translation
  html="_A_TRANSLATION_EXAMPLE_HTML_"
></a-translation>`}}function _t(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationHtml",
  components: {
    ATranslation,
  },
};`}}const st={name:"PageTranslationHtml",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=at(),{codeJs:e}=_t();return{codeHtml:t,codeJs:e}}};function rt(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_HTML_HEADER_",description:"_A_TRANSLATION_GROUP_HTML_DESCRIPTION_",props:"html"},{default:s(()=>[n(a,{html:"_A_TRANSLATION_EXAMPLE_HTML_"})]),_:1},8,["code-html","code-js"])}const lt=c(st,[["render",rt]]);function ct(){return{codeHtml:`<a-translation
  html="_A_TRANSLATION_EXAMPLE_HTML_"
  text-before="$ "
  text-after=" €"
></a-translation>`}}function it(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationHtmlAfterBefore",
  components: {
    ATranslation,
  },
};`}}const dt={name:"PageTranslationHtmlAfterBefore",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=ct(),{codeJs:e}=it();return{codeHtml:t,codeJs:e}}};function mt(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_HTML_AFTER_BEFORE_HEADER_",description:"_A_TRANSLATION_GROUP_HTML_AFTER_BEFORE_DESCRIPTION_",props:["html","text-after","text-before"]},{default:s(()=>[n(a,{html:"_A_TRANSLATION_EXAMPLE_HTML_","text-before":"$ ","text-after":" €"})]),_:1},8,["code-html","code-js"])}const At=c(dt,[["render",mt]]);function pt(){return{codeHtml:`<a-translation
  tag="input"
  placeholder="_SHOW_MORE_"
></a-translation>`}}function Tt(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationPlaceholder",
  components: {
    ATranslation,
  },
};`}}const ut={name:"PageTranslationPlaceholder",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=pt(),{codeJs:e}=Tt();return{codeHtml:t,codeJs:e}}};function ft(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_PLACEHOLDER_HEADER_",description:"_A_TRANSLATION_GROUP_PLACEHOLDER_DESCRIPTION_",props:["tag","placeholder"]},{default:s(()=>[n(a,{tag:"input",placeholder:"_A_TRANSLATION_SHOW_MORE_"})]),_:1},8,["code-html","code-js"])}const Ot=c(ut,[["render",ft]]);function Rt(){return{codeHtml:`<a-translation
  safe-html="_A_TRANSLATION_EXAMPLE_HTML_"
></a-translation>`}}function Nt(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationSafeHtml",
  components: {
    ATranslation,
  },
};`}}const Pt={name:"PageTranslationSafeHtml",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=Rt(),{codeJs:e}=Nt();return{codeHtml:t,codeJs:e}}};function ht(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_SAFE_HTML_HEADER_",description:"_A_TRANSLATION_GROUP_SAFE_HTML_DESCRIPTION_",props:"safe-html"},{default:s(()=>[n(a,{"safe-html":"_A_TRANSLATION_EXAMPLE_HTML_"})]),_:1},8,["code-html","code-js"])}const Et=c(Pt,[["render",ht]]);function It(){return{codeHtml:`<a-translation
  text-before="+ "
  text-after=" -"
>Aloha</a-translation>`}}function St(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationSlotDefault",
  components: {
    ATranslation,
  },
};`}}const Ht={name:"PageTranslationSlotDefault",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=It(),{codeJs:e}=St();return{codeHtml:t,codeJs:e}}},$t={class:"a_columns a_columns_count_12"},Lt={class:"a_column a_column_4 a_column_12_tablet"};function gt(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_SLOT_DEFAULT_HEADER_",description:"_A_TRANSLATION_GROUP_SLOT_DEFAULT_DESCRIPTION_"},{default:s(()=>[u("div",$t,[u("div",Lt,[n(a,{"text-before":"+ ","text-after":" -"},{default:s(()=>e[0]||(e[0]=[f("Aloha")])),_:1})])])]),_:1},8,["code-html","code-js"])}const xt=c(Ht,[["render",gt]]);function bt(){return{codeHtml:`<a-translation
  text="_SHOW_MORE_"
  text-after=" *(Aloha)"
></a-translation>`}}function Jt(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextAfter",
  components: {
    ATranslation,
  },
};`}}const jt={name:"PageTranslationTextAfter",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=bt(),{codeJs:e}=Jt();return{codeHtml:t,codeJs:e}}};function Dt(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TEXT_AFTER_HEADER_",description:"_A_TRANSLATION_GROUP_TEXT_AFTER_DESCRIPTION_",props:"text-after"},{default:s(()=>[n(a,{text:"_A_TRANSLATION_SHOW_MORE_","text-after":" *(Aloha)"})]),_:1},8,["code-html","code-js"])}const Mt=c(jt,[["render",Dt]]);function Ct(){return{codeHtml:`<a-translation
  text="_A_TRANSLATION_SHOW_MORE_"
  text-after=" (Text After)"
  text-before="(Text before) "
></a-translation>`}}function Ut(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextAfterBefore",
  components: {
    ATranslation,
  },
};`}}const vt={name:"PageTranslationTextAfterBefore",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=Ct(),{codeJs:e}=Ut();return{codeHtml:t,codeJs:e}}};function Bt(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TEXT_AFTER_BEFORE_HEADER_",description:"_A_TRANSLATION_GROUP_TEXT_AFTER_BEFORE_DESCRIPTION_",props:["text-after","text-before"]},{default:s(()=>[n(a,{text:"_A_TRANSLATION_SHOW_MORE_","text-after":" (Text After)","text-before":"(Text before) "})]),_:1},8,["code-html","code-js"])}const Gt=c(vt,[["render",Bt]]);function Wt(){return{codeHtml:`<a-translation
  text="_A_TRANSLATION_SHOW_MORE_"
  text-before="$Aloha$ "
></a-translation>`}}function Xt(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextBefore",
  components: {
    ATranslation,
  },
};`}}const yt={name:"PageTranslationTextBefore",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=Wt(),{codeJs:e}=Xt();return{codeHtml:t,codeJs:e}}};function Ft(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TEXT_BEFORE_HEADER_",description:"_A_TRANSLATION_GROUP_TEXT_BEFORE_DESCRIPTION_",props:"text-before"},{default:s(()=>[n(a,{text:"_A_TRANSLATION_SHOW_MORE_","text-before":"$Aloha$ "})]),_:1},8,["code-html","code-js"])}const qt=c(yt,[["render",Ft]]);function kt(){return{codeHtml:`<a-translation
  :text="{ mobile: '_A_TRANSLATION_SHOW_MORE_', desktop: '_A_TRANSLATION_SHOW_LESS_' }"
></a-translation>`}}function wt(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextObject",
  components: {
    ATranslation,
  },
};`}}const Vt={name:"PageTranslationTextObject",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=kt(),{codeJs:e}=wt();return{codeHtml:t,codeJs:e}}};function Yt(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TEXT_OBJECT_HEADER_",description:"_A_TRANSLATION_GROUP_TEXT_OBJECT_DESCRIPTION_",props:"text (as object)"},{default:s(()=>[n(a,{text:{mobile:"_A_TRANSLATION_SHOW_MORE_",desktop:"_A_TRANSLATION_SHOW_LESS_"}})]),_:1},8,["code-html","code-js"])}const Qt=c(Vt,[["render",Yt]]);function zt(){return{codeHtml:`<a-translation
  title="_SHOW_MORE_"
>Aloha</a-translation>`}}function Kt(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTitle",
  components: {
    ATranslation,
  },
};`}}const Zt={name:"PageTranslationTitle",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=zt(),{codeJs:e}=Kt();return{codeHtml:t,codeJs:e}}},te={class:"a_columns a_columns_count_12"},ee={class:"a_column a_column_4 a_column_12_tablet"};function oe(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TITLE_HEADER_",description:"_A_TRANSLATION_GROUP_TITLE_DESCRIPTION_"},{default:s(()=>[u("div",te,[u("div",ee,[n(a,{title:"_A_TRANSLATION_SHOW_MORE_"},{default:s(()=>e[0]||(e[0]=[f("Aloha")])),_:1})])])]),_:1},8,["code-html","code-js"])}const ne=c(Zt,[["render",oe]]);function ae(){return{codeHtml:`<a-translation
  :title="['_A_TRANSLATION_SHOW_MORE_', '_A_TRANSLATION_SHOW_MORE_', 'Aloha']"
>Aloha</a-translation>`}}function _e(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTitleArray",
  components: {
    ATranslation,
  },
};`}}const se={name:"PageTranslationTitleArray",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=ae(),{codeJs:e}=_e();return{codeHtml:t,codeJs:e}}},re={class:"a_columns a_columns_count_12"},le={class:"a_column a_column_4 a_column_12_tablet"};function ce(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TITLE_ARRAY_HEADER_",description:"_A_TRANSLATION_GROUP_TITLE_ARRAY_DESCRIPTION_"},{default:s(()=>[u("div",re,[u("div",le,[n(a,{title:["_A_TRANSLATION_SHOW_MORE_","_A_TRANSLATION_SHOW_MORE_","Aloha"]},{default:s(()=>e[0]||(e[0]=[f("Aloha")])),_:1})])])]),_:1},8,["code-html","code-js"])}const ie=c(se,[["render",ce]]);function de(){return{codeHtml:`<a-translation
  :title="{ desktop: '_A_TRANSLATION_SHOW_MORE_' }"
>Aloha</a-translation>`}}function me(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTitleObject",
  components: {
    ATranslation,
  },
};`}}const Ae={name:"PageTranslationTitleObject",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=de(),{codeJs:e}=me();return{codeHtml:t,codeJs:e}}},pe={class:"a_columns a_columns_count_12"},Te={class:"a_column a_column_4 a_column_12_tablet"};function ue(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TITLE_OBJECT_HEADER_",description:"_A_TRANSLATION_GROUP_TITLE_OBJECT_DESCRIPTION_"},{default:s(()=>[u("div",pe,[u("div",Te,[n(a,{title:{desktop:"_A_TRANSLATION_SHOW_MORE_"}},{default:s(()=>e[0]||(e[0]=[f("Aloha")])),_:1})])])]),_:1},8,["code-html","code-js"])}const fe=c(Ae,[["render",ue]]);function Oe(){const t=R(()=>v({placeholder:"_A_TRANSLATION_COMPONENT_NAME_"}));return{pageTitle:R(()=>`ATranslation${t.value?` (${t.value})`:""}`)}}function Re(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"extra",description:"_A_TRANSLATION_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"html",description:"_A_TRANSLATION_PROPS_HTML_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"placeholder",description:"_A_TRANSLATION_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"safe-html",description:"_A_TRANSLATION_PROPS_SAFE_HTML_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"tag",description:"_A_TRANSLATION_PROPS_TAG_DESCRIPTION_",type:"String",default:"div",required:!1},{name:"text",description:"_A_TRANSLATION_PROPS_TEXT_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"text-after",description:"_A_TRANSLATION_PROPS_TEXT_AFTER_DESCRIPTION_",type:"String / Number / Object",default:"",required:!1},{name:"text-before",description:"_A_TRANSLATION_PROPS_TEXT_BEFORE_DESCRIPTION_",type:"String / Number / Object",default:"",required:!1},{name:"title",description:"_A_TRANSLATION_PROPS_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1}]}}function Ne(){return{dataSlots:[{name:"default",description:"_A_TRANSLATION_SLOT_DEFAULT_DESCRIPTION_"}]}}const Pe={name:"PageTranslation",components:{AlohaPage:M,AlohaTableProps:C,AShowMore:U,ATranslation:l,PageTranslationAriaLabel:q,PageTranslationBasic:Q,PageTranslationExtra:nt,PageTranslationHtml:lt,PageTranslationHtmlAfterBefore:At,PageTranslationPlaceholder:Ot,PageTranslationSafeHtml:Et,PageTranslationSlotDefault:xt,PageTranslationTextAfter:Mt,PageTranslationTextAfterBefore:Gt,PageTranslationTextBefore:qt,PageTranslationTextObject:Qt,PageTranslationTitle:ne,PageTranslationTitleArray:ie,PageTranslationTitleObject:fe},setup(){const{pageTitle:t}=Oe(),{dataProps:e}=Re(),{dataSlots:r}=Ne();return{dataProps:e,dataSlots:r,pageTitle:t}}};function he(t,e,r,m,A,p){const a=o("a-translation"),_=o("page-translation-basic"),N=o("page-translation-text-after"),P=o("page-translation-text-before"),h=o("page-translation-text-after-before"),E=o("page-translation-text-object"),I=o("page-translation-safe-html"),S=o("page-translation-html"),H=o("page-translation-html-after-before"),$=o("page-translation-placeholder"),L=o("page-translation-aria-label"),g=o("page-translation-title"),x=o("page-translation-title-object"),b=o("page-translation-title-array"),J=o("page-translation-extra"),j=o("page-translation-slot-default"),O=o("aloha-table-props"),D=o("aloha-page");return d(),i(D,{"page-title":t.pageTitle},{body:s(()=>[n(a,{tag:"p",html:"_A_TRANSLATION_COMPONENT_DESCRIPTION_"}),n(_),n(N),n(P),n(h),n(E),n(I),n(S),n(H),n($),n(L),n(g),n(x),n(b),n(J),n(j),n(O,{data:t.dataProps},null,8,["data"]),n(O,{"table-label":"Slots",data:t.dataSlots,columns:["name","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Ge=c(Pe,[["render",he]]);export{Ge as default};
