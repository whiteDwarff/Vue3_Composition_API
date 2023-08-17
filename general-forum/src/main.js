import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import 'bootstrap/dist/js/bootstrap';
import App from './App.vue';

const app = createApp(App);
app.provide('app-message', 'app message 입니다.');
// 모든 컴포넌트에서 접근가능
app.config.globalProperties.msg = 'hello';
app.mount('#app');
