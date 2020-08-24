import * as customerService from '@/api/customer.service';

const state = () => ({
    list: []
});

const mutations = {
    setCustomers(state, data) {
        state.list = data.data;
    }
}

const actions = {
    getAllCustomersAsync({ commit }) {
        customerService.getAllCustomersAsync().then(
            res => {
                commit('setCustomers', res);
            }            
        );
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}