<template>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table>
</template>
  
<script>
export default {
    name: "TableComponent",
    props: {
        headers: Array,
    },
};
</script>
  