import{t as e}from"./chunk.AlohaPage.BSfHVC43.js";import{t}from"./chunk.AlohaTableProps.BlCiBCEj.js";import{t as n}from"./chunk.AlohaExample.VTWuqY0j.js";import{D as r,cn as i,hn as a,i as o,in as s,mn as c,sn as l,t as u}from"./bundle.index.D-5bYXwk.js";import{Ht as d,Jt as f,Ut as p,Vt as m,_n as h,mn as g,on as _,un as v,wn as y}from"./chunk.vendor.DL09mhUf.js";import{q as b}from"./chunk.vendor-lodash.BlbRpQpv.js";function x(){return{codeHtml:`<a-tabs
  :data="data"
  activation="manual"
/>`}}function S(){return{codeJs:`import {
  ATabs,
} from "aloha-vue";

export default {
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
};`}}var C={name:`PageTabsActivation`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=x(),{codeJs:n}=S();return{codeHtml:t,codeJs:n,data:e}}};function w(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_ACTIVATION_HEADER_`,description:`_A_TABS_GROUP_ACTIVATION_DESCRIPTION_`,props:[`activation`]},{default:g(()=>[f(o,{data:e.data,activation:`manual`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var T=u(C,[[`render`,w]]);function E(){return{codeHtml:`<a-tabs
  :data="data1"
  active-tab-id="3"
  key-id="id"
></a-tabs>
<a-tabs
  :active-tab-id="2"
  :data="data2"
  class="a_mt_3"
></a-tabs>`}}function D(){return{codeJs:`import { 
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
};`}}var O={name:`PageTabsActiveTabId`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`,id:`1`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`,id:`2`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,id:`3`},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`,id:`4`}],t=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`}],{codeHtml:n}=E(),{codeJs:r}=D();return{codeHtml:n,codeJs:r,data1:e,data2:t}}};function k(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_ACTIVE_TAB_ID_HEADER_`,description:`_A_TABS_GROUP_ACTIVE_TAB_ID_DESCRIPTION_`,props:[`active-tab-id`]},{default:g(()=>[f(o,{data:e.data1,"active-tab-id":`3`,"key-id":`id`},null,8,[`data`]),f(o,{class:`a_mt_3`,"active-tab-id":2,data:e.data2},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var A=u(O,[[`render`,k]]);function j(){return{codeHtml:`<a-tabs
  :data="data"
  aria-label="_A_TABS_EXAMPLE_ARIA_LABEL_"
  key-id="id"
/>`}}function M(){return{codeJs:`import {
  ATabs,
} from "aloha-vue";

export default {
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        id: "tab1",
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        id: "tab2",
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        id: "tab3",
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];

    return {
      data,
    };
  },
};`}}var N={name:`PageTabsAriaLabel`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{id:`tab1`,label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{id:`tab2`,label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{id:`tab3`,label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=j(),{codeJs:n}=M();return{codeHtml:t,codeJs:n,data:e}}};function P(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_ARIA_LABEL_HEADER_`,description:`_A_TABS_GROUP_ARIA_LABEL_DESCRIPTION_`,props:[`aria-label`,`aria-labelledby`]},{default:g(()=>[f(o,{data:e.data,"aria-label":`_A_TABS_EXAMPLE_ARIA_LABEL_`,"key-id":`id`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var ee=u(N,[[`render`,P]]);function te(){return{codeHtml:`<a-tabs
  :data="data"
></a-tabs>`}}function F(){return{codeJs:`import { 
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
};`}}var I={name:`PageTabsBasic`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=te(),{codeJs:n}=F();return{codeHtml:t,codeJs:n,data:e}}};function L(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_TABS_BASIC_DESCRIPTION_`,props:[`data`]},{default:g(()=>[f(o,{data:e.data},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var R=u(I,[[`render`,L]]);function z(){return{codeHtml:`<a-form
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
></a-tabs>`}}function B(){return{codeJs:`import {
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
};`}}var V={name:`PageTabsComplex`,components:{AElement:s,AForm:r,AlohaExample:n,ATabs:o},setup(){let e=h([{id:1,label:`Lorem`},{id:2,label:`ipsum`},{id:3,label:`dolor`},{id:4,label:`sit`},{id:5,label:`amet`},{id:6,label:`consectetur`},{id:7,label:`adipisicing`},{id:8,label:`elit`},{id:9,label:`Maxime`},{id:10,label:`mollitia`},{id:11,label:`molestiae`},{id:12,label:`quas`},{id:13,label:`vel`},{id:14,label:`sint`}]),t=h({disabled:!1,isBoxed:!1,isTitleHtml:!1,isVertical:!1,titlePlacement:`top`}),n=m(()=>[{id:`disabled`,label:`_A_TABS_LABEL_DISABLED_`,type:`switch`,classColumn:`a_column a_column_6 a_column_12_touch`},{id:`isBoxed`,label:`_A_TABS_LABEL_IS_BOXED_`,type:`switch`,classColumn:`a_column a_column_6 a_column_12_touch`},{id:`isTitleHtml`,label:`_A_TABS_LABEL_IS_TITLE_HTML_`,type:`switch`,classColumn:`a_column a_column_6 a_column_12_touch`},{id:`isVertical`,label:`_A_TABS_LABEL_IS_VERTICAL_`,type:`switch`,classColumn:`a_column a_column_6 a_column_12_touch`},{id:`titlePlacement`,label:`_A_TABS_LABEL_TITLE_PLACEMENT_`,type:`select`,data:i,isDataSimpleArray:!0,deselectable:!1,labelPosition:`top`},{id:`deleteTabs`,label:`_A_TABS_LABEL_DELETE_TABS_`,type:`fieldset`,classColumn:`a_column a_column_6 a_column_12_touch`,children:[{id:`deleteTab`,label:`_A_TABS_TAB_`,type:`select`,data:e.value,labelPosition:`top`,keyLabel:`label`,keyId:`id`,search:!0},{type:`template`,slotName:`deleteButton`}]},{id:`addTabs`,label:`_A_TABS_LABEL_ADD_TABS_`,type:`fieldset`,classColumn:`a_column a_column_6 a_column_12_touch`,children:[{id:`addTab`,label:`_A_TABS_TAB_`,type:`text`,labelPosition:`top`},{type:`template`,slotName:`addButton`}]}]),r=()=>{let n=b(e.value,[`id`,t.value.deleteTab]);n!==-1&&e.value.splice(n,1),t.value.deleteTab=void 0},a=()=>{let n=e.value[e.value.length-1]?.id||0;e.value.push({label:t.value.addTab,id:n+1}),t.value.addTab=void 0},{codeHtml:o}=z(),{codeJs:s}=B();return{addTab:a,codeHtml:o,codeJs:s,data:e,dataForm:n,deleteTab:r,model:t}}};function H(e,t,n,r,i,a){let o=v(`a-element`),s=v(`a-form`),c=v(`a-tabs`),l=v(`aloha-example`);return _(),p(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_COMPLEX_HEADER_`,description:`_A_TABS_GROUP_COMPLEX_DESCRIPTION_`},{default:g(()=>[f(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.dataForm},{deleteButton:g(()=>[d(`div`,null,[f(o,{class:`a_btn a_btn_primary`,disabled:!e.model.deleteTab,text:`_A_GLOBAL_DELETE_`,type:`button`,onClick:e.deleteTab},null,8,[`disabled`,`onClick`])])]),addButton:g(()=>[d(`div`,null,[f(o,{class:`a_btn a_btn_primary`,disabled:!e.model.addTab,text:`_A_GLOBAL_ADD_`,type:`button`,onClick:e.addTab},null,8,[`disabled`,`onClick`])])]),_:1},8,[`modelValue`,`data`]),f(c,{data:e.data,disabled:e.model.disabled,"is-boxed":e.model.isBoxed,"is-title-html":e.model.isTitleHtml,"is-vertical":e.model.isVertical,"title-placement":e.model.titlePlacement,"key-content":`label`,"key-title":`label`},null,8,[`data`,`disabled`,`is-boxed`,`is-title-html`,`is-vertical`,`title-placement`])]),_:1},8,[`code-html`,`code-js`])}var U=u(V,[[`render`,H]]);function W(){return{codeHtml:`<a-tabs
  :data="data"
  :disabled="true"
></a-tabs>`}}function G(){return{codeJs:`import { 
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
};`}}var K={name:`PageTabsDisabled`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=W(),{codeJs:n}=G();return{codeHtml:t,codeJs:n,data:e}}};function q(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_DISABLED_HEADER_`,description:`_A_TABS_GROUP_DISABLED_DESCRIPTION_`,props:[`disabled`]},{default:g(()=>[f(o,{data:e.data,disabled:!0},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var J=u(K,[[`render`,q]]);function Y(){return{codeHtml:`<a-tabs
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
</a-tabs>`}}function X(){return{codeJs:`import { 
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
};`}}var Z={name:`PageTabsDynamicSlots`,components:{AlohaExample:n,ATabs:o,ATranslation:c},setup(){let e=[{slotTab:`tab1`,slotContent:`content1`},{slotTab:`tab2`,slotContent:`content2`},{slotTab:`tab3`,slotContent:`content3`}],{codeHtml:t}=Y(),{codeJs:n}=X();return{codeHtml:t,codeJs:n,data:e}}};function Q(e,t,n,r,i,a){let o=v(`a-translation`),s=v(`a-tabs`),c=v(`aloha-example`);return _(),p(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_DYNAMIC_SLOTS_HEADER_`,description:`_A_TABS_GROUP_DYNAMIC_SLOTS_DESCRIPTION_`,props:[`data`],slots:[`slotTab`,`slotContent`]},{default:g(()=>[f(s,{data:e.data,"key-id":`slotTab`},{tab1:g(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:s})=>[f(o,{class:`a_mr_2`,tag:`span`,text:`_A_TABS_TAB_`}),d(`span`,null,y(n+1),1)]),tab2:g(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:s})=>[f(o,{class:`a_mr_2`,tag:`span`,text:`_A_TABS_TAB_`}),d(`span`,null,y(n+1),1)]),tab3:g(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:s})=>[f(o,{class:`a_mr_2`,tag:`span`,text:`_A_TABS_TAB_`}),d(`span`,null,y(n+1),1)]),content1:g(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:o})=>[d(`span`,null,y(o),1)]),content2:g(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:o})=>[d(`span`,null,y(o),1)]),content3:g(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:o})=>[d(`span`,null,y(o),1)]),_:1},8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var ne=u(Z,[[`render`,Q]]);function re(){return{codeHtml:`<a-tabs
  :data="data"
  :is-boxed="true"
></a-tabs>
<a-tabs
  :data="data"
  :is-boxed="false"
  class="a_mt_3"
></a-tabs>`}}function ie(){return{codeJs:`import { 
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
};`}}var ae={name:`PageTabsIsBoxed`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=re(),{codeJs:n}=ie();return{codeHtml:t,codeJs:n,data:e}}};function oe(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_IS_BOXED_HEADER_`,description:`_A_TABS_GROUP_IS_BOXED_DESCRIPTION_`,props:[`is-boxed`]},{default:g(()=>[f(o,{data:e.data,"is-boxed":!0},null,8,[`data`]),f(o,{class:`a_mt_3`,data:e.data,"is-boxed":!1},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var se=u(ae,[[`render`,oe]]);function ce(){return{codeHtml:`<a-tabs
  :data="data"
  :active-tab-id="activeTabId"
  :is-change-outside="true"
  key-id="id"
  @change="changeTab"
></a-tabs>`}}function le(){return{codeJs:`import { 
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
};`}}var ue={name:`PageTabsIsChangeOutside`,components:{AlohaExample:n,ATabs:o},setup(){let e=h(`1`),t=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`,id:`1`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`,id:`2`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,id:`3`},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`,id:`4`}],n=({$event:t,tab:n,tabId:r,index:i})=>{console.log(`$event, tab, tabId, index`,t,n,r,i),e.value=r},{codeHtml:r}=ce(),{codeJs:i}=le();return{activeTabId:e,changeTab:n,codeHtml:r,codeJs:i,data:t}}};function de(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_IS_CHANGE_OUTSIDE_HEADER_`,description:`_A_TABS_GROUP_IS_CHANGE_OUTSIDE_DESCRIPTION_`,props:[`is-change-outside`,`active-tab-id`],emits:[`change`]},{default:g(()=>[f(o,{data:e.data,"active-tab-id":e.activeTabId,"is-change-outside":!0,"key-id":`id`,onChange:e.changeTab},null,8,[`data`,`active-tab-id`,`onChange`])]),_:1},8,[`code-html`,`code-js`])}var fe=u(ue,[[`render`,de]]);function pe(){return{codeHtml:`<a-tabs
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
></a-tabs>`}}function me(){return{codeJs:`import { 
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
};`}}var he={name:`PageTabsIsVertical`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=pe(),{codeJs:n}=me();return{codeHtml:t,codeJs:n,data:e}}};function ge(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_IS_VERTICAL_HEADER_`,description:`_A_TABS_GROUP_IS_VERTICAL_DESCRIPTION_`,props:[`is-vertical`]},{default:g(()=>[f(o,{data:e.data,"is-vertical":!0},null,8,[`data`]),f(o,{class:`a_mt_3`,data:e.data,"is-boxed":!0,"is-vertical":!0},null,8,[`data`]),f(o,{class:`a_mt_3`,data:e.data,"is-vertical":!1},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var _e=u(he,[[`render`,ge]]);function ve(){return{codeHtml:`<a-tabs
  :data="data"
  key-active="active"
></a-tabs>`}}function ye(){return{codeJs:`import { 
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
};`}}var be={name:`PageTabsKeyActive`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,active:!0},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`}],{codeHtml:t}=ve(),{codeJs:n}=ye();return{codeHtml:t,codeJs:n,data:e}}};function xe(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_ACTIVE_HEADER_`,description:`_A_TABS_GROUP_KEY_ACTIVE_DESCRIPTION_`,props:[`key-active`]},{default:g(()=>[f(o,{data:e.data,"key-active":`active`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Se=u(be,[[`render`,xe]]);function Ce(){return{codeHtml:`<a-tabs
  :data="data"
  key-content="aloha"
></a-tabs>`}}function we(){return{codeJs:`import { 
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
};`}}var Te={name:`PageTabsKeyContent`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{label:`_A_TABS_TAB_1_`,aloha:`<strong>_A_TABS_CONTENT_1_</strong>`},{label:`_A_TABS_TAB_2_`,aloha:`<strong>_A_TABS_CONTENT_2_</strong>`},{label:`_A_TABS_TAB_3_`,aloha:`<strong>_A_TABS_CONTENT_3_</strong>`}],{codeHtml:t}=Ce(),{codeJs:n}=we();return{codeHtml:t,codeJs:n,data:e}}};function Ee(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_CONTENT_HEADER_`,description:`_A_TABS_GROUP_KEY_CONTENT_DESCRIPTION_`,props:[`key-content`]},{default:g(()=>[f(o,{data:e.data,"key-content":`aloha`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var De=u(Te,[[`render`,Ee]]);function Oe(){return{codeHtml:`<a-tabs
  :data="data"
  key-disabled="disabled"
></a-tabs>`}}function ke(){return{codeJs:`import { 
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
};`}}var Ae={name:`PageTabsKeyDisabled`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`,disabled:!0},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,disabled:!0},{label:`_A_TABS_TAB_4_`,content:`_A_TABS_CONTENT_4_`,disabled:!1}],{codeHtml:t}=Oe(),{codeJs:n}=ke();return{codeHtml:t,codeJs:n,data:e}}};function je(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_DISABLED_HEADER_`,description:`_A_TABS_GROUP_KEY_DISABLED_DESCRIPTION_`,props:[`key-disabled`]},{default:g(()=>[f(o,{data:e.data,"key-disabled":`disabled`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Me=u(Ae,[[`render`,je]]);function Ne(){return{codeHtml:`<a-tabs
  :data="data"
  key-id="id"
></a-tabs>`}}function Pe(){return{codeJs:`import { 
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
};`}}var Fe={name:`PageTabsKeyId`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`,id:`1`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`,id:`2`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`,id:`3`}],{codeHtml:t}=Ne(),{codeJs:n}=Pe();return{codeHtml:t,codeJs:n,data:e}}};function Ie(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_ID_HEADER_`,description:`_A_TABS_GROUP_KEY_ID_DESCRIPTION_`,props:[`key-id`]},{default:g(()=>[f(o,{data:e.data,"key-id":`id`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Le=u(Fe,[[`render`,Ie]]);function Re(){return{codeHtml:`<a-tabs
  :data="data"
  key-label="name"
></a-tabs>`}}function ze(){return{codeJs:`import { 
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
};`}}var Be={name:`PageTabsKeyLabel`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{name:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{name:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{name:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=Re(),{codeJs:n}=ze();return{codeHtml:t,codeJs:n,data:e}}};function Ve(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_LABEL_HEADER_`,description:`_A_TABS_GROUP_KEY_LABEL_DESCRIPTION_`,props:[`key-label`]},{default:g(()=>[f(o,{data:e.data,"key-label":`name`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var He=u(Be,[[`render`,Ve]]);function Ue(){return{codeHtml:`<a-tabs
  :data="data"
  key-title="label"
></a-tabs>`}}function We(){return{codeJs:`import { 
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
};`}}var Ge={name:`PageTabsKeyTitle`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=Ue(),{codeJs:n}=We();return{codeHtml:t,codeJs:n,data:e}}};function Ke(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_KEY_TITLE_HEADER_`,description:`_A_TABS_GROUP_KEY_TITLE_DESCRIPTION_`,props:[`key-title`]},{default:g(()=>[f(o,{data:e.data,"key-title":`label`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var qe=u(Ge,[[`render`,Ke]]);function Je(){return{codeHtml:`<a-tabs
  :data="data"
  key-id="id"
  render-content="once"
/>`}}function Ye(){return{codeJs:`import {
  ATabs,
} from "aloha-vue";

export default {
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        id: "tab1",
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        id: "tab2",
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        id: "tab3",
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];

    return {
      data,
    };
  },
};`}}var Xe={name:`PageTabsRenderContent`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{id:`tab1`,label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{id:`tab2`,label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{id:`tab3`,label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=Je(),{codeJs:n}=Ye();return{codeHtml:t,codeJs:n,data:e}}};function Ze(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_RENDER_CONTENT_HEADER_`,description:`_A_TABS_GROUP_RENDER_CONTENT_DESCRIPTION_`,props:[`render-content`]},{default:g(()=>[f(o,{data:e.data,"key-id":`id`,"render-content":`once`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var Qe=u(Xe,[[`render`,Ze]]);function $e(){return{codeHtml:`<a-tabs
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
</a-tabs>`}}function et(){return{codeJs:`import {
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
};`}}var tt={name:`PageTabsStaticSlots`,components:{AElement:s,AlohaExample:n,ATabs:o,ATranslation:c},setup(){let e=[{id:`1`,name:`_A_TABS_TAB_1_`,icon:`Gear`,content:`_A_TABS_CONTENT_1_`},{id:`2`,name:`_A_TABS_TAB_2_`,icon:`CodeSquare`,content:`_A_TABS_CONTENT_2_`},{id:`3`,name:`_A_TABS_TAB_3_`,icon:`EjectFill`,content:`_A_TABS_CONTENT_3_`},{id:`4`,name:`_A_TABS_TAB_4_`,icon:`InputCursor`,content:`_A_TABS_CONTENT_4_`}],{codeHtml:t}=$e(),{codeJs:n}=et();return{codeHtml:t,codeJs:n,data:e}}};function nt(e,t,n,r,i,a){let o=v(`a-element`),s=v(`a-translation`),c=v(`a-tabs`),l=v(`aloha-example`);return _(),p(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_STATIC_SLOTS_HEADER_`,description:`_A_TABS_GROUP_STATIC_SLOTS_DESCRIPTION_`,props:[`data`],slots:[`tab`,`content`]},{default:g(()=>[f(c,{data:e.data,"key-id":`id`},{tab:g(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:c})=>[d(`span`,null,y(n+1),1),f(o,{class:`a_ml_2`,"icon-left":a.icon,type:`text`},null,8,[`icon-left`]),f(s,{class:`a_ml_2`,text:a.name,tag:`span`},null,8,[`text`])]),content:g(({activeTabId:e,contentId:t,index:n,isActive:r,parentId:i,tab:a,tabId:o})=>[d(`span`,null,y(a.content),1)]),_:1},8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var rt=u(tt,[[`render`,nt]]);function it(){return{codeHtml:`<a-tabs
  :data="data"
  :is-title-html="true"
  key-title="label"
></a-tabs>`}}function at(){return{codeJs:`import { 
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
};`}}var ot={name:`PageTabsTitleHtml`,components:{AlohaExample:n,ATabs:o},setup(){let e=[{label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],{codeHtml:t}=it(),{codeJs:n}=at();return{codeHtml:t,codeJs:n,data:e}}};function st(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`aloha-example`);return _(),p(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_TITLE_HTML_HEADER_`,description:`_A_TABS_GROUP_TITLE_HTML_DESCRIPTION_`,props:[`is-title-html`,`key-title`]},{default:g(()=>[f(o,{data:e.data,"is-title-html":!0,"key-title":`label`},null,8,[`data`])]),_:1},8,[`code-html`,`code-js`])}var ct=u(ot,[[`render`,st]]);function lt(){return{codeHtml:`<a-tabs
  v-model:active-tab-id="activeTabId"
  :data="data"
  key-id="id"
/>
<p class="a_my_3">active-tab-id: {{ activeTabId }}</p>
<a-button
  class="a_btn a_btn_secondary"
  text="_A_TABS_EXAMPLE_OPEN_TAB_3_"
  @click="activeTabId = 'tab3'"
/>`}}function ut(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  ATabs,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ATabs,
  },
  setup() {
    const data = [
      {
        id: "tab1",
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        id: "tab2",
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        id: "tab3",
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    const activeTabId = ref("tab1");

    return {
      activeTabId,
      data,
    };
  },
};`}}var dt={name:`PageTabsVModel`,components:{AlohaExample:n,AButton:l,ATabs:o},setup(){let e=[{id:`tab1`,label:`_A_TABS_TAB_1_`,content:`_A_TABS_CONTENT_1_`},{id:`tab2`,label:`_A_TABS_TAB_2_`,content:`_A_TABS_CONTENT_2_`},{id:`tab3`,label:`_A_TABS_TAB_3_`,content:`_A_TABS_CONTENT_3_`}],t=h(`tab1`),{codeHtml:n}=lt(),{codeJs:r}=ut();return{codeHtml:n,codeJs:r,activeTabId:t,data:e}}},ft={class:`a_my_3`};function $(e,t,n,r,i,a){let o=v(`a-tabs`),s=v(`a-button`),c=v(`aloha-example`);return _(),p(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_TABS_GROUP_V_MODEL_HEADER_`,description:`_A_TABS_GROUP_V_MODEL_DESCRIPTION_`,props:[`active-tab-id`]},{default:g(()=>[f(o,{"active-tab-id":e.activeTabId,"onUpdate:activeTabId":t[0]||=t=>e.activeTabId=t,data:e.data,"key-id":`id`},null,8,[`active-tab-id`,`data`]),d(`p`,ft,`active-tab-id: `+y(e.activeTabId),1),f(s,{class:`a_btn a_btn_secondary`,text:`_A_TABS_EXAMPLE_OPEN_TAB_3_`,onClick:t[1]||=t=>e.activeTabId=`tab3`})]),_:1},8,[`code-html`,`code-js`])}var pt=u(dt,[[`render`,$]]);function mt(){return{dataEvents:[{name:`change`,description:`_A_TABS_EVENTS_CHANGE_DESCRIPTION_`,type:`Function`},{name:`update:activeTabId`,description:`_A_TABS_EVENTS_UPDATE_ACTIVE_TAB_ID_DESCRIPTION_`,type:`Function`}]}}function ht(){let e=m(()=>a({placeholder:`_A_TABS_COMPONENT_NAME_`}));return{pageTitle:m(()=>`ATabs${e.value?` (${e.value})`:``}`)}}function gt(){return{dataProps:[{name:`activation`,description:`_A_TABS_PROPS_ACTIVATION_DESCRIPTION_`,type:`String`,default:`auto`,required:!1},{name:`aria-label`,description:`_A_TABS_PROPS_ARIA_LABEL_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`aria-labelledby`,description:`_A_TABS_PROPS_ARIA_LABELLEDBY_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`active-tab-id`,description:`_A_TABS_PROPS_ACTIVE_TAB_ID_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`data`,description:`_A_TABS_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:void 0,required:!0},{name:`disabled`,description:`_A_TABS_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`id`,description:`_A_GLOBAL_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_tabs_")`,required:!1},{name:`is-boxed`,description:`_A_TABS_PROPS_IS_BOXED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-change-outside`,description:`_A_TABS_PROPS_IS_CHANGE_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-title-html`,description:`_A_GLOBAL_PROPS_IS_TITLE_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-vertical`,description:`_A_TABS_PROPS_IS_VERTICAL_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`key-active`,description:`_A_TABS_PROPS_KEY_ACTIVE_DESCRIPTION_`,type:`String`,default:`active`,required:!1},{name:`key-content`,description:`_A_TABS_PROPS_KEY_CONTENT_DESCRIPTION_`,type:`String`,default:`content`,required:!1},{name:`key-disabled`,description:`_A_TABS_PROPS_KEY_DISABLED_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-id`,description:`_A_TABS_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-label`,description:`_A_TABS_PROPS_KEY_LABEL_DESCRIPTION_`,type:`String`,default:`label`,required:!1},{name:`key-title`,description:`_A_TABS_PROPS_KEY_TITLE_DESCRIPTION_`,type:`String`,default:`title`,required:!1},{name:`render-content`,description:`_A_TABS_PROPS_RENDER_CONTENT_DESCRIPTION_`,type:`String`,default:`all`,required:!1},{name:`title-placement`,description:`_A_GLOBAL_PROPS_TITLE_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1}]}}function _t(){return{dataSlots:[{name:`content`,description:`_A_TABS_SLOTS_CONTENT_DESCRIPTION_`},{name:`slotContent`,description:`_A_TABS_SLOTS_SLOT_CONTENT_DESCRIPTION_`},{name:`slotTab`,description:`_A_TABS_SLOTS_SLOT_TAB_DESCRIPTION_`},{name:`tab`,description:`_A_TABS_SLOTS_TAB_DESCRIPTION_`}]}}var vt={name:`PageTabs`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:c,PageTabsActivation:T,PageTabsActiveTabId:A,PageTabsBasic:R,PageTabsRenderContent:Qe,PageTabsVModel:pt,PageTabsAriaLabel:ee,PageTabsComplex:U,PageTabsDisabled:J,PageTabsDynamicSlots:ne,PageTabsIsBoxed:se,PageTabsIsChangeOutside:fe,PageTabsIsVertical:_e,PageTabsKeyActive:Se,PageTabsKeyContent:De,PageTabsKeyDisabled:Me,PageTabsKeyId:Le,PageTabsKeyLabel:He,PageTabsKeyTitle:qe,PageTabsStaticSlots:rt,PageTabsTitleHtml:ct},setup(){let{pageTitle:e}=ht(),{dataProps:t}=gt(),{dataEvents:n}=mt(),{dataSlots:r}=_t();return{dataEvents:n,dataProps:t,dataSlots:r,pageTitle:e}}};function yt(e,t,n,r,i,a){let o=v(`a-translation`),s=v(`page-tabs-basic`),c=v(`page-tabs-aria-label`),l=v(`page-tabs-activation`),u=v(`page-tabs-disabled`),d=v(`page-tabs-key-disabled`),m=v(`page-tabs-key-label`),h=v(`page-tabs-key-content`),y=v(`page-tabs-key-title`),b=v(`page-tabs-title-html`),x=v(`page-tabs-is-boxed`),S=v(`page-tabs-is-vertical`),C=v(`page-tabs-key-id`),w=v(`page-tabs-key-active`),T=v(`page-tabs-active-tab-id`),E=v(`page-tabs-v-model`),D=v(`page-tabs-is-change-outside`),O=v(`page-tabs-render-content`),k=v(`page-tabs-static-slots`),A=v(`page-tabs-dynamic-slots`),j=v(`page-tabs-complex`),M=v(`aloha-table-props`),N=v(`aloha-table-css-vars`),P=v(`aloha-page`);return _(),p(P,{"page-title":e.pageTitle},{body:g(()=>[f(o,{tag:`p`,html:`_A_TABS_COMPONENT_DESCRIPTION_`}),f(s),f(c),f(l),f(u),f(d),f(m),f(h),f(y),f(b),f(x),f(S),f(C),f(w),f(T),f(E),f(D),f(O),f(k),f(A),f(j),f(M,{data:e.dataProps},null,8,[`data`]),f(M,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),f(M,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),f(N,{files:`components/ATabs`})]),_:1},8,[`page-title`])}var bt=u(vt,[[`render`,yt]]);export{bt as default};