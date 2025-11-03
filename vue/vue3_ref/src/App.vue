<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue 3!')
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    {{ message }}
  </p>
</template>

<style scoped></style>
