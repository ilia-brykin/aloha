import {
  createRouter,
  createWebHistory,
} from "vue-router";

import bootstrapStyles from "../styles/bootstrap.lazy.scss";
import foundationStyles from "../styles/foundation.lazy.scss";
import uikitStyles from "../styles/uikit.lazy.scss";
import frameworks from "../../src/const/frameworks";

const STYLES = {
  bootstrap: bootstrapStyles,
  foundation: foundationStyles,
  uikit: uikitStyles,
};

const ROUTES = [
  {
    path: "/404",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "not_found" */ "../views/NotFound.vue"),
  },
  {
    path: "/",
    name: "PageStart",
    component: () => import(/* webpackChunkName: "start" */ "../views/PageStart/PageStart.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/table",
    name: "PageTable",
    component: () => import(/* webpackChunkName: "PageTable" */ "../views/PageTable/PageTable.vue"),
  },
  {
    path: "/spinner",
    name: "PageSpinner",
    component: () => import(/* webpackChunkName: "PageSpinner" */ "../views/PageSpinner/PageSpinner.vue"),
  },
  {
    path: "/collapse",
    name: "PageCollapse",
    component: () => import(/* webpackChunkName: "PageCollapse" */ "../views/PageCollapse/PageCollapse.vue"),
  },
  {
    path: "/cloak",
    name: "PageCloak",
    component: () => import(/* webpackChunkName: "PageCloak" */ "../views/PageCloak/PageCloak.vue"),
  },
  {
    path: "/input",
    name: "PageInput",
    component: () => import(/* webpackChunkName: "PageCloak" */ "../views/PageInput/PageInput.vue"),
  },
  {
    path: "/accordion/:framework",
    name: "PageAccordion",
    component: () => import(/* webpackChunkName: "PageAccordionBootstrap" */ "../views/PageAccordion/PageAccordion.vue"),
  },
  {
    // If the routing configuration '*' reports an error, replace it with '/: catchAll(. *)'
    // caught Error: Catch all routes ("*") must now be defined using a param with a custom regexp
    path: "/:catchAll(.*)", // Special attention should be paid to the bottom
    redirect: "/404",
  }
];

const ROUTER = createRouter({
  history: createWebHistory(),
  routes: ROUTES,
});

ROUTER.beforeEach(to => {
  if (to.params && to.params.framework) {
    addFrameworkStyles(to.params.framework);
  }
  return true;
});

export default ROUTER;

function addFrameworkStyles(framework) {
  frameworks.forEach(_framework => {
    if (_framework === framework) {
      STYLES[_framework].use();
    } else {
      STYLES[_framework].unuse();
    }
  });
}
