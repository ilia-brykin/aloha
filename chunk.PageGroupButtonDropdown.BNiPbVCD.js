import{A as b,a as N}from"./chunk.AlohaExample.pz732Bl0.js";import{A as T}from"./chunk.AlohaTableProps.HhOTzMKY.js";import{_,g,A as I}from"./bundle.index.CD_PqjvD.js";import{Y as p,W as u,aU as l,f as e,$ as o,d as O}from"./chunk.vendor.CWr53wb5.js";import"./chunk.vendor-lodash.CWoM99Se.js";import{c as m}from"./chunk.ATable.yWNfDm65.js";import"./chunk.APageTabTitle.EYzy_Vgq.js";import"./chunk.AlohaHighlightjs.Cyb5M4zM.js";import"./chunk.translations-ar.DRto1jDw.js";import"./chunk.translations-de.CEjcANRo.js";import"./chunk.translations-en.BjlQK_tj.js";import"./chunk.translations-es.BcLAUo0L.js";import"./chunk.translations-fr.DINmPQrz.js";import"./chunk.translations-hr.BU9Fw-5f.js";import"./chunk.translations-it.Cu9SxZzh.js";import"./chunk.translations-ru.Cs_zBe4-.js";function k(){return{codeHtml:`<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="6"
  :index-first-dropdown-action-mobile="6"
  :actions-classes="['a_btn a_btn_primary', 'a_btn a_btn_secondary', 'a_btn a_btn_info', 'a_btn a_btn_info', 'a_btn a_btn_info', 'a_btn a_btn_info']"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="3"
  :index-first-dropdown-action-mobile="3"
  :actions-classes="['a_btn a_btn_primary', 'a_btn a_btn_secondary', 'a_btn a_btn_secondary', 'a_btn a_btn_primary']"
></a-group-button-dropdown>`}}function E(){return{codeJs:`import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownActionsClasses",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 4",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 5",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 6",
        type: "button",
        callback: () => {},
      },
    ];
    
     return {
      actions,
    };
  },
};`}}const G={name:"PageGroupButtonDropdownActionsClasses",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=k(),{codeJs:a}=E();return{actions:[{text:"Action 1",type:"button",callback:()=>{}},{text:"Action 2",type:"button",callback:()=>{}},{text:"Action 3",type:"button",callback:()=>{}},{text:"Action 4",type:"button",callback:()=>{}},{text:"Action 5",type:"button",callback:()=>{}},{text:"Action 6",type:"button",callback:()=>{}}],codeHtml:t,codeJs:a}}};function S(t,a,c,r,i,d){const n=e("a-group-button-dropdown"),s=e("aloha-example");return p(),u(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_GROUP_BUTTON_DROPDOWN_GROUP_ACTIONS_CLASSES_HEADER_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_ACTIONS_CLASSES_DESCRIPTION_",props:["actions-classes"]},{default:l(()=>[o(n,{actions:t.actions,"index-first-dropdown-action":6,"index-first-dropdown-action-mobile":6,"actions-classes":["a_btn a_btn_primary","a_btn a_btn_secondary","a_btn a_btn_info","a_btn a_btn_info","a_btn a_btn_info","a_btn a_btn_info"]},null,8,["actions"]),o(n,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":3,"index-first-dropdown-action-mobile":3,"actions-classes":["a_btn a_btn_primary","a_btn a_btn_secondary","a_btn a_btn_secondary","a_btn a_btn_primary"]},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const U=_(G,[["render",S]]);function h(){return{codeHtml:`<a-group-button-dropdown
  :actions="actions"
></a-group-button-dropdown>`}}function $(){return{codeJs:`import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownBasic",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        callback: () => {},
      },
    ];
    
     return {
      actions,
    };
  },
};`}}const C={name:"PageGroupButtonDropdownBasic",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=h(),{codeJs:a}=$();return{actions:[{text:"Action 1",type:"button",callback:()=>{}},{text:"Action 2",type:"button",callback:()=>{}},{text:"Action 3",type:"button",callback:()=>{}}],codeHtml:t,codeJs:a}}};function H(t,a,c,r,i,d){const n=e("a-group-button-dropdown"),s=e("aloha-example");return p(),u(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_BASIC_USAGE_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_BASIC_DESCRIPTION_",props:"actions"},{default:l(()=>[o(n,{actions:t.actions},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const W=_(C,[["render",H]]);function J(){return{codeHtml:`<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="2"
  :index-first-dropdown-action-mobile="2"
  :disabled="true"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
  :disabled="true"
></a-group-button-dropdown>`}}function v(){return{codeJs:`import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownDisabled",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 4",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 5",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 6",
        type: "button",
        callback: () => {},
      },
    ];
    
     return {
      actions,
    };
  },
};`}}const F={name:"PageGroupButtonDropdownDisabled",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=J(),{codeJs:a}=v();return{actions:[{text:"Action 1",type:"button",callback:()=>{}},{text:"Action 2",type:"button",callback:()=>{}},{text:"Action 3",type:"button",callback:()=>{}},{text:"Action 4",type:"button",callback:()=>{}},{text:"Action 5",type:"button",callback:()=>{}},{text:"Action 6",type:"button",callback:()=>{}}],codeHtml:t,codeJs:a}}};function j(t,a,c,r,i,d){const n=e("a-group-button-dropdown"),s=e("aloha-example");return p(),u(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_GROUP_BUTTON_DROPDOWN_GROUP_DISABLED_HEADER_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_DISABLED_DESCRIPTION_",props:["disabled"]},{default:l(()=>[o(n,{actions:t.actions,"index-first-dropdown-action":2,"index-first-dropdown-action-mobile":2,disabled:!0},null,8,["actions"]),o(n,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1,disabled:!0},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const L=_(F,[["render",j]]);function q(){return{codeHtml:`<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="2"
  :index-first-dropdown-action-mobile="2"
  :dropdown-attributes="{ buttonText: '_A_GROUP_BUTTON_DROPDOWN_OTHER_ACTIONS_', buttonClass: 'a_btn a_btn_primary' }"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
  :dropdown-attributes="{ buttonText: '_A_GROUP_BUTTON_DROPDOWN_OTHER_ACTIONS_', buttonIconLeft: 'Gear' }"
