import {
  computed,
} from "vue";

import AKeysCode from "../../const/AKeysCode";
import {
  setFocusToElement
} from "../../utils/utilsDOM";

export default function SearchBtnAPI({
  searchInputId = computed(() => undefined),
  toggleMenu = () => {},
}) {
  const clickOnSearchBtn = () => {
    toggleMenu({ isOpen: true });
    setTimeout(() => {
      setFocusToElement({
        selector: `#${ searchInputId.value }`,
      });
    });
  };

  const keydownOnSearchBtn = $event => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      clickOnSearchBtn();
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  return {
    clickOnSearchBtn,
    keydownOnSearchBtn,
  };
}
