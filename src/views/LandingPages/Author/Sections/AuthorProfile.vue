<script setup>
import {onMounted} from 'vue'

//Vue Material Kit 2 components
import MaterialAvatar from '@/components/MaterialAvatar.vue'
// import MaterialButton from '@/components/MaterialButton.vue'

// image
import profilePic from '@/assets/img/Laulou.png'

// material-input
import setMaterialInput from '@/assets/js/material-input'
onMounted(() => {
  setMaterialInput()
})
</script>
<template>
  <section class="py-sm-7 py-5 position-relative">
    <div class="container">
      <div class="row">
        <div class="col-12 mx-auto">
          <div class="mt-n8 mt-md-n9 text-center">
            <div class="blur-shadow-avatar">
              <MaterialAvatar
                size="xxl"
                class="shadow-xl position-relative z-index-2"
                :image="profilePic"
                alt="Avatar"
              />
            </div>
          </div>
          <div class="row py-7">
            <div class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
              <div class="d-flex justify-content-center align-items-center mb-2">
                <h3 class="mb-0">捞佬 Laulou</h3>
                <!-- <div class="d-block">
                  <MaterialButton class="text-nowrap mb-0" variant="outline" color="success" size="sm"
                    >关注</MaterialButton
                  >
                </div> -->
              </div>
              <!-- <div class="row mb-4">
                <div class="col-auto">
                  <span class="h6 me-1">0</span>
                  <span>帖子</span>
                </div>
                <div class="col-auto">
                  <span class="h6 me-1">0</span>
                  <span>粉丝</span>
                </div>
                <div class="col-auto">
                  <span class="h6 me-1">0</span>
                  <span>关注</span>
                </div>
              </div> -->
              <div class="text-lg mb-0">
                <p>这颗星球，从未出现无法跨越的寒冬，但冰雪消融的那一天，你却不在暖春之中。</p>
                <p>我们以灵魂为燃料，高举生命的火把，只为了融化这片不可跨越的寒冬。</p>
                <p>
                  寒冬之所以可以被跨越，是因为有人燃烧自己的灵魂去融化冰雪，纵然这火焰微薄又脆弱，但它足以点燃希望的引线！
                </p>
                <a href="https://github.com/Laulou-hsh" class="text-success icon-move-right"
                  >关于我
                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
