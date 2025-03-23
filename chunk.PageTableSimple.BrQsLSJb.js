import{A,a as O}from"./chunk.AlohaExample.DBxxfY2N.js";import{_ as u,g as U}from"./bundle.index.DfK_ND9w.js";import{R as r}from"./chunk.vendor-lodash.BXW4-Hvb.js";import{r as b,R as i,aR as p,e as t,U as L,W as d,Y as c,d as M}from"./chunk.vendor.CDkHfsNc.js";import{A as E}from"./chunk.ATable.oW9cAnbQ.js";import"./chunk.APageTabTitle.POul4upW.js";import"./chunk.AlohaHighlightjs.DI9-5vSP.js";import"./chunk.translations-ar.BW4YNjOf.js";import"./chunk.translations-de.pnZGXXfR.js";import"./chunk.translations-en.CzHrEMzS.js";import"./chunk.translations-es.CVdE8egl.js";import"./chunk.translations-fr.hqb9JGfS.js";import"./chunk.translations-hr.DYwzCGFq.js";import"./chunk.translations-it.C5e5-FF3.js";import"./chunk.translations-ru.eTKud94F.js";function P(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function C(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
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
};`}}const N={name:"PageTableSimpleColumnsGroupedExample",components:{AlohaExample:A,ATable:E},setup(){const{codeHtml:e}=P(),{codeJs:l}=C(),n=[{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_7_"},{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",group:["Group 1","Group 1.3"],width:500},{id:"column6",keyLabel:"id",label:"_A_TABLE_COLUMN_2_",group:["Group 1","Group 1.1","Group 1.1.1"]},{id:"column7",keyLabel:"id",label:"_A_TABLE_COLUMN_3_",group:["Group 1.1","Group 1.1.2","Group 1"]},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_",group:["Group 1","Group 1.2"]},{id:"column9",keyLabel:"aloha",label:"_A_TABLE_COLUMN_7_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_",group:["Group 2","Group 2.1"]},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_6_",group:["_A_TABLE_COLUMN_6_","Group 2.2"]},{id:"column6",keyLabel:"aloha",label:"_A_TABLE_COLUMN_8_"}],o=b([]);return(()=>{const _=[];r(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:l,columnsGrouped:n,data:o}}};function y(e,l,n,o,m,_){const a=t("a-table"),s=t("aloha-example");return L(),i(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_DESCRIPTION_",props:["is-simple-table","has-mobile"]},{default:p(()=>[d("div",null,[c(a,{columns:e.columnsGrouped,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_LABEL_","key-id":"id","is-simple-table":!0,"has-mobile":!1},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const k=u(N,[["render",y]]);function S(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function f(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
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
};`}}const G={name:"PageTableSimpleExample",components:{AlohaExample:A,ATable:E},setup(){const{codeHtml:e}=S(),{codeJs:l}=f(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=b([]);return(()=>{const _=[];r(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:l,columns:n,data:o}}};function g(e,l,n,o,m,_){const a=t("a-table"),s=t("aloha-example");return L(),i(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_DESCRIPTION_"},{default:p(()=>[d("div",null,[c(a,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SIMPLE_LABEL_","key-id":"id"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const I=u(G,[["render",g]]);function D(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function $(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
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
};`}}const R={name:"PageTableSimpleIsSimpleTableExample",components:{AlohaExample:A,ATable:E},setup(){const{codeHtml:e}=D(),{codeJs:l}=$(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=b([]);return(()=>{const _=[];r(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:l,columns:n,data:o}}};function x(e,l,n,o,m,_){const a=t("a-table"),s=t("aloha-example");return L(),i(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_DESCRIPTION_",props:"is-simple-table"},{default:p(()=>[d("div",null,[c(a,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":"id",label:"_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_LABEL_"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const H=u(R,[["render",x]]);function v(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function J(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
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
};`}}const w={name:"PageTableSimpleMobileSlotsExample",components:{AlohaExample:A,ATable:E},setup(){const{codeHtml:e}=v(),{codeJs:l}=J(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_"},{id:"column3",keyLabel:"aloha",label:"_A_TABLE_COLUMN_3_"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],o=b([]);return(()=>{const _=[];r(20,a=>{_.push({id:a,aloha:`aloha ${a}`})}),o.value=_})(),{codeHtml:e,codeJs:l,columns:n,data:o}}};function j(e,l,n,o,m,_){const a=t("a-table"),s=t("aloha-example");return L(),i(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_HEADER_",description:"_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_DESCRIPTION_",props:"is-simple-table",slots:["rowMobilePrepend","rowMobileAppend"]},{default:p(()=>[d("div",null,[c(a,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":"id",label:"_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_LABEL_"},{rowMobilePrepend:p(({row:T,rowIndex:h,isFooter:B})=>l[0]||(l[0]=[d("span",{style:{width:"100px"}},"Aloha",-1)])),rowMobileAppend:p(({row:T,rowIndex:h,isFooter:B})=>l[1]||(l[1]=[d("span",{style:{width:"100px"}},"Aloha",-1)])),_:1},8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const F=u(w,[["render",j]]);function V(){const e=M(()=>U({placeholder:"_A_TABLE_SIMPLE_"}));return{pageTitle:M(()=>`ATable ${e.value}`)}}const W={name:"PageTableSimple",components:{AlohaPage:O,PageTableSimpleColumnsGroupedExample:k,PageTableSimpleExample:I,PageTableSimpleIsSimpleTableExample:H,PageTableSimpleMobileSlotsExample:F},setup(){const{pageTitle:e}=V();return{pageTitle:e}}};function Y(e,l,n,o,m,_){const a=t("page-table-simple-example"),s=t("page-table-simple-is-simple-table-example"),T=t("page-table-simple-columns-grouped-example"),h=t("page-table-simple-mobile-slots-example"),B=t("aloha-page");return L(),i(B,{"page-title":e.pageTitle},{body:p(()=>[c(a),c(s),c(T),c(h)]),_:1},8,["page-title"])}const ce=u(W,[["render",Y]]);export{ce as default};
