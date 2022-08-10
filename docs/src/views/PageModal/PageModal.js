import AModal from "../../../../src/AModal/AModal";

export default {
  name: "PageModal",
  components: {
    AModal,
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },

    closeModal() {
      this.isModalOpen = false;
    },
  },
};
