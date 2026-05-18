import{A as O,a as P}from"./chunk.AlohaExample.DQald-L_.js";import{ah as r,aM as I}from"./bundle.index.D1OA29U_.js";import{Z as h,p as M,N as R,X as y}from"./chunk.vendor-lodash.DHCI5OYQ.js";import{bf as u,bc as m,aQ as i,br as A,bi as _,aP as p,aV as c,aN as N}from"./chunk.vendor.B7xidcyX.js";import{c as E}from"./chunk.ATable.Cjx2y3oc.js";import"./chunk.APageTabTitle.BjEZe9gt.js";import"./chunk.AlohaHighlightjs.5M2Lhx9-.js";import"./chunk.translations-ar.ChuYlDzT.js";import"./chunk.translations-de.6pPcJRrO.js";import"./chunk.translations-en.DT3q5fLP.js";import"./chunk.translations-es.B6sZfxDK.js";import"./chunk.translations-fr.ecArFLfS.js";import"./chunk.translations-hr.DhAqHXEL.js";import"./chunk.translations-it.DjP2RsZa.js";import"./chunk.translations-ru.L_V4Dr6V.js";function k(){return{codeHtml:`<a-table
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
};`}}const g={name:"PageTableSortDisabled",components:{AlohaExample:O,ATable:E},setup(){const{codeHtml:a}=k(),{codeJs:t}=f(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]);return(()=>{const o=[];h(5,e=>{o.push({id:e+1,aloha:`aloha ${e}`,number:5-e})}),l.value=o})(),{codeHtml:a,codeJs:t,columns:n,data:l}}};function $(a,t,n,l,s,d){const o=_("a-table"),e=_("aloha-example");return m(),i(e,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_SORT_DISABLED_HEADER_",description:"_A_TABLE_GROUP_SORT_DISABLED_DESCRIPTION_"},{default:A(()=>[p("div",null,[c(o,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_SORT_DISABLED_LABEL_","key-id":"id","disabled-sort":!0},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const D=r(g,[["render",$]]);function v(){return{codeHtml:`<a-table
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
};`}}const H={name:"PageTableSortExample",components:{AlohaExample:O,ATable:E},setup(){const{codeHtml:a}=v(),{codeJs:t}=G(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_MULTI_ROWS_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]);return(()=>{const o=[];h(10,e=>{o.push({id:e+1,aloha:`aloha ${e}`,number:10-e})}),l.value=o})(),{codeHtml:a,codeJs:t,columns:n,data:l}}};function J(a,t,n,l,s,d){const o=_("a-table"),e=_("aloha-example");return m(),i(e,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_SORT_HEADER_",description:"_A_TABLE_GROUP_SORT_DESCRIPTION_"},{default:A(()=>[p("div",null,[c(o,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_SORT_LABEL_","key-id":"id"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const j=r(H,[["render",J]]);function K(){return{codeHtml:`<a-table
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
};`}}const q={name:"PageTableSortMultiColumn",components:{AlohaExample:O,ATable:E},setup(){const{codeHtml:a}=K(),{codeJs:t}=F(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"alohaPlus",label:"_A_TABLE_COLUMN_4_",sortId:"alohaPlus"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]);return(()=>{const o=[];h(5,e=>{o.push({id:e+1,aloha:`aloha ${e}`,alohaPlus:`aloha ${e%2}${e%2}`,number:5-e})}),l.value=o})(),{codeHtml:a,codeJs:t,columns:n,data:l}}};function Y(a,t,n,l,s,d){const o=_("a-table"),e=_("aloha-example");return m(),i(e,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_HEADER_",description:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_DESCRIPTION_"},{default:A(()=>[p("div",null,[c(o,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_LABEL_","key-id":"id","is-sorting-multi-column":!0,"model-sort":["-alohaPlus","aloha"]},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const Q=r(q,[["render",Y]]);function V(){return{codeHtml:`<a-table
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
};`}}const W={name:"PageTableSortMultiColumnFirstNumber",components:{AlohaExample:O,ATable:E},setup(){const{codeHtml:a}=V(),{codeJs:t}=w(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"alohaPlus",label:"_A_TABLE_COLUMN_4_",sortId:"alohaPlus"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]);return(()=>{const o=[];h(5,e=>{o.push({id:e+1,aloha:`aloha ${e}`,alohaPlus:`aloha ${e%2}${e%2}`,number:5-e})}),l.value=o})(),{codeHtml:a,codeJs:t,columns:n,data:l}}};function x(a,t,n,l,s,d){const o=_("a-table"),e=_("aloha-example");return m(),i(e,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_FIRST_NUMBER_HEADER_",description:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_FIRST_NUMBER_DESCRIPTION_"},{default:A(()=>[p("div",null,[c(o,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_FIRST_NUMBER_LABEL_","key-id":"id","is-sorting-multi-column":!0,"model-sort":"alohaPlus","show-first-sorting-sequence-number":!0},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const X=r(W,[["render",x]]);function Z(){return{codeHtml:`<a-table
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
</a-table>`}}function z(){return{codeJs:`import {
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
};`}}const aa={name:"PageTableSortMultiColumnKey",components:{AlohaExample:O,ATable:E},setup(){const{codeHtml:a}=Z(),{codeJs:t}=z(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"alohaPlus",label:"_A_TABLE_COLUMN_4_",sortId:"alohaPlus"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]);return(()=>{const o=[];h(5,e=>{o.push({id:e+1,aloha:`aloha ${e}`,alohaPlus:`aloha ${e%2}${e%2}`,number:5-e})}),l.value=o})(),{codeHtml:a,codeJs:t,columns:n,data:l}}};function ea(a,t,n,l,s,d){const o=_("a-table"),e=_("aloha-example");return m(),i(e,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_HEADER_",description:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_DESCRIPTION_"},{default:A(()=>[p("div",null,[c(o,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_SHIFT_LABEL_","key-id":"id","is-sorting-multi-column":!0,"sorting-multi-column-key":"shift"},null,8,["columns","data"]),c(o,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_CTRL_LABEL_","key-id":"id","is-sorting-multi-column":!0,"sorting-multi-column-key":"ctrl"},null,8,["columns","data"]),c(o,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_ALT_LABEL_","key-id":"id","is-sorting-multi-column":!0,"sorting-multi-column-key":"alt"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const oa=r(aa,[["render",ea]]);function la(){return{codeHtml:`<a-table
  :columns="columns"
  :data="dataSorted"
  label="_A_TABLE_GROUP_SORT_OUTSIDE_LABEL_"
  key-id="id"
  :is-sorting-outside="true"
  :model-sort="modelSort"
  @change-sorting="changeSorting"
>
</a-table>`}}function ta(){return{codeJs:`import {
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
};`}}const _a={name:"PageTableSortOutside",components:{AlohaExample:O,ATable:E},setup(){const{codeHtml:a}=la(),{codeJs:t}=ta(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]),s=u(["id"]),d=N(()=>{const L={models:[],directions:[]};return s.value.length&&M(s.value,T=>{let b="asc",U=T;y(T,"-")&&(b="desc",U=T.slice(1)),L.models.push(U),L.directions.push(b)}),L}),o=N(()=>s.value.length?R(l.value,d.value.models,d.value.directions):l.value),e=({modelSort:L})=>{s.value=L};return(()=>{const T=[];h(10,b=>{T.push({id:b+1,aloha:`aloha ${b}`,number:10-b})}),l.value=T})(),{changeSorting:e,codeHtml:a,codeJs:t,columns:n,data:l,dataSorted:o,modelSort:s}}};function na(a,t,n,l,s,d){const o=_("a-table"),e=_("aloha-example");return m(),i(e,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_SORT_OUTSIDE_HEADER_",description:"_A_TABLE_GROUP_SORT_OUTSIDE_DESCRIPTION_"},{default:A(()=>[p("div",null,[c(o,{columns:a.columns,data:a.dataSorted,label:"_A_TABLE_GROUP_SORT_OUTSIDE_LABEL_","key-id":"id","is-sorting-outside":!0,"model-sort":a.modelSort,onChangeSorting:a.changeSorting},null,8,["columns","data","model-sort","onChangeSorting"])])]),_:1},8,["code-html","code-js"])}const sa=r(_a,[["render",na]]);function ca(){return{codeHtml:`<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_LABEL_"
  key-id="id"
  :is-sorting-multi-column="true"
  :model-sort="['-alohaPlus', 'aloha']"
  sorting-sequence-number-class="a_badge a_pill_rounded"
>
</a-table>`}}function da(){return{codeJs:`import {
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
};`}}const ua={name:"PageTableSortSequenceNumberClass",components:{AlohaExample:O,ATable:E},setup(){const{codeHtml:a}=ca(),{codeJs:t}=da(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"alohaPlus",label:"_A_TABLE_COLUMN_4_",sortId:"alohaPlus"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]);return(()=>{const o=[];h(5,e=>{o.push({id:e+1,aloha:`aloha ${e}`,alohaPlus:`aloha ${e%2}${e%2}`,number:5-e})}),l.value=o})(),{codeHtml:a,codeJs:t,columns:n,data:l}}};function ra(a,t,n,l,s,d){const o=_("a-table"),e=_("aloha-example");return m(),i(e,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_HEADER_",description:"_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_DESCRIPTION_"},{default:A(()=>[p("div",null,[c(o,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_SORT_SEQUENCE_NUMBER_CLASS_LABEL_","key-id":"id","is-sorting-multi-column":!0,"model-sort":["-alohaPlus","aloha"],"sorting-sequence-number-class":"a_badge a_pill_rounded"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const ma=r(ua,[["render",ra]]);function ia(){return{codeHtml:`<a-table
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
</a-table>`}}function Aa(){return{codeJs:`import {
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
};`}}const La={name:"PageTableSortStart",components:{AlohaExample:O,ATable:E},setup(){const{codeHtml:a}=ia(),{codeJs:t}=Aa(),n=[{id:"column1",keyLabel:"id",label:"_A_TABLE_COLUMN_1_",sortId:"id"},{id:"column2",keyLabel:"aloha",label:"_A_TABLE_COLUMN_2_",sortId:"aloha"},{id:"column3",keyLabel:"number",label:"_A_TABLE_COLUMN_3_",sortId:"number"},{id:"column4",keyLabel:"aloha",label:"_A_TABLE_COLUMN_4_"},{id:"column5",keyLabel:"aloha",label:"_A_TABLE_COLUMN_5_"}],l=u([]);return(()=>{const o=[];h(10,e=>{o.push({id:e+1,aloha:`aloha ${e}`,number:10-e})}),l.value=o})(),{codeHtml:a,codeJs:t,columns:n,data:l}}};function Ta(a,t,n,l,s,d){const o=_("a-table"),e=_("aloha-example");return m(),i(e,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_TABLE_GROUP_SORT_START_HEADER_",description:"_A_TABLE_GROUP_SORT_START_DESCRIPTION_"},{default:A(()=>[p("div",null,[c(o,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_SORT_START_ASC_LABEL_","key-id":"id","model-sort":"number"},null,8,["columns","data"]),c(o,{columns:a.columns,data:a.data,label:"_A_TABLE_GROUP_SORT_START_DESC_LABEL_","key-id":"id","model-sort":"-number"},null,8,["columns","data"])])]),_:1},8,["code-html","code-js"])}const ba=r(La,[["render",Ta]]);function Oa(){const a=N(()=>I({placeholder:"_A_TABLE_SORT_"}));return{pageTitle:N(()=>`ATable ${a.value}`)}}function ha(){return{dataTranslate:["_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_","_A_COUNT_PER_PAGE_","_A_COUNT_PER_PAGE_ITEM_{{count}}_","_A_PAGINATION_NAVIGATION_","_A_PAGINATION_FIRST_PAGE_","_A_PAGINATION_PREVIOUS_PAGE_","_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_","_A_PAGINATION_TO_PAGE_{{page}}_","_A_PAGINATION_NEXT_PAGE_","_A_PAGINATION_LAST_PAGE_"]}}const pa={name:"PageTableSort",components:{AlohaPage:P,PageTableSortDisabled:D,PageTableSortExample:j,PageTableSortMultiColumn:Q,PageTableSortMultiColumnFirstNumber:X,PageTableSortMultiColumnKey:oa,PageTableSortOutside:sa,PageTableSortSequenceNumberClass:ma,PageTableSortStart:ba},setup(){const{pageTitle:a}=Oa(),{dataTranslate:t}=ha();return{dataTranslate:t,pageTitle:a}}};function Ea(a,t,n,l,s,d){const o=_("page-table-sort-example"),e=_("page-table-sort-start"),C=_("page-table-sort-disabled"),L=_("page-table-sort-multi-column"),T=_("page-table-sort-multi-column-first-number"),b=_("page-table-sort-multi-column-key"),U=_("page-table-sort-sequence-number-class"),B=_("page-table-sort-outside"),S=_("aloha-page");return m(),i(S,{"page-title":a.pageTitle},{body:A(()=>[c(o),c(e),c(C),c(L),c(T),c(b),c(U),c(B)]),_:1},8,["page-title"])}const va=r(pa,[["render",Ea]]);export{va as default};
