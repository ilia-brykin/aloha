import {
  ATable,
} from "aloha-vue";

import ColumnsAPI from "./compositionAPI/ColumnsAPI";
import DataAPI from "./compositionAPI/DataAPI";

export default {
  name: "AlohaTableProps",
  components: {
    ATable,
  },
  props: {
    tableLabel: {
      type: String,
      required: false,
      default: "Props",
    },
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: false,
      default: () => [
        "name",
        "type",
        "default",
        "required",
        "description",
      ],
    },
  },
  setup(props) {
    const {
      columnsLocal,
    } = ColumnsAPI(props);

    const {
      dataTranslated,
    } = DataAPI(props);

    return {
      columnsLocal,
      dataTranslated,
    };
  },
};
