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

  const goToFilter = () => {
    if (!filter.value.main) {
      EventBus.$emit(eventName.value);
    }

    const FILTER_HTML_ID = getHtmlId({
      id: filter.value.id,
      idPrefix: `${ id.value }_`,
      htmlId: filter.value.htmlId,
    });
    setTimeout(() => {
      setFocusToElement({ selector: `#${ FILTER_HTML_ID }` });
    });
  };

  return {
    goToFilter,
  };
}
