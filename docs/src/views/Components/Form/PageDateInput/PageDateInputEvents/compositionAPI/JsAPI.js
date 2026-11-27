export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AButton,
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ADateInput,
  },
  setup() {
    const dateInputRef = ref(undefined);
    const model = ref(null);
    const events = ref([]);

    const onOpen = ({ index }) => events.value.push(\`open \${ index }\`);
    const onClose = ({ index }) => events.value.push(\`close \${ index }\`);
    // the method open() of the component; the focus goes into the calendar
    const openCalendar = () => dateInputRef.value.open();

    return {
      dateInputRef,
      events,
      model,
      onClose,
      onOpen,
      openCalendar,
    };
  },
};`;

  return {
    codeJs,
  };
}
