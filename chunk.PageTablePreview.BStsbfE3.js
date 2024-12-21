import{A as b,a as g}from"./chunk.AlohaExample.BCam-JEP.js";import{A as T}from"./chunk.ATable.MvrJBf_u.js";import{U as h}from"./chunk.vendor-lodash.BBRAkY5X.js";import{r as E,k as n,J as A,aO as r,H as p,N as d,O as m,aP as P,a as L}from"./chunk.vendor.CwuJ9Ljq.js";import{_ as u,g as B}from"./bundle.index.CgNOnQ0b.js";import"./chunk.translations-ar.CGH9gktb.js";import"./chunk.translations-de.S4PF1KYg.js";import"./chunk.translations-en.Ck05aPwN.js";import"./chunk.translations-es.CN4IYWAw.js";import"./chunk.translations-fr.CCwWtZH3.js";import"./chunk.translations-hr.C7fo1LlO.js";import"./chunk.translations-it.BFH_rAJL.js";import"./chunk.translations-ru.C3zXigta.js";function O(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function v(){return{codeJs:`import {
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
};`}}const f={name:"PageTablePreviewRight",components:{AlohaExample:b,ATable:T},setup(){const{codeHtml:e}=O(),{codeJs:t}=v(),i=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=E([]),c=()=>{const a=[];h(20,l=>{a.push({id:l,aloha:`aloha ${l}`})}),o.value=a},_=({row:a})=>a.id===2||a.id===4;return c(),{codeHtml:e,codeJs:t,columns:i,data:o,disableRowPreview:_}}};function N(e,t,i,o,c,_){const a=n("a-table"),l=n("aloha-example");return p(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_RIGHT_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_RIGHT_DESCRIPTION_"},{default:r(()=>[d("div",null,[m(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"right","disabled-preview-row-callback":e.disableRowPreview},{preview:r(s=>[d("pre",null,P(s),1)]),_:1},8,["columns","data","disabled-preview-row-callback"])])]),_:1},8,["code-html","code-js"])}const k=u(f,[["render",N]]);function U(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function R(){return{codeJs:`import {
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
};`}}const y={name:"PageTablePreviewRight",components:{AlohaExample:b,ATable:T},setup(){const{codeHtml:e}=U(),{codeJs:t}=R(),i=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=E([]);return(()=>{const _=[];h(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:t,columns:i,data:o}}};function I(e,t,i,o,c,_){const a=n("a-table"),l=n("aloha-example");return p(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_DESCRIPTION_",props:["preview","pagination.use"]},{default:r(()=>[d("div",null,[m(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"right",pagination:{use:!0}},{preview:r(s=>[d("pre",null,P(s),1)]),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const w=u(y,[["render",I]]);function M(){const e=L(()=>B({placeholder:"_A_TABLE_SIMPLE_"}));return{pageTitle:L(()=>`ATable ${e.value}`)}}const C={name:"PageTablePreview",components:{AlohaPage:g,PageTablePreviewRight:k,PageTablePreviewRightPagination:w},setup(){const{pageTitle:e}=M();return{pageTitle:e}}};function $(e,t,i,o,c,_){const a=n("page-table-preview-right"),l=n("page-table-preview-right-pagination"),s=n("aloha-page");return p(),A(s,{"page-title":e.pageTitle},{body:r(()=>[m(a),m(l)]),_:1},8,["page-title"])}const Q=u(C,[["render",$]]);export{Q as default};
