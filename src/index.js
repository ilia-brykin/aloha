//  components
export { default as AAccordion } from "./AAccordion/AAccordion";
export { default as AAlert } from "./AAlert/AAlert";
export { default as AButton } from "./AButton/AButton";
export { default as ACheckbox } from "./ui/ACheckbox/ACheckbox";
export { default as ACheckboxRadioGroups } from "./ui/ACheckboxRadioGroups/ACheckboxRadioGroups";
export { default as ACloak } from "./ACloak/ACloak";
export { default as ADatepicker } from "./ui/ADatepicker/ADatepicker";
export { default as ADatepickerRange } from "./ui/ADatepickerRange/ADatepickerRange";
export { default as ADisclosure } from "./ADisclosure/ADisclosure";
export { default as ADropdown } from "./ADropdown/ADropdown";
export { default as AElement } from "./AElement/AElement";
export { default as AErrors } from "./ui/AErrors/AErrors";
export { default as AErrorsText } from "./ui/AErrorsText/AErrorsText";
export { default as AFieldset } from "./ui/AFieldset/AFieldset";
export { default as AFilters } from "./AFilters/AFilters/AFilters";
export { default as AFilterCenter } from "./AFilters/AFilterCenter/AFilterCenter";
export { default as AFiltersHorizontal } from "./AFilters/AFiltersHorizontal/AFiltersHorizontal";
export { default as AFiltersRight } from "./AFilters/AFilersRight/AFilersRight";
export { default as AForm } from "./ui/AForm/AForm";
export { default as AFormElement } from "./ui/AFormElement/AFormElement";
export { default as AFormElementBtnClear } from "./ui/AFormElementBtnClear/AFormElementBtnClear";
export { default as AFormHelpText } from "./ui/AFormHelpText/AFormHelpText";
export { default as AFormReadonly } from "./ui/AFormReadonly/AFormReadonly";
export { default as AGet } from "./AGet/AGet";
export { default as AGroup } from "./ui/AGroup/AGroup";
export { default as AGroupButtonDropdown } from "./AGroupButtonDropdown/AGroupButtonDropdown";
export { default as AIcon } from "./AIcon/AIcon";
export { default as AInfiniteScroll } from "./AInfiniteScroll/AInfiniteScroll";
export { default as AInput } from "./ui/AInput/AInput";
export { default as AInputCurrency } from "./ui/AInputCurrency/AInputCurrency";
export { default as AInputFile } from "./ui/AInputFile/AInputFile";
export { default as AInputNumber } from "./ui/AInputNumber/AInputNumber";
export { default as AInputNumberRange } from "./ui/AInputNumberRange/AInputNumberRange";
export { default as AJson } from "./ui/AJson/AJson";
export { default as ALabel } from "./ui/ALabel/ALabel";
export { default as ALink } from "./ALink/ALink";
export { default as ALinkCopy } from "./ALinkCopy/ALinkCopy";
export { default as AList } from "./AList/AList";
export { default as ALoading } from "./ALoading/ALoading";
export { default as AMenu } from "./AMenu/AMenu";
export { default as AMenuButtonToggle } from "./AMenu/AMenuButtonToggle/AMenuButtonToggle";
export { default as AMenuButtonToggle_ToggleAPI } from "./AMenu/AMenuButtonToggle/compositionAPI/ToggleAPI";
export { default as AModal } from "./AModal/AModal";
export { default as AModalConfirm } from "./AModalConfirm/AModalConfirm";
export { default as AModalForm } from "./AModalForm/AModalForm";
export { default as AModalWizard } from "./AModalWizard/AModalWizard";
export { default as AMultiselectOrdered } from "./ui/AMultiselectOrdered/AMultiselectOrdered";
export { default as ANotification } from "./ANotification/ANotification";
export { default as AOneCheckbox } from "./ui/AOneCheckbox/AOneCheckbox";
export { default as APageTabTitle } from "./APageTabTitle/APageTabTitle";
export { default as APagination } from "./APagination/APagination";
export { default as AProgress } from "./AProgress/AProgress";
export { default as AProgressCircle } from "./AProgressCircle/AProgressCircle";
export { default as ARadio } from "./ui/ARadio/ARadio";
export { default as ARate } from "./ARate/ARate";
export { default as ARequired } from "./ui/ARequired/ARequired";
export { default as AResizer } from "./AResizer/AResizer";
export { default as ARouterLinkConfig } from "./ui/ARouterLinkConfig/ARouterLinkConfig";
export { default as AScale } from "./AScale/AScale";
export { default as ASelect } from "./ui/ASelect/ASelect";
export { default as ASelectIcon } from "./ui/ASelectIcon/ASelectIcon";
export { default as AShowMore } from "./AShowMore/AShowMore";
export { default as ASpinner } from "./ASpinner/ASpinner";
export { default as ASwitch } from "./ui/ASwitch/ASwitch";
export { default as ATable } from "./ATable/ATable";
export { default as ATabs } from "./ATabs/ATabs";
export { default as ATemplate } from "./ui/ATemplate/ATemplate";
export { default as ATextarea } from "./ui/ATextarea/ATextarea";
export { default as ATooltip } from "./ATooltip/ATooltip";
export { default as ATranslation } from "./ATranslation/ATranslation";
export { default as AVerticalScroll } from "./AVerticalScroll/AVerticalScroll";
export { default as AWizard } from "./AWizard/AWizard";

