import{Ct as e,Tt as t,Ut as n,Yt as r,kt as i,qt as a,wt as o,zt as s}from"./chunk.vendor.CZPox1kV.js";import{i as c,kt as l,t as u}from"./bundle.index.CLtYDDlb.js";import{n as d,t as f}from"./chunk.AlohaExample.BFgfeYtr.js";function p(){return{codeHtml:`<a-table
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
};`}}var h={name:`PageTableTreeExample`,components:{AlohaExample:f,ATable:c},setup(){let{codeHtml:e}=p(),{codeJs:t}=m();return{codeHtml:e,codeJs:t,columns:[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`label`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`test`,label:`_A_TABLE_COLUMN_3_`}],data:r([{id:`1`,label:`label 1`,test:`test 1`},{id:`2`,label:`label 2`,test:`test 2`,children:[{id:`2_1`,label:`label 2.1`,test:`test 2.1`},{id:`2_2`,label:`label 2.2`,test:`test 2.2`,children:[{id:`2_2_1`,label:`label 2.2.1`,test:`test 2.2.1`}]},{id:`2_3`,label:`label 2.3`,test:`test 2.3`}]},{id:`3`,label:`label 3`,test:`test 3`,children:[{id:`3_1`,label:`label 3.1`,test:`test 3.1`},{id:`3_2`,label:`label 3.2`,test:`test 3.2`},{id:`3_3`,label:`label 3.3`,test:`test 3.3`}]}])}}};function g(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_TREE_HEADER_`,description:`_A_TABLE_GROUP_TREE_DESCRIPTION_`,props:`is-tree`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,"is-tree":!0,"key-id":`id`,label:`_A_TABLE_GROUP_TREE_LABEL_`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var _=u(h,[[`render`,g]]);function v(){let t=e(()=>l({placeholder:`_A_TABLE_TREE_COMPONENT_NAME_`}));return{pageTitle:e(()=>`ATable ${t.value}`)}}var y={name:`PageTableTree`,components:{AlohaPage:d,PageTableTreeExample:_},setup(){let{pageTitle:e}=v();return{pageTitle:e}}};function b(e,r,o,c,l,u){let d=n(`page-table-tree-example`),f=n(`aloha-page`);return s(),t(f,{"page-title":e.pageTitle},{body:a(()=>[i(d)]),_:1},8,[`page-title`])}var x=u(y,[[`render`,b]]);export{x as default};