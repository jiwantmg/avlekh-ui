export const tasksRouting = [
    {
        path: '/tasks',
        name: 'Tasks',
        component: () => import('../views/tasks')
    },
    {
        path: '/tasks/register',
        name: 'Task Register',
        component: () => import('../views/tasks/register')
    },
    {
        path: '/mytasks',
        name: 'MyTasks',
        component: () => import('../views/MyTasks.vue')
    },

];