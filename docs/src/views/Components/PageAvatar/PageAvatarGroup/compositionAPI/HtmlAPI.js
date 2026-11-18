export default function HtmlAPI() {
  const codeHtml = `<a-avatar-group
  label="Team"
  :max="4"
>
  <a-avatar
    v-for="name in names"
    :key="name"
    :name="name"
  ></a-avatar>
</a-avatar-group>

<a-avatar-group
  label="Team"
  size="small"
>
  <a-avatar name="Anna Becker"></a-avatar>
  <a-avatar name="Ben Ott"></a-avatar>
  <a-avatar name="Clara Lenz"></a-avatar>
  <a-avatar
    name="Tennis Club"
    src="./assets/Tennis_ball_purple_background.png"
  ></a-avatar>
</a-avatar-group>`;

  return {
    codeHtml,
  };
}
