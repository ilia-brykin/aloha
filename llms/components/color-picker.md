# AColorPicker (Color picker)

The **AColorPicker** component selects a color in a dialog: saturation and brightness area, hue and opacity sliders, a text field for any color format and predefined colors. The field looks like an input that is filled with the selected color; the text color is chosen automatically for the best contrast. The model is changed only with **OK**. In **AForm** the component is used with `type: "colorPicker"`; `type: "color"` stays the native ``.

Accessibility: the field is a button with `aria-haspopup="dialog"`, its name contains the label and the current value. The dialog has `role="dialog"`, the focus stays inside and goes back to the field after closing.

- **Enter**, **Space**, **Arrow down**: open the dialog.
- Saturation and brightness area: **Arrow left/right** saturation, **Arrow up/down** brightness, **Shift** + arrow: steps of 10, **Home** / **End**, **Page up** / **Page down**.
- Hue and opacity: arrows, **Shift** + arrow, **Home** / **End**.
- Text field: **Enter** applies the typed value.
- **Escape** closes the dialog without changes.

## Basic usage

*props: `model-value`, `label`*

```html
<a-color-picker
  v-model="model"
  label="Color"
></a-color-picker>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerBasic",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("#0775b0");

    return {
      model,
    };
  },
};
```

## Label position

**label-position** sets where the label is shown: `"float"` – inside the empty field, it moves to the border on focus or with a value; `"inset"` – always inside the field, small above the value; `"top"` – above the field. The default for all form elements is set with **AFormPlugin** (`labelPosition`). **is-label-float** still works, but is deprecated.

*props: `label-position`*

```html
<a-color-picker
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-color-picker>
<a-color-picker
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-color-picker>
<a-color-picker
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-color-picker>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerLabelPosition",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("#0775b0");

    return {
      model,
    };
  },
};
```

## Opacity

With **show-alpha** the dialog shows an opacity slider. Hex values get the alpha channel as `#rrggbbaa`.

*props: `show-alpha`*

```html
<a-color-picker
  v-model="model"
  label="Color"
  :show-alpha="true"
></a-color-picker>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerShowAlpha",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("#0775b080");

    return {
      model,
    };
  },
};
```

## Color formats

**color-formats** is a format or an array of formats: `hex`, `rgb`, `hsl`, `hsv`. With several formats the dialog has a switch next to the text field that changes the format in the given order. When the dialog opens, the format of the current value is used if it is in the list, otherwise the first format. The model is written in the chosen format.

*props: `color-formats`*

```html
<a-color-picker
  v-model="model"
  label="hex, rgb, hsl, hsv"
  :color-formats="['hex', 'rgb', 'hsl', 'hsv']"
  :show-alpha="true"
></a-color-picker>
<div>model: {{ model }}</div>
<a-color-picker
  v-model="modelRgb"
  color-formats="rgb"
  label="rgb"
></a-color-picker>
<div>model: {{ modelRgb }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerColorFormat",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("hsl(145, 63%, 29%)");
    const modelRgb = ref("rgb(7, 117, 176)");

    return {
      model,
      modelRgb,
    };
  },
};
```

## Predefined colors

**predefine** shows a list of colors that can be chosen with one click. Invalid values are ignored.

*props: `predefine`*

```html
<a-color-picker
  v-model="model"
  label="Color"
  :predefine="predefine"
></a-color-picker>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerPredefine",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref(undefined);
    const predefine = [
      "#0775b0",
      "#2f3474",
      "#8138b2",
      "#1b7942",
      "#0c8097",
      "#fa9c0f",
      "#c81e29",
      "rgb(0, 0, 0)",
      "hsl(0, 0%, 100%)",
    ];

    return {
      model,
      predefine,
    };
  },
};
```

## Help text and label description

**help-text** and **label-description** are connected to the field with `aria-describedby`.

*props: `help-text`, `label-description`*

```html
<a-color-picker
  v-model="model"
  label="Color"
  label-description="Brand color of the product"
  label-position="top"
  help-text="Choose a color with enough contrast"
></a-color-picker>
```

```js
import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerHelpText",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("#1b7942");

    return {
      model,
    };
  },
};
```

## Errors

**errors** shows the error text and sets `aria-invalid`, **error-icon** adds an icon.

*props: `errors`, `error-icon`, `required`*

```html
<a-color-picker
  v-model="model"
  label="Color"
  :required="true"
  errors="Please choose a color"
  :error-icon="errorIcon"
></a-color-picker>
```

```js
import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerErrors",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref(undefined);
    const errorIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>…</svg>";

    return {
      errorIcon,
      model,
    };
  },
};
```

## Disabled and read-only

**disabled** disables the field, **readonly** shows the value with a color swatch.

*props: `disabled`, `readonly`*

```html
<a-color-picker
  v-model="model"
  label="disabled"
  :disabled="true"
></a-color-picker>
<a-color-picker
  v-model="model"
  label="readonly"
  :readonly="true"
></a-color-picker>
```

```js
import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerDisabled",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("#c81e29");

    return {
      model,
    };
  },
};
```

## In a form

In **AForm** and **AGroup** the component is used with `type: "colorPicker"`. `type: "color"` renders the native browser color input.

