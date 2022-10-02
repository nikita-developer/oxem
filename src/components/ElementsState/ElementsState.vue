<template>
    <div class="elements-state">
        <div class="elements-state__title">Кнопки</div>
        <div class="elements-state__row elements-state__row--btns">
            <button class="btn">Passive</button>
            <button class="btn hover">Hover</button>
            <button class="btn active">Pressed</button>
            <button class="btn disabled">Disabled</button>
            <button class="btn loading"></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 0,
        }
    },
}
</script>

<style lang="scss" scoped>
@import 'styles/main';
</style>
