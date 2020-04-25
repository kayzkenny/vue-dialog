import Vuex from "vuex";
import Vue from "vue";
import Confirmer from "./modules/confirmer";
import AsyncConfirmer from "./modules/async";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    Confirmer,
    AsyncConfirmer,
  },
});