*props: `type`*

```html
<a-form
  v-model="model"
  :data="data"
></a-form>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  name: "PageColorPickerForm",
  components: {
    AForm,
  },
  setup() {
    const model = ref({
      brand: "#0775b0",
      native: "#c81e29",
    });
    const data = [
      {
        id: "brand",
        type: "colorPicker",
        label: "colorPicker",
        showAlpha: true,
        predefine: ["#0775b0", "#1b7942", "#c81e29"],
      },
      {
        id: "native",
        type: "color",
        label: "color",
      },
    ];

    return {
      data,
      model,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| clear-button-class | String / Object |  |  | Specifies the **CSS** class that will be applied to the clear button. This allows customization of the button's appearance according to design requirements. |
| color-formats | String / Array | "hex" |  | Format or array of formats of the model value (hex, rgb, hsl, hsv). Several formats show a switch in the dialog. |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| error-icon | String / Object |  |  | Specifies the icon displayed when the component has validation errors. If the component has an input field, the icon is shown inside it; otherwise, it is displayed next to the control. The icon is shown only when **errors** is present. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| exclude-render-attributes | Array | () => [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | () => uniqueId("a_input_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| is-clear-button | Boolean | true |  | Determines whether the clear button should be displayed. If **true**, a button will be shown next to the text field, allowing the user to clear its content. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-label-float | Boolean |  |  | Determines whether the label of the component should be positioned above the field. If **true**, the label will move above the text field when focused or when content is present. Deprecated, use label-position. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-position | "float" / "inset" / "top" | "float" |  | Position of the label: "float", "inset" or "top". The default comes from the component plugin or AFormPlugin (labelPosition). |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| model-dependencies | Object | () => ({}) |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-undefined | String / Number / Object / Array / Boolean |  |  | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| model-value | String | undefined |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| panel-default-color | String | "#ff0000" |  | Color that the dialog shows when the model is empty. |
| placement | String | "bottom-start" |  | Position of the dialog relative to the field. |
| predefine | Array | () => [] |  | List of predefined colors in any supported format. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String |  |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean |  |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| show-alpha | Boolean | false |  | Shows the opacity slider and writes the alpha channel into the model. |
| type | String | "colorPicker" |  | Type of the form element. Used by AForm to choose the component. |

## Events

| name | type | description |
| --- | --- | --- |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
| focus | Function | Event triggered when the component gains focus. Useful for tracking user interaction with the element. |
| open | Function | Emitted when the dialog is opened. |
| close | Function | Emitted when the dialog is closed. |
| blur | Function | Event triggered when the component loses focus. Used to validate or save data when the user leaves the field. |

## Translations

| key | en |
| --- | --- |
| `_A_COLOR_PICKER_ALPHA_` | Opacity |
| `_A_COLOR_PICKER_CLEAR_` | Clear |
| `_A_COLOR_PICKER_CONFIRM_` | OK |
| `_A_COLOR_PICKER_DIALOG_` | Choose color |
| `_A_COLOR_PICKER_EMPTY_` | No color selected |
| `_A_COLOR_PICKER_FORMAT_SWITCH_{{format}}_{{next}}_` | Color format {{format}}, switch to {{next}} |
| `_A_COLOR_PICKER_HUE_` | Hue |
| `_A_COLOR_PICKER_INPUT_{{format}}_` | Color value ({{format}}) |
| `_A_COLOR_PICKER_INVALID_` | Invalid color value. Allowed: #rrggbb, rgb(), hsl(), hsv(). |
| `_A_COLOR_PICKER_PREDEFINE_` | Predefined colors |
| `_A_COLOR_PICKER_SATURATION_` | Saturation and brightness |
| `_A_COLOR_PICKER_SATURATION_VALUE_{{saturation}}_{{brightness}}_` | Saturation {{saturation}} %, brightness {{brightness}} % |

## CSS variables (`scss/components/ui/AColorPicker.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_color_picker_checker` |  | Checkerboard background shown behind transparent colors. |
| `--a_color_picker_swatch_border_color` |  | Border color of the color swatches. |
| `--a_color_picker_popup_width` |  | Width of the picker dialog. |
| `--a_color_picker_popup_padding` |  | Padding of the picker dialog. |
| `--a_color_picker_popup_gap` |  | Space between the parts of the picker dialog. |
| `--a_color_picker_popup_bg` |  | Background of the picker dialog. Also used behind float labels in the dialog. |
| `--a_color_picker_popup_border_color` |  | Border color of the picker dialog. |
| `--a_color_picker_popup_border_radius` |  | Corner radius of the picker dialog. |
| `--a_color_picker_popup_shadow` |  | Shadow of the picker dialog. |
| `--a_color_picker_popup_z_index` |  | Stack order of the picker dialog. |
| `--a_color_picker_saturation_height` |  | Height of the saturation and brightness area. |
| `--a_color_picker_slider_height` |  | Height of the hue and alpha sliders. |
| `--a_color_picker_thumb_size` |  | Size of the slider handles. |
| `--a_color_picker_predefine_size` |  | Size of a predefined color. |
| `--a_color_picker_predefine_selected_color` |  | Ring color of the selected predefined color. |
