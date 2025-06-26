import UiValidatedJsonModeManyEditMixin from "../UiValidatedJsonModeManyEditMixin";

import {
  cloneDeep,
  filter,
  isNil,
  sortBy,
} from "lodash-es";

// @vue/component
export default {
  name: "ModeList",
  mixins: [
    UiValidatedJsonModeManyEditMixin,
  ],
  methods: {
    onCloseModal({ model } = {}) {
      if (!isNil(model)) {
        let newModel = cloneDeep(this.localModel || []);
        if (!isNil(this.currentKey)) {
          newModel[this.currentKey] = model;
        } else {
          newModel.push(model);
        }
        if (!isNil(this.posField)) {
          newModel = sortBy(newModel, this.posField);
        }
        this.change({ currentModel: newModel });
      }
    },

    onMoveUpElement(index) {
      if (index === 0) {
        return;
      }
      const MODEL = cloneDeep(this.localModel);
      const ELEM = MODEL[index];
      MODEL.splice(index, 1);
      MODEL.splice(index - 1, 0, ELEM);
      return MODEL;
    },

    onMoveDownElement(index) {
      if (index >= this.modelSize - 1) {
        return;
      }
      const MODEL = cloneDeep(this.localModel);
      const ELEM = MODEL[index];
      MODEL.splice(index, 1);
      MODEL.splice(index + 1, 0, ELEM);
      return MODEL;
    },

    removeElement(model, key) {
      return filter(model, (el, k) => k !== key);
    },
  },
};
