import{t as e}from"./chunk.AlohaPage.BSfHVC43.js";import{Ht as t,Jt as n,Ut as r,Vt as i,_n as a,mn as o,on as s,un as c,wn as l}from"./chunk.vendor.DL09mhUf.js";import{t as u}from"./chunk.AlohaExample.VTWuqY0j.js";import{a as d,hn as f,t as p}from"./bundle.index.D-5bYXwk.js";import{u as m}from"./chunk.vendor-lodash.BlbRpQpv.js";function h(){return{codeHtml:`<a-table
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
};`}}var _={name:`PageTablePreviewDownRight`,components:{AlohaExample:u,ATable:d},setup(){let{codeHtml:e}=h(),{codeJs:t}=g(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=a([]);return(()=>{let e=[];m(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function v(e,i,a,u,d,f){let p=c(`a-table`),m=c(`aloha-example`);return s(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_HEADER_`,description:`_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_DESCRIPTION_`},{default:o(()=>[t(`div`,null,[n(p,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`,preview:`down`},{preview:o(e=>[t(`pre`,null,l(e),1)]),_:1},8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var y=p(_,[[`render`,v]]);function b(){let e=i(()=>f({placeholder:`_A_TABLE_PREVIEW_DOWN_PAGE_TITLE_`}));return{pageTitle:i(()=>`ATable ${e.value}`)}}var x={name:`PageTablePreviewDown`,components:{AlohaPage:e,PageTablePreviewDownExample:y},setup(){let{pageTitle:e}=b();return{pageTitle:e}}};function S(e,t,i,a,l,u){let d=c(`page-table-preview-down-example`),f=c(`aloha-page`);return s(),r(f,{"page-title":e.pageTitle},{body:o(()=>[n(d)]),_:1},8,[`page-title`])}var C=p(x,[[`render`,S]]);export{C as default};