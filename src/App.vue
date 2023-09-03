<script setup>
  import Navbar from './components/Navbar.vue'
</script>
<template>
  
<Navbar></Navbar>

<div class="flex h-screen">
  <div class="m-auto">
    <router-view></router-view>
  </div>
</div>

</template>


