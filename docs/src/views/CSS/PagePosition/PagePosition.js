import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import PagePositionOffsets from "./PagePositionOffsets/PagePositionOffsets.vue";
import PagePositionTranslate from "./PagePositionTranslate/PagePositionTranslate.vue";
import PagePositionTypes from "./PagePositionTypes/PagePositionTypes.vue";
import {
  ATranslation,
} from "aloha-vue";

export default {
  name: "PagePosition",
  components: {
    AlohaPage,
    ATranslation,
    PagePositionOffsets,
    PagePositionTranslate,
    PagePositionTypes,
  },
};
