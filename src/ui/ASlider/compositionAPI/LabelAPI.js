import {
  setFocusToElement,
} from "../../../utils/utilsDOM";

export default function LabelAPI() {
  const clickLabel = ({ id }) => {
    setFocusToElement({ selector: `#${ id }` });
  };

  return {
    clickLabel,
  };
}
