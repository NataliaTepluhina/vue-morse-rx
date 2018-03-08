<template>
    <div class="morse-item">
        <v-card class="morse-card" width="110" color="deep-purple lighten-4" v-html="content" />
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class MorseItem extends Vue {
        @Prop() private content: string;
    }
</script>

<style scoped>
    .morse-item {
        font-size: 18px;
        font-weight: bold;
    }
    .morse-card {
        margin: 0 auto;
    }
</style>