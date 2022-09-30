import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Slider from 'primevue/slider'
import InputText from 'primevue/inputtext'

const app = createApp(App)

app.use(PrimeVue)
    .component('Slider', Slider)
    .component('InputText', InputText)
    .mount('#app')
