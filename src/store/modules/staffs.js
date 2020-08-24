import * as staffService from '@/api/staff.service';

const state = () => ({
    list: []
});

const mutations = {
    setStaffs(state, data) {
        state.list = data.data;
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