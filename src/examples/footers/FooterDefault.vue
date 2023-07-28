<script setup>
import logoDark from '@/assets/img/logo-ct-dark.png'
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: '',
    default: () => ({
      name: 'Material Kit 2',
      logo: logoDark,
      route: '/',
    }),
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: '<i class="fab fa-twitter text-lg opacity-8"></i>',
        link: 'https://twitter.com/creativetim',
      },
      {
        icon: '<i class="fab fa-github text-lg opacity-8"></i>',
        link: 'https://github.com/creativetimofficial',
      },
    ],
  },
})
</script>
<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright © {{ new Date().getFullYear() }} Laulou.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
