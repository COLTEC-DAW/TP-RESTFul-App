<template>
  <div>
    <carousel :scrollPerPage="true" :perPage="1">
      <div v-for="image in data" :key="image">
        <slide>
          Slide Content
          <!-- <img :src="image" style="width: 300px; max-width: 100%; height: 130px" alt="Image of slide"> -->
        </slide>
      </div>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
  props: {
    data: {
      type: Array,
      default: null
    }
  }
}
</script>

<style>

</style>
