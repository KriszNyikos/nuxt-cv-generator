<script setup lang="ts">
import type { CvSkillsLevel } from '@/types'
import { SkillLevelColor } from '@/constants'

const { level } = defineProps<{
  level: CvSkillsLevel | string
}>()
</script>

<template>
  <UBadge
    :color="SkillLevelColor[level as CvSkillsLevel] || 'neutral'"
    variant="subtle"
    size="sm"
  >
    {{ level.toLowerCase() }}
  </UBadge>
</template>
