import{Ct as e,Tt as t,Ut as n,Yt as r,kt as i,qt as a,zt as o}from"./chunk.vendor.CZPox1kV.js";import{I as s,U as c,Z as l,d as u,kt as d,s as f,t as p}from"./bundle.index.BmSiyQNH.js";import{n as m,t as h}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as g}from"./chunk.AlohaTableProps.Dksi7fmb.js";import{t as _}from"./chunk.AlohaTableTranslate.C-b2Nle9.js";import{t as v}from"./chunk.AlohaPaginationItems.yHotd0Pc.js";function y(){return{codeHtml:`<div 
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
};`}}var x={name:`PagePaginationBasic`,components:{AlohaExample:h,AlohaPaginationItems:v,APagination:u},setup(){let t=r(87),n=r(10),i=r(5),a=r(0),o=[`10`,`25`,`50`,`100`],s=e(()=>{let e=t.value-a.value;return e<=0?0:Math.min(e,n.value)}),c=e=>{n.value=e,a.value=0},l=e=>{a.value=e},{codeHtml:u}=y(),{codeJs:d}=b();return{codeHtml:u,codeJs:d,totalCount:t,limit:n,limitsPerPage:o,maxPages:i,offset:a,rowsLength:s,updateLimit:c,updateOffset:l}}};function S(e,r,s,c,l,u){let d=n(`aloha-pagination-items`),f=n(`a-pagination`),p=n(`aloha-example`);return o(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:a(()=>[i(d,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),i(f,{limit:e.limit,"limits-per-page":e.limitsPerPage,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`limits-per-page`,`max-pages`,`offset`,`rows-length`,`total-count`,`onUpdate:limit`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var C=p(x,[[`render`,S]]);function w(){return{codeHtml:`<a-switch
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
};`}}var E={name:`PagePaginationDisabled`,components:{AlohaExample:h,AlohaPaginationItems:v,APagination:u,ASwitch:s},setup(){let t=r(123),n=r(!0),i=r(10),a=r(5),o=r(0),s=[`10`,`25`,`50`,`100`],c=e(()=>{let e=t.value-o.value;return e<=0?0:Math.min(e,i.value)}),l=e=>{i.value=e,o.value=0},u=e=>{o.value=e},{codeHtml:d}=w(),{codeJs:f}=T();return{codeHtml:d,codeJs:f,totalCount:t,isDisabled:n,limit:i,limitsPerPage:s,maxPages:a,offset:o,rowsLength:c,updateLimit:l,updateOffset:u}}};function D(e,r,s,c,l,u){let d=n(`a-switch`),f=n(`aloha-pagination-items`),p=n(`a-pagination`),m=n(`aloha-example`);return o(),t(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_GROUP_DISABLED_HEADER_`,description:`_A_PAGINATION_GROUP_DISABLED_DESCRIPTION_`,props:[`disabled`]},{default:a(()=>[i(d,{class:`a_mb_4`,modelValue:e.isDisabled,"onUpdate:modelValue":r[0]||=t=>e.isDisabled=t,label:`_LBL_DISABLED_`},null,8,[`modelValue`]),i(f,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),i(p,{disabled:e.isDisabled,limit:e.limit,"limits-per-page":e.limitsPerPage,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,[`disabled`,`limit`,`limits-per-page`,`max-pages`,`offset`,`rows-length`,`total-count`,`onUpdate:limit`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var O=p(E,[[`render`,D]]);function k(){return{codeHtml:`<a-multiselect-ordered
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
};`}}var j={name:`PagePaginationLimitsPerPage`,components:{AlohaExample:h,AlohaPaginationItems:v,AMultiselectOrdered:c,APagination:u},setup(){let t=r(143),n=r(10),i=r(5),a=r(0),o=[`5`,`10`,`25`,`50`,`75`,`100`],s=r([...o]),c=e(()=>{let e=t.value-a.value;return e<=0?0:Math.min(e,n.value)}),l=e=>{n.value=e,a.value=0},u=e=>{a.value=e},{codeHtml:d}=k(),{codeJs:f}=A();return{codeHtml:d,codeJs:f,totalCount:t,limit:n,limitsPerPageModel:s,limitsPerPageOptions:o,maxPages:i,offset:a,rowsLength:c,updateLimit:l,updateOffset:u}}};function M(e,r,s,c,l,u){let d=n(`a-multiselect-ordered`),f=n(`aloha-pagination-items`),p=n(`a-pagination`),m=n(`aloha-example`);return o(),t(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_GROUP_LIMITS_PER_PAGE_HEADER_`,description:`_A_PAGINATION_GROUP_LIMITS_PER_PAGE_DESCRIPTION_`,props:[`limits-per-page`]},{default:a(()=>[i(d,{class:`a_mb_4`,modelValue:e.limitsPerPageModel,"onUpdate:modelValue":r[0]||=t=>e.limitsPerPageModel=t,data:e.limitsPerPageOptions,"is-data-simple-array":!0,label:`_A_PAGINATION_LIMITS_PER_PAGE_LABEL_`},null,8,[`modelValue`,`data`]),i(f,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),i(p,{limit:e.limit,"limits-per-page":e.limitsPerPageModel,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`limits-per-page`,`max-pages`,`offset`,`rows-length`,`total-count`,`onUpdate:limit`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var N=p(j,[[`render`,M]]);function P(){return{codeHtml:`<a-slider
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
};`}}var I={name:`PagePaginationMaxPages`,components:{AlohaExample:h,AlohaPaginationItems:v,APagination:u,ASlider:f},setup(){let t=r(143),n=r(10),i=r(5),a=r(0),o=[`10`,`25`,`50`,`100`],s=e(()=>{let e=t.value-a.value;return e<=0?0:Math.min(e,n.value)}),c=e=>{n.value=e,a.value=0},l=e=>{a.value=e},{codeHtml:u}=P(),{codeJs:d}=F();return{codeHtml:u,codeJs:d,totalCount:t,limit:n,limitsPerPage:o,maxPages:i,offset:a,rowsLength:s,updateLimit:c,updateOffset:l}}};function L(e,r,s,c,l,u){let d=n(`a-slider`),f=n(`aloha-pagination-items`),p=n(`a-pagination`),m=n(`aloha-example`);return o(),t(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_GROUP_MAX_PAGES_HEADER_`,description:`_A_PAGINATION_GROUP_MAX_PAGES_DESCRIPTION_`,props:[`max-pages`]},{default:a(()=>[i(d,{class:`a_mb_4`,modelValue:e.maxPages,"onUpdate:modelValue":r[0]||=t=>e.maxPages=t,max:10,min:1,step:1,label:`_A_PAGINATION_MAX_PAGES_LABEL_`},null,8,[`modelValue`]),i(f,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),i(p,{limit:e.limit,"limits-per-page":e.limitsPerPage,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`limits-per-page`,`max-pages`,`offset`,`rows-length`,`total-count`,`onUpdate:limit`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var R=p(I,[[`render`,L]]);function z(){let t=e(()=>d({placeholder:`_A_PAGINATION_COMPONENT_NAME_`}));return{pageTitle:e(()=>`APagination${t.value?` (${t.value})`:``}`)}}function B(){return{dataProps:[{name:`disabled`,description:`_A_PAGINATION_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`limit`,description:`_A_PAGINATION_PROPS_LIMIT_DESCRIPTION_`,type:`Number`,default:void 0,required:!0},{name:`limits-per-page`,description:`_A_PAGINATION_PROPS_LIMITS_PER_PAGE_DESCRIPTION_`,type:`Array`,default:`() => ["10", "25", "50", "100"]`,required:!1},{name:`max-pages`,description:`_A_PAGINATION_PROPS_MAX_PAGES_DESCRIPTION_`,type:`Number`,default:5,required:!1},{name:`offset`,description:`_A_PAGINATION_PROPS_OFFSET_DESCRIPTION_`,type:`Number`,default:void 0,required:!0},{name:`rows-length`,description:`_A_PAGINATION_PROPS_ROWS_LENGTH_DESCRIPTION_`,type:`Number`,default:void 0,required:!0},{name:`modes`,description:`_A_PAGINATION_PROPS_MODES_DESCRIPTION_`,type:`Object`,default:`() => ({
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
})`,required:!1},{name:`total-count`,description:`_A_PAGINATION_PROPS_TOTAL_COUNT_DESCRIPTION_`,type:`Number`,default:void 0,required:!0}]}}function V(){return{dataTranslate:[`_A_COUNT_PER_PAGE_`,`_A_COUNT_PER_PAGE_ITEM_{{count}}_`,`_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_`,`_A_PAGINATION_FIRST_PAGE_`,`_A_PAGINATION_LAST_PAGE_`,`_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_`,`_A_PAGINATION_NAVIGATION_`,`_A_PAGINATION_NEXT_PAGE_`,`_A_PAGINATION_PREVIOUS_PAGE_`,`_A_PAGINATION_TO_PAGE_{{page}}_`]}}var H={name:`PagePagination`,components:{ATranslation:l,AlohaPage:m,AlohaTableProps:g,AlohaTableTranslate:_,PagePaginationBasic:C,PagePaginationDisabled:O,PagePaginationLimitsPerPage:N,PagePaginationMaxPages:R},setup(){let{pageTitle:e}=z(),{dataProps:t}=B(),{dataTranslate:n}=V();return{dataProps:t,dataTranslate:n,pageTitle:e}}};function U(e,r,s,c,l,u){let d=n(`a-translation`),f=n(`page-pagination-basic`),p=n(`page-pagination-limits-per-page`),m=n(`page-pagination-max-pages`),h=n(`page-pagination-disabled`),g=n(`aloha-table-props`),_=n(`aloha-table-translate`),v=n(`aloha-page`);return o(),t(v,{"page-title":e.pageTitle},{body:a(()=>[i(d,{tag:`p`,html:`_A_PAGINATION_COMPONENT_DESCRIPTION_`}),i(f),i(p),i(m),i(h),i(g,{data:e.dataProps},null,8,[`data`]),i(_,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var W=p(H,[[`render`,U]]);export{W as default};