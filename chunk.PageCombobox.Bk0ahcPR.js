import{t as e}from"./chunk.AlohaPage.D8jsTY5m.js";import{t}from"./chunk.AlohaTableProps.CEJuqblo.js";import{t as n}from"./chunk.AlohaTableTranslate.Cr2Bygtq.js";import{Ht as r,Jt as i,Ut as a,Vt as o,_n as s,fn as c,mn as l,on as u,un as d,wn as f}from"./chunk.vendor.Bjd2408Z.js";import{t as p}from"./chunk.AlohaExample.B-5omd3W.js";import{D as m,hn as h,mn as g,ot as _,t as v}from"./bundle.index.Cwpafk10.js";function y(){return{codeHtml:`<a-combobox
  v-model="model"
  :data="cities"
  label="_A_COMBOBOX_EXAMPLE_CITY_"
  @select="selected = $event"
/>
<pre>v-model: {{ model }}, select: {{ selected }}</pre>`}}function b(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ACombobox,
} from "aloha-vue";

export default {
  components: {
    ACombobox,
  },
  setup() {
    const model = ref("");
    // select: { id, label, item } of the chosen suggestion; the text can also be own
    const selected = ref(undefined);
    const cities = [
      { id: "berlin", label: "Berlin" },
      { id: "bern", label: "Bern" },
      { id: "bremen", label: "Bremen" },
      { id: "hamburg", label: "Hamburg" },
      { id: "hannover", label: "Hannover" },
      { id: "munich", label: "München" },
      { id: "vienna", label: "Wien" },
      { id: "zurich", label: "Zürich" },
    ];

    return {
      cities,
      model,
      selected,
    };
  },
};`}}var x={name:`PageComboboxBasic`,components:{ACombobox:_,AlohaExample:p},setup(){let{codeHtml:e}=y(),{codeJs:t}=b();return{codeHtml:e,codeJs:t,cities:[{id:`berlin`,label:`Berlin`},{id:`bern`,label:`Bern`},{id:`bremen`,label:`Bremen`},{id:`hamburg`,label:`Hamburg`},{id:`hannover`,label:`Hannover`},{id:`munich`,label:`München`},{id:`vienna`,label:`Wien`},{id:`zurich`,label:`Zürich`}],model:s(``),selected:s(void 0)}}},S={class:`a_mt_3`};function ee(e,t,n,o,s,c){let p=d(`a-combobox`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_COMBOBOX_GROUP_BASIC_DESCRIPTION_`},{default:l(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.cities,label:`_A_COMBOBOX_EXAMPLE_CITY_`,onSelect:t[1]||=t=>e.selected=t},null,8,[`modelValue`,`data`]),r(`pre`,S,`v-model: `+f(e.model)+`, select: `+f(e.selected),1)]),_:1},8,[`code-html`,`code-js`])}var C=v(x,[[`render`,ee]]);function w(){return{codeHtml:`<a-combobox
  v-model="model"
  :data="cities"
  :inline-autocomplete="true"
  filter-mode="startsWith"
  label="_A_COMBOBOX_EXAMPLE_CITY_"
/>`}}function T(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ACombobox,
} from "aloha-vue";

