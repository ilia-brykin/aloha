import {
  defineComponent,
} from "vue";

import TheMenu from "../components/TheMenu/TheMenu.vue";
import TheNavbar from "../components/TheNavbar/TheNavbar.vue";
import {
  AModalConfirm,
  ANotification,
  ASkipLink,
} from "aloha-vue";

export default defineComponent({
  name: "App",
  components: {
    AModalConfirm,
    ANotification,
    ASkipLink,
    TheMenu,
    TheNavbar,
  },
});
