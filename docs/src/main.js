import App from "./App/App.vue";
import { createApp } from "vue";
import router from "./router/index";
// import AGroupButtonDropdownPlugin from "../../src/plugins/AGroupButtonDropdownPlugin";
import AFiltersPlugin from "../../src/plugins/AFiltersPlugin";
import {
  AIconPlugin,
  AI18nPlugin,
  AMobilePlugin,
  AModalPlugin,
  ASafeHtml,
} from "../../dist";
import mainIcons from "./mainIcons";

import {
  mainTranslation,
} from "./mainTranslation";
import {
  modelLanguage,
  setLanguageFromLocalStorage,
} from "./components/TheNavbar/compositionAPI/LanguagesAPI";

setLanguageFromLocalStorage();

const APP = createApp(App);

APP.use(AI18nPlugin, mainTranslation, modelLanguage.value, {});
APP.use(AIconPlugin, {
  icons: mainIcons,
});
APP.use(AMobilePlugin, {
  breakpoint: 991,
});
APP.use(AModalPlugin, {
  propsDefault: {
    closeButtonClass: "a_btn a_btn_link",
  },
});
APP.use(AFiltersPlugin, {
  config: {
    headerBottomGroups: [
      {
        props: {},
        children: [
          {
            component: "addFilterSelect",
            props: {
              keyGroup: "group",
            },
          },
          {
            component: "buttonSearch",
            props: {},
          },
        ],
      },
    ],
  },
});
// APP.use(AGroupButtonDropdownPlugin, {
//   propsDefault: {
//     dropdownAttributes: {
//       buttonText: "Weitere Aktionen",
//     },
//   },
// });
APP.directive("SafeHtml", ASafeHtml);
APP.use(router).mount("#app");
