import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AInput,
  ARadio,
  ASelect,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageRadioUrlTemplate",
  components: {
    AInput,
    ARadio,
    ASelect,
    AlohaExample,
  },
  setup() {
    const {
      codeHtmlBasic,
      codeHtmlReactive,
    } = HtmlAPI();
    const {
      codeJsBasic,
      codeJsReactive,
    } = JsAPI();

    const sources = [
      { id: "base", label: "_A_UI_URL_TEMPLATE_SOURCE_FIRST_" },
      { id: "retrieve", label: "_A_UI_URL_TEMPLATE_SOURCE_SECOND_" },
    ];
    const modelBasic = ref(undefined);
    const templateDataBasic = ref({ file: "base" });
    const urlBasic = `${ import.meta.env.BASE_URL }assets/mock/select-{{ file }}.json`;
    const modelReactive = ref(undefined);
    const templateDataReactive = ref({ source: { file: "base" }, note: "" });
    const urlReactive = `${ import.meta.env.BASE_URL }assets/mock/select-{{ source.file }}.json`;

    return {
      codeHtmlBasic,
      codeHtmlReactive,
      codeJsBasic,
      codeJsReactive,
      modelBasic,
      modelReactive,
      sources,
      templateDataBasic,
      templateDataReactive,
      urlBasic,
      urlReactive,
    };
  },
};
