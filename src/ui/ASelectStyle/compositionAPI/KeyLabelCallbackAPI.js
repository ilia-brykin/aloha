import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

export default function KeyLabelCallbackAPI() {
  const keyLabelCallback = ({ item }) => {
    return `${ getTranslatedText({
      placeholder: item.label,
    }) } (<code>${ item.value }</code>)`;
  };

  return {
    keyLabelCallback,
  };
}
