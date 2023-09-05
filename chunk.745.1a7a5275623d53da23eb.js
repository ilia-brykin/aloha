"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[745],{5419:(n,o,t)=>{t.r(o),t.d(o,{default:()=>L});var e=t(2147);const a=(0,e._)("span",null,"Click me",-1),d=(0,e._)("li",null,[(0,e._)("button",{class:"a_dropdown__item",type:"button"},"Item 1")],-1),c=(0,e._)("li",{class:"a_dropdown__divider"},null,-1),s=(0,e._)("li",null,[(0,e._)("button",{class:"a_dropdown__item",type:"button"},"Item 2")],-1),r=(0,e._)("li",null,[(0,e._)("a",{class:"a_dropdown__item",href:"#"},"Item 3")],-1),l=(0,e._)("span",null,"Weitere Aktionen2",-1);var p=t(9959),i=t(3588),_=t(9699),u=t(780),A=t(3403);const m={name:"PageDropdownBasic",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownBasic",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};var w=t(1419);const b=(0,w.Z)(m,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_BASIC_USAGE_",props:"actions"},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),D={name:"PageDropdownButtonClass",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  button-class="a_btn a_btn_primary"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-class="a_btn a_btn_success"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-class="a_btn a_btn_info"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownButtonClass",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},O=(0,w.Z)(D,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_CLASS_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_CLASS_DESCRIPTION_",props:"button-text"},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"button-class":"a_btn a_btn_primary"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-class":"a_btn a_btn_success"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-class":"a_btn a_btn_info"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),P={name:"PageDropdownButtonIcons",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  button-icon-left="Gear"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-icon-right="Files"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-icon-left="Duplicate"\n  button-icon-right="Gear"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  :button-icon-right="{ desktop: \'Gear\', mobile: \'Files\' }"\n  button-text="Aloha"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownButtonIcons",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},E=(0,w.Z)(P,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_ICONS_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_ICONS_DESCRIPTION_",props:["button-icon-left","button-icon-right"]},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"button-icon-left":"Gear","button-text":"Aloha"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-icon-right":"Files","button-text":"Aloha"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-icon-left":"Duplicate","button-icon-right":"Gear","button-text":"Aloha"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-icon-right":{desktop:"Gear",mobile:"Files"},"button-text":"Aloha"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),h={name:"PageDropdownButtonLoading",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  button-text="aloha"\n  :button-loading="true"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-text="aloha"\n  :button-loading="true"\n  button-loading-align="left"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-text="aloha"\n  :button-loading="true"\n  button-loading-align="right"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownButtonLoading",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},x=(0,w.Z)(h,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_LOADING_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_LOADING_DESCRIPTION_",props:["button-loading","button-loading-align"]},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"button-text":"aloha","button-loading":!0},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"aloha","button-loading":!0,"button-loading-align":"left"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"aloha","button-loading":!0,"button-loading-align":"right"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),g={name:"PageDropdownButtonText",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-text="Aloha 123"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  :button-text="{ desktop: \'Aloha desktop\', mobile: \'Aloha mobile\' }"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownButtonText",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},R=(0,w.Z)(g,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_TEXT_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_TEXT_DESCRIPTION_",props:"button-text"},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"button-text":"Aloha"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"Aloha 123"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":{desktop:"Aloha desktop",mobile:"Aloha mobile"}},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),T={name:"PageDropdownCaretIcon",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  caret-icon="EjectFill"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  caret-icon="Gear"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownCaretIcon",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},S=(0,w.Z)(T,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_CARET_ICON_HEADER_",description:"_A_DROPDOWN_GROUP_CARET_ICON_DESCRIPTION_",props:"caret-icon"},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"caret-icon":"EjectFill"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"caret-icon":"Gear"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),y={name:"PageDropdownHasCaret",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  :has-caret="true"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  :has-caret="false"\n  button-text="Aloha"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownHasCaret",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},f=(0,w.Z)(y,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_HAS_CARET_HEADER_",description:"_A_DROPDOWN_GROUP_HAS_CARET_DESCRIPTION_",props:"has-caret"},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"has-caret":!0,"button-text":"Aloha"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"has-caret":!1,"button-text":"Aloha"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),I={name:"PageDropdownInBody",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  :in-body="true"\n  button-text="in-body=\'true\'"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  :in-body="false"\n  button-text="in-body=\'false\'"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownInBody",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},k=(0,w.Z)(I,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_IN_BODY_HEADER_",description:"_A_DROPDOWN_GROUP_IN_BODY_DESCRIPTION_",props:"in-body"},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"in-body":!0,"button-text":"in-body='true'"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"in-body":!1,"button-text":"in-body='false'"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),N={name:"PageDropdownTriggers",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  :in-body="true"\n  button-text="in-body=\'true\'"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  :in-body="false"\n  button-text="in-body=\'false\'"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownTriggers",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},C=(0,w.Z)(N,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_TRIGGERS_HEADER_",description:"_A_DROPDOWN_GROUP_TRIGGERS_DESCRIPTION_",props:"triggers"},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"button-text":"click",triggers:["click"]},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"focus",triggers:["focus"]},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"hover",triggers:["hover"]},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"click / focus",triggers:["click","focus"]},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"click / hover",triggers:["click","hover"]},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"focus / hover",triggers:["focus","hover"]},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"click / focus / hover",triggers:["click","focus","hover"]},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]);var W=t(8405);const H={name:"PageDropdown",components:{ADropdown:p.Z,AlohaPage:i.Z,AlohaTableProps:_.Z,ATranslation:u.Z,PageDropdownBasic:b,PageDropdownButtonClass:O,PageDropdownButtonIcons:E,PageDropdownButtonLoading:x,PageDropdownButtonText:R,PageDropdownCaretIcon:S,PageDropdownHasCaret:f,PageDropdownInBody:k,PageDropdownTriggers:C},setup(){const{pageTitle:n}=function(){const n=(0,e.Fl)((()=>(0,W.Gd)({placeholder:"_A_DROPDOWN_COMPONENT_NAME_"})));return{pageTitle:(0,e.Fl)((()=>"ADropdown"+(n.value?` (${n.value})`:"")))}}(),{dataProps:o}={dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]},{dataSlots:t}={dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]},{dataEvents:a}={dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]},{dataExposes:d}={dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]};return{dataEvents:a,dataExposes:d,dataProps:o,dataSlots:t,pageTitle:n,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{},isHidden:!0},{text:"Actions 1",type:"button",callback:()=>{},disabled:!0},{type:"divider"},{type:"divider"},{text:"Actions 2",type:"button",callback:()=>{}},{type:"link",text:"Link 1",href:"#"},{type:"divider"}]}}},L=(0,w.Z)(H,[["render",function(n,o){const t=(0,e.up)("a-translation"),p=(0,e.up)("page-dropdown-basic"),i=(0,e.up)("page-dropdown-button-text"),_=(0,e.up)("page-dropdown-button-class"),u=(0,e.up)("page-dropdown-button-icons"),A=(0,e.up)("page-dropdown-button-loading"),m=(0,e.up)("page-dropdown-in-body"),w=(0,e.up)("page-dropdown-triggers"),b=(0,e.up)("page-dropdown-caret-icon"),D=(0,e.up)("page-dropdown-has-caret"),O=(0,e.up)("a-dropdown"),P=(0,e.up)("aloha-page");return(0,e.wg)(),(0,e.j4)(P,{"page-title":n.pageTitle},{body:(0,e.w5)((()=>[(0,e.Wm)(t,{tag:"p",html:"_A_DROPDOWN_COMPONENT_DESCRIPTION_"}),(0,e.Wm)(p),(0,e.Wm)(i),(0,e.Wm)(_),(0,e.Wm)(u),(0,e.Wm)(A),(0,e.Wm)(m),(0,e.Wm)(w),(0,e.Wm)(b),(0,e.Wm)(D),(0,e.kq)("aloha-table-props("),(0,e.kq)('  :data="dataProps"'),(0,e.kq)(")"),(0,e.kq)(""),(0,e.kq)("aloha-table-props("),(0,e.kq)('  table-label="Slots"'),(0,e.kq)('  :data="dataSlots"'),(0,e.kq)("  :columns=\"['name', 'description']\""),(0,e.kq)(")"),(0,e.kq)(""),(0,e.kq)("aloha-table-props("),(0,e.kq)('  table-label="Events"'),(0,e.kq)('  :data="dataEvents"'),(0,e.kq)("  :columns=\"['name', 'type', 'description']\""),(0,e.kq)(")"),(0,e.kq)(""),(0,e.kq)("aloha-table-props("),(0,e.kq)('  table-label="Exposes"'),(0,e.kq)('  :data="dataExposes"'),(0,e.kq)("  :columns=\"['name', 'type', 'description']\""),(0,e.kq)(")")])),default:(0,e.w5)((()=>[(0,e.Wm)(O,{"button-class":"a_btn a_btn_link","is-render-default":!0},{button:(0,e.w5)((()=>[a])),dropdown:(0,e.w5)((()=>[d,c,s,r])),_:1}),(0,e.Wm)(O,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:n.dropdownActions,"button-text":"_MORE_ACTIONS_"},null,8,["actions"]),(0,e.Wm)(O,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:n.dropdownActions,"button-text":"Weitere Aktionen"},null,8,["actions"]),(0,e.Wm)(O,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:n.dropdownActions,"button-text":"Weitere Aktionen"},null,8,["actions"]),(0,e.Wm)(O,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:n.dropdownActions,"button-text":"Weitere Aktionen"},null,8,["actions"]),(0,e.Wm)(O,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0},{button:(0,e.w5)((()=>[l])),_:1})])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.745.1a7a5275623d53da23eb.js.map