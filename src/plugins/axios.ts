import axios from "axios";
import type { App } from "vue";
import Cookies from "js-cookie";

const csrftoken = Cookies.get("csrftoken");
// console.log(csrftoken);

interface AxiosOptions {
  baseUrl?: string;
  token?: string;
}

export default {
  install: (app: App, options: AxiosOptions) => {
    app.config.globalProperties.$axios = axios.create({
      baseURL: options.baseUrl,
      //   headers: {
      //     "X-CSRFToken": csrftoken,
      //     Cookie: `csrftoken=${csrftoken}`,
      //     Authorization: options.token ? `Bearer ${options.token}` : "",
      //   },
    });
  },
};
