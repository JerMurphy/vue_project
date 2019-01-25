<template>
    <div>
       <b-navbar toggleable="md" type="dark" variant="dark">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#"><img  class="logo_img" src="../assets/firelogo.png"> Bangers</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">


            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right>
                <!-- Using button-content slot -->
                <template slot="button-content">
                <em>Login</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
        </b-navbar>

        <!-- navbar-1.vue -->
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.logo_img {
  height: 50px;
  width: 50px;
}
</style>

