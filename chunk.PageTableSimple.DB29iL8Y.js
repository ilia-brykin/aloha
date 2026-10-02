import{Ct as e,Tt as t,Ut as n,Yt as r,kt as i,qt as a,wt as o,zt as s}from"./chunk.vendor.CZPox1kV.js";import{l as c}from"./chunk.vendor-lodash.BnpO4xCi.js";import{i as l,kt as u,t as d}from"./bundle.index.CLtYDDlb.js";import{n as f,t as p}from"./chunk.AlohaExample.BFgfeYtr.js";function m(){return{codeHtml:`<a-table
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
};`}}var g={name:`PageTableSimpleColumnsGroupedExample`,components:{AlohaExample:p,ATable:l},setup(){let{codeHtml:e}=m(),{codeJs:t}=h(),n=[{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_7_`},{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,group:[`Group 1`,`Group 1.3`],width:500},{id:`column6`,keyLabel:`id`,label:`_A_TABLE_COLUMN_2_`,group:[`Group 1`,`Group 1.1`,`Group 1.1.1`]},{id:`column7`,keyLabel:`id`,label:`_A_TABLE_COLUMN_3_`,group:[`Group 1.1`,`Group 1.1.2`,`Group 1`]},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`,group:[`Group 1`,`Group 1.2`]},{id:`column9`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_7_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`,group:[`Group 2`,`Group 2.1`]},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_6_`,group:[`_A_TABLE_COLUMN_6_`,`Group 2.2`]},{id:`column6`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_8_`}],i=r([]);return(()=>{let e=[];c(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:t,columnsGrouped:n,data:i}}};function _(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_DESCRIPTION_`,props:[`is-simple-table`,`has-mobile`]},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columnsGrouped,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_LABEL_`,"key-id":`id`,"is-simple-table":!0,"has-mobile":!1},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var v=d(g,[[`render`,_]]);function y(){return{codeHtml:`<a-table
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
};`}}var x={name:`PageTableSimpleExample`,components:{AlohaExample:p,ATable:l},setup(){let{codeHtml:e}=y(),{codeJs:t}=b(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];c(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function S(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_DESCRIPTION_`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var C=d(x,[[`render`,S]]);function w(){return{codeHtml:`<a-table
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
};`}}var E={name:`PageTableSimpleIsSimpleTableExample`,components:{AlohaExample:p,ATable:l},setup(){let{codeHtml:e}=w(),{codeJs:t}=T(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];c(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function D(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_DESCRIPTION_`,props:`is-simple-table`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":`id`,label:`_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_LABEL_`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var O=d(E,[[`render`,D]]);function k(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>`}}function A(){return{codeJs:`import {
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
};`}}var j={name:`PageTableSimpleMobileSlotsExample`,components:{AlohaExample:p,ATable:l},setup(){let{codeHtml:e}=k(),{codeJs:t}=A(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];c(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function M(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_DESCRIPTION_`,props:`is-simple-table`,slots:[`rowMobilePrepend`,`rowMobileAppend`]},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":`id`,label:`_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_LABEL_`},{rowMobilePrepend:a(({row:e,rowIndex:t,isFooter:n})=>[...r[0]||=[o(`span`,{style:{width:`100px`}},`Aloha`,-1)]]),rowMobileAppend:a(({row:e,rowIndex:t,isFooter:n})=>[...r[1]||=[o(`span`,{style:{width:`100px`}},`Aloha`,-1)]]),_:1},8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var N=d(j,[[`render`,M]]);function P(){let t=e(()=>u({placeholder:`_A_TABLE_SIMPLE_`}));return{pageTitle:e(()=>`ATable ${t.value}`)}}var F={name:`PageTableSimple`,components:{AlohaPage:f,PageTableSimpleColumnsGroupedExample:v,PageTableSimpleExample:C,PageTableSimpleIsSimpleTableExample:O,PageTableSimpleMobileSlotsExample:N},setup(){let{pageTitle:e}=P();return{pageTitle:e}}};function I(e,r,o,c,l,u){let d=n(`page-table-simple-example`),f=n(`page-table-simple-is-simple-table-example`),p=n(`page-table-simple-columns-grouped-example`),m=n(`page-table-simple-mobile-slots-example`),h=n(`aloha-page`);return s(),t(h,{"page-title":e.pageTitle},{body:a(()=>[i(d),i(f),i(p),i(m)]),_:1},8,[`page-title`])}var L=d(F,[[`render`,I]]);export{L as default};