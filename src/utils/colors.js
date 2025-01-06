/**
 * Mixes two colors based on a specified weight.
 *
 * @param {string} color_1 - The first color to mix, in hexadecimal format (#RRGGBB).
 * @param {string} color_2 - The second color to mix, in hexadecimal format (#RRGGBB).
 * @param {number} [weight=50] - The weight of color_1 in the mixture, between 0 and 100.
 * @returns {string} The resulting mixed color, in hexadecimal format (#RRGGBB).
 */
export function mixColor(color_1, color_2, weight) {
  function d2h(d) { // convert a decimal value to hex
    return d.toString(16);
  }

  function h2d(h) { // convert a hex value to decimal
    return parseInt(h, 16);
  }

  color_1 = color_1.replace(/#/g, "");
  color_2 = color_2.replace(/#/g, "");

  weight = (typeof (weight) !== "undefined") ? weight : 50; // set the weight to 50%, if that argument is omitted

  let color = "#";

  for (let i = 0; i <= 5; i += 2) { // loop through each of the 3 hex pairs—red, green, and blue
    const v1 = h2d(color_1.substr(i, 2)); // extract the current pairs
    const v2 = h2d(color_2.substr(i, 2));

    // combine the current pairs from each source color, according to the specified weight
    let val = d2h(Math.round(v2 + (v1 - v2) * (weight / 100.0)));

    while (val.length < 2) { // prepend a '0' if val results in a single digit
      val = "0" + val;
    }
    color += val; // concatenate val to our new color string
  }
  return color;
}

/**
 * Mixes a color with white based on the given weight.
 *
 * @param {string} color - The color to mix with white, in hexadecimal format.
 * @param {number} weight - The weight of the color to mix with white. Must be between 0 and 1.
 * @return {string} - The resulting color after mixing with white.
 */
export function mixWhite(color, weight) {
  return mixColor("#ffffff", color, weight);
}

/**
 * Mixes a given color with black using the provided weight.
 *
 * @param {string} color - The color to mix.
 * @param {number} weight - The weight of the black color to mix, ranging from 0 to 1.
 *
 * @return {string} - The resulting mixed color.
 */
export function mixBlack(color, weight) {
  return mixColor("#000000", color, weight);
}

/**
 * Converts a color value to its corresponding hexadecimal representation.
 *
 * @param {number} color - The color value to convert.
 * @return {string} - The hexadecimal representation of the color.
 */
export function colorToHex(color) {
  const HEX = color.toString(16);
  return HEX.length === 1 ? `0${ HEX }` : HEX;
}

/**
 * Converts RGB values to a hexadecimal color code.
 *
 * @param {number} r - The red component of the color (0-255).
 * @param {number} g - The green component of the color (0-255).
 * @param {number} b - The blue component of the color (0-255).
 * @return {string} The hexadecimal color code representation of the RGB color.
 */
export function rgbToHex(r, g, b) {
  return `#${ colorToHex(r) }${ colorToHex(g) }${ colorToHex(b) }`;
}

/**
 * Converts a hexadecimal color code to RGB format.
 *
 * @param {string} hex - The hexadecimal color code to convert.
 * @param {boolean} [formatString=false] - Determines whether the result should be formatted as a string.
 * @returns {null|{r: number, g: number, b: number}|string} - The RGB representation of the color, or null if the input is invalid.
 */
export function hexToRgb(hex, formatString = false) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    return null;
  }
  const RED = parseInt(result[1], 16);
  const GREEN = parseInt(result[2], 16);
  const BLUE = parseInt(result[3], 16);
  if (formatString) {
    return `${ RED }, ${ GREEN }, ${ BLUE }`;
  }
  return {
    r: RED,
    g: GREEN,
    b: BLUE,
  };
}
