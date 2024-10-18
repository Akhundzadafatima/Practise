import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import fatimaFile from "@/components/fatimaFile.vue";
import counterr from "@/components/counterr.vue";




const app= createApp(App)

app.component("appheader",  fatimaFile)
app.component("testComponent",  counterr)
app.mount("#app")