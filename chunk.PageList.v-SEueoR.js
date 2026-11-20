import{t as e}from"./chunk.AlohaPage.Duws5BQX.js";import{t}from"./chunk.AlohaTableProps.B2-hzvZR.js";import{t as n}from"./chunk.AlohaExample.hbfebTmY.js";import{L as ee,W as r,Zt as te,it as i,x as a}from"./bundle.index.Cwl2mAuh.js";import{Ft as o,It as s,Pt as c,Qt as l,Vt as u,cn as d,mn as f,nn as p,on as m}from"./chunk.vendor.CTxSDDRk.js";import{t as h}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function g(){return{codeHtml:`<a-list
  :data="items"
  key-label="label"
></a-list>`}}function _(){return{codeJs:`import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListBasic",
  components: {
    AList,
  },
  setup() {
    const items = [
      {
        label: "label 1",
      },
      {
        label: "label 2",
      },
      {
        label: "label 3",
      },
      {
        label: "label 4",
      },
    ];

    return {
      items,
    };
  },
};`}}var v={name:`PageListClassGroup`,components:{AList:a,AlohaExample:n},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t,items:[{label:`label 1`},{label:`label 2`},{label:`label 3`},{label:`label 4`}]}}};function y(e,t,n,ee,r,te){let i=p(`a-list`),a=p(`aloha-example`);return l(),s(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`data`,`label`]},{default:m(()=>[u(i,{data:e.items,"key-label":`label`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var b=h(v,[[`render`,y]]);function x(){return{codeHtml:`<a-list
  :data="items"
  key-label="label"
  class-main="a_list_group" 
  class-item="a_list_group__item"
></a-list>
<a-list
  class="a_mt_5"
  :data="items"
  key-label="label"
  class-main="a_list_group a_list_group_gap"
  class-item="a_list_group__item"
></a-list>
<a-list
  class="a_mt_5"
  :data="items"
  key-label="label"
  class-main="a_list_group a_list_group_edge"
  class-item="a_list_group__item"
></a-list>`}}function S(){return{codeJs:`import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListClassGroup",
  components: {
    AList,
  },
  setup() {
    const items = [
      {
        label: "label 1",
      },
      {
        label: "label 2",
      },
      {
        label: "label 3",
      },
      {
        label: "label 4",
      },
    ];

    return {
      items,
    };
  },
};`}}var C={name:`PageListClassGroup`,components:{AList:a,AlohaExample:n},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t,items:[{label:`label 1`},{label:`label 2`},{label:`label 3`},{label:`label 4`}]}}};function w(e,t,n,ee,r,te){let i=p(`a-list`),a=p(`aloha-example`);return l(),s(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_GROUP_CLASS_GROUP_HEADER_`,description:`_A_LIST_GROUP_CLASS_GROUP_DESCRIPTION_`,props:[`class-main`,`class-item`]},{default:m(()=>[u(i,{data:e.items,"key-label":`label`,"class-main":`a_list_group`,"class-item":`a_list_group__item`},null,8,[`data`]),u(i,{class:`a_mt_5`,data:e.items,"key-label":`label`,"class-main":`a_list_group a_list_group_gap`,"class-item":`a_list_group__item`},null,8,[`data`]),u(i,{class:`a_mt_5`,data:e.items,"key-label":`label`,"class-main":`a_list_group a_list_group_edge`,"class-item":`a_list_group__item`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var T=h(C,[[`render`,w]]);function E(){return{codeHtml:`<a-list
  :data="items1"
  :is-data-simple-array="true"
></a-list>
<a-list
  class="a_mt_4"
  :data="items2"
  :is-data-simple-array="true"
></a-list>`}}function D(){return{codeJs:`import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListIsDataSimpleArray",
  components: {
    AList,
  },
  setup() {
    const items1 = [
      "label 1",
      "label 2",
      "label 3",
      "label 4",
    ];
    const items2 = [
      "Level 1",
      [
        "Level 2",
        [
          "Level 2.1",
          "Level 2.2",
        ],
      ],
      [
        "Level 3",
        [
          "Level 3.1",
          [
            "Level 3.2",
            [
              "Level 3.2.1",
              "Level 3.2.2",
            ],
          ],
        ],
      ],
    ];

    return {
      items1,
      items2,
    };
  },
};`}}var O={name:`PageListIsDataSimpleArray`,components:{AList:a,AlohaExample:n},setup(){let{codeHtml:e}=E(),{codeJs:t}=D();return{codeHtml:e,codeJs:t,items1:[`label 1`,`label 2`,`label 3`,`label 4`],items2:[`Level 1`,[`Level 2`,[`Level 2.1`,`Level 2.2`]],[`Level 3`,[`Level 3.1`,[`Level 3.2`,[`Level 3.2.1`,`Level 3.2.2`]]]]]}}},k={class:`a_columns a_columns_count_12`},A={class:`a_column a_column_4 a_column_12_tablet`};function j(e,t,n,ee,r,te){let i=p(`a-list`),a=p(`aloha-example`);return l(),s(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_GROUP_IS_DATA_SIMPLE_ARRAY_HEADER_`,description:`_A_LIST_GROUP_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_`,props:[`is-data-simple-array`]},{default:m(()=>[o(`div`,k,[o(`div`,A,[u(i,{data:e.items1,"is-data-simple-array":!0},null,8,[`data`]),u(i,{class:`a_mt_4`,data:e.items2,"is-data-simple-array":!0},null,8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var M=h(O,[[`render`,j]]);function N(){return{codeHtml:`<a-switch
  v-model="modelIsHtml"
  label="_A_LIST_IS_HTML_LABEL_"
></a-switch>

<a-list
  :data="items"
  key-label="label"
  :is-html="modelIsHtml"
></a-list>
<div class="a_mt_4"></div>
<a-list
  :data="itemsWithChildren"
  key-label="label"
  key-children="children"
  :is-html="modelIsHtml"
></a-list>
<div class="a_mt_4"></div>
<a-list
  :data="itemsArrays"
  key-label="label"
  :is-data-simple-array="true"
  :is-html="modelIsHtml"
></a-list>`}}function P(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AList,
  ASwitch, 
} from "aloha-vue";
    
export default {
  name: "PageListIsHtml",
  components: {
    AList,
    ASwitch,
  },
  setup() {
    const items = [
      {
        label: "label 1",
      },
      {
        label: "label 2",
      },
      {
        label: "label 3",
      },
      {
        label: "label 4",
      },
    ];
    const itemsWithChildren = [
      {
        label: "Level 1",
        children: [
          {
            label: "Level 1.1",
            children: [
              {
                label: "Level 1.1.1",
              },
              {
                label: "Level 1.1.2",
              },
            ],
          },
          {
            label: "Level 1.2",
            children: [
              {
                label: "Level 1.2.1",
              },
            ],
          },
        ],
      },
      {
        label: "Level 2",
        children: [
          {
            label: "Level 2.1",
          },
          {
            label: "Level 2.2",
          },
        ],
      },
    ];
    const itemsArrays = [
      "Level 1",
      [
        "Level 2",
        [
          "Level 2.1",
          "Level 2.2",
        ],
      ],
      [
        "Level 3",
        [
          "Level 3.1",
          [
            "Level 3.2",
            [
              "Level 3.2.1",
              "Level 3.2.2",
            ],
          ],
        ],
      ],
    ];
    const modelIsHtml = ref(false);

    return {
      items,
      itemsWithChildren,
      itemsArrays,
      modelIsHtml,
    };
  },
};`}}var F={name:`PageListIsHtml`,components:{AList:a,AlohaExample:n,ASwitch:ee},setup(){let{codeHtml:e}=N(),{codeJs:t}=P();return{codeHtml:e,codeJs:t,items:[{label:`label 1`},{label:`label 2`},{label:`label 3`},{label:`label 4`}],itemsArrays:[`Level 1`,[`Level 2`,[`Level 2.1`,`Level 2.2`]],[`Level 3`,[`Level 3.1`,[`Level 3.2`,[`Level 3.2.1`,`Level 3.2.2`]]]]],itemsWithChildren:[{label:`Level 1`,children:[{label:`Level 1.1`,children:[{label:`Level 1.1.1`},{label:`Level 1.1.2`}]},{label:`Level 1.2`,children:[{label:`Level 1.2.1`}]}]},{label:`Level 2`,children:[{label:`Level 2.1`},{label:`Level 2.2`}]}],modelIsHtml:d(!1)}}},I={class:`a_columns a_columns_count_12`},L={class:`a_column a_column_4 a_column_12_tablet`};function R(e,t,n,ee,r,te){let i=p(`a-switch`),a=p(`a-list`),c=p(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_GROUP_IS_HTML_HEADER_`,description:`_A_LIST_GROUP_IS_HTML_DESCRIPTION_`,props:[`is-html`]},{default:m(()=>[o(`div`,I,[o(`div`,L,[u(i,{modelValue:e.modelIsHtml,"onUpdate:modelValue":t[0]||=t=>e.modelIsHtml=t,label:`is-html`},null,8,[`modelValue`]),u(a,{data:e.items,"key-label":`label`,"is-html":e.modelIsHtml},null,8,[`data`,`is-html`]),t[1]||=o(`div`,{class:`a_mt_4`},null,-1),u(a,{data:e.itemsWithChildren,"key-label":`label`,"key-children":`children`,"is-html":e.modelIsHtml},null,8,[`data`,`is-html`]),t[2]||=o(`div`,{class:`a_mt_4`},null,-1),u(a,{data:e.itemsArrays,"key-label":`label`,"is-data-simple-array":!0,"is-html":e.modelIsHtml},null,8,[`data`,`is-html`])])])]),_:1},8,[`code-html`,`code-js`])}var z=h(F,[[`render`,R]]);function B(){return{codeHtml:`<a-list
  :data="items"
  key-label="label"
  key-children="children"
></a-list>`}}function V(){return{codeJs:`import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListKeyChildren",
  components: {
    AList,
  },
  setup() {
    const items = [
      {
        label: "Parent 1",
        children: [
          {
            label: "Child 1" 
          },
          {
            label: "Child 2"
          }
        ],
      },
      {
        label: "Parent 2",
        children: [
          {
            label: "Child 3" 
          },
          {
            label: "Child 4"
          }
        ],
      }
    ];

    return {
      items,
    };
  },
};`}}var H={name:`PageListKeyChildren`,components:{AList:a,AlohaExample:n},setup(){let{codeHtml:e}=B(),{codeJs:t}=V();return{codeHtml:e,codeJs:t,items:[{label:`Parent 1`,children:[{label:`Child 1`},{label:`Child 2`}]},{label:`Parent 2`,children:[{label:`Child 3`},{label:`Child 4`}]}]}}};function U(e,t,n,ee,r,te){let i=p(`a-list`),a=p(`aloha-example`);return l(),s(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_KEY_CHILDREN_HEADER_`,description:`_A_LIST_KEY_CHILDREN_DESCRIPTION_`,props:[`key-children`]},{default:m(()=>[u(i,{data:e.items,"key-label":`label`,"key-children":`children`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var W=h(H,[[`render`,U]]);function G(){return{codeHtml:`<a-list
  :data="items1"
  key-label="label"
  key-id="id"
></a-list>
<a-list
  class="a_mt_4"
  :data="items2"
  key-label="label"
  key-id="label"
></a-list>`}}function K(){return{codeJs:`import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListKeyId",
  components: {
    AList,
  },
  setup() {
    const items1 = [
      {
        label: "Lorem",
        id: "1",
      },
      {
        label: "ipsum",
        id: "2",
      },
      {
        label: "dolor",
        id: "3",
      },
      {
        label: "Lorem",
        id: "4",
      },
    ];
    const items2 = [
      {
        label: "Item 1",
      },
      {
        label: "Item 2",
      },
      {
        label: "Item 3",
      },
      {
        label: "Item 4",
      },
    ];

    return {
      items1,
      items2,
    };
  },
};`}}var q={name:`PageListKeyId`,components:{AList:a,AlohaExample:n},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,items1:[{label:`Lorem`,id:`1`},{label:`ipsum`,id:`2`},{label:`dolor`,id:`3`},{label:`Lorem`,id:`4`}],items2:[{label:`Item 1`},{label:`Item 2`},{label:`Item 3`},{label:`Item 4`}]}}};function J(e,t,n,ee,r,te){let i=p(`a-list`),a=p(`aloha-example`);return l(),s(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_KEY_ID_HEADER_`,description:`_A_LIST_KEY_ID_DESCRIPTION_`,props:[`key-id`]},{default:m(()=>[u(i,{data:e.items1,"key-label":`label`,"key-id":`id`},null,8,[`data`]),u(i,{class:`a_mt_4`,data:e.items2,"key-label":`label`,"key-id":`label`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Y=h(q,[[`render`,J]]);function X(){return{codeHtml:`<a-list
  :data="items"
  :key-label-callback="keyLabelCallback"
></a-list>`}}function Z(){return{codeJs:`import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListKeyLabelCallback",
  components: {
    AList,
  },
  setup() {
    const items = [
      {
        label: "label 1",
      },
      {
        label: "label 2",
      },
      {
        label: "label 3",
      },
      {
        label: "label 4",
      },
    ];

    return {
      items,
    };
  },
};`}}var Q={name:`PageListKeyLabelCallback`,components:{AList:a,AlohaExample:n},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t,items:[{label:`Item 1`},{label:`Item 2`},{label:`Item 3`},{label:`Item 4`}],keyLabelCallback:({item:e,itemIndex:t})=>`${e.label} - Index: ${t}`}}};function ne(e,t,n,ee,r,te){let i=p(`a-list`),a=p(`aloha-example`);return l(),s(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_KEY_LABEL_CALLBACK_HEADER_`,description:`_A_LIST_KEY_LABEL_CALLBACK_DESCRIPTION_`,props:[`key-label-callback`]},{default:m(()=>[u(i,{data:e.items,"key-label-callback":e.keyLabelCallback},null,8,[`data`,`key-label-callback`])]),_:1},8,[`code-html`,`code-js`])}var re=h(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="false"
  separator=", "
></a-list>
<div class="a_mt_4"></div>
<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="false"
  separator=" + "
></a-list>
<div class="a_mt_5"></div>
<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="true"
  separator=","
></a-list>
<div class="a_mt_4"></div>
<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="true"
  separator=";"
></a-list>`}}function ae(){return{codeJs:`import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListSeparator",
  components: {
    AList,
  },
  setup() {
    const items = [
      "label 1",
      "label 2",
      "label 3",
      "label 4",
    ];

    return {
      items,
    };
  },
};`}}var oe={name:`PageListSeparator`,components:{AList:a,AlohaExample:n},setup(){let{codeHtml:e}=ie(),{codeJs:t}=ae();return{codeHtml:e,codeJs:t,items:[`label 1`,`label 2`,`label 3`,`label 4`]}}},se={class:`a_columns a_columns_count_12`},ce={class:`a_column a_column_4 a_column_12_tablet`};function le(e,t,n,ee,r,te){let i=p(`a-list`),a=p(`aloha-example`);return l(),s(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_GROUP_SEPARATOR_HEADER_`,description:`_A_LIST_GROUP_SEPARATOR_DESCRIPTION_`,props:[`separator`]},{default:m(()=>[o(`div`,se,[o(`div`,ce,[u(i,{data:e.items,"is-data-simple-array":!0,"is-html":!1,separator:`, `},null,8,[`data`]),t[0]||=o(`div`,{class:`a_mt_4`},null,-1),u(i,{data:e.items,"is-data-simple-array":!0,"is-html":!1,separator:` + `},null,8,[`data`]),t[1]||=o(`div`,{class:`a_mt_5`},null,-1),u(i,{data:e.items,"is-data-simple-array":!0,"is-html":!0,separator:`,`},null,8,[`data`]),t[2]||=o(`div`,{class:`a_mt_4`},null,-1),u(i,{data:e.items,"is-data-simple-array":!0,"is-html":!0,separator:`;`},null,8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var ue=h(oe,[[`render`,le]]);function de(){return{codeHtml:`<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="true"
  separator-html="<div aria-hidden='true'>-------------</div>"
></a-list>
<div class="a_mt_4"></div>
<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="true"
  separator-html="<hr>"
></a-list>`}}function fe(){return{codeJs:`import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListSeparatorHtml",
  components: {
    AList,
  },
  setup() {
    const items = [
      "label 1",
      "label 2",
      "label 3",
      "label 4",
    ];

    return {
      items,
    };
  },
};`}}var pe={name:`PageListSeparatorHtml`,components:{AList:a,AlohaExample:n},setup(){let{codeHtml:e}=de(),{codeJs:t}=fe();return{codeHtml:e,codeJs:t,items:[`label 1`,`label 2`,`label 3`,`label 4`]}}},me={class:`a_columns a_columns_count_12`},he={class:`a_column a_column_4 a_column_12_tablet`};function ge(e,t,n,ee,r,te){let i=p(`a-list`),a=p(`aloha-example`);return l(),s(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_GROUP_SEPARATOR_HTML_HEADER_`,description:`_A_LIST_GROUP_SEPARATOR_HTML_DESCRIPTION_`,props:[`separator-html`]},{default:m(()=>[o(`div`,me,[o(`div`,he,[u(i,{data:e.items,"is-data-simple-array":!0,"is-html":!0,"separator-html":`<div aria-hidden='true'>-------------</div>`},null,8,[`data`]),t[0]||=o(`div`,{class:`a_mt_4`},null,-1),u(i,{data:e.items,"is-data-simple-array":!0,"is-html":!0,"separator-html":`<hr>`},null,8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var _e=h(pe,[[`render`,ge]]);function ve(){return{codeHtml:`<a-radio
  v-model="modelTag"
  class="a_mb_4"
  :data="['ol', 'ul']"
  :is-data-simple-array="true"
></a-radio>

<a-list
  :data="items"
  key-label="label"
  :tag="modelTag"
></a-list>`}}function ye(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AList,
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageListTag",
  components: {
    AList,
    ARadio,
  },
  setup() {
    const items = [
      {
        label: "label 1",
      },
      {
        label: "label 2",
      },
      {
        label: "label 3",
      },
      {
        label: "label 4",
      },
    ];
    const modelTag = ref("ol");

    return {
      items,
      modelTag,
    };
  },
};`}}var be={name:`PageListTag`,components:{AList:a,AlohaExample:n,ARadio:r},setup(){let{codeHtml:e}=ve(),{codeJs:t}=ye();return{codeHtml:e,codeJs:t,items:[{label:`label 1`},{label:`label 2`},{label:`label 3`},{label:`label 4`}],modelTag:d(`ol`)}}},xe={class:`a_columns a_columns_count_12`},Se={class:`a_column a_column_4 a_column_12_tablet`};function Ce(e,t,n,ee,r,te){let i=p(`a-radio`),a=p(`a-list`),c=p(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_GROUP_TAG_HEADER_`,description:`_A_LIST_GROUP_TAG_DESCRIPTION_`,props:[`tag`]},{default:m(()=>[o(`div`,xe,[o(`div`,Se,[u(i,{class:`a_mb_4`,modelValue:e.modelTag,"onUpdate:modelValue":t[0]||=t=>e.modelTag=t,data:[`ol`,`ul`],"is-data-simple-array":!0},null,8,[`modelValue`]),u(a,{data:e.items,"key-label":`label`,tag:e.modelTag},null,8,[`data`,`tag`])])])]),_:1},8,[`code-html`,`code-js`])}var we=h(be,[[`render`,Ce]]);function Te(){return{codeHtml:`<a-list
  :data="items"
  key-children="items"
>
  <template
    v-slot:listItem="{ item, itemIndex }"
  >
    <pre>{{ item.label }}</pre>
  </template>
</a-list>`}}function Ee(){return{codeJs:`import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListWithSlot",
  components: {
    AList,
  },
  setup() {
    const items = [
      {
        label: "label 1",
        items: [
          {
            label: "label 1.1",
            items: [
              {
                label: "label 1.1.1",
              },
              {
                label: "label 1.1.2",
              },
              {
                label: "label 1.1.3",
              },
            ],
          },
          {
            label: "label 1.2",
          },
          {
            label: "label 1.3",
            items: [
              {
                label: "label 1.3.1",
              },
              {
                label: "label 1.3.2",
              },
              {
                label: "label 1.3.3",
              },
            ],
          },
        ],
      },
      {
        label: "level 2",
      },
      {
        label: "level 3",
      },
    ];

    return {
      items,
    };
  },
};`}}var De={name:`PageListWithSlot`,components:{AList:a,AlohaExample:n},setup(){let{codeHtml:e}=Te(),{codeJs:t}=Ee();return{codeHtml:e,codeJs:t,items:[{label:`label 1`,items:[{label:`label 1.1`,items:[{label:`label 1.1.1`},{label:`label 1.1.2`},{label:`label 1.1.3`}]},{label:`label 1.2`},{label:`label 1.3`,items:[{label:`label 1.3.1`},{label:`label 1.3.2`},{label:`label 1.3.3`}]}]},{label:`level 2`},{label:`level 3`}]}}};function $(e,t,n,ee,r,te){let i=p(`a-list`),a=p(`aloha-example`);return l(),s(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_WITH_SLOT_HEADER_`,description:`_A_LIST_WITH_SLOT_DESCRIPTION_`,slot:`listItem`},{default:m(()=>[u(i,{data:e.items,"key-children":`items`},{listItem:m(({item:e,itemIndex:t})=>[o(`pre`,null,`+ `+f(e.label),1)]),_:1},8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Oe=h(De,[[`render`,$]]);function ke(){let e=c(()=>te({placeholder:`_A_LIST_COMPONENT_NAME_`}));return{pageTitle:c(()=>`AList${e.value?` (${e.value})`:``}`)}}function Ae(){return{dataProps:[{name:`class-item`,description:`_A_LIST_CLASS_ITEM_PROP_DESCRIPTION_`,type:`String / Object / Array`,default:void 0,required:!1},{name:`class-main`,description:`_A_LIST_CLASS_MAIN_PROP_DESCRIPTION_`,type:`String / Object / Array`,default:void 0,required:!1},{name:`data`,description:`_A_LIST_DATA_PROP_DESCRIPTION_`,type:`Array`,default:`[]`,required:!1},{name:`is-data-simple-array`,description:`_A_LIST_IS_DATA_SIMPLE_ARRAY_PROP_DESCRIPTION_`,type:`Boolean`,default:`false`,required:!1},{name:`is-html`,description:`_A_LIST_IS_HTML_PROP_DESCRIPTION_`,type:`Boolean`,default:`true`,required:!1},{name:`key-children`,description:`_A_LIST_KEY_CHILDREN_PROP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-id`,description:`_A_LIST_KEY_ID_PROP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-label`,description:`_A_LIST_KEY_LABEL_PROP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-label-callback`,description:`_A_LIST_KEY_LABEL_CALLBACK_PROP_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`label-tag`,description:`_A_LIST_LABEL_TAG_PROP_DESCRIPTION_`,type:`String`,default:`span`,required:!1},{name:`list-item-tag`,description:`_A_LIST_LIST_ITEM_TAG_PROP_DESCRIPTION_`,type:`String`,default:`li`,required:!1},{name:`separator`,description:`_A_LIST_SEPARATOR_PROP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`separator-html`,description:`_A_LIST_SEPARATOR_HTML_PROP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`tag`,description:`_A_LIST_TAG_PROP_DESCRIPTION_`,type:`String`,default:`ul`,required:!1}]}}function je(){return{dataSlots:[{name:`listItem`,description:`_A_LIST_SLOT_DESCRIPTION_`}]}}var Me={name:`PageList`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:i,PageListBasic:b,PageListClassGroup:T,PageListIsDataSimpleArray:M,PageListIsHtml:z,PageListKeyChildren:W,PageListKeyId:Y,PageListKeyLabelCallback:re,PageListSeparator:ue,PageListSeparatorHtml:_e,PageListTag:we,PageListWithSlot:Oe},setup(){let{pageTitle:e}=ke(),{dataProps:t}=Ae(),{dataSlots:n}=je();return{dataProps:t,dataSlots:n,pageTitle:e}}};function Ne(e,t,n,ee,r,te){let i=p(`a-translation`),a=p(`page-list-basic`),o=p(`page-list-tag`),c=p(`page-list-key-children`),d=p(`page-list-is-data-simple-array`),f=p(`page-list-is-html`),h=p(`page-list-separator`),g=p(`page-list-separator-html`),_=p(`page-list-class-group`),v=p(`page-list-key-label-callback`),y=p(`page-list-key-id`),b=p(`page-list-with-slot`),x=p(`aloha-table-props`),S=p(`aloha-table-css-vars`),C=p(`aloha-page`);return l(),s(C,{"page-title":e.pageTitle},{body:m(()=>[u(i,{tag:`p`,html:`_A_LIST_COMPONENT_DESCRIPTION_`}),u(a),u(o),u(c),u(d),u(f),u(h),u(g),u(_),u(v),u(y),u(b),u(x,{data:e.dataProps},null,8,[`data`]),u(x,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),u(S,{files:[`utils/list_group`,`utils/list`,`components/ADivider`]})]),_:1},8,[`page-title`])}var Pe=h(Me,[[`render`,Ne]]);export{Pe as default};