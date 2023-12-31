import _filterBoolean from "../filters/filterBoolean";
import currency from "../filters/currency";
import date from "../filters/date";
import _filterDefaultForEmpty from "../filters/filterDefaultForEmpty";
import Email from "../filters/Email";
import FileSize from "../filters/FileSize";
import iban from "../filters/iban";
import json from "../filters/json";
import KeyValue from "../filters/KeyValue";
import _filterLimitTo from "../filters/filterLimitTo";
import Link from "../filters/Link";
import _filterList from "../filters/filterList";
import propertyByValue from "../filters/propertyByValue";
import searchHighlight from "../filters/searchHighlight";

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

  const filterEmail = value => {
    return Email(value);
  };

  const filterFileSize = (value, { units } = {}) => {
    return FileSize(value, { units });
  };

  const filterIban = (value, { plain } = {}) => {
    return iban(value, { plain });
  };

  const filterJson = (value, { parameter = 2 } = {}) => {
    return json(value, { parameter });
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

  const filterLink = (value, { param = "http://", target = "_blank" } = {}) => {
    return Link(value, { param, target });
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
    return propertyByValue(value, { mapping, defaultValue });
  };

  const filterSearchHighlight = (value, { searchModel = "" } = {}) => {
    return searchHighlight(value, { searchModel });
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
