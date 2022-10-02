<template>
    <form @submit.prevent="submit" class="calculator">
        <div class="calculator__body">
            <div class="calculator__item">
                <div class="calculator-field">
                    <p class="calculator__name">Стоимость автомобиля</p>
                    <div class="calculator-field__box p-inputgroup">
                        <InputNumber
                            class="calculator-field__input"
                            placeholder="3 300 000"
                            v-model="priceAuto"
                            :min="1000000"
                            :max="6000000"
                            :step="1000"
                        />
                        <span class="calculator-field__info p-inputgroup-addon"
                            >₽</span
                        >
                    </div>
                    <Slider
                        class="calculator-field__range"
                        v-model="priceAuto"
                        :min="1000000"
                        :max="6000000"
                        :step="1000"
                    />
                </div>
            </div>
            <div class="calculator__item">
                <div class="calculator-field">
                    <p class="calculator__name">Первоначальный взнос</p>
                    <div class="calculator-field__box p-inputgroup">
                        <InputNumber
                            class="calculator-field__input"
                            placeholder="420 000 ₽"
                            v-model="priceFirst"
                            :min="0"
                            :max="maxPrice"
                            :step="1000"
                        />
                        <span
                            class="calculator-field__info calculator-field__info--percent p-inputgroup-addon"
                            ><span>{{ percent }}%</span></span
                        >
                    </div>
                    <Slider
                        class="calculator-field__range"
                        v-model="priceFirst"
                        :min="0"
                        :max="maxPrice"
                        :step="1000"
                    />
                </div>
            </div>
            <div class="calculator__item">
                <div class="calculator-field">
                    <p class="calculator__name">Срок лизинга</p>
                    <div class="calculator-field__box p-inputgroup">
                        <InputNumber
                            class="calculator-field__input"
                            placeholder="60"
                            v-model="mont"
                            :min="1"
                            :max="60"
                        />
                        <span class="calculator-field__info p-inputgroup-addon"
                            >мес.</span
                        >
                    </div>
                    <Slider
                        class="calculator-field__range"
                        v-model="mont"
                        :min="1"
                        :max="60"
                    />
                </div>
            </div>
            <div class="calculator__item calculator__item--five-percent">
                <p class="calculator__name">Сумма договора лизинга</p>
                <div class="calculator__result">{{ summaLeasing }} ₽</div>
            </div>
            <div class="calculator__item calculator__item--five-percent">
                <p class="calculator__name">Ежемесячный платеж от</p>
                <div class="calculator__result">{{ montPrice }} ₽</div>
            </div>
            <div class="calculator__item">
                <button class="calculator__btn" :disabled="btnIsActive">
                    Оставить заявку
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            priceAuto: 3300000, // Стоимость автомобиля
            priceFirst: 4200000, // Первоначальный взнос
            maxPercent: 60, // Максимальный процент первоначального взноса
            mont: 60, // Срок лизинга
            maxPrice: 0,
            percent: 0,
            montPrice: 0,
            summaLeasing: 0,
            btnIsActive: false,
        }
    },
    methods: {
        // процент от суммы первоначального взноса
        changePercent() {
            return Math.round((100 * this.priceFirst) / this.priceAuto)
        },
        // процент от суммы первоначального взноса
        changeMaxPrice() {
            return Math.round((this.priceAuto * this.maxPercent) / 100)
        },
        // ежемесячный платеж
        changeMontPrice() {
            this.montPrice = Math.round(
                (this.priceAuto - this.priceFirst) *
                    ((0.035 * Math.pow(1 + 0.035, this.mont)) /
                        (Math.pow(1 + 0.035, this.mont) - 1))
            )
        },
        // Сумма договора лизинга
        changeSummaLeasing() {
            this.summaLeasing = this.priceAuto + this.mont * this.montPrice
        },
        result() {
            this.percent = this.changePercent()
            this.maxPrice = this.changeMaxPrice()
            if (this.priceFirst > this.maxPrice) this.priceFirst = this.maxPrice
            this.changeMontPrice()
            this.changeSummaLeasing()
        },
        submit() {
            if (!this.btnIsActive) {
                this.btnIsActive = true
                setTimeout(() => {
                    axios
                        .post('https://eoj3r7f3r4ef6v4.m.pipedream.net', {
                            priceAuto: this.priceAuto,
                            priceFirst: this.priceFirst,
                            mont: this.mont,
                            summaLeasing: this.summaLeasing,
                            montPrice: this.montPrice,
                        })
                        .then((response) => {
                            console.log(response.data, 'success')
                            this.btnIsActive = false
                        })
                        .catch(function (error) {
                            console.log(error.response, 'error')
                            this.btnIsActive = false
                        })
                }, 2000)
            }
        },
    },
    watch: {
        priceAuto() {
            this.result()
        },
        priceFirst() {
            this.result()
        },
        mont() {
            this.result()
        },
    },
    mounted() {
        this.result()
    },
}
</script>

<style lang="scss">
@import 'styles/main';
</style>
