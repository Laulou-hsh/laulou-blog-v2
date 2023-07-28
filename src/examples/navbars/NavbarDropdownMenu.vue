<script setup>
import NavbarDropdownMenuDesktop from './NavbarDropdownMenuDesktop.vue'
import NavbarDropdownMenuMoblie from './NavbarDropdownMenuMoblie.vue'
</script>

<template>
  <div
    class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
    aria-labelledby="dropdownMenuBlocks"
  >
    <NavbarDropdownMenuDesktop />
    <NavbarDropdownMenuMoblie />
  </div>
</template>
