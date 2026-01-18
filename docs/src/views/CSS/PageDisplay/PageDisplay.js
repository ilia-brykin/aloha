import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import PageDisplayBasic from "./PageDisplayBasic/PageDisplayBasic.vue";
import PageDisplayMobile from "./PageDisplayMobile/PageDisplayMobile.vue";
import {
  ATranslation,
} from "aloha-vue";

export default {
  name: "PageDisplay",
  components: {
    AlohaPage,
    ATranslation,
    PageDisplayBasic,
    PageDisplayMobile,
  },
};
