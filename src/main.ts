import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/_styles.scss'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VFileUpload } from 'vuetify/labs/VFileUpload'

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'system',
  },
})

app.component('Header', Header);
app.component('Footer', Footer);
app.component('VFileUpload', VFileUpload);

app
	.use(router)
	.use(vuetify)
	.mount('#app')
