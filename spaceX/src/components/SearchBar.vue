<template>
  <section>
    <div class="columns">
      <button class="button is-1" @click="onPressedBackButton">Back</button>
      <form class="is-offset-1" v-on:change="getFilterData">
        <b-input v-model="search" max-length="50" v-on:keyup="getFilterData" placeholder="Enter site name"></b-input>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      filteredData: [],
      search: ''
    }
  },
  props: {
    data: {
      type: Array,
      default: null
    },
    name: {
      type: Object,
      default: null
    }
  },
  methods: {
    getFilterData: function () {
      this.filteredData = this.data
      let filteredBySearch = []
      if (this.search !== '') {
        filteredBySearch = this.filteredData.filter(
          obj => obj.mission_name.indexOf(this.search) >= 0)
        this.filteredData = filteredBySearch
        this.onSearchData()
      }
    },
    onSearchData: function () {
      this.$emit('searchData', this.filteredData)
    },
    onPressedBackButton: function () {
      this.$emit('pressedBackButton')
    }
  },
  mounted () {
    this.getFilterData()
  }
}
</script>
