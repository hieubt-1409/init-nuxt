<template>
  <div>
    <h1>User list</h1>
    <p v-if="$fetchState.pending">Fetching users...</p>
    <p v-else-if="$fetchState.error">Error while fetching users: {{ $fetchState.error.message }}</p>
    <ul v-else>
      <li v-for="user of users" :key="user.id">
        <n-link :to="`/users/${user.id}`">{{ user.name }}</n-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '~/utils/axios';
export default {
  layout: 'dashboard',

  data () {
    return {
      users: []
    }
  },
  async fetch () {
      const { data } = await axios.get("/users");
      this.users = data;
  }
}
</script>
