"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[1783],{7061:(e,a,_)=>{_.d(a,{A:()=>i});var l=_(6365);const d={class:"a_p_2"};var o=_(5407),n=_(2187),t=_(2543);const r={name:"AlohaTableTranslate",components:{ATable:o.A},props:{data:{type:Array,required:!0}},setup(e){const{columns:a}={columns:[{id:"placeholder",label:"_ALOHA_TABLE_COLUMN_TRANSLATE_PLACEHOLDER_",keyLabel:"placeholder",sortId:"placeholder"},{id:"translate",label:"_ALOHA_TABLE_COLUMN_TRANSLATE_",keyLabel:"translate",sortId:"translate"}]},{dataTranslated:_}=function(e){const a=(0,l.lW)(e,"data");return{dataTranslated:(0,l.EW)((()=>{const e=[];return(0,t.forEach)(a.value,(a=>{e.push({placeholder:a,translate:(0,n.a1)({placeholder:a})})})),e}))}}(e);return{columns:a,dataTranslated:_}}},i=(0,_(6262).A)(r,[["render",function(e,a){const _=(0,l.g2)("a-table");return(0,l.uX)(),(0,l.CE)("div",d,[(0,l.bF)(_,{label:"_ALOHA_TABLE_TRANSLATE_LABEL_",columns:e.columns,data:e.dataTranslated,"is-action-column-visible":!1,"model-sort":"name","is-columns-dnd":!1,"is-sorting-multi-column":!1,"show-first-sorting-sequence-number":!1},null,8,["columns","data"])])}]])},2:(e,a,_)=>{_.r(a),_.d(a,{default:()=>p});var l=_(6365),d=_(8310),o=_(635),n=_(7061),t=_(7791);const r={class:"a_columns a_columns_count_12"},i={class:"a_column a_column_6 a_columns_count_12_touch"};var A=_(1912),u=_(1356);const s={name:"PageRadioIsModelArray",components:{AlohaExample:A.A,ARadio:u.A},setup(){const{codeHtml:e}={codeHtml:'<a-radio\n  v-model="model"\n  :data="data"\n  key-id="id"\n  key-label="label"\n  :key-group="[\'alohaBR\', \'aloha\']"\n  label="Aloha group"\n  :search="true"\n></a-radio>\n<div>model: {{ model }}</div>\n<a-radio\n  v-model="model"\n  class="a_mt_3"\n  :data="data"\n  key-id="id"\n  key-label="label"\n  label="Aloha"\n  :search="true"\n></a-radio>\n<div>model: {{ model }}</div>'},{codeJs:a}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport ARadio from "aloha-vue/src/ui/ARadio/ARadio";\n    \nexport default {\n  name: "PageRadioSearch",\n  components: {\n    ARadio,\n  },\n  setup() {\n    const data = [\n      {\n        label: "Aloha 0",\n        id: "aloha_0",\n        aloha: "",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 1",\n        id: "aloha_1",\n        aloha: "Buba",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 2",\n        id: "aloha_2",\n        aloha: "Buba",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 3",\n        id: "aloha_3",\n        aloha: "Sandra",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 4",\n        id: "aloha_4",\n        aloha: "Sandra",\n        alohaBR: "Köln",\n      },\n      {\n        label: "Aloha 5",\n        id: "aloha_5",\n        aloha: "Coco",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 6",\n        id: "aloha_6",\n        aloha: "Coco",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 7",\n        id: "aloha_7",\n        aloha: "Alex",\n        alohaBR: "Düsseldorf",\n      },\n      {\n        label: "Aloha 8",\n        id: "aloha_8",\n        aloha: "Alex",\n        alohaBR: "Düsseldorf",\n      },\n    ];\n    const model = ref(undefined);\n\n    return {\n      data,\n      model,\n    };\n  },\n};'};return{codeHtml:e,codeJs:a,data:[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],model:(0,l.KR)(void 0)}}};var I=_(6262);const R=(0,I.A)(s,[["render",function(e,a){const _=(0,l.g2)("a-radio"),d=(0,l.g2)("aloha-example");return(0,l.uX)(),(0,l.Wv)(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_RADIO_GROUP_IS_MODEL_ARRAY_HEADER_",description:"_A_RADIO_GROUP_IS_MODEL_ARRAY_DESCRIPTION_",props:"isModelArray"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",r,[(0,l.Lk)("div",i,[(0,l.bF)(_,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=a=>e.model=a),data:e.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],label:"Aloha group","is-model-array":!0},null,8,["modelValue","data"]),(0,l.Lk)("div",null,"model: "+(0,l.v_)(e.model),1)])])])),_:1},8,["code-html","code-js"])}]]);var P=_(2187);const S={name:"PageRadio",components:{AlohaPage:d.A,AlohaTableProps:o.A,AlohaTableTranslate:n.A,ATranslation:t.A,PageRadioIsModelArray:R},setup(){const{pageTitle:e}=function(){const e=(0,l.EW)((()=>(0,P.a1)({placeholder:"_A_RADIO_COMPONENT_NAME_"})));return{pageTitle:(0,l.EW)((()=>"ARadio"+(e.value?` (${e.value})`:"")))}}(),{dataProps:a}={dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"api-save-id",description:"_A_UI_PROPS_API_SAVE_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"class-button-group-default",description:"_A_UI_PROPS_CLASS_BUTTON_GROUP_DEFAULT_DESCRIPTION_",type:"String / Object / Array",default:"a_btn a_btn_outline_primary",required:!1},{name:"class-data-parent",description:"_A_UI_PROPS_CLASS_DATA_PARENT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"class-fieldset",description:"_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"collapsible",description:"_A_CHECKBOX_PROPS_COLLAPSIBLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"data",description:"_A_UI_PROPS_DATA_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"data-extra",description:"_A_UI_PROPS_DATA_EXTRA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"has-border",description:"_A_UI_PROPS_HAS_BORDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_radio_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"inline",description:"_A_CHECKBOX_PROPS_INLINE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"input-attributes",description:"_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"is-button-group",description:"_A_CHECKBOX_PROPS_IS_BUTTON_GROUP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-collapsed",description:"_A_CHECKBOX_PROPS_IS_COLLAPSED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-data-simple-array",description:"_A_UI_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-model-array",description:"_A_RADIO_PROPS_IS_MODEL_ARRAY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-width-auto",description:"_A_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"key-disabled",description:"_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-group",description:"_A_UI_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:void 0,required:!1},{name:"key-group-label-callback",description:"_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-id",description:"_A_UI_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:"value",required:!1},{name:"key-label",description:"_A_UI_PROPS_KEY_LABEL_DESCRIPTION_",type:"String",default:"label",required:!1},{name:"key-label-callback",description:"_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-title",description:"_A_UI_PROPS_KEY_TITLE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-title-callback",description:"_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"loading",description:"_A_UI_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search",description:"_A_UI_PROPS_SEARCH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api",description:"_A_UI_PROPS_SEARCH_API_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api-key",description:"_A_UI_PROPS_SEARCH_API_KEY_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"search-outside",description:"_A_UI_PROPS_SEARCH_OUTSIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-timeout",description:"_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"slot-append-name",description:"_A_UI_PROPS_SLOT_APPEND_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order",description:"_A_UI_PROPS_SORT_ORDER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order-group",description:"_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"translate-data",description:"_A_UI_PROPS_TRANSLATE_DATA_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"url",description:"_A_UI_PROPS_URL_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"url-params",description:"_A_UI_PROPS_URL_PARAMS_DESCRIPTION_",type:"Object",default:void 0,required:!1}]},{dataTranslate:_}={dataTranslate:["_A_RADIO_HAS_NOT_ELEMENTS_WITH_SEARCH_","_A_RADIO_SEARCH_"]},{dataEvents:d}={dataEvents:[{name:"on-search-outside",description:"_A_UI_EVENTS_ON_SEARCH_OUTSIDE_DESCRIPTION_",type:"Function"},{name:"update-data",description:"_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_",type:"Function"},{name:"toggle-collapse",description:"_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_",type:"Function"},{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"}]};return{dataEvents:d,dataProps:a,dataTranslate:_,pageTitle:e}}},p=(0,I.A)(S,[["render",function(e,a){const _=(0,l.g2)("a-translation"),d=(0,l.g2)("page-radio-is-model-array"),o=(0,l.g2)("aloha-table-props"),n=(0,l.g2)("aloha-table-translate"),t=(0,l.g2)("aloha-page");return(0,l.uX)(),(0,l.Wv)(t,{"page-title":e.pageTitle},{body:(0,l.k6)((()=>[(0,l.bF)(_,{tag:"p",html:"_A_RADIO_COMPONENT_DESCRIPTION_"}),(0,l.bF)(d),(0,l.bF)(o,{data:e.dataProps},null,8,["data"]),(0,l.bF)(o,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),(0,l.bF)(n,{data:e.dataTranslate},null,8,["data"])])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.1783.9450a0673aaa62aa61fa.js.map