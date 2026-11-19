# AMenu

Responsive navigation with nested menu items.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AMenu } from "aloha-vue";
```

[Runnable Vue example](../examples/AMenu.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/menu-basic)

Use stable IDs and sensible link labels. Install Vue Router for items with to and pair menuId with AMenuButtonToggle when needed.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `breadcrumbsLinkClass` | String, Object | `"a_btn a_btn_link"` | — | — |
| `breadcrumbsTruncatedDropdownProps` | Object | `{}` | — | — |
| `breadcrumbsTruncatedOffset` | Number | `54` | — | — |
| `buttonToggleClass` | String, Object | `"a_btn a_btn_transparent_secondary a_btn_small"` | — | — |
| `buttonToggleProps` | Object | `{}` | — | — |
| `canChangeBodyClass` | Boolean | `true` | — | — |
| `compareUrlCallback` | Function | `undefined` | — | — |
| `data` | Array | `[]` | — | — |
| `hasSearch` | Boolean | `true` | — | — |
| `isBackdropMobileClickable` | Boolean | `true` | — | — |
| `isBlockerClickable` | Boolean | `false` | — | — |
| `isBodyFocusAfterClick` | Boolean | `true` | — | — |
| `isBreadcrumbsTruncated` | Boolean | `false` | — | — |
| `isInline` | Boolean | `false` | — | — |
| `isLinkTruncated` | Boolean | `true` | — | — |
| `isMenuOpenInitial` | Boolean | `true` | — | — |
| `isSearchBreadcrumbsTruncated` | Boolean | `true` | — | — |
| `isTranslated` | Boolean | `false` | — | — |
| `keyChildren` | String | `undefined` | — | — |
| `keyGroup` | String | `"group"` | — | — |
| `keyIcon` | String | `"icon"` | — | — |
| `keyId` | String | `"id"` | — | — |
| `keyLabel` | String | `"label"` | — | — |
| `keyLabelCallback` | Function | `undefined` | — | — |
| `keyParent` | String | `"parent"` | — | — |
| `keySlot` | String | `undefined` | — | — |
| `menuId` | String | Generated ID | — | — |
| `onlyMobile` | Boolean | `false` | — | — |
| `searchInDom` | Boolean | `false` | — | — |
| `selectorClose` | String, Array | `undefined` | — | — |
| `selectorCloseIds` | String, Array | `undefined` | — | — |
| `showCountChildren` | Boolean | `true` | — | — |
| `useBackdropMobile` | Boolean | `true` | — | — |
| `useEscapeForMobile` | Boolean | `true` | — | — |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `menuSearch` | — | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AMenu/AMenu.js)
