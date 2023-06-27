"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[331],{753:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var l=n(2147),s=n(8455),a=n(9699),i=n(8180),r=n(2222),o=n(3403);const u={name:"PageAlertBasic",components:{AAlert:r.Z,AlohaExample:o.Z},setup(){const{codeHtml:e}={codeHtml:'<a-alert>\n  html="AAlert"\n  :is-visible="true"\n</a-alert>'},{codeJs:t}={codeJs:'import AAlert from "aloha-vue/src/AAlert/AAlert";\n    \nexport default {\n  name: "PageAlertTypes",\n  components: {\n    AAlert,\n  },\n};'};return{codeHtml:e,codeJs:t,html:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \n      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, \n      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\n      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut \n      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.\n      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat \n      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. \n      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. \n      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, \n      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>"}}};var c=n(1419);const m=(0,c.Z)(u,[["render",function(e,t){const n=(0,l.up)("a-alert"),s=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:"is-visible"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{html:"AAlert","is-visible":!0})])),_:1},8,["code-html","code-js"])}]]);var p=n(7079);const d={name:"PageAlertClosable",components:{AAlert:r.Z,AButton:p.Z,AlohaExample:o.Z},setup(){const{codeHtml:e}={codeHtml:'<div>\n  <a-button\n    v-if="!isAlertVisible"\n    text="_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_SHOW_ALERT_"\n    @click="showAlert"\n  >\n  </a-button>\n</div>\n<a-alert \n  html="Alert success"\n  :is-visible="isAlertVisible"\n  type="success"\n  :closable="true"\n  @close="hideAlert"\n>\n</a-alert>'},{codeJs:t}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AAlert from "aloha-vue/src/AAlert/AAlert";\nimport AButton from "aloha-vue/src/AAlert/AButton";\n    \nexport default {\n  name: "PageAlertClosable",\n  components: {\n    AAlert,\n    AButton,\n  },\n  setup() {\n    const isAlertVisible = ref(true);\n\n    const showAlert = () => {\n      isAlertVisible.value = true;\n    };\n\n    const hideAlert = () => {\n      isAlertVisible.value = false;\n    };\n    \n    return {\n      hideAlert,\n      isAlertVisible,\n      showAlert,\n    };\n  },\n};'},n=(0,l.iH)(!0);return{codeHtml:e,codeJs:t,hideAlert:()=>{n.value=!1},isAlertVisible:n,showAlert:()=>{n.value=!0}}}},A=(0,c.Z)(d,[["render",function(e,t){const n=(0,l.up)("a-button"),s=(0,l.up)("a-alert"),a=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_CLOSABLE_HEADER_",description:"_A_ALERT_GROUP_CLOSABLE_DESCRIPTION_",props:"closable",emits:"close"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[e.isAlertVisible?(0,l.kq)("v-if",!0):((0,l.wg)(),(0,l.j4)(n,{key:0,class:"a_btn a_btn_primary",text:"_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_SHOW_ALERT_",onClick:e.showAlert},null,8,["onClick"]))]),(0,l.Wm)(s,{html:"Alert success","is-visible":e.isAlertVisible,type:"success",closable:!0,onClose:e.hideAlert},null,8,["is-visible","onClose"])])),_:1},8,["code-html","code-js"])}]]),_={name:"PageAlertCss",components:{AAlert:r.Z,AlohaExample:o.Z},setup(){const{codeHtml:e}={codeHtml:'<a-alert \n  html="Alert success"\n  :is-visible="true"\n  type="success"\n  :show-icon="true"\n  icon-class="a_width_6 a_height_6"\n  alert-class="a_p_5"\n  alert-content-class="a_text_center"\n>\n</a-alert>'},{codeJs:t}={codeJs:'import AAlert from "aloha-vue/src/AAlert/AAlert";\n    \nexport default {\n  name: "PageAlertCss",\n  components: {\n    AAlert,\n  },\n};'};return{codeHtml:e,codeJs:t}}},h=(0,c.Z)(_,[["render",function(e,t){const n=(0,l.up)("a-alert"),s=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_CSS_HEADER_",description:"_A_ALERT_GROUP_CSS_DESCRIPTION_",props:["icon-class","alert-class","alert-content-class"]},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{html:"Alert success","is-visible":!0,type:"success","show-icon":!0,"icon-class":"a_width_6 a_height_6","alert-class":"a_p_5","alert-content-class":"a_text_center"})])),_:1},8,["code-html","code-js"])}]]),b={class:"a_btn_group"},E={name:"PageAlertExposes",components:{AAlert:r.Z,AButton:p.Z,AlohaExample:o.Z},setup(){const{codeHtml:e}={codeHtml:'<div\n  class="a_btn_group"\n>\n  <a-button\n    class="a_btn a_btn_outline_primary"\n    text="_A_ALERT_GROUP_EXPOSES_BTN_CLOSE_"\n    @click="closeAlert"\n  ></a-button>\n  <a-button\n    class="a_btn a_btn_outline_primary"\n    text="_A_ALERT_GROUP_EXPOSES_BTN_SHOW_"\n    @click="showAlert"\n  ></a-button>\n</div>\n<a-alert \n  ref="alertRef"\n  alert-class="a_mt_3"\n  html="Alert success"\n  :is-visible="true"\n  type="success"\n  :closable="true"\n  :remove-alert-on-close="true"\n>\n</a-alert>'},{codeJs:t}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AAlert from "aloha-vue/src/AAlert/AAlert";\nimport AButton from "aloha-vue/src/AButton/AButton";\n    \nexport default {\n  name: "PageAlertExposes",\n  components: {\n    AAlert,\n    AButton,\n  },\n  setup() {\n    const alertRef = ref(undefined);\n\n    const closeAlert = () => {\n      alertRef.value.close();\n    };\n\n    const showAlert = () => {\n      alertRef.value.isHidden = false;\n    };\n    \n    return {\n      closeAlert,\n      showAlert,\n    };\n  },\n};'},n=(0,l.iH)(void 0);return{alertRef:n,closeAlert:()=>{n.value.close()},codeHtml:e,codeJs:t,showAlert:()=>{n.value.isHidden=!1}}}},v=(0,c.Z)(E,[["render",function(e,t){const n=(0,l.up)("a-button"),s=(0,l.up)("a-alert"),a=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_EXPOSES_HEADER_",exposes:["close","isHidden"]},{default:(0,l.w5)((()=>[(0,l._)("div",b,[(0,l.Wm)(n,{class:"a_btn a_btn_outline_primary",text:"_A_ALERT_GROUP_EXPOSES_BTN_CLOSE_",onClick:e.closeAlert},null,8,["onClick"]),(0,l.Wm)(n,{class:"a_btn a_btn_outline_primary",text:"_A_ALERT_GROUP_EXPOSES_BTN_SHOW_",onClick:e.showAlert},null,8,["onClick"])]),(0,l.Wm)(s,{ref:"alertRef","alert-class":"a_mt_3",html:"Alert success","is-visible":!0,type:"success",closable:!0,"remove-alert-on-close":!0},null,512)])),_:1},8,["code-html","code-js"])}]]),g={name:"PageAlertHtml",components:{AAlert:r.Z,AlohaExample:o.Z},setup(){const{codeHtml:e}={codeHtml:'<a-alert \n  :html="html"\n  :is-visible="true"\n  type="primary"\n>\n</a-alert>'},{codeJs:t}={codeJs:'import AAlert from "aloha-vue/src/AAlert/AAlert";\n    \nexport default {\n  name: "PageAlertHtml",\n  components: {\n    AAlert,\n  },\n  setup() {\n    const html = `<p onclick="alert(\'Aloha\')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \n      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, \n      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\n      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut \n      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.\n      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat \n      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. \n      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. \n      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, \n      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;\n      \n    return {\n      html,\n    };  \n  },\n};'};return{codeHtml:e,codeJs:t,html:"<p onclick=\"alert('Aloha')\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \n      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, \n      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\n      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut \n      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.\n      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat \n      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. \n      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. \n      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, \n      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>"}}},R=(0,c.Z)(g,[["render",function(e,t){const n=(0,l.up)("a-alert"),s=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_HTML_HEADER_",description:"_A_ALERT_GROUP_HTML_DESCRIPTION_",props:"html"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{html:e.html,"is-visible":!0,type:"primary"},null,8,["html"])])),_:1},8,["code-html","code-js"])}]]),P={name:"PageAlertIconsCustom",components:{AAlert:r.Z,AlohaExample:o.Z},setup(){const{codeHtml:e}={codeHtml:'<a-alert \n  html="Alert success" \n  :is-visible="true" \n  type="success"\n  :show-icon="true"\n  icon="Cog"\n>\n</a-alert>\n<a-alert \n  html="Alert info" \n  :is-visible="true" \n  type="info"\n  :show-icon="true"\n  icon="EyeOpen"\n>\n</a-alert>\n<a-alert \n  html="Alert warning" \n  :is-visible="true" \n  type="warning"\n  :show-icon="true"\n  icon="EyeClose"\n>\n</a-alert>\n<a-alert \n  html="Alert danger" \n  :is-visible="true" \n  type="danger"\n  :show-icon="true"\n  icon="Home"\n>\n</a-alert>\n<a-alert \n  html="Alert primary" \n  :is-visible="true" \n  type="primary"\n  :show-icon="true"\n  icon="Lock"\n>\n</a-alert>'},{codeJs:t}={codeJs:'import AAlert from "aloha-vue/src/AAlert/AAlert";\n    \nexport default {\n  name: "PageAlertIconsCustom",\n  components: {\n    AAlert,\n  },\n};'};return{codeHtml:e,codeJs:t}}},T=(0,c.Z)(P,[["render",function(e,t){const n=(0,l.up)("a-alert"),s=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_ICONS_CUSTOM_HEADER_",description:"_A_ALERT_GROUP_ICONS_CUSTOM_DESCRIPTION_",props:["icon","show-icon"]},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{html:"Alert success","is-visible":!0,type:"success","show-icon":!0,icon:"Cog"}),(0,l.Wm)(n,{html:"Alert info","is-visible":!0,type:"info","show-icon":!0,icon:"EyeOpen"}),(0,l.Wm)(n,{html:"Alert warning","is-visible":!0,type:"warning","show-icon":!0,icon:"EyeClose"}),(0,l.Wm)(n,{html:"Alert danger","is-visible":!0,type:"danger","show-icon":!0,icon:"Home"}),(0,l.Wm)(n,{html:"Alert primary","is-visible":!0,type:"primary","show-icon":!0,icon:"Lock"})])),_:1},8,["code-html","code-js"])}]]),f={name:"PageAlertIconsDefault",components:{AAlert:r.Z,AlohaExample:o.Z},setup(){const{codeHtml:e}={codeHtml:'<a-alert \n  html="Alert success" \n  :is-visible="true" \n  type="success"\n  :show-icon="true"\n>\n</a-alert>\n<a-alert \n  html="Alert info" \n  :is-visible="true" \n  type="info"\n  :show-icon="true"\n>\n</a-alert>\n<a-alert \n  html="Alert warning" \n  :is-visible="true" \n  type="warning"\n  :show-icon="true"\n>\n</a-alert>\n<a-alert \n  html="Alert danger" \n  :is-visible="true" \n  type="danger"\n  :show-icon="true"\n>\n</a-alert>'},{codeJs:t}={codeJs:'import AAlert from "aloha-vue/src/AAlert/AAlert";\n    \nexport default {\n  name: "PageAlertIconsDefault",\n  components: {\n    AAlert,\n  },\n};'};return{codeHtml:e,codeJs:t}}},S=(0,c.Z)(f,[["render",function(e,t){const n=(0,l.up)("a-alert"),s=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_ICONS_DEFAULT_HEADER_",description:"_A_ALERT_GROUP_ICONS_DEFAULT_DESCRIPTION_",props:"show-icon"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{html:"Alert success","is-visible":!0,type:"success","show-icon":!0}),(0,l.Wm)(n,{html:"Alert info","is-visible":!0,type:"info","show-icon":!0}),(0,l.Wm)(n,{html:"Alert warning","is-visible":!0,type:"warning","show-icon":!0}),(0,l.Wm)(n,{html:"Alert danger","is-visible":!0,type:"danger","show-icon":!0})])),_:1},8,["code-html","code-js"])}]]),O={name:"PageAlertRemoveOnClose",components:{AAlert:r.Z,AlohaExample:o.Z},setup(){const{codeHtml:e}={codeHtml:'<a-alert \n  html="Alert success"\n  :is-visible="true"\n  type="success"\n  :closable="true"\n>\n</a-alert>\n<a-alert \n  html="Alert danger"\n  :is-visible="true"\n  type="danger"\n  :closable="true"\n  :remove-alert-on-close="true"\n>\n</a-alert>'},{codeJs:t}={codeJs:'import AAlert from "aloha-vue/src/AAlert/AAlert";\n    \nexport default {\n  name: "PageAlertRemoveOnClose",\n  components: {\n    AAlert,\n  },\n};'};return{codeHtml:e,codeJs:t}}},y=(0,c.Z)(O,[["render",function(e,t){const n=(0,l.up)("a-alert"),s=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_HEADER_",description:"_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_DESCRIPTION_",props:["closable","remove-alert-on-close"]},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{html:"Alert success","is-visible":!0,type:"success",closable:!0}),(0,l.Wm)(n,{html:"Alert danger","is-visible":!0,type:"danger",closable:!0,"remove-alert-on-close":!0})])),_:1},8,["code-html","code-js"])}]]),L={name:"PageAlertSafeHtml",components:{AAlert:r.Z,AlohaExample:o.Z},setup(){const{codeHtml:e}={codeHtml:'<a-alert \n  :html="html"\n  :is-visible="true"\n  type="primary"\n>\n</a-alert>'},{codeJs:t}={codeJs:'import AAlert from "aloha-vue/src/AAlert/AAlert";\n    \nexport default {\n  name: "PageAlertSafeHtml",\n  components: {\n    AAlert,\n  },\n  setup() {\n    const html = `<p onclick="alert(\'Aloha\')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \n      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, \n      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\n      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut \n      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.\n      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat \n      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. \n      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. \n      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, \n      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;\n      \n    return {\n      html,\n    };  \n  },\n};'};return{codeHtml:e,codeJs:t,html:"<p onclick=\"alert('Aloha')\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \n      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, \n      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\n      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut \n      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.\n      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat \n      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. \n      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. \n      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, \n      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>"}}},C=(0,c.Z)(L,[["render",function(e,t){const n=(0,l.up)("a-alert"),s=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_SAFE_HTML_HEADER_",description:"_A_ALERT_GROUP_SAFE_HTML_DESCRIPTION_",props:"safe-html"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{"safe-html":e.html,"is-visible":!0,type:"primary"},null,8,["safe-html"])])),_:1},8,["code-html","code-js"])}]]),I=(0,l._)("ul",null,[(0,l._)("li",null,"Aloha 1"),(0,l._)("li",null,"Aloha 2"),(0,l._)("li",null,"Aloha 3"),(0,l._)("li",null,"Aloha 4")],-1),H={name:"PageAlertSlot",components:{AAlert:r.Z,AlohaExample:o.Z},setup(){const{codeHtml:e}={codeHtml:'<a-alert \n  :is-visible="true"\n  type="success"\n>\n  <ul>\n    <li>Aloha 1</li>\n    <li>Aloha 2</li>\n    <li>Aloha 3</li>\n    <li>Aloha 4</li>\n  </ul>\n</a-alert>'},{codeJs:t}={codeJs:'import AAlert from "aloha-vue/src/AAlert/AAlert";\n    \nexport default {\n  name: "PageAlertSlot",\n  components: {\n    AAlert,\n  },\n};'};return{codeHtml:e,codeJs:t}}},x=(0,c.Z)(H,[["render",function(e,t){const n=(0,l.up)("a-alert"),s=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_SLOT_HEADER_",description:"_A_ALERT_GROUP_SLOT_DESCRIPTION_",slots:"default"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{"is-visible":!0,type:"success"},{default:(0,l.w5)((()=>[I])),_:1})])),_:1},8,["code-html","code-js"])}]]),w={name:"PageAlertText",components:{AAlert:r.Z,AlohaExample:o.Z},setup(){const{codeHtml:e}={codeHtml:'<a-alert \n  :text="text"\n  :is-visible="true"\n  type="primary"\n>\n</a-alert>'},{codeJs:t}={codeJs:'import AAlert from "aloha-vue/src/AAlert/AAlert";\n    \nexport default {\n  name: "PageAlertText",\n  components: {\n    AAlert,\n  },\n  setup() {\n    const text = "Lorem ipsum dolor sit amet";\n      \n    return {\n      text,\n    };  \n  },\n};'};return{codeHtml:e,codeJs:t,text:"Lorem ipsum dolor sit amet"}}},D=(0,c.Z)(w,[["render",function(e,t){const n=(0,l.up)("a-alert"),s=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_TEXT_HEADER_",description:"_A_ALERT_GROUP_TEXT_DESCRIPTION_",props:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{text:e.text,"is-visible":!0,type:"primary"},null,8,["text"])])),_:1},8,["code-html","code-js"])}]]),N={name:"PageAlertTypes",components:{AAlert:r.Z,AlohaExample:o.Z},setup(){const{codeHtml:e}={codeHtml:'<a-alert \n  html="Alert success" \n  :is-visible="true" \n  type="success"\n>\n</a-alert>\n<a-alert \n  html="Alert info" \n  :is-visible="true" \n  type="info"\n>\n</a-alert>\n<a-alert \n  html="Alert warning" \n  :is-visible="true" \n  type="warning"\n>\n</a-alert>\n<a-alert \n  html="Alert danger" \n  :is-visible="true" \n  type="danger"\n>\n</a-alert>\n<a-alert \n  html="Alert primary" \n  :is-visible="true" \n  type="primary"\n>\n</a-alert>\n<a-alert \n  html="Alert secondary" \n  :is-visible="true" \n  type="secondary"\n>\n</a-alert>\n<a-alert \n  html="Alert tertiary"\n  :is-visible="true"\n  type="tertiary"\n>\n</a-alert>\n<a-alert \n  html="Alert dark" \n  :is-visible="true" \n  type="dark"\n></a-alert>\n<a-alert \n  html="Alert light" \n  :is-visible="true" \n  type="light"\n></a-alert>'},{codeJs:t}={codeJs:'import AAlert from "aloha-vue/src/AAlert/AAlert";\n    \nexport default {\n  name: "PageAlertBasic",\n  components: {\n    AAlert,\n  },\n};'};return{codeHtml:e,codeJs:t}}},W=(0,c.Z)(N,[["render",function(e,t){const n=(0,l.up)("a-alert"),s=(0,l.up)("aloha-example");return(0,l.wg)(),(0,l.j4)(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_TYPES_HEADER_",description:"_A_ALERT_GROUP_TYPES_DESCRIPTION_",props:"type"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{html:"Alert success","is-visible":!0,type:"success"}),(0,l.Wm)(n,{html:"Alert info","is-visible":!0,type:"info"}),(0,l.Wm)(n,{html:"Alert warning","is-visible":!0,type:"warning"}),(0,l.Wm)(n,{html:"Alert danger","is-visible":!0,type:"danger"}),(0,l.Wm)(n,{html:"Alert primary","is-visible":!0,type:"primary"}),(0,l.Wm)(n,{html:"Alert secondary","is-visible":!0,type:"secondary"}),(0,l.Wm)(n,{html:"Alert tertiary","is-visible":!0,type:"tertiary"}),(0,l.Wm)(n,{html:"Alert dark","is-visible":!0,type:"dark"}),(0,l.Wm)(n,{html:"Alert light","is-visible":!0,type:"light"})])),_:1},8,["code-html","code-js"])}]]);var q=n(8405);const J={name:"PageAlert",components:{AlohaPage:s.Z,AlohaTableProps:a.Z,ATranslation:i.Z,PageAlertBasic:m,PageAlertClosable:A,PageAlertCss:h,PageAlertExposes:v,PageAlertHtml:R,PageAlertIconsCustom:T,PageAlertIconsDefault:S,PageAlertRemoveOnClose:y,PageAlertSafeHtml:C,PageAlertSlot:x,PageAlertText:D,PageAlertTypes:W},setup(){const{pageTitle:e}=function(){const e=(0,l.Fl)((()=>(0,q.Gd)({placeholder:"_A_ALERT_COMPONENT_NAME_"})));return{pageTitle:(0,l.Fl)((()=>"Alert"+(e.value?` (${e.value})`:"")))}}(),{dataProps:t}={dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]},{dataSlots:n}={dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]},{dataEvents:s}={dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]},{dataExposes:a}={dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]};return{dataEvents:s,dataExposes:a,dataProps:t,dataSlots:n,pageTitle:e}}},j=(0,c.Z)(J,[["render",function(e,t){const n=(0,l.up)("a-translation"),s=(0,l.up)("page-alert-basic"),a=(0,l.up)("page-alert-types"),i=(0,l.up)("page-alert-icons-default"),r=(0,l.up)("page-alert-icons-custom"),o=(0,l.up)("page-alert-css"),u=(0,l.up)("page-alert-closable"),c=(0,l.up)("page-alert-remove-on-close"),m=(0,l.up)("page-alert-text"),p=(0,l.up)("page-alert-html"),d=(0,l.up)("page-alert-safe-html"),A=(0,l.up)("page-alert-slot"),_=(0,l.up)("page-alert-exposes"),h=(0,l.up)("aloha-table-props"),b=(0,l.up)("aloha-page");return(0,l.wg)(),(0,l.j4)(b,{"page-title":e.pageTitle},{body:(0,l.w5)((()=>[(0,l.Wm)(n,{tag:"p",html:"_A_ALERT_COMPONENT_DESCRIPTION_"}),(0,l.Wm)(s),(0,l.Wm)(a),(0,l.Wm)(i),(0,l.Wm)(r),(0,l.Wm)(o),(0,l.Wm)(u),(0,l.Wm)(c),(0,l.Wm)(m),(0,l.Wm)(p),(0,l.Wm)(d),(0,l.Wm)(A),(0,l.Wm)(_),(0,l.Wm)(h,{data:e.dataProps},null,8,["data"]),(0,l.Wm)(h,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"]),(0,l.Wm)(h,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),(0,l.Wm)(h,{"table-label":"Exposes",data:e.dataExposes,columns:["name","type","description"]},null,8,["data"])])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.331.6644c30c2d96156b07e1.js.map