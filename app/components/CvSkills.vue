<script setup lang="ts">
import type { CvContent } from '@/types'

const { skills, title } = defineProps<{
  skills: CvContent['skills']
  title: string
}>()
</script>

<template>
  <h2 class="text-lg font-bold mb-2 border-b border-gray-200 pb-1">
    {{ title }}
  </h2>
  <ul class="list-disc list-inside">
    <li
      v-for="(skill, index) in skills"
      :key="index"
      class="flex gap-2"
    >
      <span>{{ skill.name }}</span> <CVSkillCategoryBadge
        v-if="skill.category"
        :category="skill.category"
      /> <CVSkillLevelBadge
        v-if="skill.level"
        :level="skill.level"
      />
    </li>
  </ul>
</template>
