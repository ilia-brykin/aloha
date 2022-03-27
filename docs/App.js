import TheMenu from "./components/TheMenu/TheMenu.vue";
import TheNavbar from "./components/TheNavbar/TheNavbar.vue";

import bootstrapStyles from "./styles/bootstrap.lazy.scss";
import bulmaStyles from "./styles/bulma.lazy.scss";
import foundationStyles from "./styles/foundation.lazy.scss";
import uikitStyles from "./styles/uikit.lazy.scss";
import frameworks from "../src/const/frameworks";
import {
  computed,
  defineComponent,
} from "vue";

const STYLES = {
  bootstrap: bootstrapStyles,
  bulma: bulmaStyles,
  foundation: foundationStyles,
  uikit: uikitStyles,
};

export default defineComponent({
  components: {
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
    changeFramework({ framework }) {
      this.addFrameworkStyles(framework);
      this.framework = framework;
    },

    addFrameworkStyles(framework) {
      frameworks.forEach(_framework => {
        if (_framework === framework) {
          STYLES[_framework].use();
        } else {
          STYLES[_framework].unuse();
        }
      });
    },
  },
});
