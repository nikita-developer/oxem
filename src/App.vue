<template>
    <div class="page">
        <PriceLeasing class="page__calculator"></PriceLeasing>
    </div>
</template>

<script>
import PriceLeasing from './components/PriceLeasing/PriceLeasing.vue'
export default {
    components: { PriceLeasing },
}
</script>

<style lang="scss">
@import 'styles/main';
</style>
