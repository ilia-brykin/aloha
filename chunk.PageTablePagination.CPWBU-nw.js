import{A as b,a as U}from"./chunk.AlohaExample.D1l9kGAT.js";import{A as f}from"./chunk.AlohaTableTranslate.D3ltW-Ih.js";import{_ as u,g as M}from"./bundle.index.Cm4ZmLVs.js";import{K as p}from"./chunk.vendor-lodash.DdGPhwvj.js";import{r as m,U as L,aS as T,e as _,V as r,Y as P,Z as i,d as I}from"./chunk.vendor.COYgx38y.js";import{A as O}from"./chunk.ATable.Cs2id91H.js";import"./chunk.APageTabTitle.DmmHRKyP.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.translations-ar.C3cuNM2l.js";import"./chunk.translations-de.ChWpqlXc.js";import"./chunk.translations-en.CkuqRVlP.js";import"./chunk.translations-es.DRL7Smvn.js";import"./chunk.translations-fr.CBRPb4_F.js";import"./chunk.translations-hr.DnHt2OOV.js";import"./chunk.translations-it.dwM41gvu.js";import"./chunk.translations-ru.D7oiKEcO.js";function y(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_DISABLED_LABEL_"
  key-id="id"
  :pagination="{ use: true, disabled: true }"
>
</a-table>`}}function k(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePaginationDisabled",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          aloha: \`aloha \${ item }\`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};`}}const C={name:"PageTablePaginationDisabled",components:{AlohaExample:b,ATable:O},setup(){const{codeHtml:a}=y(),{codeJs:t}=k(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=m([]);return(()=>{const l=[];p(1001,e=>{l.push({id:e,aloha:`aloha ${e}`})}),o.value=l})(),{codeHtml:a,codeJs:t,columns:n,data:o}}};function D(a,t,n,o,c,l){const e=_("a-table"),s=_("aloha-example");return r(),L(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_DISABLED_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_DISABLED_DESCRIPTION_",props:"pagination.disabled"},{default:T(()=>[P("div",null,[i(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_DISABLED_LABEL_","key-id":"id",pagination:{use:!0,disabled:!0}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const G=u(C,[["render",D]]);function $(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LABEL_"
  key-id="id"
  :pagination="{ use: true }"
>
</a-table>`}}function R(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePaginationExample",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          aloha: \`aloha \${ item }\`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};`}}const v={name:"PageTablePaginationExample",components:{AlohaExample:b,ATable:O},setup(){const{codeHtml:a}=$(),{codeJs:t}=R(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=m([]);return(()=>{const l=[];p(1001,e=>{l.push({id:e,aloha:`aloha ${e}`})}),o.value=l})(),{codeHtml:a,codeJs:t,columns:n,data:o}}};function H(a,t,n,o,c,l){const e=_("a-table"),s=_("aloha-example");return r(),L(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_DESCRIPTION_",props:"pagination.use"},{default:T(()=>[P("div",null,[i(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_LABEL_","key-id":"id",pagination:{use:!0}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const S=u(v,[["render",H]]);function J(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LIMIT_LABEL_"
  key-id="id"
  :pagination="{ use: true, limitsPerPage: ['5', '10', '25', '50', '100', '200'] }"
>
</a-table>`}}function j(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePaginationLimit",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          aloha: \`aloha \${ item }\`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};`}}const x={name:"PageTablePaginationLimit",components:{AlohaExample:b,ATable:O},setup(){const{codeHtml:a}=J(),{codeJs:t}=j(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=m([]);return(()=>{const l=[];p(1001,e=>{l.push({id:e,aloha:`aloha ${e}`})}),o.value=l})(),{codeHtml:a,codeJs:t,columns:n,data:o}}};function X(a,t,n,o,c,l){const e=_("a-table"),s=_("aloha-example");return r(),L(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_LIMIT_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_LIMIT_DESCRIPTION_",props:"pagination.limitsPerPage"},{default:T(()=>[P("div",null,[i(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_LIMIT_LABEL_","key-id":"id",pagination:{use:!0,limitsPerPage:["5","10","25","50","100","200"]}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const V=u(x,[["render",X]]);function w(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LIMIT_START_LABEL_"
  key-id="id"
  :pagination="{ use: true, limitsPerPage: ['5', '10', '25', '50', '100', '200'], limitStart: 5 }"
>
</a-table>`}}function Y(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePaginationLimitStart",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          aloha: \`aloha \${ item }\`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};`}}const F={name:"PageTablePaginationLimitStart",components:{AlohaExample:b,ATable:O},setup(){const{codeHtml:a}=w(),{codeJs:t}=Y(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=m([]);return(()=>{const l=[];p(1001,e=>{l.push({id:e,aloha:`aloha ${e}`})}),o.value=l})(),{codeHtml:a,codeJs:t,columns:n,data:o}}};function K(a,t,n,o,c,l){const e=_("a-table"),s=_("aloha-example");return r(),L(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_LIMIT_START_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_LIMIT_START_DESCRIPTION_",props:"pagination.limitStart"},{default:T(()=>[P("div",null,[i(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_LIMIT_START_LABEL_","key-id":"id",pagination:{use:!0,limitsPerPage:["5","10","25","50","100","200"],limitStart:5}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const Z=u(F,[["render",K]]);function q(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_"
  key-id="id"
  :pagination="{ use: true, maxPages: 7 }"
>
</a-table>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePaginationMaxItems",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          aloha: \`aloha \${ item }\`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};`}}const Q={name:"PageTablePaginationMaxItems",components:{AlohaExample:b,ATable:O},setup(){const{codeHtml:a}=q(),{codeJs:t}=z(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=m([]);return(()=>{const l=[];p(1001,e=>{l.push({id:e,aloha:`aloha ${e}`})}),o.value=l})(),{codeHtml:a,codeJs:t,columns:n,data:o}}};function W(a,t,n,o,c,l){const e=_("a-table"),s=_("aloha-example");return r(),L(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_DESCRIPTION_",props:"pagination.maxPages"},{default:T(()=>[P("div",null,[i(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_","key-id":"id",pagination:{use:!0,maxPages:7}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const aa=u(Q,[["render",W]]);function ea(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_"
  key-id="id"
  :pagination="{ use: true, maxPages: 7 }"
>
</a-table>`}}function oa(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePaginationMaxItems",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          aloha: \`aloha \${ item }\`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};`}}const la={name:"PageTablePaginationOutside",components:{AlohaExample:b,ATable:O},setup(){const{codeHtml:a}=ea(),{codeJs:t}=oa(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=m([]),c=m(10),l=m(0),e=I(()=>o.value.slice(l.value,c.value+l.value)),s=()=>{const A=[];p(999,d=>{A.push({id:d,aloha:`aloha ${d}`})}),o.value=A},N=({limit:A,offset:d})=>{c.value=A,l.value=d},E=({limit:A,offset:d})=>{N({limit:A,offset:d})},h=({limit:A,offset:d})=>{N({limit:A,offset:d})};return s(),{changeLimit:E,changeOffset:h,codeHtml:a,codeJs:t,columns:n,data:o,dataPaginated:e}}};function ta(a,t,n,o,c,l){const e=_("a-table"),s=_("aloha-example");return r(),L(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_OUTSIDE_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_OUTSIDE_DESCRIPTION_",props:["pagination.isOutside","count-all-rows"],emits:["change-limit","change-offset"]},{default:T(()=>[P("div",null,[i(e,{columns:a.columns,data:a.dataPaginated,label:"_A_TABLE_GROUP_PAGINATION_OUTSIDE_LABEL_","key-id":"id",pagination:{use:!0,isOutside:!0},"count-all-rows":a.data.length,onChangeLimit:a.changeLimit,onChangeOffset:a.changeOffset},null,8,["columns","data","count-all-rows","onChangeLimit","onChangeOffset"])])]),_:1},8,["code-html","code-js"])}const _a=u(la,[["render",ta]]);function na(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  :pagination="{ use: true, position: 'top' }"
  key-id="id"
  label="_A_TABLE_GROUP_PAGINATION_POSITION_TOP_LABEL_"
></a-table>
<a-table
  :columns="columns"
  :data="data"
  :pagination="{ use: true, position: 'bottom' }"
  class="a_mt_5"
  key-id="id"
  label="_A_TABLE_GROUP_PAGINATION_POSITION_BOTTOM_LABEL_"
></a-table>
<a-table
  :columns="columns"
  :data="data"
  :pagination="{ use: true, position: 'y' }"
  class="a_mt_5"
  key-id="id"
  label="_A_TABLE_GROUP_PAGINATION_POSITION_Y_LABEL_"
></a-table>`}}function sa(){return{codeJs:`import {
  ref,
} from "vue";
import {
  ATable.
} from "aloha-vue";
    
export default {
  name: "PageTablePaginationPosition",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(1001, item => {
        DATA.push({
          id: item,
          aloha: \`aloha \${ item }\`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};`}}const ia={name:"PageTablePaginationPosition",components:{AlohaExample:b,ATable:O},setup(){const{codeHtml:a}=na(),{codeJs:t}=sa(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=m([]);return(()=>{const l=[];p(1001,e=>{l.push({id:e,aloha:`aloha ${e}`})}),o.value=l})(),{codeHtml:a,codeJs:t,columns:n,data:o}}};function ca(a,t,n,o,c,l){const e=_("a-table"),s=_("aloha-example");return r(),L(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_POSITION_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_POSITION_DESCRIPTION_",props:"pagination.position"},{default:T(()=>[i(e,{columns:a.columns,data:a.data,pagination:{use:!0,position:"top"},"key-id":"id",label:"_A_TABLE_GROUP_PAGINATION_POSITION_TOP_LABEL_"},null,8,["columns","data"]),i(e,{class:"a_mt_5",columns:a.columns,data:a.data,pagination:{use:!0,position:"bottom"},"key-id":"id",label:"_A_TABLE_GROUP_PAGINATION_POSITION_BOTTOM_LABEL_"},null,8,["columns","data"]),i(e,{class:"a_mt_5",columns:a.columns,data:a.data,pagination:{use:!0,position:"y"},"key-id":"id",label:"_A_TABLE_GROUP_PAGINATION_POSITION_Y_LABEL_"},null,8,["columns","data"])]),_:1},8,["code-html","code-js"])}const Aa=u(ia,[["render",ca]]);function da(){const a=I(()=>M({placeholder:"_A_TABLE_PAGINATION_"}));return{pageTitle:I(()=>`ATable ${a.value}`)}}function ma(){return{dataTranslate:["_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_","_A_COUNT_PER_PAGE_","_A_COUNT_PER_PAGE_ITEM_{{count}}_","_A_PAGINATION_NAVIGATION_","_A_PAGINATION_FIRST_PAGE_","_A_PAGINATION_PREVIOUS_PAGE_","_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_","_A_PAGINATION_TO_PAGE_{{page}}_","_A_PAGINATION_NEXT_PAGE_","_A_PAGINATION_LAST_PAGE_"]}}const ua={name:"PageTablePagination",components:{AlohaPage:U,AlohaTableTranslate:f,PageTablePaginationDisabled:G,PageTablePaginationExample:S,PageTablePaginationLimit:V,PageTablePaginationLimitStart:Z,PageTablePaginationMaxItems:aa,PageTablePaginationOutside:_a,PageTablePaginationPosition:Aa},setup(){const{pageTitle:a}=da(),{dataTranslate:t}=ma();return{dataTranslate:t,pageTitle:a}}};function La(a,t,n,o,c,l){const e=_("page-table-pagination-example"),s=_("page-table-pagination-limit"),N=_("page-table-pagination-limit-start"),E=_("page-table-pagination-max-items"),h=_("page-table-pagination-disabled"),A=_("page-table-pagination-outside"),d=_("page-table-pagination-position"),g=_("aloha-table-translate"),B=_("aloha-page");return r(),L(B,{"page-title":a.pageTitle},{body:T(()=>[i(e),i(s),i(N),i(E),i(h),i(A),i(d),i(g,{data:a.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const ka=u(ua,[["render",La]]);export{ka as default};
