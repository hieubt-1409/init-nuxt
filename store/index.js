import axios from '~/utils/axios';

export const actions = {
  async nuxtServerInit({ commit }) {
      // Call api to get init data from server
      const { data } = await axios.get("/users");
      const index = Math.floor(Math.random() * 10);

      commit('auth/set', data[index]);
  },
};

