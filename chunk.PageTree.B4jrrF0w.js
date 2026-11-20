import{t as e}from"./chunk.AlohaPage.BqJxHLnf.js";import{t}from"./chunk.AlohaTableProps.CD1A8m99.js";import{t as n}from"./chunk.AlohaTableTranslate.DkpTtIt0.js";import{$t as r,Ft as i,It as a,Lt as ee,Pt as o,Rt as s,Vt as c,hn as l,ln as u,rn as d,sn as f}from"./chunk.vendor.BvryzG0o.js";import{t as p}from"./chunk.AlohaExample.MiYgZhxO.js";import{$t as m,Jt as h,et as g,n as _,qt as v}from"./bundle.index.nBnUcnwG.js";import{t as y}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function b(){return{codeHtml:`<a-tree
  v-model:selected="selected"
  :data="data"
  aria-label="Company structure"
></a-tree>
<div>selected: {{ selected }}</div>`}}function x(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeBasic",
  components: {
    ATree,
  },
  setup() {
    const data = [
      {
        id: "management",
        label: "Management",
      },
      {
        id: "it",
        label: "IT",
        children: [
          {
            id: "development",
            label: "Development",
            children: [
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "qa", label: "Quality assurance" },
            ],
          },
          { id: "support", label: "Support" },
          { id: "security", label: "Security", disabled: true },
        ],
      },
      {
        id: "sales",
        label: "Sales",
        children: [
          { id: "sales_europe", label: "Europe" },
          { id: "sales_asia", label: "Asia" },
        ],
      },
    ];

    const selected = ref(undefined);

    return {
      data,
      selected,
    };
  },
};`}}var S={name:`PageTreeBasic`,components:{AlohaExample:p,ATree:_},setup(){let e=[{id:`management`,label:`Management`},{id:`it`,label:`IT`,children:[{id:`development`,label:`Development`,children:[{id:`frontend`,label:`Frontend`},{id:`backend`,label:`Backend`},{id:`qa`,label:`Quality assurance`}]},{id:`support`,label:`Support`},{id:`security`,label:`Security`,disabled:!0}]},{id:`sales`,label:`Sales`,children:[{id:`sales_europe`,label:`Europe`},{id:`sales_asia`,label:`Asia`}]}],t=u(void 0),{codeHtml:n}=b(),{codeJs:r}=x();return{codeHtml:n,codeJs:r,data:e,selected:t}}},C={class:`a_mt_2`};function w(e,t,n,ee,o,s){let u=d(`a-tree`),p=d(`aloha-example`);return r(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_TREE_GROUP_BASIC_DESCRIPTION_`,props:[`data`,`selected`,`aria-label`]},{default:f(()=>[c(u,{selected:e.selected,"onUpdate:selected":t[0]||=t=>e.selected=t,data:e.data,"aria-label":`_A_TREE_EXAMPLE_LABEL_`},null,8,[`selected`,`data`]),i(`div`,C,`selected: `+l(e.selected),1)]),_:1},8,[`code-html`,`code-js`])}var T=y(S,[[`render`,w]]);function E(){return{codeHtml:`<a-tree
  v-model="checked"
  :data="data"
  :is-checkbox="true"
  :is-check-strictly="true"
  :is-expand-all="true"
  aria-label="Company structure"
></a-tree>
<div>model-value: {{ checked }}</div>`}}function D(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeCheckStrictly",
  components: {
    ATree,
  },
  setup() {
    const data = [
      {
        id: "management",
        label: "Management",
      },
      {
        id: "it",
        label: "IT",
        children: [
          {
            id: "development",
            label: "Development",
            children: [
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "qa", label: "Quality assurance" },
            ],
          },
          { id: "support", label: "Support" },
          { id: "security", label: "Security", disabled: true },
        ],
      },
      {
        id: "sales",
        label: "Sales",
        children: [
          { id: "sales_europe", label: "Europe" },
          { id: "sales_asia", label: "Asia" },
        ],
      },
    ];

    const checked = ref(["it"]);

    return {
      checked,
      data,
    };
  },
};`}}var O={name:`PageTreeCheckStrictly`,components:{AlohaExample:p,ATree:_},setup(){let e=[{id:`management`,label:`Management`},{id:`it`,label:`IT`,children:[{id:`development`,label:`Development`,children:[{id:`frontend`,label:`Frontend`},{id:`backend`,label:`Backend`},{id:`qa`,label:`Quality assurance`}]},{id:`support`,label:`Support`},{id:`security`,label:`Security`,disabled:!0}]},{id:`sales`,label:`Sales`,children:[{id:`sales_europe`,label:`Europe`},{id:`sales_asia`,label:`Asia`}]}],t=u([`it`]),{codeHtml:n}=E(),{codeJs:r}=D();return{checked:t,codeHtml:n,codeJs:r,data:e}}},k={class:`a_mt_2`};function A(e,t,n,ee,o,s){let u=d(`a-tree`),p=d(`aloha-example`);return r(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TREE_GROUP_CHECK_STRICTLY_HEADER_`,description:`_A_TREE_GROUP_CHECK_STRICTLY_DESCRIPTION_`,props:[`is-check-strictly`]},{default:f(()=>[c(u,{modelValue:e.checked,"onUpdate:modelValue":t[0]||=t=>e.checked=t,data:e.data,"is-checkbox":!0,"is-check-strictly":!0,"is-expand-all":!0,"aria-label":`_A_TREE_EXAMPLE_LABEL_`},null,8,[`modelValue`,`data`]),i(`div`,k,`model-value: `+l(e.checked),1)]),_:1},8,[`code-html`,`code-js`])}var j=y(O,[[`render`,A]]);function M(){return{codeHtml:`<a-tree
  ref="treeRef"
  v-model="checked"
  :data="data"
  :is-checkbox="true"
  :default-expand-level="2"
  aria-label="Company structure"
></a-tree>
<div>model-value: {{ checked }}</div>
<div>getCheckedItems({ isLeafOnly: true }): {{ leafLabels }}</div>`}}function N(){return{codeJs:`import {
  computed,
  ref,
} from "vue";

import {
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeCheckbox",
  components: {
    ATree,
  },
  setup() {
    const data = [
      {
        id: "management",
        label: "Management",
      },
      {
        id: "it",
        label: "IT",
        children: [
          {
            id: "development",
            label: "Development",
            children: [
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "qa", label: "Quality assurance" },
            ],
          },
          { id: "support", label: "Support" },
          { id: "security", label: "Security", disabled: true },
        ],
      },
      {
        id: "sales",
        label: "Sales",
        children: [
          { id: "sales_europe", label: "Europe" },
          { id: "sales_asia", label: "Asia" },
        ],
      },
    ];

    const checked = ref(["frontend", "backend"]);
    const treeRef = ref(undefined);

    const leafLabels = computed(() => {
      // checked is read here, so the list is updated after every change
      return checked.value && treeRef.value ?
        treeRef.value.getCheckedItems({ isLeafOnly: true }).map(item => item.label) :
        [];
    });

    return {
      checked,
      data,
      leafLabels,
      treeRef,
    };
  },
};`}}var P={name:`PageTreeCheckbox`,components:{AlohaExample:p,ATree:_},setup(){let e=[{id:`management`,label:`Management`},{id:`it`,label:`IT`,children:[{id:`development`,label:`Development`,children:[{id:`frontend`,label:`Frontend`},{id:`backend`,label:`Backend`},{id:`qa`,label:`Quality assurance`}]},{id:`support`,label:`Support`},{id:`security`,label:`Security`,disabled:!0}]},{id:`sales`,label:`Sales`,children:[{id:`sales_europe`,label:`Europe`},{id:`sales_asia`,label:`Asia`}]}],t=u([`frontend`,`backend`]),n=u(void 0),r=o(()=>t.value&&n.value?n.value.getCheckedItems({isLeafOnly:!0}).map(e=>e.label):[]),{codeHtml:i}=M(),{codeJs:a}=N();return{checked:t,codeHtml:i,codeJs:a,data:e,leafLabels:r,treeRef:n}}},F={class:`a_mt_2`};function I(e,t,n,ee,o,s){let u=d(`a-tree`),p=d(`aloha-example`);return r(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TREE_GROUP_CHECKBOX_HEADER_`,description:`_A_TREE_GROUP_CHECKBOX_DESCRIPTION_`,props:[`is-checkbox`,`model-value`,`is-check-on-click-node`]},{default:f(()=>[c(u,{ref:`treeRef`,modelValue:e.checked,"onUpdate:modelValue":t[0]||=t=>e.checked=t,data:e.data,"is-checkbox":!0,"default-expand-level":2,"aria-label":`_A_TREE_EXAMPLE_LABEL_`},null,8,[`modelValue`,`data`]),i(`div`,F,`model-value: `+l(e.checked),1),i(`div`,null,`getCheckedItems({ isLeafOnly: true }): `+l(e.leafLabels),1)]),_:1},8,[`code-html`,`code-js`])}var L=y(P,[[`render`,I]]);function R(){return{codeHtml:`<a-button
  class="a_btn a_btn_secondary a_btn_small"
  text="Expand all"
  @click="treeRef.expandAll()"
></a-button>
<a-button
  class="a_btn a_btn_secondary a_btn_small"
  text="Collapse all"
  @click="treeRef.collapseAll()"
></a-button>
<a-tree
  ref="treeRef"
  v-model:expanded="expanded"
  :data="data"
  :default-expand-level="1"
  aria-label="Company structure"
></a-tree>
<div>expanded: {{ expanded }}</div>

<a-tree
  :data="data"
  :is-accordion="true"
  aria-label="Company structure"
></a-tree>

<a-tree
  :data="data"
  :is-expand-on-click-node="false"
  aria-label="Company structure"
></a-tree>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeExpand",
  components: {
    AButton,
    ATree,
  },
  setup() {
    const data = [
      {
        id: "management",
        label: "Management",
      },
      {
        id: "it",
        label: "IT",
        children: [
          {
            id: "development",
            label: "Development",
            children: [
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "qa", label: "Quality assurance" },
            ],
          },
          { id: "support", label: "Support" },
          { id: "security", label: "Security", disabled: true },
        ],
      },
      {
        id: "sales",
        label: "Sales",
        children: [
          { id: "sales_europe", label: "Europe" },
          { id: "sales_asia", label: "Asia" },
        ],
      },
    ];

    const expanded = ref(undefined);
    const treeRef = ref(undefined);

    return {
      data,
      expanded,
      treeRef,
    };
  },
};`}}var B={name:`PageTreeExpand`,components:{AlohaExample:p,AButton:h,ATree:_},setup(){let e=[{id:`management`,label:`Management`},{id:`it`,label:`IT`,children:[{id:`development`,label:`Development`,children:[{id:`frontend`,label:`Frontend`},{id:`backend`,label:`Backend`},{id:`qa`,label:`Quality assurance`}]},{id:`support`,label:`Support`},{id:`security`,label:`Security`,disabled:!0}]},{id:`sales`,label:`Sales`,children:[{id:`sales_europe`,label:`Europe`},{id:`sales_asia`,label:`Asia`}]}],t=u(void 0),n=u(void 0),{codeHtml:r}=R(),{codeJs:i}=z();return{codeHtml:r,codeJs:i,data:e,expanded:t,treeRef:n}}},V={class:`a_d_flex a_gap_2 a_mb_3`},H={class:`a_mt_2`};function U(e,t,n,ee,o,s){let u=d(`a-button`),p=d(`a-tree`),m=d(`aloha-example`);return r(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TREE_GROUP_EXPAND_HEADER_`,description:`_A_TREE_GROUP_EXPAND_DESCRIPTION_`,props:[`default-expand-level`,`is-expand-all`,`is-accordion`,`is-expand-on-click-node`,`expanded`]},{default:f(()=>[i(`div`,V,[c(u,{class:`a_btn a_btn_secondary a_btn_small`,text:`_A_TREE_EXAMPLE_EXPAND_ALL_`,onClick:t[0]||=t=>e.treeRef.expandAll()}),c(u,{class:`a_btn a_btn_secondary a_btn_small`,text:`_A_TREE_EXAMPLE_COLLAPSE_ALL_`,onClick:t[1]||=t=>e.treeRef.collapseAll()})]),c(p,{ref:`treeRef`,expanded:e.expanded,"onUpdate:expanded":t[2]||=t=>e.expanded=t,data:e.data,"default-expand-level":1,"aria-label":`_A_TREE_EXAMPLE_LABEL_`},null,8,[`expanded`,`data`]),i(`div`,H,`expanded: `+l(e.expanded),1),t[3]||=i(`h3`,{class:`a_mt_4`},`is-accordion`,-1),c(p,{data:e.data,"is-accordion":!0,"aria-label":`_A_TREE_EXAMPLE_LABEL_`},null,8,[`data`]),t[4]||=i(`h3`,{class:`a_mt_4`},`is-expand-on-click-node: false`,-1),c(p,{data:e.data,"is-expand-on-click-node":!1,"aria-label":`_A_TREE_EXAMPLE_LABEL_`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var W=y(B,[[`render`,U]]);function G(){return{codeHtml:`<a-input
  v-model="searchModel"
  class="a_mb_3"
  label="Search"
  type="search"
></a-input>
<a-tree
  v-model:selected="selected"
  :json="json"
  :search-model="searchModel"
  :default-expand-level="1"
  aria-label="JSON"
></a-tree>
<div>selected: {{ selected }}</div>`}}function K(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInput,
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeJson",
  components: {
    AInput,
    ATree,
  },
  setup() {
    const json = {
      id: 42,
      name: "Anna Becker",
      email: "anna.becker@example.com",
      active: true,
      manager: null,
      roles: ["admin", "editor"],
      address: {
        street: "Hauptstraße 1",
        city: "Berlin",
        geo: { lat: 52.52, lng: 13.405 },
      },
    };
    const searchModel = ref("");
    const selected = ref(undefined);

    return {
      json,
      searchModel,
      selected,
    };
  },
};`}}var q={name:`PageTreeJson`,components:{AlohaExample:p,AInput:g,ATree:_},setup(){let e={id:42,name:`Anna Becker`,email:`anna.becker@example.com`,active:!0,manager:null,roles:[`admin`,`editor`],address:{street:`Hauptstraße 1`,city:`Berlin`,geo:{lat:52.52,lng:13.405}}},t=u(``),n=u(void 0),{codeHtml:r}=G(),{codeJs:i}=K();return{codeHtml:r,codeJs:i,json:e,searchModel:t,selected:n}}},J={class:`a_mt_2`};function Y(e,t,n,ee,o,s){let u=d(`a-input`),p=d(`a-tree`),m=d(`aloha-example`);return r(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TREE_GROUP_JSON_HEADER_`,description:`_A_TREE_GROUP_JSON_DESCRIPTION_`,props:[`json`,`default-expand-level`]},{default:f(()=>[c(u,{class:`a_mb_3`,modelValue:e.searchModel,"onUpdate:modelValue":t[0]||=t=>e.searchModel=t,label:`_A_TREE_EXAMPLE_SEARCH_`,type:`search`},null,8,[`modelValue`]),c(p,{selected:e.selected,"onUpdate:selected":t[1]||=t=>e.selected=t,json:e.json,"search-model":e.searchModel,"default-expand-level":1,"aria-label":`JSON`},null,8,[`selected`,`json`,`search-model`]),i(`div`,J,`selected: `+l(e.selected),1)]),_:1},8,[`code-html`,`code-js`])}var X=y(q,[[`render`,Y]]);function Z(){return{codeHtml:`<a-tree
  v-model:selected="selected"
  :data="data"
  key-id="uuid"
  key-label="meta.title"
  key-children="subordinates"
  :key-disabled="({ item }) => !item.active"
  :is-expand-all="true"
  aria-label="Employees"
></a-tree>
<div>selected: {{ selected }}</div>`}}function te(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeKeys",
  components: {
    ATree,
  },
  setup() {
    // JSON as it comes from an API
    const data = [
      {
        uuid: "7c1e",
        active: true,
        meta: { title: "Anna Becker, CEO" },
        subordinates: [
          { uuid: "9a2f", active: true, meta: { title: "Ben Ott, CTO" } },
          { uuid: "3d8b", active: false, meta: { title: "Clara Lenz, CFO" } },
        ],
      },
    ];
    const selected = ref(undefined);

    return {
      data,
      selected,
    };
  },
};`}}var Q={name:`PageTreeKeys`,components:{AlohaExample:p,ATree:_},setup(){let e=[{uuid:`7c1e`,active:!0,meta:{title:`Anna Becker, CEO`},subordinates:[{uuid:`9a2f`,active:!0,meta:{title:`Ben Ott, CTO`}},{uuid:`3d8b`,active:!1,meta:{title:`Clara Lenz, CFO`}}]}],t=u(void 0),{codeHtml:n}=Z(),{codeJs:r}=te();return{codeHtml:n,codeJs:r,data:e,selected:t}}},ne={class:`a_mt_2`};function re(e,t,n,ee,o,s){let u=d(`a-tree`),p=d(`aloha-example`);return r(),a(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TREE_GROUP_KEYS_HEADER_`,description:`_A_TREE_GROUP_KEYS_DESCRIPTION_`,props:[`key-id`,`key-label`,`key-children`,`key-disabled`]},{default:f(()=>[c(u,{selected:e.selected,"onUpdate:selected":t[0]||=t=>e.selected=t,data:e.data,"key-id":`uuid`,"key-label":`meta.title`,"key-children":`subordinates`,"key-disabled":({item:e})=>!e.active,"is-expand-all":!0,"aria-label":`_A_TREE_EXAMPLE_LABEL_EMPLOYEES_`},null,8,[`selected`,`data`,`key-disabled`]),i(`div`,ne,`selected: `+l(e.selected),1)]),_:1},8,[`code-html`,`code-js`])}var ie=y(Q,[[`render`,re]]);function ae(){return{codeHtml:`<a-tree
  :data="data"
  :load="load"
  aria-label="Folders"
></a-tree>`}}function oe(){return{codeJs:`import {
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeLazy",
  components: {
    ATree,
  },
  setup() {
    const data = [
      { id: "documents", label: "Documents" },
      { id: "photos", label: "Photos" },
      { id: "readme", label: "readme.txt", isLeaf: true },
    ];

    // Simulated request. Return a Promise with the children; isLeaf marks nodes without children.
    const load = ({ item, level }) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(level < 3 ?
            [
              { id: \`\${ item.id }_a\`, label: \`\${ item.label } A\` },
              { id: \`\${ item.id }_b\`, label: \`\${ item.label } B\` },
              { id: \`\${ item.id }_file\`, label: "file.pdf", isLeaf: true },
            ] :
            []);
        }, 800);
      });
    };

    return {
      data,
      load,
    };
  },
};`}}var se={name:`PageTreeLazy`,components:{AlohaExample:p,ATree:_},setup(){let e=[{id:`documents`,label:`Documents`},{id:`photos`,label:`Photos`},{id:`readme`,label:`readme.txt`,isLeaf:!0}],t=({item:e,level:t})=>new Promise(n=>{setTimeout(()=>{n(t<3?[{id:`${e.id}_a`,label:`${e.label} A`},{id:`${e.id}_b`,label:`${e.label} B`},{id:`${e.id}_file`,label:`file.pdf`,isLeaf:!0}]:[])},800)}),{codeHtml:n}=ae(),{codeJs:r}=oe();return{codeHtml:n,codeJs:r,data:e,load:t}}};function ce(e,t,n,i,ee,o){let s=d(`a-tree`),l=d(`aloha-example`);return r(),a(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TREE_GROUP_LAZY_HEADER_`,description:`_A_TREE_GROUP_LAZY_DESCRIPTION_`,props:[`load`,`key-is-leaf`]},{default:f(()=>[c(s,{data:e.data,load:e.load,"aria-label":`_A_TREE_EXAMPLE_LABEL_FOLDERS_`},null,8,[`data`,`load`])]),_:1},8,[`code-html`,`code-js`])}var le=y(se,[[`render`,ce]]);function ue(){return{codeHtml:`<a-input
  v-model="searchModel"
  class="a_mb_3"
  label="Search"
  type="search"
></a-input>
<a-tree
  :data="data"
  :search-model="searchModel"
  aria-label="Company structure"
></a-tree>`}}function de(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInput,
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeSearch",
  components: {
    AInput,
    ATree,
  },
  setup() {
    const data = [
      {
        id: "management",
        label: "Management",
      },
      {
        id: "it",
        label: "IT",
        children: [
          {
            id: "development",
            label: "Development",
            children: [
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "qa", label: "Quality assurance" },
            ],
          },
          { id: "support", label: "Support" },
          { id: "security", label: "Security", disabled: true },
        ],
      },
      {
        id: "sales",
        label: "Sales",
        children: [
          { id: "sales_europe", label: "Europe" },
          { id: "sales_asia", label: "Asia" },
        ],
      },
    ];

    const searchModel = ref("end");

    return {
      data,
      searchModel,
    };
  },
};`}}var fe={name:`PageTreeSearch`,components:{AlohaExample:p,AInput:g,ATree:_},setup(){let e=[{id:`management`,label:`Management`},{id:`it`,label:`IT`,children:[{id:`development`,label:`Development`,children:[{id:`frontend`,label:`Frontend`},{id:`backend`,label:`Backend`},{id:`qa`,label:`Quality assurance`}]},{id:`support`,label:`Support`},{id:`security`,label:`Security`,disabled:!0}]},{id:`sales`,label:`Sales`,children:[{id:`sales_europe`,label:`Europe`},{id:`sales_asia`,label:`Asia`}]}],t=u(`end`),{codeHtml:n}=ue(),{codeJs:r}=de();return{codeHtml:n,codeJs:r,data:e,searchModel:t}}};function pe(e,t,n,i,ee,o){let s=d(`a-input`),l=d(`a-tree`),u=d(`aloha-example`);return r(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TREE_GROUP_SEARCH_HEADER_`,description:`_A_TREE_GROUP_SEARCH_DESCRIPTION_`,props:[`search-model`,`filter-method`]},{default:f(()=>[c(s,{class:`a_mb_3`,modelValue:e.searchModel,"onUpdate:modelValue":t[0]||=t=>e.searchModel=t,label:`_A_TREE_EXAMPLE_SEARCH_`,type:`search`},null,8,[`modelValue`]),c(l,{data:e.data,"search-model":e.searchModel,"aria-label":`_A_TREE_EXAMPLE_LABEL_`},null,8,[`data`,`search-model`])]),_:1},8,[`code-html`,`code-js`])}var me=y(fe,[[`render`,pe]]);function he(){return{codeHtml:`<a-tree
  :data="data"
  :is-expand-all="true"
  aria-label="Company structure"
>
  <template v-slot:node="{ item, label, isLeaf }">
    <span class="a_d_flex a_align_items_center a_gap_2">
      <span>{{ label }}</span>
      <span
        v-if="!isLeaf"
        class="a_badge a_badge_secondary a_pill_rounded"
      >{{ item.children.length }}</span>
    </span>
  </template>
</a-tree>`}}function ge(){return{codeJs:`import {
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeSlot",
  components: {
    ATree,
  },
  setup() {
    const data = [
      {
        id: "management",
        label: "Management",
      },
      {
        id: "it",
        label: "IT",
        children: [
          {
            id: "development",
            label: "Development",
            children: [
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "qa", label: "Quality assurance" },
            ],
          },
          { id: "support", label: "Support" },
          { id: "security", label: "Security", disabled: true },
        ],
      },
      {
        id: "sales",
        label: "Sales",
        children: [
          { id: "sales_europe", label: "Europe" },
          { id: "sales_asia", label: "Asia" },
        ],
      },
    ];

    return {
      data,
    };
  },
};`}}var _e={name:`PageTreeSlot`,components:{AlohaExample:p,ATree:_},setup(){let e=[{id:`management`,label:`Management`},{id:`it`,label:`IT`,children:[{id:`development`,label:`Development`,children:[{id:`frontend`,label:`Frontend`},{id:`backend`,label:`Backend`},{id:`qa`,label:`Quality assurance`}]},{id:`support`,label:`Support`},{id:`security`,label:`Security`,disabled:!0}]},{id:`sales`,label:`Sales`,children:[{id:`sales_europe`,label:`Europe`},{id:`sales_asia`,label:`Asia`}]}],{codeHtml:t}=he(),{codeJs:n}=ge();return{codeHtml:t,codeJs:n,data:e}}},ve={class:`a_d_flex a_align_items_center a_gap_2`},ye={key:0,class:`a_badge a_badge_secondary a_pill_rounded`};function be(e,t,n,o,u,p){let m=d(`a-tree`),h=d(`aloha-example`);return r(),a(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TREE_GROUP_SLOT_HEADER_`,description:`_A_TREE_GROUP_SLOT_DESCRIPTION_`,props:[`node`]},{default:f(()=>[c(m,{data:e.data,"is-expand-all":!0,"aria-label":`_A_TREE_EXAMPLE_LABEL_`},{node:f(({item:e,label:t,isLeaf:n})=>[i(`span`,ve,[i(`span`,null,l(t),1),n?ee(``,!0):(r(),s(`span`,ye,l(e.children.length),1))])]),_:1},8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var $=y(_e,[[`render`,be]]);function xe(){return{dataEvents:[{name:`update:model-value`,description:`_A_TREE_EVENTS_UPDATE_MODEL_VALUE_`},{name:`update:selected`,description:`_A_TREE_EVENTS_UPDATE_SELECTED_`},{name:`update:expanded`,description:`_A_TREE_EVENTS_UPDATE_EXPANDED_`},{name:`node-click`,description:`_A_TREE_EVENTS_NODE_CLICK_`},{name:`check`,description:`_A_TREE_EVENTS_CHECK_`},{name:`expand`,description:`_A_TREE_EVENTS_EXPAND_`},{name:`collapse`,description:`_A_TREE_EVENTS_COLLAPSE_`},{name:`load-error`,description:`_A_TREE_EVENTS_LOAD_ERROR_`}]}}function Se(){return{dataMethods:[{name:`expandAll()`,description:`_A_TREE_METHODS_EXPANDALL_`},{name:`collapseAll()`,description:`_A_TREE_METHODS_COLLAPSEALL_`},{name:`expandToKey(key)`,description:`_A_TREE_METHODS_EXPANDTOKEY_KEY_`},{name:`focus({ key })`,description:`_A_TREE_METHODS_FOCUS_KEY_`},{name:`setSelected(key)`,description:`_A_TREE_METHODS_SETSELECTED_KEY_`},{name:`checkNode({ key, checked })`,description:`_A_TREE_METHODS_CHECKNODE_KEY_CHECKED_`},{name:`setCheckedKeys(keys)`,description:`_A_TREE_METHODS_SETCHECKEDKEYS_KEYS_`},{name:`getCheckedItems({ isLeafOnly })`,description:`_A_TREE_METHODS_GETCHECKEDITEMS_ISLEAFONLY_`},{name:`getHalfCheckedKeys()`,description:`_A_TREE_METHODS_GETHALFCHECKEDKEYS_`},{name:`getNode(key)`,description:`_A_TREE_METHODS_GETNODE_KEY_`}]}}function Ce(){let e=o(()=>m({placeholder:`_A_TREE_COMPONENT_NAME_`}));return{pageTitle:o(()=>`ATree${e.value?` (${e.value})`:``}`)}}function we(){return{dataProps:[{name:`aria-label`,description:`_A_TREE_PROPS_ARIA_LABEL_`,type:`String`,default:void 0,required:!1},{name:`aria-labelledby`,description:`_A_TREE_PROPS_ARIA_LABELLEDBY_`,type:`String`,default:void 0,required:!1},{name:`data`,description:`_A_TREE_PROPS_DATA_`,type:`Array`,default:`[]`,required:!1},{name:`default-expand-level`,description:`_A_TREE_PROPS_DEFAULT_EXPAND_LEVEL_`,type:`Number`,default:0,required:!1},{name:`empty-text`,description:`_A_TREE_PROPS_EMPTY_TEXT_`,type:`String`,default:`"_A_TREE_EMPTY_"`,required:!1},{name:`expanded`,description:`_A_TREE_PROPS_EXPANDED_`,type:`Array`,default:void 0,required:!1},{name:`filter-method`,description:`_A_TREE_PROPS_FILTER_METHOD_`,type:`Function`,default:void 0,required:!1},{name:`id`,description:`_A_TREE_PROPS_ID_`,type:`String`,default:`uniqueId("a_tree_")`,required:!1},{name:`indent`,description:`_A_TREE_PROPS_INDENT_`,type:`Number / String`,default:void 0,required:!1},{name:`is-accordion`,description:`_A_TREE_PROPS_IS_ACCORDION_`,type:`Boolean`,default:!1,required:!1},{name:`is-check-on-click-node`,description:`_A_TREE_PROPS_IS_CHECK_ON_CLICK_NODE_`,type:`Boolean`,default:!1,required:!1},{name:`is-check-strictly`,description:`_A_TREE_PROPS_IS_CHECK_STRICTLY_`,type:`Boolean`,default:!1,required:!1},{name:`is-checkbox`,description:`_A_TREE_PROPS_IS_CHECKBOX_`,type:`Boolean`,default:!1,required:!1},{name:`is-expand-all`,description:`_A_TREE_PROPS_IS_EXPAND_ALL_`,type:`Boolean`,default:!1,required:!1},{name:`is-expand-on-click-node`,description:`_A_TREE_PROPS_IS_EXPAND_ON_CLICK_NODE_`,type:`Boolean`,default:!0,required:!1},{name:`is-selectable`,description:`_A_TREE_PROPS_IS_SELECTABLE_`,type:`Boolean`,default:!0,required:!1},{name:`json`,description:`_A_TREE_PROPS_JSON_`,type:`Any`,default:void 0,required:!1},{name:`key-children`,description:`_A_TREE_PROPS_KEY_CHILDREN_`,type:`String / Function`,default:`"children"`,required:!1},{name:`key-disabled`,description:`_A_TREE_PROPS_KEY_DISABLED_`,type:`String / Function`,default:`"disabled"`,required:!1},{name:`key-id`,description:`_A_TREE_PROPS_KEY_ID_`,type:`String / Function`,default:`"id"`,required:!1},{name:`key-is-leaf`,description:`_A_TREE_PROPS_KEY_IS_LEAF_`,type:`String / Function`,default:`"isLeaf"`,required:!1},{name:`key-label`,description:`_A_TREE_PROPS_KEY_LABEL_`,type:`String / Function`,default:`"label"`,required:!1},{name:`load`,description:`_A_TREE_PROPS_LOAD_`,type:`Function`,default:void 0,required:!1},{name:`model-value`,description:`_A_TREE_PROPS_MODEL_VALUE_`,type:`Array`,default:void 0,required:!1},{name:`search-model`,description:`_A_TREE_PROPS_SEARCH_MODEL_`,type:`String`,default:`""`,required:!1},{name:`selected`,description:`_A_TREE_PROPS_SELECTED_`,type:`String / Number`,default:void 0,required:!1}]}}function Te(){return{dataSlots:[{name:`node`,description:`_A_TREE_SLOTS_NODE_`},{name:`empty`,description:`_A_TREE_SLOTS_EMPTY_`}]}}function Ee(){return{dataTranslate:[`_A_TREE_EMPTY_`,`_A_TREE_NOTHING_FOUND_`,`_A_TREE_FOUND_{{count}}_`]}}var De={name:`PageTree`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:v,PageTreeBasic:T,PageTreeCheckbox:L,PageTreeCheckStrictly:j,PageTreeExpand:W,PageTreeJson:X,PageTreeKeys:ie,PageTreeLazy:le,PageTreeSearch:me,PageTreeSlot:$},setup(){let{dataEvents:e}=xe(),{dataMethods:t}=Se(),{pageTitle:n}=Ce(),{dataProps:r}=we(),{dataSlots:i}=Te(),{dataTranslate:a}=Ee();return{dataEvents:e,dataMethods:t,dataProps:r,dataSlots:i,dataTranslate:a,pageTitle:n}}};function Oe(e,t,n,i,ee,o){let s=d(`a-translation`),l=d(`page-tree-basic`),u=d(`page-tree-expand`),p=d(`page-tree-checkbox`),m=d(`page-tree-check-strictly`),h=d(`page-tree-search`),g=d(`page-tree-lazy`),_=d(`page-tree-keys`),v=d(`page-tree-slot`),y=d(`page-tree-json`),b=d(`aloha-table-props`),x=d(`aloha-table-translate`),S=d(`aloha-table-css-vars`),C=d(`aloha-page`);return r(),a(C,{"page-title":e.pageTitle},{body:f(()=>[c(s,{tag:`p`,html:`_A_TREE_COMPONENT_DESCRIPTION_`}),c(s,{class:`a_mb_4`,tag:`div`,html:`_A_TREE_ACCESSIBILITY_DESCRIPTION_`}),c(l),c(u),c(p),c(m),c(h),c(g),c(_),c(v),c(y),c(b,{data:e.dataProps},null,8,[`data`]),c(b,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`description`]},null,8,[`data`]),c(b,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),c(b,{"table-label":`Methods`,data:e.dataMethods,columns:[`name`,`description`]},null,8,[`data`]),c(x,{data:e.dataTranslate},null,8,[`data`]),c(S,{files:`components/ATree`})]),_:1},8,[`page-title`])}var ke=y(De,[[`render`,Oe]]);export{ke as default};