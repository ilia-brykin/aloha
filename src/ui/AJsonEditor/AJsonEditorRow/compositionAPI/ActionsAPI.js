import {
  computed,
} from "vue";

import {
  writeClipboardText,
} from "../../compositionAPI/OperationsAPI";

import {
  isFunction,
} from "lodash-es";

/**
 * The actions of the menu of a row (WAI-ARIA menu of ADropdown) in groups with headings;
 * the shortcut is in the text, the same actions work with the keyboard in the row.
 */
export default function ActionsAPI(props, {
  API,
  type = computed(() => ({})),
}) {
  const actions = computed(() => {
    const ROW = props.row;
    if (ROW.isMore) {
      return [];
    }
    const TOKENS = ROW.tokens;
    const t = (key, extra) => API.translate(key, extra);
    const button = (text, callback, { isHidden = false, shortcut } = {}) => ({
      type: "button",
      text: shortcut ? `${ t(text) } (${ shortcut })` : t(text),
      callback,
      isHidden,
    });
    const header = text => ({ type: "header", text: t(text) });

    const IS_STRING = ROW.type === "string";
    const CAN_ADD_INSIDE = ROW.isContainer && API.canAddInside(TOKENS);
    const CAN_ADD_SIBLING = API.canAddSibling(TOKENS);

    const EDIT = [
      button("_A_JSON_EDITOR_ACTION_EDIT_VALUE_", () => API.startEdit(ROW.pointer, ROW.type === "null" ? "type" : "value"), {
        isHidden: ROW.isContainer || !API.canEditValue(TOKENS),
        shortcut: "F2",
      }),
      button("_A_JSON_EDITOR_ACTION_INSERT_VARIABLE_", () => API.startEdit(ROW.pointer, "value", { openVariables: true }), {
        isHidden: !IS_STRING || !API.hasVariables.value || !API.canEditValue(TOKENS),
      }),
      button("_A_JSON_EDITOR_ACTION_RENAME_", () => API.startEdit(ROW.pointer, "key"), {
        isHidden: !API.canRename(TOKENS),
        shortcut: "Shift+F2",
      }),
      button("_A_JSON_EDITOR_ACTION_TYPE_", () => API.startEdit(ROW.pointer, "type"), {
        isHidden: !API.canChangeType(TOKENS),
        shortcut: "Alt+F2",
      }),
      button("_A_JSON_EDITOR_ACTION_DUPLICATE_", () => API.duplicate(TOKENS), {
        isHidden: !CAN_ADD_SIBLING,
        shortcut: "Ctrl+D",
      }),
      button("_A_JSON_EDITOR_ACTION_SORT_ASC_", () => API.sortKeys(TOKENS, "asc"), {
        isHidden: ROW.type !== "object" || ROW.childCount < 2 || API.isReadonly(TOKENS),
      }),
      button("_A_JSON_EDITOR_ACTION_SORT_DESC_", () => API.sortKeys(TOKENS, "desc"), {
        isHidden: ROW.type !== "object" || ROW.childCount < 2 || API.isReadonly(TOKENS),
      }),
    ];

    const ADD = [
      button("_A_JSON_EDITOR_ACTION_ADD_INSIDE_", () => API.add(TOKENS, { position: "end" }), {
        isHidden: !CAN_ADD_INSIDE,
        shortcut: "Insert",
      }),
      button("_A_JSON_EDITOR_ACTION_ADD_BEFORE_", () => API.add(TOKENS, { position: "before" }), { isHidden: !CAN_ADD_SIBLING }),
      button("_A_JSON_EDITOR_ACTION_ADD_AFTER_", () => API.add(TOKENS, { position: "after" }), { isHidden: !CAN_ADD_SIBLING }),
    ];

    const MOVE = [
      button("_A_JSON_EDITOR_ACTION_MOVE_UP_", () => API.move(TOKENS, -1), {
        isHidden: !API.canMove(TOKENS) || ROW.posinset <= 1,
        shortcut: "Alt+↑",
      }),
      button("_A_JSON_EDITOR_ACTION_MOVE_DOWN_", () => API.move(TOKENS, 1), {
        isHidden: !API.canMove(TOKENS) || ROW.posinset >= ROW.setsize,
        shortcut: "Alt+↓",
      }),
      button("_A_JSON_EDITOR_ACTION_CUT_", () => API.cutNode(TOKENS), {
        isHidden: !API.canRemove(TOKENS),
        shortcut: "Ctrl+X",
      }),
      button("_A_JSON_EDITOR_ACTION_PASTE_", () => API.paste(TOKENS), {
        isHidden: !API.clipboard.value || (!CAN_ADD_INSIDE && !CAN_ADD_SIBLING),
        shortcut: "Ctrl+V",
      }),
    ];

    const COPY = [
      button("_A_JSON_EDITOR_ACTION_COPY_NODE_", () => API.copyNode(TOKENS), { shortcut: "Ctrl+C" }),
      button("_A_JSON_EDITOR_ACTION_COPY_PATH_", () => {
        writeClipboardText(API.pathText(TOKENS));
        API.announce(t("_A_JSON_EDITOR_ANNOUNCE_COPIED_PATH_", { path: API.pathText(TOKENS) }));
      }),
      button("_A_JSON_EDITOR_ACTION_COPY_KEY_", () => {
        writeClipboardText(`${ ROW.key }`);
        API.announce(t("_A_JSON_EDITOR_ANNOUNCE_COPIED_KEY_", { key: ROW.key }));
      }, { isHidden: !TOKENS.length }),
    ];

    // the actions of the plugins and of the hook getNodeActions: { id, label, when, run }
    const CONTEXT = { value: ROW.value, path: ROW.pointer, tokens: TOKENS, type: type.value.name };
    const OWN = [
      ...API.pluginActions.value,
      ...API.getHooks("getNodeActions").flatMap(hook => hook(CONTEXT) || []),
    ].filter(action => !isFunction(action.when) || action.when(CONTEXT))
      .map(action => button(action.label, () => API.runAction(action, TOKENS), { isHidden: API.isReadonly(TOKENS) }));

    const REMOVE = [
      button("_A_JSON_EDITOR_ACTION_REMOVE_", () => API.remove(TOKENS), {
        isHidden: !API.canRemove(TOKENS),
        shortcut: "Delete",
      }),
    ];

    // the selection: the actions work on all selected rows
    const COUNT = API.selected.value.size;
    const IS_IN_SELECTION = COUNT > 1 && API.isSelected(ROW.pointer);
    const SELECTION = IS_IN_SELECTION
? [
  button("_A_JSON_EDITOR_ACTION_COPY_NODE_", () => API.copyNode(TOKENS), { shortcut: "Ctrl+C" }),
  button("_A_JSON_EDITOR_ACTION_CUT_", () => API.cutNode(TOKENS), { isHidden: API.isReadonlyAll.value, shortcut: "Ctrl+X" }),
  button("_A_JSON_EDITOR_ACTION_MOVE_UP_", () => API.move(TOKENS, -1), { isHidden: API.isReadonlyAll.value, shortcut: "Alt+↑" }),
  button("_A_JSON_EDITOR_ACTION_MOVE_DOWN_", () => API.move(TOKENS, 1), { isHidden: API.isReadonlyAll.value, shortcut: "Alt+↓" }),
  button("_A_JSON_EDITOR_ACTION_REMOVE_", () => API.remove(TOKENS), { isHidden: API.isReadonlyAll.value, shortcut: "Delete" }),
  button("_A_JSON_EDITOR_CLEAR_SELECTION_", () => API.clearSelection(), { shortcut: "Escape" }),
]
: [];

    // a group only with visible actions
    const GROUPS = [
      [t("_A_JSON_EDITOR_GROUP_SELECTION_", { count: COUNT }), SELECTION],
      ["_A_JSON_EDITOR_GROUP_EDIT_", EDIT],
      ["_A_JSON_EDITOR_GROUP_ADD_", ADD],
      ["_A_JSON_EDITOR_GROUP_MOVE_", MOVE],
      ["_A_JSON_EDITOR_GROUP_COPY_", COPY],
      ["_A_JSON_EDITOR_GROUP_MORE_", OWN],
      ["_A_JSON_EDITOR_GROUP_REMOVE_", REMOVE],
    ];
    return GROUPS.flatMap(([title, items]) => {
      const VISIBLE = items.filter(item => !item.isHidden);
      return VISIBLE.length ? [header(title), ...VISIBLE] : [];
    });
  });

  return {
    actions,
  };
}
