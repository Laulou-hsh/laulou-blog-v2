<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="row d-lg-none mx-2">
    <div class="col-md-12">
      <div class="d-flex mb-2">
        <div class="w-100 d-flex align-items-center justify-content-between">
          <div>
            <h6
              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
            >
              Page Sections
            </h6>
          </div>
        </div>
      </div>
      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{name: 'articles-test', query: {id: 1}}">
        Articles
      </RouterLink>
    </div>
  </div>
</template>
