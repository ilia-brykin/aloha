import {
  ref,
} from "vue";

export const tinymcePluginOptions = ref({
  propsDefault: {
    branding: true,
    contentCustomStyle: undefined,
    contentLangs: [
      { title: "English", code: "en" },
      { title: "Spanish", code: "es" },
      { title: "French", code: "fr" },
      { title: "Deutsch", code: "de" },
      { title: "Portuguese", code: "pt" },
      { title: "Chinese", code: "zh" },
    ],
    languageDefault: "de",
    maxlength: undefined,
    menu: undefined,
    menubar: false,
    minHeightBody: 70,
    plugins: "advlist autoresize code emoticons link lists table help example",
    promotion: false,
    rows: undefined,
    toolbar: [
      { name: "Formatierung", items: ["bold", "italic", "underline"] },
      { name: "Ausrichtung", items: ["alignleft", "aligncenter", "alignright", "alignjustify"] },
      { name: "Liste", items: ["bullist", "numlist"] },
      { name: "Einrücken", items: ["indent", "outdent"] },
      { name: "Sprache", items: ["language"] },
      { name: "Link", items: ["link", "unlink"] },
      { name: "Historie", items: ["undo", "redo"] },
      { name: "Hilfe", items: ["help"] },
    ],
    toolbarMode: "wrap",
    validElements: "@[style],a[href|target|title],strong/b[style],em/i[style],br[style],p[style],span[style],ul[style],ol[style],li[style],table[],thead[],tbody[],th[],tr[],td[]",
    validStyles: {
      "*": "text-align,padding-left,text-decoration",
      ul: "list-style-type",
      ol: "list-style-type",
    },
  },
});

export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    tinymcePluginOptions.value.propsDefault = {
      ...tinymcePluginOptions.value.propsDefault,
      ...propsDefault,
    };
  },
};
