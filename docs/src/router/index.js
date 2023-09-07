import {
  createRouter,
  createWebHashHistory,
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
    path: "/table-complex",
    name: "PageTableComplex",
    component: () => import(/* webpackChunkName: "PageTableComplex" */ "../views/PageTable/PageTableComplex/PageTableComplex.vue"),
  },
  {
    path: "/table-simple",
    name: "PageTableSimple",
    component: () => import(/* webpackChunkName: "PageTableSimple" */ "../views/PageTable/PageTableSimple/PageTableSimple.vue"),
  },
  {
    path: "/table-pagination",
    name: "PageTablePagination",
    component: () => import(/* webpackChunkName: "PageTablePagination" */ "../views/PageTable/PageTablePagination/PageTablePagination.vue"),
  },
  {
    path: "/table-sort",
    name: "PageTableSort",
    component: () => import(/* webpackChunkName: "PageTableSort" */ "../views/PageTable/PageTableSort/PageTableSort.vue"),
  },
  {
    path: "/table-filters",
    name: "PageTableFilters",
    component: () => import(/* webpackChunkName: "PageTableFilters" */ "../views/PageTable/PageTableFilters/PageTableFilters.vue"),
  },
  {
    path: "/table-preview",
    name: "PageTablePreview",
    component: () => import(/* webpackChunkName: "PageTablePreview" */ "../views/PageTable/PageTablePreview/PageTablePreview.vue"),
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
    component: () => import(/* webpackChunkName: "PageInput" */ "../views/Form/PageInput/PageInput.vue"),
  },
  {
    path: "/json",
    name: "PageAJson",
    component: () => import(/* webpackChunkName: "PageAJson" */ "../views/Form/PageAJson/PageAJson.vue"),
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
    path: "/rate",
    name: "PageRate",
    component: () => import(/* webpackChunkName: "PageAlert" */ "../views/PageRate/PageRate.vue"),
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
    path: "/checkbox",
    name: "PageCheckbox",
    component: () => import(/* webpackChunkName: "PageCheckbox" */ "../views/Form/PageCheckbox/PageCheckbox.vue"),
  },
  {
    path: "/radio",
    name: "PageRadio",
    component: () => import(/* webpackChunkName: "PageRadio" */ "../views/Form/PageRadio/PageRadio.vue"),
  },
  {
    path: "/fieldset",
    name: "PageFieldset",
    component: () => import(/* webpackChunkName: "PageFieldset" */ "../views/Form/PageFieldset/PageFieldset.vue"),
  },
  {
    path: "/select",
    name: "PageSelect",
    component: () => import(/* webpackChunkName: "PageSelect" */ "../views/Form/PageSelect/PageSelect.vue"),
  },
  {
    path: "/form",
    name: "PageForm",
    component: () => import(/* webpackChunkName: "PageForm" */ "../views/Form/PageForm/PageForm.vue"),
  },
  {
    path: "/dropdown",
    name: "PageDropdown",
    component: () => import(/* webpackChunkName: "PageDropdown" */ "../views/PageDropdown/PageDropdown.vue"),
  },
  {
    path: "/tabs",
    name: "PageTabs",
    component: () => import(/* webpackChunkName: "PageTabs" */ "../views/PageTabs/PageTabs.vue"),
  },
  {
    path: "/progress",
    name: "PageProgress",
    component: () => import(/* webpackChunkName: "PageProgress" */ "../views/Progress/PageProgress/PageProgress.vue"),
  },
  {
    path: "/progress-circle",
    name: "PageProgressCircle",
    component: () => import(/* webpackChunkName: "PageProgressCircle" */ "../views/Progress/PageProgressCircle/PageProgressCircle.vue"),
  },
  {
    path: "/list",
    name: "PageList",
    component: () => import(/* webpackChunkName: "PageList" */ "../views/PageList/PageList.vue"),
  },
  {
    path: "/datepicker",
    name: "PageDatepicker",
    component: () => import(/* webpackChunkName: "PageDatepicker" */ "../views/Form/PageDatepicker/PageDatepicker.vue"),
  },
  {
    path: "/tinymce",
    name: "PageTinyMce",
    component: () => import(/* webpackChunkName: "PageTinyMce" */ "../views/Form/PageTinyMce/PageTinyMce.vue"),
  },
  {
    path: "/loading",
    name: "PageLoading",
    component: () => import(/* webpackChunkName: "PageLoading" */ "../views/PageLoading/PageLoading.vue"),
  },
  {
    path: "/scale",
    name: "PageScale",
    component: () => import(/* webpackChunkName: "PageScale" */ "../views/PageScale/PageScale.vue"),
  },
  {
    path: "/title",
    name: "PageTitle",
    component: () => import(/* webpackChunkName: "PageTitle" */ "../views/PageTooltip/PageTooltip.vue"),
  },
  {
    path: "/svg",
    name: "PageSvg",
    component: () => import(/* webpackChunkName: "PageSvg" */ "../views/PageSvg/PageSvg.vue"),
  },
  {
    path: "/wizard",
    name: "PageWizard",
    component: () => import(/* webpackChunkName: "PageWizard" */ "../views/PageWizard/PageWizard.vue"),
  },
  {
    path: "/input-number",
    name: "PageInputNumber",
    component: () => import(/* webpackChunkName: "PageInputNumber" */ "../views/Form/PageInputNumber/PageInputNumber.vue"),
  },
  {
    path: "/group-button-dropdown",
    name: "PageGroupButtonDropdown",
    component: () => import(/* webpackChunkName: "PageGroupButtonDropdown" */ "../views/PageGroupButtonDropdown/PageGroupButtonDropdown.vue"),
  },
  {
    path: "/show-more",
    name: "PageShowMore",
    component: () => import(/* webpackChunkName: "PageShowMore" */ "../views/PageShowMore/PageShowMore.vue"),
  },
  {
    path: "/api",
    name: "PageApi",
    component: () => import(/* webpackChunkName: "PageApi" */ "../views/PageApi/PageApi.vue"),
  },
  {
    path: "/translation",
    name: "PageTranslation",
    component: () => import(/* webpackChunkName: "PageTranslation" */ "../views/PageTranslation/PageTranslation.vue"),
  },
  {
    path: "/button",
    name: "PageButton",
    component: () => import(/* webpackChunkName: "PageButton" */ "../views/PageButton/PageButton.vue"),
  },
  {
    path: "/link",
    name: "PageLink",
    component: () => import(/* webpackChunkName: "PageLink" */ "../views/PageLink/PageLink.vue"),
  },
  {
    path: "/link-copy",
    name: "PageLinkCopy",
    component: () => import(/* webpackChunkName: "PageLinkCopy" */ "../views/PageLinkCopy/PageLinkCopy.vue"),
  },
  {
    path: "/on-hooks",
    name: "PageOnHooks",
    component: () => import(/* webpackChunkName: "PageOnHooks" */ "../views/PageDirectives/PageOnHooks/PageOnHooks.vue"),
  },
  {
    path: "/disclosure",
    name: "PageDisclosure",
    component: () => import(/* webpackChunkName: "PageDisclosure" */ "../views/PageDisclosure/PageDisclosure.vue"),
  },
  {
    path: "/columns",
    name: "PageColumns",
    component: () => import(/* webpackChunkName: "PageColumns" */ "../views/CSS/PageColumns/PageColumns.vue"),
  },
  {
    path: "/input-number-range",
    name: "PageInputNumberRange",
    component: () => import(/* webpackChunkName: "PageInputNumberRange" */ "../views/Form/PageInputNumberRange/PageInputNumberRange.vue"),
  },
  {
    // If the routing configuration '*' reports an error, replace it with '/: catchAll(. *)'
    // caught Error: Catch all routes ("*") must now be defined using a param with a custom regexp
    path: "/:catchAll(.*)", // Special attention should be paid to the bottom
    redirect: "/404",
  }
];

const ROUTER = createRouter({
  history: createWebHashHistory(),
  routes: ROUTES,
});

export default ROUTER;
