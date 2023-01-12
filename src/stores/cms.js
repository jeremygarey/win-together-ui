import { defineStore } from "pinia";
import axios from "axios";

var BASE_URL = "http://127.0.0.1:8000/";
if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://win-together-cms-374413.uc.r.appspot.com/";
}

export const useCmsStore = defineStore("Cms", {
  state: () => {
    return { teamMembers: [], blogPosts: [] };
  },

  actions: {
    async fill() {
      const tmResponse = await axios.get(`${BASE_URL}team-members`);
      this.teamMembers = tmResponse.data;
      const bpResponse = await axios.get(`${BASE_URL}blog-posts`);
      this.blogPosts = bpResponse.data;
    },
    getTm(id) {
      return this.teamMembers[id];
    },
  },
});
