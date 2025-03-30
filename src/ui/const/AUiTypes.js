import {
  ref,
} from "vue";

export const typesContainer = ref({
  fieldset: true,
  group: true,
});

export const typesModelArray = ref({
  checkbox: true,
  multiselect: true,
  multiselectOrdered: true,
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
  multiselectOrdered: true,
  radio: true,
  select: true,
});


export const typesLabelProps = ref({
  select: {
    hideFor: true,
    prevent: true,
  },
  multiselect: {
    hideFor: true,
    prevent: true,
  },
  file: {
    hideId: true,
  },
  // numberRange
  numberRange: {
    hideFor: true,
    prevent: true,
  },
  integerNonNegativeRange: {
    hideFor: true,
    prevent: true,
  },
  integerPositiveRange: {
    hideFor: true,
    prevent: true,
  },
  integerRange: {
    hideFor: true,
    prevent: true,
  },
  // numberRange /
  dateRange: {
    hideFor: true,
    prevent: true,
  },
});
