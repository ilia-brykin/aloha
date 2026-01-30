import{A as N,a as b}from"./chunk.AlohaExample.CY0fG0Xz.js";import{A as E}from"./chunk.AlohaTableProps.DwFXNg2L.js";import{A as L}from"./chunk.AlohaTableTranslate.DQWY2X59.js";import{A as O}from"./chunk.AlohaPaginationItems.BOGYPyG7.js";import{_ as f,a as G,e as S,g as w,A as C}from"./bundle.index.cJHvYkjp.js";import{r as s,d as g,W as P,V as A,aT as I,e as o,_ as i}from"./chunk.vendor.CVk5hDWp.js";import"./chunk.vendor-lodash.D5YICsTb.js";import{a as h}from"./chunk.ATable.D1tbcdKR.js";import{A as R}from"./chunk.ASlider.DYuda4z7.js";import"./chunk.APageTabTitle.BYElfkq8.js";import"./chunk.AlohaHighlightjs.Bm62qoBx.js";import"./chunk.translations-ar.BLXFsPIg.js";import"./chunk.translations-de.CBeuxROU.js";import"./chunk.translations-en.uNM3IiGq.js";import"./chunk.translations-es.DiU5NRty.js";import"./chunk.translations-fr.Bw2Jyhh3.js";import"./chunk.translations-hr.B5Pb1u_B.js";import"./chunk.translations-it.ldbSWEhu.js";import"./chunk.translations-ru.BX74UQg2.js";function M(){return{codeHtml:`<div 
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
></a-pagination>`}}function D(){return{codeJs:`import {
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
};`}}const $={name:"PagePaginationBasic",components:{AlohaExample:N,AlohaPaginationItems:O,APagination:h},setup(){const e=s(87),t=s(10),p=s(5),n=s(0),u=["10","25","50","100"],c=g(()=>{const a=e.value-n.value;return a<=0?0:Math.min(a,t.value)}),l=a=>{t.value=a,n.value=0},r=a=>{n.value=a},{codeHtml:m}=M(),{codeJs:_}=D();return{codeHtml:m,codeJs:_,totalCount:e,limit:t,limitsPerPage:u,maxPages:p,offset:n,rowsLength:c,updateLimit:l,updateOffset:r}}};function U(e,t,p,n,u,c){const l=o("aloha-pagination-items"),r=o("a-pagination"),m=o("aloha-example");return P(),A(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_"},{default:I(()=>[i(l,{length:e.rowsLength,offset:e.offset},null,8,["length","offset"]),i(r,{limit:e.limit,"limits-per-page":e.limitsPerPage,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,["limit","limits-per-page","max-pages","offset","rows-length","total-count","onUpdate:limit","onUpdate:offset"])]),_:1},8,["code-html","code-js"])}const k=f($,[["render",U]]);function H(){return{codeHtml:`<a-switch
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
></a-pagination>`}}function x(){return{codeJs:`import {
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
};`}}const y={name:"PagePaginationDisabled",components:{AlohaExample:N,AlohaPaginationItems:O,APagination:h,ASwitch:G},setup(){const e=s(123),t=s(!0),p=s(10),n=s(5),u=s(0),c=["10","25","50","100"],l=g(()=>{const d=e.value-u.value;return d<=0?0:Math.min(d,p.value)}),r=d=>{p.value=d,u.value=0},m=d=>{u.value=d},{codeHtml:_}=H(),{codeJs:a}=x();return{codeHtml:_,codeJs:a,totalCount:e,isDisabled:t,limit:p,limitsPerPage:c,maxPages:n,offset:u,rowsLength:l,updateLimit:r,updateOffset:m}}};function B(e,t,p,n,u,c){const l=o("a-switch"),r=o("aloha-pagination-items"),m=o("a-pagination"),_=o("aloha-example");return P(),A(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_PAGINATION_GROUP_DISABLED_HEADER_",description:"_A_PAGINATION_GROUP_DISABLED_DESCRIPTION_",props:["disabled"]},{default:I(()=>[i(l,{class:"a_mb_4",modelValue:e.isDisabled,"onUpdate:modelValue":t[0]||(t[0]=a=>e.isDisabled=a),label:"_LBL_DISABLED_"},null,8,["modelValue"]),i(r,{length:e.rowsLength,offset:e.offset},null,8,["length","offset"]),i(m,{disabled:e.isDisabled,limit:e.limit,"limits-per-page":e.limitsPerPage,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,["disabled","limit","limits-per-page","max-pages","offset","rows-length","total-count","onUpdate:limit","onUpdate:offset"])]),_:1},8,["code-html","code-js"])}const J=f(y,[["render",B]]);function V(){return{codeHtml:`<a-multiselect-ordered
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
></a-pagination>`}}function j(){return{codeJs:`import {
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
};`}}const q={name:"PagePaginationLimitsPerPage",components:{AlohaExample:N,AlohaPaginationItems:O,AMultiselectOrdered:S,APagination:h},setup(){const e=s(143),t=s(10),p=s(5),n=s(0),u=["5","10","25","50","75","100"],c=s([...u]),l=g(()=>{const d=e.value-n.value;return d<=0?0:Math.min(d,t.value)}),r=d=>{t.value=d,n.value=0},m=d=>{n.value=d},{codeHtml:_}=V(),{codeJs:a}=j();return{codeHtml:_,codeJs:a,totalCount:e,limit:t,limitsPerPageModel:c,limitsPerPageOptions:u,maxPages:p,offset:n,rowsLength:l,updateLimit:r,updateOffset:m}}};function X(e,t,p,n,u,c){const l=o("a-multiselect-ordered"),r=o("aloha-pagination-items"),m=o("a-pagination"),_=o("aloha-example");return P(),A(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_PAGINATION_GROUP_LIMITS_PER_PAGE_HEADER_",description:"_A_PAGINATION_GROUP_LIMITS_PER_PAGE_DESCRIPTION_",props:["limits-per-page"]},{default:I(()=>[i(l,{class:"a_mb_4",modelValue:e.limitsPerPageModel,"onUpdate:modelValue":t[0]||(t[0]=a=>e.limitsPerPageModel=a),data:e.limitsPerPageOptions,"is-data-simple-array":!0,label:"_A_PAGINATION_LIMITS_PER_PAGE_LABEL_"},null,8,["modelValue","data"]),i(r,{length:e.rowsLength,offset:e.offset},null,8,["length","offset"]),i(m,{limit:e.limit,"limits-per-page":e.limitsPerPageModel,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,["limit","limits-per-page","max-pages","offset","rows-length","total-count","onUpdate:limit","onUpdate:offset"])]),_:1},8,["code-html","code-js"])}const F=f(q,[["render",X]]);function W(){return{codeHtml:`<a-slider
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
></a-pagination>`}}function z(){return{codeJs:`import {
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
};`}}const K={name:"PagePaginationMaxPages",components:{AlohaExample:N,AlohaPaginationItems:O,APagination:h,ASlider:R},setup(){const e=s(143),t=s(10),p=s(5),n=s(0),u=["10","25","50","100"],c=g(()=>{const a=e.value-n.value;return a<=0?0:Math.min(a,t.value)}),l=a=>{t.value=a,n.value=0},r=a=>{n.value=a},{codeHtml:m}=W(),{codeJs:_}=z();return{codeHtml:m,codeJs:_,totalCount:e,limit:t,limitsPerPage:u,maxPages:p,offset:n,rowsLength:c,updateLimit:l,updateOffset:r}}};function Q(e,t,p,n,u,c){const l=o("a-slider"),r=o("aloha-pagination-items"),m=o("a-pagination"),_=o("aloha-example");return P(),A(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_PAGINATION_GROUP_MAX_PAGES_HEADER_",description:"_A_PAGINATION_GROUP_MAX_PAGES_DESCRIPTION_",props:["max-pages"]},{default:I(()=>[i(l,{class:"a_mb_4",modelValue:e.maxPages,"onUpdate:modelValue":t[0]||(t[0]=a=>e.maxPages=a),max:10,min:1,step:1,label:"_A_PAGINATION_MAX_PAGES_LABEL_"},null,8,["modelValue"]),i(r,{length:e.rowsLength,offset:e.offset},null,8,["length","offset"]),i(m,{limit:e.limit,"limits-per-page":e.limitsPerPage,"max-pages":e.maxPages,offset:e.offset,"rows-length":e.rowsLength,"total-count":e.totalCount,"onUpdate:limit":e.updateLimit,"onUpdate:offset":e.updateOffset},null,8,["limit","limits-per-page","max-pages","offset","rows-length","total-count","onUpdate:limit","onUpdate:offset"])]),_:1},8,["code-html","code-js"])}const Y=f(K,[["render",Q]]);function Z(){const e=g(()=>w({placeholder:"_A_PAGINATION_COMPONENT_NAME_"}));return{pageTitle:g(()=>`APagination${e.value?` (${e.value})`:""}`)}}function ee(){return{dataProps:[{name:"disabled",description:"_A_PAGINATION_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"limit",description:"_A_PAGINATION_PROPS_LIMIT_DESCRIPTION_",type:"Number",default:void 0,required:!0},{name:"limits-per-page",description:"_A_PAGINATION_PROPS_LIMITS_PER_PAGE_DESCRIPTION_",type:"Array",default:'() => ["10", "25", "50", "100"]',required:!1},{name:"max-pages",description:"_A_PAGINATION_PROPS_MAX_PAGES_DESCRIPTION_",type:"Number",default:5,required:!1},{name:"offset",description:"_A_PAGINATION_PROPS_OFFSET_DESCRIPTION_",type:"Number",default:void 0,required:!0},{name:"rows-length",description:"_A_PAGINATION_PROPS_ROWS_LENGTH_DESCRIPTION_",type:"Number",default:void 0,required:!0},{name:"modes",description:"_A_PAGINATION_PROPS_MODES_DESCRIPTION_",type:"Object",default:`() => ({
  perPage: {
    mode: "group",
    position: 0,
    showTextCountFromTo: true,
  },
  pagination: {
    mode: "normal",
    position: 1,
  },
})`,required:!1},{name:"texts",description:"_A_PAGINATION_PROPS_TEXTS_DESCRIPTION_",type:"Object",default:`() => ({
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
})`,required:!1},{name:"total-count",description:"_A_PAGINATION_PROPS_TOTAL_COUNT_DESCRIPTION_",type:"Number",default:void 0,required:!0}]}}function te(){return{dataTranslate:["_A_COUNT_PER_PAGE_","_A_COUNT_PER_PAGE_ITEM_{{count}}_","_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_","_A_PAGINATION_FIRST_PAGE_","_A_PAGINATION_LAST_PAGE_","_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_","_A_PAGINATION_NAVIGATION_","_A_PAGINATION_NEXT_PAGE_","_A_PAGINATION_PREVIOUS_PAGE_","_A_PAGINATION_TO_PAGE_{{page}}_"]}}const ae={name:"PagePagination",components:{ATranslation:C,AlohaPage:b,AlohaTableProps:E,AlohaTableTranslate:L,PagePaginationBasic:k,PagePaginationDisabled:J,PagePaginationLimitsPerPage:F,PagePaginationMaxPages:Y},setup(){const{pageTitle:e}=Z(),{dataProps:t}=ee(),{dataTranslate:p}=te();return{dataProps:t,dataTranslate:p,pageTitle:e}}};function oe(e,t,p,n,u,c){const l=o("a-translation"),r=o("page-pagination-basic"),m=o("page-pagination-limits-per-page"),_=o("page-pagination-max-pages"),a=o("page-pagination-disabled"),d=o("aloha-table-props"),v=o("aloha-table-translate"),T=o("aloha-page");return P(),A(T,{"page-title":e.pageTitle},{body:I(()=>[i(l,{tag:"p",html:"_A_PAGINATION_COMPONENT_DESCRIPTION_"}),i(r),i(m),i(_),i(a),i(d,{data:e.dataProps},null,8,["data"]),i(v,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const ve=f(ae,[["render",oe]]);export{ve as default};
