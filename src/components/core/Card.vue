<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-sm-6">{{ title }}</div>
        <slot name="header"></slot>
      </div>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: String
  }
}
</script>

<style  scoped></style>