# AOnHooks (Function calls at different lifecycle stages)

AOnHooks is a powerful Vue.js directive allowing for binding of the specific functions executions when different lifecycle stages of a Vue.js component or HTML tag are reached. This directive provides an elegant way to run code at the different stages of the component or tag lifecycle, allowing granular control over the behavior of a Vue.js component or HTML element.

The directive exports a collection of hooks that can be bound to the specific lifecycle methods of a Vue.js component or HTML tag. These hooks allow code to be executed at the following moments:

- **created:** This function is called before any attributes or event listeners are applied to the bound element. This hook provides a great opportunity to run initializing code and make preparations before the element appears in the DOM.
- **beforeMount:** The function that is bound here is called just before the element is inserted into the DOM. This hook is useful for making final changes to the DOM before the element becomes visible.
- **mounted:** Once the element or component is fully mounted in the DOM, the function bound here is called. This hook provides a convenient place to make asynchronous requests or access external resources after the element has been fully rendered.
- **beforeUnmount:** Before the element or component is unmounted, the function bound here is called. Cleanup code can be placed here, for example to remove event listeners or release the resources.
- **unmounted:** This function is called when the element or component is unmounted. It's the last chance to do any cleanup and any resource releases.

## Basic usage

```html
<div
  v-a-on-hooks="{ created: onCreated, beforeMount: onBeforeMount, mounted: onMounted, beforeUnmount: onBeforeUnmount, unmounted: onUnmounted }"
>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
```

```js
import {
  AOnHooks,
} from "aloha-vue";
    
export default {
  name: "PageOnHooksExample",
  directives: {
    AOnHooks,
  },
  setup() {
    const onCreated = (el, binding) => {
      console.log("created", el, binding);
    };
    
    const onBeforeMount = (el, binding) => {
      console.log("beforeMount", el, binding);
    };
    
    const onMounted = (el, binding) => {
      console.log("mounted", el, binding);
    };
    
    const onBeforeUnmount = (el, binding) => {
      console.log("beforeUnmount", el, binding);
    }; 
    
    const onUnmounted = (el, binding) => {
      console.log("unmounted", el, binding);
    };

    return {
      onBeforeMount,
      onBeforeUnmount,
      onCreated,
      onMounted,
      onUnmounted,
    };
  },
};
```
