import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import './style.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(MotionPlugin);
app.use(router);
app.mount('#app');
