import{Ct as e,Et as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{At as l,Z as ee,g as u,kt as d,t as f}from"./bundle.index.CLtYDDlb.js";import{n as p,t as m}from"./chunk.AlohaExample.BFgfeYtr.js";import{t as h}from"./chunk.AlohaTableProps.CiFmD1UR.js";import{t as g}from"./chunk.AlohaTableTranslate.SVFm06b7.js";function _(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
></a-modal>`}}function v(){return{codeJs:`import {
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
};`}}var y={name:`PageModalBasic`,components:{AButton:l,AlohaExample:m,AModal:u},setup(){let{codeHtml:e}=_(),{codeJs:t}=v(),n=i(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function b(e,i,s,l,ee,u){let d=r(`a-button`),f=r(`a-modal`),p=r(`aloha-example`);return c(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`close`,`header-text`]},{default:o(()=>[a(d,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),n(f,{key:0,"header-text":`Aloha`,close:e.closeModal},null,8,[`close`])):t(``,!0)]),_:1},8,[`code-html`,`code-js`])}var x=f(y,[[`render`,b]]);function S(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :body-html="bodyHtml"
  :close="closeModal"
></a-modal>`}}function C(){return{codeJs:`import {
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
};`}}var w={name:`PageModalBodyHtml`,components:{AButton:l,AlohaExample:m,AModal:u},setup(){let{codeHtml:e}=S(),{codeJs:t}=C(),n=i(void 0);return{bodyHtml:`<ul>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ul>`,closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function T(e,i,s,l,ee,u){let d=r(`a-button`),f=r(`a-modal`),p=r(`aloha-example`);return c(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_BODY_HTML_HEADER_`,description:`_A_MODAL_GROUP_BODY_HTML_DESCRIPTION_`,props:[`body-html`]},{default:o(()=>[a(d,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),n(f,{key:0,"header-text":`Aloha`,"body-html":e.bodyHtml,close:e.closeModal},null,8,[`body-html`,`close`])):t(``,!0)]),_:1},8,[`code-html`,`code-js`])}var E=f(w,[[`render`,T]]);function D(){return{codeHtml:`<a-button
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
></a-modal>`}}function O(){return{codeJs:`import {
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
};`}}var k={name:`PageModalCloseButton`,components:{AButton:l,AlohaExample:m,AModal:u},setup(){let{codeHtml:e}=D(),{codeJs:t}=O(),n=i(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function A(e,i,s,l,ee,u){let d=r(`a-button`),f=r(`a-modal`),p=r(`aloha-example`);return c(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_CLOSE_BUTTON_HEADER_`,description:`_A_MODAL_GROUP_CLOSE_BUTTON_DESCRIPTION_`,props:[`close-button-attributes`,`close-button-class`,`close-button-id`,`close-button-text`]},{default:o(()=>[a(d,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),n(f,{key:0,"header-text":`Aloha`,close:e.closeModal,"close-button-attributes":{textTag:`strong`},"close-button-class":`a_btn a_btn_danger`,"close-button-id":`btn_close`,"close-button-text":`_A_MODAL_PAGE_BTN_CLOSE_`},null,8,[`close`])):t(``,!0)]),_:1},8,[`code-html`,`code-js`])}var j=f(k,[[`render`,A]]);function M(){return{codeHtml:`<a-button
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
></a-modal>`}}function N(){return{codeJs:`import {
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
};`}}var P={name:`PageModalFooterSticky`,components:{AButton:l,AlohaExample:m,AModal:u},setup(){let{codeHtml:e}=M(),{codeJs:t}=N(),n=i(void 0);return{bodyHtml:`<ul>
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
    </ul>`,closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function F(e,i,s,l,ee,u){let d=r(`a-button`),f=r(`a-modal`),p=r(`aloha-example`);return c(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_FOOTER_STICKY_HEADER_`,description:`_A_MODAL_GROUP_FOOTER_STICKY_DESCRIPTION_`,props:[`is-footer-sticky`]},{default:o(()=>[a(d,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),n(f,{key:0,"body-html":e.bodyHtml,close:e.closeModal,"is-footer-sticky":!0,"header-text":`Aloha`},null,8,[`body-html`,`close`])):t(``,!0)]),_:1},8,[`code-html`,`code-js`])}var I=f(P,[[`render`,F]]);function L(){return{codeHtml:`<a-button
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
</a-modal>`}}function R(){return{codeJs:`import {
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
};`}}var z={name:`PageModalInModal`,components:{AButton:l,AlohaExample:m,AModal:u},setup(){let{codeHtml:e}=L(),{codeJs:t}=R(),n=i(void 0),r=i(void 0);return{closeModal:()=>{n.value=!1},closeModal2:()=>{r.value=!1},codeHtml:e,codeJs:t,isModal2Visible:r,isModalVisible:n,openModal:()=>{n.value=!0},openModal2:()=>{r.value=!0}}}};function B(e,i,s,l,ee,u){let d=r(`a-button`),f=r(`a-modal`),p=r(`aloha-example`);return c(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_IN_MODAL_HEADER_`,description:`_A_MODAL_GROUP_IN_MODAL_DESCRIPTION_`},{default:o(()=>[a(d,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),n(f,{key:0,close:e.closeModal,"header-text":`Modal 1`,size:`xl`},{modalBody:o(()=>[a(d,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal2},null,8,[`onClick`])]),_:1},8,[`close`])):t(``,!0),e.isModal2Visible?(c(),n(f,{key:1,close:e.closeModal2,"header-text":`Modal 2`},null,8,[`close`])):t(``,!0)]),_:1},8,[`code-html`,`code-js`])}var V=f(z,[[`render`,B]]);function H(){return{codeHtml:`<a-button
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
></a-modal>`}}function U(){return{codeJs:`import {
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
};`}}var W={name:`PageModalSaveButton`,components:{AButton:l,AlohaExample:m,AModal:u},setup(){let{codeHtml:e}=H(),{codeJs:t}=U(),n=i(void 0),r=()=>{n.value=!0},a=()=>{n.value=!1};return{closeModal:a,codeHtml:e,codeJs:t,isModalVisible:n,openModal:r,saveModal:()=>{console.log(`saveModal`),a()}}}};function G(e,i,s,l,ee,u){let d=r(`a-button`),f=r(`a-modal`),p=r(`aloha-example`);return c(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SAVE_BUTTON_HEADER_`,description:`_A_MODAL_GROUP_SAVE_BUTTON_DESCRIPTION_`,props:[`save`,`save-button-attributes`,`save-button-class`,`save-button-id`,`save-button-text`]},{default:o(()=>[a(d,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),n(f,{key:0,"header-text":`Aloha`,close:e.closeModal,save:e.saveModal,"save-button-attributes":{textTag:`strong`},"save-button-class":`a_btn a_btn_success`,"save-button-id":`btn_save`},null,8,[`close`,`save`])):t(``,!0)]),_:1},8,[`code-html`,`code-js`])}var K=f(W,[[`render`,G]]);function q(){return{codeHtml:`<a-button
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
></a-modal>`}}function te(){return{codeJs:`import {
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
};`}}var J={name:`PageModalSelectorClose`,components:{AButton:l,AlohaExample:m,AModal:u},setup(){let{codeHtml:e}=q(),{codeJs:t}=te(),n=i(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function Y(e,i,s,l,ee,u){let d=r(`a-button`),f=r(`a-modal`),p=r(`aloha-example`);return c(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SELECTOR_CLOSE_HEADER_`,description:`_A_MODAL_GROUP_SELECTOR_CLOSE_DESCRIPTION_`,props:[`selector-close`]},{default:o(()=>[a(d,{class:`a_btn a_btn_primary`,id:`btn_open_modal`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),n(f,{key:0,"header-text":`Aloha`,close:e.closeModal,"selector-close":[`#btn_aloha`,`#btn_open_modal`]},null,8,[`close`])):t(``,!0)]),_:1},8,[`code-html`,`code-js`])}var X=f(J,[[`render`,Y]]);function Z(){return{codeHtml:`<a-button
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
></a-modal>`}}function Q(){return{codeJs:`import {
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
};`}}var ne={name:`PageModalSelectorCloseIds`,components:{AButton:l,AlohaExample:m,AModal:u},setup(){let{codeHtml:e}=Z(),{codeJs:t}=Q(),n=i(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function re(e,i,s,l,ee,u){let d=r(`a-button`),f=r(`a-modal`),p=r(`aloha-example`);return c(),n(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SELECTOR_CLOSE_IDS_HEADER_`,description:`_A_MODAL_GROUP_SELECTOR_CLOSE_IDS_DESCRIPTION_`,props:[`selector-close-ids`]},{default:o(()=>[a(d,{class:`a_btn a_btn_primary`,id:`btn_open_modal_id`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),n(f,{key:0,"header-text":`Aloha`,close:e.closeModal,"selector-close-ids":[`btn_aloha`,`btn_open_modal_id`]},null,8,[`close`])):t(``,!0)]),_:1},8,[`code-html`,`code-js`])}var ie=f(ne,[[`render`,re]]);function ae(){return{codeHtml:`<div 
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
></a-modal>`}}function oe(){return{codeJs:`import {
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
};`}}var se={name:`PageModalSize`,components:{AButton:l,AlohaExample:m,AModal:u},setup(){let{codeHtml:e}=ae(),{codeJs:t}=oe(),n=i(void 0),r=i(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:e=>{r.value=e,n.value=!0},sizeModal:r}}},ce={class:`a_btn_group`,role:`group`};function le(e,i,l,ee,u,d){let f=r(`a-button`),p=r(`a-modal`),m=r(`aloha-example`);return c(),n(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SIZE_HEADER_`,description:`_A_MODAL_GROUP_SIZE_DESCRIPTION_`,props:[`size`]},{default:o(()=>[s(`div`,ce,[a(f,{class:`a_btn a_btn_outline_secondary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (small)`,onClick:i[0]||=t=>e.openModal(`small`)}),a(f,{class:`a_btn a_btn_outline_secondary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (large)`,onClick:i[1]||=t=>e.openModal(`large`)}),a(f,{class:`a_btn a_btn_outline_secondary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (xl)`,onClick:i[2]||=t=>e.openModal(`xl`)}),a(f,{class:`a_btn a_btn_outline_secondary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (xxl)`,onClick:i[3]||=t=>e.openModal(`xxl`)}),a(f,{class:`a_btn a_btn_outline_secondary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (fullscreen)`,onClick:i[4]||=t=>e.openModal(`fullscreen`)})]),e.isModalVisible?(c(),n(p,{key:0,"header-text":`Aloha`,close:e.closeModal,size:e.sizeModal},null,8,[`close`,`size`])):t(``,!0)]),_:1},8,[`code-html`,`code-js`])}var ue=f(se,[[`render`,le]]);function de(){return{codeHtml:`<a-button
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
</a-modal>`}}function fe(){return{codeJs:`import {
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
};`}}var pe={name:`PageModalSlots`,components:{AButton:l,AlohaExample:m,AModal:u},setup(){let{codeHtml:e}=de(),{codeJs:t}=fe(),n=i(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function $(e,i,l,ee,u,d){let f=r(`a-button`),p=r(`a-modal`),m=r(`aloha-example`);return c(),n(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SLOTS_HEADER_`,description:`_A_MODAL_GROUP_SLOTS_DESCRIPTION_`,slots:[`modalHeader`,`modalBody`,`modalFooterPrepend`,`modalFooterAppend`]},{default:o(()=>[a(f,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),n(p,{key:0,close:e.closeModal},{modalHeader:o(()=>[...i[0]||=[s(`span`,null,`Aloha`,-1)]]),modalBody:o(()=>[...i[1]||=[s(`div`,null,`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,-1)]]),modalFooterPrepend:o(()=>[a(f,{class:`a_btn a_btn_primary`,"icon-left":`ChevronLeft`})]),modalFooterAppend:o(()=>[a(f,{class:`a_btn a_btn_primary`,text:`Aloha`})]),_:1},8,[`close`])):t(``,!0)]),_:1},8,[`code-html`,`code-js`])}var me=f(pe,[[`render`,$]]);function he(){return{dataExposes:[{name:`buttonRef`,description:`_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_`,type:`Object`},{name:`containerRef`,description:`_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_`,type:`Object`},{name:`isButtonVisible`,description:`_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_`,type:`Boolean`},{name:`isOpen`,description:`_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_`,type:`Boolean`},{name:`toggleButton`,description:`_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_`,type:`Function`}]}}function ge(){let t=e(()=>d({placeholder:`_A_MODAL_COMPONENT_NAME_`}));return{pageTitle:e(()=>`AModal${t.value?` (${t.value})`:``}`)}}function _e(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`backdrop-z-index`,description:`_A_MODAL_PROPS_BACKDROP_Z_INDEX_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`body-html`,description:`_A_MODAL_PROPS_BODY_HTML_DESCRIPTION_`,type:`Object`,default:`""`,required:!1},{name:`body-html-class`,description:`_A_MODAL_PROPS_BODY_HTML_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:void 0,required:!1},{name:`class-extra`,description:`_A_MODAL_PROPS_CLASS_EXTRA_DESCRIPTION_`,type:`String / Object`,default:`a_modal_class_extra`,required:!1},{name:`close`,description:`_A_MODAL_PROPS_CLOSE_DESCRIPTION_`,type:`Function`,default:void 0,required:!0},{name:`close-button-attributes`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`close-button-class`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`close-button-id`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`close-button-text`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_CANCEL_`,required:!1},{name:`close-button-text-screen-reader-footer`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_SCREEN_READER_FOOTER_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_`,required:!1},{name:`close-button-text-screen-reader-header`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_SCREEN_READER_HEADER_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_`,required:!1},{name:`disabled`,description:`_A_MODAL_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`disabled-save`,description:`_A_MODAL_PROPS_DISABLED_SAVE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`extra`,description:`_A_MODAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`focus-start-id`,description:`_A_MODAL_PROPS_FOCUS_START_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`header-tag`,description:`_A_MODAL_PROPS_HEADER_TAG_DESCRIPTION_`,type:`String`,default:`h2`,required:!1},{name:`header-text`,description:`_A_MODAL_PROPS_HEADER_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`hide-footer`,description:`_A_MODAL_PROPS_HIDE_FOOTER_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`hide-header`,description:`_A_MODAL_PROPS_HIDE_HEADER_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`id`,description:`_A_MODAL_PROPS_ID_DESCRIPTION_`,type:`String`,default:`uniqueId("a_modal_")`,required:!1},{name:`is-close-button-hide`,description:`_A_MODAL_PROPS_IS_CLOSE_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-confirm`,description:`_A_MODAL_PROPS_IS_CONFIRM_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-footer-sticky`,description:`_A_MODAL_PROPS_IS_FOOTER_STICKY_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-modal-hidden`,description:`_A_MODAL_PROPS_IS_MODAL_HIDDEN_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-save-button-hide`,description:`_A_MODAL_PROPS_IS_SAVE_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`loading`,description:`_A_MODAL_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`modal-class`,description:`_A_MODAL_PROPS_MODAL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`modal-style`,description:`_A_MODAL_PROPS_MODAL_STYLE_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`save`,description:`_A_MODAL_PROPS_SAVE_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`save-button-attributes`,description:`_A_MODAL_PROPS_SAVE_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`save-button-class`,description:`_A_MODAL_PROPS_SAVE_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_primary`,required:!1},{name:`save-button-id`,description:`_A_MODAL_PROPS_SAVE_BUTTON_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`save-button-text`,description:`_A_MODAL_PROPS_SAVE_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_SAVE_`,required:!1},{name:`save-button-text-screen-reader`,description:`_A_MODAL_PROPS_SAVE_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_`,required:!1},{name:`selector-close`,description:`_A_MODAL_PROPS_SELECTOR_CLOSE_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`selector-close-ids`,description:`_A_MODAL_PROPS_SELECTOR_CLOSE_IDS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`show-close-button-header`,description:`_A_MODAL_PROPS_SHOW_CLOSE_BUTTON_HEADER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`size`,description:`_A_MODAL_PROPS_SIZE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`stop`,description:`_A_MODAL_PROPS_STOP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`use-escape`,description:`_A_MODAL_PROPS_USE_ESCAPE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-focus-on-start`,description:`_A_MODAL_PROPS_USE_FOCUS_ON_START_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`z-index`,description:`_A_MODAL_PROPS_Z_INDEX_DESCRIPTION_`,type:`Number`,default:void 0,required:!1}]}}function ve(){return{dataSlots:[{name:`modalHeader`,description:`_A_MODAL_SLOTS_MODAL_HEADER_DESCRIPTION_`},{name:`modalBody`,description:`_A_MODAL_SLOTS_MODAL_BODY_DESCRIPTION_`},{name:`modalFooterPrepend`,description:`_A_MODAL_SLOTS_MODAL_FOOTER_PREPEND_DESCRIPTION_`},{name:`modalFooterAppend`,description:`_A_MODAL_SLOTS_MODAL_FOOTER_APPEND_DESCRIPTION_`}]}}function ye(){return{dataTranslate:[`_A_MODAL_BTN_CANCEL_`,`_A_MODAL_BTN_SAVE_`,`_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_`,`_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_`,`_A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_`]}}var be={name:`PageModal`,components:{AlohaPage:p,AlohaTableProps:h,AlohaTableTranslate:g,ATranslation:ee,PageModalBasic:x,PageModalBodyHtml:E,PageModalCloseButton:j,PageModalFooterSticky:I,PageModalInModal:V,PageModalSaveButton:K,PageModalSelectorClose:X,PageModalSelectorCloseIds:ie,PageModalSize:ue,PageModalSlots:me},setup(){let{pageTitle:e}=ge(),{dataProps:t}=_e(),{dataSlots:n}=ve(),{dataExposes:r}=he(),{dataTranslate:i}=ye();return{dataExposes:r,dataProps:t,dataSlots:n,dataTranslate:i,pageTitle:e}}};function xe(e,t,i,s,l,ee){let u=r(`a-translation`),d=r(`page-modal-basic`),f=r(`page-modal-body-html`),p=r(`page-modal-close-button`),m=r(`page-modal-footer-sticky`),h=r(`page-modal-save-button`),g=r(`page-modal-selector-close`),_=r(`page-modal-selector-close-ids`),v=r(`page-modal-size`),y=r(`page-modal-slots`),b=r(`page-modal-in-modal`),x=r(`aloha-table-props`),S=r(`aloha-table-translate`),C=r(`aloha-page`);return c(),n(C,{"page-title":e.pageTitle},{body:o(()=>[a(u,{tag:`p`,html:`_A_MODAL_COMPONENT_DESCRIPTION_`}),a(d),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y),a(b),a(x,{data:e.dataProps},null,8,[`data`]),a(x,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),a(S,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var Se=f(be,[[`render`,xe]]);export{Se as default};