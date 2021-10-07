<template>
    <div class="home">
        <div class="section">
            <h1 class="title">{{ $t('views.home.title') }}</h1>
            <div class="columns">
                <div class="column is-2"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Home',
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
