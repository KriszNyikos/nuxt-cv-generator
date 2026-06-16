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
  <div class="flex flex-col gap-1 mt-2">
    <div
      v-for="([language, level], index) in Object.entries(languages)"
      :key="index"
      class="flex justify-between items-center text-sm gap-2"
    >
      <span class="font-medium">{{ language }}</span>
      <UBadge
        variant="subtle"
        color="neutral"
        size="sm"
      >
        {{ level }}
      </UBadge>
    </div>
  </div>
</template>
