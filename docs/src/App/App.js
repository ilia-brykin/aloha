import AModalConfirm from "../../../src/AModalConfirm/AModalConfirm";
import ANotification from "../../../src/ANotification/ANotification";
import TheMenu from "../components/TheMenu/TheMenu.vue";
import TheNavbar from "../components/TheNavbar/TheNavbar.vue";

import {
  computed,
  defineComponent,
} from "vue";

export default defineComponent({
  components: {
    AModalConfirm,
    ANotification,
    TheMenu,
    TheNavbar,
  },
  provide() {
    return {
      framework: computed(() => this.framework),
    };
  },
  data() {
    return {
      framework: "bootstrap",
    };
  },
  methods: {
    changeFramework() {
      // this.addFrameworkStyles(framework);
      // this.framework = framework;
    },

    addFrameworkStyles() {
      // frameworks.forEach(_framework => {
      //   if (_framework === framework) {
      //     STYLES[_framework].use();
      //   } else {
      //     STYLES[_framework].unuse();
      //   }
      // });
    },
  },
});
