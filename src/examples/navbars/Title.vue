<script setup>
import {ref, watch} from 'vue'
import {RouterLink} from 'vue-router'
import {useWindowsWidth} from '../../assets/js/useWindowsWidth'

const props = defineProps({
  transparent: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
})

const desktop = ' d-none d-md-block font-weight-bolder ms-sm-3'
const mobile = ' d-block d-md-none'

let textDark = ref(props.darkText)
let deviceStyle = ref('')

const {type} = useWindowsWidth()
if (type.value === 'mobile') {
  textDark.value = true
  deviceStyle.value = mobile
} else if (type.value === 'desktop' && !textDark.value) {
  textDark.value = false
  deviceStyle.value = desktop
}

const desktopText = (props.transparent && textDark.value) || !props.transparent ? ' text-dark' : ' text-white'
const mobileText = props.transparent || props.dark ? ' text-white' : ' font-weight-bolder ms-sm-3'

watch(
  () => type.value,
  (newValue) => {
    if (newValue === 'mobile') {
      textDark.value = true
      deviceStyle.value = mobile
    } else {
      textDark.value = false
      deviceStyle.value = desktop
    }
  }
)
</script>

<template>
  <div>
    <RouterLink
      class="navbar-brand"
      :class="[deviceStyle, textDark ? mobileText : desktopText]"
      to="/"
      rel="tooltip"
      title="Laulou"
      data-placement="bottom"
    >
      Laulou
    </RouterLink>
  </div>
</template>
