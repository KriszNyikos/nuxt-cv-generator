<script setup lang="ts">
import type { CvContent } from '@/types'
import type { NavigationMenuItem } from '@nuxt/ui'

const props = defineProps<{ name: string, jobTitle: string, contact: CvContent['contact'], pdfRoute: string }>()
const items = computed<NavigationMenuItem[]>(() => [
  { label: 'Github', to: props.contact.github, target: '_blank', icon: 'i-simple-icons-github' },
  { label: 'Linkedin', to: props.contact.linkedin, target: '_blank', icon: 'i-simple-icons-linkedin' },
  { label: 'Download the CV in PDF format', to: props.pdfRoute, target: '_blank', icon: 'material-symbols:download-rounded' }
])
</script>

<template>
  <UHeader
    :ui="{
      root: 'border-none bg-transparent',
      toggle: 'lg:hidden print:hidden'
    }"
    mode="slideover"
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
      <div class="hidden lg:flex print:flex items-center gap-1">
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
        <UButton
          color="neutral"
          variant="ghost"
          :href="props.pdfRoute"
          target="_blank"
          icon="material-symbols:download-rounded"
          aria-label="Download the CV in PDF format"
        />
      </div>
    </template>

    <template
      #body
    >
      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />
    </template>
  </UHeader>
</template>
