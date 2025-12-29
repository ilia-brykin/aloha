import {
  computed,
  h,
  ref,
  toRef,
} from "vue";

import APaginationCountPerPage from "../APaginationCountPerPage/APaginationCountPerPage";
import APaginationPages from "../APaginationPages/APaginationPages";
import {
  aSortBy,
} from "../../utils/utils";

import {
  forEach,
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

    return aSortBy(LIST, "position");
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
          countAllRows: countAllRows.value,
          disabled: disabled.value,
          limit: limit.value,
          mode: item.mode,
          offset: offset.value,
          paginationMaxItems: maxPages.value,
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
