<script setup lang="ts">
import { VAppBar, VAppBarTitle } from 'vuetify/components';

const navDrawer = [
    {
        to: '/',
        title: 'Home',
    },
    {
        to: '/competition',
        title: 'Competition',
    },
    {
        to: '/history',
        title: 'History',
    },
    {
        to: '/teams',
        title: 'Teams',
    },
];
</script>

<template>
    <v-app>
        <v-navigation-drawer>
            <v-list>
                <v-list-item v-for="item in navDrawer" :key="item.title" :to="item.to" link>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <VAppBar flat>
            <!-- <VAppBarNavIcon> </VAppBarNavIcon> -->
            <img class="logo" src="~/assets/images/logo.webp" alt="Logo hasičů" />
            <VAppBarTitle tag="h1">SDH Lípa</VAppBarTitle>
        </VAppBar>

        <v-main class="sdh-main">
            <NuxtPage />
            <v-footer class="sdh-footer">
                <p>&copy; {{ new Date().getFullYear() }} SDH Lípa</p>
            </v-footer>
        </v-main>
    </v-app>
</template>

<style lang="scss" scoped>
.logo {
    margin-left: 1.25rem;
    height: 3rem;
    width: 3rem;
}

.sdh-main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.sdh-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 2.5rem;
    padding: 0.5rem;
}
</style>
