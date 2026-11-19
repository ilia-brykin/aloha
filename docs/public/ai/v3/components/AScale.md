# AScale

Visual balance scale driven by a signed numeric value.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AScale } from "aloha-vue";
```

[Runnable Vue example](../examples/AScale.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/scale)

Provide a neighbouring text equivalent when the scale conveys a meaningful result.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `balanceCircleRadius` | Number | `3.5` | — | — |
| `balanceTopHeight` | Number | `6` | — | — |
| `balanceWidth` | Number | `60` | — | — |
| `bowlRadius` | Number | `12.6` | — | — |
| `bowlThreadHeight` | Number | `20` | — | — |
| `bowlThreadPaddingX` | Number | `4` | — | — |
| `bowlThreadStrokeWidth` | Number | `2` | — | — |
| `bowlThreadWidth` | Number | `16` | — | — |
| `bowlWidth` | Number | `25` | — | — |
| `classNegative` | String | `undefined` | — | — |
| `classNeutral` | String | `undefined` | — | — |
| `classPositive` | String | `undefined` | — | — |
| `maxDegree` | Number | `30` | — | — |
| `pipesWidth` | Number | `3` | — | — |
| `standHeight` | Number | `46` | — | — |
| `standWidth` | Number | `70` | — | — |
| `value` | Number | `0` | — | — |
| `viewBoxHeight` | Number | `80` | — | — |
| `viewBoxWidth` | Number | `100` | — | — |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AScale/AScale.js)