></a-group-button-dropdown>`}}function X(){return{codeJs:`import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownDropdownAttributes",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 4",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 5",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 6",
        type: "button",
        callback: () => {},
      },
    ];
    
     return {
      actions,
    };
  },
};`}}const M={name:"PageGroupButtonDropdownDropdownAttributes",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=q(),{codeJs:a}=X();return{actions:[{text:"Action 1",type:"button",callback:()=>{}},{text:"Action 2",type:"button",callback:()=>{}},{text:"Action 3",type:"button",callback:()=>{}},{text:"Action 4",type:"button",callback:()=>{}},{text:"Action 5",type:"button",callback:()=>{}},{text:"Action 6",type:"button",callback:()=>{}}],codeHtml:t,codeJs:a}}};function V(t,a,c,r,i,d){const n=e("a-group-button-dropdown"),s=e("aloha-example");return p(),u(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_GROUP_BUTTON_DROPDOWN_GROUP_DROPDOWN_ATTRIBUTES_HEADER_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_DROPDOWN_ATTRIBUTES_DESCRIPTION_",props:["dropdown-attributes"]},{default:l(()=>[o(n,{actions:t.actions,"index-first-dropdown-action":2,"index-first-dropdown-action-mobile":2,"dropdown-attributes":{buttonText:"_A_GROUP_BUTTON_DROPDOWN_OTHER_ACTIONS_",buttonClass:"a_btn a_btn_primary"}},null,8,["actions"]),o(n,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1,"dropdown-attributes":{buttonText:"_A_GROUP_BUTTON_DROPDOWN_OTHER_ACTIONS_",buttonIconLeft:"Gear"}},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const Y=_(M,[["render",V]]);function z(){return{codeHtml:`<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="2"
  :index-first-dropdown-action-mobile="2"
