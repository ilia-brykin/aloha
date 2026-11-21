import{t as e}from"./chunk.AlohaPage.DkILLbn5.js";import{$t as t,Ft as n,It as r,Pt as i,Vt as a,ln as o,rn as s,sn as c}from"./chunk.vendor.BvryzG0o.js";import{t as l}from"./chunk.AlohaExample.BXW-VBsT.js";import{$t as u,i as d}from"./bundle.index.b2KYNVgN.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function p(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  :is-tree="true"
  key-id="id"
  label="_A_TABLE_GROUP_TREE_LABEL_"
></a-table>`}}function m(){return{codeJs:`import {
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
};`}}var h={name:`PageTableTreeExample`,components:{AlohaExample:l,ATable:d},setup(){let{codeHtml:e}=p(),{codeJs:t}=m();return{codeHtml:e,codeJs:t,columns:[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`label`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`test`,label:`_A_TABLE_COLUMN_3_`}],data:o([{id:`1`,label:`label 1`,test:`test 1`},{id:`2`,label:`label 2`,test:`test 2`,children:[{id:`2_1`,label:`label 2.1`,test:`test 2.1`},{id:`2_2`,label:`label 2.2`,test:`test 2.2`,children:[{id:`2_2_1`,label:`label 2.2.1`,test:`test 2.2.1`}]},{id:`2_3`,label:`label 2.3`,test:`test 2.3`}]},{id:`3`,label:`label 3`,test:`test 3`,children:[{id:`3_1`,label:`label 3.1`,test:`test 3.1`},{id:`3_2`,label:`label 3.2`,test:`test 3.2`},{id:`3_3`,label:`label 3.3`,test:`test 3.3`}]}])}}};function g(e,i,o,l,u,d){let f=s(`a-table`),p=s(`aloha-example`);return t(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_TREE_HEADER_`,description:`_A_TABLE_GROUP_TREE_DESCRIPTION_`,props:`is-tree`},{default:c(()=>[n(`div`,null,[a(f,{columns:e.columns,data:e.data,"is-tree":!0,"key-id":`id`,label:`_A_TABLE_GROUP_TREE_LABEL_`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var _=f(h,[[`render`,g]]);function v(){let e=i(()=>u({placeholder:`_A_TABLE_TREE_COMPONENT_NAME_`}));return{pageTitle:i(()=>`ATable ${e.value}`)}}var y={name:`PageTableTree`,components:{AlohaPage:e,PageTableTreeExample:_},setup(){let{pageTitle:e}=v();return{pageTitle:e}}};function b(e,n,i,o,l,u){let d=s(`page-table-tree-example`),f=s(`aloha-page`);return t(),r(f,{"page-title":e.pageTitle},{body:c(()=>[a(d)]),_:1},8,[`page-title`])}var x=f(y,[[`render`,b]]);export{x as default};