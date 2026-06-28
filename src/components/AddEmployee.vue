<template>
    <NavBar />
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
                <h3>Add Employee</h3>
                <form @submit.prevent="addEmployee">
                    <input class="mb-4 form-control" type="text" v-model="firstName"> <br>
                    <input class="mb-4 form-control" type="email" v-model="email"><br>
                    <select v-model="gender" class="form-control">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select> <br><br>
                    <input class="mb-4 form-control" type="number" v-model="age"><br>
                    <button type="submit" class="btn btn-primary">
                        Add Employee
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import NavBar from './NavBar.vue';
export default {
    name: 'AddEmployee',
    components: {
        NavBar
    },
    data() {
        return {
            firstName: '',
            email: '',
            gender: '',
            age: '',
            error: '',
        }
    },
    methods: {
        async addEmployee() {
            try {
                const result = await axios.post('https://dummyjson.com/users/add', {
                    firstName: this.firstName,
                    email: this.email,
                    gender: this.gender,
                    age: this.age,

                })
                console.log(result.data)
            } catch (error) {
                this.error = 'Failed to Add user details'
            }
        }
    }
}
</script>

<style>
h3 {
    color: darkblue;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 10px;
}
</style>