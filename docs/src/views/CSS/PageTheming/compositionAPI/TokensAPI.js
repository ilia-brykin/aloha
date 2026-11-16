import {
  onMounted,
  ref,
} from "vue";

import {
  THEME_COLORS,
} from "./GeneratorAPI";

const GROUPS = [
  {
    id: "base_colors",
    header: "_A_THEMING_TOKENS_BASE_COLORS_",
    tokens: [
      ...THEME_COLORS.flatMap(name => [
        `--a_${ name }_h`,
        `--a_${ name }_s`,
        `--a_${ name }_l`,
        `--a_${ name }_contrast_threshold`,
      ]),
      "--a_gray_h",
      "--a_gray_s",
    ],
  },
  {
    id: "derived_colors",
    header: "_A_THEMING_TOKENS_DERIVED_COLORS_",
    tokens: [
      "--a_color_primary",
      "--a_color_primary_hover",
      "--a_color_primary_active",
      "--a_color_primary_contrast",
      "--a_color_primary_50",
      "--a_color_primary_bg_subtle",
      "--a_color_primary_border_subtle",
      "--a_color_primary_text_emphasis",
      "--a_color_primary_text",
    ],
  },
  {
    id: "semantic_colors",
    header: "_A_THEMING_TOKENS_SEMANTIC_COLORS_",
    tokens: [
      "--a_color_surface",
      "--a_color_surface_subtle",
      "--a_color_surface_raised",
      "--a_color_body_bg",
      "--a_color_text",
      "--a_color_text_muted",
      "--a_color_label",
      "--a_color_emphasis_color",
      "--a_color_link",
      "--a_color_link_hover",
      "--a_color_focus",
      "--a_color_white",
      "--a_color_black",
      "--a_color_gray_50",
      "--a_color_gray_100",
      "--a_color_gray_200",
      "--a_color_gray_300",
      "--a_color_gray_400",
      "--a_color_gray_500",
      "--a_color_gray_600",
      "--a_color_gray_700",
      "--a_color_gray_800",
      "--a_color_gray_900",
    ],
  },
  {
    id: "border",
    header: "_A_THEMING_TOKENS_BORDER_",
    tokens: [
      "--a_border_width",
      "--a_border_style",
      "--a_border_color",
      "--a_border_color_strong",
      "--a_border_color_translucent",
      "--a_radius",
      "--a_border_radius",
      "--a_border_radius_small",
      "--a_border_radius_large",
      "--a_border_radius_xl",
      "--a_border_radius_2xl",
      "--a_border_radius_pill",
    ],
  },
  {
    id: "focus",
    header: "_A_THEMING_TOKENS_FOCUS_",
    tokens: [
      "--a_focus_width_inside",
      "--a_focus_width_outside",
      "--a_focus_color_inside",
      "--a_focus_color_outside",
      "--a_focus_ring",
      "--a_focus_ring_inset",
    ],
  },
  {
    id: "spacing",
    header: "_A_THEMING_TOKENS_SPACING_",
    tokens: [
      "--a_density",
      "--a_space_xs",
      "--a_space_sm",
      "--a_space_md",
      "--a_space_lg",
      "--a_space_xl",
      "--a_control_height_sm",
      "--a_control_height",
      "--a_control_height_lg",
      "--a_control_padding_x",
      "--a_control_padding_y",
    ],
  },
  {
    id: "typography",
    header: "_A_THEMING_TOKENS_TYPOGRAPHY_",
    tokens: [
      "--a_font_sans_serif",
      "--a_font_monospace",
      "--a_body_font_family",
      "--a_body_font_size",
      "--a_body_font_weight",
      "--a_body_line_height",
      "--a_font_weight_normal",
      "--a_font_weight_medium",
      "--a_font_weight_semibold",
      "--a_font_weight_bold",
      "--a_font_size_sm",
      "--a_font_size_lg",
    ],
  },
  {
    id: "elevation",
    header: "_A_THEMING_TOKENS_ELEVATION_",
    tokens: [
      "--a_shadow_color",
      "--a_shadow_sm",
      "--a_shadow_md",
      "--a_shadow_lg",
    ],
  },
  {
    id: "motion",
    header: "_A_THEMING_TOKENS_MOTION_",
    tokens: [
      "--a_duration_fast",
      "--a_duration_normal",
      "--a_duration_slow",
      "--a_easing",
      "--a_transition_colors",
    ],
  },
  {
    id: "z_index",
    header: "_A_THEMING_TOKENS_Z_INDEX_",
    tokens: [
      "--a_z_index_backdrop",
      "--a_z_index_modal",
      "--a_z_index_backdrop_confirm",
      "--a_z_index_confirm",
      "--a_z_index_dropdown",
      "--a_z_index_tooltip",
    ],
  },
];

export default function TokensAPI() {
  const tokenGroups = ref(GROUPS.map(group => ({
    ...group,
    rows: group.tokens.map(name => ({
      name,
      value: "",
    })),
  })));

  const readValues = () => {
    const style = getComputedStyle(document.documentElement);
    tokenGroups.value.forEach(group => {
      group.rows.forEach(row => {
        row.value = style.getPropertyValue(row.name).trim().replace(/\s+/g, " ");
      });
    });
  };

  onMounted(readValues);

  return {
    tokenGroups,
  };
}
