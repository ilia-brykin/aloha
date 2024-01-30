export default function(editor, url) {
  console.log("url", url);
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
    const paste = (e.clipboardData || window.clipboardData).getData("text");
    console.log("paste", paste);

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
