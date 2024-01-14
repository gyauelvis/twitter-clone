<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBar from './components/NavBar.vue'
import sideBar from './components/SideBar.vue'
import overlayPage from './components/Overlay.vue';
import menuBar from './components/MenuBar.vue';
</script>

<template>
  <div class="side-bar-nav">
    <side-bar></side-bar>
    <nav-bar></nav-bar>
  </div>
  <overlay-page></overlay-page>
  <menu-bar></menu-bar>
</template>

<style scoped>
.side-bar-nav{
  display: flex;
  flex-direction: row;
}

</style>

