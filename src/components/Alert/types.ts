export type AlertType = "success" | "warning" | "danger" | "info";

export interface AlertProps {
  context?: string;
  type?: AlertType;
  effect?: "light" | "dark";
  closable?: boolean;
  showIcon?: boolean;
}

export interface AlertEvents {
  (e: "close"): void;
}
