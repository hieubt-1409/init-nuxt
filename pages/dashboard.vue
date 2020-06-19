<template>
  <div>
    <h1>
      Dashboard Page - Nested routes
    </h1>
    <nav>
      <nuxt-link to="/dashboard/user">Dashboard for user</nuxt-link>
      <nuxt-link to="/dashboard/settings">Dashboard for settings</nuxt-link>
    </nav>
    <nuxt-child />
  </div>
</template>

<script>

export default {
  layout: 'dashboard',
  transition: 'test'
}
</script>
