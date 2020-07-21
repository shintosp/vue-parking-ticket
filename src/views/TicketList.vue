<template>
    <div class="ticket-list">
        <h1>Occupied Slots</h1>
        <Ticket v-for="ticket in list" :key="ticket.slotNo" @onDelete="handleDelete" :item="ticket"></Ticket>
    </div>
</template>

<script>
import Ticket from '../components/Ticket.vue'
import { mapActions } from 'vuex'
export default {
    name: 'TicketList',
    components: {
        Ticket
    },
    methods: {
        ...mapActions([
            'deleteTicket'
        ]),
        handleDelete: function (slotNo) {
            this.deleteTicket(slotNo)
        }
    },
    computed: {
        list () {
            return this.$store.state.tickets
        }
    }
}
</script>

<style lang="scss">
.ticket-row {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    .btn {
        display: inline-block;
        margin: 0;
        font-size: 12px;
        padding: 10px 20px;
    }
}
</style>