import{A as O,a as B}from"./chunk.AlohaExample.EheeFqAD.js";import{A as g}from"./chunk.AlohaTableProps.DQSBGQmP.js";import{A as H}from"./chunk.AlohaTableTranslate.wUOWmqph.js";import{M as b,c as E,_ as M,g as V,A as $}from"./bundle.index.Dt_eHidu.js";import{r as m,V as i,aT as u,e as l,W as c,_ as n,a_ as A,Z as P,d as D}from"./chunk.vendor.BxCHGHAU.js";import"./chunk.vendor-lodash.BMPrua2s.js";import"./chunk.APageTabTitle.kR6jwLlO.js";import"./chunk.AlohaHighlightjs.B3F2oL8_.js";import"./chunk.ATable.CbhUJO9k.js";import"./chunk.translations-ar.D8MQqUIX.js";import"./chunk.translations-de.Cn_yzXHt.js";import"./chunk.translations-en.Cabsq1fv.js";import"./chunk.translations-es.CTtyunpM.js";import"./chunk.translations-fr.tpgV9obb.js";import"./chunk.translations-hr.v7YKJpdX.js";import"./chunk.translations-it.Dqw3KhB-.js";import"./chunk.translations-ru.Cz76XEJm.js";function x(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
></a-modal>`}}function k(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalBasic",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};`}}const G={name:"PageModalBasic",components:{AButton:E,AlohaExample:O,AModal:b},setup(){const{codeHtml:e}=x(),{codeJs:t}=k(),o=m(void 0);return{closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:()=>{o.value=!0}}}};function J(e,t,o,s,_,p){const a=l("a-button"),d=l("a-modal"),r=l("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["close","header-text"]},{default:u(()=>[n(a,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),i(d,{key:0,"header-text":"Aloha",close:e.closeModal},null,8,["close"])):A("",!0)]),_:1},8,["code-html","code-js"])}const q=M(G,[["render",J]]);function U(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :body-html="bodyHtml"
  :close="closeModal"
></a-modal>`}}function j(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalBodyHtml",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    const bodyHtml = \`<ul>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ul>\`;

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      bodyHtml,
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};`}}const F={name:"PageModalBodyHtml",components:{AButton:E,AlohaExample:O,AModal:b},setup(){const{codeHtml:e}=U(),{codeJs:t}=j(),o=m(void 0);return{bodyHtml:`<ul>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ul>`,closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:()=>{o.value=!0}}}};function z(e,t,o,s,_,p){const a=l("a-button"),d=l("a-modal"),r=l("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_BODY_HTML_HEADER_",description:"_A_MODAL_GROUP_BODY_HTML_DESCRIPTION_",props:["body-html"]},{default:u(()=>[n(a,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),i(d,{key:0,"header-text":"Aloha","body-html":e.bodyHtml,close:e.closeModal},null,8,["body-html","close"])):A("",!0)]),_:1},8,["code-html","code-js"])}const X=M(F,[["render",z]]);function Y(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
  :close-button-attributes="{ textTag: 'strong' }"
  close-button-class="a_btn a_btn_danger"
  close-button-id="btn_close"
  close-button-text="_A_MODAL_PAGE_BTN_CLOSE_"
></a-modal>`}}function W(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalCloseButton",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    
    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};`}}const Z={name:"PageModalCloseButton",components:{AButton:E,AlohaExample:O,AModal:b},setup(){const{codeHtml:e}=Y(),{codeJs:t}=W(),o=m(void 0);return{closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:()=>{o.value=!0}}}};function K(e,t,o,s,_,p){const a=l("a-button"),d=l("a-modal"),r=l("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_CLOSE_BUTTON_HEADER_",description:"_A_MODAL_GROUP_CLOSE_BUTTON_DESCRIPTION_",props:["close-button-attributes","close-button-class","close-button-id","close-button-text"]},{default:u(()=>[n(a,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),i(d,{key:0,"header-text":"Aloha",close:e.closeModal,"close-button-attributes":{textTag:"strong"},"close-button-class":"a_btn a_btn_danger","close-button-id":"btn_close","close-button-text":"_A_MODAL_PAGE_BTN_CLOSE_"},null,8,["close"])):A("",!0)]),_:1},8,["code-html","code-js"])}const w=M(Z,[["render",K]]);function Q(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  :body-html="bodyHtml"
  :close="closeModal"
  :is-footer-sticky="true"
  header-text="Aloha"
></a-modal>`}}function ee(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalFooterSticky",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    const bodyHtml = \`<ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
    </ul>\`;

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      bodyHtml,
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};`}}const oe={name:"PageModalFooterSticky",components:{AButton:E,AlohaExample:O,AModal:b},setup(){const{codeHtml:e}=Q(),{codeJs:t}=ee(),o=m(void 0);return{bodyHtml:`<ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
    </ul>`,closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:()=>{o.value=!0}}}};function te(e,t,o,s,_,p){const a=l("a-button"),d=l("a-modal"),r=l("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_FOOTER_STICKY_HEADER_",description:"_A_MODAL_GROUP_FOOTER_STICKY_DESCRIPTION_",props:["is-footer-sticky"]},{default:u(()=>[n(a,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),i(d,{key:0,"body-html":e.bodyHtml,close:e.closeModal,"is-footer-sticky":!0,"header-text":"Aloha"},null,8,["body-html","close"])):A("",!0)]),_:1},8,["code-html","code-js"])}const le=M(oe,[["render",te]]);function ae(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  :close="closeModal"
>
  <template
    v-slot:modalHeader
  >
    <span>Aloha</span>
  </template>
  
  <template
    v-slot:modalBody
  >
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
  </template>
  
  <template
    v-slot:modalFooterPrepend
  >
    <a-button
      class="a_btn a_btn_primary"
      icon-left="ChevronLeft"
    ></a-button>
  </template>
  
  <template
    v-slot:modalFooterAppend
  >
    <a-button
      class="a_btn a_btn_primary"
      text="Aloha"
    ></a-button>
  </template>
</a-modal>`}}function ne(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalSlots",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    
    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};`}}const se={name:"PageModalInModal",components:{AButton:E,AlohaExample:O,AModal:b},setup(){const{codeHtml:e}=ae(),{codeJs:t}=ne(),o=m(void 0),s=m(void 0);return{closeModal:()=>{o.value=!1},closeModal2:()=>{s.value=!1},codeHtml:e,codeJs:t,isModal2Visible:s,isModalVisible:o,openModal:()=>{o.value=!0},openModal2:()=>{s.value=!0}}}};function _e(e,t,o,s,_,p){const a=l("a-button"),d=l("a-modal"),r=l("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_IN_MODAL_HEADER_",description:"_A_MODAL_GROUP_IN_MODAL_DESCRIPTION_"},{default:u(()=>[n(a,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),i(d,{key:0,close:e.closeModal,"header-text":"Modal 1",size:"xl"},{modalBody:u(()=>[n(a,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal2},null,8,["onClick"])]),_:1},8,["close"])):A("",!0),e.isModal2Visible?(c(),i(d,{key:1,close:e.closeModal2,"header-text":"Modal 2"},null,8,["close"])):A("",!0)]),_:1},8,["code-html","code-js"])}const de=M(se,[["render",_e]]);function ie(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
  :save="saveModal"
  :save-button-attributes="{ textTag: 'strong' }"
  save-button-class="a_btn a_btn_success"
  save-button-id="btn_save"
></a-modal>`}}function ce(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalSaveButton",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    
    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };
    
    const saveModal = () => {
      console.log("saveModal");
      closeModal();
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
      saveModal,
    };
  },
};`}}const re={name:"PageModalSaveButton",components:{AButton:E,AlohaExample:O,AModal:b},setup(){const{codeHtml:e}=ie(),{codeJs:t}=ce(),o=m(void 0),s=()=>{o.value=!0},_=()=>{o.value=!1};return{closeModal:_,codeHtml:e,codeJs:t,isModalVisible:o,openModal:s,saveModal:()=>{console.log("saveModal"),_()}}}};function ue(e,t,o,s,_,p){const a=l("a-button"),d=l("a-modal"),r=l("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SAVE_BUTTON_HEADER_",description:"_A_MODAL_GROUP_SAVE_BUTTON_DESCRIPTION_",props:["save","save-button-attributes","save-button-class","save-button-id","save-button-text"]},{default:u(()=>[n(a,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),i(d,{key:0,"header-text":"Aloha",close:e.closeModal,save:e.saveModal,"save-button-attributes":{textTag:"strong"},"save-button-class":"a_btn a_btn_success","save-button-id":"btn_save"},null,8,["close","save"])):A("",!0)]),_:1},8,["code-html","code-js"])}const pe=M(re,[["render",ue]]);function me(){return{codeHtml:`<a-button
  id="btn_open_modal"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
  :selector-close="['#btn_aloha', '#btn_open_modal']"
></a-modal>`}}function Ae(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalSelectorClose",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    
    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};`}}const Me={name:"PageModalSelectorClose",components:{AButton:E,AlohaExample:O,AModal:b},setup(){const{codeHtml:e}=me(),{codeJs:t}=Ae(),o=m(void 0);return{closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:()=>{o.value=!0}}}};function Oe(e,t,o,s,_,p){const a=l("a-button"),d=l("a-modal"),r=l("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SELECTOR_CLOSE_HEADER_",description:"_A_MODAL_GROUP_SELECTOR_CLOSE_DESCRIPTION_",props:["selector-close"]},{default:u(()=>[n(a,{class:"a_btn a_btn_primary",id:"btn_open_modal",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),i(d,{key:0,"header-text":"Aloha",close:e.closeModal,"selector-close":["#btn_aloha","#btn_open_modal"]},null,8,["close"])):A("",!0)]),_:1},8,["code-html","code-js"])}const be=M(Me,[["render",Oe]]);function Ee(){return{codeHtml:`<a-button
  id="btn_open_modal_id"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
  :selector-close-ids="['btn_aloha', 'btn_open_modal_id']"
