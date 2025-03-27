<template>
  <div class="home-container">
    <div class="author-section">
      <img src="@/assets/author.jpg" alt="Author" class="author-photo" />
      <h1 class="author-name">Author Name</h1>
      <p class="author-intro">
        Welcome to my collection of books, poems, and music. Explore my works and immerse yourself in stories and melodies.
      </p>
    </div>

    <nav class="nav-menu">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/books" class="nav-item">Books</router-link>
      <router-link to="/poems" class="nav-item">Poems</router-link>
      <router-link to="/music" class="nav-item">Music</router-link>
    </nav>
  </div>
</template>

<script setup>
import "@/styles/home.css"; // Import styles
</script>
