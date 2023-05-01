import {
  toRef,
  computed,
} from "vue";

export default function UpdateAPI(props) {
  const rating = toRef(props, "rating");
  const disabled = toRef(props, "disabled");

  const ratingPercentage = computed(() => (rating.value / 5) * 100);

  const updateRatingPercentage = () => {
    ratingPercentage.value = (rating.value / 5) * 100;
  };

  const setRating = ({ value }) => {
    if (!disabled.value) {
      rating.value = value;
      updateRatingPercentage();
    }
  };

  return {
    updateRatingPercentage,
    ratingPercentage,
    setRating,
  };
}
