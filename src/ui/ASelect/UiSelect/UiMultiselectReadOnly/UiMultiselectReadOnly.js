import PuxTranslate from "../../../PuxTranslate/PuxTranslate.vue";
import UiMultiselectReadOnlyElement from "./UiMultiselectReadOnlyElement/UiMultiselectReadOnlyElement.vue";

import ReadOnlyMixin from "../ReadOnlyMixin";

import {
  cloneDeep,
  isEmpty,
  forEach,
  groupBy,
  values,
} from "lodash-es";

// @vue/component
export default {
  name: "UiMultiselectReadOnly",
  components: {
    PuxTranslate,
    UiMultiselectReadOnlyElement,
  },
  mixins: [
    ReadOnlyMixin,
  ],
  computed: {
    keyGroupLocal() {
      if (this.options.withoutGroup) {
        return;
      }
      return this.options.keyGroup;
    },

    collectionOnlyWithModelList() {
      if (this.options.dataIsModel) {
        return values(this.getCollection);
      }
      const COLLECTION_ONLY_WITH_MODEL_LIST = [];
      forEach(this.model, item => {
        COLLECTION_ONLY_WITH_MODEL_LIST.push(this.getCollection[item] || item);
      });
      return COLLECTION_ONLY_WITH_MODEL_LIST;
    },

    collectionOnlyWithModelGrouped() {
      return groupBy(this.collectionOnlyWithModelList, this.keyGroupLocal);
    },

    collectionOnlyWithModelGroupedWithoutKeyNull() {
      const COLLECTION = cloneDeep(this.collectionOnlyWithModelGrouped);
      if (COLLECTION.null) {
        delete COLLECTION.null;
      }
      return COLLECTION;
    },

    isModel() {
      if (this.options.dataIsModel) {
        return !isEmpty(this.getCollection);
      }
      return this.model && this.model.length;
    },
  },
};
