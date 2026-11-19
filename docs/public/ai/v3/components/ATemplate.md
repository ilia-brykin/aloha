# ATemplate

Schema-driven form element that renders configured HTML content.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ATemplate } from "aloha-vue";
```

[Runnable Vue example](../examples/ATemplate.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/template)

Use trusted content and the normal form label when the template needs a heading.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | — |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `excludeRenderAttributes` | Array | `[]` | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` | — | — |
| `helpText` | String | — | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `html` | String | `undefined` | — | HTML content that will be safely rendered inside the component. |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `id` | String, Number | `undefined` | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `isHide` | Boolean | `undefined` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | String, Object | `undefined` | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelScreenReader` | String, Number | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `modelDependencies` | Object | `undefined` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelValue` | Any | — | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `options` | String, Number, Object, Array, Boolean | `undefined` | — | Any data to pass into the slot. |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `slotName` | String | `undefined` | — | The name of the slot where the custom content will be passed. |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/ATemplate/ATemplate.js)
