export default function HtmlAPI() {
  const codeHtml = `<div>
  <span class="a_badge a_badge_primary a_pill_rounded">primary</span>
  <span class="a_badge a_badge_secondary a_pill_rounded a_ml_2">secondary</span>
  <span class="a_badge a_badge_success a_pill_rounded a_ml_2">success</span>
  <span class="a_badge a_badge_info a_pill_rounded a_ml_2">info</span>
  <span class="a_badge a_badge_warning a_pill_rounded a_ml_2">warning</span>
  <span class="a_badge a_badge_danger a_pill_rounded a_ml_2">danger</span>
  <span class="a_badge a_badge_light a_pill_rounded a_ml_2">light</span>
  <span class="a_badge a_badge_dark a_pill_rounded a_ml_2">dark</span>
</div>`;

  return {
    codeHtml,
  };
}