></a-group-button-dropdown>`}}function K(){return{codeJs:`import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownActionsClasses",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        callback: () => {},
        classExtra: "test_action1",
      },
      {
        text: "Action 2",
        type: "button",
        callback: () => {},
        classExtra: "test_action2",
      },
      {
        text: "Action 3",
        type: "button",
        callback: () => {},
        classExtra: "test_action3",
      },
      {
        text: "Action 4",
        type: "button",
        callback: () => {},
        classExtra: "test_action4",
      },
      {
        text: "Action 5",
        type: "button",
        callback: () => {},
        classExtra: "test_action5",
      },
      {
        text: "Action 6",
        type: "button",
        callback: () => {},
        classExtra: "test_action6",
      },
    ];
    
     return {
      actions,
    };
  },
};`}}const Q={name:"PageGroupButtonDropdownExtraClasses",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=z(),{codeJs:a}=K();return{actions:[{text:"Action 1",type:"button",callback:()=>{},classExtra:"test_action1"},{text:"Action 2",type:"button",callback:()=>{},classExtra:"test_action2"},{text:"Action 3",type:"button",callback:()=>{},classExtra:"test_action3"},{text:"Action 4",type:"button",callback:()=>{},classExtra:"test_action4"},{text:"Action 5",type:"button",callback:()=>{},classExtra:"test_action5"},{text:"Action 6",type:"button",callback:()=>{},classExtra:"test_action6"}],codeHtml:t,codeJs:a}}};function Z(t,a,c,r,i,d){const n=e("a-group-button-dropdown"),s=e("aloha-example");return p(),u(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_GROUP_BUTTON_DROPDOWN_GROUP_EXTRA_CLASSES_HEADER_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_EXTRA_CLASSES_DESCRIPTION_",props:["actions.classExtra"]},{default:l(()=>[o(n,{actions:t.actions,"index-first-dropdown-action":2,"index-first-dropdown-action-mobile":2},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const tt=_(Q,[["render",Z]]);function ot(){return{codeHtml:`<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
  :has-divider-before-dropdown="true"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
  :has-divider-before-dropdown="false"
></a-group-button-dropdown>`}}function nt(){return{codeJs:`import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownHasDividerBeforeDropdown",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 4",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 5",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 6",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
    ];
    
     return {
      actions,
    };
  },
};`}}const at={name:"PageGroupButtonDropdownHasDividerBeforeDropdown",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=ot(),{codeJs:a}=nt();return{actions:[{text:"Action 1",type:"button",classButton:"a_btn a_btn_primary",callback:()=>{}},{text:"Action 2",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 3",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 4",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 5",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 6",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}}],codeHtml:t,codeJs:a}}};function et(t,a,c,r,i,d){const n=e("a-group-button-dropdown"),s=e("aloha-example");return p(),u(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_GROUP_BUTTON_DROPDOWN_GROUP_HAS_DIVIDER_BEFORE_DROPDOWN_HEADER_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_HAS_DIVIDER_BEFORE_DROPDOWN_DESCRIPTION_",props:["has-divider-before-dropdown"]},{default:l(()=>[o(n,{actions:t.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1,"has-divider-before-dropdown":!0},null,8,["actions"]),o(n,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1,"has-divider-before-dropdown":!1},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const ct=_(at,[["render",et]]);function st(){return{codeHtml:`<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="-1"
  :index-first-dropdown-action-mobile="-1"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="0"
  :index-first-dropdown-action-mobile="0"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="2"
  :index-first-dropdown-action-mobile="2"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="3"
  :index-first-dropdown-action-mobile="3"
