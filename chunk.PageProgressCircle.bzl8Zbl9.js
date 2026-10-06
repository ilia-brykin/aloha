import{Ct as e,Tt as t,Ut as n,kt as r,qt as i,zt as a}from"./chunk.vendor.CZPox1kV.js";import{Z as o,kt as s,l as c,t as l}from"./bundle.index.BmSiyQNH.js";import{n as u,t as d}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as f}from"./chunk.AlohaTableProps.Dksi7fmb.js";function p(){return{codeHtml:`<a-progress-circle
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
};`}}var h={name:`PageProgressCircleBasic`,components:{AlohaExample:d,AProgressCircle:c},setup(){let{codeHtml:e}=p(),{codeJs:t}=m();return{codeHtml:e,codeJs:t}}};function g(e,o,s,c,l,u){let d=n(`a-progress-circle`),f=n(`aloha-example`);return a(),t(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:`value`},{default:i(()=>[r(d,{value:20}),r(d,{class:`a_mt_3`,value:50})]),_:1},8,[`code-html`,`code-js`])}var _=l(h,[[`render`,g]]);function v(){return{codeHtml:`<a-progress-circle
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
};`}}var b={name:`PageProgressCircleIndeterminate`,components:{AlohaExample:d,AProgressCircle:c},setup(){let{codeHtml:e}=v(),{codeJs:t}=y();return{codeHtml:e,codeJs:t}}};function x(e,o,s,c,l,u){let d=n(`a-progress-circle`),f=n(`aloha-example`);return a(),t(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_CIRCLE_GROUP_INDETERMINATE_HEADER_`,description:`_A_PROGRESS_CIRCLE_GROUP_INDETERMINATE_DESCRIPTION_`,props:`indeterminate`},{default:i(()=>[r(d,{value:20,indeterminate:!0}),r(d,{class:`a_mt_3`,value:50,indeterminate:!0}),r(d,{class:`a_mt_3`,value:80,indeterminate:!0})]),_:1},8,[`code-html`,`code-js`])}var S=l(b,[[`render`,x]]);function C(){let t=e(()=>s({placeholder:`_A_PROGRESS_CIRCLE_COMPONENT_NAME_`}));return{pageTitle:e(()=>`AProgressCircle${t.value?` (${t.value})`:``}`)}}function w(){return{dataProps:[{name:`duration`,description:`_A_PROGRESS_CIRCLE_PROPS_DURATION_`,type:`Number`,default:`undefined`,required:!1},{name:`indeterminate`,description:`_A_PROGRESS_CIRCLE_PROPS_INDETERMINATE_`,type:`Boolean`,default:`false`,required:!1},{name:`max`,description:`_A_PROGRESS_CIRCLE_PROPS_MAX_`,type:`Number`,default:100,required:!1},{name:`min`,description:`_A_PROGRESS_CIRCLE_PROPS_MIN_`,type:`Number`,default:0,required:!1},{name:`rotate`,description:`_A_PROGRESS_CIRCLE_PROPS_ROTATE_`,type:`Number`,default:0,required:!1},{name:`showValue`,description:`_A_PROGRESS_CIRCLE_PROPS_SHOW_VALUE_`,type:`Boolean`,default:`true`,required:!1},{name:`strokeWidth`,description:`_A_PROGRESS_CIRCLE_PROPS_STROKE_WIDTH_`,type:`Number`,default:5,required:!1},{name:`value`,description:`_A_PROGRESS_CIRCLE_PROPS_VALUE_`,type:`Number`,default:0,required:!1},{name:`valueTextClass`,description:`_A_PROGRESS_CIRCLE_PROPS_VALUE_TEXT_CLASS_`,type:`String / Object`,default:`undefined`,required:!1},{name:`valueTextInteger`,description:`_A_PROGRESS_CIRCLE_PROPS_VALUE_TEXT_INTEGER_`,type:`Boolean`,default:`false`,required:!1},{name:`width`,description:`_A_PROGRESS_CIRCLE_PROPS_WIDTH_`,type:`Number / String`,default:125,required:!1}]}}function T(){return{dataSlots:[{name:`progressText`,description:`_A_PROGRESS_CIRCLE_SLOT_PROGRESS_TEXT_`}]}}var E={name:`PageProgressCircle`,components:{AlohaPage:u,AlohaTableProps:f,ATranslation:o,PageProgressCircleBasic:_,PageProgressCircleIndeterminate:S},setup(){let{pageTitle:e}=C(),{dataProps:t}=w(),{dataSlots:n}=T();return{dataProps:t,dataSlots:n,pageTitle:e}}};function D(e,o,s,c,l,u){let d=n(`a-translation`),f=n(`page-progress-circle-basic`),p=n(`page-progress-circle-indeterminate`),m=n(`aloha-table-props`),h=n(`aloha-page`);return a(),t(h,{"page-title":e.pageTitle},{body:i(()=>[r(d,{tag:`p`,html:`_A_PROGRESS_CIRCLE_COMPONENT_DESCRIPTION_`}),r(f),r(p),r(m,{data:e.dataProps},null,8,[`data`]),r(m,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var O=l(E,[[`render`,D]]);export{O as default};