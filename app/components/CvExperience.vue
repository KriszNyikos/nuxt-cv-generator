<script setup lang="ts">
import type { CvContent } from '@/types'

const { experience } = defineProps<{
  experience: CvContent['experience']
  title: string
}>()
</script>

<template>
  <h2 class="text-lg font-bold mb-2 border-b border-gray-200 pb-1">
    {{ title }}
  </h2>
  <div v-if="Array.isArray(experience)">
    <article
      v-for="(job, idx) in experience"
      :key="idx"
      class="mb-4"
    >
      <h3 class="font-bold">
        {{ job.position }} — <span class="font-medium text-muted">{{ job.company }}</span>
      </h3>
      <div class="text-sm text-muted">
        {{ job.startDate }} — {{ job.endDate }}
      </div>
      <p class="my-1">
        {{ job.description }}
      </p>
      <div
        v-if="job.technologies && job.technologies.length"
        class="text-sm text-muted"
      >
        Technologies:
        <div class="flex gap-2">
          <UBadge
            v-for="(tech, index) in job.technologies"
            :key="index"
            variant="subtle"
            color="neutral"
            size="md"
          >
            {{ tech }}
          </UBadge>
        </div>
      </div>
    </article>
  </div>
</template>
