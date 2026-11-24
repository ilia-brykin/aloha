import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ADateInput,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDateInputEvents",
  components: {
    AButton,
    ADateInput,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const dateInputRef = ref(undefined);
    const model = ref(null);
    const events = ref([]);

    const onOpen = ({ index }) => events.value.push(`open ${ index }`);
    const onClose = ({ index }) => events.value.push(`close ${ index }`);
    // the method open() of the component; the focus goes into the calendar
    const openCalendar = () => dateInputRef.value.open();

    return {
      codeHtml,
      codeJs,
      dateInputRef,
      events,
      model,
      onClose,
      onOpen,
      openCalendar,
    };
  },
};
