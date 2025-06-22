import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageTextAlignment from "./PageTextAlignment/PageTextAlignment.vue";
import PageTextClamp from "./PageTextClamp/PageTextClamp.vue";
import PageTextFontSize from "./PageTextFontSize/PageTextFontSize.vue";
import PageTextFontWeight from "./PageTextFontWeight/PageTextFontWeight.vue";
import PageTextTransformation from "./PageTextTransformation/PageTextTransformation.vue";
import PageTextWrap from "./PageTextWrap/PageTextWrap.vue";
import {
  ATranslation,
} from "aloha-vue";

export default {
  name: "PageText",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageTextAlignment,
    PageTextClamp,
    PageTextFontSize,
    PageTextFontWeight,
    PageTextTransformation,
    PageTextWrap,
  },
};
