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
    path: "/table-preview",
    name: "PageTablePreview",
    component: () => import(/* webpackChunkName: "PageTablePreview" */ "../views/PageTable/PageTablePreview/PageTablePreview.vue"),
  },
  {
    path: "/table-preview-down",
    name: "PageTablePreviewDown",
    component: () => import(/* webpackChunkName: "PageTablePreviewDown" */ "../views/PageTable/PageTablePreviewDown/PageTablePreviewDown.vue"),
  },
  {
    path: "/table-tree",
    name: "PageTableTree",
    component: () => import(/* webpackChunkName: "PageTableTree" */ "../views/PageTable/PageTableTree/PageTableTree.vue"),
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
    name: "PageJson",
    component: () => import(/* webpackChunkName: "PageJson" */ "../views/Form/PageJson/PageJson.vue"),
  },
  {
    path: "/switch",
    name: "PageSwitch",
    component: () => import(/* webpackChunkName: "PageSwitch" */ "../views/Form/PageSwitch/PageSwitch.vue"),
  },
  {
    path: "/one-checkbox",
    name: "PageOneCheckbox",
    component: () => import(/* webpackChunkName: "PageOneCheckbox" */ "../views/Form/PageOneCheckbox/PageOneCheckbox.vue"),
  },
  {
    path: "/textarea",
    name: "PageTextarea",
    component: () => import(/* webpackChunkName: "PageTextarea" */ "../views/Form/PageTextarea/PageTextarea.vue"),
  },
  {
    path: "/accordion",
    name: "PageAccordion",
    component: () => import(/* webpackChunkName: "PageAccordionBootstrap" */ "../views/PageAccordion/PageAccordion.vue"),
  },
  {
    path: "/datepicker-range",
    name: "PageDatepickerRange",
    component: () => import(/* webpackChunkName: "PageDatepickerRange" */ "../views/Form/PageDatepickerRange/PageDatepickerRange.vue"),
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
    path: "/fieldset-children",
    name: "PageFieldsetChildren",
    component: () => import(/* webpackChunkName: "PageFieldsetChildren" */ "../views/Form/PageFieldsetChildren/PageFieldsetChildren.vue"),
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
    path: "/input-currency",
    name: "PageInputCurrency",
    component: () => import(/* webpackChunkName: "PageInputNumber" */ "../views/Form/PageInputCurrency/PageInputCurrency.vue"),
  },
  {
    path: "/template",
    name: "PageTemplate",
    component: () => import(/* webpackChunkName: "PageTemplate" */ "../views/Form/PageTemplate/PageTemplate.vue"),
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
    path: "/group",
    name: "PageGroup",
    component: () => import(/* webpackChunkName: "PageGroup" */ "../views/Form/PageGroup/PageGroup.vue"),
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
    path: "/filters",
    name: "PageFilters",
    component: () => import(/* webpackChunkName: "PageFilters" */ "../views/PageFilters/PageFilters.vue"),
  },
  {
    path: "/filters-right",
    name: "PageFiltersRight",
    component: () => import(/* webpackChunkName: "PageFiltersRight" */ "../views/PageFiltersRight/PageFiltersRight.vue"),
  },
  {
    path: "/modal-wizard",
    name: "PageModalWizard",
    component: () => import(/* webpackChunkName: "PageModalWizard" */ "../views/PageModalWizard/PageModalWizard.vue"),
  },
  {
    path: "/menu-basic",
    name: "PageMenuBasic",
    component: () => import(/* webpackChunkName: "PageMenuBasic" */ "../views/PageMenu/PageMenuBasic/PageMenuBasic.vue"),
  },
  {
    path: "/filter-list",
    name: "PageFilterList",
    component: () => import(/* webpackChunkName: "PageFilterList" */ "../views/Functions/Filters/PageFilterList/PageFilterList.vue"),
  },
  {
    path: "/filter-limit-to",
    name: "PageFilterLimitTo",
    component: () => import(/* webpackChunkName: "PageFilterLimitTo" */ "../views/Functions/Filters/PageFilterLimitTo/PageFilterLimitTo.vue"),
  },
  {
    path: "/filter-boolean",
    name: "PageFilterBoolean",
    component: () => import(/* webpackChunkName: "PageFilterBoolean" */ "../views/Functions/Filters/PageFilterBoolean/PageFilterBoolean.vue"),
  },
  {
    path: "/filter-default-for-empty",
    name: "PageFilterDefaultForEmpty",
    component: () => import(/* webpackChunkName: "PageFilterDefaultForEmpty" */ "../views/Functions/Filters/PageFilterDefaultForEmpty/PageFilterDefaultForEmpty.vue"),
  },
  {
    path: "/filter-email",
    name: "PageFilterEmail",
    component: () => import(/* webpackChunkName: "PageFilterEmail" */ "../views/Functions/Filters/PageFilterEmail/PageFilterEmail.vue"),
  },
  {
    path: "/filter-escape-html",
    name: "PageFilterEscapeHTML",
    component: () => import(/* webpackChunkName: "PageFilterEscapeHTML" */ "../views/Functions/Filters/PageFilterEscapeHTML/PageFilterEscapeHTML.vue"),
  },
  {
    path: "/filter-property-by-value",
    name: "PageFilterPropertyByValue",
    component: () => import(/* webpackChunkName: "PageFilterPropertyByValue" */ "../views/Functions/Filters/PageFilterPropertyByValue/PageFilterPropertyByValue.vue"),
  },
  {
    path: "/filter-search-highlight",
    name: "PageFilterSearchHighlight",
    component: () => import(/* webpackChunkName: "PageFilterSearchHighlight" */ "../views/Functions/Filters/PageFilterSearchHighlight/PageFilterSearchHighlight.vue"),
  },
  {
    path: "/filter-upper-case",
    name: "PageFilterUpperCase",
    component: () => import(/* webpackChunkName: "PageFilterUpperCase" */ "../views/Functions/Filters/PageFilterUpperCase/PageFilterUpperCase.vue"),
  },
  {
    path: "/filter-mask",
    name: "PageFilterMask",
    component: () => import(/* webpackChunkName: "PageFilterMask" */ "../views/Functions/Filters/PageFilterMask/PageFilterMask.vue"),
  },
  {
    path: "/filter-capitalize",
    name: "PageFilterCapitalize",
    component: () => import(/* webpackChunkName: "PageFilterCapitalize" */ "../views/Functions/Filters/PageFilterCapitalize/PageFilterCapitalize.vue"),
  },
  {
    path: "/filter-link",
    name: "PageFilterLink",
    component: () => import(/* webpackChunkName: "PageFilterLink" */ "../views/Functions/Filters/PageFilterLink/PageFilterLink.vue"),
  },
  {
    path: "/filter-lower-case",
    name: "PageFilterLowerCase",
    component: () => import(/* webpackChunkName: "PageFilterLowerCase" */ "../views/Functions/Filters/PageFilterLowerCase/PageFilterLowerCase.vue"),
  },
  {
    path: "/filter-json",
    name: "PageFilterJson",
    component: () => import(/* webpackChunkName: "PageFilterJson" */ "../views/Functions/Filters/PageFilterJson/PageFilterJson.vue"),
  },
  {
    path: "/filter-key-value",
    name: "PageFilterKeyValue",
    component: () => import(/* webpackChunkName: "PageFilterKeyValue" */ "../views/Functions/Filters/PageFilterKeyValue/PageFilterKeyValue.vue"),
  },
  {
    path: "/filter-file-size",
    name: "PageFilterFileSize",
    component: () => import(/* webpackChunkName: "PageFilterFileSize" */ "../views/Functions/Filters/PageFilterFileSize/PageFilterFileSize.vue"),
  },
  {
    path: "/filter-date",
    name: "PageFilterDate",
    component: () => import(/* webpackChunkName: "PageFilterDate" */ "../views/Functions/Filters/PageFilterDate/PageFilterDate.vue"),
  },
  {
    path: "/filter-float",
    name: "PageFilterFloat",
    component: () => import(/* webpackChunkName: "PageFilterFloat" */ "../views/Functions/Filters/PageFilterFloat/PageFilterFloat.vue"),
  },
  {
    path: "/filter-currency",
    name: "PageFilterCurrency",
    component: () => import(/* webpackChunkName: "PageFilterCurrency" */ "../views/Functions/Filters/PageFilterCurrency/PageFilterCurrency.vue"),
  },
  {
    path: "/utils-is-odd",
    name: "PageUtilsMathIsOdd",
    component: () => import(/* webpackChunkName: "PageUtilsMathIsOdd" */ "../views/Functions/UtilsMath/PageUtilsMathIsOdd/PageUtilsMathIsOdd.vue"),
  },
  {
    path: "/utils-is-even",
    name: "PageUtilsMathIsEven",
    component: () => import(/* webpackChunkName: "PageUtilsMathIsEven" */ "../views/Functions/UtilsMath/PageUtilsMathIsEven/PageUtilsMathIsEven.vue"),
  },
  {
    path: "/utils-is-array-of-strings",
    name: "PageUtilsIsArrayOfStrings",
    component: () => import(/* webpackChunkName: "PageUtilsIsArrayOfStrings" */ "../views/Functions/Utils/PageUtilsIsArrayOfStrings/PageUtilsIsArrayOfStrings.vue"),
  },
  {
    path: "/utils-is-array-of-arrays",
    name: "PageUtilsIsArrayOfArrays",
    component: () => import(/* webpackChunkName: "PageUtilsIsArrayOfArrays" */ "../views/Functions/Utils/PageUtilsIsArrayOfArrays/PageUtilsIsArrayOfArrays.vue"),
  },
  {
    path: "/utils-get-total-nested-count",
    name: "PageUtilsGetTotalNestedCount",
    component: () => import(/* webpackChunkName: "PageUtilsGetTotalNestedCount" */ "../views/Functions/Utils/PageUtilsGetTotalNestedCount/PageUtilsGetTotalNestedCount.vue"),
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
