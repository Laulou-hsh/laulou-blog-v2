<script setup>
import DefaultCounterCard from '../../../examples/cards/counterCards/DefaultCounterCard.vue'
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-6 position-relative">
              <DefaultCounterCard
                color="danger"
                title="技术"
                description="日常学习和记录的前端笔记"
                :count="0"
                suffix=""
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-6 position-relative">
              <DefaultCounterCard
                color="danger"
                title="书籍"
                description="读书笔记"
                :count="0"
                suffix=""
                :duration="3000"
              />
            </div>
            <!-- <div class="col-md-4">
              <DefaultCounterCard
                color="danger"
                title="Pages"
                description="Save 3-4 weeks of work when you use our pre-made pages for
                  your website"
                :count="4"
                :duration="3000"
              />
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
