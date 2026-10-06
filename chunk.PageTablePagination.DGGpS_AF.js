import{Ct as e,Tt as t,Ut as n,Yt as r,kt as i,qt as a,wt as o,zt as s}from"./chunk.vendor.CZPox1kV.js";import{l as c}from"./chunk.vendor-lodash.BnpO4xCi.js";import{i as l,kt as u,t as d}from"./bundle.index.BmSiyQNH.js";import{n as f,t as p}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as m}from"./chunk.AlohaTableTranslate.C-b2Nle9.js";function h(){return{codeHtml:`<a-table
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
};`}}var _={name:`PageTablePaginationDisabled`,components:{AlohaExample:p,ATable:l},setup(){let{codeHtml:e}=h(),{codeJs:t}=g(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];c(1001,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function v(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PAGINATION_DISABLED_HEADER_`,description:`_A_TABLE_GROUP_PAGINATION_DISABLED_DESCRIPTION_`,props:`pagination.disabled`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_PAGINATION_DISABLED_LABEL_`,"key-id":`id`,pagination:{use:!0,disabled:!0}},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var y=d(_,[[`render`,v]]);function b(){return{codeHtml:`<a-table
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
};`}}var S={name:`PageTablePaginationExample`,components:{AlohaExample:p,ATable:l},setup(){let{codeHtml:e}=b(),{codeJs:t}=x(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];c(1001,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function C(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PAGINATION_HEADER_`,description:`_A_TABLE_GROUP_PAGINATION_DESCRIPTION_`,props:`pagination.use`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_PAGINATION_LABEL_`,"key-id":`id`,pagination:{use:!0}},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var w=d(S,[[`render`,C]]);function T(){return{codeHtml:`<a-table
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
};`}}var D={name:`PageTablePaginationLimit`,components:{AlohaExample:p,ATable:l},setup(){let{codeHtml:e}=T(),{codeJs:t}=E(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];c(1001,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function O(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PAGINATION_LIMIT_HEADER_`,description:`_A_TABLE_GROUP_PAGINATION_LIMIT_DESCRIPTION_`,props:`pagination.limitsPerPage`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_PAGINATION_LIMIT_LABEL_`,"key-id":`id`,pagination:{use:!0,limitsPerPage:[`5`,`10`,`25`,`50`,`100`,`200`]}},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var k=d(D,[[`render`,O]]);function A(){return{codeHtml:`<a-table
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
};`}}var M={name:`PageTablePaginationLimitStart`,components:{AlohaExample:p,ATable:l},setup(){let{codeHtml:e}=A(),{codeJs:t}=j(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];c(1001,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function N(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PAGINATION_LIMIT_START_HEADER_`,description:`_A_TABLE_GROUP_PAGINATION_LIMIT_START_DESCRIPTION_`,props:`pagination.limitStart`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_PAGINATION_LIMIT_START_LABEL_`,"key-id":`id`,pagination:{use:!0,limitsPerPage:[`5`,`10`,`25`,`50`,`100`,`200`],limitStart:5}},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var P=d(M,[[`render`,N]]);function F(){return{codeHtml:`<a-table
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
};`}}var ee={name:`PageTablePaginationMaxItems`,components:{AlohaExample:p,ATable:l},setup(){let{codeHtml:e}=F(),{codeJs:t}=I(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];c(1001,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function L(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_HEADER_`,description:`_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_DESCRIPTION_`,props:`pagination.maxPages`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_`,"key-id":`id`,pagination:{use:!0,maxPages:7}},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var R=d(ee,[[`render`,L]]);function z(){return{codeHtml:`<a-table
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
};`}}var V={name:`PageTablePaginationOutside`,components:{AlohaExample:p,ATable:l},setup(){let{codeHtml:t}=z(),{codeJs:n}=B(),i=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],a=r([]),o=r(10),s=r(0),l=e(()=>a.value.slice(s.value,o.value+s.value)),u=()=>{let e=[];c(999,t=>{e.push({id:t,aloha:`aloha ${t}`})}),a.value=e},d=({limit:e,offset:t})=>{o.value=e,s.value=t};return u(),{changeLimit:({limit:e,offset:t})=>{d({limit:e,offset:t})},changeOffset:({limit:e,offset:t})=>{d({limit:e,offset:t})},codeHtml:t,codeJs:n,columns:i,data:a,dataPaginated:l}}};function H(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PAGINATION_OUTSIDE_HEADER_`,description:`_A_TABLE_GROUP_PAGINATION_OUTSIDE_DESCRIPTION_`,props:[`pagination.isOutside`,`count-all-rows`],emits:[`change-limit`,`change-offset`]},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.dataPaginated,label:`_A_TABLE_GROUP_PAGINATION_OUTSIDE_LABEL_`,"key-id":`id`,pagination:{use:!0,isOutside:!0},"count-all-rows":e.data.length,onChangeLimit:e.changeLimit,onChangeOffset:e.changeOffset},null,8,[`columns`,`data`,`count-all-rows`,`onChangeLimit`,`onChangeOffset`])])]),_:1},8,[`code-html`,`code-js`])}var U=d(V,[[`render`,H]]);function W(){return{codeHtml:`<a-table
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
};`}}var K={name:`PageTablePaginationPosition`,components:{AlohaExample:p,ATable:l},setup(){let{codeHtml:e}=W(),{codeJs:t}=G(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];c(1001,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function q(e,r,o,c,l,u){let d=n(`a-table`),f=n(`aloha-example`);return s(),t(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PAGINATION_POSITION_HEADER_`,description:`_A_TABLE_GROUP_PAGINATION_POSITION_DESCRIPTION_`,props:`pagination.position`},{default:a(()=>[i(d,{columns:e.columns,data:e.data,pagination:{use:!0,position:`top`},"key-id":`id`,label:`_A_TABLE_GROUP_PAGINATION_POSITION_TOP_LABEL_`},null,8,[`columns`,`data`]),i(d,{class:`a_mt_5`,columns:e.columns,data:e.data,pagination:{use:!0,position:`bottom`},"key-id":`id`,label:`_A_TABLE_GROUP_PAGINATION_POSITION_BOTTOM_LABEL_`},null,8,[`columns`,`data`]),i(d,{class:`a_mt_5`,columns:e.columns,data:e.data,pagination:{use:!0,position:`y`},"key-id":`id`,label:`_A_TABLE_GROUP_PAGINATION_POSITION_Y_LABEL_`},null,8,[`columns`,`data`])]),_:1},8,[`code-html`,`code-js`])}var J=d(K,[[`render`,q]]);function Y(){let t=e(()=>u({placeholder:`_A_TABLE_PAGINATION_`}));return{pageTitle:e(()=>`ATable ${t.value}`)}}function X(){return{dataTranslate:[`_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_`,`_A_COUNT_PER_PAGE_`,`_A_COUNT_PER_PAGE_ITEM_{{count}}_`,`_A_PAGINATION_NAVIGATION_`,`_A_PAGINATION_FIRST_PAGE_`,`_A_PAGINATION_PREVIOUS_PAGE_`,`_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_`,`_A_PAGINATION_TO_PAGE_{{page}}_`,`_A_PAGINATION_NEXT_PAGE_`,`_A_PAGINATION_LAST_PAGE_`]}}var Z={name:`PageTablePagination`,components:{AlohaPage:f,AlohaTableTranslate:m,PageTablePaginationDisabled:y,PageTablePaginationExample:w,PageTablePaginationLimit:k,PageTablePaginationLimitStart:P,PageTablePaginationMaxItems:R,PageTablePaginationOutside:U,PageTablePaginationPosition:J},setup(){let{pageTitle:e}=Y(),{dataTranslate:t}=X();return{dataTranslate:t,pageTitle:e}}};function Q(e,r,o,c,l,u){let d=n(`page-table-pagination-example`),f=n(`page-table-pagination-limit`),p=n(`page-table-pagination-limit-start`),m=n(`page-table-pagination-max-items`),h=n(`page-table-pagination-disabled`),g=n(`page-table-pagination-outside`),_=n(`page-table-pagination-position`),v=n(`aloha-table-translate`),y=n(`aloha-page`);return s(),t(y,{"page-title":e.pageTitle},{body:a(()=>[i(d),i(f),i(p),i(m),i(h),i(g),i(_),i(v,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var $=d(Z,[[`render`,Q]]);export{$ as default};