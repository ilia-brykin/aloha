import{A as u,a as T}from"./chunk.AlohaExample.CjncY9yb.js";import{A}from"./chunk.ATable.BbEiHoGB.js";import{r as E,k as l,J as r,aJ as c,H as d,N as L,O as b,a as n}from"./chunk.vendor.Ca3-nzbX.js";import{_ as i,g as f}from"./bundle.index.D9gcatRx.js";import"./chunk.vendor-lodash.-viuv_rg.js";import"./chunk.utilsMath.DoITS5e9.js";import"./chunk.AForm.D7gs2-jc.js";import"./chunk.ADatepicker.xMcjIPGU.js";import"./chunk.UiMixinProps.SXpQQH-L.js";import"./chunk.AInputNumber.BVsa2dH8.js";function h(){return{codeHtml:`<a-table
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
};`}}const B={name:"PageTableTreeExample",components:{AlohaExample:u,ATable:A},setup(){const{codeHtml:e}=h(),{codeJs:t}=g(),a=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"label",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"test",label:"_A_TABLE_COLUMN_3_"}],s=E([{id:"1",label:"label 1",test:"test 1"},{id:"2",label:"label 2",test:"test 2",children:[{id:"2_1",label:"label 2.1",test:"test 2.1"},{id:"2_2",label:"label 2.2",test:"test 2.2",children:[{id:"2_2_1",label:"label 2.2.1",test:"test 2.2.1"}]},{id:"2_3",label:"label 2.3",test:"test 2.3"}]},{id:"3",label:"label 3",test:"test 3",children:[{id:"3_1",label:"label 3.1",test:"test 3.1"},{id:"3_2",label:"label 3.2",test:"test 3.2"},{id:"3_3",label:"label 3.3",test:"test 3.3"}]}]);return{codeHtml:e,codeJs:t,columns:a,data:s}}};function P(e,t,a,s,m,p){const o=l("a-table"),_=l("aloha-example");return d(),r(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_TREE_HEADER_",description:"_A_TABLE_GROUP_TREE_DESCRIPTION_",props:"is-tree"},{default:c(()=>[L("div",null,[b(o,{columns:e.columns,data:e.data,"is-tree":!0,"key-id":"id",label:"_A_TABLE_GROUP_TREE_LABEL_"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const N=i(B,[["render",P]]);function O(){const e=n(()=>f({placeholder:"_A_TABLE_TREE_COMPONENT_NAME_"}));return{pageTitle:n(()=>`ATable ${e.value}`)}}const k={name:"PageTableTree",components:{AlohaPage:T,PageTableTreeExample:N},setup(){const{pageTitle:e}=O();return{pageTitle:e}}};function R(e,t,a,s,m,p){const o=l("page-table-tree-example"),_=l("aloha-page");return d(),r(_,{"page-title":e.pageTitle},{body:c(()=>[b(o)]),_:1},8,["page-title"])}const G=i(k,[["render",R]]);export{G as default};
