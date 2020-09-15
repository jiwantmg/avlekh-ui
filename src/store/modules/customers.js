import * as customerService from '@/api/customer.service';

const state = () => ({
    list: [],
    hahNext: false,
    hasPrevious: false,
    pageIndex: 0,
    pageSize: 0
});

const mutations = {
    setCustomers(state, res) {
        state.list = res.data;       
        state.hahNext = res.hahNext;
        state.hasPrevious = res.hasPrevious;
        state.pageIndex = res.pageIndex;
        state.pageSize = res.pageSize;
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