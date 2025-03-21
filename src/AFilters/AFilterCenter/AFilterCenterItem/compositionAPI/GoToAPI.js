import {
  computed,
  toRef,
} from "vue";

import {
  getHtmlId,
} from "../../../../ui/compositionApi/UiAPI";

import EventBus from "../../../../utils/EventBus";

export default function GoToAPI(props) {
  const filter = toRef(props, "filter");
  const id = toRef(props, "id");

  const eventName = computed(() => {
    return `eventATableFilterTopOnOpen_${ id.value }`;
  });

  const goToFilter = ({ modelValue } = {}) => {
    let filterHtmlId = getHtmlId({
      id: filter.value.id,
      idPrefix: `${ id.value }_filter_top`,
      htmlId: filter.value.htmlId,
    });
    if (modelValue.idSuffix) {
      filterHtmlId += modelValue.idSuffix;
    }
    if (!filter.value.main) {
      EventBus.$emit(eventName.value, filterHtmlId);
    }
  };

  return {
    goToFilter,
  };
}
