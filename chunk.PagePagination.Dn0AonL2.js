import{t as e}from"./chunk.AlohaPage.BSfHVC43.js";import{t}from"./chunk.AlohaTableProps.BlCiBCEj.js";import{t as n}from"./chunk.AlohaTableTranslate.CZ7cJb8v.js";import{Jt as r,Ut as i,Vt as a,_n as o,mn as s,on as c,un as l}from"./chunk.vendor.DL09mhUf.js";import{t as u}from"./chunk.AlohaExample.VTWuqY0j.js";import{t as d}from"./chunk.AlohaPaginationItems.xbF6gwai.js";import{K as f,L as p,R as m,hn as h,mn as g,p as _,t as v}from"./bundle.index.D-5bYXwk.js";function y(){return{codeHtml:`<div 
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
};`}}var x={name:`PagePaginationBasic`,components:{AlohaExample:u,AlohaPaginationItems:d,APagination:_},setup(){let e=o(87),t=o(10),n=o(5),r=o(0),i=[`10`,`25`,`50`,`100`],s=a(()=>{let n=e.value-r.value;return n<=0?0:Math.min(n,t.value)}),c=e=>{t.value=e,r.value=0},l=e=>{r.value=e},{codeHtml:u}=y(),{codeJs:d}=b();return{codeHtml:u,codeJs:d,totalCount:e,limit:t,limitsPerPage:i,maxPages:n,offset:r,rowsLength:s,updateLimit:c,updateOffset:l}}};function S(e,t,n,a,o,u){let d=l(`aloha-pagination-items`),f=l(`a-pagination`),p=l(`aloha-example`);return c(),i(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:s(()=>[r(d,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),r(f,{limit:e.limit,"limits-per-page":e.limitsPerPage,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`limits-per-page`,`max-pages`,`offset`,`rows-length`,`total-count`,`onUpdate:limit`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var C=v(x,[[`render`,S]]);function w(){return{codeHtml:`<a-switch
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
};`}}var E={name:`PagePaginationDisabled`,components:{AlohaExample:u,AlohaPaginationItems:d,APagination:_,ASwitch:p},setup(){let e=o(123),t=o(!0),n=o(10),r=o(5),i=o(0),s=[`10`,`25`,`50`,`100`],c=a(()=>{let t=e.value-i.value;return t<=0?0:Math.min(t,n.value)}),l=e=>{n.value=e,i.value=0},u=e=>{i.value=e},{codeHtml:d}=w(),{codeJs:f}=T();return{codeHtml:d,codeJs:f,totalCount:e,isDisabled:t,limit:n,limitsPerPage:s,maxPages:r,offset:i,rowsLength:c,updateLimit:l,updateOffset:u}}};function D(e,t,n,a,o,u){let d=l(`a-switch`),f=l(`aloha-pagination-items`),p=l(`a-pagination`),m=l(`aloha-example`);return c(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_GROUP_DISABLED_HEADER_`,description:`_A_PAGINATION_GROUP_DISABLED_DESCRIPTION_`,props:[`disabled`]},{default:s(()=>[r(d,{class:`a_mb_4`,modelValue:e.isDisabled,"onUpdate:modelValue":t[0]||=t=>e.isDisabled=t,label:`_LBL_DISABLED_`},null,8,[`modelValue`]),r(f,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),r(p,{disabled:e.isDisabled,limit:e.limit,"limits-per-page":e.limitsPerPage,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,[`disabled`,`limit`,`limits-per-page`,`max-pages`,`offset`,`rows-length`,`total-count`,`onUpdate:limit`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var O=v(E,[[`render`,D]]);function k(){return{codeHtml:`<a-multiselect-ordered
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
};`}}var j={name:`PagePaginationLimitsPerPage`,components:{AlohaExample:u,AlohaPaginationItems:d,AMultiselectOrdered:f,APagination:_},setup(){let e=o(143),t=o(10),n=o(5),r=o(0),i=[`5`,`10`,`25`,`50`,`75`,`100`],s=o([...i]),c=a(()=>{let n=e.value-r.value;return n<=0?0:Math.min(n,t.value)}),l=e=>{t.value=e,r.value=0},u=e=>{r.value=e},{codeHtml:d}=k(),{codeJs:f}=A();return{codeHtml:d,codeJs:f,totalCount:e,limit:t,limitsPerPageModel:s,limitsPerPageOptions:i,maxPages:n,offset:r,rowsLength:c,updateLimit:l,updateOffset:u}}};function M(e,t,n,a,o,u){let d=l(`a-multiselect-ordered`),f=l(`aloha-pagination-items`),p=l(`a-pagination`),m=l(`aloha-example`);return c(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_GROUP_LIMITS_PER_PAGE_HEADER_`,description:`_A_PAGINATION_GROUP_LIMITS_PER_PAGE_DESCRIPTION_`,props:[`limits-per-page`]},{default:s(()=>[r(d,{class:`a_mb_4`,modelValue:e.limitsPerPageModel,"onUpdate:modelValue":t[0]||=t=>e.limitsPerPageModel=t,data:e.limitsPerPageOptions,"is-data-simple-array":!0,label:`_A_PAGINATION_LIMITS_PER_PAGE_LABEL_`},null,8,[`modelValue`,`data`]),r(f,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),r(p,{limit:e.limit,"limits-per-page":e.limitsPerPageModel,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`limits-per-page`,`max-pages`,`offset`,`rows-length`,`total-count`,`onUpdate:limit`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var N=v(j,[[`render`,M]]);function P(){return{codeHtml:`<a-slider
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
};`}}var I={name:`PagePaginationMaxPages`,components:{AlohaExample:u,AlohaPaginationItems:d,APagination:_,ASlider:m},setup(){let e=o(143),t=o(10),n=o(5),r=o(0),i=[`10`,`25`,`50`,`100`],s=a(()=>{let n=e.value-r.value;return n<=0?0:Math.min(n,t.value)}),c=e=>{t.value=e,r.value=0},l=e=>{r.value=e},{codeHtml:u}=P(),{codeJs:d}=F();return{codeHtml:u,codeJs:d,totalCount:e,limit:t,limitsPerPage:i,maxPages:n,offset:r,rowsLength:s,updateLimit:c,updateOffset:l}}};function L(e,t,n,a,o,u){let d=l(`a-slider`),f=l(`aloha-pagination-items`),p=l(`a-pagination`),m=l(`aloha-example`);return c(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_GROUP_MAX_PAGES_HEADER_`,description:`_A_PAGINATION_GROUP_MAX_PAGES_DESCRIPTION_`,props:[`max-pages`]},{default:s(()=>[r(d,{class:`a_mb_4`,modelValue:e.maxPages,"onUpdate:modelValue":t[0]||=t=>e.maxPages=t,max:10,min:1,step:1,label:`_A_PAGINATION_MAX_PAGES_LABEL_`},null,8,[`modelValue`]),r(f,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),r(p,{limit:e.limit,"limits-per-page":e.limitsPerPage,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`limits-per-page`,`max-pages`,`offset`,`rows-length`,`total-count`,`onUpdate:limit`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var R=v(I,[[`render`,L]]);function z(){let e=a(()=>h({placeholder:`_A_PAGINATION_COMPONENT_NAME_`}));return{pageTitle:a(()=>`APagination${e.value?` (${e.value})`:``}`)}}function B(){return{dataProps:[{name:`disabled`,description:`_A_PAGINATION_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`limit`,description:`_A_PAGINATION_PROPS_LIMIT_DESCRIPTION_`,type:`Number`,default:void 0,required:!0},{name:`limits-per-page`,description:`_A_PAGINATION_PROPS_LIMITS_PER_PAGE_DESCRIPTION_`,type:`Array`,default:`() => ["10", "25", "50", "100"]`,required:!1},{name:`max-pages`,description:`_A_PAGINATION_PROPS_MAX_PAGES_DESCRIPTION_`,type:`Number`,default:5,required:!1},{name:`offset`,description:`_A_PAGINATION_PROPS_OFFSET_DESCRIPTION_`,type:`Number`,default:void 0,required:!0},{name:`rows-length`,description:`_A_PAGINATION_PROPS_ROWS_LENGTH_DESCRIPTION_`,type:`Number`,default:void 0,required:!0},{name:`modes`,description:`_A_PAGINATION_PROPS_MODES_DESCRIPTION_`,type:`Object`,default:`() => ({
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
  countFromTo: "_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_",
  countPerPage: "_A_COUNT_PER_PAGE_",
  countPerPageItem: "_A_COUNT_PER_PAGE_ITEM_{{count}}_",
})`,required:!1},{name:`total-count`,description:`_A_PAGINATION_PROPS_TOTAL_COUNT_DESCRIPTION_`,type:`Number`,default:void 0,required:!0}]}}function V(){return{dataTranslate:[`_A_COUNT_PER_PAGE_`,`_A_COUNT_PER_PAGE_ITEM_{{count}}_`,`_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_`,`_A_PAGINATION_FIRST_PAGE_`,`_A_PAGINATION_JUMPER_BUTTON_`,`_A_PAGINATION_JUMPER_ERROR_{{allPages}}_`,`_A_PAGINATION_JUMPER_LABEL_`,`_A_PAGINATION_JUMPER_OF_{{allPages}}_`,`_A_PAGINATION_LAST_PAGE_`,`_A_PAGINATION_LOAD_MORE_`,`_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_`,`_A_PAGINATION_NAVIGATION_`,`_A_PAGINATION_NEXT_PAGE_`,`_A_PAGINATION_PREVIOUS_PAGE_`,`_A_PAGINATION_TO_PAGE_{{page}}_`]}}var H={name:`PagePagination`,components:{ATranslation:g,AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,PagePaginationBasic:C,PagePaginationDisabled:O,PagePaginationLimitsPerPage:N,PagePaginationMaxPages:R},setup(){let{pageTitle:e}=z(),{dataProps:t}=B(),{dataTranslate:n}=V();return{dataProps:t,dataTranslate:n,pageTitle:e}}};function U(e,t,n,a,o,u){let d=l(`a-translation`),f=l(`page-pagination-basic`),p=l(`page-pagination-limits-per-page`),m=l(`page-pagination-max-pages`),h=l(`page-pagination-disabled`),g=l(`aloha-table-props`),_=l(`aloha-table-translate`),v=l(`aloha-table-css-vars`),y=l(`aloha-page`);return c(),i(y,{"page-title":e.pageTitle},{body:s(()=>[r(d,{tag:`p`,html:`_A_PAGINATION_COMPONENT_DESCRIPTION_`}),r(f),r(p),r(m),r(h),r(g,{data:e.dataProps},null,8,[`data`]),r(_,{data:e.dataTranslate},null,8,[`data`]),r(v,{files:[`utils/pagination`,`components/APagination`]})]),_:1},8,[`page-title`])}var W=v(H,[[`render`,U]]);export{W as default};