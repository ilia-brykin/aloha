import UiValidatedJsonModeManyEditMixin from "../UiValidatedJsonModeManyEditMixin";

import {
  cloneDeep,
  findIndex,
  forEach,
  get,
  isNil,
  pickBy,
  size,
  sortBy,
  values,
} from "lodash-es";

// @vue/component
export default {
  name: "ModeJson",
  mixins: [
    UiValidatedJsonModeManyEditMixin,
  ],
  methods: {
    onCloseModal({ model } = {}) {
      if (!isNil(model)) {
        const MODEL = cloneDeep(this.localModel || {});
        if (!isNil(this.currentModel)) {
          delete MODEL[this.currentModel[this.keyField]];
        }
        MODEL[model[this.keyField]] = model;
        this.change({ currentModel: MODEL });
      }
    },

    onMoveUpElement(key) {
      const MODEL = cloneDeep(this.localModel);
      const MODEL_LIST = sortBy(values(MODEL), this.posField);
      const POS = findIndex(MODEL_LIST, el => get(el, this.keyField) === key);
      if (POS === 0) {
        return;
      }
      const ELEM = MODEL_LIST[POS];
      MODEL_LIST.splice(POS, 1);
      MODEL_LIST.splice(POS - 1, 0, ELEM);
      forEach(MODEL_LIST, (el, idx) => {
        MODEL[get(el, this.keyField)][this.posField] = (idx + 1) * 10;
      });
      return MODEL;
    },

    onMoveDownElement(key) {
      const MODEL = cloneDeep(this.localModel);
      const MODEL_LIST = sortBy(values(MODEL), this.posField);
      const POS = findIndex(MODEL_LIST, el => get(el, this.keyField) === key);
      if (POS >= size(MODEL_LIST)) {
        return;
      }
      const ELEM = MODEL_LIST[POS];
      MODEL_LIST.splice(POS, 1);
      MODEL_LIST.splice(POS + 1, 0, ELEM);
      forEach(MODEL_LIST, (el, idx) => {
        MODEL[get(el, this.keyField)][this.posField] = (idx + 1) * 10;
      });
      return MODEL;
    },

    removeElement(model, key) {
      return pickBy(model, (el, k) => k !== key);
    },
  },
};
