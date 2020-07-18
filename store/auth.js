import axios from '~/utils/axios';

export const state = () => ({
    user: null
});

export const mutations = {
    set(state, user) {
        state.user = user;
    },
};

export const actions = {
    async randomUser({ commit }) {
        // Call api to get init data from server
        const { data } = await axios.get('/users');
        const index = Math.floor(Math.random() * 10);

        commit('set', data[index]);
    },
}
