# AAvatar (Avatar)

The **AAvatar** component shows a person or an organization as a picture, as initials or as an icon. Screen readers read the name and the status.

## Basic usage

From `name` the initials and the color are made. The same name gets always the same color. Without a name an icon is shown.

*props: `name`*

```html
<a-avatar name="Anna Becker"></a-avatar>
<a-avatar name="Ben Ott"></a-avatar>
<a-avatar name="Clara Maria Lenz"></a-avatar>
<a-avatar name="Мария Иванова"></a-avatar>
<a-avatar></a-avatar>
```

## Image

`src` shows an image. If it cannot be loaded, the initials are shown and the event `error` is emitted.

*props: `src`, `alt`*

```html
<a-avatar
  name="Tennis Club"
  src="./assets/Tennis_ball_purple_background.png"
></a-avatar>
<!-- the image is not found: the initials are shown -->
<a-avatar
  name="Tennis Club"
  src="./assets/not-found.png"
></a-avatar>
```

## Sizes

`size`: **small**, **medium**, **large**, **xlarge** or a number in pixels.

*props: `size`*

```html
<a-avatar name="Anna Becker" size="small"></a-avatar>
<a-avatar name="Anna Becker" size="medium"></a-avatar>
<a-avatar name="Anna Becker" size="large"></a-avatar>
<a-avatar name="Anna Becker" size="xlarge"></a-avatar>
<a-avatar name="Anna Becker" :size="96"></a-avatar>
```

## Shape

`shape="square"` with rounded corners suits organizations and projects.

*props: `shape`*

```html
<a-avatar
  name="Aloha GmbH"
  shape="square"
></a-avatar>
<a-avatar
  name="Tennis Club"
  shape="square"
  size="large"
  src="./assets/Tennis_ball_purple_background.png"
></a-avatar>
```

## Colors

By default `color="auto"` chooses the color by the name. A fixed color is set with `color`. The text has enough contrast in the light and the dark theme.

*props: `color`*

```html
<a-avatar name="Anna Becker"></a-avatar> <!-- color="auto" -->
<a-avatar name="gray" color="gray"></a-avatar>
<a-avatar name="primary" color="primary"></a-avatar>
<a-avatar name="secondary" color="secondary"></a-avatar>
<a-avatar name="tertiary" color="tertiary"></a-avatar>
<a-avatar name="success" color="success"></a-avatar>
<a-avatar name="info" color="info"></a-avatar>
<a-avatar name="warning" color="warning"></a-avatar>
<a-avatar name="danger" color="danger"></a-avatar>
```

## Status

`status`: **online**, **away**, **busy**, **offline**. The status is part of the accessible name, so it is not shown only by color. `statusText` replaces its text.

*props: `status`, `statusText`*

```html
<a-avatar name="Anna Becker" status="online"></a-avatar>
<a-avatar name="Anna Becker" status="away"></a-avatar>
<a-avatar name="Anna Becker" status="busy"></a-avatar>
<a-avatar name="Anna Becker" status="offline"></a-avatar>
```

## Avatar next to the name

If the name is written next to the avatar, set `decorative`. The avatar is then hidden from screen readers and the name is not read twice.

*props: `decorative`*

```html
<ul class="a_list_without_styles">
  <li class="a_d_flex a_gap_2 a_align_items_center">
    <a-avatar
      name="Anna Becker"
      :decorative="true"
      size="small"
    ></a-avatar>
    <span>Anna Becker</span>
  </li>
</ul>
```

## Own content

`initials` replaces the initials, the default slot replaces the whole content. `icon` sets another icon for an avatar without a name.

*props: `initials`, `initialsLimit`, `icon`*

```html
<a-avatar
  name="Assistant"
  initials="AI"
  color="tertiary"
></a-avatar>
<a-avatar
  alt="Home"
  icon="House"
></a-avatar>
<a-avatar
  name="Favorites"
  color="warning"
>
  <a-icon icon="StarFill"></a-icon>
</a-avatar>
```

## Group

**AAvatarGroup** shows the avatars overlapping. With `max` the rest is shown as **+N**. `size` and `shape` apply to all avatars of the group.

*props: `max`, `label`, `size`, `shape`*

