<template>
  <div class="home">
    <h1>Generate Parking Ticket</h1>
    <div>
      <!-- <input type="text" v-model='carNumber' placeholder="Enter " />
      <input type="text" v-model='carColor' placeholder="Enter " /> -->
      <button @click="parkingTicket">Generate a Partking Ticket</button>
      <div>{{carNumber}}</div><span>{{carColor}}</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      carNumber: '',
      carColor: ''
    }
  },
  methods: {
    rand: function (min, max) {
      const randomNum = Math.random() * (max - min) + min
      return Math.round(randomNum)
    },
    parkingTicket: function () {
      const colors = ['black', 'blue', 'white', 'red']
      const selected = this.rand(0, 3)
      this.carColor = colors[selected]
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R']
      const rtos = ['01', '02', '03', '04', '05', '06', '07', '08', '09']
      const selectedRto = this.rand(0, 8)
      const firstCodel = this.rand(0, 16)
      const secondCodel = this.rand(0, 16)
      this.carNumber = 'KA-' + rtos[selectedRto] + '-' + letters[firstCodel] + letters[secondCodel] + '-' + this.rand(600, 2999)
    }
  },
  computed: {
    tickets() {
      return this.$store.state.tickets
    }
    // ...mapState([
    //   'tickets'
    // ])
  }
}
</script>

<style lang="scss">

</style>
