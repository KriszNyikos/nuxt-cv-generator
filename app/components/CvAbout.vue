<script setup lang="ts">
import type { CvContent } from '@/types'

const { title, about } = defineProps<{
  title: string
  about: CvContent['about']
}>()
</script>

<template>
  <div>
    <h2 class="text-lg font-bold mb-2 border-b border-gray-200 pb-1">
      {{ title }}
    </h2>
    <p>{{ about }}</p>
  </div>
</template>
