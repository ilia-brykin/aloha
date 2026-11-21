# Alert (warning)

Displays important alert messages.

## Basic usage

*props: `is-visible`*

```html
<a-alert
  html="AAlert"
  :is-visible="true"
></a-alert>
```

## Types

Displays the component in a different color scheme.

*props: `type`*

```html
<a-alert 
  html="Alert success" 
  :is-visible="true" 
  type="success"
>
</a-alert>
<a-alert 
  html="Alert info" 
  :is-visible="true" 
  type="info"
>
</a-alert>
<a-alert 
  html="Alert warning" 
  :is-visible="true" 
  type="warning"
>
</a-alert>
<a-alert 
  html="Alert danger" 
  :is-visible="true" 
  type="danger"
>
</a-alert>
<a-alert 
  html="Alert primary" 
  :is-visible="true" 
  type="primary"
>
</a-alert>
<a-alert 
  html="Alert secondary" 
  :is-visible="true" 
  type="secondary"
>
</a-alert>
<a-alert 
  html="Alert tertiary"
  :is-visible="true"
  type="tertiary"
>
</a-alert>
<a-alert 
  html="Alert dark" 
  :is-visible="true" 
  type="dark"
></a-alert>
<a-alert 
  html="Alert light" 
  :is-visible="true" 
  type="light"
></a-alert>
```

## With Icon

Displaying an icon improves readability.

*props: `show-icon`*

```html
<a-alert 
  html="Alert success" 
  :is-visible="true" 
  type="success"
  :show-icon="true"
>
</a-alert>
<a-alert 
  html="Alert info" 
  :is-visible="true" 
  type="info"
  :show-icon="true"
>
</a-alert>
<a-alert 
  html="Alert warning" 
  :is-visible="true" 
  type="warning"
  :show-icon="true"
>
</a-alert>
<a-alert 
  html="Alert danger" 
  :is-visible="true" 
  type="danger"
  :show-icon="true"
>
</a-alert>
```

## With custom icon

The parameter **icon** allows you to display any icon.

*props: `icon`, `show-icon`*

```html
<a-alert 
  html="Alert success" 
  :is-visible="true" 
  type="success"
  :show-icon="true"
  icon="Boxes"
>
</a-alert>
<a-alert 
  html="Alert info" 
  :is-visible="true" 
  type="info"
  :show-icon="true"
  icon="EyeFill"
>
</a-alert>
<a-alert 
  html="Alert warning" 
  :is-visible="true" 
  type="warning"
  :show-icon="true"
  icon="EyeSlash"
>
</a-alert>
<a-alert 
  html="Alert danger" 
  :is-visible="true" 
  type="danger"
  :show-icon="true"
  icon="House"
>
</a-alert>
<a-alert 
  html="Alert primary" 
  :is-visible="true" 
  type="primary"
  :show-icon="true"
  icon="Bell"
>
</a-alert>
```

## Additional CSS classes

You can change the appearance of individual elements in the component.

*props: `icon-class`, `alert-class`, `alert-content-class`*

```html
<a-alert 
  html="Alert success"
  :is-visible="true"
  type="success"
  :show-icon="true"
  icon-class="a_width_6 a_height_6"
  alert-class="a_p_5"
  alert-content-class="a_text_center"
>
</a-alert>
```

## Closable

The parameter **:closable="true"** adds a close function for the component.

*props: `closable`; emits: `close`*

```html
<div>
  <a-button
    v-if="!isAlertVisible"
    text="_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_SHOW_ALERT_"
    @click="showAlert"
  >
  </a-button>
</div>
<a-alert 
  html="Alert success"
  :is-visible="isAlertVisible"
  type="success"
  :closable="true"
  @close="hideAlert"
>
</a-alert>
```

```js
import {
  ref,
} from "vue";

import {
  AAlert,
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageAlertClosable",
  components: {
    AAlert,
    AButton,
  },
  setup() {
    const isAlertVisible = ref(true);

    const showAlert = () => {
      isAlertVisible.value = true;
    };

    const hideAlert = () => {
      isAlertVisible.value = false;
    };
    
    return {
      hideAlert,
      isAlertVisible,
      showAlert,
    };
  },
};
```

## Closing component with external control

The parameter **:closable-from-outside="true"** allows you to control the closing of the component from the outside.

*props: `closable`, `remove-alert-on-close`*

```html
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert success"
  type="success"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert info"
  type="info"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert warning"
  type="warning"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert danger"
  type="danger"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert primary"
  type="primary"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert secondary"
  type="secondary"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert tertiary"
  type="tertiary"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert dark"
  type="dark"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert light"
  type="light"
></a-alert>
```

## Text

The content of the component can be specified in Plain Text format using the **text** parameter.

*props: `text`*

```html
<a-alert 
  :text="text"
  :is-visible="true"
  type="primary"
>
</a-alert>
```

```js
import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertText",
  components: {
    AAlert,
  },
  setup() {
    const text = "Lorem ipsum dolor sit amet";
      
    return {
      text,
    };  
  },
};
```

## HTML

