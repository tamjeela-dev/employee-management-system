<template>
    <NavBar />
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
                <h3>Edit Employee</h3>
                <form @submit.prevent="editEmployee">
                    <input class="mb-4 form-control" type="text" v-model="firstName"> <br>
                    <input class="mb-4 form-control" type="email" v-model="email"><br>
                    <select v-model="gender" class="form-control">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select> <br><br>
                    <input class="mb-4 form-control" type="number" v-model="age"><br>
                    <button type="submit" class="btn btn-primary">
                        Update
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
import axios from 'axios';

export default {
    name: 'EditEmployee',
    components: {
        NavBar
    },
    data() {
        return {
            user: '',
            firstName: '',
            email: '',
            gender: '',
            age: '',
            // error: '',
        }
    },
    async mounted() {
        const id = this.$route.params.id
        console.log(id);

        const result = await axios.get(`https://dummyjson.com/users/${id}`)
        console.log(result.data);
        this.firstName = result.data.firstName
        this.email = result.data.email
        this.gender = result.data.gender
        this.age = result.data.age
    },
    methods: {
        async editEmployee() {
            const id = this.$route.params.id
            console.log(id);

            const result = await axios.put(`https://dummyjson.com/users/${id}`, {
                firstName: this.firstName,
                email: this.email,
                gender: this.gender,
                age: this.age
                
            });
            this.$router.push('/users')
            console.log(result.data);
        }
    }
}
</script>