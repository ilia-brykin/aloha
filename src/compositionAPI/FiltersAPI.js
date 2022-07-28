import boolean from "../filters/boolean";
import currency from "../filters/currency";
import date from "../filters/date";
import DefaultForEmpty from "../filters/DefaultForEmpty";
import Email from "../filters/Email";
import FileSize from "../filters/FileSize";
import iban from "../filters/iban";
import json from "../filters/json";
import KeyValue from "../filters/KeyValue";
import limitTo from "../filters/limitTo";
import Link from "../filters/Link";
import list from "../filters/list";
import searchHighlight from "../filters/searchHighlight";

export default function FiltersAPI() {
  const filterBoolean = (value, { trueValue = "Ja", falseValue = "Nein", isNilUsed = true } = {}) => {
    return boolean(value, { trueValue, falseValue, isNilUsed });
  };

  const filterCurrency = (value, param = "€", digits = 2, digitGrouping = true) => {
    return currency(value, param, digits, digitGrouping);
  };

  const filterDate = (value, param) => {
    return date(value, param);
  };

  const filterDefaultForEmpty = (value, emptyValue = "-") => {
    return DefaultForEmpty(value, emptyValue);
  };

  const filterEmail = value => {
    return Email(value);
  };

  const filterFileSize = (value, units) => {
    return FileSize(value, units);
  };

  const filterIban = (value, plain) => {
    return iban(value, plain);
  };

  const filterJson = (value, parameter = 2) => {
    return json(value, parameter);
  };

  const filterKeyValue = value => {
    return KeyValue(value);
  };

  const filterLimitTo = (value, param = 30) => {
    return limitTo(value, param);
  };

  const filterLink = (value, param = "http://", target = "_blank") => {
    return Link(value, param, target);
  };

  const filterList = (value, isHtml = true, listClass = "list-unstyled") => {
    return list(value, isHtml, listClass);
  };

  const filterSearchHighlight = (value, searchModel = "") => {
    return searchHighlight(value, searchModel);
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
    filterSearchHighlight,
  };
}
