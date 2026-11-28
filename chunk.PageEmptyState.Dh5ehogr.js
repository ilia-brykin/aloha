import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{t}from"./chunk.AlohaTableProps.-68XY4u1.js";import{t as n}from"./chunk.AlohaExample.CDuUdjpI.js";import{at as r,hn as i,lt as a,mn as o,sn as s,t as c}from"./bundle.index.DikcaTJ9.js";import{Bt as l,Cn as u,Ht as d,Rt as f,Ut as p,Vt as m,Wt as h,an as g,gn as _,ln as v,pn as y,qt as b,sn as x}from"./chunk.vendor.SEynj6EJ.js";function S(){return{codeHtml:`<a-empty-state
  class="a_tile"
  icon="Inbox"
  header-tag="h3"
  header-text="_A_EMPTY_STATE_EXAMPLE_BASIC_HEADER_"
  text="_A_EMPTY_STATE_EXAMPLE_BASIC_TEXT_"
>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="PlusLg"
    text="_A_EMPTY_STATE_EXAMPLE_BASIC_BTN_"
  />
</a-empty-state>`}}function C(){return{codeJs:`import {
  AButton,
  AEmptyState,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AEmptyState,
  },
};`}}var w={name:`PageEmptyStateBasic`,components:{AButton:s,AEmptyState:a,AlohaExample:n},setup(){let{codeHtml:e}=S(),{codeJs:t}=C();return{codeHtml:e,codeJs:t}}};function T(e,t,n,r,i,a){let o=v(`a-button`),s=v(`a-empty-state`),c=v(`aloha-example`);return g(),d(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_EMPTY_STATE_BASIC_DESCRIPTION_`,props:[`icon`,`header-text`,`header-tag`,`text`]},{default:y(()=>[b(s,{class:`a_tile`,icon:`Inbox`,"header-tag":`h3`,"header-text":`_A_EMPTY_STATE_EXAMPLE_BASIC_HEADER_`,text:`_A_EMPTY_STATE_EXAMPLE_BASIC_TEXT_`},{default:y(()=>[b(o,{class:`a_btn a_btn_primary`,"icon-left":`PlusLg`,text:`_A_EMPTY_STATE_EXAMPLE_BASIC_BTN_`})]),_:1})]),_:1},8,[`code-html`,`code-js`])}var E=c(w,[[`render`,T]]);function D(){return{codeHtml:`<a-input
  v-model="search"
  label="_A_EMPTY_STATE_EXAMPLE_SEARCH_LABEL_"
  model-undefined=""
/>
<ul v-if="itemsFiltered.length">
  <li v-for="item in itemsFiltered" :key="item">{{ item }}</li>
</ul>

<!-- the live region is always in the page, only its content changes -->
<div role="status">
  <a-empty-state
    v-if="!itemsFiltered.length"
    icon="Search"
    header-text="_A_EMPTY_STATE_EXAMPLE_SEARCH_HEADER_"
    text="_A_EMPTY_STATE_EXAMPLE_SEARCH_TEXT_"
    :extra="{ search }"
  >
    <a-button
      class="a_btn a_btn_secondary"
      text="_A_EMPTY_STATE_EXAMPLE_SEARCH_BTN_"
      @click="search = ''"
    />
  </a-empty-state>
</div>`}}function O(){return{codeJs:`import {
  computed,
  ref,
} from "vue";

import {
  AButton,
  AEmptyState,
  AInput,
} from "aloha-vue";

// i18n: "_A_EMPTY_STATE_EXAMPLE_SEARCH_HEADER_": "Nothing found for \\"{{ search }}\\""

export default {
  components: {
    AButton,
    AEmptyState,
    AInput,
  },
  setup() {
    const items = ["Honolulu", "Hilo", "Kailua", "Lahaina", "Waikiki"];
    const search = ref("xyz");

    const itemsFiltered = computed(() => {
      const SEARCH = search.value.trim().toLowerCase();
      return items.filter(item => item.toLowerCase().includes(SEARCH));
    });

    return {
      itemsFiltered,
      search,
    };
  },
};`}}var k={name:`PageEmptyStateSearch`,components:{AButton:s,AEmptyState:a,AInput:r,AlohaExample:n},setup(){let{codeHtml:e}=D(),{codeJs:t}=O(),n=[`Honolulu`,`Hilo`,`Kailua`,`Lahaina`,`Waikiki`],r=_(`xyz`);return{codeHtml:e,codeJs:t,itemsFiltered:l(()=>{let e=r.value.trim().toLowerCase();return n.filter(t=>t.toLowerCase().includes(e))}),search:r}}},A={key:0,class:`a_mt_3`},j={role:`status`};function M(e,t,n,r,i,a){let o=v(`a-input`),s=v(`a-button`),c=v(`a-empty-state`),l=v(`aloha-example`);return g(),d(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_EMPTY_STATE_SEARCH_HEADER_`,description:`_A_EMPTY_STATE_SEARCH_DESCRIPTION_`,props:[`extra`]},{default:y(()=>[b(o,{modelValue:e.search,"onUpdate:modelValue":t[0]||=t=>e.search=t,label:`_A_EMPTY_STATE_EXAMPLE_SEARCH_LABEL_`,"model-undefined":``},null,8,[`modelValue`]),e.itemsFiltered.length?(g(),h(`ul`,A,[(g(!0),h(f,null,x(e.itemsFiltered,e=>(g(),h(`li`,{key:e},u(e),1))),128))])):p(``,!0),m(`div`,j,[e.itemsFiltered.length?p(``,!0):(g(),d(c,{key:0,icon:`Search`,"header-text":`_A_EMPTY_STATE_EXAMPLE_SEARCH_HEADER_`,text:`_A_EMPTY_STATE_EXAMPLE_SEARCH_TEXT_`,extra:{search:e.search}},{default:y(()=>[b(s,{class:`a_btn a_btn_secondary`,text:`_A_EMPTY_STATE_EXAMPLE_SEARCH_BTN_`,onClick:t[1]||=t=>e.search=``})]),_:1},8,[`extra`]))])]),_:1},8,[`code-html`,`code-js`])}var N=c(k,[[`render`,M]]);function P(){let e=l(()=>i({placeholder:`_A_EMPTY_STATE_COMPONENT_NAME_`}));return{pageTitle:l(()=>`AEmptyState${e.value?` (${e.value})`:``}`)}}function F(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`header-tag`,description:`_A_EMPTY_STATE_PROPS_HEADER_TAG_DESCRIPTION_`,type:`String`,default:`"p"`,required:!1},{name:`header-text`,description:`_A_EMPTY_STATE_PROPS_HEADER_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_EMPTY_STATE_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_EMPTY_STATE_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1}],dataSlots:[{name:`default`,description:`_A_EMPTY_STATE_SLOTS_DEFAULT_DESCRIPTION_`},{name:`icon`,description:`_A_EMPTY_STATE_SLOTS_ICON_DESCRIPTION_`}]}}var I={name:`PageEmptyState`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:o,PageEmptyStateBasic:E,PageEmptyStateSearch:N},setup(){let{pageTitle:e}=P(),{dataProps:t,dataSlots:n}=F();return{dataProps:t,dataSlots:n,pageTitle:e}}};function L(e,t,n,r,i,a){let o=v(`a-translation`),s=v(`page-empty-state-basic`),c=v(`page-empty-state-search`),l=v(`aloha-table-props`),u=v(`aloha-table-css-vars`),f=v(`aloha-page`);return g(),d(f,{"page-title":e.pageTitle},{body:y(()=>[b(o,{tag:`p`,html:`_A_EMPTY_STATE_COMPONENT_DESCRIPTION_`}),b(s),b(c),b(l,{data:e.dataProps},null,8,[`data`]),b(l,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),b(u,{files:`components/AEmptyState`})]),_:1},8,[`page-title`])}var R=c(I,[[`render`,L]]);export{R as default};