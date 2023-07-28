<script setup>
import {ref} from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
})

const mdvalue = ref('123456')
</script>

<template>
  <div class="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
    <div class="container border-bottom">
      <div class="row justify-space-between py-2">
        <div class="col-lg-3 me-auto">
          <p class="lead text-dark pt-1 mb-0">{{ props.title }}</p>
        </div>
      </div>
    </div>
    <div class="tab-content tab-space">
      <div class="tab-pane active p-2" :id="`preview-${props.id}`">
        <div class="overflow-auto" :class="`${props.height && `height-${props.height}`}`">
          <mavon-editor
            ref="md"
            v-model="mdvalue"
            codeStyle="vs2015"
            :editable="false"
            :toolbarsFlag="false"
            :subfield="false"
            defaultOpen="preview"
          ></mavon-editor>
        </div>
      </div>
    </div>
  </div>
</template>
