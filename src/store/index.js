import Vue from "vue";
import Vuex from "vuex";
import path from "./modules/page-path/page-path";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    path,
  },
});
