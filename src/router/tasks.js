export const tasksRouting = [
    {
        path: '/tasks',
        name: 'Tasks',
        component: () => import('../views/tasks'),
        meta: {
            roles: ["admin", "staff"],
            isPublic: false
        }
    },
    {
        path: '/tasks/register',
        name: 'Task Register',
        component: () => import('../views/tasks/register'),
        meta: {
            roles: ["admin", "staff"],
            isPublic: false
        }
    },
    {
        path: '/mytasks',
        name: 'MyTasks',
        component: () => import('../views/MyTasks.vue'),
        meta: {
            roles: ["admin", "staff"],
            isPublic: false
        }
    },

];