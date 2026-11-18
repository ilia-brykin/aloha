import{t as e}from"./chunk.AlohaPage.sulZ3BAz.js";import{t}from"./chunk.AlohaTableProps.Cny8B0rP.js";import{t as n}from"./chunk.AlohaTableTranslate.BDkz3ESy.js";import{Ft as r,It as i,Lt as a,Nt as o,Pt as s,Xt as c,en as l,fn as u,in as d,jt as f,on as p,zt as m}from"./chunk.vendor.Cx127fe1.js";import{t as h}from"./chunk.AlohaExample.Dh7-vA8e.js";import{Mt as g,Nt as _,et as v,h as y,m as b}from"./bundle.index.Csp1_sOL.js";import{t as x}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function S(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
></a-modal>`}}function C(){return{codeJs:`import {
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
};`}}var w={name:`PageModalBasic`,components:{AButton:_,AlohaExample:h,AModal:y},setup(){let{codeHtml:e}=S(),{codeJs:t}=C(),n=p(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function T(e,t,n,a,o,s){let u=l(`a-button`),f=l(`a-modal`),p=l(`aloha-example`);return c(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`close`,`header-text`]},{default:d(()=>[m(u,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),r(f,{key:0,"header-text":`Aloha`,close:e.closeModal},null,8,[`close`])):i(``,!0)]),_:1},8,[`code-html`,`code-js`])}var E=x(w,[[`render`,T]]);function ee(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :body-html="bodyHtml"
  :close="closeModal"
></a-modal>`}}function te(){return{codeJs:`import {
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
};`}}var D={name:`PageModalBodyHtml`,components:{AButton:_,AlohaExample:h,AModal:y},setup(){let{codeHtml:e}=ee(),{codeJs:t}=te(),n=p(void 0);return{bodyHtml:`<ul>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ul>`,closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function O(e,t,n,a,o,s){let u=l(`a-button`),f=l(`a-modal`),p=l(`aloha-example`);return c(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_BODY_HTML_HEADER_`,description:`_A_MODAL_GROUP_BODY_HTML_DESCRIPTION_`,props:[`body-html`]},{default:d(()=>[m(u,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),r(f,{key:0,"header-text":`Aloha`,"body-html":e.bodyHtml,close:e.closeModal},null,8,[`body-html`,`close`])):i(``,!0)]),_:1},8,[`code-html`,`code-js`])}var k=x(D,[[`render`,O]]);function A(){return{codeHtml:`<a-button
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
></a-modal>`}}function j(){return{codeJs:`import {
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
};`}}var M={name:`PageModalCloseButton`,components:{AButton:_,AlohaExample:h,AModal:y},setup(){let{codeHtml:e}=A(),{codeJs:t}=j(),n=p(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function N(e,t,n,a,o,s){let u=l(`a-button`),f=l(`a-modal`),p=l(`aloha-example`);return c(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_CLOSE_BUTTON_HEADER_`,description:`_A_MODAL_GROUP_CLOSE_BUTTON_DESCRIPTION_`,props:[`close-button-attributes`,`close-button-class`,`close-button-id`,`close-button-text`]},{default:d(()=>[m(u,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),r(f,{key:0,"header-text":`Aloha`,close:e.closeModal,"close-button-attributes":{textTag:`strong`},"close-button-class":`a_btn a_btn_danger`,"close-button-id":`btn_close`,"close-button-text":`_A_MODAL_PAGE_BTN_CLOSE_`},null,8,[`close`])):i(``,!0)]),_:1},8,[`code-html`,`code-js`])}var P=x(M,[[`render`,N]]);function F(){return{codeHtml:`<a-button
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
></a-modal>`}}function I(){return{codeJs:`import {
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
};`}}var L={name:`PageModalFooterSticky`,components:{AButton:_,AlohaExample:h,AModal:y},setup(){let{codeHtml:e}=F(),{codeJs:t}=I(),n=p(void 0);return{bodyHtml:`<ul>
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
    </ul>`,closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function R(e,t,n,a,o,s){let u=l(`a-button`),f=l(`a-modal`),p=l(`aloha-example`);return c(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_FOOTER_STICKY_HEADER_`,description:`_A_MODAL_GROUP_FOOTER_STICKY_DESCRIPTION_`,props:[`is-footer-sticky`]},{default:d(()=>[m(u,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),r(f,{key:0,"body-html":e.bodyHtml,close:e.closeModal,"is-footer-sticky":!0,"header-text":`Aloha`},null,8,[`body-html`,`close`])):i(``,!0)]),_:1},8,[`code-html`,`code-js`])}var z=x(L,[[`render`,R]]);function B(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal-form
  v-if="isModalVisible"
  v-model="model"
  :data-form="dataForm"
  :close="closeModal"
  :is-save-button-hide="true"
  header-text="_A_MODAL_FORM_COLUMNS_HEADER_"
  size="large"
  class-columns="a_columns a_columns_count_12 a_columns_gap_3"
  class-column-default="a_column a_column_6 a_column_12_touch"
/>
<pre>{{ model }}</pre>`}}function V(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  AModalForm,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AModalForm,
  },
  setup() {
    const model = ref({ name: "Aloha", email: "aloha@example.com", notes: "" });
    const dataForm = [
      {
        type: "text",
        id: "name",
        label: "_A_FORM_EXAMPLE_NAME_",
      },
      {
        type: "email",
        id: "email",
        label: "_A_FORM_EXAMPLE_EMAIL_",
      },
      {
        type: "textarea",
        id: "notes",
        label: "_A_FORM_EXAMPLE_NOTES_",
        classColumn: "a_column a_column_12",
      },
    ];
    const isModalVisible = ref(false);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      closeModal,
      dataForm,
      isModalVisible,
      model,
      openModal,
    };
  },
};`}}function H(){return{dataProps:[{name:`class-column-default`,description:`_A_FORM_PROPS_CLASS_COLUMN_DEFAULT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`class-columns`,description:`_A_FORM_PROPS_CLASS_COLUMNS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1}]}}var U={name:`PageModalFormColumns`,components:{AButton:_,AlohaExample:h,AlohaTableProps:t,AModalForm:b},setup(){let{codeHtml:e}=B(),{codeJs:t}=V(),{dataProps:n}=H(),r=p({name:`Aloha`,email:`aloha@example.com`,notes:``}),i=[{type:`text`,id:`name`,label:`_A_FORM_EXAMPLE_NAME_`},{type:`email`,id:`email`,label:`_A_FORM_EXAMPLE_EMAIL_`},{type:`textarea`,id:`notes`,label:`_A_FORM_EXAMPLE_NOTES_`,classColumn:`a_column a_column_12`}],a=p(!1);return{closeModal:()=>{a.value=!1},dataForm:i,isModalVisible:a,model:r,openModal:()=>{a.value=!0},codeHtml:e,codeJs:t,dataProps:n}}};function W(e,t,n,o,p,h){let g=l(`a-button`),_=l(`a-modal-form`),v=l(`aloha-example`),y=l(`aloha-table-props`);return c(),a(f,null,[m(v,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_FORM_COLUMNS_HEADER_`,description:`_A_MODAL_FORM_COLUMNS_DESCRIPTION_`,props:[`class-columns`,`class-column-default`]},{default:d(()=>[m(g,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),r(_,{key:0,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"data-form":e.dataForm,close:e.closeModal,"is-save-button-hide":!0,"header-text":`_A_MODAL_FORM_COLUMNS_HEADER_`,size:`large`,"class-columns":`a_columns a_columns_count_12 a_columns_gap_3`,"class-column-default":`a_column a_column_6 a_column_12_touch`},null,8,[`modelValue`,`data-form`,`close`])):i(``,!0),s(`pre`,null,u(e.model),1)]),_:1},8,[`code-html`,`code-js`]),m(y,{"table-label":`AModalForm`,data:e.dataProps},null,8,[`data`])],64)}var G=x(U,[[`render`,W]]);function K(){return{codeHtml:`<a-button
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
</a-modal>`}}function q(){return{codeJs:`import {
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
};`}}var J={name:`PageModalInModal`,components:{AButton:_,AlohaExample:h,AModal:y},setup(){let{codeHtml:e}=K(),{codeJs:t}=q(),n=p(void 0),r=p(void 0);return{closeModal:()=>{n.value=!1},closeModal2:()=>{r.value=!1},codeHtml:e,codeJs:t,isModal2Visible:r,isModalVisible:n,openModal:()=>{n.value=!0},openModal2:()=>{r.value=!0}}}};function Y(e,t,n,a,o,s){let u=l(`a-button`),f=l(`a-modal`),p=l(`aloha-example`);return c(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_IN_MODAL_HEADER_`,description:`_A_MODAL_GROUP_IN_MODAL_DESCRIPTION_`},{default:d(()=>[m(u,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),r(f,{key:0,close:e.closeModal,"header-text":`Modal 1`,size:`xl`},{modalBody:d(()=>[m(u,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal2},null,8,[`onClick`])]),_:1},8,[`close`])):i(``,!0),e.isModal2Visible?(c(),r(f,{key:1,close:e.closeModal2,"header-text":`Modal 2`},null,8,[`close`])):i(``,!0)]),_:1},8,[`code-html`,`code-js`])}var X=x(J,[[`render`,Y]]);function Z(){return{codeHtml:`<a-button
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
></a-modal>`}}function Q(){return{codeJs:`import {
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
};`}}var ne={name:`PageModalSaveButton`,components:{AButton:_,AlohaExample:h,AModal:y},setup(){let{codeHtml:e}=Z(),{codeJs:t}=Q(),n=p(void 0),r=()=>{n.value=!0},i=()=>{n.value=!1};return{closeModal:i,codeHtml:e,codeJs:t,isModalVisible:n,openModal:r,saveModal:()=>{console.log(`saveModal`),i()}}}};function re(e,t,n,a,o,s){let u=l(`a-button`),f=l(`a-modal`),p=l(`aloha-example`);return c(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SAVE_BUTTON_HEADER_`,description:`_A_MODAL_GROUP_SAVE_BUTTON_DESCRIPTION_`,props:[`save`,`save-button-attributes`,`save-button-class`,`save-button-id`,`save-button-text`]},{default:d(()=>[m(u,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),r(f,{key:0,"header-text":`Aloha`,close:e.closeModal,save:e.saveModal,"save-button-attributes":{textTag:`strong`},"save-button-class":`a_btn a_btn_success`,"save-button-id":`btn_save`},null,8,[`close`,`save`])):i(``,!0)]),_:1},8,[`code-html`,`code-js`])}var ie=x(ne,[[`render`,re]]);function ae(){return{codeHtml:`<a-button
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
></a-modal>`}}function oe(){return{codeJs:`import {
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
};`}}var se={name:`PageModalSelectorClose`,components:{AButton:_,AlohaExample:h,AModal:y},setup(){let{codeHtml:e}=ae(),{codeJs:t}=oe(),n=p(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function ce(e,t,n,a,o,s){let u=l(`a-button`),f=l(`a-modal`),p=l(`aloha-example`);return c(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SELECTOR_CLOSE_HEADER_`,description:`_A_MODAL_GROUP_SELECTOR_CLOSE_DESCRIPTION_`,props:[`selector-close`]},{default:d(()=>[m(u,{class:`a_btn a_btn_primary`,id:`btn_open_modal`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),r(f,{key:0,"header-text":`Aloha`,close:e.closeModal,"selector-close":[`#btn_aloha`,`#btn_open_modal`]},null,8,[`close`])):i(``,!0)]),_:1},8,[`code-html`,`code-js`])}var le=x(se,[[`render`,ce]]);function ue(){return{codeHtml:`<a-button
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
></a-modal>`}}function de(){return{codeJs:`import {
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
};`}}var fe={name:`PageModalSelectorCloseIds`,components:{AButton:_,AlohaExample:h,AModal:y},setup(){let{codeHtml:e}=ue(),{codeJs:t}=de(),n=p(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function pe(e,t,n,a,o,s){let u=l(`a-button`),f=l(`a-modal`),p=l(`aloha-example`);return c(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SELECTOR_CLOSE_IDS_HEADER_`,description:`_A_MODAL_GROUP_SELECTOR_CLOSE_IDS_DESCRIPTION_`,props:[`selector-close-ids`]},{default:d(()=>[m(u,{class:`a_btn a_btn_primary`,id:`btn_open_modal_id`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),r(f,{key:0,"header-text":`Aloha`,close:e.closeModal,"selector-close-ids":[`btn_aloha`,`btn_open_modal_id`]},null,8,[`close`])):i(``,!0)]),_:1},8,[`code-html`,`code-js`])}var me=x(fe,[[`render`,pe]]);function he(){return{codeHtml:`<div 
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
></a-modal>`}}function ge(){return{codeJs:`import {
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
};`}}var _e={name:`PageModalSize`,components:{AButton:_,AlohaExample:h,AModal:y},setup(){let{codeHtml:e}=he(),{codeJs:t}=ge(),n=p(void 0),r=p(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:e=>{r.value=e,n.value=!0},sizeModal:r}}},ve={class:`a_btn_group`,role:`group`};function ye(e,t,n,a,o,u){let f=l(`a-button`),p=l(`a-modal`),h=l(`aloha-example`);return c(),r(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SIZE_HEADER_`,description:`_A_MODAL_GROUP_SIZE_DESCRIPTION_`,props:[`size`]},{default:d(()=>[s(`div`,ve,[m(f,{class:`a_btn a_btn_outline_secondary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (small)`,onClick:t[0]||=t=>e.openModal(`small`)}),m(f,{class:`a_btn a_btn_outline_secondary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (large)`,onClick:t[1]||=t=>e.openModal(`large`)}),m(f,{class:`a_btn a_btn_outline_secondary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (xl)`,onClick:t[2]||=t=>e.openModal(`xl`)}),m(f,{class:`a_btn a_btn_outline_secondary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (xxl)`,onClick:t[3]||=t=>e.openModal(`xxl`)}),m(f,{class:`a_btn a_btn_outline_secondary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,"text-after":` (fullscreen)`,onClick:t[4]||=t=>e.openModal(`fullscreen`)})]),e.isModalVisible?(c(),r(p,{key:0,"header-text":`Aloha`,close:e.closeModal,size:e.sizeModal},null,8,[`close`,`size`])):i(``,!0)]),_:1},8,[`code-html`,`code-js`])}var be=x(_e,[[`render`,ye]]);function $(){return{codeHtml:`<a-button
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
</a-modal>`}}function xe(){return{codeJs:`import {
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
};`}}var Se={name:`PageModalSlots`,components:{AButton:_,AlohaExample:h,AModal:y},setup(){let{codeHtml:e}=$(),{codeJs:t}=xe(),n=p(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:t,isModalVisible:n,openModal:()=>{n.value=!0}}}};function Ce(e,t,n,a,o,u){let f=l(`a-button`),p=l(`a-modal`),h=l(`aloha-example`);return c(),r(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MODAL_GROUP_SLOTS_HEADER_`,description:`_A_MODAL_GROUP_SLOTS_DESCRIPTION_`,slots:[`modalHeader`,`modalBody`,`modalFooterPrepend`,`modalFooterAppend`]},{default:d(()=>[m(f,{class:`a_btn a_btn_primary`,text:`_A_MODAL_PAGE_BTN_OPEN_MODAL_`,onClick:e.openModal},null,8,[`onClick`]),e.isModalVisible?(c(),r(p,{key:0,close:e.closeModal},{modalHeader:d(()=>[...t[0]||=[s(`span`,null,`Aloha`,-1)]]),modalBody:d(()=>[...t[1]||=[s(`div`,null,`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,-1)]]),modalFooterPrepend:d(()=>[m(f,{class:`a_btn a_btn_primary`,"icon-left":`ChevronLeft`})]),modalFooterAppend:d(()=>[m(f,{class:`a_btn a_btn_primary`,text:`Aloha`})]),_:1},8,[`close`])):i(``,!0)]),_:1},8,[`code-html`,`code-js`])}var we=x(Se,[[`render`,Ce]]);function Te(){return{dataExposes:[{name:`buttonRef`,description:`_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_`,type:`Object`},{name:`containerRef`,description:`_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_`,type:`Object`},{name:`isButtonVisible`,description:`_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_`,type:`Boolean`},{name:`isOpen`,description:`_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_`,type:`Boolean`},{name:`toggleButton`,description:`_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_`,type:`Function`}]}}function Ee(){let e=o(()=>g({placeholder:`_A_MODAL_COMPONENT_NAME_`}));return{pageTitle:o(()=>`AModal${e.value?` (${e.value})`:``}`)}}function De(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`backdrop-z-index`,description:`_A_MODAL_PROPS_BACKDROP_Z_INDEX_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`body-html`,description:`_A_MODAL_PROPS_BODY_HTML_DESCRIPTION_`,type:`Object`,default:`""`,required:!1},{name:`body-html-class`,description:`_A_MODAL_PROPS_BODY_HTML_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:void 0,required:!1},{name:`class-extra`,description:`_A_MODAL_PROPS_CLASS_EXTRA_DESCRIPTION_`,type:`String / Object`,default:`a_modal_class_extra`,required:!1},{name:`close`,description:`_A_MODAL_PROPS_CLOSE_DESCRIPTION_`,type:`Function`,default:void 0,required:!0},{name:`close-button-attributes`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`close-button-class`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_secondary`,required:!1},{name:`close-button-id`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`close-button-text`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_CANCEL_`,required:!1},{name:`close-button-text-screen-reader-footer`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_SCREEN_READER_FOOTER_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_`,required:!1},{name:`close-button-text-screen-reader-header`,description:`_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_SCREEN_READER_HEADER_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_`,required:!1},{name:`disabled`,description:`_A_MODAL_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`disabled-save`,description:`_A_MODAL_PROPS_DISABLED_SAVE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`extra`,description:`_A_MODAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`focus-start-id`,description:`_A_MODAL_PROPS_FOCUS_START_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`header-tag`,description:`_A_MODAL_PROPS_HEADER_TAG_DESCRIPTION_`,type:`String`,default:`h2`,required:!1},{name:`header-text`,description:`_A_MODAL_PROPS_HEADER_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`hide-footer`,description:`_A_MODAL_PROPS_HIDE_FOOTER_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`hide-header`,description:`_A_MODAL_PROPS_HIDE_HEADER_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`id`,description:`_A_MODAL_PROPS_ID_DESCRIPTION_`,type:`String`,default:`uniqueId("a_modal_")`,required:!1},{name:`is-close-button-hide`,description:`_A_MODAL_PROPS_IS_CLOSE_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-confirm`,description:`_A_MODAL_PROPS_IS_CONFIRM_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-footer-sticky`,description:`_A_MODAL_PROPS_IS_FOOTER_STICKY_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-modal-hidden`,description:`_A_MODAL_PROPS_IS_MODAL_HIDDEN_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-save-button-hide`,description:`_A_MODAL_PROPS_IS_SAVE_BUTTON_HIDE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`loading`,description:`_A_MODAL_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`modal-class`,description:`_A_MODAL_PROPS_MODAL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`modal-style`,description:`_A_MODAL_PROPS_MODAL_STYLE_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`save`,description:`_A_MODAL_PROPS_SAVE_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`save-button-attributes`,description:`_A_MODAL_PROPS_SAVE_BUTTON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`save-button-class`,description:`_A_MODAL_PROPS_SAVE_BUTTON_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn a_btn_primary`,required:!1},{name:`save-button-id`,description:`_A_MODAL_PROPS_SAVE_BUTTON_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`save-button-text`,description:`_A_MODAL_PROPS_SAVE_BUTTON_TEXT_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_SAVE_`,required:!1},{name:`save-button-text-screen-reader`,description:`_A_MODAL_PROPS_SAVE_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_`,type:`String`,default:`_A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_`,required:!1},{name:`selector-close`,description:`_A_MODAL_PROPS_SELECTOR_CLOSE_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`selector-close-ids`,description:`_A_MODAL_PROPS_SELECTOR_CLOSE_IDS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`show-close-button-header`,description:`_A_MODAL_PROPS_SHOW_CLOSE_BUTTON_HEADER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`size`,description:`_A_MODAL_PROPS_SIZE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`stop`,description:`_A_MODAL_PROPS_STOP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`use-escape`,description:`_A_MODAL_PROPS_USE_ESCAPE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`use-focus-on-start`,description:`_A_MODAL_PROPS_USE_FOCUS_ON_START_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`z-index`,description:`_A_MODAL_PROPS_Z_INDEX_DESCRIPTION_`,type:`Number`,default:void 0,required:!1}]}}function Oe(){return{dataSlots:[{name:`modalHeader`,description:`_A_MODAL_SLOTS_MODAL_HEADER_DESCRIPTION_`},{name:`modalBody`,description:`_A_MODAL_SLOTS_MODAL_BODY_DESCRIPTION_`},{name:`modalFooterPrepend`,description:`_A_MODAL_SLOTS_MODAL_FOOTER_PREPEND_DESCRIPTION_`},{name:`modalFooterAppend`,description:`_A_MODAL_SLOTS_MODAL_FOOTER_APPEND_DESCRIPTION_`}]}}function ke(){return{dataTranslate:[`_A_MODAL_BTN_CANCEL_`,`_A_MODAL_BTN_SAVE_`,`_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_HEADER_`,`_A_MODAL_BTN_TEXT_SCREEN_READER_CLOSE_FOOTER_`,`_A_MODAL_BTN_TEXT_SCREEN_READER_SAVE_`]}}var Ae={name:`PageModal`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:v,PageModalBasic:E,PageModalBodyHtml:k,PageModalCloseButton:P,PageModalFooterSticky:z,PageModalFormColumns:G,PageModalInModal:X,PageModalSaveButton:ie,PageModalSelectorClose:le,PageModalSelectorCloseIds:me,PageModalSize:be,PageModalSlots:we},setup(){let{pageTitle:e}=Ee(),{dataProps:t}=De(),{dataSlots:n}=Oe(),{dataExposes:r}=Te(),{dataTranslate:i}=ke();return{dataExposes:r,dataProps:t,dataSlots:n,dataTranslate:i,pageTitle:e}}};function je(e,t,n,i,a,o){let s=l(`a-translation`),u=l(`page-modal-basic`),f=l(`page-modal-form-columns`),p=l(`page-modal-body-html`),h=l(`page-modal-close-button`),g=l(`page-modal-footer-sticky`),_=l(`page-modal-save-button`),v=l(`page-modal-selector-close`),y=l(`page-modal-selector-close-ids`),b=l(`page-modal-size`),x=l(`page-modal-slots`),S=l(`page-modal-in-modal`),C=l(`aloha-table-props`),w=l(`aloha-table-translate`),T=l(`aloha-table-css-vars`),E=l(`aloha-page`);return c(),r(E,{"page-title":e.pageTitle},{body:d(()=>[m(s,{tag:`p`,html:`_A_MODAL_COMPONENT_DESCRIPTION_`}),m(u),m(f),m(p),m(h),m(g),m(_),m(v),m(y),m(b),m(x),m(S),m(C,{data:e.dataProps},null,8,[`data`]),m(C,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),m(w,{data:e.dataTranslate},null,8,[`data`]),m(T,{files:[`utils/modal`,`components/AModal`,`utils/backdrop`]})]),_:1},8,[`page-title`])}var Me=x(Ae,[[`render`,je]]);export{Me as default};