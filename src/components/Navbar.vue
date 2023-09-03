<script setup>
  import Routerlink from './Routerlink.vue'
</script>

<template>
  <nav>
    <ul class="flex flex-row">
      <li>
        <!-- <router-link to="/home" class="mx-2 font-semibold">Home</router-link> -->
        <Routerlink to="/home" name="Home"></Routerlink>
      </li>
      <li>
        <!-- <router-link to="/upload" class="mx-2 font-semibold">Upload</router-link> -->
        <Routerlink to="/upload" name="Upload"></Routerlink>
      </li>
    </ul>
  </nav>
</template>