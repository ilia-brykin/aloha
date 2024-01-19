import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

export default {
  name: "PageFilterTest",
  components: {
    AlohaExample,
  },
  props: {
    test: {
      type: String,
      required: true,
    },
  },
};
