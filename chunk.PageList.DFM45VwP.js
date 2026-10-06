import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{I as ee,V as te,Z as l,b as u,kt as d,t as f}from"./bundle.index.BmSiyQNH.js";import{n as p,t as m}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as h}from"./chunk.AlohaTableProps.Dksi7fmb.js";function g(){return{codeHtml:`<a-list
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
};`}}var v={name:`PageListClassGroup`,components:{AList:u,AlohaExample:m},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t,items:[{label:`label 1`},{label:`label 2`},{label:`label 3`},{label:`label 4`}]}}};function y(e,t,i,s,ee,te){let l=r(`a-list`),u=r(`aloha-example`);return c(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`data`,`label`]},{default:o(()=>[a(l,{data:e.items,"key-label":`label`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var b=f(v,[[`render`,y]]);function x(){return{codeHtml:`<a-list
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
};`}}var C={name:`PageListClassGroup`,components:{AList:u,AlohaExample:m},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t,items:[{label:`label 1`},{label:`label 2`},{label:`label 3`},{label:`label 4`}]}}};function w(e,t,i,s,ee,te){let l=r(`a-list`),u=r(`aloha-example`);return c(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_GROUP_CLASS_GROUP_HEADER_`,description:`_A_LIST_GROUP_CLASS_GROUP_DESCRIPTION_`,props:[`class-main`,`class-item`]},{default:o(()=>[a(l,{data:e.items,"key-label":`label`,"class-main":`a_list_group`,"class-item":`a_list_group__item`},null,8,[`data`]),a(l,{class:`a_mt_5`,data:e.items,"key-label":`label`,"class-main":`a_list_group a_list_group_gap`,"class-item":`a_list_group__item`},null,8,[`data`]),a(l,{class:`a_mt_5`,data:e.items,"key-label":`label`,"class-main":`a_list_group a_list_group_edge`,"class-item":`a_list_group__item`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var T=f(C,[[`render`,w]]);function E(){return{codeHtml:`<a-list
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
};`}}var O={name:`PageListIsDataSimpleArray`,components:{AList:u,AlohaExample:m},setup(){let{codeHtml:e}=E(),{codeJs:t}=D();return{codeHtml:e,codeJs:t,items1:[`label 1`,`label 2`,`label 3`,`label 4`],items2:[`Level 1`,[`Level 2`,[`Level 2.1`,`Level 2.2`]],[`Level 3`,[`Level 3.1`,[`Level 3.2`,[`Level 3.2.1`,`Level 3.2.2`]]]]]}}},k={class:`a_columns a_columns_count_12`},A={class:`a_column a_column_4 a_column_12_tablet`};function j(e,t,i,ee,te,l){let u=r(`a-list`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_GROUP_IS_DATA_SIMPLE_ARRAY_HEADER_`,description:`_A_LIST_GROUP_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_`,props:[`is-data-simple-array`]},{default:o(()=>[s(`div`,k,[s(`div`,A,[a(u,{data:e.items1,"is-data-simple-array":!0},null,8,[`data`]),a(u,{class:`a_mt_4`,data:e.items2,"is-data-simple-array":!0},null,8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var M=f(O,[[`render`,j]]);function N(){return{codeHtml:`<a-switch
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
};`}}var F={name:`PageListIsHtml`,components:{AList:u,AlohaExample:m,ASwitch:ee},setup(){let{codeHtml:e}=N(),{codeJs:t}=P();return{codeHtml:e,codeJs:t,items:[{label:`label 1`},{label:`label 2`},{label:`label 3`},{label:`label 4`}],itemsArrays:[`Level 1`,[`Level 2`,[`Level 2.1`,`Level 2.2`]],[`Level 3`,[`Level 3.1`,[`Level 3.2`,[`Level 3.2.1`,`Level 3.2.2`]]]]],itemsWithChildren:[{label:`Level 1`,children:[{label:`Level 1.1`,children:[{label:`Level 1.1.1`},{label:`Level 1.1.2`}]},{label:`Level 1.2`,children:[{label:`Level 1.2.1`}]}]},{label:`Level 2`,children:[{label:`Level 2.1`},{label:`Level 2.2`}]}],modelIsHtml:i(!1)}}},I={class:`a_columns a_columns_count_12`},L={class:`a_column a_column_4 a_column_12_tablet`};function R(e,t,i,ee,te,l){let u=r(`a-switch`),d=r(`a-list`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_GROUP_IS_HTML_HEADER_`,description:`_A_LIST_GROUP_IS_HTML_DESCRIPTION_`,props:[`is-html`]},{default:o(()=>[s(`div`,I,[s(`div`,L,[a(u,{modelValue:e.modelIsHtml,"onUpdate:modelValue":t[0]||=t=>e.modelIsHtml=t,label:`is-html`},null,8,[`modelValue`]),a(d,{data:e.items,"key-label":`label`,"is-html":e.modelIsHtml},null,8,[`data`,`is-html`]),t[1]||=s(`div`,{class:`a_mt_4`},null,-1),a(d,{data:e.itemsWithChildren,"key-label":`label`,"key-children":`children`,"is-html":e.modelIsHtml},null,8,[`data`,`is-html`]),t[2]||=s(`div`,{class:`a_mt_4`},null,-1),a(d,{data:e.itemsArrays,"key-label":`label`,"is-data-simple-array":!0,"is-html":e.modelIsHtml},null,8,[`data`,`is-html`])])])]),_:1},8,[`code-html`,`code-js`])}var z=f(F,[[`render`,R]]);function B(){return{codeHtml:`<a-list
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
};`}}var H={name:`PageListKeyChildren`,components:{AList:u,AlohaExample:m},setup(){let{codeHtml:e}=B(),{codeJs:t}=V();return{codeHtml:e,codeJs:t,items:[{label:`Parent 1`,children:[{label:`Child 1`},{label:`Child 2`}]},{label:`Parent 2`,children:[{label:`Child 3`},{label:`Child 4`}]}]}}};function U(e,t,i,s,ee,te){let l=r(`a-list`),u=r(`aloha-example`);return c(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_KEY_CHILDREN_HEADER_`,description:`_A_LIST_KEY_CHILDREN_DESCRIPTION_`,props:[`key-children`]},{default:o(()=>[a(l,{data:e.items,"key-label":`label`,"key-children":`children`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var W=f(H,[[`render`,U]]);function G(){return{codeHtml:`<a-list
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
};`}}var q={name:`PageListKeyId`,components:{AList:u,AlohaExample:m},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,items1:[{label:`Lorem`,id:`1`},{label:`ipsum`,id:`2`},{label:`dolor`,id:`3`},{label:`Lorem`,id:`4`}],items2:[{label:`Item 1`},{label:`Item 2`},{label:`Item 3`},{label:`Item 4`}]}}};function J(e,t,i,s,ee,te){let l=r(`a-list`),u=r(`aloha-example`);return c(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_KEY_ID_HEADER_`,description:`_A_LIST_KEY_ID_DESCRIPTION_`,props:[`key-id`]},{default:o(()=>[a(l,{data:e.items1,"key-label":`label`,"key-id":`id`},null,8,[`data`]),a(l,{class:`a_mt_4`,data:e.items2,"key-label":`label`,"key-id":`label`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Y=f(q,[[`render`,J]]);function X(){return{codeHtml:`<a-list
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
};`}}var Q={name:`PageListKeyLabelCallback`,components:{AList:u,AlohaExample:m},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t,items:[{label:`Item 1`},{label:`Item 2`},{label:`Item 3`},{label:`Item 4`}],keyLabelCallback:({item:e,itemIndex:t})=>`${e.label} - Index: ${t}`}}};function ne(e,t,i,s,ee,te){let l=r(`a-list`),u=r(`aloha-example`);return c(),n(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_KEY_LABEL_CALLBACK_HEADER_`,description:`_A_LIST_KEY_LABEL_CALLBACK_DESCRIPTION_`,props:[`key-label-callback`]},{default:o(()=>[a(l,{data:e.items,"key-label-callback":e.keyLabelCallback},null,8,[`data`,`key-label-callback`])]),_:1},8,[`code-html`,`code-js`])}var re=f(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-list
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
};`}}var oe={name:`PageListSeparator`,components:{AList:u,AlohaExample:m},setup(){let{codeHtml:e}=ie(),{codeJs:t}=ae();return{codeHtml:e,codeJs:t,items:[`label 1`,`label 2`,`label 3`,`label 4`]}}},se={class:`a_columns a_columns_count_12`},ce={class:`a_column a_column_4 a_column_12_tablet`};function le(e,t,i,ee,te,l){let u=r(`a-list`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_GROUP_SEPARATOR_HEADER_`,description:`_A_LIST_GROUP_SEPARATOR_DESCRIPTION_`,props:[`separator`]},{default:o(()=>[s(`div`,se,[s(`div`,ce,[a(u,{data:e.items,"is-data-simple-array":!0,"is-html":!1,separator:`, `},null,8,[`data`]),t[0]||=s(`div`,{class:`a_mt_4`},null,-1),a(u,{data:e.items,"is-data-simple-array":!0,"is-html":!1,separator:` + `},null,8,[`data`]),t[1]||=s(`div`,{class:`a_mt_5`},null,-1),a(u,{data:e.items,"is-data-simple-array":!0,"is-html":!0,separator:`,`},null,8,[`data`]),t[2]||=s(`div`,{class:`a_mt_4`},null,-1),a(u,{data:e.items,"is-data-simple-array":!0,"is-html":!0,separator:`;`},null,8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var ue=f(oe,[[`render`,le]]);function de(){return{codeHtml:`<a-list
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
};`}}var pe={name:`PageListSeparatorHtml`,components:{AList:u,AlohaExample:m},setup(){let{codeHtml:e}=de(),{codeJs:t}=fe();return{codeHtml:e,codeJs:t,items:[`label 1`,`label 2`,`label 3`,`label 4`]}}},me={class:`a_columns a_columns_count_12`},he={class:`a_column a_column_4 a_column_12_tablet`};function ge(e,t,i,ee,te,l){let u=r(`a-list`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_GROUP_SEPARATOR_HTML_HEADER_`,description:`_A_LIST_GROUP_SEPARATOR_HTML_DESCRIPTION_`,props:[`separator-html`]},{default:o(()=>[s(`div`,me,[s(`div`,he,[a(u,{data:e.items,"is-data-simple-array":!0,"is-html":!0,"separator-html":`<div aria-hidden='true'>-------------</div>`},null,8,[`data`]),t[0]||=s(`div`,{class:`a_mt_4`},null,-1),a(u,{data:e.items,"is-data-simple-array":!0,"is-html":!0,"separator-html":`<hr>`},null,8,[`data`])])])]),_:1},8,[`code-html`,`code-js`])}var _e=f(pe,[[`render`,ge]]);function ve(){return{codeHtml:`<a-radio
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
};`}}var be={name:`PageListTag`,components:{AList:u,AlohaExample:m,ARadio:te},setup(){let{codeHtml:e}=ve(),{codeJs:t}=ye();return{codeHtml:e,codeJs:t,items:[{label:`label 1`},{label:`label 2`},{label:`label 3`},{label:`label 4`}],modelTag:i(`ol`)}}},xe={class:`a_columns a_columns_count_12`},Se={class:`a_column a_column_4 a_column_12_tablet`};function Ce(e,t,i,ee,te,l){let u=r(`a-radio`),d=r(`a-list`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_LIST_GROUP_TAG_HEADER_`,description:`_A_LIST_GROUP_TAG_DESCRIPTION_`,props:[`tag`]},{default:o(()=>[s(`div`,xe,[s(`div`,Se,[a(u,{class:`a_mb_4`,modelValue:e.modelTag,"onUpdate:modelValue":t[0]||=t=>e.modelTag=t,data:[`ol`,`ul`],"is-data-simple-array":!0},null,8,[`modelValue`]),a(d,{data:e.items,"key-label":`label`,tag:e.modelTag},null,8,[`data`,`tag`])])])]),_:1},8,[`code-html`,`code-js`])}var we=f(be,[[`render`,Ce]]);function Te(){return{codeHtml:`<a-list
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
};`}}var De={name:`PageListWithSlot`,components:{AList:u,AlohaExample:m},setup(){let{codeHtml:e}=Te(),{codeJs:t}=Ee();return{codeHtml:e,codeJs:t,items:[{label:`label 1`,items:[{label:`label 1.1`,items:[{label:`label 1.1.1`},{label:`label 1.1.2`},{label:`label 1.1.3`}]},{label:`label 1.2`},{label:`label 1.3`,items:[{label:`label 1.3.1`},{label:`label 1.3.2`},{label:`label 1.3.3`}]}]},{label:`level 2`},{label:`level 3`}]}}};function $(t,i,ee,te,l,u){let d=r(`a-list`),f=r(`aloha-example`);return c(),n(f,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_LIST_WITH_SLOT_HEADER_`,description:`_A_LIST_WITH_SLOT_DESCRIPTION_`,slot:`listItem`},{default:o(()=>[a(d,{data:t.items,"key-children":`items`},{listItem:o(({item:t,itemIndex:n})=>[s(`pre`,null,`+ `+e(t.label),1)]),_:1},8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Oe=f(De,[[`render`,$]]);function ke(){let e=t(()=>d({placeholder:`_A_LIST_COMPONENT_NAME_`}));return{pageTitle:t(()=>`AList${e.value?` (${e.value})`:``}`)}}function Ae(){return{dataProps:[{name:`class-item`,description:`_A_LIST_CLASS_ITEM_PROP_DESCRIPTION_`,type:`String / Object / Array`,default:void 0,required:!1},{name:`class-main`,description:`_A_LIST_CLASS_MAIN_PROP_DESCRIPTION_`,type:`String / Object / Array`,default:void 0,required:!1},{name:`data`,description:`_A_LIST_DATA_PROP_DESCRIPTION_`,type:`Array`,default:`[]`,required:!1},{name:`is-data-simple-array`,description:`_A_LIST_IS_DATA_SIMPLE_ARRAY_PROP_DESCRIPTION_`,type:`Boolean`,default:`false`,required:!1},{name:`is-html`,description:`_A_LIST_IS_HTML_PROP_DESCRIPTION_`,type:`Boolean`,default:`true`,required:!1},{name:`key-children`,description:`_A_LIST_KEY_CHILDREN_PROP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-id`,description:`_A_LIST_KEY_ID_PROP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-label`,description:`_A_LIST_KEY_LABEL_PROP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-label-callback`,description:`_A_LIST_KEY_LABEL_CALLBACK_PROP_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`label-tag`,description:`_A_LIST_LABEL_TAG_PROP_DESCRIPTION_`,type:`String`,default:`span`,required:!1},{name:`list-item-tag`,description:`_A_LIST_LIST_ITEM_TAG_PROP_DESCRIPTION_`,type:`String`,default:`li`,required:!1},{name:`separator`,description:`_A_LIST_SEPARATOR_PROP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`separator-html`,description:`_A_LIST_SEPARATOR_HTML_PROP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`tag`,description:`_A_LIST_TAG_PROP_DESCRIPTION_`,type:`String`,default:`ul`,required:!1}]}}function je(){return{dataSlots:[{name:`listItem`,description:`_A_LIST_SLOT_DESCRIPTION_`}]}}var Me={name:`PageList`,components:{AlohaPage:p,AlohaTableProps:h,ATranslation:l,PageListBasic:b,PageListClassGroup:T,PageListIsDataSimpleArray:M,PageListIsHtml:z,PageListKeyChildren:W,PageListKeyId:Y,PageListKeyLabelCallback:re,PageListSeparator:ue,PageListSeparatorHtml:_e,PageListTag:we,PageListWithSlot:Oe},setup(){let{pageTitle:e}=ke(),{dataProps:t}=Ae(),{dataSlots:n}=je();return{dataProps:t,dataSlots:n,pageTitle:e}}};function Ne(e,t,i,s,ee,te){let l=r(`a-translation`),u=r(`page-list-basic`),d=r(`page-list-tag`),f=r(`page-list-key-children`),p=r(`page-list-is-data-simple-array`),m=r(`page-list-is-html`),h=r(`page-list-separator`),g=r(`page-list-separator-html`),_=r(`page-list-class-group`),v=r(`page-list-key-label-callback`),y=r(`page-list-key-id`),b=r(`page-list-with-slot`),x=r(`aloha-table-props`),S=r(`aloha-page`);return c(),n(S,{"page-title":e.pageTitle},{body:o(()=>[a(l,{tag:`p`,html:`_A_LIST_COMPONENT_DESCRIPTION_`}),a(u),a(d),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y),a(b),a(x,{data:e.dataProps},null,8,[`data`]),a(x,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var Pe=f(Me,[[`render`,Ne]]);export{Pe as default};