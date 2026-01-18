export default function TableAPI() {
  const rows = [
    {
      name: "sr-only",
      className: "a_sr_only",
      descriptionKey: "_A_SCREENREADER_SR_ONLY_DESCRIPTION_",
    },
    {
      name: "sr-only-focusable",
      className: "a_sr_only_focusable",
      descriptionKey: "_A_SCREENREADER_SR_ONLY_FOCUSABLE_DESCRIPTION_",
    },
  ];

  return {
    rows,
  };
}
