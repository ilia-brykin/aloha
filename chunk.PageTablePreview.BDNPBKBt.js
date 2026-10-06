import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{l}from"./chunk.vendor-lodash.BnpO4xCi.js";import{i as u,kt as d,t as f}from"./bundle.index.BmSiyQNH.js";import{n as p,t as m}from"./chunk.AlohaExample.CD4LlhAz.js";function h(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function g(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePreviewRight",
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
      times(20, item => {
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
};`}}var _={name:`PageTablePreviewRight`,components:{AlohaExample:m,ATable:u},setup(){let{codeHtml:e}=h(),{codeJs:t}=g(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=i([]);return(()=>{let e=[];l(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r,disableRowPreview:({row:e})=>e.id===2||e.id===4}}};function v(t,i,l,u,d,f){let p=r(`a-table`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_TABLE_GROUP_PREVIEW_RIGHT_HEADER_`,description:`_A_TABLE_GROUP_PREVIEW_RIGHT_DESCRIPTION_`},{default:o(()=>[s(`div`,null,[a(p,{columns:t.columns,data:t.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`,preview:`right`,"disabled-preview-row-callback":t.disableRowPreview},{preview:o(t=>[s(`pre`,null,e(t),1)]),_:1},8,[`columns`,`data`,`disabled-preview-row-callback`])])]),_:1},8,[`code-html`,`code-js`])}var y=f(_,[[`render`,v]]);function b(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function x(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTablePreviewRightPagination",
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
      times(20, item => {
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
};`}}var S={name:`PageTablePreviewRight`,components:{AlohaExample:m,ATable:u},setup(){let{codeHtml:e}=b(),{codeJs:t}=x(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=i([]);return(()=>{let e=[];l(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function C(t,i,l,u,d,f){let p=r(`a-table`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_HEADER_`,description:`_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_DESCRIPTION_`,props:[`preview`,`pagination.use`]},{default:o(()=>[s(`div`,null,[a(p,{columns:t.columns,data:t.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`,preview:`right`,pagination:{use:!0}},{preview:o(t=>[s(`pre`,null,e(t),1)]),_:1},8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var w=f(S,[[`render`,C]]);function T(){let e=t(()=>d({placeholder:`_A_TABLE_SIMPLE_`}));return{pageTitle:t(()=>`ATable ${e.value}`)}}var E={name:`PageTablePreview`,components:{AlohaPage:p,PageTablePreviewRight:y,PageTablePreviewRightPagination:w},setup(){let{pageTitle:e}=T();return{pageTitle:e}}};function D(e,t,i,s,l,u){let d=r(`page-table-preview-right`),f=r(`page-table-preview-right-pagination`),p=r(`aloha-page`);return c(),n(p,{"page-title":e.pageTitle},{body:o(()=>[a(d),a(f)]),_:1},8,[`page-title`])}var O=f(E,[[`render`,D]]);export{O as default};