export default function HtmlAPI() {
  const codeHtml = `<a-avatar
  name="Assistant"
  initials="AI"
  color="tertiary"
></a-avatar>
<a-avatar
  alt="Home"
  icon="House"
></a-avatar>
<a-avatar
  name="Favorites"
  color="warning"
>
  <a-icon icon="StarFill"></a-icon>
</a-avatar>`;

  return {
    codeHtml,
  };
}
