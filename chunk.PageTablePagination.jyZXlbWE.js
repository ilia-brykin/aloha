import{A as b,a as B}from"./chunk.AlohaExample.A9Ef-QbL.js";import{A as U}from"./chunk.AlohaTableTranslate.0W11qYzs.js";import{A as p}from"./chunk.ATable.D_xPGUZc.js";import{T as P}from"./chunk.vendor-lodash.Cgq9oNCy.js";import{r as d,m as _,K as u,aK as L,J as r,O as h,P as c,a as I}from"./chunk.vendor.DQz1Isc4.js";import{_ as T,g as f}from"./bundle.index.Dn7qpWjQ.js";import"./chunk.utilsMath.1mfWsA3R.js";import"./chunk.AForm.YXJwVyl2.js";import"./chunk.ADatepicker.CCF6HQX3.js";import"./chunk.UiMixinProps.BvCyZ1Ij.js";import"./chunk.AInputNumber.CRj1UTFu.js";import"./chunk.ATinymce.BwFOKtT3.js";import"./chunk.vendor-tinymce.cPIiul0H.js";function M(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_DISABLED_LABEL_"
  key-id="id"
  :pagination="{ use: true, disabled: true }"
>
</a-table>`}}function C(){return{codeJs:`import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
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
};`}}const k={name:"PageTablePaginationDisabled",components:{AlohaExample:b,ATable:p},setup(){const{codeHtml:a}=M(),{codeJs:o}=C(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=d([]);return(()=>{const t=[];P(1001,e=>{t.push({id:e,aloha:`aloha ${e}`})}),l.value=t})(),{codeHtml:a,codeJs:o,columns:n,data:l}}};function y(a,o,n,l,i,t){const e=_("a-table"),s=_("aloha-example");return r(),u(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_DISABLED_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_DISABLED_DESCRIPTION_",props:"pagination.disabled"},{default:L(()=>[h("div",null,[c(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_DISABLED_LABEL_","key-id":"id",pagination:{use:!0,disabled:!0}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const D=T(k,[["render",y]]);function G(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LABEL_"
  key-id="id"
  :pagination="{ use: true }"
>
</a-table>`}}function $(){return{codeJs:`import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
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
};`}}const R={name:"PageTablePaginationExample",components:{AlohaExample:b,ATable:p},setup(){const{codeHtml:a}=G(),{codeJs:o}=$(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=d([]);return(()=>{const t=[];P(1001,e=>{t.push({id:e,aloha:`aloha ${e}`})}),l.value=t})(),{codeHtml:a,codeJs:o,columns:n,data:l}}};function v(a,o,n,l,i,t){const e=_("a-table"),s=_("aloha-example");return r(),u(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_DESCRIPTION_",props:"pagination.use"},{default:L(()=>[h("div",null,[c(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_LABEL_","key-id":"id",pagination:{use:!0}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const H=T(R,[["render",v]]);function J(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LIMIT_LABEL_"
  key-id="id"
  :pagination="{ use: true, limitsPerPage: ['5', '10', '25', '50', '100', '200'] }"
>
</a-table>`}}function S(){return{codeJs:`import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
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
};`}}const x={name:"PageTablePaginationLimit",components:{AlohaExample:b,ATable:p},setup(){const{codeHtml:a}=J(),{codeJs:o}=S(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=d([]);return(()=>{const t=[];P(1001,e=>{t.push({id:e,aloha:`aloha ${e}`})}),l.value=t})(),{codeHtml:a,codeJs:o,columns:n,data:l}}};function j(a,o,n,l,i,t){const e=_("a-table"),s=_("aloha-example");return r(),u(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_LIMIT_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_LIMIT_DESCRIPTION_",props:"pagination.limitsPerPage"},{default:L(()=>[h("div",null,[c(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_LIMIT_LABEL_","key-id":"id",pagination:{use:!0,limitsPerPage:["5","10","25","50","100","200"]}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const X=T(x,[["render",j]]);function w(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LIMIT_START_LABEL_"
  key-id="id"
  :pagination="{ use: true, limitsPerPage: ['5', '10', '25', '50', '100', '200'], limitStart: 5 }"
>
</a-table>`}}function V(){return{codeJs:`import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
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
};`}}const K={name:"PageTablePaginationLimitStart",components:{AlohaExample:b,ATable:p},setup(){const{codeHtml:a}=w(),{codeJs:o}=V(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=d([]);return(()=>{const t=[];P(1001,e=>{t.push({id:e,aloha:`aloha ${e}`})}),l.value=t})(),{codeHtml:a,codeJs:o,columns:n,data:l}}};function F(a,o,n,l,i,t){const e=_("a-table"),s=_("aloha-example");return r(),u(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_LIMIT_START_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_LIMIT_START_DESCRIPTION_",props:"pagination.limitStart"},{default:L(()=>[h("div",null,[c(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_LIMIT_START_LABEL_","key-id":"id",pagination:{use:!0,limitsPerPage:["5","10","25","50","100","200"],limitStart:5}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const q=T(K,[["render",F]]);function z(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_"
  key-id="id"
  :pagination="{ use: true, maxPages: 7 }"
>
</a-table>`}}function Q(){return{codeJs:`import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
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
};`}}const W={name:"PageTablePaginationMaxItems",components:{AlohaExample:b,ATable:p},setup(){const{codeHtml:a}=z(),{codeJs:o}=Q(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=d([]);return(()=>{const t=[];P(1001,e=>{t.push({id:e,aloha:`aloha ${e}`})}),l.value=t})(),{codeHtml:a,codeJs:o,columns:n,data:l}}};function Y(a,o,n,l,i,t){const e=_("a-table"),s=_("aloha-example");return r(),u(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_DESCRIPTION_",props:"pagination.maxPages"},{default:L(()=>[h("div",null,[c(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_","key-id":"id",pagination:{use:!0,maxPages:7}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const Z=T(W,[["render",Y]]);function aa(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_"
  key-id="id"
  :pagination="{ use: true, maxPages: 7 }"
>
</a-table>`}}function ea(){return{codeJs:`import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
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
};`}}const la={name:"PageTablePaginationOutside",components:{AlohaExample:b,ATable:p},setup(){const{codeHtml:a}=aa(),{codeJs:o}=ea(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=d([]),i=d(10),t=d(0),e=I(()=>l.value.slice(t.value,i.value+t.value)),s=()=>{const A=[];P(999,m=>{A.push({id:m,aloha:`aloha ${m}`})}),l.value=A},E=({limit:A,offset:m})=>{i.value=A,t.value=m},O=({limit:A,offset:m})=>{E({limit:A,offset:m})},N=({limit:A,offset:m})=>{E({limit:A,offset:m})};return s(),{changeLimit:O,changeOffset:N,codeHtml:a,codeJs:o,columns:n,data:l,dataPaginated:e}}};function ta(a,o,n,l,i,t){const e=_("a-table"),s=_("aloha-example");return r(),u(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_OUTSIDE_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_OUTSIDE_DESCRIPTION_",props:["pagination.isOutside","count-all-rows"],emits:["change-limit","change-offset"]},{default:L(()=>[h("div",null,[c(e,{columns:a.columns,data:a.dataPaginated,label:"_A_TABLE_GROUP_PAGINATION_OUTSIDE_LABEL_","key-id":"id",pagination:{use:!0,isOutside:!0},"count-all-rows":a.data.length,onChangeLimit:a.changeLimit,onChangeOffset:a.changeOffset},null,8,["columns","data","count-all-rows","onChangeLimit","onChangeOffset"])])]),_:1},8,["code-html","code-js","props"])}const oa=T(la,[["render",ta]]);function _a(){const a=I(()=>f({placeholder:"_A_TABLE_PAGINATION_"}));return{pageTitle:I(()=>`ATable ${a.value}`)}}function na(){return{dataTranslate:["_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_","_A_COUNT_PER_PAGE_","_A_COUNT_PER_PAGE_ITEM_{{count}}_","_A_PAGINATION_NAVIGATION_","_A_PAGINATION_FIRST_PAGE_","_A_PAGINATION_PREVIOUS_PAGE_","_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_","_A_PAGINATION_TO_PAGE_{{page}}_","_A_PAGINATION_NEXT_PAGE_","_A_PAGINATION_LAST_PAGE_"]}}const sa={name:"PageTablePagination",components:{AlohaPage:B,AlohaTableTranslate:U,PageTablePaginationDisabled:D,PageTablePaginationExample:H,PageTablePaginationLimit:X,PageTablePaginationLimitStart:q,PageTablePaginationMaxItems:Z,PageTablePaginationOutside:oa},setup(){const{pageTitle:a}=_a(),{dataTranslate:o}=na();return{dataTranslate:o,pageTitle:a}}};function ia(a,o,n,l,i,t){const e=_("page-table-pagination-example"),s=_("page-table-pagination-limit"),E=_("page-table-pagination-limit-start"),O=_("page-table-pagination-max-items"),N=_("page-table-pagination-disabled"),A=_("page-table-pagination-outside"),m=_("aloha-table-translate"),g=_("aloha-page");return r(),u(g,{"page-title":a.pageTitle},{body:L(()=>[c(e),c(s),c(E),c(O),c(N),c(A),c(m,{data:a.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Oa=T(sa,[["render",ia]]);export{Oa as default};
