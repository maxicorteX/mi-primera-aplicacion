import { createApp } from 'vue'
import { createPinia } from 'pinia' // Importamos Pinia
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

const pinia = createPinia() // Creamos el store
const app = createApp(App)
  .use(IonicVue)
  .use(pinia) // Conectamos el store a la app
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
