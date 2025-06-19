import AKeysCode from "../../../const/AKeysCode";
import {
  AKeyId,
} from "../../../const/AKeys";

export default function EventsAPI({ emit }) {
  const changeActiveId = ({ item }) => {
    emit("changeActiveId", { id: item[AKeyId] });
  };

  const onPressBtn = $event => {
    if ($event.keyCode === AKeysCode.arrowLeft) {
      $event.preventDefault();
      emit("toPreviousSlide", { withFocus: true });
    } else if ($event.keyCode === AKeysCode.arrowRight) {
      $event.preventDefault();
      emit("toNextSlide", { withFocus: true });
    }
  };

  return {
    changeActiveId,
    onPressBtn,
  };
}
