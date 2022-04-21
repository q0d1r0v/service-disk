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
      {
        path: "/incoming",
        name: "incoming",
        component: () => import("../views/pages/appeals/incoming-page"),
      },
      {
        path: "/outgoing",
        name: "outgoing",
        component: () => import("../views/pages/appeals/outgoing-page"),
      },
      {
        path: "/groups",
        name: "groups",
        component: () => import("../views/pages/settings/groups-page"),
      },
      {
        path: "/departments",
        name: "departments",
        component: () => import("../views/pages/settings/departments-page"),
      },
      {
        path: "/references-type",
        name: "referencesType",
        component: () => import("../views/pages/settings/reference-type-page"),
      },
      {
        path: "/evaluation-criteria",
        name: "evaluationCriteria",
        component: () =>
          import("../views/pages/settings/evaluation-criteria-page"),
      },
      {
        path: "/all-references",
        name: "allReferences",
        component: () => import("../views/pages/admin/all-references-page"),
      },
      {
        path: "/rejected",
        name: "rejected-page",
        component: () => import("../views/pages/admin/rejected-page"),
      },
      {
        path: "/canceled",
        name: "canceled",
        component: () => import("../views/pages/admin/canceled-page"),
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
