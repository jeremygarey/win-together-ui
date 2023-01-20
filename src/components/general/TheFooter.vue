<template>
  <footer>
    <div class="bg-gray-800 text-gray-400 px-4 py-8 sm:p-10">
      <div class="container">
        <div class="md:grid grid-cols-4 gap-14">
          <div class="col-span-2">
            <img src="@/assets/logos/logo-wide-light.svg" alt="" />
            <p class="mt-2">Sign up for our newsletter and future updates</p>
            <div class="flex mt-2 w-full">
              <input
                v-model="email"
                type="email"
                class="rounded-l-lg text-gray-800 px-3 outline-none w-8/12"
                placeholder="youremail@gmail.com"
              />
              <button
                class="
                  text-white
                  rounded-r-lg rounded-l-none
                  hover:bg-gray-600
                  transition
                  w-4/12
                "
                :class="
                  isValidEmail
                    ? 'cursor-pointer bg-green hover:bg-darkgreen'
                    : 'cursor-default bg-gray-600 hover:bg-gray-600 text-gray-300'
                "
                @click="
                  isValidEmail
                    ? subscribe()
                    : showMessage(true, 'Please enter a valid email')
                "
              >
                Subscribe
              </button>
            </div>
            <transition name="fade">
              <div
                v-if="displaySuccess"
                class="p-2 bg-darkgreen rounded mt-4 text-center text-white"
              >
                {{ message }}
              </div>
            </transition>
            <transition name="fade">
              <div
                v-if="displayError"
                class="bg-red-800 p-2 rounded mt-4 text-center text-white"
              >
                {{ message }}
              </div>
            </transition>
          </div>
          <div>
            <h1 class="mt-4 md:mt-0 text-lg text-white">COMPANY</h1>
            <ul>
              <li class="hover:text-white transition">
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li class="hover:text-white transition">
                <RouterLink to="/what-we-do">What We Do</RouterLink>
              </li>
              <li class="hover:text-white transition">
                <RouterLink to="/who-we-are">Who We Are</RouterLink>
              </li>
              <li class="hover:text-white transition">
                <RouterLink to="/gxn">Government Excellence Network</RouterLink>
              </li>
              <li class="hover:text-white transition">
                <RouterLink to="/blog">Blog</RouterLink>
              </li>
              <li class="hover:text-white transition">
                <RouterLink to="/contact">Contact</RouterLink>
              </li>
            </ul>
          </div>
          <div>
            <h1 class="mt-4 md:mt-0 text-lg text-white">SOCIAL</h1>
            <ul>
              <li>
                <a class="hover:text-white transition" href="/">Twitter</a>
              </li>
              <li>
                <a class="hover:text-white transition" href="/">LinkedIn</a>
              </li>
            </ul>
            <div class="mt-4">
              <RouterLink class="" to="/admin/home">
                <button
                  v-if="store.isAuthenticated"
                  class="
                    text-white text-lg
                    mt-10
                    md:mt-0
                    bg-gray-700
                    rounded
                    hover:bg-gray-600
                  "
                >
                  Admin
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-900 text-gray-400 p-6">
      <div class="container">
        Copyright 2023 Win Together®. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script>
import { useUserStore } from "@/stores/user";

export default {
  setup() {
    const store = useUserStore();
    return {
      store,
    };
  },
  data() {
    return {
      email: "",
      message: "",
      displaySuccess: false,
      displayError: false,
    };
  },

  computed: {
    isValidEmail() {
      // thank you ChatGPT
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    },
  },

  methods: {
    async subscribe() {
      try {
        const response = await this.$axios.post("email-subscribe", {
          email: this.email,
        });
        if (response.status === 200) {
          this.handleSuccess();
        } else {
          this.showMessage(true, "There was an error. Please try again later");
        }
      } catch (error) {
        this.showMessage(true, "There was an error. Please try again later");
      }
    },

    handleSuccess() {
      this.showMessage(false, "Successfully subscribed!");
      this.email = "";
    },

    showMessage(error, message) {
      this.message = message;
      if (error) {
        this.displayError = true;
        setTimeout(() => {
          this.displayError = false;
        }, 8000);
      } else {
        this.displaySuccess = true;
        setTimeout(() => {
          this.displaySuccess = false;
        }, 5000);
      }
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>