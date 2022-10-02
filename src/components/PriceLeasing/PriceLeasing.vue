<template>
    <div class="price-leasing">
        <div class="price-leasing__body">
            <h1 class="price-leasing__title">
                Рассчитайте стоимость автомобиля в лизинг
            </h1>
            <Calculator class="price-leasing__calculator"></Calculator>
        </div>
        <ElementsState class="price-leasing__elements-state" />
    </div>
</template>

<script>
import Calculator from '../Calculator/Calculator.vue'
import ElementsState from '../ElementsState/ElementsState.vue'
export default {
    components: { Calculator, ElementsState },
}
</script>

<style lang="scss" scoped>
@import 'styles/main';
</style>
