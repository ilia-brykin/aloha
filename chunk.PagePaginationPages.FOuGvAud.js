import{Ct as e,Tt as t,Ut as n,Yt as r,kt as i,qt as a,wt as o,zt as s}from"./chunk.vendor.CZPox1kV.js";import{I as c,Z as l,f as u,kt as d,s as f,t as p,z as m}from"./bundle.index.BmSiyQNH.js";import{n as h,t as g}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as _}from"./chunk.AlohaTableProps.Dksi7fmb.js";import{t as v}from"./chunk.AlohaTableTranslate.C-b2Nle9.js";import{t as y}from"./chunk.AlohaPaginationItems.yHotd0Pc.js";function b(){return{codeHtml:`<div 
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
};`}}var S={name:`PagePaginationPagesBasic`,components:{AlohaExample:g,AlohaPaginationItems:y,APaginationPages:u},setup(){let t=r(87),n=r(10),i=r(5),a=r(0),o=e(()=>{let e=t.value-a.value;return e<=0?0:Math.min(e,n.value)}),s=e=>{a.value=e},{codeHtml:c}=b(),{codeJs:l}=x();return{codeHtml:c,codeJs:l,limit:n,maxPages:i,offset:a,rowsLength:o,totalCount:t,updateOffset:s}}};function C(e,r,o,c,l,u){let d=n(`aloha-pagination-items`),f=n(`a-pagination-pages`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`},{default:a(()=>[i(d,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),i(f,{limit:e.limit,"max-pages":e.maxPages,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`max-pages`,`offset`,`total-count`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var w=p(S,[[`render`,C]]);function T(){return{codeHtml:`<a-switch
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
};`}}var D={name:`PagePaginationPagesDisabled`,components:{AlohaExample:g,AlohaPaginationItems:y,APaginationPages:u,ASwitch:c},setup(){let t=r(87),n=r(10),i=r(5),a=r(0),o=r(!0),s=e(()=>{let e=t.value-a.value;return e<=0?0:Math.min(e,n.value)}),c=e=>{a.value=e},{codeHtml:l}=T(),{codeJs:u}=E();return{codeHtml:l,codeJs:u,isDisabled:o,limit:n,maxPages:i,offset:a,rowsLength:s,totalCount:t,updateOffset:c}}};function O(e,r,o,c,l,u){let d=n(`a-switch`),f=n(`aloha-pagination-items`),p=n(`a-pagination-pages`),m=n(`aloha-example`);return s(),t(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_DISABLED_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_DISABLED_DESCRIPTION_`,props:[`disabled`]},{default:a(()=>[i(d,{class:`a_mb_4`,modelValue:e.isDisabled,"onUpdate:modelValue":r[0]||=t=>e.isDisabled=t,label:`_LBL_DISABLED_`},null,8,[`modelValue`]),i(f,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),i(p,{disabled:e.isDisabled,limit:e.limit,"max-pages":e.maxPages,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,[`disabled`,`limit`,`max-pages`,`offset`,`total-count`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var k=p(D,[[`render`,O]]);function A(){return{codeHtml:`<a-slider
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
};`}}var M={name:`PagePaginationPagesMaxPages`,components:{AlohaExample:g,AlohaPaginationItems:y,APaginationPages:u,ASlider:f},setup(){let t=r(143),n=r(10),i=r(5),a=r(0),o=e(()=>{let e=t.value-a.value;return e<=0?0:Math.min(e,n.value)}),s=e=>{a.value=e},{codeHtml:c}=A(),{codeJs:l}=j();return{codeHtml:c,codeJs:l,limit:n,maxPages:i,offset:a,rowsLength:o,totalCount:t,updateOffset:s}}};function N(e,r,o,c,l,u){let d=n(`a-slider`),f=n(`aloha-pagination-items`),p=n(`a-pagination-pages`),m=n(`aloha-example`);return s(),t(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_MAX_PAGES_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_MAX_PAGES_DESCRIPTION_`,props:[`max-pages`]},{default:a(()=>[i(d,{class:`a_mb_4`,modelValue:e.maxPages,"onUpdate:modelValue":r[0]||=t=>e.maxPages=t,max:10,min:1,step:1,label:`_A_PAGINATION_PAGES_MAX_PAGES_LABEL_`},null,8,[`modelValue`]),i(f,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),i(p,{limit:e.limit,"max-pages":e.maxPages,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,[`limit`,`max-pages`,`offset`,`total-count`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var P=p(M,[[`render`,N]]);function F(){return{codeHtml:`<div class="a_columns a_columns_count_12 a_mb_3">
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
};`}}var L={name:`PagePaginationPagesMode`,components:{AlohaExample:g,AlohaPaginationItems:y,APaginationPages:u,ASelect:m},setup(){let t=r(87),n=r(10),i=r(0),a=r(`short`),o=[{id:`short`,label:`_A_PAGINATION_PAGES_MODE_SHORT_`},{id:`normal`,label:`_A_PAGINATION_PAGES_MODE_NORMAL_`}],s=e(()=>{let e=t.value-i.value;return e<=0?0:Math.min(e,n.value)}),c=e=>{i.value=e},{codeHtml:l}=F(),{codeJs:u}=I();return{codeHtml:l,codeJs:u,limit:n,mode:a,modeOptions:o,offset:i,rowsLength:s,totalCount:t,updateOffset:c}}},R={class:`a_columns a_columns_count_12 a_mb_3`},z={class:`a_column a_column_6 a_column_12_touch`};function B(e,r,c,l,u,d){let f=n(`a-select`),p=n(`aloha-pagination-items`),m=n(`a-pagination-pages`),h=n(`aloha-example`);return s(),t(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PAGINATION_PAGES_GROUP_MODE_HEADER_`,description:`_A_PAGINATION_PAGES_GROUP_MODE_DESCRIPTION_`,props:[`mode`]},{default:a(()=>[o(`div`,R,[o(`div`,z,[i(f,{modelValue:e.mode,"onUpdate:modelValue":r[0]||=t=>e.mode=t,data:e.modeOptions,deselectable:!1,"translate-data":!0,"key-id":`id`,"key-label":`label`,label:`_A_PAGINATION_PAGES_MODE_LABEL_`,type:`select`},null,8,[`modelValue`,`data`])])]),i(p,{length:e.rowsLength,offset:e.offset},null,8,[`length`,`offset`]),i(m,{mode:e.mode,limit:e.limit,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,[`mode`,`limit`,`offset`,`total-count`,`onUpdate:offset`])]),_:1},8,[`code-html`,`code-js`])}var V=p(L,[[`render`,B]]);function H(){let t=e(()=>d({placeholder:`_A_PAGINATION_PAGES_COMPONENT_NAME_`}));return{pageTitle:e(()=>`APaginationPages${t.value?` (${t.value})`:``}`)}}function U(){return{dataProps:[{name:`disabled`,description:`_A_PAGINATION_PAGES_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`limit`,description:`_A_PAGINATION_PAGES_PROPS_LIMIT_DESCRIPTION_`,type:`Number`,default:void 0,required:!0},{name:`max-pages`,description:`_A_PAGINATION_PAGES_PROPS_MAX_PAGES_DESCRIPTION_`,type:`Number`,default:5,required:!1},{name:`mode`,description:`_A_PAGINATION_PAGES_PROPS_MODE_DESCRIPTION_`,type:`String`,default:`normal`,required:!1},{name:`offset`,description:`_A_PAGINATION_PAGES_PROPS_OFFSET_DESCRIPTION_`,type:`Number`,default:void 0,required:!0},{name:`texts`,description:`_A_PAGINATION_PAGES_PROPS_TEXTS_DESCRIPTION_`,type:`Object`,default:`() => ({
  pagesFirstPage: "_A_PAGINATION_FIRST_PAGE_",
  pagesLastPage: "_A_PAGINATION_LAST_PAGE_",
  pagesMobile: "_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_",
  pagesNavigation: "_A_PAGINATION_NAVIGATION_",
  pagesNextPage: "_A_PAGINATION_NEXT_PAGE_",
  pagesPreviousPage: "_A_PAGINATION_PREVIOUS_PAGE_",
  pagesToPage: "_A_PAGINATION_TO_PAGE_{{page}}_",
})`,required:!1},{name:`total-count`,description:`_A_PAGINATION_PAGES_PROPS_TOTAL_COUNT_DESCRIPTION_`,type:`Number`,default:void 0,required:!0}]}}function W(){return{dataTranslate:[`_A_PAGINATION_FIRST_PAGE_`,`_A_PAGINATION_LAST_PAGE_`,`_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_`,`_A_PAGINATION_NAVIGATION_`,`_A_PAGINATION_NEXT_PAGE_`,`_A_PAGINATION_PREVIOUS_PAGE_`,`_A_PAGINATION_TO_PAGE_{{page}}_`]}}var G={name:`PagePaginationPages`,components:{ATranslation:l,AlohaPage:h,AlohaTableProps:_,AlohaTableTranslate:v,PagePaginationPagesBasic:w,PagePaginationPagesDisabled:k,PagePaginationPagesMaxPages:P,PagePaginationPagesMode:V},setup(){let{pageTitle:e}=H(),{dataProps:t}=U(),{dataTranslate:n}=W();return{dataProps:t,dataTranslate:n,pageTitle:e}}};function K(e,r,o,c,l,u){let d=n(`a-translation`),f=n(`page-pagination-pages-basic`),p=n(`page-pagination-pages-max-pages`),m=n(`page-pagination-pages-mode`),h=n(`page-pagination-pages-disabled`),g=n(`aloha-table-props`),_=n(`aloha-table-translate`),v=n(`aloha-page`);return s(),t(v,{"page-title":e.pageTitle},{body:a(()=>[i(d,{tag:`p`,html:`_A_PAGINATION_PAGES_COMPONENT_DESCRIPTION_`}),i(f),i(p),i(m),i(h),i(g,{data:e.dataProps},null,8,[`data`]),i(_,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var q=p(G,[[`render`,K]]);export{q as default};