//  compositionAPI
export { default as AConfirmAPI } from "./compositionAPI/AConfirmAPI";
export { default as ADropdownGlobalAPI } from "./compositionAPI/ADropdownGlobalAPI";
export { default as AEventOutsideAPI } from "./compositionAPI/AEventOutsideAPI";
export {
  default as AFiltersAPI,
  additionFilters as AFiltersAPI_additionFilters,
} from "./compositionAPI/AFiltersAPI";
export {
  default as AHttpAPI,
  abortHttp as AHttpAPI_abortHttp,
  API_CONFIG as AHttpAPI_API_CONFIG,
  callHttpRequestAndCheckSavedApi as AHttpAPI_callHttpRequestAndCheckSavedApi,
  clearAllApiSaved as AHttpAPI_clearAllApiSaved,
  clearApiSaved as AHttpAPI_clearApiSaved,
  deleteHttp as AHttpAPI_deleteHttp,
  getHttp as AHttpAPI_getHttp,
  getListHttp as AHttpAPI_getListHttp,
  getOptionsHttp as AHttpAPI_getOptionsHttp,
  getUrlParams as AHttpAPI_getUrlParams,
  patchHttp as AHttpAPI_patchHttp,
  postHttp as AHttpAPI_postHttp,
  putHttp as AHttpAPI_putHttp,
  setBaseUrl as AHttpAPI_setBaseUrl,
  setErrorCallbacks as AHttpAPI_setErrorCallbacks,
  setHeaderParams as AHttpAPI_setHeaderParams,
  setUrlForArray as AHttpAPI_setUrlForArray,
  setUrlWithParams as AHttpAPI_setUrlWithParams,
} from "./compositionAPI/AHttpAPI";
export {
  default as AMobileAPI,
  isMobileWidth as AMobileAPI_isMobileWidth,
  setIsMobileWidth as AMobileAPI_setIsMobileWidth,
} from "./compositionAPI/AMobileAPI";
export {
  default as ANotificationAPI,
  addNotification as ANotificationAPI_addNotification,
  setNotificationTimeout as ANotificationAPI_setNotificationTimeout,
} from "./compositionAPI/ANotificationAPI";
export {
  default as APageTabTitleAPI,
  setBaseTitle as APageTabTitleAPI_setBaseTitle,
} from "./compositionAPI/APageTabTitleAPI";
export {
  default as APopupAPI,
  closePopup as APopupAPI_closePopup,
  isCurrentPopupOpen as APopupAPI_isCurrentPopupOpen,
  openPopup as APopupAPI_openPopup,
  togglePopup as APopupAPI_togglePopup,
} from "./compositionAPI/APopupAPI";
export { default as UiAPI } from "./ui/compositionApi/UiAPI";
export { default as UIExcludeRenderAttributesAPI } from "./ui/compositionApi/UIExcludeRenderAttributesAPI";
export { default as UiStyleHideAPI } from "./ui/compositionApi/UiStyleHideAPI";
export { default as UiDisabledAPI } from "./ui/compositionApi/UiDisabledAPI";
export { default as UiClearButtonAPI } from "./ui/compositionApi/UiClearButtonAPI";
export { default as UiInputAutofillAPI } from "./ui/compositionApi/UiInputAutofillAPI";
export { default as UiLabelClickEventBusAPI } from "./ui/compositionApi/UiLabelClickEventBusAPI";
export { default as UIDataGroupAPI } from "./ui/compositionApi/UIDataGroupAPI";
export { default as UiCollapseAPI } from "./ui/compositionApi/UiCollapseAPI";
export { default as UiDataFromServerAPI } from "./ui/compositionApi/UiDataFromServerAPI";
export { default as UiDataSortAPI } from "./ui/compositionApi/UiDataSortAPI";
export { default as UiDataWatchEmitAPI } from "./ui/compositionApi/UiDataWatchEmitAPI";
export { default as UiDataWithKeyIdAndLabelAPI } from "./ui/compositionApi/UiDataWithKeyIdAndLabelAPI";
export { default as UiLoadingAPI } from "./ui/compositionApi/UiLoadingAPI";
export { default as UiSearchAPI } from "./ui/compositionApi/UiSearchAPI";
export { default as UiTextAfterLabelAPI } from "./ui/compositionApi/UiTextAfterLabelAPI";

