import {
  computed,
  onBeforeUnmount,
  toRef,
  watch,
} from "vue";

import MyPowerPaste from "../plugins/MyPowerPaste";

/* Import TinyMCE */
import tinymce from "tinymce";
tinymce.PluginManager.add("example", MyPowerPaste);

/* Default icons are required. After that, import custom icons if applicable */
import "tinymce/icons/default";

/* Required TinyMCE components */
import "tinymce/themes/silver";
import "tinymce/models/dom";

/* Import a skin (can be a custom skin instead of the default) */
import "tinymce/skins/ui/oxide/skin.css";

/* Import plugins */
import "tinymce/plugins/advlist";
import "tinymce/plugins/autoresize";
import "tinymce/plugins/code";
import "tinymce/plugins/emoticons";
import "tinymce/plugins/emoticons/js/emojis";
import "tinymce/plugins/help";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/table";

/* content UI CSS is required */
import contentUiSkinCss from "tinymce/skins/ui/oxide/content.css";

/* The default content CSS can be changed or replaced with appropriate CSS for the editor content. */
import contentCss from "tinymce/skins/content/default/content.css";

/* lang */
import "../langs/de";

import "tinymce/plugins/help/js/i18n/keynav/en";
import "tinymce/plugins/help/js/i18n/keynav/de";

export default function ATinymceAPI(props, context, {
  changeModel = () => {},
  htmlIdLocal = computed(() => ""),
}) {
  const branding = toRef(props, "branding");
  const contentCustomStyle = toRef(props, "contentCustomStyle");
  const contentLangs = toRef(props, "contentLangs");
  const disabled = toRef(props, "disabled");
  const languageDefault = toRef(props, "languageDefault");
  const menu = toRef(props, "menu");
  const menubar = toRef(props, "menubar");
  const modelValue = toRef(props, "modelValue");
  const plugins = toRef(props, "plugins");
  const promotion = toRef(props, "promotion");
  const toolbar = toRef(props, "toolbar");
  const toolbarMode = toRef(props, "toolbarMode");
  const validElements = toRef(props, "validElements");
  const validStyles = toRef(props, "validStyles");

  let vueEditor = null;
  let modelValueLocal = undefined;

  const contentStyle = computed(() => {
    return `${ contentUiSkinCss.toString() }\n${ contentCss.toString() }\n${ contentCustomStyle.value ? contentCustomStyle.value : "" }`;
  });

  const changeModelLocal = ({ model }) => {
    modelValueLocal = model;
    changeModel({ model });
  };

  const render = () => {
    modelValueLocal = modelValue.value;
    tinymce.init({
      branding: branding.value,
      content_css: false,
      content_langs: contentLangs.value,
      content_style: contentStyle.value,
      contextmenu: "copy paste",
      entity_encoding: "raw",
      force_br_newlines: true,
      indent: false,
      language: languageDefault.value,
      menu: menu.value,
      menubar: menubar.value,
      plugins: plugins.value,
      promotion: promotion.value,
      readonly: !!disabled.value,
      selector: `#${ htmlIdLocal.value }`,
      skin: false,
      toolbar: toolbar.value,
      toolbar_mode: toolbarMode.value,
      valid_elements: validElements.value,
      valid_styles: validStyles.value,

      setup: editor => {
        vueEditor = editor;
        editor.on("change input undo redo", () => {
          changeModelLocal({ model: editor.getContent({ format: "html" }) });
        });
      },
    });
  };

  const clickLabel = () => {
    setFocusToTinymce({ id: htmlIdLocal.value });
  };

  watch(disabled, newValue => {
    if (newValue === true) {
      tinymce.get(htmlIdLocal.value).mode.set("readonly");
    } else {
      tinymce.get(htmlIdLocal.value).mode.set("design");
    }
  });

  watch(modelValue, newValue => {
    if (newValue !== modelValueLocal) {
      tinymce.get(htmlIdLocal.value).setContent(newValue);
      modelValueLocal = newValue;
    }
  });

  onBeforeUnmount(() => {
    tinymce.remove(vueEditor);
  });

  return {
    clickLabel,
    render,
  };
}


export function setFocusToTinymce({ id }) {
  tinymce.execCommand("mceFocus", false, id);
}
