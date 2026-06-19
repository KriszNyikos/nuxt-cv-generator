<script setup lang="ts">
import type { CvContent } from '@/types'

const { skills, title } = defineProps<{
  skills: CvContent['skills']
  title: string
}>()

const mappedSkills = mapSkillsToCategories(skills)
</script>

<template>
  <UContainer>
    <h2 class="text-md font-bold mb-2">
      {{ title }}
    </h2>
    <UCard
      v-if="skills && skills.length"
      class="drop-shadow-xl print:drop-shadow-none"
    >
      <div class="flex flex-col flex-wrap gap-2 text-md">
        <div
          v-for="([category, items], categoryIndex) in Object.entries(mappedSkills)"
          :key="categoryIndex"
          class="flex flex-col gap-2 justify-start print:justify-start items-start"
        >
          <div class="flex flex-col gap-2 lg:grid lg:grid-cols-[80px_1fr] w-full">
            <div class="font-bold text-sm text-muted">
              {{ category }}
            </div>
            <div class="flex flex-wrap gap-2 text-sm ">
              <div
                v-for="(skill, skillIndex) in items"
                :key="skillIndex"
                class="inline-flex gap-2 items-center whitespace-nowrap"
              >
                <span class="min-w-0 truncate">{{ skill.name }}</span>
                <CVSkillLevelBadge
                  v-if="skill.level"
                  :level="skill.level"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
