/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import "@/assets/bootstrap/css/bootstrap.min.css"
import "@/assets/scss/styles.scss"
import "@/assets/scss/classes.scss"
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
