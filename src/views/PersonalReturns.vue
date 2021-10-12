<template>
    <div class="personal-returns" data-cy="personal-returns">
        <div class="section">
            <h1 class="title">{{ $t('common.titles.personalReturns') }}</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'PersonalReturns',
})
export default class PersonalReturns extends Vue {}
</script>

<style lang="scss" scoped></style>
