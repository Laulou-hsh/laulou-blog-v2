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
    default: () => [],
  },
})
</script>
<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2022137351号-1</a>
            <p class="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright © {{ new Date().getFullYear() }} Laulou.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
