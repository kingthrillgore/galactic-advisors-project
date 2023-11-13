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
    <div v-if="messages" class="wrapper">
        <div v-for="m in messages" :key="m.id" class="message" style="margin: 0 0 2rem; border: 3px solid #333; border-radius: 3px; padding: 1rem">
            <p style="font-style: italic;">Created by {{ m.author }} on {{ m.dateCreated }}</p>
            <VueShowdown :markdown="m.body" />
        </div>
    </div>

    <div v-if="!messages">
        Please Wait...
    </div>
</template>