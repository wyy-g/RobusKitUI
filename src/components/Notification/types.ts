import type { VNode, ComponentInternalInstance } from "vue";

export interface NotificationProps {
  title: string;
  message: string | VNode;
  type?: "success" | "info" | "warning" | "danger";
  duration?: number;
  showClose?: boolean;
  offset?: number;
  id?: string;
  destory?: () => {};
}

// export type createNotifyProps = Omit<NotificationProps, "destory">;

export interface NotifaContext {
  id: string;
  vnode: VNode;
  props: NotificationProps;
  vm: ComponentInternalInstance;
  close: () => void;
}
