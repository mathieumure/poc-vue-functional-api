import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";

Vue.use(VueRouter);

export const routes = [
  { path: "/", component: Home },
  { path: "/pokemon/:id", component: Pokemon, props: true }
];

export const router = new VueRouter({ routes });

export default router;
