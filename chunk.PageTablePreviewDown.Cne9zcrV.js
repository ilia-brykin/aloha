import{A as b,a as T}from"./chunk.AlohaExample.B8t5sXI5.js";import{_ as p,g as E}from"./bundle.index.B2aaR4xj.js";import{R as h}from"./chunk.vendor-lodash.DUClg1O3.js";import{r as P,O as d,aR as r,b as _,Q as A,U as m,V as u,aS as f,a as i}from"./chunk.vendor.G4HJ_FUy.js";import{A as g}from"./chunk.ATable.DhxfPDli.js";import"./chunk.APageTabTitle.6ZuxfiZq.js";import"./chunk.AlohaHighlightjs.Bnb6Sejr.js";import"./chunk.translations-ar.Bm_TIgmU.js";import"./chunk.translations-de.hQOurFbu.js";import"./chunk.translations-en.C27usO-8.js";import"./chunk.translations-es.CWd7slww.js";import"./chunk.translations-fr.DDfPHPkk.js";import"./chunk.translations-hr.CtnKD3az.js";import"./chunk.translations-it.Cf9ZYxei.js";import"./chunk.translations-ru.CZ8Ez0gt.js";function B(){return{codeHtml:`<a-table
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
};`}}const O={name:"PageTablePreviewDownRight",components:{AlohaExample:b,ATable:g},setup(){const{codeHtml:e}=B(),{codeJs:o}=D(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],t=P([]);return(()=>{const l=[];h(20,a=>{l.push({id:a,aloha:`aloha ${a}`})}),t.value=l})(),{codeHtml:e,codeJs:o,columns:n,data:t}}};function w(e,o,n,t,c,l){const a=_("a-table"),s=_("aloha-example");return A(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_DESCRIPTION_"},{default:r(()=>[m("div",null,[u(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"down"},{preview:r(L=>[m("pre",null,f(L),1)]),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const N=p(O,[["render",w]]);function v(){const e=i(()=>E({placeholder:"_A_TABLE_PREVIEW_DOWN_PAGE_TITLE_"}));return{pageTitle:i(()=>`ATable ${e.value}`)}}const U={name:"PageTablePreviewDown",components:{AlohaPage:T,PageTablePreviewDownExample:N},setup(){const{pageTitle:e}=v();return{pageTitle:e}}};function k(e,o,n,t,c,l){const a=_("page-table-preview-down-example"),s=_("aloha-page");return A(),d(s,{"page-title":e.pageTitle},{body:r(()=>[u(a)]),_:1},8,["page-title"])}const Q=p(U,[["render",k]]);export{Q as default};
