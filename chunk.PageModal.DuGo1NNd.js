import{A as M,a as y}from"./chunk.AlohaExample.DJmek8S2.js";import{A as v}from"./chunk.AlohaTableProps.Dg3ZyLMk.js";import{A as g}from"./chunk.AlohaTableTranslate.CW82I8Ic.js";import{b as O,i as E,_ as m,g as H,A as V}from"./bundle.index.BNDXU1qV.js";import{r as A,k as l,J as r,aJ as u,H as c,O as a,aQ as b,N as P,a as D}from"./chunk.vendor.z3GIbCk9.js";import"./chunk.vendor-lodash.C_VDyCZ-.js";import"./chunk.ATable.Dyg6RlFe.js";import"./chunk.utilsMath.Ch_ZSUE4.js";import"./chunk.AForm.BvR5IxMG.js";import"./chunk.ADatepicker.CV7iQEiu.js";import"./chunk.UiMixinProps.C6KoMHL_.js";import"./chunk.AInputNumber.BDT4S_uW.js";function $(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
></a-modal>`}}function x(){return{codeJs:`import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import AModal from "aloha-vue/src/AModal/AModal";
    
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
};`}}const k={name:"PageModalBasic",components:{AButton:O,AlohaExample:M,AModal:E},setup(){const{codeHtml:e}=$(),{codeJs:t}=x(),o=A(void 0);return{closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:()=>{o.value=!0}}}};function G(e,t,o,_,s,p){const n=l("a-button"),d=l("a-modal"),i=l("aloha-example");return c(),r(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["close","header-text"]},{default:u(()=>[a(n,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),r(d,{key:0,"header-text":"Aloha",close:e.closeModal},null,8,["close"])):b("",!0)]),_:1},8,["code-html","code-js"])}const q=m(k,[["render",G]]);function J(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :body-html="bodyHtml"
  :close="closeModal"
></a-modal>`}}function U(){return{codeJs:`import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import AModal from "aloha-vue/src/AModal/AModal";
    
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
};`}}const j={name:"PageModalBodyHtml",components:{AButton:O,AlohaExample:M,AModal:E},setup(){const{codeHtml:e}=J(),{codeJs:t}=U(),o=A(void 0);return{bodyHtml:`<ul>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ul>`,closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:()=>{o.value=!0}}}};function F(e,t,o,_,s,p){const n=l("a-button"),d=l("a-modal"),i=l("aloha-example");return c(),r(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_BODY_HTML_HEADER_",description:"_A_MODAL_GROUP_BODY_HTML_DESCRIPTION_",props:["body-html"]},{default:u(()=>[a(n,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),r(d,{key:0,"header-text":"Aloha","body-html":e.bodyHtml,close:e.closeModal},null,8,["body-html","close"])):b("",!0)]),_:1},8,["code-html","code-js"])}const z=m(j,[["render",F]]);function X(){return{codeHtml:`<a-button
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
></a-modal>`}}function Y(){return{codeJs:`import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import AModal from "aloha-vue/src/AModal/AModal";
    
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
};`}}const W={name:"PageModalCloseButton",components:{AButton:O,AlohaExample:M,AModal:E},setup(){const{codeHtml:e}=X(),{codeJs:t}=Y(),o=A(void 0);return{closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:()=>{o.value=!0}}}};function Z(e,t,o,_,s,p){const n=l("a-button"),d=l("a-modal"),i=l("aloha-example");return c(),r(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_CLOSE_BUTTON_HEADER_",description:"_A_MODAL_GROUP_CLOSE_BUTTON_DESCRIPTION_",props:["close-button-attributes","close-button-class","close-button-id","close-button-text"]},{default:u(()=>[a(n,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),r(d,{key:0,"header-text":"Aloha",close:e.closeModal,"close-button-attributes":{textTag:"strong"},"close-button-class":"a_btn a_btn_danger","close-button-id":"btn_close","close-button-text":"_A_MODAL_PAGE_BTN_CLOSE_"},null,8,["close"])):b("",!0)]),_:1},8,["code-html","code-js"])}const K=m(W,[["render",Z]]);function w(){return{codeHtml:`<a-button
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
></a-modal>`}}function Q(){return{codeJs:`import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import AModal from "aloha-vue/src/AModal/AModal";
    
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
};`}}const ee={name:"PageModalFooterSticky",components:{AButton:O,AlohaExample:M,AModal:E},setup(){const{codeHtml:e}=w(),{codeJs:t}=Q(),o=A(void 0);return{bodyHtml:`<ul>
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
    </ul>`,closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:()=>{o.value=!0}}}};function oe(e,t,o,_,s,p){const n=l("a-button"),d=l("a-modal"),i=l("aloha-example");return c(),r(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_FOOTER_STICKY_HEADER_",description:"_A_MODAL_GROUP_FOOTER_STICKY_DESCRIPTION_",props:["is-footer-sticky"]},{default:u(()=>[a(n,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),r(d,{key:0,"body-html":e.bodyHtml,close:e.closeModal,"is-footer-sticky":!0,"header-text":"Aloha"},null,8,["body-html","close"])):b("",!0)]),_:1},8,["code-html","code-js"])}const te=m(ee,[["render",oe]]);function le(){return{codeHtml:`<a-button
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
></a-modal>`}}function ae(){return{codeJs:`import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import AModal from "aloha-vue/src/AModal/AModal";
    
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
};`}}const ne={name:"PageModalSaveButton",components:{AButton:O,AlohaExample:M,AModal:E},setup(){const{codeHtml:e}=le(),{codeJs:t}=ae(),o=A(void 0),_=()=>{o.value=!0},s=()=>{o.value=!1};return{closeModal:s,codeHtml:e,codeJs:t,isModalVisible:o,openModal:_,saveModal:()=>{console.log("saveModal"),s()}}}};function _e(e,t,o,_,s,p){const n=l("a-button"),d=l("a-modal"),i=l("aloha-example");return c(),r(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SAVE_BUTTON_HEADER_",description:"_A_MODAL_GROUP_SAVE_BUTTON_DESCRIPTION_",props:["save","save-button-attributes","save-button-class","save-button-id","save-button-text"]},{default:u(()=>[a(n,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),r(d,{key:0,"header-text":"Aloha",close:e.closeModal,save:e.saveModal,"save-button-attributes":{textTag:"strong"},"save-button-class":"a_btn a_btn_success","save-button-id":"btn_save"},null,8,["close","save"])):b("",!0)]),_:1},8,["code-html","code-js"])}const se=m(ne,[["render",_e]]);function de(){return{codeHtml:`<a-button
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
></a-modal>`}}function ie(){return{codeJs:`import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import AModal from "aloha-vue/src/AModal/AModal";
    
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
};`}}const re={name:"PageModalSelectorClose",components:{AButton:O,AlohaExample:M,AModal:E},setup(){const{codeHtml:e}=de(),{codeJs:t}=ie(),o=A(void 0);return{closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:()=>{o.value=!0}}}};function ce(e,t,o,_,s,p){const n=l("a-button"),d=l("a-modal"),i=l("aloha-example");return c(),r(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SELECTOR_CLOSE_HEADER_",description:"_A_MODAL_GROUP_SELECTOR_CLOSE_DESCRIPTION_",props:["selector-close"]},{default:u(()=>[a(n,{class:"a_btn a_btn_primary",id:"btn_open_modal",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),r(d,{key:0,"header-text":"Aloha",close:e.closeModal,"selector-close":["#btn_aloha","#btn_open_modal"]},null,8,["close"])):b("",!0)]),_:1},8,["code-html","code-js"])}const ue=m(re,[["render",ce]]);function pe(){return{codeHtml:`<a-button
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
></a-modal>`}}function Ae(){return{codeJs:`import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import AModal from "aloha-vue/src/AModal/AModal";
    
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
};`}}const me={name:"PageModalSelectorCloseIds",components:{AButton:O,AlohaExample:M,AModal:E},setup(){const{codeHtml:e}=pe(),{codeJs:t}=Ae(),o=A(void 0);return{closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:()=>{o.value=!0}}}};function Me(e,t,o,_,s,p){const n=l("a-button"),d=l("a-modal"),i=l("aloha-example");return c(),r(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SELECTOR_CLOSE_IDS_HEADER_",description:"_A_MODAL_GROUP_SELECTOR_CLOSE_IDS_DESCRIPTION_",props:["selector-close-ids"]},{default:u(()=>[a(n,{class:"a_btn a_btn_primary",id:"btn_open_modal_id",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),r(d,{key:0,"header-text":"Aloha",close:e.closeModal,"selector-close-ids":["btn_aloha","btn_open_modal_id"]},null,8,["close"])):b("",!0)]),_:1},8,["code-html","code-js"])}const Oe=m(me,[["render",Me]]);function Ee(){return{codeHtml:`<div 
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
></a-modal>`}}function be(){return{codeJs:`import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import AModal from "aloha-vue/src/AModal/AModal";
    
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
};`}}const fe={name:"PageModalSize",components:{AButton:O,AlohaExample:M,AModal:E},setup(){const{codeHtml:e}=Ee(),{codeJs:t}=be(),o=A(void 0),_=A(void 0);return{closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:n=>{_.value=n,o.value=!0},sizeModal:_}}},Pe={class:"a_btn_group",role:"group"};function Se(e,t,o,_,s,p){const n=l("a-button"),d=l("a-modal"),i=l("aloha-example");return c(),r(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SIZE_HEADER_",description:"_A_MODAL_GROUP_SIZE_DESCRIPTION_",props:["size"]},{default:u(()=>[P("div",Pe,[a(n,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (small)",onClick:t[0]||(t[0]=f=>e.openModal("small"))}),a(n,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (large)",onClick:t[1]||(t[1]=f=>e.openModal("large"))}),a(n,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (xl)",onClick:t[2]||(t[2]=f=>e.openModal("xl"))}),a(n,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (xxl)",onClick:t[3]||(t[3]=f=>e.openModal("xxl"))}),a(n,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (fullscreen)",onClick:t[4]||(t[4]=f=>e.openModal("fullscreen"))})]),e.isModalVisible?(c(),r(d,{key:0,"header-text":"Aloha",close:e.closeModal,size:e.sizeModal},null,8,["close","size"])):b("",!0)]),_:1},8,["code-html","code-js"])}const De=m(fe,[["render",Se]]);function Te(){return{codeHtml:`<a-button
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
</a-modal>`}}function Re(){return{codeJs:`import {
  ref,
} from "vue";

