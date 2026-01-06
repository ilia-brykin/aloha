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
  const disabled = toRef(props, "disabled");
  const limit = toRef(props, "limit");
  const limitsPerPage = toRef(props, "limitsPerPage");
  const maxPages = toRef(props, "maxPages");
  const modes = toRef(props, "modes");
  const offset = toRef(props, "offset");
  const rowsLength = toRef(props, "rowsLength");
  const texts = toRef(props, "texts");
  const totalCount = toRef(props, "totalCount");

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
        LIST.push(h(APaginationPages, {
          disabled: disabled.value,
          limit: limit.value,
          maxPages: maxPages.value,
          mode: item.mode,
          offset: offset.value,
          texts: texts.value,
          totalCount: totalCount.value,
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
