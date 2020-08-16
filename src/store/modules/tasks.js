import * as taskService from '@/api/task.service';

export const state = () => ({
    taskSummary: {
        title: 'Tasks Summary',
        datas: [
            { id: 1, title: 'Total Tasks', value: 100 },
            { id: 2, title: 'Completed Tasks', value: 60 },
            { id: 3, title: 'Pending Tasks', value: 30 },
            { id: 4, title: 'Deadline Crossed', value: 10 },
        ]
    },
    list:[]
});

const mutations = {
    setTask(state, task) {
        state.list = task;
    }
}

const actions = {
    getAllTaskAsync({ commit }) {        
        taskService.getAllTaskAsync().then(
            res => {
                commit('setTask', res);
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