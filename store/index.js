export const state = () => ({
  allPages: []
});

export const mutations = {
  setAllPages(state, list) {
    state.allPages = list;
  }
};
  
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getAllPages');
  },
  async getAllPages({ commit }) {
    let files = await require.context('~/assets/content/pages/', false, /\.json$/);
    let allPages = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    commit('setAllPages', allPages);
  }
};