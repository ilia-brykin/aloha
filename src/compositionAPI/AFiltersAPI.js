import {
  ref,
} from "vue";

import _filterBoolean from "../filters/filterBoolean";
import _filterCapitalize from "../filters/filterCapitalize";
import _filterCurrency from "../filters/filterCurrency";
import _filterDate from "../filters/filterDate";
import _filterDateRelative from "../filters/filterDateRelative";
import _filterDefaultForEmpty from "../filters/filterDefaultForEmpty";
import _filterDuration from "../filters/filterDuration";
import _filterEmail from "../filters/filterEmail";
import _filterEscapeHtml from "../filters/filterEscapeHtml";
import _filterFileSize from "../filters/filterFileSize";
import _filterFloat from "../filters/filterFloat";
import _filterInitials from "../filters/filterInitials";
import _filterJson from "../filters/filterJson";
import _filterKeyValue from "../filters/filterKeyValue";
import _filterLimitTo from "../filters/filterLimitTo";
import _filterLink from "../filters/filterLink";
import _filterList from "../filters/filterList";
import _filterLowerCase from "../filters/filterLowerCase";
import _filterMask from "../filters/filterMask";
import _filterNewlines from "../filters/filterNewlines";
import _filterNumberCompact from "../filters/filterNumberCompact";
import _filterPercent from "../filters/filterPercent";
import _filterPropertyByValue from "../filters/filterPropertyByValue";
import _filterSearchHighlight from "../filters/filterSearchHighlight";
import _filterStripHtml from "../filters/filterStripHtml";
import _filterTitleCase from "../filters/filterTitleCase";
import _filterTruncateMiddle from "../filters/filterTruncateMiddle";
import _filterUpperCase from "../filters/filterUpperCase";
import _filterValueByCondition from "../filters/filterValueByCondition";

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

  const filterDateRelative = (value, { now = new Date(), numeric = "auto" } = {}) => {
    return _filterDateRelative(value, { now, numeric });
  };

  const filterDefaultForEmpty = (value, { emptyValue = "-" } = {}) => {
    return _filterDefaultForEmpty(value, {
      emptyValue,
    });
  };

  const filterDuration = (value, { sourceUnits = "s", format = "long", maxUnits = 0, showDays = true } = {}) => {
    return _filterDuration(value, { sourceUnits, format, maxUnits, showDays });
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

  const filterInitials = (value, { limit = 2, isUppercase = true } = {}) => {
    return _filterInitials(value, { limit, isUppercase });
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

  const filterNumberCompact = (value, { digits = 1, minValue = 1000, isTrailingZeros = false } = {}) => {
    return _filterNumberCompact(value, { digits, minValue, isTrailingZeros });
  };

  const filterPercent = (value, { digits = 2, digitGrouping = true, isFraction = false } = {}) => {
    return _filterPercent(value, { digits, digitGrouping, isFraction });
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

  const filterNewlines = value => {
    return _filterNewlines(value);
  };

  const filterStripHtml = value => {
    return _filterStripHtml(value);
  };

  const filterTitleCase = value => {
    return _filterTitleCase(value);
  };

  const filterTruncateMiddle = (value, { start = 6, end = 4, separator = "…" } = {}) => {
    return _filterTruncateMiddle(value, { start, end, separator });
  };

  const filterUpperCase = value => {
    return _filterUpperCase(value);
  };

  const filterValueByCondition = (value, {
    conditions = [],
    defaultValue = "",
    defaultTemplate,
  } = {}) => {
    return _filterValueByCondition(value, {
      conditions,
      defaultValue,
      defaultTemplate,
    });
  };

  return {
    filterBoolean,
    filterCapitalize,
    filterCurrency,
    filterDate,
    filterDateRelative,
    filterDefaultForEmpty,
    filterDuration,
    filterEmail,
    filterEscapeHtml,
    filterFileSize,
    filterFloat,
    filterInitials,
    filterJson,
    filterKeyValue,
    filterLimitTo,
    filterLink,
    filterList,
    filterLowerCase,
    filterMask,
    filterNewlines,
    filterNumberCompact,
    filterPercent,
    filterPropertyByValue,
    filterSearchHighlight,
    filterStripHtml,
    filterTitleCase,
    filterTruncateMiddle,
    filterUpperCase,
    filterValueByCondition,
    ...additionFilters.value,
  };
}
