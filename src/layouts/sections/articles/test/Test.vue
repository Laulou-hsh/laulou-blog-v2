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

<template>
  <BaseLayout title="Test01" :breadcrumb="[{label: 'Article', route: '#'}, {label: 'Test'}]">
    <ArticleView title="Test 1" :id="props.id"></ArticleView>
  </BaseLayout>
</template>
