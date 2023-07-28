<script setup>
import {RouterLink} from 'vue-router'
import downArrow from '@/assets/img/down-arrow.svg'
</script>

<template>
  <div class="d-none d-lg-block">
    <ul class="list-group">
      <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
        <a class="dropdown-item py-2 ps-3 border-radius-md">
          <div class="d-flex">
            <div class="w-100 d-flex align-items-center justify-content-between">
              <div>
                <h6
                  class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                >
                  Page Sections
                </h6>
                <span class="text-sm">See all sections</span>
              </div>
              <img :src="downArrow" alt="down-arrow" class="arrow" />
            </div>
          </div>
        </a>
        <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
          <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{name: 'articles-test', query: {id: 1}}">
            Articles
          </RouterLink>
        </div>
      </li>
    </ul>
  </div>
</template>
