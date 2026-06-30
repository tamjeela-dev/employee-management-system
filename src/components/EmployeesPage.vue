<template>
    <NavBar />
    <!-- <h3>Employees Record</h3> -->
    <div class="container">
        <p class="alert alert-danger" v-if="error">{{ error }}</p>
        <div class="row mb-3">
            <div class="col-3">
                <input type="text" class="form-control" placeholder="Search by name" v-model="firstName">
            </div>
            <div class="col-3">
                <input type="text" class="form-control" placeholder="Search by email" v-model="email">
            </div>
            <div class="col-3">
                <input type="text" class="form-control" placeholder="Search by gender" v-model="gender">
            </div>
        </div>
    </div>
    <div v-if="filteredUsers.length === 0" class="alert alert-info text-center">
        No employees found.
    </div>
    <div v-else class="container-fluid">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in filteredUsers" :key="user.id">
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.age }}</td>
                    <td>
                        <router-link class="btn" :to="`/edit-employee/${user.id}`">
                            Edit
                        </router-link>
                        <button @click="deleteEmployee(user.id)" class="btn btn-primary" :disabled="loading">
                            {{ loading ? 'Deleting employee...' : 'Delete' }}
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import NavBar from './NavBar.vue';

export default {
    name: 'EmployessPage',
    components: {
        NavBar
    },
    data() {
        return {
            users: [],
            firstName: '',
            email: '',
            gender: '',
            error: '',
            loading: true,

        }
    },
    computed: {
        filteredUsers() {
            return this.users.filter(user => {
                const searchName = user.firstName
                    .toLowerCase().includes(this.firstName.toLowerCase());
                const searchEmail = user.email.
                    toLowerCase().includes(this.email.toLowerCase());
                const searchGender = user.gender
                    .toLowerCase().includes(this.gender.toLowerCase());
                return searchName && searchEmail && searchGender

            })
        }
    },
    async mounted() {
        try {
            this.loading = true;
            const result = await axios.get('https://dummyjson.com/users')
            this.users = result.data.users.slice(0, 10)
            console.log(result);
            console.log(result.data);
            console.log(result.data.users);
            this.loading = false;

        } catch (error) {
            this.error = 'Failed to get data',
                this.loading = false;
        }

    },
    methods: {
        async deleteEmployee(id) {
            try {
                const confirmResult = confirm('are you sure you want to delete this employee')
                if (confirmResult) {
                    this.loading = true;
                    const result = await axios.delete(`https://dummyjson.com/users/${id}`)
                    this.users = this.users.filter(user => user.id !== id);
                    console.log(this.users)
                    console.log(result.data);
                }
                this.loading = false;
            } catch (error) {
                this.error = 'Failed to delete employee',
                    this.loading = false;
                // this.$router.push('/')
            }
        }
    }
}
</script>

<style>
.btn,
.btn:hover {
    background-color: darkblue;
    color: white;
    margin: 2px;
}
</style>