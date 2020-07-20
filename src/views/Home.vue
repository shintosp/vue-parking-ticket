<template>
  <div class="home">
    <h1>Generate Parking Ticket</h1>
    <div>
      <!-- <input type="text" v-model='carNumber' placeholder="Enter " />
      <input type="text" v-model='carColor' placeholder="Enter " /> -->
      <p>{{ availableTickets }}</p>
      <button @click="parkingTicket">Generate a Parking Ticket</button>
      <span>{{ticket.carColor}}</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

 import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      ticket: {
        slotNo: 0,
        carNo: 0,
        carColor: '',
        isAvailable: false
      }
    }
  },
  methods: {
    ...mapActions([
      'addTicket'
    ]),
    rand: function (min, max) {
      const randomNum = Math.random() * (max - min) + min
      return Math.round(randomNum)
    },
    availableSlot: function () {
      let i = 0
      // const ticketList = this.$store.state.tickets
      // const totalSlots = this.$store.state.totalSlots
      while (i < this.$store.state.totalSlots) {
        if (this.$store.state.tickets[i] == undefined) {
          console.log(i)
          return i
          //  || ticketList[i].slotNo != i
        }
        i++
      }
      return false
    },
    parkingTicket: function () {
      const colors = ['black', 'blue', 'white', 'red']
      const selected = this.rand(0, 3)
      this.ticket.carColor = colors[selected]
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R']
      const rtos = ['01', '02', '03', '04', '05', '06', '07', '08', '09']
      const selectedRto = this.rand(0, 8)
      const firstCodel = this.rand(0, 16)
      const secondCodel = this.rand(0, 16)
      this.ticket.carNo = 'KA-' + rtos[selectedRto] + '-' + letters[firstCodel] + letters[secondCodel] + '-' + this.rand(600, 2999)
      this.ticket.slotNo = this.availableSlot()
      this.addTicket(this.ticket)
      // console.log(this.ticket.slotNo)
    }
  },
  computed: {
    availableTickets () {
      return this.$store.state.totalSlots - this.$store.state.tickets.length
    }
    // ...mapState([
    //   'tickets'
    // ])
  }
}
</script>

<style lang="scss">

</style>
