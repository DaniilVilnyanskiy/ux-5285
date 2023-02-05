import { createApp } from 'vue';
import './style.css';
import "bootstrap/dist/css/bootstrap.css";
import store from './store.js';

import App from './App.vue';
import router from "./router";


createApp(App).use(store).use(router).mount('#app')

// TODO: To using bootstrap js you need npm i popper js
// import "bootstrap/dist/js/bootstrap.js";
