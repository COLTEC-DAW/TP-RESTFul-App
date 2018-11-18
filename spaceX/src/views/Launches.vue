<template>
  <div class="launches">
    <Launch/>
  </div>
</template>

<script>
// @ is an alias to /src
import Launch from '@/components/Launch.vue'

export default {
  name: 'launches',
  components: {
    Launch
  }
}
</script>

<style>
.launches {
  max-width: 100%;
  margin-top: 5px;
}
</style>
