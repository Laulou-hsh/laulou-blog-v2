<script setup>
import {onMounted, onUnmounted} from 'vue'

//example components
import NavbarDefault from '../../examples/navbars/NavbarDefault.vue'
import DefaultFooter from '../../examples/footers/FooterDefault.vue'
import Header from '../../examples/Header.vue'

import IndexCounter from './Components/IndexCounter.vue'
import IndexExample from './Components/IndexExample.vue'
import data from './Sections/Data/designBlocksData'
// import axios from 'axios'

const pns = 'https://data.laulou.cn/images/bg9.jpg'

// axios
//   .get('https://data.laulou.cn/test-login')
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// let articlesData
// axios({
//     method: 'get',
//     url: 'https://data.laulou.cn/articles/all',
//   })
//   .then(res => {
//     articlesData = res.data
//     console.log(articlesData)
//   })
//   .catch(err => {
//     console.log(err)
//   })

//hooks
const body = document.getElementsByTagName('body')[0]
onMounted(() => {
  body.classList.add('presentation-page')
  body.classList.add('bg-gray-200')
})
onUnmounted(() => {
  body.classList.remove('presentation-page')
  body.classList.remove('bg-gray-200')
})
</script>

<template>
  <div class="position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div class="page-header min-vh-100" :style="`background-image: url(${pns})`" loading="lazy" decoding="async">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1 class="text-danger pt-3 mt-n5 me-2" :style="{display: 'inline-block '}">捞佬网</h1>
            <p class="lead text-danger px-5 mt-3" :style="{fontWeight: '500'}">
              一个普通的人，一个普通的程序员，一个普通的玩家。
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <IndexCounter />
    <IndexExample :data="data" />
  </div>
  <DefaultFooter />
</template>
