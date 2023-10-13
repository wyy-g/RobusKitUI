export interface PopconfirmProps {
  title: string;
  confirmText?: string;
  cancelText?: string;
  icon?: string;
  iconColor?: string;
  hideIcon?: boolean;
}

export interface PopconfirmEmits {
  (e: "cancel"): void;
  (e: "confirm"): void;
}
