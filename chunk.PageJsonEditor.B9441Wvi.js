import{t as e}from"./chunk.AlohaPage.BIw9NYpI.js";import{t}from"./chunk.AlohaTableProps.9D5sSTzx.js";import{t as n}from"./chunk.AlohaTableTranslate.Dl6r_SFb.js";import{Gt as r,Ht as i,Jt as a,Qt as o,Sn as s,Ut as c,Vt as l,Wt as u,_n as d,cn as f,gn as p,mn as m,on as h,un as g,wn as _,zt as v}from"./chunk.vendor.Bjd2408Z.js";import{t as y}from"./chunk.AlohaExample.CEueonn8.js";import{D as b,hn as x,mn as S,n as C,q as w,sn as T,t as E}from"./bundle.index.Dor-y9Rj.js";function D(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_SETTINGS_"
  help-text="_A_JSON_EDITOR_EXAMPLE_SETTINGS_HELP_"
/>
<pre>{{ model }}</pre>`}}function O(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      title: "Newsletter",
      active: true,
      sendAt: "09:00",
      recipients: ["anna@example.com", "ben@example.com"],
      layout: {
        columns: 2,
        theme: "light",
      },
    });

    return {
      model,
    };
  },
};`}}var k={name:`PageJsonEditorBasic`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=D(),{codeJs:t}=O();return{codeHtml:e,codeJs:t,model:d({title:`Newsletter`,active:!0,sendAt:`09:00`,recipients:[`anna@example.com`,`ben@example.com`],layout:{columns:2,theme:`light`}})}}},A={class:`a_mt_3`};function j(e,t,n,r,o,s){let l=g(`a-json-editor`),u=g(`aloha-example`);return h(),c(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_JSON_EDITOR_BASIC_DESCRIPTION_`},{default:m(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_SETTINGS_`,"help-text":`_A_JSON_EDITOR_EXAMPLE_SETTINGS_HELP_`},null,8,[`modelValue`]),i(`pre`,A,_(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var M=E(k,[[`render`,j]]);function N(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_LOG_"
  :expand-level="2"
  :array-page-size="1000"
  height="24rem"
  density="compact"
/>`}}function P(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    // 3000 rows: only the visible rows are rendered (virtual-threshold), aria-rowcount and aria-rowindex
    const model = ref({
      entries: Array.from({ length: 3000 }, (_, index) => ({
        id: index + 1,
        level: ["info", "warning", "error"][index % 3],
        message: \`Event \${ index + 1 }\`,
      })),
    });

    return {
      model,
    };
  },
};`}}var F={name:`PageJsonEditorBig`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=N(),{codeJs:t}=P();return{codeHtml:e,codeJs:t,model:d({entries:Array.from({length:3e3},(e,t)=>({id:t+1,level:[`info`,`warning`,`error`][t%3],message:`Event ${t+1}`}))})}}};function I(e,t,n,r,i,o){let s=g(`a-json-editor`),l=g(`aloha-example`);return h(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_BIG_HEADER_`,description:`_A_JSON_EDITOR_BIG_DESCRIPTION_`},{default:m(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_LOG_`,"expand-level":2,"array-page-size":1e3,height:`24rem`,density:`compact`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var L=E(F,[[`render`,I]]);function ee(){return{codeHtml:`<!-- "warn" (default): a warning, the number is rounded -->
<a-json-editor
  v-model="modelWarn"
  label="_A_JSON_EDITOR_EXAMPLE_BIG_WARN_"
  model-type="string"
/>
<!-- "bigint": the integer stays exact as BigInt; "string": as a string -->
<a-json-editor
  v-model="modelBigint"
  label="_A_JSON_EDITOR_EXAMPLE_BIG_BIGINT_"
  model-type="string"
  big-numbers="bigint"
/>`}}function te(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const TEXT = "{\\n  \\"id\\": 12345678901234567890,\\n  \\"price\\": 9.99\\n}";
    const modelWarn = ref(TEXT);
    const modelBigint = ref(TEXT);

    return {
      modelBigint,
      modelWarn,
    };
  },
};`}}var R={name:`PageJsonEditorBigNumbers`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=ee(),{codeJs:t}=te(),n=`{
  "id": 12345678901234567890,
  "price": 9.99
}`,r=d(n);return{codeHtml:e,codeJs:t,modelBigint:d(n),modelWarn:r}}},z={class:`a_columns a_columns_count_12`},B={class:`a_column a_column_12 a_column_6_lg`},V={class:`a_mt_3`},H={class:`a_column a_column_12 a_column_6_lg`},U={class:`a_mt_3`};function W(e,t,n,r,o,s){let l=g(`a-json-editor`),u=g(`aloha-example`);return h(),c(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_BIG_NUMBERS_HEADER_`,description:`_A_JSON_EDITOR_BIG_NUMBERS_DESCRIPTION_`},{default:m(()=>[i(`div`,z,[i(`div`,B,[a(l,{modelValue:e.modelWarn,"onUpdate:modelValue":t[0]||=t=>e.modelWarn=t,label:`_A_JSON_EDITOR_EXAMPLE_BIG_WARN_`,"model-type":`string`},null,8,[`modelValue`]),i(`pre`,V,_(e.modelWarn),1)]),i(`div`,H,[a(l,{modelValue:e.modelBigint,"onUpdate:modelValue":t[1]||=t=>e.modelBigint=t,label:`_A_JSON_EDITOR_EXAMPLE_BIG_BIGINT_`,"model-type":`string`,"big-numbers":`bigint`},null,8,[`modelValue`]),i(`pre`,U,_(e.modelBigint),1)])])]),_:1},8,[`code-html`,`code-js`])}var G=E(R,[[`render`,W]]);function K(){return{codeHtml:`<a-form
  v-model="model"
  :data="dataForm"
/>
<pre>{{ model }}</pre>`}}function q(){return{codeJs:`import {
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
        id: "name",
        label: "_A_JSON_EDITOR_EXAMPLE_NAME_",
      },
      {
        type: "jsonEditor",
        id: "options",
        label: "_A_JSON_EDITOR_EXAMPLE_OPTIONS_",
        rules: { "/timeout": { type: "number", min: 1 } },
        modes: ["tree", "code"],
      },
    ];
    const model = ref({
      name: "Import",
      options: { timeout: 30, retries: 3 },
    });

    return {
      dataForm,
      model,
    };
  },
};`}}var J={name:`PageJsonEditorForm`,components:{AForm:b,AlohaExample:y},setup(){let{codeHtml:e}=K(),{codeJs:t}=q();return{codeHtml:e,codeJs:t,dataForm:[{type:`text`,id:`name`,label:`_A_JSON_EDITOR_EXAMPLE_NAME_`},{type:`jsonEditor`,id:`options`,label:`_A_JSON_EDITOR_EXAMPLE_OPTIONS_`,rules:{"/timeout":{type:`number`,min:1}},modes:[`tree`,`code`]}],model:d({name:`Import`,options:{timeout:30,retries:3}})}}},Y={class:`a_mt_3`};function X(e,t,n,r,o,s){let l=g(`a-form`),u=g(`aloha-example`);return h(),c(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_FORM_HEADER_`,description:`_A_JSON_EDITOR_FORM_DESCRIPTION_`},{default:m(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.dataForm},null,8,[`modelValue`,`data`]),i(`pre`,Y,_(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var Z=E(J,[[`render`,X]]);function Q(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_SETTINGS_"
  mode="split"
  :indent="4"
  sort-keys
  :inline-arrays="60"
  empty-containers="{ }"
  format-on="blur"
/>`}}function ne(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      ...{
        title: "Newsletter",
        active: true,
        sendAt: "09:00",
        recipients: ["anna@example.com", "ben@example.com"],
        layout: {
          columns: 2,
          theme: "light",
        },
      },
      extra: {},
    });

    return {
      model,
    };
  },
};`}}var re={name:`PageJsonEditorFormat`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=Q(),{codeJs:t}=ne();return{codeHtml:e,codeJs:t,model:d({title:`Newsletter`,active:!0,sendAt:`09:00`,recipients:[`anna@example.com`,`ben@example.com`],layout:{columns:2,theme:`light`},extra:{}})}}};function ie(e,t,n,r,i,o){let s=g(`a-json-editor`),l=g(`aloha-example`);return h(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_FORMAT_HEADER_`,description:`_A_JSON_EDITOR_FORMAT_DESCRIPTION_`},{default:m(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_SETTINGS_`,mode:`split`,indent:4,"sort-keys":``,"inline-arrays":60,"empty-containers":`{ }`,"format-on":`blur`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var ae=E(re,[[`render`,ie]]);function oe(){return{codeHtml:`<!-- main.js: the defaults for all editors
app.use(AComponentsPlugin, {
  AJsonEditor: { props: { density: "compact", showTypes: false } },
});
-->
<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_CONFIG_"
  density="compact"
  @fullscreen="onFullscreen"
/>`}}function se(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      server: { host: "localhost", port: 8080, tls: false },
      features: ["search", "export", "history"],
      limits: { requests: 1000, burst: 50 },
    });
    const isFullscreen = ref(undefined);
    const onFullscreen = ({ isFullscreen: value }) => {
      isFullscreen.value = value;
    };

    return {
      isFullscreen,
      model,
      onFullscreen,
    };
  },
};`}}var ce={name:`PageJsonEditorFullscreen`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=oe(),{codeJs:t}=se(),n=d({server:{host:`localhost`,port:8080,tls:!1},features:[`search`,`export`,`history`],limits:{requests:1e3,burst:50}}),r=d(void 0);return{codeHtml:e,codeJs:t,isFullscreen:r,model:n,onFullscreen:({isFullscreen:e})=>{r.value=e}}}},le={key:0,class:`a_mt_3`};function ue(e,t,n,i,o,s){let l=g(`a-json-editor`),d=g(`aloha-example`);return h(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_FULLSCREEN_HEADER_`,description:`_A_JSON_EDITOR_FULLSCREEN_DESCRIPTION_`},{default:m(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_CONFIG_`,density:`compact`,onFullscreen:e.onFullscreen},null,8,[`modelValue`,`onFullscreen`]),e.isFullscreen===void 0?u(``,!0):(h(),r(`p`,le,`fullscreen: `+_(e.isFullscreen),1))]),_:1},8,[`code-html`,`code-js`])}var de=E(ce,[[`render`,ue]]);function fe(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_SETTINGS_"
  :reset-value="resetValue"
  :undo-limit="50"
/>`}}function pe(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    // "reset" goes back to this value (by default to the first value of the model)
    const resetValue = {
      title: "Newsletter",
      active: true,
      sendAt: "09:00",
      recipients: ["anna@example.com", "ben@example.com"],
      layout: {
        columns: 2,
        theme: "light",
      },
    };
    const model = ref({ ...resetValue, title: "Changed title" });

    return {
      model,
      resetValue,
    };
  },
};`}}var me={name:`PageJsonEditorHistory`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=fe(),{codeJs:t}=pe(),n={title:`Newsletter`,active:!0,sendAt:`09:00`,recipients:[`anna@example.com`,`ben@example.com`],layout:{columns:2,theme:`light`}};return{codeHtml:e,codeJs:t,model:d({...n,title:`Changed title`}),resetValue:n}}};function he(e,t,n,r,i,o){let s=g(`a-json-editor`),l=g(`aloha-example`);return h(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_HISTORY_HEADER_`,description:`_A_JSON_EDITOR_HISTORY_DESCRIPTION_`},{default:m(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_SETTINGS_`,"reset-value":e.resetValue,"undo-limit":50},null,8,[`modelValue`,`reset-value`])]),_:1},8,[`code-html`,`code-js`])}var ge=E(me,[[`render`,he]]);function _e(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_SETTINGS_"
  confirm-remove="containers"
  :before-add="beforeAdd"
  :before-rename="beforeRename"
  :after-change="afterChange"
  :get-node-actions="getNodeActions"
/>
<ol>
  <li v-for="(entry, index) in log" :key="index">{{ entry }}</li>
</ol>`}}function ve(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      title: "Newsletter",
      active: true,
      sendAt: "09:00",
      recipients: ["anna@example.com", "ben@example.com"],
      layout: {
        columns: 2,
        theme: "light",
      },
    });
    const log = ref([]);

    // the value of a new element: a new recipient gets an address
    const beforeAdd = ({ tokens }) => (tokens[0] === "recipients" ? "new@example.com" : undefined);
    // false stops the change, another value replaces it: keys in camelCase
    const beforeRename = ({ newKey }) => newKey.replace(/[-_ ](\\w)/g, (_, char) => char.toUpperCase());
    const afterChange = ({ operation, path }) => {
      log.value.push(\`\${ operation }: \${ path }\`);
    };
    // own actions in the menu of a row
    const getNodeActions = ({ value }) => (typeof value === "string" ? [
      { id: "trim", label: "_A_JSON_EDITOR_EXAMPLE_TRIM_", run: ({ value: text }) => text.trim() },
      { id: "upper", label: "_A_JSON_EDITOR_EXAMPLE_UPPER_", run: ({ value: text }) => text.toUpperCase() },
    ] : []);

    return {
      afterChange,
      beforeAdd,
      beforeRename,
      getNodeActions,
      log,
      model,
    };
  },
};`}}var ye={name:`PageJsonEditorHooks`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=_e(),{codeJs:t}=ve(),n=d({title:`Newsletter`,active:!0,sendAt:`09:00`,recipients:[`anna@example.com`,`ben@example.com`],layout:{columns:2,theme:`light`}}),r=d([]);return{codeHtml:e,codeJs:t,afterChange:({operation:e,path:t})=>{r.value.push(`${e}: ${t}`)},beforeAdd:({tokens:e})=>e[0]===`recipients`?`new@example.com`:void 0,beforeRename:({newKey:e})=>e.replace(/[-_ ](\w)/g,(e,t)=>t.toUpperCase()),getNodeActions:({value:e})=>typeof e==`string`?[{id:`trim`,label:`_A_JSON_EDITOR_EXAMPLE_TRIM_`,run:({value:e})=>e.trim()},{id:`upper`,label:`_A_JSON_EDITOR_EXAMPLE_UPPER_`,run:({value:e})=>e.toUpperCase()}]:[],log:r,model:n}}},be={class:`a_mt_3`};function xe(e,t,n,o,s,l){let u=g(`a-json-editor`),d=g(`aloha-example`);return h(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_HOOKS_HEADER_`,description:`_A_JSON_EDITOR_HOOKS_DESCRIPTION_`},{default:m(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_SETTINGS_`,"confirm-remove":`containers`,"before-add":e.beforeAdd,"before-rename":e.beforeRename,"after-change":e.afterChange,"get-node-actions":e.getNodeActions},null,8,[`modelValue`,`before-add`,`before-rename`,`after-change`,`get-node-actions`]),i(`ol`,be,[(h(!0),r(v,null,f(e.log,(e,t)=>(h(),r(`li`,{key:t},_(e),1))),128))])]),_:1},8,[`code-html`,`code-js`])}var Se=E(ye,[[`render`,xe]]);function Ce(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_CONFIG_"
  model-type="string"
  :format-options="{ indent: 2, trailingNewline: true }"
/>
<pre>{{ model }}</pre>`}}function we(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    // the model is the JSON text, e.g. from a database field
    const model = ref("{\\"debug\\":false,\\"level\\":\\"info\\",\\"targets\\":[\\"console\\",\\"file\\"]}");

    return {
      model,
    };
  },
};`}}var Te={name:`PageJsonEditorModelString`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=Ce(),{codeJs:t}=we();return{codeHtml:e,codeJs:t,model:d(`{"debug":false,"level":"info","targets":["console","file"]}`)}}},Ee={class:`a_mt_3`};function De(e,t,n,r,o,s){let l=g(`a-json-editor`),u=g(`aloha-example`);return h(),c(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_MODEL_STRING_HEADER_`,description:`_A_JSON_EDITOR_MODEL_STRING_DESCRIPTION_`},{default:m(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_CONFIG_`,"model-type":`string`,"format-options":{indent:2,trailingNewline:!0}},null,8,[`modelValue`]),i(`pre`,Ee,_(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var Oe=E(Te,[[`render`,De]]);function ke(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_TEMPLATE_"
  :multiline-max-rows="6"
/>`}}function Ae(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      subject: "Your order",
      body: "Hello,\\n\\nthank you for your order.\\nWe send it tomorrow.\\n\\nBest regards\\nThe team",
      footer: "Aloha GmbH · Bonn",
    });

    return {
      model,
    };
  },
};`}}var je={name:`PageJsonEditorMultiline`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=ke(),{codeJs:t}=Ae();return{codeHtml:e,codeJs:t,model:d({subject:`Your order`,body:`Hello,

thank you for your order.
We send it tomorrow.

Best regards
The team`,footer:`Aloha GmbH · Bonn`})}}};function Me(e,t,n,r,i,o){let s=g(`a-json-editor`),l=g(`aloha-example`);return h(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_MULTILINE_HEADER_`,description:`_A_JSON_EDITOR_MULTILINE_DESCRIPTION_`},{default:m(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_TEMPLATE_`,"multiline-max-rows":6},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var Ne=E(je,[[`render`,Me]]);function Pe(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_THEME_"
  :plugins="[colorPlugin]"
/>`}}function Fe(){return{codeJs:`import {
  h,
  markRaw,
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      primary: "#0775b0",
      danger: "#c81e29",
      text: "#000000",
      radius: 4,
    });

    // the view of a color: a swatch and the text
    const ColorView = {
      props: ["value"],
      render() {
        return h("span", { class: "a_d_inline_flex a_align_items_center a_gap_1" }, [
          h("span", { "aria-hidden": "true", style: \`display:inline-block;width:1rem;height:1rem;border-radius:.25rem;background:\${ this.value }\` }),
          this.value,
        ]);
      },
    };
    // the editor of a color: v-model and a label
    const ColorEditor = {
      props: ["modelValue", "label"],
      emits: ["update:modelValue"],
      render() {
        return h("input", {
          type: "color",
          value: this.modelValue,
          "aria-label": this.label,
          onInput: $event => this.$emit("update:modelValue", $event.target.value),
        });
      },
    };

    // a plugin: an own type, an action and a button of the toolbar (also global with AJsonEditorPlugin)
    const colorPlugin = {
      name: "color",
      types: [{
        name: "color",
        label: "_A_JSON_EDITOR_EXAMPLE_TYPE_COLOR_",
        detect: value => typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value),
        view: markRaw(ColorView),
        editor: markRaw(ColorEditor),
        validate: value => (value === "#000000" ? { level: "warning", message: "_A_JSON_EDITOR_EXAMPLE_BLACK_" } : null),
      }],
      actions: [{
        id: "invert",
        label: "_A_JSON_EDITOR_EXAMPLE_INVERT_",
        when: ({ type }) => type === "color",
        run: ({ value }) => \`#\${ (0xffffff - parseInt(value.slice(1), 16)).toString(16).padStart(6, "0") }\`,
      }],
      toolbar: [{
        id: "sort",
        label: "_A_JSON_EDITOR_EXAMPLE_SORT_ALL_",
        run: ({ document, replaceDocument }) => replaceDocument(
          Object.fromEntries(Object.entries(document).sort(([a], [b]) => a.localeCompare(b))),
          { label: "_A_JSON_EDITOR_EXAMPLE_SORT_ALL_" },
        ),
      }],
    };

    return {
      colorPlugin,
      model,
    };
  },
};`}}var Ie={name:`PageJsonEditorPlugin`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=Pe(),{codeJs:t}=Fe(),n=d({primary:`#0775b0`,danger:`#c81e29`,text:`#000000`,radius:4});return{codeHtml:e,codeJs:t,colorPlugin:{name:`color`,types:[{name:`color`,label:`_A_JSON_EDITOR_EXAMPLE_TYPE_COLOR_`,detect:e=>typeof e==`string`&&/^#[0-9a-f]{6}$/i.test(e),view:p({props:[`value`],render(){return o(`span`,{class:`a_d_inline_flex a_align_items_center a_gap_1`},[o(`span`,{"aria-hidden":`true`,style:`display:inline-block;width:1rem;height:1rem;border-radius:.25rem;background:${this.value}`}),this.value])}}),editor:p({props:[`modelValue`,`label`],emits:[`update:modelValue`],render(){return o(`input`,{type:`color`,value:this.modelValue,"aria-label":this.label,onInput:e=>this.$emit(`update:modelValue`,e.target.value)})}}),validate:e=>e===`#000000`?{level:`warning`,message:`_A_JSON_EDITOR_EXAMPLE_BLACK_`}:null}],actions:[{id:`invert`,label:`_A_JSON_EDITOR_EXAMPLE_INVERT_`,when:({type:e})=>e===`color`,run:({value:e})=>`#${(16777215-parseInt(e.slice(1),16)).toString(16).padStart(6,`0`)}`}],toolbar:[{id:`sort`,label:`_A_JSON_EDITOR_EXAMPLE_SORT_ALL_`,run:({document:e,replaceDocument:t})=>t(Object.fromEntries(Object.entries(e).sort(([e],[t])=>e.localeCompare(t))),{label:`_A_JSON_EDITOR_EXAMPLE_SORT_ALL_`})}]},model:n}}};function Le(e,t,n,r,i,o){let s=g(`a-json-editor`),l=g(`aloha-example`);return h(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_PLUGIN_HEADER_`,description:`_A_JSON_EDITOR_PLUGIN_DESCRIPTION_`},{default:m(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_THEME_`,plugins:[e.colorPlugin]},null,8,[`modelValue`,`plugins`])]),_:1},8,[`code-html`,`code-js`])}var Re=E(Ie,[[`render`,Le]]);function ze(){return{codeHtml:`<a-json-editor
  :model-value="model"
  label="_A_JSON_EDITOR_EXAMPLE_RESPONSE_"
  readonly
  :expand-level="2"
  :modes="['tree', 'code']"
/>`}}function Be(){return{codeJs:`import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = {
      status: 200,
      data: { id: 7, items: [{ sku: "A1", qty: 2 }, { sku: "B4", qty: 1 }] },
      meta: { took: 12, cached: false },
    };

    return {
      model,
    };
  },
};`}}var Ve={name:`PageJsonEditorReadonly`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=ze(),{codeJs:t}=Be();return{codeHtml:e,codeJs:t,model:{status:200,data:{id:7,items:[{sku:`A1`,qty:2},{sku:`B4`,qty:1}]},meta:{took:12,cached:!1}}}}};function He(e,t,n,r,i,o){let s=g(`a-json-editor`),l=g(`aloha-example`);return h(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_READONLY_HEADER_`,description:`_A_JSON_EDITOR_READONLY_DESCRIPTION_`},{default:m(()=>[a(s,{"model-value":e.model,label:`_A_JSON_EDITOR_EXAMPLE_RESPONSE_`,readonly:``,"expand-level":2,modes:[`tree`,`code`]},null,8,[`model-value`])]),_:1},8,[`code-html`,`code-js`])}var Ue=E(Ve,[[`render`,He]]);function We(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_PRODUCT_"
  :plugins="plugins"
  :schema="schema"
/>`}}function Ge(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
  AJsonEditorPlugins,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      name: "Desk lamp",
      color: "#0775b0",
      background: "rgba(7, 117, 176, 0.25)",
      size: "m",
      released: "2025-03-05",
      updatedAt: "2025-11-20T08:15:00Z",
      website: "https://github.com/ilia-brykin/aloha",
      picture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
      available: true,
    });
    // all ready plugins: color, date, image, url, boolean as a switch (or only some: [AJsonEditorColorPlugin])
    const plugins = AJsonEditorPlugins;
    // "enum" of the schema (or of the rules): the value is edited with a select
    const schema = {
      type: "object",
      properties: {
        size: { enum: ["s", "m", "l", "xl"] },
      },
    };

    return {
      model,
      plugins,
      schema,
    };
  },
};`}}var Ke={name:`PageJsonEditorReadyPlugins`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=We(),{codeJs:t}=Ge();return{codeHtml:e,codeJs:t,model:d({name:`Desk lamp`,color:`#0775b0`,background:`rgba(7, 117, 176, 0.25)`,size:`m`,released:`2025-03-05`,updatedAt:`2025-11-20T08:15:00Z`,website:`https://github.com/ilia-brykin/aloha`,picture:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==`,available:!0}),plugins:C,schema:{type:`object`,properties:{size:{enum:[`s`,`m`,`l`,`xl`]}}}}}};function qe(e,t,n,r,i,o){let s=g(`a-json-editor`),l=g(`aloha-example`);return h(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_READY_PLUGINS_HEADER_`,description:`_A_JSON_EDITOR_READY_PLUGINS_DESCRIPTION_`},{default:m(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_PRODUCT_`,plugins:e.plugins,schema:e.schema},null,8,[`modelValue`,`plugins`,`schema`])]),_:1},8,[`code-html`,`code-js`])}var Je=E(Ke,[[`render`,qe]]);function Ye(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_CONFIG_"
  model-type="string"
  mode="split"
/>`}}function Xe(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    // almost JSON: a comment, quotes, a missing comma, a trailing comma, Python constants
    const model = ref([
      "{",
      "  // the server",
      "  host: 'localhost',",
      "  port: 8080,",
      "  tls: False,",
      "  proxy: None,",
      "  features: [\\"search\\" \\"export\\",],",
      "}",
    ].join("\\n"));

    return {
      model,
    };
  },
};`}}var Ze={name:`PageJsonEditorRepair`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=Ye(),{codeJs:t}=Xe();return{codeHtml:e,codeJs:t,model:d(`{
  // the server
  host: 'localhost',
  port: 8080,
  tls: False,
  proxy: None,
  features: ["search" "export",],
}`)}}};function Qe(e,t,n,r,i,o){let s=g(`a-json-editor`),l=g(`aloha-example`);return h(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_REPAIR_HEADER_`,description:`_A_JSON_EDITOR_REPAIR_DESCRIPTION_`},{default:m(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_CONFIG_`,"model-type":`string`,mode:`split`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var $e=E(Ze,[[`render`,Qe]]);function et(){return{codeHtml:`<a-json-editor
  ref="editorRef"
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_CONFIG_"
  :expand-level="2"
/>
<a-button
  class="a_btn a_btn_outline_primary"
  text="_A_JSON_EDITOR_EXAMPLE_REPLACE_HOST_"
  @click="replaceHost"
/>
<p v-if="result">{{ result }}</p>`}}function tt(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AButton,
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AJsonEditor,
  },
  setup() {
    const model = ref({
      api: "https://old.example.com/api",
      login: "https://old.example.com/login",
      cdn: {
        images: "https://old.example.com/images",
        fonts: "https://fonts.example.com",
      },
      old_timeout: 30,
    });
    const editorRef = ref(undefined);
    const result = ref(undefined);
    // the same as Ctrl+H: search and "Replace all", one step of the history
    const replaceHost = async() => {
      editorRef.value.search("old.example.com");
      result.value = await editorRef.value.replace("new.example.com");
    };

    return {
      editorRef,
      model,
      replaceHost,
      result,
    };
  },
};`}}var nt={name:`PageJsonEditorReplace`,components:{AButton:T,AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=et(),{codeJs:t}=tt(),n=d({api:`https://old.example.com/api`,login:`https://old.example.com/login`,cdn:{images:`https://old.example.com/images`,fonts:`https://fonts.example.com`},old_timeout:30}),r=d(void 0),i=d(void 0);return{codeHtml:e,codeJs:t,editorRef:r,model:n,replaceHost:async()=>{r.value.search(`old.example.com`),i.value=await r.value.replace(`new.example.com`)},result:i}}},rt={key:0,class:`a_mt_3`};function it(e,t,n,i,o,s){let l=g(`a-json-editor`),d=g(`a-button`),f=g(`aloha-example`);return h(),c(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_REPLACE_HEADER_`,description:`_A_JSON_EDITOR_REPLACE_DESCRIPTION_`},{default:m(()=>[a(l,{ref:`editorRef`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_CONFIG_`,"expand-level":2},null,8,[`modelValue`]),a(d,{class:`a_mt_3 a_btn a_btn_outline_primary`,text:`_A_JSON_EDITOR_EXAMPLE_REPLACE_HOST_`,onClick:e.replaceHost},null,8,[`onClick`]),e.result?(h(),r(`p`,rt,_(e.result),1)):u(``,!0)]),_:1},8,[`code-html`,`code-js`])}var at=E(nt,[[`render`,it]]);function ot(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_ACCOUNT_"
  :readonly-paths="['/id', '/created']"
  :locked-keys="['/email']"
  :hidden-paths="['/password']"
  :allowed-types="['string', 'number', 'boolean', 'object', 'array']"
  :max-depth="2"
/>`}}function st(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      id: 42,
      created: "2025-03-05",
      email: "anna@example.com",
      password: "secret",
      roles: ["editor"],
      profile: { firstName: "Anna", lastName: "Muster" },
    });

    return {
      model,
    };
  },
};`}}var ct={name:`PageJsonEditorRights`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=ot(),{codeJs:t}=st();return{codeHtml:e,codeJs:t,model:d({id:42,created:`2025-03-05`,email:`anna@example.com`,password:`secret`,roles:[`editor`],profile:{firstName:`Anna`,lastName:`Muster`}})}}};function lt(e,t,n,r,i,o){let s=g(`a-json-editor`),l=g(`aloha-example`);return h(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_RIGHTS_HEADER_`,description:`_A_JSON_EDITOR_RIGHTS_DESCRIPTION_`},{default:m(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_ACCOUNT_`,"readonly-paths":[`/id`,`/created`],"locked-keys":[`/email`],"hidden-paths":[`/password`],"allowed-types":[`string`,`number`,`boolean`,`object`,`array`],"max-depth":2},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var ut=E(ct,[[`render`,lt]]);function dt(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_PERSON_"
  :rules="rules"
  :expand-level="3"
/>`}}function ft(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      name: "A",
      age: 200,
      email: "anna-example.com",
      tags: ["vue", "vue"],
      contacts: [{ type: "phone" }, { type: "fax" }],
    });
    // "*" is any index or key; level: "warning" does not block
    const rules = {
      "/name": { type: "string", minLength: 2 },
      "/age": { type: "integer", min: 0, max: 150 },
      "/email": { pattern: "^[^@]+@[^@]+$", message: "_A_JSON_EDITOR_EXAMPLE_EMAIL_INVALID_" },
      "/tags": { uniqueItems: true, level: "warning" },
      "/contacts/*/type": { enum: ["phone", "email"] },
      "/country": { required: true },
    };

    return {
      model,
      rules,
    };
  },
};`}}var pt={name:`PageJsonEditorRules`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=dt(),{codeJs:t}=ft();return{codeHtml:e,codeJs:t,model:d({name:`A`,age:200,email:`anna-example.com`,tags:[`vue`,`vue`],contacts:[{type:`phone`},{type:`fax`}]}),rules:{"/name":{type:`string`,minLength:2},"/age":{type:`integer`,min:0,max:150},"/email":{pattern:`^[^@]+@[^@]+$`,message:`_A_JSON_EDITOR_EXAMPLE_EMAIL_INVALID_`},"/tags":{uniqueItems:!0,level:`warning`},"/contacts/*/type":{enum:[`phone`,`email`]},"/country":{required:!0}}}}};function mt(e,t,n,r,i,o){let s=g(`a-json-editor`),l=g(`aloha-example`);return h(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_RULES_HEADER_`,description:`_A_JSON_EDITOR_RULES_DESCRIPTION_`},{default:m(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_PERSON_`,rules:e.rules,"expand-level":3},null,8,[`modelValue`,`rules`])]),_:1},8,[`code-html`,`code-js`])}var ht=E(pt,[[`render`,mt]]);function gt(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_PRODUCT_"
  :schema="schema"
  validate-on="blur"
/>`}}function _t(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      id: 1,
      price: -5,
      color: "pink",
    });
    // a subset of JSON Schema; "add" takes the next key of "properties"
    const schema = {
      type: "object",
      required: ["id", "name", "price"],
      additionalProperties: false,
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 3 },
        price: { type: "number", minimum: 0 },
        color: { enum: ["red", "green", "blue"] },
        tags: { type: "array", items: { type: "string" }, maxItems: 5 },
      },
    };

    return {
      model,
      schema,
    };
  },
};`}}var vt={name:`PageJsonEditorSchema`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=gt(),{codeJs:t}=_t();return{codeHtml:e,codeJs:t,model:d({id:1,price:-5,color:`pink`}),schema:{type:`object`,required:[`id`,`name`,`price`],additionalProperties:!1,properties:{id:{type:`integer`},name:{type:`string`,minLength:3},price:{type:`number`,minimum:0},color:{enum:[`red`,`green`,`blue`]},tags:{type:`array`,items:{type:`string`},maxItems:5}}}}}};function yt(e,t,n,r,i,o){let s=g(`a-json-editor`),l=g(`aloha-example`);return h(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_SCHEMA_HEADER_`,description:`_A_JSON_EDITOR_SCHEMA_DESCRIPTION_`},{default:m(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_PRODUCT_`,schema:e.schema,"validate-on":`blur`},null,8,[`modelValue`,`schema`])]),_:1},8,[`code-html`,`code-js`])}var bt=E(vt,[[`render`,yt]]);function xt(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_USERS_"
  search-in="values"
  search-filter
/>`}}function St(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const CITIES = ["Bonn", "Berlin", "Köln", "Hamburg", "München"];
    const model = ref({
      users: Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        name: \`User \${ index + 1 }\`,
        address: { city: CITIES[index % CITIES.length], zip: \`\${ 10000 + index * 731 }\` },
        active: index % 3 !== 0,
      })),
    });

    return {
      model,
    };
  },
};`}}var Ct={name:`PageJsonEditorSearch`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=xt(),{codeJs:t}=St(),n=[`Bonn`,`Berlin`,`Köln`,`Hamburg`,`München`];return{codeHtml:e,codeJs:t,model:d({users:Array.from({length:12},(e,t)=>({id:t+1,name:`User ${t+1}`,address:{city:n[t%n.length],zip:`${1e4+t*731}`},active:t%3!=0}))})}}};function wt(e,t,n,r,i,o){let s=g(`a-json-editor`),l=g(`aloha-example`);return h(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_SEARCH_HEADER_`,description:`_A_JSON_EDITOR_SEARCH_DESCRIPTION_`},{default:m(()=>[a(s,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_USERS_`,"search-in":`values`,"search-filter":``},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var Tt=E(Ct,[[`render`,wt]]);function Et(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_SETTINGS_"
  :expand-level="2"
  @selection-change="onSelectionChange"
/>
<p>{{ paths.join(", ") }}</p>`}}function Dt(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      title: "Newsletter",
      active: true,
      sendAt: "09:00",
      recipients: ["anna@example.com", "ben@example.com", "carl@example.com", "dora@example.com"],
      layout: {
        columns: 2,
        theme: "light",
      },
    });
    const paths = ref([]);
    const onSelectionChange = ({ paths: selected }) => {
      paths.value = selected;
    };

    return {
      model,
      onSelectionChange,
      paths,
    };
  },
};`}}var Ot={name:`PageJsonEditorSelection`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=Et(),{codeJs:t}=Dt(),n=d({title:`Newsletter`,active:!0,sendAt:`09:00`,recipients:[`anna@example.com`,`ben@example.com`,`carl@example.com`,`dora@example.com`],layout:{columns:2,theme:`light`}}),r=d([]);return{codeHtml:e,codeJs:t,model:n,onSelectionChange:({paths:e})=>{r.value=e},paths:r}}},kt={class:`a_mt_3`};function At(e,t,n,r,o,s){let l=g(`a-json-editor`),u=g(`aloha-example`);return h(),c(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_SELECTION_HEADER_`,description:`_A_JSON_EDITOR_SELECTION_DESCRIPTION_`},{default:m(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_SETTINGS_`,"expand-level":2,onSelectionChange:e.onSelectionChange},null,8,[`modelValue`,`onSelectionChange`]),i(`p`,kt,_(e.paths.join(`, `)),1)]),_:1},8,[`code-html`,`code-js`])}var jt=E(Ot,[[`render`,At]]);function Mt(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_FEATURES_"
>
  <template v-slot:value-boolean="{ value }">
    <a-translation
      class="a_badge"
      :class="value ? 'a_badge_success' : 'a_badge_secondary'"
      tag="span"
      :text="value ? '_A_JSON_EDITOR_EXAMPLE_ON_' : '_A_JSON_EDITOR_EXAMPLE_OFF_'"
    />
  </template>
  <template v-slot:status="{ document }">
    <a-translation
      tag="span"
      text="_A_JSON_EDITOR_EXAMPLE_ACTIVE_COUNT_"
      :extra="{ count: Object.values(document || {}).filter(Boolean).length }"
    />
  </template>
</a-json-editor>`}}function Nt(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
    ATranslation,
  },
  setup() {
    const model = ref({
      darkMode: true,
      betaFeatures: false,
      notifications: true,
      analytics: false,
    });

    return {
      model,
    };
  },
};`}}var $={name:`PageJsonEditorSlots`,components:{AJsonEditor:w,ATranslation:S,AlohaExample:y},setup(){let{codeHtml:e}=Mt(),{codeJs:t}=Nt();return{codeHtml:e,codeJs:t,model:d({darkMode:!0,betaFeatures:!1,notifications:!0,analytics:!1})}}};function Pt(e,t,n,r,i,o){let l=g(`a-translation`),u=g(`a-json-editor`),d=g(`aloha-example`);return h(),c(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_SLOTS_HEADER_`,description:`_A_JSON_EDITOR_SLOTS_DESCRIPTION_`},{default:m(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_FEATURES_`},{"value-boolean":m(({value:e})=>[a(l,{class:s([`a_badge`,e?`a_badge_success`:`a_badge_secondary`]),tag:`span`,text:e?`_A_JSON_EDITOR_EXAMPLE_ON_`:`_A_JSON_EDITOR_EXAMPLE_OFF_`},null,8,[`class`,`text`])]),status:m(({document:e})=>[a(l,{tag:`span`,text:`_A_JSON_EDITOR_EXAMPLE_ACTIVE_COUNT_`,extra:{count:Object.values(e||{}).filter(Boolean).length}},null,8,[`extra`])]),_:1},8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var Ft=E($,[[`render`,Pt]]);function It(){return{codeHtml:`<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_TEMPLATE_"
  :variables="variables"
  :variable-values="variableValues"
  :rules="rules"
/>
<pre>{{ model }}</pre>`}}function Lt(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      subject: "Hello {{ user.firstName }}",
      body: "Your order {{ order.id }} costs {{ order.total }} €.",
      total: "{{ order.total }}",
      urgent: "{{ order.total }}",
      footer: "{{ company.nmae }}",
    });
    // the list of the variables: also a function ({ query }) => Promise
    const variables = [
      { name: "user.firstName", label: "_A_JSON_EDITOR_EXAMPLE_VAR_FIRST_NAME_", type: "string", example: "Anna", group: "User" },
      { name: "order.id", type: "string", example: "A-1042", group: "Order" },
      { name: "order.total", type: "number", example: 49.9, group: "Order" },
      { name: "company.name", type: "string", example: "Aloha GmbH", group: "Company" },
    ];
    // for "show with the values of the variables"
    const variableValues = {
      user: { firstName: "Anna" },
      order: { id: "A-1042", total: 49.9 },
      company: { name: "Aloha GmbH" },
    };
    // a number variable in a field of a boolean is a warning
    const rules = {
      "/urgent": { type: "boolean" },
    };

    return {
      model,
      rules,
      variables,
      variableValues,
    };
  },
};`}}var Rt={name:`PageJsonEditorVariables`,components:{AJsonEditor:w,AlohaExample:y},setup(){let{codeHtml:e}=It(),{codeJs:t}=Lt();return{codeHtml:e,codeJs:t,model:d({subject:`Hello {{ user.firstName }}`,body:`Your order {{ order.id }} costs {{ order.total }} €.`,total:`{{ order.total }}`,urgent:`{{ order.total }}`,footer:`{{ company.nmae }}`}),rules:{"/urgent":{type:`boolean`}},variables:[{name:`user.firstName`,label:`_A_JSON_EDITOR_EXAMPLE_VAR_FIRST_NAME_`,type:`string`,example:`Anna`,group:`User`},{name:`order.id`,type:`string`,example:`A-1042`,group:`Order`},{name:`order.total`,type:`number`,example:49.9,group:`Order`},{name:`company.name`,type:`string`,example:`Aloha GmbH`,group:`Company`}],variableValues:{user:{firstName:`Anna`},order:{id:`A-1042`,total:49.9},company:{name:`Aloha GmbH`}}}}},zt={class:`a_mt_3`};function Bt(e,t,n,r,o,s){let l=g(`a-json-editor`),u=g(`aloha-example`);return h(),c(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_JSON_EDITOR_VARIABLES_HEADER_`,description:`_A_JSON_EDITOR_VARIABLES_DESCRIPTION_`},{default:m(()=>[a(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_JSON_EDITOR_EXAMPLE_TEMPLATE_`,variables:e.variables,"variable-values":e.variableValues,rules:e.rules},null,8,[`modelValue`,`variables`,`variable-values`,`rules`]),i(`pre`,zt,_(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var Vt=E(Rt,[[`render`,Bt]]);function Ht(){let e=l(()=>x({placeholder:`_A_JSON_EDITOR_COMPONENT_NAME_`}));return{pageTitle:l(()=>`AJsonEditor${e.value?` (${e.value})`:``}`)}}var Ut=[[`allow-replace`,`_A_JSON_EDITOR_PROPS_ALLOW_REPLACE_DESCRIPTION_`,`Boolean`,!0],[`big-numbers`,`_A_JSON_EDITOR_PROPS_BIG_NUMBERS_DESCRIPTION_`,`String`,`"warn"`],[`allow-fullscreen`,`_A_JSON_EDITOR_PROPS_ALLOW_FULLSCREEN_DESCRIPTION_`,`Boolean`,!0],[`multiline-max-rows`,`_A_JSON_EDITOR_PROPS_MULTILINE_MAX_ROWS_DESCRIPTION_`,`Number`,8],[`multiline-strings`,`_A_JSON_EDITOR_PROPS_MULTILINE_STRINGS_DESCRIPTION_`,`Boolean`,!0],[`selectable`,`_A_JSON_EDITOR_PROPS_SELECTABLE_DESCRIPTION_`,`Boolean`,!0],[`always-translate`,`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,`Boolean`,void 0],[`change`,`_A_UI_PROPS_CHANGE_DESCRIPTION_`,`Function`,`() => {}`],[`dependencies`,`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,`Array / Object`,void 0],[`disabled`,`_A_UI_PROPS_DISABLED_DESCRIPTION_`,`Boolean`,void 0],[`errors`,`_A_UI_PROPS_ERRORS_DESCRIPTION_`,`String / Array`,void 0],[`errors-class`,`_A_UI_PROPS_ERRORS_CLASS_DESCRIPTION_`,`String / Object`,void 0],[`exclude-render-attributes`,`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,`Array`,`[]`],[`extra`,`_A_TRANSLATION_PROPS_EXTRA_DESCRIPTION_`,`Object`,void 0],[`help-text`,`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,`String`,void 0],[`html-id`,`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,`String`,void 0],[`id`,`_A_UI_PROPS_ID_DESCRIPTION_`,`String / Number`,`uniqueId(\\"a_json_editor_\\")`],[`id-prefix`,`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,`String`,void 0],[`is-hide`,`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,`Boolean`,void 0],[`is-render`,`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,`Boolean`,`true`],[`label`,`_A_UI_PROPS_LABEL_DESCRIPTION_`,`String / Number`,void 0],[`label-class`,`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,`String / Object`,void 0],[`label-description`,`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,`String`,void 0],[`label-screen-reader`,`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,`String / Number`,void 0],[`model-dependencies`,`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,`Object`,`{}`],[`model-undefined`,`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,`Any`,`null`],[`required`,`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,`Boolean`,`false`],[`after-change`,`_A_JSON_EDITOR_PROPS_AFTER_CHANGE_DESCRIPTION_`,`Function`,void 0],[`allow-add`,`_A_JSON_EDITOR_PROPS_ALLOW_ADD_DESCRIPTION_`,`Boolean`,`true`],[`allow-move`,`_A_JSON_EDITOR_PROPS_ALLOW_MOVE_DESCRIPTION_`,`Boolean`,`true`],[`allow-remove`,`_A_JSON_EDITOR_PROPS_ALLOW_REMOVE_DESCRIPTION_`,`Boolean`,`true`],[`allow-rename`,`_A_JSON_EDITOR_PROPS_ALLOW_RENAME_DESCRIPTION_`,`Boolean`,`true`],[`allow-type-change`,`_A_JSON_EDITOR_PROPS_ALLOW_TYPE_CHANGE_DESCRIPTION_`,`Boolean`,`true`],[`allow-unknown-variables`,`_A_JSON_EDITOR_PROPS_ALLOW_UNKNOWN_VARIABLES_DESCRIPTION_`,`Boolean`,`false`],[`allowed-types`,`_A_JSON_EDITOR_PROPS_ALLOWED_TYPES_DESCRIPTION_`,`Array`,void 0],[`array-page-size`,`_A_JSON_EDITOR_PROPS_ARRAY_PAGE_SIZE_DESCRIPTION_`,`Number`,`100`],[`before-add`,`_A_JSON_EDITOR_PROPS_BEFORE_ADD_DESCRIPTION_`,`Function`,void 0],[`before-change`,`_A_JSON_EDITOR_PROPS_BEFORE_CHANGE_DESCRIPTION_`,`Function`,void 0],[`before-move`,`_A_JSON_EDITOR_PROPS_BEFORE_MOVE_DESCRIPTION_`,`Function`,void 0],[`before-remove`,`_A_JSON_EDITOR_PROPS_BEFORE_REMOVE_DESCRIPTION_`,`Function`,void 0],[`before-rename`,`_A_JSON_EDITOR_PROPS_BEFORE_RENAME_DESCRIPTION_`,`Function`,void 0],[`before-set`,`_A_JSON_EDITOR_PROPS_BEFORE_SET_DESCRIPTION_`,`Function`,void 0],[`before-type-change`,`_A_JSON_EDITOR_PROPS_BEFORE_TYPE_CHANGE_DESCRIPTION_`,`Function`,void 0],[`block-invalid-save`,`_A_JSON_EDITOR_PROPS_BLOCK_INVALID_SAVE_DESCRIPTION_`,`Boolean`,`true`],[`confirm-remove`,`_A_JSON_EDITOR_PROPS_CONFIRM_REMOVE_DESCRIPTION_`,`Boolean / String`,`false`],[`density`,`_A_JSON_EDITOR_PROPS_DENSITY_DESCRIPTION_`,`String`,`"normal"`],[`display-formatters`,`_A_JSON_EDITOR_PROPS_DISPLAY_FORMATTERS_DESCRIPTION_`,`Object`,`{}`],[`empty-containers`,`_A_JSON_EDITOR_PROPS_EMPTY_CONTAINERS_DESCRIPTION_`,`String`,void 0],[`error-summary-position`,`_A_JSON_EDITOR_PROPS_ERROR_SUMMARY_POSITION_DESCRIPTION_`,`String`,`"top"`],[`escape-slashes`,`_A_JSON_EDITOR_PROPS_ESCAPE_SLASHES_DESCRIPTION_`,`Boolean`,void 0],[`escape-unicode`,`_A_JSON_EDITOR_PROPS_ESCAPE_UNICODE_DESCRIPTION_`,`Boolean`,void 0],[`expand-level`,`_A_JSON_EDITOR_PROPS_EXPAND_LEVEL_DESCRIPTION_`,`Number`,`1`],[`expanded-paths`,`_A_JSON_EDITOR_PROPS_EXPANDED_PATHS_DESCRIPTION_`,`Array`,`[]`],[`format-on`,`_A_JSON_EDITOR_PROPS_FORMAT_ON_DESCRIPTION_`,`String`,`"none"`],[`format-options`,`_A_JSON_EDITOR_PROPS_FORMAT_OPTIONS_DESCRIPTION_`,`Object`,`{}`],[`get-node-actions`,`_A_JSON_EDITOR_PROPS_GET_NODE_ACTIONS_DESCRIPTION_`,`Function`,void 0],[`get-value-type`,`_A_JSON_EDITOR_PROPS_GET_VALUE_TYPE_DESCRIPTION_`,`Function`,void 0],[`height`,`_A_JSON_EDITOR_PROPS_HEIGHT_DESCRIPTION_`,`String`,void 0],[`hidden-paths`,`_A_JSON_EDITOR_PROPS_HIDDEN_PATHS_DESCRIPTION_`,`Array`,`[]`],[`indent`,`_A_JSON_EDITOR_PROPS_INDENT_DESCRIPTION_`,`Number / String`,void 0],[`inline-arrays`,`_A_JSON_EDITOR_PROPS_INLINE_ARRAYS_DESCRIPTION_`,`Boolean / Number`,void 0],[`inline-objects`,`_A_JSON_EDITOR_PROPS_INLINE_OBJECTS_DESCRIPTION_`,`Boolean / Number`,void 0],[`keyboard-hint`,`_A_JSON_EDITOR_PROPS_KEYBOARD_HINT_DESCRIPTION_`,`String`,`"_A_JSON_EDITOR_KEYBOARD_HINT_"`],[`line-ending`,`_A_JSON_EDITOR_PROPS_LINE_ENDING_DESCRIPTION_`,`String`,void 0],[`load-children`,`_A_JSON_EDITOR_PROPS_LOAD_CHILDREN_DESCRIPTION_`,`Function`,void 0],[`locked-keys`,`_A_JSON_EDITOR_PROPS_LOCKED_KEYS_DESCRIPTION_`,`Array`,`[]`],[`max-depth`,`_A_JSON_EDITOR_PROPS_MAX_DEPTH_DESCRIPTION_`,`Number`,void 0],[`max-errors`,`_A_JSON_EDITOR_PROPS_MAX_ERRORS_DESCRIPTION_`,`Number`,void 0],[`max-height`,`_A_JSON_EDITOR_PROPS_MAX_HEIGHT_DESCRIPTION_`,`String`,`"32rem"`],[`max-line-length`,`_A_JSON_EDITOR_PROPS_MAX_LINE_LENGTH_DESCRIPTION_`,`Number`,void 0],[`minify`,`_A_JSON_EDITOR_PROPS_MINIFY_DESCRIPTION_`,`Boolean`,void 0],[`mode`,`_A_JSON_EDITOR_PROPS_MODE_DESCRIPTION_`,`String`,`"tree"`],[`model-type`,`_A_JSON_EDITOR_PROPS_MODEL_TYPE_DESCRIPTION_`,`String`,`"object"`],[`model-value`,`_A_JSON_EDITOR_PROPS_MODEL_VALUE_DESCRIPTION_`,`Any`,void 0],[`modes`,`_A_JSON_EDITOR_PROPS_MODES_DESCRIPTION_`,`Array`,`["tree", "code", "split"]`],[`number-format`,`_A_JSON_EDITOR_PROPS_NUMBER_FORMAT_DESCRIPTION_`,`Function`,void 0],[`on-select`,`_A_JSON_EDITOR_PROPS_ON_SELECT_DESCRIPTION_`,`Function`,void 0],[`parse`,`_A_JSON_EDITOR_PROPS_PARSE_DESCRIPTION_`,`Function`,void 0],[`path-format`,`_A_JSON_EDITOR_PROPS_PATH_FORMAT_DESCRIPTION_`,`String`,`"dot"`],[`plugins`,`_A_JSON_EDITOR_PROPS_PLUGINS_DESCRIPTION_`,`Array`,`[]`],[`readonly`,`_A_JSON_EDITOR_PROPS_READONLY_DESCRIPTION_`,`Boolean`,`false`],[`readonly-paths`,`_A_JSON_EDITOR_PROPS_READONLY_PATHS_DESCRIPTION_`,`Array`,`[]`],[`reset-value`,`_A_JSON_EDITOR_PROPS_RESET_VALUE_DESCRIPTION_`,`Any`,void 0],[`root-name`,`_A_JSON_EDITOR_PROPS_ROOT_NAME_DESCRIPTION_`,`String`,`"_A_JSON_EDITOR_ROOT_"`],[`row-height`,`_A_JSON_EDITOR_PROPS_ROW_HEIGHT_DESCRIPTION_`,`Number`,`32`],[`rules`,`_A_JSON_EDITOR_PROPS_RULES_DESCRIPTION_`,`Object`,void 0],[`schema`,`_A_JSON_EDITOR_PROPS_SCHEMA_DESCRIPTION_`,`Object`,void 0],[`search-case-sensitive`,`_A_JSON_EDITOR_PROPS_SEARCH_CASE_SENSITIVE_DESCRIPTION_`,`Boolean`,`false`],[`search-debounce`,`_A_JSON_EDITOR_PROPS_SEARCH_DEBOUNCE_DESCRIPTION_`,`Number`,`200`],[`search-filter`,`_A_JSON_EDITOR_PROPS_SEARCH_FILTER_DESCRIPTION_`,`Boolean`,`false`],[`search-in`,`_A_JSON_EDITOR_PROPS_SEARCH_IN_DESCRIPTION_`,`String`,`"both"`],[`search-regex`,`_A_JSON_EDITOR_PROPS_SEARCH_REGEX_DESCRIPTION_`,`Boolean`,`false`],[`searchable`,`_A_JSON_EDITOR_PROPS_SEARCHABLE_DESCRIPTION_`,`Boolean`,`true`],[`show-counts`,`_A_JSON_EDITOR_PROPS_SHOW_COUNTS_DESCRIPTION_`,`Boolean`,`true`],[`show-error-summary`,`_A_JSON_EDITOR_PROPS_SHOW_ERROR_SUMMARY_DESCRIPTION_`,`Boolean`,`true`],[`show-guides`,`_A_JSON_EDITOR_PROPS_SHOW_GUIDES_DESCRIPTION_`,`Boolean`,`true`],[`show-history`,`_A_JSON_EDITOR_PROPS_SHOW_HISTORY_DESCRIPTION_`,`Boolean`,`true`],[`show-indexes`,`_A_JSON_EDITOR_PROPS_SHOW_INDEXES_DESCRIPTION_`,`Boolean`,`true`],[`show-resolved`,`_A_JSON_EDITOR_PROPS_SHOW_RESOLVED_DESCRIPTION_`,`Boolean`,`false`],[`show-status-bar`,`_A_JSON_EDITOR_PROPS_SHOW_STATUS_BAR_DESCRIPTION_`,`Boolean`,`true`],[`show-toolbar`,`_A_JSON_EDITOR_PROPS_SHOW_TOOLBAR_DESCRIPTION_`,`Boolean`,`true`],[`show-types`,`_A_JSON_EDITOR_PROPS_SHOW_TYPES_DESCRIPTION_`,`Boolean`,`true`],[`sort-keys`,`_A_JSON_EDITOR_PROPS_SORT_KEYS_DESCRIPTION_`,`Boolean / String / Function`,void 0],[`space-after-colon`,`_A_JSON_EDITOR_PROPS_SPACE_AFTER_COLON_DESCRIPTION_`,`Boolean`,void 0],[`string-max-length`,`_A_JSON_EDITOR_PROPS_STRING_MAX_LENGTH_DESCRIPTION_`,`Number`,`120`],[`stringify`,`_A_JSON_EDITOR_PROPS_STRINGIFY_DESCRIPTION_`,`Function`,void 0],[`trailing-newline`,`_A_JSON_EDITOR_PROPS_TRAILING_NEWLINE_DESCRIPTION_`,`Boolean`,void 0],[`type`,`_A_JSON_EDITOR_PROPS_TYPE_DESCRIPTION_`,`String`,`"jsonEditor"`],[`undo-limit`,`_A_JSON_EDITOR_PROPS_UNDO_LIMIT_DESCRIPTION_`,`Number`,`100`],[`validate-document`,`_A_JSON_EDITOR_PROPS_VALIDATE_DOCUMENT_DESCRIPTION_`,`Function`,void 0],[`validate-node`,`_A_JSON_EDITOR_PROPS_VALIDATE_NODE_DESCRIPTION_`,`Function`,void 0],[`validate-on`,`_A_JSON_EDITOR_PROPS_VALIDATE_ON_DESCRIPTION_`,`String`,`"change"`],[`variable-pattern`,`_A_JSON_EDITOR_PROPS_VARIABLE_PATTERN_DESCRIPTION_`,`Object`,void 0],[`variable-values`,`_A_JSON_EDITOR_PROPS_VARIABLE_VALUES_DESCRIPTION_`,`Object`,void 0],[`variables`,`_A_JSON_EDITOR_PROPS_VARIABLES_DESCRIPTION_`,`Array / Function`,void 0],[`virtual-threshold`,`_A_JSON_EDITOR_PROPS_VIRTUAL_THRESHOLD_DESCRIPTION_`,`Number`,`300`]];function Wt(){return{dataEvents:[{name:`collapse`,type:`Function`,description:`_A_JSON_EDITOR_EVENTS_COLLAPSE_DESCRIPTION_`},{name:`expand`,type:`Function`,description:`_A_JSON_EDITOR_EVENTS_EXPAND_DESCRIPTION_`},{name:`fullscreen`,type:`Function`,description:`_A_JSON_EDITOR_EVENTS_FULLSCREEN_DESCRIPTION_`},{name:`mode-change`,type:`Function`,description:`_A_JSON_EDITOR_EVENTS_MODE_CHANGE_DESCRIPTION_`},{name:`search`,type:`Function`,description:`_A_JSON_EDITOR_EVENTS_SEARCH_DESCRIPTION_`},{name:`select`,type:`Function`,description:`_A_JSON_EDITOR_EVENTS_SELECT_DESCRIPTION_`},{name:`selection-change`,type:`Function`,description:`_A_JSON_EDITOR_EVENTS_SELECTION_CHANGE_DESCRIPTION_`},{name:`update:modelValue`,type:`Function`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`},{name:`validate`,type:`Function`,description:`_A_JSON_EDITOR_EVENTS_VALIDATE_DESCRIPTION_`}],dataMethods:[{name:`collapseAll`,description:`_A_JSON_EDITOR_METHODS_COLLAPSE_ALL_DESCRIPTION_`},{name:`expandAll`,description:`_A_JSON_EDITOR_METHODS_EXPAND_ALL_DESCRIPTION_`},{name:`expandPath`,description:`_A_JSON_EDITOR_METHODS_EXPAND_PATH_DESCRIPTION_`},{name:`expandToLevel`,description:`_A_JSON_EDITOR_METHODS_EXPAND_TO_LEVEL_DESCRIPTION_`},{name:`focusPath`,description:`_A_JSON_EDITOR_METHODS_FOCUS_PATH_DESCRIPTION_`},{name:`get`,description:`_A_JSON_EDITOR_METHODS_GET_DESCRIPTION_`},{name:`getText`,description:`_A_JSON_EDITOR_METHODS_GET_TEXT_DESCRIPTION_`},{name:`minify`,description:`_A_JSON_EDITOR_METHODS_MINIFY_DESCRIPTION_`},{name:`redo`,description:`_A_JSON_EDITOR_METHODS_REDO_DESCRIPTION_`},{name:`remove`,description:`_A_JSON_EDITOR_METHODS_REMOVE_DESCRIPTION_`},{name:`replace`,description:`_A_JSON_EDITOR_METHODS_REPLACE_DESCRIPTION_`},{name:`reset`,description:`_A_JSON_EDITOR_METHODS_RESET_DESCRIPTION_`},{name:`search`,description:`_A_JSON_EDITOR_METHODS_SEARCH_DESCRIPTION_`},{name:`set`,description:`_A_JSON_EDITOR_METHODS_SET_DESCRIPTION_`},{name:`setMode`,description:`_A_JSON_EDITOR_METHODS_SET_MODE_DESCRIPTION_`},{name:`undo`,description:`_A_JSON_EDITOR_METHODS_UNDO_DESCRIPTION_`},{name:`validate`,description:`_A_JSON_EDITOR_METHODS_VALIDATE_DESCRIPTION_`}],dataProps:Ut.map(([e,t,n,r])=>({name:e,description:t,type:n,default:r,required:!1})).sort((e,t)=>e.name.localeCompare(t.name)),dataSlots:[{name:`empty`,description:`_A_JSON_EDITOR_SLOTS_EMPTY_DESCRIPTION_`},{name:`status`,description:`_A_JSON_EDITOR_SLOTS_STATUS_DESCRIPTION_`},{name:`toolbar-append`,description:`_A_JSON_EDITOR_SLOTS_TOOLBAR_APPEND_DESCRIPTION_`},{name:`toolbar-prepend`,description:`_A_JSON_EDITOR_SLOTS_TOOLBAR_PREPEND_DESCRIPTION_`},{name:`value`,description:`_A_JSON_EDITOR_SLOTS_VALUE_DESCRIPTION_`},{name:`value-{type}`,description:`_A_JSON_EDITOR_SLOTS_VALUE_TYPE_DESCRIPTION_`}],dataTranslate:`_A_JSON_EDITOR_ACTIONS_._A_JSON_EDITOR_ACTION_ADD_AFTER_._A_JSON_EDITOR_ACTION_ADD_BEFORE_._A_JSON_EDITOR_ACTION_ADD_INSIDE_._A_JSON_EDITOR_ACTION_COPY_KEY_._A_JSON_EDITOR_ACTION_COPY_NODE_._A_JSON_EDITOR_ACTION_COPY_PATH_._A_JSON_EDITOR_ACTION_CUT_._A_JSON_EDITOR_ACTION_DUPLICATE_._A_JSON_EDITOR_ACTION_EDIT_VALUE_._A_JSON_EDITOR_ACTION_INSERT_VARIABLE_._A_JSON_EDITOR_ACTION_MOVE_DOWN_._A_JSON_EDITOR_ACTION_MOVE_UP_._A_JSON_EDITOR_ACTION_OPEN_LINK_._A_JSON_EDITOR_ACTION_PASTE_._A_JSON_EDITOR_ACTION_REMOVE_._A_JSON_EDITOR_ACTION_RENAME_._A_JSON_EDITOR_ACTION_SORT_ASC_._A_JSON_EDITOR_ACTION_SORT_DESC_._A_JSON_EDITOR_ACTION_TYPE_._A_JSON_EDITOR_ANNOUNCE_COLLAPSED_ALL_._A_JSON_EDITOR_ANNOUNCE_COPIED_._A_JSON_EDITOR_ANNOUNCE_COPIED_KEY_._A_JSON_EDITOR_ANNOUNCE_COPIED_MANY_._A_JSON_EDITOR_ANNOUNCE_COPIED_PATH_._A_JSON_EDITOR_ANNOUNCE_EXPANDED_ALL_._A_JSON_EDITOR_ANNOUNCE_FORMATTED_._A_JSON_EDITOR_ANNOUNCE_FULLSCREEN_OFF_._A_JSON_EDITOR_ANNOUNCE_FULLSCREEN_ON_._A_JSON_EDITOR_ANNOUNCE_HISTORY_._A_JSON_EDITOR_ANNOUNCE_MINIFIED_._A_JSON_EDITOR_ANNOUNCE_REDO_._A_JSON_EDITOR_ANNOUNCE_REMOVED_._A_JSON_EDITOR_ANNOUNCE_REMOVED_MANY_._A_JSON_EDITOR_ANNOUNCE_REPAIRED_._A_JSON_EDITOR_ANNOUNCE_REPLACED_._A_JSON_EDITOR_ANNOUNCE_REPLACED_SKIPPED_._A_JSON_EDITOR_ANNOUNCE_RESET_._A_JSON_EDITOR_ANNOUNCE_SELECTED_._A_JSON_EDITOR_ANNOUNCE_SELECTION_CLEARED_._A_JSON_EDITOR_ANNOUNCE_UNDO_._A_JSON_EDITOR_ANNOUNCE_VARIABLE_INSERTED_._A_JSON_EDITOR_CLEAR_SELECTION_._A_JSON_EDITOR_COLLAPSE_ALL_._A_JSON_EDITOR_CONFIRM_REMOVE_BODY_._A_JSON_EDITOR_CONFIRM_REMOVE_HEADER_._A_JSON_EDITOR_CONFIRM_REMOVE_MANY_BODY_._A_JSON_EDITOR_COUNT_ITEMS_._A_JSON_EDITOR_COUNT_KEYS_._A_JSON_EDITOR_DONE_._A_JSON_EDITOR_EDIT_HINT_._A_JSON_EDITOR_EDIT_HINT_MULTILINE_._A_JSON_EDITOR_EDIT_KEY_._A_JSON_EDITOR_EDIT_TYPE_._A_JSON_EDITOR_EDIT_VALUE_._A_JSON_EDITOR_EMPTY_._A_JSON_EDITOR_EMPTY_STRING_._A_JSON_EDITOR_ENUM_NOT_ALLOWED_._A_JSON_EDITOR_ERRORS_COUNT_._A_JSON_EDITOR_ERRORS_INSIDE_._A_JSON_EDITOR_ERROR_ENUM_._A_JSON_EDITOR_ERROR_INTEGER_._A_JSON_EDITOR_ERROR_KEY_EMPTY_._A_JSON_EDITOR_ERROR_KEY_EXISTS_._A_JSON_EDITOR_ERROR_KEY_NOT_ALLOWED_._A_JSON_EDITOR_ERROR_MAX_._A_JSON_EDITOR_ERROR_MAX_ITEMS_._A_JSON_EDITOR_ERROR_MAX_LENGTH_._A_JSON_EDITOR_ERROR_MIN_._A_JSON_EDITOR_ERROR_MIN_ITEMS_._A_JSON_EDITOR_ERROR_MIN_LENGTH_._A_JSON_EDITOR_ERROR_NUMBER_._A_JSON_EDITOR_ERROR_NUMBER_PRECISION_._A_JSON_EDITOR_ERROR_PATTERN_._A_JSON_EDITOR_ERROR_REQUIRED_KEY_._A_JSON_EDITOR_ERROR_SYNTAX_._A_JSON_EDITOR_ERROR_TYPE_._A_JSON_EDITOR_ERROR_UNIQUE_._A_JSON_EDITOR_ERROR_UNKNOWN_VARIABLE_._A_JSON_EDITOR_ERROR_UNKNOWN_VARIABLE_SIMILAR_._A_JSON_EDITOR_EXPAND_ALL_._A_JSON_EDITOR_FORMAT_._A_JSON_EDITOR_FULLSCREEN_._A_JSON_EDITOR_GO_TO_ERROR_._A_JSON_EDITOR_GROUP_ADD_._A_JSON_EDITOR_GROUP_COPY_._A_JSON_EDITOR_GROUP_EDIT_._A_JSON_EDITOR_GROUP_HISTORY_._A_JSON_EDITOR_GROUP_MORE_._A_JSON_EDITOR_GROUP_MOVE_._A_JSON_EDITOR_GROUP_REMOVE_._A_JSON_EDITOR_GROUP_SEARCH_._A_JSON_EDITOR_GROUP_SELECTION_._A_JSON_EDITOR_GROUP_TEXT_._A_JSON_EDITOR_GROUP_VIEW_._A_JSON_EDITOR_HISTORY_._A_JSON_EDITOR_HISTORY_ACTION_._A_JSON_EDITOR_HISTORY_ADD_._A_JSON_EDITOR_HISTORY_CODE_._A_JSON_EDITOR_HISTORY_LOAD_._A_JSON_EDITOR_HISTORY_MOVE_._A_JSON_EDITOR_HISTORY_MOVE_MANY_._A_JSON_EDITOR_HISTORY_PASTE_._A_JSON_EDITOR_HISTORY_REMOVE_._A_JSON_EDITOR_HISTORY_REMOVE_MANY_._A_JSON_EDITOR_HISTORY_RENAME_._A_JSON_EDITOR_HISTORY_REPAIR_._A_JSON_EDITOR_HISTORY_REPLACE_._A_JSON_EDITOR_HISTORY_RESET_._A_JSON_EDITOR_HISTORY_SET_._A_JSON_EDITOR_HISTORY_SORT_._A_JSON_EDITOR_HISTORY_START_._A_JSON_EDITOR_HISTORY_TYPE_._A_JSON_EDITOR_KEYBOARD_HINT_._A_JSON_EDITOR_LEVEL_ERROR_._A_JSON_EDITOR_LEVEL_INFO_._A_JSON_EDITOR_LEVEL_WARNING_._A_JSON_EDITOR_LINES_._A_JSON_EDITOR_MINIFY_._A_JSON_EDITOR_MODE_CODE_._A_JSON_EDITOR_MODE_SPLIT_._A_JSON_EDITOR_MODE_TREE_._A_JSON_EDITOR_MORE_LINES_._A_JSON_EDITOR_NEW_KEY_._A_JSON_EDITOR_NEW_WINDOW_._A_JSON_EDITOR_NODES_._A_JSON_EDITOR_PATH_._A_JSON_EDITOR_READONLY_._A_JSON_EDITOR_REDO_._A_JSON_EDITOR_REMOVED_._A_JSON_EDITOR_REPAIR_._A_JSON_EDITOR_REPAIR_APPLY_._A_JSON_EDITOR_REPAIR_BRACKET_CLOSED_._A_JSON_EDITOR_REPAIR_BRACKET_FIXED_._A_JSON_EDITOR_REPAIR_BRACKET_REMOVED_._A_JSON_EDITOR_REPAIR_CANCEL_._A_JSON_EDITOR_REPAIR_CHAR_REMOVED_._A_JSON_EDITOR_REPAIR_COMMA_ADDED_._A_JSON_EDITOR_REPAIR_COMMA_REMOVED_._A_JSON_EDITOR_REPAIR_COMMENT_._A_JSON_EDITOR_REPAIR_CONSTANT_._A_JSON_EDITOR_REPAIR_FAILED_._A_JSON_EDITOR_REPAIR_KEY_QUOTES_._A_JSON_EDITOR_REPAIR_LINE_._A_JSON_EDITOR_REPAIR_NEWLINE_._A_JSON_EDITOR_REPAIR_NUMBER_._A_JSON_EDITOR_REPAIR_PREVIEW_._A_JSON_EDITOR_REPAIR_RESULT_._A_JSON_EDITOR_REPAIR_ROOT_ARRAY_._A_JSON_EDITOR_REPAIR_SINGLE_QUOTES_._A_JSON_EDITOR_REPAIR_STRING_CLOSED_._A_JSON_EDITOR_REPAIR_TEXT_QUOTES_._A_JSON_EDITOR_REPAIR_TYPOGRAPHIC_QUOTES_._A_JSON_EDITOR_REPAIR_VALUE_ADDED_._A_JSON_EDITOR_REPLACE_._A_JSON_EDITOR_REPLACE_ALL_._A_JSON_EDITOR_REPLACE_GROUP_._A_JSON_EDITOR_REPLACE_HINT_._A_JSON_EDITOR_REPLACE_HINT_REGEX_._A_JSON_EDITOR_REPLACE_TOGGLE_._A_JSON_EDITOR_REPLACE_WITH_._A_JSON_EDITOR_RESET_._A_JSON_EDITOR_ROOT_._A_JSON_EDITOR_SEARCH_._A_JSON_EDITOR_SEARCH_CASE_._A_JSON_EDITOR_SEARCH_COUNT_._A_JSON_EDITOR_SEARCH_FILTER_._A_JSON_EDITOR_SEARCH_KEYS_._A_JSON_EDITOR_SEARCH_NEXT_._A_JSON_EDITOR_SEARCH_NONE_._A_JSON_EDITOR_SEARCH_PLACEHOLDER_._A_JSON_EDITOR_SEARCH_PREV_._A_JSON_EDITOR_SEARCH_REGEX_._A_JSON_EDITOR_SEARCH_REGEX_INVALID_._A_JSON_EDITOR_SEARCH_VALUES_._A_JSON_EDITOR_SELECTED_._A_JSON_EDITOR_SHOW_ALL_._A_JSON_EDITOR_SHOW_LESS_._A_JSON_EDITOR_SHOW_MORE_._A_JSON_EDITOR_SHOW_RESOLVED_._A_JSON_EDITOR_TYPE_ARRAY_._A_JSON_EDITOR_TYPE_BOOLEAN_._A_JSON_EDITOR_TYPE_COLOR_._A_JSON_EDITOR_TYPE_DATETIME_._A_JSON_EDITOR_TYPE_DATE_._A_JSON_EDITOR_TYPE_IMAGE_._A_JSON_EDITOR_TYPE_NULL_._A_JSON_EDITOR_TYPE_NUMBER_._A_JSON_EDITOR_TYPE_OBJECT_._A_JSON_EDITOR_TYPE_STRING_._A_JSON_EDITOR_TYPE_URL_._A_JSON_EDITOR_TYPE_VARIABLE_._A_JSON_EDITOR_UNDO_._A_JSON_EDITOR_VARIABLES_._A_JSON_EDITOR_VARIABLES_NONE_._A_JSON_EDITOR_WARNING_NUMBER_PRECISION_._A_JSON_EDITOR_WARNING_VARIABLE_TYPE_`.split(`.`)}}var Gt={name:`PageJsonEditor`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:S,PageJsonEditorBasic:M,PageJsonEditorHistory:ge,PageJsonEditorSearch:Tt,PageJsonEditorRepair:$e,PageJsonEditorReplace:at,PageJsonEditorReadyPlugins:Je,PageJsonEditorBigNumbers:G,PageJsonEditorSelection:jt,PageJsonEditorMultiline:Ne,PageJsonEditorFullscreen:de,PageJsonEditorVariables:Vt,PageJsonEditorRules:ht,PageJsonEditorSchema:bt,PageJsonEditorFormat:ae,PageJsonEditorModelString:Oe,PageJsonEditorHooks:Se,PageJsonEditorPlugin:Re,PageJsonEditorRights:ut,PageJsonEditorReadonly:Ue,PageJsonEditorBig:L,PageJsonEditorForm:Z,PageJsonEditorSlots:Ft},setup(){let{pageTitle:e}=Ht(),{dataEvents:t,dataMethods:n,dataProps:r,dataSlots:i,dataTranslate:a}=Wt();return{dataEvents:t,dataMethods:n,dataProps:r,dataSlots:i,dataTranslate:a,pageTitle:e}}};function Kt(e,t,n,r,i,o){let s=g(`a-translation`),l=g(`page-json-editor-basic`),u=g(`page-json-editor-history`),d=g(`page-json-editor-search`),f=g(`page-json-editor-replace`),p=g(`page-json-editor-selection`),_=g(`page-json-editor-multiline`),v=g(`page-json-editor-fullscreen`),y=g(`page-json-editor-variables`),b=g(`page-json-editor-rules`),x=g(`page-json-editor-schema`),S=g(`page-json-editor-format`),C=g(`page-json-editor-repair`),w=g(`page-json-editor-model-string`),T=g(`page-json-editor-hooks`),E=g(`page-json-editor-plugin`),D=g(`page-json-editor-ready-plugins`),O=g(`page-json-editor-rights`),k=g(`page-json-editor-readonly`),A=g(`page-json-editor-big`),j=g(`page-json-editor-big-numbers`),M=g(`page-json-editor-form`),N=g(`page-json-editor-slots`),P=g(`aloha-table-props`),F=g(`aloha-table-translate`),I=g(`aloha-table-css-vars`),L=g(`aloha-page`);return h(),c(L,{"page-title":e.pageTitle},{body:m(()=>[a(s,{tag:`p`,html:`_A_JSON_EDITOR_COMPONENT_DESCRIPTION_`}),a(s,{class:`a_mb_4`,tag:`div`,html:`_A_JSON_EDITOR_ACCESSIBILITY_DESCRIPTION_`}),a(s,{class:`a_mb_4`,tag:`div`,html:`_A_JSON_EDITOR_KEYBOARD_DESCRIPTION_`}),a(l),a(u),a(d),a(f),a(p),a(_),a(v),a(y),a(b),a(x),a(S),a(C),a(w),a(T),a(E),a(D),a(O),a(k),a(A),a(j),a(M),a(N),a(P,{data:e.dataProps},null,8,[`data`]),a(P,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),a(P,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),a(P,{"table-label":`Methods`,data:e.dataMethods,columns:[`name`,`description`]},null,8,[`data`]),a(F,{data:e.dataTranslate},null,8,[`data`]),a(I,{files:`components/ui/AJsonEditor`})]),_:1},8,[`page-title`])}var qt=E(Gt,[[`render`,Kt]]);export{qt as default};