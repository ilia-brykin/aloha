import {
  computed,
  onBeforeUnmount,
  toRef,
  watch,
} from "vue";

/* Import TinyMCE */
import tinymce from "tinymce";

/* Default icons are required. After that, import custom icons if applicable */
import "tinymce/icons/default";

/* Required TinyMCE components */
import "tinymce/themes/silver";
import "tinymce/models/dom";

/* Import a skin (can be a custom skin instead of the default) */
import "tinymce/skins/ui/oxide/skin.css";

/* Import plugins */
import "tinymce/plugins/advlist";
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
// import "tinymce/langs/de_DE";

export default function ATinymceAPI(props, context, {
  changeModel = () => {},
  htmlIdLocal = computed(() => ""),
}) {
  const branding = toRef(props, "branding");
  const contentLangs = toRef(props, "contentLangs");
  const disabled = toRef(props, "disabled");
  const languageDefault = toRef(props, "languageDefault");
  const menu = toRef(props, "menu");
  const menubar = toRef(props, "menubar");
  const plugins = toRef(props, "plugins");
  const promotion = toRef(props, "promotion");
  const toolbar = toRef(props, "toolbar");
  const toolbarMode = toRef(props, "toolbarMode");
  const modelValue = toRef(props, "modelValue");

  let vueEditor = null;

  const render = () => {
    tinymce.init({
      selector: `#${ htmlIdLocal.value }`,
      plugins: plugins.value,
      toolbar: toolbar.value,
      toolbar_mode: toolbarMode.value,
      skin: false,
      content_css: false,
      content_style: `${ contentUiSkinCss.toString() }\n${ contentCss.toString() }`,
      branding: branding.value,
      promotion: promotion.value,
      language: languageDefault.value,
      content_langs: contentLangs.value,
      menu: menu.value,
      menubar: menubar.value,
      readonly: !!disabled.value,
      setup: editor => {
        vueEditor = editor;
        editor.on("change input undo redo", () => {
          changeModel({ model: editor.getContent({ format: "html" }) });
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
    tinymce.get(htmlIdLocal.value).setContent(newValue);
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
