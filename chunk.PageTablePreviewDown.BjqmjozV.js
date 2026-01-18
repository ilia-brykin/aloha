import{A as T,a as b}from"./chunk.AlohaExample.YBEkNJHM.js";import{_ as p,g as E}from"./bundle.index.Bn4EAoUB.js";import{O as h}from"./chunk.vendor-lodash.rFt76tyK.js";import{r as P,V as d,aT as r,e as _,W as A,Z as m,_ as u,aU as f,d as i}from"./chunk.vendor.tcMGz7j_.js";import{A as g}from"./chunk.ATable.BW5NWBn-.js";import"./chunk.APageTabTitle.Cvp9tCUS.js";import"./chunk.AlohaHighlightjs.BwPt1uu6.js";import"./chunk.translations-ar.gQA2bIDx.js";import"./chunk.translations-de.Cs1lbELY.js";import"./chunk.translations-en.Dggm7bm6.js";import"./chunk.translations-es.B0VpZMt0.js";import"./chunk.translations-fr.zQdXa2f4.js";import"./chunk.translations-hr.BVkkSNp1.js";import"./chunk.translations-it.BH0mwprS.js";import"./chunk.translations-ru.CM_kaKL2.js";function B(){return{codeHtml:`<a-table
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
};`}}const O={name:"PageTablePreviewDownRight",components:{AlohaExample:T,ATable:g},setup(){const{codeHtml:e}=B(),{codeJs:o}=D(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],t=P([]);return(()=>{const l=[];h(20,a=>{l.push({id:a,aloha:`aloha ${a}`})}),t.value=l})(),{codeHtml:e,codeJs:o,columns:n,data:t}}};function w(e,o,n,t,c,l){const a=_("a-table"),s=_("aloha-example");return A(),d(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_HEADER_",description:"_A_TABLE_GROUP_PREVIEW_DOWN_EXAMPLE_DESCRIPTION_"},{default:r(()=>[m("div",null,[u(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id",preview:"down"},{preview:r(L=>[m("pre",null,f(L),1)]),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const N=p(O,[["render",w]]);function v(){const e=i(()=>E({placeholder:"_A_TABLE_PREVIEW_DOWN_PAGE_TITLE_"}));return{pageTitle:i(()=>`ATable ${e.value}`)}}const U={name:"PageTablePreviewDown",components:{AlohaPage:b,PageTablePreviewDownExample:N},setup(){const{pageTitle:e}=v();return{pageTitle:e}}};function k(e,o,n,t,c,l){const a=_("page-table-preview-down-example"),s=_("aloha-page");return A(),d(s,{"page-title":e.pageTitle},{body:r(()=>[u(a)]),_:1},8,["page-title"])}const Z=p(U,[["render",k]]);export{Z as default};
