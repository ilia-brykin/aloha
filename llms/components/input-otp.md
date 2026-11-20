# AInputOtp (One-time code)

The **AInputOtp** component enters a one-time code (OTP), for example a confirmation code from an SMS or an authenticator app. Every character has its own cell, the model is a string.

Accessibility: the cells are a group (`role="group"`) named by the label, every cell has the name «Character 1 of 6». Help text and errors are connected with `aria-describedby`. The first cell has `autocomplete="one-time-code"`, so the browser can fill in a code from an SMS, the code is spread over all cells.

- A typed character moves the focus to the next cell.
- **Backspace**: deletes the character, in an empty cell the character of the previous cell.
- **Delete**: deletes the character of the cell.
- **Arrow left/right**, **Home**, **End**: move between the cells.
- Pasted text is spread over the cells, a whole code always from the first cell. Characters that are not allowed are skipped.

## Basic usage

*props: `model-value`, `label`*

```html
<a-input-otp
  v-model="model"
  label="Verification code"
></a-input-otp>
<div>model: {{ model }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpBasic",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("123");

    return {
      model,
    };
  },
};
```

## Length

**length** sets the number of cells (default 6).

*props: `length`*

```html
<a-input-otp
  v-model="modelPin"
  class="a_mb_3"
  :length="4"
  label="PIN"
></a-input-otp>
<a-input-otp
  v-model="modelLong"
  :length="8"
  label="Verification code"
></a-input-otp>
<div>modelPin: {{ modelPin }}</div>
<div>modelLong: {{ modelLong }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpLength",
  components: {
    AInputOtp,
  },
  setup() {
    const modelPin = ref("");
    const modelLong = ref("");

    return {
      modelLong,
      modelPin,
    };
  },
};
```

## Allowed characters

**char-type**: `numeric` (default, digits and the numeric keyboard), `alphanumeric` (letters and digits) or `any` (all characters except spaces). **is-uppercase** converts letters to upper case.

*props: `char-type`, `is-uppercase`*

```html
<a-input-otp
  v-model="modelNumeric"
  class="a_mb_3"
  label="char-type: numeric"
></a-input-otp>
<a-input-otp
  v-model="modelAlphanumeric"
  class="a_mb_3"
  char-type="alphanumeric"
  :is-uppercase="true"
  label="Voucher code"
></a-input-otp>
<a-input-otp
  v-model="modelAny"
  char-type="any"
  :length="4"
  label="char-type: any"
></a-input-otp>
<div>modelNumeric: {{ modelNumeric }}</div>
<div>modelAlphanumeric: {{ modelAlphanumeric }}</div>
<div>modelAny: {{ modelAny }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpCharType",
  components: {
    AInputOtp,
  },
  setup() {
    const modelNumeric = ref("");
    const modelAlphanumeric = ref("");
    const modelAny = ref("");

    return {
      modelAlphanumeric,
      modelAny,
      modelNumeric,
    };
  },
};
```

## Custom validation

**validator** is called for every character with `{ char, index }` and returns `true` if the character is allowed. It replaces **char-type**. **inputmode** chooses the keyboard on mobile devices.

*props: `validator`, `inputmode`*

```html
<a-input-otp
  v-model="modelHex"
  class="a_mb_3"
  :validator="validatorHex"
  :is-uppercase="true"
  inputmode="text"
  label="Color (hex)"
></a-input-otp>
<a-input-otp
  v-model="modelLetters"
  :validator="validatorLetters"
  :length="4"
  inputmode="text"
  label="Letters only"
></a-input-otp>
<div>modelHex: {{ modelHex }}</div>
<div>modelLetters: {{ modelLetters }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpValidator",
  components: {
    AInputOtp,
  },
  setup() {
    const modelHex = ref("");
    const modelLetters = ref("");
    const validatorHex = ({ char }) => /^[\da-f]$/i.test(char);
    const validatorLetters = ({ char }) => /^\p{L}$/u.test(char);

    return {
      modelHex,
      modelLetters,
      validatorHex,
      validatorLetters,
    };
  },
};
```

## Variants

**variant**: `outlined` (default), `filled` or `underlined`.

*props: `variant`*

```html
<a-input-otp
  v-for="variant in variants"
  :key="variant"
  v-model="model"
  class="a_mb_3"
  :variant="variant"
  :label="`variant: ${ variant }`"
></a-input-otp>
```

```js
import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpVariant",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("123");
    const variants = ["outlined", "filled", "underlined"];

    return {
      model,
      variants,
    };
  },
};
```

## Sizes

**size**: `small`, default or `large`. The sizes also follow the density (`data-a-density`).

*props: `size`*

```html
<a-input-otp
  v-model="model"
  class="a_mb_3"
  size="small"
  label="size: small"
></a-input-otp>
<a-input-otp
  v-model="model"
  class="a_mb_3"
  label="size: default"
></a-input-otp>
<a-input-otp
  v-model="model"
  size="large"
  label="size: large"
></a-input-otp>
```

```js
import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpSize",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("123");

    return {
      model,
    };
  },
};
```

