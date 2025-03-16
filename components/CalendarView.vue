<template>
    <v-container>
        <v-calendar :events="events">
            <template #event="{ event }: { event: Event }">
                <CalendarEvent :key="event.id" :event="event" />
            </template>
        </v-calendar>
    </v-container>
</template>

<script setup lang="ts">
import CalendarEvent from './CalenderEvent.vue';
import type { Event } from '@/types/event';

const events = ref<Event[]>([
    {
        title: 'Training',
        start: new Date(2025, 1, 5, 10, 0),
        end: new Date(2025, 1, 5, 12, 0),
        id: 1,
        category: 'training',
    },
    {
        title: 'Competition',
        start: new Date(2025, 1, 7, 14, 0),
        end: new Date(2025, 1, 7, 18, 0),
        id: 2,
        category: 'competition',
    },
    {
        title: 'Meeting',
        start: new Date(2025, 1, 9, 16, 0),
        end: new Date(2025, 1, 9, 17, 0),
        id: 3,
        category: 'meeting',
    },
    {
        title: 'Training',
        start: new Date(2025, 1, 5, 10, 0),
        end: new Date(2025, 1, 5, 12, 0),
        id: 4,
        category: 'training',
    },
    {
        title: 'Competition',
        start: new Date(2025, 1, 7, 14, 0),
        end: new Date(2025, 1, 7, 18, 0),
        id: 5,
        category: 'competition',
    },
    {
        title: 'Meeting',
        start: new Date(2025, 1, 9, 16, 0),
        end: new Date(2025, 1, 9, 17, 0),
        id: 6,
        category: 'meeting',
    },
    {
        title: 'Fire Drill',
        start: new Date(2025, 1, 3, 9, 0),
        end: new Date(2025, 1, 3, 11, 0),
        id: 7,
        category: 'training',
    },
    {
        title: 'Equipment Check',
        start: new Date(2025, 1, 4, 13, 0),
        end: new Date(2025, 1, 4, 14, 30),
        id: 8,
        category: 'meeting',
    },
    {
        title: 'Strategy Meeting',
        start: new Date(2025, 1, 6, 15, 0),
        end: new Date(2025, 1, 6, 16, 30),
        id: 9,
        category: 'meeting',
    },
]);
</script>

<style lang="scss" scoped></style>
