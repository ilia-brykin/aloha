import PuxTranslate from "../../../../../components/PuxTranslate/PuxTranslate.vue";

import translate from "../../../../../directives/translate";

import {
  get,
} from "lodash-es";


// @vue/component
export default {
  name: "UiSelectOrderedElement",
  components: {
    PuxTranslate,
  },
  directives: {
    translate,
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
    first: {
      type: Boolean,
      required: true,
    },
    last: {
      type: Boolean,
      required: true,
    },
    currentModel: {
      type: [String, Number],
      required: true,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    disabled: {
      type: Boolean,
    },
    collection: {
      type: Object,
      required: true,
    },
    moveUp: {
      type: Function,
      required: true,
    },
    moveDown: {
      type: Function,
      required: true,
    },
    deleteElement: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      confirmShow: undefined,
      confirmOptions: undefined,
    };
  },
  computed: {
    getLabel() {
      return get(this.collection[this.currentModel], this.keyLabelLocal);
    },

    keyLabelLocal() {
      return this.options.keyLabel || "label";
    },
  },
  beforeCreate() {
    this.$options.components.Modal = require("../../../../Modal/Modal.vue").default;
  },
  methods: {
    openConfirmDelete() {
      this.confirmOptions = {
        okClass: "btn btn-primary",
        title: "Auswahl entfernen",
        msg: `<p>Sind Sie sicher, dass sie die ${ this.index + 1 }. Auswahl entfernen wollen?</p>`,
        okLabel: "Fortfahren",
        okCallback: () => {
          this.deleteElement({ index: this.index });
          this.closeConfirm();
        },
        cancelCallback: this.closeConfirm,
        loading: false,
      };
      this.confirmShow = true;
    },

    closeConfirm() {
      this.confirmShow = false;
    },
  },
};
