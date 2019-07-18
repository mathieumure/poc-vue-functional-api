import store from "../store";
import { computed } from "vue-function-api";

export const useGetter = (name, cb) =>
  computed(() => {
    const getter = store.getters[name];
    return cb ? cb(getter) : getter;
  });
