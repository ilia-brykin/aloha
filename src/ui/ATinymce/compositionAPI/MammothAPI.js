const mammoth = require("mammoth/mammoth.browser");

export default function MammothAPI() {
  // Ihr HTML-String
  const htmlString = "<p>Aloha</p>";

// Konvertierung des HTML-Strings in ein Blob
  const blob = new Blob([htmlString], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  console.log("blob", blob);

  mammoth.convertToHtml({ arrayBuffer: arrayBuffer }).then(function(result) {
    const html = result.value; // The generated HTML
    const messages = result.messages; // Any messages, such as warnings during conversion
    console.log("html", html);
    console.log("messages", messages);
  }).catch(function(error) {
    console.error(error);
  });

// Erstellung eines FileReader, um den Blob als ArrayBuffer zu lesen
  const reader = new FileReader();

// Wenn das Lesen abgeschlossen ist, wird der ArrayBuffer im Result-Attribut des FileReader verfügbar sein
  reader.onloadend = function(event) {
    const arrayBuffer = reader.result;
    // Verwendung des ArrayBuffer
    console.log(arrayBuffer);
  };

  reader.readAsArrayBuffer(blob);
}
