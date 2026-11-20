import {
  forEach,
  isPlainObject,
} from "lodash-es";

/**
 * Prop defaults of the components: { AModal: { useEscape: false }, ASelect: { keyId: "id" } }.
 */
export const propsDefaultPluginOptions = {};

/**
 * The default of the prop from APropsDefaultPlugin or the default of the component.
 * An own key counts, so `undefined` can be set as default too.
 *
 * @param {string} componentName e.g. "AModal"
 * @param {string} propName e.g. "closeButtonClass"
 * @param {*} defaultValue the default of the component
 */
export function getPropDefault(componentName, propName, defaultValue) {
  const PROPS = propsDefaultPluginOptions[componentName];
  if (PROPS && Object.hasOwn(PROPS, propName)) {
    return PROPS[propName];
  }
  return defaultValue;
}

export default {
  install: (app, components = {}) => {
    forEach(components, (props, componentName) => {
      if (!isPlainObject(props)) {
        console.warn(`APropsDefaultPlugin: the props of ${ componentName } must be an object`);
        return;
      }
      propsDefaultPluginOptions[componentName] = {
        ...propsDefaultPluginOptions[componentName],
        ...props,
      };
    });
  },
};
