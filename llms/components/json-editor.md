# AJsonEditor (JSON editor)

**AJsonEditor** edits JSON as a tree and as text: keys and values in place, types, adding, removing, moving, search, history with undo, redo and reset, own variables, rules and JSON Schema, formatting by props, hooks and plugins.

Accessibility:

- The tree is a WAI-ARIA `treegrid` with a name (label), rows with `aria-level`, `aria-setsize`, `aria-posinset` and `aria-expanded`, one tab stop and the keys of the APG; no `role="application"`.
- Every row says key, value and type; errors are in `aria-describedby`, collapsed nodes say "3 errors inside". The summary of the errors has links to the nodes.
- Editing in the row: the field has a name ("Value of name"), Enter saves, Escape cancels, the focus goes back to the row. The variables are a combobox with a listbox.
- The actions of a row are a WAI-ARIA menu (Shift+F10); every action also has a key. Drag and drop has the keyboard alternative Alt+arrows and cut / paste.
- One live region says what happened: added, removed (with Ctrl+Z), undone, the number of the matches. Big documents keep the treegrid with `aria-rowcount` and `aria-rowindex`.
- The colors of the types have enough contrast and the type is also written as text.

Keys in the tree:

- ↑ ↓ rows, → open / first child, ← close / parent, Home End, Page Up Page Down, * open all siblings
- Enter / F2 edit the value, Shift+F2 rename, Alt+F2 type, Escape cancel
- Insert / Ctrl+Enter add, Delete remove, Ctrl+D duplicate, Alt+↑ Alt+↓ move, Ctrl+C Ctrl+X Ctrl+V
- Shift+F10 actions, Ctrl+Z undo, Ctrl+Y redo, Ctrl+F search, F3 next match, F8 next error; in a text field {{ or Ctrl+Space opens the variables

## Basic usage

Arrows move, Enter edits, the menu of a row has all actions. The model changes with every step.

```html
<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_SETTINGS_"
  help-text="_A_JSON_EDITOR_EXAMPLE_SETTINGS_HELP_"
/>
<pre>{{ model }}</pre>
```

```js
import {
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
};
```

## History: undo, redo, reset

Every change is a step: the buttons and Ctrl+Z / Ctrl+Y go back and forward, the list of the steps jumps to a step, "reset" goes back to `reset-value` and can be undone too.

```html
<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_SETTINGS_"
  :reset-value="resetValue"
  :undo-limit="50"
/>
```

```js
import {
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
};
```

## Search and expand

The search finds also inside collapsed nodes and opens them; Enter or F3 goes to the next match. The options: keys, values, case, regular expression and "only matches".

```html
<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_USERS_"
  search-in="values"
  search-filter
/>
```

```js
import {
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
        name: `User ${ index + 1 }`,
        address: { city: CITIES[index % CITIES.length], zip: `${ 10000 + index * 731 }` },
        active: index % 3 !== 0,
      })),
    });

    return {
      model,
    };
  },
};
```

## Own variables

`{{ name }}` in a text is a chip; "{{" or Ctrl+Space in the field opens the list of the variables. Unknown names are errors with a suggestion, a number variable in a field of a boolean is a warning. The eye shows the values (`variable-values`), `resolveVariables` replaces them in code.

```html
<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_TEMPLATE_"
  :variables="variables"
  :variable-values="variableValues"
  :rules="rules"
/>
<pre>{{ model }}</pre>
```

```js
import {
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
};
```

## Validation with rules

`rules` by path ("*" for any index): the rows show the errors, the summary has links to the nodes, F8 goes to the next error, collapsed nodes count the errors inside. `level: "warning"` does not block.

```html
<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_PERSON_"
  :rules="rules"
  :expand-level="3"
/>
```

```js
import {
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
};
```

## JSON Schema

A subset of JSON Schema without a library. `validate-on="blur"` shows the errors when the editor loses the focus. "Add" takes the next key of `properties` and the type of the schema. A full JSON Schema can be checked with a library in `validate-document`.

```html
<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_PRODUCT_"
  :schema="schema"
  validate-on="blur"
/>
```

```js
import {
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
};
```

## Formatting

Tree and text side by side (`mode="split"`). The text uses the props: `indent`, `sort-keys`, `inline-arrays`, `empty-containers`, `format-on="blur"` (also `escape-unicode`, `line-ending`, `trailing-newline`, `number-format`…). The buttons format and minify the text.

```html
<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_SETTINGS_"
  mode="split"
  :indent="4"
  sort-keys
  :inline-arrays="60"
  empty-containers="{ }"
  format-on="blur"
/>
```

```js
import {
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
};
```

## Model as JSON text

With `model-type="string"` the model is the formatted text (e.g. a field of a database); `parse` and `stringify` allow other formats.

```html
<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_CONFIG_"
  model-type="string"
  :format-options="{ indent: 2, trailingNewline: true }"
/>
<pre>{{ model }}</pre>
```

```js
import {
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
    const model = ref("{\"debug\":false,\"level\":\"info\",\"targets\":[\"console\",\"file\"]}");

    return {
      model,
    };
  },
};
```

## Hooks

`confirm-remove="containers"` asks before an object or an array is removed. `before-add` gives the value of a new recipient, `before-rename` writes keys in camelCase, `after-change` writes a log, `get-node-actions` adds actions to the menu of a text.

```html
<a-json-editor
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
</ol>
```

```js
import {
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
    const beforeRename = ({ newKey }) => newKey.replace(/[-_ ](\w)/g, (_, char) => char.toUpperCase());
    const afterChange = ({ operation, path }) => {
      log.value.push(`${ operation }: ${ path }`);
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
};
```

## Plugin: an own type

The plugin "color" finds colors, shows a swatch, edits them with a color field, warns about black, adds the action "invert" and a button of the toolbar. Global with `app.use(AJsonEditorPlugin, { plugins })`.

```html
<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_THEME_"
  :plugins="[colorPlugin]"
/>
```

```js
import {
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
          h("span", { "aria-hidden": "true", style: `display:inline-block;width:1rem;height:1rem;border-radius:.25rem;background:${ this.value }` }),
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
        run: ({ value }) => `#${ (0xffffff - parseInt(value.slice(1), 16)).toString(16).padStart(6, "0") }`,
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
};
```

## Rights: readonly paths, locked keys, depth

`readonly-paths` cannot be changed (the row says "read only"), `locked-keys` cannot be removed or renamed, `hidden-paths` are not shown, `allowed-types` limits the types (no null), `max-depth` the levels.

```html
<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_ACCOUNT_"
  :readonly-paths="['/id', '/created']"
  :locked-keys="['/email']"
  :hidden-paths="['/password']"
  :allowed-types="['string', 'number', 'boolean', 'object', 'array']"
  :max-depth="2"
/>
```

```js
import {
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
};
```

## Readonly view

`readonly` keeps search, expand, the menu with copy and the text mode; the treegrid has `aria-readonly="true"`.

```html
<a-json-editor
  :model-value="model"
  label="_A_JSON_EDITOR_EXAMPLE_RESPONSE_"
  readonly
  :expand-level="2"
  :modes="['tree', 'code']"
/>
```

```js
import {
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
};
```

## Big documents

3000 entries: from `virtual-threshold` only the visible rows are rendered, the treegrid keeps `aria-rowcount` and `aria-rowindex`, the keys work as before. `array-page-size` shows big arrays in pages.

```html
<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_LOG_"
  :expand-level="2"
  :array-page-size="1000"
  height="24rem"
  density="compact"
/>
```

```js
import {
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
        message: `Event ${ index + 1 }`,
      })),
    });

    return {
      model,
    };
  },
};
```

## In a form

In `AForm` the element has the type `jsonEditor`; all props can be set in the element.

```html
<a-form
  v-model="model"
  :data="dataForm"
