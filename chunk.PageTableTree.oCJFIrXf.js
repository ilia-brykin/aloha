import{A as u,a as T}from"./chunk.AlohaExample.yE023I1X.js";import{A}from"./chunk.ATable.D1MQeD59.js";import{r as E,k as l,J as r,aO as d,H as i,N as L,O as c,a as n}from"./chunk.vendor.QyCKSPD8.js";import{_ as b,g as f}from"./bundle.index.C9lpaoUP.js";import"./chunk.APageTabTitle.BP4gNxYd.js";import"./chunk.vendor-lodash.GuFqEw-8.js";import"./chunk.translations-ar.D84EYJUC.js";import"./chunk.translations-de.B3_DNkZv.js";import"./chunk.translations-en.DZoFKckB.js";import"./chunk.translations-es.92fkcSMr.js";import"./chunk.translations-fr.DBliKyyP.js";import"./chunk.translations-hr.KiqIBbb_.js";import"./chunk.translations-it.BBYgaTTr.js";import"./chunk.translations-ru.CgZqQiYL.js";function h(){return{codeHtml:`<a-table
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
};`}}const B={name:"PageTableTreeExample",components:{AlohaExample:u,ATable:A},setup(){const{codeHtml:e}=h(),{codeJs:t}=g(),a=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"label",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"test",label:"_A_TABLE_COLUMN_3_"}],o=E([{id:"1",label:"label 1",test:"test 1"},{id:"2",label:"label 2",test:"test 2",children:[{id:"2_1",label:"label 2.1",test:"test 2.1"},{id:"2_2",label:"label 2.2",test:"test 2.2",children:[{id:"2_2_1",label:"label 2.2.1",test:"test 2.2.1"}]},{id:"2_3",label:"label 2.3",test:"test 2.3"}]},{id:"3",label:"label 3",test:"test 3",children:[{id:"3_1",label:"label 3.1",test:"test 3.1"},{id:"3_2",label:"label 3.2",test:"test 3.2"},{id:"3_3",label:"label 3.3",test:"test 3.3"}]}]);return{codeHtml:e,codeJs:t,columns:a,data:o}}};function P(e,t,a,o,m,p){const s=l("a-table"),_=l("aloha-example");return i(),r(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_TREE_HEADER_",description:"_A_TABLE_GROUP_TREE_DESCRIPTION_",props:"is-tree"},{default:d(()=>[L("div",null,[c(s,{columns:e.columns,data:e.data,"is-tree":!0,"key-id":"id",label:"_A_TABLE_GROUP_TREE_LABEL_"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const O=b(B,[["render",P]]);function N(){const e=n(()=>f({placeholder:"_A_TABLE_TREE_COMPONENT_NAME_"}));return{pageTitle:n(()=>`ATable ${e.value}`)}}const k={name:"PageTableTree",components:{AlohaPage:T,PageTableTreeExample:O},setup(){const{pageTitle:e}=N();return{pageTitle:e}}};function R(e,t,a,o,m,p){const s=l("page-table-tree-example"),_=l("aloha-page");return i(),r(_,{"page-title":e.pageTitle},{body:d(()=>[c(s)]),_:1},8,["page-title"])}const w=b(k,[["render",R]]);export{w as default};
