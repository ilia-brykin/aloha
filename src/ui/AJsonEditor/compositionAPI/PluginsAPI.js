import {
  computed,
  toRef,
} from "vue";

import {
  updateI18nForLanguage,
} from "../../../ATranslation/compositionAPI/ATranslationAPI";

import {
  getJsonType,
} from "../utils/types";
import {
  getWholeVariable,
} from "../utils/variables";
import {
  forEach,
  isFunction,
} from "lodash-es";

/**
 * Global plugins: app.use(AJsonEditorPlugin, { plugins: [colorPlugin] }).
 */
export const AJsonEditorPluginOptions = {
  plugins: [],
};

const REGISTERED_I18N = new WeakSet();

// the translations of a plugin, once
export function registerPluginI18n(plugin) {
  if (!plugin?.i18n || REGISTERED_I18N.has(plugin)) {
    return;
  }
  REGISTERED_I18N.add(plugin);
  forEach(plugin.i18n, (i18n, language) => {
    updateI18nForLanguage({ language, i18n });
  });
}

export const AJsonEditorPlugin = {
  install: (app, { plugins = [] } = {}) => {
    AJsonEditorPluginOptions.plugins = plugins;
    plugins.forEach(registerPluginI18n);
  },
};

export const BUILT_IN_TYPE_LABELS = {
  array: "_A_JSON_EDITOR_TYPE_ARRAY_",
  boolean: "_A_JSON_EDITOR_TYPE_BOOLEAN_",
  null: "_A_JSON_EDITOR_TYPE_NULL_",
  number: "_A_JSON_EDITOR_TYPE_NUMBER_",
  object: "_A_JSON_EDITOR_TYPE_OBJECT_",
  string: "_A_JSON_EDITOR_TYPE_STRING_",
  variable: "_A_JSON_EDITOR_TYPE_VARIABLE_",
};

/**
 * A plugin: { name, types: [{ name, label, detect, view, editor, validate, defaultValue }],
 * actions: [{ id, label, when, run }], toolbar: [{ id, label, icon, run }], hooks: { beforeRemove… }, i18n }.
 */
export default function PluginsAPI(props, {
  variablePattern = computed(() => undefined),
}) {
  const plugins = toRef(props, "plugins");

  const pluginsAll = computed(() => {
    const ALL = [...AJsonEditorPluginOptions.plugins, ...(plugins.value || [])];
    ALL.forEach(registerPluginI18n);
    return ALL;
  });

  const pluginTypes = computed(() => pluginsAll.value.flatMap(plugin => plugin.types || []));
  const pluginActions = computed(() => pluginsAll.value.flatMap(plugin => plugin.actions || []));
  const pluginToolbar = computed(() => pluginsAll.value.flatMap(plugin => plugin.toolbar || []));

  // the hook of the props and the hooks of the plugins with the same name: plugins first
  const getHooks = name => {
    const HOOKS = pluginsAll.value.map(plugin => plugin.hooks?.[name]).filter(isFunction);
    if (isFunction(props[name])) {
      HOOKS.push(props[name]);
    }
    return HOOKS;
  };

  /**
   * The type of a value: getValueType (props or plugins), the types of the plugins, a whole variable, the JSON type.
   * The result: { name, jsonType, label, plugin type or undefined }.
   */
  const resolveType = ({ value, pointer, tokens }) => {
    const JSON_TYPE = getJsonType(value);
    let name;
    for (const HOOK of getHooks("getValueType")) {
      name = HOOK({ value, pointer, tokens });
      if (name) {
        break;
      }
    }
    const PLUGIN_TYPE = name ?
      pluginTypes.value.find(type => type.name === name) :
      pluginTypes.value.find(type => isFunction(type.detect) && type.detect(value, { pointer, tokens }));
    if (PLUGIN_TYPE) {
      return { name: PLUGIN_TYPE.name, jsonType: JSON_TYPE, label: PLUGIN_TYPE.label || PLUGIN_TYPE.name, pluginType: PLUGIN_TYPE };
    }
    if (!name && JSON_TYPE === "string" && getWholeVariable(value, variablePattern.value)) {
      name = "variable";
    }
    const NAME = name || JSON_TYPE;
    return { name: NAME, jsonType: JSON_TYPE, label: BUILT_IN_TYPE_LABELS[NAME] || NAME };
  };

  return {
    getHooks,
    pluginActions,
    pluginsAll,
    pluginToolbar,
    pluginTypes,
    resolveType,
  };
}
