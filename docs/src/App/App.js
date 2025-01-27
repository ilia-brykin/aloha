import {
  defineComponent,
} from "vue";

import {
  AModalConfirm,
  ANotification,
} from "aloha-vue";

import TheMenu from "../components/TheMenu/TheMenu.vue";
import TheNavbar from "../components/TheNavbar/TheNavbar.vue";

export default defineComponent({
  components: {
    AModalConfirm,
    ANotification,
    TheMenu,
    TheNavbar,
  },
});
