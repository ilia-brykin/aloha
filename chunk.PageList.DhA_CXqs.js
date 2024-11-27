import{A as d}from"./chunk.AList.BSdvNlra.js";import{A as L,a as C}from"./chunk.AlohaExample.BT0L4sPf.js";import{A as O}from"./chunk.AlohaTableProps.AKmRY_Bl.js";import{_ as p,g as k,A as J}from"./bundle.index.CgpAdSdY.js";import{m as a,C as u,L as c,B as b,G as t,F as r,r as f,M as D,a as P}from"./chunk.vendor.D-Y3mz6a.js";import{A as N,f as G}from"./chunk.AForm.CpIOokJc.js";import"./chunk.vendor-lodash.ClBXVCWL.js";import"./chunk.ATable.DALhqzqJ.js";import"./chunk.utilsMath.7PmiGUbm.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";import"./chunk.ADatepicker.BS_Ghotq.js";import"./chunk.UiMixinProps.BVfs3aDc.js";import"./chunk.AInputNumber.C93fy0SX.js";import"./chunk.ATinymce.1a39zYU1.js";function j(){return{codeHtml:`<a-list
  :data="items"
  key-label="label"
></a-list>`}}function K(){return{codeJs:`import AList from "aloha-vue/src/AList/AList";
    
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
};`}}const B={name:"PageListClassGroup",components:{AList:d,AlohaExample:L},setup(){const{codeHtml:e}=j(),{codeJs:l}=K();return{codeHtml:e,codeJs:l,items:[{label:"label 1"},{label:"label 2"},{label:"label 3"},{label:"label 4"}]}}};function M(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["data","label"]},{default:c(()=>[t(s,{data:e.items,"key-label":"label"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const U=p(B,[["render",M]]);function q(){return{codeHtml:`<a-list
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
></a-list>`}}function Y(){return{codeJs:`import AList from "aloha-vue/src/AList/AList";
    
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
};`}}const w={name:"PageListClassGroup",components:{AList:d,AlohaExample:L},setup(){const{codeHtml:e}=q(),{codeJs:l}=Y();return{codeHtml:e,codeJs:l,items:[{label:"label 1"},{label:"label 2"},{label:"label 3"},{label:"label 4"}]}}};function W(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_GROUP_CLASS_GROUP_HEADER_",description:"_A_LIST_GROUP_CLASS_GROUP_DESCRIPTION_",props:["class-main","class-item"]},{default:c(()=>[t(s,{data:e.items,"key-label":"label","class-main":"a_list_group","class-item":"a_list_group__item"},null,8,["data"]),t(s,{class:"a_mt_5",data:e.items,"key-label":"label","class-main":"a_list_group a_list_group_gap","class-item":"a_list_group__item"},null,8,["data"]),t(s,{class:"a_mt_5",data:e.items,"key-label":"label","class-main":"a_list_group a_list_group_edge","class-item":"a_list_group__item"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const V=p(w,[["render",W]]);function F(){return{codeHtml:`<a-list
  :data="items1"
  :is-data-simple-array="true"
></a-list>
<a-list
  class="a_mt_4"
  :data="items2"
  :is-data-simple-array="true"
></a-list>`}}function z(){return{codeJs:`import AList from "aloha-vue/src/AList/AList";
    
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
};`}}const Q={name:"PageListIsDataSimpleArray",components:{AList:d,AlohaExample:L},setup(){const{codeHtml:e}=F(),{codeJs:l}=z();return{codeHtml:e,codeJs:l,items1:["label 1","label 2","label 3","label 4"],items2:["Level 1",["Level 2",["Level 2.1","Level 2.2"]],["Level 3",["Level 3.1",["Level 3.2",["Level 3.2.1","Level 3.2.2"]]]]]}}},X={class:"a_columns a_columns_count_12"},Z={class:"a_column a_column_4 a_column_12_tablet"};function x(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_GROUP_IS_DATA_SIMPLE_ARRAY_HEADER_",description:"_A_LIST_GROUP_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",props:["is-data-simple-array"]},{default:c(()=>[r("div",X,[r("div",Z,[t(s,{data:e.items1,"is-data-simple-array":!0},null,8,["data"]),t(s,{class:"a_mt_4",data:e.items2,"is-data-simple-array":!0},null,8,["data"])])])]),_:1},8,["code-html","code-js"])}const ee=p(Q,[["render",x]]);function le(){return{codeHtml:`<a-switch
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

import AList from "aloha-vue/src/AList/AList";
import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
    
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
};`}}const te={name:"PageListIsHtml",components:{AList:d,AlohaExample:L,ASwitch:N},setup(){const{codeHtml:e}=le(),{codeJs:l}=ae(),o=[{label:"label 1"},{label:"label 2"},{label:"label 3"},{label:"label 4"}],n=[{label:"Level 1",children:[{label:"Level 1.1",children:[{label:"Level 1.1.1"},{label:"Level 1.1.2"}]},{label:"Level 1.2",children:[{label:"Level 1.2.1"}]}]},{label:"Level 2",children:[{label:"Level 2.1"},{label:"Level 2.2"}]}],m=["Level 1",["Level 2",["Level 2.1","Level 2.2"]],["Level 3",["Level 3.1",["Level 3.2",["Level 3.2.1","Level 3.2.2"]]]]],_=f(!1);return{codeHtml:e,codeJs:l,items:o,itemsArrays:m,itemsWithChildren:n,modelIsHtml:_}}},se={class:"a_columns a_columns_count_12"},oe={class:"a_column a_column_4 a_column_12_tablet"},ie=r("div",{class:"a_mt_4"},null,-1),ne=r("div",{class:"a_mt_4"},null,-1);function re(e,l,o,n,m,_){const s=a("a-switch"),i=a("a-list"),h=a("aloha-example");return b(),u(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_GROUP_IS_HTML_HEADER_",description:"_A_LIST_GROUP_IS_HTML_DESCRIPTION_",props:["is-html"]},{default:c(()=>[r("div",se,[r("div",oe,[t(s,{modelValue:e.modelIsHtml,"onUpdate:modelValue":l[0]||(l[0]=A=>e.modelIsHtml=A),label:"is-html"},null,8,["modelValue"]),t(i,{data:e.items,"key-label":"label","is-html":e.modelIsHtml},null,8,["data","is-html"]),ie,t(i,{data:e.itemsWithChildren,"key-label":"label","key-children":"children","is-html":e.modelIsHtml},null,8,["data","is-html"]),ne,t(i,{data:e.itemsArrays,"key-label":"label","is-data-simple-array":!0,"is-html":e.modelIsHtml},null,8,["data","is-html"])])])]),_:1},8,["code-html","code-js"])}const me=p(te,[["render",re]]);function _e(){return{codeHtml:`<a-list
  :data="items"
  key-label="label"
  key-children="children"
></a-list>`}}function ce(){return{codeJs:`import AList from "aloha-vue/src/AList/AList";
    
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
};`}}const de={name:"PageListKeyChildren",components:{AList:d,AlohaExample:L},setup(){const{codeHtml:e}=_e(),{codeJs:l}=ce();return{codeHtml:e,codeJs:l,items:[{label:"Parent 1",children:[{label:"Child 1"},{label:"Child 2"}]},{label:"Parent 2",children:[{label:"Child 3"},{label:"Child 4"}]}]}}};function pe(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_KEY_CHILDREN_HEADER_",description:"_A_LIST_KEY_CHILDREN_DESCRIPTION_",props:["key-children"]},{default:c(()=>[t(s,{data:e.items,"key-label":"label","key-children":"children"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const ue=p(de,[["render",pe]]);function be(){return{codeHtml:`<a-list
  :data="items1"
  key-label="label"
  key-id="id"
></a-list>
<a-list
  class="a_mt_4"
  :data="items2"
  key-label="label"
  key-id="label"
></a-list>`}}function Le(){return{codeJs:`import AList from "aloha-vue/src/AList/AList";
    
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
};`}}const he={name:"PageListKeyId",components:{AList:d,AlohaExample:L},setup(){const{codeHtml:e}=be(),{codeJs:l}=Le();return{codeHtml:e,codeJs:l,items1:[{label:"Lorem",id:"1"},{label:"ipsum",id:"2"},{label:"dolor",id:"3"},{label:"Lorem",id:"4"}],items2:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}]}}};function Ae(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_KEY_ID_HEADER_",description:"_A_LIST_KEY_ID_DESCRIPTION_",props:["key-id"]},{default:c(()=>[t(s,{data:e.items1,"key-label":"label","key-id":"id"},null,8,["data"]),t(s,{class:"a_mt_4",data:e.items2,"key-label":"label","key-id":"label"},null,8,["data"])]),_:1},8,["code-html","code-js"])}const Ie=p(he,[["render",Ae]]);function Pe(){return{codeHtml:`<a-list
  :data="items"
  :key-label-callback="keyLabelCallback"
></a-list>`}}function fe(){return{codeJs:`import AList from "aloha-vue/src/AList/AList";
    
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
};`}}const Se={name:"PageListKeyLabelCallback",components:{AList:d,AlohaExample:L},setup(){const{codeHtml:e}=Pe(),{codeJs:l}=fe();return{codeHtml:e,codeJs:l,items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}],keyLabelCallback:({item:m,itemIndex:_})=>`${m.label} - Index: ${_}`}}};function ge(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_KEY_LABEL_CALLBACK_HEADER_",description:"_A_LIST_KEY_LABEL_CALLBACK_DESCRIPTION_",props:["key-label-callback"]},{default:c(()=>[t(s,{data:e.items,"key-label-callback":e.keyLabelCallback},null,8,["data","key-label-callback"])]),_:1},8,["code-html","code-js"])}const Te=p(Se,[["render",ge]]);function ye(){return{codeHtml:`<a-list
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
></a-list>`}}function ve(){return{codeJs:`import AList from "aloha-vue/src/AList/AList";
    
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
};`}}const $e={name:"PageListSeparator",components:{AList:d,AlohaExample:L},setup(){const{codeHtml:e}=ye(),{codeJs:l}=ve();return{codeHtml:e,codeJs:l,items:["label 1","label 2","label 3","label 4"]}}},He={class:"a_columns a_columns_count_12"},Re={class:"a_column a_column_4 a_column_12_tablet"},Ee=r("div",{class:"a_mt_4"},null,-1),Ce=r("div",{class:"a_mt_5"},null,-1),Oe=r("div",{class:"a_mt_4"},null,-1);function ke(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_GROUP_SEPARATOR_HEADER_",description:"_A_LIST_GROUP_SEPARATOR_DESCRIPTION_",props:["separator"]},{default:c(()=>[r("div",He,[r("div",Re,[t(s,{data:e.items,"is-data-simple-array":!0,"is-html":!1,separator:", "},null,8,["data"]),Ee,t(s,{data:e.items,"is-data-simple-array":!0,"is-html":!1,separator:" + "},null,8,["data"]),Ce,t(s,{data:e.items,"is-data-simple-array":!0,"is-html":!0,separator:","},null,8,["data"]),Oe,t(s,{data:e.items,"is-data-simple-array":!0,"is-html":!0,separator:";"},null,8,["data"])])])]),_:1},8,["code-html","code-js"])}const Je=p($e,[["render",ke]]);function De(){return{codeHtml:`<a-list
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
></a-list>`}}function Ne(){return{codeJs:`import AList from "aloha-vue/src/AList/AList";
    
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
};`}}const Ge={name:"PageListSeparatorHtml",components:{AList:d,AlohaExample:L},setup(){const{codeHtml:e}=De(),{codeJs:l}=Ne();return{codeHtml:e,codeJs:l,items:["label 1","label 2","label 3","label 4"]}}},je={class:"a_columns a_columns_count_12"},Ke={class:"a_column a_column_4 a_column_12_tablet"},Be=r("div",{class:"a_mt_4"},null,-1);function Me(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_GROUP_SEPARATOR_HTML_HEADER_",description:"_A_LIST_GROUP_SEPARATOR_HTML_DESCRIPTION_",props:["separator-html"]},{default:c(()=>[r("div",je,[r("div",Ke,[t(s,{data:e.items,"is-data-simple-array":!0,"is-html":!0,"separator-html":"<div aria-hidden='true'>-------------</div>"},null,8,["data"]),Be,t(s,{data:e.items,"is-data-simple-array":!0,"is-html":!0,"separator-html":"<hr>"},null,8,["data"])])])]),_:1},8,["code-html","code-js"])}const Ue=p(Ge,[["render",Me]]);function qe(){return{codeHtml:`<a-radio
  v-model="modelTag"
  class="a_mb_4"
  :data="['ol', 'ul']"
  :is-data-simple-array="true"
