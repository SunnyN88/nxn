<template>
  <div id="app">
    <!-- Navigation Menu -->
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/books">Books</router-link></li>
        <li><router-link to="/poems">Poems</router-link></li>
        <li><router-link to="/music">Music</router-link></li>
      </ul>
    </nav>

    <!-- The router view where your page content will be displayed -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>