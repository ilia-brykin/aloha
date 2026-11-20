# ALinkCopy (Copy Link)

The ALinkCopy component is a Vue.js component that provides a user interface to present a link and offers a button to copy the link text to the clipboard. This allows for easy and convenient sharing of URLs or other references by the users of your application. By clicking on the "Copy to clipboard" button, the text of the link is copied to the user's clipboard for quick and easy sharing.

## Customizing the Link

In this example, it's demonstrated how the component can be used in conjunction with the ALink component to set up links flexibly and copy their text to the clipboard. The ALink component is used to create and define the link itself.

*props: `link-options`*

```html
<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>
```

## CSS Classes

In this example, the use of the component with various CSS classes to customize its appearance is illustrated.

*props: `class`*

```html
<a-link-copy
  class="a_btn_group_small"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>
<a-link-copy
  class="a_btn_group_large a_ml_2"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>
```

## Customizing the Default Grouping Class in the Component

In this example, the option to adjust the default grouping class **class-default** in the component is demonstrated. This class is typically used to style the outer grouping of the component. You can overwrite the default class as needed or leave it blank if you don't want to use the default grouping.

*props: `class-default`*

```html
<a-link-copy
  :button-options="{ class: 'a_btn a_btn_secondary a_ml_3' }"
  class-default=""
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>
```

## Disabling Link and Button

In this example, it's shown how the component can be used to disable both the link and the associated button. Disabling ensures that the link can no longer be clicked and the button can't be triggered.

*props: `disabled`*

```html
<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  :disabled="true"
></a-link-copy>
```

## Copying Custom Text

In this example, it's shown how the component can be used to copy custom text instead of the default link text. The **text-copy** prop allows you to specify the text to be copied.

*props: `text-copy`*

```html
<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="github"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="Aloha"
></a-link-copy>
```

## Customizing the Button

In this example, it is shown how the component can be used to customize the button that serves to copy the link. The **button-options** prop allows defining properties and HTML attributes for the button using the AButton component.

*props: `button-options`*

```html
<a-link-copy
  :button-options="{ class: 'a_btn a_btn_primary', text: 'copy' }"
  :link-options="{ class: 'a_btn a_btn_primary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="github"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  :button-options="{ iconLeft: 'FloppyDisk' }"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>
```

## Button Position

The position of the button in the component can be adjusted with the **button-position** prop.

*props: `button-position`*

```html
<a-link-copy
  button-position="left"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  button-position="right"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>
```

## Customizing the Link with the 'link' Slot

In this example, it's shown how you can customize the text of the link in the component using the 'link' slot. The content of the 'link' slot is passed to the contained ALink component.

*slots: `link`*

```html
<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', href: 'https://github.com/' }"
>
  <template
    v-slot:link
  >
    <strong>github.com</strong>
  </template>
</a-link-copy>
```

## Customizing the Button with the 'button' Slot

The 'button' slot allows you to define the text of the button according to your own ideas. The content of the 'button' slot is passed to the contained AButton component.

*slots: `button`*

```html
<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', href: 'https://github.com/' }"
>
  <template
    v-slot:button
  >
    <strong>copy</strong>
  </template>
</a-link-copy>
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| button-options | Object | () => ({}) |  | Define properties and HTML attributes for the button using the AButton component. |
| button-position | String | right |  | Position of the button. You can use either **right** or **left**. |
| class | String / Object |  |  | CSS Classes |
| class-default | String | a_btn_group |  | The default CSS class for the outer grouping |
| disabled | Boolean |  |  | Disabling the component |
| link-options | Object | () => ({}) |  | The appearance and behavior of the link by defining all the properties and HTML attributes used within ALink. |
| textCopy | String |  |  | The text that should be copied in place of the default link text. |

## Slots

| name | description |
| --- | --- |
| button | The text of the button. The content of this slot is forwarded as button text to the AButton component. |
| link | The text of the link. The content of this slot is forwarded as link text to the ALink component. |

## Translations

| key | en |
| --- | --- |
| `_A_LINK_COPY_BTN_TITLE_` | Copy to clipboard |
| `_A_LINK_COPY_COPIED_TO_CLIPBOARD_` | Copied to clipboard |
