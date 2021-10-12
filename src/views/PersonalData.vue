<template>
    <div class="personal-data" data-cy="personal-data">
        <div class="section">
            <h1 class="title">{{ $t('common.titles.personalData') }}</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'PersonalData',
})
export default class PersonalData extends Vue {}
</script>

<style lang="scss" scoped></style>
