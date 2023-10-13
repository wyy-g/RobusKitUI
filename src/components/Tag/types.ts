import type { PropType } from "vue";

export type TagType = "primary" | "success" | "warning" | "danger" | "info";
export type TagEffect = "plain" | "dark" | "light";
export type TagSize = "default" | "medium" | "small" | "mini";

export const TagProps = {
  type: {
    type: String as PropType<TagType>,
    default: "primary",
  },
  closable: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<TagSize>,
    default: "default",
  },
  effect: {
    type: String as PropType<TagEffect>,
    default: "light",
  },
};
