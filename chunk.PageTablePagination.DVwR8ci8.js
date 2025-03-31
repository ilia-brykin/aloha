import{A as b,a as B}from"./chunk.AlohaExample.D-Twx0ux.js";import{A as U}from"./chunk.AlohaTableTranslate.CeKfKN4H.js";import{_ as u,g as f}from"./bundle.index.BWhCiNJB.js";import{K as p}from"./chunk.vendor-lodash._bo9RwXi.js";import{r as d,U as L,aS as r,e as _,V as T,Y as h,Z as c,d as I}from"./chunk.vendor.mIi79LkZ.js";import{A as P}from"./chunk.ATable.Cai9trtF.js";import"./chunk.APageTabTitle.CjMpxxFC.js";import"./chunk.AlohaHighlightjs.DVKaSffY.js";import"./chunk.translations-ar.5mcTUwmP.js";import"./chunk.translations-de.C0XFBnNP.js";import"./chunk.translations-en.-_68JtIX.js";import"./chunk.translations-es.FCZQRKAJ.js";import"./chunk.translations-fr.B9HmDpEn.js";import"./chunk.translations-hr.w4II8VYA.js";import"./chunk.translations-it.BYwZWJso.js";import"./chunk.translations-ru.DnEKAuL3.js";function M(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_DISABLED_LABEL_"
  key-id="id"
  :pagination="{ use: true, disabled: true }"
>
</a-table>`}}function C(){return{codeJs:`import {
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
};`}}const k={name:"PageTablePaginationDisabled",components:{AlohaExample:b,ATable:P},setup(){const{codeHtml:a}=M(),{codeJs:o}=C(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=d([]);return(()=>{const t=[];p(1001,e=>{t.push({id:e,aloha:`aloha ${e}`})}),l.value=t})(),{codeHtml:a,codeJs:o,columns:n,data:l}}};function y(a,o,n,l,i,t){const e=_("a-table"),s=_("aloha-example");return T(),L(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_DISABLED_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_DISABLED_DESCRIPTION_",props:"pagination.disabled"},{default:r(()=>[h("div",null,[c(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_DISABLED_LABEL_","key-id":"id",pagination:{use:!0,disabled:!0}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const D=u(k,[["render",y]]);function G(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LABEL_"
  key-id="id"
  :pagination="{ use: true }"
>
</a-table>`}}function $(){return{codeJs:`import {
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
};`}}const R={name:"PageTablePaginationExample",components:{AlohaExample:b,ATable:P},setup(){const{codeHtml:a}=G(),{codeJs:o}=$(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=d([]);return(()=>{const t=[];p(1001,e=>{t.push({id:e,aloha:`aloha ${e}`})}),l.value=t})(),{codeHtml:a,codeJs:o,columns:n,data:l}}};function v(a,o,n,l,i,t){const e=_("a-table"),s=_("aloha-example");return T(),L(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_DESCRIPTION_",props:"pagination.use"},{default:r(()=>[h("div",null,[c(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_LABEL_","key-id":"id",pagination:{use:!0}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const H=u(R,[["render",v]]);function S(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LIMIT_LABEL_"
  key-id="id"
  :pagination="{ use: true, limitsPerPage: ['5', '10', '25', '50', '100', '200'] }"
>
</a-table>`}}function J(){return{codeJs:`import {
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
};`}}const x={name:"PageTablePaginationLimit",components:{AlohaExample:b,ATable:P},setup(){const{codeHtml:a}=S(),{codeJs:o}=J(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=d([]);return(()=>{const t=[];p(1001,e=>{t.push({id:e,aloha:`aloha ${e}`})}),l.value=t})(),{codeHtml:a,codeJs:o,columns:n,data:l}}};function j(a,o,n,l,i,t){const e=_("a-table"),s=_("aloha-example");return T(),L(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_LIMIT_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_LIMIT_DESCRIPTION_",props:"pagination.limitsPerPage"},{default:r(()=>[h("div",null,[c(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_LIMIT_LABEL_","key-id":"id",pagination:{use:!0,limitsPerPage:["5","10","25","50","100","200"]}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const X=u(x,[["render",j]]);function V(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LIMIT_START_LABEL_"
  key-id="id"
  :pagination="{ use: true, limitsPerPage: ['5', '10', '25', '50', '100', '200'], limitStart: 5 }"
>
</a-table>`}}function w(){return{codeJs:`import {
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
};`}}const F={name:"PageTablePaginationLimitStart",components:{AlohaExample:b,ATable:P},setup(){const{codeHtml:a}=V(),{codeJs:o}=w(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=d([]);return(()=>{const t=[];p(1001,e=>{t.push({id:e,aloha:`aloha ${e}`})}),l.value=t})(),{codeHtml:a,codeJs:o,columns:n,data:l}}};function K(a,o,n,l,i,t){const e=_("a-table"),s=_("aloha-example");return T(),L(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_LIMIT_START_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_LIMIT_START_DESCRIPTION_",props:"pagination.limitStart"},{default:r(()=>[h("div",null,[c(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_LIMIT_START_LABEL_","key-id":"id",pagination:{use:!0,limitsPerPage:["5","10","25","50","100","200"],limitStart:5}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const Y=u(F,[["render",K]]);function Z(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_"
  key-id="id"
  :pagination="{ use: true, maxPages: 7 }"
>
</a-table>`}}function q(){return{codeJs:`import {
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
};`}}const z={name:"PageTablePaginationMaxItems",components:{AlohaExample:b,ATable:P},setup(){const{codeHtml:a}=Z(),{codeJs:o}=q(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=d([]);return(()=>{const t=[];p(1001,e=>{t.push({id:e,aloha:`aloha ${e}`})}),l.value=t})(),{codeHtml:a,codeJs:o,columns:n,data:l}}};function Q(a,o,n,l,i,t){const e=_("a-table"),s=_("aloha-example");return T(),L(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_DESCRIPTION_",props:"pagination.maxPages"},{default:r(()=>[h("div",null,[c(e,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_","key-id":"id",pagination:{use:!0,maxPages:7}},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const W=u(z,[["render",Q]]);function aa(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_"
  key-id="id"
  :pagination="{ use: true, maxPages: 7 }"
>
</a-table>`}}function ea(){return{codeJs:`import {
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
};`}}const la={name:"PageTablePaginationOutside",components:{AlohaExample:b,ATable:P},setup(){const{codeHtml:a}=aa(),{codeJs:o}=ea(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=d([]),i=d(10),t=d(0),e=I(()=>l.value.slice(t.value,i.value+t.value)),s=()=>{const A=[];p(999,m=>{A.push({id:m,aloha:`aloha ${m}`})}),l.value=A},E=({limit:A,offset:m})=>{i.value=A,t.value=m},O=({limit:A,offset:m})=>{E({limit:A,offset:m})},N=({limit:A,offset:m})=>{E({limit:A,offset:m})};return s(),{changeLimit:O,changeOffset:N,codeHtml:a,codeJs:o,columns:n,data:l,dataPaginated:e}}};function ta(a,o,n,l,i,t){const e=_("a-table"),s=_("aloha-example");return T(),L(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_PAGINATION_OUTSIDE_HEADER_",description:"_A_TABLE_GROUP_PAGINATION_OUTSIDE_DESCRIPTION_",props:["pagination.isOutside","count-all-rows"],emits:["change-limit","change-offset"]},{default:r(()=>[h("div",null,[c(e,{columns:a.columns,data:a.dataPaginated,label:"_A_TABLE_GROUP_PAGINATION_OUTSIDE_LABEL_","key-id":"id",pagination:{use:!0,isOutside:!0},"count-all-rows":a.data.length,onChangeLimit:a.changeLimit,onChangeOffset:a.changeOffset},null,8,["columns","data","count-all-rows","onChangeLimit","onChangeOffset"])])]),_:1},8,["code-html","code-js"])}const oa=u(la,[["render",ta]]);function _a(){const a=I(()=>f({placeholder:"_A_TABLE_PAGINATION_"}));return{pageTitle:I(()=>`ATable ${a.value}`)}}function na(){return{dataTranslate:["_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_","_A_COUNT_PER_PAGE_","_A_COUNT_PER_PAGE_ITEM_{{count}}_","_A_PAGINATION_NAVIGATION_","_A_PAGINATION_FIRST_PAGE_","_A_PAGINATION_PREVIOUS_PAGE_","_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_","_A_PAGINATION_TO_PAGE_{{page}}_","_A_PAGINATION_NEXT_PAGE_","_A_PAGINATION_LAST_PAGE_"]}}const sa={name:"PageTablePagination",components:{AlohaPage:B,AlohaTableTranslate:U,PageTablePaginationDisabled:D,PageTablePaginationExample:H,PageTablePaginationLimit:X,PageTablePaginationLimitStart:Y,PageTablePaginationMaxItems:W,PageTablePaginationOutside:oa},setup(){const{pageTitle:a}=_a(),{dataTranslate:o}=na();return{dataTranslate:o,pageTitle:a}}};function ia(a,o,n,l,i,t){const e=_("page-table-pagination-example"),s=_("page-table-pagination-limit"),E=_("page-table-pagination-limit-start"),O=_("page-table-pagination-max-items"),N=_("page-table-pagination-disabled"),A=_("page-table-pagination-outside"),m=_("aloha-table-translate"),g=_("aloha-page");return T(),L(g,{"page-title":a.pageTitle},{body:r(()=>[c(e),c(s),c(E),c(O),c(N),c(A),c(m,{data:a.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const ga=u(sa,[["render",ia]]);export{ga as default};
