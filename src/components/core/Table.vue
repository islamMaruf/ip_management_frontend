<template>
    <table :class="['table', 'table-bordered', { 'table-sm': sm }, { 'table-responsive': responsive }]">
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
        sm: {
            type: Boolean,
            default: false
        },
        responsive: {
            type: Boolean,
            default: false
        }
    },
};
</script>
  