import {
  computed,
  h,
  nextTick,
  ref,
  toRef,
} from "vue";
import {
  AFormLabelDescription,
  AFormReadonly,
} from "../../index";

import AButton from "../../AButton/AButton";
import AErrorsText from "../AErrorsText/AErrorsText";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import AIcon from "../../AIcon/AIcon";
import ALabel from "../ALabel/ALabel";
import AProgress from "../../AProgress/AProgress";
import ATranslation from "../../ATranslation/ATranslation";

import DropAPI from "./compositionAPI/DropAPI";
import FilesAPI from "./compositionAPI/FilesAPI";
import HintAPI from "./compositionAPI/HintAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import PreviewAPI from "./compositionAPI/PreviewAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";
import {
  getTranslatedText,
} from "../../ATranslation/compositionAPI/UtilsAPI";

import UiMixinProps from "../mixins/UiMixinProps";
import filterFileSize from "../../filters/filterFileSize";
import {
  CheckCircle,
  Close,
  ExclamationCircle,
  FileEarmark,
  Upload,
} from "./utils/icons";
import {
  isNil,
} from "lodash-es";

export default {
  name: "AInputFile",
  inheritAttrs: false,
  mixins: [
    UiMixinProps,
  ],
  props: {
    accept: {
      type: String,
      required: false,
      default: "",
    },
    acceptText: {
      type: String,
      required: false,
      default: undefined,
    },
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    dropText: {
      type: String,
      required: false,
      default: undefined,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    isAppend: {
      type: Boolean,
      required: false,
    },
    isDropzone: {
      type: Boolean,
      required: false,
    },
    isFileSize: {
      type: Boolean,
      required: false,
      default: true,
    },
    isHint: {
      type: Boolean,
      required: false,
      default: true,
    },
    isMultiple: {
      type: Boolean,
      required: false,
    },
    isPreview: {
      type: Boolean,
      required: false,
    },
    isRemovable: {
      type: Boolean,
      required: false,
      default: true,
    },
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    maxFiles: {
      type: Number,
      required: false,
      default: undefined,
    },
    maxSize: {
      type: Number,
      required: false,
      default: undefined,
    },
    modelUndefined: {
      required: false,
      default: "",
    },
    modelValue: {
      type: [String, Number, Object, Array],
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    readonlyDefault: {
      type: String,
      required: false,
      default: "",
    },
    readonlyValueParentClass: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    text: {
      type: String,
      required: false,
      default: undefined,
    },
    type: {
      type: String,
      required: false,
      default: "input",
    },
  },
  emits: [
    "blur",
    "focus",
    "reject",
    "remove",
    "update:modelValue",
  ],
  setup(props, context) {
    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    const inputRef = ref(undefined);
    const listRef = ref(undefined);

    const setFocus = () => {
      inputRef.value?.focus();
    };

    const {
      ariaDescribedbyLocal,
      changeModel,
      clearModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      labelDescriptionId,
      onBlur,
      onFocus,
    } = UiAPI(props, context, {
      setFocus,
    });

    const {
      isModel,
      modelValueListLocal,
    } = ModelAPI(props);

    const {
      hintId,
      hintParts,
      maxSizeText,
    } = HintAPI(props, {
      htmlIdLocal,
    });

    const {
      getPreviewUrl,
      releasePreviewUrl,
    } = PreviewAPI(props);

    const {
      addFiles,
      closeRejected,
      liveMessage,
      onInput,
      rejectedFiles,
      removeFile,
    } = FilesAPI(props, {
      changeModel,
      clearModel,
      emit: context.emit,
      maxSizeText,
      modelValueListLocal,
      releasePreviewUrl,
    });

    const {
      isDragOver,
      onDragenter,
      onDragleave,
      onDragover,
      onDrop,
    } = DropAPI(props, {
      addFiles,
    });

    const isMultiple = toRef(props, "isMultiple");
    const text = toRef(props, "text");

    const textLocal = computed(() => {
      if (text.value) {
        return text.value;
      }
      return isMultiple.value ? "_A_INPUT_FILE_SELECT_FILES_" : "_A_INPUT_FILE_SELECT_FILE_";
    });

    const label = toRef(props, "label");
    const buttonTextId = computed(() => `${ htmlIdLocal.value }_button_text`);
    // The input is named by the label of the field and by the text of the button
    const ariaLabelledbyInput = computed(() => {
      return label.value ? `${ htmlIdLocal.value }_label ${ buttonTextId.value }` : buttonTextId.value;
    });

    const dropText = toRef(props, "dropText");
    const dropTextLocal = computed(() => {
      if (dropText.value) {
        return dropText.value;
      }
      return isMultiple.value ? "_A_INPUT_FILE_DROP_TEXT_" : "_A_INPUT_FILE_DROP_TEXT_FILE_";
    });

    const ariaDescribedbyInput = computed(() => {
      const IDS = [];
      if (hintParts.value.length) {
        IDS.push(hintId.value);
      }
      if (ariaDescribedbyLocal.value) {
        IDS.push(ariaDescribedbyLocal.value);
      }
      return IDS.join(" ") || undefined;
    });

    // After removing, the focus goes to the next remove button, otherwise to the input
    const onRemove = async({ index }) => {
      removeFile({ index });
      await nextTick();
      const BUTTONS = listRef.value?.querySelectorAll(".a_input_file__remove") || [];
      const BUTTON = BUTTONS[Math.min(index, BUTTONS.length - 1)];
      if (BUTTON) {
        BUTTON.focus();
      } else {
        setFocus();
      }
    };

    return {
      addFiles,
      ariaDescribedbyInput,
      ariaLabelledbyInput,
      buttonTextId,
      attributesToExcludeFromRender,
      closeRejected,
      componentStyleHide,
      dropTextLocal,
      errorsId,
      getPreviewUrl,
      helpTextId,
      hintId,
      hintParts,
      htmlIdLocal,
      inputRef,
      isDragOver,
      isErrors,
      isModel,
      labelDescriptionId,
      listRef,
      liveMessage,
      modelValueListLocal,
      onBlur,
      onDragenter,
      onDragleave,
      onDragover,
      onDrop,
      onFocus,
      onInput,
      onRemove,
      rejectedFiles,
      textLocal,
    };
  },
  methods: {
    renderFileName({ model, tag = "span" }) {
      if (model.url) {
        return h("a", {
          class: "a_input_file__name",
          href: model.url,
          target: "_blank",
          rel: "noopener",
          download: model.download ? model.name : undefined,
        }, model.name);
      }
      return h(tag, {
        class: "a_input_file__name",
      }, model.name);
    },

    renderFileStatus(model) {
      if (model.status === "error" || model.errorText) {
        return h("span", {
          class: "a_input_file__status a_input_file__status_error",
        }, [
          h(AIcon, {
            icon: ExclamationCircle,
            class: "a_input_file__status_icon",
          }),
          h(ATranslation, {
            tag: "span",
            text: model.errorText || "_A_INPUT_FILE_UPLOAD_ERROR_",
            alwaysTranslate: this.alwaysTranslate,
          }),
        ]);
      }
      if (model.status === "success") {
        return h("span", {
          class: "a_input_file__status a_input_file__status_success",
        }, [
          h(AIcon, {
            icon: CheckCircle,
            class: "a_input_file__status_icon",
          }),
          h(ATranslation, {
            tag: "span",
            text: "_A_INPUT_FILE_UPLOADED_",
            alwaysTranslate: this.alwaysTranslate,
          }),
        ]);
      }
      if (model.status === "uploading" || !isNil(model.progress)) {
        return h(AProgress, {
          class: "a_input_file__progress",
          value: model.progress || 0,
          indeterminate: isNil(model.progress),
          showValue: false,
          "aria-label": getTranslatedText({
            placeholder: "_A_INPUT_FILE_UPLOADING_{{name}}_",
            extra: { name: model.name },
          }),
        });
      }
      return null;
    },

    renderFileList({ isReadonly } = {}) {
      return h("ul", {
        ref: isReadonly ? undefined : "listRef",
        class: "a_input_file__list",
      }, this.modelValueListLocal.map((model, index) => {
        const PREVIEW_URL = this.getPreviewUrl(model);
        const HAS_SIZE = this.isFileSize && !isNil(model.size);
        return h("li", {
          key: `${ model.name }_${ index }`,
          class: ["a_input_file__item", {
            a_input_file__item_error: model.status === "error" || !!model.errorText,
          }],
        }, [
          PREVIEW_URL ?
            h("img", {
              class: "a_input_file__preview",
              src: PREVIEW_URL,
              alt: "",
            }) :
            h(AIcon, {
              icon: FileEarmark,
              class: "a_input_file__file_icon",
            }),
          h("span", {
            class: "a_input_file__info",
          }, [
            this.renderFileName({ model }),
            HAS_SIZE && h("span", {
              class: "a_input_file__size",
            }, filterFileSize(model.size, { units: "", digits: model.size < 1024 ? 0 : 1 })),
            !isReadonly && this.renderFileStatus(model),
          ]),
          !isReadonly && this.isRemovable && !this.disabled && h(AButton, {
            class: "a_btn a_btn_transparent_secondary a_btn_small a_input_file__remove",
            iconLeft: Close,
            textScreenReader: "_A_INPUT_FILE_REMOVE_{{name}}_",
            extra: { name: model.name },
            onClick: () => this.onRemove({ index }),
          }),
        ]);
      }));
    },

    renderHint() {
      if (!this.hintParts.length) {
        return null;
      }
      return h("span", {
        id: this.hintId,
        class: "a_input_file__hint",
      }, this.hintParts.join(" · "));
    },

    renderInput() {
      return h("label", {
        class: [
          "a_input_file__button",
          this.isDropzone ? "a_input_file__button_link" : "a_btn a_btn_secondary",
          this.labelClass,
          {
            disabled: this.disabled,
          },
        ],
      }, [
        h("input", {
          ref: "inputRef",
          id: this.htmlIdLocal,
          type: "file",
          multiple: this.isMultiple,
          accept: this.accept || undefined,
          class: [
            "a_input_file__input",
            this.inputClass,
            {
              a_form_control_invalid: this.isErrors,
            },
          ],
          disabled: this.disabled,
          "aria-required": this.required ? "true" : undefined,
          "aria-invalid": this.isErrors ? "true" : undefined,
          "aria-labelledby": this.ariaLabelledbyInput,
          "aria-describedby": this.ariaDescribedbyInput,
          ...this.inputAttributes,
          onChange: this.onInput,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
        }),
        !this.isDropzone && h(AIcon, {
          icon: Upload,
          class: "a_input_file__button_icon",
        }),
        h(ATranslation, {
          id: this.buttonTextId,
          tag: "span",
          text: this.textLocal,
          extra: this.extra,
          alwaysTranslate: this.alwaysTranslate,
        }),
      ]);
    },

    renderDropzone() {
      return h("div", {
        class: ["a_input_file__dropzone", {
          a_input_file__dropzone_active: this.isDragOver,
          a_input_file__dropzone_disabled: this.disabled,
          a_input_file__dropzone_invalid: this.isErrors,
        }],
        onDragenter: this.onDragenter,
        onDragover: this.onDragover,
        onDragleave: this.onDragleave,
        onDrop: this.onDrop,
      }, [
        h(AIcon, {
          icon: Upload,
          class: "a_input_file__dropzone_icon",
        }),
        h("span", {
          class: "a_input_file__dropzone_text",
        }, [
          h(ATranslation, {
            tag: "span",
            text: this.dropTextLocal,
            extra: this.extra,
            alwaysTranslate: this.alwaysTranslate,
          }),
          " ",
          this.renderInput(),
        ]),
        this.renderHint(),
      ]);
    },

    renderRejected() {
      // The region is always there, so screen readers announce the changes
      return h("div", {
        class: "a_input_file__live",
      }, [
        h("span", {
          class: "a_sr_only",
          "aria-live": "polite",
        }, this.liveMessage),
        this.rejectedFiles.length > 0 && h("div", {
          class: "a_input_file__rejected",
        }, [
          h("div", {
            class: "a_input_file__rejected_header",
          }, [
            h(AIcon, {
              icon: ExclamationCircle,
              class: "a_input_file__status_icon",
            }),
            h(ATranslation, {
              tag: "strong",
              text: "_A_INPUT_FILE_REJECTED_HEADER_",
              alwaysTranslate: this.alwaysTranslate,
            }),
            h(AButton, {
              class: "a_btn a_btn_transparent_secondary a_btn_small a_input_file__rejected_close",
              iconLeft: Close,
              textScreenReader: "_A_INPUT_FILE_REJECTED_CLOSE_",
              onClick: this.closeRejected,
            }),
          ]),
          h("ul", {
            class: "a_input_file__rejected_list",
          }, this.rejectedFiles.map((item, index) => h("li", {
            key: `${ item.name }_${ index }`,
          }, [
            h("span", {
              class: "a_input_file__name",
            }, item.name),
            ": ",
            item.text,
          ]))),
        ]),
      ]);
    },
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    if (this.readonly) {
      return h(AFormReadonly, {
        ...this.$attrs,
        id: this.htmlIdLocal,
        alwaysTranslate: this.alwaysTranslate,
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        helpText: this.helpText,
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        readonlyDefault: this.readonlyDefault,
        style: this.componentStyleHide,
        type: this.type,
        valueParentClass: this.readonlyValueParentClass,
      }, this.isModel ?
        () => this.renderFileList({ isReadonly: true }) :
        undefined);
    }

    return h("div", {
      ...this.$attrs,
      class: ["a_input_file", this.$attrs.class, {
        a_input_file_disabled: this.disabled,
      }],
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: "a_form_element__parent",
      }, [
        this.label && h(ALabel, {
          id: this.htmlIdLocal,
          alwaysTranslate: this.alwaysTranslate,
          extra: this.extra,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          required: this.required,
          hideFor: true,
          type: this.type,
          isError: this.isErrors,
        }),
        h(AFormLabelDescription, {
          id: this.labelDescriptionId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.labelDescription,
          extra: this.extra,
        }),
        this.isDropzone ?
          this.renderDropzone() :
          h("div", {
            class: "a_input_file__control",
          }, [
            this.renderInput(),
            this.renderHint(),
          ]),
        this.renderRejected(),
        this.isModel && this.renderFileList(),
        h(AFormHelpText, {
          id: this.helpTextId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.helpText,
          extra: this.extra,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          alwaysTranslate: this.alwaysTranslate,
          errors: this.errors,
          errorsClass: this.errorsClass,
        }),
      ]),
    ]);
  },
};
