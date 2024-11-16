<script setup lang="ts">
import { VAppBar, VAppBarTitle } from 'vuetify/components';
</script>

<template>
    <v-app>
        <v-navigation-drawer>
            <v-list>
                <v-list-item title="Navigation drawer"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <VAppBar flat>
            <!-- <VAppBarNavIcon> </VAppBarNavIcon> -->
            <img class="logo" src="~/assets/images/logo.webp" alt="Logo hasičů" />
            <VAppBarTitle tag="h1">SDH Lípa</VAppBarTitle>
        </VAppBar>

        <v-main class="sdh-main">
            <div>Main Content</div>
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
