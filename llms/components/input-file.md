# AInputFile (File upload)

The **AInputFile** component chooses files with a button or a dropzone, checks the type, the size and the number of the files, shows them in a list and shows the upload status of every file. The upload itself is done by your application.

Accessibility: the real file input is focusable, its name is the label and the text of the button, the hint with the allowed files is connected with `aria-describedby`. Added, removed and rejected files are announced (aria-live). Every file has a remove button with the file name, after removing the focus moves to the next file or to the input. The dropzone is an addition for the mouse, everything works with the keyboard as well.

## Basic usage

The model is an object with `name`, `size`, `type` and `file`. The list shows the name and the size; a file can be removed.

*props: `model-value`, `label`*

```html
<a-input-file
  v-model="model"
  label="Documents"
></a-input-file>
<div>model: {{ model ? model.name : "" }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileBasic",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};
```

## Several files

With `is-multiple` the model is an array. A new choice replaces the files; with `is-append` the files are added to the list.

*props: `is-multiple`, `is-append`*

```html
<a-input-file
  v-model="modelReplace"
  class="a_mb_4"
  :is-multiple="true"
  label="is-multiple"
></a-input-file>
<a-input-file
  v-model="modelAppend"
  :is-multiple="true"
  :is-append="true"
  label="is-multiple, is-append"
></a-input-file>
<div>modelAppend: {{ modelAppend.map(file => file.name) }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileMultiple",
  components: {
    AInputFile,
  },
  setup() {
    const modelReplace = ref([]);
    const modelAppend = ref([]);

    return {
      modelAppend,
      modelReplace,
    };
  },
};
```

## Dropzone

`is-dropzone` shows an area for dragging and dropping files. It is highlighted while files are dragged over it; the link in it opens the file dialog.

*props: `is-dropzone`, `drop-text`*

```html
<a-input-file
  v-model="model"
  :is-dropzone="true"
  :is-multiple="true"
  :is-append="true"
  label="Documents"
></a-input-file>
```

```js
import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileDropzone",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref([]);

    return {
      model,
    };
  },
};
```

## Allowed files

`accept` (extensions and MIME types), `max-size` (bytes) and `max-files` are checked for chosen and for dropped files. They are shown as a hint (`accept-text` replaces the list of types). Files that are not added are listed with the reason and emitted with the event `reject`.

*props: `accept`, `accept-text`, `max-size`, `max-files`, `is-hint`*

```html
<a-input-file
  v-model="model"
  :is-dropzone="true"
  :is-multiple="true"
  :is-append="true"
  accept=".pdf,.docx,image/*"
  accept-text="PDF, Word, images"
  :max-size="1024 * 1024"
  :max-files="3"
  label="Documents"
  @reject="onReject"
></a-input-file>
<div>reject: {{ rejected }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileRestrictions",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref([]);
    const rejected = ref([]);

    const onReject = ({ files }) => {
      rejected.value = files.map(({ name, reason }) => `${ name }: ${ reason }`);
    };

    return {
      model,
      onReject,
      rejected,
    };
  },
};
```

## Image preview

`is-preview` shows a small preview of images instead of the file icon.

*props: `is-preview`, `is-file-size`*

```html
<a-input-file
  v-model="model"
  :is-dropzone="true"
  :is-multiple="true"
  :is-append="true"
  :is-preview="true"
  accept="image/*"
  label="Photos"
></a-input-file>
```

```js
import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFilePreview",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref([]);

    return {
      model,
    };
  },
};
```

## Upload status

Set `progress` (0–100), `status` (`uploading`, `success`, `error`) and `errorText` in the items of the model, the list shows them. The example simulates the upload; a file with «error» in the name fails.

*props: `model-value`*

```html
<a-input-file
  :model-value="model"
  :is-dropzone="true"
  :is-multiple="true"
  :is-append="true"
  label="Documents"
  @update:model-value="onUpdateModel"
></a-input-file>
```

