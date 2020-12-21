import * as taskService from '@/api/task.service';

const state = () => ({    
    list: [],
    hahNext: false,
    hasPrevious: false,
    pageIndex: 0,
    pageSize: 0
});

const mutations = {
    setTasks(state, res) {
        state.list = res.data;
        state.hahNext = res.hahNext;
        state.hasPrevious = res.hasPrevious;
        state.pageIndex = res.pageIndex;
        state.pageSize = res.pageSize;
    }
}

const actions = {
    getAllTasksAsync({ commit }) {
        taskService.getAllMyTasksAsync().then(
            res => {                
                commit('setTasks', res);
            }            
        );
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}