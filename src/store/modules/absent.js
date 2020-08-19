import * as dashboardService from '@/api/dashboard.service';

export const state = () => ({
    summary: undefined
});

export const mutations = {
    setAbsentSummary(state, data) {
        state.summary = data;
    }
};

export const actions = {
    getAbsentStaffSummaryAsync({ commit }) {        
        dashboardService.getAbsentStaffSummaryAsync().then(
            res => {
                console.log("returned data",res);
                commit('setAbsentSummary', res);
            }
        )
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}