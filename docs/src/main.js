import App from "./App/App.vue";
import { createApp } from "vue";
import router from "./router/index";
import AI18nPlugin from "../../src/plugins/AI18nPlugin";
import AMobilePlugin from "../../src/plugins/AMobilePlugin";
import AGroupButtonDropdownPlugin from "../../src/plugins/AGroupButtonDropdownPlugin";
import AIconPlugin from "../../src/plugins/AIconPlugin";
import AModalPlugin from "../../src/plugins/AModalPlugin";
import mainIcons from "./mainIcons";
import ASafeHtml from "../../src/directives/ASafeHtml";

import {
  mainTranslation,
} from "./mainTranslation";


const APP = createApp(App);

APP.use(AI18nPlugin, mainTranslation, "de");
APP.use(AIconPlugin, mainIcons);
APP.use(AMobilePlugin, {
  breakpoint: 991,
});
APP.use(AModalPlugin, {
  propsDefault: {
    closeButtonClass: "a_btn a_btn_link",
  },
});
APP.use(AGroupButtonDropdownPlugin, {
  propsDefault: {
    dropdownAttributes: {
      buttonText: "Weitere Aktionen",
    },
  },
});
APP.config.unwrapInjectedRef = true;
APP.directive("SafeHtml", ASafeHtml);
APP.use(router).mount("#app");
