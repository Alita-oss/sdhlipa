<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 class="title">Historie týmu</h1>
                <p class="intro">
                    Náš sbor vznikl v roce 1875 a od té doby se aktivně účastníme soutěží v požárním sportu. Nachazíme
                    se v malé vesničce Lípa. Kousek od Havlíčkova Brodu.
                </p>
            </v-col>
            <v-col cols="12">
                <HistoryView />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import HistoryView from '@/components/historyView.vue';
</script>

<style scoped>
.title {
    font-size: 2rem;
    margin-bottom: 16px;
}

.intro {
    font-size: 1.1rem;
    margin-bottom: 24px;
}
</style>
