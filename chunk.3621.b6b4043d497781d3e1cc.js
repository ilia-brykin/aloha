"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[3621],{1347:(n,o,t)=>{t.r(o),t.d(o,{default:()=>H});var e=t(6365);const a=(0,e.Lk)("span",null,"Click me",-1),d=(0,e.Lk)("li",null,[(0,e.Lk)("button",{class:"a_dropdown__item",type:"button"},"Item 1")],-1),r=(0,e.Lk)("li",{class:"a_dropdown__divider"},null,-1),c=(0,e.Lk)("li",null,[(0,e.Lk)("button",{class:"a_dropdown__item",type:"button"},"Item 2")],-1),s=(0,e.Lk)("li",null,[(0,e.Lk)("a",{class:"a_dropdown__item",href:"#"},"Item 3")],-1),i=(0,e.Lk)("span",null,"Weitere Aktionen2",-1);var _=t(4181),l=t(8310),p=t(635),u=t(7791),A=t(1912);const O={name:"PageDropdownBasic",components:{ADropdown:_.A,AlohaExample:A.A},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownBasic",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};var b=t(6262);const D=(0,b.A)(O,[["render",function(n,o){const t=(0,e.g2)("a-dropdown"),a=(0,e.g2)("aloha-example");return(0,e.uX)(),(0,e.Wv)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_BASIC_USAGE_",props:"actions"},{default:(0,e.k6)((()=>[(0,e.bF)(t,{actions:n.dropdownActions},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),P={name:"PageDropdownButtonClass",components:{ADropdown:_.A,AlohaExample:A.A},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  button-class="a_btn a_btn_primary"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-class="a_btn a_btn_success"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-class="a_btn a_btn_info"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownButtonClass",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},m=(0,b.A)(P,[["render",function(n,o){const t=(0,e.g2)("a-dropdown"),a=(0,e.g2)("aloha-example");return(0,e.uX)(),(0,e.Wv)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_CLASS_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_CLASS_DESCRIPTION_",props:"button-text"},{default:(0,e.k6)((()=>[(0,e.bF)(t,{actions:n.dropdownActions,"button-class":"a_btn a_btn_primary"},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-class":"a_btn a_btn_success"},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-class":"a_btn a_btn_info"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),w={name:"PageDropdownButtonIcons",components:{ADropdown:_.A,AlohaExample:A.A},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  button-icon-left="Gear"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-icon-right="Files"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-icon-left="Duplicate"\n  button-icon-right="Gear"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  :button-icon-right="{ desktop: \'Gear\', mobile: \'Files\' }"\n  button-text="Aloha"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownButtonIcons",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},R=(0,b.A)(w,[["render",function(n,o){const t=(0,e.g2)("a-dropdown"),a=(0,e.g2)("aloha-example");return(0,e.uX)(),(0,e.Wv)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_ICONS_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_ICONS_DESCRIPTION_",props:["button-icon-left","button-icon-right"]},{default:(0,e.k6)((()=>[(0,e.bF)(t,{actions:n.dropdownActions,"button-icon-left":"Gear","button-text":"Aloha"},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-icon-right":"Files","button-text":"Aloha"},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-icon-left":"Duplicate","button-icon-right":"Gear","button-text":"Aloha"},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-icon-right":{desktop:"Gear",mobile:"Files"},"button-text":"Aloha"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),T={name:"PageDropdownButtonLoading",components:{ADropdown:_.A,AlohaExample:A.A},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  button-text="aloha"\n  :button-loading="true"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-text="aloha"\n  :button-loading="true"\n  button-loading-align="left"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-text="aloha"\n  :button-loading="true"\n  button-loading-align="right"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownButtonLoading",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},N=(0,b.A)(T,[["render",function(n,o){const t=(0,e.g2)("a-dropdown"),a=(0,e.g2)("aloha-example");return(0,e.uX)(),(0,e.Wv)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_LOADING_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_LOADING_DESCRIPTION_",props:["button-loading","button-loading-align"]},{default:(0,e.k6)((()=>[(0,e.bF)(t,{actions:n.dropdownActions,"button-text":"aloha","button-loading":!0},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"aloha","button-loading":!0,"button-loading-align":"left"},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"aloha","button-loading":!0,"button-loading-align":"right"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),S={name:"PageDropdownButtonText",components:{ADropdown:_.A,AlohaExample:A.A},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-text="Aloha 123"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  :button-text="{ desktop: \'Aloha desktop\', mobile: \'Aloha mobile\' }"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownButtonText",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},I=(0,b.A)(S,[["render",function(n,o){const t=(0,e.g2)("a-dropdown"),a=(0,e.g2)("aloha-example");return(0,e.uX)(),(0,e.Wv)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_TEXT_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_TEXT_DESCRIPTION_",props:"button-text"},{default:(0,e.k6)((()=>[(0,e.bF)(t,{actions:n.dropdownActions,"button-text":"Aloha"},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"Aloha 123"},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":{desktop:"Aloha desktop",mobile:"Aloha mobile"}},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),E={name:"PageDropdownCaretIcon",components:{ADropdown:_.A,AlohaExample:A.A},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  caret-icon="EjectFill"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  caret-icon="Gear"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownCaretIcon",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},g=(0,b.A)(E,[["render",function(n,o){const t=(0,e.g2)("a-dropdown"),a=(0,e.g2)("aloha-example");return(0,e.uX)(),(0,e.Wv)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_CARET_ICON_HEADER_",description:"_A_DROPDOWN_GROUP_CARET_ICON_DESCRIPTION_",props:"caret-icon"},{default:(0,e.k6)((()=>[(0,e.bF)(t,{actions:n.dropdownActions,"caret-icon":"EjectFill"},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"caret-icon":"Gear"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),y={name:"PageDropdownHasCaret",components:{ADropdown:_.A,AlohaExample:A.A},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  :has-caret="true"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  :has-caret="false"\n  button-text="Aloha"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownHasCaret",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},h=(0,b.A)(y,[["render",function(n,o){const t=(0,e.g2)("a-dropdown"),a=(0,e.g2)("aloha-example");return(0,e.uX)(),(0,e.Wv)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_HAS_CARET_HEADER_",description:"_A_DROPDOWN_GROUP_HAS_CARET_DESCRIPTION_",props:"has-caret"},{default:(0,e.k6)((()=>[(0,e.bF)(t,{actions:n.dropdownActions,"has-caret":!0,"button-text":"Aloha"},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"has-caret":!1,"button-text":"Aloha"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),f={name:"PageDropdownInBody",components:{ADropdown:_.A,AlohaExample:A.A},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  :in-body="true"\n  button-text="in-body=\'true\'"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  :in-body="false"\n  button-text="in-body=\'false\'"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownInBody",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},x=(0,b.A)(f,[["render",function(n,o){const t=(0,e.g2)("a-dropdown"),a=(0,e.g2)("aloha-example");return(0,e.uX)(),(0,e.Wv)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_IN_BODY_HEADER_",description:"_A_DROPDOWN_GROUP_IN_BODY_DESCRIPTION_",props:"in-body"},{default:(0,e.k6)((()=>[(0,e.bF)(t,{actions:n.dropdownActions,"in-body":!0,"button-text":"in-body='true'"},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"in-body":!1,"button-text":"in-body='false'"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),C={name:"PageDropdownTriggers",components:{ADropdown:_.A,AlohaExample:A.A},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  :in-body="true"\n  button-text="in-body=\'true\'"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  :in-body="false"\n  button-text="in-body=\'false\'"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownTriggers",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},k=(0,b.A)(C,[["render",function(n,o){const t=(0,e.g2)("a-dropdown"),a=(0,e.g2)("aloha-example");return(0,e.uX)(),(0,e.Wv)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_TRIGGERS_HEADER_",description:"_A_DROPDOWN_GROUP_TRIGGERS_DESCRIPTION_",props:"triggers"},{default:(0,e.k6)((()=>[(0,e.bF)(t,{actions:n.dropdownActions,"button-text":"click",triggers:["click"]},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"focus",triggers:["focus"]},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"hover",triggers:["hover"]},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"click / focus",triggers:["click","focus"]},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"click / hover",triggers:["click","hover"]},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"focus / hover",triggers:["focus","hover"]},null,8,["actions"]),(0,e.bF)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"click / focus / hover",triggers:["click","focus","hover"]},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]);var W=t(2187),B=t(5986);const v={name:"PageDropdown",components:{ADropdown:_.A,AlohaPage:l.A,AlohaTableProps:p.A,ATranslation:u.A,PageDropdownBasic:D,PageDropdownButtonClass:m,PageDropdownButtonIcons:R,PageDropdownButtonLoading:N,PageDropdownButtonText:I,PageDropdownCaretIcon:g,PageDropdownHasCaret:h,PageDropdownInBody:x,PageDropdownTriggers:k},setup(){const{pageTitle:n}=function(){const n=(0,e.EW)((()=>(0,W.a1)({placeholder:"_A_DROPDOWN_COMPONENT_NAME_"})));return{pageTitle:(0,e.EW)((()=>"ADropdown"+(n.value?` (${n.value})`:"")))}}(),{dataProps:o}={dataProps:[{name:"actions",description:"_A_DROPDOWN_PROPS_ACTIONS_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-attributes",description:"_A_DROPDOWN_PROPS_BUTTON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"button-class",description:"_A_DROPDOWN_PROPS_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_secondary",required:!1},{name:"button-icon-attributes",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"button-icon-class",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-icon-left",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_LEFT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"button-icon-right",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_RIGHT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"button-icon-tag",description:"_A_DROPDOWN_PROPS_BUTTON_ICON_TAG_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-is-title-html",description:"_A_DROPDOWN_PROPS_BUTTON_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-loading",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"button-loading-align",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_ALIGN_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"button-loading-class",description:"_A_DROPDOWN_PROPS_BUTTON_LOADING_CLASS_DESCRIPTION_",type:"String / Object",default:"a_spinner_small",required:!1},{name:"button-prevent",description:"_A_DROPDOWN_PROPS_BUTTON_PREVENT_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-stop",description:"_A_DROPDOWN_PROPS_BUTTON_STOP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"button-tag",description:"_A_DROPDOWN_PROPS_BUTTON_TAG_DESCRIPTION_",type:"String",default:"button",required:!1},{name:"button-text",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-text-aria-hidden",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_ARIA_HIDDEN_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"button-text-class",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"button-text-screen-reader",description:"_A_DROPDOWN_PROPS_BUTTON_TEXT_SCREEN_READER_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-title",description:"_A_DROPDOWN_PROPS_BUTTON_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"button-title-placement",description:"_A_DROPDOWN_PROPS_BUTTON_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1},{name:"caret-icon",description:"_A_DROPDOWN_PROPS_CARET_ICON_DESCRIPTION_",type:"String",default:"ChevronDown",required:!1},{name:"class",description:"_A_DROPDOWN_PROPS_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"disabled",description:"_A_DROPDOWN_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dropdown-attributes",description:"_A_DROPDOWN_PROPS_DROPDOWN_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"dropdown-class",description:"_A_DROPDOWN_PROPS_DROPDOWN_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"dropdown-render-default",description:"_A_DROPDOWN_PROPS_DROPDOWN_RENDER_DEFAULT_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dropdown-tag",description:"_A_DROPDOWN_PROPS_DROPDOWN_TAG_DESCRIPTION_",type:"String",default:"ul",required:!1},{name:"elements-for-arrows",description:"_A_DROPDOWN_PROPS_ELEMENTS_FOR_ARROWS_DESCRIPTION_",type:"String",default:B.U,required:!1},{name:"extra",description:"_A_DROPDOWN_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"floating-flip",description:"_A_DROPDOWN_PROPS_FLOATING_FLIP_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"floating-shift",description:"_A_DROPDOWN_PROPS_FLOATING_SHIFT_DESCRIPTION_",type:"Object",default:"() => ({ use: true, crossAxis: true, padding: 20 })",required:!1},{name:"has-caret",description:"_A_DROPDOWN_PROPS_HAS_CARET_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"id",description:"_A_DROPDOWN_PROPS_ID_DESCRIPTION_",type:"String",default:'() => uniqueId("a_dropdown_btn_")',required:!1},{name:"in-body",description:"_A_DROPDOWN_PROPS_IN_BODY_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-close-by-click-inside",description:"_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_INSIDE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-close-by-click-outside",description:"_A_DROPDOWN_PROPS_IS_CLOSE_BY_CLICK_OUTSIDE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide-without-action-and-slot",description:"_A_DROPDOWN_PROPS_IS_HIDE_WITHOUT_ACTION_AND_SLOT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-list-width-same-with-button",description:"_A_DROPDOWN_PROPS_IS_LIST_WIDTH_SAME_WITH_BUTTON_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"lock-arrows-navigation",description:"_A_DROPDOWN_PROPS_LOCK_ARROWS_NAVIGATION_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"lock-tab-navigation",description:"_A_DROPDOWN_PROPS_LOCK_TAB_NAVIGATION_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"persist",description:"_A_DROPDOWN_PROPS_PERSIST_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"placement",description:"_A_DROPDOWN_PROPS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom-start",required:!1},{name:"popper-container-id",description:"_A_DROPDOWN_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_",type:"String",default:"a_tooltip_container",required:!1},{name:"triggers",description:"_A_DROPDOWN_PROPS_TRIGGERS_DESCRIPTION_",type:"Array",default:'() => ["click"]',required:!1},{name:"use-escape",description:"_A_DROPDOWN_PROPS_USE_ESCAPE_DESCRIPTION_",type:"Boolean",default:!0,required:!1}]},{dataSlots:t}={dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]},{dataEvents:a}={dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]},{dataExposes:d}={dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]};return{dataEvents:a,dataExposes:d,dataProps:o,dataSlots:t,pageTitle:n,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{},isHidden:!0},{text:"Actions 1",type:"button",callback:()=>{},disabled:!0},{type:"divider"},{type:"divider"},{text:"Actions 2",type:"button",callback:()=>{}},{type:"link",text:"Link 1",href:"#"},{type:"divider"}]}}},H=(0,b.A)(v,[["render",function(n,o){const t=(0,e.g2)("a-translation"),_=(0,e.g2)("page-dropdown-basic"),l=(0,e.g2)("page-dropdown-button-text"),p=(0,e.g2)("page-dropdown-button-class"),u=(0,e.g2)("page-dropdown-button-icons"),A=(0,e.g2)("page-dropdown-button-loading"),O=(0,e.g2)("page-dropdown-in-body"),b=(0,e.g2)("page-dropdown-triggers"),D=(0,e.g2)("page-dropdown-caret-icon"),P=(0,e.g2)("page-dropdown-has-caret"),m=(0,e.g2)("aloha-table-props"),w=(0,e.g2)("a-dropdown"),R=(0,e.g2)("aloha-page");return(0,e.uX)(),(0,e.Wv)(R,{"page-title":n.pageTitle},{body:(0,e.k6)((()=>[(0,e.bF)(t,{tag:"p",html:"_A_DROPDOWN_COMPONENT_DESCRIPTION_"}),(0,e.bF)(_),(0,e.bF)(l),(0,e.bF)(p),(0,e.bF)(u),(0,e.bF)(A),(0,e.bF)(O),(0,e.bF)(b),(0,e.bF)(D),(0,e.bF)(P),(0,e.bF)(m,{data:n.dataProps},null,8,["data"]),(0,e.Q3)(""),(0,e.Q3)("aloha-table-props("),(0,e.Q3)('  table-label="Slots"'),(0,e.Q3)('  :data="dataSlots"'),(0,e.Q3)("  :columns=\"['name', 'description']\""),(0,e.Q3)(")"),(0,e.Q3)(""),(0,e.Q3)("aloha-table-props("),(0,e.Q3)('  table-label="Events"'),(0,e.Q3)('  :data="dataEvents"'),(0,e.Q3)("  :columns=\"['name', 'type', 'description']\""),(0,e.Q3)(")"),(0,e.Q3)(""),(0,e.Q3)("aloha-table-props("),(0,e.Q3)('  table-label="Exposes"'),(0,e.Q3)('  :data="dataExposes"'),(0,e.Q3)("  :columns=\"['name', 'type', 'description']\""),(0,e.Q3)(")")])),default:(0,e.k6)((()=>[(0,e.bF)(w,{"button-class":"a_btn a_btn_link","is-render-default":!0},{button:(0,e.k6)((()=>[a])),dropdown:(0,e.k6)((()=>[d,r,c,s])),_:1}),(0,e.bF)(w,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:n.dropdownActions,"button-text":"_MORE_ACTIONS_"},null,8,["actions"]),(0,e.bF)(w,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:n.dropdownActions,"button-text":"Weitere Aktionen"},null,8,["actions"]),(0,e.bF)(w,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:n.dropdownActions,"button-text":"Weitere Aktionen"},null,8,["actions"]),(0,e.bF)(w,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:n.dropdownActions,"button-text":"Weitere Aktionen"},null,8,["actions"]),(0,e.bF)(w,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0},{button:(0,e.k6)((()=>[i])),_:1})])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.3621.b6b4043d497781d3e1cc.js.map