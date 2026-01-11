export default function ScssAPI() {
  const codeScss = `$a_spacing_shortcuts: ("margin": "m", "padding": "p") !default;
$a_spacing_directions: ("top": "t", "right": "r", "bottom": "b", "left": "l") !default;
$a_spacing_horizontal: "x" !default;
$a_spacing_vertical: "y" !default;
$a_spacing_values: (
  "1": "0.25rem !important",
  "2": "0.5rem !important",
  "3": "0.75rem !important",
  "4": "1rem !important",
  "5": "1.5rem !important",
  "6": "3rem !important",
  "0": "0 !important",
  "auto": "auto !important",
) !default;`;

  return {
    codeScss,
  };
}
