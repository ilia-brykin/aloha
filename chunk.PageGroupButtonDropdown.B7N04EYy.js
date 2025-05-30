import{A as b,a as N}from"./chunk.AlohaExample.Dw_9QTIQ.js";import{A as R}from"./chunk.AlohaTableProps.DO67SBBX.js";import{_ as d,g as B,A as I}from"./bundle.index.CE12Gl4M.js";import{U as p,aS as u,e as a,V as l,Z as n,d as O}from"./chunk.vendor.bx9jdKRu.js";import"./chunk.vendor-lodash.DXsmYJeZ.js";import{a as m}from"./chunk.ATable.BsXExFGF.js";import"./chunk.APageTabTitle.D2tthd-2.js";import"./chunk.AlohaHighlightjs.ZYRFUDZw.js";import"./chunk.translations-ar.B6npCTuu.js";import"./chunk.translations-de.Bld6OuMN.js";import"./chunk.translations-en.06Wts6uv.js";import"./chunk.translations-es.C9Oq5Be-.js";import"./chunk.translations-fr.BN43yRJE.js";import"./chunk.translations-hr.ttlHkPRA.js";import"./chunk.translations-it.EwWHRwIB.js";import"./chunk.translations-ru.B62azy5f.js";function E(){return{codeHtml:`<a-group-button-dropdown
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
></a-group-button-dropdown>`}}function S(){return{codeJs:`import { 
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
};`}}const g={name:"PageGroupButtonDropdownActionsClasses",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=E(),{codeJs:e}=S();return{actions:[{text:"Action 1",type:"button",callback:()=>{}},{text:"Action 2",type:"button",callback:()=>{}},{text:"Action 3",type:"button",callback:()=>{}},{text:"Action 4",type:"button",callback:()=>{}},{text:"Action 5",type:"button",callback:()=>{}},{text:"Action 6",type:"button",callback:()=>{}}],codeHtml:t,codeJs:e}}};function U(t,e,c,s,i,_){const o=a("a-group-button-dropdown"),r=a("aloha-example");return l(),p(r,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_GROUP_BUTTON_DROPDOWN_GROUP_ACTIONS_CLASSES_HEADER_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_ACTIONS_CLASSES_DESCRIPTION_",props:["actions-classes"]},{default:u(()=>[n(o,{actions:t.actions,"index-first-dropdown-action":6,"index-first-dropdown-action-mobile":6,"actions-classes":["a_btn a_btn_primary","a_btn a_btn_secondary","a_btn a_btn_info","a_btn a_btn_info","a_btn a_btn_info","a_btn a_btn_info"]},null,8,["actions"]),n(o,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":3,"index-first-dropdown-action-mobile":3,"actions-classes":["a_btn a_btn_primary","a_btn a_btn_secondary","a_btn a_btn_secondary","a_btn a_btn_primary"]},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const k=d(g,[["render",U]]);function C(){return{codeHtml:`<a-group-button-dropdown
  :actions="actions"
></a-group-button-dropdown>`}}function G(){return{codeJs:`import { 
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
};`}}const h={name:"PageGroupButtonDropdownBasic",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=C(),{codeJs:e}=G();return{actions:[{text:"Action 1",type:"button",callback:()=>{}},{text:"Action 2",type:"button",callback:()=>{}},{text:"Action 3",type:"button",callback:()=>{}}],codeHtml:t,codeJs:e}}};function H(t,e,c,s,i,_){const o=a("a-group-button-dropdown"),r=a("aloha-example");return l(),p(r,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_BASIC_USAGE_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_BASIC_DESCRIPTION_",props:"actions"},{default:u(()=>[n(o,{actions:t.actions},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const $=d(h,[["render",H]]);function J(){return{codeHtml:`<a-group-button-dropdown
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
></a-group-button-dropdown>`}}function L(){return{codeJs:`import { 
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
};`}}const j={name:"PageGroupButtonDropdownDisabled",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=J(),{codeJs:e}=L();return{actions:[{text:"Action 1",type:"button",callback:()=>{}},{text:"Action 2",type:"button",callback:()=>{}},{text:"Action 3",type:"button",callback:()=>{}},{text:"Action 4",type:"button",callback:()=>{}},{text:"Action 5",type:"button",callback:()=>{}},{text:"Action 6",type:"button",callback:()=>{}}],codeHtml:t,codeJs:e}}};function q(t,e,c,s,i,_){const o=a("a-group-button-dropdown"),r=a("aloha-example");return l(),p(r,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_GROUP_BUTTON_DROPDOWN_GROUP_DISABLED_HEADER_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_DISABLED_DESCRIPTION_",props:["disabled"]},{default:u(()=>[n(o,{actions:t.actions,"index-first-dropdown-action":2,"index-first-dropdown-action-mobile":2,disabled:!0},null,8,["actions"]),n(o,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1,disabled:!0},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const W=d(j,[["render",q]]);function v(){return{codeHtml:`<a-group-button-dropdown
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
></a-group-button-dropdown>`}}function F(){return{codeJs:`import { 
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
};`}}const X={name:"PageGroupButtonDropdownDropdownAttributes",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=v(),{codeJs:e}=F();return{actions:[{text:"Action 1",type:"button",callback:()=>{}},{text:"Action 2",type:"button",callback:()=>{}},{text:"Action 3",type:"button",callback:()=>{}},{text:"Action 4",type:"button",callback:()=>{}},{text:"Action 5",type:"button",callback:()=>{}},{text:"Action 6",type:"button",callback:()=>{}}],codeHtml:t,codeJs:e}}};function M(t,e,c,s,i,_){const o=a("a-group-button-dropdown"),r=a("aloha-example");return l(),p(r,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_GROUP_BUTTON_DROPDOWN_GROUP_DROPDOWN_ATTRIBUTES_HEADER_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_DROPDOWN_ATTRIBUTES_DESCRIPTION_",props:["dropdown-attributes"]},{default:u(()=>[n(o,{actions:t.actions,"index-first-dropdown-action":2,"index-first-dropdown-action-mobile":2,"dropdown-attributes":{buttonText:"_A_GROUP_BUTTON_DROPDOWN_OTHER_ACTIONS_",buttonClass:"a_btn a_btn_primary"}},null,8,["actions"]),n(o,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1,"dropdown-attributes":{buttonText:"_A_GROUP_BUTTON_DROPDOWN_OTHER_ACTIONS_",buttonIconLeft:"Gear"}},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const V=d(X,[["render",M]]);function K(){return{codeHtml:`<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="2"
  :index-first-dropdown-action-mobile="2"
></a-group-button-dropdown>`}}function Y(){return{codeJs:`import { 
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
};`}}const Z={name:"PageGroupButtonDropdownExtraClasses",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=K(),{codeJs:e}=Y();return{actions:[{text:"Action 1",type:"button",callback:()=>{},classExtra:"test_action1"},{text:"Action 2",type:"button",callback:()=>{},classExtra:"test_action2"},{text:"Action 3",type:"button",callback:()=>{},classExtra:"test_action3"},{text:"Action 4",type:"button",callback:()=>{},classExtra:"test_action4"},{text:"Action 5",type:"button",callback:()=>{},classExtra:"test_action5"},{text:"Action 6",type:"button",callback:()=>{},classExtra:"test_action6"}],codeHtml:t,codeJs:e}}};function z(t,e,c,s,i,_){const o=a("a-group-button-dropdown"),r=a("aloha-example");return l(),p(r,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_GROUP_BUTTON_DROPDOWN_GROUP_EXTRA_CLASSES_HEADER_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_EXTRA_CLASSES_DESCRIPTION_",props:["actions.classExtra"]},{default:u(()=>[n(o,{actions:t.actions,"index-first-dropdown-action":2,"index-first-dropdown-action-mobile":2},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const Q=d(Z,[["render",z]]);function tt(){return{codeHtml:`<a-group-button-dropdown
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
></a-group-button-dropdown>`}}function ot(){return{codeJs:`import { 
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
};`}}const nt={name:"PageGroupButtonDropdownHasDividerBeforeDropdown",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=tt(),{codeJs:e}=ot();return{actions:[{text:"Action 1",type:"button",classButton:"a_btn a_btn_primary",callback:()=>{}},{text:"Action 2",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 3",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 4",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 5",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 6",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}}],codeHtml:t,codeJs:e}}};function et(t,e,c,s,i,_){const o=a("a-group-button-dropdown"),r=a("aloha-example");return l(),p(r,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_GROUP_BUTTON_DROPDOWN_GROUP_HAS_DIVIDER_BEFORE_DROPDOWN_HEADER_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_HAS_DIVIDER_BEFORE_DROPDOWN_DESCRIPTION_",props:["has-divider-before-dropdown"]},{default:u(()=>[n(o,{actions:t.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1,"has-divider-before-dropdown":!0},null,8,["actions"]),n(o,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1,"has-divider-before-dropdown":!1},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const at=d(nt,[["render",et]]);function ct(){return{codeHtml:`<a-group-button-dropdown
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
};`}}const st={name:"PageGroupButtonDropdownIndexFirstDropdownAction",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=ct(),{codeJs:e}=rt();return{actions:[{text:"Action 1",type:"button",classButton:"a_btn a_btn_primary",callback:()=>{}},{text:"Action 2",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 3",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 4",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 5",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 6",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}}],codeHtml:t,codeJs:e}}};function it(t,e,c,s,i,_){const o=a("a-group-button-dropdown"),r=a("aloha-example");return l(),p(r,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_GROUP_BUTTON_DROPDOWN_GROUP_INDEX_FIRST_DROPDOWN_ACTION_HEADER_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_INDEX_FIRST_DROPDOWN_ACTION_DESCRIPTION_",props:["index-first-dropdown-action","index-first-dropdown-action-mobile","actions.classButton"]},{default:u(()=>[n(o,{actions:t.actions,"index-first-dropdown-action":-1,"index-first-dropdown-action-mobile":-1},null,8,["actions"]),n(o,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":0,"index-first-dropdown-action-mobile":0},null,8,["actions"]),n(o,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,["actions"]),n(o,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":2,"index-first-dropdown-action-mobile":2},null,8,["actions"]),n(o,{class:"a_mt_3",actions:t.actions,"index-first-dropdown-action":3,"index-first-dropdown-action-mobile":3},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const _t=d(st,[["render",it]]);function dt(){return{codeHtml:`<a-group-button-dropdown
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
></a-group-button-dropdown>`}}function pt(){return{codeJs:`import { 
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
};`}}const ut={name:"PageGroupButtonDropdownIndexFirstDropdownActionOne",components:{AGroupButtonDropdown:m,AlohaExample:b},setup(){const{codeHtml:t}=dt(),{codeJs:e}=pt();return{actions1:[{text:"Action 1",type:"button",classButton:"a_btn a_btn_primary",callback:()=>{}}],actions2:[{text:"Action 1",type:"button",classButton:"a_btn a_btn_primary",callback:()=>{}},{text:"Action 2",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}}],actions3:[{text:"Action 1",type:"button",classButton:"a_btn a_btn_primary",callback:()=>{}},{text:"Action 2",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 3",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}}],actions6:[{text:"Action 1",type:"button",classButton:"a_btn a_btn_primary",callback:()=>{}},{text:"Action 2",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 3",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 4",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 5",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}},{text:"Action 6",type:"button",classButton:"a_btn a_btn_secondary",callback:()=>{}}],codeHtml:t,codeJs:e}}};function lt(t,e,c,s,i,_){const o=a("a-group-button-dropdown"),r=a("aloha-example");return l(),p(r,{"code-html":t.codeHtml,"code-js":t.codeJs,header:"_A_GROUP_BUTTON_DROPDOWN_GROUP_INDEX_FIRST_DROPDOWN_ACTION_ONE_HEADER_",description:"_A_GROUP_BUTTON_DROPDOWN_GROUP_INDEX_FIRST_DROPDOWN_ACTION_ONE_DESCRIPTION_",props:["index-first-dropdown-action","index-first-dropdown-action-mobile","actions.classButton"]},{default:u(()=>[n(o,{actions:t.actions1,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,["actions"]),n(o,{class:"a_mt_3",actions:t.actions2,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,["actions"]),n(o,{class:"a_mt_3",actions:t.actions3,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,["actions"]),n(o,{class:"a_mt_3",actions:t.actions6,"index-first-dropdown-action":1,"index-first-dropdown-action-mobile":1},null,8,["actions"])]),_:1},8,["code-html","code-js"])}const bt=d(ut,[["render",lt]]);function mt(){return{dataEvents:[{name:"click",description:"_A_BUTTON_EVENTS_CLICK_DESCRIPTION_",type:"Function"}]}}function Ot(){return{dataExposes:[{name:"buttonRef",description:"_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_",type:"Object"},{name:"containerRef",description:"_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_",type:"Object"},{name:"isButtonVisible",description:"_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_",type:"Boolean"},{name:"isOpen",description:"_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_",type:"Boolean"},{name:"toggleButton",description:"_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_",type:"Function"}]}}function At(){const t=O(()=>B({placeholder:"_A_BUTTON_DROPDOWN_COMPONENT_COMPONENT_NAME_"}));return{pageTitle:O(()=>`AGroupButtonDropdown${t.value?` (${t.value})`:""}`)}}function Tt(){return{dataProps:[{name:"aria-disabled",description:"_A_BUTTON_PROPS_ARIA_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"aria-label",description:"_A_BUTTON_PROPS_ARIA_LABEL_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"attributes",description:"_A_BUTTON_PROPS_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"class",description:"_A_BUTTON_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"disabled",description:"_A_BUTTON_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"extra",description:"_A_BUTTON_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"html",description:"_A_BUTTON_PROPS_HTML_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"html-screen-reader",description:"_A_BUTTON_PROPS_HTML_SCREEN_READER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"icon-attributes",description:"_A_BUTTON_PROPS_ICON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"icon-class",description:"_A_BUTTON_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-left",description:"_A_BUTTON_PROPS_ICON_LEFT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"icon-right",description:"_A_BUTTON_PROPS_ICON_RIGHT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"icon-tag",description:"_A_BUTTON_PROPS_ICON_TAG_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_BUTTON_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_btn_")',required:!1},{name:"is-title-html",description:"_A_BUTTON_PROPS_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"loading",description:"_A_BUTTON_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"loading-align",description:"_A_BUTTON_PROPS_LOADING_ALIGN_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"loading-class",description:"_A_BUTTON_PROPS_LOADING_CLASS_DESCRIPTION_",type:"String / Object",default:"a_spinner_small",required:!1},{name:"prevent",description:"_A_BUTTON_PROPS_PREVENT_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"safe-html",description:"_A_BUTTON_PROPS_SAFE_HTML_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"safe-html-screen-reader",description:"_A_BUTTON_PROPS_SAFE_HTML_SCREEN_READER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"stop",description:"_A_BUTTON_PROPS_STOP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"tabindex",description:"_A_BUTTON_PROPS_TABINDEX_DESCRIPTION_",type:"Number / String",default:void 0,required:!1},{name:"tag",description:"_A_BUTTON_PROPS_TAG_DESCRIPTION_",type:"String",default:"button",required:!1},{name:"text",description:"_A_BUTTON_PROPS_TEXT_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"text-after",description:"_A_BUTTON_PROPS_TEXT_AFTER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"text-aria-hidden",description:"_A_BUTTON_PROPS_TEXT_ARIA_HIDDEN_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"text-before",description:"_A_BUTTON_PROPS_TEXT_BEFORE_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"text-class",description:"_A_BUTTON_PROPS_TEXT_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-screen-reader",description:"_A_BUTTON_PROPS_TEXT_SCREEN_READER_DESCRIPTION_",type:"String / Number / Object",default:void 0,required:!1},{name:"title",description:"_A_BUTTON_PROPS_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"title-placement",description:"_A_BUTTON_PROPS_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1},{name:"type",description:"_A_BUTTON_PROPS_TYPE_DESCRIPTION_",type:"String",default:"button",required:!1}]}}function ft(){return{dataSlots:[{name:"buttonAppend",description:"_A_BUTTON_SLOT_BUTTON_APPEND_DESCRIPTION_"},{name:"buttonPrepend",description:"_A_BUTTON_SLOT_BUTTON_PREPEND_DESCRIPTION_"},{name:"buttonTitle",description:"_A_BUTTON_SLOT_BUTTON_TITLE_DESCRIPTION_"},{name:"default",description:"_A_BUTTON_SLOT_DEFAULT_DESCRIPTION_"}]}}const Pt={name:"PageGroupButtonDropdown",components:{AlohaPage:N,AlohaTableProps:R,ATranslation:I,PageGroupButtonDropdownActionsClasses:k,PageGroupButtonDropdownBasic:$,PageGroupButtonDropdownDisabled:W,PageGroupButtonDropdownDropdownAttributes:V,PageGroupButtonDropdownExtraClasses:Q,PageGroupButtonDropdownHasDividerBeforeDropdown:at,PageGroupButtonDropdownIndexFirstDropdownAction:_t,PageGroupButtonDropdownIndexFirstDropdownActionOne:bt},setup(){const{pageTitle:t}=At(),{dataProps:e}=Tt(),{dataSlots:c}=ft(),{dataEvents:s}=mt(),{dataExposes:i}=Ot();return{dataExposes:i,dataEvents:s,dataProps:e,dataSlots:c,pageTitle:t}}};function xt(t,e,c,s,i,_){const o=a("a-translation"),r=a("page-group-button-dropdown-basic"),A=a("page-group-button-dropdown-index-first-dropdown-action"),T=a("page-group-button-dropdown-index-first-dropdown-action-one"),f=a("page-group-button-dropdown-has-divider-before-dropdown"),P=a("page-group-button-dropdown-actions-classes"),x=a("page-group-button-dropdown-disabled"),w=a("page-group-button-dropdown-dropdown-attributes"),D=a("page-group-button-dropdown-extra-classes"),y=a("aloha-page");return l(),p(y,{"page-title":t.pageTitle},{body:u(()=>[n(o,{tag:"p",html:"_A_GROUP_BUTTON_DROPDOWN_COMPONENT_DESCRIPTION_"}),n(r),n(A),n(T),n(f),n(P),n(x),n(w),n(D)]),_:1},8,["page-title"])}const $t=d(Pt,[["render",xt]]);export{$t as default};
