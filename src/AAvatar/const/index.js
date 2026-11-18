export const AVATAR_COLORS = ["primary", "secondary", "tertiary", "success", "info", "warning", "danger"];

// Red (danger) is not chosen automatically, it looks like an error
export const AVATAR_COLORS_AUTO = AVATAR_COLORS.filter(color => color !== "danger");

export const AVATAR_COLORS_ALL = ["auto", "gray", ...AVATAR_COLORS];

export const AVATAR_SHAPES = ["circle", "square"];

export const AVATAR_SIZES = ["small", "medium", "large", "xlarge"];

export const AVATAR_STATUSES = ["online", "away", "busy", "offline"];

export const AVATAR_GROUP_KEY = Symbol("AAvatarGroup");
