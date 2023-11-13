<script setup>
import { ref } from 'vue'
import { VueShowdown } from 'vue-showdown';

let messages = ref(null)

fetch("http://localhost:8080/", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }})
    .then(response => response.json())
    .then(data => messages.value = data)
    .catch(error=> {
        console.error("Guru Meditation:", error)
    })
    .finally(console.log(messages))
</script>

<template>
    <div v-if="messages">
        <p>Messages Found</p>

        <div v-for="m in messages" :key="m.id">
            <VueShowdown :markdown="m.body" />
        </div>
    </div>

    <div v-if="!messages">
        Please Wait...
    </div>
</template>