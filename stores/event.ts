import { defineStore } from 'pinia';
import { useDisplay } from 'vuetify';

export const useEventStore = defineStore('event', () => {
    const openTooltipId = ref<number | null>(null);
    const { mobile } = useDisplay();
    const timeout = ref<NodeJS.Timeout | null>(null);

    const killTimeout = () => {
        if (timeout.value) {
            clearTimeout(timeout.value);
            timeout.value = null;
        }
    };

    const toggleTooltip = (id: number) => {
        if (!mobile.value) return;

        killTimeout();
        openTooltipId.value = id;

        timeout.value = setTimeout(() => {
            if (openTooltipId.value === id) {
                openTooltipId.value = null;
            }
        }, 3000);
    };

    return { toggleTooltip, openTooltipId, killTimeout };
});
