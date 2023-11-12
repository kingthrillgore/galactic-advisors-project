<script setup>
import { ref } from 'vue'
const messages = ref(null)
fetch("http://localhost:8080/")
    .then(response => response.json())
    .then(data => announcements)

import message from './components/galactic/message.vue'
</script>

<template>
    <header>
        Messages
    </header>

    <main>
        <message />
    </main>
</template>