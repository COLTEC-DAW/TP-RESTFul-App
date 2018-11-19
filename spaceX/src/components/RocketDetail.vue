<template>
  <div class="container">
    <div>
      <h4 class="title is-4">Geral Characteristics</h4>
      <p>Cost Per Launch: {{this.rocketData.cost_per_launch}}</p>
      <p>Success Rate: {{this.rocketData.success_rate_pct}}%</p>
      <p>First Flight: {{this.rocketData.first_flight}}</p>
      <p>Country: {{this.rocketData.country}}</p>
      <p>Company: {{this.rocketData.company}}</p>
    </div>
    <div>
      <h4 class="title is-4">Height Values</h4>
      <p>Meters: {{this.rocketData.meters}}m</p>
      <p>Feet: {{this.rocketData.feet}}ft</p>
    </div>
    <div>
      <h4 class="title is-4">Mass Values</h4>
      <p>Kilograms: {{this.rocketData.kg}}kg</p>
      <p>Pounds: {{this.rocketData.lb}}lb</p>
    </div>
    <div>
      <h4 class="title is-4">Payload Weights</h4>
      <div v-for="payload_weight in this.rocketData.payload_weights" :key="payload_weight.id">
        <p>Name: {{ payload_weight.name }}</p>
        <p>Kilograms: {{payload_weight.kg}}kg</p>
        <p>Pounds: {{payload_weight.lb}}lb</p>
        <br>
      </div>
    </div>
    <div>
      <h4 class="title is-4">Engines</h4>
      <p>Number: {{this.rocketData.engines.number}}</p>
      <p>Type: {{this.rocketData.engines.type}}</p>
      <p>Version: {{this.rocketData.engines.version}}</p>
      <p>Layout: {{this.rocketData.engines.layout}}</p>
      <p>Engine Loss Maximum: {{this.rocketData.engines.engine_loss_max}}</p>
      <p>Propellant 1: {{this.rocketData.engines.propellant_1}}</p>
      <p>Propellant 2: {{this.rocketData.engines.propellant_2}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rocketId: this.$route.params.id,
      rocketData: ''
    }
  },
  mounted () {
    this.getRocketsData()
  },
  methods: {
    getRocketsData: function () {
      this.$http.get('https://api.spacexdata.com/v3/rockets/' + this.rocketId).then((response) => {
        this.rocketData = response.data
      })
    }
  }
}
</script>
