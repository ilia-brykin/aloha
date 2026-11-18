import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{t}from"./chunk.AlohaTableProps.Cny8B0rP.js";import{t as n}from"./chunk.AlohaTableTranslate.BDkz3ESy.js";import{Ft as r,Nt as i,Xt as a,en as o,in as s,on as c,zt as l}from"./chunk.vendor.Cx127fe1.js";import{t as u}from"./chunk.AlohaExample.Dh7-vA8e.js";import{t as d}from"./chunk.AlohaPaginationItems.UfO58JAb.js";import{I as f,Mt as p,W as m,et as h,l as g,o as _}from"./bundle.index.Csp1_sOL.js";import{t as v}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function y(){return{codeHtml:`<div 
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
<a-pagination
  :limit="limit"
  :limits-per-page="limitsPerPage"
  :max-pages="maxPages"
  :offset="offset"
  :rows-length="rowsLength"
  :total-count="totalCount"
  @update:limit="updateLimit"
  @update:offset="updateOffset"
></a-pagination>`}}function b(){return{codeJs:`import {
  computed,
  ref,
} from "vue";
import {
  APagination,
} from "aloha-vue";
    
export default {
  name: "PagePaginationBasic",
  components: {
    APagination,
  },
  setup() {
    const totalCount = ref(87);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);
    
    const limitsPerPage = [
      "10",
      "25",
      "50",
      "100",
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
    
    const updateLimit = value => {
      limit.value = value;
      offset.value = 0;
    };
    
    const updateOffset = value => {
      offset.value = value;
    };
    
    return {
      blockNumbers,
      totalCount,
      limit,
      limitsPerPage,
      maxPages,
      offset,
      rowsLength,
      updateLimit,
      updateOffset,
    };
  },
};`}}var x={name:`PagePaginationBasic`,components:{AlohaExample:u,AlohaPaginationItems:d,APagination:g},setup(){let e=c(87),t=c(10),n=c(5),r=c(0),a=[`10`,`25`,`50`,`100`],o=i(()=>{let n=e.value-r.value;return n<=0?0:Math.min(n,t.value)}),s=e=>{t.value=e,r.value=0},l=e=>{r.value=e},{codeHtml:u}=y(),{codeJs:d}=b();return{codeHtml:u,codeJs:d,totalCount:e,limit:t,limitsPerPage:a,maxPages:n,offset:r,rowsLength:o,updateLimit:s,updateOffset:l}}};function S(e,t,n,i,c,u){let d=o(`aloha-pagination-items`),f=o(`a-pagination`),p=o(`aloha-example`);return a(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:s(()=>[l(d,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),l(f,{limit:e.limit,"limits-per-page":e.limitsPerPage,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`limits-per-page`,`max-pages`,`offset`,`rows-length`,`total-count`,`onUpdate:limit`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var C=v(x,[[`render`,S]]);function w(){return{codeHtml:`<a-switch
  class="a_mb_4"
  v-model="isDisabled"
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
<a-pagination
  :disabled="isDisabled"
  :limit="limit"
  :limits-per-page="limitsPerPage"
  :max-pages="maxPages"
  :offset="offset"
  :rows-length="rowsLength"
  :total-count="totalCount"
  @update:limit="updateLimit"
  @update:offset="updateOffset"
></a-pagination>`}}function T(){return{codeJs:`import {
  computed,
  ref,
} from "vue";
import {
  APagination,
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PagePaginationDisabled",
  components: {
    APagination,
    ASwitch,
  },
  setup() {
    const totalCount = ref(123);
    const isDisabled = ref(true);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);
        
    const limitsPerPage = [
      "10",
      "25",
      "50",
      "100",
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
    
    const updateLimit = value => {
      limit.value = value;
      offset.value = 0;
    };
    
    const updateOffset = value => {
      offset.value = value;
    };
    
    return {
      blockNumbers,
      totalCount,
      isDisabled,
      limit,
      limitsPerPage,
      maxPages,
      offset,
      rowsLength,
      updateLimit,
      updateOffset,
    };
  },
};`}}var E={name:`PagePaginationDisabled`,components:{AlohaExample:u,AlohaPaginationItems:d,APagination:g,ASwitch:f},setup(){let e=c(123),t=c(!0),n=c(10),r=c(5),a=c(0),o=[`10`,`25`,`50`,`100`],s=i(()=>{let t=e.value-a.value;return t<=0?0:Math.min(t,n.value)}),l=e=>{n.value=e,a.value=0},u=e=>{a.value=e},{codeHtml:d}=w(),{codeJs:f}=T();return{codeHtml:d,codeJs:f,totalCount:e,isDisabled:t,limit:n,limitsPerPage:o,maxPages:r,offset:a,rowsLength:s,updateLimit:l,updateOffset:u}}};function D(e,t,n,i,c,u){let d=o(`a-switch`),f=o(`aloha-pagination-items`),p=o(`a-pagination`),m=o(`aloha-example`);return a(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_GROUP_DISABLED_HEADER_`,description:`_A_PAGINATION_GROUP_DISABLED_DESCRIPTION_`,props:[`disabled`]},{default:s(()=>[l(d,{class:`a_mb_4`,modelValue:e.isDisabled,"onUpdate:modelValue":t[0]||=t=>e.isDisabled=t,label:`_LBL_DISABLED_`},null,8,[`modelValue`]),l(f,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),l(p,{disabled:e.isDisabled,limit:e.limit,"limits-per-page":e.limitsPerPage,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,[`disabled`,`limit`,`limits-per-page`,`max-pages`,`offset`,`rows-length`,`total-count`,`onUpdate:limit`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var O=v(E,[[`render`,D]]);function k(){return{codeHtml:`<a-multiselect-ordered
  v-model="limitsPerPageModel"
  :data="limitsPerPageOptions"
  :is-data-simple-array="true"
  class="a_mb_4"
  label="_A_PAGINATION_LIMITS_PER_PAGE_LABEL_"
></a-multiselect-ordered>
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
<a-pagination
  :limit="limit"
  :limits-per-page="limitsPerPageModel"
  :max-pages="maxPages"
  :offset="offset"
  :rows-length="rowsLength"
  :total-count="totalCount"
  @update:limit="updateLimit"
  @update:offset="updateOffset"
></a-pagination>`}}function A(){return{codeJs:`import {
  computed,
  ref,
} from "vue";
import {
  AMultiselectOrdered,
  APagination,
} from "aloha-vue";
    
export default {
  name: "PagePaginationLimitsPerPage",
  components: {
    AMultiselectOrdered,
    APagination,
  },
  setup() {
    const totalCount = ref(143);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);
    const limitsPerPageOptions = [
      "5",
      "10",
      "25",
      "50",
      "75",
      "100",
    ];
    const limitsPerPageModel = ref([...limitsPerPageOptions]);

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
    
    const updateLimit = value => {
      limit.value = value;
      offset.value = 0;
    };
    
    const updateOffset = value => {
      offset.value = value;
    };
    
    return {
      blockNumbers,
      totalCount,
      limit,
      limitsPerPageModel,
      limitsPerPageOptions,
      maxPages,
      offset,
      rowsLength,
      updateLimit,
      updateOffset,
    };
  },
};`}}var j={name:`PagePaginationLimitsPerPage`,components:{AlohaExample:u,AlohaPaginationItems:d,AMultiselectOrdered:m,APagination:g},setup(){let e=c(143),t=c(10),n=c(5),r=c(0),a=[`5`,`10`,`25`,`50`,`75`,`100`],o=c([...a]),s=i(()=>{let n=e.value-r.value;return n<=0?0:Math.min(n,t.value)}),l=e=>{t.value=e,r.value=0},u=e=>{r.value=e},{codeHtml:d}=k(),{codeJs:f}=A();return{codeHtml:d,codeJs:f,totalCount:e,limit:t,limitsPerPageModel:o,limitsPerPageOptions:a,maxPages:n,offset:r,rowsLength:s,updateLimit:l,updateOffset:u}}};function M(e,t,n,i,c,u){let d=o(`a-multiselect-ordered`),f=o(`aloha-pagination-items`),p=o(`a-pagination`),m=o(`aloha-example`);return a(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_GROUP_LIMITS_PER_PAGE_HEADER_`,description:`_A_PAGINATION_GROUP_LIMITS_PER_PAGE_DESCRIPTION_`,props:[`limits-per-page`]},{default:s(()=>[l(d,{class:`a_mb_4`,modelValue:e.limitsPerPageModel,"onUpdate:modelValue":t[0]||=t=>e.limitsPerPageModel=t,data:e.limitsPerPageOptions,"is-data-simple-array":!0,label:`_A_PAGINATION_LIMITS_PER_PAGE_LABEL_`},null,8,[`modelValue`,`data`]),l(f,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),l(p,{limit:e.limit,"limits-per-page":e.limitsPerPageModel,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`limits-per-page`,`max-pages`,`offset`,`rows-length`,`total-count`,`onUpdate:limit`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var N=v(j,[[`render`,M]]);function P(){return{codeHtml:`<a-slider
  v-model="maxPages"
  :max="10"
  :min="1"
  :step="1"
  class="a_mb_4"
  label="_A_PAGINATION_MAX_PAGES_LABEL_"
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
<a-pagination
  :limit="limit"
  :limits-per-page="limitsPerPage"
  :max-pages="maxPages"
  :offset="offset"
  :rows-length="rowsLength"
  :total-count="totalCount"
  @update:limit="updateLimit"
  @update:offset="updateOffset"
></a-pagination>`}}function F(){return{codeJs:`import {
  computed,
  ref,
} from "vue";
import {
  APagination,
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PagePaginationMaxPages",
  components: {
    APagination,
    ASlider,
  },
  setup() {
    const totalCount = ref(143);
    const limit = ref(10);
    const maxPages = ref(5);
    const offset = ref(0);
    const limitsPerPage = [
      "10",
      "25",
      "50",
      "100",
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
    
    const updateLimit = value => {
      limit.value = value;
      offset.value = 0;
    };
    
    const updateOffset = value => {
      offset.value = value;
    };
    
    return {
      blockNumbers,
      totalCount,
      limit,
      limitsPerPage,
      maxPages,
      offset,
      rowsLength,
      updateLimit,
      updateOffset,
    };
  },
};`}}var I={name:`PagePaginationMaxPages`,components:{AlohaExample:u,AlohaPaginationItems:d,APagination:g,ASlider:_},setup(){let e=c(143),t=c(10),n=c(5),r=c(0),a=[`10`,`25`,`50`,`100`],o=i(()=>{let n=e.value-r.value;return n<=0?0:Math.min(n,t.value)}),s=e=>{t.value=e,r.value=0},l=e=>{r.value=e},{codeHtml:u}=P(),{codeJs:d}=F();return{codeHtml:u,codeJs:d,totalCount:e,limit:t,limitsPerPage:a,maxPages:n,offset:r,rowsLength:o,updateLimit:s,updateOffset:l}}};function L(e,t,n,i,c,u){let d=o(`a-slider`),f=o(`aloha-pagination-items`),p=o(`a-pagination`),m=o(`aloha-example`);return a(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_GROUP_MAX_PAGES_HEADER_`,description:`_A_PAGINATION_GROUP_MAX_PAGES_DESCRIPTION_`,props:[`max-pages`]},{default:s(()=>[l(d,{class:`a_mb_4`,modelValue:e.maxPages,"onUpdate:modelValue":t[0]||=t=>e.maxPages=t,max:10,min:1,step:1,label:`_A_PAGINATION_MAX_PAGES_LABEL_`},null,8,[`modelValue`]),l(f,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),l(p,{limit:e.limit,"limits-per-page":e.limitsPerPage,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`limits-per-page`,`max-pages`,`offset`,`rows-length`,`total-count`,`onUpdate:limit`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var R=v(I,[[`render`,L]]);function z(){let e=i(()=>p({placeholder:`_A_PAGINATION_COMPONENT_NAME_`}));return{pageTitle:i(()=>`APagination${e.value?` (${e.value})`:``}`)}}function B(){return{dataProps:[{name:`disabled`,description:`_A_PAGINATION_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`limit`,description:`_A_PAGINATION_PROPS_LIMIT_DESCRIPTION_`,type:`Number`,default:void 0,required:!0},{name:`limits-per-page`,description:`_A_PAGINATION_PROPS_LIMITS_PER_PAGE_DESCRIPTION_`,type:`Array`,default:`() => ["10", "25", "50", "100"]`,required:!1},{name:`max-pages`,description:`_A_PAGINATION_PROPS_MAX_PAGES_DESCRIPTION_`,type:`Number`,default:5,required:!1},{name:`offset`,description:`_A_PAGINATION_PROPS_OFFSET_DESCRIPTION_`,type:`Number`,default:void 0,required:!0},{name:`rows-length`,description:`_A_PAGINATION_PROPS_ROWS_LENGTH_DESCRIPTION_`,type:`Number`,default:void 0,required:!0},{name:`modes`,description:`_A_PAGINATION_PROPS_MODES_DESCRIPTION_`,type:`Object`,default:`() => ({
  perPage: {
    mode: "group",
    position: 0,
    showTextCountFromTo: true,
  },
  pagination: {
    mode: "normal",
    position: 1,
  },
})`,required:!1},{name:`texts`,description:`_A_PAGINATION_PROPS_TEXTS_DESCRIPTION_`,type:`Object`,default:`() => ({
  pagesFirstPage: "_A_PAGINATION_FIRST_PAGE_",
  pagesLastPage: "_A_PAGINATION_LAST_PAGE_",
  pagesMobile: "_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_",
  pagesNavigation: "_A_PAGINATION_NAVIGATION_",
  pagesNextPage: "_A_PAGINATION_NEXT_PAGE_",
  pagesPreviousPage: "_A_PAGINATION_PREVIOUS_PAGE_",
  pagesToPage: "_A_PAGINATION_TO_PAGE_{{page}}_",
  countFromTo: "_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_",
  countPerPage: "_A_COUNT_PER_PAGE_",
  countPerPageItem: "_A_COUNT_PER_PAGE_ITEM_{{count}}_",
})`,required:!1},{name:`total-count`,description:`_A_PAGINATION_PROPS_TOTAL_COUNT_DESCRIPTION_`,type:`Number`,default:void 0,required:!0}]}}function V(){return{dataTranslate:[`_A_COUNT_PER_PAGE_`,`_A_COUNT_PER_PAGE_ITEM_{{count}}_`,`_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_`,`_A_PAGINATION_FIRST_PAGE_`,`_A_PAGINATION_LAST_PAGE_`,`_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_`,`_A_PAGINATION_NAVIGATION_`,`_A_PAGINATION_NEXT_PAGE_`,`_A_PAGINATION_PREVIOUS_PAGE_`,`_A_PAGINATION_TO_PAGE_{{page}}_`]}}var H={name:`PagePagination`,components:{ATranslation:h,AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,PagePaginationBasic:C,PagePaginationDisabled:O,PagePaginationLimitsPerPage:N,PagePaginationMaxPages:R},setup(){let{pageTitle:e}=z(),{dataProps:t}=B(),{dataTranslate:n}=V();return{dataProps:t,dataTranslate:n,pageTitle:e}}};function U(e,t,n,i,c,u){let d=o(`a-translation`),f=o(`page-pagination-basic`),p=o(`page-pagination-limits-per-page`),m=o(`page-pagination-max-pages`),h=o(`page-pagination-disabled`),g=o(`aloha-table-props`),_=o(`aloha-table-translate`),v=o(`aloha-table-css-vars`),y=o(`aloha-page`);return a(),r(y,{"page-title":e.pageTitle},{body:s(()=>[l(d,{tag:`p`,html:`_A_PAGINATION_COMPONENT_DESCRIPTION_`}),l(f),l(p),l(m),l(h),l(g,{data:e.dataProps},null,8,[`data`]),l(_,{data:e.dataTranslate},null,8,[`data`]),l(v,{files:[`utils/pagination`,`components/APagination`]})]),_:1},8,[`page-title`])}var W=v(H,[[`render`,U]]);export{W as default};