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
    path: "/aloha/:id/:aloha",
    name: "NotFoundTest",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/",
    name: "PageStart",
    component: () => import("../views/PageStart/PageStart.vue"),
  },
  // Installation
  {
    path: "/quick-start",
    name: "PageQuickStart",
    component: () => import("../views/Installation/PageQuickStart/PageQuickStart.vue"),
  },
  // Migrations PageMigrationsVersion1To2
  {
    path: "/migration-1.2.x-2.0.x",
    name: "PageMigrationsVersion1To2",
    component: () => import("../views/Migrations/PageMigrationsVersion1To2/PageMigrationsVersion1To2.vue"),
  },
  // Plugins
  {
    path: "/alert-plugin",
    name: "PageAlertPlugin",
    component: () => import("../views/Plugins/PageAlertPlugin/PageAlertPlugin.vue"),
  },
  {
    path: "/cloak-plugin",
    name: "PageCloakPlugin",
    component: () => import("../views/Plugins/PageCloakPlugin/PageCloakPlugin.vue"),
  },
  {
    path: "/icon-plugin",
    name: "PageIconsPlugin",
    component: () => import("../views/Plugins/PageIconsPlugin/PageIconsPlugin.vue"),
  },
  {
    path: "/loading-plugin",
    name: "PageLoadingPlugin",
    component: () => import("../views/Plugins/PageLoadingPlugin/PageLoadingPlugin.vue"),
  },
  {
    path: "/mobile-plugin",
    name: "PageMobilePlugin",
    component: () => import("../views/Plugins/PageMobilePlugin/PageMobilePlugin.vue"),
  },
  {
    path: "/spinner-plugin",
    name: "PageSpinnerPlugin",
    component: () => import("../views/Plugins/PageSpinnerPlugin/PageSpinnerPlugin.vue"),
  },
  {
    path: "/page-tab-title-plugin",
    name: "PagePageTabTitlePlugin",
    component: () => import("../views/Plugins/PagePageTabTitlePlugin/PagePageTabTitlePlugin.vue"),
  },
  {
    path: "/table-complex",
    name: "PageTableComplex",
    component: () => import("../views/Components/PageTable/PageTableComplex/PageTableComplex.vue"),
  },
  {
    path: "/table-simple",
    name: "PageTableSimple",
    component: () => import("../views/Components/PageTable/PageTableSimple/PageTableSimple.vue"),
  },
  {
    path: "/table-pagination",
    name: "PageTablePagination",
    component: () => import("../views/Components/PageTable/PageTablePagination/PageTablePagination.vue"),
  },
  {
    path: "/table-sort",
    name: "PageTableSort",
    component: () => import("../views/Components/PageTable/PageTableSort/PageTableSort.vue"),
  },
  {
    path: "/table-preview",
    name: "PageTablePreview",
    component: () => import("../views/Components/PageTable/PageTablePreview/PageTablePreview.vue"),
  },
  {
    path: "/table-preview-down",
    name: "PageTablePreviewDown",
    component: () => import("../views/Components/PageTable/PageTablePreviewDown/PageTablePreviewDown.vue"),
  },
  {
    path: "/table-tree",
    name: "PageTableTree",
    component: () => import("../views/Components/PageTable/PageTableTree/PageTableTree.vue"),
  },
  {
    path: "/spinner",
    name: "PageSpinner",
    component: () => import("../views/Components/PageSpinner/PageSpinner.vue"),
  },
  {
    path: "/collapse",
    name: "PageCollapse",
    component: () => import("../views/Components/PageCollapse/PageCollapse.vue"),
  },
  {
    path: "/cloak",
    name: "PageCloak",
    component: () => import("../views/Components/PageCloak/PageCloak.vue"),
  },
  {
    path: "/carousel",
    name: "PageCarousel",
    component: () => import("../views/Components/PageCarousel/PageCarousel.vue"),
  },
  {
    path: "/input",
    name: "PageInput",
    component: () => import("../views/Components/Form/PageInput/PageInput.vue"),
  },
  {
    path: "/json",
    name: "PageJson",
    component: () => import("../views/Components/Form/PageJson/PageJson.vue"),
  },
  {
    path: "/switch",
    name: "PageSwitch",
    component: () => import("../views/Components/Form/PageSwitch/PageSwitch.vue"),
  },
  {
    path: "/one-checkbox",
    name: "PageOneCheckbox",
    component: () => import("../views/Components/Form/PageOneCheckbox/PageOneCheckbox.vue"),
  },
  {
    path: "/textarea",
    name: "PageTextarea",
    component: () => import("../views/Components/Form/PageTextarea/PageTextarea.vue"),
  },
  {
    path: "/accordion",
    name: "PageAccordion",
    component: () => import("../views/Components/PageAccordion/PageAccordion.vue"),
  },
  {
    path: "/datepicker-range",
    name: "PageDatepickerRange",
    component: () => import("../views/Components/Form/PageDatepickerRange/PageDatepickerRange.vue"),
  },
  {
    path: "/alert",
    name: "PageAlert",
    component: () => import("../views/Components/PageAlert/PageAlert.vue"),
  },
  {
    path: "/rate",
    name: "PageRate",
    component: () => import("../views/Components/PageRate/PageRate.vue"),
  },
  {
    path: "/modal",
    name: "PageModal",
    component: () => import("../views/Components/PageModal/PageModal.vue"),
  },
  {
    path: "/confirm",
    name: "PageConfirm",
    component: () => import("../views/Components/PageConfirm/PageConfirm.vue"),
  },
  {
    path: "/notification",
    name: "PageNotification",
    component: () => import("../views/Components/PageNotification/PageNotification.vue"),
  },
  {
    path: "/checkbox",
    name: "PageCheckbox",
    component: () => import("../views/Components/Form/PageCheckbox/PageCheckbox.vue"),
  },
  {
    path: "/radio",
    name: "PageRadio",
    component: () => import("../views/Components/Form/PageRadio/PageRadio.vue"),
  },
  {
    path: "/fieldset",
    name: "PageFieldset",
    component: () => import("../views/Components/Form/PageFieldset/PageFieldset.vue"),
  },
  {
    path: "/fieldset-children",
    name: "PageFieldsetChildren",
    component: () => import("../views/Components/Form/PageFieldsetChildren/PageFieldsetChildren.vue"),
  },
  {
    path: "/select",
    name: "PageSelect",
    component: () => import("../views/Components/Form/PageSelect/PageSelect.vue"),
  },
  {
    path: "/select-icon",
    name: "PageSelectIcon",
    component: () => import("../views/Components/Form/PageSelectIcon/PageSelectIcon.vue"),
  },
  {
    path: "/select-style",
    name: "PageSelectStyle",
    component: () => import("../views/Components/Form/PageSelectStyle/PageSelectStyle.vue"),
  },
  {
    path: "/slider",
    name: "PageSlider",
    component: () => import("../views/Components/Form/PageSlider/PageSlider.vue"),
  },
  {
    path: "/validated-json",
    name: "PageValidatedJson",
    component: () => import("../views/Components/Form/PageValidatedJson/PageValidatedJson.vue"),
  },
  {
    path: "/form",
    name: "PageForm",
    component: () => import("../views/Components/Form/PageForm/PageForm.vue"),
  },
  {
    path: "/form-element",
    name: "PageFormElement",
    component: () => import("../views/Components/Form/PageFormElement/PageFormElement.vue"),
  },
  {
    path: "/dropdown",
    name: "PageDropdown",
    component: () => import("../views/Components/PageDropdown/PageDropdown.vue"),
  },
  {
    path: "/element",
    name: "PageElement",
    component: () => import("../views/Components/PageElement/PageElement.vue"),
  },
  {
    path: "/tabs",
    name: "PageTabs",
    component: () => import("../views/Components/PageTabs/PageTabs.vue"),
  },
  {
    path: "/progress",
    name: "PageProgress",
    component: () => import("../views/Components/Progress/PageProgress/PageProgress.vue"),
  },
  {
    path: "/progress-circle",
    name: "PageProgressCircle",
    component: () => import("../views/Components/Progress/PageProgressCircle/PageProgressCircle.vue"),
  },
  {
    path: "/list",
    name: "PageList",
    component: () => import("../views/Components/PageList/PageList.vue"),
  },
  {
    path: "/datepicker",
    name: "PageDatepicker",
    component: () => import("../views/Components/Form/PageDatepicker/PageDatepicker.vue"),
  },
  {
    path: "/loading",
    name: "PageLoading",
    component: () => import("../views/Components/PageLoading/PageLoading.vue"),
  },
  {
    path: "/scale",
    name: "PageScale",
    component: () => import("../views/Components/PageScale/PageScale.vue"),
  },
  {
    path: "/title",
    name: "PageTitle",
    component: () => import("../views/Components/PageTooltip/PageTooltip.vue"),
  },
  {
    path: "/svg",
    name: "PageSvg",
    component: () => import("../views/PageSvg/PageSvg.vue"),
  },
  {
    path: "/wizard",
    name: "PageWizard",
    component: () => import("../views/Components/PageWizard/PageWizard.vue"),
  },
  {
    path: "/input-number",
    name: "PageInputNumber",
    component: () => import("../views/Components/Form/PageInputNumber/PageInputNumber.vue"),
  },
  {
    path: "/input-currency",
    name: "PageInputCurrency",
    component: () => import("../views/Components/Form/PageInputCurrency/PageInputCurrency.vue"),
  },
  {
    path: "/template",
    name: "PageTemplate",
    component: () => import("../views/Components/Form/PageTemplate/PageTemplate.vue"),
  },
  {
    path: "/group-button-dropdown",
    name: "PageGroupButtonDropdown",
    component: () => import("../views/Components/PageGroupButtonDropdown/PageGroupButtonDropdown.vue"),
  },
  {
    path: "/multiselect-ordered",
    name: "PageMultiselectOrdered",
    component: () => import("../views/Components/Form/PageMultiselectOrdered/PageMultiselectOrdered.vue"),
  },
  {
    path: "/show-more",
    name: "PageShowMore",
    component: () => import("../views/Components/PageShowMore/PageShowMore.vue"),
  },
  {
    path: "/api",
    name: "PageApi",
    component: () => import("../views/PageApi/PageApi.vue"),
  },
  {
    path: "/translation",
    name: "PageTranslation",
    component: () => import("../views/Components/PageTranslation/PageTranslation.vue"),
  },
  {
    path: "/button",
    name: "PageButton",
    component: () => import("../views/Components/PageButton/PageButton.vue"),
  },
  {
    path: "/group",
    name: "PageGroup",
    component: () => import("../views/Components/Form/PageGroup/PageGroup.vue"),
  },
  {
    path: "/link",
    name: "PageLink",
    component: () => import("../views/Components/PageLink/PageLink.vue"),
  },
  {
    path: "/link-copy",
    name: "PageLinkCopy",
    component: () => import("../views/Components/PageLinkCopy/PageLinkCopy.vue"),
  },
  {
    path: "/on-hooks",
    name: "PageOnHooks",
    component: () => import("../views/Directives/PageOnHooks/PageOnHooks.vue"),
  },
  {
    path: "/disclosure",
    name: "PageDisclosure",
    component: () => import("../views/Components/PageDisclosure/PageDisclosure.vue"),
  },
  {
    path: "/columns",
    name: "PageColumns",
    component: () => import("../views/CSS/PageColumns/PageColumns.vue"),
  },
  {
    path: "/badge",
    name: "PageBadge",
    component: () => import("../views/CSS/PageBadge/PageBadge.vue"),
  },
  {
    path: "/text",
    name: "PageText",
    component: () => import("../views/CSS/PageText/PageText.vue"),
  },
  {
    path: "/input-number-range",
    name: "PageInputNumberRange",
    component: () => import("../views/Components/Form/PageInputNumberRange/PageInputNumberRange.vue"),
  },
  {
    path: "/filters",
    name: "PageFilters",
    component: () => import("../views/Components/PageFilters/PageFilters.vue"),
  },
  {
    path: "/filters-right",
    name: "PageFiltersRight",
    component: () => import("../views/Components/PageFiltersRight/PageFiltersRight.vue"),
  },
  {
    path: "/modal-wizard",
    name: "PageModalWizard",
    component: () => import("../views/Components/PageModalWizard/PageModalWizard.vue"),
  },
  {
    path: "/menu-basic",
    name: "PageMenuBasic",
    component: () => import("../views/Components/PageMenu/PageMenuBasic/PageMenuBasic.vue"),
  },
  {
    path: "/router-link-config",
    name: "PageRouterLinkConfig",
    component: () => import("../views/Components/Form/PageRouterLinkConfig/PageRouterLinkConfig.vue"),
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
    path: "/utils-a-order-by",
    name: "PageUtilsAOrderBy",
    component: () => import("../views/Functions/Utils/PageUtilsAOrderBy/PageUtilsAOrderBy.vue"),
  },
  {
    path: "/utils-a-sort-by",
    name: "PageUtilsASortBy",
    component: () => import("../views/Functions/Utils/PageUtilsASortBy/PageUtilsASortBy.vue"),
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
    /*
     * If the routing configuration '*' reports an error, replace it with '/: catchAll(. *)'
     * caught Error: Catch all routes ("*") must now be defined using a param with a custom regexp
     */
    path: "/:catchAll(.*)", // Special attention should be paid to the bottom
    redirect: "/404",
  },
];

const ROUTER = createRouter({
  history: createWebHistory("/aloha/"),
  routes: ROUTES,
});

export default ROUTER;
