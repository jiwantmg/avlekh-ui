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
    list:{
        assignedTasks: [],
        completedTasks: [],
        all: []
    }
});

const mutations = {
    setTask(state, data) {
        state.list.all = data.data;
    },
    setMyTasks(state, mytasks) {
        state.list.assignedTasks = mytasks.data.filter(task => !task.status);
        state.list.completedTasks = mytasks.data.filter(task => task.status);
    }
}

const actions = {
    getAllTaskSummaryAsync({ commit }) {        
        taskService.getAllTaskAsync().then(
            res => {
                commit('setTask', res);
            }            
        );
    },
    getMyTasksAsync({commit}) {
        taskService.getMyTasksAsync().then(
            res => {
                console.log(res);
                commit('setMyTasks', res);
            }
        )
    }   
}


export default {
    namespaced: true,
    state,
    actions,
    mutations
}