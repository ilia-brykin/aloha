import {
  computed,
  nextTick,
  ref,
  toRef,
} from "vue";

import EyeClose from "../../../../AIcon/Icons/EyeClose";
import EyeOpen from "../../../../AIcon/Icons/EyeOpen";
import {
  setFocusToElement,
} from "../../../../utils/utilsDOM";

export default function DetailsAPI(props) {
  const modelIndex = toRef(props, "modelIndex");
  const parentId = toRef(props, "parentId");

  const isDetailsVisible = ref(false);

  const btnToggleDetailsId = computed(() => {
    return `${ parentId.value }_btn_toggle_details_${ modelIndex.value }`;
  });

  const titleBtnToggleDetails = computed(() => {
    return isDetailsVisible.value ?
      "_A_VALIDATED_JSON_BTN_DETAILS_HIDE_" :
      "_A_VALIDATED_JSON_BTN_DETAILS_SHOW_";
  });

  const iconBtnToggleDetails = computed(() => {
    return isDetailsVisible.value ?
      EyeClose :
      EyeOpen;
  });

  const detailsId = computed(() => {
    return `${ parentId.value }_details_${ modelIndex.value }`;
  });

  const toggleDetails = () => {
    isDetailsVisible.value = !isDetailsVisible.value;
    if (isDetailsVisible.value) {
      nextTick().then(() => {
        setFocusToElement({
          selector: `#${ detailsId.value }`,
        });
      });
    }
  };

  return {
    btnToggleDetailsId,
    detailsId,
    iconBtnToggleDetails,
    isDetailsVisible,
    titleBtnToggleDetails,
    toggleDetails,
  };
}
