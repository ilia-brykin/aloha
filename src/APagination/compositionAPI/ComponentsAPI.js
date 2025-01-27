import {
  computed,
  h,
  ref,
  toRef,
} from "vue";

import APaginationPages from "../APaginationPages/APaginationPages";
import APaginationCountPerPage from "../APaginationCountPerPage/APaginationCountPerPage";

import {
  forEach,
  sortBy,
} from "lodash-es";

export default function ComponentsAPI(props, {
  isMobile = ref(false),
  updateLimit = () => {},
  updateOffset = () => {},
}) {
  const modes = toRef(props, "modes");
  const countAllRows = toRef(props, "countAllRows");
  const disabled = toRef(props, "disabled");
  const limitsPerPage = toRef(props, "limitsPerPage");
  const limit = toRef(props, "limit");
  const offset = toRef(props, "offset");
  const rowsLength = toRef(props, "rowsLength");
  const totalRowsCount = toRef(props, "totalRowsCount");
  const maxPages = toRef(props, "maxPages");

  const currentMode = computed(() => {
    if (isMobile.value) {
      return modes.value.mobile ||
        {
          perPage: {
            mode: "select",
            position: 0,
            showTextCountFromTo: false,
          },
          pagination: {
            mode: "short",
            position: 1,
          },
        };
    }
    return modes.value.desktop ||
      {
        perPage: {
          mode: "inline",
          position: 0,
          showTextCountFromTo: true,
        },
        pagination: {
          mode: "normal",
          position: 1,
        },
      };
  });

  const currentModeSorted = computed(() => {
    const LIST = [];
    forEach(currentMode.value, (item, component) => {
      LIST.push({
        ...item,
        component,
      });
    });

    return sortBy(LIST, "position");
  });

  const components = computed(() => {
    const LIST = [];
    forEach(currentModeSorted.value, item => {
      if (item.component === "perPage") {
        LIST.push(h(APaginationCountPerPage, {
          countAllRows: countAllRows.value,
          disabled: disabled.value,
          limitsPerPage: limitsPerPage.value,
          limit: limit.value,
          offset: offset.value,
          rowsLength: rowsLength.value,
          mode: item.mode,
          showTextCountFromTo: item.showTextCountFromTo,
          "onUpdate:limit": updateLimit,
        }));
      } else if (item.component === "pagination") {
        LIST.push(h(APaginationPages, {
          limit: limit.value,
          disabled: disabled.value,
          totalRowsCount: totalRowsCount.value,
          offset: offset.value,
          paginationMaxItems: maxPages.value,
          mode: item.mode,
          "onUpdate:offset": updateOffset,
        }));
      }
    });

    return LIST;
  });

  return {
    components,
  };
}
