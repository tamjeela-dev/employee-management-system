<template>
    <section>
        <p class="alert alert-danger" v-if="error">{{ error }}</p>
        <div class="container">
            <h3>Login here </h3>
            <div class="row justify-content-center">
                <form action="" @submit.prevent="login">
                    <div class="col-lg-6">
                        <input 
                             type="text" placeholder="Enter username" 
                             v-model="username" class="form-control mb-3">
                        <input 
                            type="password" placeholder="Enter password" 
                            v-model="password" class="form-control mb-3">
                    </div>
                    <button type="submit" class="btn btn-primary" :disabled="loading">{{loading ? 'Logging in...' : 'Login'}}</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginPage',
    data() {
        return {
            username:'',
            password:'',
            error:'',
            loading: false,
        }
    },
    methods:{
        async login(){
              this.error = '';
              if (!this.username || !this.password) {
                  this.error = "Please enter username and password";
                  return;
                }
                try{
                    this.loading = true;
                    const result = await axios.post('https://dummyjson.com/auth/login', {
                        username: this.username,
                        password: this.password,
                    })
                    this.loading = false;
                    console.log(result.data)
                    localStorage.setItem('token', result.data.accessToken)
                    this.$router.push('/')
                    
                }
                catch (error) {
                    console.log(error.response.data);
                    this.error = 'Invalid username or password';
                    this.loading = false;
            }
         }
    }
}
</script>