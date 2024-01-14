<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBar from './components/NavBar.vue'
import sideBar from './components/SideBar.vue'
import overlayPage from './components/Overlay.vue';
import menuBar from './components/MenuBar.vue';
</script>

<template>
  <nav-bar></nav-bar>
  <side-bar></side-bar>
  <overlay-page></overlay-page>
  <menu-bar></menu-bar>
</template>

