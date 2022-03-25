import ATranslation from "../../ATranslation/ATranslation";

import {
  h,
} from "vue";
import {
  cloneDeep,
} from "lodash-es";


export default {
  name: "ATableTopPanel",
  components: {
    ATranslation,
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    modelColumns: {
      type: Array,
      required: true,
    },
  },
  emits: [
    "update:model-columns",
  ],
  methods: {
    changeModelColumns(columnId) {
      const MODEL_COLUMNS = cloneDeep(this.modelColumns);
      const INDEX = MODEL_COLUMNS.indexOf(columnId);
      if (INDEX !== -1) {
        MODEL_COLUMNS.splice(INDEX, 1);
      } else {
        MODEL_COLUMNS.push(columnId);
      }
      this.$emit("update:model-columns", MODEL_COLUMNS);
    },
  },
  render() {
    return h("div", {
      class: "a_table__top_panel",
    }, [
      h("div", {
        class: "text-end",
      }, [
        h("div", {
          class: "btn-group",
        }, this.columns.map(column => {
          // TODO: ASelect
          return h("button", {
            type: "button",
            class: this.modelColumns.indexOf(column.id) !== -1 ?
              "btn btn-secondary" :
              "btn btn-outline-secondary",
            onClick: () => this.changeModelColumns(column.id),
          }, [
            h(ATranslation, {
              text: column.label,
              tag: "span",
            }),
          ]);
        })),
      ]),
    ]);
  },
};
