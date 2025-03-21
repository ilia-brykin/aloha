import{A as b,a as g}from"./chunk.AlohaExample.D4SaE4p9.js";import{_ as p,g as B}from"./bundle.index.BIdvGbaF.js";import{Q as T}from"./chunk.vendor-lodash.DcJeCbOg.js";import{r as h,R as A,aR as r,e as n,U as u,W as d,Y as m,aS as E,d as L}from"./chunk.vendor.BBAqWnj3.js";import{A as P}from"./chunk.ATable.Ccz-NYvK.js";import"./chunk.APageTabTitle.D2d__OPV.js";import"./chunk.AlohaHighlightjs.CLW-CbN5.js";import"./chunk.translations-ar.DEUMydUO.js";import"./chunk.translations-de.Cu1ohgZi.js";import"./chunk.translations-en.C0yymw0D.js";import"./chunk.translations-es.BOdupE53.js";import"./chunk.translations-fr.DA6ZjNfb.js";import"./chunk.translations-hr.9tXo0j2W.js";import"./chunk.translations-it.ChqBTVFj.js";import"./chunk.translations-ru.9b8s4Lgz.js";function v(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function O(){return{codeJs:`import {
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
};`}}const f={name:"PageTablePreviewRight",components:{AlohaExample:b,ATable:P},setup(){const{codeHtml:e}=v(),{codeJs:t}=O(),i=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=h([]),c=()=>{const a=[];T(20,l=>{a.push({id:l,aloha:`aloha ${l}`})}),o.value=a},_=({row:a})=>a.id===2||a.id===4;return c(),{codeHtml:e,codeJs:t,columns:i,data:o,disableRowPreview:_}}};function R(e,t,i,o,c,_){const a=n("a-table"),l=n("aloha-example");return u(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_RIGHT_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_RIGHT_DESCRIPTION_"},{default:r(()=>[d("div",null,[m(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"right","disabled-preview-row-callback":e.disableRowPreview},{preview:r(s=>[d("pre",null,E(s),1)]),_:1},8,["columns","data","disabled-preview-row-callback"])])]),_:1},8,["code-html","code-js"])}const N=p(f,[["render",R]]);function U(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function k(){return{codeJs:`import {
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
};`}}const y={name:"PageTablePreviewRight",components:{AlohaExample:b,ATable:P},setup(){const{codeHtml:e}=U(),{codeJs:t}=k(),i=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=h([]);return(()=>{const _=[];T(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:t,columns:i,data:o}}};function I(e,t,i,o,c,_){const a=n("a-table"),l=n("aloha-example");return u(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_DESCRIPTION_",props:["preview","pagination.use"]},{default:r(()=>[d("div",null,[m(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"right",pagination:{use:!0}},{preview:r(s=>[d("pre",null,E(s),1)]),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const w=p(y,[["render",I]]);function M(){const e=L(()=>B({placeholder:"_A_TABLE_SIMPLE_"}));return{pageTitle:L(()=>`ATable ${e.value}`)}}const C={name:"PageTablePreview",components:{AlohaPage:g,PageTablePreviewRight:N,PageTablePreviewRightPagination:w},setup(){const{pageTitle:e}=M();return{pageTitle:e}}};function $(e,t,i,o,c,_){const a=n("page-table-preview-right"),l=n("page-table-preview-right-pagination"),s=n("aloha-page");return u(),A(s,{"page-title":e.pageTitle},{body:r(()=>[m(a),m(l)]),_:1},8,["page-title"])}const X=p(C,[["render",$]]);export{X as default};