import AButton from "aloha-vue/src/AButton/AButton";
import AModal from "aloha-vue/src/AModal/AModal";
    
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
};`}}const Le={name:"PageModalSlots",components:{AButton:O,AlohaExample:M,AModal:E},setup(){const{codeHtml:e}=Te(),{codeJs:t}=Re(),o=A(void 0);return{closeModal:()=>{o.value=!1},codeHtml:e,codeJs:t,isModalVisible:o,openModal:()=>{o.value=!0}}}};function Ie(e,t,o,_,s,p){const n=l("a-button"),d=l("a-modal"),i=l("aloha-example");return c(),r(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SLOTS_HEADER_",description:"_A_MODAL_GROUP_SLOTS_DESCRIPTION_",slots:["modalHeader","modalBody","modalFooterPrepend","modalFooterAppend"]},{default:u(()=>[a(n,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?(c(),r(d,{key:0,close:e.closeModal},{modalHeader:u(()=>t[0]||(t[0]=[P("span",null,"Aloha",-1)])),modalBody:u(()=>t[1]||(t[1]=[P("div",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit.",-1)])),modalFooterPrepend:u(()=>[a(n,{class:"a_btn a_btn_primary","icon-left":"ChevronLeft"})]),modalFooterAppend:u(()=>[a(n,{class:"a_btn a_btn_primary",text:"Aloha"})]),_:1},8,["close"])):b("",!0)]),_:1},8,["code-html","code-js"])}const Ne=m(Le,[["render",Ie]]);function Ce(){return{dataExposes:[{name:"buttonRef",description:"_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_",type:"Object"},{name:"containerRef",description:"_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_",type:"Object"},{name:"isButtonVisible",description:"_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_",type:"Boolean"},{name:"isOpen",description:"_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_",type:"Boolean"},{name:"toggleButton",description:"_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",type:"Function"}]}}function Be(){const e=D(()=>H({placeholder:"_A_MODAL_COMPONENT_NAME_"}));return{pageTitle:D(()=>`AModal${e.value?` (${e.value})`:""}`)}}function he(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"backdrop-z-index",description:"_A_MODAL_PROPS_BACKDROP_Z_INDEX_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"body-html",description:"_A_MODAL_PROPS_BODY_HTML_DESCRIPTION_",type:"Object",default:'""',required:!1},{name:"body-html-class",description:"_A_MODAL_PROPS_BODY_HTML_CLASS_DESCRIPTION_",type:"String / Array / Object",default:void 0,required:!1},{name:"close",description:"_A_MODAL_PROPS_CLOSE_DESCRIPTION_",type:"Function",default:void 0,required:!0},{name:"close-button-attributes",description:"_A_MODAL_PROPS_CLOSE_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"close-button-class",description:"_A_MODAL_PROPS_CLOSE_BUTTON_CLASS_DESCRIPTION_",type:"String / Array / Object",default:"a_btn a_btn_secondary",required:!1},{name:"close-button-id",description:"_A_MODAL_PROPS_CLOSE_BUTTON_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"close-button-text",description:"_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_CANCEL_",required:!1},{name:"close-button-text-screen-reader-footer",description:"_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_SCREEN_READER_FOOTER_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_",required:!1},{name:"close-button-text-screen-reader-header",description:"_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_SCREEN_READER_HEADER_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_",required:!1},{name:"disabled",description:"_A_MODAL_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"disabled-save",description:"_A_MODAL_PROPS_DISABLED_SAVE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"extra",description:"_A_MODAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"focus-start-id",description:"_A_MODAL_PROPS_FOCUS_START_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"header-tag",description:"_A_MODAL_PROPS_HEADER_TAG_DESCRIPTION_",type:"String",default:"h2",required:!1},{name:"header-text",description:"_A_MODAL_PROPS_HEADER_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"hide-footer",description:"_A_MODAL_PROPS_HIDE_FOOTER_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"hide-header",description:"_A_MODAL_PROPS_HIDE_HEADER_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"id",description:"_A_MODAL_PROPS_ID_DESCRIPTION_",type:"String",default:'uniqueId("a_modal_")',required:!1},{name:"is-close-button-hide",description:"_A_MODAL_PROPS_IS_CLOSE_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-confirm",description:"_A_MODAL_PROPS_IS_CONFIRM_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-footer-sticky",description:"_A_MODAL_PROPS_IS_FOOTER_STICKY_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-modal-hidden",description:"_A_MODAL_PROPS_IS_MODAL_HIDDEN_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-save-button-hide",description:"_A_MODAL_PROPS_IS_SAVE_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"loading",description:"_A_MODAL_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"modal-class",description:"_A_MODAL_PROPS_MODAL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"modal-style",description:"_A_MODAL_PROPS_MODAL_STYLE_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"save",description:"_A_MODAL_PROPS_SAVE_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"save-button-attributes",description:"_A_MODAL_PROPS_SAVE_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"save-button-class",description:"_A_MODAL_PROPS_SAVE_BUTTON_CLASS_DESCRIPTION_",type:"String / Array / Object",default:"a_btn a_btn_primary",required:!1},{name:"save-button-id",description:"_A_MODAL_PROPS_SAVE_BUTTON_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"save-button-text",description:"_A_MODAL_PROPS_SAVE_BUTTON_TEXT_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_SAVE_",required:!1},{name:"save-button-text-screen-reader",description:"_A_MODAL_PROPS_SAVE_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_",required:!1},{name:"selector-close",description:"_A_MODAL_PROPS_SELECTOR_CLOSE_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"selector-close-ids",description:"_A_MODAL_PROPS_SELECTOR_CLOSE_IDS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"show-close-button-header",description:"_A_MODAL_PROPS_SHOW_CLOSE_BUTTON_HEADER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"size",description:"_A_MODAL_PROPS_SIZE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"stop",description:"_A_MODAL_PROPS_STOP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"use-escape",description:"_A_MODAL_PROPS_USE_ESCAPE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"use-focus-on-start",description:"_A_MODAL_PROPS_USE_FOCUS_ON_START_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"z-index",description:"_A_MODAL_PROPS_Z_INDEX_DESCRIPTION_",type:"Number",default:void 0,required:!1}]}}function ye(){return{dataSlots:[{name:"modalHeader",description:"_A_MODAL_SLOTS_MODAL_HEADER_DESCRIPTION_"},{name:"modalBody",description:"_A_MODAL_SLOTS_MODAL_BODY_DESCRIPTION_"},{name:"modalFooterPrepend",description:"_A_MODAL_SLOTS_MODAL_FOOTER_PREPEND_DESCRIPTION_"},{name:"modalFooterAppend",description:"_A_MODAL_SLOTS_MODAL_FOOTER_APPEND_DESCRIPTION_"}]}}function ve(){return{dataTranslate:["_A_MODAL_BTN_CANCEL_","_A_MODAL_BTN_SAVE_","_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_","_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_","_A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_"]}}const ge={name:"PageModal",components:{AlohaPage:y,AlohaTableProps:v,AlohaTableTranslate:g,ATranslation:V,PageModalBasic:q,PageModalBodyHtml:z,PageModalCloseButton:K,PageModalFooterSticky:te,PageModalSaveButton:se,PageModalSelectorClose:ue,PageModalSelectorCloseIds:Oe,PageModalSize:De,PageModalSlots:Ne},setup(){const{pageTitle:e}=Be(),{dataProps:t}=he(),{dataSlots:o}=ye(),{dataExposes:_}=Ce(),{dataTranslate:s}=ve();return{dataExposes:_,dataProps:t,dataSlots:o,dataTranslate:s,pageTitle:e}}};function He(e,t,o,_,s,p){const n=l("a-translation"),d=l("page-modal-basic"),i=l("page-modal-body-html"),f=l("page-modal-close-button"),T=l("page-modal-footer-sticky"),R=l("page-modal-save-button"),L=l("page-modal-selector-close"),I=l("page-modal-selector-close-ids"),N=l("page-modal-size"),C=l("page-modal-slots"),S=l("aloha-table-props"),B=l("aloha-table-translate"),h=l("aloha-page");return c(),r(h,{"page-title":e.pageTitle},{body:u(()=>[a(n,{tag:"p",html:"_A_MODAL_COMPONENT_DESCRIPTION_"}),a(d),a(i),a(f),a(T),a(R),a(L),a(I),a(N),a(C),a(S,{data:e.dataProps},null,8,["data"]),a(S,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"]),a(B,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Ye=m(ge,[["render",He]]);export{Ye as default};
