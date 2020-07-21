<template>
    <div class="ticket-row">
        <span>Slot No: {{item.slotNo}}</span> <span>Car No: {{item.carNo}}</span> <span>Car Color: {{item.carColor}}</span> <button class="btn" @click="$emit('onDelete', item.slotNo)">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'Ticket',
    props: ['item']
}
</script>
