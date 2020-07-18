<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-teal-400 p-6">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <nuxt-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Home</nuxt-link>
          <nuxt-link to="/me" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Me</nuxt-link>
          <nuxt-link to="/work" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Work</nuxt-link>
          <nuxt-link to="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Contact</nuxt-link>
          <nuxt-link to="/dashboard" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Dashboard</nuxt-link>
          <nuxt-link to="/users" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">User list</nuxt-link>
          <nuxt-link to="/posts/1" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Post #1</nuxt-link>
        </div>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>
