import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCentralStorageStore = defineStore('centralstorage', () => {
  const digitalSkills = ref([
    { name: 'Adobe Illustrator', image: 'https://www.svgrepo.com/show/12710/illustrator.svg' },
    { name: 'Adobe Photoshop', image: 'https://www.svgrepo.com/show/167746/photoshop.svg' },
    { name: 'Figma', image: 'https://www.svgrepo.com/show/452202/figma.svg' },
    { name: 'JavaScript', image: 'https://www.svgrepo.com/show/29753/javascript.svg' },
    { name: 'CSS', image: 'https://www.svgrepo.com/show/21671/css.svg' },
    { name: 'HTML5', image: 'https://www.svgrepo.com/show/7866/html.svg' },
  ])

  const languageSkills = ref([
    {
      name: 'Nederlands - Moedertaal',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
    },
    {
      name: 'Engels',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg',
    },
  ])

  const workplekleren = ref([
    {
      slug: 'werkplekleren-1',
      title: 'Werkplekleren 1',
    },
    {
      slug: 'werkplekleren-2',
      title: 'Werkplekleren 2',
    },
  ])

  const historieData = ref([
    {
      year: '2006',
      imageSrc: '/images/historie/2006.jpg',
      alt: 'Kindertijd',
      text: 'In 2006 werd ik geboren in Frankrijk, in het stadje Saint-Aubin-lès-Elbeuf. Op dat moment woonde mijn mama daar in een organisatie die Emmaüs heet, een gemeenschap die mensen ondersteunt en samenbrengt rond werk en solidariteit. De eerste drie jaren van mijn leven bracht ik in Frankrijk door, omringd door een andere cultuur, taal en omgeving dan die ik later gewoon zou worden. Toch is het opvallend dat ik vandaag weinig tot geen Frans spreek. Dat roept bij mij soms de vraag op: hoe anders zou mijn leven of mijn identiteit zijn geweest als ik daar langer was gebleven of de taal wel actief had opgepikt? Ondanks dat ik me die periode niet bewust herinner, maakt het deel uit van mijn verhaal en vormt het een bijzondere start van mijn leven.',
    },
    {
      year: '2009',
      imageSrc: '/images/historie/2009.jpg',
      alt: 'Kleuterklas',
      text: 'In 2009 ben ik bij mijn oma en opa gaan wonen. Zij woonden in België, in het dorp Bekkevoort, en tot op de dag van vandaag woon ik hier nog steeds. Toen ik drie jaar oud was, verhuisde ik van Frankrijk naar België, wat een grote verandering moet zijn geweest, ook al herinner ik me daar zelf weinig van. In Bekkevoort bouwde ik stap voor stap een nieuw leven op, omringd door familie en een vertrouwde omgeving. Deze plek is uiteindelijk echt mijn thuis geworden en heeft een grote invloed gehad op wie ik vandaag ben.',
    },
    {
      year: '2018',
      imageSrc: '/images/historie/2018.jpg',
      alt: 'School Ter Beuke',
      text: 'In 2018 ben ik naar de school Ter Beuke gegaan in Kessel-Lo. In die periode is er een nieuwe directeur gekomen en werd er een volledig nieuw leerplan ingevoerd, wat de school echt heel tof maakte. In het tweede middelbaar moest ik ineens op een hele nieuwe manier les volgen, met EPICs, iPads, actieve examens, enzovoort.',
    },
    {
      year: '2021',
      imageSrc: '/images/historie/2021.jpg',
      alt: 'De Prins',
      text: 'In 2021 ben ik terechtgekomen op de school De Prins in Diest. Oorspronkelijk was ik begonnen in een kantoorgerichte richting, maar al snel kwam ik erachter dat dit niets voor mij was. Daarna heb ik de richting Publiciteit gevonden. Hier heb ik ook het grootste deel van mijn vrienden leren kennen en heb ik een echte liefde voor design en creativiteit ontwikkeld.',
    },
    {
      year: '2025',
      imageSrc: '/images/historie/2025.png',
      alt: 'PXL',
      text: 'Sinds 2025 tot op heden ben ik student aan de Hogeschool PXL in Hasselt. Ik volg de richting Digitale Vormgeving, omdat ik mij verder wil verdiepen in webdevelopment. Het extra bijleren van design is daarbij altijd een groot pluspunt.',
    },
  ])

  const projects = ref([
    {
      slug: 'werkplekleren-1',
      title: 'Werkplekleren 1',
      imageSrc: new URL('../assets/img/dashborad.png', import.meta.url).href,
      alt: 'Werkplekleren 1',
      shortDescription:
        'Een Figma-project waarin ik een CV-dashboard ontwierp met een duidelijke structuur, visuele hiërarchie en gebruiksvriendelijke indeling.',
      longDescription: `Voor Werkplekleren 1 ontwierp ik een CV-dashboard in Figma. De opdracht was om de informatie van een klassiek cv te vertalen naar een overzichtelijke digitale interface.

Aanpak:
- Informatie structureren in een dashboard-omgeving
- Eerst schetsen en wireframes uitwerken
- Daarna het volledige ontwerp afwerken in Figma

Resultaat:
- Een helder en visueel aantrekkelijk CV-dashboard
- Een ontwerp met aandacht voor hiërarchie en gebruiksgemak
- Een digitaal prototype dat mijn UI/UX-vaardigheden laat zien`,
      technologies: ['Figma', 'UI/UX Design', 'Wireframing'],
      features: [
        'CV-dashboard in Figma',
        'Overzichtelijke informatie-structuur',
        'Wireframes en schetsen',
        'Gebruiksvriendelijk eindontwerp',
      ],
      category: 'Opleiding',
      url: '',
    },
    {
      slug: 'werkplekleren-2',
      title: 'Werkplekleren 2',
      imageSrc: new URL('../assets/img/werkplekleren2.png', import.meta.url).href,
      alt: 'Werkplekleren 2',
      shortDescription:
        'Een Vue- en brandingproject rond Qern waarin ik hielp aan de website, de visuele afwerking en de technische uitwerking.',
      longDescription: `Voor Werkplekleren 2 werkte ik aan de rebranding en website van Qern. Ik onderzocht samen met het team hoe het bedrijf zich presenteerde en vertaalde dat naar een moderne digitale uitwerking.

Aanpak:
- Identiteit en positionering analyseren
- Een website bouwen met Vue.js
- De wireframes omzetten naar een functioneel geheel

Resultaat:
- Een responsive website met een verzorgde afwerking
- Een rebranding die beter aansluit bij de visie van Qern
- Een project waarin design en development samenkomen`,
      technologies: ['Vue 3', 'JavaScript', 'CSS3', 'API-koppelingen'],
      features: [
        'Rebranding van Qern',
        'Website opgebouwd in Vue',
        'Responsive afwerking',
        'Visuele en technische uitwerking',
      ],
      category: 'Opleiding',
      url: '',
    },
    {
      slug: 'vue-pokedex',
      title: 'Vue Pokedex',
      imageSrc: new URL('../assets/img/projecten/pokedex.png', import.meta.url).href,
      alt: 'Vue Pokedex',
      shortDescription:
        'Een Vue Pokedex die ik wekelijks via pull requests uitbreidde met nieuwe objectives tot het eindresultaat een volledige college Pokédex werd.',
      longDescription: `Voor dit project werkte ik in opeenvolgende stappen aan een Vue Pokedex. Elke week moest ik een pull request indienen waarin ik een concrete objective afwerkte, waardoor de functionaliteit stap voor stap werd uitgebreid.

Aanpak:
- Opleveren via wekelijkse pull requests
- Per iteratie een afgebakende objective afwerken
- Zelf werken aan dataweergave, detailpagina's en interfaceverbeteringen

Resultaat:
- Een collegewaardige Pokédex in Vue
- Duidelijke opbouw en nette structuur
- Een project dat groeide doorheen de weken en mijn vooruitgang zichtbaar maakt`,
      technologies: ['Vue 3', 'JavaScript', 'CSS3', 'Vue Router'],
      features: [
        'Wekelijkse pull requests',
        'Iteratieve oplevering per objective',
        'Pokédex-overzicht en detailweergave',
        'Individueel opgebouwde functionaliteit',
      ],
      category: 'Opleiding',
      url: '',
    },
  ])

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
      slug: 'vue-pokedex',
      title: 'Vue Pokedex',
      summary:
        'Een Vue Pokedex die ik wekelijks via pull requests uitbreidde met nieuwe objectives tot het eindresultaat een volledige college Pokédex werd.',
      sections: [
        {
          heading: 'Beschrijving',
          body: 'Dit project groeide week na week door telkens een nieuwe objective af te werken en die via pull request in te dienen. Daardoor werd de Pokédex stapsgewijs uitgebreid tot een volwaardige college-opdracht.',
        },
        {
          heading: 'Aanpak',
          body: 'Ik werkte iteratief, met duidelijke weektaken en pull requests, zodat elke verbetering controleerbaar bleef in mijn workflow.',
        },
      ],
      detailIntro: 'Een Vue Pokedex die ik opbouwde door wekelijkse objectives en pull requests.',
      detailBody:
        'Dit project toont hoe ik via een gestructureerde workflow een functionele Pokédex heb opgebouwd. De focus lag op consistente oplevering en het stap voor stap verbeteren van de applicatie.',
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

  return {
    digitalSkills,
    languageSkills,
    workplekleren,
    historieData,
    projects,
    projectContent,
    contentBySlug,
    getContent,
  }
})
