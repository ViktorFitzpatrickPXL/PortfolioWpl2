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
      slug: 'Opleidingsproject',
      title: '',
      imageSrc: '/images/projecten/project1.jpg',
      alt: 'Project 1',
      shortDescription:
        'Dit is een korte beschrijving van het eerste project. Het toont mijn vaardigheden in X en Y.',
      longDescription: `Dit is een uitgebreide beschrijving van Project 1. Dit project was een geweldige kans om mijn vaardigheden in webontwikkeling en design te tonen.

Doelstelling:
Het doel was om een responsieve portfolio-website te bouwen die mijn vaardigheden, projecten en ervaring op een professionele manier presenteert. De website moest modern, interactief en gemakkelijk te navigeren zijn.

Uitdagingen:
- Het integreren van Vue Router voor navigatie
- Het implementeren van dynamische projectfiltering
- Het zorgen voor responsieve design op alle apparaten
- Het optimaliseren van afbeeldingen en laadtijden

Resultaten:
- Volledige, werkende portfolio-website
- Scroll-gebaseerde navigatie met actieve links
- Interactieve projectmodal met gedetailleerde informatie
- Mooie animaties en hover-effecten
- Volledig responsief design`,
      technologies: ['Vue 3', 'JavaScript', 'CSS3', 'Vite', 'Vue Router'],
      features: [
        'Interactieve modal voor projectdetails',
        'Dynamische projectfiltering op categorie',
        'Sticky navigatie met scrollspy',
        'Responsieve layouts',
        'Smooth scroll-animaties',
        'Donker design met accentkleuren',
      ],
      category: 'Opleiding',
      url: '',
    },
    {
      slug: 'project-2',
      title: 'Project 2 - Mobiele App',
      imageSrc: '/images/projecten/project2.jpg',
      alt: 'Project 2',
      shortDescription:
        'Dit is een korte beschrijving van het tweede project. De focus lag hier op Z.',
      longDescription: `Dit was een persoonlijk project waar ik mijn creativiteit kon uitleven.

Doelstelling:
Het bouwen van een interactieve mobiele applicatie die gebruikers helpt bij hun dagelijks leven.

Aanpak:
- Gebruikersonderzoek en wireframing
- Iteratief ontwerp en testen
- Implementatie met native technologieën
- Feedback verzameling en verbeteringen

Highlights:
- Intuïtieve gebruikersinterface
- Snelle en responsieve interacties
- Push-notificaties en real-time updates
- Offline functionaliteit`,
      technologies: ['React Native', 'JavaScript', 'Firebase', 'Redux'],
      features: [
        'Push notificaties',
        'Real-time synchronisatie',
        'Offline modus',
        'Donker/Licht thema',
        'Geolocation integratie',
      ],
      category: 'Persoonlijk',
      url: '',
    },
    {
      slug: 'project-3',
      title: 'Project 3 - E-commerce Platform',
      imageSrc: '/images/projecten/project1.jpg',
      alt: 'Project 3',
      shortDescription: 'Nog een project van de opleiding.',
      longDescription: `Dit schoolproject was een volledige e-commerce oplossing waarbij ik alle aspecten van modern webontwikkeling toepaste.

Scope:
- Productcatalogus met filteren en zoeken
- Winkelwagen en checkout systeem
- Gebruikersaccounts en bestellingshistorie
- Admin dashboard voor beheer
- Payment integratie

Technische implementatie:
- Frontend gebouwd met Vue 3 en TypeScript
- Backend REST API met Node.js
- Database ontwerp met PostgreSQL
- Authentication met JWT tokens

Geleerde lessen:
- Complexe state management
- Database relaties en queries
- Security best practices
- API design patterns`,
      technologies: ['Vue 3', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Stripe API'],
      features: [
        'Geavanceerde productfiltering',
        'Secure payment processing',
        'Order tracking',
        'Admin dashboard',
        'Email notificaties',
        'Wishlist functionaliteit',
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
