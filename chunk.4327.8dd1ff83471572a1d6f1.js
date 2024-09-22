"use strict";(self.webpackChunkaloha_vue_docs=self.webpackChunkaloha_vue_docs||[]).push([[4327],{7061:(e,l,n)=>{n.d(l,{A:()=>s});var a=n(6365);const t={class:"a_p_2"};var o=n(5407),d=n(2187),c=n(2543);const r={name:"AlohaTableTranslate",components:{ATable:o.A},props:{data:{type:Array,required:!0}},setup(e){const{columns:l}={columns:[{id:"placeholder",label:"_ALOHA_TABLE_COLUMN_TRANSLATE_PLACEHOLDER_",keyLabel:"placeholder",sortId:"placeholder"},{id:"translate",label:"_ALOHA_TABLE_COLUMN_TRANSLATE_",keyLabel:"translate",sortId:"translate"}]},{dataTranslated:n}=function(e){const l=(0,a.lW)(e,"data");return{dataTranslated:(0,a.EW)((()=>{const e=[];return(0,c.forEach)(l.value,(l=>{e.push({placeholder:l,translate:(0,d.a1)({placeholder:l})})})),e}))}}(e);return{columns:l,dataTranslated:n}}},s=(0,n(6262).A)(r,[["render",function(e,l){const n=(0,a.g2)("a-table");return(0,a.uX)(),(0,a.CE)("div",t,[(0,a.bF)(n,{label:"_ALOHA_TABLE_TRANSLATE_LABEL_",columns:e.columns,data:e.dataTranslated,"is-action-column-visible":!1,"model-sort":"name","is-columns-dnd":!1,"is-sorting-multi-column":!1,"show-first-sorting-sequence-number":!1},null,8,["columns","data"])])}]])},2768:(e,l,n)=>{n.r(l),n.d(l,{default:()=>k});var a=n(6365),t=n(4787),o=n(6877),d=n(8310),c=n(635),r=n(7061),s=n(7791),i=n(9832),u=n(1912);const m={name:"PageFieldsetChildrenBasic",components:{AFieldset:i.A,AlohaExample:u.A},setup(){const e=(0,a.KR)(void 0),{codeHtml:l}={codeHtml:'<a-fieldset\n  v-model="model"\n  :children="children"\n  label="Fieldset"\n></a-fieldset>\n<div>model: {{ model }}</div>'},{codeJs:n}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AFieldset from "aloha-vue/src/ui/AFieldset/AFieldset";\n    \nexport default {\n  name: "PageFieldsetChildrenBasic",\n  components: {\n    AFieldset,\n  },\n  setup() {\n    const children = [\n      {\n        type: "text",\n        label: "Text",\n        id: "aloha.text",\n      },\n      {\n        type: "oneCheckbox",\n        label: "Checkbox",\n        id: "aloha.checkbox",\n      },\n      {\n        type: "currency",\n        label: "Currency",\n        id: "aloha.currency",\n      },\n      {\n        type: "date",\n        label: "Date",\n        id: "aloha.date",\n      },\n      {\n        type: "file",\n        label: "File",\n        id: "aloha.file",\n      },\n    ];\n    const model = ref(undefined);\n    \n    return {\n      children,\n      model,\n    };\n  },\n};'};return{children:[{type:"text",label:"Text",id:"aloha.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox"},{type:"currency",label:"Currency",id:"aloha.currency"},{type:"date",label:"Date",id:"aloha.date"},{type:"file",label:"File",id:"aloha.file"}],codeHtml:l,codeJs:n,model:e}}};var _=n(6262);const h=(0,_.A)(m,[["render",function(e,l){const n=(0,a.g2)("a-fieldset"),t=(0,a.g2)("aloha-example");return(0,a.uX)(),(0,a.Wv)(t,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["children"]},{default:(0,a.k6)((()=>[(0,a.bF)(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=l=>e.model=l),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),(0,a.Lk)("div",null,"model: "+(0,a.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),p={name:"PageFieldsetChildrenClassColumn",components:{AFieldset:i.A,AlohaExample:u.A},setup(){const e=(0,a.KR)(void 0),{codeHtml:l}={codeHtml:'<a-fieldset\n  v-model="model"\n  :children="children"\n  class-column-default="a_column a_column_6 a_column_12_touch"\n  label="Fieldset"\n></a-fieldset>\n<div>model: {{ model }}</div>'},{codeJs:n}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AFieldset from "aloha-vue/src/ui/AFieldset/AFieldset";\n    \nexport default {\n  name: "PageFieldsetChildrenClassColumn",\n  components: {\n    AFieldset,\n  },\n  setup() {\n    const children = [\n      {\n        type: "text",\n        label: "Text",\n        id: "aloha1.text",\n        classColumn: "a_column a_column_12"\n      },\n      {\n        type: "oneCheckbox",\n        label: "Checkbox",\n        id: "aloha1.checkbox",\n      },\n      {\n        type: "currency",\n        label: "Currency",\n        id: "aloha1.currency",\n      },\n      {\n        type: "date",\n        label: "Date",\n        id: "aloha1.date",\n      },\n      {\n        type: "file",\n        label: "File",\n        id: "aloha1.file",\n      },\n    ];\n    const model = ref(undefined);\n    \n    return {\n      children,\n      model,\n    };\n  },\n};'};return{children:[{type:"text",label:"Text",id:"aloha1.text",classColumn:"a_column a_column_12"},{type:"oneCheckbox",label:"Checkbox",id:"aloha1.checkbox"},{type:"currency",label:"Currency",id:"aloha1.currency"},{type:"date",label:"Date",id:"aloha1.date"},{type:"file",label:"File",id:"aloha1.file"}],codeHtml:l,codeJs:n,model:e}}},A=(0,_.A)(p,[["render",function(e,l){const n=(0,a.g2)("a-fieldset"),t=(0,a.g2)("aloha-example");return(0,a.uX)(),(0,a.Wv)(t,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CLASS_COLUMN_HEADER_",description:"_A_UI_GROUP_CLASS_COLUMN_DESCRIPTION_",props:["class-column-default"]},{default:(0,a.k6)((()=>[(0,a.bF)(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=l=>e.model=l),children:e.children,"class-column-default":"a_column a_column_6 a_column_12_touch",label:"Fieldset"},null,8,["modelValue","children"]),(0,a.Lk)("div",null,"model: "+(0,a.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),b={name:"PageFieldsetChildrenClassColumns",components:{AFieldset:i.A,AlohaExample:u.A},setup(){const e=(0,a.KR)(void 0),{codeHtml:l}={codeHtml:'<a-fieldset\n  v-model="model"\n  :children="children"\n  class-column-default="a_column a_column_4 a_column_8_touch"\n  class-columns="a_columns a_columns_count_8 a_columns_gap_y_1 a_columns_gap_x_1"\n  label="Fieldset"\n></a-fieldset>\n<a-fieldset\n  v-model="model"\n  :children="children"\n  class-columns="a_columns a_columns_count_12 a_columns_gap_y_4"\n  class="a_mt_3"\n  label="Fieldset"\n></a-fieldset>\n<div>model: {{ model }}</div>'},{codeJs:n}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AFieldset from "aloha-vue/src/ui/AFieldset/AFieldset";\n    \nexport default {\n  name: "PageFieldsetChildrenClassColumns",\n  components: {\n    AFieldset,\n  },\n  setup() {\n    const children = [\n      {\n        type: "text",\n        label: "Text",\n        id: "aloha2.text",\n        classColumn: "a_column a_column_12"\n      },\n      {\n        type: "oneCheckbox",\n        label: "Checkbox",\n        id: "aloha2.checkbox",\n      },\n      {\n        type: "currency",\n        label: "Currency",\n        id: "aloha2.currency",\n      },\n      {\n        type: "date",\n        label: "Date",\n        id: "aloha2.date",\n      },\n      {\n        type: "file",\n        label: "File",\n        id: "aloha2.file",\n      },\n    ];\n    const model = ref(undefined);\n    \n    return {\n      children,\n      model,\n    };\n  },\n};'};return{children:[{type:"text",label:"Text",id:"aloha2.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha2.checkbox"},{type:"currency",label:"Currency",id:"aloha2.currency"},{type:"date",label:"Date",id:"aloha2.date"}],codeHtml:l,codeJs:n,model:e}}},y=(0,_.A)(b,[["render",function(e,l){const n=(0,a.g2)("a-fieldset"),t=(0,a.g2)("aloha-example");return(0,a.uX)(),(0,a.Wv)(t,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CLASS_COLUMNS_HEADER_",description:"_A_UI_GROUP_CLASS_COLUMNS_DESCRIPTION_",props:["class-columns"]},{default:(0,a.k6)((()=>[(0,a.bF)(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=l=>e.model=l),children:e.children,"class-column-default":"a_column a_column_4 a_column_8_touch","class-columns":"a_columns a_columns_count_8 a_columns_gap_y_1 a_columns_gap_x_1",label:"Fieldset"},null,8,["modelValue","children"]),(0,a.bF)(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=l=>e.model=l),children:e.children,"class-columns":"a_columns a_columns_count_12 a_columns_gap_y_4",label:"Fieldset"},null,8,["modelValue","children"]),(0,a.Lk)("div",null,"model: "+(0,a.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),x={name:"PageFieldsetChildrenErrorsAll",components:{AFieldset:i.A,AlohaExample:u.A},setup(){const e=(0,a.KR)(void 0),{codeHtml:l}={codeHtml:'<a-fieldset\n  v-model="model"\n  :children="children"\n  :errors-all="errorsAll"\n  label="Fieldset"\n></a-fieldset>\n<div>model: {{ model }}</div>'},{codeJs:n}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AFieldset from "aloha-vue/src/ui/AFieldset/AFieldset";\n    \nexport default {\n  name: "PageFieldsetChildrenErrorsAll",\n  components: {\n    AFieldset,\n  },\n  setup() {\n    const children = [\n      {\n        type: "text",\n        label: "Text",\n        id: "aloha3.text",\n        classColumn: "a_column a_column_12"\n      },\n      {\n        type: "oneCheckbox",\n        label: "Checkbox",\n        id: "aloha3.checkbox",\n      },\n      {\n        type: "currency",\n        label: "Currency",\n        id: "aloha3.currency",\n      },\n      {\n        type: "date",\n        label: "Date",\n        id: "aloha3.date",\n      },\n    ];\n    const errorsAll = {\n      aloha3: {\n        text: "error",\n        checkbox: "error",\n        currency: "error",\n        date: "error",\n      },\n    };\n    const model = ref(undefined);\n    \n    return {\n      children,\n      errorsAll,\n      model,\n    };\n  },\n};'};return{children:[{type:"text",label:"Text",id:"aloha3.text",classColumn:"a_column a_column_12"},{type:"oneCheckbox",label:"Checkbox",id:"aloha3.checkbox"},{type:"currency",label:"Currency",id:"aloha3.currency"},{type:"date",label:"Date",id:"aloha3.date"}],errorsAll:{aloha3:{text:"error",checkbox:"error",currency:"error",date:"error"}},codeHtml:l,codeJs:n,model:e}}},C=(0,_.A)(x,[["render",function(e,l){const n=(0,a.g2)("a-fieldset"),t=(0,a.g2)("aloha-example");return(0,a.uX)(),(0,a.Wv)(t,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_ALL_HEADER_",description:"_A_UI_GROUP_ERRORS_ALL_DESCRIPTION_",props:["errors-all"]},{default:(0,a.k6)((()=>[(0,a.bF)(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=l=>e.model=l),children:e.children,"errors-all":e.errorsAll,label:"Fieldset"},null,8,["modelValue","children","errors-all"]),(0,a.Lk)("div",null,"model: "+(0,a.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]),f={name:"PageFieldsetChildrenTree",components:{AFieldset:i.A,AlohaExample:u.A},setup(){const e=(0,a.KR)(void 0),{codeHtml:l}={codeHtml:'<a-fieldset\n  v-model="model"\n  :children="children"\n  label="Fieldset"\n></a-fieldset>\n<div>model: {{ model }}</div>'},{codeJs:n}={codeJs:'import {\n  ref,\n} from "vue";\n\nimport AFieldset from "aloha-vue/src/ui/AFieldset/AFieldset";\n    \nexport default {\n  name: "PageFieldsetChildrenTree",\n  components: {\n    AFieldset,\n  },\n  setup() {\n    const children = [\n      {\n        type: "text",\n        label: "Text 1",\n        id: "aloha4.text1",\n      },\n      {\n        type: "fieldset",\n        label: "Fieldset 1",\n        id: "aloha4.fieldset1",\n        children: [\n          {\n            type: "text",\n            label: "Text 2",\n            id: "aloha4.text2",\n          },\n          {\n            type: "oneCheckbox",\n            label: "Checkbox",\n            id: "aloha4.checkbox",\n          },\n        ],\n      },\n      {\n        type: "fieldset",\n        label: "Fieldset 2",\n        id: "aloha4.fieldset2",\n        children: [\n          {\n            type: "text",\n            label: "Text 3",\n            id: "aloha4.text3",\n          },\n          {\n            type: "currency",\n            label: "Currency",\n            id: "aloha4.currency",\n          },\n        ],\n      },\n      {\n        type: "date",\n        label: "Date",\n        id: "aloha4.date",\n      },\n    ];\n    const model = ref(undefined);\n    \n    return {\n      children,\n      model,\n    };\n  },\n};'};return{children:[{type:"text",label:"Text 1",id:"aloha4.text1"},{type:"fieldset",label:"Fieldset 1",id:"aloha4.fieldset1",children:[{type:"text",label:"Text 2",id:"aloha4.text2"},{type:"oneCheckbox",label:"Checkbox",id:"aloha4.checkbox"}]},{type:"fieldset",label:"Fieldset 2",id:"aloha4.fieldset2",children:[{type:"text",label:"Text 3",id:"aloha4.text3"},{type:"currency",label:"Currency",id:"aloha4.currency"}]},{type:"date",label:"Date",id:"aloha4.date"}],codeHtml:l,codeJs:n,model:e}}},F=(0,_.A)(f,[["render",function(e,l){const n=(0,a.g2)("a-fieldset"),t=(0,a.g2)("aloha-example");return(0,a.uX)(),(0,a.Wv)(t,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_FIELDSET_CHILDREN_GROUP_TREE_HEADER_",description:"_A_FIELDSET_CHILDREN_GROUP_TREE_DESCRIPTION_",props:["children"]},{default:(0,a.k6)((()=>[(0,a.bF)(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=l=>e.model=l),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),(0,a.Lk)("div",null,"model: "+(0,a.v_)(e.model),1)])),_:1},8,["code-html","code-js"])}]]);var g=n(2187),E=n(4738),P=n(2515),T=n(2543);const v={name:"PageFieldsetChildren",components:{AElement:t.A,AList:o.A,AlohaPage:d.A,AlohaTableProps:c.A,AlohaTableTranslate:r.A,ATranslation:s.A,PageFieldsetChildrenBasic:h,PageFieldsetChildrenClassColumn:A,PageFieldsetChildrenClassColumns:y,PageFieldsetChildrenErrorsAll:C,PageFieldsetChildrenTree:F},setup(){const{pageTitle:e}=function(){const e=(0,a.EW)((()=>(0,g.a1)({placeholder:"_A_FIELDSET_CHILDREN_COMPONENT_NAME_"})));return{pageTitle:(0,a.EW)((()=>"AFieldset"+(e.value?` (${e.value})`:"")))}}(),{dataProps:l}={dataProps:[{name:"children",description:"_A_UI_PROPS_CHILDREN_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"class-column-default",description:"_A_UI_PROPS_CLASS_COLUMN_DEFAULT_DESCRIPTION_",type:"String / Object",default:"a_column a_column_12",required:!1},{name:"class-columns",description:"_A_UI_PROPS_CLASS_COLUMNS_DESCRIPTION_",type:"String / Object",default:"a_columns a_columns_count_12",required:!1},{name:"errors-all",description:"_A_UI_PROPS_ERRORS_ALL_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1}]},{types:n}=function(){const e={ACheckbox:{name:"PageCheckbox"},AInput:{name:"PageInput"},AInputCurrency:{name:"PageInputCurrency"},ADatepicker:{name:"PageDatepicker"},ADatepickerRange:{name:"PageDatepickerRange"},AInputFile:void 0,AInputNumber:{name:"PageInputNumber"},AInputNumberRange:{name:"PageInputNumberRange"},AJson:{name:"PageJson"},AOneCheckbox:{name:"PageOneCheckbox"},ARadio:{name:"PageRadio"},ASelect:{name:"PageSelect"},ASwitch:{name:"PageSwitch"},ATemplate:{name:"PageTemplate"},ATextarea:{name:"PageTextarea"},ATinymce:{name:"PageTinyMce"},AFieldset:{name:"PageFieldset"},AGroup:""};return{types:(0,a.EW)((()=>{const l=[];return(0,T.forEach)({...E.A,...P.A},((n,a)=>{const t={type:e[n.name]?"link":"text",to:e[n.name],text:a};l.push(t)})),l}))}}();return{dataProps:l,pageTitle:e,types:n}}},k=(0,_.A)(v,[["render",function(e,l){const n=(0,a.g2)("a-translation"),t=(0,a.g2)("a-element"),o=(0,a.g2)("a-list"),d=(0,a.g2)("page-fieldset-children-basic"),c=(0,a.g2)("page-fieldset-children-class-column"),r=(0,a.g2)("page-fieldset-children-class-columns"),s=(0,a.g2)("page-fieldset-children-errors-all"),i=(0,a.g2)("page-fieldset-children-tree"),u=(0,a.g2)("aloha-table-props"),m=(0,a.g2)("aloha-page");return(0,a.uX)(),(0,a.Wv)(m,{"page-title":e.pageTitle},{body:(0,a.k6)((()=>[(0,a.bF)(n,{tag:"p",html:"_A_FIELDSET_CHILDREN_COMPONENT_DESCRIPTION_"}),(0,a.bF)(n,{tag:"h2",html:"_A_UI_TYPES_FOR_USE_"}),(0,a.bF)(o,{class:"a_list_without_styles",data:e.types},{listItem:(0,a.k6)((({item:e})=>[(0,a.bF)(t,{text:e.text,to:e.to,type:e.type},null,8,["text","to","type"])])),_:1},8,["data"]),(0,a.bF)(d),(0,a.bF)(c),(0,a.bF)(r),(0,a.bF)(s),(0,a.bF)(i),(0,a.bF)(u,{data:e.dataProps},null,8,["data"])])),_:1},8,["page-title"])}]])}}]);
//# sourceMappingURL=chunk.4327.8dd1ff83471572a1d6f1.js.map