```js
import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileUpload",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref([]);

    // Simulated upload. In a real application send item.file, e.g. with FormData and AHttpAPI,
    // and set progress, status and errorText of the item.
    const upload = item => {
      item.status = "uploading";
      item.progress = 0;
      const TIMER = setInterval(() => {
        item.progress += 20;
        if (item.progress < 100) {
          return;
        }
        clearInterval(TIMER);
        if (/error/i.test(item.name)) {
          item.status = "error";
          item.errorText = "_A_INPUT_FILE_EXAMPLE_SERVER_ERROR_";
          return;
        }
        item.status = "success";
      }, 400);
    };

    const onUpdateModel = files => {
      model.value = files;
      model.value.forEach(item => {
        if (!item.status) {
          upload(item);
        }
      });
    };

    return {
      model,
      onUpdateModel,
    };
  },
};
```

## Existing files and read-only

Files from the server need only `name`, `size` and `url`: the name becomes a link. `is-removable` hides the remove buttons, `readonly` shows only the list.

*props: `model-value`, `readonly`, `is-removable`*

```html
<a-input-file
  v-model="model"
  class="a_mb_4"
  :is-multiple="true"
  :is-append="true"
  label="Documents"
></a-input-file>
<a-input-file
  v-model="model"
  class="a_mb_4"
  :is-multiple="true"
  :is-removable="false"
  label="is-removable: false"
></a-input-file>
<a-input-file
  v-model="model"
  :is-multiple="true"
  :readonly="true"
  label="readonly"
></a-input-file>
```

```js
import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileLinks",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref([
      {
        name: "Contract.pdf",
        size: 245760,
        url: "./assets/Tennis_ball_purple_background.png",
      },
      {
        name: "Invoice 2026-11.pdf",
        size: 81920,
        url: "./assets/Tennis_ball_purple_background.png",
      },
    ]);

    return {
      model,
    };
  },
};
```

## Texts and errors

Like all form elements: `label-description`, `help-text`, `errors` and `required`. `text` changes the text of the button.

*props: `help-text`, `label-description`, `errors`, `required`, `text`*

```html
<a-input-file
  v-model="model"
  class="a_mb_4"
  :required="true"
  label="Documents"
  label-description="The signed contract"
  help-text="Scan all pages into one file"
  text="Upload contract"
></a-input-file>
<a-input-file
  v-model="model"
  :is-dropzone="true"
  :required="true"
  errors="Please add the contract"
  label="Documents"
></a-input-file>
```

```js
import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileHelpText",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};
```

## Disabled

*props: `disabled`*

```html
<a-input-file
  v-model="model"
  class="a_mb_4"
  :disabled="true"
  label="Documents"
></a-input-file>
<a-input-file
  v-model="model"
  :disabled="true"
  :is-dropzone="true"
  label="Documents"
></a-input-file>
```

```js
import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileDisabled",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref({
      name: "Contract.pdf",
      size: 245760,
    });

    return {
      model,
    };
  },
};
```

## In AForm

In **AForm** the component is used with `type: "file"`.

*props: `type`*

```html
<a-form
  v-model="model"
  :data="data"
></a-form>
```

