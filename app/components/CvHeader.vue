<script setup lang="ts">
import type { CvContent } from '@/types'

const props = defineProps<{ name: string, jobTitle: string, contact: CvContent['contact'] }>()
</script>

<template>
  <UHeader
    :toggle="false"
    :ui="{
      root: 'border-none bg-transparent'
    }"
  >
    <template #left>
      <div class="flex flex-col gap-1">
        <b>{{ props.name }}</b>
        <p>{{ props.jobTitle }}</p>
      </div>
    </template>
    <template #right>
      <UColorModeButton class="print:hidden" />
      <ULink
        to="/"
        class="print:hidden"
      >EN</ULink>
      <USeparator
        orientation="vertical"
        class="print:hidden"
      />
      <ULink
        to="/hu"
        class="print:hidden"
      >HU</ULink>
      <UButton
        color="neutral"
        variant="ghost"
        :href="props.contact.github"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
      />
      <UButton
        color="neutral"
        variant="ghost"
        :href="props.contact.linkedin"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="LinkedIn"
      />
    </template>
  </UHeader>
</template>
