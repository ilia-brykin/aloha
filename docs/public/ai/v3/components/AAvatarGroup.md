# AAvatarGroup

Group avatars with a configurable visible count.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AAvatarGroup } from "aloha-vue";
```

[Runnable Vue example](../examples/AAvatarGroup.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/avatar)

Give the group a label and use AAvatar children.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `label` | String | `undefined` | — | Accessible name of the group. |
| `max` | Number | `undefined` | — | Maximum number of shown avatars; the rest is shown as +N. |
| `moreText` | String | `"_A_AVATAR_GROUP_MORE_{{count}}_"` | — | Accessible name of the +N avatar. |
| `shape` | String | `undefined` | — | Shape of all avatars of the group. |
| `size` | String, Number | `undefined` | — | Size of all avatars of the group. |
| `tag` | String | `"div"` | — | HTML tag of the group. |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `default` | — | Own content instead of the image, the initials or the icon. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AAvatarGroup/AAvatarGroup.js)
