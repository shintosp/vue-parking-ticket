export default {
    createSlots: (state, totalSlots) => {
        if (state.totalSlots < totalSlots) {
            state.totalSlots = totalSlots
        }
    },
    appendTicket: (state, ticket) => {
        state.tickets.splice(ticket.slotNo - 1, 0, ticket)
    },
    clearSlot: (state, ticketNo) => {
        const oldtickets = state.tickets
        state.tickets = oldtickets.filter(val => val.slotNo != ticketNo)
    }
}