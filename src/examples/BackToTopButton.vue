<template>
  <div v-show="isShow" @click="scrollToTop" class="fixed-plugin">
    <div class="px-3 py-2 fixed-plugin-button text-dark position-fixed">
      <img :src="backToTop" class="material-icons py-2" />
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import backToTop from '@/assets/img/ic_public_backtotop.svg'

const isShow = ref(false)
const scrollThreshold = 300

const handleScroll = () => {
  isShow.value = window.scrollY > scrollThreshold
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.top-button {
  bottom: 20px;
  right: 20px;
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 50%;
}
</style>
