<script setup>
import {RouterLink} from 'vue-router'
import {ref, watch} from 'vue'
import {useWindowsWidth} from '../../assets/js/useWindowsWidth'

// components
import Title from './Title.vue'
import Github from './Github.vue'
import NavbarDropdownMenu from './NavbarDropdownMenu.vue'
import NavItem from './NavItem.vue'

// images
import ArrDark from '@/assets/img/down-arrow-dark.svg'
// import downArrow from '@/assets/img/down-arrow.svg'
import DownArrWhite from '@/assets/img/down-arrow-white.svg'
import Dashboard from '@/assets/img/ic_gallery_collage.svg'
import File from '@/assets/img/ic_public_file_filled.svg'
import Article from '@/assets/img/ic_public_drawer_filled.svg'

const props = defineProps({
  transparent: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
  ariaExpanded: {
    type: Boolean,
    default: false,
  },
})

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark
  } else if (props.transparent) {
    return DownArrWhite
  } else {
    return ArrDark
  }
}

// set text color
const getTextColor = () => {
  let color
  if (props.transparent && textDark.value) {
    color = 'text-dark'
  } else if (props.transparent) {
    color = 'text-white'
  } else {
    color = 'text-dark'
  }

  return color
}

// set nav color on mobile && desktop

let textDark = ref(props.darkText)
const {type} = useWindowsWidth()

if (type.value === 'mobile') {
  textDark.value = true
} else if (type.value === 'desktop' && textDark.value == false) {
  textDark.value = false
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === 'mobile') {
      textDark.value = true
    } else {
      textDark.value = false
    }
  }
)
</script>
<template>
  <!-- Start Navbar -->
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3': props.transparent,
      'my-1 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute': props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
    }"
  >
    <div :class="props.transparent || props.light || props.dark ? 'container' : 'container-fluid px-0'">
      <Title :dark="props.dark" :transparent="props.transparent" />

      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        :aria-expanded="ariaExpanded"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuPages"
              data-bs-toggle="dropdown"
              :aria-expanded="ariaExpanded"
            >
              <img :src="Dashboard" class="material-icons opacity-6 me-2 text-md" :class="getTextColor()" />
              页面
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div
              class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                        关于
                      </div>
                      <RouterLink :to="{name: 'author'}" class="dropdown-item border-radius-md">
                        <span>作者</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0">主页</div>
                <RouterLink :to="{name: 'author'}" class="dropdown-item border-radius-md">
                  <span>作者</span>
                </RouterLink>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuBlocks"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img :src="File" class="material-icons opacity-6 me-2 text-md" :class="getTextColor()" />
              文章
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <NavbarDropdownMenu />
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuDocs"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img :src="Article" class="material-icons opacity-6 me-2 text-md" :class="getTextColor()" />
              原著文档
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <NavItem />
          </li>
          <!-- Github repo -->
          <Github :transparent="props.transparent" />
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
