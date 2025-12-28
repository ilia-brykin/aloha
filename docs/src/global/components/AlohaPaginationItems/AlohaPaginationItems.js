import BlocksAPI from "./compositionAPI/BlocksAPI";

export default {
  name: "AlohaPaginationItems",
  props: {
    length: {
      type: Number,
      required: true,
    },
    offset: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const {
      blockNumbers,
    } = BlocksAPI(props);

    return {
      blockNumbers,
    };
  },
};
