import{A as u,a as T}from"./chunk.AlohaExample.cx08GSwV.js";import{_ as r,g as A}from"./bundle.index.1IWyi0gn.js";import{r as E,V as d,aT as i,e as l,W as c,Z as L,_ as b,d as n}from"./chunk.vendor.D7UxhUfn.js";import"./chunk.vendor-lodash.BbaK34MN.js";import{A as f}from"./chunk.ATable.DK3GkIoK.js";import"./chunk.APageTabTitle.uc4lhmn-.js";import"./chunk.AlohaHighlightjs.dFk8X2lo.js";import"./chunk.translations-ar.BXWv90e-.js";import"./chunk.translations-de.JSU2GZ-A.js";import"./chunk.translations-en.CviwQZZj.js";import"./chunk.translations-es.D2AGpadl.js";import"./chunk.translations-fr.DQLlT60U.js";import"./chunk.translations-hr.EjwgafbT.js";import"./chunk.translations-it.fnRPaBQW.js";import"./chunk.translations-ru.DfHWC88K.js";function h(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  :is-tree="true"
  key-id="id"
  label="_A_TABLE_GROUP_TREE_LABEL_"
></a-table>`}}function g(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableTreeExample",
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
        keyLabel: "label",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "test",
        label: "_A_TABLE_COLUMN_3_",
      },
    ];

    const data = ref([
      {
        id: "1",
        label: "label 1",
        test: "test 1",
      },
      {
        id: "2",
        label: "label 2",
        test: "test 2",
        children: [
          {
            id: "2_1",
            label: "label 2.1",
            test: "test 2.1",
          },
          {
            id: "2_2",
            label: "label 2.2",
            test: "test 2.2",
            children: [
              {
                id: "2_2_1",
                label: "label 2.2.1",
                test: "test 2.2.1",
              },
            ],
          },
          {
            id: "2_3",
            label: "label 2.3",
            test: "test 2.3",
          },
        ],
      },
      {
        id: "3",
        label: "label 3",
        test: "test 3",
        children: [
          {
            id: "3_1",
            label: "label 3.1",
            test: "test 3.1",
          },
          {
            id: "3_2",
            label: "label 3.2",
            test: "test 3.2",
          },
          {
            id: "3_3",
            label: "label 3.3",
            test: "test 3.3",
          },
        ],
      },
    ]);
    
    return {
      columns,
      data,
    };
  },
};`}}const B={name:"PageTableTreeExample",components:{AlohaExample:u,ATable:f},setup(){const{codeHtml:e}=h(),{codeJs:t}=g(),a=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"label",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"test",label:"_A_TABLE_COLUMN_3_"}],o=E([{id:"1",label:"label 1",test:"test 1"},{id:"2",label:"label 2",test:"test 2",children:[{id:"2_1",label:"label 2.1",test:"test 2.1"},{id:"2_2",label:"label 2.2",test:"test 2.2",children:[{id:"2_2_1",label:"label 2.2.1",test:"test 2.2.1"}]},{id:"2_3",label:"label 2.3",test:"test 2.3"}]},{id:"3",label:"label 3",test:"test 3",children:[{id:"3_1",label:"label 3.1",test:"test 3.1"},{id:"3_2",label:"label 3.2",test:"test 3.2"},{id:"3_3",label:"label 3.3",test:"test 3.3"}]}]);return{codeHtml:e,codeJs:t,columns:a,data:o}}};function P(e,t,a,o,m,p){const s=l("a-table"),_=l("aloha-example");return c(),d(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_TREE_HEADER_",description:"_A_TABLE_GROUP_TREE_DESCRIPTION_",props:"is-tree"},{default:i(()=>[L("div",null,[b(s,{columns:e.columns,data:e.data,"is-tree":!0,"key-id":"id",label:"_A_TABLE_GROUP_TREE_LABEL_"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const N=r(B,[["render",P]]);function O(){const e=n(()=>A({placeholder:"_A_TABLE_TREE_COMPONENT_NAME_"}));return{pageTitle:n(()=>`ATable ${e.value}`)}}const R={name:"PageTableTree",components:{AlohaPage:T,PageTableTreeExample:N},setup(){const{pageTitle:e}=O();return{pageTitle:e}}};function $(e,t,a,o,m,p){const s=l("page-table-tree-example"),_=l("aloha-page");return c(),d(_,{"page-title":e.pageTitle},{body:i(()=>[b(s)]),_:1},8,["page-title"])}const S=r(R,[["render",$]]);export{S as default};
