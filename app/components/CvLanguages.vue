<script setup lang="ts">
import type { CvContent } from '@/types'

const { languages, title } = defineProps<{
  languages: CvContent['languages']
  title: string
}>()
</script>

<template>
  <h2 class="text-lg font-bold border-b border-gray-200 pb-1">
    {{ title }}
  </h2>
  <ul class="list-none list-inside">
    <li
      v-for="(language, index) in languages"
      :key="index"
    >
      {{ language }}
    </li>
  </ul>
</template>
