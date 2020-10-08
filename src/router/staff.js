export const staffRouting=[
    {
        path: '/staffs/register',
        name: 'Staff',
        component: () => import('../views/staffs/register.vue'),
        meta: {
            roles: ["admin", "staff"],
            isPublic: false
        }
    },
    {
        path: '/staffs/all',
        name: 'Staff',
        component: () => import('../views/staffs/all.vue'),
        meta: {
            roles: ["admin", "staff"],
            isPublic: false
        }
    }
];