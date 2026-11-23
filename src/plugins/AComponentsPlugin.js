import {
  forEach,
  isPlainObject,
} from "lodash-es";

/**
 * Settings of the components: { AModal: { props: { useEscape: false } }, AAlert: { icons: { info: "<svg…>" } } }.
 */
export const componentsPluginOptions = {};

/**
 * The prop defaults of these components fall back to the parent (as one plugin set them in 2.x).
 * Own components can set a parent with the key "extends".
 */
export const COMPONENTS_PARENTS = {
  AModalForm: "AModal",
  AModalWizard: "AModal",
  ASelectIcon: "ASelect",
  ASelectStyle: "ASelect",
};

function getParent(componentName) {
  const OPTIONS = componentsPluginOptions[componentName];
  if (OPTIONS && Object.hasOwn(OPTIONS, "extends")) {
    return OPTIONS.extends;
  }
  return COMPONENTS_PARENTS[componentName];
}

/**
 * The default of the prop: the component, then its parents, then the default of the component.
 * An own key counts, so `undefined` can be set as default too.
 *
 * @param {string} componentName e.g. "AModalForm"
 * @param {string} propName e.g. "closeButtonClass"
 * @param {*} defaultValue the default of the component
 */
export function getPropDefault(componentName, propName, defaultValue) {
  const VISITED = [];
  let name = componentName;
  while (name && VISITED.indexOf(name) === -1) {
    VISITED.push(name);
    const PROPS = componentsPluginOptions[name]?.props;
    if (PROPS && Object.hasOwn(PROPS, propName)) {
      return PROPS[propName];
    }
    name = getParent(name);
  }
  return defaultValue;
}

/**
 * Another setting of the component (icons, config, cssClasses, routes…). Not inherited.
 */
export function getComponentOption(componentName, key, defaultValue) {
  const OPTIONS = componentsPluginOptions[componentName];
  if (OPTIONS && Object.hasOwn(OPTIONS, key)) {
    return OPTIONS[key];
  }
  return defaultValue;
}

export default {
  install: (app, components = {}) => {
    forEach(components, (options, componentName) => {
      if (!isPlainObject(options)) {
        console.warn(`AComponentsPlugin: the settings of ${ componentName } must be an object`);
        return;
      }
      const CURRENT = componentsPluginOptions[componentName] || {};
      const MERGED = { ...CURRENT };
      // Objects (props, icons, config) are merged, other values are replaced
      forEach(options, (value, key) => {
        MERGED[key] = isPlainObject(value) && isPlainObject(CURRENT[key]) ?
          { ...CURRENT[key], ...value } :
          value;
      });
      componentsPluginOptions[componentName] = MERGED;
    });
  },
};
