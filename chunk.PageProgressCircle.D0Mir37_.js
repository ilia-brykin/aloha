import{t as e}from"./chunk.AlohaPage.CtPiWSGW.js";import{t}from"./chunk.AlohaTableProps.DfVbg0QG.js";import{t as n}from"./chunk.AlohaExample.Bs_TZ3nZ.js";import{$ as r,c as i,jt as a}from"./bundle.index.Dik8P8_q.js";import{Et as o,Mt as s,Ot as c,Ut as l,Zt as u,qt as d}from"./chunk.vendor.BLRpG40B.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function p(){return{codeHtml:`<a-progress-circle
  :value="20"
></a-progress-circle>
<a-progress-circle
  class="a_mt_3"
  :value="50"
></a-progress-circle>`}}function m(){return{codeJs:`import { 
  AProgressCircle,
} from "aloha-vue";";
    
export default {
  name: "PageProgressBasic",
  components: {
    AProgressCircle,
  },
};`}}var h={name:`PageProgressCircleBasic`,components:{AlohaExample:n,AProgressCircle:i},setup(){let{codeHtml:e}=p(),{codeJs:t}=m();return{codeHtml:e,codeJs:t}}};function g(e,t,n,r,i,a){let o=d(`a-progress-circle`),f=d(`aloha-example`);return l(),c(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:`value`},{default:u(()=>[s(o,{value:20}),s(o,{class:`a_mt_3`,value:50})]),_:1},8,[`code-html`,`code-js`])}var _=f(h,[[`render`,g]]);function v(){return{codeHtml:`<a-progress-circle
  :value="20"
  :indeterminate="true"
></a-progress-circle>
<a-progress-circle
  class="a_mt_3"
  :value="50"
  :indeterminate="true"
></a-progress-circle>
<a-progress-circle
  class="a_mt_3"
  :value="80"
  :indeterminate="true"
></a-progress-circle>`}}function y(){return{codeJs:`import { 
  AProgressCircle,
} from "aloha-vue";";
    
export default {
  name: "PageProgressCircleIndeterminate",
  components: {
    AProgressCircle,
  },
};`}}var b={name:`PageProgressCircleIndeterminate`,components:{AlohaExample:n,AProgressCircle:i},setup(){let{codeHtml:e}=v(),{codeJs:t}=y();return{codeHtml:e,codeJs:t}}};function x(e,t,n,r,i,a){let o=d(`a-progress-circle`),f=d(`aloha-example`);return l(),c(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_CIRCLE_GROUP_INDETERMINATE_HEADER_`,description:`_A_PROGRESS_CIRCLE_GROUP_INDETERMINATE_DESCRIPTION_`,props:`indeterminate`},{default:u(()=>[s(o,{value:20,indeterminate:!0}),s(o,{class:`a_mt_3`,value:50,indeterminate:!0}),s(o,{class:`a_mt_3`,value:80,indeterminate:!0})]),_:1},8,[`code-html`,`code-js`])}var S=f(b,[[`render`,x]]);function C(){let e=o(()=>a({placeholder:`_A_PROGRESS_CIRCLE_COMPONENT_NAME_`}));return{pageTitle:o(()=>`AProgressCircle${e.value?` (${e.value})`:``}`)}}function w(){return{dataProps:[{name:`aria-label`,description:`_A_PROGRESS_PROPS_ARIA_LABEL_`,type:`String`,default:`"_A_PROGRESS_ARIA_LABEL_"`,required:`false`},{name:`duration`,description:`_A_PROGRESS_CIRCLE_PROPS_DURATION_`,type:`Number`,default:`undefined`,required:!1},{name:`indeterminate`,description:`_A_PROGRESS_CIRCLE_PROPS_INDETERMINATE_`,type:`Boolean`,default:`false`,required:!1},{name:`max`,description:`_A_PROGRESS_CIRCLE_PROPS_MAX_`,type:`Number`,default:100,required:!1},{name:`min`,description:`_A_PROGRESS_CIRCLE_PROPS_MIN_`,type:`Number`,default:0,required:!1},{name:`rotate`,description:`_A_PROGRESS_CIRCLE_PROPS_ROTATE_`,type:`Number`,default:0,required:!1},{name:`showValue`,description:`_A_PROGRESS_CIRCLE_PROPS_SHOW_VALUE_`,type:`Boolean`,default:`true`,required:!1},{name:`strokeWidth`,description:`_A_PROGRESS_CIRCLE_PROPS_STROKE_WIDTH_`,type:`Number`,default:5,required:!1},{name:`value`,description:`_A_PROGRESS_CIRCLE_PROPS_VALUE_`,type:`Number`,default:0,required:!1},{name:`valueTextClass`,description:`_A_PROGRESS_CIRCLE_PROPS_VALUE_TEXT_CLASS_`,type:`String / Object`,default:`undefined`,required:!1},{name:`valueTextInteger`,description:`_A_PROGRESS_CIRCLE_PROPS_VALUE_TEXT_INTEGER_`,type:`Boolean`,default:`false`,required:!1},{name:`width`,description:`_A_PROGRESS_CIRCLE_PROPS_WIDTH_`,type:`Number / String`,default:125,required:!1}]}}function T(){return{dataSlots:[{name:`progressText`,description:`_A_PROGRESS_CIRCLE_SLOT_PROGRESS_TEXT_`}]}}var E={name:`PageProgressCircle`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:r,PageProgressCircleBasic:_,PageProgressCircleIndeterminate:S},setup(){let{pageTitle:e}=C(),{dataProps:t}=w(),{dataSlots:n}=T();return{dataProps:t,dataSlots:n,pageTitle:e}}};function D(e,t,n,r,i,a){let o=d(`a-translation`),f=d(`page-progress-circle-basic`),p=d(`page-progress-circle-indeterminate`),m=d(`aloha-table-props`),h=d(`aloha-table-css-vars`),g=d(`aloha-page`);return l(),c(g,{"page-title":e.pageTitle},{body:u(()=>[s(o,{tag:`p`,html:`_A_PROGRESS_CIRCLE_COMPONENT_DESCRIPTION_`}),s(f),s(p),s(m,{data:e.dataProps},null,8,[`data`]),s(m,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),s(h,{files:`components/AProgressCircle`})]),_:1},8,[`page-title`])}var O=f(E,[[`render`,D]]);export{O as default};