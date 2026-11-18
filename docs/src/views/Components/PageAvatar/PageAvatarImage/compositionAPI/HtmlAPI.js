export default function HtmlAPI() {
  const codeHtml = `<a-avatar
  name="Tennis Club"
  src="./assets/Tennis_ball_purple_background.png"
></a-avatar>
<!-- the image is not found: the initials are shown -->
<a-avatar
  name="Tennis Club"
  src="./assets/not-found.png"
></a-avatar>`;

  return {
    codeHtml,
  };
}
