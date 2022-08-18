import {
  computed,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
  toRef,
} from "vue";

import AFormElementBtnClear from "../../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import ALabel from "../ALabel/ALabel";
import ATranslation from "../../ATranslation/ATranslation";

import UiClearButtonMixinProps from "../mixins/UiClearButtonMixinProps";
import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";
import UiClearButtonAPI from "../compositionApi/UiClearButtonAPI";
import UiDependenciesAPI from "../compositionApi/UiDependenciesAPI";
import UiLabelFloatAPI from "../compositionApi/UiLabelFloatAPI";

import autosize from "../../utils/autosize";


export default {
  name: "ATextarea",
  components: {
    AFormElementBtnClear,
    ALabel,
    ATranslation,
  },
  mixins: [
    UiClearButtonMixinProps,
    UiMixinProps,
  ],
  props: {
    maxlength: {
      type: String,
      required: false,
    },
    isScalable: {
      type: Boolean,
      required: false,
    },
    rows: {
      type: [String, Number],
      required: false,
    },
  },
  setup(props, context) {
    const {
      componentStyleHideDependencies,
    } = UiDependenciesAPI(props);

    const {
      ariaRequired,
      changeModel,
      clearModel,
      disabledLocal,
      idLocal,
      isError,
      isModel,
      labelLocal,
      onBlur,
      onFocus,
      requiredLocal,
    } = UiAPI(props, context);

    const {
      clearButtonClassLocal,
      isClearButtonLocal,
    } = UiClearButtonAPI(props, {
      isModel,
    });

    const {
      isLabelFloatLocal,
    } = UiLabelFloatAPI(props);

    const isAutosizeStarted = ref(undefined);

    const rows = toRef(props, "rows");
    const isScalable = toRef(props, "isScalable");
    const rowsLocal = computed(() => {
      if (rows.value) {
        return rows.value;
      }
      if (isScalable.value) {
        return 1;
      }
      return undefined;
    });

    const textareaRef = ref(undefined);
    const initAutosize = () => {
      if (isScalable.value) {
        autosize(textareaRef.value);
        isAutosizeStarted.value = true;
      }
    };

    const destroyAutosize = () => {
      if (isAutosizeStarted.value) {
        autosize.destroy(textareaRef.value);
      }
    };

    const onInput = $event => {
      if (disabledLocal.value) {
        return;
      }
      const value = $event.target.value;
      changeModel({
        model: value,
      });
    };

    onMounted(() => {
      initAutosize();
    });

    onBeforeUnmount(() => {
      destroyAutosize();
    });

    return {
      componentStyleHideDependencies,

      ariaRequired,
      changeModel,
      clearModel,
      disabledLocal,
      idLocal,
      isError,
      isModel,
      labelLocal,
      onBlur,
      onFocus,
      requiredLocal,

      clearButtonClassLocal,
      isClearButtonLocal,

      isLabelFloatLocal,

      isAutosizeStarted,
      onInput,
      rowsLocal,
      textareaRef,
    };
  },
  methods: {
    // clearModel() {
    //   if (this.disabledClearButton) {
    //     return;
    //   }
    //   this.onInput({
    //     target: {
    //       value: "",
    //     },
    //   });
    //   setTimeout(() => {
    //     autosize.update(this.$refs.textarea);
    //   });
    // },
  },
  render() {
    return h("div", null, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_float: this.isLabelFloatLocal,
          a_form_element__parent_not_empty: this.isModel,
        }],
      }, [
        this.labelLocal && h(ALabel, {
          id: this.idLocal,
          label: this.labelLocal,
          labelClass: this.labelClass,
          required: this.requiredLocal,
          isLabelFloat: this.isLabelFloatLocal,
        }),
        h("div", {
          class: "a_form_element",
        }, [
          h("textarea", {
            ref: "textareaRef",
            id: this.idLocal,
            value: this.modelValue,
            rows: this.rowsLocal,
            class: [
              "a_form_control a_textarea",
              this.inputClass,
              {
                a_textarea_scalable: this.isScalable,
                a_form_element_with_btn_close: this.isClearButtonLocal,
              },
            ],
            disabled: this.disabledLocal,
            ariaRequired: this.ariaRequired,
            ariaInvalid: this.isError,
            maxlength: this.maxlength,
            ...this.inputAttributes,
            onInput: this.onInput,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
          }),
          this.isClearButtonLocal && h(AFormElementBtnClear, {
            disabled: this.disabledLocal,
            clearButtonClass: this.clearButtonClassLocal,
            onClear: this.clearModel,
          }),
        ]),
      ]),
    ]);
  },
};
