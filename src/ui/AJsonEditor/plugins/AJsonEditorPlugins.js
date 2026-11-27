import {
  h,
  markRaw,
} from "vue";

import AColorPicker from "../../AColorPicker/AColorPicker";
import ADateInput from "../../ADateInput/ADateInput";

import filterDate from "../../../filters/filterDate";

/**
 * Ready plugins of AJsonEditor: color, date, image, url and boolean as a switch.
 * :plugins="AJsonEditorPlugins" (all) or :plugins="[AJsonEditorColorPlugin]", also global with AJsonEditorPlugin.
 * A view gets value, path, tokens, readonly, setValue and translate (only the props it declares).
 */

const COLOR_PATTERN = /^(#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|(rgb|hsl)a?\([^()]*\))$/i;
const DATE_PATTERN = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
const DATETIME_PATTERN = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):[0-5]\d(:[0-5]\d(\.\d+)?)?(Z|[+-]\d{2}:?\d{2})?$/;
// only http(s): no "javascript:" links
const URL_PATTERN = /^https?:\/\/[^\s"<>]+$/i;
const IMAGE_PATTERN = /^(https?:\/\/[^\s"<>]+\.(png|jpe?g|gif|webp|avif|svg)(\?[^\s"<>]*)?|data:image\/(png|jpe?g|gif|webp|avif);base64,[a-z0-9+/=]+)$/i;

export const isColorValue = value => typeof value === "string" && COLOR_PATTERN.test(value.trim());
export const isDateValue = value => typeof value === "string" && DATE_PATTERN.test(value);
export const isDateTimeValue = value => typeof value === "string" && DATETIME_PATTERN.test(value);
export const isUrlValue = value => typeof value === "string" && URL_PATTERN.test(value);
export const isImageValue = value => typeof value === "string" && IMAGE_PATTERN.test(value);

const getColorFormat = value => {
  const TEXT = value.trim().toLowerCase();
  if (TEXT.startsWith("rgb")) {
    return "rgb";
  }
  return TEXT.startsWith("hsl") ? "hsl" : "hex";
};

const hasAlpha = value => /^(rgba|hsla)/i.test(value) || /^#([0-9a-f]{4}|[0-9a-f]{8})$/i.test(value);

// ---------- color ----------
const ColorView = markRaw({
  name: "AJsonEditorColorView",
  props: ["value"],
  render() {
    return h("span", { class: "a_json_editor__value a_json_editor__plugin_color" }, [
      h("span", {
        class: "a_json_editor__plugin_color__swatch",
        style: { background: this.value },
        "aria-hidden": "true",
      }),
      this.value,
    ]);
  },
});

const ColorEditor = markRaw({
  name: "AJsonEditorColorEditor",
  props: ["modelValue", "label"],
  emits: ["update:modelValue"],
  render() {
    return h(AColorPicker, {
      modelValue: this.modelValue,
      label: this.label,
      colorFormats: getColorFormat(this.modelValue || ""),
      showAlpha: hasAlpha(this.modelValue || ""),
      "onUpdate:modelValue": value => this.$emit("update:modelValue", value),
    });
  },
});

export const AJsonEditorColorPlugin = {
  name: "color",
  types: [{
    name: "color",
    label: "_A_JSON_EDITOR_TYPE_COLOR_",
    detect: isColorValue,
    view: ColorView,
    editor: ColorEditor,
  }],
};

// ---------- date and date with time ----------
const DateView = markRaw({
  name: "AJsonEditorDateView",
  props: ["value"],
  render() {
    return h("time", {
      class: "a_json_editor__value a_json_editor__plugin_date",
      datetime: this.value,
      title: this.value,
    }, filterDate(this.value, { format: isDateValue(this.value) ? "date" : "datetime" }));
  },
});

const DateEditor = markRaw({
  name: "AJsonEditorDateEditor",
  props: ["modelValue", "label"],
  emits: ["update:modelValue"],
  render() {
    const IS_DATE = isDateValue(this.modelValue);
    return h(ADateInput, {
      modelValue: this.modelValue,
      label: this.label,
      mode: IS_DATE ? "date" : "datetime",
      // "…Z": the model is in UTC, the field shows the local time
      utc: !IS_DATE && /Z$/.test(this.modelValue || ""),
      withSeconds: !IS_DATE && /T\d{2}:\d{2}:\d{2}/.test(this.modelValue || ""),
      "onUpdate:modelValue": value => {
        if (value) {
          this.$emit("update:modelValue", value);
        }
      },
    });
  },
});

