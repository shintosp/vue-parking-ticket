<template>
    <div class="ticket-row">
        <span>Slot No: {{item.slotNo}}</span> <span>Car No: {{item.carNo}}</span> <span>Car Color: {{item.carColor}}</span>
    </div>
</template>

<script>
export default {
    name: 'Ticket',
    props: ['item']
}
</script>

<style lang="scss">
.ticket-row {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
</style>