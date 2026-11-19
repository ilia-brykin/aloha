# AMenuButtonToggle

Button that opens and closes an AMenu instance.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AMenuButtonToggle } from "aloha-vue";
```

[Runnable Vue example](../examples/AMenuButtonToggle.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/menu-basic)

Pass the same menuId to the toggle and the menu. Test keyboard activation and focus when closing.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `buttonToggleProps` | Object | `{}` | — | — |
| `canChangeBodyClass` | Boolean | `true` | — | — |
| `class` | String, Object | `"a_btn a_btn_secondary"` | — | — |
| `insideMenu` | Boolean | `false` | — | — |
| `menuId` | String | — | Yes | — |
| `onlyMobile` | Boolean | `false` | — | — |
| `selectorClose` | String, Array | `undefined` | — | — |
| `selectorCloseIds` | String, Array | `undefined` | — | — |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AMenu/AMenuButtonToggle/AMenuButtonToggle.js)
