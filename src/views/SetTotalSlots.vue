<template>
  <div class="set-total-slots">
    <h1>Set Total Number of Slots</h1>
    <input type="text" v-model="totalSlots" />
    <button class="btn" @click="setTotalslots">Set</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SetTotalSlots',
  data () {
    return {
      totalSlots: this.$store.state.totalSlots
    }
  },
  methods: {
    ...mapActions([
        'setSlots'
    ]),
    setTotalslots: function () {
        const payload = this.totalSlots
        this.setSlots(payload).then(() => {
          this.totalSlots = this.slotsFromStore
        })
    }
  },
  computed: {
    slotsFromStore () {
      return this.$store.state.totalSlots
    }
  }
  // updated: {
  // }
}
</script>
