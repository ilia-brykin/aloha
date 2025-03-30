import {
  computed,
  toRef,
} from "vue";
import {
  getTranslatedText,
  getTranslationAttributes,
} from "../../../../index";

export default function AttributesAPI(props) {
  const btnGroupAriaLabel = toRef(props, "btnGroupAriaLabel");
  const id = toRef(props, "id");
  const index = toRef(props, "index");

  const getIdBtnUp = ({ id, index }) => {
    return `${ id }_${ index }_up`;
  };

  const getIdBtnDown = ({ id, index }) => {
    return `${ id }_${ index }_down`;
  };

  const idSelectLabel = computed(() => {
    return `${ id.value }_${ index.value }_label`;
  });

  const idBtnDelete = computed(() => {
    return `${ id.value }_${ index.value }_delete`;
  });

  const idBtnUp = computed(() => {
    return getIdBtnUp({ id: id.value, index: index.value });
  });

  const idBtnDown = computed(() => {
    return getIdBtnDown({ id: id.value, index: index.value });
  });

  const ariaLabelAttributes = computed(() => {
    return getTranslationAttributes({
      attr: "aria-label",
      value: btnGroupAriaLabel.value,
      translation: getTranslatedText({ placeholder: btnGroupAriaLabel.value }),
    });
  });

  return {
    ariaLabelAttributes,
    getIdBtnDown,
    getIdBtnUp,
    idBtnDelete,
    idBtnDown,
    idBtnUp,
    idSelectLabel,
  };
}
