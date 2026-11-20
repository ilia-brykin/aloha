export default function JsAPI() {
  const codeJs = `// PageCalendarCreate.js
import {
  AButton,
  ACalendar,
  AModalForm,
} from "aloha-vue";

import CreateAPI from "./compositionAPI/CreateAPI";

export default {
  components: {
    AButton,
    ACalendar,
    AModalForm,
  },
  setup() {
    const {
      closeModal,
      dataForm,
      deleteEvent,
      events,
      headerText,
      isEditing,
      isModalVisible,
      isSaveDisabled,
      model,
      onDayClick,
      onEventClick,
      openModalNew,
      save,
    } = CreateAPI();

    return {
      closeModal,
      dataForm,
      deleteEvent,
      events,
      headerText,
      isEditing,
      isModalVisible,
      isSaveDisabled,
      model,
      onDayClick,
      onEventClick,
      openModalNew,
      save,
    };
  },
};

// compositionAPI/CreateAPI.js
import {
  computed,
  ref,
} from "vue";

import moment from "moment";

const DATETIME_FORMAT = "YYYY-MM-DD[T]HH:mm:ss.SSSZ";

export default function CreateAPI() {
  const events = ref([]);
  const model = ref({});
  const editedId = ref(undefined);
  const isModalVisible = ref(false);

  const dataForm = [
    { type: "text", id: "label", label: "_A_CALENDAR_CREATE_LABEL_", required: true, classColumn: "a_column a_column_12" },
    { type: "datetime", id: "start", label: "_A_CALENDAR_CREATE_START_" },
    { type: "datetime", id: "end", label: "_A_CALENDAR_CREATE_END_" },
    {
      type: "select",
      id: "color",
      label: "_A_CALENDAR_CREATE_COLOR_",
      data: ["primary", "secondary", "tertiary", "success", "info", "warning", "danger", "gray"].map(color => ({ label: color, value: color })),
    },
    { type: "oneCheckbox", id: "isAllDay", label: "_A_CALENDAR_CREATE_ALL_DAY_" },
  ];

  const isEditing = computed(() => editedId.value !== undefined);

  const headerText = computed(() => {
    return isEditing.value ? "_A_CALENDAR_CREATE_MODAL_EDIT_" : "_A_CALENDAR_CREATE_MODAL_NEW_";
  });

  const isSaveDisabled = computed(() => !model.value.label || !model.value.start);

  const openModalForDate = date => {
    const START = moment(date).hours(9).minutes(0);
    editedId.value = undefined;
    model.value = {
      label: "",
      start: START.format(DATETIME_FORMAT),
      end: START.clone().add(1, "hour").format(DATETIME_FORMAT),
      color: "primary",
      isAllDay: false,
    };
    isModalVisible.value = true;
  };

  const onDayClick = ({ date }) => {
    openModalForDate(date);
  };

  const openModalNew = () => {
    openModalForDate(new Date());
  };

  const onEventClick = ({ event }) => {
    editedId.value = event.id;
    model.value = { ...event };
    isModalVisible.value = true;
  };

  const closeModal = () => {
    isModalVisible.value = false;
  };

  const save = () => {
    if (!isEditing.value) {
      events.value = [...events.value, { ...model.value, id: Date.now() }];
    } else {
      events.value = events.value.map(event => event.id === editedId.value ? { ...model.value, id: editedId.value } : event);
    }
    closeModal();
  };

  const deleteEvent = () => {
    events.value = events.value.filter(event => event.id !== editedId.value);
    closeModal();
  };

  return {
    closeModal,
    dataForm,
    deleteEvent,
    events,
    headerText,
    isEditing,
    isModalVisible,
    isSaveDisabled,
    model,
    onDayClick,
    onEventClick,
    openModalNew,
    save,
  };
}`;

  return {
    codeJs,
  };
}
