<template>
    <div class="ticket-list">
        <h1>Occupied Slots</h1>
        <Ticket v-for="ticket in list" :key="ticket.slotNo" :item="ticket"></Ticket>
    </div>
</template>

<script>
import Ticket from '../components/Ticket.vue'
// import mapState from 'vuex'
export default {
    name: 'TicketList',
    components: {
        Ticket
    },
    computed: {
        list () {
            return this.$store.state.tickets
        }
    }
}
</script>