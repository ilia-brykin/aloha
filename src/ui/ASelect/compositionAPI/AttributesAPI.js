import {
  computed,
  toRef,
} from "vue";

export default function AttributesAPI(props, {
  htmlIdLocal = computed(() => ""),
}) {
  const disabled = toRef(props, "disabled");

  const containerId = computed(() => {
    return `${ htmlIdLocal.value }_container`;
  });

  const idForList = computed(() => {
    return `${ htmlIdLocal.value }_list`;
  });

  // only the options are in the listbox (not the search and the buttons)
  const idForListbox = computed(() => {
    return `${ htmlIdLocal.value }_listbox`;
  });

  const ariaLabelledby = computed(() => {
    return `${ htmlIdLocal.value }_label`;
  });

  const tabindex = computed(() => {
    return disabled.value ? undefined : 0;
  });

  return {
    ariaLabelledby,
    containerId,
    idForList,
    idForListbox,
    tabindex,
  };
}
