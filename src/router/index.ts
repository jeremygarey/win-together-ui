import { createRouter, createWebHistory } from "vue-router";
import Admin from "../views/Admin.vue";
import AdminHome from "../views/AdminHome.vue";
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";
import Contact from "../views/Contact.vue";
import Gxn from "../views/Gxn.vue";
import Home from "../views/Home.vue";
import TeamMember from "../views/TeamMember.vue";
import WhatWeDo from "../views/WhatWeDo.vue";
import WhoWeAre from "../views/WhoWeAre.vue";
import PageNotFound from "../views/PageNotFound.vue";

import { useUserStore } from "@/stores/user";

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
      path: "/team-member/:id",
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
    {
      path: "/admin",
      component: Admin,
    },
    {
      path: "/admin/home",
      component: AdminHome,
    },
    { path: "/:pathMatch(.*)*", name: "not-found", component: PageNotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      window.scrollTo(0, 0);
    }
  },
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const adminPages = ["/admin/home"];
  const authRequired = adminPages.includes(to.path);
  const userStore = useUserStore();

  if (authRequired && !userStore.isAuthenticated) {
    return "/admin";
  }
});

export default router;