// directives
export { default as AOnHooks } from "./directives/AOnHooks";
export { default as ASafeHtml } from "./directives/ASafeHtml";

// plugins
export { default as AAlertPlugin } from "./plugins/AAlertPlugin";
export { default as ACloakPlugin } from "./plugins/ACloakPlugin";
export { default as AFiltersPlugin } from "./plugins/AFiltersPlugin";
export {
  default as AFormPlugin,
  AFormPluginOptions,
} from "./plugins/AFormPlugin";
export { default as AGroupButtonDropdownPlugin } from "./plugins/AGroupButtonDropdownPlugin";
export { default as AHttpPlugin } from "./plugins/AHttpPlugin";
export { default as AI18nPlugin } from "./plugins/AI18nPlugin";
export { default as AIconPlugin } from "./plugins/AIconPlugin";
export {
  default as AInputCurrencyPlugin,
  AInputCurrencyPluginOptions,
} from "./plugins/AInputCurrencyPlugin";
export {
  default as AInputNumberPlugin,
  AInputNumberPluginOptions,
} from "./plugins/AInputNumberPlugin";
export {
  default as AMultiselectOrderedPlugin,
  AMultiselectOrderedPluginOptions,
} from "./plugins/AMultiselectOrderedPlugin";
export { default as ALoadingPlugin } from "./plugins/ALoadingPlugin";
export { default as AlohaPlugin } from "./plugins/alohaPlugin";
export { default as AMobilePlugin } from "./plugins/AMobilePlugin";
export { default as AModalPlugin } from "./plugins/AModalPlugin";
export { default as APageTabTitlePlugin } from "./plugins/APageTabTitlePlugin";
export {
  default as ARouterLinkConfigPlugin,
  ARouterLinkConfigPluginOptions,
} from "./plugins/ARouterLinkConfigPlugin";
export { default as ASelectPlugin } from "./plugins/ASelectPlugin";
export { default as ASpinnerPlugin } from "./plugins/ASpinnerPlugin";
export { default as ATablePlugin } from "./plugins/ATablePlugin";

// filters
export { default as filterBoolean } from "./filters/filterBoolean";
export { default as filterCapitalize } from "./filters/filterCapitalize";
export { default as filterCurrency } from "./filters/filterCurrency";
export { default as filterDate } from "./filters/filterDate";
export { default as filterDefaultForEmpty } from "./filters/filterDefaultForEmpty";
export { default as filterEmail } from "./filters/filterEmail";
export { default as filterEscapeHtml } from "./filters/filterEscapeHtml";
export { default as filterFileSize } from "./filters/filterFileSize";
export { default as filterFloat } from "./filters/filterFloat";
export { default as filterJson } from "./filters/filterJson";
export { default as filterKeyValue } from "./filters/filterKeyValue";
export { default as filterLimitTo } from "./filters/filterLimitTo";
export { default as filterLink } from "./filters/filterLink";
export { default as filterList } from "./filters/filterList";
export { default as filterLowerCase } from "./filters/filterLowerCase";
export { default as filterMask } from "./filters/filterMask";
export { default as filterPropertyByValue } from "./filters/filterPropertyByValue";
export { default as filterSearchHighlight } from "./filters/filterSearchHighlight";
export { default as filterUpperCase } from "./filters/filterUpperCase";

// functions
export {
  concatTwoStringsWithSpace,
} from "./utils/actions";
export {
  colorToHex,
  hexToRgb,
  mixBlack,
  mixColor,
  mixWhite,
  rgbToHex,
} from "./utils/colors";
export { default as EventBus } from "./utils/EventBus";
export {
  dompurify,
  extractTextFromHtml,
  getTotalNestedCount,
  isArrayOfArrays,
  isArrayOfStrings,
  sanitize,
  sanitizeLocal,
} from "./utils/utils";
export {
  getUniqueSelector,
  scrollToElement,
  setFocusToElement,
  setFocusToNextFocusableElement,
  setFocusToPreviousFocusableElement,
} from "./utils/utilsDOM";
export {
  isOdd,
  isEven,
  toPrecision,
} from "./utils/utilsMath";

