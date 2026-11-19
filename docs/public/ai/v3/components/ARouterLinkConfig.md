# ARouterLinkConfig

Form for choosing a route and editing its params, query and target.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ARouterLinkConfig } from "aloha-vue";
```

[Runnable Vue example](../examples/ARouterLinkConfig.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/router-link-config)

Supply allowed routes or configure ARouterLinkConfigPlugin with the application routes.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `attributesFieldset` | Object | `{}` (plugin default) | — | HTML attributes to be added to the fieldset tag. |
| `attributesRoute` | Object | `{}` | — | — |
| `change` | Function | Default callback | — | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| `classColumn` | String, Object | `"a_column a_column_12"` (plugin default) | — | — |
| `classColumns` | String, Object | `"a_columns a_columns_count_12 a_columns_gap_y_1"` (plugin default) | — | CSS classes that will be applied to the container where child elements from the children prop are placed. These classes control the number of columns, spacing between them, and their responsive behavior. |
| `classFieldset` | String, Object | `undefined` (plugin default) | — | CSS classes that will be applied to the fieldset tag containing the group of controls. This allows customizing the appearance of the group of form elements. |
| `dependencies` | Array, Object | `undefined` | — | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| `disabled` | Boolean | `false` | — | Determines whether the component is disabled. If set to true, the component becomes inactive and the user cannot interact with it. |
| `errors` | String, Array | `undefined` | — | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| `excludeRenderAttributes` | Array | `[]` (plugin default) | — | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final DOM. |
| `extra` | Object | `undefined` (plugin default) | — | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like "_WELCOME_{{foo}}_{{bar}}_", which is translated as "Welcome {{ foo }}: {{ bar }}", you can pass an object like { foo: "abc", bar: "123" }, and the result will be the translation "Welcome abc: 123". |
| `filterRoutes` | Function | `undefined` | — | — |
| `hasBorder` | Boolean | `true` (plugin default) | — | Specifies whether the item should have a border. If set to true, a border will be displayed around the item. |
| `helpText` | String | `undefined` | — | Help text displayed below the component. Provides the user with additional information or instruction. |
| `helpTextParam` | String | `"_A_ROUTER_LINK_CONFIG_HELP_TEXT_PARAM_"` (plugin default) | — | — |
| `helpTextQuery` | String | `"_A_ROUTER_LINK_CONFIG_HELP_TEXT_QUERY_"` (plugin default) | — | — |
| `helpTextRoute` | String | `"_A_ROUTER_LINK_CONFIG_HELP_TEXT_ROUTE_"` (plugin default) | — | — |
| `helpTextTarget` | String | `"_A_ROUTER_LINK_CONFIG_HELP_TEXT_TARGET_"` (plugin default) | — | — |
| `htmlId` | String | `undefined` | — | Sets the HTML ID of the element. Can be used to uniquely identify the component on the page. |
| `id` | String, Number | Generated ID | — | The identifier of the component, which can be used to track or refer to the component in the code. |
| `idPrefix` | String | `undefined` | — | Prefix for the component's ID. Used to create a unique identifier based on the specified prefix. |
| `isHide` | Boolean | `false` | — | Determines whether the component should be hidden. If set to true, the component is not displayed on the page. |
| `isRender` | Boolean | `true` | — | Indicates whether the component should be rendered. If set to false, the component will not be created in the DOM. |
| `keyIdRoute` | String | `"name"` (plugin default) | — | — |
| `keyLabelCallbackRoute` | Function | `undefined` | — | — |
| `keyLabelRoute` | String | `"path"` (plugin default) | — | — |
| `label` | String, Number | `undefined` | — | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| `labelClass` | String, Object | `undefined` (plugin default) | — | CSS class(es) applied to the label. Allows customizing the label's style. |
| `labelDescription` | String | `undefined` | — | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| `labelParam` | String | `"_A_ROUTER_LINK_CONFIG_LABEL_PARAM_"` (plugin default) | — | — |
| `labelQuery` | String | `"_A_ROUTER_LINK_CONFIG_LABEL_QUERY_"` (plugin default) | — | — |
| `labelRoute` | String | `"_A_ROUTER_LINK_CONFIG_LABEL_ROUTE_"` (plugin default) | — | — |
| `labelScreenReader` | String, Number | `undefined` | — | Label intended for screen readers. Useful for improving accessibility. |
| `labelTarget` | String | `"_A_ROUTER_LINK_CONFIG_LABEL_TARGET_"` (plugin default) | — | — |
| `modelDependencies` | Object | `undefined` | — | Determines model dependencies that may affect the visibility or behavior of the component. |
| `modelUndefined` | String, Number, Object, Array, Boolean | `""` | — | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| `modelValue` | String, Array, Object | `undefined` | — | The current model value associated with the component. Used to manage the data displayed in the component. |
| `readonly` | Boolean | `false` | — | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| `readonlyDefault` | String | `""` (plugin default) | — | The default text that is shown if the value is missing in read-only mode. |
| `readonlyDefaultParam` | String | `undefined` (plugin default) | — | — |
| `readonlyDefaultQuery` | String | `undefined` (plugin default) | — | — |
| `readonlyDefaultRoute` | String | `undefined` (plugin default) | — | — |
| `readonlyDefaultTarget` | String | `undefined` (plugin default) | — | — |
| `readonlyValueParentClass` | String, Object, Array | `undefined` | — | — |
| `required` | Boolean | `false` | — | Indicates whether the component is required. If set to true, the component requires user input. |
| `routes` | Array | `[]` (plugin default) | — | — |
| `slotName` | String | `undefined` | — | The name of the main slot used to insert custom content into the component. |
| `sortOrderRoute` | String | `"asc"` (plugin default) | — | — |
| `targets` | Array | `[{"id":"_blank","label":"_A_TARGET_BLANK_"},{"id":"_self","label":"_A_TARGET_SELF_"},{"id":"_parent","label":"_A_TARGET_PARENT_"},{"id":"_top","label":"_A_TARGET_TOP_"}]` (plugin default) | — | — |
| `type` | String | `"routerLinkConfig"` | — | Defines the type of input value. Various data types are supported, such as text, password, number, integer, email, and others. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `blur` | See source or linked demo |
| `focus` | See source or linked demo |
| `update:modelValue` | `model` |

Vue model bindings: `v-model`.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ui/ARouterLinkConfig/ARouterLinkConfig.js)
