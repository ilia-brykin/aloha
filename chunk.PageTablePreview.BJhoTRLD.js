import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{Ft as t,Nt as n,Pt as r,Xt as i,en as a,fn as o,in as s,on as c,zt as l}from"./chunk.vendor.Cx127fe1.js";import{t as u}from"./chunk.AlohaExample.Dh7-vA8e.js";import{Mt as d,r as f}from"./bundle.index.Csp1_sOL.js";import{c as p}from"./chunk.vendor-lodash.Ddhh8xms.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function h(){return{codeHtml:`<a-table
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
};`}}var _={name:`PageTablePreviewRight`,components:{AlohaExample:u,ATable:f},setup(){let{codeHtml:e}=h(),{codeJs:t}=g(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=c([]);return(()=>{let e=[];p(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r,disableRowPreview:({row:e})=>e.id===2||e.id===4}}};function v(e,n,c,u,d,f){let p=a(`a-table`),m=a(`aloha-example`);return i(),t(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PREVIEW_RIGHT_HEADER_`,description:`_A_TABLE_GROUP_PREVIEW_RIGHT_DESCRIPTION_`},{default:s(()=>[r(`div`,null,[l(p,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`,preview:`right`,"disabled-preview-row-callback":e.disableRowPreview},{preview:s(e=>[r(`pre`,null,o(e),1)]),_:1},8,[`columns`,`data`,`disabled-preview-row-callback`])])]),_:1},8,[`code-html`,`code-js`])}var y=m(_,[[`render`,v]]);function b(){return{codeHtml:`<a-table
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
};`}}var S={name:`PageTablePreviewRight`,components:{AlohaExample:u,ATable:f},setup(){let{codeHtml:e}=b(),{codeJs:t}=x(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=c([]);return(()=>{let e=[];p(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function C(e,n,c,u,d,f){let p=a(`a-table`),m=a(`aloha-example`);return i(),t(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_HEADER_`,description:`_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_DESCRIPTION_`,props:[`preview`,`pagination.use`]},{default:s(()=>[r(`div`,null,[l(p,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`,preview:`right`,pagination:{use:!0}},{preview:s(e=>[r(`pre`,null,o(e),1)]),_:1},8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var w=m(S,[[`render`,C]]);function T(){let e=n(()=>d({placeholder:`_A_TABLE_SIMPLE_`}));return{pageTitle:n(()=>`ATable ${e.value}`)}}var E={name:`PageTablePreview`,components:{AlohaPage:e,PageTablePreviewRight:y,PageTablePreviewRightPagination:w},setup(){let{pageTitle:e}=T();return{pageTitle:e}}};function D(e,n,r,o,c,u){let d=a(`page-table-preview-right`),f=a(`page-table-preview-right-pagination`),p=a(`aloha-page`);return i(),t(p,{"page-title":e.pageTitle},{body:s(()=>[l(d),l(f)]),_:1},8,[`page-title`])}var O=m(E,[[`render`,D]]);export{O as default};