// const
export {
  focusableList,
  focusableSelector,
} from "./const/AFocusableElements";
export {
  AKeyChildren,
  AKeyId,
  AKeyLabel,
  AKeyLabelSearch,
  AKeyParent,
} from "./const/AKeys";
export { default as AKeysCode } from "./const/AKeysCode";
export { default as APlacements } from "./const/placements";
export {
  typesContainer as AUiTypes_typesContainer,
  typesModelArray as AUiTypes_typesModelArray,
  typesModelObject as AUiTypes_typesModelObject,
  typesWithData as AUiTypes_typesWithData,
  typesLabelProps as AUiTypes_typesLabelProps,
} from "./ui/const/AUiTypes";

// translations
export {
  default as i18nAll,
  ar as i18nAR,
  de as i18nDE,
  en as i18nEN,
  es as i18nES,
  fr as i18nFR,
  hr as i18nHR,
  it as i18nIT,
  ru as i18nRU,
} from "./i18n/allLanguages";
export { default as ACheckboxI18n } from "./ui/ACheckbox/i18n/ACheckboxI18n";
export { default as ACloakI18n } from "./ACloak/i18n/ACloakI18n";
export { default as ADatepickerRangeI18n } from "./ui/ADatepickerRange/i18n/ADatepickerRangeI18n";
export { default as ADisclosureI18n } from "./ADisclosure/i18n/ADisclosureI18n";
export { default as AFieldsetI18n } from "./ui/AFieldset/i18n/AFieldsetI18n";
export { default as AFiltersI18n } from "./AFilters/i18n/AFiltersI18n";
export { default as AInputCurrencyI18n } from "./ui/AInputCurrency/i18n/AInputCurrencyI18n";
export { default as AInputI18n } from "./ui/AInput/i18n/AInputI18n";
export { default as AInputNumberI18n } from "./ui/AInputNumber/i18n/AInputNumberI18n";
export { default as AInputNumberRangeI18n } from "./ui/AInputNumberRange/i18n/AInputNumberRangeI18n";
export { default as AJsonI18n } from "./ui/AJson/i18n/AJsonI18n";
export { default as ALinkCopyI18n } from "./ALinkCopy/i18n/ALinkCopyI18n";
export { default as ALoadingI18n } from "./ALoading/i18n/ALoadingI18n";
export { default as AMenu2I18n } from "./AMenu/i18n/AMenu2I18n";
export { default as AModalI18n } from "./AModal/i18n/AModalI18n";
export { default as AMultiselectOrderedI18n } from "./ui/AMultiselectOrdered/i18n/AMultiselectOrderedI18n";
export { default as APaginationI18n } from "./APagination/i18n/APaginationI18n";
export { default as ARadioI18n } from "./ui/ARadio/i18n/ARadioI18n";
export { default as ARequiredI18n } from "./ui/ARequired/i18n/ARequiredI18n";
export { default as ARouterLinkConfigI18n } from "./ui/ARouterLinkConfig/i18n/ARouterLinkConfigI18n";
export { default as ASelectI18n } from "./ui/ASelect/i18n/ASelectI18n";
export { default as AShowMoreI18n } from "./AShowMore/i18n/AShowMoreI18n";
export { default as ASpinnerI18n } from "./ASpinner/i18n/ASpinnerI18n";
export { default as ASwitchI18n } from "./ui/ASwitch/i18n/ASwitchI18n";
export { default as ATableI18n } from "./ATable/i18n/ATableI18n";
export { default as AVerticalScrollI18n } from "./AVerticalScroll/i18n/AVerticalScrollI18n";
export { default as AWizardI18n } from "./AWizard/i18n/AWizardI18n";
export { default as Filters18n } from "./filters/i18n/Filters18n";
export {
  getTranslatedText,
  getTranslationAttributes,
  isPlaceholderTranslate,
} from "./ATranslation/compositionAPI/UtilsAPI";
export {
  i18n,
  isTranslate,
  setI18n,
  setLanguage,
  timeTranslationLastChanged,
  toggleTranslate,
  translation,
  updateI18n,
  updateI18nForLanguage,
  updateTranslation,
} from "./ATranslation/compositionAPI/ATranslationAPI";
