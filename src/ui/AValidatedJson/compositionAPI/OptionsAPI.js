import {
  computed,
  toRef,
} from "vue";

import {
  cloneDeep,
  forEach,
} from "lodash-es";

export default function OptionsAPI(props) {
  const options = toRef(props, "options");
  const required = toRef(props, "required");

  const keyField = computed(() => options.value.key_field || options.value.keyField);
  const posField = computed(() => options.value.pos_field || options.value.posField);
  const minLength = computed(() => options.value.min_length || options.value.minLength);
  const maxLength = computed(() => options.value.max_length || options.value.maxLength);
  const elementLabel = computed(() => options.value.element_label || options.value.elementLabel);
  const elementTemplate = computed(() => options.value.element_template || options.value.elementTemplate);
  const fields = computed(() => options.value.fields);
  const fieldsReadonly = computed(() => {
    const READONLY_FIELDS = cloneDeep(fields.value);
    forEach(READONLY_FIELDS, el => el.readonly = true);
    return READONLY_FIELDS;
  });
  const translateExtra = computed(() => ({ elementLabel: elementLabel.value }));
  const isRequired = computed(() => required.value || options.value.required);
  const showReadonly = computed(() => options.value.show_readonly || options.value.showReadonly);

  return {
    keyField,
    posField,
    minLength,
    maxLength,
    elementLabel,
    elementTemplate,
    fields,
    fieldsReadonly,
    translateExtra,
    isRequired,
    showReadonly,
  };
}