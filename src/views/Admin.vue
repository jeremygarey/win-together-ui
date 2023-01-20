<template>
  <div class="bg-gray-900 text-white pt-40">
    <div class="container min-h-[66vh] flex flex-col items-center">
      <div class="text-9xl font-black text-green">Admin</div>
      <div class="text-xl font-semibold mt-2">CMS Management</div>
      <div class="text-gray-800">
        <input
          class="w-full rounded-lg p-2 mt-4"
          type="text"
          placeholder="Email"
          v-model="email"
        />
        <input
          class="w-full rounded-lg p-2 mt-2"
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button @click="signIn" class="mt-8">Sign In</button>
      <transition name="fade">
        <div v-if="showError" class="mt-8 bg-red-800 py-2 px-4 rounded-lg">
          Invalid username and password combination
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// import Cookies from "js-cookie";
import { useUserStore } from "@/stores/user";

// import Cookies from "js-cookie";
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
      password: "",
      showError: false,
    };
  },
  methods: {
    // getCookie(name) {
    //   let cookieValue = null;

    //   if (document.cookie && document.cookie !== "") {
    //     const cookies = document.cookie.split(";");
    //     for (let i = 0; i < cookies.length; i++) {
    //       const cookie = cookies[i].trim();

    //       // Does this cookie string begin with the name we want?
    //       if (cookie.substring(0, name.length + 1) === name + "=") {
    //         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

    //         break;
    //       }
    //     }
    //   }

    //   return cookieValue;
    // },
    async signIn() {
      // console.log(this.getCookie("csrftoken"));
      try {
        const response = await this.$axios.post(
          "sign-in",
          {
            email: this.email,
            password: this.password,
          }
          // {
          //   headers: {
          //     "X-CSRFToken": this.token,
          //   },
          // }
        );
        // console.log(response.status);
        if (response.status === 200) {
          // console.log(response.data);
          this.store.setUser(response.data);
          this.$router.push("/admin/home");
        }
      } catch (error) {
        this.showErrorMessage();
      }
    },
    showErrorMessage() {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 5000);
    },
  },
  async mounted() {
    const csrftoken = await this.$axios.get("set-csrf-token", {
      withCredentials: true,
    });
    // this.token = csrftoken.data;
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