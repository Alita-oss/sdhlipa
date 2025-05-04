<template>
    <v-card class="history-card">
        <v-card-title>Úspěchy na soutěžích</v-card-title>
        <v-data-table :items="results" :headers="headers" class="results-table" dense />
    </v-card>
</template>

<script setup>
const headers = [
    { text: 'Rok', value: 'year' },
    { text: 'Soutěž', value: 'event' },
    { text: 'Kategorie', value: 'category' },
    { text: 'Umístění', value: 'placement' },
];

const results = ref([
    { year: 2023, event: 'Okresní kolo', category: 'Muži', placement: '1. místo' },
    { year: 2023, event: 'Okresní kolo', category: 'Děti', placement: '3. místo' },
    { year: 2022, event: 'Okresní kolo', category: 'Juniorky', placement: '2. místo' },
    { year: 2021, event: 'Krajské kolo', category: 'Muži', placement: '3. místo' },
    { year: 2021, event: 'Krajské kolo', category: 'Junioři', placement: '3. místo' },
]);
</script>

<style scoped>
.history-card {
    margin-top: 20px;
    border-radius: 12px;
}

.results-table {
    margin-top: 10px;
}
</style>
