<template>
  <div>
    <span>
      {{ $accessor.fullName }} birth year is {{ $accessor.birthYear }}
    </span>
    <ul>
      <li v-for="email in $accessor.email.emails" :key="email">
        {{ email }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted(): void {
    this.$accessor.changeName('Mnagon boy')
    console.log(this.$accessor)
  },
})
</script>

<style></style>
