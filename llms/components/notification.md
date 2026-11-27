# ANotification (Notification)

**ANotification** shows short messages at the edge of the window, e.g. "Saved". Put `<a-notification />` once in the app (e.g. in `App.vue`) and show messages from anywhere with `addNotification()` of `ANotificationAPI()`. Every notification has `role="alert"`, so a screen reader reads it. While the mouse or the focus is on the notifications, they do not disappear.

## Basic usage

`addNotification({ text, type })` shows a notification of the type `success`, `info`, `warning`, `danger` (`success` by default, `error` is the same as `danger`). It disappears after 5 seconds, `timeout: 0` keeps it until it is closed.

```html
<div class="a_d_flex a_flex_wrap a_gap_2">
  <a-button
    v-for="type in types"
    :key="type"
    :class="`a_btn a_btn_${ type }`"
    :text="`_A_NOTIFICATION_EXAMPLE_BTN_${ type.toUpperCase() }_`"
    @click="add(type)"
  />
</div>

<!-- once in App.vue -->
<a-notification />
```

```js
import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

export default {
  components: {
    AButton,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const types = ["success", "info", "warning", "danger"];

    const add = type => {
      addNotification({
        text: `_A_NOTIFICATION_EXAMPLE_TEXT_${ type.toUpperCase() }_`,
        type,
      });
    };

    return {
      add,
      types,
    };
  },
};
```

## Title and icon

`title` is shown in bold above the text, `icon` replaces the icon of the type. Texts accept translation keys with `extra`. `announce: "status"` lets a screen reader finish the current sentence first, for messages that are not urgent.

```html
<a-button
  class="a_btn a_btn_primary"
  text="_A_NOTIFICATION_EXAMPLE_TITLE_BTN_"
  @click="add"
/>
```

```js
import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

export default {
  components: {
    AButton,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const add = () => {
      addNotification({
        title: "_A_NOTIFICATION_EXAMPLE_TITLE_",
        text: "_A_NOTIFICATION_EXAMPLE_TITLE_TEXT_",
        extra: { name: "Anna" },
        icon: "Envelope",
        type: "info",
        announce: "status",
      });
    };

    return {
      add,
    };
  },
};
```

## Actions

`actions` adds buttons, e.g. "Undo". A click calls `onClick({ notification, $event })` and closes the notification. The buttons are reachable with Tab, while the focus is on them the notification does not disappear. Give such a notification a longer `timeout`.

```html
<a-button
  class="a_btn a_btn_danger"
  text="_A_NOTIFICATION_EXAMPLE_DELETE_BTN_"
  @click="deleteDocument"
/>
```

```js
import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

export default {
  components: {
    AButton,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const deleteDocument = () => {
      addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_DELETED_",
        timeout: 8000,
        actions: [
          {
            text: "_A_NOTIFICATION_EXAMPLE_UNDO_",
            onClick: () => {
              addNotification({
                text: "_A_NOTIFICATION_EXAMPLE_RESTORED_",
                type: "info",
              });
            },
          },
        ],
      });
    };

    return {
      deleteDocument,
    };
  },
};
```

## Placement, size and area

An own area with `name`: `addNotification({ container: name })` shows the notification there. `placement` sets the edge of the window, `size` or `width` (a number is in px) a fixed width instead of the default width in percent. `max` closes the oldest notifications, here above 3.

*props: `name`, `placement`, `size`, `width`, `max`*

```html
<a-radio
  v-model="placement"
  :data="placements"
  label="placement"
/>
<a-radio
  v-model="size"
  :data="sizes"
  label="size"
/>
<a-button
  class="a_btn a_btn_primary"
  text="_A_NOTIFICATION_EXAMPLE_SHOW_BTN_"
  @click="add"
/>
<a-notification
  name="example_placement"
  :max="3"
  :placement="placement"
  :size="size === 'default' ? undefined : size"
/>
```

```js
import {
  ref,
} from "vue";

import {
  AButton,
  ANotification,
  ANotificationAPI,
  ARadio,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ANotification,
    ARadio,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const placement = ref("top-end");
    const size = ref("small");
    const placements = ["top-start", "top-center", "top-end", "bottom-start", "bottom-center", "bottom-end"]
      .map(value => ({ value, label: value }));
    const sizes = ["default", "small", "large", "xl"]
      .map(value => ({ value, label: value }));

    let count = 0;
    const add = () => {
      count++;
      addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_PLACEMENT_TEXT_",
        extra: { count, placement: placement.value },
        container: "example_placement",
        type: "info",
      });
    };

    return {
      add,
      placement,
      placements,
      size,
      sizes,
    };
  },
};
```

