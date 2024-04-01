import {
  toRef,
} from "vue";

import {
  isFunction,
} from "lodash-es";

export default function ClickAPI(props) {
  const clickLabel = toRef(props, "clickLabel");
  const onClick = $event => {
    if (isFunction(clickLabel.value)) {
      clickLabel.value();
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  return {
    onClick,
  };
}
