<template>
  <div class="p-5">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <search-bar class="" @pressedBackButton="onPressedBackButtonSearchBar" @searchData="onSearchData" v-bind:data="launches"/>
      </div>
    </div>
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div class="columns" v-for="i in Math.ceil(paginate.length / 3)" :key="i">
          <div class="column" v-for="launch in paginate.slice((i-1) * 3, i*3)"
          :key="launch.flight_number">
            <card-launch @clickLaunchModal="openModal" v-bind:launch="launch"/>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-3 is-offset-4">
      <b-pagination class=""
        :total="pagination.totalData"
        :current.sync="pagination.current"
        :order="pagination.order"
        :size="pagination.size"
        :simple="pagination.isSimple"
        :rounded="pagination.isRounded"
        :per-page="pagination.perPage">
      </b-pagination>
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
import SearchBar from '@/components/SearchBar.vue'
import CardLaunch from '@/components/CardLaunch.vue'

export default {
  components: {
    LaunchDetailModal,
    SearchBar,
    CardLaunch
  },
  name: 'Launch',
  data: function () {
    return {
      launches: [],
      isLaunchModalActive: false,
      modalData: '',
      pagination: {
        totalData: null,
        current: 1,
        perPage: 12,
        order: 'is-left',
        size: '',
        isSimple: false,
        isRounded: false
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
    openModal (data) {
      this.isLaunchModalActive = true
      this.modalData = data
    },
    onSearchData (filteredData) {
      if (filteredData.length <= 0) {
        this.$toast.open('No data was found')
      } else {
        this.launches = filteredData
        this.pagination.totalData = filteredData.length
      }
    },
    onPressedBackButtonSearchBar () {
      this.getLaunchData()
    }
  },

  computed: {
    paginate () {
      if (this.launches.length < 0) {
        return
      }
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
