import{A as u,a as T}from"./chunk.AlohaExample.BZeZthkV.js";import{_ as r,g as A}from"./bundle.index.BhEeXSAb.js";import{r as E,Z as d,Y as i,aV as c,f as l,$ as L,a0 as b,d as n}from"./chunk.vendor.hDEvjBSB.js";import"./chunk.vendor-lodash.3C581RLn.js";import{A as f}from"./chunk.ATable.TDP6pXBu.js";import"./chunk.APageTabTitle.C6WQ6Ehw.js";import"./chunk.AlohaHighlightjs.B1uKbtWp.js";import"./chunk.translations-ar.D5QoWFzr.js";import"./chunk.translations-de.es3zy6A0.js";import"./chunk.translations-en.CYlx3VY3.js";import"./chunk.translations-es.zp4usr_r.js";import"./chunk.translations-fr.DtjnUZtG.js";import"./chunk.translations-hr.DZGEx8XX.js";import"./chunk.translations-it.D2jWnc95.js";import"./chunk.translations-ru.CUfkkkdW.js";function h(){return{codeHtml:`<a-table
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
};`}}const B={name:"PageTableTreeExample",components:{AlohaExample:u,ATable:f},setup(){const{codeHtml:e}=h(),{codeJs:t}=g(),a=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"label",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"test",label:"_A_TABLE_COLUMN_3_"}],o=E([{id:"1",label:"label 1",test:"test 1"},{id:"2",label:"label 2",test:"test 2",children:[{id:"2_1",label:"label 2.1",test:"test 2.1"},{id:"2_2",label:"label 2.2",test:"test 2.2",children:[{id:"2_2_1",label:"label 2.2.1",test:"test 2.2.1"}]},{id:"2_3",label:"label 2.3",test:"test 2.3"}]},{id:"3",label:"label 3",test:"test 3",children:[{id:"3_1",label:"label 3.1",test:"test 3.1"},{id:"3_2",label:"label 3.2",test:"test 3.2"},{id:"3_3",label:"label 3.3",test:"test 3.3"}]}]);return{codeHtml:e,codeJs:t,columns:a,data:o}}};function P(e,t,a,o,m,p){const s=l("a-table"),_=l("aloha-example");return d(),i(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_TREE_HEADER_",description:"_A_TABLE_GROUP_TREE_DESCRIPTION_",props:"is-tree"},{default:c(()=>[L("div",null,[b(s,{columns:e.columns,data:e.data,"is-tree":!0,"key-id":"id",label:"_A_TABLE_GROUP_TREE_LABEL_"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const N=r(B,[["render",P]]);function O(){const e=n(()=>A({placeholder:"_A_TABLE_TREE_COMPONENT_NAME_"}));return{pageTitle:n(()=>`ATable ${e.value}`)}}const $={name:"PageTableTree",components:{AlohaPage:T,PageTableTreeExample:N},setup(){const{pageTitle:e}=O();return{pageTitle:e}}};function R(e,t,a,o,m,p){const s=l("page-table-tree-example"),_=l("aloha-page");return d(),i(_,{"page-title":e.pageTitle},{body:c(()=>[b(s)]),_:1},8,["page-title"])}const S=r($,[["render",R]]);export{S as default};
