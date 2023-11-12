<script setup>
/* const props = defineProps(['message'])

console.log(props.message) */
defineProps(['message'])
console.log(props.message)
</script>

<template>
    <div class="message">
        {{ message }}
    </div>
</template>