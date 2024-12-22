import {
  createRouter,
  createWebHistory,
} from "vue-router";

const ROUTES = [
  {
    path: "/404",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/",
    name: "PageStart",
    component: () => import("../views/PageStart/PageStart.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/table-complex",
    name: "PageTableComplex",
    component: () => import("../views/PageTable/PageTableComplex/PageTableComplex.vue"),
  },
  {
    path: "/table-simple",
    name: "PageTableSimple",
    component: () => import("../views/PageTable/PageTableSimple/PageTableSimple.vue"),
  },
  {
    path: "/table-pagination",
    name: "PageTablePagination",
    component: () => import("../views/PageTable/PageTablePagination/PageTablePagination.vue"),
  },
  {
    path: "/table-sort",
    name: "PageTableSort",
    component: () => import("../views/PageTable/PageTableSort/PageTableSort.vue"),
  },
  {
    path: "/table-preview",
    name: "PageTablePreview",
    component: () => import("../views/PageTable/PageTablePreview/PageTablePreview.vue"),
  },
  {
    path: "/table-preview-down",
    name: "PageTablePreviewDown",
    component: () => import("../views/PageTable/PageTablePreviewDown/PageTablePreviewDown.vue"),
  },
  {
    path: "/table-tree",
    name: "PageTableTree",
    component: () => import("../views/PageTable/PageTableTree/PageTableTree.vue"),
  },
  {
    path: "/spinner",
    name: "PageSpinner",
    component: () => import("../views/PageSpinner/PageSpinner.vue"),
  },
  {
    path: "/collapse",
    name: "PageCollapse",
    component: () => import("../views/PageCollapse/PageCollapse.vue"),
  },
  {
    path: "/cloak",
    name: "PageCloak",
    component: () => import("../views/PageCloak/PageCloak.vue"),
  },
  {
    path: "/input",
    name: "PageInput",
    component: () => import("../views/Form/PageInput/PageInput.vue"),
  },
  {
    path: "/json",
    name: "PageJson",
    component: () => import("../views/Form/PageJson/PageJson.vue"),
  },
  {
    path: "/switch",
    name: "PageSwitch",
    component: () => import("../views/Form/PageSwitch/PageSwitch.vue"),
  },
  {
    path: "/one-checkbox",
    name: "PageOneCheckbox",
    component: () => import("../views/Form/PageOneCheckbox/PageOneCheckbox.vue"),
  },
  {
    path: "/textarea",
    name: "PageTextarea",
    component: () => import("../views/Form/PageTextarea/PageTextarea.vue"),
  },
  {
    path: "/accordion",
    name: "PageAccordion",
    component: () => import("../views/PageAccordion/PageAccordion.vue"),
  },
  {
    path: "/datepicker-range",
    name: "PageDatepickerRange",
    component: () => import("../views/Form/PageDatepickerRange/PageDatepickerRange.vue"),
  },
  {
    path: "/alert",
    name: "PageAlert",
    component: () => import("../views/PageAlert/PageAlert.vue"),
  },
  {
    path: "/rate",
    name: "PageRate",
    component: () => import("../views/PageRate/PageRate.vue"),
  },
  {
    path: "/modal",
    name: "PageModal",
    component: () => import("../views/PageModal/PageModal.vue"),
  },
  {
    path: "/confirm",
    name: "PageConfirm",
    component: () => import("../views/PageConfirm/PageConfirm.vue"),
  },
  {
    path: "/notification",
    name: "PageNotification",
    component: () => import("../views/PageNotification/PageNotification.vue"),
  },
  {
    path: "/checkbox",
    name: "PageCheckbox",
    component: () => import("../views/Form/PageCheckbox/PageCheckbox.vue"),
  },
  {
    path: "/radio",
    name: "PageRadio",
    component: () => import("../views/Form/PageRadio/PageRadio.vue"),
  },
  {
    path: "/fieldset",
    name: "PageFieldset",
    component: () => import("../views/Form/PageFieldset/PageFieldset.vue"),
  },
  {
    path: "/fieldset-children",
    name: "PageFieldsetChildren",
    component: () => import("../views/Form/PageFieldsetChildren/PageFieldsetChildren.vue"),
  },
  {
    path: "/select",
    name: "PageSelect",
    component: () => import("../views/Form/PageSelect/PageSelect.vue"),
  },
  {
    path: "/form",
    name: "PageForm",
    component: () => import("../views/Form/PageForm/PageForm.vue"),
  },
  {
    path: "/dropdown",
    name: "PageDropdown",
    component: () => import("../views/PageDropdown/PageDropdown.vue"),
  },
  {
    path: "/tabs",
    name: "PageTabs",
    component: () => import("../views/PageTabs/PageTabs.vue"),
  },
  {
    path: "/progress",
    name: "PageProgress",
    component: () => import("../views/Progress/PageProgress/PageProgress.vue"),
  },
  {
    path: "/progress-circle",
    name: "PageProgressCircle",
    component: () => import("../views/Progress/PageProgressCircle/PageProgressCircle.vue"),
  },
  {
    path: "/list",
    name: "PageList",
    component: () => import("../views/PageList/PageList.vue"),
  },
  {
    path: "/datepicker",
    name: "PageDatepicker",
    component: () => import("../views/Form/PageDatepicker/PageDatepicker.vue"),
  },
  {
    path: "/loading",
    name: "PageLoading",
    component: () => import("../views/PageLoading/PageLoading.vue"),
  },
  {
    path: "/scale",
    name: "PageScale",
    component: () => import("../views/PageScale/PageScale.vue"),
  },
  {
    path: "/title",
    name: "PageTitle",
    component: () => import("../views/PageTooltip/PageTooltip.vue"),
  },
  {
    path: "/svg",
    name: "PageSvg",
    component: () => import("../views/PageSvg/PageSvg.vue"),
  },
  {
    path: "/wizard",
    name: "PageWizard",
    component: () => import("../views/PageWizard/PageWizard.vue"),
  },
  {
    path: "/input-number",
    name: "PageInputNumber",
    component: () => import("../views/Form/PageInputNumber/PageInputNumber.vue"),
  },
  {
    path: "/input-currency",
    name: "PageInputCurrency",
    component: () => import("../views/Form/PageInputCurrency/PageInputCurrency.vue"),
  },
  {
    path: "/template",
    name: "PageTemplate",
    component: () => import("../views/Form/PageTemplate/PageTemplate.vue"),
  },
  {
    path: "/group-button-dropdown",
    name: "PageGroupButtonDropdown",
    component: () => import("../views/PageGroupButtonDropdown/PageGroupButtonDropdown.vue"),
  },
  {
    path: "/show-more",
    name: "PageShowMore",
    component: () => import("../views/PageShowMore/PageShowMore.vue"),
  },
  {
    path: "/api",
    name: "PageApi",
    component: () => import("../views/PageApi/PageApi.vue"),
  },
  {
    path: "/translation",
    name: "PageTranslation",
    component: () => import("../views/PageTranslation/PageTranslation.vue"),
  },
  {
    path: "/button",
    name: "PageButton",
    component: () => import("../views/PageButton/PageButton.vue"),
  },
  {
    path: "/group",
    name: "PageGroup",
    component: () => import("../views/Form/PageGroup/PageGroup.vue"),
  },
  {
    path: "/link",
    name: "PageLink",
    component: () => import("../views/PageLink/PageLink.vue"),
  },
  {
    path: "/link-copy",
    name: "PageLinkCopy",
    component: () => import("../views/PageLinkCopy/PageLinkCopy.vue"),
  },
  {
    path: "/on-hooks",
    name: "PageOnHooks",
    component: () => import("../views/PageDirectives/PageOnHooks/PageOnHooks.vue"),
  },
  {
    path: "/disclosure",
    name: "PageDisclosure",
    component: () => import("../views/PageDisclosure/PageDisclosure.vue"),
  },
  {
    path: "/columns",
    name: "PageColumns",
    component: () => import("../views/CSS/PageColumns/PageColumns.vue"),
  },
  {
    path: "/input-number-range",
    name: "PageInputNumberRange",
    component: () => import("../views/Form/PageInputNumberRange/PageInputNumberRange.vue"),
  },
  {
    path: "/filters",
    name: "PageFilters",
    component: () => import("../views/PageFilters/PageFilters.vue"),
  },
  {
    path: "/filters-right",
    name: "PageFiltersRight",
    component: () => import("../views/PageFiltersRight/PageFiltersRight.vue"),
  },
  {
    path: "/modal-wizard",
    name: "PageModalWizard",
    component: () => import("../views/PageModalWizard/PageModalWizard.vue"),
  },
  {
    path: "/menu-basic",
    name: "PageMenuBasic",
    component: () => import("../views/PageMenu/PageMenuBasic/PageMenuBasic.vue"),
  },
  {
    path: "/filter-list",
    name: "PageFilterList",
    component: () => import("../views/Functions/Filters/PageFilterList/PageFilterList.vue"),
  },
  {
    path: "/filter-limit-to",
    name: "PageFilterLimitTo",
    component: () => import("../views/Functions/Filters/PageFilterLimitTo/PageFilterLimitTo.vue"),
  },
  {
    path: "/filter-boolean",
    name: "PageFilterBoolean",
    component: () => import("../views/Functions/Filters/PageFilterBoolean/PageFilterBoolean.vue"),
  },
  {
    path: "/filter-default-for-empty",
    name: "PageFilterDefaultForEmpty",
    component: () => import("../views/Functions/Filters/PageFilterDefaultForEmpty/PageFilterDefaultForEmpty.vue"),
  },
  {
    path: "/filter-email",
    name: "PageFilterEmail",
    component: () => import("../views/Functions/Filters/PageFilterEmail/PageFilterEmail.vue"),
  },
  {
    path: "/filter-escape-html",
    name: "PageFilterEscapeHTML",
    component: () => import("../views/Functions/Filters/PageFilterEscapeHTML/PageFilterEscapeHTML.vue"),
  },
  {
    path: "/filter-property-by-value",
    name: "PageFilterPropertyByValue",
    component: () => import("../views/Functions/Filters/PageFilterPropertyByValue/PageFilterPropertyByValue.vue"),
  },
  {
    path: "/filter-search-highlight",
    name: "PageFilterSearchHighlight",
    component: () => import("../views/Functions/Filters/PageFilterSearchHighlight/PageFilterSearchHighlight.vue"),
  },
  {
    path: "/filter-upper-case",
    name: "PageFilterUpperCase",
    component: () => import("../views/Functions/Filters/PageFilterUpperCase/PageFilterUpperCase.vue"),
  },
  {
    path: "/filter-mask",
    name: "PageFilterMask",
    component: () => import("../views/Functions/Filters/PageFilterMask/PageFilterMask.vue"),
  },
  {
    path: "/filter-capitalize",
    name: "PageFilterCapitalize",
    component: () => import("../views/Functions/Filters/PageFilterCapitalize/PageFilterCapitalize.vue"),
  },
  {
    path: "/filter-link",
    name: "PageFilterLink",
    component: () => import("../views/Functions/Filters/PageFilterLink/PageFilterLink.vue"),
  },
  {
    path: "/filter-lower-case",
    name: "PageFilterLowerCase",
    component: () => import("../views/Functions/Filters/PageFilterLowerCase/PageFilterLowerCase.vue"),
  },
  {
    path: "/filter-json",
    name: "PageFilterJson",
    component: () => import("../views/Functions/Filters/PageFilterJson/PageFilterJson.vue"),
  },
  {
    path: "/filter-key-value",
    name: "PageFilterKeyValue",
    component: () => import("../views/Functions/Filters/PageFilterKeyValue/PageFilterKeyValue.vue"),
  },
  {
    path: "/filter-file-size",
    name: "PageFilterFileSize",
    component: () => import("../views/Functions/Filters/PageFilterFileSize/PageFilterFileSize.vue"),
  },
  {
    path: "/filter-date",
    name: "PageFilterDate",
    component: () => import("../views/Functions/Filters/PageFilterDate/PageFilterDate.vue"),
  },
  {
    path: "/filter-float",
    name: "PageFilterFloat",
    component: () => import("../views/Functions/Filters/PageFilterFloat/PageFilterFloat.vue"),
  },
  {
    path: "/filter-currency",
    name: "PageFilterCurrency",
    component: () => import("../views/Functions/Filters/PageFilterCurrency/PageFilterCurrency.vue"),
  },
  {
    path: "/utils-is-odd",
    name: "PageUtilsMathIsOdd",
    component: () => import("../views/Functions/UtilsMath/PageUtilsMathIsOdd/PageUtilsMathIsOdd.vue"),
  },
  {
    path: "/utils-is-even",
    name: "PageUtilsMathIsEven",
    component: () => import("../views/Functions/UtilsMath/PageUtilsMathIsEven/PageUtilsMathIsEven.vue"),
  },
  {
    path: "/utils-is-array-of-strings",
    name: "PageUtilsIsArrayOfStrings",
    component: () => import("../views/Functions/Utils/PageUtilsIsArrayOfStrings/PageUtilsIsArrayOfStrings.vue"),
  },
  {
    path: "/utils-is-array-of-arrays",
    name: "PageUtilsIsArrayOfArrays",
    component: () => import("../views/Functions/Utils/PageUtilsIsArrayOfArrays/PageUtilsIsArrayOfArrays.vue"),
  },
  {
    path: "/utils-get-total-nested-count",
    name: "PageUtilsGetTotalNestedCount",
    component: () => import("../views/Functions/Utils/PageUtilsGetTotalNestedCount/PageUtilsGetTotalNestedCount.vue"),
  },
  {
    // If the routing configuration '*' reports an error, replace it with '/: catchAll(. *)'
    // caught Error: Catch all routes ("*") must now be defined using a param with a custom regexp
    path: "/:catchAll(.*)", // Special attention should be paid to the bottom
    redirect: "/404",
  }
];

const ROUTER = createRouter({
  history: createWebHistory("/aloha/"),
  routes: ROUTES,
});

export default ROUTER;
