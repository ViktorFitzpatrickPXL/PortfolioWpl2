import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useProjectContentStore = defineStore('projectContent', () => {
  const projectContent = ref([
    {
      slug: 'project-1',
      title: 'Portfolio Website',
      summary:
        'Een moderne portfolio-website met scroll-navigatie, modal-interacties en een duidelijke visuele stijl.',
      sections: [
        {
          heading: 'Beschrijving',
          body: 'Dit project is mijn portfolio-website en bundelt mijn vaardigheden in webdesign en development. De focus lag op een duidelijke presentatie van mijn werk, een sterke visuele identiteit en een vlotte gebruikservaring.',
        },
        {
          heading: 'Aanpak',
          body: 'Ik bouwde de site met Vue, gebruikte componenten om alles overzichtelijk te houden en zorgde ervoor dat projecten in een modal en detailpagina getoond kunnen worden.',
        },
      ],
      detailIntro:
        'De portfolio-website toont mijn stijl, mijn projecten en de manier waarop ik design en code combineer.',
      detailBody:
        'Naast de visuele opmaak bevat dit project ook een duidelijke structuur, interactieve projectkaarten en een aparte detailpagina voor uitgebreidere informatie.',
    },
    {
      slug: 'project-2',
      title: 'Mobiele App',
      summary:
        'Een persoonlijk app-concept met focus op intuïtieve interacties, snelheid en een heldere interface.',
      sections: [
        {
          heading: 'Beschrijving',
          body: 'Dit project verkent hoe ik digitale producten kan ontwerpen en structureren voor mobiel gebruik.',
        },
      ],
      detailIntro: 'Een experimenteel project rond mobiele UX en interface-design.',
      detailBody:
        'De nadruk lag op gebruiksgemak, prototyping en het itereren van het ontwerp op basis van feedback.',
    },
    {
      slug: 'project-3',
      title: 'E-commerce Platform',
      summary:
        'Een schoolproject waarin productbeheer, filtering en een admin-achtige structuur centraal staan.',
      sections: [
        {
          heading: 'Beschrijving',
          body: 'Dit project onderzocht hoe een grotere webapplicatie modulair opgebouwd kan worden.',
        },
      ],
      detailIntro: 'Een uitgebreid project dat focust op schaalbare webstructuren.',
      detailBody:
        'Ik werkte hier rond complexere data-structuren, navigatie en een meer complete gebruikersflow.',
    },
  ])

  const contentBySlug = computed(() => {
    return projectContent.value.reduce((accumulator, item) => {
      accumulator[item.slug] = item
      return accumulator
    }, {})
  })

  function getContent(slug) {
    return contentBySlug.value[slug] ?? null
  }

  return { projectContent, contentBySlug, getContent }
})
