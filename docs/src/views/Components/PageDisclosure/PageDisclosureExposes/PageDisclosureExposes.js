import {
  nextTick,
  onMounted,
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ADisclosure,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDisclosureExposes",
  components: {
    AButton,
    ADisclosure,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const textLess = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.";
    const textMore = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`;

    const disclosureRef = ref(undefined);

    const toggleShowWithIsOpen = () => {
      disclosureRef.value.isOpen = !disclosureRef.value.isOpen;
    };

    const toggleShowWithToggleButton = () => {
      disclosureRef.value.toggleButton();
    };

    onMounted(() => {
      disclosureRef.value.containerRef.setAttribute("class", "a_bg_gray_200");
      nextTick().then(
        () => {
          disclosureRef.value.buttonRef.$el.setAttribute("class", "a_btn a_btn_primary");
        },
      );
    });

    return {
      codeHtml,
      codeJs,
      disclosureRef,
      textLess,
      textMore,
      toggleShowWithIsOpen,
      toggleShowWithToggleButton,
    };
  },
};
