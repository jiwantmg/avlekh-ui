export const tasksRouting = [
    {
        path: '/tasks',
        name: 'Tasks',
        component: () => import('../views/tasks'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tasks/register',
        name: 'Task Register',
        component: () => import('../views/tasks/register'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/mytasks',
        name: 'MyTasks',
        component: () => import('../views/MyTasks.vue'),
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/tasks/alltask',
        name: 'TaskList',
        component: () => import('../views/tasks/alltask.vue'),
        meta: {
            requiresAuth: true
        }
    },

];