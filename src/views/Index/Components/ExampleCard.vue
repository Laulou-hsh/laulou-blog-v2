<script setup>
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'

// tooltip
import setTooltip from '@/assets/js/tooltip'

// store
import {useAppStore} from '@/stores'

const router = useRouter()
const store = useAppStore()

const props = defineProps({
  route: {
    type: String,
    required: true,
  },
  params: {
    type: Object,
    default: () => ({}),
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
})

function generateLink(route, query) {
  const {href} = router.resolve({
    name: route,
    query: query,
  })
  return href
}

onMounted(() => {
  setTooltip(store.bootstrap)
  generateLink()
})
</script>
<script>
export default {
  inheritAttrs: false,
}
</script>
<template>
  <RouterLink :to="generateLink(props.route, props.params)">
    <div
      class="card move-on-hover"
      v-bind="$attrs"
      :data-bs-toggle="'tooltip'"
      :data-bs-placement="'top'"
      :title="null"
    >
      <img class="w-100" :src="props.image" :alt="props.title" loading="lazy" decoding="async" />
    </div>
    <div class="mt-2 ms-2">
      <h6 class="mb-0">{{ props.title }}</h6>
      <p class="text-secondary text-sm font-weight-normal">
        {{ props.subtitle }}
      </p>
    </div>
  </RouterLink>
</template>
