import{A as u,a as T}from"./chunk.AlohaExample.BT0L4sPf.js";import{A}from"./chunk.ATable.DALhqzqJ.js";import{r as E,m as l,C as r,L as c,B as d,F as L,G as i,a as n}from"./chunk.vendor.D-Y3mz6a.js";import{_ as b,g as f}from"./bundle.index.CgpAdSdY.js";import"./chunk.vendor-lodash.ClBXVCWL.js";import"./chunk.utilsMath.7PmiGUbm.js";import"./chunk.AForm.CpIOokJc.js";import"./chunk.ADatepicker.BS_Ghotq.js";import"./chunk.UiMixinProps.BVfs3aDc.js";import"./chunk.AInputNumber.C93fy0SX.js";import"./chunk.ATinymce.1a39zYU1.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";function h(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  :is-tree="true"
  key-id="id"
  label="_A_TABLE_GROUP_TREE_LABEL_"
></a-table>`}}function g(){return{codeJs:`import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
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
};`}}const B={name:"PageTableTreeExample",components:{AlohaExample:u,ATable:A},setup(){const{codeHtml:e}=h(),{codeJs:t}=g(),a=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"label",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"test",label:"_A_TABLE_COLUMN_3_"}],o=E([{id:"1",label:"label 1",test:"test 1"},{id:"2",label:"label 2",test:"test 2",children:[{id:"2_1",label:"label 2.1",test:"test 2.1"},{id:"2_2",label:"label 2.2",test:"test 2.2",children:[{id:"2_2_1",label:"label 2.2.1",test:"test 2.2.1"}]},{id:"2_3",label:"label 2.3",test:"test 2.3"}]},{id:"3",label:"label 3",test:"test 3",children:[{id:"3_1",label:"label 3.1",test:"test 3.1"},{id:"3_2",label:"label 3.2",test:"test 3.2"},{id:"3_3",label:"label 3.3",test:"test 3.3"}]}]);return{codeHtml:e,codeJs:t,columns:a,data:o}}};function P(e,t,a,o,m,p){const s=l("a-table"),_=l("aloha-example");return d(),r(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_TREE_HEADER_",description:"_A_TABLE_GROUP_TREE_DESCRIPTION_",props:"is-tree"},{default:c(()=>[L("div",null,[i(s,{columns:e.columns,data:e.data,"is-tree":!0,"key-id":"id",label:"_A_TABLE_GROUP_TREE_LABEL_"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const N=b(B,[["render",P]]);function O(){const e=n(()=>f({placeholder:"_A_TABLE_TREE_COMPONENT_NAME_"}));return{pageTitle:n(()=>`ATable ${e.value}`)}}const C={name:"PageTableTree",components:{AlohaPage:T,PageTableTreeExample:N},setup(){const{pageTitle:e}=O();return{pageTitle:e}}};function R(e,t,a,o,m,p){const s=l("page-table-tree-example"),_=l("aloha-page");return d(),r(_,{"page-title":e.pageTitle},{body:c(()=>[i(s)]),_:1},8,["page-title"])}const D=b(C,[["render",R]]);export{D as default};