></a-group-button-dropdown>`}}function rt(){return{codeJs:`import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownIndexFirstDropdownAction",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 4",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 5",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 6",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
    ];
    
     return {
      actions,
    };
  },
};`}}const it={name:"PageGroupButtonDropdownIndexFirstDropdownAction",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=st(),{codeJs:a}=rt();return{actions:[{text:"Action 1",type:"button",classButton:"a_btn a_btn_primary",callback:()=>{}},{text:"Action 2",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 3",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 4",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 5",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 6",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}}],codeHtml:t,codeJs:a}}};function dt(t,a,c,r,i,d){const n=e("a-group-button-dropdown"),s=e("aloha-example");return p(),u(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_GROUP_BUTTON_DROPDOWN_GROUP_INDEX_FIRST_DROPDOWN_ACTION_HEADER_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_INDEX_FIRST_DROPDOWN_ACTION_DESCRIPTION_",props:["index-first-dropdown-action","index-first-dropdown-action-mobile","actions.classButton"]},{default:l(()=>[o(n,{actions:t.actions,"index-first-dropdown-action":-1,"index-first-dropdown-action-mobile":-1},null,8,["actions"]),o(n,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":0,"index-first-dropdown-action-mobile":0},null,8,["actions"]),o(n,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,["actions"]),o(n,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":2,"index-first-dropdown-action-mobile":2},null,8,["actions"]),o(n,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":3,"index-first-dropdown-action-mobile":3},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const _t=_(it,[["render",dt]]);function pt(){return{codeHtml:`<a-group-button-dropdown
  :actions="actions1"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions2"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions3"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions6"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
