import type { VNode, ComponentInternalInstance } from "vue";
export interface MessageProps {
  message?: string | VNode;
  duration?: number;
  showClose?: boolean;
  type?: "success" | "info" | "warning" | "error";
  onDestory: () => void;
  offset?: number;
  id: string;
  zIndex: number;
  transitionName?: string;
}

export interface MessageContext {
  id: string;
  vnode: VNode;
  vm: ComponentInternalInstance;
  props: MessageProps;
  close: () => void;
}

export type createMessageProps = Omit<
  MessageProps,
  "onDestory" | "id" | "zIndex"
>;
