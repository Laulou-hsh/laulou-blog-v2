<script setup>
import MaterialAvatar from '@/components/MaterialAvatar.vue'
import profilePic from '@/assets/img/Laulou.png'
import rightArrow from '@/assets/img/right-arrow.svg'

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
              </div>
              <div class="text-lg mb-0">
                <p>这颗星球，从未出现无法跨越的寒冬，但冰雪消融的那一天，你却不在暖春之中。</p>
                <p>我们以灵魂为燃料，高举生命的火把，只为了融化这片不可跨越的寒冬。</p>
                <p>
                  寒冬之所以可以被跨越，是因为有人燃烧自己的灵魂去融化冰雪，纵然这火焰微薄又脆弱，但它足以点燃希望的引线！
                </p>
                <a href="https://github.com/Laulou-hsh" class="text-danger move-right"
                  >关于我
                  <img :src="rightArrow" class="rightArrow text-sm ms-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.move-right .rightArrow{
  transition: all 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3);
}
.move-right:hover .rightArrow, .icon-move-right:focus .rightArrow {
  transform: translateX(5px);
}
</style>