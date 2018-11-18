<template>
  <div class="card">
    <div class="card-image">
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="launch.links.mission_patch" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <a class="title is-4">{{ launch.mission_name }}</a>
          <br>
          <p class="subtitle is-6">{{ launch.launch_site.site_name_long }}</p>
        </div>
      </div>
      <div class="content">
        <b>Details:</b> {{ launch.details }}
        <br>
        <p><a @click="goToRocketDetail(launch.rocket.rocket_id)">Rocket: {{ launch.rocket.rocket_name }}</a></p>
        <time><b>Launch Date:</b> {{ parseDate(launch.launch_date_local) }}</time>
      </div>
    </div>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
    </footer>
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
    parseDate: function (date) {
      var dateParsed = new Date(date).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      })
      return dateParsed
    },
    goToRocketDetail: function (rocketId) {
      this.$router.push({ name: 'rocketDetails', params: { id: rocketId } })
    }
  }
}
</script>
