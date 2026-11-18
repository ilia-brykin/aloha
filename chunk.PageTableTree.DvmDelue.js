import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{Ft as t,Nt as n,Pt as r,Xt as i,en as a,in as o,on as s,zt as c}from"./chunk.vendor.Cx127fe1.js";import{t as l}from"./chunk.AlohaExample.Dh7-vA8e.js";import{Mt as u,r as d}from"./bundle.index.Csp1_sOL.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function p(){return{codeHtml:`<a-table
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
};`}}var h={name:`PageTableTreeExample`,components:{AlohaExample:l,ATable:d},setup(){let{codeHtml:e}=p(),{codeJs:t}=m();return{codeHtml:e,codeJs:t,columns:[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`label`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`test`,label:`_A_TABLE_COLUMN_3_`}],data:s([{id:`1`,label:`label 1`,test:`test 1`},{id:`2`,label:`label 2`,test:`test 2`,children:[{id:`2_1`,label:`label 2.1`,test:`test 2.1`},{id:`2_2`,label:`label 2.2`,test:`test 2.2`,children:[{id:`2_2_1`,label:`label 2.2.1`,test:`test 2.2.1`}]},{id:`2_3`,label:`label 2.3`,test:`test 2.3`}]},{id:`3`,label:`label 3`,test:`test 3`,children:[{id:`3_1`,label:`label 3.1`,test:`test 3.1`},{id:`3_2`,label:`label 3.2`,test:`test 3.2`},{id:`3_3`,label:`label 3.3`,test:`test 3.3`}]}])}}};function g(e,n,s,l,u,d){let f=a(`a-table`),p=a(`aloha-example`);return i(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_TREE_HEADER_`,description:`_A_TABLE_GROUP_TREE_DESCRIPTION_`,props:`is-tree`},{default:o(()=>[r(`div`,null,[c(f,{columns:e.columns,data:e.data,"is-tree":!0,"key-id":`id`,label:`_A_TABLE_GROUP_TREE_LABEL_`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var _=f(h,[[`render`,g]]);function v(){let e=n(()=>u({placeholder:`_A_TABLE_TREE_COMPONENT_NAME_`}));return{pageTitle:n(()=>`ATable ${e.value}`)}}var y={name:`PageTableTree`,components:{AlohaPage:e,PageTableTreeExample:_},setup(){let{pageTitle:e}=v();return{pageTitle:e}}};function b(e,n,r,s,l,u){let d=a(`page-table-tree-example`),f=a(`aloha-page`);return i(),t(f,{"page-title":e.pageTitle},{body:o(()=>[c(d)]),_:1},8,[`page-title`])}var x=f(y,[[`render`,b]]);export{x as default};