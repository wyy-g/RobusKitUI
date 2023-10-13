import { defineConfig } from "vitepress";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath, URL } from "node:url";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RobustKit UI",
  description: "一个 Vue 3 组件库",
  vite: {
    plugins: [vueJsx()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "组件", link: "/components/button" },
    ],

    sidebar: [
      {
        text: "开发指南",
        items: [
          {
            text: "快速上手",
            link: "/install",
          },
        ],
      },
      {
        text: "Basic",
        items: [{ text: "Button 按钮", link: "/components/button" }],
      },
      {
        text: "导航",
        items: [{ text: "Dropdown 下拉菜单", link: "/components/dropdown" }],
      },
      {
        text: "反馈",
        items: [
          { text: "Alert 警告提示", link: "/components/alert" },
          { text: "Message 消息提示", link: "/components/message" },
          { text: "Notification 通知", link: "/components/notification" },
        ],
      },
      {
        text: "数据",
        items: [{ text: "Tag 标签", link: "/components/tag" }],
      },
      {
        text: "表单",
        items: [
          { text: "Input 输入框", link: "/components/input" },
          { text: "Switch 开关", link: "/components/switch" },
          { text: "Select 选择器", link: "/components/select" },
          { text: "Form 表单", link: "/components/form" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "Tooltip 文字提示", link: "/components/tooltip" },
          { text: "Popconfirm 气泡确认框", link: "/components/popconfirm" },
          { text: "Collapse 折叠面板", link: "/components/collapse" },
          { text: "BackTop 返回顶部", link: "/components/backtop" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
