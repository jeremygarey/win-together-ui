import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import axios from "./plugins/axios";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

var BASE_URL = "http://127.0.0.1:8000/";
if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://win-together-cms-374413.uc.r.appspot.com/";
}

app.use(axios, {
  baseUrl: BASE_URL,
});
app.use(createPinia());
app.use(router);

app.mount("#app");
