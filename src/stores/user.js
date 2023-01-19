import { defineStore } from "pinia";
import axios from "axios";

var BASE_URL = "http://127.0.0.1:8000/";
if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://win-together-cms-374413.uc.r.appspot.com/";
}

export const useUserStore = defineStore("User", {
  state: () => {
    return { user: {}, isAuthenticated: false };
  },

  actions: {
    setUser(user) {
      console.log(`user in the store --> ${user}`);
      this.user = user;
      this.isAuthenticated = true;
    },
  },
});
