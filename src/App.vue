<template>
    <div class="page">
        <Transition name="fade">
            <div v-if="preloader" class="preloader">
                <div class="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </Transition>
        <PriceLeasing class="page__calculator"></PriceLeasing>
    </div>
</template>

<script>
import PriceLeasing from './components/PriceLeasing/PriceLeasing.vue'
export default {
    components: { PriceLeasing },
    data() {
        return {
            preloader: true,
        }
    },
    mounted() {
        setTimeout(() => {
            this.preloader = false
        }, 2000)
    },
}
</script>

<style lang="scss">
@import 'styles/main';
</style>