></a-modal>`}}function fe(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalSelectorCloseIds",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    
    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};`}}const Pe={name:"PageModalSelectorCloseIds",components:{AButton:E,AlohaExample:O,AModal:b},setup(){const{codeHtml:e}=Ee(),{codeJs:t}=fe(),o=m(void 0);return{closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:()=>{o.value=!0}}}};function Se(e,t,o,s,_,p){const a=l("a-button"),d=l("a-modal"),r=l("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SELECTOR_CLOSE_IDS_HEADER_",description:"_A_MODAL_GROUP_SELECTOR_CLOSE_IDS_DESCRIPTION_",props:["selector-close-ids"]},{default:u(()=>[n(a,{class:"a_btn a_btn_primary",id:"btn_open_modal_id",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),i(d,{key:0,"header-text":"Aloha",close:e.closeModal,"selector-close-ids":["btn_aloha","btn_open_modal_id"]},null,8,["close"])):A("",!0)]),_:1},8,["code-html","code-js"])}const De=M(Pe,[["render",Se]]);function Te(){return{codeHtml:`<div 
  class="a_btn_group"
  role="group"
>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (small)"
    @click="openModal('small')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (large)"
    @click="openModal('large')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (xl)"
    @click="openModal('xl')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (xxl)"
    @click="openModal('xxl')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (fullscreen)"
    @click="openModal('fullscreen')"
  ></a-button>
</div>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
  :size="sizeModal"
></a-modal>`}}function Le(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalSize",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    const sizeModal = ref(undefined);

    const openModal = size => {
      sizeModal.value = size;
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
      sizeModal,
    };
  },
};`}}const Re={name:"PageModalSize",components:{AButton:E,AlohaExample:O,AModal:b},setup(){const{codeHtml:e}=Te(),{codeJs:t}=Le(),o=m(void 0),s=m(void 0);return{closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:a=>{s.value=a,o.value=!0},sizeModal:s}}},Ie={class:"a_btn_group",role:"group"};function Ne(e,t,o,s,_,p){const a=l("a-button"),d=l("a-modal"),r=l("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SIZE_HEADER_",description:"_A_MODAL_GROUP_SIZE_DESCRIPTION_",props:["size"]},{default:u(()=>[P("div",Ie,[n(a,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (small)",onClick:t[0]||(t[0]=f=>e.openModal("small"))}),n(a,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (large)",onClick:t[1]||(t[1]=f=>e.openModal("large"))}),n(a,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (xl)",onClick:t[2]||(t[2]=f=>e.openModal("xl"))}),n(a,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (xxl)",onClick:t[3]||(t[3]=f=>e.openModal("xxl"))}),n(a,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (fullscreen)",onClick:t[4]||(t[4]=f=>e.openModal("fullscreen"))})]),e.isModalVisible?(c(),i(d,{key:0,"header-text":"Aloha",close:e.closeModal,size:e.sizeModal},null,8,["close","size"])):A("",!0)]),_:1},8,["code-html","code-js"])}const Ce=M(Re,[["render",Ne]]);function ye(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  :close="closeModal"
>
  <template
    v-slot:modalHeader
  >
    <span>Aloha</span>
  </template>
  
  <template
    v-slot:modalBody
  >
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
  </template>
  
  <template
    v-slot:modalFooterPrepend
  >
    <a-button
      class="a_btn a_btn_primary"
      icon-left="ChevronLeft"
    ></a-button>
  </template>
  
  <template
    v-slot:modalFooterAppend
  >
    <a-button
      class="a_btn a_btn_primary"
      text="Aloha"
    ></a-button>
  </template>
</a-modal>`}}function he(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton,
  AModal,
} from "aloha-vue";
    
