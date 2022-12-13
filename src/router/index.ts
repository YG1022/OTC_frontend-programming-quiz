import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      redirect: { name: "orderList" },
    },
    {
      path: "/orders",
      name: "orderList",
      component: () => import("@/views/order-list/index.vue"),
    },
    {
      path: "/create",
      name: "orderCreate",
      component: () => import("@/views/order-create/index.vue"),
    },
  ],
});

export default router;
