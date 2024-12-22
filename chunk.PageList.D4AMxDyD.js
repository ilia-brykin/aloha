import{A as c}from"./chunk.AList.95OQFWI8.js";import{A as L,a as C}from"./chunk.AlohaExample.DAr9Tlnu.js";import{A as O}from"./chunk.AlohaTableProps.DH-ZZEBp.js";import{_ as p,b as k,r as J,g as D,A as N}from"./bundle.index.BKSIYICd.js";import{k as a,J as u,aQ as d,H as b,O as t,N as r,r as f,aR as j,a as P}from"./chunk.vendor.DTe1dwcY.js";import"./chunk.vendor-lodash.DYgvgMhr.js";import"./chunk.APageTabTitle.Dc0mofpE.js";import"./chunk.AlohaHighlightjs.BnoxTF5z.js";import"./chunk.ATable.B4vpypnY.js";import"./chunk.translations-ar.DNd5WUpF.js";import"./chunk.translations-de.BW8KC1lT.js";import"./chunk.translations-en.C52QdnSW.js";import"./chunk.translations-es.DrJSkweL.js";import"./chunk.translations-fr.yYW9XAlD.js";import"./chunk.translations-hr.DHEZcPfE.js";import"./chunk.translations-it.BFeTT1Q6.js";import"./chunk.translations-ru.DS_CKcbr.js";function G(){return{codeHtml:`<a-list
  :data="items"
  key-label="label"
></a-list>`}}function K(){return{codeJs:`import { 
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
};`}}const B={name:"PageListClassGroup",components:{AList:c,AlohaExample:L},setup(){const{codeHtml:e}=G(),{codeJs:l}=K();return{codeHtml:e,codeJs:l,items:[{label:"label 1"},{label:"label 2"},{label:"label 3"},{label:"label 4"}]}}};function U(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["data","label"]},{default:d(()=>[t(s,{data:e.items,"key-label":"label"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const M=p(B,[["render",U]]);function q(){return{codeHtml:`<a-list
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
></a-list>`}}function Y(){return{codeJs:`import { 
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
};`}}const w={name:"PageListClassGroup",components:{AList:c,AlohaExample:L},setup(){const{codeHtml:e}=q(),{codeJs:l}=Y();return{codeHtml:e,codeJs:l,items:[{label:"label 1"},{label:"label 2"},{label:"label 3"},{label:"label 4"}]}}};function W(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_GROUP_CLASS_GROUP_HEADER_",description:"_A_LIST_GROUP_CLASS_GROUP_DESCRIPTION_",props:["class-main","class-item"]},{default:d(()=>[t(s,{data:e.items,"key-label":"label","class-main":"a_list_group","class-item":"a_list_group__item"},null,8,["data"]),t(s,{class:"a_mt_5",data:e.items,"key-label":"label","class-main":"a_list_group a_list_group_gap","class-item":"a_list_group__item"},null,8,["data"]),t(s,{class:"a_mt_5",data:e.items,"key-label":"label","class-main":"a_list_group a_list_group_edge","class-item":"a_list_group__item"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const V=p(w,[["render",W]]);function F(){return{codeHtml:`<a-list
  :data="items1"
  :is-data-simple-array="true"
></a-list>
<a-list
  class="a_mt_4"
  :data="items2"
  :is-data-simple-array="true"
></a-list>`}}function Q(){return{codeJs:`import { 
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
};`}}const z={name:"PageListIsDataSimpleArray",components:{AList:c,AlohaExample:L},setup(){const{codeHtml:e}=F(),{codeJs:l}=Q();return{codeHtml:e,codeJs:l,items1:["label 1","label 2","label 3","label 4"],items2:["Level 1",["Level 2",["Level 2.1","Level 2.2"]],["Level 3",["Level 3.1",["Level 3.2",["Level 3.2.1","Level 3.2.2"]]]]]}}},X={class:"a_columns a_columns_count_12"},Z={class:"a_column a_column_4 a_column_12_tablet"};function x(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_GROUP_IS_DATA_SIMPLE_ARRAY_HEADER_",description:"_A_LIST_GROUP_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",props:["is-data-simple-array"]},{default:d(()=>[r("div",X,[r("div",Z,[t(s,{data:e.items1,"is-data-simple-array":!0},null,8,["data"]),t(s,{class:"a_mt_4",data:e.items2,"is-data-simple-array":!0},null,8,["data"])])])]),_:1},8,["code-html","code-js"])}const ee=p(z,[["render",x]]);function le(){return{codeHtml:`<a-switch
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
></a-list>`}}function ae(){return{codeJs:`import {
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
};`}}const te={name:"PageListIsHtml",components:{AList:c,AlohaExample:L,ASwitch:k},setup(){const{codeHtml:e}=le(),{codeJs:l}=ae(),o=[{label:"label 1"},{label:"label 2"},{label:"label 3"},{label:"label 4"}],n=[{label:"Level 1",children:[{label:"Level 1.1",children:[{label:"Level 1.1.1"},{label:"Level 1.1.2"}]},{label:"Level 1.2",children:[{label:"Level 1.2.1"}]}]},{label:"Level 2",children:[{label:"Level 2.1"},{label:"Level 2.2"}]}],m=["Level 1",["Level 2",["Level 2.1","Level 2.2"]],["Level 3",["Level 3.1",["Level 3.2",["Level 3.2.1","Level 3.2.2"]]]]],_=f(!1);return{codeHtml:e,codeJs:l,items:o,itemsArrays:m,itemsWithChildren:n,modelIsHtml:_}}},se={class:"a_columns a_columns_count_12"},oe={class:"a_column a_column_4 a_column_12_tablet"};function ie(e,l,o,n,m,_){const s=a("a-switch"),i=a("a-list"),h=a("aloha-example");return b(),u(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_GROUP_IS_HTML_HEADER_",description:"_A_LIST_GROUP_IS_HTML_DESCRIPTION_",props:["is-html"]},{default:d(()=>[r("div",se,[r("div",oe,[t(s,{modelValue:e.modelIsHtml,"onUpdate:modelValue":l[0]||(l[0]=I=>e.modelIsHtml=I),label:"is-html"},null,8,["modelValue"]),t(i,{data:e.items,"key-label":"label","is-html":e.modelIsHtml},null,8,["data","is-html"]),l[1]||(l[1]=r("div",{class:"a_mt_4"},null,-1)),t(i,{data:e.itemsWithChildren,"key-label":"label","key-children":"children","is-html":e.modelIsHtml},null,8,["data","is-html"]),l[2]||(l[2]=r("div",{class:"a_mt_4"},null,-1)),t(i,{data:e.itemsArrays,"key-label":"label","is-data-simple-array":!0,"is-html":e.modelIsHtml},null,8,["data","is-html"])])])]),_:1},8,["code-html","code-js"])}const ne=p(te,[["render",ie]]);function re(){return{codeHtml:`<a-list
  :data="items"
  key-label="label"
  key-children="children"
></a-list>`}}function me(){return{codeJs:`import { 
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
};`}}const _e={name:"PageListKeyChildren",components:{AList:c,AlohaExample:L},setup(){const{codeHtml:e}=re(),{codeJs:l}=me();return{codeHtml:e,codeJs:l,items:[{label:"Parent 1",children:[{label:"Child 1"},{label:"Child 2"}]},{label:"Parent 2",children:[{label:"Child 3"},{label:"Child 4"}]}]}}};function de(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_KEY_CHILDREN_HEADER_",description:"_A_LIST_KEY_CHILDREN_DESCRIPTION_",props:["key-children"]},{default:d(()=>[t(s,{data:e.items,"key-label":"label","key-children":"children"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const ce=p(_e,[["render",de]]);function pe(){return{codeHtml:`<a-list
  :data="items1"
  key-label="label"
  key-id="id"
></a-list>
<a-list
  class="a_mt_4"
  :data="items2"
  key-label="label"
  key-id="label"
></a-list>`}}function ue(){return{codeJs:`import { 
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
};`}}const be={name:"PageListKeyId",components:{AList:c,AlohaExample:L},setup(){const{codeHtml:e}=pe(),{codeJs:l}=ue();return{codeHtml:e,codeJs:l,items1:[{label:"Lorem",id:"1"},{label:"ipsum",id:"2"},{label:"dolor",id:"3"},{label:"Lorem",id:"4"}],items2:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}]}}};function Le(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_KEY_ID_HEADER_",description:"_A_LIST_KEY_ID_DESCRIPTION_",props:["key-id"]},{default:d(()=>[t(s,{data:e.items1,"key-label":"label","key-id":"id"},null,8,["data"]),t(s,{class:"a_mt_4",data:e.items2,"key-label":"label","key-id":"label"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const he=p(be,[["render",Le]]);function Ie(){return{codeHtml:`<a-list
  :data="items"
  :key-label-callback="keyLabelCallback"
></a-list>`}}function Ae(){return{codeJs:`import { 
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
};`}}const Pe={name:"PageListKeyLabelCallback",components:{AList:c,AlohaExample:L},setup(){const{codeHtml:e}=Ie(),{codeJs:l}=Ae();return{codeHtml:e,codeJs:l,items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}],keyLabelCallback:({item:m,itemIndex:_})=>`${m.label} - Index: ${_}`}}};function fe(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_KEY_LABEL_CALLBACK_HEADER_",description:"_A_LIST_KEY_LABEL_CALLBACK_DESCRIPTION_",props:["key-label-callback"]},{default:d(()=>[t(s,{data:e.items,"key-label-callback":e.keyLabelCallback},null,8,["data","key-label-callback"])]),_:1},8,["code-html","code-js"])}const Se=p(Pe,[["render",fe]]);function ge(){return{codeHtml:`<a-list
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
></a-list>`}}function Te(){return{codeJs:`import { 
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
};`}}const ye={name:"PageListSeparator",components:{AList:c,AlohaExample:L},setup(){const{codeHtml:e}=ge(),{codeJs:l}=Te();return{codeHtml:e,codeJs:l,items:["label 1","label 2","label 3","label 4"]}}},ve={class:"a_columns a_columns_count_12"},$e={class:"a_column a_column_4 a_column_12_tablet"};function He(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_GROUP_SEPARATOR_HEADER_",description:"_A_LIST_GROUP_SEPARATOR_DESCRIPTION_",props:["separator"]},{default:d(()=>[r("div",ve,[r("div",$e,[t(s,{data:e.items,"is-data-simple-array":!0,"is-html":!1,separator:", "},null,8,["data"]),l[0]||(l[0]=r("div",{class:"a_mt_4"},null,-1)),t(s,{data:e.items,"is-data-simple-array":!0,"is-html":!1,separator:" + "},null,8,["data"]),l[1]||(l[1]=r("div",{class:"a_mt_5"},null,-1)),t(s,{data:e.items,"is-data-simple-array":!0,"is-html":!0,separator:","},null,8,["data"]),l[2]||(l[2]=r("div",{class:"a_mt_4"},null,-1)),t(s,{data:e.items,"is-data-simple-array":!0,"is-html":!0,separator:";"},null,8,["data"])])])]),_:1},8,["code-html","code-js"])}const Re=p(ye,[["render",He]]);function Ee(){return{codeHtml:`<a-list
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
></a-list>`}}function Ce(){return{codeJs:`import { 
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
};`}}const Oe={name:"PageListSeparatorHtml",components:{AList:c,AlohaExample:L},setup(){const{codeHtml:e}=Ee(),{codeJs:l}=Ce();return{codeHtml:e,codeJs:l,items:["label 1","label 2","label 3","label 4"]}}},ke={class:"a_columns a_columns_count_12"},Je={class:"a_column a_column_4 a_column_12_tablet"};function De(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_GROUP_SEPARATOR_HTML_HEADER_",description:"_A_LIST_GROUP_SEPARATOR_HTML_DESCRIPTION_",props:["separator-html"]},{default:d(()=>[r("div",ke,[r("div",Je,[t(s,{data:e.items,"is-data-simple-array":!0,"is-html":!0,"separator-html":"<div aria-hidden='true'>-------------</div>"},null,8,["data"]),l[0]||(l[0]=r("div",{class:"a_mt_4"},null,-1)),t(s,{data:e.items,"is-data-simple-array":!0,"is-html":!0,"separator-html":"<hr>"},null,8,["data"])])])]),_:1},8,["code-html","code-js"])}const Ne=p(Oe,[["render",De]]);function je(){return{codeHtml:`<a-radio
  v-model="modelTag"
  class="a_mb_4"
  :data="['ol', 'ul']"
  :is-data-simple-array="true"
></a-radio>

<a-list
  :data="items"
  key-label="label"
  :tag="modelTag"
></a-list>`}}function Ge(){return{codeJs:`import {
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
};`}}const Ke={name:"PageListTag",components:{AList:c,AlohaExample:L,ARadio:J},setup(){const{codeHtml:e}=je(),{codeJs:l}=Ge(),o=[{label:"label 1"},{label:"label 2"},{label:"label 3"},{label:"label 4"}],n=f("ol");return{codeHtml:e,codeJs:l,items:o,modelTag:n}}},Be={class:"a_columns a_columns_count_12"},Ue={class:"a_column a_column_4 a_column_12_tablet"};function Me(e,l,o,n,m,_){const s=a("a-radio"),i=a("a-list"),h=a("aloha-example");return b(),u(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_GROUP_TAG_HEADER_",description:"_A_LIST_GROUP_TAG_DESCRIPTION_",props:["tag"]},{default:d(()=>[r("div",Be,[r("div",Ue,[t(s,{class:"a_mb_4",modelValue:e.modelTag,"onUpdate:modelValue":l[0]||(l[0]=I=>e.modelTag=I),data:["ol","ul"],"is-data-simple-array":!0},null,8,["modelValue"]),t(i,{data:e.items,"key-label":"label",tag:e.modelTag},null,8,["data","tag"])])])]),_:1},8,["code-html","code-js"])}const qe=p(Ke,[["render",Me]]);function Ye(){return{codeHtml:`<a-list
  :data="items"
  key-children="items"
>
  <template
    v-slot:listItem="{ item, itemIndex }"
  >
    <pre>{{ item.label }}</pre>
  </template>
</a-list>`}}function we(){return{codeJs:`import { 
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
};`}}const We={name:"PageListWithSlot",components:{AList:c,AlohaExample:L},setup(){const{codeHtml:e}=Ye(),{codeJs:l}=we();return{codeHtml:e,codeJs:l,items:[{label:"label 1",items:[{label:"label 1.1",items:[{label:"label 1.1.1"},{label:"label 1.1.2"},{label:"label 1.1.3"}]},{label:"label 1.2"},{label:"label 1.3",items:[{label:"label 1.3.1"},{label:"label 1.3.2"},{label:"label 1.3.3"}]}]},{label:"level 2"},{label:"level 3"}]}}};function Ve(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_WITH_SLOT_HEADER_",description:"_A_LIST_WITH_SLOT_DESCRIPTION_",slot:"listItem"},{default:d(()=>[t(s,{data:e.items,"key-children":"items"},{listItem:d(({item:h,itemIndex:I})=>[r("pre",null,"+ "+j(h.label),1)]),_:1},8,["data"])]),_:1},8,["code-html","code-js"])}const Fe=p(We,[["render",Ve]]);function Qe(){const e=P(()=>D({placeholder:"_A_LIST_COMPONENT_NAME_"}));return{pageTitle:P(()=>`AList${e.value?` (${e.value})`:""}`)}}function ze(){return{dataProps:[{name:"class-item",description:"_A_LIST_CLASS_ITEM_PROP_DESCRIPTION_",type:"String / Object / Array",default:void 0,required:!1},{name:"class-main",description:"_A_LIST_CLASS_MAIN_PROP_DESCRIPTION_",type:"String / Object / Array",default:void 0,required:!1},{name:"data",description:"_A_LIST_DATA_PROP_DESCRIPTION_",type:"Array",default:"[]",required:!1},{name:"is-data-simple-array",description:"_A_LIST_IS_DATA_SIMPLE_ARRAY_PROP_DESCRIPTION_",type:"Boolean",default:"false",required:!1},{name:"is-html",description:"_A_LIST_IS_HTML_PROP_DESCRIPTION_",type:"Boolean",default:"true",required:!1},{name:"key-children",description:"_A_LIST_KEY_CHILDREN_PROP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-id",description:"_A_LIST_KEY_ID_PROP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-label",description:"_A_LIST_KEY_LABEL_PROP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-label-callback",description:"_A_LIST_KEY_LABEL_CALLBACK_PROP_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"label-tag",description:"_A_LIST_LABEL_TAG_PROP_DESCRIPTION_",type:"String",default:"span",required:!1},{name:"list-item-tag",description:"_A_LIST_LIST_ITEM_TAG_PROP_DESCRIPTION_",type:"String",default:"li",required:!1},{name:"separator",description:"_A_LIST_SEPARATOR_PROP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"separator-html",description:"_A_LIST_SEPARATOR_HTML_PROP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"tag",description:"_A_LIST_TAG_PROP_DESCRIPTION_",type:"String",default:"ul",required:!1}]}}function Xe(){return{dataSlots:[{name:"listItem",description:"_A_LIST_SLOT_DESCRIPTION_"}]}}const Ze={name:"PageList",components:{AList:c,AlohaPage:C,AlohaTableProps:O,ATranslation:N,PageListBasic:M,PageListClassGroup:V,PageListIsDataSimpleArray:ee,PageListIsHtml:ne,PageListKeyChildren:ce,PageListKeyId:he,PageListKeyLabelCallback:Se,PageListSeparator:Re,PageListSeparatorHtml:Ne,PageListTag:qe,PageListWithSlot:Fe},setup(){const{pageTitle:e}=Qe(),{dataProps:l}=ze(),{dataSlots:o}=Xe();return{dataProps:l,dataSlots:o,pageTitle:e}}};function xe(e,l,o,n,m,_){const s=a("a-translation"),i=a("page-list-basic"),h=a("page-list-tag"),I=a("page-list-key-children"),S=a("page-list-is-data-simple-array"),g=a("page-list-is-html"),T=a("page-list-separator"),y=a("page-list-separator-html"),v=a("page-list-class-group"),$=a("page-list-key-label-callback"),H=a("page-list-key-id"),R=a("page-list-with-slot"),A=a("aloha-table-props"),E=a("aloha-page");return b(),u(E,{"page-title":e.pageTitle},{body:d(()=>[t(s,{tag:"p",html:"_A_LIST_COMPONENT_DESCRIPTION_"}),t(i),t(h),t(I),t(S),t(g),t(T),t(y),t(v),t($),t(H),t(R),t(A,{data:e.dataProps},null,8,["data"]),t(A,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"])]),_:1},8,["page-title"])}const hl=p(Ze,[["render",xe]]);export{hl as default};
