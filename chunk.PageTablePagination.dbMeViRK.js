import{t as e}from"./chunk.AlohaPage.ChkpVQK6.js";import{t}from"./chunk.AlohaTableTranslate.CnQCiLXG.js";import{Bt as n,Ft as r,It as i,Pt as a,Zt as o,an as s,sn as c,tn as l}from"./chunk.vendor.H0cZuFAV.js";import{t as u}from"./chunk.AlohaExample.yCYNeej2.js";import{It as d,r as f}from"./bundle.index.DgEnxzUz.js";import{c as p}from"./chunk.vendor-lodash.Ddhh8xms.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function h(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_DISABLED_LABEL_"
  key-id="id"
  :pagination="{ use: true, disabled: true }"
>
</a-table>`}}function g(){return{codeJs:`import {
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
};`}}var _={name:`PageTablePaginationDisabled`,components:{AlohaExample:u,ATable:f},setup(){let{codeHtml:e}=h(),{codeJs:t}=g(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=c([]);return(()=>{let e=[];p(1001,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function v(e,t,a,c,u,d){let f=l(`a-table`),p=l(`aloha-example`);return o(),i(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PAGINATION_DISABLED_HEADER_`,description:`_A_TABLE_GROUP_PAGINATION_DISABLED_DESCRIPTION_`,props:`pagination.disabled`},{default:s(()=>[r(`div`,null,[n(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_PAGINATION_DISABLED_LABEL_`,"key-id":`id`,pagination:{use:!0,disabled:!0}},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var y=m(_,[[`render`,v]]);function b(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LABEL_"
  key-id="id"
  :pagination="{ use: true }"
>
</a-table>`}}function x(){return{codeJs:`import {
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
};`}}var S={name:`PageTablePaginationExample`,components:{AlohaExample:u,ATable:f},setup(){let{codeHtml:e}=b(),{codeJs:t}=x(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=c([]);return(()=>{let e=[];p(1001,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function C(e,t,a,c,u,d){let f=l(`a-table`),p=l(`aloha-example`);return o(),i(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PAGINATION_HEADER_`,description:`_A_TABLE_GROUP_PAGINATION_DESCRIPTION_`,props:`pagination.use`},{default:s(()=>[r(`div`,null,[n(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_PAGINATION_LABEL_`,"key-id":`id`,pagination:{use:!0}},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var w=m(S,[[`render`,C]]);function T(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LIMIT_LABEL_"
  key-id="id"
  :pagination="{ use: true, limitsPerPage: ['5', '10', '25', '50', '100', '200'] }"
>
</a-table>`}}function E(){return{codeJs:`import {
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
};`}}var D={name:`PageTablePaginationLimit`,components:{AlohaExample:u,ATable:f},setup(){let{codeHtml:e}=T(),{codeJs:t}=E(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=c([]);return(()=>{let e=[];p(1001,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function O(e,t,a,c,u,d){let f=l(`a-table`),p=l(`aloha-example`);return o(),i(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PAGINATION_LIMIT_HEADER_`,description:`_A_TABLE_GROUP_PAGINATION_LIMIT_DESCRIPTION_`,props:`pagination.limitsPerPage`},{default:s(()=>[r(`div`,null,[n(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_PAGINATION_LIMIT_LABEL_`,"key-id":`id`,pagination:{use:!0,limitsPerPage:[`5`,`10`,`25`,`50`,`100`,`200`]}},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var k=m(D,[[`render`,O]]);function A(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LIMIT_START_LABEL_"
  key-id="id"
  :pagination="{ use: true, limitsPerPage: ['5', '10', '25', '50', '100', '200'], limitStart: 5 }"
>
</a-table>`}}function j(){return{codeJs:`import {
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
};`}}var M={name:`PageTablePaginationLimitStart`,components:{AlohaExample:u,ATable:f},setup(){let{codeHtml:e}=A(),{codeJs:t}=j(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=c([]);return(()=>{let e=[];p(1001,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function N(e,t,a,c,u,d){let f=l(`a-table`),p=l(`aloha-example`);return o(),i(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PAGINATION_LIMIT_START_HEADER_`,description:`_A_TABLE_GROUP_PAGINATION_LIMIT_START_DESCRIPTION_`,props:`pagination.limitStart`},{default:s(()=>[r(`div`,null,[n(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_PAGINATION_LIMIT_START_LABEL_`,"key-id":`id`,pagination:{use:!0,limitsPerPage:[`5`,`10`,`25`,`50`,`100`,`200`],limitStart:5}},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var P=m(M,[[`render`,N]]);function F(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_"
  key-id="id"
  :pagination="{ use: true, maxPages: 7 }"
>
</a-table>`}}function I(){return{codeJs:`import {
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
};`}}var ee={name:`PageTablePaginationMaxItems`,components:{AlohaExample:u,ATable:f},setup(){let{codeHtml:e}=F(),{codeJs:t}=I(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=c([]);return(()=>{let e=[];p(1001,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function L(e,t,a,c,u,d){let f=l(`a-table`),p=l(`aloha-example`);return o(),i(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_HEADER_`,description:`_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_DESCRIPTION_`,props:`pagination.maxPages`},{default:s(()=>[r(`div`,null,[n(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_`,"key-id":`id`,pagination:{use:!0,maxPages:7}},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var R=m(ee,[[`render`,L]]);function z(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_"
  key-id="id"
  :pagination="{ use: true, maxPages: 7 }"
>
</a-table>`}}function B(){return{codeJs:`import {
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
};`}}var V={name:`PageTablePaginationOutside`,components:{AlohaExample:u,ATable:f},setup(){let{codeHtml:e}=z(),{codeJs:t}=B(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=c([]),i=c(10),o=c(0),s=a(()=>r.value.slice(o.value,i.value+o.value)),l=()=>{let e=[];p(999,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e},u=({limit:e,offset:t})=>{i.value=e,o.value=t};return l(),{changeLimit:({limit:e,offset:t})=>{u({limit:e,offset:t})},changeOffset:({limit:e,offset:t})=>{u({limit:e,offset:t})},codeHtml:e,codeJs:t,columns:n,data:r,dataPaginated:s}}};function H(e,t,a,c,u,d){let f=l(`a-table`),p=l(`aloha-example`);return o(),i(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PAGINATION_OUTSIDE_HEADER_`,description:`_A_TABLE_GROUP_PAGINATION_OUTSIDE_DESCRIPTION_`,props:[`pagination.isOutside`,`count-all-rows`],emits:[`change-limit`,`change-offset`]},{default:s(()=>[r(`div`,null,[n(f,{columns:e.columns,data:e.dataPaginated,label:`_A_TABLE_GROUP_PAGINATION_OUTSIDE_LABEL_`,"key-id":`id`,pagination:{use:!0,isOutside:!0},"count-all-rows":e.data.length,onChangeLimit:e.changeLimit,onChangeOffset:e.changeOffset},null,8,[`columns`,`data`,`count-all-rows`,`onChangeLimit`,`onChangeOffset`])])]),_:1},8,[`code-html`,`code-js`])}var U=m(V,[[`render`,H]]);function W(){return{codeHtml:`<a-table
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
></a-table>`}}function G(){return{codeJs:`import {
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
};`}}var K={name:`PageTablePaginationPosition`,components:{AlohaExample:u,ATable:f},setup(){let{codeHtml:e}=W(),{codeJs:t}=G(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=c([]);return(()=>{let e=[];p(1001,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function q(e,t,r,a,c,u){let d=l(`a-table`),f=l(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PAGINATION_POSITION_HEADER_`,description:`_A_TABLE_GROUP_PAGINATION_POSITION_DESCRIPTION_`,props:`pagination.position`},{default:s(()=>[n(d,{columns:e.columns,data:e.data,pagination:{use:!0,position:`top`},"key-id":`id`,label:`_A_TABLE_GROUP_PAGINATION_POSITION_TOP_LABEL_`},null,8,[`columns`,`data`]),n(d,{class:`a_mt_5`,columns:e.columns,data:e.data,pagination:{use:!0,position:`bottom`},"key-id":`id`,label:`_A_TABLE_GROUP_PAGINATION_POSITION_BOTTOM_LABEL_`},null,8,[`columns`,`data`]),n(d,{class:`a_mt_5`,columns:e.columns,data:e.data,pagination:{use:!0,position:`y`},"key-id":`id`,label:`_A_TABLE_GROUP_PAGINATION_POSITION_Y_LABEL_`},null,8,[`columns`,`data`])]),_:1},8,[`code-html`,`code-js`])}var J=m(K,[[`render`,q]]);function Y(){let e=a(()=>d({placeholder:`_A_TABLE_PAGINATION_`}));return{pageTitle:a(()=>`ATable ${e.value}`)}}function X(){return{dataTranslate:[`_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_`,`_A_COUNT_PER_PAGE_`,`_A_COUNT_PER_PAGE_ITEM_{{count}}_`,`_A_PAGINATION_NAVIGATION_`,`_A_PAGINATION_FIRST_PAGE_`,`_A_PAGINATION_PREVIOUS_PAGE_`,`_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_`,`_A_PAGINATION_TO_PAGE_{{page}}_`,`_A_PAGINATION_NEXT_PAGE_`,`_A_PAGINATION_LAST_PAGE_`]}}var Z={name:`PageTablePagination`,components:{AlohaPage:e,AlohaTableTranslate:t,PageTablePaginationDisabled:y,PageTablePaginationExample:w,PageTablePaginationLimit:k,PageTablePaginationLimitStart:P,PageTablePaginationMaxItems:R,PageTablePaginationOutside:U,PageTablePaginationPosition:J},setup(){let{pageTitle:e}=Y(),{dataTranslate:t}=X();return{dataTranslate:t,pageTitle:e}}};function Q(e,t,r,a,c,u){let d=l(`page-table-pagination-example`),f=l(`page-table-pagination-limit`),p=l(`page-table-pagination-limit-start`),m=l(`page-table-pagination-max-items`),h=l(`page-table-pagination-disabled`),g=l(`page-table-pagination-outside`),_=l(`page-table-pagination-position`),v=l(`aloha-table-translate`),y=l(`aloha-page`);return o(),i(y,{"page-title":e.pageTitle},{body:s(()=>[n(d),n(f),n(p),n(m),n(h),n(g),n(_),n(v,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var $=m(Z,[[`render`,Q]]);export{$ as default};