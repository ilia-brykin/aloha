import Vue from "vue";
import moment from "moment";
import {
  isNil,
  forEachRight,
  floor,
} from "lodash-es";

Vue.filter("date", function(value, param = "DD.MM.YYYY") {
  if (isNil(value)) {
    return "";
  }
  return moment(String(value)).format(param);
});

Vue.filter("geld", function(value) {
  if (isNil(value)) {
    return "";
  }
  const valString = value + "";
  const valArr = valString.split(".");
  let fractVal = "";
  if (valArr[1]) {
    fractVal = valArr[1];
  }
  const floorVal = floor(+value);
  const floorValString = floorVal + "";

  let count = 0;
  let antwort = "";
  forEachRight(floorValString, val => {
    if (count > 0 && count % 3 === 0) {
      antwort += ".";
    }
    count++;
    antwort += val;
  });
  return `${ antwort.split("").reverse().join("") }${ fractVal ? "," : "" }${ fractVal } €`;
});
