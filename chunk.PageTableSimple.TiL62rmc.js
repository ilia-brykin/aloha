import{t as e}from"./chunk.AlohaPage.CtPiWSGW.js";import{$t as t,Dt as n,Et as r,Mt as i,Ot as a,Ut as o,Zt as s,qt as c}from"./chunk.vendor.BLRpG40B.js";import{t as l}from"./chunk.AlohaExample.Bs_TZ3nZ.js";import{jt as u,r as d}from"./bundle.index.Dik8P8_q.js";import{c as f}from"./chunk.vendor-lodash.Coco6wWJ.js";import{t as p}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function m(){return{codeHtml:`<a-table
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
};`}}var g={name:`PageTableSimpleColumnsGroupedExample`,components:{AlohaExample:l,ATable:d},setup(){let{codeHtml:e}=m(),{codeJs:n}=h(),r=[{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_7_`},{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,group:[`Group 1`,`Group 1.3`],width:500},{id:`column6`,keyLabel:`id`,label:`_A_TABLE_COLUMN_2_`,group:[`Group 1`,`Group 1.1`,`Group 1.1.1`]},{id:`column7`,keyLabel:`id`,label:`_A_TABLE_COLUMN_3_`,group:[`Group 1.1`,`Group 1.1.2`,`Group 1`]},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`,group:[`Group 1`,`Group 1.2`]},{id:`column9`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_7_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`,group:[`Group 2`,`Group 2.1`]},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_6_`,group:[`_A_TABLE_COLUMN_6_`,`Group 2.2`]},{id:`column6`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_8_`}],i=t([]);return(()=>{let e=[];f(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:n,columnsGrouped:r,data:i}}};function _(e,t,r,l,u,d){let f=c(`a-table`),p=c(`aloha-example`);return o(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_DESCRIPTION_`,props:[`is-simple-table`,`has-mobile`]},{default:s(()=>[n(`div`,null,[i(f,{columns:e.columnsGrouped,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_COLUMNS_GROUPED_LABEL_`,"key-id":`id`,"is-simple-table":!0,"has-mobile":!1},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var v=p(g,[[`render`,_]]);function y(){return{codeHtml:`<a-table
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
};`}}var x={name:`PageTableSimpleExample`,components:{AlohaExample:l,ATable:d},setup(){let{codeHtml:e}=y(),{codeJs:n}=b(),r=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=t([]);return(()=>{let e=[];f(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:n,columns:r,data:i}}};function S(e,t,r,l,u,d){let f=c(`a-table`),p=c(`aloha-example`);return o(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_DESCRIPTION_`},{default:s(()=>[n(`div`,null,[i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SIMPLE_LABEL_`,"key-id":`id`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var C=p(x,[[`render`,S]]);function w(){return{codeHtml:`<a-table
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
};`}}var E={name:`PageTableSimpleIsSimpleTableExample`,components:{AlohaExample:l,ATable:d},setup(){let{codeHtml:e}=w(),{codeJs:n}=T(),r=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=t([]);return(()=>{let e=[];f(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:n,columns:r,data:i}}};function D(e,t,r,l,u,d){let f=c(`a-table`),p=c(`aloha-example`);return o(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_DESCRIPTION_`,props:`is-simple-table`},{default:s(()=>[n(`div`,null,[i(f,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":`id`,label:`_A_TABLE_GROUP_SIMPLE_IS_SIMPLE_TABLE_LABEL_`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var O=p(E,[[`render`,D]]);function k(){return{codeHtml:`<a-table
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
};`}}var j={name:`PageTableSimpleMobileSlotsExample`,components:{AlohaExample:l,ATable:d},setup(){let{codeHtml:e}=k(),{codeJs:n}=A(),r=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`},{id:`column3`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_3_`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=t([]);return(()=>{let e=[];f(20,t=>{e.push({id:t,aloha:`aloha ${t}`})}),i.value=e})(),{codeHtml:e,codeJs:n,columns:r,data:i}}};function M(e,t,r,l,u,d){let f=c(`a-table`),p=c(`aloha-example`);return o(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_HEADER_`,description:`_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_DESCRIPTION_`,props:`is-simple-table`,slots:[`rowMobilePrepend`,`rowMobileAppend`]},{default:s(()=>[n(`div`,null,[i(f,{columns:e.columns,data:e.data,"is-simple-table":!0,"key-id":`id`,label:`_A_TABLE_GROUP_SIMPLE_MOBILE_SLOTS_LABEL_`},{rowMobilePrepend:s(({row:e,rowIndex:r,isFooter:i})=>[...t[0]||=[n(`span`,{style:{width:`100px`}},`Aloha`,-1)]]),rowMobileAppend:s(({row:e,rowIndex:r,isFooter:i})=>[...t[1]||=[n(`span`,{style:{width:`100px`}},`Aloha`,-1)]]),_:1},8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var N=p(j,[[`render`,M]]);function P(){let e=r(()=>u({placeholder:`_A_TABLE_SIMPLE_`}));return{pageTitle:r(()=>`ATable ${e.value}`)}}var F={name:`PageTableSimple`,components:{AlohaPage:e,PageTableSimpleColumnsGroupedExample:v,PageTableSimpleExample:C,PageTableSimpleIsSimpleTableExample:O,PageTableSimpleMobileSlotsExample:N},setup(){let{pageTitle:e}=P();return{pageTitle:e}}};function I(e,t,n,r,l,u){let d=c(`page-table-simple-example`),f=c(`page-table-simple-is-simple-table-example`),p=c(`page-table-simple-columns-grouped-example`),m=c(`page-table-simple-mobile-slots-example`),h=c(`aloha-table-css-vars`),g=c(`aloha-page`);return o(),a(g,{"page-title":e.pageTitle},{body:s(()=>[i(d),i(f),i(p),i(m),i(h,{files:[`components/ATable`,`components/AResizer`]})]),_:1},8,[`page-title`])}var L=p(F,[[`render`,I]]);export{L as default};