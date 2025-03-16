<template>
    <ClientOnly>
        <v-tooltip :model-value="show" scroll-strategy="close" location="top">
            <template #activator="{ props: slotProps }">
                <v-chip
                    v-bind="slotProps"
                    class="event-chip"
                    :color="colors[event.category as keyof typeof colors]"
                    @click="toggleTooltip(event.id)"
                    @mouseenter="openTooltipId = event.id"
                    @mouseleave="openTooltipId = null"
                >
                    {{ event.title }}
                </v-chip>
            </template>
            <div>
                <strong>{{ event.title }}</strong>
                <br />
                {{ formatDateRange(event.start, event.end) }}
            </div>
        </v-tooltip>
    </ClientOnly>
</template>

<script setup lang="ts">
import type { Event } from '@/types/event';
import { storeToRefs } from 'pinia';
import { useEventStore } from '@/stores/event';

const props = defineProps<{
    event: Event;
}>();

const eventStore = useEventStore();
const { openTooltipId } = storeToRefs(eventStore);
const { toggleTooltip } = eventStore;

const formatDateRange = (start: Date, end: Date) => {
    const locale = 'cs-CZ';

    const startDay = start.toLocaleDateString(locale, { weekday: 'short', day: 'numeric', month: 'numeric' });
    const startTime = start.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    const endTime = end.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });

    if (start.toDateString() === end.toDateString()) {
        return `${startDay} ${startTime} - ${endTime}`;
    } else {
        return `${startDay} ${startTime} - ${end.toLocaleDateString(locale)} ${endTime}`;
    }
};

const colors = {
    training: 'green-accent-2',
    competition: 'blue-accent-2',
    meeting: 'orange-accent-2',
};

const show = computed(() => openTooltipId.value === props.event.id);
</script>

<style lang="scss" scoped>
.event-chip {
    :deep(.v-chip__content) {
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        white-space: nowrap;
        display: block;
    }
}
</style>
