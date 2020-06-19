<template>
  <div>
    <h1>Index {{ id }}</h1>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      id: this.$route.params.id
    }
  },
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }
}
</script>
