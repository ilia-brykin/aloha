import {
  computed,
  h,
  toRef,
} from "vue";

import APaginationCountPerPage from "../APaginationCountPerPage/APaginationCountPerPage";
import APaginationPages from "../APaginationPages/APaginationPages";
import {
  aSortBy,
} from "../../utils/utils";

import {
  forEach,
  omit,
} from "lodash-es";

export default function ComponentsAPI(props, {
  slots = {},
  updateLimit = () => {},
  updateOffset = () => {},
}) {
  const disabled = toRef(props, "disabled");
  const limit = toRef(props, "limit");
  const limitsPerPage = toRef(props, "limitsPerPage");
  const maxPages = toRef(props, "maxPages");
  const modes = toRef(props, "modes");
  const offset = toRef(props, "offset");
  const rowsLength = toRef(props, "rowsLength");
  const texts = toRef(props, "texts");
  const totalCount = toRef(props, "totalCount");

  const currentModeSorted = computed(() => {
    const LIST = [];
    forEach(modes.value, (item, component) => {
      LIST.push({
        ...item,
        component,
      });
    });

    return aSortBy(LIST, "position");
  });

  const components = computed(() => {
    const LIST = [];
    forEach(currentModeSorted.value, item => {
      if (item.component === "perPage") {
        LIST.push(h(APaginationCountPerPage, {
          disabled: disabled.value,
          limit: limit.value,
          limitsPerPage: limitsPerPage.value,
          mode: item.mode,
          offset: offset.value,
          rowsLength: rowsLength.value,
          showTextCountFromTo: item.showTextCountFromTo,
          texts: texts.value,
          totalCount: totalCount.value,
          "onUpdate:limit": updateLimit,
        }));
      } else if (item.component === "pagination") {
        // the other options of modes.pagination are props: showEdges, showJumper, hideOnSinglePage, size, icons
        LIST.push(h(APaginationPages, {
          ...omit(item, ["component", "position"]),
          disabled: disabled.value,
          limit: limit.value,
          maxPages: maxPages.value,
          mode: item.mode,
          offset: offset.value,
          texts: texts.value,
          totalCount: totalCount.value,
          "onUpdate:limit": updateLimit,
          "onUpdate:offset": updateOffset,
        }, slots));
      }
    });

    return LIST;
  });

  return {
    components,
  };
}
