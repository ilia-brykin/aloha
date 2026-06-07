import{A,a as g}from"./chunk.AlohaExample.B0An_qSV.js";import{A as h}from"./chunk.AlohaTableProps.ButNSP7N.js";import{D as O,_ as i,g as y,ah as C,A as x}from"./bundle.index.CHj2OCoU.js";import{W as p,V as l,aT as u,e as a,_ as t,d as P}from"./chunk.vendor.7qYoMuVo.js";import"./chunk.vendor-lodash.CDw4fzB6.js";import"./chunk.APageTabTitle.DrDBA8bQ.js";import"./chunk.AlohaHighlightjs.CqftpDCI.js";import"./chunk.ATable.UnHwIJYO.js";import"./chunk.translations-ar.ewm0fZVJ.js";import"./chunk.translations-de.BFTItvd9.js";import"./chunk.translations-en.CxTfUgqF.js";import"./chunk.translations-es.Ujw4saS6.js";import"./chunk.translations-fr.B1NwE7Vq.js";import"./chunk.translations-hr.Bgciwlye.js";import"./chunk.translations-it.XrCRKf9v.js";import"./chunk.translations-ru.CwKesgGG.js";function $(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
></a-dropdown>`}}function B(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
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
};`}}const W={name:"PageDropdownBasic",components:{ADropdown:O,AlohaExample:A},setup(){const{codeHtml:o}=$(),{codeJs:e}=B();return{codeHtml:o,codeJs:e,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function H(o,e,d,c,r,_){const n=a("a-dropdown"),s=a("aloha-example");return p(),l(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_BASIC_USAGE_",props:"actions"},{default:u(()=>[t(n,{actions:o.dropdownActions},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const k=i(W,[["render",H]]);function U(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function L(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
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
};`}}const J={name:"PageDropdownButtonClass",components:{ADropdown:O,AlohaExample:A},setup(){const{codeHtml:o}=U(),{codeJs:e}=L();return{codeHtml:o,codeJs:e,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function q(o,e,d,c,r,_){const n=a("a-dropdown"),s=a("aloha-example");return p(),l(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_CLASS_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_CLASS_DESCRIPTION_",props:"button-text"},{default:u(()=>[t(n,{actions:o.dropdownActions,"button-class":"a_btn a_btn_primary"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-class":"a_btn a_btn_success"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-class":"a_btn a_btn_info"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const G=i(J,[["render",q]]);function j(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function v(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
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
};`}}const F={name:"PageDropdownButtonIcons",components:{ADropdown:O,AlohaExample:A},setup(){const{codeHtml:o}=j(),{codeJs:e}=v();return{codeHtml:o,codeJs:e,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function X(o,e,d,c,r,_){const n=a("a-dropdown"),s=a("aloha-example");return p(),l(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_ICONS_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_ICONS_DESCRIPTION_",props:["button-icon-left","button-icon-right"]},{default:u(()=>[t(n,{actions:o.dropdownActions,"button-icon-left":"Gear","button-text":"Aloha"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-icon-right":"Files","button-text":"Aloha"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-icon-left":"Duplicate","button-icon-right":"Gear","button-text":"Aloha"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-icon-right":{desktop:"Gear",mobile:"Files"},"button-text":"Aloha"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const Y=i(F,[["render",X]]);function M(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function V(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
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
};`}}const K={name:"PageDropdownButtonLoading",components:{ADropdown:O,AlohaExample:A},setup(){const{codeHtml:o}=M(),{codeJs:e}=V();return{codeHtml:o,codeJs:e,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function z(o,e,d,c,r,_){const n=a("a-dropdown"),s=a("aloha-example");return p(),l(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_LOADING_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_LOADING_DESCRIPTION_",props:["button-loading","button-loading-align"]},{default:u(()=>[t(n,{actions:o.dropdownActions,"button-text":"aloha","button-loading":!0},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"aloha","button-loading":!0,"button-loading-align":"left"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"aloha","button-loading":!0,"button-loading-align":"right"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const Q=i(K,[["render",z]]);function Z(){return{codeHtml:`<a-dropdown
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
></a-dropdown>`}}function oo(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
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
};`}}const to={name:"PageDropdownButtonText",components:{ADropdown:O,AlohaExample:A},setup(){const{codeHtml:o}=Z(),{codeJs:e}=oo();return{codeHtml:o,codeJs:e,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function no(o,e,d,c,r,_){const n=a("a-dropdown"),s=a("aloha-example");return p(),l(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_TEXT_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_TEXT_DESCRIPTION_",props:"button-text"},{default:u(()=>[t(n,{actions:o.dropdownActions,"button-text":"Aloha"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"Aloha 123"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":{desktop:"Aloha desktop",mobile:"Aloha mobile"}},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const eo=i(to,[["render",no]]);function ao(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  caret-icon="EjectFill"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  caret-icon="Gear"
></a-dropdown>`}}function so(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
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
};`}}const co={name:"PageDropdownCaretIcon",components:{ADropdown:O,AlohaExample:A},setup(){const{codeHtml:o}=ao(),{codeJs:e}=so();return{codeHtml:o,codeJs:e,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function ro(o,e,d,c,r,_){const n=a("a-dropdown"),s=a("aloha-example");return p(),l(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_CARET_ICON_HEADER_",description:"_A_DROPDOWN_GROUP_CARET_ICON_DESCRIPTION_",props:"caret-icon"},{default:u(()=>[t(n,{actions:o.dropdownActions,"caret-icon":"EjectFill"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"caret-icon":"Gear"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const _o=i(co,[["render",ro]]);function io(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :has-caret="true"
  button-text="Aloha"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :has-caret="false"
  button-text="Aloha"
></a-dropdown>`}}function po(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
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
};`}}const lo={name:"PageDropdownHasCaret",components:{ADropdown:O,AlohaExample:A},setup(){const{codeHtml:o}=io(),{codeJs:e}=po();return{codeHtml:o,codeJs:e,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function uo(o,e,d,c,r,_){const n=a("a-dropdown"),s=a("aloha-example");return p(),l(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_HAS_CARET_HEADER_",description:"_A_DROPDOWN_GROUP_HAS_CARET_DESCRIPTION_",props:"has-caret"},{default:u(()=>[t(n,{actions:o.dropdownActions,"has-caret":!0,"button-text":"Aloha"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"has-caret":!1,"button-text":"Aloha"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const Ao=i(lo,[["render",uo]]);function Oo(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :in-body="true"
  button-text="in-body='true'"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :in-body="false"
  button-text="in-body='false'"
></a-dropdown>`}}function Po(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
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
};`}}const mo={name:"PageDropdownInBody",components:{ADropdown:O,AlohaExample:A},setup(){const{codeHtml:o}=Oo(),{codeJs:e}=Po();return{codeHtml:o,codeJs:e,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function Do(o,e,d,c,r,_){const n=a("a-dropdown"),s=a("aloha-example");return p(),l(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_IN_BODY_HEADER_",description:"_A_DROPDOWN_GROUP_IN_BODY_DESCRIPTION_",props:"in-body"},{default:u(()=>[t(n,{actions:o.dropdownActions,"in-body":!0,"button-text":"in-body='true'"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"in-body":!1,"button-text":"in-body='false'"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const bo=i(mo,[["render",Do]]);function Ro(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :has-caret="true"
  button-text="Aloha"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :has-caret="false"
  button-text="Aloha"
></a-dropdown>`}}function wo(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
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
};`}}const fo={name:"PageDropdownReadonly",components:{ADropdown:O,AlohaExample:A},setup(){const{codeHtml:o}=Ro(),{codeJs:e}=wo();return{codeHtml:o,codeJs:e,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function Io(o,e,d,c,r,_){const n=a("a-dropdown"),s=a("aloha-example");return p(),l(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_READONLY_HEADER_",description:"_A_DROPDOWN_GROUP_READONLY_DESCRIPTION_",props:"has-caret"},{default:u(()=>[t(n,{actions:o.dropdownActions,readonly:!0,"button-text":"readonly=true"},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,readonly:!1,"button-text":"readonly=false"},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const No=i(fo,[["render",Io]]);function To(){return{codeHtml:`<a-dropdown
  :actions="dropdownActions"
  :in-body="true"
  button-text="in-body='true'"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :in-body="false"
  button-text="in-body='false'"
></a-dropdown>`}}function So(){return{codeJs:`import { 
  ADropdown,
} from "aloha-vue";
    
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
};`}}const Eo={name:"PageDropdownTriggers",components:{ADropdown:O,AlohaExample:A},setup(){const{codeHtml:o}=To(),{codeJs:e}=So();return{codeHtml:o,codeJs:e,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};function go(o,e,d,c,r,_){const n=a("a-dropdown"),s=a("aloha-example");return p(),l(s,{"code-html":o.codeHtml,"code-js":o.codeJs,header:"_A_DROPDOWN_GROUP_TRIGGERS_HEADER_",description:"_A_DROPDOWN_GROUP_TRIGGERS_DESCRIPTION_",props:"triggers"},{default:u(()=>[t(n,{actions:o.dropdownActions,"button-text":"click",triggers:["click"]},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"focus",triggers:["focus"]},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"hover",triggers:["hover"]},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"click / focus",triggers:["click","focus"]},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"click / hover",triggers:["click","hover"]},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"focus / hover",triggers:["focus","hover"]},null,8,["actions"]),t(n,{class:"a_ml_2",actions:o.dropdownActions,"button-text":"click / focus / hover",triggers:["click","focus","hover"]},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const ho=i(Eo,[["render",go]]);function yo(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function Co(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}function xo(){const o=P(()=>y({placeholder:"_A_DROPDOWN_COMPONENT_NAME_"}));return{pageTitle:P(()=>`ADropdown${o.value?` (${o.value})`:""}`)}}function $o(){return{dataProps:[{name:"actions",description:"_A_DROPDOWN_PROPS_ACTIONS_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-attributes",description:"_A_DROPDOWN_PROPS_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"button-class",description:"_A_DROPDOWN_PROPS_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_secondary",required:!1},{name:"button-icon-attributes",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"button-icon-class",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-icon-left",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_LEFT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"button-icon-right",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_RIGHT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"button-icon-tag",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_TAG_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-is-title-html",description:"_A_DROPDOWN_PROPS_BUTTON_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-loading",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"button-loading-align",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_ALIGN_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"button-loading-class",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_CLASS_DESCRIPTION_",type:"String / Object",default:"a_spinner_small",required:!1},{name:"button-prevent",description:"_A_DROPDOWN_PROPS_BUTTON_PREVENT_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-stop",description:"_A_DROPDOWN_PROPS_BUTTON_STOP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-tag",description:"_A_DROPDOWN_PROPS_BUTTON_TAG_DESCRIPTION_",type:"String",default:"button",required:!1},{name:"button-text",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-text-aria-hidden",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_ARIA_HIDDEN_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"button-text-class",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-text-screen-reader",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-title",description:"_A_DROPDOWN_PROPS_BUTTON_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-title-placement",description:"_A_DROPDOWN_PROPS_BUTTON_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1},{name:"caret-icon",description:"_A_DROPDOWN_PROPS_CARET_ICON_DESCRIPTION_",type:"String",default:"ChevronDown",required:!1},{name:"class",description:"_A_DROPDOWN_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"disabled",description:"_A_DROPDOWN_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dropdown-attributes",description:"_A_DROPDOWN_PROPS_DROPDOWN_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"dropdown-class",description:"_A_DROPDOWN_PROPS_DROPDOWN_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"dropdown-render-default",description:"_A_DROPDOWN_PROPS_DROPDOWN_RENDER_DEFAULT_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dropdown-tag",description:"_A_DROPDOWN_PROPS_DROPDOWN_TAG_DESCRIPTION_",type:"String",default:"ul",required:!1},{name:"elements-for-arrows",description:"_A_DROPDOWN_PROPS_ELEMENTS_FOR_ARROWS_DESCRIPTION_",type:"String",default:C,required:!1},{name:"extra",description:"_A_DROPDOWN_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"floating-flip",description:"_A_DROPDOWN_PROPS_FLOATING_FLIP_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"floating-shift",description:"_A_DROPDOWN_PROPS_FLOATING_SHIFT_DESCRIPTION_",type:"Object",default:"() => ({ use: true, crossAxis: true, padding: 20 })",required:!1},{name:"has-caret",description:"_A_DROPDOWN_PROPS_HAS_CARET_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"id",description:"_A_DROPDOWN_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_dropdown_btn_")',required:!1},{name:"in-body",description:"_A_DROPDOWN_PROPS_IN_BODY_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-close-by-click-inside",description:"_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_INSIDE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-close-by-click-outside",description:"_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_OUTSIDE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide-without-action-and-slot",description:"_A_DROPDOWN_PROPS_IS_HIDE_WITHOUT_ACTION_AND_SLOT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-list-width-same-with-button",description:"_A_DROPDOWN_PROPS_IS_LIST_WIDTH_SAME_WITH_BUTTON_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"lock-arrows-navigation",description:"_A_DROPDOWN_PROPS_LOCK_ARROWS_NAVIGATION_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"lock-tab-navigation",description:"_A_DROPDOWN_PROPS_LOCK_TAB_NAVIGATION_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"persist",description:"_A_DROPDOWN_PROPS_PERSIST_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"placement",description:"_A_DROPDOWN_PROPS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom-start",required:!1},{name:"popper-container-id",description:"_A_DROPDOWN_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_",type:"String",default:"a_tooltip_container",required:!1},{name:"readonly",description:"_A_DROPDOWN_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:"false",required:!1},{name:"triggers",description:"_A_DROPDOWN_PROPS_TRIGGERS_DESCRIPTION_",type:"Array",default:'() => ["click"]',required:!1},{name:"use-escape",description:"_A_DROPDOWN_PROPS_USE_ESCAPE_DESCRIPTION_",type:"Boolean",default:!0,required:!1}]}}function Bo(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const Wo={name:"PageDropdown",components:{AlohaPage:g,AlohaTableProps:h,ATranslation:x,PageDropdownBasic:k,PageDropdownButtonClass:G,PageDropdownButtonIcons:Y,PageDropdownButtonLoading:Q,PageDropdownButtonText:eo,PageDropdownCaretIcon:_o,PageDropdownHasCaret:Ao,PageDropdownInBody:bo,PageDropdownReadonly:No,PageDropdownTriggers:ho},setup(){const{pageTitle:o}=xo(),{dataProps:e}=$o(),{dataSlots:d}=Bo(),{dataEvents:c}=yo(),{dataExposes:r}=Co();return{dataEvents:c,dataExposes:r,dataProps:e,dataSlots:d,pageTitle:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{},isHidden:!0},{text:"Actions 1",type:"button",callback:()=>{},disabled:!0},{type:"divider"},{type:"divider"},{text:"Actions 2",type:"button",callback:()=>{}},{type:"link",text:"Link 1",href:"#"},{type:"divider"}]}}};function Ho(o,e,d,c,r,_){const n=a("a-translation"),s=a("page-dropdown-basic"),m=a("page-dropdown-button-text"),D=a("page-dropdown-button-class"),b=a("page-dropdown-button-icons"),R=a("page-dropdown-button-loading"),w=a("page-dropdown-in-body"),f=a("page-dropdown-triggers"),I=a("page-dropdown-caret-icon"),N=a("page-dropdown-has-caret"),T=a("page-dropdown-readonly"),S=a("aloha-table-props"),E=a("aloha-page");return p(),l(E,{"page-title":o.pageTitle},{body:u(()=>[t(n,{tag:"p",html:"_A_DROPDOWN_COMPONENT_DESCRIPTION_"}),t(s),t(m),t(D),t(b),t(R),t(w),t(f),t(I),t(N),t(T),t(S,{data:o.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const Zo=i(Wo,[["render",Ho]]);export{Zo as default};
