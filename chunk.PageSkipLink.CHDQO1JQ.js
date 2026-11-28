import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{t}from"./chunk.AlohaTableProps.BIN1mKDB.js";import{t as n}from"./chunk.AlohaTableTranslate.ZCrkGUQc.js";import{t as r}from"./chunk.AlohaExample.Bx3NX4bX.js";import{hn as i,mn as a,s as o,t as s}from"./bundle.index.LlT2KVEy.js";import{Bt as c,Ht as l,Vt as u,an as d,ln as f,pn as p,qt as m}from"./chunk.vendor.SEynj6EJ.js";function h(){return{codeHtml:`<!-- App.vue: the first element of the page -->
<a-skip-link />

<header>...</header>
<nav>...</nav>

<main id="main">
  <router-view />
</main>`}}function g(){return{codeJs:`import {
  ASkipLink,
} from "aloha-vue";

export default {
  components: {
    ASkipLink,
  },
};`}}var _={name:`PageSkipLinkBasic`,components:{AlohaExample:r,ASkipLink:o,ATranslation:a},setup(){let{codeHtml:e}=h(),{codeJs:t}=g();return{codeHtml:e,codeJs:t}}},v={class:`a_tile a_mt_3`,id:`skip_link_example_content`},y={class:`a_tile__body`};function b(e,t,n,r,i,a){let o=f(`a-skip-link`),s=f(`a-translation`),c=f(`aloha-example`);return d(),l(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_SKIP_LINK_BASIC_DESCRIPTION_`,props:[`target-id`]},{default:p(()=>[m(o,{"target-id":`skip_link_example_content`}),u(`div`,v,[u(`div`,y,[m(s,{tag:`p`,text:`_A_SKIP_LINK_EXAMPLE_CONTENT_`})])])]),_:1},8,[`code-html`,`code-js`])}var x=s(_,[[`render`,b]]);function S(){let e=c(()=>i({placeholder:`_A_SKIP_LINK_COMPONENT_NAME_`}));return{pageTitle:c(()=>`ASkipLink${e.value?` (${e.value})`:``}`)}}function C(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`target-id`,description:`_A_SKIP_LINK_PROPS_TARGET_ID_DESCRIPTION_`,type:`String`,default:`"main"`,required:!1},{name:`text`,description:`_A_SKIP_LINK_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:`"_A_SKIP_LINK_TEXT_"`,required:!1}]}}function w(){return{dataTranslate:[`_A_SKIP_LINK_TEXT_`]}}var T={name:`PageSkipLink`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:a,PageSkipLinkBasic:x},setup(){let{pageTitle:e}=S(),{dataProps:t}=C(),{dataTranslate:n}=w();return{dataProps:t,dataTranslate:n,pageTitle:e}}};function E(e,t,n,r,i,a){let o=f(`a-translation`),s=f(`page-skip-link-basic`),c=f(`aloha-table-props`),u=f(`aloha-table-translate`),h=f(`aloha-table-css-vars`),g=f(`aloha-page`);return d(),l(g,{"page-title":e.pageTitle},{body:p(()=>[m(o,{tag:`p`,html:`_A_SKIP_LINK_COMPONENT_DESCRIPTION_`}),m(s),m(c,{data:e.dataProps},null,8,[`data`]),m(u,{data:e.dataTranslate},null,8,[`data`]),m(h,{files:`components/ASkipLink`})]),_:1},8,[`page-title`])}var D=s(T,[[`render`,E]]);export{D as default};