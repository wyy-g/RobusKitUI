export interface BackTopProps {
  target?: string;
  visibilityHeight?: number;
  right?: number;
  bottom?: number;
}

export interface BackTopEmits {
  (e: "click", value: MouseEvent): void;
}
