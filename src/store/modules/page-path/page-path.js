const state = {
  data: {
    page_name: "",
  },
};
const getters = {
  getPagePath: (state) => state.data.page_name,
};
const mutations = {
  SET_PAGE_NAME: (state, data) => {
    state.data.page_name = data;
  },
};
const actions = {
  setPageName({ commit }, data) {
    commit("SET_PAGE_NAME", data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
