<template>
  <div class="book-page">
    <h2 class="page-title">Sách đã xuất bản - Nguyễn Xuân Nhĩ</h2>
    <div class="book-list">
      <div v-for="(book, index) in books" :key="index" class="book-item">
        <router-link :to="`/books/${index + 1}`" class="book-cover-link">
          <div class="book-cover">
            <img :src="book.coverImage" alt="Book cover" class="cover-image" />
          </div>
        </router-link>
        <p class="book-title">{{ book.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Book data
import '@/styles/books.css';  // Importing the styles for the book page

const books = [
  { title: 'Book 1', coverImage: '/assets/placeholder.jpg' },
  { title: 'Book 2', coverImage: '/assets/placeholder.jpg' },
  { title: 'Book 3', coverImage: '/assets/placeholder.jpg' },
  { title: 'Book 4', coverImage: '/assets/placeholder.jpg' },
  { title: 'Book 5', coverImage: '/assets/placeholder.jpg' },
  { title: 'Book 6', coverImage: '/assets/placeholder.jpg' },
  { title: 'Book 7', coverImage: '/assets/placeholder.jpg' }
];
</script>
