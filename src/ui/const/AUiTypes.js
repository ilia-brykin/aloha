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

export const typesNotFocusable = ref({
  select: true,
  multiselect: true,
});

export const typesWithData = ref({
  checkbox: true,
  multiselect: true,
  radio: true,
  select: true,
});
