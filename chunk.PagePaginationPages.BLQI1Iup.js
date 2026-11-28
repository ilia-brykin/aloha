import{t as e}from"./chunk.AlohaPage.BSfHVC43.js";import{t}from"./chunk.AlohaTableProps.BlCiBCEj.js";import{t as n}from"./chunk.AlohaTableTranslate.CZ7cJb8v.js";import{Gt as r,Ht as i,Jt as a,Ut as o,Vt as s,_n as c,cn as l,mn as u,on as d,pn as f,un as p,wn as m,zt as h}from"./chunk.vendor.DL09mhUf.js";import{t as g}from"./chunk.AlohaExample.VTWuqY0j.js";import{t as _}from"./chunk.AlohaPaginationItems.xbF6gwai.js";import{L as v,R as y,V as b,hn as x,m as S,mn as C,sn as w,t as T}from"./bundle.index.D-5bYXwk.js";function ee(){return{codeHtml:`<div 
  class="page_pagination__items"
>
  <div 
    v-for="blockNumber in blockNumbers"
    :key="blockNumber"
    class="page_pagination__item"
  >
    <span class="page_pagination__item_index">{{ blockNumber }}</span>
  </div>
</div>
<a-pagination-pages
  :limit="limit"
  :max-pages="maxPages"
  :offset="offset"
  :total-count="totalCount"
  @update:offset="updateOffset"
></a-pagination-pages>`}}function te(){return{codeJs:`import {
  computed,
  ref,
} from "vue";
import {
  APaginationPages,
} from "aloha-vue";
    
export default {
  name: "PagePaginationPagesBasic",
  components: {
    APaginationPages,
  },
  setup() {
    const totalCount = ref(87);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);

    const rowsLength = computed(() => {
      const remaining = totalCount.value - offset.value;

      if (remaining <= 0) {
        return 0;
      }

      return Math.min(remaining, limit.value);
    });

    const blockNumbers = computed(() => Array.from(
      {
        length: rowsLength.value,
      },
      (_, index) => offset.value + index + 1,
    ));

    const updateOffset = value => {
      offset.value = value;
    };

    return {
      blockNumbers,
      limit,
      maxPages,
      offset,
      rowsLength,
      totalCount,
      updateOffset,
    };
  },
};`}}var E={name:`PagePaginationPagesBasic`,components:{AlohaExample:g,AlohaPaginationItems:_,APaginationPages:S},setup(){let e=c(87),t=c(10),n=c(5),r=c(0),i=s(()=>{let n=e.value-r.value;return n<=0?0:Math.min(n,t.value)}),a=e=>{r.value=e},{codeHtml:o}=ee(),{codeJs:l}=te();return{codeHtml:o,codeJs:l,limit:t,maxPages:n,offset:r,rowsLength:i,totalCount:e,updateOffset:a}}};function D(e,t,n,r,i,s){let c=p(`aloha-pagination-items`),l=p(`a-pagination-pages`),f=p(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:u(()=>[a(c,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),a(l,{limit:e.limit,"max-pages":e.maxPages,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`max-pages`,`offset`,`total-count`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var O=T(E,[[`render`,D]]);function k(){return{codeHtml:`<a-switch
  v-model="isDisabled"
  class="a_mb_4"
  label="_LBL_DISABLED_"
></a-switch>
<div 
  class="page_pagination__items"
>
  <div 
    v-for="blockNumber in blockNumbers"
    :key="blockNumber"
    class="page_pagination__item"
  >
    <span class="page_pagination__item_index">{{ blockNumber }}</span>
  </div>
</div>
<a-pagination-pages
  :disabled="isDisabled"
  :limit="limit"
  :max-pages="maxPages"
  :offset="offset"
  :total-count="totalCount"
  @update:offset="updateOffset"
></a-pagination-pages>`}}function A(){return{codeJs:`import {
  computed,
  ref,
} from "vue";
import {
  APaginationPages,
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PagePaginationPagesDisabled",
  components: {
    APaginationPages,
    ASwitch,
  },
  setup() {
    const totalCount = ref(87);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);
    const isDisabled = ref(true);

    const rowsLength = computed(() => {
      const remaining = totalCount.value - offset.value;

      if (remaining <= 0) {
        return 0;
      }

      return Math.min(remaining, limit.value);
    });

    const blockNumbers = computed(() => Array.from(
      {
        length: rowsLength.value,
      },
      (_, index) => offset.value + index + 1,
    ));

    const updateOffset = value => {
      offset.value = value;
    };

    return {
      blockNumbers,
      isDisabled,
      limit,
      maxPages,
      offset,
      rowsLength,
      totalCount,
      updateOffset,
    };
  },
};`}}var j={name:`PagePaginationPagesDisabled`,components:{AlohaExample:g,AlohaPaginationItems:_,APaginationPages:S,ASwitch:v},setup(){let e=c(87),t=c(10),n=c(5),r=c(0),i=c(!0),a=s(()=>{let n=e.value-r.value;return n<=0?0:Math.min(n,t.value)}),o=e=>{r.value=e},{codeHtml:l}=k(),{codeJs:u}=A();return{codeHtml:l,codeJs:u,isDisabled:i,limit:t,maxPages:n,offset:r,rowsLength:a,totalCount:e,updateOffset:o}}};function M(e,t,n,r,i,s){let c=p(`a-switch`),l=p(`aloha-pagination-items`),f=p(`a-pagination-pages`),m=p(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_DISABLED_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_DISABLED_DESCRIPTION_`,props:[`disabled`]},{default:u(()=>[a(c,{class:`a_mb_4`,modelValue:e.isDisabled,"onUpdate:modelValue":t[0]||=t=>e.isDisabled=t,label:`_LBL_DISABLED_`},null,8,[`modelValue`]),a(l,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),a(f,{disabled:e.isDisabled,limit:e.limit,"max-pages":e.maxPages,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,[`disabled`,`limit`,`max-pages`,`offset`,`total-count`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var N=T(j,[[`render`,M]]);function P(){return{codeHtml:`<a-pagination-pages
  :limit="limit"
  :offset="offset"
  :show-edges="true"
  :total-count="totalCount"
  @update:offset="updateOffset"
/>`}}function F(){return{codeJs:`import {
  ref,
  computed,
} from "vue";

import {
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    APaginationPages,
  },
  setup() {
    const totalCount = ref(300);
    const limit = ref(10);
    const offset = ref(90);
    const rowsLength = computed(() => {
      return Math.max(Math.min(totalCount.value - offset.value, limit.value), 0);
    });
    const updateOffset = value => {
      offset.value = value;
    };

    return {
      limit,
      offset,
      rowsLength,
      totalCount,
      updateOffset,
    };
  },
};`}}var I={name:`PagePaginationPagesEdges`,components:{AlohaExample:g,AlohaPaginationItems:_,APaginationPages:S},setup(){let{codeHtml:e}=P(),{codeJs:t}=F(),n=c(300),r=c(10),i=c(90);return{codeHtml:e,codeJs:t,limit:r,offset:i,rowsLength:s(()=>Math.max(Math.min(n.value-i.value,r.value),0)),totalCount:n,updateOffset:e=>{i.value=e}}}};function L(e,t,n,r,i,s){let c=p(`aloha-pagination-items`),l=p(`a-pagination-pages`),f=p(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_EDGES_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_EDGES_DESCRIPTION_`},{default:u(()=>[a(c,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),a(l,{limit:e.limit,offset:e.offset,"show-edges":!0,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`offset`,`total-count`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var R=T(I,[[`render`,L]]);function z(){return{codeHtml:`<a-button
  class="a_btn a_btn_outline_primary"
  text="total-count: 8"
  @click="totalCount = 8"
/>
<a-button
  class="a_btn a_btn_outline_primary"
  text="total-count: 80"
  @click="totalCount = 80"
/>
<a-pagination-pages
  v-model:page="page"
  :hide-on-single-page="true"
  :limit="10"
  :total-count="totalCount"
/>`}}function B(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    AButton,
    APaginationPages,
  },
  setup() {
    const totalCount = ref(8);
    const page = ref(1);

    return {
      page,
      totalCount,
    };
  },
};`}}var V={name:`PagePaginationPagesHideOnSinglePage`,components:{AlohaExample:g,AButton:w,APaginationPages:S},setup(){let{codeHtml:e}=z(),{codeJs:t}=B(),n=c(8);return{codeHtml:e,codeJs:t,page:c(1),totalCount:n}}},H={class:`a_mb_3`};function U(e,t,n,r,s,c){let l=p(`a-button`),f=p(`a-pagination-pages`),m=p(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_HIDE_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_HIDE_DESCRIPTION_`},{default:u(()=>[i(`div`,H,[a(l,{class:`a_mr_2 a_btn a_btn_outline_primary`,text:`total-count: 8`,onClick:t[0]||=t=>e.totalCount=8}),a(l,{class:`a_btn a_btn_outline_primary`,text:`total-count: 80`,onClick:t[1]||=t=>e.totalCount=80})]),a(f,{page:e.page,"onUpdate:page":t[2]||=t=>e.page=t,"hide-on-single-page":!0,limit:10,"total-count":e.totalCount},null,8,[`page`,`total-count`])]),_:1},8,[`code-html`,`code-js`])}var W=T(V,[[`render`,U]]);function G(){return{codeHtml:`<a-pagination-pages
  :limit="limit"
  :total-count="totalCount"
  mode="infinite"
  @update:limit="updateLimit"
/>`}}function K(){return{codeJs:`import {
  ref,
} from "vue";

import {
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    APaginationPages,
  },
  setup() {
    const totalCount = ref(60);
    const limit = ref(10);
    // the button and the scroll add the next rows: limit 10 -> 20 -> 30
    const updateLimit = value => {
      limit.value = value;
    };

    return {
      limit,
      totalCount,
      updateLimit,
    };
  },
};`}}var q={name:`PagePaginationPagesInfinite`,components:{AlohaExample:g,AlohaPaginationItems:_,APaginationPages:S},setup(){let{codeHtml:e}=G(),{codeJs:t}=K(),n=c(60),r=c(10);return{codeHtml:e,codeJs:t,limit:r,totalCount:n,updateLimit:e=>{r.value=e}}}};function J(e,t,n,r,i,s){let c=p(`aloha-pagination-items`),l=p(`a-pagination-pages`),f=p(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_INFINITE_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_INFINITE_DESCRIPTION_`},{default:u(()=>[a(c,{length:Math.min(e.limit,e.totalCount),offset:0},null,8,[`length`]),a(l,{limit:e.limit,"total-count":e.totalCount,mode:`infinite`,"onUpdate:limit":e.updateLimit},null,8,[`limit`,`total-count`,`onUpdate:limit`])]),_:1},8,[`code-html`,`code-js`])}var Y=T(q,[[`render`,J]]);function X(){return{codeHtml:`<a-pagination-pages
  :limit="limit"
  :offset="offset"
  :show-edges="true"
  :show-jumper="true"
  :total-count="totalCount"
  @update:offset="updateOffset"
/>`}}function Z(){return{codeJs:`import {
  ref,
  computed,
} from "vue";

import {
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    APaginationPages,
  },
  setup() {
    const totalCount = ref(500);
    const limit = ref(10);
    const offset = ref(0);
    const rowsLength = computed(() => {
      return Math.max(Math.min(totalCount.value - offset.value, limit.value), 0);
    });
    const updateOffset = value => {
      offset.value = value;
    };

    return {
      limit,
      offset,
      rowsLength,
      totalCount,
      updateOffset,
    };
  },
};`}}var Q={name:`PagePaginationPagesJumper`,components:{AlohaExample:g,AlohaPaginationItems:_,APaginationPages:S},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z(),n=c(500),r=c(10),i=c(0);return{codeHtml:e,codeJs:t,limit:r,offset:i,rowsLength:s(()=>Math.max(Math.min(n.value-i.value,r.value),0)),totalCount:n,updateOffset:e=>{i.value=e}}}};function ne(e,t,n,r,i,s){let c=p(`aloha-pagination-items`),l=p(`a-pagination-pages`),f=p(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_JUMPER_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_JUMPER_DESCRIPTION_`},{default:u(()=>[a(c,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),a(l,{limit:e.limit,offset:e.offset,"show-edges":!0,"show-jumper":!0,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`offset`,`total-count`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var re=T(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-slider
  v-model="maxPages"
  :max="10"
  :min="1"
  :step="1"
  class="a_mb_4"
  label="_A_PAGINATION_PAGES_MAX_PAGES_LABEL_"
></a-slider>
<div 
  class="page_pagination__items"
>
  <div 
    v-for="blockNumber in blockNumbers"
    :key="blockNumber"
    class="page_pagination__item"
  >
    <span class="page_pagination__item_index">{{ blockNumber }}</span>
  </div>
</div>
<a-pagination-pages
  :limit="limit"
  :max-pages="maxPages"
  :offset="offset"
  :total-count="totalCount"
  @update:offset="updateOffset"
></a-pagination-pages>`}}function ae(){return{codeJs:`import {
  computed,
  ref,
} from "vue";
import {
  APaginationPages,
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PagePaginationPagesMaxPages",
  components: {
    APaginationPages,
    ASlider,
  },
  setup() {
    const totalCount = ref(143);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);

    const rowsLength = computed(() => {
      const remaining = totalCount.value - offset.value;

      if (remaining <= 0) {
        return 0;
      }

      return Math.min(remaining, limit.value);
    });

    const blockNumbers = computed(() => Array.from(
      {
        length: rowsLength.value,
      },
      (_, index) => offset.value + index + 1,
    ));

    const updateOffset = value => {
      offset.value = value;
    };

    return {
      blockNumbers,
      limit,
      maxPages,
      offset,
      rowsLength,
      totalCount,
      updateOffset,
    };
  },
};`}}var oe={name:`PagePaginationPagesMaxPages`,components:{AlohaExample:g,AlohaPaginationItems:_,APaginationPages:S,ASlider:y},setup(){let e=c(143),t=c(10),n=c(5),r=c(0),i=s(()=>{let n=e.value-r.value;return n<=0?0:Math.min(n,t.value)}),a=e=>{r.value=e},{codeHtml:o}=ie(),{codeJs:l}=ae();return{codeHtml:o,codeJs:l,limit:t,maxPages:n,offset:r,rowsLength:i,totalCount:e,updateOffset:a}}};function se(e,t,n,r,i,s){let c=p(`a-slider`),l=p(`aloha-pagination-items`),f=p(`a-pagination-pages`),m=p(`aloha-example`);return d(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_MAX_PAGES_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_MAX_PAGES_DESCRIPTION_`,props:[`max-pages`]},{default:u(()=>[a(c,{class:`a_mb_4`,modelValue:e.maxPages,"onUpdate:modelValue":t[0]||=t=>e.maxPages=t,max:10,min:1,step:1,label:`_A_PAGINATION_PAGES_MAX_PAGES_LABEL_`},null,8,[`modelValue`]),a(l,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),a(f,{limit:e.limit,"max-pages":e.maxPages,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`max-pages`,`offset`,`total-count`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var ce=T(oe,[[`render`,se]]);function le(){return{codeHtml:`<div class="a_columns a_columns_count_12 a_mb_3">
  <div class="a_column a_column_6 a_column_12_touch">
  <a-select
    v-model="mode"
    :data="modeOptions"
    :deselectable="false"
    :translate-data="true"
    key-id="id"
    key-label="label"
    label="_A_PAGINATION_PAGES_MODE_LABEL_"
    type="select"
  ></a-select>
</div>
</div>

<div 
  class="page_pagination__items"
>
  <div 
    v-for="blockNumber in blockNumbers"
    :key="blockNumber"
    class="page_pagination__item"
  >
    <span class="page_pagination__item_index">{{ blockNumber }}</span>
  </div>
</div>
<a-pagination-pages
  :mode="mode"
  :limit="limit"
  :offset="offset"
  :total-count="totalCount"
  @update:limit="updateLimit"
  @update:offset="updateOffset"
></a-pagination-pages>`}}function ue(){return{codeJs:`import {
  computed,
  ref,
  watch,
} from "vue";
import {
  APaginationPages,
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PagePaginationPagesMode",
  components: {
    APaginationPages,
    ASelect,
  },
  setup() {
    const totalCount = ref(87);
    const limit = ref(10);
    const offset = ref(0);
    const mode = ref("short");
    const modeOptions = [
      {
        id: "short",
        label: "_A_PAGINATION_PAGES_MODE_SHORT_",
      },
      {
        id: "normal",
        label: "_A_PAGINATION_PAGES_MODE_NORMAL_",
      },
      {
        id: "loadMore",
        label: "_A_PAGINATION_PAGES_MODE_LOAD_MORE_",
      },
      {
        id: "infinite",
        label: "_A_PAGINATION_PAGES_MODE_INFINITE_",
      },
    ];

    const rowsLength = computed(() => {
      const remaining = totalCount.value - offset.value;

      if (remaining <= 0) {
        return 0;
      }

      return Math.min(remaining, limit.value);
    });

    const blockNumbers = computed(() => Array.from(
      {
        length: rowsLength.value,
      },
      (_, index) => offset.value + index + 1,
    ));

    const updateOffset = value => {
      offset.value = value;
    };

    // "loadMore": the next rows are added to the shown rows
    const updateLimit = value => {
      limit.value = value;
    };

    watch(mode, () => {
      limit.value = 10;
      offset.value = 0;
    });

    return {
      blockNumbers,
      limit,
      mode,
      modeOptions,
      offset,
      rowsLength,
      totalCount,
      updateLimit,
      updateOffset,
    };
  },
};`}}var de={name:`PagePaginationPagesMode`,components:{AlohaExample:g,AlohaPaginationItems:_,APaginationPages:S,ASelect:b},setup(){let e=c(87),t=c(10),n=c(0),r=c(`short`),i=[{id:`short`,label:`_A_PAGINATION_PAGES_MODE_SHORT_`},{id:`normal`,label:`_A_PAGINATION_PAGES_MODE_NORMAL_`},{id:`loadMore`,label:`_A_PAGINATION_PAGES_MODE_LOAD_MORE_`},{id:`infinite`,label:`_A_PAGINATION_PAGES_MODE_INFINITE_`}],a=s(()=>{let r=e.value-n.value;return r<=0?0:Math.min(r,t.value)}),o=e=>{n.value=e},l=e=>{t.value=e};f(r,()=>{t.value=10,n.value=0});let{codeHtml:u}=le(),{codeJs:d}=ue();return{codeHtml:u,codeJs:d,limit:t,mode:r,modeOptions:i,offset:n,rowsLength:a,totalCount:e,updateLimit:l,updateOffset:o}}},fe={class:`a_columns a_columns_count_12 a_mb_3`},pe={class:`a_column a_column_6 a_column_12_touch`};function me(e,t,n,r,s,c){let l=p(`a-select`),f=p(`aloha-pagination-items`),m=p(`a-pagination-pages`),h=p(`aloha-example`);return d(),o(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_MODE_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_MODE_DESCRIPTION_`,props:[`mode`]},{default:u(()=>[i(`div`,fe,[i(`div`,pe,[a(l,{modelValue:e.mode,"onUpdate:modelValue":t[0]||=t=>e.mode=t,data:e.modeOptions,deselectable:!1,"translate-data":!0,"key-id":`id`,"key-label":`label`,label:`_A_PAGINATION_PAGES_MODE_LABEL_`,type:`select`},null,8,[`modelValue`,`data`])])]),a(f,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),a(m,{mode:e.mode,limit:e.limit,offset:e.offset,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,[`mode`,`limit`,`offset`,`total-count`,`onUpdate:limit`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var he=T(de,[[`render`,me]]);function ge(){return{codeHtml:`<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
  @change="onChange"
/>
<pre>page: {{ page }}, change: {{ lastChange }}</pre>`}}function _e(){return{codeJs:`import {
  ref,
} from "vue";

import {
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    APaginationPages,
  },
  setup() {
    const page = ref(3);
    const lastChange = ref(undefined);
    // change: { page, offset, limit }
    const onChange = value => {
      lastChange.value = value;
    };

    return {
      lastChange,
      onChange,
      page,
    };
  },
};`}}var ve={name:`PagePaginationPagesPage`,components:{AlohaExample:g,APaginationPages:S},setup(){let{codeHtml:e}=ge(),{codeJs:t}=_e(),n=c(3),r=c(void 0);return{codeHtml:e,codeJs:t,lastChange:r,onChange:e=>{r.value=e},page:n}}},ye={class:`a_mt_3`};function be(e,t,n,r,s,c){let l=p(`a-pagination-pages`),f=p(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_PAGE_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_PAGE_DESCRIPTION_`},{default:u(()=>[a(l,{page:e.page,"onUpdate:page":t[0]||=t=>e.page=t,limit:10,"total-count":87,onChange:e.onChange},null,8,[`page`,`onChange`]),i(`pre`,ye,`page: `+m(e.page)+`, change: `+m(e.lastChange),1)]),_:1},8,[`code-html`,`code-js`])}var xe=T(ve,[[`render`,be]]);function Se(){return{codeHtml:`<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
  size="small"
/>
<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
/>
<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
  size="large"
/>`}}function Ce(){return{codeJs:`import {
  ref,
} from "vue";

import {
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    APaginationPages,
  },
  setup() {
    const page = ref(1);
    const sizes = ["small", "medium", "large"];

    return {
      page,
      sizes,
    };
  },
};`}}var we={name:`PagePaginationPagesSize`,components:{AlohaExample:g,APaginationPages:S},setup(){let{codeHtml:e}=Se(),{codeJs:t}=Ce();return{codeHtml:e,codeJs:t,page:c(1),sizes:[`small`,`medium`,`large`]}}};function Te(e,t,n,i,a,s){let c=p(`a-pagination-pages`),f=p(`aloha-example`);return d(),o(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_SIZE_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_SIZE_DESCRIPTION_`},{default:u(()=>[(d(!0),r(h,null,l(e.sizes,n=>(d(),o(c,{class:`a_mb_3`,key:n,page:e.page,"onUpdate:page":t[0]||=t=>e.page=t,limit:10,size:n,"total-count":87},null,8,[`page`,`size`]))),128))]),_:1},8,[`code-html`,`code-js`])}var Ee=T(we,[[`render`,Te]]);function De(){return{codeHtml:`<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
  mode="short"
>
  <template #previous>
    <span>← Back</span>
  </template>
  <template #next>
    <span>Next →</span>
  </template>
</a-pagination-pages>
<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
>
  <template #page="{ page: number, isActive }">
    <strong v-if="isActive">[{{ number }}]</strong>
    <span v-else>{{ number }}</span>
  </template>
</a-pagination-pages>`}}function $(){return{codeJs:`import {
  ref,
} from "vue";

import {
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    APaginationPages,
  },
  setup() {
    const page = ref(1);

    return {
      page,
    };
  },
};`}}var Oe={name:`PagePaginationPagesSlots`,components:{AlohaExample:g,APaginationPages:S},setup(){let{codeHtml:e}=De(),{codeJs:t}=$();return{codeHtml:e,codeJs:t,page:c(1)}}},ke={key:0},Ae={key:1};function je(e,t,n,s,c,l){let f=p(`a-pagination-pages`),h=p(`aloha-example`);return d(),o(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_SLOTS_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_SLOTS_DESCRIPTION_`},{default:u(()=>[a(f,{page:e.page,"onUpdate:page":t[0]||=t=>e.page=t,limit:10,"total-count":87,mode:`short`},{previous:u(()=>[...t[2]||=[i(`span`,null,`← Back`,-1)]]),next:u(()=>[...t[3]||=[i(`span`,null,`Next →`,-1)]]),_:1},8,[`page`]),a(f,{class:`a_mt_3`,page:e.page,"onUpdate:page":t[1]||=t=>e.page=t,limit:10,"total-count":87},{page:u(({page:e,isActive:t})=>[t?(d(),r(`strong`,ke,`[`+m(e)+`]`,1)):(d(),r(`span`,Ae,m(e),1))]),_:1},8,[`page`])]),_:1},8,[`code-html`,`code-js`])}var Me=T(Oe,[[`render`,je]]);function Ne(){let e=s(()=>x({placeholder:`_A_PAGINATION_PAGES_COMPONENT_NAME_`}));return{pageTitle:s(()=>`APaginationPages${e.value?` (${e.value})`:``}`)}}function Pe(){return{dataEvents:[{name:`change`,type:`Function`,description:`_A_PAGINATION_PAGES_EVENTS_CHANGE_DESCRIPTION_`},{name:`update:limit`,type:`Function`,description:`_A_PAGINATION_PAGES_EVENTS_UPDATE_LIMIT_DESCRIPTION_`},{name:`update:offset`,type:`Function`,description:`_A_PAGINATION_PAGES_EVENTS_UPDATE_OFFSET_DESCRIPTION_`},{name:`update:page`,type:`Function`,description:`_A_PAGINATION_PAGES_EVENTS_UPDATE_PAGE_DESCRIPTION_`}],dataProps:[{name:`disabled`,description:`_A_PAGINATION_PAGES_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`hide-on-single-page`,description:`_A_PAGINATION_PAGES_PROPS_HIDE_ON_SINGLE_PAGE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`icon-first`,description:`_A_PAGINATION_PAGES_PROPS_ICONS_DESCRIPTION_`,type:`String / Object`,default:`ChevronDoubleLeft (SVG)`,required:!1},{name:`icon-last`,description:`_A_PAGINATION_PAGES_PROPS_ICONS_DESCRIPTION_`,type:`String / Object`,default:`ChevronDoubleRight (SVG)`,required:!1},{name:`icon-next`,description:`_A_PAGINATION_PAGES_PROPS_ICONS_DESCRIPTION_`,type:`String / Object`,default:`ChevronRight (SVG)`,required:!1},{name:`icon-previous`,description:`_A_PAGINATION_PAGES_PROPS_ICONS_DESCRIPTION_`,type:`String / Object`,default:`ChevronLeft (SVG)`,required:!1},{name:`id`,description:`_A_PAGINATION_PAGES_PROPS_ID_DESCRIPTION_`,type:`String`,default:`uniqueId("a_pagination_pages_")`,required:!1},{name:`limit`,description:`_A_PAGINATION_PAGES_PROPS_LIMIT_DESCRIPTION_`,type:`Number`,default:void 0,required:!0},{name:`max-pages`,description:`_A_PAGINATION_PAGES_PROPS_MAX_PAGES_DESCRIPTION_`,type:`Number`,default:5,required:!1},{name:`mode`,description:`_A_PAGINATION_PAGES_PROPS_MODE_DESCRIPTION_`,type:`String`,default:`"normal"`,required:!1},{name:`offset`,description:`_A_PAGINATION_PAGES_PROPS_OFFSET_DESCRIPTION_`,type:`Number`,default:0,required:!1},{name:`page`,description:`_A_PAGINATION_PAGES_PROPS_PAGE_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`show-edges`,description:`_A_PAGINATION_PAGES_PROPS_SHOW_EDGES_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`show-jumper`,description:`_A_PAGINATION_PAGES_PROPS_SHOW_JUMPER_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`size`,description:`_A_PAGINATION_PAGES_PROPS_SIZE_DESCRIPTION_`,type:`String`,default:`"medium"`,required:!1},{name:`texts`,description:`_A_PAGINATION_PAGES_PROPS_TEXTS_DESCRIPTION_`,type:`Object`,default:`() => ({
  pagesFirstPage: "_A_PAGINATION_FIRST_PAGE_",
  pagesJumperButton: "_A_PAGINATION_JUMPER_BUTTON_",
  pagesJumperError: "_A_PAGINATION_JUMPER_ERROR_{{allPages}}_",
  pagesJumperLabel: "_A_PAGINATION_JUMPER_LABEL_",
  pagesJumperOf: "_A_PAGINATION_JUMPER_OF_{{allPages}}_",
  pagesLastPage: "_A_PAGINATION_LAST_PAGE_",
  pagesLoadMore: "_A_PAGINATION_LOAD_MORE_",
  pagesMobile: "_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_",
  pagesNavigation: "_A_PAGINATION_NAVIGATION_",
  pagesNextPage: "_A_PAGINATION_NEXT_PAGE_",
  pagesPreviousPage: "_A_PAGINATION_PREVIOUS_PAGE_",
  pagesToPage: "_A_PAGINATION_TO_PAGE_{{page}}_",
})`,required:!1},{name:`total-count`,description:`_A_PAGINATION_PAGES_PROPS_TOTAL_COUNT_DESCRIPTION_`,type:`Number`,default:void 0,required:!0}],dataSlots:[{name:`first`,description:`_A_PAGINATION_PAGES_SLOTS_ARROWS_DESCRIPTION_`},{name:`last`,description:`_A_PAGINATION_PAGES_SLOTS_ARROWS_DESCRIPTION_`},{name:`next`,description:`_A_PAGINATION_PAGES_SLOTS_ARROWS_DESCRIPTION_`},{name:`page`,description:`_A_PAGINATION_PAGES_SLOTS_PAGE_DESCRIPTION_`},{name:`previous`,description:`_A_PAGINATION_PAGES_SLOTS_ARROWS_DESCRIPTION_`}]}}function Fe(){return{dataTranslate:[`_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_`,`_A_PAGINATION_FIRST_PAGE_`,`_A_PAGINATION_JUMPER_BUTTON_`,`_A_PAGINATION_JUMPER_ERROR_{{allPages}}_`,`_A_PAGINATION_JUMPER_LABEL_`,`_A_PAGINATION_JUMPER_OF_{{allPages}}_`,`_A_PAGINATION_LAST_PAGE_`,`_A_PAGINATION_LOAD_MORE_`,`_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_`,`_A_PAGINATION_NAVIGATION_`,`_A_PAGINATION_NEXT_PAGE_`,`_A_PAGINATION_PREVIOUS_PAGE_`,`_A_PAGINATION_TO_PAGE_{{page}}_`]}}var Ie={name:`PagePaginationPages`,components:{ATranslation:C,AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,PagePaginationPagesBasic:O,PagePaginationPagesDisabled:N,PagePaginationPagesEdges:R,PagePaginationPagesJumper:re,PagePaginationPagesPage:xe,PagePaginationPagesHideOnSinglePage:W,PagePaginationPagesInfinite:Y,PagePaginationPagesSize:Ee,PagePaginationPagesSlots:Me,PagePaginationPagesMaxPages:ce,PagePaginationPagesMode:he},setup(){let{pageTitle:e}=Ne(),{dataEvents:t,dataProps:n,dataSlots:r}=Pe(),{dataTranslate:i}=Fe();return{dataEvents:t,dataProps:n,dataSlots:r,dataTranslate:i,pageTitle:e}}};function Le(e,t,n,r,i,s){let c=p(`a-translation`),l=p(`page-pagination-pages-basic`),f=p(`page-pagination-pages-max-pages`),m=p(`page-pagination-pages-edges`),h=p(`page-pagination-pages-jumper`),g=p(`page-pagination-pages-page`),_=p(`page-pagination-pages-mode`),v=p(`page-pagination-pages-infinite`),y=p(`page-pagination-pages-hide-on-single-page`),b=p(`page-pagination-pages-size`),x=p(`page-pagination-pages-slots`),S=p(`page-pagination-pages-disabled`),C=p(`aloha-table-props`),w=p(`aloha-table-translate`),T=p(`aloha-page`);return d(),o(T,{"page-title":e.pageTitle},{body:u(()=>[a(c,{tag:`p`,html:`_A_PAGINATION_PAGES_COMPONENT_DESCRIPTION_`}),a(c,{tag:`p`,html:`_A_PAGINATION_PAGES_ACCESSIBILITY_`}),a(l),a(f),a(m),a(h),a(g),a(_),a(v),a(y),a(b),a(x),a(S),a(C,{data:e.dataProps},null,8,[`data`]),a(C,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),a(C,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),a(w,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var Re=T(Ie,[[`render`,Le]]);export{Re as default};