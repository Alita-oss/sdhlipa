<template>
    <v-container>
        <v-list>
            <v-list-item v-for="event in events" :key="event.name">
                <v-list-item-title>{{ event.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ event.start }} - {{ event.end }}</v-list-item-subtitle>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const events = ref([
    { name: 'Training', start: '2025-02-05 10:00', end: '2025-02-05 12:00' },
    { name: 'Competition', start: '2025-02-07 14:00', end: '2025-02-07 18:00' },
    { name: 'Meeting', start: '2025-02-09 16:00', end: '2025-02-09 17:00' },
]);
</script>
