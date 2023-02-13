import {
  ref,
} from "vue";

export default function RefsAPI() {
  const calendarRef = ref(undefined);
  const calendarPanelRef = ref(undefined);
  const calendarPanel2Ref = ref(undefined);
  const inputRef = ref(undefined);
  const focusByCloseRef = ref(undefined);

  return {
    calendarRef,
    calendarPanelRef,
    calendarPanel2Ref,
    focusByCloseRef,
    inputRef,
  };
}
