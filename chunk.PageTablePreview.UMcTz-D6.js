import{t as e}from"./chunk.AlohaPage.B2JXMr8i.js";import{$t as t,Ft as n,It as r,Pt as i,Vt as a,hn as o,ln as s,rn as c,sn as l}from"./chunk.vendor.BvryzG0o.js";import{t as u}from"./chunk.AlohaExample.CdQ6SjdT.js";import{$t as d,i as f}from"./bundle.index.BaX-GPsX.js";import{l as p}from"./chunk.vendor-lodash.tcyERu_i.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function h(){return{codeHtml:`<a-table
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
};`}}var _={name:`PageTablePreviewRight`,components:{AlohaExample:u,ATable:f},setup(){let{codeHtml:e}=h(),{codeJs:t}=g(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=s([]);return(()=>{let e=[];p(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r,disableRowPreview:({row:e})=>e.id===2||e.id===4}}};function v(e,i,s,u,d,f){let p=c(`a-table`),m=c(`aloha-example`);return t(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PREVIEW_RIGHT_HEADER_`,description:`_A_TABLE_GROUP_PREVIEW_RIGHT_DESCRIPTION_`},{default:l(()=>[n(`div`,null,[a(p,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`,preview:`right`,"disabled-preview-row-callback":e.disableRowPreview},{preview:l(e=>[n(`pre`,null,o(e),1)]),_:1},8,[`columns`,`data`,`disabled-preview-row-callback`])])]),_:1},8,[`code-html`,`code-js`])}var y=m(_,[[`render`,v]]);function b(){return{codeHtml:`<a-table
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
};`}}var S={name:`PageTablePreviewRight`,components:{AlohaExample:u,ATable:f},setup(){let{codeHtml:e}=b(),{codeJs:t}=x(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=s([]);return(()=>{let e=[];p(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function C(e,i,s,u,d,f){let p=c(`a-table`),m=c(`aloha-example`);return t(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_HEADER_`,description:`_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_DESCRIPTION_`,props:[`preview`,`pagination.use`]},{default:l(()=>[n(`div`,null,[a(p,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`,preview:`right`,pagination:{use:!0}},{preview:l(e=>[n(`pre`,null,o(e),1)]),_:1},8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var w=m(S,[[`render`,C]]);function T(){let e=i(()=>d({placeholder:`_A_TABLE_SIMPLE_`}));return{pageTitle:i(()=>`ATable ${e.value}`)}}var E={name:`PageTablePreview`,components:{AlohaPage:e,PageTablePreviewRight:y,PageTablePreviewRightPagination:w},setup(){let{pageTitle:e}=T();return{pageTitle:e}}};function D(e,n,i,o,s,u){let d=c(`page-table-preview-right`),f=c(`page-table-preview-right-pagination`),p=c(`aloha-page`);return t(),r(p,{"page-title":e.pageTitle},{body:l(()=>[a(d),a(f)]),_:1},8,[`page-title`])}var O=m(E,[[`render`,D]]);export{O as default};