import UiValidatedJsonModeMixin from "./UiValidatedJsonModeMixin";

import {
  isNil,
  size,
} from "lodash-es";

// @vue/component
export default {
  name: "UiValidatedJsonModeSingleMixin",
  mixins: [
    UiValidatedJsonModeMixin,
  ],
  data() {
    return {
      localShowForm: undefined,
      afterInit: false,
    };
  },
  computed: {
    optionalSingleLabel() {
      return this.options.optional_single_label || this.options.optionalSingleLabel || "_LBL_UI_VALIDATED_JSON_SINGLE_TOGGLE_FORM_";
    },

    optionalSingleDefault() {
      return this.options.optional_single_default || this.options.optionalSingleDefault || false;
    },

    paramFormClass() {
      return {
        "pt-3": this.showForm,
      };
    },

    showFormField() {
      return {
        type: "one_checkbox",
        label: this.optionalSingleLabel,
        id: `${ this.idPrefix }__show_form_checkbox`,
      };
    },

    showForm() {
      return (isNil(this.localShowForm) && size(this.model) > 0
        || this.isRequired
        || this.localShowForm);
    },

    isTypedForm() {
      return this.options.typ === "typed_form";
    },
  },
  created() {
    if (!this.isReadonly && !this.model) {
      this.localShowForm = this.optionalSingleDefault;
    }
  },
  mounted() {
    this.afterInit = true;
  },
  methods: {
    toggleShowForm({ model }) {
      if (model) {
        this.localShowForm = true;
        this.change({ currentModel: this.model });
      } else {
        this.localShowForm = false;
        this.change({ currentModel: null });
      }
    },
    changeAfterInit(data) {
      if (this.afterInit) {
        return this.change(data);
      }
    },
  },
};
