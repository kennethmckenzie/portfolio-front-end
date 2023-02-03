import { createApp } from 'vue'
import App from './App.vue'

import './assets/tailwind.css';
import'@fortawesome/fontawesome-free/js/all';
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';

createApp(App).mount('#app')
