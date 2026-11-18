import{t as e}from"./chunk.AlohaPage.CyRCtesQ.js";import{Bt as t,Ft as n,It as r,Pt as i,Zt as a,an as o,sn as s,tn as c}from"./chunk.vendor.H0cZuFAV.js";import{t as l}from"./chunk.AlohaExample.BovuoDBh.js";import{Ht as u,r as d}from"./bundle.index.WAa1Niso.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function p(){return{codeHtml:`<a-table
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
};`}}var h={name:`PageTableTreeExample`,components:{AlohaExample:l,ATable:d},setup(){let{codeHtml:e}=p(),{codeJs:t}=m();return{codeHtml:e,codeJs:t,columns:[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`label`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`test`,label:`_A_TABLE_COLUMN_3_`}],data:s([{id:`1`,label:`label 1`,test:`test 1`},{id:`2`,label:`label 2`,test:`test 2`,children:[{id:`2_1`,label:`label 2.1`,test:`test 2.1`},{id:`2_2`,label:`label 2.2`,test:`test 2.2`,children:[{id:`2_2_1`,label:`label 2.2.1`,test:`test 2.2.1`}]},{id:`2_3`,label:`label 2.3`,test:`test 2.3`}]},{id:`3`,label:`label 3`,test:`test 3`,children:[{id:`3_1`,label:`label 3.1`,test:`test 3.1`},{id:`3_2`,label:`label 3.2`,test:`test 3.2`},{id:`3_3`,label:`label 3.3`,test:`test 3.3`}]}])}}};function g(e,i,s,l,u,d){let f=c(`a-table`),p=c(`aloha-example`);return a(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_TREE_HEADER_`,description:`_A_TABLE_GROUP_TREE_DESCRIPTION_`,props:`is-tree`},{default:o(()=>[n(`div`,null,[t(f,{columns:e.columns,data:e.data,"is-tree":!0,"key-id":`id`,label:`_A_TABLE_GROUP_TREE_LABEL_`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var _=f(h,[[`render`,g]]);function v(){let e=i(()=>u({placeholder:`_A_TABLE_TREE_COMPONENT_NAME_`}));return{pageTitle:i(()=>`ATable ${e.value}`)}}var y={name:`PageTableTree`,components:{AlohaPage:e,PageTableTreeExample:_},setup(){let{pageTitle:e}=v();return{pageTitle:e}}};function b(e,n,i,s,l,u){let d=c(`page-table-tree-example`),f=c(`aloha-page`);return a(),r(f,{"page-title":e.pageTitle},{body:o(()=>[t(d)]),_:1},8,[`page-title`])}var x=f(y,[[`render`,b]]);export{x as default};