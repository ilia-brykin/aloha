import{A as L,a as M}from"./chunk.AlohaExample.D19CN2wh.js";import{A as r}from"./chunk.ATable.CgCSCDr2.js";import{T as b}from"./chunk.vendor-lodash.Cgq9oNCy.js";import{r as T,m as t,K as u,aK as p,J as i,O as d,P as c,a as O}from"./chunk.vendor.DQz1Isc4.js";import{_ as A,g as U}from"./bundle.index.Cv6dkyGa.js";import"./chunk.utilsMath.1mfWsA3R.js";import"./chunk.AForm.Bvve0IYh.js";import"./chunk.ADatepicker.D3pbJRZb.js";import"./chunk.UiMixinProps.BvCyZ1Ij.js";import"./chunk.AInputNumber.D7-F2j3f.js";import"./chunk.ATinymce.BUC7EngB.js";import"./chunk.vendor-tinymce.cPIiul0H.js";function P(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function C(){return{codeJs:`import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
export default {
  name: "PageTableSimpleExample",
  components: {
    ATable,
  },
  setup() {
     const columnsGrouped = [
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_7_",
      },
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
        group: ["Group 1", "Group 1.3"],
        width: 500,
      },
      {
        id: "column6",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_2_",
        group: ["Group 1", "Group 1.1", "Group 1.1.1"],
      },
      {
        id: "column7",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_3_",
        group: ["Group 1.1", "Group 1.1.2", "Group 1"],
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
        group: ["Group 1", "Group 1.2"],
      },
      {
        id: "column9",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_7_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
        group: ["Group 2", "Group 2.1"],
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_6_",
        group: ["_A_TABLE_COLUMN_6_", "Group 2.2"],
      },
      {
        id: "column6",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_8_",
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
      columnsGrouped,
      data,
    };
  },
};`}}const N={name:"PageTableSimpleColumnsGroupedExample",components:{AlohaExample:L,ATable:r},setup(){const{codeHtml:e}=P(),{codeJs:_}=C(),n=[{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_7_"},{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",group:["Group 1","Group 1.3"],width:500},{id:"column6",keyLabel:"id",label:"_A_TABLE_COLUMN_2_",group:["Group 1","Group 1.1","Group 1.1.1"]},{id:"column7",keyLabel:"id",label:"_A_TABLE_COLUMN_3_",group:["Group 1.1","Group 1.1.2","Group 1"]},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_",group:["Group 1","Group 1.2"]},{id:"column9",keyLabel:"aloha",label:"_A_TABLE_COLUMN_7_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_",group:["Group 2","Group 2.1"]},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_6_",group:["_A_TABLE_COLUMN_6_","Group 2.2"]},{id:"column6",keyLabel:"aloha",label:"_A_TABLE_COLUMN_8_"}],l=T([]);return(()=>{const o=[];b(20,a=>{o.push({id:a,aloha:`aloha ${a}`})}),l.value=o})(),{codeHtml:e,codeJs:_,columnsGrouped:n,data:l}}};function y(e,_,n,l,m,o){const a=t("a-table"),s=t("aloha-example");return i(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_DESCRIPTION_",props:["is-simple-table","has-mobile"]},{default:p(()=>[d("div",null,[c(a,{columns:e.columnsGrouped,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_LABEL_","key-id":"id","is-simple-table":!0,"has-mobile":!1},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const k=A(N,[["render",y]]);function S(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function f(){return{codeJs:`import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
export default {
  name: "PageTableSimpleExample",
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
};`}}const G={name:"PageTableSimpleExample",components:{AlohaExample:L,ATable:r},setup(){const{codeHtml:e}=S(),{codeJs:_}=f(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=T([]);return(()=>{const o=[];b(20,a=>{o.push({id:a,aloha:`aloha ${a}`})}),l.value=o})(),{codeHtml:e,codeJs:_,columns:n,data:l}}};function g(e,_,n,l,m,o){const a=t("a-table"),s=t("aloha-example");return i(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_DESCRIPTION_"},{default:p(()=>[d("div",null,[c(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const I=A(G,[["render",g]]);function D(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function $(){return{codeJs:`import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
export default {
  name: "PageTableSimpleExample",
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
};`}}const x={name:"PageTableSimpleIsSimpleTableExample",components:{AlohaExample:L,ATable:r},setup(){const{codeHtml:e}=D(),{codeJs:_}=$(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=T([]);return(()=>{const o=[];b(20,a=>{o.push({id:a,aloha:`aloha ${a}`})}),l.value=o})(),{codeHtml:e,codeJs:_,columns:n,data:l}}};function R(e,_,n,l,m,o){const a=t("a-table"),s=t("aloha-example");return i(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_DESCRIPTION_",props:"is-simple-table"},{default:p(()=>[d("div",null,[c(a,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":"id",label:"_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_LABEL_"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const H=A(x,[["render",R]]);function v(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function J(){return{codeJs:`import {
  ref,
} from "vue";

import ATable from "aloha-vue/src/ATable/ATable";
    
export default {
  name: "PageTableSimpleExample",
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
};`}}const w={name:"PageTableSimpleMobileSlotsExample",components:{AlohaExample:L,ATable:r},setup(){const{codeHtml:e}=v(),{codeJs:_}=J(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=T([]);return(()=>{const o=[];b(20,a=>{o.push({id:a,aloha:`aloha ${a}`})}),l.value=o})(),{codeHtml:e,codeJs:_,columns:n,data:l}}},j=d("span",{style:{width:"100px"}},"Aloha",-1),F=d("span",{style:{width:"100px"}},"Aloha",-1);function K(e,_,n,l,m,o){const a=t("a-table"),s=t("aloha-example");return i(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_DESCRIPTION_",props:"is-simple-table",slots:["rowMobilePrepend","rowMobileAppend"]},{default:p(()=>[d("div",null,[c(a,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":"id",label:"_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_LABEL_"},{rowMobilePrepend:p(({row:E,rowIndex:h,isFooter:B})=>[j]),rowMobileAppend:p(({row:E,rowIndex:h,isFooter:B})=>[F]),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const V=A(w,[["render",K]]);function q(){const e=O(()=>U({placeholder:"_A_TABLE_SIMPLE_"}));return{pageTitle:O(()=>`ATable ${e.value}`)}}const z={name:"PageTableSimple",components:{AlohaPage:M,PageTableSimpleColumnsGroupedExample:k,PageTableSimpleExample:I,PageTableSimpleIsSimpleTableExample:H,PageTableSimpleMobileSlotsExample:V},setup(){const{pageTitle:e}=q();return{pageTitle:e}}};function Q(e,_,n,l,m,o){const a=t("page-table-simple-example"),s=t("page-table-simple-is-simple-table-example"),E=t("page-table-simple-columns-grouped-example"),h=t("page-table-simple-mobile-slots-example"),B=t("aloha-page");return i(),u(B,{"page-title":e.pageTitle},{body:p(()=>[c(a),c(s),c(E),c(h)]),_:1},8,["page-title"])}const me=A(z,[["render",Q]]);export{me as default};
