# AAvatar

Image, initials or icon representing a person or group.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { AAvatar } from "aloha-vue";
```

[Runnable Vue example](../examples/AAvatar.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/avatar)

Supply an image alternative where the picture conveys information. Use decorative mode if the same name is already conveyed next to it.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alt` | String | `undefined` | — | Accessible name of the avatar instead of the name. |
| `color` | String | `"auto"` (plugin default) | — | auto (by the name), gray, primary, secondary, tertiary, success, info, warning or danger. |
| `decorative` | Boolean | `false` | — | Hides the avatar from screen readers, e.g. if the name is written next to it. |
| `icon` | String, Object | `undefined` | — | Icon for an avatar without a name and without an image. |
| `initials` | String | `undefined` | — | Own initials instead of the initials of the name. |
| `initialsLimit` | Number | `2` (plugin default) | — | Maximum number of initials (see filterInitials). |
| `name` | String | `undefined` | — | Name of the person or organization: accessible name, initials and color. |
| `shape` | String | `undefined` | — | Shape of all avatars of the group. |
| `size` | String, Number | `undefined` | — | Size of all avatars of the group. |
| `src` | String | `undefined` | — | URL of the image. |
| `status` | String | `undefined` | — | online, away, busy or offline. |
| `statusText` | String | `undefined` | — | Own text of the status for screen readers. |
| `tag` | String | `"span"` (plugin default) | — | HTML tag of the group. |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `error` | `{ $event, src }` |

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `default` | — | Own content instead of the image, the initials or the icon. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/AAvatar/AAvatar.js)
