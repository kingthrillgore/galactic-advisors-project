<script setup>
import { ref } from 'vue'
let messages = ref(null)
fetch("http://localhost:8080/")
    .then(response => response.json())
    .then(data => messages = data)
    .finally(console.log(messages))

import message from './components/galactic/message.vue'
</script>

<template>
    <header>
        Messages
    </header>

    <main>
        <message 
            v-for="message in messages"
        />
    </main>

    <div v-if="messages">
        <p>Messages Found</p>
    </div>

    <div v-if="!messages">
        Please Wait...
    </div>
</template>