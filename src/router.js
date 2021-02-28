import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      component: () => import("./pages/Menu"),
    },
    {
      path: "/basket",
      component: () => import("./pages/Basket"),
    },
  ],
  mode: "history",
});
