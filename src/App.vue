<template>
    <v-app id="app">
        <v-navigation-drawer clipped fixed app class="indigo darken-2">
            <sidebar></sidebar>
        </v-navigation-drawer>
        >
        <v-toolbar app fixed clipped-left class="deep-purple lighten-2 deep-purple--text text--darken-4">
            <v-toolbar-title>Morse code decoder</v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn to="/" flat>
                    Encode
                </v-btn>
                <v-btn to="/legend" flat>
                    Legend
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-content>
        <v-footer app/>
    </v-app>
</template>

<script lang="ts">
    import Sidebar from '@/components/Sidebar.vue'; // @ is an alias to /src
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {
            Sidebar,
        },
    })

    export default class Home extends Vue {
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
