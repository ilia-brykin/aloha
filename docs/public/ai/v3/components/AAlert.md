# AAlert

Inline status or error message with optional dismissal.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AAlert } from "aloha-vue";
```

[Runnable Vue example](../examples/AAlert.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/alert)

Use a visible message. Choose its live-region role for the urgency and pass a meaningful name to an icon-only close control.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alertClass` | String, Object | `undefined` (plugin default) | — | Additional CSS class |
| `alertContentClass` | String, Object | `undefined` (plugin default) | — | Additional CSS class for content |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `ariaAtomic` | Boolean | `true` | — | Specifies whether the entire alert region should be announced by assistive technologies when its content changes. |
| `btnCloseAttributes` | Object | `{}` (plugin default) | — | An object that defines the properties of the close button. |
| `btnCloseIcon` | String | Built-in SVG (plugin default) | — | — |
| `closable` | Boolean | `false` (plugin default) | — | Whether alert can be dismissed |
| `extra` | Object | `undefined` (plugin default) | — | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like "_WELCOME_{{foo}}_{{bar}}_", which is translated as "Welcome {{ foo }}: {{ bar }}", you can pass an object like { foo: "abc", bar: "123" }, and the result will be the translation "Welcome abc: 123". |
| `html` | String | `undefined` (plugin default) | — | HTML to be shown inside the component |
| `icon` | String | `undefined` (plugin default) | — | Icon. Any icon available for the AIcon component can be used |
| `iconClass` | String | `undefined` (plugin default) | — | Additional CSS class for the icon |
| `isVisible` | Boolean | `false` (plugin default) | — | Whether the component is shown |
| `removeAlertOnClose` | Boolean | `false` (plugin default) | — | Controlling the closure of an alert from outside a component |
| `role` | String | `"alert"` | — | Defines the ARIA role of the alert component. |
| `safeHtml` | String | `undefined` (plugin default) | — | Safe HTML to be shown inside the component |
| `showIcon` | Boolean | `false` (plugin default) | — | Whether a type icon is displayed |
| `text` | String | `undefined` (plugin default) | — | Plain Text to be shown inside the component |
| `textClose` | String | `"_A_ALERT_CLOSE_"` (plugin default) | — | The text for the close button to be read by the screen reader |
| `type` | String | `"danger"` (plugin default) | — | Alert type |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `close` | None |

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `default` | — | Content of the alert |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AAlert/AAlert.js)