export const AJsonEditorDatePlugin = {
  name: "date",
  types: [{
    name: "date",
    label: "_A_JSON_EDITOR_TYPE_DATE_",
    detect: isDateValue,
    view: DateView,
    editor: DateEditor,
  }, {
    name: "datetime",
    label: "_A_JSON_EDITOR_TYPE_DATETIME_",
    detect: isDateTimeValue,
    view: DateView,
    editor: DateEditor,
  }],
};

// ---------- url and image ----------
const openUrl = ({ value }) => {
  globalThis.open?.(value, "_blank", "noopener,noreferrer");
  // no new value
  return undefined;
};

// the link is not in the tab order of the treegrid (one stop per row): the action "Open link" in the menu is for the keyboard
const renderLink = (value, translate, children) => h("a", {
  class: "a_json_editor__plugin_link",
  href: value,
  target: "_blank",
  rel: "noopener noreferrer",
  tabindex: "-1",
  onClick: $event => $event.stopPropagation(),
}, [
  ...children,
  h("span", { class: "a_sr_only" }, ` (${ translate("_A_JSON_EDITOR_NEW_WINDOW_") })`),
]);

const UrlView = markRaw({
  name: "AJsonEditorUrlView",
  props: ["value", "translate"],
  render() {
    return h("span", { class: "a_json_editor__value a_json_editor__plugin_url" }, [
      renderLink(this.value, this.translate, [this.value]),
    ]);
  },
});

const ImageView = markRaw({
  name: "AJsonEditorImageView",
  props: ["value", "translate"],
  render() {
    const IS_DATA = this.value.startsWith("data:");
    return h("span", { class: "a_json_editor__value a_json_editor__plugin_image" }, [
      // the text of the value follows, so the picture is decorative
      h("img", {
        class: "a_json_editor__plugin_image__thumb",
        src: this.value,
        alt: "",
        loading: "lazy",
        referrerpolicy: "no-referrer",
      }),
      IS_DATA ?
        h("span", { title: this.value }, `${ this.value.slice(0, 32) }…`) :
        renderLink(this.value, this.translate, [this.value]),
    ]);
  },
});

const OPEN_ACTION = {
  id: "openUrl",
  label: "_A_JSON_EDITOR_ACTION_OPEN_LINK_",
  isAllowedReadonly: true,
  when: ({ value }) => isUrlValue(value),
  run: openUrl,
};

export const AJsonEditorUrlPlugin = {
  name: "url",
  types: [{
    name: "url",
    label: "_A_JSON_EDITOR_TYPE_URL_",
    detect: isUrlValue,
    view: UrlView,
  }],
  actions: [OPEN_ACTION],
};

export const AJsonEditorImagePlugin = {
  name: "image",
  types: [{
    name: "image",
    label: "_A_JSON_EDITOR_TYPE_IMAGE_",
    detect: isImageValue,
    view: ImageView,
  }],
  actions: [OPEN_ACTION],
};

// ---------- boolean as a switch ----------
const SwitchView = markRaw({
  name: "AJsonEditorSwitchView",
  props: ["value", "readonly", "setValue"],
  render() {
    // a click toggles the value; the keyboard: Enter on the row opens the select (one tab stop per row)
    return h("span", { class: "a_json_editor__value a_json_editor__value_boolean a_json_editor__plugin_switch" }, [
      h("button", {
        type: "button",
        class: ["a_json_editor__plugin_switch__button", { a_json_editor__plugin_switch__button_on: this.value }],
        role: "switch",
        "aria-checked": `${ this.value }`,
        "aria-hidden": "true",
        tabindex: "-1",
        disabled: this.readonly,
        onClick: $event => {
          $event.stopPropagation();
          this.setValue?.(!this.value);
        },
      }, [h("span", { class: "a_json_editor__plugin_switch__thumb" })]),
      `${ this.value }`,
    ]);
  },
});

export const AJsonEditorSwitchPlugin = {
  name: "switch",
  types: [{
    name: "boolean",
    label: "_A_JSON_EDITOR_TYPE_BOOLEAN_",
    detect: value => typeof value === "boolean",
    view: SwitchView,
  }],
};

// the image before the url: a link to a picture is an image
export const AJsonEditorPlugins = [
  AJsonEditorColorPlugin,
  AJsonEditorDatePlugin,
  AJsonEditorImagePlugin,
  AJsonEditorUrlPlugin,
  AJsonEditorSwitchPlugin,
];
