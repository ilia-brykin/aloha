import{A as T,a as b}from"./chunk.AlohaExample.BT-KrQlS.js";import{A as E}from"./chunk.ATable.DQuNhFUj.js";import{U as h}from"./chunk.vendor-lodash.B7GPwhj2.js";import{r as P,k as _,J as p,aP as r,H as d,N as m,O as A,aQ as f,a as i}from"./chunk.vendor.CqcqUME4.js";import{_ as u,g}from"./bundle.index.ZegC3ppv.js";import"./chunk.APageTabTitle.BE9UOLLp.js";import"./chunk.AlohaHighlightjs.BKSDp9gq.js";import"./chunk.translations-ar.D11AFw12.js";import"./chunk.translations-de.pyWcnzxU.js";import"./chunk.translations-en.BA0L_EKE.js";import"./chunk.translations-es.C8Ue-qtF.js";import"./chunk.translations-fr.B97VMxCC.js";import"./chunk.translations-hr.DPNXGA_z.js";import"./chunk.translations-it.DrIj1yZQ.js";import"./chunk.translations-ru.B1FeJYZT.js";function B(){return{codeHtml:`<a-table
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
};`}}const O={name:"PageTablePreviewDownRight",components:{AlohaExample:T,ATable:E},setup(){const{codeHtml:e}=B(),{codeJs:o}=D(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],t=P([]);return(()=>{const l=[];h(20,a=>{l.push({id:a,aloha:`aloha ${a}`})}),t.value=l})(),{codeHtml:e,codeJs:o,columns:n,data:t}}};function w(e,o,n,t,c,l){const a=_("a-table"),s=_("aloha-example");return d(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_DESCRIPTION_"},{default:r(()=>[m("div",null,[A(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"down"},{preview:r(L=>[m("pre",null,f(L),1)]),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const N=u(O,[["render",w]]);function v(){const e=i(()=>g({placeholder:"_A_TABLE_PREVIEW_DOWN_PAGE_TITLE_"}));return{pageTitle:i(()=>`ATable ${e.value}`)}}const k={name:"PageTablePreviewDown",components:{AlohaPage:b,PageTablePreviewDownExample:N},setup(){const{pageTitle:e}=v();return{pageTitle:e}}};function U(e,o,n,t,c,l){const a=_("page-table-preview-down-example"),s=_("aloha-page");return d(),p(s,{"page-title":e.pageTitle},{body:r(()=>[A(a)]),_:1},8,["page-title"])}const Q=u(k,[["render",U]]);export{Q as default};
