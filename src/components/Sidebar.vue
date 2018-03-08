<template>
    <div>
        <v-container grid-list-md justify-space-around>
            <v-layout v-for="item in translations" :key="`${item.char}`">
                <v-flex xs-6>
                    <morse-item :content="item.char"></morse-item>
                </v-flex>
                <v-flex xs-6>
                    <morse-item :content="item.symbol"></morse-item>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
import MorseItem from '@/components/MorseItem.vue';
import {Component, Vue} from 'vue-property-decorator';
import {morseTranslations} from '../data/morse-translations';

@Component({
    components: {
        MorseItem,
    },
})
export default class Sidebar extends Vue {
    public translations: string = morseTranslations;
}
</script>