></a-radio>

<a-list
  :data="items"
  key-label="label"
  :tag="modelTag"
></a-list>`}}function Ye(){return{codeJs:`import {
  ref,
} from "vue";

import AList from "aloha-vue/src/AList/AList";
import ARadio from "aloha-vue/src/ui/ARadio/ARadio";
    
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
};`}}const we={name:"PageListTag",components:{AList:d,AlohaExample:L,ARadio:G},setup(){const{codeHtml:e}=qe(),{codeJs:l}=Ye(),o=[{label:"label 1"},{label:"label 2"},{label:"label 3"},{label:"label 4"}],n=f("ol");return{codeHtml:e,codeJs:l,items:o,modelTag:n}}},We={class:"a_columns a_columns_count_12"},Ve={class:"a_column a_column_4 a_column_12_tablet"};function Fe(e,l,o,n,m,_){const s=a("a-radio"),i=a("a-list"),h=a("aloha-example");return b(),u(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_GROUP_TAG_HEADER_",description:"_A_LIST_GROUP_TAG_DESCRIPTION_",props:["tag"]},{default:c(()=>[r("div",We,[r("div",Ve,[t(s,{class:"a_mb_4",modelValue:e.modelTag,"onUpdate:modelValue":l[0]||(l[0]=A=>e.modelTag=A),data:["ol","ul"],"is-data-simple-array":!0},null,8,["modelValue"]),t(i,{data:e.items,"key-label":"label",tag:e.modelTag},null,8,["data","tag"])])])]),_:1},8,["code-html","code-js"])}const ze=p(we,[["render",Fe]]);function Qe(){return{codeHtml:`<a-list
  :data="items"
  key-children="items"
