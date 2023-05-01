import {
  toRef,
} from "vue";

export default function MouseAPI(props, {
  setRating,
}) {
  const rating = toRef(props, "rating");
  const disabled = toRef(props, "disabled");

  const handleMouseEnter = ({ ratingValue }) => {
    if (!disabled.value) {
      setRating({ value: ratingValue });
    }
  };

  const handleMouseLeave = () => {
    if (!disabled.value) {
      setRating({ value: rating.value });
    }
  };

  const handleIconClick = ({ ratingValue }) => {
    if (!disabled.value) {
      rating.value === ratingValue ? setRating({ value: 0 }) : setRating({ value: rating.value });
    }
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
    handleIconClick,
  };
}
