import{t as e}from"./chunk.AlohaPage.ChkpVQK6.js";import{t}from"./chunk.AlohaTableProps.Bfv18lY9.js";import{t as n}from"./chunk.AlohaExample.yCYNeej2.js";import{It as r,S as i,et as a}from"./bundle.index.DgEnxzUz.js";import{Bt as o,It as s,Pt as c,Zt as l,an as u,tn as d}from"./chunk.vendor.H0cZuFAV.js";import{t as f}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function p(){return{codeHtml:`<a-group-button-dropdown
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
></a-group-button-dropdown>`}}function m(){return{codeJs:`import { 
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
};`}}var h={name:`PageGroupButtonDropdownActionsClasses`,components:{AGroupButtonDropdown:i,AlohaExample:n},setup(){let{codeHtml:e}=p(),{codeJs:t}=m();return{actions:[{text:`Action 1`,type:`button`,callback:()=>{}},{text:`Action 2`,type:`button`,callback:()=>{}},{text:`Action 3`,type:`button`,callback:()=>{}},{text:`Action 4`,type:`button`,callback:()=>{}},{text:`Action 5`,type:`button`,callback:()=>{}},{text:`Action 6`,type:`button`,callback:()=>{}}],codeHtml:e,codeJs:t}}};function g(e,t,n,r,i,a){let c=d(`a-group-button-dropdown`),f=d(`aloha-example`);return l(),s(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_GROUP_BUTTON_DROPDOWN_GROUP_ACTIONS_CLASSES_HEADER_`,description:`_A_GROUP_BUTTON_DROPDOWN_GROUP_ACTIONS_CLASSES_DESCRIPTION_`,props:[`actions-classes`]},{default:u(()=>[o(c,{actions:e.actions,"index-first-dropdown-action":6,"index-first-dropdown-action-mobile":6,"actions-classes":[`a_btn a_btn_primary`,`a_btn a_btn_secondary`,`a_btn a_btn_info`,`a_btn a_btn_info`,`a_btn a_btn_info`,`a_btn a_btn_info`]},null,8,[`actions`]),o(c,{class:`a_mt_3`,actions:e.actions,"index-first-dropdown-action":3,"index-first-dropdown-action-mobile":3,"actions-classes":[`a_btn a_btn_primary`,`a_btn a_btn_secondary`,`a_btn a_btn_secondary`,`a_btn a_btn_primary`]},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var _=f(h,[[`render`,g]]);function v(){return{codeHtml:`<a-group-button-dropdown
  :actions="actions"
></a-group-button-dropdown>`}}function y(){return{codeJs:`import { 
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
};`}}var b={name:`PageGroupButtonDropdownBasic`,components:{AGroupButtonDropdown:i,AlohaExample:n},setup(){let{codeHtml:e}=v(),{codeJs:t}=y();return{actions:[{text:`Action 1`,type:`button`,callback:()=>{}},{text:`Action 2`,type:`button`,callback:()=>{}},{text:`Action 3`,type:`button`,callback:()=>{}}],codeHtml:e,codeJs:t}}};function x(e,t,n,r,i,a){let c=d(`a-group-button-dropdown`),f=d(`aloha-example`);return l(),s(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_GROUP_BUTTON_DROPDOWN_GROUP_BASIC_DESCRIPTION_`,props:`actions`},{default:u(()=>[o(c,{actions:e.actions},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var S=f(b,[[`render`,x]]);function C(){return{codeHtml:`<a-group-button-dropdown
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
></a-group-button-dropdown>`}}function w(){return{codeJs:`import { 
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
};`}}var T={name:`PageGroupButtonDropdownDisabled`,components:{AGroupButtonDropdown:i,AlohaExample:n},setup(){let{codeHtml:e}=C(),{codeJs:t}=w();return{actions:[{text:`Action 1`,type:`button`,callback:()=>{}},{text:`Action 2`,type:`button`,callback:()=>{}},{text:`Action 3`,type:`button`,callback:()=>{}},{text:`Action 4`,type:`button`,callback:()=>{}},{text:`Action 5`,type:`button`,callback:()=>{}},{text:`Action 6`,type:`button`,callback:()=>{}}],codeHtml:e,codeJs:t}}};function E(e,t,n,r,i,a){let c=d(`a-group-button-dropdown`),f=d(`aloha-example`);return l(),s(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_GROUP_BUTTON_DROPDOWN_GROUP_DISABLED_HEADER_`,description:`_A_GROUP_BUTTON_DROPDOWN_GROUP_DISABLED_DESCRIPTION_`,props:[`disabled`]},{default:u(()=>[o(c,{actions:e.actions,"index-first-dropdown-action":2,"index-first-dropdown-action-mobile":2,disabled:!0},null,8,[`actions`]),o(c,{class:`a_mt_3`,actions:e.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1,disabled:!0},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var D=f(T,[[`render`,E]]);function O(){return{codeHtml:`<a-group-button-dropdown
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
></a-group-button-dropdown>`}}function k(){return{codeJs:`import { 
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
};`}}var A={name:`PageGroupButtonDropdownDropdownAttributes`,components:{AGroupButtonDropdown:i,AlohaExample:n},setup(){let{codeHtml:e}=O(),{codeJs:t}=k();return{actions:[{text:`Action 1`,type:`button`,callback:()=>{}},{text:`Action 2`,type:`button`,callback:()=>{}},{text:`Action 3`,type:`button`,callback:()=>{}},{text:`Action 4`,type:`button`,callback:()=>{}},{text:`Action 5`,type:`button`,callback:()=>{}},{text:`Action 6`,type:`button`,callback:()=>{}}],codeHtml:e,codeJs:t}}};function j(e,t,n,r,i,a){let c=d(`a-group-button-dropdown`),f=d(`aloha-example`);return l(),s(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_GROUP_BUTTON_DROPDOWN_GROUP_DROPDOWN_ATTRIBUTES_HEADER_`,description:`_A_GROUP_BUTTON_DROPDOWN_GROUP_DROPDOWN_ATTRIBUTES_DESCRIPTION_`,props:[`dropdown-attributes`]},{default:u(()=>[o(c,{actions:e.actions,"index-first-dropdown-action":2,"index-first-dropdown-action-mobile":2,"dropdown-attributes":{buttonText:`_A_GROUP_BUTTON_DROPDOWN_OTHER_ACTIONS_`,buttonClass:`a_btn a_btn_primary`}},null,8,[`actions`]),o(c,{class:`a_mt_3`,actions:e.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1,"dropdown-attributes":{buttonText:`_A_GROUP_BUTTON_DROPDOWN_OTHER_ACTIONS_`,buttonIconLeft:`Gear`}},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var M=f(A,[[`render`,j]]);function N(){return{codeHtml:`<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="2"
  :index-first-dropdown-action-mobile="2"
></a-group-button-dropdown>`}}function P(){return{codeJs:`import { 
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
};`}}var F={name:`PageGroupButtonDropdownExtraClasses`,components:{AGroupButtonDropdown:i,AlohaExample:n},setup(){let{codeHtml:e}=N(),{codeJs:t}=P();return{actions:[{text:`Action 1`,type:`button`,callback:()=>{},classExtra:`test_action1`},{text:`Action 2`,type:`button`,callback:()=>{},classExtra:`test_action2`},{text:`Action 3`,type:`button`,callback:()=>{},classExtra:`test_action3`},{text:`Action 4`,type:`button`,callback:()=>{},classExtra:`test_action4`},{text:`Action 5`,type:`button`,callback:()=>{},classExtra:`test_action5`},{text:`Action 6`,type:`button`,callback:()=>{},classExtra:`test_action6`}],codeHtml:e,codeJs:t}}};function I(e,t,n,r,i,a){let c=d(`a-group-button-dropdown`),f=d(`aloha-example`);return l(),s(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_GROUP_BUTTON_DROPDOWN_GROUP_EXTRA_CLASSES_HEADER_`,description:`_A_GROUP_BUTTON_DROPDOWN_GROUP_EXTRA_CLASSES_DESCRIPTION_`,props:[`actions.classExtra`]},{default:u(()=>[o(c,{actions:e.actions,"index-first-dropdown-action":2,"index-first-dropdown-action-mobile":2},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var ee=f(F,[[`render`,I]]);function L(){return{codeHtml:`<a-group-button-dropdown
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
></a-group-button-dropdown>`}}function R(){return{codeJs:`import { 
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
};`}}var z={name:`PageGroupButtonDropdownHasDividerBeforeDropdown`,components:{AGroupButtonDropdown:i,AlohaExample:n},setup(){let{codeHtml:e}=L(),{codeJs:t}=R();return{actions:[{text:`Action 1`,type:`button`,classButton:`a_btn a_btn_primary`,callback:()=>{}},{text:`Action 2`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}},{text:`Action 3`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}},{text:`Action 4`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}},{text:`Action 5`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}},{text:`Action 6`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}}],codeHtml:e,codeJs:t}}};function B(e,t,n,r,i,a){let c=d(`a-group-button-dropdown`),f=d(`aloha-example`);return l(),s(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_GROUP_BUTTON_DROPDOWN_GROUP_HAS_DIVIDER_BEFORE_DROPDOWN_HEADER_`,description:`_A_GROUP_BUTTON_DROPDOWN_GROUP_HAS_DIVIDER_BEFORE_DROPDOWN_DESCRIPTION_`,props:[`has-divider-before-dropdown`]},{default:u(()=>[o(c,{actions:e.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1,"has-divider-before-dropdown":!0},null,8,[`actions`]),o(c,{class:`a_mt_3`,actions:e.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1,"has-divider-before-dropdown":!1},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var V=f(z,[[`render`,B]]);function H(){return{codeHtml:`<a-group-button-dropdown
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
></a-group-button-dropdown>`}}function U(){return{codeJs:`import { 
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
};`}}var W={name:`PageGroupButtonDropdownIndexFirstDropdownAction`,components:{AGroupButtonDropdown:i,AlohaExample:n},setup(){let{codeHtml:e}=H(),{codeJs:t}=U();return{actions:[{text:`Action 1`,type:`button`,classButton:`a_btn a_btn_primary`,callback:()=>{}},{text:`Action 2`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}},{text:`Action 3`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}},{text:`Action 4`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}},{text:`Action 5`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}},{text:`Action 6`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}}],codeHtml:e,codeJs:t}}};function G(e,t,n,r,i,a){let c=d(`a-group-button-dropdown`),f=d(`aloha-example`);return l(),s(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_GROUP_BUTTON_DROPDOWN_GROUP_INDEX_FIRST_DROPDOWN_ACTION_HEADER_`,description:`_A_GROUP_BUTTON_DROPDOWN_GROUP_INDEX_FIRST_DROPDOWN_ACTION_DESCRIPTION_`,props:[`index-first-dropdown-action`,`index-first-dropdown-action-mobile`,`actions.classButton`]},{default:u(()=>[o(c,{actions:e.actions,"index-first-dropdown-action":-1,"index-first-dropdown-action-mobile":-1},null,8,[`actions`]),o(c,{class:`a_mt_3`,actions:e.actions,"index-first-dropdown-action":0,"index-first-dropdown-action-mobile":0},null,8,[`actions`]),o(c,{class:`a_mt_3`,actions:e.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,[`actions`]),o(c,{class:`a_mt_3`,actions:e.actions,"index-first-dropdown-action":2,"index-first-dropdown-action-mobile":2},null,8,[`actions`]),o(c,{class:`a_mt_3`,actions:e.actions,"index-first-dropdown-action":3,"index-first-dropdown-action-mobile":3},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var K=f(W,[[`render`,G]]);function q(){return{codeHtml:`<a-group-button-dropdown
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
></a-group-button-dropdown>`}}function J(){return{codeJs:`import { 
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
};`}}var Y={name:`PageGroupButtonDropdownIndexFirstDropdownActionOne`,components:{AGroupButtonDropdown:i,AlohaExample:n},setup(){let{codeHtml:e}=q(),{codeJs:t}=J();return{actions1:[{text:`Action 1`,type:`button`,classButton:`a_btn a_btn_primary`,callback:()=>{}}],actions2:[{text:`Action 1`,type:`button`,classButton:`a_btn a_btn_primary`,callback:()=>{}},{text:`Action 2`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}}],actions3:[{text:`Action 1`,type:`button`,classButton:`a_btn a_btn_primary`,callback:()=>{}},{text:`Action 2`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}},{text:`Action 3`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}}],actions6:[{text:`Action 1`,type:`button`,classButton:`a_btn a_btn_primary`,callback:()=>{}},{text:`Action 2`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}},{text:`Action 3`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}},{text:`Action 4`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}},{text:`Action 5`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}},{text:`Action 6`,type:`button`,classButton:`a_btn a_btn_secondary`,callback:()=>{}}],codeHtml:e,codeJs:t}}};function X(e,t,n,r,i,a){let c=d(`a-group-button-dropdown`),f=d(`aloha-example`);return l(),s(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_GROUP_BUTTON_DROPDOWN_GROUP_INDEX_FIRST_DROPDOWN_ACTION_ONE_HEADER_`,description:`_A_GROUP_BUTTON_DROPDOWN_GROUP_INDEX_FIRST_DROPDOWN_ACTION_ONE_DESCRIPTION_`,props:[`index-first-dropdown-action`,`index-first-dropdown-action-mobile`,`actions.classButton`]},{default:u(()=>[o(c,{actions:e.actions1,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,[`actions`]),o(c,{class:`a_mt_3`,actions:e.actions2,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,[`actions`]),o(c,{class:`a_mt_3`,actions:e.actions3,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,[`actions`]),o(c,{class:`a_mt_3`,actions:e.actions6,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,[`actions`])]),_:1},8,[`code-html`,`code-js`])}var Z=f(Y,[[`render`,X]]);function Q(){return{dataEvents:[{name:`update:innerFlagHasActions`,description:`_A_GROUP_BUTTON_DROPDOWN_EVENTS_UPDATE_INNER_FLAG_HAS_ACTIONS_DESCRIPTION_`,type:`Function`}]}}function $(){let e=c(()=>r({placeholder:`_A_BUTTON_DROPDOWN_COMPONENT_COMPONENT_NAME_`}));return{pageTitle:c(()=>`AGroupButtonDropdown${e.value?` (${e.value})`:``}`)}}function te(){return{dataProps:[{name:`actions`,description:`_A_DROPDOWN_PROPS_ACTIONS_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`actions-classes`,description:`_A_GROUP_BUTTON_DROPDOWN_PROPS_ACTIONS_CLASSES_DESCRIPTION_`,type:`Array`,default:`() => ["a_btn a_btn_primary", "a_btn a_btn_secondary"]`,required:!1},{name:`actions-ids`,description:`_A_GROUP_BUTTON_DROPDOWN_PROPS_ACTIONS_IDS_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`btn-group-class`,description:`_A_GROUP_BUTTON_DROPDOWN_PROPS_BTN_GROUP_CLASS_DESCRIPTION_`,type:`String / Array / Object`,default:`a_btn_group`,required:!1},{name:`disabled`,description:`_A_DROPDOWN_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`dropdown-attributes`,description:`_A_DROPDOWN_PROPS_DROPDOWN_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`has-divider-before-dropdown`,description:`_A_GROUP_BUTTON_DROPDOWN_PROPS_HAS_DIVIDER_BEFORE_DROPDOWN_DESCRIPTION_`,type:`Boolean`,default:`true`,required:!1},{name:`index-first-dropdown-action`,description:`_A_GROUP_BUTTON_DROPDOWN_PROPS_INDEX_FIRST_DROPDOWN_ACTION_DESCRIPTION_`,type:`Number`,default:`1`,required:!1},{name:`index-first-dropdown-action-mobile`,description:`_A_GROUP_BUTTON_DROPDOWN_PROPS_INDEX_FIRST_DROPDOWN_ACTION_MOBILE_DESCRIPTION_`,type:`Number`,default:`0`,required:!1},{name:`inner-flag-has-actions`,description:`_A_GROUP_BUTTON_DROPDOWN_PROPS_INNER_FLAG_HAS_ACTIONS_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`min-dropdown-actions`,description:`_A_GROUP_BUTTON_DROPDOWN_PROPS_MIN_DROPDOWN_ACTIONS_DESCRIPTION_`,type:`Number`,default:`2`,required:!1}]}}var ne={name:`PageGroupButtonDropdown`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:a,PageGroupButtonDropdownActionsClasses:_,PageGroupButtonDropdownBasic:S,PageGroupButtonDropdownDisabled:D,PageGroupButtonDropdownDropdownAttributes:M,PageGroupButtonDropdownExtraClasses:ee,PageGroupButtonDropdownHasDividerBeforeDropdown:V,PageGroupButtonDropdownIndexFirstDropdownAction:K,PageGroupButtonDropdownIndexFirstDropdownActionOne:Z},setup(){let{pageTitle:e}=$(),{dataProps:t}=te(),{dataEvents:n}=Q();return{dataEvents:n,dataProps:t,pageTitle:e}}};function re(e,t,n,r,i,a){let c=d(`a-translation`),f=d(`page-group-button-dropdown-basic`),p=d(`page-group-button-dropdown-index-first-dropdown-action`),m=d(`page-group-button-dropdown-index-first-dropdown-action-one`),h=d(`page-group-button-dropdown-has-divider-before-dropdown`),g=d(`page-group-button-dropdown-actions-classes`),_=d(`page-group-button-dropdown-disabled`),v=d(`page-group-button-dropdown-dropdown-attributes`),y=d(`page-group-button-dropdown-extra-classes`),b=d(`aloha-table-props`),x=d(`aloha-page`);return l(),s(x,{"page-title":e.pageTitle},{body:u(()=>[o(c,{tag:`p`,html:`_A_GROUP_BUTTON_DROPDOWN_COMPONENT_DESCRIPTION_`}),o(f),o(p),o(m),o(h),o(g),o(_),o(v),o(y),o(b,{data:e.dataProps},null,8,[`data`]),o(b,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var ie=f(ne,[[`render`,re]]);export{ie as default};