>
  <template
    v-slot:listItem="{ item, itemIndex }"
  >
    <pre>{{ item.label }}</pre>
  </template>
</a-list>`}}function Xe(){return{codeJs:`import AList from "aloha-vue/src/AList/AList";
    
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
};`}}const Ze={name:"PageListWithSlot",components:{AList:d,AlohaExample:L},setup(){const{codeHtml:e}=Qe(),{codeJs:l}=Xe();return{codeHtml:e,codeJs:l,items:[{label:"label 1",items:[{label:"label 1.1",items:[{label:"label 1.1.1"},{label:"label 1.1.2"},{label:"label 1.1.3"}]},{label:"label 1.2"},{label:"label 1.3",items:[{label:"label 1.3.1"},{label:"label 1.3.2"},{label:"label 1.3.3"}]}]},{label:"level 2"},{label:"level 3"}]}}};function xe(e,l,o,n,m,_){const s=a("a-list"),i=a("aloha-example");return b(),u(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_LIST_WITH_SLOT_HEADER_",description:"_A_LIST_WITH_SLOT_DESCRIPTION_",slot:"listItem"},{default:c(()=>[t(s,{data:e.items,"key-children":"items"},{listItem:c(({item:h,itemIndex:A})=>[r("pre",null,"+ "+D(h.label),1)]),_:1},8,["data"])]),_:1},8,["code-html","code-js"])}const el=p(Ze,[["render",xe]]);function ll(){const e=P(()=>k({placeholder:"_A_LIST_COMPONENT_NAME_"}));return{pageTitle:P(()=>`AList${e.value?` (${e.value})`:""}`)}}function al(){return{dataProps:[{name:"class-item",description:"_A_LIST_CLASS_ITEM_PROP_DESCRIPTION_",type:"String / Object / Array",default:void 0,required:!1},{name:"class-main",description:"_A_LIST_CLASS_MAIN_PROP_DESCRIPTION_",type:"String / Object / Array",default:void 0,required:!1},{name:"data",description:"_A_LIST_DATA_PROP_DESCRIPTION_",type:"Array",default:"[]",required:!1},{name:"is-data-simple-array",description:"_A_LIST_IS_DATA_SIMPLE_ARRAY_PROP_DESCRIPTION_",type:"Boolean",default:"false",required:!1},{name:"is-html",description:"_A_LIST_IS_HTML_PROP_DESCRIPTION_",type:"Boolean",default:"true",required:!1},{name:"key-children",description:"_A_LIST_KEY_CHILDREN_PROP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-id",description:"_A_LIST_KEY_ID_PROP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-label",description:"_A_LIST_KEY_LABEL_PROP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-label-callback",description:"_A_LIST_KEY_LABEL_CALLBACK_PROP_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"label-tag",description:"_A_LIST_LABEL_TAG_PROP_DESCRIPTION_",type:"String",default:"span",required:!1},{name:"list-item-tag",description:"_A_LIST_LIST_ITEM_TAG_PROP_DESCRIPTION_",type:"String",default:"li",required:!1},{name:"separator",description:"_A_LIST_SEPARATOR_PROP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"separator-html",description:"_A_LIST_SEPARATOR_HTML_PROP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"tag",description:"_A_LIST_TAG_PROP_DESCRIPTION_",type:"String",default:"ul",required:!1}]}}function tl(){return{dataSlots:[{name:"listItem",description:"_A_LIST_SLOT_DESCRIPTION_"}]}}const sl={name:"PageList",components:{AList:d,AlohaPage:C,AlohaTableProps:O,ATranslation:J,PageListBasic:U,PageListClassGroup:V,PageListIsDataSimpleArray:ee,PageListIsHtml:me,PageListKeyChildren:ue,PageListKeyId:Ie,PageListKeyLabelCallback:Te,PageListSeparator:Je,PageListSeparatorHtml:Ue,PageListTag:ze,PageListWithSlot:el},setup(){const{pageTitle:e}=ll(),{dataProps:l}=al(),{dataSlots:o}=tl();return{dataProps:l,dataSlots:o,pageTitle:e}}};function ol(e,l,o,n,m,_){const s=a("a-translation"),i=a("page-list-basic"),h=a("page-list-tag"),A=a("page-list-key-children"),S=a("page-list-is-data-simple-array"),g=a("page-list-is-html"),T=a("page-list-separator"),y=a("page-list-separator-html"),v=a("page-list-class-group"),$=a("page-list-key-label-callback"),H=a("page-list-key-id"),R=a("page-list-with-slot"),I=a("aloha-table-props"),E=a("aloha-page");return b(),u(E,{"page-title":e.pageTitle},{body:c(()=>[t(s,{tag:"p",html:"_A_LIST_COMPONENT_DESCRIPTION_"}),t(i),t(h),t(A),t(S),t(g),t(T),t(y),t(v),t($),t(H),t(R),t(I,{data:e.dataProps},null,8,["data"]),t(I,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Pl=p(sl,[["render",ol]]);export{Pl as default};
