import {
  createApp,
} from "vue";
import router from "./router/index";

import ATest from "./components/ATest/ATest";
import App from "./App/App.vue";
import {
  ADataRetrievePlugin,
  ADataRetrievePlugin_defaultRetrieve,
  AFiltersPlugin,
  AFormPlugin,
  AHttpPlugin,
  AI18nPlugin,
  AIconPlugin,
  AMobilePlugin,
  AModalPlugin,
  APageTabTitlePlugin,
  ARemPxPlugin,
  ARouterLinkConfigPlugin,
  ASafeHtml,
} from "aloha-vue";

import {
  modelLanguage,
  setLanguageFromLocalStorage,
} from "./components/TheNavbar/compositionAPI/LanguagesAPI";

import "../styles/styles.scss";
import mainIcons from "./mainIcons";
import {
  mainTranslation,
} from "./mainTranslation";

setLanguageFromLocalStorage();

const APP = createApp(App);

APP.use(AI18nPlugin, mainTranslation, modelLanguage.value, {});
APP.use(AHttpPlugin, {
  baseUrl: "",
});
APP.use(ADataRetrievePlugin, {
  callbacks: {
    retrieve: async options => {
      const {
        keyId = "id",
        modelArray = [],
        url = "",
      } = options || {};

      if (url.includes("/assets/mock/")) {
        const response = await fetch(url);
        const data = await response.json();

        return data.filter(item => {
          return modelArray.includes(item[keyId]);
        });
      }

      return ADataRetrievePlugin_defaultRetrieve(options);
    },
  },
});
APP.use(AIconPlugin, {
  icons: mainIcons,
});
APP.use(AMobilePlugin, {
  breakpoint: 1023,
});
APP.use(ARemPxPlugin);
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

APP.use(ARouterLinkConfigPlugin, {
  propsDefault: {
    routes: router.getRoutes(),
  },
  // excludedPathRoutes: ["/:catchAll(.*)"],
});

APP.use(APageTabTitlePlugin, "_PAGE_TITLE_BASE_");
APP.use(AFormPlugin, {
  components: {
    test: ATest,
  },
}),

/*
 * APP.use(AGroupButtonDropdownPlugin, {
 *   propsDefault: {
 *     dropdownAttributes: {
 *       buttonText: "Weitere Aktionen",
 *     },
 *   },
 * });
 */
APP.directive("SafeHtml", ASafeHtml);
APP.use(router).mount("#app");
