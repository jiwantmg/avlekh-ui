export const state = () => ({
    taskSummary: {
        title: 'Tasks Summary',
        datas: [
            { id: 1, title: 'Total Tasks', value: 100 },
            { id: 2, title: 'Completed Tasks', value: 60 },
            { id: 3, title: 'Pending Tasks', value: 30 },
            { id: 4, title: 'Deadline Crossed', value: 10 },
        ]
    }
});

export default {
    state
}