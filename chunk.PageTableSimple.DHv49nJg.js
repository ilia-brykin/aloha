import{A as L,a as M}from"./chunk.AlohaExample.DJmek8S2.js";import{A as r}from"./chunk.ATable.Dyg6RlFe.js";import{T as b}from"./chunk.vendor-lodash.C_VDyCZ-.js";import{r as T,k as t,J as u,aJ as p,H as A,N as d,O as c,a as O}from"./chunk.vendor.z3GIbCk9.js";import{_ as i,g as U}from"./bundle.index.BNDXU1qV.js";import"./chunk.utilsMath.Ch_ZSUE4.js";import"./chunk.AForm.BvR5IxMG.js";import"./chunk.ADatepicker.CV7iQEiu.js";import"./chunk.UiMixinProps.C6KoMHL_.js";import"./chunk.AInputNumber.BDT4S_uW.js";function P(){return{codeHtml:`<a-table
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
};`}}const N={name:"PageTableSimpleColumnsGroupedExample",components:{AlohaExample:L,ATable:r},setup(){const{codeHtml:e}=P(),{codeJs:l}=C(),n=[{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_7_"},{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",group:["Group 1","Group 1.3"],width:500},{id:"column6",keyLabel:"id",label:"_A_TABLE_COLUMN_2_",group:["Group 1","Group 1.1","Group 1.1.1"]},{id:"column7",keyLabel:"id",label:"_A_TABLE_COLUMN_3_",group:["Group 1.1","Group 1.1.2","Group 1"]},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_",group:["Group 1","Group 1.2"]},{id:"column9",keyLabel:"aloha",label:"_A_TABLE_COLUMN_7_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_",group:["Group 2","Group 2.1"]},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_6_",group:["_A_TABLE_COLUMN_6_","Group 2.2"]},{id:"column6",keyLabel:"aloha",label:"_A_TABLE_COLUMN_8_"}],o=T([]);return(()=>{const _=[];b(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:l,columnsGrouped:n,data:o}}};function k(e,l,n,o,m,_){const a=t("a-table"),s=t("aloha-example");return A(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_DESCRIPTION_",props:["is-simple-table","has-mobile"]},{default:p(()=>[d("div",null,[c(a,{columns:e.columnsGrouped,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_LABEL_","key-id":"id","is-simple-table":!0,"has-mobile":!1},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const y=i(N,[["render",k]]);function S(){return{codeHtml:`<a-table
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
};`}}const G={name:"PageTableSimpleExample",components:{AlohaExample:L,ATable:r},setup(){const{codeHtml:e}=S(),{codeJs:l}=f(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=T([]);return(()=>{const _=[];b(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:l,columns:n,data:o}}};function g(e,l,n,o,m,_){const a=t("a-table"),s=t("aloha-example");return A(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_DESCRIPTION_"},{default:p(()=>[d("div",null,[c(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const I=i(G,[["render",g]]);function D(){return{codeHtml:`<a-table
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
};`}}const x={name:"PageTableSimpleIsSimpleTableExample",components:{AlohaExample:L,ATable:r},setup(){const{codeHtml:e}=D(),{codeJs:l}=$(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=T([]);return(()=>{const _=[];b(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:l,columns:n,data:o}}};function R(e,l,n,o,m,_){const a=t("a-table"),s=t("aloha-example");return A(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_DESCRIPTION_",props:"is-simple-table"},{default:p(()=>[d("div",null,[c(a,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":"id",label:"_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_LABEL_"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const H=i(x,[["render",R]]);function v(){return{codeHtml:`<a-table
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
};`}}const w={name:"PageTableSimpleMobileSlotsExample",components:{AlohaExample:L,ATable:r},setup(){const{codeHtml:e}=v(),{codeJs:l}=J(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=T([]);return(()=>{const _=[];b(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:l,columns:n,data:o}}};function j(e,l,n,o,m,_){const a=t("a-table"),s=t("aloha-example");return A(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_DESCRIPTION_",props:"is-simple-table",slots:["rowMobilePrepend","rowMobileAppend"]},{default:p(()=>[d("div",null,[c(a,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":"id",label:"_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_LABEL_"},{rowMobilePrepend:p(({row:E,rowIndex:h,isFooter:B})=>l[0]||(l[0]=[d("span",{style:{width:"100px"}},"Aloha",-1)])),rowMobileAppend:p(({row:E,rowIndex:h,isFooter:B})=>l[1]||(l[1]=[d("span",{style:{width:"100px"}},"Aloha",-1)])),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const F=i(w,[["render",j]]);function V(){const e=O(()=>U({placeholder:"_A_TABLE_SIMPLE_"}));return{pageTitle:O(()=>`ATable ${e.value}`)}}const q={name:"PageTableSimple",components:{AlohaPage:M,PageTableSimpleColumnsGroupedExample:y,PageTableSimpleExample:I,PageTableSimpleIsSimpleTableExample:H,PageTableSimpleMobileSlotsExample:F},setup(){const{pageTitle:e}=V();return{pageTitle:e}}};function z(e,l,n,o,m,_){const a=t("page-table-simple-example"),s=t("page-table-simple-is-simple-table-example"),E=t("page-table-simple-columns-grouped-example"),h=t("page-table-simple-mobile-slots-example"),B=t("aloha-page");return A(),u(B,{"page-title":e.pageTitle},{body:p(()=>[c(a),c(s),c(E),c(h)]),_:1},8,["page-title"])}const _e=i(q,[["render",z]]);export{_e as default};
