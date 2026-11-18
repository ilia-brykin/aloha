import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageAvatarBasic from "./PageAvatarBasic/PageAvatarBasic.vue";
import PageAvatarColors from "./PageAvatarColors/PageAvatarColors.vue";
import PageAvatarContent from "./PageAvatarContent/PageAvatarContent.vue";
import PageAvatarDecorative from "./PageAvatarDecorative/PageAvatarDecorative.vue";
import PageAvatarGroup from "./PageAvatarGroup/PageAvatarGroup.vue";
import PageAvatarImage from "./PageAvatarImage/PageAvatarImage.vue";
import PageAvatarShape from "./PageAvatarShape/PageAvatarShape.vue";
import PageAvatarSizes from "./PageAvatarSizes/PageAvatarSizes.vue";
import PageAvatarStatus from "./PageAvatarStatus/PageAvatarStatus.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageAvatar",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageAvatarBasic,
    PageAvatarColors,
    PageAvatarContent,
    PageAvatarDecorative,
    PageAvatarGroup,
    PageAvatarImage,
    PageAvatarShape,
    PageAvatarSizes,
    PageAvatarStatus,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
      dataPropsGroup,
    } = PropsAPI();

    const {
      dataEvents,
    } = EventsAPI();

    const {
      dataSlots,
    } = SlotsAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataEvents,
      dataProps,
      dataPropsGroup,
      dataSlots,
      dataTranslate,
      pageTitle,
    };
  },
};
