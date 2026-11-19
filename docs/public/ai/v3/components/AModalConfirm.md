# AModalConfirm

Application-level host for a confirmation dialog.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AModalConfirm } from "aloha-vue";
```

[Runnable Vue example](../examples/AModalConfirm.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/confirm)

Mount once. Open with AConfirmAPI_openConfirm and pass a save callback. The modal is driven by confirmation state and forwards its slots to AModal.

## Props

This component does not declare dedicated props.

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `modalBody` | — | — |
| `modalFooterAppend` | — | — |
| `modalFooterPrepend` | — | — |
| `modalHeader` | — | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AModalConfirm/AModalConfirm.js)
