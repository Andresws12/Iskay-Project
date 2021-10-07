<template>
    <div class="about">
        <div class="section">
            <p class="title">{{ $t('components.navigation.about') }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'About',
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped></style>
