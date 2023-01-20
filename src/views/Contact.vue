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
          <div class="text-center">
            <button class="mt-4" @click="submitForm()">Submit</button>
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
    };
  },
  methods: {
    async submitForm() {
      const response = await this.$axios.post("contact", {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        message: this.message,
      });
    },
  },
};
</script>