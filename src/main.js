import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const app = createApp(App)

app.use(PrimeVue)
    .component('Slider', Slider)
    .component('InputNumber', InputNumber)
    .mount('#app')
