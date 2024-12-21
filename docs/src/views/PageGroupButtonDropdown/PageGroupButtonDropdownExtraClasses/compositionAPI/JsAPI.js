export default function JsAPI() {
  const codeJs = `import { 
  AGroupButtonDropdown,
} from "aloha-vue";
    
export default {
  name: "PageGroupButtonDropdownActionsClasses",
  components: {
    AGroupButtonDropdown,
  },
  setup() {
    const actions = [
      {
        text: "Action 1",
        type: "button",
        callback: () => {},
        classExtra: "test_action1",
      },
      {
        text: "Action 2",
        type: "button",
        callback: () => {},
        classExtra: "test_action2",
      },
      {
        text: "Action 3",
        type: "button",
        callback: () => {},
        classExtra: "test_action3",
      },
      {
        text: "Action 4",
        type: "button",
        callback: () => {},
        classExtra: "test_action4",
      },
      {
        text: "Action 5",
        type: "button",
        callback: () => {},
        classExtra: "test_action5",
      },
      {
        text: "Action 6",
        type: "button",
        callback: () => {},
        classExtra: "test_action6",
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
