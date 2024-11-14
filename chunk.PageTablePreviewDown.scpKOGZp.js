import{A as T,a as b}from"./chunk.AlohaExample.ChWGlwlc.js";import{A as E}from"./chunk.ATable.-yuPlbk5.js";import{T as h}from"./chunk.vendor-lodash.ClBXVCWL.js";import{r as P,m as _,C as p,L as c,B as d,F as m,G as A,M as f,a as i}from"./chunk.vendor.D-Y3mz6a.js";import{_ as u,g}from"./bundle.index.DLk96wXl.js";import"./chunk.utilsMath.7PmiGUbm.js";import"./chunk.AForm.DiGgmeLx.js";import"./chunk.ADatepicker.BHpNRbmQ.js";import"./chunk.UiMixinProps.BVfs3aDc.js";import"./chunk.AInputNumber.GL8EDEzr.js";import"./chunk.ATinymce.D24m15ax.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";function B(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function D(){return{codeJs:`import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
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
};`}}const w={name:"PageTablePreviewDownRight",components:{AlohaExample:T,ATable:E},setup(){const{codeHtml:e}=B(),{codeJs:o}=D(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],t=P([]);return(()=>{const l=[];h(20,a=>{l.push({id:a,aloha:`aloha ${a}`})}),t.value=l})(),{codeHtml:e,codeJs:o,columns:n,data:t}}};function O(e,o,n,t,r,l){const a=_("a-table"),s=_("aloha-example");return d(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_DESCRIPTION_"},{default:c(()=>[m("div",null,[A(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"down"},{preview:c(L=>[m("pre",null,f(L),1)]),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const N=u(w,[["render",O]]);function v(){const e=i(()=>g({placeholder:"_A_TABLE_PREVIEW_DOWN_PAGE_TITLE_"}));return{pageTitle:i(()=>`ATable ${e.value}`)}}const M={name:"PageTablePreviewDown",components:{AlohaPage:b,PageTablePreviewDownExample:N},setup(){const{pageTitle:e}=v();return{pageTitle:e}}};function k(e,o,n,t,r,l){const a=_("page-table-preview-down-example"),s=_("aloha-page");return d(),p(s,{"page-title":e.pageTitle},{body:c(()=>[A(a)]),_:1},8,["page-title"])}const S=u(M,[["render",k]]);export{S as default};
