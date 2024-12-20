import{A as L,a as M}from"./chunk.AlohaExample.bHGij63B.js";import{A as r}from"./chunk.ATable.DruEzHhF.js";import{T as b}from"./chunk.vendor-lodash.4mRNCQpN.js";import{r as T,m as t,K as u,aK as p,J as i,O as d,P as c,a as O}from"./chunk.vendor.D6eG-XyB.js";import{_ as A,g as U}from"./bundle.index.C_5YVLtW.js";import"./chunk.utilsMath.Dv1kx9ss.js";import"./chunk.AForm.CSasGaDW.js";import"./chunk.ADatepicker.DsVaojwL.js";import"./chunk.UiMixinProps.BanNRFZI.js";import"./chunk.AInputNumber.Dd9Cig3P.js";import"./chunk.ATinymce.CNhjlfBT.js";import"./chunk.vendor-tinymce.Dn8nHerG.js";function P(){return{codeHtml:`<a-table
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
};`}}const N={name:"PageTableSimpleColumnsGroupedExample",components:{AlohaExample:L,ATable:r},setup(){const{codeHtml:e}=P(),{codeJs:l}=C(),n=[{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_7_"},{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",group:["Group 1","Group 1.3"],width:500},{id:"column6",keyLabel:"id",label:"_A_TABLE_COLUMN_2_",group:["Group 1","Group 1.1","Group 1.1.1"]},{id:"column7",keyLabel:"id",label:"_A_TABLE_COLUMN_3_",group:["Group 1.1","Group 1.1.2","Group 1"]},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_",group:["Group 1","Group 1.2"]},{id:"column9",keyLabel:"aloha",label:"_A_TABLE_COLUMN_7_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_",group:["Group 2","Group 2.1"]},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_6_",group:["_A_TABLE_COLUMN_6_","Group 2.2"]},{id:"column6",keyLabel:"aloha",label:"_A_TABLE_COLUMN_8_"}],o=T([]);return(()=>{const _=[];b(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:l,columnsGrouped:n,data:o}}};function y(e,l,n,o,m,_){const a=t("a-table"),s=t("aloha-example");return i(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_DESCRIPTION_",props:["is-simple-table","has-mobile"]},{default:p(()=>[d("div",null,[c(a,{columns:e.columnsGrouped,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_LABEL_","key-id":"id","is-simple-table":!0,"has-mobile":!1},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const k=A(N,[["render",y]]);function S(){return{codeHtml:`<a-table
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
};`}}const G={name:"PageTableSimpleExample",components:{AlohaExample:L,ATable:r},setup(){const{codeHtml:e}=S(),{codeJs:l}=f(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=T([]);return(()=>{const _=[];b(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:l,columns:n,data:o}}};function g(e,l,n,o,m,_){const a=t("a-table"),s=t("aloha-example");return i(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_DESCRIPTION_"},{default:p(()=>[d("div",null,[c(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const I=A(G,[["render",g]]);function D(){return{codeHtml:`<a-table
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
};`}}const x={name:"PageTableSimpleIsSimpleTableExample",components:{AlohaExample:L,ATable:r},setup(){const{codeHtml:e}=D(),{codeJs:l}=$(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=T([]);return(()=>{const _=[];b(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:l,columns:n,data:o}}};function R(e,l,n,o,m,_){const a=t("a-table"),s=t("aloha-example");return i(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_DESCRIPTION_",props:"is-simple-table"},{default:p(()=>[d("div",null,[c(a,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":"id",label:"_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_LABEL_"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const H=A(x,[["render",R]]);function v(){return{codeHtml:`<a-table
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
};`}}const w={name:"PageTableSimpleMobileSlotsExample",components:{AlohaExample:L,ATable:r},setup(){const{codeHtml:e}=v(),{codeJs:l}=J(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=T([]);return(()=>{const _=[];b(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:l,columns:n,data:o}}};function j(e,l,n,o,m,_){const a=t("a-table"),s=t("aloha-example");return i(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_DESCRIPTION_",props:"is-simple-table",slots:["rowMobilePrepend","rowMobileAppend"]},{default:p(()=>[d("div",null,[c(a,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":"id",label:"_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_LABEL_"},{rowMobilePrepend:p(({row:E,rowIndex:h,isFooter:B})=>l[0]||(l[0]=[d("span",{style:{width:"100px"}},"Aloha",-1)])),rowMobileAppend:p(({row:E,rowIndex:h,isFooter:B})=>l[1]||(l[1]=[d("span",{style:{width:"100px"}},"Aloha",-1)])),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const F=A(w,[["render",j]]);function K(){const e=O(()=>U({placeholder:"_A_TABLE_SIMPLE_"}));return{pageTitle:O(()=>`ATable ${e.value}`)}}const V={name:"PageTableSimple",components:{AlohaPage:M,PageTableSimpleColumnsGroupedExample:k,PageTableSimpleExample:I,PageTableSimpleIsSimpleTableExample:H,PageTableSimpleMobileSlotsExample:F},setup(){const{pageTitle:e}=K();return{pageTitle:e}}};function q(e,l,n,o,m,_){const a=t("page-table-simple-example"),s=t("page-table-simple-is-simple-table-example"),E=t("page-table-simple-columns-grouped-example"),h=t("page-table-simple-mobile-slots-example"),B=t("aloha-page");return i(),u(B,{"page-title":e.pageTitle},{body:p(()=>[c(a),c(s),c(E),c(h)]),_:1},8,["page-title"])}const ne=A(V,[["render",q]]);export{ne as default};
