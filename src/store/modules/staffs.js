import * as staffService from '@/api/staff.service';

const state = () => ({
    list: []
});

const mutations = {
    setStaffs(state, customers) {
        state.list = customers;
    }
}

const actions = {
    getAllStaffsAsync({ commit }) {        
        staffService.getAllStaffsAsync().then(
            res => {
                commit('setStaffs', res);
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