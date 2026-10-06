import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{B as ee}from"./chunk.vendor-lodash.BnpO4xCi.js";import{Et as l,T as u,Z as d,jt as f,kt as p,r as m,t as h}from"./bundle.index.BmSiyQNH.js";import{n as g,t as _}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as v}from"./chunk.AlohaTableProps.Dksi7fmb.js";function y(){return{codeHtml:`<a-tabs
  :data="data1"
  active-tab-id="3"
  key-id="id"
></a-tabs>
<a-tabs
  :active-tab-id="2"
  :data="data2"
  class="a_mt_3"
></a-tabs>`}}function b(){return{codeJs:`import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsActiveTabId",
  components: {
    ATabs,
  },
  setup() {
    const data1 = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
        id: "1",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
        id: "2",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        id: "3",
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
        id: "4",
      },
    ];
    
    const data2 = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
      },
    ];
    
    return {
      data1,
      data2,
    };
  },
};`}}var x={name:`PageTabsActiveTabId`,components:{AlohaExample:_,ATabs:m},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`,id:`1`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`,id:`2`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,id:`3`},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`,id:`4`}],t=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`}],{codeHtml:n}=y(),{codeJs:r}=b();return{codeHtml:n,codeJs:r,data1:e,data2:t}}};function S(e,t,i,s,ee,l){let u=r(`a-tabs`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_ACTIVE_TAB_ID_HEADER_`,description:`_A_TABS_GROUP_ACTIVE_TAB_ID_DESCRIPTION_`,props:[`active-tab-id`]},{default:o(()=>[a(u,{data:e.data1,"active-tab-id":`3`,"key-id":`id`},null,8,[`data`]),a(u,{class:`a_mt_3`,"active-tab-id":2,data:e.data2},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var C=h(x,[[`render`,S]]);function w(){return{codeHtml:`<a-tabs
  :data="data"
></a-tabs>`}}function T(){return{codeJs:`import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsBasic",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}var E={name:`PageTabsBasic`,components:{AlohaExample:_,ATabs:m},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=w(),{codeJs:n}=T();return{codeHtml:t,codeJs:n,data:e}}};function D(e,t,i,s,ee,l){let u=r(`a-tabs`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`data`]},{default:o(()=>[a(u,{data:e.data},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var O=h(E,[[`render`,D]]);function te(){return{codeHtml:`<a-form
  v-model="model"
  :data="dataForm"
>
  <template
    v-slot:deleteButton
  >
    <div>
      <a-element
        :disabled="!model.deleteTab"
        class="a_btn a_btn_primary"
        text="_A_GLOBAL_DELETE_"
        type="button"
        @click="deleteTab"
      ></a-element>
    </div>
  </template>
  
  <template
    v-slot:deleteButton
  >
    <div>
      <a-element
        :disabled="!model.addTab"
        class="a_btn a_btn_primary"
        text="_A_GLOBAL_ADD_"
        type="button"
        @click="deleteTab"
      ></a-element>
    </div>
  </template>
</a-form>
<a-tabs
  :data="data"
  :disabled="model.disabled"
  :is-boxed="model.isBoxed"
  :is-title-html="model.isTitleHtml"
  :is-vertical="model.isVertical"
  :title-placement="model.titlePlacement"
  key-content="label"
  key-title="label"
></a-tabs>`}}function k(){return{codeJs:`import {
  computed,
  ref,
} from "vue";

import { 
  AElement,
  AForm,
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsComplex",
  components: {
    AElement,
    AForm,
    ATabs,
  },
  setup() {
    const data = ref([
      {
        id: 1,
        label: "Lorem",
      },
      {
        id: 2,
        label: "ipsum",
      },
      {
        id: 3,
        label: "dolor",
      },
      {
        id: 4,
        label: "sit",
      },
      {
        id: 5,
        label: "amet",
      },
      {
        id: 6,
        label: "consectetur",
      },
      {
        id: 7,
        label: "adipisicing",
      },
      {
        id: 8,
        label: "elit",
      },
      {
        id: 9,
        label: "Maxime",
      },
      {
        id: 10,
        label: "mollitia",
      },
      {
        id: 11,
        label: "molestiae",
      },
      {
        id: 12,
        label: "quas",
      },
      {
        id: 13,
        label: "vel",
      },
      {
        id: 14,
        label: "sint",
      },
    ]);
    const model = ref({
      disabled: false,
      isBoxed: false,
      isTitleHtml: false,
      isVertical: false,
      titlePlacement: "top",
    });

    const dataForm = computed(() => {
      return [
        {
          id: "disabled",
          label: "_A_TABS_LABEL_DISABLED_",
          type: "switch",
          classColumn: "a_column a_column_6 a_column_12_touch",
        },
        {
          id: "isBoxed",
          label: "_A_TABS_LABEL_IS_BOXED_",
          type: "switch",
          classColumn: "a_column a_column_6 a_column_12_touch",
        },
        {
          id: "isTitleHtml",
          label: "_A_TABS_LABEL_IS_TITLE_HTML_",
          type: "switch",
          classColumn: "a_column a_column_6 a_column_12_touch",
        },
        {
          id: "isVertical",
          label: "_A_TABS_LABEL_IS_VERTICAL_",
          type: "switch",
          classColumn: "a_column a_column_6 a_column_12_touch",
        },
        {
          id: "titlePlacement",
          label: "_A_TABS_LABEL_TITLE_PLACEMENT_",
          type: "select",
          data: placements,
          isDataSimpleArray: true,
          deselectable: false,
          isLabelFloat: false,
        },
        {
          id: "deleteTabs",
          label: "_A_TABS_LABEL_DELETE_TABS_",
          type: "fieldset",
          classColumn: "a_column a_column_6 a_column_12_touch",
          children: [
            {
              id: "deleteTab",
              label: "_A_TABS_TAB_",
              type: "select",
              data: data.value,
              isLabelFloat: false,
              keyLabel: "label",
              keyId: "id",
              search: true,
            },
            {
              type: "template",
              slotName: "deleteButton",
            },
          ],
        },
        {
          id: "addTabs",
          label: "_A_TABS_LABEL_ADD_TABS_",
          type: "fieldset",
          classColumn: "a_column a_column_6 a_column_12_touch",
          children: [
            {
              id: "addTab",
              label: "_A_TABS_TAB_",
              type: "text",
              isLabelFloat: false,
            },
            {
              type: "template",
              slotName: "addButton",
            },
          ],
        },
      ];
    });

    const deleteTab = () => {
      const TAB_INDEX = findIndex(data.value, ["id", model.value.deleteTab]);
      if (TAB_INDEX !== -1) {
        data.value.splice(TAB_INDEX, 1);
      }
      model.value.deleteTab = undefined;
    };

    const addTab = () => {
      const LAST_ID = data.value[data.value.length - 1]?.id || 0;
      data.value.push({
        label: model.value.addTab,
        id: LAST_ID + 1,
      });

      model.value.addTab = undefined;
    };
    
    return {
      addTab,
      data,
      dataForm,
      deleteTab,
      model,
    };
  },
};`}}var A={name:`PageTabsComplex`,components:{AElement:l,AForm:u,AlohaExample:_,ATabs:m},setup(){let e=i([{id:1,label:`Lorem`},{id:2,label:`ipsum`},{id:3,label:`dolor`},{id:4,label:`sit`},{id:5,label:`amet`},{id:6,label:`consectetur`},{id:7,label:`adipisicing`},{id:8,label:`elit`},{id:9,label:`Maxime`},{id:10,label:`mollitia`},{id:11,label:`molestiae`},{id:12,label:`quas`},{id:13,label:`vel`},{id:14,label:`sint`}]),n=i({disabled:!1,isBoxed:!1,isTitleHtml:!1,isVertical:!1,titlePlacement:`top`}),r=t(()=>[{id:`disabled`,label:`_A_TABS_LABEL_DISABLED_`,type:`switch`,classColumn:`a_column a_column_6 a_column_12_touch`},{id:`isBoxed`,label:`_A_TABS_LABEL_IS_BOXED_`,type:`switch`,classColumn:`a_column a_column_6 a_column_12_touch`},{id:`isTitleHtml`,label:`_A_TABS_LABEL_IS_TITLE_HTML_`,type:`switch`,classColumn:`a_column a_column_6 a_column_12_touch`},{id:`isVertical`,label:`_A_TABS_LABEL_IS_VERTICAL_`,type:`switch`,classColumn:`a_column a_column_6 a_column_12_touch`},{id:`titlePlacement`,label:`_A_TABS_LABEL_TITLE_PLACEMENT_`,type:`select`,data:f,isDataSimpleArray:!0,deselectable:!1,isLabelFloat:!1},{id:`deleteTabs`,label:`_A_TABS_LABEL_DELETE_TABS_`,type:`fieldset`,classColumn:`a_column a_column_6 a_column_12_touch`,children:[{id:`deleteTab`,label:`_A_TABS_TAB_`,type:`select`,data:e.value,isLabelFloat:!1,keyLabel:`label`,keyId:`id`,search:!0},{type:`template`,slotName:`deleteButton`}]},{id:`addTabs`,label:`_A_TABS_LABEL_ADD_TABS_`,type:`fieldset`,classColumn:`a_column a_column_6 a_column_12_touch`,children:[{id:`addTab`,label:`_A_TABS_TAB_`,type:`text`,isLabelFloat:!1},{type:`template`,slotName:`addButton`}]}]),a=()=>{let t=ee(e.value,[`id`,n.value.deleteTab]);t!==-1&&e.value.splice(t,1),n.value.deleteTab=void 0},o=()=>{let t=e.value[e.value.length-1]?.id||0;e.value.push({label:n.value.addTab,id:t+1}),n.value.addTab=void 0},{codeHtml:s}=te(),{codeJs:c}=k();return{addTab:o,codeHtml:s,codeJs:c,data:e,dataForm:r,deleteTab:a,model:n}}};function j(e,t,i,ee,l,u){let d=r(`a-element`),f=r(`a-form`),p=r(`a-tabs`),m=r(`aloha-example`);return c(),n(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_COMPLEX_HEADER_`,description:`_A_TABS_GROUP_COMPLEX_DESCRIPTION_`},{default:o(()=>[a(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.dataForm},{deleteButton:o(()=>[s(`div`,null,[a(d,{class:`a_btn a_btn_primary`,disabled:!e.model.deleteTab,text:`_A_GLOBAL_DELETE_`,type:`button`,onClick:e.deleteTab},null,8,[`disabled`,`onClick`])])]),addButton:o(()=>[s(`div`,null,[a(d,{class:`a_btn a_btn_primary`,disabled:!e.model.addTab,text:`_A_GLOBAL_ADD_`,type:`button`,onClick:e.addTab},null,8,[`disabled`,`onClick`])])]),_:1},8,[`modelValue`,`data`]),a(p,{data:e.data,disabled:e.model.disabled,"is-boxed":e.model.isBoxed,"is-title-html":e.model.isTitleHtml,"is-vertical":e.model.isVertical,"title-placement":e.model.titlePlacement,"key-content":`label`,"key-title":`label`},null,8,[`data`,`disabled`,`is-boxed`,`is-title-html`,`is-vertical`,`title-placement`])]),_:1},8,[`code-html`,`code-js`])}var M=h(A,[[`render`,j]]);function N(){return{codeHtml:`<a-tabs
  :data="data"
  :disabled="true"
></a-tabs>`}}function P(){return{codeJs:`import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsDisabled",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}var F={name:`PageTabsDisabled`,components:{AlohaExample:_,ATabs:m},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=N(),{codeJs:n}=P();return{codeHtml:t,codeJs:n,data:e}}};function I(e,t,i,s,ee,l){let u=r(`a-tabs`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_DISABLED_HEADER_`,description:`_A_TABS_GROUP_DISABLED_DESCRIPTION_`,props:[`disabled`]},{default:o(()=>[a(u,{data:e.data,disabled:!0},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var L=h(F,[[`render`,I]]);function R(){return{codeHtml:`<a-tabs
  :data="data"
  key-id="slotTab"
>
  <template
    v-slot:tab1="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <a-translation
      class="a_mr_2"
      tag="span"
      text="_A_TABS_TAB_"
    ></a-translation>
    <span>{{ index + 1 }}</span>
  </template>
  
  <template
    v-slot:tab2="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <a-translation
      class="a_mr_2"
      tag="span"
      text="_A_TABS_TAB_"
    ></a-translation>
    <span>{{ index + 1 }}</span>
  </template>
  
  <template
    v-slot:tab3="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <a-translation
      class="a_mr_2"
      tag="span"
      text="_A_TABS_TAB_"
    ></a-translation>
    <span>{{ index + 1 }}</span>
  </template>
  
  <template
    v-slot:content1="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ tabId }}</span>
  </template>
  
  <template
    v-slot:content2="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ tabId }}</span>
  </template>
  
  <template
    v-slot:content3="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ tabId }}</span>
  </template>
</a-tabs>`}}function z(){return{codeJs:`import { 
  ATabs,
} from "aloha-vue";
import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTabsDynamicSlots",
  components: {
    ATabs,
    ATranslation,
  },
  setup() {
    const data = [
      {
        slotTab: "tab1",
        slotContent: "content1",
      },
      {
        slotTab: "tab2",
        slotContent: "content2",
      },
      {
        slotTab: "tab3",
        slotContent: "content3",
      },
    ];
    
    return {
      data,
    };
  },
};`}}var B={name:`PageTabsDynamicSlots`,components:{AlohaExample:_,ATabs:m,ATranslation:d},setup(){let e=[{slotTab:`tab1`,slotContent:`content1`},{slotTab:`tab2`,slotContent:`content2`},{slotTab:`tab3`,slotContent:`content3`}],{codeHtml:t}=R(),{codeJs:n}=z();return{codeHtml:t,codeJs:n,data:e}}};function V(t,i,ee,l,u,d){let f=r(`a-translation`),p=r(`a-tabs`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_TABS_GROUP_DYNAMIC_SLOTS_HEADER_`,description:`_A_TABS_GROUP_DYNAMIC_SLOTS_DESCRIPTION_`,props:[`data`],slots:[`slotTab`,`slotContent`]},{default:o(()=>[a(p,{data:t.data,"key-id":`slotTab`},{tab1:o(({activeTabId:t,contentId:n,index:r,isActive:i,parentId:o,tab:c,tabId:ee})=>[a(f,{class:`a_mr_2`,tag:`span`,text:`_A_TABS_TAB_`}),s(`span`,null,e(r+1),1)]),tab2:o(({activeTabId:t,contentId:n,index:r,isActive:i,parentId:o,tab:c,tabId:ee})=>[a(f,{class:`a_mr_2`,tag:`span`,text:`_A_TABS_TAB_`}),s(`span`,null,e(r+1),1)]),tab3:o(({activeTabId:t,contentId:n,index:r,isActive:i,parentId:o,tab:c,tabId:ee})=>[a(f,{class:`a_mr_2`,tag:`span`,text:`_A_TABS_TAB_`}),s(`span`,null,e(r+1),1)]),content1:o(({activeTabId:t,contentId:n,index:r,isActive:i,parentId:a,tab:o,tabId:c})=>[s(`span`,null,e(c),1)]),content2:o(({activeTabId:t,contentId:n,index:r,isActive:i,parentId:a,tab:o,tabId:c})=>[s(`span`,null,e(c),1)]),content3:o(({activeTabId:t,contentId:n,index:r,isActive:i,parentId:a,tab:o,tabId:c})=>[s(`span`,null,e(c),1)]),_:1},8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var H=h(B,[[`render`,V]]);function U(){return{codeHtml:`<a-tabs
  :data="data"
  :is-boxed="true"
></a-tabs>
<a-tabs
  :data="data"
  :is-boxed="false"
  class="a_mt_3"
></a-tabs>`}}function W(){return{codeJs:`import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsIsBoxed",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}var G={name:`PageTabsIsBoxed`,components:{AlohaExample:_,ATabs:m},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=U(),{codeJs:n}=W();return{codeHtml:t,codeJs:n,data:e}}};function K(e,t,i,s,ee,l){let u=r(`a-tabs`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_IS_BOXED_HEADER_`,description:`_A_TABS_GROUP_IS_BOXED_DESCRIPTION_`,props:[`is-boxed`]},{default:o(()=>[a(u,{data:e.data,"is-boxed":!0},null,8,[`data`]),a(u,{class:`a_mt_3`,data:e.data,"is-boxed":!1},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var q=h(G,[[`render`,K]]);function J(){return{codeHtml:`<a-tabs
  :data="data"
  :active-tab-id="activeTabId"
  :is-change-outside="true"
  key-id="id"
  @change="changeTab"
></a-tabs>`}}function Y(){return{codeJs:`import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsIsChangeOutside",
  components: {
    ATabs,
  },
  setup() {
    const activeTabId = ref("1");
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
        id: "1",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
        id: "2",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        id: "3",
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
        id: "4",
      },
    ];

    const changeTab = ({ $event, tab, tabId, index }) => {
      console.log("$event, tab, tabId, index", $event, tab, tabId, index);
      activeTabId.value = tabId;
    };
    
    return {
      activeTabId,
      changeTab,
      data,
    };
  },
};`}}var X={name:`PageTabsIsChangeOutside`,components:{AlohaExample:_,ATabs:m},setup(){let e=i(`1`),t=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`,id:`1`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`,id:`2`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,id:`3`},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`,id:`4`}],n=({$event:t,tab:n,tabId:r,index:i})=>{console.log(`$event, tab, tabId, index`,t,n,r,i),e.value=r},{codeHtml:r}=J(),{codeJs:a}=Y();return{activeTabId:e,changeTab:n,codeHtml:r,codeJs:a,data:t}}};function Z(e,t,i,s,ee,l){let u=r(`a-tabs`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_IS_CHANGE_OUTSIDE_HEADER_`,description:`_A_TABS_GROUP_IS_CHANGE_OUTSIDE_DESCRIPTION_`,props:[`is-change-outside`,`active-tab-id`],emits:[`change`]},{default:o(()=>[a(u,{data:e.data,"active-tab-id":e.activeTabId,"is-change-outside":!0,"key-id":`id`,onChange:e.changeTab},null,8,[`data`,`active-tab-id`,`onChange`])]),_:1},8,[`code-html`,`code-js`])}var Q=h(X,[[`render`,Z]]);function ne(){return{codeHtml:`<a-tabs
  :data="data"
  :is-vertical="true"
></a-tabs>
<a-tabs
  :data="data"
  :is-boxed="true"
  :is-vertical="true"
  class="a_mt_3"
></a-tabs>
<a-tabs
  :data="data"
  :is-vertical="false"
  class="a_mt_3"
></a-tabs>`}}function re(){return{codeJs:`import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsIsVertical",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}var ie={name:`PageTabsIsVertical`,components:{AlohaExample:_,ATabs:m},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=ne(),{codeJs:n}=re();return{codeHtml:t,codeJs:n,data:e}}};function ae(e,t,i,s,ee,l){let u=r(`a-tabs`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_IS_VERTICAL_HEADER_`,description:`_A_TABS_GROUP_IS_VERTICAL_DESCRIPTION_`,props:[`is-vertical`]},{default:o(()=>[a(u,{data:e.data,"is-vertical":!0},null,8,[`data`]),a(u,{class:`a_mt_3`,data:e.data,"is-boxed":!0,"is-vertical":!0},null,8,[`data`]),a(u,{class:`a_mt_3`,data:e.data,"is-vertical":!1},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var oe=h(ie,[[`render`,ae]]);function se(){return{codeHtml:`<a-tabs
  :data="data"
  key-active="active"
></a-tabs>`}}function ce(){return{codeJs:`import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsKeyActive",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        active: true,
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}var le={name:`PageTabsKeyActive`,components:{AlohaExample:_,ATabs:m},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,active:!0},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`}],{codeHtml:t}=se(),{codeJs:n}=ce();return{codeHtml:t,codeJs:n,data:e}}};function ue(e,t,i,s,ee,l){let u=r(`a-tabs`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_ACTIVE_HEADER_`,description:`_A_TABS_GROUP_KEY_ACTIVE_DESCRIPTION_`,props:[`key-active`]},{default:o(()=>[a(u,{data:e.data,"key-active":`active`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var de=h(le,[[`render`,ue]]);function fe(){return{codeHtml:`<a-tabs
  :data="data"
  key-content="aloha"
></a-tabs>`}}function pe(){return{codeJs:`import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsKeyContent",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        aloha: "<strong>_A_TABS_CONTENT_1_</strong>",
      },
      {
        label: "_A_TABS_TAB_2_",
        aloha: "<strong>_A_TABS_CONTENT_2_</strong>",
      },
      {
        label: "_A_TABS_TAB_3_",
        aloha: "<strong>_A_TABS_CONTENT_3_</strong>",
      },
    ];
    
    return {
      data,
    };
  },
};`}}var me={name:`PageTabsKeyContent`,components:{AlohaExample:_,ATabs:m},setup(){let e=[{label:`_A_TABS_TAB_1_`,aloha:`<strong>_A_TABS_CONTENT_1_</strong>`},{label:`_A_TABS_TAB_2_`,aloha:`<strong>_A_TABS_CONTENT_2_</strong>`},{label:`_A_TABS_TAB_3_`,aloha:`<strong>_A_TABS_CONTENT_3_</strong>`}],{codeHtml:t}=fe(),{codeJs:n}=pe();return{codeHtml:t,codeJs:n,data:e}}};function he(e,t,i,s,ee,l){let u=r(`a-tabs`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_CONTENT_HEADER_`,description:`_A_TABS_GROUP_KEY_CONTENT_DESCRIPTION_`,props:[`key-content`]},{default:o(()=>[a(u,{data:e.data,"key-content":`aloha`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var ge=h(me,[[`render`,he]]);function _e(){return{codeHtml:`<a-tabs
  :data="data"
  key-disabled="disabled"
></a-tabs>`}}function ve(){return{codeJs:`import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsKeyDisabled",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
        disabled: true,
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        disabled: true,
      },
      {
        label: "_A_TABS_TAB_4_",
        content: "_A_TABS_CONTENT_4_",
        disabled: false,
      },
    ];
    
    return {
      data,
    };
  },
};`}}var ye={name:`PageTabsKeyDisabled`,components:{AlohaExample:_,ATabs:m},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`,disabled:!0},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,disabled:!0},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`,disabled:!1}],{codeHtml:t}=_e(),{codeJs:n}=ve();return{codeHtml:t,codeJs:n,data:e}}};function be(e,t,i,s,ee,l){let u=r(`a-tabs`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_DISABLED_HEADER_`,description:`_A_TABS_GROUP_KEY_DISABLED_DESCRIPTION_`,props:[`key-disabled`]},{default:o(()=>[a(u,{data:e.data,"key-disabled":`disabled`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var xe=h(ye,[[`render`,be]]);function Se(){return{codeHtml:`<a-tabs
  :data="data"
  key-id="id"
></a-tabs>`}}function Ce(){return{codeJs:`import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsKeyId",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
        id: "1",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
        id: "2",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
        id: "3",
      },
    ];
    
    return {
      data,
    };
  },
};`}}var we={name:`PageTabsKeyId`,components:{AlohaExample:_,ATabs:m},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`,id:`1`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`,id:`2`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,id:`3`}],{codeHtml:t}=Se(),{codeJs:n}=Ce();return{codeHtml:t,codeJs:n,data:e}}};function Te(e,t,i,s,ee,l){let u=r(`a-tabs`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_ID_HEADER_`,description:`_A_TABS_GROUP_KEY_ID_DESCRIPTION_`,props:[`key-id`]},{default:o(()=>[a(u,{data:e.data,"key-id":`id`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Ee=h(we,[[`render`,Te]]);function De(){return{codeHtml:`<a-tabs
  :data="data"
  key-label="name"
></a-tabs>`}}function Oe(){return{codeJs:`import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsKeyLabel",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        name: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        name: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        name: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}var ke={name:`PageTabsKeyLabel`,components:{AlohaExample:_,ATabs:m},setup(){let e=[{name:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{name:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{name:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=De(),{codeJs:n}=Oe();return{codeHtml:t,codeJs:n,data:e}}};function Ae(e,t,i,s,ee,l){let u=r(`a-tabs`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_LABEL_HEADER_`,description:`_A_TABS_GROUP_KEY_LABEL_DESCRIPTION_`,props:[`key-label`]},{default:o(()=>[a(u,{data:e.data,"key-label":`name`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var je=h(ke,[[`render`,Ae]]);function Me(){return{codeHtml:`<a-tabs
  :data="data"
  key-title="label"
></a-tabs>`}}function Ne(){return{codeJs:`import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsKeyTitle",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}var Pe={name:`PageTabsKeyTitle`,components:{AlohaExample:_,ATabs:m},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=Me(),{codeJs:n}=Ne();return{codeHtml:t,codeJs:n,data:e}}};function Fe(e,t,i,s,ee,l){let u=r(`a-tabs`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_TITLE_HEADER_`,description:`_A_TABS_GROUP_KEY_TITLE_DESCRIPTION_`,props:[`key-title`]},{default:o(()=>[a(u,{data:e.data,"key-title":`label`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Ie=h(Pe,[[`render`,Fe]]);function Le(){return{codeHtml:`<a-tabs
  :data="data"
  key-id="id"
>
  <template
    v-slot:tab="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ index + 1 }}</span>
    <a-element
      :icon-left="tab.icon"
      class="a_ml_2"
      type="text"
    ></a-element>
    <a-translation
      :text="tab.name"
      class="a_ml_2"
      tag="span"
    ></a-translation>
  </template>
  
  <template
    v-slot:content="{ activeTabId, contentId, index, isActive, parentId, tab, tabId }"
  >
    <span>{{ tab.content }}</span>
  </template>
</a-tabs>`}}function Re(){return{codeJs:`import {
  AElement,
  ATabs,
  ATranslation,
} from "aloha-vue";
    
export default {
  name: "PageTabsStaticSlots",
  components: {
    AElement,
    ATabs,
    ATranslation,
  },
  setup() {
    const data = [
      {
        id: "1",
        name: "_A_TABS_TAB_1_",
        icon: "Gear",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        id: "2",
        name: "_A_TABS_TAB_2_",
        icon: "CodeSquare",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        id: "3",
        name: "_A_TABS_TAB_3_",
        icon: "EjectFill",
        content: "_A_TABS_CONTENT_3_",
      },
      {
        id: "4",
        name: "_A_TABS_TAB_4_",
        icon: "InputCursor",
        content: "_A_TABS_CONTENT_4_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}var ze={name:`PageTabsStaticSlots`,components:{AElement:l,AlohaExample:_,ATabs:m,ATranslation:d},setup(){let e=[{id:`1`,name:`_A_TABS_TAB_1_`,icon:`Gear`,content:`_A_TABS_CONTENT_1_`},{id:`2`,name:`_A_TABS_TAB_2_`,icon:`CodeSquare`,content:`_A_TABS_CONTENT_2_`},{id:`3`,name:`_A_TABS_TAB_3_`,icon:`EjectFill`,content:`_A_TABS_CONTENT_3_`},{id:`4`,name:`_A_TABS_TAB_4_`,icon:`InputCursor`,content:`_A_TABS_CONTENT_4_`}],{codeHtml:t}=Le(),{codeJs:n}=Re();return{codeHtml:t,codeJs:n,data:e}}};function Be(t,i,ee,l,u,d){let f=r(`a-element`),p=r(`a-translation`),m=r(`a-tabs`),h=r(`aloha-example`);return c(),n(h,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_TABS_GROUP_STATIC_SLOTS_HEADER_`,description:`_A_TABS_GROUP_STATIC_SLOTS_DESCRIPTION_`,props:[`data`],slots:[`tab`,`content`]},{default:o(()=>[a(m,{data:t.data,"key-id":`id`},{tab:o(({activeTabId:t,contentId:n,index:r,isActive:i,parentId:o,tab:c,tabId:ee})=>[s(`span`,null,e(r+1),1),a(f,{class:`a_ml_2`,"icon-left":c.icon,type:`text`},null,8,[`icon-left`]),a(p,{class:`a_ml_2`,text:c.name,tag:`span`},null,8,[`text`])]),content:o(({activeTabId:t,contentId:n,index:r,isActive:i,parentId:a,tab:o,tabId:c})=>[s(`span`,null,e(o.content),1)]),_:1},8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Ve=h(ze,[[`render`,Be]]);function $(){return{codeHtml:`<a-tabs
  :data="data"
  :is-title-html="true"
  key-title="label"
></a-tabs>`}}function He(){return{codeJs:`import { 
  ATabs,
} from "aloha-vue";
    
export default {
  name: "PageTabsTitleHtml",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    
    return {
      data,
    };
  },
};`}}var Ue={name:`PageTabsTitleHtml`,components:{AlohaExample:_,ATabs:m},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=$(),{codeJs:n}=He();return{codeHtml:t,codeJs:n,data:e}}};function We(e,t,i,s,ee,l){let u=r(`a-tabs`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_TITLE_HTML_HEADER_`,description:`_A_TABS_GROUP_TITLE_HTML_DESCRIPTION_`,props:[`is-title-html`,`key-title`]},{default:o(()=>[a(u,{data:e.data,"is-title-html":!0,"key-title":`label`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Ge=h(Ue,[[`render`,We]]);function Ke(){return{dataEvents:[{name:`change`,description:`_A_TABS_EVENTS_CHANGE_DESCRIPTION_`,type:`Function`}]}}function qe(){let e=t(()=>p({placeholder:`_A_TABS_COMPONENT_NAME_`}));return{pageTitle:t(()=>`ATabs${e.value?` (${e.value})`:``}`)}}function Je(){return{dataProps:[{name:`active-tab-id`,description:`_A_TABS_PROPS_ACTIVE_TAB_ID_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`data`,description:`_A_TABS_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:void 0,required:!0},{name:`disabled`,description:`_A_TABS_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`id`,description:`_A_GLOBAL_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_tabs_")`,required:!1},{name:`is-boxed`,description:`_A_TABS_PROPS_IS_BOXED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-change-outside`,description:`_A_TABS_PROPS_IS_CHANGE_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-title-html`,description:`_A_GLOBAL_PROPS_IS_TITLE_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-vertical`,description:`_A_TABS_PROPS_IS_VERTICAL_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`key-active`,description:`_A_TABS_PROPS_KEY_ACTIVE_DESCRIPTION_`,type:`String`,default:`active`,required:!1},{name:`key-content`,description:`_A_TABS_PROPS_KEY_CONTENT_DESCRIPTION_`,type:`String`,default:`content`,required:!1},{name:`key-disabled`,description:`_A_TABS_PROPS_KEY_DISABLED_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-id`,description:`_A_TABS_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-label`,description:`_A_TABS_PROPS_KEY_LABEL_DESCRIPTION_`,type:`String`,default:`label`,required:!1},{name:`key-title`,description:`_A_TABS_PROPS_KEY_TITLE_DESCRIPTION_`,type:`String`,default:`title`,required:!1},{name:`title-placement`,description:`_A_GLOBAL_PROPS_TITLE_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1}]}}function Ye(){return{dataSlots:[{name:`content`,description:`_A_TABS_SLOTS_CONTENT_DESCRIPTION_`},{name:`slotContent`,description:`_A_TABS_SLOTS_SLOT_CONTENT_DESCRIPTION_`},{name:`slotTab`,description:`_A_TABS_SLOTS_SLOT_TAB_DESCRIPTION_`},{name:`tab`,description:`_A_TABS_SLOTS_TAB_DESCRIPTION_`}]}}var Xe={name:`PageTabs`,components:{AlohaPage:g,AlohaTableProps:v,ATranslation:d,PageTabsActiveTabId:C,PageTabsBasic:O,PageTabsComplex:M,PageTabsDisabled:L,PageTabsDynamicSlots:H,PageTabsIsBoxed:q,PageTabsIsChangeOutside:Q,PageTabsIsVertical:oe,PageTabsKeyActive:de,PageTabsKeyContent:ge,PageTabsKeyDisabled:xe,PageTabsKeyId:Ee,PageTabsKeyLabel:je,PageTabsKeyTitle:Ie,PageTabsStaticSlots:Ve,PageTabsTitleHtml:Ge},setup(){let{pageTitle:e}=qe(),{dataProps:t}=Je(),{dataEvents:n}=Ke(),{dataSlots:r}=Ye();return{dataEvents:n,dataProps:t,dataSlots:r,pageTitle:e}}};function Ze(e,t,i,s,ee,l){let u=r(`a-translation`),d=r(`page-tabs-basic`),f=r(`page-tabs-disabled`),p=r(`page-tabs-key-disabled`),m=r(`page-tabs-key-label`),h=r(`page-tabs-key-content`),g=r(`page-tabs-key-title`),_=r(`page-tabs-title-html`),v=r(`page-tabs-is-boxed`),y=r(`page-tabs-is-vertical`),b=r(`page-tabs-key-id`),x=r(`page-tabs-key-active`),S=r(`page-tabs-active-tab-id`),C=r(`page-tabs-is-change-outside`),w=r(`page-tabs-static-slots`),T=r(`page-tabs-dynamic-slots`),E=r(`page-tabs-complex`),D=r(`aloha-table-props`),O=r(`aloha-page`);return c(),n(O,{"page-title":e.pageTitle},{body:o(()=>[a(u,{tag:`p`,html:`_A_TABS_COMPONENT_DESCRIPTION_`}),a(d),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y),a(b),a(x),a(S),a(C),a(w),a(T),a(E),a(D,{data:e.dataProps},null,8,[`data`]),a(D,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),a(D,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var Qe=h(Xe,[[`render`,Ze]]);export{Qe as default};