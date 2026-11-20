import{t as e}from"./chunk.AlohaPage.C_AWyoed.js";import{t}from"./chunk.AlohaTableProps.BrkQYKm5.js";import{t as n}from"./chunk.AlohaTableTranslate.39dY6EQ4.js";import{Ft as r,It as i,Pt as a,Qt as o,Vt as s,cn as c,mn as l,nn as u,on as d}from"./chunk.vendor.CTxSDDRk.js";import{t as f}from"./chunk.AlohaExample.C1ql1MDy.js";import{E as p,Yt as m,Z as h,it as g}from"./bundle.index.C6WaRsOC.js";import{t as _}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function v(){return{codeHtml:`<a-input-file
  v-model="model"
  label="Documents"
></a-input-file>
<div>model: {{ model ? model.name : "" }}</div>`}}function y(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileBasic",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};`}}var b={name:`PageInputFileBasic`,components:{AlohaExample:f,AInputFile:h},setup(){let e=c(void 0),{codeHtml:t}=v(),{codeJs:n}=y();return{codeHtml:t,codeJs:n,model:e}}},x={class:`a_mt_2`};function S(e,t,n,a,c,f){let p=u(`a-input-file`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_INPUT_FILE_GROUP_BASIC_DESCRIPTION_`,props:[`model-value`,`label`]},{default:d(()=>[s(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_INPUT_FILE_EXAMPLE_LABEL_`},null,8,[`modelValue`]),r(`div`,x,`model: `+l(e.model?e.model.name:``),1)]),_:1},8,[`code-html`,`code-js`])}var C=_(b,[[`render`,S]]);function w(){return{codeHtml:`<a-input-file
  v-model="model"
  class="a_mb_4"
  :disabled="true"
  label="Documents"
></a-input-file>
<a-input-file
  v-model="model"
  :disabled="true"
  :is-dropzone="true"
  label="Documents"
></a-input-file>`}}function T(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileDisabled",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref({
      name: "Contract.pdf",
      size: 245760,
    });

    return {
      model,
    };
  },
};`}}var ee={name:`PageInputFileDisabled`,components:{AlohaExample:f,AInputFile:h},setup(){let e=c({name:`Contract.pdf`,size:245760}),{codeHtml:t}=w(),{codeJs:n}=T();return{codeHtml:t,codeJs:n,model:e}}};function E(e,t,n,r,a,c){let l=u(`a-input-file`),f=u(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_FILE_GROUP_DISABLED_HEADER_`,props:[`disabled`]},{default:d(()=>[s(l,{class:`a_mb_4`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,disabled:!0,label:`_A_INPUT_FILE_EXAMPLE_LABEL_`},null,8,[`modelValue`]),s(l,{modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,disabled:!0,"is-dropzone":!0,label:`_A_INPUT_FILE_EXAMPLE_LABEL_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var D=_(ee,[[`render`,E]]);function O(){return{codeHtml:`<a-input-file
  v-model="model"
  :is-dropzone="true"
  :is-multiple="true"
  :is-append="true"
  label="Documents"
></a-input-file>`}}function k(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileDropzone",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref([]);

    return {
      model,
    };
  },
};`}}var A={name:`PageInputFileDropzone`,components:{AlohaExample:f,AInputFile:h},setup(){let e=c([]),{codeHtml:t}=O(),{codeJs:n}=k();return{codeHtml:t,codeJs:n,model:e}}};function j(e,t,n,r,a,c){let l=u(`a-input-file`),f=u(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_FILE_GROUP_DROPZONE_HEADER_`,description:`_A_INPUT_FILE_GROUP_DROPZONE_DESCRIPTION_`,props:[`is-dropzone`,`drop-text`]},{default:d(()=>[s(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-dropzone":!0,"is-multiple":!0,"is-append":!0,label:`_A_INPUT_FILE_EXAMPLE_LABEL_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var M=_(A,[[`render`,j]]);function N(){return{codeHtml:`<a-form
  v-model="model"
  :data="data"
></a-form>`}}function P(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  name: "PageInputFileForm",
  components: {
    AForm,
  },
  setup() {
    const model = ref({
      contract: undefined,
      attachments: [],
    });
    const data = [
      {
        id: "contract",
        type: "file",
        label: "_A_INPUT_FILE_EXAMPLE_LABEL_CONTRACT_",
        accept: ".pdf",
        required: true,
      },
      {
        id: "attachments",
        type: "file",
        label: "_A_INPUT_FILE_EXAMPLE_LABEL_ATTACHMENTS_",
        isDropzone: true,
        isMultiple: true,
        isAppend: true,
        maxFiles: 5,
      },
    ];

    return {
      data,
      model,
    };
  },
};`}}var F={name:`PageInputFileForm`,components:{AlohaExample:f,AForm:p},setup(){let e=c({contract:void 0,attachments:[]}),t=[{id:`contract`,type:`file`,label:`_A_INPUT_FILE_EXAMPLE_LABEL_CONTRACT_`,accept:`.pdf`,required:!0},{id:`attachments`,type:`file`,label:`_A_INPUT_FILE_EXAMPLE_LABEL_ATTACHMENTS_`,isDropzone:!0,isMultiple:!0,isAppend:!0,maxFiles:5}],{codeHtml:n}=N(),{codeJs:r}=P();return{codeHtml:n,codeJs:r,data:t,model:e}}};function I(e,t,n,r,a,c){let l=u(`a-form`),f=u(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_FILE_GROUP_FORM_HEADER_`,description:`_A_INPUT_FILE_GROUP_FORM_DESCRIPTION_`,props:[`type`]},{default:d(()=>[s(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var L=_(F,[[`render`,I]]);function R(){return{codeHtml:`<a-input-file
  v-model="model"
  class="a_mb_4"
  :required="true"
  label="Documents"
  label-description="The signed contract"
  help-text="Scan all pages into one file"
  text="Upload contract"
></a-input-file>
<a-input-file
  v-model="model"
  :is-dropzone="true"
  :required="true"
  errors="Please add the contract"
  label="Documents"
></a-input-file>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileHelpText",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};`}}var B={name:`PageInputFileHelpText`,components:{AlohaExample:f,AInputFile:h},setup(){let e=c(void 0),{codeHtml:t}=R(),{codeJs:n}=z();return{codeHtml:t,codeJs:n,model:e}}};function V(e,t,n,r,a,c){let l=u(`a-input-file`),f=u(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_FILE_GROUP_HELP_TEXT_HEADER_`,description:`_A_INPUT_FILE_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`,`label-description`,`errors`,`required`,`text`]},{default:d(()=>[s(l,{class:`a_mb_4`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,required:!0,label:`_A_INPUT_FILE_EXAMPLE_LABEL_`,"label-description":`_A_INPUT_FILE_EXAMPLE_LABEL_DESCRIPTION_`,"help-text":`_A_INPUT_FILE_EXAMPLE_HELP_TEXT_`,text:`_A_INPUT_FILE_EXAMPLE_TEXT_`},null,8,[`modelValue`]),s(l,{modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"is-dropzone":!0,required:!0,errors:`_A_INPUT_FILE_EXAMPLE_ERROR_`,label:`_A_INPUT_FILE_EXAMPLE_LABEL_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var H=_(B,[[`render`,V]]);function U(){return{codeHtml:`<a-input-file
  v-model="model"
  class="a_mb_4"
  :is-multiple="true"
  :is-append="true"
  label="Documents"
></a-input-file>
<a-input-file
  v-model="model"
  class="a_mb_4"
  :is-multiple="true"
  :is-removable="false"
  label="is-removable: false"
></a-input-file>
<a-input-file
  v-model="model"
  :is-multiple="true"
  :readonly="true"
  label="readonly"
></a-input-file>`}}function W(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileLinks",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref([
      {
        name: "Contract.pdf",
        size: 245760,
        url: "./assets/Tennis_ball_purple_background.png",
      },
      {
        name: "Invoice 2026-11.pdf",
        size: 81920,
        url: "./assets/Tennis_ball_purple_background.png",
      },
    ]);

    return {
      model,
    };
  },
};`}}var G={name:`PageInputFileLinks`,components:{AlohaExample:f,AInputFile:h},setup(){let e=c([{name:`Contract.pdf`,size:245760,url:`./assets/Tennis_ball_purple_background.png`},{name:`Invoice 2026-11.pdf`,size:81920,url:`./assets/Tennis_ball_purple_background.png`}]),{codeHtml:t}=U(),{codeJs:n}=W();return{codeHtml:t,codeJs:n,model:e}}};function K(e,t,n,r,a,c){let l=u(`a-input-file`),f=u(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_FILE_GROUP_LINKS_HEADER_`,description:`_A_INPUT_FILE_GROUP_LINKS_DESCRIPTION_`,props:[`model-value`,`readonly`,`is-removable`]},{default:d(()=>[s(l,{class:`a_mb_4`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-multiple":!0,"is-append":!0,label:`_A_INPUT_FILE_EXAMPLE_LABEL_`},null,8,[`modelValue`]),s(l,{class:`a_mb_4`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,"is-multiple":!0,"is-removable":!1,label:`is-removable: false`},null,8,[`modelValue`]),s(l,{modelValue:e.model,"onUpdate:modelValue":t[2]||=t=>e.model=t,"is-multiple":!0,readonly:!0,label:`readonly`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var q=_(G,[[`render`,K]]);function J(){return{codeHtml:`<a-input-file
  v-model="modelReplace"
  class="a_mb_4"
  :is-multiple="true"
  label="is-multiple"
></a-input-file>
<a-input-file
  v-model="modelAppend"
  :is-multiple="true"
  :is-append="true"
  label="is-multiple, is-append"
></a-input-file>
<div>modelAppend: {{ modelAppend.map(file => file.name) }}</div>`}}function Y(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileMultiple",
  components: {
    AInputFile,
  },
  setup() {
    const modelReplace = ref([]);
    const modelAppend = ref([]);

    return {
      modelAppend,
      modelReplace,
    };
  },
};`}}var te={name:`PageInputFileMultiple`,components:{AlohaExample:f,AInputFile:h},setup(){let e=c([]),t=c([]),{codeHtml:n}=J(),{codeJs:r}=Y();return{codeHtml:n,codeJs:r,modelAppend:t,modelReplace:e}}},X={class:`a_mt_2`};function Z(e,t,n,a,c,f){let p=u(`a-input-file`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_FILE_GROUP_MULTIPLE_HEADER_`,description:`_A_INPUT_FILE_GROUP_MULTIPLE_DESCRIPTION_`,props:[`is-multiple`,`is-append`]},{default:d(()=>[s(p,{class:`a_mb_4`,modelValue:e.modelReplace,"onUpdate:modelValue":t[0]||=t=>e.modelReplace=t,"is-multiple":!0,label:`is-multiple`},null,8,[`modelValue`]),s(p,{modelValue:e.modelAppend,"onUpdate:modelValue":t[1]||=t=>e.modelAppend=t,"is-multiple":!0,"is-append":!0,label:`is-multiple, is-append`},null,8,[`modelValue`]),r(`div`,X,`modelAppend: `+l(e.modelAppend.map(e=>e.name)),1)]),_:1},8,[`code-html`,`code-js`])}var Q=_(te,[[`render`,Z]]);function ne(){return{codeHtml:`<a-input-file
  v-model="model"
  :is-dropzone="true"
  :is-multiple="true"
  :is-append="true"
  :is-preview="true"
  accept="image/*"
  label="Photos"
></a-input-file>`}}function re(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFilePreview",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref([]);

    return {
      model,
    };
  },
};`}}var ie={name:`PageInputFilePreview`,components:{AlohaExample:f,AInputFile:h},setup(){let e=c([]),{codeHtml:t}=ne(),{codeJs:n}=re();return{codeHtml:t,codeJs:n,model:e}}};function ae(e,t,n,r,a,c){let l=u(`a-input-file`),f=u(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_FILE_GROUP_PREVIEW_HEADER_`,description:`_A_INPUT_FILE_GROUP_PREVIEW_DESCRIPTION_`,props:[`is-preview`,`is-file-size`]},{default:d(()=>[s(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-dropzone":!0,"is-multiple":!0,"is-append":!0,"is-preview":!0,accept:`image/*`,label:`_A_INPUT_FILE_EXAMPLE_LABEL_PHOTOS_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var oe=_(ie,[[`render`,ae]]);function se(){return{codeHtml:`<a-input-file
  v-model="model"
  :is-dropzone="true"
  :is-multiple="true"
  :is-append="true"
  accept=".pdf,.docx,image/*"
  accept-text="PDF, Word, images"
  :max-size="1024 * 1024"
  :max-files="3"
  label="Documents"
  @reject="onReject"
></a-input-file>
<div>reject: {{ rejected }}</div>`}}function ce(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileRestrictions",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref([]);
    const rejected = ref([]);

    const onReject = ({ files }) => {
      rejected.value = files.map(({ name, reason }) => \`\${ name }: \${ reason }\`);
    };

    return {
      model,
      onReject,
      rejected,
    };
  },
};`}}var le={name:`PageInputFileRestrictions`,components:{AlohaExample:f,AInputFile:h},setup(){let e=c([]),t=c([]),n=({files:e})=>{t.value=e.map(({name:e,reason:t})=>`${e}: ${t}`)},{codeHtml:r}=se(),{codeJs:i}=ce();return{codeHtml:r,codeJs:i,model:e,onReject:n,rejected:t}}},ue={class:`a_mt_2`};function de(e,t,n,a,c,f){let p=u(`a-input-file`),m=u(`aloha-example`);return o(),i(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_FILE_GROUP_RESTRICTIONS_HEADER_`,description:`_A_INPUT_FILE_GROUP_RESTRICTIONS_DESCRIPTION_`,props:[`accept`,`accept-text`,`max-size`,`max-files`,`is-hint`]},{default:d(()=>[s(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-dropzone":!0,"is-multiple":!0,"is-append":!0,accept:`.pdf,.docx,image/*`,"accept-text":`_A_INPUT_FILE_EXAMPLE_ACCEPT_TEXT_`,"max-size":1048576,"max-files":3,label:`_A_INPUT_FILE_EXAMPLE_LABEL_`,onReject:e.onReject},null,8,[`modelValue`,`onReject`]),r(`div`,ue,`reject: `+l(e.rejected),1)]),_:1},8,[`code-html`,`code-js`])}var fe=_(le,[[`render`,de]]);function pe(){return{codeHtml:`<a-input-file
  :model-value="model"
  :is-dropzone="true"
  :is-multiple="true"
  :is-append="true"
  label="Documents"
  @update:model-value="onUpdateModel"
></a-input-file>`}}function $(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileUpload",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref([]);

    // Simulated upload. In a real application send item.file, e.g. with FormData and AHttpAPI,
    // and set progress, status and errorText of the item.
    const upload = item => {
      item.status = "uploading";
      item.progress = 0;
      const TIMER = setInterval(() => {
        item.progress += 20;
        if (item.progress < 100) {
          return;
        }
        clearInterval(TIMER);
        if (/error/i.test(item.name)) {
          item.status = "error";
          item.errorText = "_A_INPUT_FILE_EXAMPLE_SERVER_ERROR_";
          return;
        }
        item.status = "success";
      }, 400);
    };

    const onUpdateModel = files => {
      model.value = files;
      model.value.forEach(item => {
        if (!item.status) {
          upload(item);
        }
      });
    };

    return {
      model,
      onUpdateModel,
    };
  },
};`}}var me={name:`PageInputFileUpload`,components:{AlohaExample:f,AInputFile:h},setup(){let e=c([]),t=e=>{e.status=`uploading`,e.progress=0;let t=setInterval(()=>{e.progress+=20,e.progress<100||(clearInterval(t),/error/i.test(e.name)?(e.status=`error`,e.errorText=`_A_INPUT_FILE_EXAMPLE_SERVER_ERROR_`):e.status=`success`)},400)},n=n=>{e.value=n,e.value.forEach(e=>{e.status||t(e)})},{codeHtml:r}=pe(),{codeJs:i}=$();return{codeHtml:r,codeJs:i,model:e,onUpdateModel:n}}};function he(e,t,n,r,a,c){let l=u(`a-input-file`),f=u(`aloha-example`);return o(),i(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_FILE_GROUP_UPLOAD_HEADER_`,description:`_A_INPUT_FILE_GROUP_UPLOAD_DESCRIPTION_`,props:[`model-value`]},{default:d(()=>[s(l,{"model-value":e.model,"is-dropzone":!0,"is-multiple":!0,"is-append":!0,label:`_A_INPUT_FILE_EXAMPLE_LABEL_`,"onUpdate:modelValue":e.onUpdateModel},null,8,[`model-value`,`onUpdate:modelValue`])]),_:1},8,[`code-html`,`code-js`])}var ge=_(me,[[`render`,he]]);function _e(){return{dataEvents:[{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`},{name:`reject`,description:`_A_INPUT_FILE_EVENTS_REJECT_DESCRIPTION_`,type:`Function`},{name:`remove`,description:`_A_INPUT_FILE_EVENTS_REMOVE_DESCRIPTION_`,type:`Function`},{name:`focus`,description:`_A_INPUT_FILE_EVENTS_FOCUS_DESCRIPTION_`,type:`Function`},{name:`blur`,description:`_A_INPUT_FILE_EVENTS_BLUR_DESCRIPTION_`,type:`Function`}]}}function ve(){return{dataModel:[{name:`name`,type:`String`,description:`_A_INPUT_FILE_MODEL_NAME_DESCRIPTION_`},{name:`size`,type:`Number`,description:`_A_INPUT_FILE_MODEL_SIZE_DESCRIPTION_`},{name:`type`,type:`String`,description:`_A_INPUT_FILE_MODEL_TYPE_DESCRIPTION_`},{name:`file`,type:`File`,description:`_A_INPUT_FILE_MODEL_FILE_DESCRIPTION_`},{name:`url`,type:`String`,description:`_A_INPUT_FILE_MODEL_URL_DESCRIPTION_`},{name:`download`,type:`Boolean`,description:`_A_INPUT_FILE_MODEL_DOWNLOAD_DESCRIPTION_`},{name:`previewUrl`,type:`String`,description:`_A_INPUT_FILE_MODEL_PREVIEW_URL_DESCRIPTION_`},{name:`status`,type:`String`,description:`_A_INPUT_FILE_MODEL_STATUS_DESCRIPTION_`},{name:`progress`,type:`Number`,description:`_A_INPUT_FILE_MODEL_PROGRESS_DESCRIPTION_`},{name:`errorText`,type:`String`,description:`_A_INPUT_FILE_MODEL_ERROR_TEXT_DESCRIPTION_`}]}}function ye(){let e=a(()=>m({placeholder:`_A_INPUT_FILE_COMPONENT_NAME_`}));return{pageTitle:a(()=>`AInputFile${e.value?` (${e.value})`:``}`)}}function be(){return{dataProps:[{name:`accept`,description:`_A_INPUT_FILE_PROPS_ACCEPT_DESCRIPTION_`,type:`String`,default:`""`,required:!1},{name:`accept-text`,description:`_A_INPUT_FILE_PROPS_ACCEPT_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`drop-text`,description:`_A_INPUT_FILE_PROPS_DROP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`[]`,required:!1},{name:`extra`,description:`_A_TRANSLATION_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`uniqueId("a_ui_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`input-attributes`,description:`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`input-class`,description:`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`is-append`,description:`_A_INPUT_FILE_PROPS_IS_APPEND_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-dropzone`,description:`_A_INPUT_FILE_PROPS_IS_DROPZONE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-file-size`,description:`_A_INPUT_FILE_PROPS_IS_FILE_SIZE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-hint`,description:`_A_INPUT_FILE_PROPS_IS_HINT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-multiple`,description:`_A_INPUT_FILE_PROPS_IS_MULTIPLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-preview`,description:`_A_INPUT_FILE_PROPS_IS_PREVIEW_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-removable`,description:`_A_INPUT_FILE_PROPS_IS_REMOVABLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`max-files`,description:`_A_INPUT_FILE_PROPS_MAX_FILES_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`max-size`,description:`_A_INPUT_FILE_PROPS_MAX_SIZE_DESCRIPTION_`,type:`Number`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:`""`,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Object / Array`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:`""`,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`text`,description:`_A_INPUT_FILE_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`type`,description:`_A_INPUT_FILE_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`"input"`,required:!1}]}}function xe(){return{dataTranslate:[`_A_INPUT_FILE_SELECT_FILE_`,`_A_INPUT_FILE_SELECT_FILES_`,`_A_INPUT_FILE_DROP_TEXT_`,`_A_INPUT_FILE_DROP_TEXT_FILE_`,`_A_INPUT_FILE_HINT_ACCEPT_{{accept}}_`,`_A_INPUT_FILE_HINT_MAX_SIZE_{{size}}_`,`_A_INPUT_FILE_HINT_MAX_FILES_{{count}}_`,`_A_INPUT_FILE_ERROR_TYPE_`,`_A_INPUT_FILE_ERROR_SIZE_{{size}}_`,`_A_INPUT_FILE_ERROR_MAX_FILES_{{count}}_`,`_A_INPUT_FILE_ADDED_{{count}}_`,`_A_INPUT_FILE_REJECTED_{{count}}_`,`_A_INPUT_FILE_REMOVED_{{name}}_`,`_A_INPUT_FILE_REMOVE_{{name}}_`,`_A_INPUT_FILE_REJECTED_HEADER_`,`_A_INPUT_FILE_REJECTED_CLOSE_`,`_A_INPUT_FILE_UPLOADING_{{name}}_`,`_A_INPUT_FILE_UPLOADED_`,`_A_INPUT_FILE_UPLOAD_ERROR_`]}}var Se={name:`PageInputFile`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:g,PageInputFileBasic:C,PageInputFileDisabled:D,PageInputFileDropzone:M,PageInputFileForm:L,PageInputFileHelpText:H,PageInputFileLinks:q,PageInputFileMultiple:Q,PageInputFilePreview:oe,PageInputFileRestrictions:fe,PageInputFileUpload:ge},setup(){let{pageTitle:e}=ye(),{dataProps:t}=be(),{dataEvents:n}=_e(),{dataModel:r}=ve(),{dataTranslate:i}=xe();return{dataEvents:n,dataModel:r,dataProps:t,dataTranslate:i,pageTitle:e}}};function Ce(e,t,n,r,a,c){let l=u(`a-translation`),f=u(`page-input-file-basic`),p=u(`page-input-file-multiple`),m=u(`page-input-file-dropzone`),h=u(`page-input-file-restrictions`),g=u(`page-input-file-preview`),_=u(`page-input-file-upload`),v=u(`page-input-file-links`),y=u(`page-input-file-help-text`),b=u(`page-input-file-disabled`),x=u(`page-input-file-form`),S=u(`aloha-table-props`),C=u(`aloha-table-translate`),w=u(`aloha-table-css-vars`),T=u(`aloha-page`);return o(),i(T,{"page-title":e.pageTitle},{body:d(()=>[s(l,{tag:`p`,html:`_A_INPUT_FILE_COMPONENT_DESCRIPTION_`}),s(l,{class:`a_mb_4`,tag:`div`,html:`_A_INPUT_FILE_ACCESSIBILITY_DESCRIPTION_`}),s(f),s(p),s(m),s(h),s(g),s(_),s(v),s(y),s(b),s(x),s(S,{data:e.dataProps},null,8,[`data`]),s(S,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),s(S,{"table-label":`Model`,data:e.dataModel,columns:[`name`,`type`,`description`]},null,8,[`data`]),s(C,{data:e.dataTranslate},null,8,[`data`]),s(w,{files:`components/ui/AInputFile`})]),_:1},8,[`page-title`])}var we=_(Se,[[`render`,Ce]]);export{we as default};