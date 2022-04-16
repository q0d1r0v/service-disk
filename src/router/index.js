import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "loginPage",
    component: () => import("../views/login-page/login"),
  },
  {
    path: "/",
    component: () => import("../components/main-app/main"),
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () => import("../views/dashboard-page"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
