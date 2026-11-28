import{t as e}from"./chunk.AlohaPage.IS3NRfGI.js";import{t}from"./chunk.AlohaTableProps.-68XY4u1.js";import{t as n}from"./chunk.AlohaTableTranslate.Bs0gql66.js";import{Bt as r,Ht as i,Ut as a,Vt as o,an as s,gn as c,ln as l,pn as u,qt as d}from"./chunk.vendor.SEynj6EJ.js";import{t as f}from"./chunk.AlohaExample.CDuUdjpI.js";import{ft as p,hn as m,mn as h,sn as g,t as _}from"./bundle.index.DikcaTJ9.js";import{n as v,t as y}from"./chunk.SlotsAPI.sQJI1B9c.js";import{t as b}from"./chunk.TranslateAPI.mLehtU2h.js";function x(){return{codeHtml:`<a-button
  id="btn_modal_aria_label"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal
  v-if="isModalVisible"
  :close="closeModal"
  :hide-header="true"
  aria-label="_A_MODAL_EXAMPLE_ARIA_LABEL_"
  body-html="_A_MODAL_EXAMPLE_ARIA_LABEL_BODY_"
/>`}}function S(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  AModal,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(false);

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
};`}}var C={name:`PageModalAriaLabel`,components:{AButton:g,AlohaExample:f,AModal:p},setup(){let{codeHtml:e}=x(),{codeJs:t}=S(),n=c(!1);return{codeHtml:e,codeJs:t,closeModal:()=>{n.value=!1},isModalVisible:n,openModal:()=>{n.value=!0}}}};function w(e,t,n,r,o,c){let f=l(`a-button`),p=l(`a-modal`),m=l(`aloha-example`);return s(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_ARIA_LABEL_HEADER_`,description:`_A_MODAL_GROUP_ARIA_LABEL_DESCRIPTION_`,props:[`hide-header`,`aria-label`]},{default:u(()=>[d(f,{class:`a_btn a_btn_primary`,id:`btn_modal_aria_label`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(s(),i(p,{key:0,close:e.closeModal,"hide-header":!0,"aria-label":`_A_MODAL_EXAMPLE_ARIA_LABEL_`,"body-html":`_A_MODAL_EXAMPLE_ARIA_LABEL_BODY_`},null,8,[`close`])):a(``,!0)]),_:1},8,[`code-html`,`code-js`])}var T=_(C,[[`render`,w]]);function E(){return{codeHtml:`<a-button
  id="btn_modal_basic"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  selector-close-ids="btn_modal_basic"
  header-text="Aloha"
  :close="closeModal"
></a-modal>`}}function D(){return{codeJs:`import {
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
};`}}var O={name:`PageModalBasic`,components:{AButton:g,AlohaExample:f,AModal:p},setup(){let{codeHtml:e}=E(),{codeJs:t}=D(),n=c(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function k(e,t,n,r,o,c){let f=l(`a-button`),p=l(`a-modal`),m=l(`aloha-example`);return s(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`close`,`header-text`]},{default:u(()=>[d(f,{class:`a_btn a_btn_primary`,id:`btn_modal_basic`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(s(),i(p,{key:0,"selector-close-ids":`btn_modal_basic`,"header-text":`Aloha`,close:e.closeModal},null,8,[`close`])):a(``,!0)]),_:1},8,[`code-html`,`code-js`])}var ee=_(O,[[`render`,k]]);function te(){return{codeHtml:`<a-button
  id="btn_modal_body_html"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  selector-close-ids="btn_modal_body_html"
  header-text="Aloha"
  :body-html="bodyHtml"
  :close="closeModal"
></a-modal>`}}function A(){return{codeJs:`import {
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
};`}}var j={name:`PageModalBodyHtml`,components:{AButton:g,AlohaExample:f,AModal:p},setup(){let{codeHtml:e}=te(),{codeJs:t}=A(),n=c(void 0);return{bodyHtml:`<ul>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ul>`,closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function M(e,t,n,r,o,c){let f=l(`a-button`),p=l(`a-modal`),m=l(`aloha-example`);return s(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_BODY_HTML_HEADER_`,description:`_A_MODAL_GROUP_BODY_HTML_DESCRIPTION_`,props:[`body-html`]},{default:u(()=>[d(f,{class:`a_btn a_btn_primary`,id:`btn_modal_body_html`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(s(),i(p,{key:0,"selector-close-ids":`btn_modal_body_html`,"header-text":`Aloha`,"body-html":e.bodyHtml,close:e.closeModal},null,8,[`body-html`,`close`])):a(``,!0)]),_:1},8,[`code-html`,`code-js`])}var N=_(j,[[`render`,M]]);function P(){return{codeHtml:`<a-button
  id="btn_modal_close_button"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  selector-close-ids="btn_modal_close_button"
  header-text="Aloha"
  :close="closeModal"
  :close-button-attributes="{ textTag: 'strong' }"
  close-button-class="a_btn a_btn_danger"
  close-button-id="btn_close"
  close-button-text="_A_MODAL_PAGE_BTN_CLOSE_"
></a-modal>`}}function F(){return{codeJs:`import {
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
};`}}var I={name:`PageModalCloseButton`,components:{AButton:g,AlohaExample:f,AModal:p},setup(){let{codeHtml:e}=P(),{codeJs:t}=F(),n=c(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function L(e,t,n,r,o,c){let f=l(`a-button`),p=l(`a-modal`),m=l(`aloha-example`);return s(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_CLOSE_BUTTON_HEADER_`,description:`_A_MODAL_GROUP_CLOSE_BUTTON_DESCRIPTION_`,props:[`close-button-attributes`,`close-button-class`,`close-button-id`,`close-button-text`]},{default:u(()=>[d(f,{class:`a_btn a_btn_primary`,id:`btn_modal_close_button`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(s(),i(p,{key:0,"selector-close-ids":`btn_modal_close_button`,"header-text":`Aloha`,close:e.closeModal,"close-button-attributes":{textTag:`strong`},"close-button-class":`a_btn a_btn_danger`,"close-button-id":`btn_close`,"close-button-text":`_A_MODAL_PAGE_BTN_CLOSE_`},null,8,[`close`])):a(``,!0)]),_:1},8,[`code-html`,`code-js`])}var R=_(I,[[`render`,L]]);function z(){return{codeHtml:`<a-button
  id="btn_modal_close_on_backdrop"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal
  v-if="isModalVisible"
  :close="closeModal"
  header-text="Aloha"
  :close-on-backdrop="true"
  body-html="_A_MODAL_EXAMPLE_CLOSE_ON_BACKDROP_BODY_"
/>`}}function B(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  AModal,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(false);

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
};`}}var V={name:`PageModalCloseOnBackdrop`,components:{AButton:g,AlohaExample:f,AModal:p},setup(){let{codeHtml:e}=z(),{codeJs:t}=B(),n=c(!1);return{codeHtml:e,codeJs:t,closeModal:()=>{n.value=!1},isModalVisible:n,openModal:()=>{n.value=!0}}}};function H(e,t,n,r,o,c){let f=l(`a-button`),p=l(`a-modal`),m=l(`aloha-example`);return s(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_CLOSE_ON_BACKDROP_HEADER_`,description:`_A_MODAL_GROUP_CLOSE_ON_BACKDROP_DESCRIPTION_`,props:[`close-on-backdrop`]},{default:u(()=>[d(f,{class:`a_btn a_btn_primary`,id:`btn_modal_close_on_backdrop`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(s(),i(p,{key:0,close:e.closeModal,"header-text":`Aloha`,"close-on-backdrop":!0,"body-html":`_A_MODAL_EXAMPLE_CLOSE_ON_BACKDROP_BODY_`},null,8,[`close`])):a(``,!0)]),_:1},8,[`code-html`,`code-js`])}var U=_(V,[[`render`,H]]);function W(){return{codeHtml:`<a-button
  id="btn_modal_focus_return"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal
  v-if="isModalVisible"
  :close="closeModal"
  header-text="Aloha"
  body-html="_A_MODAL_EXAMPLE_FOCUS_RETURN_BODY_"
/>`}}function G(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  AModal,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(false);

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
};`}}var K={name:`PageModalFocusReturn`,components:{AButton:g,AlohaExample:f,AModal:p},setup(){let{codeHtml:e}=W(),{codeJs:t}=G(),n=c(!1);return{codeHtml:e,codeJs:t,closeModal:()=>{n.value=!1},isModalVisible:n,openModal:()=>{n.value=!0}}}};function q(e,t,n,r,o,c){let f=l(`a-button`),p=l(`a-modal`),m=l(`aloha-example`);return s(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_FOCUS_RETURN_HEADER_`,description:`_A_MODAL_GROUP_FOCUS_RETURN_DESCRIPTION_`,props:[`selector-close-ids`]},{default:u(()=>[d(f,{class:`a_btn a_btn_primary`,id:`btn_modal_focus_return`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(s(),i(p,{key:0,close:e.closeModal,"header-text":`Aloha`,"body-html":`_A_MODAL_EXAMPLE_FOCUS_RETURN_BODY_`},null,8,[`close`])):a(``,!0)]),_:1},8,[`code-html`,`code-js`])}var J=_(K,[[`render`,q]]);function Y(){return{codeHtml:`<a-button
  id="btn_modal_focus_start"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal
  v-if="isModalVisible"
  :close="closeModal"
  header-text="Aloha"
  focus-start-id="btn_modal_focus_start_continue"
>
  <template v-slot:modalBody>
    <a-translation
      tag="p"
      text="_A_MODAL_EXAMPLE_FOCUS_START_BODY_"
    />
    <a-button
      class="a_btn a_btn_secondary a_mr_2"
      text="_A_MODAL_EXAMPLE_BACK_"
    />
    <a-button
      id="btn_modal_focus_start_continue"
      class="a_btn a_btn_primary"
      text="_A_MODAL_EXAMPLE_CONTINUE_"
    />
  </template>
</a-modal>`}}function X(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  AModal,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModal,
    ATranslation,
  },
  setup() {
    const isModalVisible = ref(false);

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
};`}}var Z={name:`PageModalFocusStart`,components:{AButton:g,AlohaExample:f,AModal:p,ATranslation:h},setup(){let{codeHtml:e}=Y(),{codeJs:t}=X(),n=c(!1);return{codeHtml:e,codeJs:t,closeModal:()=>{n.value=!1},isModalVisible:n,openModal:()=>{n.value=!0}}}};function Q(e,t,n,r,o,c){let f=l(`a-button`),p=l(`a-translation`),m=l(`a-modal`),h=l(`aloha-example`);return s(),i(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_FOCUS_START_HEADER_`,description:`_A_MODAL_GROUP_FOCUS_START_DESCRIPTION_`,props:[`focus-start-id`,`use-focus-on-start`]},{default:u(()=>[d(f,{class:`a_btn a_btn_primary`,id:`btn_modal_focus_start`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(s(),i(m,{key:0,close:e.closeModal,"header-text":`Aloha`,"focus-start-id":`btn_modal_focus_start_continue`},{modalBody:u(()=>[d(p,{tag:`p`,text:`_A_MODAL_EXAMPLE_FOCUS_START_BODY_`}),d(f,{class:`a_btn a_btn_secondary a_mr_2`,text:`_A_MODAL_EXAMPLE_BACK_`}),d(f,{class:`a_btn a_btn_primary`,id:`btn_modal_focus_start_continue`,text:`_A_MODAL_EXAMPLE_CONTINUE_`})]),_:1},8,[`close`])):a(``,!0)]),_:1},8,[`code-html`,`code-js`])}var ne=_(Z,[[`render`,Q]]);function re(){return{codeHtml:`<a-button
  id="btn_modal_footer_sticky"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  selector-close-ids="btn_modal_footer_sticky"
  :body-html="bodyHtml"
  :close="closeModal"
  :is-footer-sticky="true"
  header-text="Aloha"
></a-modal>`}}function ie(){return{codeJs:`import {
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
};`}}var ae={name:`PageModalFooterSticky`,components:{AButton:g,AlohaExample:f,AModal:p},setup(){let{codeHtml:e}=re(),{codeJs:t}=ie(),n=c(void 0);return{bodyHtml:`<ul>
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
    </ul>`,closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function oe(e,t,n,r,o,c){let f=l(`a-button`),p=l(`a-modal`),m=l(`aloha-example`);return s(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_FOOTER_STICKY_HEADER_`,description:`_A_MODAL_GROUP_FOOTER_STICKY_DESCRIPTION_`,props:[`is-footer-sticky`]},{default:u(()=>[d(f,{class:`a_btn a_btn_primary`,id:`btn_modal_footer_sticky`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(s(),i(p,{key:0,"selector-close-ids":`btn_modal_footer_sticky`,"body-html":e.bodyHtml,close:e.closeModal,"is-footer-sticky":!0,"header-text":`Aloha`},null,8,[`body-html`,`close`])):a(``,!0)]),_:1},8,[`code-html`,`code-js`])}var se=_(ae,[[`render`,oe]]);function ce(){return{codeHtml:`<a-button
  id="btn_modal_in_modal"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  selector-close-ids="btn_modal_in_modal"
  :close="closeModal"
  header-text="Modal 1"
  size="xl"
>
  <template
    v-slot:modalBody
  >
    <a-button
      id="btn_modal_in_modal_2"
      class="a_btn a_btn_primary"
      text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
      @click="openModal2"
    ></a-button>
  </template>
</a-modal>

<a-modal
  v-if="isModal2Visible"
  selector-close-ids="btn_modal_in_modal_2"
  :close="closeModal2"
  header-text="Modal 2"
></a-modal>`}}function le(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  AModal,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModal,
  },
  setup() {
    const isModalVisible = ref(undefined);
    const isModal2Visible = ref(undefined);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const openModal2 = () => {
      isModal2Visible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    const closeModal2 = () => {
      isModal2Visible.value = false;
    };

    return {
      closeModal,
      closeModal2,
      isModal2Visible,
      isModalVisible,
      openModal,
      openModal2,
    };
  },
};`}}var ue={name:`PageModalInModal`,components:{AButton:g,AlohaExample:f,AModal:p},setup(){let{codeHtml:e}=ce(),{codeJs:t}=le(),n=c(void 0),r=c(void 0);return{closeModal:()=>{n.value=!1},closeModal2:()=>{r.value=!1},codeHtml:e,codeJs:t,isModal2Visible:r,isModalVisible:n,openModal:()=>{n.value=!0},openModal2:()=>{r.value=!0}}}};function de(e,t,n,r,o,c){let f=l(`a-button`),p=l(`a-modal`),m=l(`aloha-example`);return s(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_IN_MODAL_HEADER_`,description:`_A_MODAL_GROUP_IN_MODAL_DESCRIPTION_`},{default:u(()=>[d(f,{class:`a_btn a_btn_primary`,id:`btn_modal_in_modal`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(s(),i(p,{key:0,"selector-close-ids":`btn_modal_in_modal`,close:e.closeModal,"header-text":`Modal 1`,size:`xl`},{modalBody:u(()=>[d(f,{class:`a_btn a_btn_primary`,id:`btn_modal_in_modal_2`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal2},null,8,[`onClick`])]),_:1},8,[`close`])):a(``,!0),e.isModal2Visible?(s(),i(p,{key:1,"selector-close-ids":`btn_modal_in_modal_2`,close:e.closeModal2,"header-text":`Modal 2`},null,8,[`close`])):a(``,!0)]),_:1},8,[`code-html`,`code-js`])}var fe=_(ue,[[`render`,de]]);function pe(){return{codeHtml:`<a-button
  id="btn_modal_save_button"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  selector-close-ids="btn_modal_save_button"
  header-text="Aloha"
  :close="closeModal"
  :save="saveModal"
  :save-button-attributes="{ textTag: 'strong' }"
  save-button-class="a_btn a_btn_success"
  save-button-id="btn_save"
></a-modal>`}}function me(){return{codeJs:`import {
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
};`}}var he={name:`PageModalSaveButton`,components:{AButton:g,AlohaExample:f,AModal:p},setup(){let{codeHtml:e}=pe(),{codeJs:t}=me(),n=c(void 0),r=()=>{n.value=!0},i=()=>{n.value=!1};return{closeModal:i,codeHtml:e,codeJs:t,isModalVisible:n,openModal:r,saveModal:()=>{console.log(`saveModal`),i()}}}};function ge(e,t,n,r,o,c){let f=l(`a-button`),p=l(`a-modal`),m=l(`aloha-example`);return s(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SAVE_BUTTON_HEADER_`,description:`_A_MODAL_GROUP_SAVE_BUTTON_DESCRIPTION_`,props:[`save`,`save-button-attributes`,`save-button-class`,`save-button-id`,`save-button-text`]},{default:u(()=>[d(f,{class:`a_btn a_btn_primary`,id:`btn_modal_save_button`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(s(),i(p,{key:0,"selector-close-ids":`btn_modal_save_button`,"header-text":`Aloha`,close:e.closeModal,save:e.saveModal,"save-button-attributes":{textTag:`strong`},"save-button-class":`a_btn a_btn_success`,"save-button-id":`btn_save`},null,8,[`close`,`save`])):a(``,!0)]),_:1},8,[`code-html`,`code-js`])}var _e=_(he,[[`render`,ge]]);function ve(){return{codeHtml:`<a-button
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
></a-modal>`}}function ye(){return{codeJs:`import {
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
};`}}var be={name:`PageModalSelectorClose`,components:{AButton:g,AlohaExample:f,AModal:p},setup(){let{codeHtml:e}=ve(),{codeJs:t}=ye(),n=c(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function xe(e,t,n,r,o,c){let f=l(`a-button`),p=l(`a-modal`),m=l(`aloha-example`);return s(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SELECTOR_CLOSE_HEADER_`,description:`_A_MODAL_GROUP_SELECTOR_CLOSE_DESCRIPTION_`,props:[`selector-close`]},{default:u(()=>[d(f,{class:`a_btn a_btn_primary`,id:`btn_open_modal`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(s(),i(p,{key:0,"header-text":`Aloha`,close:e.closeModal,"selector-close":[`#btn_aloha`,`#btn_open_modal`]},null,8,[`close`])):a(``,!0)]),_:1},8,[`code-html`,`code-js`])}var Se=_(be,[[`render`,xe]]);function Ce(){return{codeHtml:`<a-button
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
></a-modal>`}}function we(){return{codeJs:`import {
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
};`}}var Te={name:`PageModalSelectorCloseIds`,components:{AButton:g,AlohaExample:f,AModal:p},setup(){let{codeHtml:e}=Ce(),{codeJs:t}=we(),n=c(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function Ee(e,t,n,r,o,c){let f=l(`a-button`),p=l(`a-modal`),m=l(`aloha-example`);return s(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SELECTOR_CLOSE_IDS_HEADER_`,description:`_A_MODAL_GROUP_SELECTOR_CLOSE_IDS_DESCRIPTION_`,props:[`selector-close-ids`]},{default:u(()=>[d(f,{class:`a_btn a_btn_primary`,id:`btn_open_modal_id`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(s(),i(p,{key:0,"header-text":`Aloha`,close:e.closeModal,"selector-close-ids":[`btn_aloha`,`btn_open_modal_id`]},null,8,[`close`])):a(``,!0)]),_:1},8,[`code-html`,`code-js`])}var De=_(Te,[[`render`,Ee]]);function Oe(){return{codeHtml:`<div 
  class="a_btn_group"
  role="group"
>
  <a-button
    id="btn_modal_size_small"
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (small)"
    @click="openModal('small')"
  ></a-button>
  <a-button
    id="btn_modal_size_large"
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (large)"
    @click="openModal('large')"
  ></a-button>
  <a-button
    id="btn_modal_size_xl"
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (xl)"
    @click="openModal('xl')"
  ></a-button>
  <a-button
    id="btn_modal_size_xxl"
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (xxl)"
    @click="openModal('xxl')"
  ></a-button>
  <a-button
    id="btn_modal_size_fullscreen"
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (fullscreen)"
    @click="openModal('fullscreen')"
  ></a-button>
</div>

<a-modal
  v-if="isModalVisible"
  :selector-close-ids="\`btn_modal_size_\${ sizeModal }\`"
  header-text="Aloha"
  :close="closeModal"
  :size="sizeModal"
></a-modal>`}}function ke(){return{codeJs:`import {
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
};`}}var Ae={name:`PageModalSize`,components:{AButton:g,AlohaExample:f,AModal:p},setup(){let{codeHtml:e}=Oe(),{codeJs:t}=ke(),n=c(void 0),r=c(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:e=>{r.value=e,n.value=!0},sizeModal:r}}},je={class:`a_btn_group`,role:`group`};function Me(e,t,n,r,c,f){let p=l(`a-button`),m=l(`a-modal`),h=l(`aloha-example`);return s(),i(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SIZE_HEADER_`,description:`_A_MODAL_GROUP_SIZE_DESCRIPTION_`,props:[`size`]},{default:u(()=>[o(`div`,je,[d(p,{class:`a_btn a_btn_outline_secondary`,id:`btn_modal_size_small`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (small)`,onClick:t[0]||=t=>e.openModal(`small`)}),d(p,{class:`a_btn a_btn_outline_secondary`,id:`btn_modal_size_large`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (large)`,onClick:t[1]||=t=>e.openModal(`large`)}),d(p,{class:`a_btn a_btn_outline_secondary`,id:`btn_modal_size_xl`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (xl)`,onClick:t[2]||=t=>e.openModal(`xl`)}),d(p,{class:`a_btn a_btn_outline_secondary`,id:`btn_modal_size_xxl`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (xxl)`,onClick:t[3]||=t=>e.openModal(`xxl`)}),d(p,{class:`a_btn a_btn_outline_secondary`,id:`btn_modal_size_fullscreen`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (fullscreen)`,onClick:t[4]||=t=>e.openModal(`fullscreen`)})]),e.isModalVisible?(s(),i(m,{key:0,"selector-close-ids":`btn_modal_size_${e.sizeModal}`,"header-text":`Aloha`,close:e.closeModal,size:e.sizeModal},null,8,[`selector-close-ids`,`close`,`size`])):a(``,!0)]),_:1},8,[`code-html`,`code-js`])}var Ne=_(Ae,[[`render`,Me]]);function Pe(){return{codeHtml:`<a-button
  id="btn_modal_slots"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  selector-close-ids="btn_modal_slots"
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
</a-modal>`}}function $(){return{codeJs:`import {
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
};`}}var Fe={name:`PageModalSlots`,components:{AButton:g,AlohaExample:f,AModal:p},setup(){let{codeHtml:e}=Pe(),{codeJs:t}=$(),n=c(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function Ie(e,t,n,r,c,f){let p=l(`a-button`),m=l(`a-modal`),h=l(`aloha-example`);return s(),i(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SLOTS_HEADER_`,description:`_A_MODAL_GROUP_SLOTS_DESCRIPTION_`,slots:[`modalHeader`,`modalBody`,`modalFooterPrepend`,`modalFooterAppend`]},{default:u(()=>[d(p,{class:`a_btn a_btn_primary`,id:`btn_modal_slots`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(s(),i(m,{key:0,"selector-close-ids":`btn_modal_slots`,close:e.closeModal},{modalHeader:u(()=>[...t[0]||=[o(`span`,null,`Aloha`,-1)]]),modalBody:u(()=>[...t[1]||=[o(`div`,null,`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,-1)]]),modalFooterPrepend:u(()=>[d(p,{class:`a_btn a_btn_primary`,"icon-left":`ChevronLeft`})]),modalFooterAppend:u(()=>[d(p,{class:`a_btn a_btn_primary`,text:`Aloha`})]),_:1},8,[`close`])):a(``,!0)]),_:1},8,[`code-html`,`code-js`])}var Le=_(Fe,[[`render`,Ie]]);function Re(){return{dataExposes:[{name:`buttonRef`,description:`_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_`,type:`Object`},{name:`containerRef`,description:`_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_`,type:`Object`},{name:`isButtonVisible`,description:`_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_`,type:`Boolean`},{name:`isOpen`,description:`_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_`,type:`Boolean`},{name:`toggleButton`,description:`_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_`,type:`Function`}]}}function ze(){let e=r(()=>m({placeholder:`_A_MODAL_COMPONENT_NAME_`}));return{pageTitle:r(()=>`AModal${e.value?` (${e.value})`:``}`)}}var Be={name:`PageModal`,components:{PageModalFocusStart:ne,PageModalFocusReturn:J,PageModalCloseOnBackdrop:U,PageModalAriaLabel:T,AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:h,PageModalBasic:ee,PageModalBodyHtml:N,PageModalCloseButton:R,PageModalFooterSticky:se,PageModalInModal:fe,PageModalSaveButton:_e,PageModalSelectorClose:Se,PageModalSelectorCloseIds:De,PageModalSize:Ne,PageModalSlots:Le},setup(){let{pageTitle:e}=ze(),{dataProps:t}=v(),{dataSlots:n}=y(),{dataExposes:r}=Re(),{dataTranslate:i}=b();return{dataExposes:r,dataProps:t,dataSlots:n,dataTranslate:i,pageTitle:e}}};function Ve(e,t,n,r,a,o){let c=l(`a-translation`),f=l(`page-modal-basic`),p=l(`page-modal-body-html`),m=l(`page-modal-close-button`),h=l(`page-modal-footer-sticky`),g=l(`page-modal-save-button`),_=l(`page-modal-focus-return`),v=l(`page-modal-focus-start`),y=l(`page-modal-selector-close`),b=l(`page-modal-selector-close-ids`),x=l(`page-modal-size`),S=l(`page-modal-slots`),C=l(`page-modal-in-modal`),w=l(`page-modal-aria-label`),T=l(`page-modal-close-on-backdrop`),E=l(`aloha-table-props`),D=l(`aloha-table-translate`),O=l(`aloha-table-css-vars`),k=l(`aloha-page`);return s(),i(k,{"page-title":e.pageTitle},{body:u(()=>[d(c,{tag:`p`,html:`_A_MODAL_COMPONENT_DESCRIPTION_`}),d(c,{tag:`p`,html:`_A_MODAL_A11Y_DESCRIPTION_`}),d(f),d(p),d(m),d(h),d(g),d(_),d(v),d(y),d(b),d(x),d(S),d(C),d(w),d(T),d(E,{data:e.dataProps},null,8,[`data`]),d(E,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),d(D,{data:e.dataTranslate},null,8,[`data`]),d(O,{files:[`utils/modal`,`components/AModal`,`utils/backdrop`]})]),_:1},8,[`page-title`])}var He=_(Be,[[`render`,Ve]]);export{He as default};