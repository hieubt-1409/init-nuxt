<template>
  <div>
    <h1>Dynamic routes - Job detail - Info - {{ slug }}</h1>
    <p>
      This is some informations for this job.
    </p>
    <nav>
      <nuxt-link :to="{name: 'me-job', params: {job: slug}}">Back to job page</nuxt-link>
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