## Remaining time

`has-progress` shows the remaining time as a bar. Move the mouse onto the notification or focus its close button: the bar and the timer stop.

*props: `has-progress`*

```html
<a-button
  class="a_btn a_btn_primary"
  text="_A_NOTIFICATION_EXAMPLE_SHOW_BTN_"
  @click="add"
/>
<a-notification
  name="example_progress"
  :has-progress="true"
  placement="bottom-end"
  :width="360"
/>
```

```js
import {
  AButton,
  ANotification,
  ANotificationAPI,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ANotification,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const add = () => {
      addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_PROGRESS_TEXT_",
        container: "example_progress",
        timeout: 8000,
        deduplicate: false,
      });
    };

    return {
      add,
    };
  },
};
```

## Same notifications

The same notification (same text, type, title, `extra` and area) is shown only once: it shows the count (×2) and its timer restarts. With `deduplicate: false` every call adds a notification. Notifications with `actions` or `component` are never merged.

```html
<div class="a_d_flex a_flex_wrap a_gap_2">
  <a-button
    class="a_btn a_btn_danger"
    text="_A_NOTIFICATION_EXAMPLE_ERROR_BTN_"
    @click="addError"
  />
  <a-button
    class="a_btn a_btn_secondary"
    text="_A_NOTIFICATION_EXAMPLE_ERROR_ALL_BTN_"
    @click="addErrorWithoutDeduplicate"
  />
</div>
```

```js
import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

export default {
  components: {
    AButton,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const addError = () => {
      addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_CONNECTION_",
        type: "danger",
      });
    };

    const addErrorWithoutDeduplicate = () => {
      addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_CONNECTION_",
        type: "danger",
        deduplicate: false,
      });
    };

    return {
      addError,
      addErrorWithoutDeduplicate,
    };
  },
};
```

## Close from code

`addNotification()` returns the id of the notification, `removeNotification(id)` closes it, e.g. "Saving…" after the answer of the server. `clearNotifications()` closes all notifications, `clearNotifications({ container })` only the notifications of one area.

```html
<div class="a_d_flex a_flex_wrap a_gap_2">
  <a-button
    class="a_btn a_btn_primary"
    text="_A_NOTIFICATION_EXAMPLE_SAVE_BTN_"
    @click="save"
  />
  <a-button
    class="a_btn a_btn_secondary"
    text="_A_NOTIFICATION_EXAMPLE_CLEAR_BTN_"
    @click="clearNotifications"
  />
</div>
```

```js
import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

export default {
  components: {
    AButton,
  },
  setup() {
    const {
      addNotification,
      clearNotifications,
      removeNotification,
    } = ANotificationAPI();

    const save = () => {
      const id = addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_SAVING_",
        type: "info",
        timeout: 0,
      });
      // e.g. after the answer of the server
      setTimeout(() => {
        removeNotification(id);
        addNotification({
          text: "_A_NOTIFICATION_EXAMPLE_SAVED_",
        });
      }, 2000);
    };

    return {
      clearNotifications,
      save,
    };
  },
};
```

## Own content

`component` shows an own component instead of the text. It gets `props`, the `notification` and `close()`. Title, actions and icon still work.

```html
<a-button
  class="a_btn a_btn_primary"
  text="_A_NOTIFICATION_EXAMPLE_UPLOAD_BTN_"
  @click="add"
/>
```

