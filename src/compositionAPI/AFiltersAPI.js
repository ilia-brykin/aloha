import {
  ref,
} from "vue";

import _filterBoolean from "../filters/filterBoolean";
import _filterCurrency from "../filters/filterCurrency";
import _filterDate from "../filters/filterDate";
import _filterDefaultForEmpty from "../filters/filterDefaultForEmpty";
import _filterEmail from "../filters/filterEmail";
import _filterFileSize from "../filters/filterFileSize";
import _filterFloat from "../filters/filterFloat";
import _filterJson from "../filters/filterJson";
import _filterKeyValue from "../filters/filterKeyValue";
import _filterLimitTo from "../filters/filterLimitTo";
import _filterLink from "../filters/filterLink";
import _filterList from "../filters/filterList";
import _filterPropertyByValue from "../filters/filterPropertyByValue";
import _filterSearchHighlight from "../filters/filterSearchHighlight";

export const additionFilters = ref({});

export default function AFiltersAPI() {
  const filterBoolean = (value, { trueValue = "_YES_", falseValue = "_NO_", useNil = true } = {}) => {
    return _filterBoolean(value, {
      trueValue,
      falseValue,
      useNil,
    });
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

  const filterFileSize = (value, { units = "KB" } = {}) => {
    return _filterFileSize(value, { units });
  };

  const filterJson = (value, { replacer, space = 2 } = {}) => {
    return _filterJson(value, { replacer, space });
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

  const filterPropertyByValue = (value, { mapping = {}, defaultValue = "" } = {}) => {
    return _filterPropertyByValue(value, { mapping, defaultValue });
  };

  const filterSearchHighlight = (value, { searchModel = "", searchClass = "a_search_highlight" } = {}) => {
    return _filterSearchHighlight(value, { searchModel, searchClass });
  };

  return {
    filterBoolean,
    filterCurrency,
    filterDate,
    filterDefaultForEmpty,
    filterEmail,
    filterFileSize,
    filterFloat,
    filterJson,
    filterKeyValue,
    filterLimitTo,
    filterLink,
    filterList,
    filterPropertyByValue,
    filterSearchHighlight,
    ...additionFilters,
  };
}
