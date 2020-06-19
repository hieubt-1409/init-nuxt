<template>
  <div class="container">
    <div class="heading">
      <h1 class="title">
        Home
      </h1>
    </div>
    <div>
      <h2>Some id for dynamic routes:</h2>
      <nav>
        <nuxt-link to="/1">Index 1</nuxt-link>
        <nuxt-link to="/2">Index 2</nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard'
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.heading {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.routing {
  width: 100%;
}
</style>
