<template>
    <div class="home">
        <encode></encode>
    </div>
</template>

<script lang="ts">
    import Encode from '@/components/Encode.vue'; // @ is an alias to /src
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {
            Encode,
        },
    })

    export default class Home extends Vue {}
</script>
