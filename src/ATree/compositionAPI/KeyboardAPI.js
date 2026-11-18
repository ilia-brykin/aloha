import {
  toRef,
} from "vue";

import {
  toLower,
} from "lodash-es";

/**
 * Keyboard of the WAI-ARIA tree pattern.
 */
export default function KeyboardAPI(props, {
  checkNode,
  focusNode,
  isNodeExpanded,
  openNode,
  closeNode,
  rootNodes,
  selectNode,
  visibleNodes,
}) {
  const isCheckbox = toRef(props, "isCheckbox");

  const focusByOffset = ({ node, offset }) => {
    const NODES = visibleNodes.value;
    const INDEX = NODES.findIndex(item => item.key === node.key);
    const TARGET = NODES[INDEX + offset];
    if (TARGET) {
      focusNode({ key: TARGET.key });
    }
  };

  const focusByFirstChar = ({ node, char }) => {
    const NODES = visibleNodes.value;
    const INDEX = NODES.findIndex(item => item.key === node.key);
    const ORDERED = [...NODES.slice(INDEX + 1), ...NODES.slice(0, INDEX + 1)];
    const TARGET = ORDERED.find(item => toLower(String(item.label)).startsWith(char));
    if (TARGET) {
      focusNode({ key: TARGET.key });
    }
  };

  const onKeydown = async({ $event, node }) => {
    // The events of the nested nodes bubble; only the focused node handles them
    if ($event.target !== $event.currentTarget) {
      return;
    }
    const KEY = $event.key;
    let isHandled = true;
    switch (KEY) {
      case "ArrowDown":
        focusByOffset({ node, offset: 1 });
        break;
      case "ArrowUp":
        focusByOffset({ node, offset: -1 });
        break;
      case "ArrowRight":
        if (node.isLeaf) {
          break;
        }
        if (isNodeExpanded(node)) {
          if (node.children?.length) {
            focusNode({ key: node.children[0].key });
          }
        } else {
          await openNode({ node, $event });
        }
        break;
      case "ArrowLeft":
        if (!node.isLeaf && isNodeExpanded(node)) {
          closeNode({ node, $event });
        } else if (node.parent) {
          focusNode({ key: node.parent.key });
        }
        break;
      case "Home":
        if (visibleNodes.value.length) {
          focusNode({ key: visibleNodes.value[0].key });
        }
        break;
      case "End":
        if (visibleNodes.value.length) {
          focusNode({ key: visibleNodes.value[visibleNodes.value.length - 1].key });
        }
        break;
      case "Enter":
        selectNode({ node, $event });
        break;
      case " ":
        if (isCheckbox.value) {
          checkNode({ node, $event });
        } else {
          selectNode({ node, $event });
        }
        break;
      case "*": {
        const SIBLINGS = node.parent ? node.parent.children : rootNodes.value;
        await Promise.all(SIBLINGS.filter(sibling => !sibling.isLeaf).map(sibling => openNode({ node: sibling, $event })));
        break;
      }
      default:
        if (KEY.length === 1 && !$event.ctrlKey && !$event.metaKey && !$event.altKey && /\S/.test(KEY)) {
          focusByFirstChar({ node, char: toLower(KEY) });
        } else {
          isHandled = false;
        }
    }
    if (isHandled) {
      $event.preventDefault();
      $event.stopPropagation();
    }
  };

  return {
    onKeydown,
  };
}