></a-group-button-dropdown>`}}function ut(){return{codeJs:`import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownIndexFirstDropdownActionOne",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions1 = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
    ];

    const actions2 = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
    ];

    const actions3 = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
    ];

    const actions6 = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 4",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 5",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 6",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
    ];
    
     return {
      actions1,
      actions2,
      actions3,
      actions6,
    };
  },
};`}}const lt={name:"PageGroupButtonDropdownIndexFirstDropdownActionOne",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=pt(),{codeJs:a}=ut();return{actions1:[{text:"Action 1",type:"button",classButton:"a_btn a_btn_primary",callback:()=>{}}],actions2:[{text:"Action 1",type:"button",classButton:"a_btn a_btn_primary",callback:()=>{}},{text:"Action 2",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}}],actions3:[{text:"Action 1",type:"button",classButton:"a_btn a_btn_primary",callback:()=>{}},{text:"Action 2",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 3",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}}],actions6:[{text:"Action 1",type:"button",classButton:"a_btn a_btn_primary",callback:()=>{}},{text:"Action 2",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 3",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 4",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 5",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 6",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}}],codeHtml:t,codeJs:a}}};function bt(t,a,c,r,i,d){const n=e("a-group-button-dropdown"),s=e("aloha-example");return p(),u(s,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_GROUP_BUTTON_DROPDOWN_GROUP_INDEX_FIRST_DROPDOWN_ACTION_ONE_HEADER_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_INDEX_FIRST_DROPDOWN_ACTION_ONE_DESCRIPTION_",props:["index-first-dropdown-action","index-first-dropdown-action-mobile","actions.classButton"]},{default:l(()=>[o(n,{actions:t.actions1,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,["actions"]),o(n,{class:"a_mt_3",actions:t.actions2,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,["actions"]),o(n,{class:"a_mt_3",actions:t.actions3,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,["actions"]),o(n,{class:"a_mt_3",actions:t.actions6,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const mt=_(lt,[["render",bt]]);function At(){return{dataEvents:[{name:"update:innerFlagHasActions",description:"_A_GROUP_BUTTON_DROPDOWN_EVENTS_UPDATE_INNER_FLAG_HAS_ACTIONS_DESCRIPTION_",type:"Function"}]}}function Ot(){const t=O(()=>g({placeholder:"_A_BUTTON_DROPDOWN_COMPONENT_COMPONENT_NAME_"}));return{pageTitle:O(()=>`AGroupButtonDropdown${t.value?` (${t.value})`:""}`)}}function wt(){return{dataProps:[{name:"actions",description:"_A_DROPDOWN_PROPS_ACTIONS_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"actions-classes",description:"_A_GROUP_BUTTON_DROPDOWN_PROPS_ACTIONS_CLASSES_DESCRIPTION_",type:"Array",default:'() => ["a_btn a_btn_primary", "a_btn a_btn_secondary"]',required:!1},{name:"actions-ids",description:"_A_GROUP_BUTTON_DROPDOWN_PROPS_ACTIONS_IDS_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"btn-group-class",description:"_A_GROUP_BUTTON_DROPDOWN_PROPS_BTN_GROUP_CLASS_DESCRIPTION_",type:"String / Array / Object",default:"a_btn_group",required:!1},{name:"disabled",description:"_A_DROPDOWN_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dropdown-attributes",description:"_A_DROPDOWN_PROPS_DROPDOWN_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"has-divider-before-dropdown",description:"_A_GROUP_BUTTON_DROPDOWN_PROPS_HAS_DIVIDER_BEFORE_DROPDOWN_DESCRIPTION_",type:"Boolean",default:"true",required:!1},{name:"index-first-dropdown-action",description:"_A_GROUP_BUTTON_DROPDOWN_PROPS_INDEX_FIRST_DROPDOWN_ACTION_DESCRIPTION_",type:"Number",default:"1",required:!1},{name:"index-first-dropdown-action-mobile",description:"_A_GROUP_BUTTON_DROPDOWN_PROPS_INDEX_FIRST_DROPDOWN_ACTION_MOBILE_DESCRIPTION_",type:"Number",default:"0",required:!1},{name:"inner-flag-has-actions",description:"_A_GROUP_BUTTON_DROPDOWN_PROPS_INNER_FLAG_HAS_ACTIONS_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"min-dropdown-actions",description:"_A_GROUP_BUTTON_DROPDOWN_PROPS_MIN_DROPDOWN_ACTIONS_DESCRIPTION_",type:"Number",default:"2",required:!1}]}}const xt={name:"PageGroupButtonDropdown",components:{AlohaPage:N,AlohaTableProps:T,ATranslation:I,PageGroupButtonDropdownActionsClasses:U,PageGroupButtonDropdownBasic:W,PageGroupButtonDropdownDisabled:L,PageGroupButtonDropdownDropdownAttributes:Y,PageGroupButtonDropdownExtraClasses:tt,PageGroupButtonDropdownHasDividerBeforeDropdown:ct,PageGroupButtonDropdownIndexFirstDropdownAction:_t,PageGroupButtonDropdownIndexFirstDropdownActionOne:mt},setup(){const{pageTitle:t}=Ot(),{dataProps:a}=wt(),{dataEvents:c}=At();return{dataEvents:c,dataProps:a,pageTitle:t}}};function Dt(t,a,c,r,i,d){const n=e("a-translation"),s=e("page-group-button-dropdown-basic"),w=e("page-group-button-dropdown-index-first-dropdown-action"),x=e("page-group-button-dropdown-index-first-dropdown-action-one"),D=e("page-group-button-dropdown-has-divider-before-dropdown"),f=e("page-group-button-dropdown-actions-classes"),P=e("page-group-button-dropdown-disabled"),y=e("page-group-button-dropdown-dropdown-attributes"),R=e("page-group-button-dropdown-extra-classes"),A=e("aloha-table-props"),B=e("aloha-page");return p(),u(B,{"page-title":t.pageTitle},{body:l(()=>[o(n,{tag:"p",html:"_A_GROUP_BUTTON_DROPDOWN_COMPONENT_DESCRIPTION_"}),o(s),o(w),o(x),o(D),o(f),o(P),o(y),o(R),o(A,{data:t.dataProps},null,8,["data"]),o(A,{"table-label":"Events",data:t.dataEvents,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Ct=_(xt,[["render",Dt]]);export{Ct as default};
