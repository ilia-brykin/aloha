export default function ExposesAPI() {
  const dataExposes = [
    {
      name: "activeId",
      description: "_A_CAROUSEL_EXPOSES_ACTIVE_ID_DESCRIPTION_",
      type: "Number / String",
    },
    {
      name: "activeIndex",
      description: "_A_CAROUSEL_EXPOSES_ACTIVE_INDEX_DESCRIPTION_",
      type: "Number",
    },
    {
      name: "isPlaying",
      description: "_A_CAROUSEL_EXPOSES_IS_PLAYING_DESCRIPTION_",
      type: "Boolean",
    },
    {
      name: "next",
      description: "_A_CAROUSEL_EXPOSES_NEXT_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "play",
      description: "_A_CAROUSEL_EXPOSES_PLAY_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "previous",
      description: "_A_CAROUSEL_EXPOSES_PREVIOUS_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "setActiveItem",
      description: "_A_CAROUSEL_EXPOSES_SET_ACTIVE_ITEM_DESCRIPTION_",
      type: "Function",
    },
    {
      name: "stop",
      description: "_A_CAROUSEL_EXPOSES_STOP_DESCRIPTION_",
      type: "Function",
    },
  ];

  return {
    dataExposes,
  };
}
