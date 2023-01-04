<script setup lang="ts">
import TheNav from "./components/TheNav.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <header>
    <TheNav />
  </header>

  <RouterView class="mx-auto text-gray-800" />

  <TheFooter />
</template>

<!-- <script lang="ts">
export default {
  mounted() {
    const items = document.querySelectorAll(".animate-on-scroll");
    console.log(items);

    const observer = new IntersectionObserver((items) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          item.target.classList.add("animate-slidefromleft");
        } else {
          item.target.classList.remove("animate-slidefromleft");
        }
      });
    });
    if (items) {
      items.forEach((item) => {
        item.classList.add("opacity-0");
        observer.observe(item);
      });
    }

    // const items_height = items.offsetHeight;
    // const add_class_on_scroll = () =>
    //   items.classList.add("animate-slidefromleft");
    // const remove_class_on_scroll = () =>
    //   items.classList.remove("animate-slidefromleft");

    // window.addEventListener("scroll", function () {
    //   scrollpos = window.scrollY;
    //   console.log("hellos");

    //   if (scrollpos >= items_height) {
    //     add_class_on_scroll();
    //   } else {
    //     remove_class_on_scroll();
    //   }

    //   console.log(scrollpos);
    // });
  },
};
</script> -->