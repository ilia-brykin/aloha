import {
  createRouter,
  createWebHistory,
} from "vue-router";

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
    component: () => import(/* webpackChunkName: "PageInput" */ "../views/PageInput/PageInput.vue"),
  },
  {
    path: "/json",
    name: "PageAJson",
    component: () => import(/* webpackChunkName: "PageAJson" */ "../views/PageAJson/PageAJson.vue"),
  },
  {
    path: "/accordion",
    name: "PageAccordion",
    component: () => import(/* webpackChunkName: "PageAccordionBootstrap" */ "../views/PageAccordion/PageAccordion.vue"),
  },
  {
    path: "/alert",
    name: "PageAlert",
    component: () => import(/* webpackChunkName: "PageAlert" */ "../views/PageAlert/PageAlert.vue"),
  },
  {
    path: "/modal",
    name: "PageModal",
    component: () => import(/* webpackChunkName: "PageModal" */ "../views/PageModal/PageModal.vue"),
  },
  {
    path: "/confirm",
    name: "PageConfirm",
    component: () => import(/* webpackChunkName: "PageConfirm" */ "../views/PageConfirm/PageConfirm.vue"),
  },
  {
    path: "/notification",
    name: "PageNotification",
    component: () => import(/* webpackChunkName: "PageNotification" */ "../views/PageNotification/PageNotification.vue"),
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

export default ROUTER;
