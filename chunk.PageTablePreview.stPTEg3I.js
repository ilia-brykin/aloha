import{t as e}from"./chunk.AlohaPage.CtPiWSGW.js";import{$t as t,Dt as n,Et as r,Mt as i,Ot as a,Ut as o,Zt as s,an as c,qt as l}from"./chunk.vendor.BLRpG40B.js";import{t as u}from"./chunk.AlohaExample.Bs_TZ3nZ.js";import{jt as d,r as f}from"./bundle.index.Dik8P8_q.js";import{c as p}from"./chunk.vendor-lodash.Coco6wWJ.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function h(){return{codeHtml:`<a-table
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
};`}}var _={name:`PageTablePreviewRight`,components:{AlohaExample:u,ATable:f},setup(){let{codeHtml:e}=h(),{codeJs:n}=g(),r=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=t([]);return(()=>{let e=[];p(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:n,columns:r,data:i,disableRowPreview:({row:e})=>e.id===2||e.id===4}}};function v(e,t,r,u,d,f){let p=l(`a-table`),m=l(`aloha-example`);return o(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PREVIEW_RIGHT_HEADER_`,description:`_A_TABLE_GROUP_PREVIEW_RIGHT_DESCRIPTION_`},{default:s(()=>[n(`div`,null,[i(p,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`,preview:`right`,"disabled-preview-row-callback":e.disableRowPreview},{preview:s(e=>[n(`pre`,null,c(e),1)]),_:1},8,[`columns`,`data`,`disabled-preview-row-callback`])])]),_:1},8,[`code-html`,`code-js`])}var y=m(_,[[`render`,v]]);function b(){return{codeHtml:`<a-table
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
};`}}var S={name:`PageTablePreviewRight`,components:{AlohaExample:u,ATable:f},setup(){let{codeHtml:e}=b(),{codeJs:n}=x(),r=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=t([]);return(()=>{let e=[];p(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:n,columns:r,data:i}}};function C(e,t,r,u,d,f){let p=l(`a-table`),m=l(`aloha-example`);return o(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_HEADER_`,description:`_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_DESCRIPTION_`,props:[`preview`,`pagination.use`]},{default:s(()=>[n(`div`,null,[i(p,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`,preview:`right`,pagination:{use:!0}},{preview:s(e=>[n(`pre`,null,c(e),1)]),_:1},8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var w=m(S,[[`render`,C]]);function T(){let e=r(()=>d({placeholder:`_A_TABLE_SIMPLE_`}));return{pageTitle:r(()=>`ATable ${e.value}`)}}var E={name:`PageTablePreview`,components:{AlohaPage:e,PageTablePreviewRight:y,PageTablePreviewRightPagination:w},setup(){let{pageTitle:e}=T();return{pageTitle:e}}};function D(e,t,n,r,c,u){let d=l(`page-table-preview-right`),f=l(`page-table-preview-right-pagination`),p=l(`aloha-page`);return o(),a(p,{"page-title":e.pageTitle},{body:s(()=>[i(d),i(f)]),_:1},8,[`page-title`])}var O=m(E,[[`render`,D]]);export{O as default};