## Mask and placeholder

With **mask** the characters are hidden (`type="password"`). **placeholder** is shown in every empty cell.

*props: `mask`, `placeholder`*

```html
<a-input-otp
  v-model="modelMask"
  class="a_mb_3"
  :mask="true"
  :length="4"
  label="PIN"
></a-input-otp>
<a-input-otp
  v-model="modelPlaceholder"
  placeholder="○"
  label="Verification code"
></a-input-otp>
<div>modelMask: {{ modelMask }}</div>
<div>modelPlaceholder: {{ modelPlaceholder }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpMask",
  components: {
    AInputOtp,
  },
  setup() {
    const modelMask = ref("12");
    const modelPlaceholder = ref("");

    return {
      modelMask,
      modelPlaceholder,
    };
  },
};
```

## Separator

**separator** is a string between all cells or a function `({ index }) => string` for the gap after the cell with the index, an empty string shows no separator. The slot **separator** gets `{ index }`. Separators are hidden from screen readers.

*props: `separator`*

```html
<a-input-otp
  v-model="model"
  class="a_mb_3"
  :length="4"
  separator="/"
  label="separator: /"
></a-input-otp>
<a-input-otp
  v-model="model"
  class="a_mb_3"
  :separator="separatorMiddle"
  label="separator: function"
></a-input-otp>
<a-input-otp
  v-model="model"
  label="slot separator"
>
  <template v-slot:separator="{ index }">
    <span v-if="index % 2 === 1">•</span>
  </template>
</a-input-otp>
```

```js
import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpSeparator",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("");
    const separatorMiddle = ({ index }) => (index === 2 ? "–" : "");

    return {
      model,
      separatorMiddle,
    };
  },
};
```

## Check the code

The event **finish** is emitted when all cells are filled. The example accepts the code `246810`. For another code it shows an error, clears the field and moves the focus to the first cell with the method **focus**.

*props: `finish`, `errors`*

```html
<a-input-otp
  ref="otpRef"
  v-model="model"
  :errors="errors"
  label="Verification code"
  @finish="onFinish"
  @update:model-value="onUpdateModel"
></a-input-otp>
<a-alert
  class="a_mt_3"
  :is-visible="isSuccess"
  type="success"
  text="The code is correct"
></a-alert>
```

```js
import {
  ref,
} from "vue";

import {
  AAlert,
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpFinish",
  components: {
    AAlert,
    AInputOtp,
  },
  setup() {
    const model = ref("");
    const errors = ref(undefined);
    const isSuccess = ref(false);
    const otpRef = ref(undefined);

    const onUpdateModel = () => {
      errors.value = undefined;
      isSuccess.value = false;
    };

    const onFinish = ({ model: code }) => {
      if (code === "246810") {
        errors.value = undefined;
        isSuccess.value = true;
        return;
      }
      errors.value = "_A_INPUT_OTP_EXAMPLE_ERROR_";
      model.value = "";
      otpRef.value.focus({ index: 0 });
    };

    return {
      errors,
      isSuccess,
      model,
      onFinish,
      onUpdateModel,
      otpRef,
    };
  },
};
```

## Help text and label description

**help-text** and **label-description** are connected to the group and the cells with `aria-describedby`.

*props: `help-text`, `label-description`*

```html
<a-input-otp
  v-model="model"
  label="Verification code"
  label-description="We sent the code to your phone"
  help-text="The code is valid for 10 minutes"
></a-input-otp>
```

```js
import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpHelpText",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("");

    return {
      model,
    };
  },
};
```

## Errors

**errors** shows the error text, marks all cells and sets `aria-invalid`.

*props: `errors`, `required`*

```html
<a-input-otp
  v-model="model"
  class="a_mb_3"
  :required="true"
  errors="The code is wrong"
  label="Verification code"
></a-input-otp>
<a-input-otp
  v-model="model"
  :required="true"
  variant="filled"
  errors="The code is wrong"
  label="Verification code"
></a-input-otp>
```

```js
import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpErrors",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("123456");

    return {
      model,
    };
  },
};
```

## Disabled and read-only

**disabled** disables all cells. **readonly** shows the value as text, with **mask** it shows **readonly-mask-symbol** for every character.

*props: `disabled`, `readonly`, `readonly-mask-symbol`*

```html
<a-input-otp
  v-for="variant in variants"
  :key="variant"
  v-model="model"
  class="a_mb_3"
  :disabled="true"
  :variant="variant"
  :label="`disabled, variant: ${ variant }`"
></a-input-otp>
<a-input-otp
  v-model="model"
  class="a_mb_3"
  :readonly="true"
  label="readonly"
></a-input-otp>
<a-input-otp
  v-model="model"
  :readonly="true"
  :mask="true"
  label="readonly, mask"
></a-input-otp>
```

```js
import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpDisabled",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("123456");
    const variants = ["outlined", "filled", "underlined"];

    return {
      model,
      variants,
    };
  },
};
```

## In a form

