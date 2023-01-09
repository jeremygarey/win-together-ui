import { createRouter, createWebHistory } from "vue-router";
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";
import Contact from "../views/Contact.vue";
import Gxn from "../views/Gxn.vue";
import Home from "../views/Home.vue";
import TeamMember from "../views/TeamMember.vue";
import WhatWeDo from "../views/WhatWeDo.vue";
import WhoWeAre from "../views/WhoWeAre.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/what-we-do",
      component: WhatWeDo,
    },
    {
      path: "/who-we-are",
      component: WhoWeAre,
    },
    {
      path: "/who-we-are/:id",
      component: TeamMember,
    },
    {
      path: "/gxn",
      component: Gxn,
    },
    {
      path: "/blog",
      component: Blog,
    },
    {
      path: "/blog/:id",
      component: BlogPost,
    },
    {
      path: "/contact",
      component: Contact,
    },
  ],
  // scrollBehavior(to, from, savedPosition) {
  //   return { top: 0 };
  // },
});

export default router;
