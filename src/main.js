import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Import router
import './styles/books.css';   // Import the books.css file here

createApp(App).use(router).mount('#app');  // Use router

