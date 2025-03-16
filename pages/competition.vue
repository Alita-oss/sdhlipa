<template>
    <h1>Competition</h1>

    <v-container>
        <CalendarView />
        <ListView />
    </v-container>
</template>

<script setup lang="ts">
import { useEventStore } from '@/stores/event';

const { killTimeout: killTooltipTimeout } = useEventStore();

onUnmounted(() => {
    killTooltipTimeout();
});
</script>

<style lang="scss" scoped></style>
