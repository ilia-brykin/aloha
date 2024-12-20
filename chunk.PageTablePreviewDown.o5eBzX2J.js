import{A as T,a as b}from"./chunk.AlohaExample.bHGij63B.js";import{A as E}from"./chunk.ATable.DruEzHhF.js";import{T as h}from"./chunk.vendor-lodash.4mRNCQpN.js";import{r as P,m as _,K as p,aK as c,J as d,O as m,P as A,aL as f,a as i}from"./chunk.vendor.D6eG-XyB.js";import{_ as u,g}from"./bundle.index.C_5YVLtW.js";import"./chunk.utilsMath.Dv1kx9ss.js";import"./chunk.AForm.CSasGaDW.js";import"./chunk.ADatepicker.DsVaojwL.js";import"./chunk.UiMixinProps.BanNRFZI.js";import"./chunk.AInputNumber.Dd9Cig3P.js";import"./chunk.ATinymce.CNhjlfBT.js";import"./chunk.vendor-tinymce.Dn8nHerG.js";function B(){return{codeHtml:`<a-table
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
};`}}const O={name:"PageTablePreviewDownRight",components:{AlohaExample:T,ATable:E},setup(){const{codeHtml:e}=B(),{codeJs:o}=D(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],t=P([]);return(()=>{const l=[];h(20,a=>{l.push({id:a,aloha:`aloha ${a}`})}),t.value=l})(),{codeHtml:e,codeJs:o,columns:n,data:t}}};function w(e,o,n,t,r,l){const a=_("a-table"),s=_("aloha-example");return d(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_DESCRIPTION_"},{default:c(()=>[m("div",null,[A(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"down"},{preview:c(L=>[m("pre",null,f(L),1)]),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const N=u(O,[["render",w]]);function v(){const e=i(()=>g({placeholder:"_A_TABLE_PREVIEW_DOWN_PAGE_TITLE_"}));return{pageTitle:i(()=>`ATable ${e.value}`)}}const k={name:"PageTablePreviewDown",components:{AlohaPage:b,PageTablePreviewDownExample:N},setup(){const{pageTitle:e}=v();return{pageTitle:e}}};function y(e,o,n,t,r,l){const a=_("page-table-preview-down-example"),s=_("aloha-page");return d(),p(s,{"page-title":e.pageTitle},{body:c(()=>[A(a)]),_:1},8,["page-title"])}const S=u(k,[["render",y]]);export{S as default};
