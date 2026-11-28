import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{Bt as t,Ht as n,Vt as r,an as i,gn as a,ln as o,pn as s,qt as c}from"./chunk.vendor.SEynj6EJ.js";import{t as l}from"./chunk.AlohaExample.Bx3NX4bX.js";import{a as u,hn as d,t as f}from"./bundle.index.LlT2KVEy.js";import{$ as p,C as m,f as h,u as g}from"./chunk.vendor-lodash.BlbRpQpv.js";function _(){return{codeHtml:`<a-table
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
};`}}var y={name:`PageTableSortDisabled`,components:{AlohaExample:l,ATable:u},setup(){let{codeHtml:e}=_(),{codeJs:t}=v(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=a([]);return(()=>{let e=[];g(5,t=>{e.push({id:t+1,aloha:`aloha ${t}`,number:5-t})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function b(e,t,a,l,u,d){let f=o(`a-table`),p=o(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_DISABLED_HEADER_`,description:`_A_TABLE_GROUP_SORT_DISABLED_DESCRIPTION_`},{default:s(()=>[r(`div`,null,[c(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_DISABLED_LABEL_`,"key-id":`id`,"disabled-sort":!0},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var x=f(y,[[`render`,b]]);function S(){return{codeHtml:`<a-table
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
};`}}var w={name:`PageTableSortExample`,components:{AlohaExample:l,ATable:u},setup(){let{codeHtml:e}=S(),{codeJs:t}=C(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_MULTI_ROWS_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=a([]);return(()=>{let e=[];g(10,t=>{e.push({id:t+1,aloha:`aloha ${t}`,number:10-t})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function T(e,t,a,l,u,d){let f=o(`a-table`),p=o(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_HEADER_`,description:`_A_TABLE_GROUP_SORT_DESCRIPTION_`},{default:s(()=>[r(`div`,null,[c(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_LABEL_`,"key-id":`id`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var E=f(w,[[`render`,T]]);function D(){return{codeHtml:`<a-table
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
};`}}var k={name:`PageTableSortMultiColumn`,components:{AlohaExample:l,ATable:u},setup(){let{codeHtml:e}=D(),{codeJs:t}=O(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`alohaPlus`,label:`_A_TABLE_COLUMN_4_`,sortId:`alohaPlus`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=a([]);return(()=>{let e=[];g(5,t=>{e.push({id:t+1,aloha:`aloha ${t}`,alohaPlus:`aloha ${t%2}${t%2}`,number:5-t})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function A(e,t,a,l,u,d){let f=o(`a-table`),p=o(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_HEADER_`,description:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_DESCRIPTION_`},{default:s(()=>[r(`div`,null,[c(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_LABEL_`,"key-id":`id`,"is-sorting-multi-column":!0,"model-sort":[`-alohaPlus`,`aloha`]},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var j=f(k,[[`render`,A]]);function M(){return{codeHtml:`<a-table
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
};`}}var P={name:`PageTableSortMultiColumnFirstNumber`,components:{AlohaExample:l,ATable:u},setup(){let{codeHtml:e}=M(),{codeJs:t}=N(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`alohaPlus`,label:`_A_TABLE_COLUMN_4_`,sortId:`alohaPlus`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=a([]);return(()=>{let e=[];g(5,t=>{e.push({id:t+1,aloha:`aloha ${t}`,alohaPlus:`aloha ${t%2}${t%2}`,number:5-t})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function F(e,t,a,l,u,d){let f=o(`a-table`),p=o(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_FIRST_NUMBER_HEADER_`,description:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_FIRST_NUMBER_DESCRIPTION_`},{default:s(()=>[r(`div`,null,[c(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_FIRST_NUMBER_LABEL_`,"key-id":`id`,"is-sorting-multi-column":!0,"model-sort":`alohaPlus`,"show-first-sorting-sequence-number":!0},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var I=f(P,[[`render`,F]]);function L(){return{codeHtml:`<a-table
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
};`}}var z={name:`PageTableSortMultiColumnKey`,components:{AlohaExample:l,ATable:u},setup(){let{codeHtml:e}=L(),{codeJs:t}=R(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`alohaPlus`,label:`_A_TABLE_COLUMN_4_`,sortId:`alohaPlus`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=a([]);return(()=>{let e=[];g(5,t=>{e.push({id:t+1,aloha:`aloha ${t}`,alohaPlus:`aloha ${t%2}${t%2}`,number:5-t})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function B(e,t,a,l,u,d){let f=o(`a-table`),p=o(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_HEADER_`,description:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_DESCRIPTION_`},{default:s(()=>[r(`div`,null,[c(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_SHIFT_LABEL_`,"key-id":`id`,"is-sorting-multi-column":!0,"sorting-multi-column-key":`shift`},null,8,[`columns`,`data`]),c(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_CTRL_LABEL_`,"key-id":`id`,"is-sorting-multi-column":!0,"sorting-multi-column-key":`ctrl`},null,8,[`columns`,`data`]),c(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_ALT_LABEL_`,"key-id":`id`,"is-sorting-multi-column":!0,"sorting-multi-column-key":`alt`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var ee=f(z,[[`render`,B]]);function V(){return{codeHtml:`<a-table
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
};`}}var U={name:`PageTableSortOutside`,components:{AlohaExample:l,ATable:u},setup(){let{codeHtml:e}=V(),{codeJs:n}=H(),r=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],i=a([]),o=a([`id`]),s=t(()=>{let e={models:[],directions:[]};return o.value.length&&p(o.value,t=>{let n=`asc`,r=t;h(t,`-`)&&(n=`desc`,r=t.slice(1)),e.models.push(r),e.directions.push(n)}),e}),c=t(()=>o.value.length?m(i.value,s.value.models,s.value.directions):i.value);return(()=>{let e=[];g(10,t=>{e.push({id:t+1,aloha:`aloha ${t}`,number:10-t})}),i.value=e})(),{changeSorting:({modelSort:e})=>{o.value=e},codeHtml:e,codeJs:n,columns:r,data:i,dataSorted:c,modelSort:o}}};function W(e,t,a,l,u,d){let f=o(`a-table`),p=o(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_OUTSIDE_HEADER_`,description:`_A_TABLE_GROUP_SORT_OUTSIDE_DESCRIPTION_`},{default:s(()=>[r(`div`,null,[c(f,{columns:e.columns,data:e.dataSorted,label:`_A_TABLE_GROUP_SORT_OUTSIDE_LABEL_`,"key-id":`id`,"is-sorting-outside":!0,"model-sort":e.modelSort,onChangeSorting:e.changeSorting},null,8,[`columns`,`data`,`model-sort`,`onChangeSorting`])])]),_:1},8,[`code-html`,`code-js`])}var G=f(U,[[`render`,W]]);function K(){return{codeHtml:`<a-table
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
};`}}var J={name:`PageTableSortSequenceNumberClass`,components:{AlohaExample:l,ATable:u},setup(){let{codeHtml:e}=K(),{codeJs:t}=q(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`alohaPlus`,label:`_A_TABLE_COLUMN_4_`,sortId:`alohaPlus`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=a([]);return(()=>{let e=[];g(5,t=>{e.push({id:t+1,aloha:`aloha ${t}`,alohaPlus:`aloha ${t%2}${t%2}`,number:5-t})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function Y(e,t,a,l,u,d){let f=o(`a-table`),p=o(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_HEADER_`,description:`_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_DESCRIPTION_`},{default:s(()=>[r(`div`,null,[c(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_LABEL_`,"key-id":`id`,"is-sorting-multi-column":!0,"model-sort":[`-alohaPlus`,`aloha`],"sorting-sequence-number-class":`a_badge a_pill_rounded`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var X=f(J,[[`render`,Y]]);function Z(){return{codeHtml:`<a-table
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
};`}}var $={name:`PageTableSortStart`,components:{AlohaExample:l,ATable:u},setup(){let{codeHtml:e}=Z(),{codeJs:t}=Q(),n=[{id:`column1`,keyLabel:`id`,label:`_A_TABLE_COLUMN_1_`,sortId:`id`},{id:`column2`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_2_`,sortId:`aloha`},{id:`column3`,keyLabel:`number`,label:`_A_TABLE_COLUMN_3_`,sortId:`number`},{id:`column4`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_4_`},{id:`column5`,keyLabel:`aloha`,label:`_A_TABLE_COLUMN_5_`}],r=a([]);return(()=>{let e=[];g(10,t=>{e.push({id:t+1,aloha:`aloha ${t}`,number:10-t})}),r.value=e})(),{codeHtml:e,codeJs:t,columns:n,data:r}}};function te(e,t,a,l,u,d){let f=o(`a-table`),p=o(`aloha-example`);return i(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABLE_GROUP_SORT_START_HEADER_`,description:`_A_TABLE_GROUP_SORT_START_DESCRIPTION_`},{default:s(()=>[r(`div`,null,[c(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_START_ASC_LABEL_`,"key-id":`id`,"model-sort":`number`},null,8,[`columns`,`data`]),c(f,{columns:e.columns,data:e.data,label:`_A_TABLE_GROUP_SORT_START_DESC_LABEL_`,"key-id":`id`,"model-sort":`-number`},null,8,[`columns`,`data`])])]),_:1},8,[`code-html`,`code-js`])}var ne=f($,[[`render`,te]]);function re(){let e=t(()=>d({placeholder:`_A_TABLE_SORT_`}));return{pageTitle:t(()=>`ATable ${e.value}`)}}function ie(){return{dataTranslate:[`_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_`,`_A_COUNT_PER_PAGE_`,`_A_COUNT_PER_PAGE_ITEM_{{count}}_`,`_A_PAGINATION_NAVIGATION_`,`_A_PAGINATION_FIRST_PAGE_`,`_A_PAGINATION_PREVIOUS_PAGE_`,`_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_`,`_A_PAGINATION_TO_PAGE_{{page}}_`,`_A_PAGINATION_NEXT_PAGE_`,`_A_PAGINATION_LAST_PAGE_`]}}var ae={name:`PageTableSort`,components:{AlohaPage:e,PageTableSortDisabled:x,PageTableSortExample:E,PageTableSortMultiColumn:j,PageTableSortMultiColumnFirstNumber:I,PageTableSortMultiColumnKey:ee,PageTableSortOutside:G,PageTableSortSequenceNumberClass:X,PageTableSortStart:ne},setup(){let{pageTitle:e}=re(),{dataTranslate:t}=ie();return{dataTranslate:t,pageTitle:e}}};function oe(e,t,r,a,l,u){let d=o(`page-table-sort-example`),f=o(`page-table-sort-start`),p=o(`page-table-sort-disabled`),m=o(`page-table-sort-multi-column`),h=o(`page-table-sort-multi-column-first-number`),g=o(`page-table-sort-multi-column-key`),_=o(`page-table-sort-sequence-number-class`),v=o(`page-table-sort-outside`),y=o(`aloha-page`);return i(),n(y,{"page-title":e.pageTitle},{body:s(()=>[c(d),c(f),c(p),c(m),c(h),c(g),c(_),c(v)]),_:1},8,[`page-title`])}var se=f(ae,[[`render`,oe]]);export{se as default};