export default {
  components: {
    ACombobox,
  },
  setup() {
    const model = ref("");
    // "zur" finds "Zürich" (ignore-diacritics), the first suggestion completes the text
    const cities = [
      { id: "berlin", label: "Berlin" },
      { id: "bern", label: "Bern" },
      { id: "bremen", label: "Bremen" },
      { id: "hamburg", label: "Hamburg" },
      { id: "hannover", label: "Hannover" },
      { id: "munich", label: "München" },
      { id: "vienna", label: "Wien" },
      { id: "zurich", label: "Zürich" },
    ];

    return {
      cities,
      model,
    };
  },
};`}}var E={name:`PageComboboxFilter`,components:{ACombobox:_,AlohaExample:p},setup(){let{codeHtml:e}=w(),{codeJs:t}=T();return{codeHtml:e,codeJs:t,cities:[{id:`berlin`,label:`Berlin`},{id:`bern`,label:`Bern`},{id:`bremen`,label:`Bremen`},{id:`hamburg`,label:`Hamburg`},{id:`hannover`,label:`Hannover`},{id:`munich`,label:`München`},{id:`vienna`,label:`Wien`},{id:`zurich`,label:`Zürich`}],model:s(``)}}};function D(e,t,n,r,o,s){let c=d(`a-combobox`),f=d(`aloha-example`);return u(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_COMBOBOX_GROUP_FILTER_HEADER_`,description:`_A_COMBOBOX_GROUP_FILTER_DESCRIPTION_`},{default:l(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.cities,"inline-autocomplete":!0,"filter-mode":`startsWith`,label:`_A_COMBOBOX_EXAMPLE_CITY_`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var O=v(E,[[`render`,D]]);function k(){return{codeHtml:`<a-form
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
        type: "combobox",
        id: "city",
        label: "_A_COMBOBOX_EXAMPLE_CITY_",
        required: true,
        data: [
          { id: "berlin", label: "Berlin" },
          { id: "bern", label: "Bern" },
          { id: "bremen", label: "Bremen" },
          { id: "hamburg", label: "Hamburg" },
          { id: "hannover", label: "Hannover" },
          { id: "munich", label: "München" },
          { id: "vienna", label: "Wien" },
          { id: "zurich", label: "Zürich" },
        ],
      },
    ];
    const model = ref({
      city: "Hamburg",
    });

    return {
      dataForm,
      model,
    };
  },
};`}}var j={name:`PageComboboxForm`,components:{AForm:m,AlohaExample:p},setup(){let{codeHtml:e}=k(),{codeJs:t}=A();return{codeHtml:e,codeJs:t,dataForm:[{type:`combobox`,id:`city`,label:`_A_COMBOBOX_EXAMPLE_CITY_`,required:!0,data:[{id:`berlin`,label:`Berlin`},{id:`bern`,label:`Bern`},{id:`bremen`,label:`Bremen`},{id:`hamburg`,label:`Hamburg`},{id:`hannover`,label:`Hannover`},{id:`munich`,label:`München`},{id:`vienna`,label:`Wien`},{id:`zurich`,label:`Zürich`}]}],model:s({city:`Hamburg`})}}},M={class:`a_mt_3`};function N(e,t,n,o,s,c){let p=d(`a-form`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_COMBOBOX_GROUP_FORM_HEADER_`,description:`_A_COMBOBOX_GROUP_FORM_DESCRIPTION_`},{default:l(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.dataForm},null,8,[`modelValue`,`data`]),r(`pre`,M,f(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var P=v(j,[[`render`,N]]);function F(){return{codeHtml:`<a-combobox
  v-model="model"
  :data="stations"
  :min-length="0"
  :open-on-focus="true"
  key-disabled="isClosed"
  key-group="line"
  label="_A_COMBOBOX_EXAMPLE_STATION_"
/>`}}function I(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ACombobox,
} from "aloha-vue";

export default {
  components: {
    ACombobox,
  },
  setup() {
    const model = ref("");
    // options of a group stay together; a disabled option is shown, the arrows skip it
    const stations = [
      { id: 1, label: "Alexanderplatz", line: "U2" },
      { id: 2, label: "Hauptbahnhof", line: "S5" },
      { id: 3, label: "Potsdamer Platz", line: "U2" },
      { id: 4, label: "Ostkreuz", line: "S5", isClosed: true },
      { id: 5, label: "Zoologischer Garten", line: "U2" },
    ];

    return {
      model,
      stations,
    };
  },
};`}}var L={name:`PageComboboxGroups`,components:{ACombobox:_,AlohaExample:p},setup(){let{codeHtml:e}=F(),{codeJs:t}=I();return{codeHtml:e,codeJs:t,model:s(``),stations:[{id:1,label:`Alexanderplatz`,line:`U2`},{id:2,label:`Hauptbahnhof`,line:`S5`},{id:3,label:`Potsdamer Platz`,line:`U2`},{id:4,label:`Ostkreuz`,line:`S5`,isClosed:!0},{id:5,label:`Zoologischer Garten`,line:`U2`}]}}};function R(e,t,n,r,o,s){let c=d(`a-combobox`),f=d(`aloha-example`);return u(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_COMBOBOX_GROUP_GROUPS_HEADER_`,description:`_A_COMBOBOX_GROUP_GROUPS_DESCRIPTION_`},{default:l(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.stations,"min-length":0,"open-on-focus":!0,"key-disabled":`isClosed`,"key-group":`line`,label:`_A_COMBOBOX_EXAMPLE_STATION_`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var z=v(L,[[`render`,R]]);function B(){return{codeHtml:`<a-combobox
  v-model="model"
  :data="languages"
  :is-data-simple-array="true"
  :max-items="5"
  :min-length="0"
  :open-on-focus="true"
  label="_A_COMBOBOX_EXAMPLE_LANGUAGE_"
/>`}}function V(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ACombobox,
} from "aloha-vue";

export default {
  components: {
    ACombobox,
  },
  setup() {
    const model = ref("");
    const languages = ["Deutsch", "English", "Español", "Français", "Hrvatski", "Italiano", "Nederlands", "Polski", "Русский", "Українська", "العربية"];

    return {
      languages,
      model,
    };
  },
};`}}var H={name:`PageComboboxOptions`,components:{ACombobox:_,AlohaExample:p},setup(){let{codeHtml:e}=B(),{codeJs:t}=V();return{codeHtml:e,codeJs:t,languages:[`Deutsch`,`English`,`Español`,`Français`,`Hrvatski`,`Italiano`,`Nederlands`,`Polski`,`Русский`,`Українська`,`العربية`],model:s(``)}}};function te(e,t,n,r,o,s){let c=d(`a-combobox`),f=d(`aloha-example`);return u(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_COMBOBOX_GROUP_OPTIONS_HEADER_`,description:`_A_COMBOBOX_GROUP_OPTIONS_DESCRIPTION_`},{default:l(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.languages,"is-data-simple-array":!0,"max-items":5,"min-length":0,"open-on-focus":!0,label:`_A_COMBOBOX_EXAMPLE_LANGUAGE_`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var U=v(H,[[`render`,te]]);function W(){return{codeHtml:`<a-combobox
  v-model="model"
  :search-timeout="300"
  :url="url"
  label="_A_COMBOBOX_EXAMPLE_SEARCH_"
  search-api-key="search"
/>`}}function G(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ACombobox,
} from "aloha-vue";

export default {
  components: {
    ACombobox,
  },
  setup() {
    const model = ref("");
    // GET url?search=<text> after a pause of 300 ms; an older answer does not replace a newer one
    const url = \`\${ import.meta.env.BASE_URL }assets/mock/select-base.json\`;

    return {
      model,
      url,
    };
  },
};`}}var K={name:`PageComboboxServer`,components:{ACombobox:_,AlohaExample:p},setup(){let{codeHtml:e}=W(),{codeJs:t}=G();return{codeHtml:e,codeJs:t,model:s(``),url:`/aloha/assets/mock/select-base.json`}}};function q(e,t,n,r,o,s){let c=d(`a-combobox`),f=d(`aloha-example`);return u(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_COMBOBOX_GROUP_SERVER_HEADER_`,description:`_A_COMBOBOX_GROUP_SERVER_DESCRIPTION_`},{default:l(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"search-timeout":300,url:e.url,label:`_A_COMBOBOX_EXAMPLE_SEARCH_`,"search-api-key":`search`},null,8,[`modelValue`,`url`])]),_:1},8,[`code-html`,`code-js`])}var J=v(K,[[`render`,q]]);function Y(){return{codeHtml:`<a-combobox
  v-model="model"
  :data="people"
  :texts="texts"
  label="_A_COMBOBOX_EXAMPLE_PERSON_"
>
  <template #option="{ item, highlight }">
    <span class="a_d_block">
      <component :is="() => highlight" />
    </span>
    <small class="a_text_muted">{{ item.email }}</small>
  </template>
</a-combobox>`}}function X(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ACombobox,
} from "aloha-vue";

export default {
  components: {
    ACombobox,
  },
  setup() {
    const model = ref("");
    const people = [
      { id: 1, label: "Anna Schmidt", email: "anna@example.com" },
      { id: 2, label: "Andreas Wolf", email: "andreas@example.com" },
      { id: 3, label: "Maria Anders", email: "maria@example.com" },
    ];
    // own texts of the status; a missing key keeps its default
    const texts = {
      noResults: "_A_COMBOBOX_EXAMPLE_NO_PERSON_",
    };

    return {
      model,
      people,
      texts,
    };
  },
};`}}var Z={name:`PageComboboxSlot`,components:{ACombobox:_,AlohaExample:p},setup(){let{codeHtml:e}=Y(),{codeJs:t}=X();return{codeHtml:e,codeJs:t,model:s(``),people:[{id:1,label:`Anna Schmidt`,email:`anna@example.com`},{id:2,label:`Andreas Wolf`,email:`andreas@example.com`},{id:3,label:`Maria Anders`,email:`maria@example.com`}],texts:{noResults:`_A_COMBOBOX_EXAMPLE_NO_PERSON_`}}}},Q={class:`a_d_block`},ne={class:`a_text_muted`};function re(e,t,n,o,s,p){let m=d(`a-combobox`),h=d(`aloha-example`);return u(),a(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_COMBOBOX_GROUP_SLOT_HEADER_`,description:`_A_COMBOBOX_GROUP_SLOT_DESCRIPTION_`},{default:l(()=>[i(m,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.people,texts:e.texts,label:`_A_COMBOBOX_EXAMPLE_PERSON_`},{option:l(({item:e,highlight:t})=>[r(`span`,Q,[(u(),a(c(()=>t)))]),r(`small`,ne,f(e.email),1)]),_:1},8,[`modelValue`,`data`,`texts`])]),_:1},8,[`code-html`,`code-js`])}var ie=v(Z,[[`render`,re]]);function ae(){let e=o(()=>h({placeholder:`_A_COMBOBOX_COMPONENT_NAME_`}));return{pageTitle:o(()=>`ACombobox${e.value?` (${e.value})`:``}`)}}var oe=[[`always-translate`,`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,`Boolean`,void 0],[`change`,`_A_UI_PROPS_CHANGE_DESCRIPTION_`,`Function`,`() => {}`],[`dependencies`,`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,`Array / Object`,void 0],[`disabled`,`_A_UI_PROPS_DISABLED_DESCRIPTION_`,`Boolean`,void 0],[`errors`,`_A_UI_PROPS_ERRORS_DESCRIPTION_`,`String / Array`,void 0],[`exclude-render-attributes`,`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,`Array`,`[]`],[`extra`,`_A_TRANSLATION_PROPS_EXTRA_DESCRIPTION_`,`Object`,void 0],[`help-text`,`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,`String`,void 0],[`html-id`,`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,`String`,void 0],[`id`,`_A_UI_PROPS_ID_DESCRIPTION_`,`String / Number`,`uniqueId("a_combobox_")`],[`id-prefix`,`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,`String`,void 0],[`input-attributes`,`_A_UI_PROPS_INPUT_ATTRIBUTES_DESCRIPTION_`,`Object`,`{}`],[`input-class`,`_A_UI_PROPS_INPUT_CLASS_DESCRIPTION_`,`String / Object`,void 0],[`is-hide`,`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,`Boolean`,void 0],[`is-render`,`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,`Boolean`,`true`],[`label`,`_A_UI_PROPS_LABEL_DESCRIPTION_`,`String / Number`,void 0],[`label-class`,`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,`String / Object`,void 0],[`label-description`,`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,`String`,void 0],[`label-screen-reader`,`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,`String / Number`,void 0],[`model-dependencies`,`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,`Object`,`{}`],[`model-undefined`,`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,`String / Number / Object / Array / Boolean`,`""`],[`placeholder`,`_A_UI_PROPS_PLACEHOLDER_DESCRIPTION_`,`String`,void 0],[`readonly`,`_A_UI_PROPS_READONLY_DESCRIPTION_`,`Boolean`,void 0],[`readonly-default`,`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,`String`,`""`],[`required`,`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,`Boolean`,`false`]],$=[[`data`,`_A_COMBOBOX_PROPS_DATA_DESCRIPTION_`,`Array`,`[]`],[`filter-callback`,`_A_COMBOBOX_PROPS_FILTER_CALLBACK_DESCRIPTION_`,`Function`,void 0],[`filter-mode`,`_A_COMBOBOX_PROPS_FILTER_MODE_DESCRIPTION_`,`String`,`"contains"`],[`ignore-diacritics`,`_A_COMBOBOX_PROPS_IGNORE_DIACRITICS_DESCRIPTION_`,`Boolean`,`true`],[`inline-autocomplete`,`_A_COMBOBOX_PROPS_INLINE_AUTOCOMPLETE_DESCRIPTION_`,`Boolean`,`false`],[`key-disabled`,`_A_COMBOBOX_PROPS_KEY_DISABLED_DESCRIPTION_`,`String`,void 0],[`key-group`,`_A_COMBOBOX_PROPS_KEY_GROUP_DESCRIPTION_`,`String`,void 0],[`texts`,`_A_COMBOBOX_PROPS_TEXTS_DESCRIPTION_`,`Object`,`{ loading, noResults, results }`],[`in-body`,`_A_COMBOBOX_PROPS_IN_BODY_DESCRIPTION_`,`Boolean`,`true`],[`is-bottom-sheet-on-mobile`,`_A_COMBOBOX_PROPS_IS_BOTTOM_SHEET_ON_MOBILE_DESCRIPTION_`,`Boolean`,`true`],[`is-clear-button`,`_A_COMBOBOX_PROPS_IS_CLEAR_BUTTON_DESCRIPTION_`,`Boolean`,`true`],[`is-data-simple-array`,`_A_COMBOBOX_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_`,`Boolean`,void 0],[`key-id`,`_A_COMBOBOX_PROPS_KEY_ID_DESCRIPTION_`,`String`,`"id"`],[`key-label`,`_A_COMBOBOX_PROPS_KEY_LABEL_DESCRIPTION_`,`String`,`"label"`],[`key-label-callback`,`_A_COMBOBOX_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_`,`Function`,void 0],[`max-items`,`_A_COMBOBOX_PROPS_MAX_ITEMS_DESCRIPTION_`,`Number`,`10`],[`min-length`,`_A_COMBOBOX_PROPS_MIN_LENGTH_DESCRIPTION_`,`Number`,`1`],[`model-value`,`_A_COMBOBOX_PROPS_MODEL_VALUE_DESCRIPTION_`,`String / Number`,void 0],[`open-on-focus`,`_A_COMBOBOX_PROPS_OPEN_ON_FOCUS_DESCRIPTION_`,`Boolean`,`false`],[`popper-container-id`,`_A_COMBOBOX_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,`String`,`"a_tooltip_container"`],[`search-api-key`,`_A_COMBOBOX_PROPS_SEARCH_API_KEY_DESCRIPTION_`,`String`,`"search"`],[`search-timeout`,`_A_COMBOBOX_PROPS_SEARCH_TIMEOUT_DESCRIPTION_`,`Number`,`300`],[`translate-data`,`_A_COMBOBOX_PROPS_TRANSLATE_DATA_DESCRIPTION_`,`Boolean`,void 0],[`type`,`_A_COMBOBOX_PROPS_TYPE_DESCRIPTION_`,`String`,`"combobox"`],[`url`,`_A_COMBOBOX_PROPS_URL_DESCRIPTION_`,`String`,void 0],[`url-params`,`_A_COMBOBOX_PROPS_URL_PARAMS_DESCRIPTION_`,`Object`,void 0],[`url-template-data`,`_A_COMBOBOX_PROPS_URL_TEMPLATE_DATA_DESCRIPTION_`,`Object`,`{}`],[`z-index`,`_A_COMBOBOX_PROPS_Z_INDEX_DESCRIPTION_`,`Number / String`,void 0]];function se(){return{dataEvents:[{name:`select`,type:`Function`,description:`_A_COMBOBOX_EVENTS_SELECT_DESCRIPTION_`},{name:`update:modelValue`,type:`Function`,description:`_A_COMBOBOX_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`}],dataProps:[...oe,...$].map(([e,t,n,r])=>({name:e,description:t,type:n,default:r,required:!1})).sort((e,t)=>e.name.localeCompare(t.name)),dataSlots:[{name:`option`,description:`_A_COMBOBOX_SLOTS_OPTION_DESCRIPTION_`}],dataTranslate:[`_A_COMBOBOX_LOADING_`,`_A_COMBOBOX_NO_RESULTS_`,`_A_COMBOBOX_RESULTS_{{count}}_`]}}var ce={name:`PageCombobox`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:g,PageComboboxBasic:C,PageComboboxOptions:U,PageComboboxServer:J,PageComboboxForm:P,PageComboboxGroups:z,PageComboboxFilter:O,PageComboboxSlot:ie},setup(){let{pageTitle:e}=ae(),{dataEvents:t,dataProps:n,dataSlots:r,dataTranslate:i}=se();return{dataEvents:t,dataProps:n,dataSlots:r,dataTranslate:i,pageTitle:e}}};function le(e,t,n,r,o,s){let c=d(`a-translation`),f=d(`page-combobox-basic`),p=d(`page-combobox-options`),m=d(`page-combobox-server`),h=d(`page-combobox-form`),g=d(`page-combobox-groups`),_=d(`page-combobox-filter`),v=d(`page-combobox-slot`),y=d(`aloha-table-props`),b=d(`aloha-table-translate`),x=d(`aloha-table-css-vars`),S=d(`aloha-page`);return u(),a(S,{"page-title":e.pageTitle},{body:l(()=>[i(c,{tag:`p`,html:`_A_COMBOBOX_COMPONENT_DESCRIPTION_`}),i(c,{class:`a_mb_4`,tag:`div`,html:`_A_COMBOBOX_ACCESSIBILITY_DESCRIPTION_`}),i(c,{class:`a_mb_4`,tag:`div`,html:`_A_COMBOBOX_ACCESSIBILITY_MORE_DESCRIPTION_`}),i(f),i(p),i(m),i(h),i(g),i(_),i(v),i(y,{data:e.dataProps},null,8,[`data`]),i(y,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),i(y,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),i(b,{data:e.dataTranslate},null,8,[`data`]),i(x,{files:`components/ui/ACombobox`})]),_:1},8,[`page-title`])}var ue=v(ce,[[`render`,le]]);export{ue as default};