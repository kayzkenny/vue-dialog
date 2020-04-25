import Vuex from "vuex";
import Vue from "vue";
import Confirmer from "./modules/confirmer";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    Confirmer,
  },
});
