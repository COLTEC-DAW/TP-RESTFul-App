<template>
  <div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <b-pagination
          :total="pagination.totalData"
          :current.sync="pagination.current"
          :order="pagination.order"
          :size="pagination.size"
          :simple="pagination.isSimple"
          :rounded="pagination.isRounded"
          :per-page="pagination.perPage">
        </b-pagination>
      </div>
    </div>
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div class="columns" v-for="i in Math.ceil(paginate.length / 3)" :key="i">
          <div class="column" v-for="launch in paginate.slice((i-3) * 3, i*3)"
          :key="launch.flight_number">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ launch.mission_name }}</p>
                    <p class="subtitle is-6">{{ launch.launch_site.site_name_long }}</p>
                  </div>
                </div>
                <div class="content">
                  {{ launch.details }}
                  <br>
                  <time>{{ parseDate(launch.launch_date_local) }}</time>
                  <div class="is-right">
                    <button class="button is-primary is-outlined is-small"
                      @click="openModal(launch)">
                      More Information
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal :active.sync="isLaunchModalActive" has-modal-card>
      <launch-detail-modal
        v-bind:launch="modalData"
      />
    </b-modal>
  </div>
</template>

<script>
import LaunchDetailModal from '@/components/LaunchDetailModal.vue'

export default {
  components: { LaunchDetailModal },
  name: 'Launch',
  data: function () {
    return {
      launches: '',
      isLaunchModalActive: false,
      modalData: '',
      pagination: {
        totalData: null,
        current: 1,
        perPage: 6,
        order: 'is-left',
        size: '',
        isSimple: false,
        isRounded: true
      },
      errors: []
    }
  },

  mounted () {
    this.getLaunchData()
  },

  methods: {
    getLaunchData: function () {
      this.$http.get('https://api.spacexdata.com/v3/launches').then((response) => {
        this.pagination.totalData = response.data.length
        this.launches = response.data
      })
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
    },
    openModal (data) {
      this.isLaunchModalActive = true
      this.modalData = data
    }
  },

  computed: {
    paginate () {
      if (this.pagination.current === 1) {
        return this.launches.slice(0, this.pagination.perPage)
      }
      let start = (this.pagination.current - 1) * this.pagination.perPage
      let end = this.pagination.current * this.pagination.perPage
      return this.launches.slice(start, end)
    }
  }
}
</script>
