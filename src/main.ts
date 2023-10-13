import "./styles/index.css";
// 添加SVG图标库（fontawesome） 引入核心库
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { createApp } from "vue";
import App from "./App.vue";

library.add(fas);

const app = createApp(App);
app.mount("#app");
