// import {
//   parseHtml,
// } from "./CKEditor";
// import MSWordNormalizer from "./CKEditor/normalizers/mswordnormalizer";

export default function(editor) {
  const openDialog = () => editor.windowManager.open({
    title: "Example plugin",
    body: {
      type: "panel",
      items: [
        {
          type: "input",
          name: "title",
          label: "Title"
        }
      ]
    },
    buttons: [
      {
        type: "cancel",
        text: "Close"
      },
      {
        type: "submit",
        text: "Save",
        buttonType: "primary"
      }
    ],
    onSubmit: api => {
      const data = api.getData();
      /* Insert content when the window form is submitted */
      editor.insertContent("Title: " + data.title);
      api.close();
    }
  });
  // Event-Handler für Einfügevorgänge
  editor.on("paste", function(e) {
    const clipboardData = (e.clipboardData || window.clipboardData);
    e.stopPropagation();
    e.preventDefault();
    // console.log("text/plain", clipboardData.getData("text/plain"));
    // console.log("application/rtf", clipboardData.getData("application/rtf"));
    // console.log("text/html", clipboardData.getData("text/html"));

    const PAGE_HTML = clipboardData.getData("text/html");
    const HTML_FRAGMENT = extractTextBetweenComments(PAGE_HTML);

    console.log("PAGE_HTML", PAGE_HTML);
    // console.log("HTML", HTML_FRAGMENT);
    editor.insertContent(HTML_FRAGMENT);

    // Hier können Sie Ihre Logik einfügen, was passieren soll,
    // wenn Inhalte eingefügt werden. Zum Beispiel:
    // - Überprüfen oder Bereinigen des eingefügten Inhalts
    // - Anzeigen eines Dialogs
    // - Oder andere benutzerdefinierte Aktionen
    // const cleanedText = `blabla ${ paste }`;
    // editor.insertContent(cleanedText);
  });

  /* Add a button that opens a window */
  editor.ui.registry.addButton("example", {
    text: "My button",
    onAction: () => {
      /* Open window */
      openDialog();
    }
  });
  /* Adds a menu item, which can then be included in any menu via the menu/menubar configuration */
  editor.ui.registry.addMenuItem("example", {
    text: "Example plugin",
    onAction: () => {
      /* Open window */
      openDialog();
    }
  });
  /* Return the metadata for the help plugin */
  return {
    getMetadata: () => ({
      name: "My power paste",
      url: "http://exampleplugindocsurl.com"
    })
  };
}

function extractTextBetweenComments(htmlString) {
  const startKommentar = "<!--StartFragment-->";
  const endKommentar = "<!--EndFragment-->";

  const startIndex = htmlString.indexOf(startKommentar);
  const endIndex = htmlString.indexOf(endKommentar);

  if (startIndex !== -1 && endIndex !== -1) {
    return htmlString.substring(startIndex + startKommentar.length, endIndex).trim();
  }
  return htmlString;
}
