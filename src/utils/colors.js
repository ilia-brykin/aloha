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

export function mixWhite(color, weight) {
  return mixColor("#ffffff", color, weight);
}

export function mixBlack(color, weight) {
  return mixColor("#000000", color, weight);
}
