<template>
  <div class="poem-page">
    <h2 class="page-title">Thơ đã xuất bản - Nguyễn Xuân Nhĩ</h2>
    <div class="poem-list">
      <div v-for="(poem, index) in poems" :key="index" class="poem-item">
        <router-link :to="`/poems/${index + 1}`" class="poem-cover-link">
          <div class="poem-cover">
            <img :src="poem.coverImage" alt="poem cover" class="cover-image" />
          </div>
        </router-link>
        <p class="poem-title">{{ poem.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// poem data
import '@/styles/poems.css';  // Importing the styles for the poem page

const poems = [
  { title: 'poem 1', coverImage: '/assets/placeholder.jpg' },
  { title: 'poem 2', coverImage: '/assets/placeholder.jpg' },
  { title: 'poem 3', coverImage: '/assets/placeholder.jpg' },
  { title: 'poem 4', coverImage: '/assets/placeholder.jpg' },
  { title: 'poem 5', coverImage: '/assets/placeholder.jpg' },
  { title: 'poem 6', coverImage: '/assets/placeholder.jpg' },
  { title: 'poem 7', coverImage: '/assets/placeholder.jpg' }
];
</script>
