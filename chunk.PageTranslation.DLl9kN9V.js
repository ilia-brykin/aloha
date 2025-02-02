import{A as l,_ as c,g as M}from"./bundle.index.B2aaR4xj.js";import{O as i,aR as s,b as o,Q as d,U as u,V as n,aT as f,a as R}from"./chunk.vendor.G4HJ_FUy.js";import"./chunk.vendor-lodash.DUClg1O3.js";import{A as T,a as C}from"./chunk.AlohaExample.B8t5sXI5.js";import{A as U}from"./chunk.AlohaTableProps.C3B90-mm.js";import"./chunk.translations-ar.Bm_TIgmU.js";import"./chunk.translations-de.hQOurFbu.js";import"./chunk.translations-en.C27usO-8.js";import"./chunk.translations-es.CWd7slww.js";import"./chunk.translations-fr.DDfPHPkk.js";import"./chunk.translations-hr.CtnKD3az.js";import"./chunk.translations-it.Cf9ZYxei.js";import"./chunk.translations-ru.CZ8Ez0gt.js";import"./chunk.APageTabTitle.6ZuxfiZq.js";import"./chunk.AlohaHighlightjs.Bnb6Sejr.js";import"./chunk.ATable.DhxfPDli.js";function v(){return{codeHtml:`<a-translation
  tag="button"
  class="a_btn a_btn_secondary"
  aria-label="_SHOW_MORE_"
>+</a-translation>`}}function B(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationAriaLabel",
  components: {
    ATranslation,
  },
};`}}const G={name:"PageTranslationAriaLabel",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=v(),{codeJs:e}=B();return{codeHtml:t,codeJs:e}}},W={class:"a_columns a_columns_count_12"},X={class:"a_column a_column_4 a_column_12_tablet"};function y(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_ARIA_LABEL_HEADER_",description:"_A_TRANSLATION_GROUP_ARIA_LABEL_DESCRIPTION_"},{default:s(()=>[u("div",W,[u("div",X,[n(a,{class:"a_btn a_btn_secondary",tag:"button","aria-label":"_A_TRANSLATION_SHOW_MORE_"},{default:s(()=>e[0]||(e[0]=[f("+")])),_:1})])])]),_:1},8,["code-html","code-js"])}const F=c(G,[["render",y]]);function q(){return{codeHtml:`<a-translation
  text="_SHOW_MORE_"
