<template>
   <div class="d-flex justify-content-between align-items-center mb-4">
    <h1>Employee Management System</h1>

    <div class="links">
        <router-link to="/">
            Dashboard
        </router-link>

        <router-link to="/users">
            Employees
        </router-link>

        <router-link to="/add-employee">
            Add Employee
        </router-link>
    </div>
</div>
</template>

<script>

export default {
    name: 'NavBar',
    data() {
        return {

        }
    },
    mounted() {
        const id = this.$route.params.id
        console.log(id)
    }
}
</script>

<style>
.links a{
    text-decoration: none;
    color:darkblue;
    font-family: Arial, Helvetica, sans-serif;

}
h1{
    margin-left: 20px; 
    font-family: Arial, Helvetica, sans-serif;
    color: darkblue;
}
h5,h4 {
     font-family: Arial, Helvetica, sans-serif;
     align-items: center;
     text-align: center;
}
</style>