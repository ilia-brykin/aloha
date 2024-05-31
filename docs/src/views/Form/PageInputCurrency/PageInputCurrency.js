import AButton from "../../../../../src/AButton/AButton";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import AInputCurrency from "../../../../../src/ui/AInputCurrency/AInputCurrency";
import AInputNumber from "../../../../../src/ui/AInputNumber/AInputNumber";
import ASelect from "../../../../../src/ui/ASelect/ASelect";
import ATranslation from "../../../../../src/ATranslation/ATranslation";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";
import ModelAPI from "./compositionAPI/ModelAPI";

export default {
  name: "PageInputCurrency",
  components: {
    AButton,
    AlohaExample,
    AInputCurrency,
    AInputNumber,
    ASelect,
    ATranslation,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const {
      appliedModel,
      applyModel,
      decimalDividerCollection,
      changeDecimalDivider,
      changeThousandDivider,
      exampleInputKey,
      mainModel,
      thousandDividerCollection,
      unappliedModel,
    } = ModelAPI();

    return {
      appliedModel,
      applyModel,
      changeDecimalDivider,
      changeThousandDivider,
      codeHtml,
      codeJs,
      decimalDividerCollection,
      exampleInputKey,
      mainModel,
      thousandDividerCollection,
      unappliedModel,
    };
  },
};