In **AForm** and **AGroup** the component is used with `type: "otp"`.

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
  name: "PageInputOtpForm",
  components: {
    AForm,
  },
  setup() {
    const model = ref({
      code: "",
      voucher: "",
    });
    const data = [
      {
        id: "code",
        type: "otp",
        label: "_A_INPUT_OTP_EXAMPLE_LABEL_",
        required: true,
      },
      {
        id: "voucher",
        type: "otp",
        label: "_A_INPUT_OTP_EXAMPLE_LABEL_VOUCHER_",
        charType: "alphanumeric",
        isUppercase: true,
        length: 8,
        separator: ({ index }) => (index === 3 ? "-" : ""),
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
| autocomplete | String | "one-time-code" |  | Value of `autocomplete` of the first cell. `one-time-code` lets the browser fill in a code from an SMS. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| char-type | String | "numeric" |  | Allowed characters: `numeric`, `alphanumeric` or `any` (without spaces). |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| exclude-render-attributes | Array | [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | Variables for translations. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | uniqueId("a_input_otp_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| input-attributes | Object | {} |  | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| input-class | String / Object |  |  | **CSS** class(es) applied to the input element. Allows styling the component according to your requirements. |
| inputmode | String |  |  | Keyboard on mobile devices (`inputmode` of the cells). By default `numeric` for char-type `numeric`, otherwise `text`. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| is-uppercase | Boolean | false |  | Converts letters to upper case. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| length | Number | 6 |  | Number of cells. |
| mask | Boolean | false |  | Hides the characters (`type="password"`). |
| model-dependencies | Object | {} |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-undefined | String / Number / Object / Array / Boolean | "" |  | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| model-value | String / Number |  |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| placeholder | String |  |  | Character that is shown in every empty cell. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String | "" |  | The default text that is shown if the value is missing in read-only mode. |
| readonly-mask-symbol | String | "*" |  | Symbol that is shown in read-only mode for every character if `mask` is set. |
| required | Boolean | false |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| separator | String / Function |  |  | Separator between the cells: a string or a function `({ index }) => string`. |
| size | String |  |  | Size of the cells: `small` or `large`. |
| type | String | "otp" |  | Type of the form element. Used by AForm to choose the component. |
| validator | Function |  |  | Function `({ char, index }) => Boolean` that checks every character. Replaces char-type. |
| variant | String | "outlined" |  | Look of the cells: `outlined`, `filled` or `underlined`. |

## Events

| name | type | description |
| --- | --- | --- |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
| finish | Function | Emitted when all cells are filled. Payload: `{ model }`. |
| focus | Function | Emitted when the focus moves into the component (not when it moves between the cells). |
| blur | Function | Emitted when the focus leaves the component. |

## Slots

| name | description |
| --- | --- |
| separator | Content of the separator after the cell with the index. Slot props: `{ index }`. |

## Methods

| name | description |
| --- | --- |
| focus | `focus({ index })` focuses the cell with the index, without an index the first empty cell. |
| blur | `blur()` removes the focus from the cells. |

## Translations

| key | en |
| --- | --- |
| `_A_INPUT_OTP_CHAR_{{index}}_{{length}}_` | Character {{index}} of {{length}} |

## CSS variables (`scss/components/ui/AInputOtp.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_input_otp_cell_width` |  | Width of a cell. |
| `--a_input_otp_cell_min_width` |  | Minimum width of a cell when the space is narrow. |
| `--a_input_otp_cell_height` |  | Height of a cell. |
| `--a_input_otp_font_size` |  | Font size of the characters. |
| `--a_input_otp_font_weight` |  | Font weight of the characters. |
| `--a_input_otp_gap` |  | Space between the cells and the separators. |
| `--a_input_otp_caret_color` |  | Color of the text cursor in a cell. |
| `--a_input_otp_placeholder_color` |  | Color of the placeholder character of an empty cell. |
| `--a_input_otp_cell_width_small` |  | Width of a cell for size "small". |
| `--a_input_otp_cell_height_small` |  | Height of a cell for size "small". |
| `--a_input_otp_font_size_small` |  | Font size of the characters for size "small". |
| `--a_input_otp_gap_small` |  | Space between the cells for size "small". |
| `--a_input_otp_cell_width_large` |  | Width of a cell for size "large". |
| `--a_input_otp_cell_height_large` |  | Height of a cell for size "large". |
| `--a_input_otp_font_size_large` |  | Font size of the characters for size "large". |
| `--a_input_otp_gap_large` |  | Space between the cells for size "large". |
| `--a_input_otp_filled_bg` |  | Background of a cell for variant "filled". |
| `--a_input_otp_filled_border_color` |  | Border color of a cell for variant "filled". |
| `--a_input_otp_filled_border_bottom_color` |  | Color of the line under a cell for variant "filled" (contrast at least 3:1). |
| `--a_input_otp_underline_width` |  | Width of the line under a cell for variant "underlined". |
| `--a_input_otp_separator_color` |  | Color of the separator between the cells. |
| `--a_input_otp_separator_font_size` |  | Font size of the separator between the cells. |
