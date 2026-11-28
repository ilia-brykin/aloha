import{t as e}from"./chunk.AlohaPage.BSfHVC43.js";import{Ht as t,Jt as n,Ut as r,Vt as i,_n as a,mn as o,on as s,un as c}from"./chunk.vendor.DL09mhUf.js";import{t as l}from"./chunk.AlohaExample.VTWuqY0j.js";import{a as u,hn as d,t as f}from"./bundle.index.D-5bYXwk.js";import{u as p}from"./chunk.vendor-lodash.BlbRpQpv.js";function m(){return{codeHtml:`<a-table
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
};`}}var g={name:`PageTableSimpleColumnsGroupedExample`,components:{AlohaExample:l,ATable:u},setup(){let{codeHtml:e}=m(),{codeJs:t}=h(),n=[{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_7_`},{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,group:[`Group 1`,`Group 1.3`],width:500},{id:`column6`,keyLabel:`id`,label:`_A_TABLE_COLUMN_2_`,group:[`Group 1`,`Group 1.1`,`Group 1.1.1`]},{id:`column7`,keyLabel:`id`,label:`_A_TABLE_COLUMN_3_`,group:[`Group 1.1`,`Group 1.1.2`,`Group 1`]},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`,group:[`Group 1`,`Group 1.2`]},{id:`column9`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_7_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`,group:[`Group 2`,`Group 2.1`]},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_6_`,group:[`_A_TABLE_COLUMN_6_`,`Group 2.2`]},{id:`column6`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_8_`}],r=a([]);return(()=>{let e=[];p(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columnsGrouped:n,data:r}}};function _(e,i,a,l,u,d){let f=c(`a-table`),p=c(`aloha-example`);return s(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_DESCRIPTION_`,props:[`is-simple-table`,`has-mobile`]},{default:o(()=>[t(`div`,null,[n(f,{columns:e.columnsGrouped,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_LABEL_`,"key-id":`id`,"is-simple-table":!0,"has-mobile":!1},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var v=f(g,[[`render`,_]]);function y(){return{codeHtml:`<a-table
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
};`}}var x={name:`PageTableSimpleExample`,components:{AlohaExample:l,ATable:u},setup(){let{codeHtml:e}=y(),{codeJs:t}=b(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=a([]);return(()=>{let e=[];p(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function S(e,i,a,l,u,d){let f=c(`a-table`),p=c(`aloha-example`);return s(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_DESCRIPTION_`},{default:o(()=>[t(`div`,null,[n(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var C=f(x,[[`render`,S]]);function w(){return{codeHtml:`<a-table
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
};`}}var E={name:`PageTableSimpleIsSimpleTableExample`,components:{AlohaExample:l,ATable:u},setup(){let{codeHtml:e}=w(),{codeJs:t}=T(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=a([]);return(()=>{let e=[];p(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function D(e,i,a,l,u,d){let f=c(`a-table`),p=c(`aloha-example`);return s(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_DESCRIPTION_`,props:`is-simple-table`},{default:o(()=>[t(`div`,null,[n(f,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":`id`,label:`_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_LABEL_`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var O=f(E,[[`render`,D]]);function k(){return{codeHtml:`<a-table
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
};`}}var j={name:`PageTableSimpleIsStripedExample`,components:{AlohaExample:l,ATable:u},setup(){let{codeHtml:e}=k(),{codeJs:t}=A(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=a([]);return(()=>{let e=[];p(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function M(e,i,a,l,u,d){let f=c(`a-table`),p=c(`aloha-example`);return s(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_IS_STRIPED_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_IS_STRIPED_DESCRIPTION_`,props:`is-striped`},{default:o(()=>[t(`div`,null,[n(f,{columns:e.columns,data:e.data,"is-striped":!0,"key-id":`id`,label:`_A_TABLE_GROUP_SIMPLE_IS_STRIPED_LABEL_`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var N=f(j,[[`render`,M]]);function P(){return{codeHtml:`<a-table
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
};`}}var I={name:`PageTableSimpleMobileSlotsExample`,components:{AlohaExample:l,ATable:u},setup(){let{codeHtml:e}=P(),{codeJs:t}=F(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=a([]);return(()=>{let e=[];p(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function L(e,i,a,l,u,d){let f=c(`a-table`),p=c(`aloha-example`);return s(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_DESCRIPTION_`,props:`is-simple-table`,slots:[`rowMobilePrepend`,`rowMobileAppend`]},{default:o(()=>[t(`div`,null,[n(f,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":`id`,label:`_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_LABEL_`},{rowMobilePrepend:o(({row:e,rowIndex:n,isFooter:r})=>[...i[0]||=[t(`span`,{style:{width:`100px`}},`Aloha`,-1)]]),rowMobileAppend:o(({row:e,rowIndex:n,isFooter:r})=>[...i[1]||=[t(`span`,{style:{width:`100px`}},`Aloha`,-1)]]),_:1},8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var R=f(I,[[`render`,L]]);function z(){let e=i(()=>d({placeholder:`_A_TABLE_SIMPLE_`}));return{pageTitle:i(()=>`ATable ${e.value}`)}}var B={name:`PageTableSimple`,components:{AlohaPage:e,PageTableSimpleColumnsGroupedExample:v,PageTableSimpleExample:C,PageTableSimpleIsSimpleTableExample:O,PageTableSimpleIsStripedExample:N,PageTableSimpleMobileSlotsExample:R},setup(){let{pageTitle:e}=z();return{pageTitle:e}}};function V(e,t,i,a,l,u){let d=c(`page-table-simple-example`),f=c(`page-table-simple-is-simple-table-example`),p=c(`page-table-simple-is-striped-example`),m=c(`page-table-simple-columns-grouped-example`),h=c(`page-table-simple-mobile-slots-example`),g=c(`aloha-table-css-vars`),_=c(`aloha-page`);return s(),r(_,{"page-title":e.pageTitle},{body:o(()=>[n(d),n(f),n(p),n(m),n(h),n(g,{files:[`components/ATable`,`components/AResizer`]})]),_:1},8,[`page-title`])}var H=f(B,[[`render`,V]]);export{H as default};