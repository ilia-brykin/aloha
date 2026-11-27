import {
  computed,
  h,
  inject,
  nextTick,
  onMounted,
  ref,
} from "vue";

import AJsonEditorRow from "../AJsonEditorRow/AJsonEditorRow";

import {
  getRowId,
} from "../utils/ids";

/**
 * WAI-ARIA treegrid: rows with aria-level / aria-setsize / aria-posinset / aria-expanded, one tab stop (roving tabindex),
 * the keys of the APG treegrid, virtual rows for big documents (aria-rowcount / aria-rowindex), drag and drop.
 */
export default {
  name: "AJsonEditorTree",
  props: {
    labelId: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup() {
    const API = inject("aJsonEditor");
    const scrollRef = ref(undefined);
    const scrollTop = ref(0);
    const viewportHeight = ref(600);
    const OVERSCAN = 10;

    const rows = API.rows;
    const isVirtual = computed(() => rows.value.length > API.props.virtualThreshold);

    const indexByPointer = computed(() => new Map(rows.value.map((row, index) => [row.pointer, index])));

    const range = computed(() => {
      if (!isVirtual.value) {
        return { start: 0, end: rows.value.length };
      }
      const HEIGHT = API.props.rowHeight;
      const START = Math.max(0, Math.floor(scrollTop.value / HEIGHT) - OVERSCAN);
      const END = Math.min(rows.value.length, START + Math.ceil(viewportHeight.value / HEIGHT) + OVERSCAN * 2);
      return { start: START, end: END };
    });

    // the active row must be in the rendered rows, else the tree has no tab stop
    const activeIndex = computed(() => indexByPointer.value.get(API.activePointer.value) ?? 0);

    const focusRow = pointer => {
      const INDEX = indexByPointer.value.get(pointer);
      if (INDEX === undefined) {
        return;
      }
      const SCROLL = scrollRef.value;
      if (isVirtual.value && SCROLL) {
        const TOP = INDEX * API.props.rowHeight;
        if (TOP < SCROLL.scrollTop || TOP + API.props.rowHeight > SCROLL.scrollTop + viewportHeight.value) {
          SCROLL.scrollTop = Math.max(0, TOP - viewportHeight.value / 2);
          scrollTop.value = SCROLL.scrollTop;
        }
      }
      nextTick(() => {
        const ELEMENT = globalThis.document.getElementById(getRowId(API.htmlIdLocal.value, pointer));
        ELEMENT?.focus({ preventScroll: isVirtual.value });
        if (!isVirtual.value) {
          ELEMENT?.scrollIntoView?.({ block: "nearest" });
        }
      });
    };
    API.registerTreeFocus(focusRow);

    onMounted(() => {
      viewportHeight.value = scrollRef.value?.clientHeight || 600;
    });

    const onScroll = $event => {
      scrollTop.value = $event.target.scrollTop;
    };

    const moveTo = index => {
      const ROW = rows.value[Math.max(0, Math.min(index, rows.value.length - 1))];
      if (ROW) {
        API.setActive(ROW.pointer, { focus: true });
      }
    };

    const openActions = pointer => {
      nextTick(() => {
        globalThis.document.getElementById(getRowId(API.htmlIdLocal.value, pointer))
          ?.querySelector(".a_json_editor__actions_button")?.click();
      });
    };

    // Insert: into a container, else after the node
    const addNode = row => {
      if (row.isContainer && API.canAddInside(row.tokens)) {
        API.add(row.tokens, { position: "end" });
      } else if (API.canAddSibling(row.tokens)) {
        API.add(row.tokens, { position: "after" });
      }
    };

    // the keys of a row (the fields of the editing handle their own keys and stop them)
    const onKeydown = $event => {
      const ROW = rows.value[activeIndex.value];
      if (!ROW || $event.target.getAttribute("role") !== "row") {
        return;
      }
      const INDEX = activeIndex.value;
      const MOD = $event.ctrlKey || $event.metaKey;
      const KEY = $event.key;
      const TOKENS = ROW.tokens;
      const run = fn => {
        $event.preventDefault();
        $event.stopPropagation();
        fn();
      };

      if (ROW.isMore) {
        if (KEY === "Enter" || KEY === " ") {
          run(() => API.showMore(ROW.parentPointer));
          return;
        }
      }
      // Shift+arrows: the selection grows from the anchor
      if ($event.shiftKey && !$event.altKey && (KEY === "ArrowUp" || KEY === "ArrowDown")) {
        run(() => {
          const NEXT = rows.value[Math.max(0, Math.min(INDEX + (KEY === "ArrowUp" ? -1 : 1), rows.value.length - 1))];
          if (NEXT && !NEXT.isMore) {
            if (API.selectionAnchor.value === null) {
              API.selectionAnchor.value = ROW.pointer;
            }
            API.setActive(NEXT.pointer, { focus: true });
            API.selectRange(NEXT.pointer);
          }
        });
        return;
      }
      if (KEY === " " && !MOD) {
        run(() => API.toggleSelected(ROW.pointer));
        return;
      }
      if (MOD && KEY.toLowerCase() === "a") {
        run(() => API.selectAll());
        return;
      }
      if ($event.altKey && (KEY === "ArrowUp" || KEY === "ArrowDown")) {
        run(() => API.move(TOKENS, KEY === "ArrowUp" ? -1 : 1));
        return;
      }
      const ACTIONS = {
        ArrowDown: () => moveTo(INDEX + 1),
        ArrowUp: () => moveTo(INDEX - 1),
        Home: () => moveTo(0),
        End: () => moveTo(rows.value.length - 1),
        PageDown: () => moveTo(INDEX + 10),
        PageUp: () => moveTo(INDEX - 10),
        ArrowRight: () => {
          if (ROW.isContainer && !ROW.isExpanded) {
            API.toggleNode(ROW.pointer, { expandOnly: true });
          } else if (ROW.isContainer && ROW.childCount) {
            moveTo(INDEX + 1);
          }
        },
        ArrowLeft: () => {
          if (ROW.isContainer && ROW.isExpanded && ROW.pointer !== "") {
            API.toggleNode(ROW.pointer, { collapseOnly: true });
          } else if (ROW.parentPointer !== null) {
            API.setActive(ROW.parentPointer, { focus: true });
          }
        },
        // APG: expand all siblings
        "*": () => {
          rows.value.filter(item => item.parentPointer === ROW.parentPointer && item.isContainer && !item.isExpanded)
            .forEach(item => API.toggleNode(item.pointer, { expandOnly: true }));
        },
        Enter: () => {
          if (ROW.isContainer) {
            API.toggleNode(ROW.pointer);
          } else if (API.canEditValue(TOKENS)) {
            API.startEdit(ROW.pointer, ROW.type === "null" ? "type" : "value");
          }
        },
        F2: () => {
          if ($event.shiftKey && API.canRename(TOKENS)) {
            API.startEdit(ROW.pointer, "key");
          } else if ($event.altKey && API.canChangeType(TOKENS)) {
            API.startEdit(ROW.pointer, "type");
          } else if (!$event.shiftKey && !$event.altKey && !ROW.isContainer && API.canEditValue(TOKENS)) {
            API.startEdit(ROW.pointer, ROW.type === "null" ? "type" : "value");
          }
        },
        Insert: () => addNode(ROW),
        Delete: () => API.remove(TOKENS),
        ContextMenu: () => openActions(ROW.pointer),
      };
      if (MOD && KEY === "Enter") {
        run(() => addNode(ROW));
        return;
      }
      if ($event.shiftKey && KEY === "F10") {
        run(() => openActions(ROW.pointer));
        return;
      }
      if (MOD && !$event.shiftKey) {
        const MOD_ACTIONS = {
          c: () => API.copyNode(TOKENS),
          x: () => API.cutNode(TOKENS),
          v: () => API.paste(TOKENS),
          d: () => API.duplicate(TOKENS),
        };
        if (MOD_ACTIONS[KEY.toLowerCase()]) {
          run(MOD_ACTIONS[KEY.toLowerCase()]);
        }
        return;
      }
      if (ACTIONS[KEY]) {
        run(ACTIONS[KEY]);
      }
    };

    // ---------- drag and drop (the keyboard has Alt+arrows and cut / paste) ----------
    const dragPointer = ref(null);
    const dropPointer = ref(null);
    const onDragStart = (row, $event) => {
      dragPointer.value = row.pointer;
      $event.dataTransfer?.setData?.("text/plain", row.pointer);
      if ($event.dataTransfer) {
        $event.dataTransfer.effectAllowed = "move";
      }
    };
    const onDragOver = (row, $event) => {
      if (dragPointer.value === null || row.pointer === dragPointer.value || row.isMore || !row.tokens.length) {
        return;
      }
      $event.preventDefault();
      dropPointer.value = row.pointer;
    };
    const onDrop = (row, $event) => {
      $event.preventDefault();
      if (dragPointer.value !== null) {
        API.moveBefore(API.tokensOf(dragPointer.value), row.tokens);
      }
      dragPointer.value = null;
      dropPointer.value = null;
    };
    const onDragEnd = () => {
      dragPointer.value = null;
      dropPointer.value = null;
    };

    return {
      API,
      activeIndex,
      dragPointer,
      dropPointer,
      isVirtual,
      onDragEnd,
      onDragOver,
      onDragStart,
      onDrop,
      onKeydown,
      onScroll,
      range,
      rows,
      scrollRef,
    };
  },
  render() {
    const PROPS = this.API.props;
    const ROWS = this.rows;
    const { start: START, end: END } = this.range;
    const RENDERED = ROWS.slice(START, END);
    // the active row is always rendered (tab stop), also outside the window
    const ACTIVE_ROW = ROWS[this.activeIndex];
    const HAS_ACTIVE = this.activeIndex >= START && this.activeIndex < END;
    const ROW_HEIGHT = PROPS.rowHeight;

    const renderRow = (row, index) => h(AJsonEditorRow, {
      key: row.pointer,
      row,
      rowIndex: index + 1,
      isDragged: this.dragPointer === row.pointer,
      isDropTarget: this.dropPointer === row.pointer,
      onDragStart: this.onDragStart,
      onDragOver: this.onDragOver,
      onDrop: this.onDrop,
      onDragEnd: this.onDragEnd,
    });

    if (this.API.document.value === undefined) {
      return h("div", {
        class: "a_json_editor__empty",
      }, this.API.slots.empty ? this.API.slots.empty() : this.API.translate("_A_JSON_EDITOR_EMPTY_"));
    }

    return h("div", {
      ref: "scrollRef",
      class: ["a_json_editor__scroll", {
        a_json_editor__scroll_guides: PROPS.showGuides,
      }],
      style: {
        height: PROPS.height,
        maxHeight: PROPS.height ? undefined : PROPS.maxHeight,
      },
      onScroll: this.onScroll,
    }, [
      h("div", {
        id: `${ this.API.htmlIdLocal.value }_tree`,
        class: ["a_json_editor__tree", {
          a_json_editor__tree_types: PROPS.showTypes,
        }],
        role: "treegrid",
        "aria-labelledby": this.labelId,
        "aria-describedby": `${ this.API.htmlIdLocal.value }_keyboard_hint`,
        "aria-readonly": this.API.isReadonlyAll.value ? "true" : undefined,
        "aria-multiselectable": PROPS.selectable ? "true" : undefined,
        "aria-rowcount": this.isVirtual ? ROWS.length : undefined,
        onKeydown: this.onKeydown,
      }, [
        this.isVirtual && h("div", { "aria-hidden": "true", style: { height: `${ START * ROW_HEIGHT }px` } }),
        !HAS_ACTIVE && ACTIVE_ROW && this.activeIndex < START && renderRow(ACTIVE_ROW, this.activeIndex),
        ...RENDERED.map((row, index) => renderRow(row, START + index)),
        !HAS_ACTIVE && ACTIVE_ROW && this.activeIndex >= END && renderRow(ACTIVE_ROW, this.activeIndex),
        this.isVirtual && h("div", { "aria-hidden": "true", style: { height: `${ (ROWS.length - END) * ROW_HEIGHT }px` } }),
      ]),
    ]);
  },
};
