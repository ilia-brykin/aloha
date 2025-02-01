import{A as b,a as g}from"./chunk.AlohaExample.pz_QK9vq.js";import{_ as p,g as B}from"./bundle.index.VWeDPPTP.js";import{R as T}from"./chunk.vendor-lodash.DUClg1O3.js";import{r as h,O as A,aR as r,b as n,Q as u,U as m,V as d,aS as E,a as L}from"./chunk.vendor.G4HJ_FUy.js";import{A as P}from"./chunk.ATable.DC2Wf9Tn.js";import"./chunk.APageTabTitle.DvqMiiyW.js";import"./chunk.AlohaHighlightjs.Bnb6Sejr.js";import"./chunk.translations-ar.C-NNZ74u.js";import"./chunk.translations-de.DwcQ1j-I.js";import"./chunk.translations-en.CpaURLZT.js";import"./chunk.translations-es.BlLUKL-T.js";import"./chunk.translations-fr.CBV_DS4p.js";import"./chunk.translations-hr.CNqGGqH_.js";import"./chunk.translations-it.Csqv_psg.js";import"./chunk.translations-ru.D8ZNuRSu.js";function v(){return{codeHtml:`<a-table
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
};`}}const f={name:"PageTablePreviewRight",components:{AlohaExample:b,ATable:P},setup(){const{codeHtml:e}=v(),{codeJs:t}=O(),i=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=h([]),c=()=>{const a=[];T(20,l=>{a.push({id:l,aloha:`aloha ${l}`})}),o.value=a},_=({row:a})=>a.id===2||a.id===4;return c(),{codeHtml:e,codeJs:t,columns:i,data:o,disableRowPreview:_}}};function R(e,t,i,o,c,_){const a=n("a-table"),l=n("aloha-example");return u(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_RIGHT_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_RIGHT_DESCRIPTION_"},{default:r(()=>[m("div",null,[d(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"right","disabled-preview-row-callback":e.disableRowPreview},{preview:r(s=>[m("pre",null,E(s),1)]),_:1},8,["columns","data","disabled-preview-row-callback"])])]),_:1},8,["code-html","code-js"])}const N=p(f,[["render",R]]);function U(){return{codeHtml:`<a-table
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
};`}}const y={name:"PageTablePreviewRight",components:{AlohaExample:b,ATable:P},setup(){const{codeHtml:e}=U(),{codeJs:t}=k(),i=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=h([]);return(()=>{const _=[];T(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:t,columns:i,data:o}}};function I(e,t,i,o,c,_){const a=n("a-table"),l=n("aloha-example");return u(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_DESCRIPTION_",props:["preview","pagination.use"]},{default:r(()=>[m("div",null,[d(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"right",pagination:{use:!0}},{preview:r(s=>[m("pre",null,E(s),1)]),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const w=p(y,[["render",I]]);function M(){const e=L(()=>B({placeholder:"_A_TABLE_SIMPLE_"}));return{pageTitle:L(()=>`ATable ${e.value}`)}}const C={name:"PageTablePreview",components:{AlohaPage:g,PageTablePreviewRight:N,PageTablePreviewRightPagination:w},setup(){const{pageTitle:e}=M();return{pageTitle:e}}};function $(e,t,i,o,c,_){const a=n("page-table-preview-right"),l=n("page-table-preview-right-pagination"),s=n("aloha-page");return u(),A(s,{"page-title":e.pageTitle},{body:r(()=>[d(a),d(l)]),_:1},8,["page-title"])}const Y=p(C,[["render",$]]);export{Y as default};
