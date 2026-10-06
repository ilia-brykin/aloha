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
  name: "PageTablePreviewDownExample",
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
};`}}var _={name:`PageTablePreviewDownRight`,components:{AlohaExample:m,ATable:u},setup(){let{codeHtml:e}=h(),{codeJs:t}=g(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=i([]);return(()=>{let e=[];l(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function v(t,i,l,u,d,f){let p=r(`a-table`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_HEADER_`,description:`_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_DESCRIPTION_`},{default:o(()=>[s(`div`,null,[a(p,{columns:t.columns,data:t.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`,preview:`down`},{preview:o(t=>[s(`pre`,null,e(t),1)]),_:1},8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var y=f(_,[[`render`,v]]);function b(){let e=t(()=>d({placeholder:`_A_TABLE_PREVIEW_DOWN_PAGE_TITLE_`}));return{pageTitle:t(()=>`ATable ${e.value}`)}}var x={name:`PageTablePreviewDown`,components:{AlohaPage:p,PageTablePreviewDownExample:y},setup(){let{pageTitle:e}=b();return{pageTitle:e}}};function S(e,t,i,s,l,u){let d=r(`page-table-preview-down-example`),f=r(`aloha-page`);return c(),n(f,{"page-title":e.pageTitle},{body:o(()=>[a(d)]),_:1},8,[`page-title`])}var C=f(x,[[`render`,S]]);export{C as default};