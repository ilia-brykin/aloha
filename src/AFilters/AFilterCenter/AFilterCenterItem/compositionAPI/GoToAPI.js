import {
  computed,
  toRef,
} from "vue";

import EventBus from "../../../../utils/EventBus";
import {
  getHtmlId,
} from "../../../../ui/compositionApi/UiAPI";
import {
  setFocusToElement,
} from "../../../../utils/utilsDOM";

export default function GoToAPI(props) {
  const filter = toRef(props, "filter");
  const id = toRef(props, "id");
  
  const eventName = computed(() => {
    return `eventATableFilterTopOnOpen_${ id.value }`;
  });

  const goToFilter = ({ modelValue } = {}) => {
    if (!filter.value.main) {
      EventBus.$emit(eventName.value);
    }

    let filterHtmlId = getHtmlId({
      id: filter.value.id,
      idPrefix: `${ id.value }_`,
      htmlId: filter.value.htmlId,
    });
    if (modelValue.idSuffix) {
      filterHtmlId += modelValue.idSuffix;
    }
    setTimeout(() => {
      setFocusToElement({ selector: `#${ filterHtmlId }` });
    });
  };

  return {
    goToFilter,
  };
}
