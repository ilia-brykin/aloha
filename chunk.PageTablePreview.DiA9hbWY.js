import{A as b,a as g}from"./chunk.AlohaExample.bHGij63B.js";import{A as T}from"./chunk.ATable.DruEzHhF.js";import{T as h}from"./chunk.vendor-lodash.4mRNCQpN.js";import{r as E,m as n,K as A,aK as r,J as p,O as d,P as m,aL as P,a as L}from"./chunk.vendor.D6eG-XyB.js";import{_ as u,g as B}from"./bundle.index.C_5YVLtW.js";import"./chunk.utilsMath.Dv1kx9ss.js";import"./chunk.AForm.CSasGaDW.js";import"./chunk.ADatepicker.DsVaojwL.js";import"./chunk.UiMixinProps.BanNRFZI.js";import"./chunk.AInputNumber.Dd9Cig3P.js";import"./chunk.ATinymce.CNhjlfBT.js";import"./chunk.vendor-tinymce.Dn8nHerG.js";function v(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function O(){return{codeJs:`import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
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
};`}}const f={name:"PageTablePreviewRight",components:{AlohaExample:b,ATable:T},setup(){const{codeHtml:e}=v(),{codeJs:t}=O(),c=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=E([]),i=()=>{const a=[];h(20,l=>{a.push({id:l,aloha:`aloha ${l}`})}),o.value=a},_=({row:a})=>a.id===2||a.id===4;return i(),{codeHtml:e,codeJs:t,columns:c,data:o,disableRowPreview:_}}};function N(e,t,c,o,i,_){const a=n("a-table"),l=n("aloha-example");return p(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_RIGHT_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_RIGHT_DESCRIPTION_"},{default:r(()=>[d("div",null,[m(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"right","disabled-preview-row-callback":e.disableRowPreview},{preview:r(s=>[d("pre",null,P(s),1)]),_:1},8,["columns","data","disabled-preview-row-callback"])])]),_:1},8,["code-html","code-js"])}const k=u(f,[["render",N]]);function R(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function U(){return{codeJs:`import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
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
};`}}const y={name:"PageTablePreviewRight",components:{AlohaExample:b,ATable:T},setup(){const{codeHtml:e}=R(),{codeJs:t}=U(),c=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=E([]);return(()=>{const _=[];h(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:t,columns:c,data:o}}};function I(e,t,c,o,i,_){const a=n("a-table"),l=n("aloha-example");return p(),A(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_RIGHT_PAGINATION_DESCRIPTION_",props:["preview","pagination.use"]},{default:r(()=>[d("div",null,[m(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"right",pagination:{use:!0}},{preview:r(s=>[d("pre",null,P(s),1)]),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const w=u(y,[["render",I]]);function M(){const e=L(()=>B({placeholder:"_A_TABLE_SIMPLE_"}));return{pageTitle:L(()=>`ATable ${e.value}`)}}const C={name:"PageTablePreview",components:{AlohaPage:g,PageTablePreviewRight:k,PageTablePreviewRightPagination:w},setup(){const{pageTitle:e}=M();return{pageTitle:e}}};function $(e,t,c,o,i,_){const a=n("page-table-preview-right"),l=n("page-table-preview-right-pagination"),s=n("aloha-page");return p(),A(s,{"page-title":e.pageTitle},{body:r(()=>[m(a),m(l)]),_:1},8,["page-title"])}const F=u(C,[["render",$]]);export{F as default};
