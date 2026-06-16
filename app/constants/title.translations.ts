export const TitleTranslations = {
  en: {
    about: 'About Me',
    skills: 'Skills',
    languages: 'Languages',
    education: 'Education',
    experience: 'Experience',
    contact: 'Contact'
  },
  hu: {
    about: 'Névjegy',
    skills: 'Készségek',
    languages: 'Nyelvek',
    education: 'Oktatás',
    experience: 'Tapasztalat',
    contact: 'Kapcsolat'
  }
} as const satisfies Record<string, Record<string, string>>
