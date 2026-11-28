import{t as e}from"./chunk.AlohaPage.wEJC2jSx.js";import{t}from"./chunk.AlohaTableProps.Dex71Mc0.js";import{t as n}from"./chunk.AlohaTableTranslate.B6-3o7q0.js";import{Ht as r,Jt as i,Ut as a,Vt as o,_n as s,mn as c,on as l,un as u,wn as d}from"./chunk.vendor.DL09mhUf.js";import{t as f}from"./chunk.AlohaExample.D5DtvcYq.js";import{D as p,X as m,hn as h,mn as g,t as _}from"./bundle.index.DbRNiyxs.js";function v(){return{codeHtml:`<a-input-tags
  v-model="model"
  label="_A_INPUT_TAGS_EXAMPLE_KEYWORDS_"
  placeholder="_A_INPUT_TAGS_EXAMPLE_KEYWORDS_PLACEHOLDER_"
  help-text="_A_INPUT_TAGS_EXAMPLE_KEYWORDS_HELP_"
/>
<pre>{{ model }}</pre>`}}function y(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputTags,
} from "aloha-vue";

export default {
  components: {
    AInputTags,
  },
  setup() {
    const model = ref(["vue", "accessibility"]);

    return {
      model,
    };
  },
};`}}var b={name:`PageInputTagsBasic`,components:{AInputTags:m,AlohaExample:f},setup(){let{codeHtml:e}=v(),{codeJs:t}=y();return{codeHtml:e,codeJs:t,model:s([`vue`,`accessibility`])}}},x={class:`a_mt_3`};function S(e,t,n,o,s,f){let p=u(`a-input-tags`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_INPUT_TAGS_BASIC_DESCRIPTION_`},{default:c(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_INPUT_TAGS_EXAMPLE_KEYWORDS_`,placeholder:`_A_INPUT_TAGS_EXAMPLE_KEYWORDS_PLACEHOLDER_`,"help-text":`_A_INPUT_TAGS_EXAMPLE_KEYWORDS_HELP_`},null,8,[`modelValue`]),r(`pre`,x,d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var C=_(b,[[`render`,S]]);function ee(){return{codeHtml:`<!-- Enter, comma, semicolon or space add a recipient, at most 5 -->
<a-input-tags
  v-model="model"
  label="_A_INPUT_TAGS_EXAMPLE_RECIPIENTS_"
  :separators="['Enter', ',', ';', ' ']"
  :max-tags="5"
  :input-attributes="{ type: 'email', inputmode: 'email' }"
  help-text="_A_INPUT_TAGS_EXAMPLE_RECIPIENTS_HELP_"
/>`}}function w(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputTags,
} from "aloha-vue";

export default {
  components: {
    AInputTags,
  },
  setup() {
    const model = ref(["anna@example.com"]);

    return {
      model,
    };
  },
};`}}var T={name:`PageInputTagsEmails`,components:{AInputTags:m,AlohaExample:f},setup(){let{codeHtml:e}=ee(),{codeJs:t}=w();return{codeHtml:e,codeJs:t,model:s([`anna@example.com`])}}},E={class:`a_mt_3`};function D(e,t,n,o,s,f){let p=u(`a-input-tags`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_TAGS_EMAILS_HEADER_`,description:`_A_INPUT_TAGS_EMAILS_DESCRIPTION_`,props:[`separators`,`max-tags`]},{default:c(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_INPUT_TAGS_EXAMPLE_RECIPIENTS_`,separators:[`Enter`,`,`,`;`,` `],"max-tags":5,"input-attributes":{type:`email`,inputmode:`email`},"help-text":`_A_INPUT_TAGS_EXAMPLE_RECIPIENTS_HELP_`},null,8,[`modelValue`]),r(`pre`,E,d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var O=_(T,[[`render`,D]]);function k(){return{codeHtml:`<a-form
  v-model="model"
  :data="dataForm"
/>
<pre>{{ model }}</pre>`}}function A(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  components: {
    AForm,
  },
  setup() {
    const dataForm = [
      {
        type: "text",
        id: "title",
        label: "_A_FORM_EXAMPLE_TITLE_",
      },
      {
        type: "tags",
        id: "keywords",
        label: "_A_INPUT_TAGS_EXAMPLE_KEYWORDS_",
        required: true,
        maxTags: 10,
      },
    ];
    const model = ref({
      title: "Aloha",
      keywords: ["vue"],
    });

    return {
      dataForm,
      model,
    };
  },
};`}}var j={name:`PageInputTagsForm`,components:{AForm:p,AlohaExample:f},setup(){let{codeHtml:e}=k(),{codeJs:t}=A();return{codeHtml:e,codeJs:t,dataForm:[{type:`text`,id:`title`,label:`_A_FORM_EXAMPLE_TITLE_`},{type:`tags`,id:`keywords`,label:`_A_INPUT_TAGS_EXAMPLE_KEYWORDS_`,required:!0,maxTags:10}],model:s({title:`Aloha`,keywords:[`vue`]})}}},M={class:`a_mt_3`};function N(e,t,n,o,s,f){let p=u(`a-form`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_TAGS_FORM_HEADER_`,description:`_A_INPUT_TAGS_FORM_DESCRIPTION_`},{default:c(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.dataForm},null,8,[`modelValue`,`data`]),r(`pre`,M,d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var P=_(j,[[`render`,N]]);function F(){return{codeHtml:`<a-input-tags
  v-model="model"
  :data="languages"
  :is-data-simple-array="true"
  :is-only-from-list="true"
  :is-remove-all="true"
  :max-tags="6"
  :max-visible-tags="3"
  :min-length="0"
  :open-on-focus="true"
  label="_A_INPUT_TAGS_EXAMPLE_LANGUAGES_"
/>`}}function I(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputTags,
} from "aloha-vue";

export default {
  components: {
    AInputTags,
  },
  setup() {
    const model = ref(["Deutsch", "English", "Español", "Français"]);
    const languages = ["Deutsch", "English", "Español", "Français", "Italiano", "Nederlands", "Polski", "Русский", "Українська", "Hrvatski", "العربية"];

    return {
      languages,
      model,
    };
  },
};`}}var L={name:`PageInputTagsLimits`,components:{AInputTags:m,AlohaExample:f},setup(){let{codeHtml:e}=F(),{codeJs:t}=I();return{codeHtml:e,codeJs:t,languages:[`Deutsch`,`English`,`Español`,`Français`,`Italiano`,`Nederlands`,`Polski`,`Русский`,`Українська`,`Hrvatski`,`العربية`],model:s([`Deutsch`,`English`,`Español`,`Français`])}}};function R(e,t,n,r,o,s){let d=u(`a-input-tags`),f=u(`aloha-example`);return l(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_TAGS_LIMITS_HEADER_`,description:`_A_INPUT_TAGS_LIMITS_DESCRIPTION_`},{default:c(()=>[i(d,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.languages,"is-data-simple-array":!0,"is-only-from-list":!0,"is-remove-all":!0,"max-tags":6,"max-visible-tags":3,"min-length":0,"open-on-focus":!0,label:`_A_INPUT_TAGS_EXAMPLE_LANGUAGES_`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var z=_(L,[[`render`,R]]);function B(){return{codeHtml:`<a-input-tags
  v-model="model"
  :data="countries"
  :is-only-from-list="true"
  label="_A_INPUT_TAGS_EXAMPLE_COUNTRIES_"
  model-key="id"
/>
<pre>{{ model }}</pre>`}}function V(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputTags,
} from "aloha-vue";

export default {
  components: {
    AInputTags,
  },
  setup() {
    // the model has the ids, the tags show the labels
    const model = ref(["de", "at"]);
    const countries = [
      { id: "at", label: "Österreich" },
      { id: "ch", label: "Schweiz" },
      { id: "de", label: "Deutschland" },
      { id: "fr", label: "Frankreich" },
      { id: "it", label: "Italien" },
    ];

    return {
      countries,
      model,
    };
  },
};`}}var H={name:`PageInputTagsModelKey`,components:{AInputTags:m,AlohaExample:f},setup(){let{codeHtml:e}=B(),{codeJs:t}=V();return{codeHtml:e,codeJs:t,countries:[{id:`at`,label:`Österreich`},{id:`ch`,label:`Schweiz`},{id:`de`,label:`Deutschland`},{id:`fr`,label:`Frankreich`},{id:`it`,label:`Italien`}],model:s([`de`,`at`])}}},U={class:`a_mt_3`};function te(e,t,n,o,s,f){let p=u(`a-input-tags`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_TAGS_MODEL_KEY_HEADER_`,description:`_A_INPUT_TAGS_MODEL_KEY_DESCRIPTION_`},{default:c(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.countries,"is-only-from-list":!0,label:`_A_INPUT_TAGS_EXAMPLE_COUNTRIES_`,"model-key":`id`},null,8,[`modelValue`,`data`]),r(`pre`,U,d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var W=_(H,[[`render`,te]]);function G(){return{codeHtml:`<a-input-tags
  v-model="model"
  :is-sortable="true"
  :tag-class="tagClass"
  label="_A_INPUT_TAGS_EXAMPLE_STEPS_"
  size="small"
/>
<pre>{{ model }}</pre>`}}function K(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputTags,
} from "aloha-vue";

export default {
  components: {
    AInputTags,
  },
  setup() {
    const model = ref(["Plan", "Build", "Test", "Release"]);
    // the first step is marked
    const tagClass = ({ index }) => (index === 0 ? "a_text_bold" : undefined);

    return {
      model,
      tagClass,
    };
  },
};`}}var q={name:`PageInputTagsOrder`,components:{AInputTags:m,AlohaExample:f},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,model:s([`Plan`,`Build`,`Test`,`Release`]),tagClass:({index:e})=>e===0?`a_text_bold`:void 0}}},J={class:`a_mt_3`};function Y(e,t,n,o,s,f){let p=u(`a-input-tags`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_TAGS_ORDER_HEADER_`,description:`_A_INPUT_TAGS_ORDER_DESCRIPTION_`},{default:c(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"is-sortable":!0,"tag-class":e.tagClass,label:`_A_INPUT_TAGS_EXAMPLE_STEPS_`,size:`small`},null,8,[`modelValue`,`tag-class`]),r(`pre`,J,d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var X=_(q,[[`render`,Y]]);function Z(){return{codeHtml:`<a-input-tags
  v-model="model"
  :data="skills"
  :is-add-all="true"
  key-group="area"
  label="_A_INPUT_TAGS_EXAMPLE_SKILLS_"
/>
<pre>{{ model }}</pre>`}}function Q(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputTags,
} from "aloha-vue";

export default {
  components: {
    AInputTags,
  },
  setup() {
    const model = ref([]);
    // groups (key-group); "add all" under the list and Ctrl+Enter
    const skills = [
      { id: "vue", label: "Vue", area: "Frontend" },
      { id: "react", label: "React", area: "Frontend" },
      { id: "svelte", label: "Svelte", area: "Frontend" },
      { id: "node", label: "Node.js", area: "Backend" },
      { id: "python", label: "Python", area: "Backend" },
      { id: "go", label: "Go", area: "Backend" },
    ];

    return {
      model,
      skills,
    };
  },
};`}}var ne={name:`PageInputTagsSuggestions`,components:{AInputTags:m,AlohaExample:f},setup(){let{codeHtml:e}=Z(),{codeJs:t}=Q();return{codeHtml:e,codeJs:t,model:s([]),skills:[{id:`vue`,label:`Vue`,area:`Frontend`},{id:`react`,label:`React`,area:`Frontend`},{id:`svelte`,label:`Svelte`,area:`Frontend`},{id:`node`,label:`Node.js`,area:`Backend`},{id:`python`,label:`Python`,area:`Backend`},{id:`go`,label:`Go`,area:`Backend`}]}}},re={class:`a_mt_3`};function ie(e,t,n,o,s,f){let p=u(`a-input-tags`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_TAGS_SUGGESTIONS_HEADER_`,description:`_A_INPUT_TAGS_SUGGESTIONS_DESCRIPTION_`},{default:c(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.skills,"is-add-all":!0,"key-group":`area`,label:`_A_INPUT_TAGS_EXAMPLE_SKILLS_`},null,8,[`modelValue`,`data`]),r(`pre`,re,d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var ae=_(ne,[[`render`,ie]]);function oe(){return{codeHtml:`<a-input-tags
  v-model="model"
  :maxlength="40"
  :separators="['Enter', ',', ';', ' ']"
  :transform="transform"
  :validator="validator"
  label="_A_INPUT_TAGS_EXAMPLE_RECIPIENTS_"
/>
<pre>{{ model }}</pre>`}}function se(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputTags,
} from "aloha-vue";

export default {
  components: {
    AInputTags,
  },
  setup() {
    const model = ref(["anna@example.com"]);
    // before the checks: e-mails in lower case
    const transform = value => value.toLowerCase();
    // false: the default text, a text: own message, everything else: valid
    const validator = ({ tag }) => (/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(tag) ? true : "_A_INPUT_TAGS_EXAMPLE_NO_EMAIL_");

    return {
      model,
      transform,
      validator,
    };
  },
};`}}var ce={name:`PageInputTagsValidation`,components:{AInputTags:m,AlohaExample:f},setup(){let{codeHtml:e}=oe(),{codeJs:t}=se();return{codeHtml:e,codeJs:t,model:s([`anna@example.com`]),transform:e=>e.toLowerCase(),validator:({tag:e})=>/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)?!0:`_A_INPUT_TAGS_EXAMPLE_NO_EMAIL_`}}},le={class:`a_mt_3`};function ue(e,t,n,o,s,f){let p=u(`a-input-tags`),m=u(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_INPUT_TAGS_VALIDATION_HEADER_`,description:`_A_INPUT_TAGS_VALIDATION_DESCRIPTION_`},{default:c(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,maxlength:40,separators:[`Enter`,`,`,`;`,` `],transform:e.transform,validator:e.validator,label:`_A_INPUT_TAGS_EXAMPLE_RECIPIENTS_`},null,8,[`modelValue`,`transform`,`validator`]),r(`pre`,le,d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var de=_(ce,[[`render`,ue]]);function fe(){let e=o(()=>h({placeholder:`_A_INPUT_TAGS_COMPONENT_NAME_`}));return{pageTitle:o(()=>`AInputTags${e.value?` (${e.value})`:``}`)}}var pe=[[`always-translate`,`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,`Boolean`,void 0],[`change`,`_A_UI_PROPS_CHANGE_DESCRIPTION_`,`Function`,`() => {}`],[`dependencies`,`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,`Array / Object`,void 0],[`disabled`,`_A_UI_PROPS_DISABLED_DESCRIPTION_`,`Boolean`,void 0],[`errors`,`_A_UI_PROPS_ERRORS_DESCRIPTION_`,`String / Array`,void 0],[`exclude-render-attributes`,`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,`Array`,`[]`],[`extra`,`_A_TRANSLATION_PROPS_EXTRA_DESCRIPTION_`,`Object`,void 0],[`help-text`,`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,`String`,void 0],[`html-id`,`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,`String`,void 0],[`id`,`_A_UI_PROPS_ID_DESCRIPTION_`,`String / Number`,`uniqueId("a_input_tags_")`],[`id-prefix`,`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,`String`,void 0],[`input-attributes`,`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,`Object`,`{}`],[`input-class`,`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,`String / Object`,void 0],[`is-hide`,`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,`Boolean`,void 0],[`is-render`,`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,`Boolean`,`true`],[`label`,`_A_UI_PROPS_LABEL_DESCRIPTION_`,`String / Number`,void 0],[`label-class`,`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,`String / Object`,void 0],[`label-description`,`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,`String`,void 0],[`label-screen-reader`,`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,`String / Number`,void 0],[`model-dependencies`,`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,`Object`,`{}`],[`model-undefined`,`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,`Array / Object / String`,`[]`],[`model-value`,`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,`Array`,void 0],[`placeholder`,`_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_`,`String`,void 0],[`readonly`,`_A_UI_PROPS_READONLY_DESCRIPTION_`,`Boolean`,void 0],[`readonly-default`,`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,`String`,`""`],[`required`,`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,`Boolean`,`false`]],$=[[`validator`,`_A_INPUT_TAGS_PROPS_VALIDATOR_DESCRIPTION_`,`Function`,void 0],[`url-retrieve`,`_A_INPUT_TAGS_PROPS_URL_RETRIEVE_DESCRIPTION_`,`String`,void 0],[`transform`,`_A_INPUT_TAGS_PROPS_TRANSFORM_DESCRIPTION_`,`Function`,void 0],[`tag-class`,`_A_INPUT_TAGS_PROPS_TAG_CLASS_DESCRIPTION_`,`String / Object / Array / Function`,void 0],[`size`,`_A_INPUT_TAGS_PROPS_SIZE_DESCRIPTION_`,`String`,`"medium"`],[`model-key`,`_A_INPUT_TAGS_PROPS_MODEL_KEY_DESCRIPTION_`,`String`,void 0],[`maxlength`,`_A_INPUT_TAGS_PROPS_MAXLENGTH_DESCRIPTION_`,`Number`,void 0],[`label-position`,`_A_UI_PROPS_LABEL_POSITION_DESCRIPTION_`,`String`,void 0],[`is-sortable`,`_A_INPUT_TAGS_PROPS_IS_SORTABLE_DESCRIPTION_`,`Boolean`,`false`],[`is-label-float`,`_A_UI_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,`Boolean`,void 0],[`is-clear-button`,`_A_INPUT_TAGS_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_`,`Boolean`,`true`],[`icon-prepend`,`_A_INPUT_PROPS_ICON_PREPEND_DESCRIPTION_`,`String`,void 0],[`icon-append`,`_A_INPUT_TAGS_PROPS_ICON_APPEND_DESCRIPTION_`,`String`,void 0],[`error-icon`,`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,`String / Object`,void 0],[`add-on-blur`,`_A_INPUT_TAGS_PROPS_ADD_ON_BLUR_DESCRIPTION_`,`Boolean`,`true`],[`allow-duplicates`,`_A_INPUT_TAGS_PROPS_ALLOW_DUPLICATES_DESCRIPTION_`,`Boolean`,`false`],[`data`,`_A_COMBOBOX_PROPS_DATA_DESCRIPTION_`,`Array`,`[]`],[`filter-callback`,`_A_COMBOBOX_PROPS_FILTER_CALLBACK_DESCRIPTION_`,`Function`,void 0],[`filter-mode`,`_A_COMBOBOX_PROPS_FILTER_MODE_DESCRIPTION_`,`String`,`"contains"`],[`ignore-diacritics`,`_A_COMBOBOX_PROPS_IGNORE_DIACRITICS_DESCRIPTION_`,`Boolean`,`true`],[`in-body`,`_A_COMBOBOX_PROPS_IN_BODY_DESCRIPTION_`,`Boolean`,`true`],[`inline-autocomplete`,`_A_COMBOBOX_PROPS_INLINE_AUTOCOMPLETE_DESCRIPTION_`,`Boolean`,`false`],[`is-add-all`,`_A_INPUT_TAGS_PROPS_IS_ADD_ALL_DESCRIPTION_`,`Boolean`,`false`],[`is-bottom-sheet-on-mobile`,`_A_COMBOBOX_PROPS_IS_BOTTOM_SHEET_ON_MOBILE_DESCRIPTION_`,`Boolean`,`true`],[`is-data-simple-array`,`_A_COMBOBOX_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_`,`Boolean`,void 0],[`is-only-from-list`,`_A_INPUT_TAGS_PROPS_IS_ONLY_FROM_LIST_DESCRIPTION_`,`Boolean`,void 0],[`is-remove-all`,`_A_INPUT_TAGS_PROPS_IS_REMOVE_ALL_DESCRIPTION_`,`Boolean`,`false`],[`key-disabled`,`_A_COMBOBOX_PROPS_KEY_DISABLED_DESCRIPTION_`,`String`,void 0],[`key-group`,`_A_COMBOBOX_PROPS_KEY_GROUP_DESCRIPTION_`,`String`,void 0],[`key-id`,`_A_COMBOBOX_PROPS_KEY_ID_DESCRIPTION_`,`String`,`"id"`],[`key-label`,`_A_COMBOBOX_PROPS_KEY_LABEL_DESCRIPTION_`,`String`,`"label"`],[`key-label-callback`,`_A_COMBOBOX_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_`,`Function`,void 0],[`max-items`,`_A_COMBOBOX_PROPS_MAX_ITEMS_DESCRIPTION_`,`Number`,`10`],[`max-tags`,`_A_INPUT_TAGS_PROPS_MAX_TAGS_DESCRIPTION_`,`Number`,void 0],[`max-visible-tags`,`_A_INPUT_TAGS_PROPS_MAX_VISIBLE_TAGS_DESCRIPTION_`,`Number`,void 0],[`min-length`,`_A_COMBOBOX_PROPS_MIN_LENGTH_DESCRIPTION_`,`Number`,`1`],[`open-on-focus`,`_A_COMBOBOX_PROPS_OPEN_ON_FOCUS_DESCRIPTION_`,`Boolean`,`false`],[`popper-container-id`,`_A_COMBOBOX_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,`String`,`"a_tooltip_container"`],[`search-api-key`,`_A_COMBOBOX_PROPS_SEARCH_API_KEY_DESCRIPTION_`,`String`,`"search"`],[`search-timeout`,`_A_COMBOBOX_PROPS_SEARCH_TIMEOUT_DESCRIPTION_`,`Number`,`300`],[`separators`,`_A_INPUT_TAGS_PROPS_SEPARATORS_DESCRIPTION_`,`Array`,`["Enter", ","]`],[`texts`,`_A_INPUT_TAGS_PROPS_TEXTS_DESCRIPTION_`,`Object`,void 0],[`translate-data`,`_A_COMBOBOX_PROPS_TRANSLATE_DATA_DESCRIPTION_`,`Boolean`,void 0],[`type`,`_A_INPUT_TAGS_PROPS_TYPE_DESCRIPTION_`,`String`,`"tags"`],[`url`,`_A_COMBOBOX_PROPS_URL_DESCRIPTION_`,`String`,void 0],[`url-params`,`_A_COMBOBOX_PROPS_URL_PARAMS_DESCRIPTION_`,`Object`,void 0],[`url-template-data`,`_A_COMBOBOX_PROPS_URL_TEMPLATE_DATA_DESCRIPTION_`,`Object`,`{}`],[`z-index`,`_A_COMBOBOX_PROPS_Z_INDEX_DESCRIPTION_`,`Number / String`,void 0]];function me(){return{dataEvents:[{name:`select`,type:`Function`,description:`_A_COMBOBOX_EVENTS_SELECT_DESCRIPTION_`},{name:`update:modelValue`,type:`Function`,description:`_A_INPUT_TAGS_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`}],dataMethods:[{name:`focus`,description:`_A_INPUT_TAGS_METHODS_FOCUS_DESCRIPTION_`}],dataProps:[...pe,...$].map(([e,t,n,r])=>({name:e,description:t,type:n,default:r,required:!1})).sort((e,t)=>e.name.localeCompare(t.name)),dataSlots:[{name:`option`,description:`_A_COMBOBOX_SLOTS_OPTION_DESCRIPTION_`}],dataTranslate:[`_A_COMBOBOX_LOADING_`,`_A_COMBOBOX_NO_RESULTS_`,`_A_COMBOBOX_RESULTS_{{count}}_`,`_A_INPUT_TAGS_ADDED_`,`_A_INPUT_TAGS_ADD_ALL_`,`_A_INPUT_TAGS_COUNTER_`,`_A_INPUT_TAGS_DUPLICATE_`,`_A_INPUT_TAGS_EDITING_`,`_A_INPUT_TAGS_HINT_`,`_A_INPUT_TAGS_HINT_ADD_ALL_`,`_A_INPUT_TAGS_HINT_SORTABLE_`,`_A_INPUT_TAGS_INVALID_`,`_A_INPUT_TAGS_MAXLENGTH_`,`_A_INPUT_TAGS_MAX_`,`_A_INPUT_TAGS_MOVED_`,`_A_INPUT_TAGS_ONLY_FROM_LIST_`,`_A_INPUT_TAGS_REMOVED_`,`_A_INPUT_TAGS_REMOVED_ALL_`,`_A_INPUT_TAGS_REMOVE_`,`_A_INPUT_TAGS_REMOVE_ALL_`,`_A_INPUT_TAGS_SHOW_LESS_`,`_A_INPUT_TAGS_SHOW_MORE_`]}}var he={name:`PageInputTags`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:g,PageInputTagsBasic:C,PageInputTagsEmails:O,PageInputTagsForm:P,PageInputTagsLimits:z,PageInputTagsModelKey:W,PageInputTagsOrder:X,PageInputTagsSuggestions:ae,PageInputTagsValidation:de},setup(){let{pageTitle:e}=fe(),{dataEvents:t,dataMethods:n,dataProps:r,dataSlots:i,dataTranslate:a}=me();return{dataEvents:t,dataMethods:n,dataProps:r,dataSlots:i,dataTranslate:a,pageTitle:e}}};function ge(e,t,n,r,o,s){let d=u(`a-translation`),f=u(`page-input-tags-basic`),p=u(`page-input-tags-emails`),m=u(`page-input-tags-suggestions`),h=u(`page-input-tags-limits`),g=u(`page-input-tags-validation`),_=u(`page-input-tags-order`),v=u(`page-input-tags-model-key`),y=u(`page-input-tags-form`),b=u(`aloha-table-props`),x=u(`aloha-table-translate`),S=u(`aloha-table-css-vars`),C=u(`aloha-page`);return l(),a(C,{"page-title":e.pageTitle},{body:c(()=>[i(d,{tag:`p`,html:`_A_INPUT_TAGS_COMPONENT_DESCRIPTION_`}),i(d,{class:`a_mb_4`,tag:`div`,html:`_A_INPUT_TAGS_ACCESSIBILITY_DESCRIPTION_`}),i(d,{class:`a_mb_4`,tag:`div`,html:`_A_INPUT_TAGS_ACCESSIBILITY_MORE_DESCRIPTION_`}),i(f),i(p),i(m),i(h),i(g),i(_),i(v),i(y),i(b,{data:e.dataProps},null,8,[`data`]),i(b,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),i(b,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),i(b,{"table-label":`Methods`,data:e.dataMethods,columns:[`name`,`description`]},null,8,[`data`]),i(x,{data:e.dataTranslate},null,8,[`data`]),i(S,{files:`components/ui/AInputTags`})]),_:1},8,[`page-title`])}var _e=_(he,[[`render`,ge]]);export{_e as default};