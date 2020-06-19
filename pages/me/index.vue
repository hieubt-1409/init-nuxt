<template>
  <div>
    <h1>Index of me page</h1>
    <h2>List of jobs:</h2>
    <nav>
      <nuxt-link to="/me/php-developer">PHP developer</nuxt-link>
      <nuxt-link to="/me/vue-developer">Vue developer</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  layout: 'dashboard'
}
</script>
