<template>
    <div class="encode">
        <v-btn raised dark class="deep-purple darken-4" v-stream:click="click$">Count</v-btn>
        <v-btn raised dark class="deep-purple darken-4" @click="clearCounter()">Clear</v-btn>
        <h2 v-if="counter">Clicks: {{counter}}</h2>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Subject} from 'rxjs/Rx';

@Component
export default class Encode extends Vue {
    public click$ = new Subject();
    public counter: number = 0;

    public mounted() {
        this.$subscribeTo(
            this.click$
                .bufferWhen(() => this.click$.debounceTime(500)),
            (clicksCount) => {
                this.counter = clicksCount.length;
            });
    }
    public clearCounter() {
        this.counter = 0;
    }
}
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
