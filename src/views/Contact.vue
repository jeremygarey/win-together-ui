<template>
  <div
    class="bg-cover bg-center"
    style="background-image: url('./assets/hero-images/table-meeting-2.jpg')"
  >
    <div class="bg-gradient-to-b from-black/20 to-black/20">
      <div
        class="
          bg-gradient-to-b
          from-black/30
          to-transparent
          min-h-screen
          flex
          items-center
        "
      >
        <title-section
          class="w-full"
          title="contact"
          subtitle="We'd love to connect with you! Let us know what's on your mind. "
        >
          <div class="italic">
            Note: We're seeking pre-launch feedback on the Lean Government
            Basics curriculum. Please let us know if you are interested in
            testing the modules at no charge in exchange for sharing your
            feedback with us.
          </div>
          <div class="flex gap-4">
            <div class="grow">
              <input
                class="
                  mt-4
                  rounded-lg
                  w-full
                  py-2
                  px-3
                  text-gray-800
                  focus:outline-none focus:shadow-outline
                "
                id="name"
                type="text"
                placeholder="First name"
                v-model="firstName"
              />
            </div>
            <div class="grow">
              <input
                class="
                  mt-4
                  rounded-lg
                  w-full
                  py-2
                  px-3
                  text-gray-800
                  focus:outline-none focus:shadow-outline
                "
                id="name"
                type="text"
                placeholder="Last name"
                v-model="lastName"
              />
            </div>
          </div>
          <div class="">
            <input
              class="
                mt-4
                rounded-lg
                w-full
                py-2
                px-3
                text-gray-800
                focus:outline-none focus:shadow-outline
              "
              id="email"
              type="email"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <textarea
            class="
              mt-4
              rounded-lg
              w-full
              py-2
              px-3
              text-gray-800
              focus:outline-none focus:shadow-outline
            "
            id="message"
            maxLength="5000"
            placeholder="Message"
            v-model="message"
          ></textarea>
          <div class="mt-2">
            <input type="checkbox" id="checkbox" v-model="subscribed" />
            <label for="checkbox" class="ml-2"
              >Sign up for the Win Together newsletter and future updates</label
            >
          </div>
          <div class="flex">
            <button
              class="mt-4"
              :class="
                formFilledOut
                  ? 'cursor-pointer'
                  : 'bg-gray-600 cursor-default hover:bg-gray-600 text-gray-300'
              "
              @click="
                formFilledOut
                  ? submitForm()
                  : showMessage(true, 'Please fill out all fields.')
              "
            >
              Submit
            </button>
            <transition name="fade">
              <div
                v-if="displaySuccess"
                class="p-2 ml-8 bg-darkgreen rounded mt-4"
              >
                {{ displayMessage }}
              </div>
            </transition>
            <transition name="fade">
              <div v-if="displayError" class="bg-red-800 p-2 rounded ml-8 mt-4">
                {{ displayMessage }}
              </div>
            </transition>
          </div>
        </title-section>
      </div>
    </div>
  </div>
</template>

<script>
import TitleSection from "@/components/general/TitleSection.vue";
export default {
  components: {
    TitleSection,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      displaySuccess: false,
      displayError: false,
      displayMessage: "",
      subscribed: true,
    };
  },
  computed: {
    isValidEmail() {
      // thank you ChatGPT
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    },

    formFilledOut() {
      return (
        this.firstName && this.lastName && this.isValidEmail && this.message
      );
    },
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.post("contact", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          message: this.message,
          subscribed: this.subscribed,
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
      this.showMessage(false, "Success! We'll be in touch");
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.message = "";
      this.subscribed = false;
    },

    showMessage(error, message) {
      this.displayMessage = message;
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