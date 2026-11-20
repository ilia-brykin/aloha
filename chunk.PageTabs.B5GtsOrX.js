import{t as e}from"./chunk.AlohaPage.BsAnTsRc.js";import{t}from"./chunk.AlohaTableProps.9utK7Q0F.js";import{t as n}from"./chunk.AlohaExample.BYkezWgI.js";import{E as r,Vt as i,Zt as a,it as o,qt as s,r as c}from"./bundle.index.DDCYOIhm.js";import{Ft as l,It as u,Pt as d,Qt as f,Vt as p,cn as m,mn as h,nn as g,on as _}from"./chunk.vendor.CTxSDDRk.js";import{t as v}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";import{U as y}from"./chunk.vendor-lodash.BfU-HRrF.js";function b(){return{codeHtml:`<a-tabs
  :data="data1"
  active-tab-id="3"
  key-id="id"
></a-tabs>
<a-tabs
  :active-tab-id="2"
  :data="data2"
  class="a_mt_3"
></a-tabs>`}}function x(){return{codeJs:`import { 
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
};`}}var S={name:`PageTabsActiveTabId`,components:{AlohaExample:n,ATabs:c},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`,id:`1`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`,id:`2`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,id:`3`},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`,id:`4`}],t=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`}],{codeHtml:n}=b(),{codeJs:r}=x();return{codeHtml:n,codeJs:r,data1:e,data2:t}}};function C(e,t,n,r,i,a){let o=g(`a-tabs`),s=g(`aloha-example`);return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_ACTIVE_TAB_ID_HEADER_`,description:`_A_TABS_GROUP_ACTIVE_TAB_ID_DESCRIPTION_`,props:[`active-tab-id`]},{default:_(()=>[p(o,{data:e.data1,"active-tab-id":`3`,"key-id":`id`},null,8,[`data`]),p(o,{class:`a_mt_3`,"active-tab-id":2,data:e.data2},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var w=v(S,[[`render`,C]]);function T(){return{codeHtml:`<a-tabs
  :data="data"
></a-tabs>`}}function E(){return{codeJs:`import { 
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
};`}}var D={name:`PageTabsBasic`,components:{AlohaExample:n,ATabs:c},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=T(),{codeJs:n}=E();return{codeHtml:t,codeJs:n,data:e}}};function O(e,t,n,r,i,a){let o=g(`a-tabs`),s=g(`aloha-example`);return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`data`]},{default:_(()=>[p(o,{data:e.data},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var k=v(D,[[`render`,O]]);function A(){return{codeHtml:`<a-form
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
></a-tabs>`}}function ee(){return{codeJs:`import {
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
          labelPosition: "top",
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
              labelPosition: "top",
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
              labelPosition: "top",
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
};`}}var te={name:`PageTabsComplex`,components:{AElement:i,AForm:r,AlohaExample:n,ATabs:c},setup(){let e=m([{id:1,label:`Lorem`},{id:2,label:`ipsum`},{id:3,label:`dolor`},{id:4,label:`sit`},{id:5,label:`amet`},{id:6,label:`consectetur`},{id:7,label:`adipisicing`},{id:8,label:`elit`},{id:9,label:`Maxime`},{id:10,label:`mollitia`},{id:11,label:`molestiae`},{id:12,label:`quas`},{id:13,label:`vel`},{id:14,label:`sint`}]),t=m({disabled:!1,isBoxed:!1,isTitleHtml:!1,isVertical:!1,titlePlacement:`top`}),n=d(()=>[{id:`disabled`,label:`_A_TABS_LABEL_DISABLED_`,type:`switch`,classColumn:`a_column a_column_6 a_column_12_touch`},{id:`isBoxed`,label:`_A_TABS_LABEL_IS_BOXED_`,type:`switch`,classColumn:`a_column a_column_6 a_column_12_touch`},{id:`isTitleHtml`,label:`_A_TABS_LABEL_IS_TITLE_HTML_`,type:`switch`,classColumn:`a_column a_column_6 a_column_12_touch`},{id:`isVertical`,label:`_A_TABS_LABEL_IS_VERTICAL_`,type:`switch`,classColumn:`a_column a_column_6 a_column_12_touch`},{id:`titlePlacement`,label:`_A_TABS_LABEL_TITLE_PLACEMENT_`,type:`select`,data:s,isDataSimpleArray:!0,deselectable:!1,labelPosition:`top`},{id:`deleteTabs`,label:`_A_TABS_LABEL_DELETE_TABS_`,type:`fieldset`,classColumn:`a_column a_column_6 a_column_12_touch`,children:[{id:`deleteTab`,label:`_A_TABS_TAB_`,type:`select`,data:e.value,labelPosition:`top`,keyLabel:`label`,keyId:`id`,search:!0},{type:`template`,slotName:`deleteButton`}]},{id:`addTabs`,label:`_A_TABS_LABEL_ADD_TABS_`,type:`fieldset`,classColumn:`a_column a_column_6 a_column_12_touch`,children:[{id:`addTab`,label:`_A_TABS_TAB_`,type:`text`,labelPosition:`top`},{type:`template`,slotName:`addButton`}]}]),r=()=>{let n=y(e.value,[`id`,t.value.deleteTab]);n!==-1&&e.value.splice(n,1),t.value.deleteTab=void 0},i=()=>{let n=e.value[e.value.length-1]?.id||0;e.value.push({label:t.value.addTab,id:n+1}),t.value.addTab=void 0},{codeHtml:a}=A(),{codeJs:o}=ee();return{addTab:i,codeHtml:a,codeJs:o,data:e,dataForm:n,deleteTab:r,model:t}}};function j(e,t,n,r,i,a){let o=g(`a-element`),s=g(`a-form`),c=g(`a-tabs`),d=g(`aloha-example`);return f(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_COMPLEX_HEADER_`,description:`_A_TABS_GROUP_COMPLEX_DESCRIPTION_`},{default:_(()=>[p(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.dataForm},{deleteButton:_(()=>[l(`div`,null,[p(o,{class:`a_btn a_btn_primary`,disabled:!e.model.deleteTab,text:`_A_GLOBAL_DELETE_`,type:`button`,onClick:e.deleteTab},null,8,[`disabled`,`onClick`])])]),addButton:_(()=>[l(`div`,null,[p(o,{class:`a_btn a_btn_primary`,disabled:!e.model.addTab,text:`_A_GLOBAL_ADD_`,type:`button`,onClick:e.addTab},null,8,[`disabled`,`onClick`])])]),_:1},8,[`modelValue`,`data`]),p(c,{data:e.data,disabled:e.model.disabled,"is-boxed":e.model.isBoxed,"is-title-html":e.model.isTitleHtml,"is-vertical":e.model.isVertical,"title-placement":e.model.titlePlacement,"key-content":`label`,"key-title":`label`},null,8,[`data`,`disabled`,`is-boxed`,`is-title-html`,`is-vertical`,`title-placement`])]),_:1},8,[`code-html`,`code-js`])}var M=v(te,[[`render`,j]]);function N(){return{codeHtml:`<a-tabs
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
};`}}var F={name:`PageTabsDisabled`,components:{AlohaExample:n,ATabs:c},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=N(),{codeJs:n}=P();return{codeHtml:t,codeJs:n,data:e}}};function I(e,t,n,r,i,a){let o=g(`a-tabs`),s=g(`aloha-example`);return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_DISABLED_HEADER_`,description:`_A_TABS_GROUP_DISABLED_DESCRIPTION_`,props:[`disabled`]},{default:_(()=>[p(o,{data:e.data,disabled:!0},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var L=v(F,[[`render`,I]]);function R(){return{codeHtml:`<a-tabs
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
};`}}var B={name:`PageTabsDynamicSlots`,components:{AlohaExample:n,ATabs:c,ATranslation:o},setup(){let e=[{slotTab:`tab1`,slotContent:`content1`},{slotTab:`tab2`,slotContent:`content2`},{slotTab:`tab3`,slotContent:`content3`}],{codeHtml:t}=R(),{codeJs:n}=z();return{codeHtml:t,codeJs:n,data:e}}};function V(e,t,n,r,i,a){let o=g(`a-translation`),s=g(`a-tabs`),c=g(`aloha-example`);return f(),u(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_DYNAMIC_SLOTS_HEADER_`,description:`_A_TABS_GROUP_DYNAMIC_SLOTS_DESCRIPTION_`,props:[`data`],slots:[`slotTab`,`slotContent`]},{default:_(()=>[p(s,{data:e.data,"key-id":`slotTab`},{tab1:_(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:s})=>[p(o,{class:`a_mr_2`,tag:`span`,text:`_A_TABS_TAB_`}),l(`span`,null,h(n+1),1)]),tab2:_(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:s})=>[p(o,{class:`a_mr_2`,tag:`span`,text:`_A_TABS_TAB_`}),l(`span`,null,h(n+1),1)]),tab3:_(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:s})=>[p(o,{class:`a_mr_2`,tag:`span`,text:`_A_TABS_TAB_`}),l(`span`,null,h(n+1),1)]),content1:_(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:o})=>[l(`span`,null,h(o),1)]),content2:_(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:o})=>[l(`span`,null,h(o),1)]),content3:_(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:o})=>[l(`span`,null,h(o),1)]),_:1},8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var H=v(B,[[`render`,V]]);function U(){return{codeHtml:`<a-tabs
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
};`}}var G={name:`PageTabsIsBoxed`,components:{AlohaExample:n,ATabs:c},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=U(),{codeJs:n}=W();return{codeHtml:t,codeJs:n,data:e}}};function K(e,t,n,r,i,a){let o=g(`a-tabs`),s=g(`aloha-example`);return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_IS_BOXED_HEADER_`,description:`_A_TABS_GROUP_IS_BOXED_DESCRIPTION_`,props:[`is-boxed`]},{default:_(()=>[p(o,{data:e.data,"is-boxed":!0},null,8,[`data`]),p(o,{class:`a_mt_3`,data:e.data,"is-boxed":!1},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var q=v(G,[[`render`,K]]);function J(){return{codeHtml:`<a-tabs
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
};`}}var X={name:`PageTabsIsChangeOutside`,components:{AlohaExample:n,ATabs:c},setup(){let e=m(`1`),t=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`,id:`1`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`,id:`2`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,id:`3`},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`,id:`4`}],n=({$event:t,tab:n,tabId:r,index:i})=>{console.log(`$event, tab, tabId, index`,t,n,r,i),e.value=r},{codeHtml:r}=J(),{codeJs:i}=Y();return{activeTabId:e,changeTab:n,codeHtml:r,codeJs:i,data:t}}};function Z(e,t,n,r,i,a){let o=g(`a-tabs`),s=g(`aloha-example`);return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_IS_CHANGE_OUTSIDE_HEADER_`,description:`_A_TABS_GROUP_IS_CHANGE_OUTSIDE_DESCRIPTION_`,props:[`is-change-outside`,`active-tab-id`],emits:[`change`]},{default:_(()=>[p(o,{data:e.data,"active-tab-id":e.activeTabId,"is-change-outside":!0,"key-id":`id`,onChange:e.changeTab},null,8,[`data`,`active-tab-id`,`onChange`])]),_:1},8,[`code-html`,`code-js`])}var Q=v(X,[[`render`,Z]]);function ne(){return{codeHtml:`<a-tabs
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
};`}}var ie={name:`PageTabsIsVertical`,components:{AlohaExample:n,ATabs:c},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=ne(),{codeJs:n}=re();return{codeHtml:t,codeJs:n,data:e}}};function ae(e,t,n,r,i,a){let o=g(`a-tabs`),s=g(`aloha-example`);return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_IS_VERTICAL_HEADER_`,description:`_A_TABS_GROUP_IS_VERTICAL_DESCRIPTION_`,props:[`is-vertical`]},{default:_(()=>[p(o,{data:e.data,"is-vertical":!0},null,8,[`data`]),p(o,{class:`a_mt_3`,data:e.data,"is-boxed":!0,"is-vertical":!0},null,8,[`data`]),p(o,{class:`a_mt_3`,data:e.data,"is-vertical":!1},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var oe=v(ie,[[`render`,ae]]);function se(){return{codeHtml:`<a-tabs
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
};`}}var le={name:`PageTabsKeyActive`,components:{AlohaExample:n,ATabs:c},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,active:!0},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`}],{codeHtml:t}=se(),{codeJs:n}=ce();return{codeHtml:t,codeJs:n,data:e}}};function ue(e,t,n,r,i,a){let o=g(`a-tabs`),s=g(`aloha-example`);return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_ACTIVE_HEADER_`,description:`_A_TABS_GROUP_KEY_ACTIVE_DESCRIPTION_`,props:[`key-active`]},{default:_(()=>[p(o,{data:e.data,"key-active":`active`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var de=v(le,[[`render`,ue]]);function fe(){return{codeHtml:`<a-tabs
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
};`}}var me={name:`PageTabsKeyContent`,components:{AlohaExample:n,ATabs:c},setup(){let e=[{label:`_A_TABS_TAB_1_`,aloha:`<strong>_A_TABS_CONTENT_1_</strong>`},{label:`_A_TABS_TAB_2_`,aloha:`<strong>_A_TABS_CONTENT_2_</strong>`},{label:`_A_TABS_TAB_3_`,aloha:`<strong>_A_TABS_CONTENT_3_</strong>`}],{codeHtml:t}=fe(),{codeJs:n}=pe();return{codeHtml:t,codeJs:n,data:e}}};function he(e,t,n,r,i,a){let o=g(`a-tabs`),s=g(`aloha-example`);return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_CONTENT_HEADER_`,description:`_A_TABS_GROUP_KEY_CONTENT_DESCRIPTION_`,props:[`key-content`]},{default:_(()=>[p(o,{data:e.data,"key-content":`aloha`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var ge=v(me,[[`render`,he]]);function _e(){return{codeHtml:`<a-tabs
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
};`}}var ye={name:`PageTabsKeyDisabled`,components:{AlohaExample:n,ATabs:c},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`,disabled:!0},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,disabled:!0},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`,disabled:!1}],{codeHtml:t}=_e(),{codeJs:n}=ve();return{codeHtml:t,codeJs:n,data:e}}};function be(e,t,n,r,i,a){let o=g(`a-tabs`),s=g(`aloha-example`);return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_DISABLED_HEADER_`,description:`_A_TABS_GROUP_KEY_DISABLED_DESCRIPTION_`,props:[`key-disabled`]},{default:_(()=>[p(o,{data:e.data,"key-disabled":`disabled`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var xe=v(ye,[[`render`,be]]);function Se(){return{codeHtml:`<a-tabs
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
};`}}var we={name:`PageTabsKeyId`,components:{AlohaExample:n,ATabs:c},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`,id:`1`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`,id:`2`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,id:`3`}],{codeHtml:t}=Se(),{codeJs:n}=Ce();return{codeHtml:t,codeJs:n,data:e}}};function Te(e,t,n,r,i,a){let o=g(`a-tabs`),s=g(`aloha-example`);return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_ID_HEADER_`,description:`_A_TABS_GROUP_KEY_ID_DESCRIPTION_`,props:[`key-id`]},{default:_(()=>[p(o,{data:e.data,"key-id":`id`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Ee=v(we,[[`render`,Te]]);function De(){return{codeHtml:`<a-tabs
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
};`}}var ke={name:`PageTabsKeyLabel`,components:{AlohaExample:n,ATabs:c},setup(){let e=[{name:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{name:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{name:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=De(),{codeJs:n}=Oe();return{codeHtml:t,codeJs:n,data:e}}};function Ae(e,t,n,r,i,a){let o=g(`a-tabs`),s=g(`aloha-example`);return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_LABEL_HEADER_`,description:`_A_TABS_GROUP_KEY_LABEL_DESCRIPTION_`,props:[`key-label`]},{default:_(()=>[p(o,{data:e.data,"key-label":`name`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var je=v(ke,[[`render`,Ae]]);function Me(){return{codeHtml:`<a-tabs
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
};`}}var Pe={name:`PageTabsKeyTitle`,components:{AlohaExample:n,ATabs:c},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=Me(),{codeJs:n}=Ne();return{codeHtml:t,codeJs:n,data:e}}};function Fe(e,t,n,r,i,a){let o=g(`a-tabs`),s=g(`aloha-example`);return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_TITLE_HEADER_`,description:`_A_TABS_GROUP_KEY_TITLE_DESCRIPTION_`,props:[`key-title`]},{default:_(()=>[p(o,{data:e.data,"key-title":`label`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Ie=v(Pe,[[`render`,Fe]]);function Le(){return{codeHtml:`<a-tabs
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
};`}}var ze={name:`PageTabsStaticSlots`,components:{AElement:i,AlohaExample:n,ATabs:c,ATranslation:o},setup(){let e=[{id:`1`,name:`_A_TABS_TAB_1_`,icon:`Gear`,content:`_A_TABS_CONTENT_1_`},{id:`2`,name:`_A_TABS_TAB_2_`,icon:`CodeSquare`,content:`_A_TABS_CONTENT_2_`},{id:`3`,name:`_A_TABS_TAB_3_`,icon:`EjectFill`,content:`_A_TABS_CONTENT_3_`},{id:`4`,name:`_A_TABS_TAB_4_`,icon:`InputCursor`,content:`_A_TABS_CONTENT_4_`}],{codeHtml:t}=Le(),{codeJs:n}=Re();return{codeHtml:t,codeJs:n,data:e}}};function Be(e,t,n,r,i,a){let o=g(`a-element`),s=g(`a-translation`),c=g(`a-tabs`),d=g(`aloha-example`);return f(),u(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_STATIC_SLOTS_HEADER_`,description:`_A_TABS_GROUP_STATIC_SLOTS_DESCRIPTION_`,props:[`data`],slots:[`tab`,`content`]},{default:_(()=>[p(c,{data:e.data,"key-id":`id`},{tab:_(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:c})=>[l(`span`,null,h(n+1),1),p(o,{class:`a_ml_2`,"icon-left":a.icon,type:`text`},null,8,[`icon-left`]),p(s,{class:`a_ml_2`,text:a.name,tag:`span`},null,8,[`text`])]),content:_(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:o})=>[l(`span`,null,h(a.content),1)]),_:1},8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Ve=v(ze,[[`render`,Be]]);function $(){return{codeHtml:`<a-tabs
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
};`}}var Ue={name:`PageTabsTitleHtml`,components:{AlohaExample:n,ATabs:c},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=$(),{codeJs:n}=He();return{codeHtml:t,codeJs:n,data:e}}};function We(e,t,n,r,i,a){let o=g(`a-tabs`),s=g(`aloha-example`);return f(),u(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_TITLE_HTML_HEADER_`,description:`_A_TABS_GROUP_TITLE_HTML_DESCRIPTION_`,props:[`is-title-html`,`key-title`]},{default:_(()=>[p(o,{data:e.data,"is-title-html":!0,"key-title":`label`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Ge=v(Ue,[[`render`,We]]);function Ke(){return{dataEvents:[{name:`change`,description:`_A_TABS_EVENTS_CHANGE_DESCRIPTION_`,type:`Function`}]}}function qe(){let e=d(()=>a({placeholder:`_A_TABS_COMPONENT_NAME_`}));return{pageTitle:d(()=>`ATabs${e.value?` (${e.value})`:``}`)}}function Je(){return{dataProps:[{name:`active-tab-id`,description:`_A_TABS_PROPS_ACTIVE_TAB_ID_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`data`,description:`_A_TABS_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:void 0,required:!0},{name:`disabled`,description:`_A_TABS_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`id`,description:`_A_GLOBAL_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_tabs_")`,required:!1},{name:`is-boxed`,description:`_A_TABS_PROPS_IS_BOXED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-change-outside`,description:`_A_TABS_PROPS_IS_CHANGE_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-title-html`,description:`_A_GLOBAL_PROPS_IS_TITLE_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-vertical`,description:`_A_TABS_PROPS_IS_VERTICAL_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`key-active`,description:`_A_TABS_PROPS_KEY_ACTIVE_DESCRIPTION_`,type:`String`,default:`active`,required:!1},{name:`key-content`,description:`_A_TABS_PROPS_KEY_CONTENT_DESCRIPTION_`,type:`String`,default:`content`,required:!1},{name:`key-disabled`,description:`_A_TABS_PROPS_KEY_DISABLED_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-id`,description:`_A_TABS_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-label`,description:`_A_TABS_PROPS_KEY_LABEL_DESCRIPTION_`,type:`String`,default:`label`,required:!1},{name:`key-title`,description:`_A_TABS_PROPS_KEY_TITLE_DESCRIPTION_`,type:`String`,default:`title`,required:!1},{name:`title-placement`,description:`_A_GLOBAL_PROPS_TITLE_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1}]}}function Ye(){return{dataSlots:[{name:`content`,description:`_A_TABS_SLOTS_CONTENT_DESCRIPTION_`},{name:`slotContent`,description:`_A_TABS_SLOTS_SLOT_CONTENT_DESCRIPTION_`},{name:`slotTab`,description:`_A_TABS_SLOTS_SLOT_TAB_DESCRIPTION_`},{name:`tab`,description:`_A_TABS_SLOTS_TAB_DESCRIPTION_`}]}}var Xe={name:`PageTabs`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:o,PageTabsActiveTabId:w,PageTabsBasic:k,PageTabsComplex:M,PageTabsDisabled:L,PageTabsDynamicSlots:H,PageTabsIsBoxed:q,PageTabsIsChangeOutside:Q,PageTabsIsVertical:oe,PageTabsKeyActive:de,PageTabsKeyContent:ge,PageTabsKeyDisabled:xe,PageTabsKeyId:Ee,PageTabsKeyLabel:je,PageTabsKeyTitle:Ie,PageTabsStaticSlots:Ve,PageTabsTitleHtml:Ge},setup(){let{pageTitle:e}=qe(),{dataProps:t}=Je(),{dataEvents:n}=Ke(),{dataSlots:r}=Ye();return{dataEvents:n,dataProps:t,dataSlots:r,pageTitle:e}}};function Ze(e,t,n,r,i,a){let o=g(`a-translation`),s=g(`page-tabs-basic`),c=g(`page-tabs-disabled`),l=g(`page-tabs-key-disabled`),d=g(`page-tabs-key-label`),m=g(`page-tabs-key-content`),h=g(`page-tabs-key-title`),v=g(`page-tabs-title-html`),y=g(`page-tabs-is-boxed`),b=g(`page-tabs-is-vertical`),x=g(`page-tabs-key-id`),S=g(`page-tabs-key-active`),C=g(`page-tabs-active-tab-id`),w=g(`page-tabs-is-change-outside`),T=g(`page-tabs-static-slots`),E=g(`page-tabs-dynamic-slots`),D=g(`page-tabs-complex`),O=g(`aloha-table-props`),k=g(`aloha-table-css-vars`),A=g(`aloha-page`);return f(),u(A,{"page-title":e.pageTitle},{body:_(()=>[p(o,{tag:`p`,html:`_A_TABS_COMPONENT_DESCRIPTION_`}),p(s),p(c),p(l),p(d),p(m),p(h),p(v),p(y),p(b),p(x),p(S),p(C),p(w),p(T),p(E),p(D),p(O,{data:e.dataProps},null,8,[`data`]),p(O,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),p(O,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),p(k,{files:`components/ATabs`})]),_:1},8,[`page-title`])}var Qe=v(Xe,[[`render`,Ze]]);export{Qe as default};