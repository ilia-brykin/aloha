export default function TargetAPI() {
  const targets = [
    {
      id: "_blank",
      label: "_A_TARGET_BLANK_",
    },
    {
      id: "_self",
      label: "_A_TARGET_SELF_",
    },
    {
      id: "_parent",
      label: "_A_TARGET_PARENT_",
    },
    {
      id: "_top",
      label: "_A_TARGET_TOP_",
    },
  ];

  return {
    targets,
  };
}
