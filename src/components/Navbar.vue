<template>
    <nav class="navbar navbar-dark bg-primary">
        <router-link class="navbar-brand" :to="{ name: 'Dashboard' }">Dashboard</router-link>
        <span class="navbar-brand">IP Management - Welcome {{ getAuthenticateUserName() }} </span>
        <slot></slot>
    </nav>
</template>

<script>
export default {
    name: "NavbarComponent"
}
</script>

<style scoped></style>