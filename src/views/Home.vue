<template>
    <div class="home">
        <div class="section">
            <h1 class="title">{{ $t('views.home.title') }}</h1>
            <div class="columns">
                <div class="column is-2">
                    <b-button type="is-info" @click="changeTestDate()">
                        Change
                    </b-button>
                </div>
                <div class="column">
                    <transition name="slide-deform">
                        <b-tag type="is-success" v-if="testData">
                            {{ testData }}
                        </b-tag>
                    </transition>
                    <transition name="slide-deform">
                        <b-tag type="is-danger" v-if="!testData">
                            {{ testData }}
                        </b-tag>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'Home',
})
export default class Home extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get testData(): boolean {
        return this.mainStore.state.testData;
    }

    private changeTestDate(): void {
        this.mainStore.actions.reverttestData();
    }
}
</script>

<style lang="scss" scoped></style>
