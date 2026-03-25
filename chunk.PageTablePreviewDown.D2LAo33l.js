import{A as T,a as b}from"./chunk.AlohaExample.CsNNlvwW.js";import{_ as p,g as E}from"./bundle.index.Bbu19EpF.js";import{N as h}from"./chunk.vendor-lodash.RX8TnlR_.js";import{r as P,W as d,V as A,aT as r,e as _,Z as m,_ as u,aU as f,d as i}from"./chunk.vendor.7qYoMuVo.js";import{A as g}from"./chunk.ATable.CYb27K9K.js";import"./chunk.APageTabTitle.GJR7izDd.js";import"./chunk.AlohaHighlightjs.CqftpDCI.js";import"./chunk.translations-ar.CY7HI9me.js";import"./chunk.translations-de.C8-mViTt.js";import"./chunk.translations-en.Biv6OsUn.js";import"./chunk.translations-es.DJOC65Nl.js";import"./chunk.translations-fr.DbQjo2b0.js";import"./chunk.translations-hr.BcLs9lS1.js";import"./chunk.translations-it.ejoXsLio.js";import"./chunk.translations-ru.5jlOOxzJ.js";function B(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function D(){return{codeJs:`import {
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
};`}}const w={name:"PageTablePreviewDownRight",components:{AlohaExample:T,ATable:g},setup(){const{codeHtml:e}=B(),{codeJs:o}=D(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],t=P([]);return(()=>{const l=[];h(20,a=>{l.push({id:a,aloha:`aloha ${a}`})}),t.value=l})(),{codeHtml:e,codeJs:o,columns:n,data:t}}};function N(e,o,n,t,c,l){const a=_("a-table"),s=_("aloha-example");return d(),A(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_DESCRIPTION_"},{default:r(()=>[m("div",null,[u(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"down"},{preview:r(L=>[m("pre",null,f(L),1)]),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const O=p(w,[["render",N]]);function v(){const e=i(()=>E({placeholder:"_A_TABLE_PREVIEW_DOWN_PAGE_TITLE_"}));return{pageTitle:i(()=>`ATable ${e.value}`)}}const U={name:"PageTablePreviewDown",components:{AlohaPage:b,PageTablePreviewDownExample:O},setup(){const{pageTitle:e}=v();return{pageTitle:e}}};function k(e,o,n,t,c,l){const a=_("page-table-preview-down-example"),s=_("aloha-page");return d(),A(s,{"page-title":e.pageTitle},{body:r(()=>[u(a)]),_:1},8,["page-title"])}const Z=p(U,[["render",k]]);export{Z as default};
