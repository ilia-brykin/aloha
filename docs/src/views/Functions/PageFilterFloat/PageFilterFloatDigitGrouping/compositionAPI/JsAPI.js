import filterFloat from "../../../../../../../src/filters/filterFloat";

export default function JsAPI() {
  const codeJs = `filterFloat(1000222.55, { digitGrouping: false });
// ${ filterFloat(1000222.55, { digitGrouping: false }) }

filterFloat(1000222.55, { digitGrouping: true });
// ${ filterFloat(1000222.55, { digitGrouping: true }) }`;

  return {
    codeJs,
  };
}
