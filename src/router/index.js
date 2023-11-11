import { createRouter, createWebHistory } from "vue-router";
import useUserStore from "@/stores/user";

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    name: "about",
    path: "/about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    name: "manage",
    path: "/manage-music",
    // alias: "/manage",
    component: () => import("@/views/ManageView.vue"),
    // beforeEnter: (to, form, next) => {
    //   console.log("Manage Route Guard");
    //   next();
    // },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/manage",
    redirect: { name: "manage" },
  },
  {
    name: "song",
    path: "/song/:id",
    component: () => import("@/views/SongView.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next();
    return;
  }

  const store = useUserStore();

  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
