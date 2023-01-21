import { defineStore } from "pinia";
import axios from "axios";

var BASE_URL = "http://127.0.0.1:8000/";
if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://win-together-cms-374413.uc.r.appspot.com/";
}

export const useAdminStore = defineStore("Admin", {
  state: () => {
    return { pageVisits: {}, subscribers: {}, contactFormSubmissions: {} };
  },

  actions: {
    async fill() {
      const contactFormSubmissions = await axios.get(
        `${BASE_URL}contact-form-submissions`
      );
      this.contactFormSubmissions = contactFormSubmissions.data;
    },
  },
});
