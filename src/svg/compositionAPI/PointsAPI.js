import {
  computed,
  toRef,
} from "vue";

import {
  map,
  isArray,
  isString,
} from "lodash-es";

export default function PointsAPI(props) {
  const points = toRef(props, "points");

  const getPointsLocalFromArray = pointsList => {
    const POINTS_LIST_FORMATTED = map(pointsList, item => {
      let itemString = "";
      if (isString(item)) {
        itemString = item;
      } else if (isArray(item)) {
        itemString = item.join(",");
      }
      return itemString;
    });

    return POINTS_LIST_FORMATTED.join(" ");
  };

  const pointsLocal = computed(() => {
    if (isString(points.value)) {
      return points.value;
    }
    if (isArray(points.value)) {
      return getPointsLocalFromArray(points.value);
    }
    return "";
  });

  return {
    pointsLocal,
  };
}
