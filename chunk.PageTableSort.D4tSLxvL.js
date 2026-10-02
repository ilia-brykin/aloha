import{Ct as e,Tt as t,Ut as n,Yt as r,kt as i,qt as a,wt as o,zt as s}from"./chunk.vendor.CZPox1kV.js";import{K as c,d as l,l as u,x as d}from"./chunk.vendor-lodash.BnpO4xCi.js";import{i as f,kt as p,t as m}from"./bundle.index.CLtYDDlb.js";import{n as h,t as g}from"./chunk.AlohaExample.BFgfeYtr.js";function _(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_DISABLED_LABEL_"
  key-id="id"
  :disabled-sort="true"
>
</a-table>`}}function v(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableSortDisabled",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
        sortId: "id",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
        sortId: "aloha",
      },
      {
        id: "column3",
        keyLabel: "number",
        label: "_A_TABLE_COLUMN_3_",
        sortId: "number",
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
      const COUNT = 5;
      const DATA = [];
      times(COUNT, item => {
        DATA.push({
          id: item + 1,
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
};`}}var y={name:`PageTableSortDisabled`,components:{AlohaExample:g,ATable:f},setup(){let{codeHtml:e}=_(),{codeJs:t}=v(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];u(5,t=>{e.push({id:t+1,aloha:`aloha ${t}`,number:5-t})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function b(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_DISABLED_HEADER_`,description:`_A_TABLE_GROUP_SORT_DISABLED_DESCRIPTION_`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_DISABLED_LABEL_`,"key-id":`id`,"disabled-sort":!0},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var x=m(y,[[`render`,b]]);function S(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_LABEL_"
  key-id="id"
>
</a-table>`}}function C(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableSortExample",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
        sortId: "id",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
        sortId: "aloha",
      },
      {
        id: "column3",
        keyLabel: "number",
        label: "_A_TABLE_COLUMN_3_",
        sortId: "number",
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
      const COUNT = 10;
      const DATA = [];
      times(COUNT, item => {
        DATA.push({
          id: item + 1,
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
};`}}var w={name:`PageTableSortExample`,components:{AlohaExample:g,ATable:f},setup(){let{codeHtml:e}=S(),{codeJs:t}=C(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_MULTI_ROWS_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];u(10,t=>{e.push({id:t+1,aloha:`aloha ${t}`,number:10-t})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function T(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_HEADER_`,description:`_A_TABLE_GROUP_SORT_DESCRIPTION_`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_LABEL_`,"key-id":`id`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var E=m(w,[[`render`,T]]);function D(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_MULTI_COLUMN_LABEL_"
  key-id="id"
  :is-sorting-multi-column="true"
  :model-sort="['-alohaPlus', 'aloha']"
>
</a-table>`}}function O(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableSortMultiColumn",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
        sortId: "id",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
        sortId: "aloha",
      },
      {
        id: "column3",
        keyLabel: "number",
        label: "_A_TABLE_COLUMN_3_",
        sortId: "number",
      },
      {
        id: "column4",
        keyLabel: "alohaPlus",
        label: "_A_TABLE_COLUMN_4_",
        sortId: "alohaPlus",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const COUNT = 5;
      const DATA = [];
      times(COUNT, item => {
        DATA.push({
          id: item + 1,
          aloha: \`aloha \${ item }\`,
          alohaPlus: \`aloha \${ item % 2 }\${ item % 2 }\`,
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
};`}}var k={name:`PageTableSortMultiColumn`,components:{AlohaExample:g,ATable:f},setup(){let{codeHtml:e}=D(),{codeJs:t}=O(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`alohaPlus`,label:`_A_TABLE_COLUMN_4_`,sortId:`alohaPlus`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];u(5,t=>{e.push({id:t+1,aloha:`aloha ${t}`,alohaPlus:`aloha ${t%2}${t%2}`,number:5-t})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function A(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_HEADER_`,description:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_DESCRIPTION_`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_LABEL_`,"key-id":`id`,"is-sorting-multi-column":!0,"model-sort":[`-alohaPlus`,`aloha`]},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var j=m(k,[[`render`,A]]);function M(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_MULTI_COLUMN_FIRST_NUMBER_LABEL_"
  key-id="id"
  :is-sorting-multi-column="true"
  model-sort="alohaPlus"
  :show-first-sorting-sequence-number="true"
>
</a-table>`}}function N(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableSortMultiColumnFirstNumber",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
        sortId: "id",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
        sortId: "aloha",
      },
      {
        id: "column3",
        keyLabel: "number",
        label: "_A_TABLE_COLUMN_3_",
        sortId: "number",
      },
      {
        id: "column4",
        keyLabel: "alohaPlus",
        label: "_A_TABLE_COLUMN_4_",
        sortId: "alohaPlus",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const COUNT = 5;
      const DATA = [];
      times(COUNT, item => {
        DATA.push({
          id: item + 1,
          aloha: \`aloha \${ item }\`,
          alohaPlus: \`aloha \${ item % 2 }\${ item % 2 }\`,
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
};`}}var P={name:`PageTableSortMultiColumnFirstNumber`,components:{AlohaExample:g,ATable:f},setup(){let{codeHtml:e}=M(),{codeJs:t}=N(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`alohaPlus`,label:`_A_TABLE_COLUMN_4_`,sortId:`alohaPlus`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];u(5,t=>{e.push({id:t+1,aloha:`aloha ${t}`,alohaPlus:`aloha ${t%2}${t%2}`,number:5-t})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function F(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_FIRST_NUMBER_HEADER_`,description:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_FIRST_NUMBER_DESCRIPTION_`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_FIRST_NUMBER_LABEL_`,"key-id":`id`,"is-sorting-multi-column":!0,"model-sort":`alohaPlus`,"show-first-sorting-sequence-number":!0},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var I=m(P,[[`render`,F]]);function L(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_SHIFT_LABEL_"
  key-id="id"
  :is-sorting-multi-column="true"
  sorting-multi-column-key="shift"
>
</a-table>
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_CTRL_LABEL_"
  key-id="id"
  :is-sorting-multi-column="true"
  sorting-multi-column-key="ctrl"
>
</a-table>
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_ALT_LABEL_"
  key-id="id"
  :is-sorting-multi-column="true"
  sorting-multi-column-key="alt"
>
</a-table>`}}function R(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableSortMultiColumnKey",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
        sortId: "id",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
        sortId: "aloha",
      },
      {
        id: "column3",
        keyLabel: "number",
        label: "_A_TABLE_COLUMN_3_",
        sortId: "number",
      },
      {
        id: "column4",
        keyLabel: "alohaPlus",
        label: "_A_TABLE_COLUMN_4_",
        sortId: "alohaPlus",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const COUNT = 5;
      const DATA = [];
      times(COUNT, item => {
        DATA.push({
          id: item + 1,
          aloha: \`aloha \${ item }\`,
          alohaPlus: \`aloha \${ item % 2 }\${ item % 2 }\`,
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
};`}}var ee={name:`PageTableSortMultiColumnKey`,components:{AlohaExample:g,ATable:f},setup(){let{codeHtml:e}=L(),{codeJs:t}=R(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`alohaPlus`,label:`_A_TABLE_COLUMN_4_`,sortId:`alohaPlus`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];u(5,t=>{e.push({id:t+1,aloha:`aloha ${t}`,alohaPlus:`aloha ${t%2}${t%2}`,number:5-t})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function z(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_HEADER_`,description:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_DESCRIPTION_`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_SHIFT_LABEL_`,"key-id":`id`,"is-sorting-multi-column":!0,"sorting-multi-column-key":`shift`},null,8,[`columns`,`data`]),i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_CTRL_LABEL_`,"key-id":`id`,"is-sorting-multi-column":!0,"sorting-multi-column-key":`ctrl`},null,8,[`columns`,`data`]),i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_ALT_LABEL_`,"key-id":`id`,"is-sorting-multi-column":!0,"sorting-multi-column-key":`alt`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var B=m(ee,[[`render`,z]]);function V(){return{codeHtml:`<a-table
  :columns="columns"
  :data="dataSorted"
  label="_A_TABLE_GROUP_SORT_OUTSIDE_LABEL_"
  key-id="id"
  :is-sorting-outside="true"
  :model-sort="modelSort"
  @change-sorting="changeSorting"
>
</a-table>`}}function H(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableSortOutside",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
        sortId: "id",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
        sortId: "aloha",
      },
      {
        id: "column3",
        keyLabel: "number",
        label: "_A_TABLE_COLUMN_3_",
        sortId: "number",
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
    const modelSort = ref(["id"]);

    const sortOptions = computed(() => {
      const OPTIONS = {
        models: [],
        directions: [],
      };
      if (modelSort.value.length) {
        forEach(modelSort.value, model => {
          let directionSort = "asc";
          let modelSortLocal = model;
          if (startsWith(model, "-")) {
            directionSort = "desc";
            modelSortLocal = model.slice(1);
          }
          OPTIONS.models.push(modelSortLocal);
          OPTIONS.directions.push(directionSort);
        });
      }
      return OPTIONS;
    });

    const dataSorted = computed(() => {
      if (modelSort.value.length) {
        return orderBy(data.value, sortOptions.value.models, sortOptions.value.directions);
      }
      return data.value;
    });

    const changeSorting = ({ modelSort: modelSortLocal }) => {
      modelSort.value = modelSortLocal;
    };

    const setData = () => {
      const COUNT = 10;
      const DATA = [];
      times(COUNT, item => {
        DATA.push({
          id: item + 1,
          aloha: \`aloha \${ item }\`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      changeSorting,
      columns,
      data,
      dataSorted,
      modelSort,
    };
  },
};`}}var U={name:`PageTableSortOutside`,components:{AlohaExample:g,ATable:f},setup(){let{codeHtml:t}=V(),{codeJs:n}=H(),i=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],a=r([]),o=r([`id`]),s=e(()=>{let e={models:[],directions:[]};return o.value.length&&c(o.value,t=>{let n=`asc`,r=t;l(t,`-`)&&(n=`desc`,r=t.slice(1)),e.models.push(r),e.directions.push(n)}),e}),f=e(()=>o.value.length?d(a.value,s.value.models,s.value.directions):a.value);return(()=>{let e=[];u(10,t=>{e.push({id:t+1,aloha:`aloha ${t}`,number:10-t})}),a.value=e})(),{changeSorting:({modelSort:e})=>{o.value=e},codeHtml:t,codeJs:n,columns:i,data:a,dataSorted:f,modelSort:o}}};function W(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_OUTSIDE_HEADER_`,description:`_A_TABLE_GROUP_SORT_OUTSIDE_DESCRIPTION_`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.dataSorted,label:`_A_TABLE_GROUP_SORT_OUTSIDE_LABEL_`,"key-id":`id`,"is-sorting-outside":!0,"model-sort":e.modelSort,onChangeSorting:e.changeSorting},null,8,[`columns`,`data`,`model-sort`,`onChangeSorting`])])]),_:1},8,[`code-html`,`code-js`])}var G=m(U,[[`render`,W]]);function K(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_LABEL_"
  key-id="id"
  :is-sorting-multi-column="true"
  :model-sort="['-alohaPlus', 'aloha']"
  sorting-sequence-number-class="a_badge a_pill_rounded"
>
</a-table>`}}function q(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableSortSequenceNumberClass",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
        sortId: "id",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
        sortId: "aloha",
      },
      {
        id: "column3",
        keyLabel: "number",
        label: "_A_TABLE_COLUMN_3_",
        sortId: "number",
      },
      {
        id: "column4",
        keyLabel: "alohaPlus",
        label: "_A_TABLE_COLUMN_4_",
        sortId: "alohaPlus",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const COUNT = 5;
      const DATA = [];
      times(COUNT, item => {
        DATA.push({
          id: item + 1,
          aloha: \`aloha \${ item }\`,
          alohaPlus: \`aloha \${ item % 2 }\${ item % 2 }\`,
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
};`}}var J={name:`PageTableSortSequenceNumberClass`,components:{AlohaExample:g,ATable:f},setup(){let{codeHtml:e}=K(),{codeJs:t}=q(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`alohaPlus`,label:`_A_TABLE_COLUMN_4_`,sortId:`alohaPlus`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];u(5,t=>{e.push({id:t+1,aloha:`aloha ${t}`,alohaPlus:`aloha ${t%2}${t%2}`,number:5-t})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function Y(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_HEADER_`,description:`_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_DESCRIPTION_`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_LABEL_`,"key-id":`id`,"is-sorting-multi-column":!0,"model-sort":[`-alohaPlus`,`aloha`],"sorting-sequence-number-class":`a_badge a_pill_rounded`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var X=m(J,[[`render`,Y]]);function Z(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_START_ASC_LABEL_"
  key-id="id"
  model-sort="number"
>
</a-table>
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_START_DESC_LABEL_"
  key-id="id"
  model-sort="-number"
>
</a-table>`}}function Q(){return{codeJs:`import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableSortStart",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
        sortId: "id",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
        sortId: "aloha",
      },
      {
        id: "column3",
        keyLabel: "number",
        label: "_A_TABLE_COLUMN_3_",
        sortId: "number",
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
      const COUNT = 10;
      const DATA = [];
      times(COUNT, item => {
        DATA.push({
          id: item + 1,
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
};`}}var $={name:`PageTableSortStart`,components:{AlohaExample:g,ATable:f},setup(){let{codeHtml:e}=Z(),{codeJs:t}=Q(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=r([]);return(()=>{let e=[];u(10,t=>{e.push({id:t+1,aloha:`aloha ${t}`,number:10-t})}),i.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:i}}};function te(e,r,c,l,u,d){let f=n(`a-table`),p=n(`aloha-example`);return s(),t(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_START_HEADER_`,description:`_A_TABLE_GROUP_SORT_START_DESCRIPTION_`},{default:a(()=>[o(`div`,null,[i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_START_ASC_LABEL_`,"key-id":`id`,"model-sort":`number`},null,8,[`columns`,`data`]),i(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_START_DESC_LABEL_`,"key-id":`id`,"model-sort":`-number`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var ne=m($,[[`render`,te]]);function re(){let t=e(()=>p({placeholder:`_A_TABLE_SORT_`}));return{pageTitle:e(()=>`ATable ${t.value}`)}}function ie(){return{dataTranslate:[`_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_`,`_A_COUNT_PER_PAGE_`,`_A_COUNT_PER_PAGE_ITEM_{{count}}_`,`_A_PAGINATION_NAVIGATION_`,`_A_PAGINATION_FIRST_PAGE_`,`_A_PAGINATION_PREVIOUS_PAGE_`,`_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_`,`_A_PAGINATION_TO_PAGE_{{page}}_`,`_A_PAGINATION_NEXT_PAGE_`,`_A_PAGINATION_LAST_PAGE_`]}}var ae={name:`PageTableSort`,components:{AlohaPage:h,PageTableSortDisabled:x,PageTableSortExample:E,PageTableSortMultiColumn:j,PageTableSortMultiColumnFirstNumber:I,PageTableSortMultiColumnKey:B,PageTableSortOutside:G,PageTableSortSequenceNumberClass:X,PageTableSortStart:ne},setup(){let{pageTitle:e}=re(),{dataTranslate:t}=ie();return{dataTranslate:t,pageTitle:e}}};function oe(e,r,o,c,l,u){let d=n(`page-table-sort-example`),f=n(`page-table-sort-start`),p=n(`page-table-sort-disabled`),m=n(`page-table-sort-multi-column`),h=n(`page-table-sort-multi-column-first-number`),g=n(`page-table-sort-multi-column-key`),_=n(`page-table-sort-sequence-number-class`),v=n(`page-table-sort-outside`),y=n(`aloha-page`);return s(),t(y,{"page-title":e.pageTitle},{body:a(()=>[i(d),i(f),i(p),i(m),i(h),i(g),i(_),i(v)]),_:1},8,[`page-title`])}var se=m(ae,[[`render`,oe]]);export{se as default};