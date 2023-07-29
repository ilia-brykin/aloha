import ATinymce from "../../../../../src/ui/ATinymce/ATinymce";


export default {
  name: "PageTinyMce",
  components: {
    ATinymce,
  },
  data() {
    return {
      model1: "aloha",
      model2: "hola",
    };
  },
  created() {
    setTimeout(() => {
      this.model2 = "Aloha";
    }, 1000);
  },
};
