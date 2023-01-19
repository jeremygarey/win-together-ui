import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import axios from "./plugins/axios";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(axios, {
  baseUrl: "http://127.0.0.1:8000/",
});
app.use(createPinia());
app.use(router);

app.mount("#app");
