"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[9740],{9370:(e,o,n)=>{n.d(o,{Z:()=>i});var a=n(798);const t={class:"a_p_2"};var l=n(5444),_=n(9873),s=n(6486);const d={name:"AlohaTableTranslate",components:{ATable:l.Z},props:{data:{type:Array,required:!0}},setup(e){const{columns:o}={columns:[{id:"placeholder",label:"_ALOHA_TABLE_COLUMN_TRANSLATE_PLACEHOLDER_",keyLabel:"placeholder",sortId:"placeholder"},{id:"translate",label:"_ALOHA_TABLE_COLUMN_TRANSLATE_",keyLabel:"translate",sortId:"translate"}]},{dataTranslated:n}=function(e){const o=(0,a.Vh)(e,"data");return{dataTranslated:(0,a.Fl)((()=>{const e=[];return(0,s.forEach)(o.value,(o=>{e.push({placeholder:o,translate:(0,_.Gd)({placeholder:o})})})),e}))}}(e);return{columns:o,dataTranslated:n}}},i=(0,n(3744).Z)(d,[["render",function(e,o){const n=(0,a.up)("a-table");return(0,a.wg)(),(0,a.iD)("div",t,[(0,a.Wm)(n,{label:"_ALOHA_TABLE_TRANSLATE_LABEL_",columns:e.columns,data:e.dataTranslated,"is-action-column-visible":!1,"model-sort":"name","is-columns-dnd":!1,"is-sorting-multi-column":!1,"show-first-sorting-sequence-number":!1},null,8,["columns","data"])])}]])},3921:(e,o,n)=>{n.r(o),n.d(o,{default:()=>g});var a=n(798),t=n(6049),l=n(8975),_=n(9370),s=n(9731),d=n(903),i=n(6660),r=n(7851);const c={name:"PageModalBasic",components:{AButton:d.Z,AlohaExample:i.Z,AModal:r.Z},setup(){const{codeHtml:e}={codeHtml:'<a-button\n  class="a_btn a_btn_primary"\n  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"\n  @click="openModal"\n></a-button>\n\n<a-modal\n  v-if="isModalVisible"\n  header-text="Aloha"\n  :close="closeModal"\n></a-modal>'},{codeJs:o}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AButton from "aloha-vue/src/AButton/AButton";\nimport AModal from "aloha-vue/src/AModal/AModal";\n    \nexport default {\n  name: "PageModalBasic",\n  components: {\n    AButton,\n    AModal,\n  },\n  setup() {\n    const isModalVisible = ref(undefined);\n\n    const openModal = () => {\n      isModalVisible.value = true;\n    };\n\n    const closeModal = () => {\n      isModalVisible.value = false;\n    };\n\n    return {\n      closeModal,\n      isModalVisible,\n      openModal,\n    };\n  },\n};'},n=(0,a.iH)(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:o,isModalVisible:n,openModal:()=>{n.value=!0}}}};var u=n(3744);const A=(0,u.Z)(c,[["render",function(e,o){const n=(0,a.up)("a-button"),t=(0,a.up)("a-modal"),l=(0,a.up)("aloha-example");return(0,a.wg)(),(0,a.j4)(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["close","header-text"]},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?((0,a.wg)(),(0,a.j4)(t,{key:0,"header-text":"Aloha",close:e.closeModal},null,8,["close"])):(0,a.kq)("v-if",!0)])),_:1},8,["code-html","code-js"])}]]),p={name:"PageModalBodyHtml",components:{AButton:d.Z,AlohaExample:i.Z,AModal:r.Z},setup(){const{codeHtml:e}={codeHtml:'<a-button\n  class="a_btn a_btn_primary"\n  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"\n  @click="openModal"\n></a-button>\n\n<a-modal\n  v-if="isModalVisible"\n  header-text="Aloha"\n  :body-html="bodyHtml"\n  :close="closeModal"\n></a-modal>'},{codeJs:o}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AButton from "aloha-vue/src/AButton/AButton";\nimport AModal from "aloha-vue/src/AModal/AModal";\n    \nexport default {\n  name: "PageModalBodyHtml",\n  components: {\n    AButton,\n    AModal,\n  },\n  setup() {\n    const isModalVisible = ref(undefined);\n    const bodyHtml = `<ul>\n      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n      <li>Aliquam tincidunt mauris eu risus.</li>\n      <li>Vestibulum auctor dapibus neque.</li>\n    </ul>`;\n\n    const openModal = () => {\n      isModalVisible.value = true;\n    };\n\n    const closeModal = () => {\n      isModalVisible.value = false;\n    };\n\n    return {\n      bodyHtml,\n      closeModal,\n      isModalVisible,\n      openModal,\n    };\n  },\n};'},n=(0,a.iH)(void 0);return{bodyHtml:"<ul>\n      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n      <li>Aliquam tincidunt mauris eu risus.</li>\n      <li>Vestibulum auctor dapibus neque.</li>\n    </ul>",closeModal:()=>{n.value=!1},codeHtml:e,codeJs:o,isModalVisible:n,openModal:()=>{n.value=!0}}}},m=(0,u.Z)(p,[["render",function(e,o){const n=(0,a.up)("a-button"),t=(0,a.up)("a-modal"),l=(0,a.up)("aloha-example");return(0,a.wg)(),(0,a.j4)(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_BODY_HTML_HEADER_",description:"_A_MODAL_GROUP_BODY_HTML_DESCRIPTION_",props:["body-html"]},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?((0,a.wg)(),(0,a.j4)(t,{key:0,"header-text":"Aloha","body-html":e.bodyHtml,close:e.closeModal},null,8,["body-html","close"])):(0,a.kq)("v-if",!0)])),_:1},8,["code-html","code-js"])}]]),M={name:"PageModalCloseButton",components:{AButton:d.Z,AlohaExample:i.Z,AModal:r.Z},setup(){const{codeHtml:e}={codeHtml:'<a-button\n  class="a_btn a_btn_primary"\n  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"\n  @click="openModal"\n></a-button>\n\n<a-modal\n  v-if="isModalVisible"\n  header-text="Aloha"\n  :close="closeModal"\n  :close-button-attributes="{ textTag: \'strong\' }"\n  close-button-class="a_btn a_btn_danger"\n  close-button-id="btn_close"\n  close-button-text="_A_MODAL_PAGE_BTN_CLOSE_"\n></a-modal>'},{codeJs:o}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AButton from "aloha-vue/src/AButton/AButton";\nimport AModal from "aloha-vue/src/AModal/AModal";\n    \nexport default {\n  name: "PageModalCloseButton",\n  components: {\n    AButton,\n    AModal,\n  },\n  setup() {\n    const isModalVisible = ref(undefined);\n    \n    const openModal = () => {\n      isModalVisible.value = true;\n    };\n\n    const closeModal = () => {\n      isModalVisible.value = false;\n    };\n\n    return {\n      closeModal,\n      isModalVisible,\n      openModal,\n    };\n  },\n};'},n=(0,a.iH)(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:o,isModalVisible:n,openModal:()=>{n.value=!0}}}},O=(0,u.Z)(M,[["render",function(e,o){const n=(0,a.up)("a-button"),t=(0,a.up)("a-modal"),l=(0,a.up)("aloha-example");return(0,a.wg)(),(0,a.j4)(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_CLOSE_BUTTON_HEADER_",description:"_A_MODAL_GROUP_CLOSE_BUTTON_DESCRIPTION_",props:["close-button-attributes","close-button-class","close-button-id","close-button-text"]},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?((0,a.wg)(),(0,a.j4)(t,{key:0,"header-text":"Aloha",close:e.closeModal,"close-button-attributes":{textTag:"strong"},"close-button-class":"a_btn a_btn_danger","close-button-id":"btn_close","close-button-text":"_A_MODAL_PAGE_BTN_CLOSE_"},null,8,["close"])):(0,a.kq)("v-if",!0)])),_:1},8,["code-html","code-js"])}]]),b={name:"PageModalSaveButton",components:{AButton:d.Z,AlohaExample:i.Z,AModal:r.Z},setup(){const{codeHtml:e}={codeHtml:'<a-button\n  class="a_btn a_btn_primary"\n  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"\n  @click="openModal"\n></a-button>\n\n<a-modal\n  v-if="isModalVisible"\n  header-text="Aloha"\n  :close="closeModal"\n  :save="saveModal"\n  :save-button-attributes="{ textTag: \'strong\' }"\n  save-button-class="a_btn a_btn_success"\n  save-button-id="btn_save"\n></a-modal>'},{codeJs:o}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AButton from "aloha-vue/src/AButton/AButton";\nimport AModal from "aloha-vue/src/AModal/AModal";\n    \nexport default {\n  name: "PageModalSaveButton",\n  components: {\n    AButton,\n    AModal,\n  },\n  setup() {\n    const isModalVisible = ref(undefined);\n    \n    const openModal = () => {\n      isModalVisible.value = true;\n    };\n\n    const closeModal = () => {\n      isModalVisible.value = false;\n    };\n    \n    const saveModal = () => {\n      console.log("saveModal");\n      closeModal();\n    };\n\n    return {\n      closeModal,\n      isModalVisible,\n      openModal,\n      saveModal,\n    };\n  },\n};'},n=(0,a.iH)(void 0),t=()=>{n.value=!1};return{closeModal:t,codeHtml:e,codeJs:o,isModalVisible:n,openModal:()=>{n.value=!0},saveModal:()=>{console.log("saveModal"),t()}}}},E=(0,u.Z)(b,[["render",function(e,o){const n=(0,a.up)("a-button"),t=(0,a.up)("a-modal"),l=(0,a.up)("aloha-example");return(0,a.wg)(),(0,a.j4)(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SAVE_BUTTON_HEADER_",description:"_A_MODAL_GROUP_SAVE_BUTTON_DESCRIPTION_",props:["save","save-button-attributes","save-button-class","save-button-id","save-button-text"]},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?((0,a.wg)(),(0,a.j4)(t,{key:0,"header-text":"Aloha",close:e.closeModal,save:e.saveModal,"save-button-attributes":{textTag:"strong"},"save-button-class":"a_btn a_btn_success","save-button-id":"btn_save"},null,8,["close","save"])):(0,a.kq)("v-if",!0)])),_:1},8,["code-html","code-js"])}]]),P={name:"PageModalSelectorClose",components:{AButton:d.Z,AlohaExample:i.Z,AModal:r.Z},setup(){const{codeHtml:e}={codeHtml:'<a-button\n  id="btn_open_modal"\n  class="a_btn a_btn_primary"\n  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"\n  @click="openModal"\n></a-button>\n\n<a-modal\n  v-if="isModalVisible"\n  header-text="Aloha"\n  :close="closeModal"\n  :selector-close="[\'#btn_aloha\', \'#btn_open_modal\']"\n></a-modal>'},{codeJs:o}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AButton from "aloha-vue/src/AButton/AButton";\nimport AModal from "aloha-vue/src/AModal/AModal";\n    \nexport default {\n  name: "PageModalSelectorClose",\n  components: {\n    AButton,\n    AModal,\n  },\n  setup() {\n    const isModalVisible = ref(undefined);\n    \n    const openModal = () => {\n      isModalVisible.value = true;\n    };\n\n    const closeModal = () => {\n      isModalVisible.value = false;\n    };\n\n    return {\n      closeModal,\n      isModalVisible,\n      openModal,\n    };\n  },\n};'},n=(0,a.iH)(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:o,isModalVisible:n,openModal:()=>{n.value=!0}}}},S=(0,u.Z)(P,[["render",function(e,o){const n=(0,a.up)("a-button"),t=(0,a.up)("a-modal"),l=(0,a.up)("aloha-example");return(0,a.wg)(),(0,a.j4)(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SELECTOR_CLOSE_HEADER_",description:"_A_MODAL_GROUP_SELECTOR_CLOSE_DESCRIPTION_",props:["selector-close"]},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{class:"a_btn a_btn_primary",id:"btn_open_modal",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?((0,a.wg)(),(0,a.j4)(t,{key:0,"header-text":"Aloha",close:e.closeModal,"selector-close":["#btn_aloha","#btn_open_modal"]},null,8,["close"])):(0,a.kq)("v-if",!0)])),_:1},8,["code-html","code-js"])}]]),D={name:"PageModalSelectorCloseIds",components:{AButton:d.Z,AlohaExample:i.Z,AModal:r.Z},setup(){const{codeHtml:e}={codeHtml:'<a-button\n  id="btn_open_modal_id"\n  class="a_btn a_btn_primary"\n  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"\n  @click="openModal"\n></a-button>\n\n<a-modal\n  v-if="isModalVisible"\n  header-text="Aloha"\n  :close="closeModal"\n  :selector-close-ids="[\'btn_aloha\', \'btn_open_modal_id\']"\n></a-modal>'},{codeJs:o}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AButton from "aloha-vue/src/AButton/AButton";\nimport AModal from "aloha-vue/src/AModal/AModal";\n    \nexport default {\n  name: "PageModalSelectorCloseIds",\n  components: {\n    AButton,\n    AModal,\n  },\n  setup() {\n    const isModalVisible = ref(undefined);\n    \n    const openModal = () => {\n      isModalVisible.value = true;\n    };\n\n    const closeModal = () => {\n      isModalVisible.value = false;\n    };\n\n    return {\n      closeModal,\n      isModalVisible,\n      openModal,\n    };\n  },\n};'},n=(0,a.iH)(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:o,isModalVisible:n,openModal:()=>{n.value=!0}}}},T=(0,u.Z)(D,[["render",function(e,o){const n=(0,a.up)("a-button"),t=(0,a.up)("a-modal"),l=(0,a.up)("aloha-example");return(0,a.wg)(),(0,a.j4)(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SELECTOR_CLOSE_IDS_HEADER_",description:"_A_MODAL_GROUP_SELECTOR_CLOSE_IDS_DESCRIPTION_",props:["selector-close-ids"]},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{class:"a_btn a_btn_primary",id:"btn_open_modal_id",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?((0,a.wg)(),(0,a.j4)(t,{key:0,"header-text":"Aloha",close:e.closeModal,"selector-close-ids":["btn_aloha","btn_open_modal_id"]},null,8,["close"])):(0,a.kq)("v-if",!0)])),_:1},8,["code-html","code-js"])}]]),L={class:"a_btn_group",role:"group"},f={name:"PageModalSize",components:{AButton:d.Z,AlohaExample:i.Z,AModal:r.Z},setup(){const{codeHtml:e}={codeHtml:'<div \n  class="a_btn_group"\n  role="group"\n>\n  <a-button\n    class="a_btn a_btn_outline_secondary"\n    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"\n    text-after=" (small)"\n    @click="openModal(\'small\')"\n  ></a-button>\n  <a-button\n    class="a_btn a_btn_outline_secondary"\n    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"\n    text-after=" (large)"\n    @click="openModal(\'large\')"\n  ></a-button>\n  <a-button\n    class="a_btn a_btn_outline_secondary"\n    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"\n    text-after=" (xl)"\n    @click="openModal(\'xl\')"\n  ></a-button>\n  <a-button\n    class="a_btn a_btn_outline_secondary"\n    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"\n    text-after=" (xxl)"\n    @click="openModal(\'xxl\')"\n  ></a-button>\n  <a-button\n    class="a_btn a_btn_outline_secondary"\n    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"\n    text-after=" (fullscreen)"\n    @click="openModal(\'fullscreen\')"\n  ></a-button>\n</div>\n\n<a-modal\n  v-if="isModalVisible"\n  header-text="Aloha"\n  :close="closeModal"\n  :size="sizeModal"\n></a-modal>'},{codeJs:o}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AButton from "aloha-vue/src/AButton/AButton";\nimport AModal from "aloha-vue/src/AModal/AModal";\n    \nexport default {\n  name: "PageModalSize",\n  components: {\n    AButton,\n    AModal,\n  },\n  setup() {\n    const isModalVisible = ref(undefined);\n    const sizeModal = ref(undefined);\n\n    const openModal = size => {\n      sizeModal.value = size;\n      isModalVisible.value = true;\n    };\n\n    const closeModal = () => {\n      isModalVisible.value = false;\n    };\n\n    return {\n      closeModal,\n      isModalVisible,\n      openModal,\n      sizeModal,\n    };\n  },\n};'},n=(0,a.iH)(void 0),t=(0,a.iH)(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:o,isModalVisible:n,openModal:e=>{t.value=e,n.value=!0},sizeModal:t}}},v=(0,u.Z)(f,[["render",function(e,o){const n=(0,a.up)("a-button"),t=(0,a.up)("a-modal"),l=(0,a.up)("aloha-example");return(0,a.wg)(),(0,a.j4)(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SIZE_HEADER_",description:"_A_MODAL_GROUP_SIZE_DESCRIPTION_",props:["size"]},{default:(0,a.w5)((()=>[(0,a._)("div",L,[(0,a.Wm)(n,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (small)",onClick:o[0]||(o[0]=o=>e.openModal("small"))}),(0,a.Wm)(n,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (large)",onClick:o[1]||(o[1]=o=>e.openModal("large"))}),(0,a.Wm)(n,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (xl)",onClick:o[2]||(o[2]=o=>e.openModal("xl"))}),(0,a.Wm)(n,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (xxl)",onClick:o[3]||(o[3]=o=>e.openModal("xxl"))}),(0,a.Wm)(n,{class:"a_btn a_btn_outline_secondary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_","text-after":" (fullscreen)",onClick:o[4]||(o[4]=o=>e.openModal("fullscreen"))})]),e.isModalVisible?((0,a.wg)(),(0,a.j4)(t,{key:0,"header-text":"Aloha",close:e.closeModal,size:e.sizeModal},null,8,["close","size"])):(0,a.kq)("v-if",!0)])),_:1},8,["code-html","code-js"])}]]),N=(0,a._)("span",null,"Aloha",-1),h=(0,a._)("div",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit.",-1),B={name:"PageModalSlots",components:{AButton:d.Z,AlohaExample:i.Z,AModal:r.Z},setup(){const{codeHtml:e}={codeHtml:'<a-button\n  class="a_btn a_btn_primary"\n  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"\n  @click="openModal"\n></a-button>\n\n<a-modal\n  v-if="isModalVisible"\n  :close="closeModal"\n>\n  <template\n    v-slot:modalHeader\n  >\n    <span>Aloha</span>\n  </template>\n  \n  <template\n    v-slot:modalBody\n  >\n    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>\n  </template>\n  \n  <template\n    v-slot:modalFooterPrepend\n  >\n    <a-button\n      class="a_btn a_btn_primary"\n      icon-left="ChevronLeft"\n    ></a-button>\n  </template>\n  \n  <template\n    v-slot:modalFooterAppend\n  >\n    <a-button\n      class="a_btn a_btn_primary"\n      text="Aloha"\n    ></a-button>\n  </template>\n</a-modal>'},{codeJs:o}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AButton from "aloha-vue/src/AButton/AButton";\nimport AModal from "aloha-vue/src/AModal/AModal";\n    \nexport default {\n  name: "PageModalSlots",\n  components: {\n    AButton,\n    AModal,\n  },\n  setup() {\n    const isModalVisible = ref(undefined);\n    \n    const openModal = () => {\n      isModalVisible.value = true;\n    };\n\n    const closeModal = () => {\n      isModalVisible.value = false;\n    };\n\n    return {\n      closeModal,\n      isModalVisible,\n      openModal,\n    };\n  },\n};'},n=(0,a.iH)(void 0);return{closeModal:()=>{n.value=!1},codeHtml:e,codeJs:o,isModalVisible:n,openModal:()=>{n.value=!0}}}},I=(0,u.Z)(B,[["render",function(e,o){const n=(0,a.up)("a-button"),t=(0,a.up)("a-modal"),l=(0,a.up)("aloha-example");return(0,a.wg)(),(0,a.j4)(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MODAL_GROUP_SLOTS_HEADER_",description:"_A_MODAL_GROUP_SLOTS_DESCRIPTION_",slots:["modalHeader","modalBody","modalFooterPrepend","modalFooterAppend"]},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{class:"a_btn a_btn_primary",text:"_A_MODAL_PAGE_BTN_OPEN_MODAL_",onClick:e.openModal},null,8,["onClick"]),e.isModalVisible?((0,a.wg)(),(0,a.j4)(t,{key:0,close:e.closeModal},{modalHeader:(0,a.w5)((()=>[N])),modalBody:(0,a.w5)((()=>[h])),modalFooterPrepend:(0,a.w5)((()=>[(0,a.Wm)(n,{class:"a_btn a_btn_primary","icon-left":"ChevronLeft"})])),modalFooterAppend:(0,a.w5)((()=>[(0,a.Wm)(n,{class:"a_btn a_btn_primary",text:"Aloha"})])),_:1},8,["close"])):(0,a.kq)("v-if",!0)])),_:1},8,["code-html","code-js"])}]]);var R=n(9873);const C={name:"PageModal",components:{AlohaPage:t.Z,AlohaTableProps:l.Z,AlohaTableTranslate:_.Z,ATranslation:s.Z,PageModalBasic:A,PageModalBodyHtml:m,PageModalCloseButton:O,PageModalSaveButton:E,PageModalSelectorClose:S,PageModalSelectorCloseIds:T,PageModalSize:v,PageModalSlots:I},setup(){const{pageTitle:e}=function(){const e=(0,a.Fl)((()=>(0,R.Gd)({placeholder:"_A_MODAL_COMPONENT_NAME_"})));return{pageTitle:(0,a.Fl)((()=>"AModal"+(e.value?` (${e.value})`:"")))}}(),{dataProps:o}={dataProps:[{name:"body-html",description:"_A_MODAL_PROPS_BODY_HTML_DESCRIPTION_",type:"Object",default:'""',required:!1},{name:"close",description:"_A_MODAL_PROPS_CLOSE_DESCRIPTION_",type:"Function",default:void 0,required:!0},{name:"close-button-attributes",description:"_A_MODAL_PROPS_CLOSE_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"close-button-class",description:"_A_MODAL_PROPS_CLOSE_BUTTON_CLASS_DESCRIPTION_",type:"String / Array / Object",default:"a_btn a_btn_secondary",required:!1},{name:"close-button-id",description:"_A_MODAL_PROPS_CLOSE_BUTTON_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"close-button-text",description:"_A_MODAL_PROPS_CLOSE_BUTTON_TEXT_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_CANCEL_",required:!1},{name:"disabled",description:"_A_MODAL_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"disabled-save",description:"_A_MODAL_PROPS_DISABLED_SAVE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"extra",description:"_A_MODAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"header-tag",description:"_A_MODAL_PROPS_HEADER_TAG_DESCRIPTION_",type:"String",default:"h2",required:!1},{name:"header-text",description:"_A_MODAL_PROPS_HEADER_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_MODAL_PROPS_ID_DESCRIPTION_",type:"String",default:'uniqueId("a_modal_")',required:!1},{name:"is-close-button-hide",description:"_A_MODAL_PROPS_IS_CLOSE_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-confirm",description:"_A_MODAL_PROPS_IS_CONFIRM_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-modal-hidden",description:"_A_MODAL_PROPS_IS_MODAL_HIDDEN_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-save-button-hide",description:"_A_MODAL_PROPS_IS_SAVE_BUTTON_HIDE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"loading",description:"_A_MODAL_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"modal-class",description:"_A_MODAL_PROPS_MODAL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"save",description:"_A_MODAL_PROPS_SAVE_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"save-button-attributes",description:"_A_MODAL_PROPS_SAVE_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"save-button-class",description:"_A_MODAL_PROPS_SAVE_BUTTON_CLASS_DESCRIPTION_",type:"String / Array / Object",default:"a_btn a_btn_primary",required:!1},{name:"save-button-id",description:"_A_MODAL_PROPS_SAVE_BUTTON_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"save-button-text",description:"_A_MODAL_PROPS_SAVE_BUTTON_TEXT_DESCRIPTION_",type:"String",default:"_A_MODAL_BTN_SAVE_",required:!1},{name:"selector-close",description:"_A_MODAL_PROPS_SELECTOR_CLOSE_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"selector-close-ids",description:"_A_MODAL_PROPS_SELECTOR_CLOSE_IDS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"size",description:"_A_MODAL_PROPS_SIZE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"use-escape",description:"_A_MODAL_PROPS_USE_ESCAPE_DESCRIPTION_",type:"Boolean",default:!0,required:!1}]},{dataSlots:n}={dataSlots:[{name:"modalHeader",description:"_A_MODAL_SLOTS_MODAL_HEADER_DESCRIPTION_"},{name:"modalBody",description:"_A_MODAL_SLOTS_MODAL_BODY_DESCRIPTION_"},{name:"modalFooterPrepend",description:"_A_MODAL_SLOTS_MODAL_FOOTER_PREPEND_DESCRIPTION_"},{name:"modalFooterAppend",description:"_A_MODAL_SLOTS_MODAL_FOOTER_APPEND_DESCRIPTION_"}]},{dataExposes:t}={dataExposes:[{name:"buttonRef",description:"_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_",type:"Object"},{name:"containerRef",description:"_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_",type:"Object"},{name:"isButtonVisible",description:"_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_",type:"Boolean"},{name:"isOpen",description:"_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_",type:"Boolean"},{name:"toggleButton",description:"_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",type:"Function"}]},{dataTranslate:l}={dataTranslate:["_A_MODAL_BTN_CANCEL_","_A_MODAL_BTN_SAVE_"]};return{dataExposes:t,dataProps:o,dataSlots:n,dataTranslate:l,pageTitle:e}}},g=(0,u.Z)(C,[["render",function(e,o){const n=(0,a.up)("a-translation"),t=(0,a.up)("page-modal-basic"),l=(0,a.up)("page-modal-body-html"),_=(0,a.up)("page-modal-close-button"),s=(0,a.up)("page-modal-save-button"),d=(0,a.up)("page-modal-selector-close"),i=(0,a.up)("page-modal-selector-close-ids"),r=(0,a.up)("page-modal-size"),c=(0,a.up)("page-modal-slots"),u=(0,a.up)("aloha-table-props"),A=(0,a.up)("aloha-table-translate"),p=(0,a.up)("aloha-page");return(0,a.wg)(),(0,a.j4)(p,{"page-title":e.pageTitle},{body:(0,a.w5)((()=>[(0,a.Wm)(n,{tag:"p",html:"_A_MODAL_COMPONENT_DESCRIPTION_"}),(0,a.Wm)(t),(0,a.Wm)(l),(0,a.Wm)(_),(0,a.Wm)(s),(0,a.Wm)(d),(0,a.Wm)(i),(0,a.Wm)(r),(0,a.Wm)(c),(0,a.Wm)(u,{data:e.dataProps},null,8,["data"]),(0,a.Wm)(u,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"]),(0,a.Wm)(A,{data:e.dataTranslate},null,8,["data"])])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.9740.2b9334ca0f9771696669.js.map