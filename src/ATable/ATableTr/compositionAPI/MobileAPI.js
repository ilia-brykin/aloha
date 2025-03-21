import {
  computed,
  inject,
  ref,
  toRef,
} from "vue";

export default function MobileAPI(props) {
  const allVisibleMobileColumns = toRef(props, "allVisibleMobileColumns");
  const countVisibleMobileColumns = toRef(props, "countVisibleMobileColumns");

  const isMobile = inject("isMobile");

  const isAllColumnsVisibleMobile = ref(false);

  const countInvisibleMobileColumns = computed(() => {
    return allVisibleMobileColumns.value.length - countVisibleMobileColumns.value;
  });

  const isBtnToggleAllColumnsVisible = computed(() => {
    return isMobile.value &&
      (allVisibleMobileColumns.value.length > countVisibleMobileColumns.value);
  });

  const textOpenBtnToggleAllColumns = computed(() => {
    return countInvisibleMobileColumns.value === 1 ?
      "_A_TABLE_MOBILE_TR_PLUS_FIELD_" :
      "_A_TABLE_MOBILE_TR_PLUS_FIELDS_{{count}}_";
  });

  const textBtnToggleAllColumns = computed(() => {
    return isAllColumnsVisibleMobile.value ?
      "_A_TABLE_MOBILE_TR_CLOSE_" :
      textOpenBtnToggleAllColumns.value;
  });

  const toggleAllColumnsVisibleMobile = ({ $event }) => {
    isAllColumnsVisibleMobile.value = !isAllColumnsVisibleMobile.value;
    $event.stopPropagation();
  };


  return {
    countInvisibleMobileColumns,
    isAllColumnsVisibleMobile,
    isBtnToggleAllColumnsVisible,
    textBtnToggleAllColumns,
    toggleAllColumnsVisibleMobile,
  };
}
