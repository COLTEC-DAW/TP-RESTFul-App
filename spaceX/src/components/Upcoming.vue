<template>
    <div class="columns upcoming">
        <section class="p-5 column is-6 has-text-centered">
            <h1 class="subtitle">Next launch from NASA</h1>
            <h1 id="count" class="title"></h1>
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

import { log } from 'async';

export default {
    name: 'upcoming',
    data() {
      return {
        upcoming: ""
      }
    },

    mounted() {
      this.getUpcomingLaunchData()
      this.createCountDown()
    },

    methods: {
      getUpcomingLaunchData: function () {
        this.$http.get('https://api.spacexdata.com/v3/launches/upcoming/?flight_number=72').then((response) => {
          this.upcoming = response.data
        })
      },
      createCountDown: function() {
          var countDownDate = new Date(this.upcoming.launch_date_local).getTime();

          // Update the count down every 1 second
          var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            console.log(countDownDate, distance, now)

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("count").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("count").innerHTML = "EXPIRED";
            }
          }, 1000);
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