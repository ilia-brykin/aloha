# ATemplate (Template)

The **ATemplate** component is used as a universal slot for components such as **[AFieldset](fieldset.md)** and **[AForm](form.md)**. It extends the functionality of these components by providing flexibility to display custom content using slots and passing data through properties.

## Using **HTML**

This example demonstrates how to use **html** to render **HTML** content inside the **ATemplate** component. The **HTML** code is safely displayed within the component.

*props: `html`*

```html
<a-template
  :html="html"
></a-template>
```

```js
import {
  ATemplate,
} from "aloha-vue";
    
export default {
  name: "PageTemplateHtml",
  components: {
    ATemplate,
  },
  setup() {
    const html = "<ul><li>Aloha 1</li><li>Aloha 2</li></ul>";
    
    return {
      html,
    };
  },
};
```

## Slot

This example demonstrates how to use **slot-name** and **options** in the **ATemplate** component. The slot receives the **options** parameters, as well as all component props, which can be used to configure the displayed content.

*props: `slot-name`, `options`*

```html
<a-template
  :options="{ id: 'template', text: 'Aloha' }"
  slot-name="aloha"
>
  <template
    v-slot:aloha="{ options, props }"
  >
    <div
      :id="options.id"
    >{{ options.text }}</div>
  </template>
</a-template>
```

## Using a template in **AFieldset**

This example demonstrates how to use the **template** slot in the **AFieldset** component. One of the child elements is a template that is rendered through the **template** slot. In this example, a button with the text **'Aloha'** is displayed inside the template.

```html
<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
>
  <template
    v-slot:template
  >
    <a-element
      class="a_btn a_btn_primary"
      text="Aloha"
      type="button"
    ></a-element>
  </template>
</a-fieldset>
```

```js
import {
  ref,
} from "vue";

import {
  AElement,
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageTemplateFieldset",
  components: {
    AElement,
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text",
      },
      {
        type: "template",
        slotName: "template",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| exclude-render-attributes | Array | () => [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| html | String |  |  | **HTML** content that will be safely rendered inside the component. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| options | String / Number / Object / Array / Boolean |  |  | Any data to pass into the slot. |
| slot-name | String |  |  | The name of the slot where the custom content will be passed. |
