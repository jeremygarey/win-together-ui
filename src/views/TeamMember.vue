<template>
  <!-- <div class="h-12"></div>
  <div class="min-h-[90vh] bg-white"> -->
  <!-- <div class="min-h-[40-vh] bg-white pt-64">
      <div class="bg-green text-gray-800 h-80 md:h-52">
        <div class="container">
          <div class="md:grid grid-cols-2 p-4 gap-4 -translate-y-32" v-if="tm">
            <div
              class="
                rounded-lg
                w-full
                min-h-[18rem]
                shadow-xl
                bg-cover
                animate-slidefrombottom
              "
              :style="`background-image: url(${tm.profileImage})`"
            ></div>
            <div class="flex flex-col justify-end">
              <h1
                class="font-black text-4xl animate-slidefromright mt-6 md:mt-0"
              >
                {{ tm.name }}
              </h1>
              <div
                class="
                  font-semibold
                  text-2xl
                  animation-delay-200
                  animate-slidefromright
                  opacity-0
                "
              >
                {{ tm.jobTitle }}
              </div>
              <div
                class="
                  font-light
                  animation-delay-400
                  animate-slidefromright
                  opacity-0
                "
              >
                {{ tm.email }}
              </div>
            </div>
          </div>

          <div class="bg-white px-4 text-gray-800 container" v-if="tm">
            <div v-html="tm.longBio"></div>
          </div>
        </div>
      </div>
    </div> -->

  <!-- <div class="h-screen flex flex-col justify-center">
      <div class="bg-green">
        <div class="container py-4 text-center">
          <img :src="tm.profileImage" class="mx-auto rounded-lg" alt="" />
          <h1 class="font-black text-4xl animate-slidefromright mt-6 md:mt-0">
            {{ tm.name }}
          </h1>
          <div
            class="
              font-semibold
              text-2xl
              animation-delay-200
              animate-slidefromright
              opacity-0
            "
          >
            {{ tm.jobTitle }}
          </div>
          <div
            class="
              font-light
              animation-delay-400
              animate-slidefromright
              opacity-0
            "
          >
            {{ tm.email }}
          </div>
        </div>
      </div>
      <div class="container py-4">
        <div v-html="tm.longBio"></div>
      </div>
    </div>
  </div>
  <div class=""></div> -->

  <div class="min-h-screen pt-28">
    <div
      class="
        bg-gray-800
        text-white
        border-b-4 border-green
        shadow-lg shadow-gray-300
      "
    >
      <div class="sm:grid grid-cols-2 gap-4 container py-8 max-w-screen-md">
        <img
          :src="tm.profileImage"
          class="
            rounded-lg
            mx-auto
            animate-slidefrombottom
            shadow-lg
            w-9/12
            sm:w-full
          "
          alt=""
        />
        <div
          class="
            mt-6
            sm:mt-0
            text-center
            sm:text-left sm:flex
            flex-col
            justify-center
          "
        >
          <h1 class="font-black text-4xl animate-slidefromright md:mt-0">
            {{ tm.name }}
          </h1>
          <div
            class="
              font-semibold
              text-2xl
              animation-delay-200
              animate-slidefromright
              opacity-0
            "
          >
            {{ tm.jobTitle }}
          </div>
          <div
            class="
              font-light
              animation-delay-400
              animate-slidefromright
              opacity-0
            "
          >
            {{ tm.email }}
          </div>
        </div>
      </div>
    </div>
    <div class="container py-12 max-w-screen-md">
      <div class="" v-html="tm.longBio"></div>
    </div>
  </div>
</template>

<script>
import TeamMemberBanner from "@/components/who-we-are/TeamMemberBanner.vue";
import { useCmsStore } from "@/stores/cms";

export default {
  setup() {
    const store = useCmsStore();
    return {
      store,
    };
  },
  components: {
    TeamMemberBanner,
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    tm() {
      return this.store.teamMembers[this.id];
    },
  },
};
</script>