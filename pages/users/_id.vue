<template>
  <div v-if="$fetchState.pending">Fetching user #{{$route.params.id}}...</div>
  <div v-else>
    <h1>{{ user.name }}</h1>
    <pre>{{ user.username }}</pre>
    <pre>{{ user.email }}</pre>

    <p><n-link to="/users">Back to users</n-link></p>
  </div>
</template>

<script>
import axios from '~/utils/axios';
export default {
  name: 'UserDetail',
  layout: 'dashboard',
  data () {
    return {
      user: {}
    }
  },
  async fetch() {
    this.user = await axios.get(`/users/${this.$route.params.id}`);
  }
}
</script>