/>
<pre>{{ model }}</pre>
```

```js
import {
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
};
```

## Slots

`value-boolean` shows the booleans as badges, `status` adds a text to the status bar.

```html
<a-json-editor
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
</a-json-editor>
```

```js
import {
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
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| after-change | Function |  |  | Hook after every change: ({ operation, path, value, document }). |
| allow-add | Boolean | true |  | Elements can be added. |
| allow-move | Boolean | true |  | Elements can be moved (Alt+arrows, drag and drop, cut and paste). |
| allow-remove | Boolean | true |  | Elements can be removed. |
| allow-rename | Boolean | true |  | Keys can be renamed. |
| allow-type-change | Boolean | true |  | The type of a value can be changed. |
| allow-unknown-variables | Boolean | false |  | Unknown variables are warnings, not errors. |
| allowed-types | Array |  |  | Types that can be chosen, e.g. ["string", "number"]. |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| array-page-size | Number | 100 |  | Big arrays show this many elements, then a row "show more". |
| before-add | Function |  |  | Hook before adding: false stops it, another value is the new value. |
| before-change | Function |  |  | Hook before every change (also async): false stops it, another value replaces it. |
| before-move | Function |  |  | Hook before moving: false stops it. |
| before-remove | Function |  |  | Hook before removing, e.g. an own confirmation: false (or a Promise with false) stops it. |
| before-rename | Function |  |  | Hook before renaming: false stops it, a string is the new key. |
| before-set | Function |  |  | Hook before a new value: false stops it, another value replaces it. |
| before-type-change | Function |  |  | Hook before a change of the type: false stops it, another value replaces the converted value. |
| block-invalid-save | Boolean | true |  | A text with a syntax error does not change the model. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| confirm-remove | Boolean / String | false |  | true or "containers": the removal is confirmed with AConfirm (needs AModalConfirm). Without it the removal can be undone. |
| density | String | "normal" |  | "normal" or "compact" (smaller rows). |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| display-formatters | Object | {} |  | Functions for the view of a type, e.g. { number: value => filterCurrency(value) }; the data stay. |
| empty-containers | String |  |  | Empty containers in the text: "{}" or "{ }". |
| error-summary-position | String | "top" |  | Place of the error summary: "top" or "bottom". |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| errors-class | String / Object |  |  | _A_UI_PROPS_ERRORS_CLASS_DESCRIPTION_ |
| escape-slashes | Boolean |  |  | Slashes as \/ in the text. |
| escape-unicode | Boolean |  |  | Characters outside ASCII as ä in the text. |
| exclude-render-attributes | Array | [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| expand-level | Number | 1 |  | The levels that are open at the start (1 = the root). |
| expanded-paths | Array | [] |  | Paths that are open at the start, e.g. ["/users/0"]. |
| extra | Object |  |  | Variables for translations. |
| format-on | String | "none" |  | "blur": the text is formatted when it loses the focus. |
| format-options | Object | {} |  | All options of the text in one object; a single prop wins. |
| get-node-actions | Function |  |  | Own actions of a row: ({ value, path, type }) => [{ id, label, when, run }]. |
| get-value-type | Function |  |  | Own type of a value: ({ value, path }) => name of a plugin type. |
| height | String |  |  | Fixed height of the tree and the text, e.g. "24rem". |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| hidden-paths | Array | [] |  | Paths that are not shown, e.g. ["/password"]. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | uniqueId(\"a_json_editor_\") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| indent | Number / String |  |  | Indent of the text: number of spaces or "tab". |
| inline-arrays | Boolean / Number |  |  | Short arrays of primitives in one line: true or the maximal length of the line. |
| inline-objects | Boolean / Number |  |  | Small objects of primitives in one line: true or the maximal length of the line. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| keyboard-hint | String | "_A_JSON_EDITOR_KEYBOARD_HINT_" |  | The hint of the keys for screen readers (in aria-describedby of the tree). |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| line-ending | String |  |  | End of the lines of the text: "lf" or "crlf". |
| load-children | Function |  |  | Hook that loads the content of a node before it is expanded (also async). |
| locked-keys | Array | [] |  | Paths that cannot be removed, renamed or moved, e.g. ["/id"]. |
| max-depth | Number |  |  | Maximal depth of the nodes (1 = only the keys of the root). |
| max-errors | Number |  |  | Maximal number of the shown errors. |
| max-height | String | "32rem" |  | Maximal height of the tree and the text (scroll). |
| max-line-length | Number |  |  | Line length for inline-arrays and inline-objects. |
| minify | Boolean |  |  | The text is always without indent (one line). |
| mode | String | "tree" |  | "tree", "code" (text) or "split" (both). |
| model-dependencies | Object | {} |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-type | String | "object" |  | "object": the model is a JS value; "string": the model is a JSON text. |
| model-undefined | Any | null |  | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| model-value | Any |  |  | The document: an object, an array, a primitive or (model-type="string") a JSON text. |
| modes | Array | ["tree", "code", "split"] |  | The modes of the switch in the toolbar. |
| number-format | Function |  |  | Function for numbers in the text, e.g. value => value.toFixed(2). |
| on-select | Function |  |  | Hook when a node gets active: ({ path, tokens, value }). |
| parse | Function |  |  | Own parse of the model with model-type="string", e.g. JSON5. |
| path-format | String | "dot" |  | Format of a copied path and of the messages: "dot" (users[0].name) or "pointer" (/users/0/name). |
| plugins | Array | [] |  | Plugins: own types, actions, buttons, hooks and translations (also global with AJsonEditorPlugin). |
| readonly | Boolean | false |  | Only to read: search, expand and copy, no changes. |
| readonly-paths | Array | [] |  | Paths that cannot be changed, also their content, e.g. ["/meta"]. |
| required | Boolean | false |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| reset-value | Any |  |  | The value of "reset"; by default the first value of the model. |
| root-name | String | "_A_JSON_EDITOR_ROOT_" |  | Name of the root row. |
| row-height | Number | 32 |  | Height of the virtual rows in px. |
| rules | Object |  |  | Rules by path ("*" for any index or key): type, required, min, max, minLength, maxLength, pattern, enum, minItems, maxItems, uniqueItems, keys, additionalKeys, level, message. |
| schema | Object |  |  | A subset of JSON Schema: type, enum, minimum, maximum, minLength, maxLength, pattern, properties, required, additionalProperties, items, minItems, maxItems, uniqueItems. |
| search-case-sensitive | Boolean | false |  | The search distinguishes upper and lower case at the start. |
| search-debounce | Number | 200 |  | Wait in ms before the search runs. |
| search-filter | Boolean | false |  | Show only the matches and their parents at the start. |
| search-in | String | "both" |  | Search in "keys", "values" or "both". |
| search-regex | Boolean | false |  | The search is a regular expression at the start. |
| searchable | Boolean | true |  | The search in the toolbar. |
| show-counts | Boolean | true |  | The number of the elements of objects and arrays. |
| show-error-summary | Boolean | true |  | The summary of the errors with links to the nodes. |
| show-guides | Boolean | true |  | The guide lines of the levels. |
| show-history | Boolean | true |  | The button with the list of the steps of the history. |
| show-indexes | Boolean | true |  | The indexes of the elements of arrays. |
| show-resolved | Boolean | false |  | Show the values of the variables (variable-values) at the start. |
| show-status-bar | Boolean | true |  | The status bar: path, number of nodes, errors, undo after a removal. |
| show-toolbar | Boolean | true |  | The toolbar. |
| show-types | Boolean | true |  | The column with the types. |
| sort-keys | Boolean / String / Function |  |  | Keys sorted in the text: true / "asc", "desc" or a function (a, b) => number. |
| space-after-colon | Boolean |  |  | A space after the colon in the text. |
| string-max-length | Number | 120 |  | Long strings are cut in the view (the full text is in the title). |
| stringify | Function |  |  | Own stringify of the model with model-type="string". |
| trailing-newline | Boolean |  |  | A line break at the end of the text. |
| type | String | "jsonEditor" |  | Type of the element in AForm: type: "jsonEditor". |
| undo-limit | Number | 100 |  | Maximal number of the steps of the history. |
| validate-document | Function |  |  | Hook for the whole document (also async, e.g. a full JSON Schema): errors as string, array or { path, level, message }. |
| validate-node | Function |  |  | Hook for every node: ({ value, path }) => error text, array or { level, message }. |
| validate-on | String | "change" |  | When the errors are shown: "change" (at once), "blur", "submit" or "none" (only with validate()). |
| variable-pattern | Object |  |  | The marks of a variable, default { open: "{{", close: "}}" }. |
| variable-values | Object |  |  | Values of the variables for "show with the values" and resolveVariables. |
| variables | Array / Function |  |  | The variables: [{ name, label, type, example, group }] or a function ({ query }) => array or Promise. |
| virtual-threshold | Number | 300 |  | From this number of rows only the visible rows are rendered (aria-rowcount, aria-rowindex). |

## Events

| name | type | description |
| --- | --- | --- |
| collapse | Function | A node was collapsed: { path }. |
| expand | Function | A node was expanded: { path }. |
| mode-change | Function | The mode was changed: { mode }. |
| search | Function | The search was changed: { query, count }. |
| select | Function | A node got active: { path, tokens, value }. |
| update:modelValue | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
| validate | Function | The errors were changed: { isValid, errors: [{ pointer, level, message, extra }] }. |

## Slots

| name | description |
| --- | --- |
| empty | Content when there is no document. |
| status | Own content in the status bar: { document, activePath }. |
| toolbar-append | Own content at the end of the toolbar. |
| toolbar-prepend | Own content at the start of the toolbar. |
| value | Own view of every value: { value, path, tokens, type }. |
| value-{type} | Own view of a type, e.g. value-boolean or value-color. |

## Methods

| name | description |
| --- | --- |
| collapseAll | Collapses all nodes (the root stays open). |
| expandAll | Expands all nodes. |
| expandPath | Expands the parents of a path. |
| expandToLevel | Expands the nodes up to a level. |
| focusPath | Shows a node and moves the focus to it. |
| get | The value of a path. |
| getText | The document as text with the format options. |
| minify | The document as compact text. |
| redo | Redoes the next step of the history. |
| remove | Removes the node of a path. |
| reset | Goes back to the start value (a step of the history). |
| search | Searches a text. |
| set | Sets the value of a path (a step of the history). |
| setMode | Changes the mode: "tree", "code" or "split". |
| undo | Undoes the last step of the history. |
| validate | Checks the document: Promise with { isValid, errors }. |

## Translations

| key | en |
| --- | --- |
| `_A_JSON_EDITOR_ACTIONS_` | Actions for {{ key }} |
| `_A_JSON_EDITOR_ACTION_ADD_AFTER_` | Add after |
| `_A_JSON_EDITOR_ACTION_ADD_BEFORE_` | Add before |
| `_A_JSON_EDITOR_ACTION_ADD_INSIDE_` | Add inside |
| `_A_JSON_EDITOR_ACTION_COPY_KEY_` | Copy key |
| `_A_JSON_EDITOR_ACTION_COPY_NODE_` | Copy |
| `_A_JSON_EDITOR_ACTION_COPY_PATH_` | Copy path |
| `_A_JSON_EDITOR_ACTION_CUT_` | Cut |
| `_A_JSON_EDITOR_ACTION_DUPLICATE_` | Duplicate |
| `_A_JSON_EDITOR_ACTION_EDIT_VALUE_` | Edit value |
| `_A_JSON_EDITOR_ACTION_INSERT_VARIABLE_` | Insert variable |
| `_A_JSON_EDITOR_ACTION_MOVE_DOWN_` | Move down |
| `_A_JSON_EDITOR_ACTION_MOVE_UP_` | Move up |
| `_A_JSON_EDITOR_ACTION_PASTE_` | Paste |
| `_A_JSON_EDITOR_ACTION_REMOVE_` | Remove |
| `_A_JSON_EDITOR_ACTION_RENAME_` | Rename key |
| `_A_JSON_EDITOR_ACTION_SORT_ASC_` | Sort keys A–Z |
| `_A_JSON_EDITOR_ACTION_SORT_DESC_` | Sort keys Z–A |
| `_A_JSON_EDITOR_ACTION_TYPE_` | Change type |
| `_A_JSON_EDITOR_ANNOUNCE_COLLAPSED_ALL_` | All nodes collapsed |
| `_A_JSON_EDITOR_ANNOUNCE_COPIED_` | Copied: {{ path }} |
| `_A_JSON_EDITOR_ANNOUNCE_COPIED_KEY_` | Key copied: {{ key }} |
| `_A_JSON_EDITOR_ANNOUNCE_COPIED_PATH_` | Path copied: {{ path }} |
| `_A_JSON_EDITOR_ANNOUNCE_EXPANDED_ALL_` | All nodes expanded |
| `_A_JSON_EDITOR_ANNOUNCE_FORMATTED_` | Text formatted |
| `_A_JSON_EDITOR_ANNOUNCE_HISTORY_` | Step: {{ step }} |
| `_A_JSON_EDITOR_ANNOUNCE_MINIFIED_` | Text minified |
| `_A_JSON_EDITOR_ANNOUNCE_REDO_` | Redone: {{ step }} |
| `_A_JSON_EDITOR_ANNOUNCE_REMOVED_` | Removed: {{ path }}. Ctrl+Z undoes it. |
| `_A_JSON_EDITOR_ANNOUNCE_RESET_` | Reset to the start. Ctrl+Z undoes it. |
| `_A_JSON_EDITOR_ANNOUNCE_UNDO_` | Undone: {{ step }} |
| `_A_JSON_EDITOR_ANNOUNCE_VARIABLE_INSERTED_` | Variable inserted: {{ name }} |
| `_A_JSON_EDITOR_COLLAPSE_ALL_` | Collapse all |
| `_A_JSON_EDITOR_CONFIRM_REMOVE_BODY_` | Remove {{ path }} with all its content? |
| `_A_JSON_EDITOR_CONFIRM_REMOVE_HEADER_` | Remove |
| `_A_JSON_EDITOR_COUNT_ITEMS_` | {{ count }} items |
| `_A_JSON_EDITOR_COUNT_KEYS_` | {{ count }} keys |
| `_A_JSON_EDITOR_DONE_` | Done |
| `_A_JSON_EDITOR_EDIT_HINT_` | Enter saves, Escape cancels. |
| `_A_JSON_EDITOR_EDIT_KEY_` | Key of {{ key }} |
| `_A_JSON_EDITOR_EDIT_TYPE_` | Type of {{ key }} |
| `_A_JSON_EDITOR_EDIT_VALUE_` | Value of {{ key }} |
| `_A_JSON_EDITOR_EMPTY_` | No data |
| `_A_JSON_EDITOR_EMPTY_STRING_` | empty text |
| `_A_JSON_EDITOR_ERRORS_COUNT_` | {{ errors }} errors, {{ warnings }} warnings |
| `_A_JSON_EDITOR_ERRORS_INSIDE_` | {{ count }} errors inside |
| `_A_JSON_EDITOR_ERROR_ENUM_` | Allowed values: {{ values }} |
| `_A_JSON_EDITOR_ERROR_INTEGER_` | Enter a whole number |
| `_A_JSON_EDITOR_ERROR_KEY_EMPTY_` | Enter a key |
| `_A_JSON_EDITOR_ERROR_KEY_EXISTS_` | The key {{ key }} already exists |
| `_A_JSON_EDITOR_ERROR_KEY_NOT_ALLOWED_` | The key {{ key }} is not allowed |
| `_A_JSON_EDITOR_ERROR_MAX_` | The value must not be greater than {{ max }} |
| `_A_JSON_EDITOR_ERROR_MAX_ITEMS_` | At most {{ max }} items |
| `_A_JSON_EDITOR_ERROR_MAX_LENGTH_` | At most {{ max }} characters |
| `_A_JSON_EDITOR_ERROR_MIN_` | The value must not be less than {{ min }} |
| `_A_JSON_EDITOR_ERROR_MIN_ITEMS_` | At least {{ min }} items |
| `_A_JSON_EDITOR_ERROR_MIN_LENGTH_` | At least {{ min }} characters |
| `_A_JSON_EDITOR_ERROR_NUMBER_` | Enter a number |
| `_A_JSON_EDITOR_ERROR_PATTERN_` | The value has the wrong format |
| `_A_JSON_EDITOR_ERROR_REQUIRED_KEY_` | The key {{ key }} is required |
| `_A_JSON_EDITOR_ERROR_SYNTAX_` | Syntax error in line {{ line }}, column {{ column }} |
| `_A_JSON_EDITOR_ERROR_TYPE_` | Expected type: {{ type }} |
| `_A_JSON_EDITOR_ERROR_UNIQUE_` | The items must be unique |
| `_A_JSON_EDITOR_ERROR_UNKNOWN_VARIABLE_` | Unknown variable {{ name }} |
| `_A_JSON_EDITOR_ERROR_UNKNOWN_VARIABLE_SIMILAR_` | Unknown variable {{ name }}, did you mean {{ similar }}? |
| `_A_JSON_EDITOR_EXPAND_ALL_` | Expand all |
| `_A_JSON_EDITOR_FORMAT_` | Format |
| `_A_JSON_EDITOR_GO_TO_ERROR_` | Go to the error |
| `_A_JSON_EDITOR_GROUP_ADD_` | Add |
| `_A_JSON_EDITOR_GROUP_COPY_` | Copy |
| `_A_JSON_EDITOR_GROUP_EDIT_` | Edit |
| `_A_JSON_EDITOR_GROUP_HISTORY_` | History |
| `_A_JSON_EDITOR_GROUP_MORE_` | More |
| `_A_JSON_EDITOR_GROUP_MOVE_` | Move |
| `_A_JSON_EDITOR_GROUP_REMOVE_` | Remove |
| `_A_JSON_EDITOR_GROUP_SEARCH_` | Search |
| `_A_JSON_EDITOR_GROUP_TEXT_` | Text |
| `_A_JSON_EDITOR_GROUP_VIEW_` | View |
| `_A_JSON_EDITOR_HISTORY_` | History of the changes |
| `_A_JSON_EDITOR_HISTORY_ACTION_` | {{ action }}: {{ path }} |
| `_A_JSON_EDITOR_HISTORY_ADD_` | Added: {{ path }} |
| `_A_JSON_EDITOR_HISTORY_CODE_` | Text edited |
| `_A_JSON_EDITOR_HISTORY_LOAD_` | Loaded: {{ path }} |
| `_A_JSON_EDITOR_HISTORY_MOVE_` | Moved: {{ path }} |
| `_A_JSON_EDITOR_HISTORY_REMOVE_` | Removed: {{ path }} |
| `_A_JSON_EDITOR_HISTORY_RENAME_` | Renamed: {{ from }} → {{ to }} |
| `_A_JSON_EDITOR_HISTORY_RESET_` | Reset |
| `_A_JSON_EDITOR_HISTORY_SET_` | Value changed: {{ path }} |
| `_A_JSON_EDITOR_HISTORY_SORT_` | Sorted: {{ path }} |
| `_A_JSON_EDITOR_HISTORY_START_` | Start |
| `_A_JSON_EDITOR_HISTORY_TYPE_` | Type changed: {{ path }} → {{ type }} |
| `_A_JSON_EDITOR_KEYBOARD_HINT_` | Arrow up and down move between the rows, right and left open and close a node, Enter or F2 edits the value, Shift+F2 renames the key, Alt+F2 changes the type, Insert adds, Delete removes, Alt+arrow up or down moves, Ctrl+C, Ctrl+X and Ctrl+V copy, cut and paste, Shift+F10 opens the actions, Ctrl+Z undoes, Ctrl+F searches, F8 goes to the next error. |
| `_A_JSON_EDITOR_LEVEL_ERROR_` | Error |
| `_A_JSON_EDITOR_LEVEL_INFO_` | Note |
| `_A_JSON_EDITOR_LEVEL_WARNING_` | Warning |
| `_A_JSON_EDITOR_MINIFY_` | Minify |
| `_A_JSON_EDITOR_MODE_CODE_` | Text |
| `_A_JSON_EDITOR_MODE_SPLIT_` | Tree and text |
| `_A_JSON_EDITOR_MODE_TREE_` | Tree |
| `_A_JSON_EDITOR_NEW_KEY_` | key |
| `_A_JSON_EDITOR_NODES_` | {{ count }} nodes |
| `_A_JSON_EDITOR_PATH_` | Path |
| `_A_JSON_EDITOR_READONLY_` | read only |
| `_A_JSON_EDITOR_REDO_` | Redo |
| `_A_JSON_EDITOR_REMOVED_` | Removed: {{ path }} |
| `_A_JSON_EDITOR_RESET_` | Reset |
| `_A_JSON_EDITOR_ROOT_` | root |
| `_A_JSON_EDITOR_SEARCH_` | Search |
| `_A_JSON_EDITOR_SEARCH_CASE_` | Match case |
| `_A_JSON_EDITOR_SEARCH_COUNT_` | {{ current }} of {{ count }} |
| `_A_JSON_EDITOR_SEARCH_FILTER_` | Only matches |
| `_A_JSON_EDITOR_SEARCH_KEYS_` | Keys |
| `_A_JSON_EDITOR_SEARCH_NEXT_` | Next match |
| `_A_JSON_EDITOR_SEARCH_NONE_` | No matches |
| `_A_JSON_EDITOR_SEARCH_PLACEHOLDER_` | Search keys and values |
| `_A_JSON_EDITOR_SEARCH_PREV_` | Previous match |
| `_A_JSON_EDITOR_SEARCH_REGEX_` | Regular expression |
| `_A_JSON_EDITOR_SEARCH_REGEX_INVALID_` | Invalid regular expression |
| `_A_JSON_EDITOR_SEARCH_VALUES_` | Values |
| `_A_JSON_EDITOR_SHOW_ALL_` | Show all ({{ count }}) |
| `_A_JSON_EDITOR_SHOW_LESS_` | Show less |
| `_A_JSON_EDITOR_SHOW_MORE_` | Show {{ count }} more |
| `_A_JSON_EDITOR_SHOW_RESOLVED_` | Show with the values of the variables |
| `_A_JSON_EDITOR_TYPE_ARRAY_` | Array |
| `_A_JSON_EDITOR_TYPE_BOOLEAN_` | Boolean |
| `_A_JSON_EDITOR_TYPE_NULL_` | Null |
| `_A_JSON_EDITOR_TYPE_NUMBER_` | Number |
| `_A_JSON_EDITOR_TYPE_OBJECT_` | Object |
| `_A_JSON_EDITOR_TYPE_STRING_` | String |
| `_A_JSON_EDITOR_TYPE_VARIABLE_` | Variable |
| `_A_JSON_EDITOR_UNDO_` | Undo |
| `_A_JSON_EDITOR_VARIABLES_` | Variables |
| `_A_JSON_EDITOR_VARIABLES_NONE_` | No matching variables |
| `_A_JSON_EDITOR_WARNING_VARIABLE_TYPE_` | The variable {{ name }} has the type {{ type }}, expected: {{ expected }} |

## CSS variables (`scss/components/ui/AJsonEditor.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_json_editor_bg` |  | Background of the editor. |
| `--a_json_editor_color` |  | Text color of the editor. |
| `--a_json_editor_border_color` |  | Border of the editor, the toolbar and the status bar. |
| `--a_json_editor_border_radius` |  | Corner radius of the editor. |
| `--a_json_editor_font_size` |  | Font size of the editor. |
| `--a_json_editor_font_family` |  | Font of keys, values and the text. |
| `--a_json_editor_toolbar_bg` |  | Background of the toolbar. |
| `--a_json_editor_popup_bg` |  | Background of the list of the variables. |
| `--a_json_editor_pressed_color` |  | Text of a pressed toggle button (mode, search options). |
| `--a_json_editor_pressed_bg` |  | Background of a pressed toggle button. |
| `--a_json_editor_search_width` |  | Width of the search field. |
| `--a_json_editor_row_height` |  | Minimal height of a row (also the height of the virtual rows). |
| `--a_json_editor_indent` |  | Indent per level. |
| `--a_json_editor_key_width` |  | Minimal width of the column of the keys. |
| `--a_json_editor_guide_color` |  | Color of the guide lines of the levels. |
| `--a_json_editor_row_hover_bg` |  | Background of a row on hover. |
| `--a_json_editor_row_active_bg` |  | Background of the active row. |
| `--a_json_editor_match_bg` |  | Background of a search match in the text. |
| `--a_json_editor_match_row_bg` |  | Background of the row of the current match. |
| `--a_json_editor_key_color` |  | Color of the keys. |
| `--a_json_editor_string_color` |  | Color of strings. |
| `--a_json_editor_number_color` |  | Color of numbers. |
| `--a_json_editor_boolean_color` |  | Color of booleans. |
| `--a_json_editor_variable_color` |  | Text of a variable chip. |
| `--a_json_editor_variable_bg` |  | Background of a variable chip. |
| `--a_json_editor_variable_border_color` |  | Border of a variable chip. |
