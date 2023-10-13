import { h, render, shallowReactive } from "vue";
import type { NotificationProps, NotifaContext } from "./types";
import Notification from "./Notification.vue";

let seed = 0;
const instances: NotifaContext[] = shallowReactive([]);
export const createNotify = (props: NotificationProps) => {
  const id = `notifa_${seed++}`;
  const destory = () => {
    const idx = instances.findIndex((instance) => instance.id === id);
    if (idx >= 0) {
      instances.splice(idx, 1);
    }
    render(null, container);
  };

  const newProps = {
    ...props,
    id,
    destory,
  };
  const container = document.createElement("div");
  const vnode = h(Notification, newProps);
  render(vnode, container);

  const vm = vnode.component!;

  const instance: NotifaContext = {
    id,
    vnode,
    props,
    vm,
    close: destory,
  };

  document.body.appendChild(container.firstElementChild!);

  instances.push(instance);
  return instance;
};

export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  if (idx <= 0) {
    return 0;
  } else {
    return instances[idx - 1].vm.exposed!.bottomOffset.value;
  }
};
