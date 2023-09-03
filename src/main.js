// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import './index.css'
import Routes from "./routes.js"

const router = createRouter({
    history: createWebHistory(),
    routes: Routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
//createApp(App).mount('#app')
