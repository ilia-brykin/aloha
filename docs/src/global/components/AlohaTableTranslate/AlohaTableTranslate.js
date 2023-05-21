import ATable from "../../../../../src/ATable/ATable";

import ColumnsAPI from "./compositionAPI/ColumnsAPI";
import DataAPI from "./compositionAPI/DataAPI";

export default {
  name: "AlohaTableTranslate",
  components: {
    ATable,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const {
      columns,
    } = ColumnsAPI();

    const {
      dataTranslated,
    } = DataAPI(props);

    return {
      columns,
      dataTranslated,
    };
  },
};
