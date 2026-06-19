<script setup lang="ts">
import type { CvContent } from '@/types'

const { experience } = defineProps<{
  experience: CvContent['experience']
  title: string
}>()
</script>

<template>
  <UContainer>
    <h2 class="text-md font-bold mb-2">
      {{ title }}
    </h2>
    <UCard class="drop-shadow-xl print:drop-shadow-none" v-if="Array.isArray(experience)">
      <article
        v-for="(job, idx) in experience"
        :key="idx"
        class="mb-4"
      >
        <h3 class="text-sm font-bold">
          {{ job.position }} — <span class="font-medium text-muted">{{ job.company }}</span>
        </h3>
        <div class="text-sm text-muted">
          {{ job.startDate }} — {{ job.endDate }}
        </div>
        <p class="my-1 text-sm">
          {{ job.description }}
        </p>
        <div
          v-if="job.technologies && job.technologies.length"
          class="text-sm text-muted"
        >
          <div class="flex gap-2">
            <UBadge
              v-for="(tech, index) in job.technologies"
              :key="index"
              variant="subtle"
              color="neutral"
              size="sm"
            >
              {{ tech }}
            </UBadge>
          </div>
        </div>
      </article>
    </UCard>
  </UContainer>
</template>
