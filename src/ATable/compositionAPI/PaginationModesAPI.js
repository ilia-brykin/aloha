import {
  computed,
  toRef,
} from "vue";

export function PaginationModesAPI(props, {
  isMobile = computed(() => false),
}) {
  const pagination = toRef(props, "pagination");

  const paginationModes = computed(() => {
    if (isMobile.value) {
      return pagination.value?.modes?.mobile ||
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

    return pagination.value?.modes?.desktop ||
      {
        perPage: {
          mode: "group",
          position: 0,
          showTextCountFromTo: true,
        },
        pagination: {
          mode: "normal",
          position: 1,
        },
      };
  });

  return {
    paginationModes,
  };
}
