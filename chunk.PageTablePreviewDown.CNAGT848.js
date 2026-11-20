import{t as e}from"./chunk.AlohaPage.CYlv3kxV.js";import{$t as t,Ft as n,It as r,Pt as i,Vt as a,hn as o,ln as s,rn as c,sn as l}from"./chunk.vendor.BvryzG0o.js";import{t as u}from"./chunk.AlohaExample.BB5AqaXZ.js";import{$t as d,i as f}from"./bundle.index.as44OnM9.js";import{l as p}from"./chunk.vendor-lodash.tcyERu_i.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function h(){return{codeHtml:`<a-table
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
};`}}var _={name:`PageTablePreviewDownRight`,components:{AlohaExample:u,ATable:f},setup(){let{codeHtml:e}=h(),{codeJs:t}=g(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=s([]);return(()=>{let e=[];p(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function v(e,i,s,u,d,f){let p=c(`a-table`),m=c(`aloha-example`);return t(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_HEADER_`,description:`_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_DESCRIPTION_`},{default:l(()=>[n(`div`,null,[a(p,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`,preview:`down`},{preview:l(e=>[n(`pre`,null,o(e),1)]),_:1},8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var y=m(_,[[`render`,v]]);function b(){let e=i(()=>d({placeholder:`_A_TABLE_PREVIEW_DOWN_PAGE_TITLE_`}));return{pageTitle:i(()=>`ATable ${e.value}`)}}var x={name:`PageTablePreviewDown`,components:{AlohaPage:e,PageTablePreviewDownExample:y},setup(){let{pageTitle:e}=b();return{pageTitle:e}}};function S(e,n,i,o,s,u){let d=c(`page-table-preview-down-example`),f=c(`aloha-page`);return t(),r(f,{"page-title":e.pageTitle},{body:l(()=>[a(d)]),_:1},8,[`page-title`])}var C=m(x,[[`render`,S]]);export{C as default};