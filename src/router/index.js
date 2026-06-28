import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import EmployeesPage from "@/components/EmployeesPage.vue";
import AddEmployee from "@/components/AddEmployee.vue";
import EditEmployee from "@/components/EditEmployee.vue";

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
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
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router