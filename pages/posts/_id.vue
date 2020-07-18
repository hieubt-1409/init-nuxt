<template>
  <div>
    <h1>{{ title }}</h1>
    <pre>{{ body }}</pre>

  </div>
</template>

<script>
import axios from '~/utils/axios';
export default {
  name: 'PostDetail',
  layout: 'dashboard',

  async asyncData ({ params, error }) {
    return axios.get(`/posts/${params.id}`)
      .then((res) => {
        return {
          title: res.data.title,
          body: res.data.body
        }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  }
}
</script>
