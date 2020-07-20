export default {
    createSlots: (state, { totalSlots }) => {
        if (state.totalSlots < totalSlots) {
            state.totalSlots = totalSlots
        }
    },
    appendTicket: (state, ticket) => {
        state.tickets.push(ticket)
        console.log(state.tickets)
    }
}