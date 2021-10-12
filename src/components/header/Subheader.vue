<template>
    <div class="subheader" data-cy="subheader">
        <subheader-item
            :label="$t('common.titles.personalData')"
            :isActive="this.$route.name === 'MyData'"
            data-cy="subheader-my-data-link"
            nameToGo="MyData"
        />
        <subheader-item
            :label="$t('common.titles.tasks')"
            :isActive="this.$route.name === 'Home'"
            data-cy="subheader-my-tasks-link"
            nameToGo="Home"
        />
        <subheader-item
            :label="$t('common.titles.personalReturns')"
            :isActive="this.$route.name === 'MyReturns'"
            data-cy="subheader-my-returns-link"
            nameToGo="MyReturns"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SubheaderItem from '@/components/header/SubheaderItem.vue';

@Component({
    name: 'Subheader',
    components: {
        SubheaderItem,
    },
})
export default class Subheader extends Vue {}
</script>

<style lang="scss" scoped>
.subheader {
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.12);
    background-color: white;
    padding: 0px 15px;
    overflow-x: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
