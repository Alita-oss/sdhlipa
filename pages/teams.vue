<template>
    <v-container>
        <v-row>
            <v-col v-for="team in teams" :key="team.id" cols="12" md="6" lg="4">
                <TeamCard :team="team" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TeamCard from '@/components/TeamCard.vue';

const teams = ref([
    {
        id: 1,
        name: 'Dorost',
        //category: 'Youth Team',
        image: '/assets/images/juniors.jpg',
        players: [
            { id: 1, name: 'Kačka Špilková', position: 'Koš' },
            { id: 2, name: 'Markét Urcikánová', position: 'Savice' },
            { id: 3, name: 'Zuza Prchalová', position: 'Stroj' },
            { id: 4, name: 'Zdendy Kameníková', position: 'Béčka' },
            { id: 5, name: 'Maty Fikar', position: 'Rozdělovač' },
            { id: 6, name: 'David Čejka', position: 'LP' },
            { id: 7, name: 'David Pecen', position: 'PP' },
        ],
    },
    {
        id: 2,
        name: 'Muži',
        //category: 'Senior Team',
        image: '/assets/imgages/men.jpg',
        players: [
            { id: 1, name: '//', position: 'Koš' },
            { id: 2, name: 'Vojta Hejl', position: 'Savice' },
            { id: 3, name: '//', position: 'Stroj' },
            { id: 4, name: '//', position: 'Béčka' },
            { id: 5, name: 'Lukáš Petr', position: 'Rozdělovač' },
            { id: 6, name: '//', position: 'LP' },
            { id: 7, name: 'Kuba Neubauer', position: 'PP' },
        ],
    },
    {
        id: 3,
        name: 'Děti',
        //category: 'Youth Team',
        image: '/assets/imgages/kids.jpg',
        players: [
            { id: 1, name: 'Jiřík', position: 'Koš' },
            { id: 2, name: 'Vojta', position: 'Savice' },
            { id: 3, name: 'Kuba Neubauer', position: 'Stroj' },
            { id: 4, name: 'Alešek', position: 'Béčka' },
            { id: 5, name: 'Marcelka', position: 'Rozdělovač' },
            { id: 6, name: 'Kuba', position: 'LP' },
            { id: 7, name: 'Áňa', position: 'PP' },
        ],
    },
]);
</script>

<style lang="scss" scoped>
.v-container {
    padding-top: 20px;
}
</style>