export default {
  name: "PageModalSlots",
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    
    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      isModalVisible,
      openModal,
    };
  },
};`}}const ve={name:"PageModalSlots",components:{AButton:E,AlohaExample:O,AModal:b},setup(){const{codeHtml:e}=ye(),{codeJs:t}=he(),o=m(void 0);return{closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:()=>{o.value=!0}}}};function Be(e,t,o,s,_,p){const a=l("a-button"),d=l("a-modal"),r=l("aloha-example");return c(),i(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SLOTS_HEADER_",description:"_A_MODAL_GROUP_SLOTS_DESCRIPTION_",slots:["modalHeader","modalBody","modalFooterPrepend","modalFooterAppend"]},{default:u(()=>[n(a,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),i(d,{key:0,close:e.closeModal},{modalHeader:u(()=>t[0]||(t[0]=[P("span",null,"Aloha",-1)])),modalBody:u(()=>t[1]||(t[1]=[P("div",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit.",-1)])),modalFooterPrepend:u(()=>[n(a,{class:"a_btn a_btn_primary","icon-left":"ChevronLeft"})]),modalFooterAppend:u(()=>[n(a,{class:"a_btn a_btn_primary",text:"Aloha"})]),_:1},8,["close"])):A("",!0)]),_:1},8,["code-html","code-js"])}const ge=M(ve,[["render",Be]]);function He(){return{dataExposes:[{name:"buttonRef",description:"_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_",type:"Object"},{name:"containerRef",description:"_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_",type:"Object"},{name:"isButtonVisible",description:"_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_",type:"Boolean"},{name:"isOpen",description:"_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_",type:"Boolean"},{name:"toggleButton",description:"_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",type:"Function"}]}}function Ve(){const e=D(()=>V({placeholder:"_A_MODAL_COMPONENT_NAME_"}));return{pageTitle:D(()=>`AModal${e.value?` (${e.value})`:""}`)}}function $e(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"backdrop-z-index",description:"_A_MODAL_PROPS_BACKDROP_Z_INDEX_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"body-html",description:"_A_MODAL_PROPS_BODY_HTML_DESCRIPTION_",type:"Object",default:'""',required:!1},{name:"body-html-class",description:"_A_MODAL_PROPS_BODY_HTML_CLASS_DESCRIPTION_",type:"String / Array / Object",default:void 0,required:!1},{name:"close",description:"_A_MODAL_PROPS_CLOSE_DESCRIPTION_",type:"Function",default:void 0,required:!0},{name:"close-button-attributes",description:"_A_MODAL_PROPS_CLOSE_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"close-button-class",description:"_A_MODAL_PROPS_CLOSE_BUTTON_CLASS_DESCRIPTION_",type:"String / Array / Object",default:"a_btn a_btn_secondary",required:!1},{name:"close-button-id",description:"_A_MODAL_PROPS_CLOSE_BUTTON_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"close-button-text",description:"_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_CANCEL_",required:!1},{name:"close-button-text-screen-reader-footer",description:"_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_SCREEN_READER_FOOTER_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_",required:!1},{name:"close-button-text-screen-reader-header",description:"_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_SCREEN_READER_HEADER_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_",required:!1},{name:"disabled",description:"_A_MODAL_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"disabled-save",description:"_A_MODAL_PROPS_DISABLED_SAVE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"extra",description:"_A_MODAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"focus-start-id",description:"_A_MODAL_PROPS_FOCUS_START_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"header-tag",description:"_A_MODAL_PROPS_HEADER_TAG_DESCRIPTION_",type:"String",default:"h2",required:!1},{name:"header-text",description:"_A_MODAL_PROPS_HEADER_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"hide-footer",description:"_A_MODAL_PROPS_HIDE_FOOTER_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"hide-header",description:"_A_MODAL_PROPS_HIDE_HEADER_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"id",description:"_A_MODAL_PROPS_ID_DESCRIPTION_",type:"String",default:'uniqueId("a_modal_")',required:!1},{name:"is-close-button-hide",description:"_A_MODAL_PROPS_IS_CLOSE_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-confirm",description:"_A_MODAL_PROPS_IS_CONFIRM_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-footer-sticky",description:"_A_MODAL_PROPS_IS_FOOTER_STICKY_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-modal-hidden",description:"_A_MODAL_PROPS_IS_MODAL_HIDDEN_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-save-button-hide",description:"_A_MODAL_PROPS_IS_SAVE_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"loading",description:"_A_MODAL_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"modal-class",description:"_A_MODAL_PROPS_MODAL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"modal-style",description:"_A_MODAL_PROPS_MODAL_STYLE_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"save",description:"_A_MODAL_PROPS_SAVE_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"save-button-attributes",description:"_A_MODAL_PROPS_SAVE_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"save-button-class",description:"_A_MODAL_PROPS_SAVE_BUTTON_CLASS_DESCRIPTION_",type:"String / Array / Object",default:"a_btn a_btn_primary",required:!1},{name:"save-button-id",description:"_A_MODAL_PROPS_SAVE_BUTTON_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"save-button-text",description:"_A_MODAL_PROPS_SAVE_BUTTON_TEXT_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_SAVE_",required:!1},{name:"save-button-text-screen-reader",description:"_A_MODAL_PROPS_SAVE_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_",required:!1},{name:"selector-close",description:"_A_MODAL_PROPS_SELECTOR_CLOSE_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"selector-close-ids",description:"_A_MODAL_PROPS_SELECTOR_CLOSE_IDS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"show-close-button-header",description:"_A_MODAL_PROPS_SHOW_CLOSE_BUTTON_HEADER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"size",description:"_A_MODAL_PROPS_SIZE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"stop",description:"_A_MODAL_PROPS_STOP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"use-escape",description:"_A_MODAL_PROPS_USE_ESCAPE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"use-focus-on-start",description:"_A_MODAL_PROPS_USE_FOCUS_ON_START_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"z-index",description:"_A_MODAL_PROPS_Z_INDEX_DESCRIPTION_",type:"Number",default:void 0,required:!1}]}}function xe(){return{dataSlots:[{name:"modalHeader",description:"_A_MODAL_SLOTS_MODAL_HEADER_DESCRIPTION_"},{name:"modalBody",description:"_A_MODAL_SLOTS_MODAL_BODY_DESCRIPTION_"},{name:"modalFooterPrepend",description:"_A_MODAL_SLOTS_MODAL_FOOTER_PREPEND_DESCRIPTION_"},{name:"modalFooterAppend",description:"_A_MODAL_SLOTS_MODAL_FOOTER_APPEND_DESCRIPTION_"}]}}function ke(){return{dataTranslate:["_A_MODAL_BTN_CANCEL_","_A_MODAL_BTN_SAVE_","_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_","_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_","_A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_"]}}const Ge={name:"PageModal",components:{AlohaPage:B,AlohaTableProps:g,AlohaTableTranslate:H,ATranslation:$,PageModalBasic:q,PageModalBodyHtml:X,PageModalCloseButton:w,PageModalFooterSticky:le,PageModalInModal:de,PageModalSaveButton:pe,PageModalSelectorClose:be,PageModalSelectorCloseIds:De,PageModalSize:Ce,PageModalSlots:ge},setup(){const{pageTitle:e}=Ve(),{dataProps:t}=$e(),{dataSlots:o}=xe(),{dataExposes:s}=He(),{dataTranslate:_}=ke();return{dataExposes:s,dataProps:t,dataSlots:o,dataTranslate:_,pageTitle:e}}};function Je(e,t,o,s,_,p){const a=l("a-translation"),d=l("page-modal-basic"),r=l("page-modal-body-html"),f=l("page-modal-close-button"),T=l("page-modal-footer-sticky"),L=l("page-modal-save-button"),R=l("page-modal-selector-close"),I=l("page-modal-selector-close-ids"),N=l("page-modal-size"),C=l("page-modal-slots"),y=l("page-modal-in-modal"),S=l("aloha-table-props"),h=l("aloha-table-translate"),v=l("aloha-page");return c(),i(v,{"page-title":e.pageTitle},{body:u(()=>[n(a,{tag:"p",html:"_A_MODAL_COMPONENT_DESCRIPTION_"}),n(d),n(r),n(f),n(T),n(L),n(R),n(I),n(N),n(C),n(y),n(S,{data:e.dataProps},null,8,["data"]),n(S,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"]),n(h,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const no=M(Ge,[["render",Je]]);export{no as default};
