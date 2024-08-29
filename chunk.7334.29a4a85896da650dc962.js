"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[7334],{7061:(e,l,t)=>{t.d(l,{A:()=>_});var a=t(6365);const n={class:"a_p_2"};var d=t(5407),o=t(2187),i=t(2543);const s={name:"AlohaTableTranslate",components:{ATable:d.A},props:{data:{type:Array,required:!0}},setup(e){const{columns:l}={columns:[{id:"placeholder",label:"_ALOHA_TABLE_COLUMN_TRANSLATE_PLACEHOLDER_",keyLabel:"placeholder",sortId:"placeholder"},{id:"translate",label:"_ALOHA_TABLE_COLUMN_TRANSLATE_",keyLabel:"translate",sortId:"translate"}]},{dataTranslated:t}=function(e){const l=(0,a.lW)(e,"data");return{dataTranslated:(0,a.EW)((()=>{const e=[];return(0,i.forEach)(l.value,(l=>{e.push({placeholder:l,translate:(0,o.a1)({placeholder:l})})})),e}))}}(e);return{columns:l,dataTranslated:t}}},_=(0,t(6262).A)(s,[["render",function(e,l){const t=(0,a.g2)("a-table");return(0,a.uX)(),(0,a.CE)("div",n,[(0,a.bF)(t,{label:"_ALOHA_TABLE_TRANSLATE_LABEL_",columns:e.columns,data:e.dataTranslated,"is-action-column-visible":!1,"model-sort":"name","is-columns-dnd":!1,"is-sorting-multi-column":!1,"show-first-sorting-sequence-number":!1},null,8,["columns","data"])])}]])},6948:(e,l,t)=>{t.r(l),t.d(l,{default:()=>R});var a=t(6365),n=t(8310),d=t(635),o=t(7061),i=t(7791);const s={class:"a_columns a_columns_count_12"},_={class:"a_column a_column_6 a_columns_count_12_touch"},r=(0,a.Lk)("div",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",-1),c=(0,a.Lk)("div",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",-1);var u=t(9832),m=t(1912);const p={name:"PageFieldsetCollapse",components:{AFieldset:u.A,AlohaExample:m.A},setup(){const{codeHtml:e}={codeHtml:'<a-fieldset\n  :collapsible="true"\n  slot-name="fieldset"\n  class-columns=""\n  label="Aloha"\n>\n  <template\n    v-slot:fieldset\n  >\n    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</div>\n  </template>\n</a-fieldset>\n<a-fieldset\n  class="a_mt_5"\n  :collapsible="true"\n  :is-collapsed="true"\n  slot-name="fieldset"\n  class-columns=""\n>\n  <template\n    v-slot:fieldset\n  >\n    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</div>\n  </template>\n</a-fieldset>'},{codeJs:l}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AFieldset from "aloha-vue/src/ui/AFieldset/AFieldset";\n    \nexport default {\n  name: "PageFieldsetCollapse",\n  components: {\n    AFieldset,\n  },\n};'};return{codeHtml:e,codeJs:l}}};var E=t(6262);const A=(0,E.A)(p,[["render",function(e,l){const t=(0,a.g2)("a-fieldset"),n=(0,a.g2)("aloha-example");return(0,a.uX)(),(0,a.Wv)(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_FIELDSET_GROUP_COLLAPSE_HEADER_",description:"_A_FIELDSET_GROUP_COLLAPSE_DESCRIPTION_",props:["collapsible","is-collapsed"]},{default:(0,a.k6)((()=>[(0,a.Lk)("div",s,[(0,a.Lk)("div",_,[(0,a.bF)(t,{collapsible:!0,"slot-name":"fieldset","class-columns":"",label:"Aloha"},{fieldset:(0,a.k6)((()=>[r])),_:1}),(0,a.bF)(t,{class:"a_mt_5",collapsible:!0,"is-collapsed":!0,"slot-name":"fieldset","class-columns":""},{fieldset:(0,a.k6)((()=>[c])),_:1})])])])),_:1},8,["code-html","code-js"])}]]),P={name:"PageFieldsetBasic",components:{AFieldset:u.A,AlohaExample:m.A},setup(){const e=(0,a.KR)(void 0),{codeHtml:l}={codeHtml:'<a-fieldset\n  v-model="model"\n  :children="children"\n  label="Fieldset"\n></a-fieldset>\n<div>model: {{ model }}</div>'},{codeJs:t}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AFieldset from "aloha-vue/src/ui/AFieldset/AFieldset";\n    \nexport default {\n  name: "PageFieldsetBasic",\n  components: {\n    AFieldset,\n  },\n  setup() {\n    const children = [\n      {\n        type: "text",\n        label: "Text",\n        id: "aloha.text",\n      },\n      {\n        type: "oneCheckbox",\n        label: "Checkbox",\n        id: "aloha.checkbox",\n      },\n    ];\n    const model = ref(undefined);\n    \n    return {\n      children,\n      model,\n    };\n  },\n};'};return{children:[{type:"text",label:"Text",id:"aloha.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox"}],codeHtml:l,codeJs:t,model:e}}},I=(0,E.A)(P,[["render",function(e,l){const t=(0,a.g2)("a-fieldset"),n=(0,a.g2)("aloha-example");return(0,a.uX)(),(0,a.Wv)(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","label","children"]},{default:(0,a.k6)((()=>[(0,a.bF)(t,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=l=>e.model=l),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),(0,a.Lk)("div",null,"model: "+(0,a.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),S={name:"PageFieldsetChange",components:{AFieldset:u.A,AlohaExample:m.A},setup(){const e=(0,a.KR)(void 0),{codeHtml:l}={codeHtml:'<a-fieldset\n  :change="changeModel"\n  :children="children"\n  :model-value="model"\n  label="Fieldset"\n></a-fieldset>\n<div>model: {{ model }}</div>'},{codeJs:t}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AFieldset from "aloha-vue/src/ui/AFieldset/AFieldset";\n    \nexport default {\n  name: "PageFieldsetChange",\n  components: {\n    AFieldset,\n  },\n  setup() {\n    const children = [\n      {\n        type: "text",\n        label: "Text",\n        id: "aloha.text",\n      },\n      {\n        type: "oneCheckbox",\n        label: "Checkbox",\n        id: "aloha.checkbox",\n      },\n    ];\n    const model = ref(undefined);\n    \n    const changeModel = ({ model: _model, id, props }) => {\n      model.value = _model;\n      console.log(id, props);\n    };\n    \n    return {\n      children,\n      changeModel,\n      model,\n    };\n  },\n};'};return{changeModel:({model:l,id:t,props:a})=>{e.value=l,console.log(t,a)},children:[{type:"text",label:"Text",id:"aloha.text1"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox1"}],codeHtml:l,codeJs:t,model:e}}},O=(0,E.A)(S,[["render",function(e,l){const t=(0,a.g2)("a-fieldset"),n=(0,a.g2)("aloha-example");return(0,a.uX)(),(0,a.Wv)(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:(0,a.k6)((()=>[(0,a.bF)(t,{change:e.changeModel,children:e.children,"model-value":e.model,label:"Fieldset"},null,8,["change","children","model-value"]),(0,a.Lk)("div",null,"model: "+(0,a.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]);var h=t(2187);const T={name:"PageFieldset",components:{AlohaPage:n.A,AlohaTableProps:d.A,AlohaTableTranslate:o.A,ATranslation:i.A,PageFieldsetCollapse:A,PageFieldsetBasic:I,PageFieldsetChange:O},setup(){const{pageTitle:e}=function(){const e=(0,a.EW)((()=>(0,h.a1)({placeholder:"_A_FIELDSET_COMPONENT_NAME_"})));return{pageTitle:(0,a.EW)((()=>"AFieldset"+(e.value?` (${e.value})`:"")))}}(),{dataProps:l}={dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"children",description:"_A_FIELDSET_PROPS_CHILDREN_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"class-columns",description:"_A_FIELDSET_PROPS_CLASS_COLUMNS_DESCRIPTION_",type:"String / Object",default:"a_columns a_columns_count_12 a_columns_gab_2",required:!1},{name:"class-fieldset",description:"_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"collapsible",description:"_A_CHECKBOX_PROPS_COLLAPSIBLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"errors-all",description:"_A_FIELDSET_PROPS_ERRORS_ALL_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"has-border",description:"_A_UI_PROPS_HAS_BORDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_fieldset_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-collapsed",description:"_A_CHECKBOX_PROPS_IS_COLLAPSED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1}]},{dataEvents:t}={dataEvents:[{name:"update-data",description:"_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_",type:"Function"},{name:"toggle-collapse",description:"_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_",type:"Function"},{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"}]},{dataTranslate:n}={dataTranslate:["_A_FIELDSET_COLLAPSE_OPEN_","_A_FIELDSET_COLLAPSE_CLOSE_"]};return{dataEvents:t,dataProps:l,dataTranslate:n,pageTitle:e}}},R=(0,E.A)(T,[["render",function(e,l){const t=(0,a.g2)("a-translation"),n=(0,a.g2)("page-fieldset-basic"),d=(0,a.g2)("page-fieldset-change"),o=(0,a.g2)("page-fieldset-collapse"),i=(0,a.g2)("aloha-table-props"),s=(0,a.g2)("aloha-table-translate"),_=(0,a.g2)("aloha-page");return(0,a.uX)(),(0,a.Wv)(_,{"page-title":e.pageTitle},{body:(0,a.k6)((()=>[(0,a.bF)(t,{tag:"p",html:"_A_FIELDSET_COMPONENT_DESCRIPTION_"}),(0,a.bF)(n),(0,a.bF)(d),(0,a.bF)(o),(0,a.bF)(i,{data:e.dataProps},null,8,["data"]),(0,a.bF)(i,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),(0,a.bF)(s,{data:e.dataTranslate},null,8,["data"])])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.7334.29a4a85896da650dc962.js.map