import { createApp } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import VCalendar from 'v-calendar';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use(VueApexCharts)
  .use(VCalendar, {})
  .mount('#app');