```js
import {
  h,
} from "vue";

import {
  AButton,
  ANotificationAPI,
  ATranslation,
} from "aloha-vue";

// own content: gets its props, the notification and close()
const UploadDone = {
  props: {
    close: {
      type: Function,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    notification: {
      type: Object,
      required: true,
    },
  },
  render() {
    return h("div", [
      h(ATranslation, {
        tag: "p",
        class: "a_mb_2",
        text: "_A_NOTIFICATION_EXAMPLE_UPLOAD_TEXT_",
        extra: { file: this.file },
      }),
      h(AButton, {
        class: "a_btn a_btn_primary a_btn_small",
        text: "_A_NOTIFICATION_EXAMPLE_UPLOAD_OPEN_",
        onClick: this.close,
      }),
    ]);
  },
};

export default {
  components: {
    AButton,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const add = () => {
      addNotification({
        component: UploadDone,
        props: { file: "report.pdf" },
        timeout: 0,
      });
    };

    return {
      add,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| has-progress | Boolean | false |  | Shows the remaining time of every notification with a timeout as a bar at its bottom. The bar stops while the notifications are paused. It is hidden from screen readers. |
| max | Number |  |  | At most so many notifications in this area, the oldest are closed. Without it there is no limit. |
| name | String |  |  | Name of the area: `addNotification({ container: name })` shows the notification in this area. Without a name the area shows the notifications without `container`. |
| placement | String | "top-center" |  | Edge of the window: `top-start`, `top-center`, `top-end`, `bottom-start`, `bottom-center`, `bottom-end`. `start` and `end` follow the direction of the text (RTL). |
| size | String |  |  | Fixed width: `small`, `large`, `xl` (CSS variables `--a_notification_width_*`). Without it the width is in percent of the window. Never wider than the window. |
| width | Number / String |  |  | Fixed width, a number is in px (`360`), a string is used as it is (`"25rem"`). Wins over `size`. |

## Functions of ANotificationAPI()

| name | description |
| --- | --- |
| addNotification(options) | Shows a notification and returns its id. The options are in the next table. |
| removeNotification(id) | Closes the notification with this id. |
| clearNotifications({ container }) | Closes all notifications, with `container` only the notifications of one area, e.g. on logout. |
| setNotificationTimeout(timeout) | Changes the default timeout of all notifications (5000 ms). |
| pauseNotifications(container) / resumeNotifications(container) | Stop and continue the timers of an area. `ANotification` calls them itself while the mouse or the focus is on its notifications. |

## Options of addNotification

| name | type | default | description |
| --- | --- | --- | --- |
| text | String / Object |  | Text, accepts a translation key and HTML (sanitized). An object becomes a list of its values, e.g. the errors of a form. |
| title | String |  | Title in bold above the text. Accepts a translation key. |
| type | String | "success" | `success`, `info`, `warning`, `danger` (`error` is the same as `danger`) or another color of `AAlert`. |
| timeout | Number | 5000 | Time in ms until the notification disappears. `0` keeps it until it is closed. The default is changed with `setNotificationTimeout`. |
| extra | Object |  | Values for the placeholders in the translations of `text`, `title` and `actions`. |
| alwaysTranslate | Boolean |  | Translates the texts even when the translation is switched off. |
| icon | String |  | Icon instead of the icon of the type, a name registered with `AIconPlugin`. |
| announce | String | "alert" | How a screen reader announces the notification, as the prop `announce` of `AAlert`: `alert` at once, `status` after the current sentence. |
| actions | Array |  | Buttons below the text: `[{ text, onClick, class, … }]`, other keys are props of `AButton`. A click calls `onClick({ notification, $event })` and closes the notification. |
| component | Object |  | Own component instead of the text. It gets `props`, `notification` and `close()`. |
| props | Object |  | Props of `component`. |
| container | String |  | Name of the area (`<a-notification name="…">`). Without it the notification goes to `<a-notification />` without name. |
| deduplicate | Boolean | true | The same notification is shown only once with the count (×2), and its timer restarts. Notifications with `actions` or `component` are never merged. |
| useValuesFromObject | Boolean | true | `false` passes an object in `text` to the translation as it is instead of making a list of its values. |

## CSS variables (`scss/utils/notification.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_notification_shadow` |  | Shadow of a notification. |
| `--a_notification_width` |  | Width of the notification area. 60% from the tablet breakpoint, 40% from the desktop breakpoint. |
| `--a_notification_left` |  | Distance of the notification area from the left window edge. Changes with the breakpoints. |
| `--a_notification_top` |  | Distance of the notification area from the top window edge. |
| `--a_notification_z_index` |  | Stacking order of the notification area. |
| `--a_notification_text_align` |  | Text alignment in the notification area. |
| `--a_notification_inset_x` |  | Distance from the window edge with the placements *-start and *-end and the largest width with size or width. |
| `--a_notification_bottom` |  | Distance of the notification area from the bottom window edge with the placements bottom-*. |
| `--a_notification_width_small` |  | Width with size="small". |
| `--a_notification_width_large` |  | Width with size="large". |
| `--a_notification_width_xl` |  | Width with size="xl". |
| `--a_notification_title_margin_bottom` |  | Space below the title. |
| `--a_notification_actions_gap` |  | Space between the action buttons. |
| `--a_notification_actions_margin_top` |  | Space above the action buttons. |
| `--a_notification_actions_justify` |  | Alignment of the action buttons (flex justify-content). |
| `--a_notification_progress_height` |  | Height of the bar with the remaining time (has-progress). |
| `--a_notification_progress_opacity` |  | Opacity of the bar with the remaining time, its color is the text color. |
| `--a_notification_transition_duration` |  | Duration of the appear and disappear animation (none with prefers-reduced-motion). |
| `--a_notification_transition_offset` |  | Distance of the appear and disappear animation. |
