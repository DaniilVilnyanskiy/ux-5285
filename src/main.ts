import { createApp } from 'vue';
import './style.css';
import "bootstrap/dist/css/bootstrap.css";
import { store, key } from './store'

import App from './App.vue';
import router from "./router";

const app = createApp(App);
app.use(store, key);
app.use(router);
app.mount('#app');

// TODO: To using bootstrap js you need npm i popper js
// import "bootstrap/dist/js/bootstrap.js";
