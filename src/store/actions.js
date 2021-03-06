export default {
    addTicket: ({ commit }, ticket) => {
        commit('appendTicket', ticket)
    },
    setSlots: ({ commit }, payload) => {
        commit('createSlots', payload)
    },
    deleteTicket: ({ commit }, payload) => {
        commit('clearSlot', payload)
    }
}