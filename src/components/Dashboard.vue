<template>
    <section>
        <div class="mb-4">
            <NavBar />
        </div>
        <div class="container">
            <div class="row g-4">
                <div class="col-sm-12 col-md-6">
                    <!-- <router-link> -->
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h4 v-if="users">{{ users.length }}</h4>
                            <h5>Employees</h5>
                        </div>
                    </div>
                    <!-- </router-link> -->
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h4>{{ totalDepartments }}</h4>
                            <h5>Departments</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h4>150</h4>
                            <h5>Managers</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h4>150</h4>
                            <h5>Active Staff</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import NavBar from './NavBar.vue';
import axios from 'axios';
export default {
    name: 'Dashboard',
    components: {
        NavBar
    },
    data() {
        return {
            users: [],
            // totalDepartments:''
        }
    },
    computed: {
        totalDepartments() {
            const departments = this.users.map(user => user.company.department)

            const uniqueDepartments = new Set(departments)

            return [...uniqueDepartments].length
        }
    },
    async mounted() {
        const result = await axios.get('https://dummyjson.com/users')
        this.users = result.data.users
        console.log(this.users);
    }

}
</script>
