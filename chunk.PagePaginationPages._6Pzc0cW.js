import{A as N,a as E}from"./chunk.AlohaExample.YBEkNJHM.js";import{A as G}from"./chunk.AlohaTableProps.Cjf-vv9O.js";import{A as S}from"./chunk.AlohaTableTranslate.Cg0N-OFa.js";import{A as I}from"./chunk.AlohaPaginationItems.DNLzNTJx.js";import{_ as f,a as L,f as D,g as C,A as M}from"./bundle.index.Bn4EAoUB.js";import{r as m,d,V as g,aT as A,e as o,W as P,_ as s,Z as b}from"./chunk.vendor.tcMGz7j_.js";import"./chunk.vendor-lodash.rFt76tyK.js";import{b as O}from"./chunk.ATable.BW5NWBn-.js";import{A as $}from"./chunk.ASlider.BDpEBRYA.js";import"./chunk.APageTabTitle.Cvp9tCUS.js";import"./chunk.AlohaHighlightjs.BwPt1uu6.js";import"./chunk.translations-ar.gQA2bIDx.js";import"./chunk.translations-de.Cs1lbELY.js";import"./chunk.translations-en.Dggm7bm6.js";import"./chunk.translations-es.B0VpZMt0.js";import"./chunk.translations-fr.zQdXa2f4.js";import"./chunk.translations-hr.BVkkSNp1.js";import"./chunk.translations-it.BH0mwprS.js";import"./chunk.translations-ru.CM_kaKL2.js";function R(){return{codeHtml:`<div 
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
></a-pagination-pages>`}}function k(){return{codeJs:`import {
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
};`}}const w={name:"PagePaginationPagesBasic",components:{AlohaExample:N,AlohaPaginationItems:I,APaginationPages:O},setup(){const e=m(87),a=m(10),r=m(5),n=m(0),p=d(()=>{const t=e.value-n.value;return t<=0?0:Math.min(t,a.value)}),c=t=>{n.value=t},{codeHtml:i}=R(),{codeJs:l}=k();return{codeHtml:i,codeJs:l,limit:a,maxPages:r,offset:n,rowsLength:p,totalCount:e,updateOffset:c}}};function x(e,a,r,n,p,c){const i=o("aloha-pagination-items"),l=o("a-pagination-pages"),t=o("aloha-example");return P(),g(t,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_"},{default:A(()=>[s(i,{length:e.rowsLength,offset:e.offset},null,8,["length","offset"]),s(l,{limit:e.limit,"max-pages":e.maxPages,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,["limit","max-pages","offset","total-count","onUpdate:offset"])]),_:1},8,["code-html","code-js"])}const H=f(w,[["render",x]]);function y(){return{codeHtml:`<a-switch
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
></a-pagination-pages>`}}function B(){return{codeJs:`import {
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
};`}}const U={name:"PagePaginationPagesDisabled",components:{AlohaExample:N,AlohaPaginationItems:I,APaginationPages:O,ASwitch:L},setup(){const e=m(87),a=m(10),r=m(5),n=m(0),p=m(!0),c=d(()=>{const _=e.value-n.value;return _<=0?0:Math.min(_,a.value)}),i=_=>{n.value=_},{codeHtml:l}=y(),{codeJs:t}=B();return{codeHtml:l,codeJs:t,isDisabled:p,limit:a,maxPages:r,offset:n,rowsLength:c,totalCount:e,updateOffset:i}}};function J(e,a,r,n,p,c){const i=o("a-switch"),l=o("aloha-pagination-items"),t=o("a-pagination-pages"),_=o("aloha-example");return P(),g(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_PAGINATION_PAGES_GROUP_DISABLED_HEADER_",description:"_A_PAGINATION_PAGES_GROUP_DISABLED_DESCRIPTION_",props:["disabled"]},{default:A(()=>[s(i,{class:"a_mb_4",modelValue:e.isDisabled,"onUpdate:modelValue":a[0]||(a[0]=u=>e.isDisabled=u),label:"_LBL_DISABLED_"},null,8,["modelValue"]),s(l,{length:e.rowsLength,offset:e.offset},null,8,["length","offset"]),s(t,{disabled:e.isDisabled,limit:e.limit,"max-pages":e.maxPages,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,["disabled","limit","max-pages","offset","total-count","onUpdate:offset"])]),_:1},8,["code-html","code-js"])}const V=f(U,[["render",J]]);function j(){return{codeHtml:`<a-slider
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
></a-pagination-pages>`}}function X(){return{codeJs:`import {
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
};`}}const q={name:"PagePaginationPagesMaxPages",components:{AlohaExample:N,AlohaPaginationItems:I,APaginationPages:O,ASlider:$},setup(){const e=m(143),a=m(10),r=m(5),n=m(0),p=d(()=>{const t=e.value-n.value;return t<=0?0:Math.min(t,a.value)}),c=t=>{n.value=t},{codeHtml:i}=j(),{codeJs:l}=X();return{codeHtml:i,codeJs:l,limit:a,maxPages:r,offset:n,rowsLength:p,totalCount:e,updateOffset:c}}};function F(e,a,r,n,p,c){const i=o("a-slider"),l=o("aloha-pagination-items"),t=o("a-pagination-pages"),_=o("aloha-example");return P(),g(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_PAGINATION_PAGES_GROUP_MAX_PAGES_HEADER_",description:"_A_PAGINATION_PAGES_GROUP_MAX_PAGES_DESCRIPTION_",props:["max-pages"]},{default:A(()=>[s(i,{class:"a_mb_4",modelValue:e.maxPages,"onUpdate:modelValue":a[0]||(a[0]=u=>e.maxPages=u),max:10,min:1,step:1,label:"_A_PAGINATION_PAGES_MAX_PAGES_LABEL_"},null,8,["modelValue"]),s(l,{length:e.rowsLength,offset:e.offset},null,8,["length","offset"]),s(t,{limit:e.limit,"max-pages":e.maxPages,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,["limit","max-pages","offset","total-count","onUpdate:offset"])]),_:1},8,["code-html","code-js"])}const W=f(q,[["render",F]]);function Z(){return{codeHtml:`<div class="a_columns a_columns_count_12 a_mb_3">
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
></a-pagination-pages>`}}function z(){return{codeJs:`import {
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
};`}}const K={name:"PagePaginationPagesMode",components:{AlohaExample:N,AlohaPaginationItems:I,APaginationPages:O,ASelect:D},setup(){const e=m(87),a=m(10),r=m(0),n=m("short"),p=[{id:"short",label:"_A_PAGINATION_PAGES_MODE_SHORT_"},{id:"normal",label:"_A_PAGINATION_PAGES_MODE_NORMAL_"}],c=d(()=>{const _=e.value-r.value;return _<=0?0:Math.min(_,a.value)}),i=_=>{r.value=_},{codeHtml:l}=Z(),{codeJs:t}=z();return{codeHtml:l,codeJs:t,limit:a,mode:n,modeOptions:p,offset:r,rowsLength:c,totalCount:e,updateOffset:i}}},Q={class:"a_columns a_columns_count_12 a_mb_3"},Y={class:"a_column a_column_6 a_column_12_touch"};function ee(e,a,r,n,p,c){const i=o("a-select"),l=o("aloha-pagination-items"),t=o("a-pagination-pages"),_=o("aloha-example");return P(),g(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_PAGINATION_PAGES_GROUP_MODE_HEADER_",description:"_A_PAGINATION_PAGES_GROUP_MODE_DESCRIPTION_",props:["mode"]},{default:A(()=>[b("div",Q,[b("div",Y,[s(i,{modelValue:e.mode,"onUpdate:modelValue":a[0]||(a[0]=u=>e.mode=u),data:e.modeOptions,deselectable:!1,"translate-data":!0,"key-id":"id","key-label":"label",label:"_A_PAGINATION_PAGES_MODE_LABEL_",type:"select"},null,8,["modelValue","data"])])]),s(l,{length:e.rowsLength,offset:e.offset},null,8,["length","offset"]),s(t,{mode:e.mode,limit:e.limit,offset:e.offset,"total-count":e.totalCount,"onUpdate:offset":e.updateOffset},null,8,["mode","limit","offset","total-count","onUpdate:offset"])]),_:1},8,["code-html","code-js"])}const ae=f(K,[["render",ee]]);function te(){const e=d(()=>C({placeholder:"_A_PAGINATION_PAGES_COMPONENT_NAME_"}));return{pageTitle:d(()=>`APaginationPages${e.value?` (${e.value})`:""}`)}}function oe(){return{dataProps:[{name:"disabled",description:"_A_PAGINATION_PAGES_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"limit",description:"_A_PAGINATION_PAGES_PROPS_LIMIT_DESCRIPTION_",type:"Number",default:void 0,required:!0},{name:"max-pages",description:"_A_PAGINATION_PAGES_PROPS_MAX_PAGES_DESCRIPTION_",type:"Number",default:5,required:!1},{name:"mode",description:"_A_PAGINATION_PAGES_PROPS_MODE_DESCRIPTION_",type:"String",default:"normal",required:!1},{name:"offset",description:"_A_PAGINATION_PAGES_PROPS_OFFSET_DESCRIPTION_",type:"Number",default:void 0,required:!0},{name:"texts",description:"_A_PAGINATION_PAGES_PROPS_TEXTS_DESCRIPTION_",type:"Object",default:`() => ({
  pagesFirstPage: "_A_PAGINATION_FIRST_PAGE_",
  pagesLastPage: "_A_PAGINATION_LAST_PAGE_",
  pagesMobile: "_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_",
  pagesNavigation: "_A_PAGINATION_NAVIGATION_",
  pagesNextPage: "_A_PAGINATION_NEXT_PAGE_",
  pagesPreviousPage: "_A_PAGINATION_PREVIOUS_PAGE_",
  pagesToPage: "_A_PAGINATION_TO_PAGE_{{page}}_",
})`,required:!1},{name:"total-count",description:"_A_PAGINATION_PAGES_PROPS_TOTAL_COUNT_DESCRIPTION_",type:"Number",default:void 0,required:!0}]}}function ne(){return{dataTranslate:["_A_PAGINATION_FIRST_PAGE_","_A_PAGINATION_LAST_PAGE_","_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_","_A_PAGINATION_NAVIGATION_","_A_PAGINATION_NEXT_PAGE_","_A_PAGINATION_PREVIOUS_PAGE_","_A_PAGINATION_TO_PAGE_{{page}}_"]}}const se={name:"PagePaginationPages",components:{ATranslation:M,AlohaPage:E,AlohaTableProps:G,AlohaTableTranslate:S,PagePaginationPagesBasic:H,PagePaginationPagesDisabled:V,PagePaginationPagesMaxPages:W,PagePaginationPagesMode:ae},setup(){const{pageTitle:e}=te(),{dataProps:a}=oe(),{dataTranslate:r}=ne();return{dataProps:a,dataTranslate:r,pageTitle:e}}};function ie(e,a,r,n,p,c){const i=o("a-translation"),l=o("page-pagination-pages-basic"),t=o("page-pagination-pages-max-pages"),_=o("page-pagination-pages-mode"),u=o("page-pagination-pages-disabled"),h=o("aloha-table-props"),v=o("aloha-table-translate"),T=o("aloha-page");return P(),g(T,{"page-title":e.pageTitle},{body:A(()=>[s(i,{tag:"p",html:"_A_PAGINATION_PAGES_COMPONENT_DESCRIPTION_"}),s(l),s(t),s(_),s(u),s(h,{data:e.dataProps},null,8,["data"]),s(v,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Ee=f(se,[["render",ie]]);export{Ee as default};
