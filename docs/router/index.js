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
    name: "Start",
    component: () => import(/* webpackChunkName: "start" */ "../views/Start.vue"),
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
    component: () => import(/* webpackChunkName: "PageTable" */ "../views/PageCollapse/PageCollapse.vue"),
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
