<template>
    <div class="price-leasing">
        <div class="price-leasing__body">
            <h1 class="price-leasing__title">
                Рассчитайте стоимость автомобиля в лизинг
            </h1>
            <Calculator class="price-leasing__calculator"></Calculator>
        </div>
    </div>
</template>

<script>
import Calculator from '../Calculator/Calculator.vue'
export default {
    components: { Calculator },
}
</script>

<style lang="scss" scoped>
@import 'styles/main';
</style>
