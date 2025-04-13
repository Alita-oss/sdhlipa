<template>
    <v-card class="team-card">
        <v-img :src="team.image.src" :alt="team.image.alt" class="team-image" />
        <v-card-title class="team-title">{{ team.name }}</v-card-title>
        <v-card-text>
            <v-list density="compact">
                <v-list-item v-for="player in team.players" :key="player.id">
                    <v-list-item-title class="player-name">
                        {{ player.name }} - {{ player.position }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import type { Team } from '@/types/team';

defineProps<{
    team: Team;
}>();
</script>

<style lang="scss" scoped>
.team-card {
    margin-bottom: 20px;
    border-radius: 12px;
    overflow: hidden;
}

.team-image {
    height: 200px;
    object-fit: cover;
}

.team-title {
    font-size: 1.2rem;
    font-weight: bold;
}

/*.team-category {
    font-size: 1rem;
    color: gray;
}*/

.player-name {
    font-size: 0.9rem;
}
</style>
