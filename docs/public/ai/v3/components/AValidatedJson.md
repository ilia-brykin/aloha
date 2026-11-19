# AValidatedJson

Schema-driven editor for repeated structured values.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AValidatedJson } from "aloha-vue";
```

[Runnable Vue example](../examples/AValidatedJson.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/validated-json)

Bind the array of entries, provide a child field schema, and keep item IDs stable if entries can be reordered.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `undefined` | — | — |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `children` | Array | `[]` | — | An array of child elements that will be rendered inside the component. Each element in the array is an object with parameters such as type, label, id, and other properties for configuring and displaying the child element. |
| `deactivateOrdering` | Boolean | `false` | — | — |
| `deactivatePreview` | Boolean | `false` | — | — |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `undefined` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `elementLabel` | String | `"_A_VALIDATED_JSON_ELEMENTS_"` | — | — |
| `elementTemplate` | String | `"{{ elementLabel }}"` | — | — |
| `errors` | String, Array, Object | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `errorsClass` | String, Object | `undefined` | — | — |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | — |
| `helpText` | String | `undefined` | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `hidePosition` | Boolean | `false` | — | — |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `isHide` | Boolean | `undefined` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `keyId` | String | `undefined` | — | The key in the data object that will be used as the identifier for each item. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | String, Object | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelScreenReader` | String, Number | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `mode` | String | `undefined` | — | — |
| `modelAll` | Object | `undefined` | — | — |
| `modelDependencies` | Object | `undefined` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelValue` | String, Number, Boolean, Object, Array | `undefined` | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `modeOptions` | Object | `{}` | — | — |
| `options` | Object | `{}` | — | Additional data object available within the component, in slots, or custom logic. |
| `readonly` | Boolean | `undefined` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `showReadonlyChildren` | Boolean | `false` | — | — |
| `sortId` | String | `undefined` | — | — |
| `typedBaseId` | String | `undefined` | — | — |
| `typedChildren` | Object | `{}` | — | — |
| `uniqueChildrenIds` | Array | `[]` | — | — |
| `useFlatErrors` | Boolean | `false` | — | — |
| `useFlatModel` | Boolean | `false` | — | — |
| `valueKey` | String | `undefined` | — | — |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `blur` | `arg` |
| `focus` | `arg` |
| `update:modelValue` | `cloneDeep(MODEL_VALUE)` / `cloneDeep(MODEL)` / `fullModel` |

Vue model bindings: `v-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/AValidatedJson/AValidatedJson.js)
