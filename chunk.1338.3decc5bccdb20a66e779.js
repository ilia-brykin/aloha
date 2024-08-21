"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[1338],{7061:(e,t,l)=>{l.d(t,{A:()=>i});var n=l(6365);const a={class:"a_p_2"};var o=l(5407),d=l(2187),_=l(2543);const r={name:"AlohaTableTranslate",components:{ATable:o.A},props:{data:{type:Array,required:!0}},setup(e){const{columns:t}={columns:[{id:"placeholder",label:"_ALOHA_TABLE_COLUMN_TRANSLATE_PLACEHOLDER_",keyLabel:"placeholder",sortId:"placeholder"},{id:"translate",label:"_ALOHA_TABLE_COLUMN_TRANSLATE_",keyLabel:"translate",sortId:"translate"}]},{dataTranslated:l}=function(e){const t=(0,n.lW)(e,"data");return{dataTranslated:(0,n.EW)((()=>{const e=[];return(0,_.forEach)(t.value,(t=>{e.push({placeholder:t,translate:(0,d.a1)({placeholder:t})})})),e}))}}(e);return{columns:t,dataTranslated:l}}},i=(0,l(6262).A)(r,[["render",function(e,t){const l=(0,n.g2)("a-table");return(0,n.uX)(),(0,n.CE)("div",a,[(0,n.bF)(l,{label:"_ALOHA_TABLE_TRANSLATE_LABEL_",columns:e.columns,data:e.dataTranslated,"is-action-column-visible":!1,"model-sort":"name","is-columns-dnd":!1,"is-sorting-multi-column":!1,"show-first-sorting-sequence-number":!1},null,8,["columns","data"])])}]])},4316:(e,t,l)=>{l.r(t),l.d(t,{default:()=>C});var n=l(6365),a=l(8310),o=l(635),d=l(7061),_=l(7791),r=l(1912),i=l(5558);const c={name:"PageSwitchBasic",components:{AlohaExample:r.A,ASwitch:i.A},setup(){const e=(0,n.KR)(!1),{codeHtml:t}={codeHtml:'<a-switch\n  v-model="model"\n></a-switch>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";\n    \nexport default {\n  name: "PageSwitchBasic",\n  components: {\n    ASwitch,\n  },\n  setup() {\n    const model = ref(false);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:t,codeJs:l,model:e}}};var s=l(6262);const u=(0,s.A)(c,[["render",function(e,t){const l=(0,n.g2)("a-switch"),a=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value"]},{default:(0,n.k6)((()=>[(0,n.bF)(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model=t)},null,8,["modelValue"]),(0,n.Lk)("div",null,"model: "+(0,n.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),m={name:"PageSwitchChange",components:{AlohaExample:r.A,ASwitch:i.A},setup(){const e=(0,n.KR)(!1),{codeHtml:t}={codeHtml:'<a-switch\n  :change="changeModel"\n  :model-value="model"\n></a-switch>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";\n    \nexport default {\n  name: "PageSwitchChange",\n  components: {\n    ASwitch,\n  },\n  setup() {\n    const model = ref(false);\n    \n    const changeModel = ({ model: _model, id, props }) => {\n      model.value = _model;\n      console.log(id, props);\n    };\n    \n    return {\n      changeModel,\n      model,\n    };\n  },\n};'};return{changeModel:({model:t,id:l,props:n})=>{e.value=t,console.log(l,n)},codeHtml:t,codeJs:l,model:e}}},A=(0,s.A)(m,[["render",function(e,t){const l=(0,n.g2)("a-switch"),a=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:(0,n.k6)((()=>[(0,n.bF)(l,{change:e.changeModel,"model-value":e.model},null,8,["change","model-value"]),(0,n.Lk)("div",null,"model: "+(0,n.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),p={name:"PageSwitchErrors",components:{AlohaExample:r.A,ASwitch:i.A},setup(){const e=(0,n.KR)(!1),{codeHtml:t}={codeHtml:'<a-switch\n  v-model="model"\n  errors="Aloha"\n  label="ASwitch"\n></a-switch>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";\n    \nexport default {\n  name: "PageSwitchErrors",\n  components: {\n    ASwitch,\n  },\n  setup() {\n    const model = ref(false);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:t,codeJs:l,model:e}}},S=(0,s.A)(p,[["render",function(e,t){const l=(0,n.g2)("a-switch"),a=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors","label"]},{default:(0,n.k6)((()=>[(0,n.bF)(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model=t),errors:"Aloha",label:"ASwitch"},null,8,["modelValue"])])),_:1},8,["code-html","code-js"])}]]),h={name:"PageSwitchHelpText",components:{AlohaExample:r.A,ASwitch:i.A},setup(){const e=(0,n.KR)(!1),{codeHtml:t}={codeHtml:'<a-switch\n  v-model="model"\n  help-text="Aloha"\n></a-switch>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";\n    \nexport default {\n  name: "PageSwitchHelpText",\n  components: {\n    ASwitch,\n  },\n  setup() {\n    const model = ref(false);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:t,codeJs:l,model:e}}},E=(0,s.A)(h,[["render",function(e,t){const l=(0,n.g2)("a-switch"),a=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:(0,n.k6)((()=>[(0,n.bF)(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model=t),"help-text":"Aloha"},null,8,["modelValue"])])),_:1},8,["code-html","code-js"])}]]),T={name:"PageSwitchThreeState",components:{AlohaExample:r.A,ASwitch:i.A},setup(){const e=(0,n.KR)(null),{codeHtml:t}={codeHtml:'<a-switch\n  v-model="model"\n  :default-value="null"\n  :is-three-state="true"\n  default-label="Default"\n></a-switch>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";\n    \nexport default {\n  name: "PageSwitchThreeState",\n  components: {\n    ASwitch,\n  },\n  setup() {\n    const model = ref(null);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:t,codeJs:l,model:e}}},I=(0,s.A)(T,[["render",function(e,t){const l=(0,n.g2)("a-switch"),a=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_THREE_STATE_HEADER_",description:"_A_SWITCH_GROUP_THREE_STATE_DESCRIPTION_",props:["is-three-state","default-value","default-label"]},{default:(0,n.k6)((()=>[(0,n.bF)(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model=t),"default-value":null,"is-three-state":!0,"default-label":"Default"},null,8,["modelValue"]),(0,n.Lk)("div",null,"model: "+(0,n.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),P={name:"PageSwitchTitle",components:{AlohaExample:r.A,ASwitch:i.A},setup(){const e=(0,n.KR)(0),{codeHtml:t}={codeHtml:'<a-switch\n  v-model="model"\n  :is-title-html="true"\n  title="Aloha"\n></a-switch>\n<a-switch\n  v-model="model"\n  :is-title-html="false"\n  class="a_mt_3"\n  title="Aloha"\n></a-switch>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";\n    \nexport default {\n  name: "PageSwitchTitle",\n  components: {\n    ASwitch,\n  },\n  setup() {\n    const model = ref(0);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:t,codeJs:l,model:e}}},R=(0,s.A)(P,[["render",function(e,t){const l=(0,n.g2)("a-switch"),a=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TITLE_HEADER_",description:"_A_SWITCH_GROUP_TITLE_DESCRIPTION_",props:["title","is-title-html"]},{default:(0,n.k6)((()=>[(0,n.bF)(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model=t),"is-title-html":!0,title:"Aloha"},null,8,["modelValue"]),(0,n.bF)(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=t=>e.model=t),"is-title-html":!1,title:"Aloha"},null,8,["modelValue"])])),_:1},8,["code-html","code-js"])}]]),f={name:"PageSwitchTrueFalseLabel",components:{AlohaExample:r.A,ASwitch:i.A},setup(){const e=(0,n.KR)(!1),{codeHtml:t}={codeHtml:'<a-switch\n  v-model="model"\n  false-label="0"\n  true-label="1"\n></a-switch>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";\n    \nexport default {\n  name: "PageSwitchTrueFalseLabel",\n  components: {\n    ASwitch,\n  },\n  setup() {\n    const model = ref(false);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:t,codeJs:l,model:e}}},O=(0,s.A)(f,[["render",function(e,t){const l=(0,n.g2)("a-switch"),a=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TRUE_FALSE_LABEL_HEADER_",description:"_A_SWITCH_GROUP_TRUE_FALSE_LABEL_DESCRIPTION_",props:["false-label","true-label"]},{default:(0,n.k6)((()=>[(0,n.bF)(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model=t),"false-label":"0","true-label":"1"},null,8,["modelValue"])])),_:1},8,["code-html","code-js"])}]]),g={name:"PageSwitchTrueFalseValue",components:{AlohaExample:r.A,ASwitch:i.A},setup(){const e=(0,n.KR)(0),{codeHtml:t}={codeHtml:'<a-switch\n  v-model="model"\n  :false-value="0"\n  :true-value="1"\n></a-switch>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";\n    \nexport default {\n  name: "PageSwitchTrueFalseValue",\n  components: {\n    ASwitch,\n  },\n  setup() {\n    const model = ref(0);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:t,codeJs:l,model:e}}},v=(0,s.A)(g,[["render",function(e,t){const l=(0,n.g2)("a-switch"),a=(0,n.g2)("aloha-example");return(0,n.uX)(),(0,n.Wv)(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SWITCH_GROUP_TRUE_FALSE_VALUE_HEADER_",description:"_A_SWITCH_GROUP_TRUE_FALSE_VALUE_DESCRIPTION_",props:["false-value","true-value"]},{default:(0,n.k6)((()=>[(0,n.bF)(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model=t),"false-value":0,"true-value":1},null,8,["modelValue"]),(0,n.Lk)("div",null,"model: "+(0,n.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]);var w=l(2187);const L={name:"PageSwitch",components:{AlohaPage:a.A,AlohaTableProps:o.A,AlohaTableTranslate:d.A,ATranslation:_.A,PageSwitchBasic:u,PageSwitchChange:A,PageSwitchErrors:S,PageSwitchHelpText:E,PageSwitchThreeState:I,PageSwitchTitle:R,PageSwitchTrueFalseLabel:O,PageSwitchTrueFalseValue:v},setup(){const{pageTitle:e}=function(){const e=(0,n.EW)((()=>(0,w.a1)({placeholder:"_A_SWITCH_COMPONENT_NAME_"})));return{pageTitle:(0,n.EW)((()=>"ASwitch"+(e.value?` (${e.value})`:"")))}}(),{dataProps:t}={dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"default-label",description:"_A_SWITCH_PROPS_DEFAULT_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_DEFAULT_LABEL_",required:!1},{name:"default-value",description:"_A_SWITCH_PROPS_DEFAULT_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"false-label",description:"_A_SWITCH_PROPS_FALSE_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_FALSE_LABEL_",required:!1},{name:"false-value",description:"_A_SWITCH_PROPS_FALSE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!1,required:!1},{name:"full-width",description:"_A_SWITCH_PROPS_FULL_WIDTH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_switch_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-three-state",description:"_A_SWITCH_PROPS_IS_THREE_STATE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-title-html",description:"_A_GLOBAL_PROPS_IS_TITLE_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"title",description:"_A_GLOBAL_PROPS_TITLE_DESCRIPTION_",type:"String / Number / Object / Array",default:void 0,required:!1},{name:"title-placement",description:"_A_GLOBAL_PROPS_TITLE_PLACEMENT_DESCRIPTION_",type:"String",default:"top",required:!1},{name:"true-label",description:"_A_SWITCH_PROPS_TRUE_LABEL_DESCRIPTION_",type:"String",default:"_A_SWITCH_TRUE_LABEL_",required:!1},{name:"true-value",description:"_A_SWITCH_PROPS_TRUE_VALUE_DESCRIPTION_",type:"Boolean / String / Number",default:!0,required:!1}]},{dataTranslate:l}={dataTranslate:["_A_SWITCH_DEFAULT_LABEL_","_A_SWITCH_FALSE_LABEL_","_A_SWITCH_TRUE_LABEL_"]},{dataEvents:a}={dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]};return{dataEvents:a,dataProps:t,dataTranslate:l,pageTitle:e}}},C=(0,s.A)(L,[["render",function(e,t){const l=(0,n.g2)("a-translation"),a=(0,n.g2)("page-switch-basic"),o=(0,n.g2)("page-switch-change"),d=(0,n.g2)("page-switch-help-text"),_=(0,n.g2)("page-switch-errors"),r=(0,n.g2)("page-switch-true-false-label"),i=(0,n.g2)("page-switch-true-false-value"),c=(0,n.g2)("page-switch-three-state"),s=(0,n.g2)("page-switch-title"),u=(0,n.g2)("aloha-table-props"),m=(0,n.g2)("aloha-table-translate"),A=(0,n.g2)("aloha-page");return(0,n.uX)(),(0,n.Wv)(A,{"page-title":e.pageTitle},{body:(0,n.k6)((()=>[(0,n.bF)(l,{tag:"p",html:"_A_SWITCH_COMPONENT_DESCRIPTION_"}),(0,n.bF)(a),(0,n.bF)(o),(0,n.bF)(d),(0,n.bF)(_),(0,n.bF)(r),(0,n.bF)(i),(0,n.bF)(c),(0,n.bF)(s),(0,n.bF)(u,{data:e.dataProps},null,8,["data"]),(0,n.bF)(u,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),(0,n.bF)(m,{data:e.dataTranslate},null,8,["data"])])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.1338.3decc5bccdb20a66e779.js.map