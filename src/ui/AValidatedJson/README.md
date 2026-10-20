# AValidatedJson: lists of primitive values

Use `mode="list"` with the optional `valueKey` prop to edit a primitive array.
The matching child field defines the editor and its validation rules.

```vue
<a-validated-json
  v-model="tags"
  mode="list"
  value-key="value"
  :children="[{ id: 'value', type: 'text', label: 'Tag', required: true }]"
  element-template="{{ value }}"
/>
```

```js
const tags = ref(["Aloha", "Vue"]);
```

- `valueKey` defaults to `undefined`. Object lists, JSON mode and single mode
  retain their existing behavior. `valueKey` only applies to list mode.
- The public `v-model`, `update:modelValue` event and `change` callback contain
  primitive arrays, including `0`, `false`, empty strings and `null`.
- Internally the component wraps each value under `valueKey` for forms,
  labels, previews and uniqueness checks. No wrapper component or plugin
  registration is needed. `valueKey` should identify the list's editable field.
- Use an `integer` or `switch` child to edit numbers or booleans.
- `uniqueChildrenIds: ['value']` prevents duplicate values when requested.
- Errors such as `{ 0: ['Invalid value'] }` are passed to the corresponding
  value field. Already structured errors such as
  `{ 0: { value: ['Invalid value'] } }` are also supported.
- `readonly`, ordering, deleting and editing use the usual list controls.

With `AForm`, use the same options on a field of type `validatedJson`:

```js
const data = [{
  id: "tags",
  type: "validatedJson",
  mode: "list",
  valueKey: "value",
  children: [{ id: "value", type: "text", label: "Tag" }],
}];
// model: { tags: ["Aloha", "Vue"] }
```
