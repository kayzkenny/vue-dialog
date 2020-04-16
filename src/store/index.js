import Vuex from "vuex";
import Vue from "vue";
import confirmer from "./confirmer";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    confirmer,
  },
});
