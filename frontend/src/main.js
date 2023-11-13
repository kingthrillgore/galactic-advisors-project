import './assets/main.css'

import { createApp } from 'vue'
import { VueShowdownPlugin } from 'vue-showdown'
import App from './App.vue'

createApp(App).mount('#app')

App.use(VueShowdownPlugin, {});