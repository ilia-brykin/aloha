import _filterBoolean from "../filters/filterBoolean";
import currency from "../filters/currency";
import date from "../filters/date";
import _filterDefaultForEmpty from "../filters/filterDefaultForEmpty";
import _filterEmail from "../filters/filterEmail";
import FileSize from "../filters/FileSize";
import iban from "../filters/iban";
import _filterJson from "../filters/filterJson";
import KeyValue from "../filters/KeyValue";
import _filterLimitTo from "../filters/filterLimitTo";
import _filterLink from "../filters/filterLink";
import _filterList from "../filters/filterList";
import _filterPropertyByValue from "../filters/filterPropertyByValue";
import _filterSearchHighlight from "../filters/filterSearchHighlight";

export default function AFiltersAPI() {
  const filterBoolean = (value, { trueValue = "_YES_", falseValue = "_NO_", useNil = true } = {}) => {
    return _filterBoolean(value, {
      trueValue,
      falseValue,
      useNil,
    });
  };

  const filterCurrency = (value, { suffix = "€", digits = 2, digitGrouping = true } = {}) => {
    return currency(value, { suffix, digits, digitGrouping });
  };

  const filterDate = (value, { parameter = "date" } = {}) => {
    return date(value, { parameter });
  };

  const filterDefaultForEmpty = (value, { emptyValue = "-" } = {}) => {
    return _filterDefaultForEmpty(value, {
      emptyValue,
    });
  };

  const filterEmail = (value, { linkClass } = {}) => {
    return _filterEmail(value, { linkClass });
  };

  const filterFileSize = (value, { units } = {}) => {
    return FileSize(value, { units });
  };

  const filterIban = (value, { plain } = {}) => {
    return iban(value, { plain });
  };

  const filterJson = (value, { replacer, space = 2 } = {}) => {
    return _filterJson(value, { replacer, space });
  };

  const filterKeyValue = value => {
    return KeyValue(value);
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
    filterIban,
    filterJson,
    filterKeyValue,
    filterLimitTo,
    filterLink,
    filterList,
    filterPropertyByValue,
    filterSearchHighlight,
  };
}
