import{t as e}from"./chunk.AlohaPage.BP2MUQSS.js";import{Ft as t,It as n,Pt as r,Qt as i,Vt as a,cn as o,nn as s,on as c}from"./chunk.vendor.CTxSDDRk.js";import{t as l}from"./chunk.AlohaExample.BVhM0naJ.js";import{Xt as u,i as d}from"./bundle.index.DbAjsKDm.js";import{l as f}from"./chunk.vendor-lodash.BfU-HRrF.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function m(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function h(){return{codeJs:`import {
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
};`}}var g={name:`PageTableSimpleColumnsGroupedExample`,components:{AlohaExample:l,ATable:d},setup(){let{codeHtml:e}=m(),{codeJs:t}=h(),n=[{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_7_`},{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,group:[`Group 1`,`Group 1.3`],width:500},{id:`column6`,keyLabel:`id`,label:`_A_TABLE_COLUMN_2_`,group:[`Group 1`,`Group 1.1`,`Group 1.1.1`]},{id:`column7`,keyLabel:`id`,label:`_A_TABLE_COLUMN_3_`,group:[`Group 1.1`,`Group 1.1.2`,`Group 1`]},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`,group:[`Group 1`,`Group 1.2`]},{id:`column9`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_7_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`,group:[`Group 2`,`Group 2.1`]},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_6_`,group:[`_A_TABLE_COLUMN_6_`,`Group 2.2`]},{id:`column6`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_8_`}],r=o([]);return(()=>{let e=[];f(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columnsGrouped:n,data:r}}};function _(e,r,o,l,u,d){let f=s(`a-table`),p=s(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_DESCRIPTION_`,props:[`is-simple-table`,`has-mobile`]},{default:c(()=>[t(`div`,null,[a(f,{columns:e.columnsGrouped,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_LABEL_`,"key-id":`id`,"is-simple-table":!0,"has-mobile":!1},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var v=p(g,[[`render`,_]]);function y(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function b(){return{codeJs:`import {
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
};`}}var x={name:`PageTableSimpleExample`,components:{AlohaExample:l,ATable:d},setup(){let{codeHtml:e}=y(),{codeJs:t}=b(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=o([]);return(()=>{let e=[];f(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function S(e,r,o,l,u,d){let f=s(`a-table`),p=s(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_DESCRIPTION_`},{default:c(()=>[t(`div`,null,[a(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var C=p(x,[[`render`,S]]);function w(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function T(){return{codeJs:`import {
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
};`}}var E={name:`PageTableSimpleIsSimpleTableExample`,components:{AlohaExample:l,ATable:d},setup(){let{codeHtml:e}=w(),{codeJs:t}=T(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=o([]);return(()=>{let e=[];f(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function D(e,r,o,l,u,d){let f=s(`a-table`),p=s(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_DESCRIPTION_`,props:`is-simple-table`},{default:c(()=>[t(`div`,null,[a(f,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":`id`,label:`_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_LABEL_`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var O=p(E,[[`render`,D]]);function k(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  :is-striped="true"
  label="_A_TABLE_GROUP_SIMPLE_IS_STRIPED_LABEL_"
  key-id="id"
>
</a-table>`}}function A(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableSimpleIsStripedExample",
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
};`}}var j={name:`PageTableSimpleIsStripedExample`,components:{AlohaExample:l,ATable:d},setup(){let{codeHtml:e}=k(),{codeJs:t}=A(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=o([]);return(()=>{let e=[];f(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function M(e,r,o,l,u,d){let f=s(`a-table`),p=s(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_IS_STRIPED_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_IS_STRIPED_DESCRIPTION_`,props:`is-striped`},{default:c(()=>[t(`div`,null,[a(f,{columns:e.columns,data:e.data,"is-striped":!0,"key-id":`id`,label:`_A_TABLE_GROUP_SIMPLE_IS_STRIPED_LABEL_`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var N=p(j,[[`render`,M]]);function P(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function F(){return{codeJs:`import {
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
};`}}var I={name:`PageTableSimpleMobileSlotsExample`,components:{AlohaExample:l,ATable:d},setup(){let{codeHtml:e}=P(),{codeJs:t}=F(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=o([]);return(()=>{let e=[];f(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function L(e,r,o,l,u,d){let f=s(`a-table`),p=s(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_DESCRIPTION_`,props:`is-simple-table`,slots:[`rowMobilePrepend`,`rowMobileAppend`]},{default:c(()=>[t(`div`,null,[a(f,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":`id`,label:`_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_LABEL_`},{rowMobilePrepend:c(({row:e,rowIndex:n,isFooter:i})=>[...r[0]||=[t(`span`,{style:{width:`100px`}},`Aloha`,-1)]]),rowMobileAppend:c(({row:e,rowIndex:n,isFooter:i})=>[...r[1]||=[t(`span`,{style:{width:`100px`}},`Aloha`,-1)]]),_:1},8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var R=p(I,[[`render`,L]]);function z(){let e=r(()=>u({placeholder:`_A_TABLE_SIMPLE_`}));return{pageTitle:r(()=>`ATable ${e.value}`)}}var B={name:`PageTableSimple`,components:{AlohaPage:e,PageTableSimpleColumnsGroupedExample:v,PageTableSimpleExample:C,PageTableSimpleIsSimpleTableExample:O,PageTableSimpleIsStripedExample:N,PageTableSimpleMobileSlotsExample:R},setup(){let{pageTitle:e}=z();return{pageTitle:e}}};function V(e,t,r,o,l,u){let d=s(`page-table-simple-example`),f=s(`page-table-simple-is-simple-table-example`),p=s(`page-table-simple-is-striped-example`),m=s(`page-table-simple-columns-grouped-example`),h=s(`page-table-simple-mobile-slots-example`),g=s(`aloha-table-css-vars`),_=s(`aloha-page`);return i(),n(_,{"page-title":e.pageTitle},{body:c(()=>[a(d),a(f),a(p),a(m),a(h),a(g,{files:[`components/ATable`,`components/AResizer`]})]),_:1},8,[`page-title`])}var H=p(B,[[`render`,V]]);export{H as default};