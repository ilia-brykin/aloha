export default function TableAPI() {
  const badges = [
    {
      className: "a_badge a_badge_primary a_pill_rounded",
      labelKey: "_TXT_PRIMARY_",
    },
    {
      className: "a_badge a_badge_secondary a_pill_rounded",
      labelKey: "_TXT_SECONDARY_",
    },
    {
      className: "a_badge a_badge_tertiary a_pill_rounded",
      labelKey: "_TXT_TERTIARY_",
    },
    {
      className: "a_badge a_badge_success a_pill_rounded",
      labelKey: "_TXT_SUCCESS_",
    },
    {
      className: "a_badge a_badge_info a_pill_rounded",
      labelKey: "_TXT_INFO_",
    },
    {
      className: "a_badge a_badge_warning a_pill_rounded",
      labelKey: "_TXT_WARNING_",
    },
    {
      className: "a_badge a_badge_danger a_pill_rounded",
      labelKey: "_TXT_DANGER_",
    },
    {
      className: "a_badge a_badge_light a_pill_rounded",
      labelKey: "_TXT_LIGHT_",
    },
    {
      className: "a_badge a_badge_dark a_pill_rounded",
      labelKey: "_TXT_DARK_",
    },
  ];

  return {
    badges,
  };
}
