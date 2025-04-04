import {
  ref,
} from "vue";

import _filterBoolean from "../filters/filterBoolean";
import _filterCapitalize from "../filters/filterCapitalize";
import _filterCurrency from "../filters/filterCurrency";
import _filterDate from "../filters/filterDate";
import _filterDefaultForEmpty from "../filters/filterDefaultForEmpty";
import _filterEmail from "../filters/filterEmail";
import _filterEscapeHtml from "../filters/filterEscapeHtml";
import _filterFileSize from "../filters/filterFileSize";
import _filterFloat from "../filters/filterFloat";
import _filterJson from "../filters/filterJson";
import _filterKeyValue from "../filters/filterKeyValue";
import _filterLimitTo from "../filters/filterLimitTo";
import _filterLink from "../filters/filterLink";
import _filterList from "../filters/filterList";
import _filterLowerCase from "../filters/filterLowerCase";
import _filterMask from "../filters/filterMask";
import _filterPropertyByValue from "../filters/filterPropertyByValue";
import _filterSearchHighlight from "../filters/filterSearchHighlight";
import _filterUpperCase from "../filters/filterUpperCase";

export const additionFilters = ref({});

export default function AFiltersAPI() {
  const filterBoolean = (value, { trueValue = "_YES_", falseValue = "_NO_", useNil = true } = {}) => {
    return _filterBoolean(value, {
      trueValue,
      falseValue,
      useNil,
    });
  };

  const filterCapitalize = value => {
    return _filterCapitalize(value);
  };

  const filterCurrency = (value, { suffix = "€", digits = 2, digitGrouping = true } = {}) => {
    return _filterCurrency(value, { suffix, digits, digitGrouping });
  };

  const filterFloat = (value, { suffix = "", digits = 2, digitGrouping = true } = {}) => {
    return _filterFloat(value, { suffix, digits, digitGrouping });
  };

  const filterDate = (value, { format = "date" } = {}) => {
    return _filterDate(value, { format });
  };

  const filterDefaultForEmpty = (value, { emptyValue = "-" } = {}) => {
    return _filterDefaultForEmpty(value, {
      emptyValue,
    });
  };

  const filterEmail = (value, { linkClass } = {}) => {
    return _filterEmail(value, { linkClass });
  };

  const filterEscapeHtml = value => {
    return _filterEscapeHtml(value);
  };

  const filterFileSize = (value, { units = "kb", sourceUnits = "b", digits = 2 } = {}) => {
    return _filterFileSize(value, { units, sourceUnits, digits });
  };

  const filterJson = (value, {
    replacer,
    space = 2,
    isHtml = false,
    jsonClass = "a_code_content",
    tag = "pre",
  } = {}) => {
    return _filterJson(value, { replacer, space, isHtml, jsonClass, tag });
  };

  const filterKeyValue = value => {
    return _filterKeyValue(value);
  };

  const filterLimitTo = (value, {
    limit = 30,
    maxThreeDots = true,
  } = {}) => {
    return _filterLimitTo(value, { limit, maxThreeDots });
  };

  const filterLink = (value, { linkText = "", protocol = "https://", target = "", linkClass = "" } = {}) => {
    return _filterLink(value, { linkText, protocol, target, linkClass });
  };

  const filterList = (value, {
    isHtml = true,
    isSimpleArray = false,
    keyChildren = "",
    keyLabel = "",
    keyLabelCallback,
    listClass = "",
    separator = ", ",
    tag = "ul",
  } = {}) => {
    return _filterList(value, { isHtml, listClass, keyLabel, keyLabelCallback, keyChildren, isSimpleArray, separator, tag });
  };

  const filterLowerCase = value => {
    return _filterLowerCase(value);
  };

  const filterMask = (value, { chars = 4, mask = "*" } = {}) => {
    return _filterMask(value, { chars, mask });
  };

  const filterPropertyByValue = (value, { mapping = {}, defaultValue = "" } = {}) => {
    return _filterPropertyByValue(value, { mapping, defaultValue });
  };

  const filterSearchHighlight = (value, {
    searchModel = "",
    searchClass = "a_search_highlight",
    tag = "mark",
    attributes = [],
    caseSensitive = false,
    isHtml = false,
  } = {}) => {
    return _filterSearchHighlight(value, {
      searchModel,
      searchClass,
      tag,
      attributes,
      caseSensitive,
      isHtml,
    });
  };

  const filterUpperCase = value => {
    return _filterUpperCase(value);
  };

  return {
    filterBoolean,
    filterCapitalize,
    filterCurrency,
    filterDate,
    filterDefaultForEmpty,
    filterEmail,
    filterEscapeHtml,
    filterFileSize,
    filterFloat,
    filterJson,
    filterKeyValue,
    filterLimitTo,
    filterLink,
    filterList,
    filterLowerCase,
    filterMask,
    filterPropertyByValue,
    filterSearchHighlight,
    filterUpperCase,
    ...additionFilters.value,
  };
}
