export default function JsAPI() {
  const codeJs = `import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownBasic",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        callback: () => {},
      },
    ];
    
     return {
      actions,
    };
  },
};`;

  return {
    codeJs,
  };
}
