<template>
    <div class="calculator">
        <div class="calculator__body">
            <div class="calculator__item">
                <div class="calculator-field">
                    <p class="calculator__name">Стоимость автомобиля</p>
                    <div class="calculator-field__box p-inputgroup">
                        <InputText
                            class="calculator-field__input"
                            placeholder="3 300 000"
                        />
                        <span class="calculator-field__info p-inputgroup-addon"
                            >₽</span
                        >
                    </div>
                    <Slider v-model="value" class="calculator-field__range" />
                </div>
            </div>
            <div class="calculator__item">
                <div class="calculator-field">
                    <p class="calculator__name">Первоначальный взнос</p>
                    <div class="calculator-field__box p-inputgroup">
                        <InputText
                            class="calculator-field__input"
                            placeholder="420 000 ₽"
                        />
                        <span
                            class="calculator-field__info calculator-field__info--percent p-inputgroup-addon"
                            ><span>13%</span></span
                        >
                    </div>
                    <Slider class="calculator-field__range" />
                </div>
            </div>
            <div class="calculator__item">
                <div class="calculator-field">
                    <p class="calculator__name">Срок лизинга</p>
                    <div class="calculator-field__box p-inputgroup">
                        <InputText
                            class="calculator-field__input"
                            placeholder="60"
                        />
                        <span class="calculator-field__info p-inputgroup-addon"
                            >мес.</span
                        >
                    </div>
                    <Slider class="calculator-field__range" />
                </div>
            </div>
            <div class="calculator__item calculator__item--five-percent">
                <p class="calculator__name">Сумма договора лизинга</p>
                <div class="calculator__result">4 467 313 ₽</div>
            </div>
            <div class="calculator__item calculator__item--five-percent">
                <p class="calculator__name">Ежемесячный платеж от</p>
                <div class="calculator__result">4 467 313 ₽</div>
            </div>
            <div class="calculator__item">
                <button class="calculator__btn">Оставить заявку</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 10,
        }
    },
}
</script>

<style lang="scss">
@import 'styles/main';
</style>
