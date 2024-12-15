import{a1 as l,_ as p,g as h,at as y,A as C}from"./bundle.index.Dn7qpWjQ.js";import{A as m,a as x}from"./chunk.AlohaExample.A9Ef-QbL.js";import{A as B}from"./chunk.AlohaTableProps.CpO8HcfR.js";import{m as e,K as u,aK as c,J as A,P as t,a as D,O}from"./chunk.vendor.DQz1Isc4.js";import"./chunk.vendor-lodash.Cgq9oNCy.js";import"./chunk.vendor-tinymce.cPIiul0H.js";import"./chunk.ATable.D_xPGUZc.js";import"./chunk.utilsMath.1mfWsA3R.js";import"./chunk.AForm.YXJwVyl2.js";import"./chunk.ADatepicker.CCF6HQX3.js";import"./chunk.UiMixinProps.BvCyZ1Ij.js";import"./chunk.AInputNumber.CRj1UTFu.js";import"./chunk.ATinymce.BwFOKtT3.js";function W(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
></a-dropdown>`}}function $(){return{codeJs:`import ADropdown from "aloha-vue/src/ADropdown/ADropdown";
    
export default {
  name: "PageDropdownBasic",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "Actions 0",
        type: "button",
        callback: () => {},
      },
      {
        text: "Actions 1",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const H={name:"PageDropdownBasic",components:{ADropdown:l,AlohaExample:m},setup(){const{codeHtml:o}=W(),{codeJs:a}=$();return{codeHtml:o,codeJs:a,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function k(o,a,d,r,_,i){const n=e("a-dropdown"),s=e("aloha-example");return A(),u(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_BASIC_USAGE_",props:"actions"},{default:c(()=>[t(n,{actions:o.dropdownActions},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const U=p(H,[["render",k]]);function L(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  button-class="a_btn a_btn_primary"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-class="a_btn a_btn_success"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-class="a_btn a_btn_info"
></a-dropdown>`}}function q(){return{codeJs:`import ADropdown from "aloha-vue/src/ADropdown/ADropdown";
    
export default {
  name: "PageDropdownButtonClass",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "Actions 0",
        type: "button",
        callback: () => {},
      },
      {
        text: "Actions 1",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const J={name:"PageDropdownButtonClass",components:{ADropdown:l,AlohaExample:m},setup(){const{codeHtml:o}=L(),{codeJs:a}=q();return{codeHtml:o,codeJs:a,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function G(o,a,d,r,_,i){const n=e("a-dropdown"),s=e("aloha-example");return A(),u(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_CLASS_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_CLASS_DESCRIPTION_",props:"button-text"},{default:c(()=>[t(n,{actions:o.dropdownActions,"button-class":"a_btn a_btn_primary"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-class":"a_btn a_btn_success"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-class":"a_btn a_btn_info"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const j=p(J,[["render",G]]);function v(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  button-icon-left="Gear"
  button-text="Aloha"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-icon-right="Files"
  button-text="Aloha"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-icon-left="Duplicate"
  button-icon-right="Gear"
  button-text="Aloha"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :button-icon-right="{ desktop: 'Gear', mobile: 'Files' }"
  button-text="Aloha"
></a-dropdown>`}}function F(){return{codeJs:`import ADropdown from "aloha-vue/src/ADropdown/ADropdown";
    
export default {
  name: "PageDropdownButtonIcons",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "Actions 0",
        type: "button",
        callback: () => {},
      },
      {
        text: "Actions 1",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const M={name:"PageDropdownButtonIcons",components:{ADropdown:l,AlohaExample:m},setup(){const{codeHtml:o}=v(),{codeJs:a}=F();return{codeHtml:o,codeJs:a,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function X(o,a,d,r,_,i){const n=e("a-dropdown"),s=e("aloha-example");return A(),u(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_ICONS_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_ICONS_DESCRIPTION_",props:["button-icon-left","button-icon-right"]},{default:c(()=>[t(n,{actions:o.dropdownActions,"button-icon-left":"Gear","button-text":"Aloha"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-icon-right":"Files","button-text":"Aloha"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-icon-left":"Duplicate","button-icon-right":"Gear","button-text":"Aloha"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-icon-right":{desktop:"Gear",mobile:"Files"},"button-text":"Aloha"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const K=p(M,[["render",X]]);function V(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  button-text="aloha"
  :button-loading="true"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="aloha"
  :button-loading="true"
  button-loading-align="left"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="aloha"
  :button-loading="true"
  button-loading-align="right"
></a-dropdown>`}}function Y(){return{codeJs:`import ADropdown from "aloha-vue/src/ADropdown/ADropdown";
    
export default {
  name: "PageDropdownButtonLoading",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "Actions 0",
        type: "button",
        callback: () => {},
      },
      {
        text: "Actions 1",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const z={name:"PageDropdownButtonLoading",components:{ADropdown:l,AlohaExample:m},setup(){const{codeHtml:o}=V(),{codeJs:a}=Y();return{codeHtml:o,codeJs:a,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function Q(o,a,d,r,_,i){const n=e("a-dropdown"),s=e("aloha-example");return A(),u(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_LOADING_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_LOADING_DESCRIPTION_",props:["button-loading","button-loading-align"]},{default:c(()=>[t(n,{actions:o.dropdownActions,"button-text":"aloha","button-loading":!0},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"aloha","button-loading":!0,"button-loading-align":"left"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"aloha","button-loading":!0,"button-loading-align":"right"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const Z=p(z,[["render",Q]]);function oo(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  button-text="Aloha"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="Aloha 123"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :button-text="{ desktop: 'Aloha desktop', mobile: 'Aloha mobile' }"
></a-dropdown>`}}function to(){return{codeJs:`import ADropdown from "aloha-vue/src/ADropdown/ADropdown";
    
export default {
  name: "PageDropdownButtonText",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "Actions 0",
        type: "button",
        callback: () => {},
      },
      {
        text: "Actions 1",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const no={name:"PageDropdownButtonText",components:{ADropdown:l,AlohaExample:m},setup(){const{codeHtml:o}=oo(),{codeJs:a}=to();return{codeHtml:o,codeJs:a,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function eo(o,a,d,r,_,i){const n=e("a-dropdown"),s=e("aloha-example");return A(),u(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_TEXT_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_TEXT_DESCRIPTION_",props:"button-text"},{default:c(()=>[t(n,{actions:o.dropdownActions,"button-text":"Aloha"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"Aloha 123"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":{desktop:"Aloha desktop",mobile:"Aloha mobile"}},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const ao=p(no,[["render",eo]]);function so(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  caret-icon="EjectFill"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  caret-icon="Gear"
></a-dropdown>`}}function co(){return{codeJs:`import ADropdown from "aloha-vue/src/ADropdown/ADropdown";
    
export default {
  name: "PageDropdownCaretIcon",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "Actions 0",
        type: "button",
        callback: () => {},
      },
      {
        text: "Actions 1",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const ro={name:"PageDropdownCaretIcon",components:{ADropdown:l,AlohaExample:m},setup(){const{codeHtml:o}=so(),{codeJs:a}=co();return{codeHtml:o,codeJs:a,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function _o(o,a,d,r,_,i){const n=e("a-dropdown"),s=e("aloha-example");return A(),u(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_CARET_ICON_HEADER_",description:"_A_DROPDOWN_GROUP_CARET_ICON_DESCRIPTION_",props:"caret-icon"},{default:c(()=>[t(n,{actions:o.dropdownActions,"caret-icon":"EjectFill"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"caret-icon":"Gear"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const io=p(ro,[["render",_o]]);function lo(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :has-caret="true"
  button-text="Aloha"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :has-caret="false"
  button-text="Aloha"
></a-dropdown>`}}function po(){return{codeJs:`import ADropdown from "aloha-vue/src/ADropdown/ADropdown";
    
export default {
  name: "PageDropdownHasCaret",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "Actions 0",
        type: "button",
        callback: () => {},
      },
      {
        text: "Actions 1",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const uo={name:"PageDropdownHasCaret",components:{ADropdown:l,AlohaExample:m},setup(){const{codeHtml:o}=lo(),{codeJs:a}=po();return{codeHtml:o,codeJs:a,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function Ao(o,a,d,r,_,i){const n=e("a-dropdown"),s=e("aloha-example");return A(),u(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_HAS_CARET_HEADER_",description:"_A_DROPDOWN_GROUP_HAS_CARET_DESCRIPTION_",props:"has-caret"},{default:c(()=>[t(n,{actions:o.dropdownActions,"has-caret":!0,"button-text":"Aloha"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"has-caret":!1,"button-text":"Aloha"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const Oo=p(uo,[["render",Ao]]);function mo(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :in-body="true"
  button-text="in-body='true'"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :in-body="false"
  button-text="in-body='false'"
></a-dropdown>`}}function Po(){return{codeJs:`import ADropdown from "aloha-vue/src/ADropdown/ADropdown";
    
export default {
  name: "PageDropdownInBody",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "Actions 0",
        type: "button",
        callback: () => {},
      },
      {
        text: "Actions 1",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const Do={name:"PageDropdownInBody",components:{ADropdown:l,AlohaExample:m},setup(){const{codeHtml:o}=mo(),{codeJs:a}=Po();return{codeHtml:o,codeJs:a,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function bo(o,a,d,r,_,i){const n=e("a-dropdown"),s=e("aloha-example");return A(),u(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_IN_BODY_HEADER_",description:"_A_DROPDOWN_GROUP_IN_BODY_DESCRIPTION_",props:"in-body"},{default:c(()=>[t(n,{actions:o.dropdownActions,"in-body":!0,"button-text":"in-body='true'"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"in-body":!1,"button-text":"in-body='false'"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const wo=p(Do,[["render",bo]]);function Ro(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :in-body="true"
  button-text="in-body='true'"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :in-body="false"
  button-text="in-body='false'"
></a-dropdown>`}}function fo(){return{codeJs:`import ADropdown from "aloha-vue/src/ADropdown/ADropdown";
    
export default {
  name: "PageDropdownTriggers",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "Actions 0",
        type: "button",
        callback: () => {},
      },
      {
        text: "Actions 1",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`}}const Io={name:"PageDropdownTriggers",components:{ADropdown:l,AlohaExample:m},setup(){const{codeHtml:o}=Ro(),{codeJs:a}=fo();return{codeHtml:o,codeJs:a,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function To(o,a,d,r,_,i){const n=e("a-dropdown"),s=e("aloha-example");return A(),u(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_TRIGGERS_HEADER_",description:"_A_DROPDOWN_GROUP_TRIGGERS_DESCRIPTION_",props:"triggers"},{default:c(()=>[t(n,{actions:o.dropdownActions,"button-text":"click",triggers:["click"]},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"focus",triggers:["focus"]},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"hover",triggers:["hover"]},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"click / focus",triggers:["click","focus"]},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"click / hover",triggers:["click","hover"]},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"focus / hover",triggers:["focus","hover"]},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"click / focus / hover",triggers:["click","focus","hover"]},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const No=p(Io,[["render",To]]);function So(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function Eo(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}function go(){const o=D(()=>h({placeholder:"_A_DROPDOWN_COMPONENT_NAME_"}));return{pageTitle:D(()=>`ADropdown${o.value?` (${o.value})`:""}`)}}function ho(){return{dataProps:[{name:"actions",description:"_A_DROPDOWN_PROPS_ACTIONS_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-attributes",description:"_A_DROPDOWN_PROPS_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"button-class",description:"_A_DROPDOWN_PROPS_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_secondary",required:!1},{name:"button-icon-attributes",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"button-icon-class",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-icon-left",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_LEFT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"button-icon-right",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_RIGHT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"button-icon-tag",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_TAG_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-is-title-html",description:"_A_DROPDOWN_PROPS_BUTTON_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-loading",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"button-loading-align",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_ALIGN_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"button-loading-class",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_CLASS_DESCRIPTION_",type:"String / Object",default:"a_spinner_small",required:!1},{name:"button-prevent",description:"_A_DROPDOWN_PROPS_BUTTON_PREVENT_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-stop",description:"_A_DROPDOWN_PROPS_BUTTON_STOP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-tag",description:"_A_DROPDOWN_PROPS_BUTTON_TAG_DESCRIPTION_",type:"String",default:"button",required:!1},{name:"button-text",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-text-aria-hidden",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_ARIA_HIDDEN_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"button-text-class",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-text-screen-reader",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-title",description:"_A_DROPDOWN_PROPS_BUTTON_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-title-placement",description:"_A_DROPDOWN_PROPS_BUTTON_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1},{name:"caret-icon",description:"_A_DROPDOWN_PROPS_CARET_ICON_DESCRIPTION_",type:"String",default:"ChevronDown",required:!1},{name:"class",description:"_A_DROPDOWN_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"disabled",description:"_A_DROPDOWN_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dropdown-attributes",description:"_A_DROPDOWN_PROPS_DROPDOWN_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"dropdown-class",description:"_A_DROPDOWN_PROPS_DROPDOWN_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"dropdown-render-default",description:"_A_DROPDOWN_PROPS_DROPDOWN_RENDER_DEFAULT_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dropdown-tag",description:"_A_DROPDOWN_PROPS_DROPDOWN_TAG_DESCRIPTION_",type:"String",default:"ul",required:!1},{name:"elements-for-arrows",description:"_A_DROPDOWN_PROPS_ELEMENTS_FOR_ARROWS_DESCRIPTION_",type:"String",default:y,required:!1},{name:"extra",description:"_A_DROPDOWN_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"floating-flip",description:"_A_DROPDOWN_PROPS_FLOATING_FLIP_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"floating-shift",description:"_A_DROPDOWN_PROPS_FLOATING_SHIFT_DESCRIPTION_",type:"Object",default:"() => ({ use: true, crossAxis: true, padding: 20 })",required:!1},{name:"has-caret",description:"_A_DROPDOWN_PROPS_HAS_CARET_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"id",description:"_A_DROPDOWN_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_dropdown_btn_")',required:!1},{name:"in-body",description:"_A_DROPDOWN_PROPS_IN_BODY_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-close-by-click-inside",description:"_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_INSIDE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-close-by-click-outside",description:"_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_OUTSIDE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide-without-action-and-slot",description:"_A_DROPDOWN_PROPS_IS_HIDE_WITHOUT_ACTION_AND_SLOT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-list-width-same-with-button",description:"_A_DROPDOWN_PROPS_IS_LIST_WIDTH_SAME_WITH_BUTTON_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"lock-arrows-navigation",description:"_A_DROPDOWN_PROPS_LOCK_ARROWS_NAVIGATION_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"lock-tab-navigation",description:"_A_DROPDOWN_PROPS_LOCK_TAB_NAVIGATION_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"persist",description:"_A_DROPDOWN_PROPS_PERSIST_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"placement",description:"_A_DROPDOWN_PROPS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom-start",required:!1},{name:"popper-container-id",description:"_A_DROPDOWN_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_",type:"String",default:"a_tooltip_container",required:!1},{name:"triggers",description:"_A_DROPDOWN_PROPS_TRIGGERS_DESCRIPTION_",type:"Array",default:'() => ["click"]',required:!1},{name:"use-escape",description:"_A_DROPDOWN_PROPS_USE_ESCAPE_DESCRIPTION_",type:"Boolean",default:!0,required:!1}]}}function yo(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const Co={name:"PageDropdown",components:{ADropdown:l,AlohaPage:x,AlohaTableProps:B,ATranslation:C,PageDropdownBasic:U,PageDropdownButtonClass:j,PageDropdownButtonIcons:K,PageDropdownButtonLoading:Z,PageDropdownButtonText:ao,PageDropdownCaretIcon:io,PageDropdownHasCaret:Oo,PageDropdownInBody:wo,PageDropdownTriggers:No},setup(){const{pageTitle:o}=go(),{dataProps:a}=ho(),{dataSlots:d}=yo(),{dataEvents:r}=So(),{dataExposes:_}=Eo();return{dataEvents:r,dataExposes:_,dataProps:a,dataSlots:d,pageTitle:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{},isHidden:!0},{text:"Actions 1",type:"button",callback:()=>{},disabled:!0},{type:"divider"},{type:"divider"},{text:"Actions 2",type:"button",callback:()=>{}},{type:"link",text:"Link 1",href:"#"},{type:"divider"}]}}},xo=O("span",null,"Click me",-1),Bo=O("li",null,[O("button",{class:"a_dropdown__item",type:"button"},"Item 1")],-1),Wo=O("li",{class:"a_dropdown__divider"},null,-1),$o=O("li",null,[O("button",{class:"a_dropdown__item",type:"button"},"Item 2")],-1),Ho=O("li",null,[O("a",{class:"a_dropdown__item",href:"#"},"Item 3")],-1),ko=O("span",null,"Weitere Aktionen2",-1);function Uo(o,a,d,r,_,i){const n=e("a-translation"),s=e("page-dropdown-basic"),b=e("page-dropdown-button-text"),w=e("page-dropdown-button-class"),R=e("page-dropdown-button-icons"),f=e("page-dropdown-button-loading"),I=e("page-dropdown-in-body"),T=e("page-dropdown-triggers"),N=e("page-dropdown-caret-icon"),S=e("page-dropdown-has-caret"),E=e("aloha-table-props"),P=e("a-dropdown"),g=e("aloha-page");return A(),u(g,{"page-title":o.pageTitle},{body:c(()=>[t(n,{tag:"p",html:"_A_DROPDOWN_COMPONENT_DESCRIPTION_"}),t(s),t(b),t(w),t(R),t(f),t(I),t(T),t(N),t(S),t(E,{data:o.dataProps},null,8,["data"])]),default:c(()=>[t(P,{"button-class":"a_btn a_btn_link","is-render-default":!0},{button:c(()=>[xo]),dropdown:c(()=>[Bo,Wo,$o,Ho]),_:1}),t(P,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:o.dropdownActions,"button-text":"_MORE_ACTIONS_"},null,8,["actions"]),t(P,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:o.dropdownActions,"button-text":"Weitere Aktionen"},null,8,["actions"]),t(P,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:o.dropdownActions,"button-text":"Weitere Aktionen"},null,8,["actions"]),t(P,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:o.dropdownActions,"button-text":"Weitere Aktionen"},null,8,["actions"]),t(P,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0},{button:c(()=>[ko]),_:1})]),_:1},8,["page-title"])}const Qo=p(Co,[["render",Uo]]);export{Qo as default};