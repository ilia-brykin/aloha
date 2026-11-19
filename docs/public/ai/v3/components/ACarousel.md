# ACarousel

Slide carousel with controls, indicators and optional autoplay.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ACarousel } from "aloha-vue";
```

[Runnable Vue example](../examples/ACarousel.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/carousel)

Supply ariaLabel and a meaningful slide body in the item slot. If enabling autoplay, keep the pause control available.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ariaDisabled` | Boolean | `false` | — | Indicates whether the carousel should be marked as disabled for assistive technologies |
| `ariaLabel` | String | — | Yes | Translatable aria-label for the main carousel element |
| `arrowNextAttributes` | Object | `{}` | — | Additional attributes for the button that navigates to the next slide and are not explicitly defined as properties |
| `arrowNextIcon` | String | Built-in SVG | — | Name of the icon that is displayed on the button for navigating to the next slide |
| `arrowPreviousAttributes` | Object | `{}` | — | Additional attributes for the button that navigates to the previous slide and are not explicitly defined as properties |
| `arrowPreviousIcon` | String | Built-in SVG | — | Name of the icon that is displayed on the button for navigating to the previous slide |
| `arrowsPlacement` | String | `"sides-center"` | — | Determines the placement of navigation buttons relative to the carousel content |
| `arrowsShow` | Boolean | `true` | — | Determines whether navigation buttons (arrows) should be displayed for navigating between slides |
| `arrowsTrigger` | String, Array | `"always"` | — | Determines when navigation buttons should be displayed: always, on hover, or on focus |
| `autoplayInterval` | Number | `5000` | — | Interval in milliseconds between automatic slide transitions |
| `autoplayShow` | Boolean | `false` | — | Determines whether autoplay controls should be displayed |
| `autoplayStart` | Boolean | `false` | — | Determines whether autoplay should start immediately after the component loads |
| `data` | Array | `[]` | — | Array of objects with data to display in the carousel |
| `disabled` | Boolean | `false` | — | Determines whether the carousel should be disabled, preventing user interaction |
| `extra` | Object | `undefined` | — | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like "_WELCOME_{{foo}}_{{bar}}_", which is translated as "Welcome {{ foo }}: {{ bar }}", you can pass an object like { foo: "abc", bar: "123" }, and the result will be the translation "Welcome abc: 123". |
| `id` | String | Generated ID | — | Specifies a unique identifier for the carousel |
| `indicatorsAutoLimit` | Boolean | `false` | — | If true, determines the maximum number of indicators based on the element width, used in conjunction with indicatorWidth |
| `indicatorsLimit` | Number | `undefined` | — | Sets the maximum number of indicators |
| `indicatorsMargin` | Number | `6` | — | — |
| `indicatorsPlacement` | String | `"bottom"` | — | Determines the placement of slide indicators relative to the carousel content |
| `indicatorsShow` | Boolean | `true` | — | Determines whether slide indicators should be displayed |
| `indicatorsType` | String | `"dots"` | — | Determines the type of slide indicators |
| `indicatorWidth` | Number | `2.125` | — | Size of one indicator, needed to determine the number of indicators if indicatorsAutoLimit true |
| `keyId` | String | `undefined` | — | A unique key identifier for each data item. Used for performance improvement |
| `modelValue` | Number, String | `undefined` | — | Index or ID of the currently active slide in the carousel |
| `texts` | Object | Built-in configuration | — | Object with translatable texts used in the component |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `change` | `{ id, item }` |
| `init` | `{ id, item }` |
| `play` | See source or linked demo |
| `stop` | See source or linked demo |
| `update:modelValue` | Updated value |

Vue model bindings: `v-model`.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `item` | `{ activeId, dataCount, item, itemIndex, isActive, parentId }` | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ACarousel/ACarousel.js)
