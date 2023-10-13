import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Input from "./Input.vue";

describe("Input", () => {
  it("基本展示", () => {
    // 针对动态class，查看classes是否正确
    // 针对v-if是否渲染正确的标签和内容
    // 针对slots是否渲染对应得slots内容
    const wraaper = mount(Input, {
      props: {
        type: "text",
        size: "small",
        modelValue: "",
      },
      slots: {
        prepend: "prepend",
        prefix: "prefix",
      },
    });
    console.log(wraaper.html());
    // classes
    expect(wraaper.classes()).toContain("vk-input--small");
    expect(wraaper.classes()).toContain("is-prepend");
    // should render input
    expect(wraaper.find("input").exists()).toBeTruthy();
    expect(wraaper.get("input").attributes("type")).toBe("text");
    // slots
    expect(wraaper.find(".vk-input__prepend").exists()).toBeTruthy();
    expect(wraaper.get(".vk-input__prepend").text()).toBe("prepend");
    expect(wraaper.find(".vk-input__prefix").exists()).toBeTruthy();
    expect(wraaper.get(".vk-input__prefix").text()).toBe("prefix");

    const wraaper2 = mount(Input, {
      props: {
        type: "textarea",
        modelValue: "",
      },
    });
    expect(wraaper2.find("textarea").exists()).toBeTruthy();
  });
  it("支持v-model", async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: "test",
        "onUpdate:modelValue": (e: any) => wrapper.setProps({ modelValue: e }),
      },
    });
    // 初始值
    const input = wrapper.get("input");
    expect(input.element.value).toBe("test");
    // 更新值
    // 注意setValue是组合事件会触发input以及change
    await input.setValue("update");
    expect(wrapper.props("modelValue")).toBe("update");
    expect(input.element.value).toBe("update");

    console.log("the events", wrapper.emitted());
    expect(wrapper.emitted()).toHaveProperty("input");
    expect(wrapper.emitted()).toHaveProperty("change");
    const inputEvent = wrapper.emitted("input");
    const changeEvent = wrapper.emitted("change");
    expect(inputEvent![0]).toEqual(["update"]);
    expect(changeEvent![0]).toEqual(["update"]);

    // v-model 的异步更新
    await wrapper.setProps({ modelValue: "prop update" });
    expect(input.element.value).toBe("prop update");
  });
  it("支持点击清空事件", async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: "test",
        clearable: true,
        type: "text",
      },
      global: {
        stubs: ["Icon"],
      },
    });
    // 不出现对应的Icon区域
    expect(wrapper.find(".vk-input__clear").exists()).toBeFalsy();
    const input = wrapper.get("input");
    await input.trigger("focus");
    expect(wrapper.emitted()).toHaveProperty("focus");
    // 出现Icon区域
    expect(wrapper.find(".vk-input__clear").exists()).toBeTruthy();
    // 点击值变为空并且消失
    await wrapper.get(".vk-input__clear").trigger("click");
    expect(input.element.value).toBe("");
    // 不仅仅会触发clear事件，对应的input和change都会被触发
    expect(wrapper.emitted()).toHaveProperty("clear");
    expect(wrapper.emitted()).toHaveProperty("input");
    expect(wrapper.emitted()).toHaveProperty("change");
    const inputEvent = wrapper.emitted("input");
    const changeEvent = wrapper.emitted("change");
    expect(inputEvent![0]).toEqual([""]);
    expect(changeEvent![0]).toEqual([""]);
    // 测试blur事件
    await input.trigger("blur");
    expect(wrapper.emitted()).toHaveProperty("blur");
  });
  it("支持切换密码显示", async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: "",
        showPassword: true,
        type: "text",
      },
      global: {
        stubs: ["Icon"],
      },
    });
    // 不出现对应的icon区域，因为当前值为空
    expect(wrapper.find(".vk-input__password").exists()).toBeFalsy();
    const input = wrapper.get("input");
    expect(input.element.type).toBe("password");
    // 出现icon区域， 并且icon为特点的图标
    await input.setValue("123");
    const eyeIcon = wrapper.find(".vk-input__password");
    expect(eyeIcon.exists()).toBeTruthy();
    expect(eyeIcon.attributes("icon")).toBe("eye-slash");
    // 点击值切换input类型，并且图标的icon会切换
    await eyeIcon.trigger("click");
    expect(input.element.type).toBe("text");
    expect(wrapper.find(".vk-input__password").attributes("icon")).toBe("eye");
  });
});