The parameter **html** allows you to display HTML. The content will be sanitized.

*props: `html`*

```html
<a-alert 
  :html="html"
  :is-visible="true"
  type="primary"
>
</a-alert>
```

```js
import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertHtml",
  components: {
    AAlert,
  },
  setup() {
    const html = `<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;
      
    return {
      html,
    };  
  },
};
```

## Safe HTML

The content of the component can be specified in HTML format using the **safe-html** parameter. This content is considered safe and will not be sanitized.

*props: `safe-html`*

```html
<a-alert 
  :html="html"
  :is-visible="true"
  type="primary"
>
</a-alert>
```

```js
import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertSafeHtml",
  components: {
    AAlert,
  },
  setup() {
    const html = `<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`;
      
    return {
      html,
    };  
  },
};
```

## AAlert component with customizable close button

The AAlert component allows the developer to customize various aspects of the notification, including the close button. By using the "btnCloseAttributes" prop, the properties of the close button can be changed.

*props: `btn-close-attributes`, `closable`*

```html
<a-alert 
  text="Aloha"
  :is-visible="true"
  type="success"
  :btn-close-attributes="{ class: 'a_btn_close a_fs_3' }"
  :closable="true"
></a-alert>
```

## Slot

Instead of an html parameter **html**, you can use a slot **default**.

*slots: `default`*

```html
<a-alert 
  :is-visible="true"
  type="success"
>
  <ul>
    <li>Aloha 1</li>
    <li>Aloha 2</li>
    <li>Aloha 3</li>
    <li>Aloha 4</li>
  </ul>
</a-alert>
```

## Exposes: Public Properties

*exposes: `close`, `isHidden`*

```html
<div
  class="a_btn_group"
>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_ALERT_GROUP_EXPOSES_BTN_CLOSE_"
    @click="closeAlert"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_ALERT_GROUP_EXPOSES_BTN_SHOW_"
    @click="showAlert"
  ></a-button>
</div>
<a-alert 
  ref="alertRef"
  alert-class="a_mt_3"
  html="Alert success"
  :is-visible="true"
  type="success"
  :closable="true"
  :remove-alert-on-close="true"
>
</a-alert>
```

```js
import {
  ref,
} from "vue";

import {
  AAlert,
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageAlertExposes",
  components: {
    AAlert,
    AButton,
  },
  setup() {
    const alertRef = ref(undefined);

    const closeAlert = () => {
      alertRef.value.close();
    };

    const showAlert = () => {
      alertRef.value.isHidden = false;
    };
    
    return {
      closeAlert,
      showAlert,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| alert-class | String / Object |  |  | Additional CSS class |
| alert-content-class | String / Object |  |  | Additional CSS class for content |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| aria-atomic | Boolean | true |  | Specifies whether the entire alert region should be announced by assistive technologies when its content changes. |
| btn-close-attributes | Object | {} |  | An object that defines the properties of the close button. |
| btn-close-icon | String | XLg |  | Icon of the close button. |
| closable | Boolean | false |  | Whether alert can be dismissed |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| html | String |  |  | HTML to be shown inside the component |
| icon | String |  |  | Icon. Any icon available for the **AIcon** component can be used |
| icon-class | String |  |  | Additional CSS class for the icon |
| is-visible | Boolean | false |  | Whether the component is shown |
| removeAlertOnClose | Boolean | false |  | Controlling the closure of an alert from outside a component |
| role | String | alert |  | Defines the ARIA role of the alert component. |
| safe-html | String |  |  | Safe HTML to be shown inside the component |
| show-icon | Boolean | false |  | Whether a type icon is displayed |
| text | String |  |  | Plain Text to be shown inside the component |
| text-close | String | _A_ALERT_CLOSE_ |  | The text for the close button to be read by the screen reader |
| type | String | danger |  | Alert type |

## Slots

| name | description |
| --- | --- |
| default | Content of the alert |

## Events

| name | type | description |
| --- | --- | --- |
| close | Function | Trigger when alert is closed |

## Exposes

| name | type | description |
| --- | --- | --- |
| close | Function | Function: close alert |
| isHidden | Boolean | Is the alert closed? |

## CSS variables (`scss/utils/alert.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_alert_bg` |  | Background. Set by the color classes (e.g. .a_alert_danger). |
| `--a_alert_padding_x` |  | Horizontal padding. A closable alert has three times this padding on the right for the close button. |
| `--a_alert_padding_y` |  | Vertical padding. |
| `--a_alert_margin_bottom` |  | Space below the alert. |
| `--a_alert_color` |  | Text color. Set by the color classes. |
| `--a_alert_border_color` |  | Border color. Set by the color classes. |
| `--a_alert_border` |  | Border shorthand (width, style, color). |
| `--a_alert_border_radius` |  | Corner radius. |
| `--a_alert_icon_size` |  | Size of the icon. |
| `--a_alert_icon_margin_right` |  | Space between the icon and the text. |
| `--a_alert_text_align` |  | Text alignment. |
| `--a_alert_link_color` |  | Color of a link inside the alert (.a_alert__link). Set by the color classes. |
