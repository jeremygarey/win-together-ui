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
    async updateTm(tm, id) {
      try {
        const response = await axios.post(`${BASE_URL}team-members/update`, {
          tm: tm,
          id: id,
        });
        return response.status === 200;
      } catch (error) {
        return false;
      }
    },
    async createTm(tm) {
      try {
        const response = await axios.post(`${BASE_URL}team-members/create`, {
          tm,
        });
        this.teamMembers[response.data.id] = response.data.tm;
        return response.status === 200;
      } catch (error) {
        return false;
      }
    },
    // async archiveTm(id) {
    //   const response = await axios.post(
    //     `${BASE_URL}team-members/${id}/archive`,
    //     {}
    //   );
    //   if (response.status === 200) {
    //     delete this.teamMembers[id];
    //   }
    // },
    async updateBp(bp, id) {
      try {
        const response = await axios.post(`${BASE_URL}blog-posts/update`, {
          bp: bp,
          id: id,
        });
        return response.status === 200;
      } catch (error) {
        return false;
      }
    },
    async createBp(bp) {
      try {
        const response = await axios.post(`${BASE_URL}blog-posts/create`, {
          bp,
        });
        this.blogPosts[response.data.id] = response.data.bp;
        return response.status === 200;
      } catch (error) {
        return false;
      }
    },
    async resetTm(id) {
      try {
        const response = await axios.get(`${BASE_URL}team-members/${id}`);
        this.teamMembers[id] = response.data;
        return response.status === 200;
      } catch (error) {
        return false;
      }
    },
    async resetBp(id) {
      try {
        const response = await axios.get(`${BASE_URL}blog-posts/${id}`);
        this.blogPosts[id] = response.data;
        return response.status === 200;
      } catch (error) {
        return false;
      }
    },
  },
});
