import * as taskService from '@/api/task.service';

const state = () => ({
    taskSummary: {
        title: 'Tasks Summary',
        datas: [
            { id: 1, title: 'Total Tasks', value: 100 },
            { id: 2, title: 'Completed Tasks', value: 60 },
            { id: 3, title: 'Pending Tasks', value: 30 },
            { id: 4, title: 'Deadline Crossed', value: 10 },
        ]
    },
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
        taskService.getAllTasksAsync().then(
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