></a-translation>`}}function k(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationBasic",
  components: {
    ATranslation,
  },
};`}}const V={name:"PageTranslationBasic",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=q(),{codeJs:e}=k();return{codeHtml:t,codeJs:e}}};function Y(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_BASIC_USAGE_",props:"text"},{default:s(()=>[n(a,{text:"_A_TRANSLATION_SHOW_MORE_"})]),_:1},8,["code-html","code-js"])}const w=c(V,[["render",Y]]);function Q(){return{codeHtml:`<a-translation
  :html="'_A_TRANSLATION_EXAMPLE_EXTRA_{{aloha}}_{{a}}_{{b}}_'"
  :extra="{ aloha: 'ALOHA', a: 10, b: 123 }"
></a-translation>`}}function z(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationExtra",
  components: {
    ATranslation,
  },
};`}}const K={name:"PageTranslationExtra",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=Q(),{codeJs:e}=z();return{codeHtml:t,codeJs:e}}},Z={class:"a_columns a_columns_count_12"},tt={class:"a_column a_column_4 a_column_12_tablet"};function et(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_EXTRA_HEADER_",description:"_A_TRANSLATION_GROUP_EXTRA_DESCRIPTION_"},{default:s(()=>[u("div",Z,[u("div",tt,[n(a,{html:"_A_TRANSLATION_EXAMPLE_EXTRA_{{aloha}}_{{a}}_{{b}}_",extra:{aloha:"ALOHA",a:10,b:123}})])])]),_:1},8,["code-html","code-js"])}const ot=c(K,[["render",et]]);function nt(){return{codeHtml:`<a-translation
  html="_A_TRANSLATION_EXAMPLE_HTML_"
></a-translation>`}}function at(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationHtml",
  components: {
    ATranslation,
  },
};`}}const _t={name:"PageTranslationHtml",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=nt(),{codeJs:e}=at();return{codeHtml:t,codeJs:e}}};function st(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_HTML_HEADER_",description:"_A_TRANSLATION_GROUP_HTML_DESCRIPTION_",props:"html"},{default:s(()=>[n(a,{html:"_A_TRANSLATION_EXAMPLE_HTML_"})]),_:1},8,["code-html","code-js"])}const rt=c(_t,[["render",st]]);function lt(){return{codeHtml:`<a-translation
  html="_A_TRANSLATION_EXAMPLE_HTML_"
  text-before="$ "
  text-after=" €"
></a-translation>`}}function ct(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationHtmlAfterBefore",
  components: {
    ATranslation,
  },
};`}}const it={name:"PageTranslationHtmlAfterBefore",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=lt(),{codeJs:e}=ct();return{codeHtml:t,codeJs:e}}};function dt(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_HTML_AFTER_BEFORE_HEADER_",description:"_A_TRANSLATION_GROUP_HTML_AFTER_BEFORE_DESCRIPTION_",props:["html","text-after","text-before"]},{default:s(()=>[n(a,{html:"_A_TRANSLATION_EXAMPLE_HTML_","text-before":"$ ","text-after":" €"})]),_:1},8,["code-html","code-js"])}const mt=c(it,[["render",dt]]);function At(){return{codeHtml:`<a-translation
  tag="input"
  placeholder="_SHOW_MORE_"
></a-translation>`}}function pt(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationPlaceholder",
  components: {
    ATranslation,
  },
};`}}const Tt={name:"PageTranslationPlaceholder",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=At(),{codeJs:e}=pt();return{codeHtml:t,codeJs:e}}};function ut(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_PLACEHOLDER_HEADER_",description:"_A_TRANSLATION_GROUP_PLACEHOLDER_DESCRIPTION_",props:["tag","placeholder"]},{default:s(()=>[n(a,{tag:"input",placeholder:"_A_TRANSLATION_SHOW_MORE_"})]),_:1},8,["code-html","code-js"])}const ft=c(Tt,[["render",ut]]);function Ot(){return{codeHtml:`<a-translation
  safe-html="_A_TRANSLATION_EXAMPLE_HTML_"
></a-translation>`}}function Rt(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationSafeHtml",
  components: {
    ATranslation,
  },
};`}}const Nt={name:"PageTranslationSafeHtml",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=Ot(),{codeJs:e}=Rt();return{codeHtml:t,codeJs:e}}};function Pt(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_SAFE_HTML_HEADER_",description:"_A_TRANSLATION_GROUP_SAFE_HTML_DESCRIPTION_",props:"safe-html"},{default:s(()=>[n(a,{"safe-html":"_A_TRANSLATION_EXAMPLE_HTML_"})]),_:1},8,["code-html","code-js"])}const Et=c(Nt,[["render",Pt]]);function ht(){return{codeHtml:`<a-translation
  text-before="+ "
  text-after=" -"
>Aloha</a-translation>`}}function It(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationSlotDefault",
  components: {
    ATranslation,
  },
};`}}const St={name:"PageTranslationSlotDefault",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=ht(),{codeJs:e}=It();return{codeHtml:t,codeJs:e}}},Ht={class:"a_columns a_columns_count_12"},$t={class:"a_column a_column_4 a_column_12_tablet"};function Lt(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_SLOT_DEFAULT_HEADER_",description:"_A_TRANSLATION_GROUP_SLOT_DEFAULT_DESCRIPTION_"},{default:s(()=>[u("div",Ht,[u("div",$t,[n(a,{"text-before":"+ ","text-after":" -"},{default:s(()=>e[0]||(e[0]=[f("Aloha")])),_:1})])])]),_:1},8,["code-html","code-js"])}const gt=c(St,[["render",Lt]]);function xt(){return{codeHtml:`<a-translation
  text="_SHOW_MORE_"
  text-after=" *(Aloha)"
></a-translation>`}}function bt(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextAfter",
  components: {
    ATranslation,
  },
};`}}const Jt={name:"PageTranslationTextAfter",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=xt(),{codeJs:e}=bt();return{codeHtml:t,codeJs:e}}};function jt(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TEXT_AFTER_HEADER_",description:"_A_TRANSLATION_GROUP_TEXT_AFTER_DESCRIPTION_",props:"text-after"},{default:s(()=>[n(a,{text:"_A_TRANSLATION_SHOW_MORE_","text-after":" *(Aloha)"})]),_:1},8,["code-html","code-js"])}const Dt=c(Jt,[["render",jt]]);function Mt(){return{codeHtml:`<a-translation
  text="_A_TRANSLATION_SHOW_MORE_"
  text-after=" (Text After)"
  text-before="(Text before) "
></a-translation>`}}function Ct(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextAfterBefore",
  components: {
    ATranslation,
  },
};`}}const Ut={name:"PageTranslationTextAfterBefore",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=Mt(),{codeJs:e}=Ct();return{codeHtml:t,codeJs:e}}};function vt(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TEXT_AFTER_BEFORE_HEADER_",description:"_A_TRANSLATION_GROUP_TEXT_AFTER_BEFORE_DESCRIPTION_",props:["text-after","text-before"]},{default:s(()=>[n(a,{text:"_A_TRANSLATION_SHOW_MORE_","text-after":" (Text After)","text-before":"(Text before) "})]),_:1},8,["code-html","code-js"])}const Bt=c(Ut,[["render",vt]]);function Gt(){return{codeHtml:`<a-translation
  text="_A_TRANSLATION_SHOW_MORE_"
  text-before="$Aloha$ "
></a-translation>`}}function Wt(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextBefore",
  components: {
    ATranslation,
  },
};`}}const Xt={name:"PageTranslationTextBefore",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=Gt(),{codeJs:e}=Wt();return{codeHtml:t,codeJs:e}}};function yt(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TEXT_BEFORE_HEADER_",description:"_A_TRANSLATION_GROUP_TEXT_BEFORE_DESCRIPTION_",props:"text-before"},{default:s(()=>[n(a,{text:"_A_TRANSLATION_SHOW_MORE_","text-before":"$Aloha$ "})]),_:1},8,["code-html","code-js"])}const Ft=c(Xt,[["render",yt]]);function qt(){return{codeHtml:`<a-translation
  :text="{ mobile: '_A_TRANSLATION_SHOW_MORE_', desktop: '_A_TRANSLATION_SHOW_LESS_' }"
></a-translation>`}}function kt(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextObject",
  components: {
    ATranslation,
  },
};`}}const Vt={name:"PageTranslationTextObject",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=qt(),{codeJs:e}=kt();return{codeHtml:t,codeJs:e}}};function Yt(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TEXT_OBJECT_HEADER_",description:"_A_TRANSLATION_GROUP_TEXT_OBJECT_DESCRIPTION_",props:"text (as object)"},{default:s(()=>[n(a,{text:{mobile:"_A_TRANSLATION_SHOW_MORE_",desktop:"_A_TRANSLATION_SHOW_LESS_"}})]),_:1},8,["code-html","code-js"])}const wt=c(Vt,[["render",Yt]]);function Qt(){return{codeHtml:`<a-translation
  title="_SHOW_MORE_"
>Aloha</a-translation>`}}function zt(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTitle",
  components: {
    ATranslation,
  },
};`}}const Kt={name:"PageTranslationTitle",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=Qt(),{codeJs:e}=zt();return{codeHtml:t,codeJs:e}}},Zt={class:"a_columns a_columns_count_12"},te={class:"a_column a_column_4 a_column_12_tablet"};function ee(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TITLE_HEADER_",description:"_A_TRANSLATION_GROUP_TITLE_DESCRIPTION_"},{default:s(()=>[u("div",Zt,[u("div",te,[n(a,{title:"_A_TRANSLATION_SHOW_MORE_"},{default:s(()=>e[0]||(e[0]=[f("Aloha")])),_:1})])])]),_:1},8,["code-html","code-js"])}const oe=c(Kt,[["render",ee]]);function ne(){return{codeHtml:`<a-translation
  :title="['_A_TRANSLATION_SHOW_MORE_', '_A_TRANSLATION_SHOW_MORE_', 'Aloha']"
>Aloha</a-translation>`}}function ae(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTitleArray",
  components: {
    ATranslation,
  },
};`}}const _e={name:"PageTranslationTitleArray",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=ne(),{codeJs:e}=ae();return{codeHtml:t,codeJs:e}}},se={class:"a_columns a_columns_count_12"},re={class:"a_column a_column_4 a_column_12_tablet"};function le(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TITLE_ARRAY_HEADER_",description:"_A_TRANSLATION_GROUP_TITLE_ARRAY_DESCRIPTION_"},{default:s(()=>[u("div",se,[u("div",re,[n(a,{title:["_A_TRANSLATION_SHOW_MORE_","_A_TRANSLATION_SHOW_MORE_","Aloha"]},{default:s(()=>e[0]||(e[0]=[f("Aloha")])),_:1})])])]),_:1},8,["code-html","code-js"])}const ce=c(_e,[["render",le]]);function ie(){return{codeHtml:`<a-translation
  :title="{ desktop: '_A_TRANSLATION_SHOW_MORE_' }"
>Aloha</a-translation>`}}function de(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTitleObject",
  components: {
    ATranslation,
  },
};`}}const me={name:"PageTranslationTitleObject",components:{AlohaExample:T,ATranslation:l},setup(){const{codeHtml:t}=ie(),{codeJs:e}=de();return{codeHtml:t,codeJs:e}}},Ae={class:"a_columns a_columns_count_12"},pe={class:"a_column a_column_4 a_column_12_tablet"};function Te(t,e,r,m,A,p){const a=o("a-translation"),_=o("aloha-example");return d(),i(_,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_TRANSLATION_GROUP_TITLE_OBJECT_HEADER_",description:"_A_TRANSLATION_GROUP_TITLE_OBJECT_DESCRIPTION_"},{default:s(()=>[u("div",Ae,[u("div",pe,[n(a,{title:{desktop:"_A_TRANSLATION_SHOW_MORE_"}},{default:s(()=>e[0]||(e[0]=[f("Aloha")])),_:1})])])]),_:1},8,["code-html","code-js"])}const ue=c(me,[["render",Te]]);function fe(){const t=R(()=>M({placeholder:"_A_TRANSLATION_COMPONENT_NAME_"}));return{pageTitle:R(()=>`ATranslation${t.value?` (${t.value})`:""}`)}}function Oe(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"extra",description:"_A_TRANSLATION_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"html",description:"_A_TRANSLATION_PROPS_HTML_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"placeholder",description:"_A_TRANSLATION_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"safe-html",description:"_A_TRANSLATION_PROPS_SAFE_HTML_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"tag",description:"_A_TRANSLATION_PROPS_TAG_DESCRIPTION_",type:"String",default:"div",required:!1},{name:"text",description:"_A_TRANSLATION_PROPS_TEXT_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"text-after",description:"_A_TRANSLATION_PROPS_TEXT_AFTER_DESCRIPTION_",type:"String / Number / Object",default:"",required:!1},{name:"text-before",description:"_A_TRANSLATION_PROPS_TEXT_BEFORE_DESCRIPTION_",type:"String / Number / Object",default:"",required:!1},{name:"title",description:"_A_TRANSLATION_PROPS_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1}]}}function Re(){return{dataSlots:[{name:"default",description:"_A_TRANSLATION_SLOT_DEFAULT_DESCRIPTION_"}]}}const Ne={name:"PageTranslation",components:{AlohaPage:C,AlohaTableProps:U,ATranslation:l,PageTranslationAriaLabel:F,PageTranslationBasic:w,PageTranslationExtra:ot,PageTranslationHtml:rt,PageTranslationHtmlAfterBefore:mt,PageTranslationPlaceholder:ft,PageTranslationSafeHtml:Et,PageTranslationSlotDefault:gt,PageTranslationTextAfter:Dt,PageTranslationTextAfterBefore:Bt,PageTranslationTextBefore:Ft,PageTranslationTextObject:wt,PageTranslationTitle:oe,PageTranslationTitleArray:ce,PageTranslationTitleObject:ue},setup(){const{pageTitle:t}=fe(),{dataProps:e}=Oe(),{dataSlots:r}=Re();return{dataProps:e,dataSlots:r,pageTitle:t}}};function Pe(t,e,r,m,A,p){const a=o("a-translation"),_=o("page-translation-basic"),N=o("page-translation-text-after"),P=o("page-translation-text-before"),E=o("page-translation-text-after-before"),h=o("page-translation-text-object"),I=o("page-translation-safe-html"),S=o("page-translation-html"),H=o("page-translation-html-after-before"),$=o("page-translation-placeholder"),L=o("page-translation-aria-label"),g=o("page-translation-title"),x=o("page-translation-title-object"),b=o("page-translation-title-array"),J=o("page-translation-extra"),j=o("page-translation-slot-default"),O=o("aloha-table-props"),D=o("aloha-page");return d(),i(D,{"page-title":t.pageTitle},{body:s(()=>[n(a,{tag:"p",html:"_A_TRANSLATION_COMPONENT_DESCRIPTION_"}),n(_),n(N),n(P),n(E),n(h),n(I),n(S),n(H),n($),n(L),n(g),n(x),n(b),n(J),n(j),n(O,{data:t.dataProps},null,8,["data"]),n(O,{"table-label":"Slots",data:t.dataSlots,columns:["name","description"]},null,8,["data"])]),_:1},8,["page-title"])}const ve=c(Ne,[["render",Pe]]);export{ve as default};
