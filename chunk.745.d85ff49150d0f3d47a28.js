"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[745],{9699:(n,o,t)=>{t.d(o,{Z:()=>l});var e=t(2147);const a={class:"a_p_2"};var d=t(4208),c=t(3059),s=t(8405);const r={name:"AlohaTableProps",components:{ATable:d.Z},props:{tableLabel:{type:String,required:!1,default:"Props"},data:{type:Array,required:!0},columns:{type:Array,required:!1,default:()=>["name","type","default","required","description"]}},setup(n){const{columnsLocal:o}=function(n){const o=(0,e.Vh)(n,"columns"),t={name:{label:"_ALOHA_TABLE_COLUMN_NAME_",keyLabel:"name",sortId:"name",width:180,grow:0},description:{label:"_ALOHA_TABLE_COLUMN_DESCRIPTION_",keyLabel:"description",sortId:"description"},type:{label:"_ALOHA_TABLE_COLUMN_TYPE_",keyLabel:"type",sortId:"type",width:180,grow:0},default:{label:"_ALOHA_TABLE_COLUMN_DEFAULT_",keyLabel:"default",sortId:"default",width:180,grow:0},required:{label:"_ALOHA_TABLE_COLUMN_REQUIRED_",keyLabel:"required",sortId:"required",width:100,grow:0,slot:"get",filter:"boolean"}};return{columnsLocal:(0,e.Fl)((()=>{const n=[];return(0,c.forEach)(o.value,(o=>{t[o]&&n.push(t[o])})),n}))}}(n),{dataTranslated:t}=function(n){const o=(0,e.Vh)(n,"data");return{dataTranslated:(0,e.Fl)((()=>{const n=(0,c.cloneDeep)(o.value);return(0,c.forEach)(n,(n=>{n.description=(0,s.Gd)({placeholder:n.description})})),n}))}}(n);return{columnsLocal:o,dataTranslated:t}}},l=(0,t(1419).Z)(r,[["render",function(n,o){const t=(0,e.up)("a-table");return(0,e.wg)(),(0,e.iD)("div",a,[(0,e.Wm)(t,{label:n.tableLabel,columns:n.columnsLocal,data:n.dataTranslated,"is-action-column-visible":!1,"model-sort":"name","is-columns-dnd":!1,"is-sorting-multi-column":!1,"show-first-sorting-sequence-number":!1},null,8,["label","columns","data"])])}]])},8748:(n,o,t)=>{t.r(o),t.d(o,{default:()=>L});var e=t(2147);const a=(0,e._)("span",null,"Click me",-1),d=(0,e._)("li",null,[(0,e._)("button",{class:"a_dropdown__item",type:"button"},"Item 1")],-1),c=(0,e._)("li",{class:"a_dropdown__divider"},null,-1),s=(0,e._)("li",null,[(0,e._)("button",{class:"a_dropdown__item",type:"button"},"Item 2")],-1),r=(0,e._)("li",null,[(0,e._)("a",{class:"a_dropdown__item",href:"#"},"Item 3")],-1),l=(0,e._)("span",null,"Weitere Aktionen2",-1);var p=t(9959),i=t(8455),_=t(9699),u=t(8180),A=t(3403);const m={name:"PageDropdownBasic",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownBasic",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}};var w=t(1419);const b=(0,w.Z)(m,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_BASIC_USAGE_",props:"actions"},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),D={name:"PageDropdownButtonClass",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  button-class="a_btn a_btn_primary"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-class="a_btn a_btn_success"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-class="a_btn a_btn_info"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownButtonClass",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},O=(0,w.Z)(D,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_CLASS_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_CLASS_DESCRIPTION_",props:"button-text"},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"button-class":"a_btn a_btn_primary"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-class":"a_btn a_btn_success"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-class":"a_btn a_btn_info"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),E={name:"PageDropdownButtonIcons",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  button-icon-left="Gear"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-icon-right="Files"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-icon-left="Duplicate"\n  button-icon-right="Gear"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  :button-icon-right="{ desktop: \'Gear\', mobile: \'Files\' }"\n  button-text="Aloha"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownButtonIcons",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},P=(0,w.Z)(E,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_ICONS_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_ICONS_DESCRIPTION_",props:["button-icon-left","button-icon-right"]},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"button-icon-left":"Gear","button-text":"Aloha"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-icon-right":"Files","button-text":"Aloha"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-icon-left":"Duplicate","button-icon-right":"Gear","button-text":"Aloha"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-icon-right":{desktop:"Gear",mobile:"Files"},"button-text":"Aloha"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),h={name:"PageDropdownButtonText",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  button-text="Aloha 123"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownButtonText",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},T=(0,w.Z)(h,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_BUTTON_TEXT_HEADER_",description:"_A_DROPDOWN_GROUP_BUTTON_TEXT_DESCRIPTION_",props:"button-text"},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"button-text":"Aloha"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"Aloha 123"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),R={name:"PageDropdownCaretIcon",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  caret-icon="EjectFill"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  caret-icon="Gear"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownCaretIcon",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},x=(0,w.Z)(R,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_CARET_ICON_HEADER_",description:"_A_DROPDOWN_GROUP_CARET_ICON_DESCRIPTION_",props:"caret-icon"},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"caret-icon":"EjectFill"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"caret-icon":"Gear"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),g={name:"PageDropdownHasCaret",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  :has-caret="true"\n  button-text="Aloha"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  :has-caret="false"\n  button-text="Aloha"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownHasCaret",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},y=(0,w.Z)(g,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_HAS_CARET_HEADER_",description:"_A_DROPDOWN_GROUP_HAS_CARET_DESCRIPTION_",props:"has-caret"},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"has-caret":!0,"button-text":"Aloha"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"has-caret":!1,"button-text":"Aloha"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),f={name:"PageDropdownInBody",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  :in-body="true"\n  button-text="in-body=\'true\'"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  :in-body="false"\n  button-text="in-body=\'false\'"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownInBody",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},S=(0,w.Z)(f,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_IN_BODY_HEADER_",description:"_A_DROPDOWN_GROUP_IN_BODY_DESCRIPTION_",props:"in-body"},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"in-body":!0,"button-text":"in-body='true'"},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"in-body":!1,"button-text":"in-body='false'"},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]),I={name:"PageDropdownTriggers",components:{ADropdown:p.Z,AlohaExample:A.Z},setup(){const{codeHtml:n}={codeHtml:'<a-dropdown\n  :actions="dropdownActions"\n  :in-body="true"\n  button-text="in-body=\'true\'"\n></a-dropdown>\n<a-dropdown\n  class="a_ml_2"\n  :actions="dropdownActions"\n  :in-body="false"\n  button-text="in-body=\'false\'"\n></a-dropdown>'},{codeJs:o}={codeJs:'import ADropdown from "aloha-vue/src/ADropdown/ADropdown";\n    \nexport default {\n  name: "PageDropdownTriggers",\n  components: {\n    ADropdown,\n  },\n  setup() {\n    const dropdownActions = [\n      {\n        text: "Actions 0",\n        type: "button",\n        callback: () => {},\n      },\n      {\n        text: "Actions 1",\n        type: "button",\n        callback: () => {},\n      },\n    ];\n\n    return {\n      dropdownActions,\n    };\n  },\n};'};return{codeHtml:n,codeJs:o,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{}},{text:"Actions 1",type:"button",callback:()=>{}}]}}},k=(0,w.Z)(I,[["render",function(n,o){const t=(0,e.up)("a-dropdown"),a=(0,e.up)("aloha-example");return(0,e.wg)(),(0,e.j4)(a,{"code-html":n.codeHtml,"code-js":n.codeJs,header:"_A_DROPDOWN_GROUP_TRIGGERS_HEADER_",description:"_A_DROPDOWN_GROUP_TRIGGERS_DESCRIPTION_",props:"triggers"},{default:(0,e.w5)((()=>[(0,e.Wm)(t,{actions:n.dropdownActions,"button-text":"click",triggers:["click"]},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"focus",triggers:["focus"]},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"hover",triggers:["hover"]},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"click / focus",triggers:["click","focus"]},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"click / hover",triggers:["click","hover"]},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"focus / hover",triggers:["focus","hover"]},null,8,["actions"]),(0,e.Wm)(t,{class:"a_ml_2",actions:n.dropdownActions,"button-text":"click / focus / hover",triggers:["click","focus","hover"]},null,8,["actions"])])),_:1},8,["code-html","code-js"])}]]);var N=t(8405);const C={name:"PageDropdown",components:{ADropdown:p.Z,AlohaPage:i.Z,AlohaTableProps:_.Z,ATranslation:u.Z,PageDropdownBasic:b,PageDropdownButtonClass:O,PageDropdownButtonIcons:P,PageDropdownButtonText:T,PageDropdownCaretIcon:x,PageDropdownHasCaret:y,PageDropdownInBody:S,PageDropdownTriggers:k},setup(){const{pageTitle:n}=function(){const n=(0,e.Fl)((()=>(0,N.Gd)({placeholder:"_A_DROPDOWN_COMPONENT_NAME_"})));return{pageTitle:(0,e.Fl)((()=>"ADropdown"+(n.value?` (${n.value})`:"")))}}(),{dataProps:o}={dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]},{dataSlots:t}={dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]},{dataEvents:a}={dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]},{dataExposes:d}={dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]};return{dataEvents:a,dataExposes:d,dataProps:o,dataSlots:t,pageTitle:n,dropdownActions:[{text:"Actions 0",type:"button",callback:()=>{},isHidden:!0},{text:"Actions 1",type:"button",callback:()=>{},disabled:!0},{type:"divider"},{type:"divider"},{text:"Actions 2",type:"button",callback:()=>{}},{type:"link",text:"Link 1",href:"#"},{type:"divider"}]}}},L=(0,w.Z)(C,[["render",function(n,o){const t=(0,e.up)("a-translation"),p=(0,e.up)("page-dropdown-basic"),i=(0,e.up)("page-dropdown-button-text"),_=(0,e.up)("page-dropdown-button-class"),u=(0,e.up)("page-dropdown-button-icons"),A=(0,e.up)("page-dropdown-in-body"),m=(0,e.up)("page-dropdown-triggers"),w=(0,e.up)("page-dropdown-caret-icon"),b=(0,e.up)("page-dropdown-has-caret"),D=(0,e.up)("a-dropdown"),O=(0,e.up)("aloha-page");return(0,e.wg)(),(0,e.j4)(O,{"page-title":n.pageTitle},{body:(0,e.w5)((()=>[(0,e.Wm)(t,{tag:"p",html:"_A_DROPDOWN_COMPONENT_DESCRIPTION_"}),(0,e.Wm)(p),(0,e.Wm)(i),(0,e.Wm)(_),(0,e.Wm)(u),(0,e.Wm)(A),(0,e.Wm)(m),(0,e.Wm)(w),(0,e.Wm)(b),(0,e.kq)("aloha-table-props("),(0,e.kq)('  :data="dataProps"'),(0,e.kq)(")"),(0,e.kq)(""),(0,e.kq)("aloha-table-props("),(0,e.kq)('  table-label="Slots"'),(0,e.kq)('  :data="dataSlots"'),(0,e.kq)("  :columns=\"['name', 'description']\""),(0,e.kq)(")"),(0,e.kq)(""),(0,e.kq)("aloha-table-props("),(0,e.kq)('  table-label="Events"'),(0,e.kq)('  :data="dataEvents"'),(0,e.kq)("  :columns=\"['name', 'type', 'description']\""),(0,e.kq)(")"),(0,e.kq)(""),(0,e.kq)("aloha-table-props("),(0,e.kq)('  table-label="Exposes"'),(0,e.kq)('  :data="dataExposes"'),(0,e.kq)("  :columns=\"['name', 'type', 'description']\""),(0,e.kq)(")")])),default:(0,e.w5)((()=>[(0,e.Wm)(D,{"button-class":"a_btn a_btn_link","is-render-default":!0},{button:(0,e.w5)((()=>[a])),dropdown:(0,e.w5)((()=>[d,c,s,r])),_:1}),(0,e.Wm)(D,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:n.dropdownActions,"button-text":"_MORE_ACTIONS_"},null,8,["actions"]),(0,e.Wm)(D,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:n.dropdownActions,"button-text":"Weitere Aktionen"},null,8,["actions"]),(0,e.Wm)(D,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:n.dropdownActions,"button-text":"Weitere Aktionen"},null,8,["actions"]),(0,e.Wm)(D,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0,actions:n.dropdownActions,"button-text":"Weitere Aktionen"},null,8,["actions"]),(0,e.Wm)(D,{class:"ml_3","button-class":"a_btn a_btn_primary","is-render-default":!0},{button:(0,e.w5)((()=>[l])),_:1})])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.745.d85ff49150d0f3d47a28.js.map