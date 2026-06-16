<script setup lang="ts">
import type { CvContent } from '@/types'

const props = defineProps<{ content: CvContent }>()
</script>

<template>
  <CvHeader :title="props.content.familyName + ' ' + props.content.givenName" />
  <UContainer>
    <CvAbout :about="props.content.about" />
  </UContainer>
</template>
