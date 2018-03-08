<template>
    <v-app id="app">
        <v-navigation-drawer clipped fixed app/>
        <v-toolbar app fixed clipped-left class="deep-purple lighten-2 deep-purple--text text--darken-4">
            <v-toolbar-side-icon class="deep-purple--text text--darken-4"/>
            <v-toolbar-title>Morse code decoder</v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn to="/" flat>
                    Home
                </v-btn>
                <v-btn to="/about" flat>
                   About
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

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