```html
<a-avatar-group
  label="Team"
  :max="4"
>
  <a-avatar
    v-for="name in names"
    :key="name"
    :name="name"
  ></a-avatar>
</a-avatar-group>

<a-avatar-group
  label="Team"
  size="small"
>
  <a-avatar name="Anna Becker"></a-avatar>
  <a-avatar name="Ben Ott"></a-avatar>
  <a-avatar name="Clara Lenz"></a-avatar>
  <a-avatar
    name="Tennis Club"
    src="./assets/Tennis_ball_purple_background.png"
  ></a-avatar>
</a-avatar-group>
```

## AAvatar

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| alt | String | undefined |  | Accessible name of the avatar instead of the name. |
| color | String | "auto" |  | auto (by the name), gray, primary, secondary, tertiary, success, info, warning or danger. |
| decorative | Boolean | false |  | Hides the avatar from screen readers, e.g. if the name is written next to it. |
| icon | String \| Object | undefined |  | Icon for an avatar without a name and without an image. |
| initials | String | undefined |  | Own initials instead of the initials of the name. |
| initialsLimit | Number | 2 |  | Maximum number of initials (see filterInitials). |
| name | String | undefined |  | Name of the person or organization: accessible name, initials and color. |
| shape | String | "circle" |  | circle or square. |
| size | String \| Number | "medium" |  | small, medium, large, xlarge or a number in pixels. |
| src | String | undefined |  | URL of the image. |
| status | String | undefined |  | online, away, busy or offline. |
| statusText | String | undefined |  | Own text of the status for screen readers. |
| tag | String | "span" |  | HTML tag of the avatar. |

## AAvatarGroup

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| label | String | undefined |  | Accessible name of the group. |
| max | Number | undefined |  | Maximum number of shown avatars; the rest is shown as +N. |
| moreText | String | "_A_AVATAR_GROUP_MORE_{{count}}_" |  | Accessible name of the +N avatar. |
| shape | String | undefined |  | Shape of all avatars of the group. |
| size | String \| Number | undefined |  | Size of all avatars of the group. |
| tag | String | "div" |  | HTML tag of the group. |

## Events

| name | description |
| --- | --- |
| error | The image could not be loaded. Gets **{ $event, src }**. |

## Slots

| name | description |
| --- | --- |
| default | Own content instead of the image, the initials or the icon. |

## Translations

| key | en |
| --- | --- |
| `_A_AVATAR_ARIA_LABEL_` | Avatar |
| `_A_AVATAR_STATUS_ONLINE_` | online |
| `_A_AVATAR_STATUS_AWAY_` | away |
| `_A_AVATAR_STATUS_BUSY_` | do not disturb |
| `_A_AVATAR_STATUS_OFFLINE_` | offline |
| `_A_AVATAR_GROUP_MORE_{{count}}_` | {{count}} more |

## CSS variables (`scss/components/AAvatar.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_avatar_size` |  | Size of an avatar (size "medium"). |
| `--a_avatar_size_small` |  | Size of an avatar for size "small". |
| `--a_avatar_size_large` |  | Size of an avatar for size "large". |
| `--a_avatar_size_xlarge` |  | Size of an avatar for size "xlarge". |
| `--a_avatar_square_border_radius` |  | Corner radius of an avatar with shape "square". |
| `--a_avatar_bg` |  | Background of an avatar (set by the prop color). |
| `--a_avatar_color` |  | Color of the initials and of the icon (set by the prop color). |
| `--a_avatar_image_bg` |  | Background behind an image (visible while it loads). |
| `--a_avatar_font_scale` |  | Font size of the initials relative to the size of the avatar. |
| `--a_avatar_font_weight` |  | Font weight of the initials. |
| `--a_avatar_icon_scale` |  | Size of the icon relative to the size of the avatar. |
| `--a_avatar_status_size` |  | Size of the status dot. |
| `--a_avatar_status_ring_width` |  | Width of the ring around the status dot. |
| `--a_avatar_status_online_color` |  | Color of the status "online". |
| `--a_avatar_status_away_color` |  | Color of the status "away". |
| `--a_avatar_status_busy_color` |  | Color of the status "busy". |
| `--a_avatar_status_offline_color` |  | Color of the status "offline". |
| `--a_avatar_ring_color` |  | Color of the rings of the status dot and of the avatars in a group. |
| `--a_avatar_group_overlap` |  | How far the avatars of a group overlap, relative to their size. |
| `--a_avatar_group_ring_width` |  | Width of the ring around the avatars of a group. |
| `--a_avatar_group_more_font_scale` |  | Font size of the "+N" avatar relative to its size. |
