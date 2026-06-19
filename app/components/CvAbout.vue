<script setup lang="ts">
import type { CvContent } from '@/types'

const { title, about } = defineProps<{
  title?: string
  about: CvContent['about']
  contact: CvContent['contact']
}>()
</script>

<template>
  <UContainer>
    <h2
      v-if="title"
      class="text-lg font-bold mb-2 border-b border-gray-200 pb-1"
    >
      {{ title }}
    </h2>
    <UCard
      class="drop-shadow-xl print:drop-shadow-none"
    >
      <div class="flex flex-col lg:flex-row print:flex-row justify-between items-center gap-4">
        <CvImage class="rounded-full" />
        <div class="flex flex-col gap-2">
          <p class="text-sm">
            {{ about }}
          </p>
          <USeparator class="my-2" />
          <CvContact :contact="contact" />
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
