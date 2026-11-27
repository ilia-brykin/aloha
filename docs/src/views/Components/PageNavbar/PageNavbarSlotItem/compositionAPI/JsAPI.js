export default function JsAPI() {
  const codeJs = `import {
  ANavbar,
} from "aloha-vue";

export default {
  name: "PageNavbarSlotItem",
  components: {
    ANavbar,
  },
  setup() {
    const data = [
      { id: "inbox", label: "Inbox", href: "#navbar_inbox", count: 12 },
      { id: "tasks", label: "Tasks", children: [
        { id: "open", label: "Open", href: "#navbar_open", count: 3 },
        { id: "done", label: "Done", href: "#navbar_done" },
      ] },
      { id: "settings", label: "Settings", href: "#navbar_settings" },
    ];

    return {
      data,
    };
  },
};`;

  return {
    codeJs,
  };
}
