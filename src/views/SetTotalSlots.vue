<template>
    <div class="set-total-slots">
        <h1>Set Total Number of Slots</h1>
        <input type="text" v-model="totalSlots" />
        <button :click="setTotalslots">Set</button>
    </div>
</template>

<script>
export default {
    name: 'SetTotalSlots',
    data () {
        return {
            totalSlots: 100
        }
    },
    methods: {
        setTotalslots: function () {
            console.log(this.totalSlots)
        }
    }
}

</script>
