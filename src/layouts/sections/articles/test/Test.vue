<template>
  <BaseLayout :breadcrumb="[{label: '文章', route: '#'}, {label: '算法'}]">
    <ArticleView :id="props.id"></ArticleView>
  </BaseLayout>
</template>

<script setup>
import {onMounted} from 'vue'
import BaseLayout from '../../components/BaseLayout.vue'
import ArticleView from '../../components/ArticleView.vue'
import setNavPills from '@/assets/js/nav-pills'

const props = defineProps({
  id: {
    type: String || Number,
    required: true,
    default: 0,
  },
})

onMounted(() => {
  setNavPills()
})
</script>
