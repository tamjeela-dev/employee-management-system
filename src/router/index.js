import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import LoginPage from "@/components/views/LoginPage.vue";
import EmployeesPage from "@/components/EmployeesPage.vue";
import AddEmployee from "@/components/AddEmployee.vue";
import EditEmployee from "@/components/EditEmployee.vue";
import NotFound from "@/components/views/NotFound.vue";

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/users',
        name: 'EmployeesPage',
        component: EmployeesPage
    },
    {
        path: '/add-employee',
        name: 'AddEmployee',
        component: AddEmployee
    },
    {
        path: '/edit-employee/:id',
        name: 'EditEmployee',
        component: EditEmployee
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if (to.path === '/login' && token) {
        next('/')
    }
    else if (
        to.path !== '/login'
        &&
        !token) {
        next('/login')
    }

    else {
        next()
    }
})

export default router