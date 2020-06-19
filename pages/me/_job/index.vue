<template>
  <div>
    <h1>Dynamic routes - Job detail - Index</h1>
    Job slug: {{ slug }}
    <nav>
      <nuxt-link :to="{name: 'me-job-info', params: {job: slug}}">Show more info</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      slug: this.$route.params.job
    }
  }
}
</script>
