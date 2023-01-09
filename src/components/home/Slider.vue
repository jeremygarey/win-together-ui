<template>
  <div class="min-h-[20vh] bg-white px-4 py-14 text-gray-800">
    <h1 v-if="title" class="text-center text-4xl">{{ title }}</h1>
    <div class="flex justify-around items-center max-w-screen-md mx-auto px-4">
      <button
        class="bg-transparent hover:bg-transparent hover:scale-110"
        @click="prev()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12 text-gray-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div
        class="relative overflow-hidden w-9/12 min-h-[40vh] flex items-center"
      >
        <slider-item
          v-for="(slide, index) in slides"
          :key="`item-${index}`"
          :slide="slide"
          :current-slide="currentSlide"
          :index="index"
          :direction="direction"
        />
      </div>

      <button
        class="bg-transparent hover:bg-transparent hover:scale-110"
        @click="next()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12 text-gray-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
    <div class="flex justify-center">
      <slider-indicators
        :total="slides.length"
        :currentIndex="currentSlide"
        @switch="switchSlide($event)"
      />
    </div>
  </div>
</template>

<script>
import SliderItem from "@/components/home/SliderItem.vue";
import SliderIndicators from "@/components/home/SliderIndicators.vue";
export default {
  components: {
    SliderItem,
    SliderIndicators,
  },
  props: {
    title: String,
  },
  data() {
    return {
      slides: [
        {
          quote: "Mirus is cool!",
          imageSource: "https://picsum.photos/200/200",
          name: "Jeremy Garey",
          description: "Front-end Developer",
        },
        {
          quote: "My boyfriend is so hot <3",
          // quote: "I'm in Israel!",
          imageSource: "https://picsum.photos/id/100/200/200",
          name: "Annabella Eckert",
          description: "Israel explorer",
        },
        {
          quote:
            "Don't mistake activity for achievement. To produce results, tasks must be well organized and properly executed; otherwise, it is no different from children running around on the playground - everybody is doing something, but nothing is being done; lots of activity, no achievement.",
          imageSource: "https://picsum.photos/id/101/200/200",
          name: "John Wooden",
          description: "Coach Wooden's Leadership Game Plan for Success",
        },
      ],
      currentSlide: 0,
      slideInterval: null,
      direction: "right",
    };
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
    prev() {
      const index =
        this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1;
      this.direction = "left";
      this.setCurrentSlide(index);
      this.startSlideTimer();
    },
    next() {
      const index =
        this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
      this.direction = "right";
      this.setCurrentSlide(index);
      this.startSlideTimer();
    },
    switchSlide(index) {
      this.setCurrentSlide(index);
      this.startSlideTimer();
    },
    startSlideTimer() {
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => {
        this.next();
      }, 5000);
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },
  },
  mounted() {
    this.startSlideTimer();
  },
  beforeUnmount() {
    this.stopSlideTimer();
  },
};
</script>
