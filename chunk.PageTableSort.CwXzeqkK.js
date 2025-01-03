import{A as O,a as P}from"./chunk.AlohaExample.BcPB8Qry.js";import{A as h}from"./chunk.ATable.Dm0jLwEE.js";import{R as p,f as I,s as M,M as R}from"./chunk.vendor-lodash.BzDRedSD.js";import{r as u,k as _,Q as r,aQ as m,O as i,U as E,V as c,a as N}from"./chunk.vendor.C_nZR3i9.js";import{_ as A,g as y}from"./bundle.index.q0oygsl8.js";import"./chunk.APageTabTitle.YhYn5T6u.js";import"./chunk.AlohaHighlightjs.zzXDUp_j.js";import"./chunk.translations-ar.CGL8aVo9.js";import"./chunk.translations-de.RdwLQ5AB.js";import"./chunk.translations-en.DDBINhYl.js";import"./chunk.translations-es.Db8DPcgi.js";import"./chunk.translations-fr.Bj0H1VLd.js";import"./chunk.translations-hr.D6Hyl4N8.js";import"./chunk.translations-it.BR5rbHtH.js";import"./chunk.translations-ru.BkDZ_0rg.js";function k(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_DISABLED_LABEL_"
  key-id="id"
  :disabled-sort="true"
>
</a-table>`}}function f(){return{codeJs:`import {
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
};`}}const g={name:"PageTableSortDisabled",components:{AlohaExample:O,ATable:h},setup(){const{codeHtml:e}=k(),{codeJs:t}=f(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]);return(()=>{const o=[];p(5,a=>{o.push({id:a+1,aloha:`aloha ${a}`,number:5-a})}),l.value=o})(),{codeHtml:e,codeJs:t,columns:n,data:l}}};function $(e,t,n,l,s,d){const o=_("a-table"),a=_("aloha-example");return i(),r(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SORT_DISABLED_HEADER_",description:"_A_TABLE_GROUP_SORT_DISABLED_DESCRIPTION_"},{default:m(()=>[E("div",null,[c(o,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SORT_DISABLED_LABEL_","key-id":"id","disabled-sort":!0},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const D=A(g,[["render",$]]);function v(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_LABEL_"
  key-id="id"
>
</a-table>`}}function G(){return{codeJs:`import {
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
};`}}const H={name:"PageTableSortExample",components:{AlohaExample:O,ATable:h},setup(){const{codeHtml:e}=v(),{codeJs:t}=G(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_MULTI_ROWS_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]);return(()=>{const o=[];p(10,a=>{o.push({id:a+1,aloha:`aloha ${a}`,number:10-a})}),l.value=o})(),{codeHtml:e,codeJs:t,columns:n,data:l}}};function J(e,t,n,l,s,d){const o=_("a-table"),a=_("aloha-example");return i(),r(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SORT_HEADER_",description:"_A_TABLE_GROUP_SORT_DESCRIPTION_"},{default:m(()=>[E("div",null,[c(o,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SORT_LABEL_","key-id":"id"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const j=A(H,[["render",J]]);function K(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_MULTI_COLUMN_LABEL_"
  key-id="id"
  :is-sorting-multi-column="true"
  :model-sort="['-alohaPlus', 'aloha']"
>
</a-table>`}}function F(){return{codeJs:`import {
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
};`}}const q={name:"PageTableSortMultiColumn",components:{AlohaExample:O,ATable:h},setup(){const{codeHtml:e}=K(),{codeJs:t}=F(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"alohaPlus",label:"_A_TABLE_COLUMN_4_",sortId:"alohaPlus"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]);return(()=>{const o=[];p(5,a=>{o.push({id:a+1,aloha:`aloha ${a}`,alohaPlus:`aloha ${a%2}${a%2}`,number:5-a})}),l.value=o})(),{codeHtml:e,codeJs:t,columns:n,data:l}}};function Y(e,t,n,l,s,d){const o=_("a-table"),a=_("aloha-example");return i(),r(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_HEADER_",description:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_DESCRIPTION_"},{default:m(()=>[E("div",null,[c(o,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_LABEL_","key-id":"id","is-sorting-multi-column":!0,"model-sort":["-alohaPlus","aloha"]},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const Q=A(q,[["render",Y]]);function V(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_MULTI_COLUMN_FIRST_NUMBER_LABEL_"
  key-id="id"
  :is-sorting-multi-column="true"
  model-sort="alohaPlus"
  :show-first-sorting-sequence-number="true"
>
</a-table>`}}function w(){return{codeJs:`import {
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
};`}}const W={name:"PageTableSortMultiColumnFirstNumber",components:{AlohaExample:O,ATable:h},setup(){const{codeHtml:e}=V(),{codeJs:t}=w(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"alohaPlus",label:"_A_TABLE_COLUMN_4_",sortId:"alohaPlus"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]);return(()=>{const o=[];p(5,a=>{o.push({id:a+1,aloha:`aloha ${a}`,alohaPlus:`aloha ${a%2}${a%2}`,number:5-a})}),l.value=o})(),{codeHtml:e,codeJs:t,columns:n,data:l}}};function x(e,t,n,l,s,d){const o=_("a-table"),a=_("aloha-example");return i(),r(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_FIRST_NUMBER_HEADER_",description:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_FIRST_NUMBER_DESCRIPTION_"},{default:m(()=>[E("div",null,[c(o,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_FIRST_NUMBER_LABEL_","key-id":"id","is-sorting-multi-column":!0,"model-sort":"alohaPlus","show-first-sorting-sequence-number":!0},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const X=A(W,[["render",x]]);function z(){return{codeHtml:`<a-table
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
</a-table>`}}function Z(){return{codeJs:`import {
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
};`}}const ee={name:"PageTableSortMultiColumnKey",components:{AlohaExample:O,ATable:h},setup(){const{codeHtml:e}=z(),{codeJs:t}=Z(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"alohaPlus",label:"_A_TABLE_COLUMN_4_",sortId:"alohaPlus"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]);return(()=>{const o=[];p(5,a=>{o.push({id:a+1,aloha:`aloha ${a}`,alohaPlus:`aloha ${a%2}${a%2}`,number:5-a})}),l.value=o})(),{codeHtml:e,codeJs:t,columns:n,data:l}}};function ae(e,t,n,l,s,d){const o=_("a-table"),a=_("aloha-example");return i(),r(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_HEADER_",description:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_DESCRIPTION_"},{default:m(()=>[E("div",null,[c(o,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_SHIFT_LABEL_","key-id":"id","is-sorting-multi-column":!0,"sorting-multi-column-key":"shift"},null,8,["columns","data"]),c(o,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_CTRL_LABEL_","key-id":"id","is-sorting-multi-column":!0,"sorting-multi-column-key":"ctrl"},null,8,["columns","data"]),c(o,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_ALT_LABEL_","key-id":"id","is-sorting-multi-column":!0,"sorting-multi-column-key":"alt"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const oe=A(ee,[["render",ae]]);function le(){return{codeHtml:`<a-table
  :columns="columns"
  :data="dataSorted"
  label="_A_TABLE_GROUP_SORT_OUTSIDE_LABEL_"
  key-id="id"
  :is-sorting-outside="true"
  :model-sort="modelSort"
  @change-sorting="changeSorting"
>
</a-table>`}}function te(){return{codeJs:`import {
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
};`}}const _e={name:"PageTableSortOutside",components:{AlohaExample:O,ATable:h},setup(){const{codeHtml:e}=le(),{codeJs:t}=te(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]),s=u(["id"]),d=N(()=>{const L={models:[],directions:[]};return s.value.length&&I(s.value,T=>{let b="asc",U=T;M(T,"-")&&(b="desc",U=T.slice(1)),L.models.push(U),L.directions.push(b)}),L}),o=N(()=>s.value.length?R(l.value,d.value.models,d.value.directions):l.value),a=({modelSort:L})=>{s.value=L};return(()=>{const T=[];p(10,b=>{T.push({id:b+1,aloha:`aloha ${b}`,number:10-b})}),l.value=T})(),{changeSorting:a,codeHtml:e,codeJs:t,columns:n,data:l,dataSorted:o,modelSort:s}}};function ne(e,t,n,l,s,d){const o=_("a-table"),a=_("aloha-example");return i(),r(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SORT_OUTSIDE_HEADER_",description:"_A_TABLE_GROUP_SORT_OUTSIDE_DESCRIPTION_"},{default:m(()=>[E("div",null,[c(o,{columns:e.columns,data:e.dataSorted,label:"_A_TABLE_GROUP_SORT_OUTSIDE_LABEL_","key-id":"id","is-sorting-outside":!0,"model-sort":e.modelSort,onChangeSorting:e.changeSorting},null,8,["columns","data","model-sort","onChangeSorting"])])]),_:1},8,["code-html","code-js"])}const se=A(_e,[["render",ne]]);function ce(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_LABEL_"
  key-id="id"
  :is-sorting-multi-column="true"
  :model-sort="['-alohaPlus', 'aloha']"
  sorting-sequence-number-class="a_badge a_pill_rounded"
>
</a-table>`}}function de(){return{codeJs:`import {
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
};`}}const ue={name:"PageTableSortSequenceNumberClass",components:{AlohaExample:O,ATable:h},setup(){const{codeHtml:e}=ce(),{codeJs:t}=de(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"alohaPlus",label:"_A_TABLE_COLUMN_4_",sortId:"alohaPlus"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]);return(()=>{const o=[];p(5,a=>{o.push({id:a+1,aloha:`aloha ${a}`,alohaPlus:`aloha ${a%2}${a%2}`,number:5-a})}),l.value=o})(),{codeHtml:e,codeJs:t,columns:n,data:l}}};function re(e,t,n,l,s,d){const o=_("a-table"),a=_("aloha-example");return i(),r(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_HEADER_",description:"_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_DESCRIPTION_"},{default:m(()=>[E("div",null,[c(o,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_LABEL_","key-id":"id","is-sorting-multi-column":!0,"model-sort":["-alohaPlus","aloha"],"sorting-sequence-number-class":"a_badge a_pill_rounded"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const me=A(ue,[["render",re]]);function ie(){return{codeHtml:`<a-table
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
</a-table>`}}function Ae(){return{codeJs:`import {
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
};`}}const Le={name:"PageTableSortStart",components:{AlohaExample:O,ATable:h},setup(){const{codeHtml:e}=ie(),{codeJs:t}=Ae(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]);return(()=>{const o=[];p(10,a=>{o.push({id:a+1,aloha:`aloha ${a}`,number:10-a})}),l.value=o})(),{codeHtml:e,codeJs:t,columns:n,data:l}}};function Te(e,t,n,l,s,d){const o=_("a-table"),a=_("aloha-example");return i(),r(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_TABLE_GROUP_SORT_START_HEADER_",description:"_A_TABLE_GROUP_SORT_START_DESCRIPTION_"},{default:m(()=>[E("div",null,[c(o,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SORT_START_ASC_LABEL_","key-id":"id","model-sort":"number"},null,8,["columns","data"]),c(o,{columns:e.columns,data:e.data,label:"_A_TABLE_GROUP_SORT_START_DESC_LABEL_","key-id":"id","model-sort":"-number"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const be=A(Le,[["render",Te]]);function Oe(){const e=N(()=>y({placeholder:"_A_TABLE_SORT_"}));return{pageTitle:N(()=>`ATable ${e.value}`)}}function he(){return{dataTranslate:["_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_","_A_COUNT_PER_PAGE_","_A_COUNT_PER_PAGE_ITEM_{{count}}_","_A_PAGINATION_NAVIGATION_","_A_PAGINATION_FIRST_PAGE_","_A_PAGINATION_PREVIOUS_PAGE_","_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_","_A_PAGINATION_TO_PAGE_{{page}}_","_A_PAGINATION_NEXT_PAGE_","_A_PAGINATION_LAST_PAGE_"]}}const pe={name:"PageTableSort",components:{AlohaPage:P,PageTableSortDisabled:D,PageTableSortExample:j,PageTableSortMultiColumn:Q,PageTableSortMultiColumnFirstNumber:X,PageTableSortMultiColumnKey:oe,PageTableSortOutside:se,PageTableSortSequenceNumberClass:me,PageTableSortStart:be},setup(){const{pageTitle:e}=Oe(),{dataTranslate:t}=he();return{dataTranslate:t,pageTitle:e}}};function Ee(e,t,n,l,s,d){const o=_("page-table-sort-example"),a=_("page-table-sort-start"),C=_("page-table-sort-disabled"),L=_("page-table-sort-multi-column"),T=_("page-table-sort-multi-column-first-number"),b=_("page-table-sort-multi-column-key"),U=_("page-table-sort-sequence-number-class"),B=_("page-table-sort-outside"),S=_("aloha-page");return i(),r(S,{"page-title":e.pageTitle},{body:m(()=>[c(o),c(a),c(C),c(L),c(T),c(b),c(U),c(B)]),_:1},8,["page-title"])}const ve=A(pe,[["render",Ee]]);export{ve as default};
