import {
  computed,
  h,
  onMounted,
  toRef,
  watch,
} from "vue";

import AIcon from "../AIcon/AIcon";
import ATranslation from "../ATranslation/ATranslation";
import {
  getHighlightParts,
  getJsonValueText,
} from "./utils/utils";

import CheckAPI from "./compositionAPI/CheckAPI";
import ExpandAPI from "./compositionAPI/ExpandAPI";
import FilterAPI from "./compositionAPI/FilterAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import KeyboardAPI from "./compositionAPI/KeyboardAPI";
import LoadAPI from "./compositionAPI/LoadAPI";
import NodesAPI from "./compositionAPI/NodesAPI";
import {
  getTranslatedText,
} from "../ATranslation/compositionAPI/UtilsAPI";

import {
  ChevronRight,
} from "./utils/icons";
import {
  isNumber,
  uniqueId,
} from "lodash-es";

export default {
  name: "ATree",
  props: {
    ariaLabel: {
      type: String,
      required: false,
      default: undefined,
    },
    ariaLabelledby: {
      type: String,
      required: false,
      default: undefined,
    },
    data: {
      type: Array,
      required: false,
      default: () => [],
    },
    defaultExpandLevel: {
      type: Number,
      required: false,
      default: 0,
    },
    emptyText: {
      type: String,
      required: false,
      default: "_A_TREE_EMPTY_",
    },
    expanded: {
      type: Array,
      required: false,
      default: undefined,
    },
    filterMethod: {
      type: Function,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_tree_"),
    },
    indent: {
      type: [Number, String],
      required: false,
      default: undefined,
    },
    isAccordion: {
      type: Boolean,
      required: false,
    },
    isCheckbox: {
      type: Boolean,
      required: false,
    },
    isCheckOnClickNode: {
      type: Boolean,
      required: false,
    },
    isCheckStrictly: {
      type: Boolean,
      required: false,
    },
    isExpandAll: {
      type: Boolean,
      required: false,
    },
    isExpandOnClickNode: {
      type: Boolean,
      required: false,
      default: true,
    },
    isSelectable: {
      type: Boolean,
      required: false,
      default: true,
    },
    json: {
      required: false,
      default: undefined,
    },
    keyChildren: {
      type: [String, Function],
      required: false,
      default: "children",
    },
    keyDisabled: {
      type: [String, Function],
      required: false,
      default: "disabled",
    },
    keyId: {
      type: [String, Function],
      required: false,
      default: "id",
    },
    keyIsLeaf: {
      type: [String, Function],
      required: false,
      default: "isLeaf",
    },
    keyLabel: {
      type: [String, Function],
      required: false,
      default: "label",
    },
    load: {
      type: Function,
      required: false,
      default: undefined,
    },
    modelValue: {
      type: Array,
      required: false,
      default: undefined,
    },
    searchModel: {
      type: String,
      required: false,
      default: "",
    },
    selected: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
  },
  emits: [
    "check",
    "collapse",
    "expand",
    "load-error",
    "node-click",
    "update:expanded",
    "update:modelValue",
    "update:selected",
  ],
  setup(props, { emit, expose }) {
    const ariaLabel = toRef(props, "ariaLabel");
    const indent = toRef(props, "indent");
    const isExpandOnClickNode = toRef(props, "isExpandOnClickNode");
    const isCheckOnClickNode = toRef(props, "isCheckOnClickNode");
    const isCheckbox = toRef(props, "isCheckbox");
    const isSelectable = toRef(props, "isSelectable");

    const {
      getAncestors,
      getDescendants,
      getNode,
      isJson,
      loadedChildren,
      nodesByKey,
      rootNodes,
    } = NodesAPI(props);

    const {
      countMatched,
      isFiltering,
      isNodeMatched,
      isNodeVisible,
      searchModelLocal,
    } = FilterAPI(props, {
      isJson,
      nodesByKey,
    });

    const {
      collapseAll,
      collapseNode,
      expandAll,
      expandNode,
      expandToKey,
      initExpanded,
      isNodeExpanded,
    } = ExpandAPI(props, {
      emit,
      getNode,
      isFiltering,
      isNodeVisible,
      nodesByKey,
      rootNodes,
    });

    const {
      checkNode,
      getCheckedItems,
      getCheckedState,
      getHalfCheckedKeys,
      setCheckedKeys,
    } = CheckAPI(props, {
      emit,
      getAncestors,
      getDescendants,
      getNode,
      nodesByKey,
    });

    const {
      loadChildren,
      loadingKeys,
    } = LoadAPI(props, {
      emit,
      loadedChildren,
    });

    const {
      focusNode,
      onFocusNode,
      setElement,
      tabbableKey,
      visibleNodes,
    } = FocusAPI(props, {
      isNodeExpanded,
      isNodeVisible,
      rootNodes,
    });

    const openNode = async({ node, $event }) => {
      if (node.isLazy && !node.isLoaded) {
        const IS_LOADED = await loadChildren({ node });
        if (!IS_LOADED) {
          return;
        }
        // The loaded node is a new object
        node = getNode(node.key) || node;
        if (node.isLeaf) {
          return;
        }
      }
      expandNode({ node, $event });
    };

    const closeNode = ({ node, $event }) => {
      collapseNode({ node, $event });
    };

    const toggleNodeOpen = ({ node, $event }) => {
      if (isNodeExpanded(node)) {
        closeNode({ node, $event });
      } else {
        openNode({ node, $event });
      }
    };

    const selectNode = ({ node, $event }) => {
      if (!isSelectable.value || node.disabled) {
        return;
      }
      emit("update:selected", node.key);
      emit("node-click", { item: node.item, key: node.key, $event });
    };

    const {
      onKeydown,
    } = KeyboardAPI(props, {
      checkNode,
      closeNode,
      focusNode,
      isNodeExpanded,
      openNode,
      rootNodes,
      selectNode,
      visibleNodes,
    });

    const onClickNode = ({ node, $event }) => {
      focusNode({ key: node.key });
      selectNode({ node, $event });
      if (isCheckbox.value && isCheckOnClickNode.value) {
        checkNode({ node, $event });
      }
      if (!node.isLeaf && isExpandOnClickNode.value) {
        toggleNodeOpen({ node, $event });
      }
    };

    const onClickToggle = ({ node, $event }) => {
      $event.stopPropagation();
      focusNode({ key: node.key });
      toggleNodeOpen({ node, $event });
    };

    const onClickCheckbox = ({ node, $event }) => {
      $event.stopPropagation();
      focusNode({ key: node.key });
      checkNode({ node, $event });
    };

    const treeStyle = computed(() => {
      if (indent.value === undefined) {
        return undefined;
      }
      return {
        "--a_tree_indent": isNumber(indent.value) ? `${ indent.value }px` : indent.value,
      };
    });

    const ariaLabelTranslated = computed(() => {
      return ariaLabel.value ? getTranslatedText({ placeholder: ariaLabel.value }) : undefined;
    });

    const statusText = computed(() => {
      if (!isFiltering.value) {
        return "";
      }
      return getTranslatedText({ placeholder: "_A_TREE_FOUND_{{count}}_", extra: { count: countMatched.value } });
    });

    onMounted(initExpanded);
    // New data without v-model:expanded: the initial state is applied again
    watch(nodesByKey, (newValue, oldValue) => {
      if (!oldValue || newValue.size === 0 || oldValue.size === 0) {
        initExpanded();
      }
    });

    const setSelected = key => {
      if (key !== undefined) {
        expandToKey(key);
      }
      emit("update:selected", key);
    };

    const focus = ({ key } = {}) => {
      return focusNode({ key: key ?? tabbableKey.value });
    };

    expose({
      checkNode: ({ key, checked }) => checkNode({ node: getNode(key), checked }),
      collapseAll,
      expandAll,
      expandToKey,
      focus,
      getCheckedItems,
      getHalfCheckedKeys,
      getNode: key => getNode(key)?.item,
      setCheckedKeys,
      setSelected,
    });

    return {
      ariaLabelTranslated,
      getCheckedState,
      isFiltering,
      isJson,
      isNodeExpanded,
      isNodeMatched,
      isNodeVisible,
      loadingKeys,
      onClickCheckbox,
      onClickNode,
      onClickToggle,
      onFocusNode,
      onKeydown,
      rootNodes,
      searchModelLocal,
      setElement,
      statusText,
      tabbableKey,
      treeStyle,
      visibleNodes,
    };
  },
  methods: {
    renderText(text) {
      if (!this.isFiltering) {
        return String(text);
      }
      return getHighlightParts({ text, searchModel: this.searchModelLocal }).map(part => {
        return part.isMatch ?
          h("mark", { class: "a_tree__mark" }, part.text) :
          part.text;
      });
    },

    renderLabel(node) {
      if (this.isJson) {
        const ITEM = node.item;
        return h("span", {
          class: "a_tree__label a_tree__json",
        }, [
          h("span", {
            class: "a_tree__json_key",
          }, this.renderText(node.label)),
          h("span", {
            class: "a_tree__json_colon",
          }, ":"),
          " ",
          h("span", {
            class: ["a_tree__json_value", `a_tree__json_value_${ ITEM.jsonType }`],
          }, node.children ?
            getJsonValueText(ITEM) :
            this.renderText(getJsonValueText(ITEM))),
        ]);
      }
      return h("span", {
        class: "a_tree__label",
      }, this.renderText(node.label));
    },

    renderNode(node) {
      if (!this.isNodeVisible(node)) {
        return null;
      }
      const IS_EXPANDED = this.isNodeExpanded(node);
      const IS_LOADING = this.loadingKeys.has(node.key);
      const CHECKED = this.isCheckbox ? this.getCheckedState(node) : undefined;
      const IS_SELECTED = this.isSelectable && this.selected === node.key;
      const VISIBLE_CHILDREN = IS_EXPANDED ? (node.children || []).filter(this.isNodeVisible) : [];

      return h("li", {
        key: node.key,
        ref: element => this.setElement({ key: node.key, element }),
        class: ["a_tree__item", {
          a_tree__item_selected: IS_SELECTED,
          a_tree__item_disabled: node.disabled,
          a_tree__item_matched: this.isNodeMatched(node),
        }],
        role: "treeitem",
        // The name is the own row only, not the text of the children
        "aria-labelledby": `${ this.id }_node_${ node.uid }`,
        "aria-level": node.level,
        "aria-setsize": node.setSize,
        "aria-posinset": node.index + 1,
        "aria-expanded": node.isLeaf ? undefined : (IS_EXPANDED ? "true" : "false"),
        "aria-selected": this.isSelectable ? (IS_SELECTED ? "true" : "false") : undefined,
        "aria-checked": CHECKED,
        "aria-disabled": node.disabled ? "true" : undefined,
        "aria-busy": IS_LOADING ? "true" : undefined,
        tabindex: this.tabbableKey === node.key ? 0 : -1,
        onKeydown: $event => this.onKeydown({ $event, node }),
        onFocus: $event => {
          if ($event.target === $event.currentTarget) {
            this.onFocusNode({ node });
          }
        },
      }, [
        h("div", {
          id: `${ this.id }_node_${ node.uid }`,
          class: "a_tree__node",
          style: { "--a_tree_level": node.level - 1 },
          onClick: $event => this.onClickNode({ node, $event }),
        }, [
          node.isLeaf ?
            h("span", { class: "a_tree__toggle a_tree__toggle_empty", "aria-hidden": "true" }) :
            h("span", {
              class: ["a_tree__toggle", {
                a_tree__toggle_expanded: IS_EXPANDED,
              }],
              "aria-hidden": "true",
              onClick: $event => this.onClickToggle({ node, $event }),
            }, [
              IS_LOADING ?
                h("span", { class: "a_spinner a_spinner_small a_tree__spinner" }) :
                h(AIcon, { icon: ChevronRight, class: "a_tree__toggle_icon" }),
            ]),
          this.isCheckbox && h("span", {
            class: ["a_tree__checkbox", `a_tree__checkbox_${ CHECKED }`],
            "aria-hidden": "true",
            onClick: $event => this.onClickCheckbox({ node, $event }),
          }),
          this.$slots.node ?
            this.$slots.node({
              item: node.item,
              key: node.key,
              label: node.label,
              level: node.level,
              isExpanded: IS_EXPANDED,
              isLeaf: node.isLeaf,
              checked: CHECKED,
              isSelected: IS_SELECTED,
              searchModel: this.searchModelLocal,
            }) :
            this.renderLabel(node),
        ]),
        VISIBLE_CHILDREN.length > 0 && h("ul", {
          class: "a_tree__group",
          role: "group",
        }, VISIBLE_CHILDREN.map(child => this.renderNode(child))),
      ]);
    },
  },
  render() {
    const HAS_NODES = this.visibleNodes.length > 0;
    return h("div", {
      class: "a_tree_wrapper",
      style: this.treeStyle,
    }, [
      HAS_NODES ?
        h("ul", {
          id: this.id,
          class: ["a_tree", {
            a_tree_checkbox: this.isCheckbox,
            a_tree_json: this.isJson,
          }],
          role: "tree",
          "aria-label": this.ariaLabelTranslated,
          "aria-labelledby": this.ariaLabelledby,
        }, this.rootNodes.map(node => this.renderNode(node))) :
        h("div", {
          class: "a_tree__empty",
        }, this.$slots.empty ?
          this.$slots.empty() :
          [h(ATranslation, {
            tag: "span",
            text: this.isFiltering ? "_A_TREE_NOTHING_FOUND_" : this.emptyText,
          })]),
      h("span", {
        class: "a_sr_only",
        "aria-live": "polite",
      }, this.statusText),
    ]);
  },
};
