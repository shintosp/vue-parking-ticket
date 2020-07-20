<template>
  <div class="set-total-slots">
    <h1>Set Total Number of Slots</h1>
    <input type="text" v-model="totalSlots" />
    <button @click="setTotalslots">Set</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SetTotalSlots',
  data () {
    return {
      totalSlots: 100
    }
  },
  methods: {
    ...mapActions([
        'setSlots'
    ]),
    setTotalslots: function () {
        const payload = this.totalSlots
        this.setSlots(payload)
    }
  }
  // updated: {
  // }
}
</script>
