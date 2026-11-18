import{t as e}from"./chunk.AlohaFormTypes.tKbxZRSt.js";import{t}from"./chunk.AlohaPage.CLNR4rDt.js";import{t as n}from"./chunk.AlohaTableProps.DlBJsYbc.js";import{t as r}from"./chunk.AlohaTableTranslate.Co-yFOce.js";import{Bt as i,Ft as a,It as o,Pt as s,Zt as c,an as l,pn as u,sn as d,tn as f}from"./chunk.vendor.H0cZuFAV.js";import{t as p}from"./chunk.AlohaExample.hU-VY3yF.js";import{Mt as m,et as h,j as g}from"./bundle.index.BGB9gPhL.js";import{t as _}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function v(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function y(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenBasic",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox",
      },
      {
        type: "currency",
        label: "Currency",
        id: "aloha.currency",
      },
      {
        type: "date",
        label: "Date",
        id: "aloha.date",
      },
      {
        type: "file",
        label: "File",
        id: "aloha.file",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}var b={name:`PageFieldsetChildrenBasic`,components:{AFieldset:g,AlohaExample:p},setup(){let e=[{type:`text`,label:`Text`,id:`aloha.text`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha.checkbox`},{type:`currency`,label:`Currency`,id:`aloha.currency`},{type:`date`,label:`Date`,id:`aloha.date`},{type:`file`,label:`File`,id:`aloha.file`}],t=d(void 0),{codeHtml:n}=v(),{codeJs:r}=y();return{children:e,codeHtml:n,codeJs:r,model:t}}};function x(e,t,n,r,s,d){let p=f(`a-fieldset`),m=f(`aloha-example`);return c(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`children`]},{default:l(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,label:`Fieldset`},null,8,[`modelValue`,`children`]),a(`div`,null,`model: `+u(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var S=_(b,[[`render`,x]]);function C(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  class-column-default="a_column a_column_6 a_column_12_touch"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function w(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenClassColumn",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha1.text",
        classColumn: "a_column a_column_12"
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha1.checkbox",
      },
      {
        type: "currency",
        label: "Currency",
        id: "aloha1.currency",
      },
      {
        type: "date",
        label: "Date",
        id: "aloha1.date",
      },
      {
        type: "file",
        label: "File",
        id: "aloha1.file",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}var T={name:`PageFieldsetChildrenClassColumn`,components:{AFieldset:g,AlohaExample:p},setup(){let e=[{type:`text`,label:`Text`,id:`aloha1.text`,classColumn:`a_column a_column_12`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha1.checkbox`},{type:`currency`,label:`Currency`,id:`aloha1.currency`},{type:`date`,label:`Date`,id:`aloha1.date`},{type:`file`,label:`File`,id:`aloha1.file`}],t=d(void 0),{codeHtml:n}=C(),{codeJs:r}=w();return{children:e,codeHtml:n,codeJs:r,model:t}}};function E(e,t,n,r,s,d){let p=f(`a-fieldset`),m=f(`aloha-example`);return c(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CLASS_COLUMN_HEADER_`,description:`_A_UI_GROUP_CLASS_COLUMN_DESCRIPTION_`,props:[`class-column-default`]},{default:l(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,"class-column-default":`a_column a_column_6 a_column_12_touch`,label:`Fieldset`},null,8,[`modelValue`,`children`]),a(`div`,null,`model: `+u(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var D=_(T,[[`render`,E]]);function O(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  class-column-default="a_column a_column_4 a_column_8_touch"
  class-columns="a_columns a_columns_count_8 a_columns_gap_y_1 a_columns_gap_x_1"
  label="Fieldset"
></a-fieldset>
<a-fieldset
  v-model="model"
  :children="children"
  class-columns="a_columns a_columns_count_12 a_columns_gap_y_4"
  class="a_mt_3"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function k(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenClassColumns",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha2.text",
        classColumn: "a_column a_column_12"
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha2.checkbox",
      },
      {
        type: "currency",
        label: "Currency",
        id: "aloha2.currency",
      },
      {
        type: "date",
        label: "Date",
        id: "aloha2.date",
      },
      {
        type: "file",
        label: "File",
        id: "aloha2.file",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}var A={name:`PageFieldsetChildrenClassColumns`,components:{AFieldset:g,AlohaExample:p},setup(){let e=[{type:`text`,label:`Text`,id:`aloha2.text`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha2.checkbox`},{type:`currency`,label:`Currency`,id:`aloha2.currency`},{type:`date`,label:`Date`,id:`aloha2.date`}],t=d(void 0),{codeHtml:n}=O(),{codeJs:r}=k();return{children:e,codeHtml:n,codeJs:r,model:t}}};function j(e,t,n,r,s,d){let p=f(`a-fieldset`),m=f(`aloha-example`);return c(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CLASS_COLUMNS_HEADER_`,description:`_A_UI_GROUP_CLASS_COLUMNS_DESCRIPTION_`,props:[`class-columns`]},{default:l(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,"class-column-default":`a_column a_column_4 a_column_8_touch`,"class-columns":`a_columns a_columns_count_8 a_columns_gap_y_1 a_columns_gap_x_1`,label:`Fieldset`},null,8,[`modelValue`,`children`]),i(p,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,children:e.children,"class-columns":`a_columns a_columns_count_12 a_columns_gap_y_4`,label:`Fieldset`},null,8,[`modelValue`,`children`]),a(`div`,null,`model: `+u(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var M=_(A,[[`render`,j]]);function N(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function P(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AFieldset,
} from "aloha-vue";

export default {
  name: "PageFieldsetChildrenDependencies",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "switch",
        label: "Show details",
        id: "showDetails",
      },
      {
        type: "radio",
        label: "Detail type",
        id: "detailType",
        data: [
          { label: "Basic", value: "basic" },
          { label: "Advanced", value: "advanced" },
        ],
      },
      {
        type: "text",
        label: "Details",
        id: "details",
        dependencies: {
          id: "showDetails",
          value: true,
        },
      },
      {
        type: "dateRange",
        label: "Period",
        id: "period",
        dependencies: {
          id: "showDetails",
          value: true,
        },
      },
      {
        type: "template",
        id: "advancedHint",
        html: "Advanced details are enabled.",
        dependencies: [
          { id: "showDetails", value: true },
          { id: "detailType", value: "advanced" },
        ],
      },
    ];
    const model = ref({
      showDetails: false,
      detailType: "basic",
    });

    return {
      children,
      model,
    };
  },
};`}}var F={name:`PageFieldsetChildrenDependencies`,components:{AFieldset:g,AlohaExample:p},setup(){let e=[{type:`switch`,label:`Show details`,id:`showDetails`},{type:`radio`,label:`Detail type`,id:`detailType`,data:[{label:`Basic`,value:`basic`},{label:`Advanced`,value:`advanced`}]},{type:`text`,label:`Details`,id:`details`,dependencies:{id:`showDetails`,value:!0}},{type:`dateRange`,label:`Period`,id:`period`,dependencies:{id:`showDetails`,value:!0}},{type:`template`,id:`advancedHint`,html:`Advanced details are enabled.`,dependencies:[{id:`showDetails`,value:!0},{id:`detailType`,value:`advanced`}]}],t=d({showDetails:!1,detailType:`basic`}),{codeHtml:n}=N(),{codeJs:r}=P();return{children:e,codeHtml:n,codeJs:r,model:t}}};function I(e,t,n,r,s,d){let p=f(`a-fieldset`),m=f(`aloha-example`);return c(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_FIELDSET_CHILDREN_DEPENDENCIES_HEADER_`,description:`_A_FIELDSET_CHILDREN_DEPENDENCIES_DESCRIPTION_`,props:[`children`,`dependencies`,`model-dependencies`]},{default:l(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,label:`Fieldset`},null,8,[`modelValue`,`children`]),a(`div`,null,`model: `+u(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var L=_(F,[[`render`,I]]);function R(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  :errors-all="errorsAll"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function ee(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenErrorsAll",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha3.text",
        classColumn: "a_column a_column_12"
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha3.checkbox",
      },
      {
        type: "currency",
        label: "Currency",
        id: "aloha3.currency",
      },
      {
        type: "date",
        label: "Date",
        id: "aloha3.date",
      },
    ];
    const errorsAll = {
      aloha3: {
        text: "error",
        checkbox: "error",
        currency: "error",
        date: "error",
      },
    };
    const model = ref(undefined);
    
    return {
      children,
      errorsAll,
      model,
    };
  },
};`}}var z={name:`PageFieldsetChildrenErrorsAll`,components:{AFieldset:g,AlohaExample:p},setup(){let e=[{type:`text`,label:`Text`,id:`aloha3.text`,classColumn:`a_column a_column_12`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha3.checkbox`},{type:`currency`,label:`Currency`,id:`aloha3.currency`},{type:`date`,label:`Date`,id:`aloha3.date`}],t={aloha3:{text:`error`,checkbox:`error`,currency:`error`,date:`error`}},n=d(void 0),{codeHtml:r}=R(),{codeJs:i}=ee();return{children:e,errorsAll:t,codeHtml:r,codeJs:i,model:n}}};function B(e,t,n,r,s,d){let p=f(`a-fieldset`),m=f(`aloha-example`);return c(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_ALL_HEADER_`,description:`_A_UI_GROUP_ERRORS_ALL_DESCRIPTION_`,props:[`errors-all`]},{default:l(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,"errors-all":e.errorsAll,label:`Fieldset`},null,8,[`modelValue`,`children`,`errors-all`]),a(`div`,null,`model: `+u(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var V=_(z,[[`render`,B]]);function H(){return{codeHtml:`<a-fieldset
  :model-value="model1"
  :children="children1"
  :readonly="true"
  label="Fieldset 1"
></a-fieldset>
<a-fieldset
  :model-value="model2"
  :children="children2"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Fieldset 2"
  readonly-default="-"
></a-fieldset>`}}function U(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenReadonly",
  components: {
    AFieldset,
  },
  setup() {
    const children1 = [
      {
        type: "text",
        label: "Text 1",
        id: "aloha5.text1",
      },
      {
        type: "fieldset",
        label: "Fieldset 1",
        id: "aloha5.fieldset1",
        children: [
          {
            type: "text",
            label: "Text 2",
            id: "aloha5.text2",
          },
          {
            type: "oneCheckbox",
            label: "Checkbox",
            id: "aloha5.checkbox",
          },
        ],
      },
      {
        type: "fieldset",
        label: "Fieldset 2",
        id: "aloha5.fieldset2",
        children: [
          {
            type: "text",
            label: "Text 3",
            id: "aloha5.text3",
          },
          {
            type: "currency",
            label: "Currency",
            id: "aloha5.currency",
          },
        ],
      },
      {
        type: "date",
        label: "Date",
        id: "aloha5.date",
      },
    ];
    const children2 = [
      {
        type: "text",
        label: "Text 1",
        id: "aloha6.text1",
        readonlyDefault: "---",
      },
      {
        type: "fieldset",
        label: "Fieldset 1",
        id: "aloha6.fieldset1",
        children: [
          {
            type: "text",
            label: "Text 2",
            id: "aloha6.text2",
          },
          {
            type: "oneCheckbox",
            label: "Checkbox",
            id: "aloha6.checkbox",
            readonlyDefault: "---",
          },
        ],
      },
      {
        type: "fieldset",
        label: "Fieldset 2",
        id: "aloha6.fieldset2",
        children: [
          {
            type: "text",
            label: "Text 3",
            id: "aloha6.text3",
          },
          {
            type: "currency",
            label: "Currency",
            id: "aloha6.currency",
          },
        ],
      },
      {
        type: "date",
        label: "Date",
        id: "aloha6.date",
      },
    ];
    const model1 = ref({
      aloha5: {
        text2: "Aloha",
        date: "2022-01-01",
      },
    });
    const model2 = ref(undefined);
    
    return {
      children1,
      children2,
      model1,
      model2,
    };
  },
};`}}var W={name:`PageFieldsetChildrenReadonly`,components:{AFieldset:g,AlohaExample:p},setup(){let e=[{type:`text`,label:`Text 1`,id:`aloha5.text1`},{type:`fieldset`,label:`Fieldset 1`,id:`aloha5.fieldset1`,children:[{type:`text`,label:`Text 2`,id:`aloha5.text2`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha5.checkbox`}]},{type:`fieldset`,label:`Fieldset 2`,id:`aloha5.fieldset2`,children:[{type:`text`,label:`Text 3`,id:`aloha5.text3`},{type:`currency`,label:`Currency`,id:`aloha5.currency`}]},{type:`date`,label:`Date`,id:`aloha5.date`}],t=[{type:`text`,label:`Text 1`,id:`aloha6.text1`,readonlyDefault:`---`},{type:`fieldset`,label:`Fieldset 1`,id:`aloha6.fieldset1`,children:[{type:`text`,label:`Text 2`,id:`aloha6.text2`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha6.checkbox`,readonlyDefault:`---`}]},{type:`fieldset`,label:`Fieldset 2`,id:`aloha6.fieldset2`,children:[{type:`text`,label:`Text 3`,id:`aloha6.text3`},{type:`currency`,label:`Currency`,id:`aloha6.currency`}]},{type:`date`,label:`Date`,id:`aloha6.date`}],n=d({aloha5:{text2:`Aloha`,date:`2022-01-01`}}),r=d(void 0),{codeHtml:i}=H(),{codeJs:a}=U();return{children1:e,children2:t,codeHtml:i,codeJs:a,model1:n,model2:r}}};function G(e,t,n,r,a,s){let u=f(`a-fieldset`),d=f(`aloha-example`);return c(),o(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:l(()=>[i(u,{"model-value":e.model1,children:e.children1,readonly:!0,label:`Fieldset 1`},null,8,[`model-value`,`children`]),i(u,{class:`a_mt_3`,"model-value":e.model2,children:e.children2,readonly:!0,"help-text":`Aloha`,label:`Fieldset 2`,"readonly-default":`-`},null,8,[`model-value`,`children`])]),_:1},8,[`code-html`,`code-js`])}var K=_(W,[[`render`,G]]);function q(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function J(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenTree",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text 1",
        id: "aloha4.text1",
      },
      {
        type: "fieldset",
        label: "Fieldset 1",
        id: "aloha4.fieldset1",
        children: [
          {
            type: "text",
            label: "Text 2",
            id: "aloha4.text2",
          },
          {
            type: "oneCheckbox",
            label: "Checkbox",
            id: "aloha4.checkbox",
          },
        ],
      },
      {
        type: "fieldset",
        label: "Fieldset 2",
        id: "aloha4.fieldset2",
        children: [
          {
            type: "text",
            label: "Text 3",
            id: "aloha4.text3",
          },
          {
            type: "currency",
            label: "Currency",
            id: "aloha4.currency",
          },
        ],
      },
      {
        type: "date",
        label: "Date",
        id: "aloha4.date",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}var Y={name:`PageFieldsetChildrenTree`,components:{AFieldset:g,AlohaExample:p},setup(){let e=[{type:`text`,label:`Text 1`,id:`aloha4.text1`},{type:`fieldset`,label:`Fieldset 1`,id:`aloha4.fieldset1`,children:[{type:`text`,label:`Text 2`,id:`aloha4.text2`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha4.checkbox`}]},{type:`fieldset`,label:`Fieldset 2`,id:`aloha4.fieldset2`,children:[{type:`text`,label:`Text 3`,id:`aloha4.text3`},{type:`currency`,label:`Currency`,id:`aloha4.currency`}]},{type:`date`,label:`Date`,id:`aloha4.date`}],t=d(void 0),{codeHtml:n}=q(),{codeJs:r}=J();return{children:e,codeHtml:n,codeJs:r,model:t}}};function X(e,t,n,r,s,d){let p=f(`a-fieldset`),m=f(`aloha-example`);return c(),o(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_FIELDSET_CHILDREN_GROUP_TREE_HEADER_`,description:`_A_FIELDSET_CHILDREN_GROUP_TREE_DESCRIPTION_`,props:[`children`]},{default:l(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,children:e.children,label:`Fieldset`},null,8,[`modelValue`,`children`]),a(`div`,null,`model: `+u(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var Z=_(Y,[[`render`,X]]);function Q(){let e=s(()=>m({placeholder:`_A_FIELDSET_CHILDREN_COMPONENT_NAME_`}));return{pageTitle:s(()=>`AFieldset${e.value?` (${e.value})`:``}`)}}function $(){return{dataProps:[{name:`children`,description:`_A_UI_PROPS_CHILDREN_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`class-column-default`,description:`_A_UI_PROPS_CLASS_COLUMN_DEFAULT_DESCRIPTION_`,type:`String / Object`,default:`a_column a_column_12`,required:!1},{name:`class-columns`,description:`_A_UI_PROPS_CLASS_COLUMNS_DESCRIPTION_`,type:`String / Object`,default:`a_columns a_columns_count_12`,required:!1},{name:`errors-all`,description:`_A_UI_PROPS_ERRORS_ALL_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:void 0,required:!1}]}}var te={name:`PageFieldsetChildren`,components:{AlohaFormTypes:e,AlohaPage:t,AlohaTableProps:n,AlohaTableTranslate:r,ATranslation:h,PageFieldsetChildrenBasic:S,PageFieldsetChildrenClassColumn:D,PageFieldsetChildrenClassColumns:M,PageFieldsetChildrenDependencies:L,PageFieldsetChildrenErrorsAll:V,PageFieldsetChildrenReadonly:K,PageFieldsetChildrenTree:Z},setup(){let{pageTitle:e}=Q(),{dataProps:t}=$();return{dataProps:t,pageTitle:e}}};function ne(e,t,n,r,a,s){let u=f(`a-translation`),d=f(`aloha-form-types`),p=f(`page-fieldset-children-basic`),m=f(`page-fieldset-children-dependencies`),h=f(`page-fieldset-children-class-column`),g=f(`page-fieldset-children-class-columns`),_=f(`page-fieldset-children-errors-all`),v=f(`page-fieldset-children-tree`),y=f(`page-fieldset-children-readonly`),b=f(`aloha-table-props`),x=f(`aloha-page`);return c(),o(x,{"page-title":e.pageTitle},{body:l(()=>[i(u,{tag:`p`,html:`_A_FIELDSET_CHILDREN_COMPONENT_DESCRIPTION_`}),i(d),i(p),i(m),i(h),i(g),i(_),i(v),i(y),i(b,{data:e.dataProps},null,8,[`data`])]),_:1},8,[`page-title`])}var re=_(te,[[`render`,ne]]);export{re as default};