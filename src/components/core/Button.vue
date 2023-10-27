<template>
    <button :class="['btn', 'btn-' + type, { 'btn-block': block }]" @click="handleClick" type="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name:"Button",
    props: {
        type: {
            type: String,
            default: 'primary',
        },
        block: {
            type: Boolean,
            default: false,
        },
        isSubmit: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleClick() {
            if (this.isSubmit) {
                this.$emit('submit');
            } else {
                this.$emit('click');
            }
        },
    },
};
</script>


