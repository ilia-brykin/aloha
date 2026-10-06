import{Ct as e,Ot as t,Tt as n,Ut as r,kt as i,qt as a,zt as o}from"./chunk.vendor.CZPox1kV.js";import{Z as s,kt as ee,t as c}from"./bundle.index.BmSiyQNH.js";import{n as te,t as l}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as u}from"./chunk.AlohaTableProps.Dksi7fmb.js";function d(){return{codeHtml:`<a-translation
  tag="button"
  class="a_btn a_btn_secondary"
  aria-label="_SHOW_MORE_"
>+</a-translation>`}}function f(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationAriaLabel",
  components: {
    ATranslation,
  },
};`}}var p={name:`PageTranslationAriaLabel`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=d(),{codeJs:t}=f();return{codeHtml:e,codeJs:t}}};function m(e,s,ee,c,te,l){let u=r(`a-translation`),d=r(`aloha-example`);return o(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TRANSLATION_GROUP_ARIA_LABEL_HEADER_`,description:`_A_TRANSLATION_GROUP_ARIA_LABEL_DESCRIPTION_`,props:`aria-label`},{default:a(()=>[i(u,{class:`a_btn a_btn_secondary`,tag:`button`,"aria-label":`_A_TRANSLATION_SHOW_MORE_`},{default:a(()=>[...s[0]||=[t(`+`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var h=c(p,[[`render`,m]]);function g(){return{codeHtml:`<a-translation
  text="_SHOW_MORE_"
></a-translation>`}}function _(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationBasic",
  components: {
    ATranslation,
  },
};`}}var v={name:`PageTranslationBasic`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t}}};function y(e,t,s,ee,c,te){let l=r(`a-translation`),u=r(`aloha-example`);return o(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:`text`},{default:a(()=>[i(l,{text:`_A_TRANSLATION_SHOW_MORE_`})]),_:1},8,[`code-html`,`code-js`])}var b=c(v,[[`render`,y]]);function x(){return{codeHtml:`<a-translation
  html="_A_TRANSLATION_EXAMPLE_EXTRA_{{aloha}}_{{a}}_{{b}}_"
  :extra="{ aloha: 'ALOHA', a: 10, b: 123 }"
></a-translation>`}}function S(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationExtra",
  components: {
    ATranslation,
  },
};`}}var C={name:`PageTranslationExtra`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t}}};function w(e,t,s,ee,c,te){let l=r(`a-translation`),u=r(`aloha-example`);return o(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TRANSLATION_GROUP_EXTRA_HEADER_`,description:`_A_TRANSLATION_GROUP_EXTRA_DESCRIPTION_`,props:`extra`},{default:a(()=>[i(l,{html:`_A_TRANSLATION_EXAMPLE_EXTRA_{{aloha}}_{{a}}_{{b}}_`,extra:{aloha:`ALOHA`,a:10,b:123}})]),_:1},8,[`code-html`,`code-js`])}var T=c(C,[[`render`,w]]);function E(){return{codeHtml:`<a-translation
  html="_A_TRANSLATION_EXAMPLE_HTML_"
></a-translation>`}}function D(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationHtml",
  components: {
    ATranslation,
  },
};`}}var O={name:`PageTranslationHtml`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=E(),{codeJs:t}=D();return{codeHtml:e,codeJs:t}}};function k(e,t,s,ee,c,te){let l=r(`a-translation`),u=r(`aloha-example`);return o(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TRANSLATION_GROUP_HTML_HEADER_`,description:`_A_TRANSLATION_GROUP_HTML_DESCRIPTION_`,props:`html`},{default:a(()=>[i(l,{html:`_A_TRANSLATION_EXAMPLE_HTML_`})]),_:1},8,[`code-html`,`code-js`])}var A=c(O,[[`render`,k]]);function j(){return{codeHtml:`<a-translation
  html="_A_TRANSLATION_EXAMPLE_HTML_"
  text-before="$ "
  text-after=" €"
></a-translation>`}}function M(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationHtmlAfterBefore",
  components: {
    ATranslation,
  },
};`}}var N={name:`PageTranslationHtmlAfterBefore`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=j(),{codeJs:t}=M();return{codeHtml:e,codeJs:t}}};function P(e,t,s,ee,c,te){let l=r(`a-translation`),u=r(`aloha-example`);return o(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TRANSLATION_GROUP_HTML_AFTER_BEFORE_HEADER_`,description:`_A_TRANSLATION_GROUP_HTML_AFTER_BEFORE_DESCRIPTION_`,props:[`html`,`text-after`,`text-before`]},{default:a(()=>[i(l,{html:`_A_TRANSLATION_EXAMPLE_HTML_`,"text-before":`$ `,"text-after":` €`})]),_:1},8,[`code-html`,`code-js`])}var F=c(N,[[`render`,P]]);function I(){return{codeHtml:`<a-translation
  tag="input"
  placeholder="_SHOW_MORE_"
></a-translation>`}}function L(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationPlaceholder",
  components: {
    ATranslation,
  },
};`}}var R={name:`PageTranslationPlaceholder`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=I(),{codeJs:t}=L();return{codeHtml:e,codeJs:t}}};function z(e,t,s,ee,c,te){let l=r(`a-translation`),u=r(`aloha-example`);return o(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TRANSLATION_GROUP_PLACEHOLDER_HEADER_`,description:`_A_TRANSLATION_GROUP_PLACEHOLDER_DESCRIPTION_`,props:[`tag`,`placeholder`]},{default:a(()=>[i(l,{tag:`input`,placeholder:`_A_TRANSLATION_SHOW_MORE_`})]),_:1},8,[`code-html`,`code-js`])}var B=c(R,[[`render`,z]]);function V(){return{codeHtml:`<a-translation
  safe-html="_A_TRANSLATION_EXAMPLE_HTML_"
></a-translation>`}}function H(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationSafeHtml",
  components: {
    ATranslation,
  },
};`}}var U={name:`PageTranslationSafeHtml`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=V(),{codeJs:t}=H();return{codeHtml:e,codeJs:t}}};function W(e,t,s,ee,c,te){let l=r(`a-translation`),u=r(`aloha-example`);return o(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TRANSLATION_GROUP_SAFE_HTML_HEADER_`,description:`_A_TRANSLATION_GROUP_SAFE_HTML_DESCRIPTION_`,props:`safe-html`},{default:a(()=>[i(l,{"safe-html":`_A_TRANSLATION_EXAMPLE_HTML_`})]),_:1},8,[`code-html`,`code-js`])}var G=c(U,[[`render`,W]]);function K(){return{codeHtml:`<a-translation
  text-before="+ "
  text-after=" -"
>Aloha</a-translation>`}}function q(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationSlotDefault",
  components: {
    ATranslation,
  },
};`}}var J={name:`PageTranslationSlotDefault`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=K(),{codeJs:t}=q();return{codeHtml:e,codeJs:t}}};function Y(e,s,ee,c,te,l){let u=r(`a-translation`),d=r(`aloha-example`);return o(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TRANSLATION_GROUP_SLOT_DEFAULT_HEADER_`,description:`_A_TRANSLATION_GROUP_SLOT_DEFAULT_DESCRIPTION_`,slots:`default`},{default:a(()=>[i(u,{"text-before":`+ `,"text-after":` -`},{default:a(()=>[...s[0]||=[t(`Aloha`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var X=c(J,[[`render`,Y]]);function Z(){return{codeHtml:`<a-translation
  text="_SHOW_MORE_"
  text-after=" *(Aloha)"
></a-translation>`}}function Q(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextAfter",
  components: {
    ATranslation,
  },
};`}}var ne={name:`PageTranslationTextAfter`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=Z(),{codeJs:t}=Q();return{codeHtml:e,codeJs:t}}};function re(e,t,s,ee,c,te){let l=r(`a-translation`),u=r(`aloha-example`);return o(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TRANSLATION_GROUP_TEXT_AFTER_HEADER_`,description:`_A_TRANSLATION_GROUP_TEXT_AFTER_DESCRIPTION_`,props:`text-after`},{default:a(()=>[i(l,{text:`_A_TRANSLATION_SHOW_MORE_`,"text-after":` *(Aloha)`})]),_:1},8,[`code-html`,`code-js`])}var ie=c(ne,[[`render`,re]]);function ae(){return{codeHtml:`<a-translation
  text="_A_TRANSLATION_SHOW_MORE_"
  text-after=" (Text After)"
  text-before="(Text before) "
></a-translation>`}}function oe(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextAfterBefore",
  components: {
    ATranslation,
  },
};`}}var se={name:`PageTranslationTextAfterBefore`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=ae(),{codeJs:t}=oe();return{codeHtml:e,codeJs:t}}};function ce(e,t,s,ee,c,te){let l=r(`a-translation`),u=r(`aloha-example`);return o(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TRANSLATION_GROUP_TEXT_AFTER_BEFORE_HEADER_`,description:`_A_TRANSLATION_GROUP_TEXT_AFTER_BEFORE_DESCRIPTION_`,props:[`text-after`,`text-before`]},{default:a(()=>[i(l,{text:`_A_TRANSLATION_SHOW_MORE_`,"text-after":` (Text After)`,"text-before":`(Text before) `})]),_:1},8,[`code-html`,`code-js`])}var le=c(se,[[`render`,ce]]);function ue(){return{codeHtml:`<a-translation
  text="_A_TRANSLATION_SHOW_MORE_"
  text-before="$Aloha$ "
></a-translation>`}}function de(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextBefore",
  components: {
    ATranslation,
  },
};`}}var fe={name:`PageTranslationTextBefore`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=ue(),{codeJs:t}=de();return{codeHtml:e,codeJs:t}}};function pe(e,t,s,ee,c,te){let l=r(`a-translation`),u=r(`aloha-example`);return o(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TRANSLATION_GROUP_TEXT_BEFORE_HEADER_`,description:`_A_TRANSLATION_GROUP_TEXT_BEFORE_DESCRIPTION_`,props:`text-before`},{default:a(()=>[i(l,{text:`_A_TRANSLATION_SHOW_MORE_`,"text-before":`$Aloha$ `})]),_:1},8,[`code-html`,`code-js`])}var me=c(fe,[[`render`,pe]]);function he(){return{codeHtml:`<a-translation
  :text="{ mobile: '_A_TRANSLATION_SHOW_MORE_', desktop: '_A_TRANSLATION_SHOW_LESS_' }"
></a-translation>`}}function ge(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextObject",
  components: {
    ATranslation,
  },
};`}}var _e={name:`PageTranslationTextObject`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=he(),{codeJs:t}=ge();return{codeHtml:e,codeJs:t}}};function ve(e,t,s,ee,c,te){let l=r(`a-translation`),u=r(`aloha-example`);return o(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TRANSLATION_GROUP_TEXT_OBJECT_HEADER_`,description:`_A_TRANSLATION_GROUP_TEXT_OBJECT_DESCRIPTION_`,props:`text (as Object)`},{default:a(()=>[i(l,{text:{mobile:`_A_TRANSLATION_SHOW_MORE_`,desktop:`_A_TRANSLATION_SHOW_LESS_`}})]),_:1},8,[`code-html`,`code-js`])}var ye=c(_e,[[`render`,ve]]);function be(){return{codeHtml:`<a-translation
  title="_SHOW_MORE_"
>Aloha</a-translation>`}}function xe(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTitle",
  components: {
    ATranslation,
  },
};`}}var Se={name:`PageTranslationTitle`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=be(),{codeJs:t}=xe();return{codeHtml:e,codeJs:t}}};function Ce(e,s,ee,c,te,l){let u=r(`a-translation`),d=r(`aloha-example`);return o(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TRANSLATION_GROUP_TITLE_HEADER_`,description:`_A_TRANSLATION_GROUP_TITLE_DESCRIPTION_`,props:`title`},{default:a(()=>[i(u,{title:`_A_TRANSLATION_SHOW_MORE_`},{default:a(()=>[...s[0]||=[t(`Aloha`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var we=c(Se,[[`render`,Ce]]);function Te(){return{codeHtml:`<a-translation
  :title="['_A_TRANSLATION_SHOW_MORE_', '_A_TRANSLATION_SHOW_MORE_', 'Aloha']"
>Aloha</a-translation>`}}function Ee(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTitleArray",
  components: {
    ATranslation,
  },
};`}}var De={name:`PageTranslationTitleArray`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=Te(),{codeJs:t}=Ee();return{codeHtml:e,codeJs:t}}};function $(e,s,ee,c,te,l){let u=r(`a-translation`),d=r(`aloha-example`);return o(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TRANSLATION_GROUP_TITLE_ARRAY_HEADER_`,description:`_A_TRANSLATION_GROUP_TITLE_ARRAY_DESCRIPTION_`,props:`title (as Array)`},{default:a(()=>[i(u,{title:[`_A_TRANSLATION_SHOW_MORE_`,`_A_TRANSLATION_SHOW_MORE_`,`Aloha`]},{default:a(()=>[...s[0]||=[t(`Aloha`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var Oe=c(De,[[`render`,$]]);function ke(){return{codeHtml:`<a-translation
  :title="{ desktop: '_A_TRANSLATION_SHOW_MORE_' }"
>Aloha</a-translation>`}}function Ae(){return{codeJs:`import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTitleObject",
  components: {
    ATranslation,
  },
};`}}var je={name:`PageTranslationTitleObject`,components:{AlohaExample:l,ATranslation:s},setup(){let{codeHtml:e}=ke(),{codeJs:t}=Ae();return{codeHtml:e,codeJs:t}}};function Me(e,s,ee,c,te,l){let u=r(`a-translation`),d=r(`aloha-example`);return o(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TRANSLATION_GROUP_TITLE_OBJECT_HEADER_`,description:`_A_TRANSLATION_GROUP_TITLE_OBJECT_DESCRIPTION_`,props:`title (as Object)`},{default:a(()=>[i(u,{title:{desktop:`_A_TRANSLATION_SHOW_MORE_`}},{default:a(()=>[...s[0]||=[t(`Aloha`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var Ne=c(je,[[`render`,Me]]);function Pe(){let t=e(()=>ee({placeholder:`_A_TRANSLATION_COMPONENT_NAME_`}));return{pageTitle:e(()=>`ATranslation${t.value?` (${t.value})`:``}`)}}function Fe(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`aria-label`,description:`_A_TRANSLATION_PROPS_ARIA_LABEL_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`extra`,description:`_A_TRANSLATION_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`html`,description:`_A_TRANSLATION_PROPS_HTML_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`placeholder`,description:`_A_TRANSLATION_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`safe-html`,description:`_A_TRANSLATION_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`tag`,description:`_A_TRANSLATION_PROPS_TAG_DESCRIPTION_`,type:`String`,default:`div`,required:!1},{name:`text`,description:`_A_TRANSLATION_PROPS_TEXT_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`text-after`,description:`_A_TRANSLATION_PROPS_TEXT_AFTER_DESCRIPTION_`,type:`String / Number / Object`,default:``,required:!1},{name:`text-before`,description:`_A_TRANSLATION_PROPS_TEXT_BEFORE_DESCRIPTION_`,type:`String / Number / Object`,default:``,required:!1},{name:`title`,description:`_A_TRANSLATION_PROPS_TITLE_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1}]}}function Ie(){return{dataSlots:[{name:`default`,description:`_A_TRANSLATION_SLOT_DEFAULT_DESCRIPTION_`}]}}var Le={name:`PageTranslation`,components:{AlohaPage:te,AlohaTableProps:u,ATranslation:s,PageTranslationAriaLabel:h,PageTranslationBasic:b,PageTranslationExtra:T,PageTranslationHtml:A,PageTranslationHtmlAfterBefore:F,PageTranslationPlaceholder:B,PageTranslationSafeHtml:G,PageTranslationSlotDefault:X,PageTranslationTextAfter:ie,PageTranslationTextAfterBefore:le,PageTranslationTextBefore:me,PageTranslationTextObject:ye,PageTranslationTitle:we,PageTranslationTitleArray:Oe,PageTranslationTitleObject:Ne},setup(){let{pageTitle:e}=Pe(),{dataProps:t}=Fe(),{dataSlots:n}=Ie();return{dataProps:t,dataSlots:n,pageTitle:e}}};function Re(e,t,s,ee,c,te){let l=r(`a-translation`),u=r(`page-translation-basic`),d=r(`page-translation-text-after`),f=r(`page-translation-text-before`),p=r(`page-translation-text-after-before`),m=r(`page-translation-text-object`),h=r(`page-translation-safe-html`),g=r(`page-translation-html`),_=r(`page-translation-html-after-before`),v=r(`page-translation-placeholder`),y=r(`page-translation-aria-label`),b=r(`page-translation-title`),x=r(`page-translation-title-object`),S=r(`page-translation-title-array`),C=r(`page-translation-extra`),w=r(`page-translation-slot-default`),T=r(`aloha-table-props`),E=r(`aloha-page`);return o(),n(E,{"page-title":e.pageTitle},{body:a(()=>[i(l,{tag:`p`,html:`_A_TRANSLATION_COMPONENT_DESCRIPTION_`}),i(u),i(d),i(f),i(p),i(m),i(h),i(g),i(_),i(v),i(y),i(b),i(x),i(S),i(C),i(w),i(T,{data:e.dataProps},null,8,[`data`]),i(T,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var ze=c(Le,[[`render`,Re]]);export{ze as default};