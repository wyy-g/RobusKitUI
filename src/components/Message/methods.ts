import { h, render, shallowReactive } from "vue";
import type { createMessageProps, MessageContext } from "./types";
import MessageInstance from "./Message.vue";
import useZIndex from "../../hooks/useZIndex";

let seed = 1;
const instances: MessageContext[] = shallowReactive([]);
export const createMessage = (props: createMessageProps) => {
  const { nextZIndex } = useZIndex();
  const id = `message_${seed++}`;
  const container = document.createElement("div");
  const destory = () => {
    // 删除数组中的实例
    const idx = instances.findIndex((instance) => instance.id === id);
    if (idx === -1) return;
    instances.splice(idx, 1);
    render(null, container);
  };
  // 手动调用删除，其实就是手动的调整组件中的 visible 的值
  // visible 是通过 expose 传出来的
  const manualDestory = () => {
    const instance = instances.find((instance) => instance.id === id);
    if (instance) {
      instance.vm.exposed!.visible.value = false;
    }
  };
  const newProps = {
    ...props,
    id,
    onDestory: destory,
    zIndex: nextZIndex(),
  };
  const vnode = h(MessageInstance, newProps);
  render(vnode, container);
  // 非空断言操作符
  document.body.appendChild(container.firstElementChild!);
  const vm = vnode.component!;
  const instance: MessageContext = {
    id,
    vnode,
    vm,
    props: newProps,
    close: manualDestory,
  };

  instances.push(instance);
  return instance;
};

export const getLastInstance = () => {
  return instances[instances.length - 1];
};

export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  if (idx <= 0) {
    return 0;
  } else {
    const prev = instances[idx - 1];
    return prev.vm.exposed!.bottomOffset.value;
  }
};
