import{t as e}from"./chunk.AlohaPage.B2JXMr8i.js";import{t}from"./chunk.AlohaTableProps.BF__w4H9.js";import{t as n}from"./chunk.AlohaTableTranslate.BguQoEcR.js";import{$t as r,Ft as i,It as a,Pt as o,Vt as s,ln as c,rn as l,sn as u}from"./chunk.vendor.BvryzG0o.js";import{t as d}from"./chunk.AlohaExample.CdQ6SjdT.js";import{t as f}from"./chunk.AlohaPaginationItems.DCeAfGr4.js";import{$t as p,F as m,I as h,d as g,qt as _,z as v}from"./bundle.index.BaX-GPsX.js";import{t as y}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function b(){return{codeHtml:`<div 
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
></a-pagination-pages>`}}function x(){return{codeJs:`import {
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
};`}}var S={name:`PagePaginationPagesBasic`,components:{AlohaExample:d,AlohaPaginationItems:f,APaginationPages:g},setup(){let e=c(87),t=c(10),n=c(5),r=c(0),i=o(()=>{let n=e.value-r.value;return n<=0?0:Math.min(n,t.value)}),a=e=>{r.value=e},{codeHtml:s}=b(),{codeJs:l}=x();return{codeHtml:s,codeJs:l,limit:t,maxPages:n,offset:r,rowsLength:i,totalCount:e,updateOffset:a}}};function C(e,t,n,i,o,c){let d=l(`aloha-pagination-items`),f=l(`a-pagination-pages`),p=l(`aloha-example`);return r(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:u(()=>[s(d,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),s(f,{limit:e.limit,"max-pages":e.maxPages,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`max-pages`,`offset`,`total-count`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var w=y(S,[[`render`,C]]);function T(){return{codeHtml:`<a-switch
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
></a-pagination-pages>`}}function E(){return{codeJs:`import {
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
};`}}var D={name:`PagePaginationPagesDisabled`,components:{AlohaExample:d,AlohaPaginationItems:f,APaginationPages:g,ASwitch:m},setup(){let e=c(87),t=c(10),n=c(5),r=c(0),i=c(!0),a=o(()=>{let n=e.value-r.value;return n<=0?0:Math.min(n,t.value)}),s=e=>{r.value=e},{codeHtml:l}=T(),{codeJs:u}=E();return{codeHtml:l,codeJs:u,isDisabled:i,limit:t,maxPages:n,offset:r,rowsLength:a,totalCount:e,updateOffset:s}}};function O(e,t,n,i,o,c){let d=l(`a-switch`),f=l(`aloha-pagination-items`),p=l(`a-pagination-pages`),m=l(`aloha-example`);return r(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_DISABLED_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_DISABLED_DESCRIPTION_`,props:[`disabled`]},{default:u(()=>[s(d,{class:`a_mb_4`,modelValue:e.isDisabled,"onUpdate:modelValue":t[0]||=t=>e.isDisabled=t,label:`_LBL_DISABLED_`},null,8,[`modelValue`]),s(f,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),s(p,{disabled:e.isDisabled,limit:e.limit,"max-pages":e.maxPages,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,[`disabled`,`limit`,`max-pages`,`offset`,`total-count`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var k=y(D,[[`render`,O]]);function A(){return{codeHtml:`<a-slider
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
></a-pagination-pages>`}}function j(){return{codeJs:`import {
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
};`}}var M={name:`PagePaginationPagesMaxPages`,components:{AlohaExample:d,AlohaPaginationItems:f,APaginationPages:g,ASlider:h},setup(){let e=c(143),t=c(10),n=c(5),r=c(0),i=o(()=>{let n=e.value-r.value;return n<=0?0:Math.min(n,t.value)}),a=e=>{r.value=e},{codeHtml:s}=A(),{codeJs:l}=j();return{codeHtml:s,codeJs:l,limit:t,maxPages:n,offset:r,rowsLength:i,totalCount:e,updateOffset:a}}};function N(e,t,n,i,o,c){let d=l(`a-slider`),f=l(`aloha-pagination-items`),p=l(`a-pagination-pages`),m=l(`aloha-example`);return r(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_MAX_PAGES_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_MAX_PAGES_DESCRIPTION_`,props:[`max-pages`]},{default:u(()=>[s(d,{class:`a_mb_4`,modelValue:e.maxPages,"onUpdate:modelValue":t[0]||=t=>e.maxPages=t,max:10,min:1,step:1,label:`_A_PAGINATION_PAGES_MAX_PAGES_LABEL_`},null,8,[`modelValue`]),s(f,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),s(p,{limit:e.limit,"max-pages":e.maxPages,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`max-pages`,`offset`,`total-count`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var P=y(M,[[`render`,N]]);function F(){return{codeHtml:`<div class="a_columns a_columns_count_12 a_mb_3">
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
  @update:offset="updateOffset"
></a-pagination-pages>`}}function I(){return{codeJs:`import {
  computed,
  ref,
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

    return {
      blockNumbers,
      limit,
      mode,
      modeOptions,
      offset,
      rowsLength,
      totalCount,
      updateOffset,
    };
  },
};`}}var L={name:`PagePaginationPagesMode`,components:{AlohaExample:d,AlohaPaginationItems:f,APaginationPages:g,ASelect:v},setup(){let e=c(87),t=c(10),n=c(0),r=c(`short`),i=[{id:`short`,label:`_A_PAGINATION_PAGES_MODE_SHORT_`},{id:`normal`,label:`_A_PAGINATION_PAGES_MODE_NORMAL_`}],a=o(()=>{let r=e.value-n.value;return r<=0?0:Math.min(r,t.value)}),s=e=>{n.value=e},{codeHtml:l}=F(),{codeJs:u}=I();return{codeHtml:l,codeJs:u,limit:t,mode:r,modeOptions:i,offset:n,rowsLength:a,totalCount:e,updateOffset:s}}},R={class:`a_columns a_columns_count_12 a_mb_3`},z={class:`a_column a_column_6 a_column_12_touch`};function B(e,t,n,o,c,d){let f=l(`a-select`),p=l(`aloha-pagination-items`),m=l(`a-pagination-pages`),h=l(`aloha-example`);return r(),a(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_MODE_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_MODE_DESCRIPTION_`,props:[`mode`]},{default:u(()=>[i(`div`,R,[i(`div`,z,[s(f,{modelValue:e.mode,"onUpdate:modelValue":t[0]||=t=>e.mode=t,data:e.modeOptions,deselectable:!1,"translate-data":!0,"key-id":`id`,"key-label":`label`,label:`_A_PAGINATION_PAGES_MODE_LABEL_`,type:`select`},null,8,[`modelValue`,`data`])])]),s(p,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),s(m,{mode:e.mode,limit:e.limit,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,[`mode`,`limit`,`offset`,`total-count`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var V=y(L,[[`render`,B]]);function H(){let e=o(()=>p({placeholder:`_A_PAGINATION_PAGES_COMPONENT_NAME_`}));return{pageTitle:o(()=>`APaginationPages${e.value?` (${e.value})`:``}`)}}function U(){return{dataProps:[{name:`disabled`,description:`_A_PAGINATION_PAGES_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`limit`,description:`_A_PAGINATION_PAGES_PROPS_LIMIT_DESCRIPTION_`,type:`Number`,default:void 0,required:!0},{name:`max-pages`,description:`_A_PAGINATION_PAGES_PROPS_MAX_PAGES_DESCRIPTION_`,type:`Number`,default:5,required:!1},{name:`mode`,description:`_A_PAGINATION_PAGES_PROPS_MODE_DESCRIPTION_`,type:`String`,default:`normal`,required:!1},{name:`offset`,description:`_A_PAGINATION_PAGES_PROPS_OFFSET_DESCRIPTION_`,type:`Number`,default:void 0,required:!0},{name:`texts`,description:`_A_PAGINATION_PAGES_PROPS_TEXTS_DESCRIPTION_`,type:`Object`,default:`() => ({
  pagesFirstPage: "_A_PAGINATION_FIRST_PAGE_",
  pagesLastPage: "_A_PAGINATION_LAST_PAGE_",
  pagesMobile: "_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_",
  pagesNavigation: "_A_PAGINATION_NAVIGATION_",
  pagesNextPage: "_A_PAGINATION_NEXT_PAGE_",
  pagesPreviousPage: "_A_PAGINATION_PREVIOUS_PAGE_",
  pagesToPage: "_A_PAGINATION_TO_PAGE_{{page}}_",
})`,required:!1},{name:`total-count`,description:`_A_PAGINATION_PAGES_PROPS_TOTAL_COUNT_DESCRIPTION_`,type:`Number`,default:void 0,required:!0}]}}function W(){return{dataTranslate:[`_A_PAGINATION_FIRST_PAGE_`,`_A_PAGINATION_LAST_PAGE_`,`_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_`,`_A_PAGINATION_NAVIGATION_`,`_A_PAGINATION_NEXT_PAGE_`,`_A_PAGINATION_PREVIOUS_PAGE_`,`_A_PAGINATION_TO_PAGE_{{page}}_`]}}var G={name:`PagePaginationPages`,components:{ATranslation:_,AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,PagePaginationPagesBasic:w,PagePaginationPagesDisabled:k,PagePaginationPagesMaxPages:P,PagePaginationPagesMode:V},setup(){let{pageTitle:e}=H(),{dataProps:t}=U(),{dataTranslate:n}=W();return{dataProps:t,dataTranslate:n,pageTitle:e}}};function K(e,t,n,i,o,c){let d=l(`a-translation`),f=l(`page-pagination-pages-basic`),p=l(`page-pagination-pages-max-pages`),m=l(`page-pagination-pages-mode`),h=l(`page-pagination-pages-disabled`),g=l(`aloha-table-props`),_=l(`aloha-table-translate`),v=l(`aloha-page`);return r(),a(v,{"page-title":e.pageTitle},{body:u(()=>[s(d,{tag:`p`,html:`_A_PAGINATION_PAGES_COMPONENT_DESCRIPTION_`}),s(f),s(p),s(m),s(h),s(g,{data:e.dataProps},null,8,[`data`]),s(_,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var q=y(G,[[`render`,K]]);export{q as default};