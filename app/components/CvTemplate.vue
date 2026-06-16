<script setup lang="ts">
import type { CvContent } from '@/types'
import isHuRoute from '@/composables'
import { TitleTranslations } from '@/constants'

const { content } = defineProps<{ content: CvContent }>()
const { isHu } = isHuRoute()
</script>

<template>
  <div class="max-w-[1100px] mx-auto p-4">
    <CvHeader :title="content.familyName + ' ' + content.givenName" />

    <section class="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-5 items-start">
      <aside class="flex flex-col gap-4">
        <CvImage />
        <CvAbout
          :title="isHu ? TitleTranslations.hu.about : TitleTranslations.en.about"
          :about="content.about"
        />
        <CvSkills
          :skills="content.skills"
          :title="isHu ? TitleTranslations.hu.skills : TitleTranslations.en.skills"
        />
        <CvLanguages
          :title="isHu ? TitleTranslations.hu.languages : TitleTranslations.en.languages"
          :languages="content.languages"
        />
      </aside>

      <main class="flex flex-col gap-4">
        <CvContact
          :title="isHu ? TitleTranslations.hu.contact : TitleTranslations.en.contact"
          :contact="content.contact"
        />
        <CvExperience
          :title="isHu ? TitleTranslations.hu.experience : TitleTranslations.en.experience"
          :experience="content.experience"
        />
        <CvEducation
          :title="isHu ? TitleTranslations.hu.education : TitleTranslations.en.education"
          :education="content.education"
        />
      </main>
    </section>
  </div>
</template>
