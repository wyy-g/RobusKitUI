import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Icon from "../Icon/Icon.vue";

describe("Button.vue", () => {
  test("basic button", () => {
    const wraaper = mount(Button, {
      props: {
        type: "primary",
      },
      slots: {
        default: "button",
      },
    });
    console.log(wraaper.html());
    expect(wraaper.classes()).toContain("vk-button--primary");
    expect(wraaper.get("button").text()).toBe("button");
  });
  test("disabled", () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
      slots: {
        default: "disabled",
      },
    });
    expect(wrapper.attributes("disabled")).toBeDefined();
  });
  test("icon", () => {
    const wrapper = mount(Button, {
      props: {
        icon: "arrow-up",
      },
      slots: {
        default: "icon",
      },
      global: {
        stubs: ["FontAwesomeIcon"],
      },
    });
    const iconElement = wrapper.findComponent(FontAwesomeIcon);
    expect(iconElement.exists()).toBe(true);
    expect(iconElement.attributes("icon")).toBe("arrow-up");
  });
  test("loading", () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
      slots: {
        default: "loading",
      },
      global: {
        stubs: ["Icon"],
      },
    });
    console.log(wrapper.html());
    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.exists()).toBe(true);
    expect(iconElement.attributes("icon")).toBe("spinner");
    expect(wrapper.attributes("disabled")).toBeDefined();
  });
});
