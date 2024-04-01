import {
  ref,
} from "vue";

export const typesContainer = ref({
  fieldset: true,
  group: true,
});

export const typesModelArray = ref({
  multiselect: true,
  checkbox: true,
});

export const typesModelObject = ref({
  dateRange: true,
  integerNonNegativeRange: true,
  integerPositiveRange: true,
  integerRange: true,
  numberRange: true,
});

export const typesWithData = ref({
  checkbox: true,
  multiselect: true,
  radio: true,
  select: true,
});


export const typesLabelProps = ref({
  select: {
    prevent: true,
    stop: true,
  },
  multiselect: {
    prevent: true,
    stop: true,
  },
  file: {
    hideId: true,
  },
  // numberRange
  numberRange: {
    hideFor: true,
    prevent: true,
    stop: true,
  },
  integerNonNegativeRange: {
    hideFor: true,
    prevent: true,
    stop: true,
  },
  integerPositiveRange: {
    hideFor: true,
    prevent: true,
    stop: true,
  },
  integerRange: {
    hideFor: true,
    prevent: true,
    stop: true,
  },
  // numberRange /
  dateRange: {
    hideFor: true,
    prevent: true,
    stop: true,
  },
});
