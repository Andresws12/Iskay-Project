<template>
    <div class="subheader">
        <subheader-item :label="$t('common.components.hedaer.data')" />
        <subheader-item
            :label="$t('common.components.hedaer.tasks')"
            isActive
        />
        <subheader-item :label="$t('common.components.hedaer.returns')" />
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
