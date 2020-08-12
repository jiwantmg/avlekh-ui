import * as customerService from '@/api/customer.service';

const state = () => ({
    list: []
});

const mutations = {
    setCustomers(state, customers) {
        state.list = customers;
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