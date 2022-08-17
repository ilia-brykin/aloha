import PuxButton from "../../../PuxButton/PuxButton.vue";
import PuxCloak from "../../../PuxCloak/PuxCloak.vue";
import UiSelectOrderedElement from "./UiSelectOrderedElement/UiSelectOrderedElement.vue";

import HttpMixin from "../../../../mixins/HttpMixin";
import UIComponentMixin from "../../UIComponentMixin";

import {
  cloneDeep,
  filter,
  find,
  get,
  isNil,
  keyBy,
  size,
} from "lodash-es";

// @vue/component
export default {
  name: "UiSelectOrdered",
  components: {
    PuxButton,
    PuxCloak,
    UiSelectOrderedElement,
  },
  mixins: [
    HttpMixin,
    UIComponentMixin,
  ],
  data() {
    return {
      selectModel: undefined,
      loading: undefined,
      list: [],
    };
  },
  computed: {
    isDisabledButtonAdd() {
      return this.isDisabled || isNil(this.selectModel);
    },

    selectOptions() {
      const OPTIONS_CLONE = cloneDeep(this.options);
      OPTIONS_CLONE.type = "select";
      OPTIONS_CLONE.view = "v-alt";
      OPTIONS_CLONE.label = "Element auswählen:";
      OPTIONS_CLONE.translate = true;
      OPTIONS_CLONE.data = this.getListFiltered;
      OPTIONS_CLONE.placeholder = "Bitte auswählen";
      OPTIONS_CLONE.deselect = true;
      OPTIONS_CLONE.helpText = undefined;
      return OPTIONS_CLONE;
    },

    getList() {
      return find([this.options.data, this.data, this.list], list => size(list) > 0) || [];
    },

    getCollection() {
      return keyBy(this.getList, this.options.keyId);
    },

    getListFiltered() {
      return filter(this.getList, item => {
        return this.model.indexOf(get(item, this.options.keyId)) === -1;
      });
    },

    idForButtonAdd() {
      return `${ this.getId }_add`;
    },
  },
  beforeCreate() {
    this.$options.components.FormElement = require("../../../FormElement/FormElement.vue").default;
  },
  created() {
    this.loadData();
  },
  methods: {
    moveUp({ index }) {
      if (index === 0) {
        return;
      }
      const CURRENT = this.model[index];
      const PREVIOUS = this.model[index - 1];
      const MODEL_CLONE = cloneDeep(this.model) || [];
      MODEL_CLONE.splice(index - 1, 2, CURRENT, PREVIOUS);
      this.onInput_mixin({ value: MODEL_CLONE });
    },

    moveDown({ index }) {
      if (index >= this.model.length - 1) {
        return;
      }
      const CURRENT = this.model[index];
      const NEXT = this.model[index + 1];
      const MODEL_CLONE = cloneDeep(this.model) || [];
      MODEL_CLONE.splice(index, 2, NEXT, CURRENT);
      this.onInput_mixin({ value: MODEL_CLONE });
    },

    orderedAdd() {
      if (!this.selectModel) {
        return;
      }
      const MODEL_CLONE = cloneDeep(this.model) || [];
      MODEL_CLONE.push(this.selectModel);
      this.onInput_mixin({ value: MODEL_CLONE });
      this.selectModel = undefined;
    },

    deleteElement({ index }) {
      const MODEL_CLONE = cloneDeep(this.model) || [];
      MODEL_CLONE.splice(index, 1);
      this.onInput_mixin({ value: MODEL_CLONE });
    },

    loadData() {
      if (this.options.url && !this.options.searchGlobal) {
        this.loading = true;
        this.getListHttp({ url: this.options.url, apiSaveId: this.options.apiSaveId, urlParams: this.options.urlParams }).then(
          response => {
            this.list = response;
          }
        ).then(
          () => {
            this.loading = false;
          }
        );
      }
    },
  },
};