```js
import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  name: "PageInputFileForm",
  components: {
    AForm,
  },
  setup() {
    const model = ref({
      contract: undefined,
      attachments: [],
    });
    const data = [
      {
        id: "contract",
        type: "file",
        label: "_A_INPUT_FILE_EXAMPLE_LABEL_CONTRACT_",
        accept: ".pdf",
        required: true,
      },
      {
        id: "attachments",
        type: "file",
        label: "_A_INPUT_FILE_EXAMPLE_LABEL_ATTACHMENTS_",
        isDropzone: true,
        isMultiple: true,
        isAppend: true,
        maxFiles: 5,
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
| accept | String | "" |  | Allowed files: extensions (.pdf), MIME types (application/pdf) and MIME groups (image/*), separated by commas. Checked for chosen and dropped files. |
| accept-text | String |  |  | Own text of the allowed files in the hint instead of the list of accept. |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| change | Function | () => {} |  | Function called when the model changes. It accepts the new model value and additional parameters for processing the change. |
| dependencies | Array / Object |  |  | Specifies dependencies that may affect the visibility or behavior of the component based on the values of other elements. |
| disabled | Boolean |  |  | Determines whether the component is disabled. If set to **true**, the component becomes inactive and the user cannot interact with it. |
| drop-text | String |  |  | Text of the dropzone before the link. |
| errors | String / Array |  |  | Contains text or an array of errors that should be displayed to the user. If there are errors, they are displayed below the component. |
| exclude-render-attributes | Array | [] |  | Array of attributes that should not be rendered for this component. Useful for excluding unnecessary attributes from the final **DOM**. |
| extra | Object |  |  | Variables for translations. |
| help-text | String |  |  | Help text displayed below the component. Provides the user with additional information or instruction. |
| html-id | String |  |  | Sets the **HTML ID** of the element. Can be used to uniquely identify the component on the page. |
| id | String / Number | uniqueId("a_ui_") |  | The identifier of the component, which can be used to track or refer to the component in the code. |
| id-prefix | String |  |  | Prefix for the component's **ID**. Used to create a unique identifier based on the specified prefix. |
| input-attributes | Object | {} |  | An object of attributes applied directly to the input element. Allows adding or customizing additional input attributes. |
| input-class | String / Object |  |  | **CSS** class(es) applied to the input element. Allows styling the component according to your requirements. |
| is-append | Boolean | false |  | With is-multiple: new files are added to the list instead of replacing it. |
| is-dropzone | Boolean | false |  | Shows an area for dragging and dropping files. |
| is-file-size | Boolean | true |  | Shows the size of the files in the list. |
| is-hide | Boolean |  |  | Determines whether the component should be hidden. If set to **true**, the component is not displayed on the page. |
| is-hint | Boolean | true |  | Shows the hint with accept, max-size and max-files. |
| is-multiple | Boolean | false |  | Several files can be chosen; the model is an array. |
| is-preview | Boolean | false |  | Shows a preview of images. |
| is-removable | Boolean | true |  | Shows a remove button for every file. |
| is-render | Boolean | true |  | Indicates whether the component should be rendered. If set to **false**, the component will not be created in the **DOM**. |
| label | String / Number |  |  | Label text displayed next to the component. Typically used to describe the purpose of the input element. |
| label-class | String / Object |  |  | **CSS** class(es) applied to the label. Allows customizing the label's style. |
| label-description | String |  |  | Additional description displayed next to the component label. Helps the user better understand the purpose of the field. |
| label-screen-reader | String / Number |  |  | Label intended for screen readers. Useful for improving accessibility. |
| max-files | Number |  |  | With is-multiple: the maximum number of files. |
| max-size | Number |  |  | The maximum size of a file in bytes. |
| model-dependencies | Object | {} |  | Determines model dependencies that may affect the visibility or behavior of the component. |
| model-undefined | String / Number / Object / Array / Boolean | "" |  | The value used to reset the model to an undefined state. Useful for clearing the model value. |
| model-value | Object / Array |  |  | The current model value associated with the component. Used to manage the data displayed in the component. |
| readonly | Boolean |  |  | Enables read-only mode, where the value is displayed as text without the possibility of editing. |
| readonly-default | String | "" |  | The default text that is shown if the value is missing in read-only mode. |
| required | Boolean | false |  | Indicates whether the component is required. If set to **true**, the component requires user input. |
| text | String |  |  | Text of the button. By default «Choose file» or «Choose files». |
| type | String | "input" |  | Type of the form element. |

## Events

| name | type | description |
| --- | --- | --- |
| update:model-value | Function | Event triggered when the component's model value is updated. Used to synchronize data between the component and the parent component. |
| reject | Function | Files were not added. Gets **{ files }**, every file with name, file, reason (type, size, count) and text. |
| remove | Function | A file was removed. Gets **{ model, index }**. |
| focus | Function | The file input gets the focus. |
| blur | Function | The file input loses the focus. |

## Model

| name | type | description |
| --- | --- | --- |
| name | String | Name of the file. |
| size | Number | Size in bytes. |
| type | String | MIME type. |
| file | File | The chosen File object (for the upload). |
| url | String | Link to the file: the name becomes a link. |
| download | Boolean | The link downloads the file instead of opening it. |
| previewUrl | String | Own preview image (with is-preview). |
| status | String | Upload status: uploading, success or error. |
| progress | Number | Upload progress 0–100. Without a value while uploading the bar is indeterminate. |
| errorText | String | Error text of the upload. |

## Translations

| key | en |
| --- | --- |
| `_A_INPUT_FILE_SELECT_FILE_` | Choose file |
| `_A_INPUT_FILE_SELECT_FILES_` | Choose files |
| `_A_INPUT_FILE_DROP_TEXT_` | Drag and drop files here or |
| `_A_INPUT_FILE_DROP_TEXT_FILE_` | Drag and drop a file here or |
| `_A_INPUT_FILE_HINT_ACCEPT_{{accept}}_` | Allowed: {{accept}} |
| `_A_INPUT_FILE_HINT_MAX_SIZE_{{size}}_` | Max. {{size}} per file |
| `_A_INPUT_FILE_HINT_MAX_FILES_{{count}}_` | Max. {{count}} files |
| `_A_INPUT_FILE_ERROR_TYPE_` | This file type is not allowed |
| `_A_INPUT_FILE_ERROR_SIZE_{{size}}_` | The file is larger than {{size}} |
| `_A_INPUT_FILE_ERROR_MAX_FILES_{{count}}_` | Too many files (max. {{count}}) |
| `_A_INPUT_FILE_ADDED_{{count}}_` | Files added: {{count}}. |
| `_A_INPUT_FILE_REJECTED_{{count}}_` | Files not added: {{count}}. |
| `_A_INPUT_FILE_REMOVED_{{name}}_` | {{name}} removed. |
| `_A_INPUT_FILE_REMOVE_{{name}}_` | Remove {{name}} |
| `_A_INPUT_FILE_REJECTED_HEADER_` | These files were not added |
| `_A_INPUT_FILE_REJECTED_CLOSE_` | Close message |
| `_A_INPUT_FILE_UPLOADING_{{name}}_` | Uploading {{name}} |
| `_A_INPUT_FILE_UPLOADED_` | Uploaded |
| `_A_INPUT_FILE_UPLOAD_ERROR_` | Upload failed |

## CSS variables (`scss/components/ui/AInputFile.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_input_file_gap` |  | Space between the elements. |
| `--a_input_file_hint_color` |  | Color of the hint, of the file size and of the file icon. |
| `--a_input_file_link_color` |  | Color of the "choose" link in the dropzone. |
| `--a_input_file_link_hover_color` |  | Color of the "choose" link in the dropzone on hover. |
| `--a_input_file_disabled_color` |  | Text and icon color of a disabled component. |
| `--a_input_file_disabled_bg` |  | Background of a disabled dropzone. |
| `--a_input_file_dropzone_padding` |  | Padding of the dropzone. |
| `--a_input_file_dropzone_bg` |  | Background of the dropzone. |
| `--a_input_file_dropzone_border_width` |  | Width of the dashed border of the dropzone. |
| `--a_input_file_dropzone_border_color` |  | Color of the dashed border of the dropzone (contrast at least 3:1). |
| `--a_input_file_dropzone_border_radius` |  | Corner radius of the dropzone. |
| `--a_input_file_dropzone_icon_size` |  | Size of the icon in the dropzone. |
| `--a_input_file_dropzone_icon_color` |  | Color of the icon in the dropzone. |
| `--a_input_file_dropzone_active_bg` |  | Background of the dropzone while files are dragged over it. |
| `--a_input_file_dropzone_active_border_color` |  | Border color of the dropzone while files are dragged over it. |
| `--a_input_file_item_padding` |  | Padding of a file in the list. |
| `--a_input_file_item_bg` |  | Background of a file in the list. |
| `--a_input_file_item_border_color` |  | Border color of a file in the list. |
| `--a_input_file_item_border_radius` |  | Corner radius of a file in the list. |
| `--a_input_file_preview_size` |  | Size of the image preview. |
| `--a_input_file_progress_height` |  | Height of the upload progress bar. |
