import {
  forEach,
} from "lodash-es";

export default function(editor) {
  // Event-Handler für Einfügevorgänge
  editor.on("paste", function(e) {
    const clipboardData = (e.clipboardData || window.clipboardData);
    e.stopPropagation();
    e.preventDefault();

    const PAGE_HTML = clipboardData.getData("text/html") || clipboardData.getData("text/plain");
    const HTML_FRAGMENT = extractTextBetween({
      html: PAGE_HTML,
      start: "<!--StartFragment-->",
      end: "<!--EndFragment-->",
    });

    if (isMsWord({ html: PAGE_HTML })) {
      editor.insertContent(parseWord({ html: HTML_FRAGMENT }));
    } else {
      const cleanedHtml = HTML_FRAGMENT.replace(/\sdata-[a-z0-9-]+="[^"]*"/gi, "").replace(/\saria-[a-z0-9-]+="[^"]*"/gi, "");

      editor.insertContent(cleanedHtml);
    }
  });
  /* Return the metadata for the help plugin */
  return {
    getMetadata: () => ({
      name: "My power paste",
      url: "https://ilia-brykin.github.io/aloha/#/"
    })
  };
}

function extractTextBetween({ html, start, end }) {
  const startIndex = html.indexOf(start);
  const endIndex = html.indexOf(end);

  if (startIndex !== -1 && endIndex !== -1) {
    return html.substring(startIndex + start.length, endIndex).trim();
  }
  return html;
}

function isMsWord({ html }) {
  const HTML_TAG = extractTextBetween({
    html,
    start: "<html",
    end: ">",
  });

  return HTML_TAG.indexOf(":office:word") !== -1;
}

function parseWord({ html }) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const allChildren = doc.body.querySelectorAll(":scope > *");

  const rootElement = document.createElement("div");
  let currentList = null;
  let lastLevel = 0;
  let lastIndent = 0;
  const listStack = [];

  forEach(allChildren, element => {
    const isTagP = element.tagName === "P";
    if (!isTagP) {
      rootElement.appendChild(element);
      lastLevel = 0;
      lastIndent = 0;
      currentList = null;
      return;
    }

    let htmlContent = element.innerHTML.trim();
    const IS_NORMAL_PARAGRAPH = isNormalParagraph({ element, htmlContent });
    htmlContent = htmlContent
      .replace(/<u>/g, "<span style=\"text-decoration: underline;\">")
      .replace(/<\/u>/g, "</span>")
      .replace(/<!--\[if !supportLists]-->.*?<!--\[endif]-->/gs, "")
      .replace(/&nbsp;/g, " ")
      .replace(/^[\s·o§1-9]+[.)]?/g, "");

    if (isTagP && IS_NORMAL_PARAGRAPH) {
      const newParagraph = document.createElement("p");
      newParagraph.innerHTML = htmlContent;
      rootElement.appendChild(newParagraph);
      lastLevel = 0;
      lastIndent = 0;
      currentList = null;
      return;
    }

    const MARGIN_LEFT = parseInt(element.style.marginLeft) || 0;
    const LIST_LEVEL = getCurrentLevelForList(element);
    const { type, style } = getListTypeAndStyleFromSpanContent(element);

    if (!currentList || LIST_LEVEL > lastLevel || MARGIN_LEFT > lastIndent) {
      const newList = document.createElement(type);
      if (style) {
        newList.style.listStyleType = style;
      }

      if (currentList) {
        currentList.appendChild(newList);
      } else {
        rootElement.appendChild(newList);
      }
      currentList = newList;
      listStack.push({ element: newList, level: LIST_LEVEL, marginLeft: MARGIN_LEFT });
    } else if (LIST_LEVEL < lastLevel) {
      while (listStack.length > 1 && LIST_LEVEL < listStack[listStack.length - 1].level) {
        listStack.pop();
        currentList = listStack[listStack.length - 1].element;
      }
    } else if (MARGIN_LEFT < lastIndent && listStack.length > 1) {
      while (listStack.length > 1 && MARGIN_LEFT < listStack[listStack.length - 1].marginLeft) {
        listStack.pop();
        currentList = listStack[listStack.length - 1].element;
      }
    }

    const li = document.createElement("li");
    li.innerHTML = htmlContent;
    currentList.appendChild(li);

    lastLevel = LIST_LEVEL;
    lastIndent = MARGIN_LEFT;
  });

  return rootElement.innerHTML;
}

function getListTypeAndStyleFromSpanContent(p) {
  const spans = p.querySelectorAll("span");
  let spanContent = "";
  forEach(spans, span => {
    const styleAttr = span.getAttribute("style");
    if (styleAttr && styleAttr.includes("mso-list:Ignore")) {
      spanContent = span.textContent || "";
      return false;
    }
  });

  spanContent = spanContent.trim();
  if (!spanContent) {
    return { type: "ul", style: "" };
  }
  // Check for ordered list with Arabic numerals or numbers within parentheses
  if (/^\d+[.)]/.test(spanContent) || /^\(\d+\)/.test(spanContent)) {
    return { type: "ol", style: "" }; // Default style for <ol>
  }
  // Check for ordered list with uppercase Roman numerals
  if (/^[IVXLCDM]+\./.test(spanContent)) {
    return { type: "ol", style: "upper-roman" };
  }
  // Check for ordered list with lowercase Roman numerals
  if (/^[ivxlcdm]+\./.test(spanContent)) {
    return { type: "ol", style: "lower-roman" };
  }
  // Check for ordered list with uppercase letters
  if (/^[A-Z]+[.)]/.test(spanContent)) {
    return { type: "ol", style: "upper-alpha" };
  }
  // Check for ordered list with lowercase letters
  if (/^[a-z]+[.)]/.test(spanContent)) {
    return { type: "ol", style: "lower-alpha" };
  }
  // Check for unordered list with various symbols
  if (/^[·o§]/.test(spanContent)) {
    // Determine list style based on the symbol
    let style;
    switch (spanContent.trim()[0]) {
    case "·": style = "disc"; break;
    case "o": style = "circle"; break;
    case "§": style = "square"; break;
    default: style = "";
    }
    return { type: "ul", style: style };
  }

  return { type: "ul", style: "" };
}

function getCurrentLevelForList(p) {
  const styleAttr = p.getAttribute("style");
  let level = 1;
  if (styleAttr) {
    const levelMatch = styleAttr.match(/mso-list:l\d+ level(\d+)/);
    if (levelMatch) {
      level = parseInt(levelMatch[1], 10);
    }
  }

  return level;
}

function isNormalParagraph({ element, htmlContent }) {
  return element.className.includes("MsoNormal") ||
    (!element.className.includes("MsoListParagraph") &&
    !/mso-list:/.test(htmlContent));
}
