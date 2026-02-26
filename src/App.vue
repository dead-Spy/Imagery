<template>
  <div class="min-h-screen bg-brand-cream font-sans">
    <navbar-element></navbar-element>
    <home-view></home-view>
    <footer-element></footer-element>
  </div>
</template>

<script>
import NavbarElement from '@/components/NavbarElement.vue';
import FooterElement from '@/components/FooterElement.vue';
import HomeView from '@/HomeView.vue';

export default {
  components: {
    HomeView,
    FooterElement,
    NavbarElement
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

:root {
  --font-display: 'Playfair Display', serif;
  --font-sans: 'Montserrat', sans-serif;
}

body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F5E6E6; 
}

.font-display {
  font-family: var(--font-display);
}

.font-sans {
  font-family: var(--font-sans);
}

html {
  scroll-behavior: smooth;
}
</style>