export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AShowMore from "aloha-vue/src/AShowMore/AShowMore";
    
export default {
  name: "PageShowMoreExposes",
  components: {
    AShowMore,
  },
  setup() {
    const html = \`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;
      
    const showMoreRef = ref(undefined);

    setTimeout(() => {
      console.log("showMoreRef.value", showMoreRef.value);
      console.log("showMoreRef.value.buttonRef", showMoreRef.value.buttonRef);
      console.log("showMoreRef.value.containerRef", showMoreRef.value.containerRef);
      console.log("showMoreRef.value.isButtonVisible", showMoreRef.value.isButtonVisible);
      console.log("showMoreRef.value.isOpen", showMoreRef.value.isOpen);
      console.log("showMoreRef.value.toggleButton", showMoreRef.value.toggleButton);
    }, 300);

    return {
      html,
      showMoreRef,
    };
  },
};`;

  return {
    codeJs,
  };
}