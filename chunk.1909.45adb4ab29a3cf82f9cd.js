"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[1909],{7061:(e,n,l)=>{l.d(n,{A:()=>c});var o=l(6365);const r={class:"a_p_2"};var t=l(5407),d=l(2187),u=l(2543);const a={name:"AlohaTableTranslate",components:{ATable:t.A},props:{data:{type:Array,required:!0}},setup(e){const{columns:n}={columns:[{id:"placeholder",label:"_ALOHA_TABLE_COLUMN_TRANSLATE_PLACEHOLDER_",keyLabel:"placeholder",sortId:"placeholder"},{id:"translate",label:"_ALOHA_TABLE_COLUMN_TRANSLATE_",keyLabel:"translate",sortId:"translate"}]},{dataTranslated:l}=function(e){const n=(0,o.lW)(e,"data");return{dataTranslated:(0,o.EW)((()=>{const e=[];return(0,u.forEach)(n.value,(n=>{e.push({placeholder:n,translate:(0,d.a1)({placeholder:n})})})),e}))}}(e);return{columns:n,dataTranslated:l}}},c=(0,l(6262).A)(a,[["render",function(e,n){const l=(0,o.g2)("a-table");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(l,{label:"_ALOHA_TABLE_TRANSLATE_LABEL_",columns:e.columns,data:e.dataTranslated,"is-action-column-visible":!1,"model-sort":"name","is-columns-dnd":!1,"is-sorting-multi-column":!1,"show-first-sorting-sequence-number":!1},null,8,["columns","data"])])}]])},8473:(e,n,l)=>{l.r(n),l.d(n,{default:()=>L});var o=l(6365),r=l(8310),t=l(635),d=l(7061),u=l(7791),a=l(9129),c=l(1912);const m={name:"PageInputCurrencyBasic",components:{AInputCurrency:a.A,AlohaExample:c.A},setup(){const e=(0,o.KR)(10.02),{codeHtml:n}={codeHtml:'<a-input-currency\n  v-model="model"\n  label="Input"\n></a-input-currency>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";\n    \nexport default {\n  name: "PageInputCurrencyBasic",\n  components: {\n    AInputCurrency,\n  },\n  setup() {\n    const model = ref(10.02);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:n,codeJs:l,model:e}}};var _=l(6262);const p=(0,_.A)(m,[["render",function(e,n){const l=(0,o.g2)("a-input-currency"),r=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label"]},{default:(0,o.k6)((()=>[(0,o.bF)(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=n=>e.model=n),label:"Input"},null,8,["modelValue"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),i={name:"PageInputCurrencyChange",components:{AInputCurrency:a.A,AlohaExample:c.A},setup(){const e=(0,o.KR)(10.02),{codeHtml:n}={codeHtml:'<a-input-currency\n  :change="changeModel"\n  :model-value="model"\n  label="Input"\n></a-input-currency>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AInput from "aloha-vue/src/ui/AInput/AInput";\n    \nexport default {\n  name: "PageInputCurrencyChange",\n  components: {\n    AInput,\n  },\n  setup() {\n    const model = ref(10.02);\n    \n    const changeModel = ({ model: _model, id, props }) => {\n      model.value = _model;\n      console.log(id, props);\n    };\n    \n    return {\n      changeModel,\n      model,\n    };\n  },\n};'};return{changeModel:({model:n,id:l,props:o})=>{e.value=n,console.log(l,o)},codeHtml:n,codeJs:l,model:e}}},s=(0,_.A)(i,[["render",function(e,n){const l=(0,o.g2)("a-input-currency"),r=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:(0,o.k6)((()=>[(0,o.bF)(l,{change:e.changeModel,"model-value":e.model,label:"Input"},null,8,["change","model-value"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),I={name:"PageInputCurrencyErrors",components:{AInputCurrency:a.A,AlohaExample:c.A},setup(){const e=(0,o.KR)(10.02),{codeHtml:n}={codeHtml:'<a-input-currency\n  v-model="model"\n  errors="Aloha"\n  label="Input"\n></a-input-currency>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";\n    \nexport default {\n  name: "PageInputCurrencyErrors",\n  components: {\n    AInputCurrency,\n  },\n  setup() {\n    const model = ref(10.02);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:n,codeJs:l,model:e}}},A=(0,_.A)(I,[["render",function(e,n){const l=(0,o.g2)("a-input-currency"),r=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:(0,o.k6)((()=>[(0,o.bF)(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=n=>e.model=n),errors:"Aloha",label:"Input"},null,8,["modelValue"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),y={name:"PageInputCurrencyHelpText",components:{AInputCurrency:a.A,AlohaExample:c.A},setup(){const e=(0,o.KR)(10.02),{codeHtml:n}={codeHtml:'<a-input-currency\n  v-model="model"\n  help-text="Aloha"\n  label="Input"\n></a-input-currency>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";\n    \nexport default {\n  name: "PageInputCurrencyHelpText",\n  components: {\n    AInputCurrency,\n  },\n  setup() {\n    const model = ref(10.02);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:n,codeJs:l,model:e}}},P=(0,_.A)(y,[["render",function(e,n){const l=(0,o.g2)("a-input-currency"),r=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:(0,o.k6)((()=>[(0,o.bF)(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=n=>e.model=n),"help-text":"Aloha",label:"Input"},null,8,["modelValue"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),C={name:"PageInputCurrencyLabelFloat",components:{AInputCurrency:a.A,AlohaExample:c.A},setup(){const e=(0,o.KR)(10.02),{codeHtml:n}={codeHtml:'<a-input-currency\n  v-model="model"\n  :is-label-float="false"\n  label="Input"\n></a-input-currency>\n<a-input-currency\n  v-model="model"\n  :is-label-float="true"\n  label="Input"\n></a-input-currency>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";\n    \nexport default {\n  name: "PageInputCurrencyLabelFloat",\n  components: {\n    AInputCurrency,\n  },\n  setup() {\n    const model = ref(10.02);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:n,codeJs:l,model:e}}},R=(0,_.A)(C,[["render",function(e,n){const l=(0,o.g2)("a-input-currency"),r=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_IS_LABEL_FLOAT_HEADER_",description:"_A_UI_GROUP_IS_LABEL_FLOAT_DESCRIPTION_",props:["is-label-float"]},{default:(0,o.k6)((()=>[(0,o.bF)(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=n=>e.model=n),"is-label-float":!1,label:"Input"},null,8,["modelValue"]),(0,o.bF)(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=n=>e.model=n),"is-label-float":!0,label:"Input"},null,8,["modelValue"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),E={name:"PageInputCurrencySymbol",components:{AInputCurrency:a.A,AlohaExample:c.A},setup(){const e=(0,o.KR)(10.02),{codeHtml:n}={codeHtml:'<a-input-currency\n  v-model="model"\n  currency-symbol-position="right"\n  currency-symbol="%"\n  label="Input"\n></a-input-currency>\n<a-input-currency\n  v-model="model"\n  class="a_mt_3"\n  currency-symbol-position="left"\n  currency-symbol="$"\n  label="Input"\n></a-input-currency>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";\n    \nexport default {\n  name: "PageInputCurrencySymbol",\n  components: {\n    AInputCurrency,\n  },\n  setup() {\n    const model = ref(10.02);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:n,codeJs:l,model:e}}},N=(0,_.A)(E,[["render",function(e,n){const l=(0,o.g2)("a-input-currency"),r=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_SYMBOL_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_SYMBOL_DESCRIPTION_",props:["currency-symbol","currency-symbol-position"]},{default:(0,o.k6)((()=>[(0,o.bF)(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=n=>e.model=n),"currency-symbol-position":"right","currency-symbol":"%",label:"Input"},null,8,["modelValue"]),(0,o.bF)(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=n=>e.model=n),"currency-symbol-position":"left","currency-symbol":"$",label:"Input"},null,8,["modelValue"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),O={name:"PageInputCurrencyControlsType",components:{AInputCurrency:a.A,AlohaExample:c.A},setup(){const e=(0,o.KR)(10.02),{codeHtml:n}={codeHtml:'<a-input-currency\n  v-model="model"\n  controls-type="none"\n  label="Input"\n></a-input-currency>\n<a-input-currency\n  v-model="model"\n  class="a_mt_3"\n  controls-type="plus-minus"\n  label="Input"\n></a-input-currency>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";\n    \nexport default {\n  name: "PageInputCurrencyControlsType",\n  components: {\n    AInputCurrency,\n  },\n  setup() {\n    const model = ref(10.02);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:n,codeJs:l,model:e}}},v=(0,_.A)(O,[["render",function(e,n){const l=(0,o.g2)("a-input-currency"),r=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_CONTROLS_TYPE_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_CONTROLS_TYPE_DESCRIPTION_",props:["controls-type"]},{default:(0,o.k6)((()=>[(0,o.bF)(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=n=>e.model=n),"controls-type":"none",label:"Input"},null,8,["modelValue"]),(0,o.bF)(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=n=>e.model=n),"controls-type":"plus-minus",label:"Input"},null,8,["modelValue"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),T={name:"PageInputCurrencyDecimalDivider",components:{AInputCurrency:a.A,AlohaExample:c.A},setup(){const e=(0,o.KR)(10.02),{codeHtml:n}={codeHtml:'<a-input-currency\n  v-model="model"\n  decimal-divider=","\n  label="Input"\n></a-input-currency>\n<a-input-currency\n  v-model="model"\n  class="a_mt_3"\n  decimal-divider="."\n  label="Input"\n></a-input-currency>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";\n    \nexport default {\n  name: "PageInputCurrencyDecimalDivider",\n  components: {\n    AInputCurrency,\n  },\n  setup() {\n    const model = ref(10.02);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:n,codeJs:l,model:e}}},b=(0,_.A)(T,[["render",function(e,n){const l=(0,o.g2)("a-input-currency"),r=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_DECIMAL_DIVIDER_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_DECIMAL_DIVIDER_DESCRIPTION_",props:["decimal-divider"]},{default:(0,o.k6)((()=>[(0,o.bF)(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=n=>e.model=n),"decimal-divider":",",label:"Input"},null,8,["modelValue"]),(0,o.bF)(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=n=>e.model=n),"decimal-divider":".",label:"Input"},null,8,["modelValue"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),S={name:"PageInputCurrencyControlsType",components:{AInputCurrency:a.A,AlohaExample:c.A},setup(){const e=(0,o.KR)(10.02),{codeHtml:n}={codeHtml:'<a-input-currency\n  v-model="model"\n  :max="20"\n  :min="1"\n  label="1 - 20"\n></a-input-currency>\n<a-input-currency\n  v-model="model"\n  :max="19.05"\n  :min="-10.05"\n  class="a_mt_3"\n  label="-10.05 - 19.05"\n></a-input-currency>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";\n    \nexport default {\n  name: "PageInputCurrencyMaxMin",\n  components: {\n    AInputCurrency,\n  },\n  setup() {\n    const model = ref(10.02);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:n,codeJs:l,model:e}}},g=(0,_.A)(S,[["render",function(e,n){const l=(0,o.g2)("a-input-currency"),r=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_MAX_MIN_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_MAX_MIN_DESCRIPTION_",props:["max","min"]},{default:(0,o.k6)((()=>[(0,o.bF)(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=n=>e.model=n),max:20,min:1,label:"1 - 20"},null,8,["modelValue"]),(0,o.bF)(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=n=>e.model=n),max:19.05,min:-10.05,label:"-10.05 - 19.05"},null,8,["modelValue"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),f={name:"PageInputCurrencyModelType",components:{AInputCurrency:a.A,AlohaExample:c.A},setup(){const e=(0,o.KR)(10.02),{codeHtml:n}={codeHtml:'<a-input-currency\n  v-model="model"\n  label="number"\n  model-type="number"\n></a-input-currency>\n<a-input-currency\n  v-model="model"\n  class="a_mt_3"\n  label="string"\n  model-type="string"\n></a-input-currency>\n<div>model: {{ model }}</div>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";\n    \nexport default {\n  name: "PageInputCurrencyModelType",\n  components: {\n    AInputCurrency,\n  },\n  setup() {\n    const model = ref(10.02);\n    \n    return {\n      model,\n    };\n  },\n};'};return{codeHtml:n,codeJs:l,model:e}}},U=(0,_.A)(f,[["render",function(e,n){const l=(0,o.g2)("a-input-currency"),r=(0,o.g2)("aloha-example");return(0,o.uX)(),(0,o.Wv)(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_INPUT_CURRENCY_GROUP_MODEL_TYPE_HEADER_",description:"_A_INPUT_CURRENCY_GROUP_MODEL_TYPE_DESCRIPTION_",props:["model-type"]},{default:(0,o.k6)((()=>[(0,o.bF)(l,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=n=>e.model=n),label:"number","model-type":"number"},null,8,["modelValue"]),(0,o.bF)(l,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":n[1]||(n[1]=n=>e.model=n),label:"string","model-type":"string"},null,8,["modelValue"]),(0,o.Lk)("div",null,"model: "+(0,o.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]);var h=l(2187);const D={name:"PageInputCurrency",components:{AlohaPage:r.A,AlohaTableProps:t.A,AlohaTableTranslate:d.A,ATranslation:u.A,PageInputCurrencyBasic:p,PageInputCurrencyChange:s,PageInputCurrencyErrors:A,PageInputCurrencyHelpText:P,PageInputCurrencyLabelFloat:R,PageInputCurrencySymbol:N,PageInputCurrencyControlsType:v,PageInputCurrencyDecimalDivider:b,PageInputCurrencyMaxMin:g,PageInputCurrencyModelType:U},setup(){const{pageTitle:e}=function(){const e=(0,o.EW)((()=>(0,h.a1)({placeholder:"_A_INPUT_CURRENCY_COMPONENT_NAME_"})));return{pageTitle:(0,o.EW)((()=>"AInputCurrency"+(e.value?` (${e.value})`:"")))}}(),{dataProps:n}={dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"clear-button-class",description:"_A_UI_PROPS_CLEAR_BUTTON_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"controls-type",description:"_A_INPUT_CURRENCY_PROPS_CONTROLS_TYPE_DESCRIPTION_",type:"String",default:"none",required:!1},{name:"currency-symbol",description:"_A_INPUT_CURRENCY_PROPS_CURRENCY_SYMBOL_DESCRIPTION_",type:"String",default:"€",required:!1},{name:"currency-symbol-position",description:"_A_INPUT_CURRENCY_PROPS_CURRENCY_SYMBOL_POSITION_DESCRIPTION_",type:"String",default:"right",required:!1},{name:"decimal-divider",description:"_A_INPUT_CURRENCY_PROPS_DECIMAL_DIVIDER_DESCRIPTION_",type:"String",default:",",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-prepend",description:"_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_input_currency_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"input-class",description:"_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"input-width",description:"_A_INPUT_CURRENCY_PROPS_INPUT_WIDTH_DESCRIPTION_",type:"String",default:200,required:!1},{name:"is-clear-button",description:"_A_UI_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-label-float",description:"_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"max",description:"_A_INPUT_CURRENCY_PROPS_MAX_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"min",description:"_A_INPUT_CURRENCY_PROPS_MIN_DESCRIPTION_",type:"Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-type",description:"_A_INPUT_CURRENCY_PROPS_MODEL_TYPE_DESCRIPTION_",type:"String",default:"number",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"placeholder",description:"_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"step",description:"_A_INPUT_PROPS_STEP_DESCRIPTION_",type:"Number",default:1,required:!1},{name:"symbols-after-decimal-divider",description:"_A_INPUT_CURRENCY_PROPS_SYMBOLS_AFTER_DECIMAL_DIVIDER_DESCRIPTION_",type:"Number",default:2,required:!1},{name:"thousand-divider",description:"_A_INPUT_CURRENCY_PROPS_THOUSAND_DIVIDER_DESCRIPTION_",type:"String",default:".",required:!1},{name:"validation-on-change",description:"_A_INPUT_CURRENCY_PROPS_VALIDATION_ON_CHANGE_DESCRIPTION_",type:"Boolean",default:!1,required:!1}]},{dataEvents:l}={dataEvents:[{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"},{name:"focus",description:"_A_UI_EVENTS_FOCUS_DESCRIPTION_",type:"Function"},{name:"blur",description:"_A_UI_EVENTS_BLUR_DESCRIPTION_",type:"Function"}]};return{dataEvents:l,dataProps:n,pageTitle:e}}},L=(0,_.A)(D,[["render",function(e,n){const l=(0,o.g2)("a-translation"),r=(0,o.g2)("page-input-currency-basic"),t=(0,o.g2)("page-input-currency-change"),d=(0,o.g2)("page-input-currency-help-text"),u=(0,o.g2)("page-input-currency-errors"),a=(0,o.g2)("page-input-currency-label-float"),c=(0,o.g2)("page-input-currency-symbol"),m=(0,o.g2)("page-input-currency-controls-type"),_=(0,o.g2)("page-input-currency-decimal-divider"),p=(0,o.g2)("page-input-currency-max-min"),i=(0,o.g2)("page-input-currency-model-type"),s=(0,o.g2)("aloha-table-props"),I=(0,o.g2)("aloha-page");return(0,o.uX)(),(0,o.Wv)(I,{"page-title":e.pageTitle},{body:(0,o.k6)((()=>[(0,o.bF)(l,{tag:"p",html:"_A_INPUT_CURRENCY_COMPONENT_DESCRIPTION_"}),(0,o.bF)(r),(0,o.bF)(t),(0,o.bF)(d),(0,o.bF)(u),(0,o.bF)(a),(0,o.bF)(c),(0,o.bF)(m),(0,o.bF)(_),(0,o.bF)(p),(0,o.bF)(i),(0,o.bF)(s,{data:e.dataProps},null,8,["data"]),(0,o.bF)(s,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"])])),_:1},8,["page-title"])}]])},2642:(e,n,l)=>{l.r(n),l.d(n,{default:()=>p});var o=l(6365);const r=(0,o.Lk)("h1",null,"Input number",-1),t=(0,o.Lk)("h2",null,'type "number"',-1),d=(0,o.Lk)("h2",null,'type "integerNonNegative"',-1),u=(0,o.Lk)("h2",null,'type "integerPositive"',-1),a=(0,o.Lk)("h2",null,'type "integer"',-1),c=(0,o.Lk)("input",{type:"number"},null,-1),m=(0,o.Lk)("button",{class:"a_btn a_btn_primary"},"Temp",-1),_={name:"PageInputNumber",components:{AInputNumber:l(9155).A},data:()=>({model1:10,model2:123,model3:321,model4:432}),methods:{changeModel1(e){console.log("arg",e)}}},p=(0,l(6262).A)(_,[["render",function(e,n){const l=(0,o.g2)("a-input-number");return(0,o.uX)(),(0,o.CE)("div",null,[r,t,(0,o.bF)(l,{id:"input1",modelValue:e.model1,"onUpdate:modelValue":n[0]||(n[0]=n=>e.model1=n),type:"number",label:"Input langeeeeeeeeeeeeeeeeeee textdffdgfdgdsfdsfdsfdsfdsfdsfsdfsfdd",required:!0,step:2,errors:"not valid"},null,8,["modelValue"]),(0,o.Lk)("div",null,"model1: "+(0,o.v_)(e.model1),1),d,(0,o.bF)(l,{id:"input2",modelValue:e.model2,"onUpdate:modelValue":n[1]||(n[1]=n=>e.model2=n),type:"integerNonNegative",label:"Input 2",required:!0,step:2,disabled:!0},null,8,["modelValue"]),(0,o.Lk)("div",null,"model2: "+(0,o.v_)(e.model2),1),u,(0,o.bF)(l,{id:"input3",modelValue:e.model3,"onUpdate:modelValue":n[2]||(n[2]=n=>e.model3=n),type:"integerPositive",label:"Input 3",required:!0,step:3,"controls-type":"none"},null,8,["modelValue"]),(0,o.Lk)("div",null,"model3: "+(0,o.v_)(e.model3),1),a,(0,o.bF)(l,{id:"input4",modelValue:e.model4,"onUpdate:modelValue":n[3]||(n[3]=n=>e.model4=n),type:"integer",label:"Input 4",required:!0,step:4},null,8,["modelValue"]),(0,o.Lk)("div",null,"model4: "+(0,o.v_)(e.model4),1),c,m])}]])}}]);
//# sourceMappingURL=chunk.1909.45adb4ab29a3cf82f9cd.js.map