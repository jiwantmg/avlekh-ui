import * as staffService from '@/api/staff.service';

const state = () => ({
    list: [],
    hahNext: false,
    hasPrevious: false,
    pageIndex: 0,
    pageSize: 0
});

const mutations = {
    setStaffs(state, res) {
        state.list = res.data;
        state.hahNext = res.hahNext;
        state.hasPrevious = res.hasPrevious;
        state.pageIndex = res.pageIndex;
        state.pageSize = res.pageSize;
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