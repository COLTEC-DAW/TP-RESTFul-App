<template>
    <div class="columns upcoming">
        <section class="p-5 column is-6 has-text-centered">
            <h1 class="subtitle">Next launch from NASA</h1>
            <div>
                <div class="day">
                    <span class="number">{{ days }} d</span>
                    <span class="number">{{ hours }} h</span>
                    <span class="number">{{ minutes }} m</span>
                    <span class="number">{{ seconds }} s</span>
                </div>
                <div class="message">{{ message }}</div>
                <div class="status-tag" :class="statusType">{{ statusText }}</div>
            </div>
        </section>
        <section class="p-5 is-6" v-for="upcoming in upcoming" :key="upcoming">
            <!-- Dados dessa missão -->
            <h1 class="title">{{upcoming.mission_name}}</h1>
            <h2 class="subtitle">{{upcoming.launch_site.site_name_long}}</h2>
            <time>Launch date: {{ parseDate(upcoming.launch_date_local) }}</time>
        </section>
    </div>
</template>

<script>

// import { log } from 'async'

export default {
  name: 'upcoming',
  data () {
    return {
      timer: '',
      wordString: '',
      start: '',
      end: '',
      interval: '',
      days: 0,
      minutes: 0,
      hours: 0,
      seconds: 0,
      message: '',
      statusType: '',
      statusText: '',
      upcoming: ''
    }
  },

  mounted () {
    this.getUpcomingLaunchData()
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end)
    }, 1000)
  },

  created () {
    this.wordString = JSON.parse({
      'day': 'Day',
      'hours': 'Hours',
      'minutes': 'Minuts',
      'seconds': 'Seconds',
      'expired': 'Event has been expired.',
      'running': 'Till the end of event.',
      'upcoming': 'Till start of event.',
      'status': {
        'expired': 'Expired',
        'running': 'Running',
        'upcoming': 'Future'
      }
    })
  },

  methods: {
    getUpcomingLaunchData: function () {
      this.$http.get('https://api.spacexdata.com/v3/launches/upcoming/?flight_number=72').then((response) => {
        this.upcoming = response.data
        this.start = new Date(Date.parse(this.upcoming[0].launch_date_local)).getTime()
        this.end = new Date().getTime()
        // Update the count down every 1 second
        this.timerCount(this.start, this.end)
      })
    },
    calcTime: function (dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24))
      console.log(this.days)
      this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60))
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000)
    },
    timerCount: function (start, end) {
      // Get todays date and time
      var now = new Date().getTime()

      // Find the distance between now an the count down date
      var distance = start - now
      var passTime = end - now
      console.log(passTime)
      if (distance < 0) {
        this.message = this.wordString.expired
        this.statusType = 'expired'
        this.statusText = this.wordString.status.expired
        clearInterval(this.interval)
      } else if (distance > 0) {
        this.calcTime(distance)
        this.message = this.wordString.upcoming
        this.statusType = 'upcoming'
        this.statusText = this.wordString.status.upcoming
      }
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

<style>
.p-5 {
    padding: 5% !important
}
.upcoming {
    font-family: 'Brandon Grotesque','brandon-grotesque-n7','brandon-grotesque',Helvetica,sans-serif;
}
</style>
// Background imagem de uma estaçao de foguete sei la
// Cards para o coutdown e as informações
// Pegar todos os upcomings e so mostrar o que a date é maior que a atual
