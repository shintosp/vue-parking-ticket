<template>
  <div class="home">
    <h1>Generate Parking Ticket</h1>
    <div>
      <!-- <input type="text" v-model='carNumber' placeholder="Enter " />
      <input type="text" v-model='carColor' placeholder="Enter " /> -->
      <p>Available tickets: {{ availableTickets }}</p>
      <button class="btn" @click="parkingTicket">Generate a Parking Ticket</button>
      <div v-if="ticket.slotNo > 0" class="booked-ticket">
        <div class="col-left"><span>Slot No: {{ticket.slotNo}}</span></div>
        <div class="col-right">
          <h4>Car Details</h4>
          <p>Car No: {{ticket.carNo}}</p>
          <p>Car Color: {{ticket.carColor}}</p>
        </div>
      </div>
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
      const ticketList = this.$store.state.tickets
      const totalSlots = this.$store.state.totalSlots
      while (i < totalSlots) {
        if (ticketList[i] == undefined || ticketList[i].slotNo != i + 1) {
          return i + 1
        }
        i++
      }
      return false
    },
    parkingTicket: function () {
      this.ticket = {
        slotNo: 0,
        carNo: 0,
        carColor: '',
        isAvailable: false
      }
      if (this.availableTickets > 0) {
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
      } else {
        alert('Slot is not available')
      }
    }
  },
  computed: {
    availableTickets () {
      return this.$store.state.totalSlots - this.$store.state.tickets.length
    }
    // ,
    // ...mapState([
    //   'tickets'
    // ])
  }
  // ,
  // watch: {
  //   ticketList: function () {
  //     return this.$store.state.tickets
  //   },
  //   totalSlots: function () {
  //     return this.$store.state.totalSlots
  //   }
  // }
}
</script>

<style lang="scss">
  .booked-ticket {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-items: center;
    border: 2px solid #000;
    max-width: 500px;
    margin: 40px auto 0;
    .col-left {
      width: 30%;
    }
    .col-right {
      border-left: 2px solid #000;
      width: 60%;
      font-size: 20px;
    }
  }
  .col-left {
    span {
      font-size: 26px;
      font-weight: 600;
    }
  }
  .btn {
    display: table;
    margin: 18px auto;
    border: none;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    padding: 15px 24px;
    border-radius: 5px;
    background-color: #000;
    color: #ffffff;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    &:hover {
      background-color: #922525;
    }
  }
</style>
