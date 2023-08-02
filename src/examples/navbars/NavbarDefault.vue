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
              <svg width="16" height="16" viewBox="0 0 24 24" class="material-icons opacity-6 me-2 text-md">
                <path
                  d="M8,12 C9.65685425,12 11,13.3431458 11,15 L11,19 C11,20.6568542 9.65685425,22 8,22 L5,22 C3.34314575,22 2,20.6568542 2,19 L2,15 C2,13.3431458 3.34314575,12 5,12 L8,12 Z M19,2 C20.6568542,2 22,3.34314575 22,5 L22,19 C22,20.6568542 20.6568542,22 19,22 L16,22 C14.3431458,22 13,20.6568542 13,19 L13,5 C13,3.34314575 14.3431458,2 16,2 L19,2 Z M8,13.5 L5,13.5 C4.22030388,13.5 3.57955132,14.0948881 3.50686658,14.85554 L3.5,15 L3.5,19 C3.5,19.7796961 4.09488808,20.4204487 4.85553999,20.4931334 L5,20.5 L8,20.5 C8.77969612,20.5 9.42044868,19.9051119 9.49313342,19.14446 L9.5,19 L9.5,15 C9.5,14.2203039 8.90511192,13.5795513 8.14446001,13.5068666 L8,13.5 Z M19,3.5 L16,3.5 C15.2203039,3.5 14.5795513,4.09488808 14.5068666,4.85553999 L14.5,5 L14.5,19 C14.5,19.7796961 15.0948881,20.4204487 15.85554,20.4931334 L16,20.5 L19,20.5 C19.7796961,20.5 20.4204487,19.9051119 20.4931334,19.14446 L20.5,19 L20.5,5 C20.5,4.22030388 19.9051119,3.57955132 19.14446,3.50686658 L19,3.5 Z M8,2 C9.65685425,2 11,3.34314575 11,5 L11,7 C11,8.65685425 9.65685425,10 8,10 L5,10 C3.34314575,10 2,8.65685425 2,7 L2,5 C2,3.34314575 3.34314575,2 5,2 L8,2 Z M8,3.5 L5,3.5 C4.22030388,3.5 3.57955132,4.09488808 3.50686658,4.85553999 L3.5,5 L3.5,7 C3.5,7.77969612 4.09488808,8.42044868 4.85553999,8.49313342 L5,8.5 L8,8.5 C8.77969612,8.5 9.42044868,7.90511192 9.49313342,7.14446001 L9.5,7 L9.5,5 C9.5,4.22030388 8.90511192,3.57955132 8.14446001,3.50686658 L8,3.5 Z"
                  id="__形状结合"
                  :fill="(transparent && '#fff') || '#344767'"
                />
              </svg>
              页面
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div
              class="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0">
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
                <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">主页</div>
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
              <svg width="16" height="16" viewBox="0 0 24 24" class="material-icons opacity-6 me-2 text-md">
                <path
                  d="M14.763,0.999772016 L21,7.23477202 L21,19 C21,21.209139 19.209139,23 17,23 L7,23 C4.790861,23 3,21.209139 3,19 L3,5 C3,2.790861 4.790861,1 7,1 L14.763,0.999772016 Z M16.5,14.75 L7.5,14.75 C7.08578644,14.75 6.75,15.0857864 6.75,15.5 C6.75,15.9142136 7.08578644,16.25 7.5,16.25 L7.5,16.25 L16.5,16.25 C16.9142136,16.25 17.25,15.9142136 17.25,15.5 C17.25,15.0857864 16.9142136,14.75 16.5,14.75 L16.5,14.75 Z M11.5,10.5 L7.5,10.5 C7.08578644,10.5 6.75,10.8357864 6.75,11.25 C6.75,11.6642136 7.08578644,12 7.5,12 L7.5,12 L11.5,12 C11.9142136,12 12.25,11.6642136 12.25,11.25 C12.25,10.8357864 11.9142136,10.5 11.5,10.5 L11.5,10.5 Z M13.75,2.5 L13.75,5.5 C13.75,6.88071187 14.8692881,8 16.25,8 L16.25,8 L19.25,8 L13.75,2.5 Z"
                  :fill="(transparent && '#fff') || '#344767'"
                ></path>
              </svg>
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
              <svg width="16" height="16" viewBox="0 0 24 24" class="material-icons opacity-6 me-2 text-md">
                <path
                  d="M3,4.5 L21,4.5 C21.5522847,4.5 22,4.94771525 22,5.5 C22,6.05228475 21.5522847,6.5 21,6.5 L3,6.5 C2.44771525,6.5 2,6.05228475 2,5.5 C2,4.94771525 2.44771525,4.5 3,4.5 Z M3,11 L21,11 C21.5522847,11 22,11.4477153 22,12 C22,12.5522847 21.5522847,13 21,13 L3,13 C2.44771525,13 2,12.5522847 2,12 C2,11.4477153 2.44771525,11 3,11 Z M3,17.5 L21,17.5 C21.5522847,17.5 22,17.9477153 22,18.5 C22,19.0522847 21.5522847,19.5 21,19.5 L3,19.5 C2.44771525,19.5 2,19.0522847 2,18.5 C2,17.9477153 2.44771525,17.5 3,17.5 Z"
                  :fill="(transparent && '#fff') || '#344767'"
                />
              </svg>
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
