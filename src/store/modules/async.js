const initialState = {
  active: false,
  title: "",
  body: "",
};

const state = Object.assign({}, initialState);

const mutations = {
  ACTIVATE: (state, payload) => {
    Object.assign(state, payload);
  },
  // eslint-disable-next-line no-unused-vars
  DEACTIVATE: (state) => {
    state = Object.assign(state, initialState);
  },
};

const actions = {
  async ask({ commit }, { title, body }) {
    await commit("ACTIVATE", {
      active: true,
      title,
      body,
    });
    return true;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
