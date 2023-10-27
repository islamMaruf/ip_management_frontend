<template>
    <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Dashboard</a>
        <span class="navbar-brand">IP Management</span>
        <slot></slot>
    </nav>
</template>

<script>
export default {
    name: "NavbarComponent",
}
</script>

<style scoped></style>