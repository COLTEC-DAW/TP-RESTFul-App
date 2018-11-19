<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ launch.mission_name }}</p>
          <p class="subtitle is-6">{{ launch.launch_site.site_name_long }}</p>
        </div>
      </div>
      <div class="content">
        <time>Launch date: {{ parseDate(launch.launch_date_local) }}</time>
        <div class="is-right">
          <button class="button is-primary is-outlined is-small"
            @click="onClickModalButton">
            More Information
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    launch: {
      type: Object,
      default: null
    }
  },
  methods: {
    onClickModalButton: function () {
      this.$emit('clickLaunchModal', this.launch)
    },
    parseDate: function (date) {
      var dateParsed = new Date(date).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      })
      return dateParsed
    }
  }
}
</script>
