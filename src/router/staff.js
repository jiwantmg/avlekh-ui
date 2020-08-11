export const staffRouting=[
    {
        path: '/staffs/register',
        name: 'Staff',
        component: () => import('../views/staffs/register.vue')
    },
    {
        path: '/staffs/all',
        name: 'Staff',
        component: () => import('../views/staffs/all.vue')
    }
];