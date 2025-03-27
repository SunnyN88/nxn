import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import BookPage from '@/views/BookPage.vue';
import PoemPage from '@/views/PoemPage.vue';
import MusicPage from '@/views/MusicPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/books', component: BookPage },
  { path: '/poems', component: PoemPage },
  { path: '/music', component: MusicPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,  // make sure the routes are passed here
});

export default router;
