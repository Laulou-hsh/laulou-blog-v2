<script setup>
import NavItemDesktop from './NavItemDesktop.vue'
import NavItemMoblie from './NavItemMoblie.vue'
</script>

<template>
  <div
    class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg"
    aria-labelledby="dropdownMenuDocs"
  >
    <NavItemDesktop />
    <NavItemMoblie />
  </div>
</template>
