<script setup>
import { ref } from 'vue'
import EmbedFrame from '@/components/EmbedFrame.vue'
import pdfUrl from '@/assets/Opdracht eindreflectie WPL2_Viktor_fitzpatrick.pdf'

const showEmbed = ref(false)
const embedUrl = 'https://group11projectqern.netlify.app'

function toggleEmbed() {
  showEmbed.value = !showEmbed.value
}

function openPdf() {
  const w = window.open(pdfUrl, '_blank')
  if (w) w.opener = null
}
</script>

<template>
  <article class="workplekleren-detail">
    <h1>Werkplekleren 2</h1>
    <h3>Mijn aandeel hierin</h3>
    <p>
      Binnen dit project was ik voornamelijk betrokken bij het onderzoek naar de identiteit en
      positionering van Qern. Samen met het team analyseerde ik hoe het bedrijf zich momenteel
      presenteerde en welke verbeteringen mogelijk waren binnen de branding en digitale
      communicatie. Daarnaast was ik verantwoordelijk voor de ontwikkeling van de website. Hiervoor
      maakte ik gebruik van Vue.js. Ik zorgde ervoor dat alle uitgewerkte wireframes correct werden
      omgezet naar een volledig functionele website. Hierbij besteedde ik veel aandacht aan de
      visuele afwerking zodat het eindresultaat zo nauwkeurig mogelijk overeenkwam met het
      oorspronkelijke ontwerp van de designers. Verder werkte ik nauw samen met de
      backend-ontwikkelaars om de koppelingen met de API correct te implementeren. Dit vereiste
      regelmatig overleg en afstemming tussen verschillende teamleden. Ook zorgde ik ervoor dat de
      website volledig responsive was, zodat deze optimaal functioneerde op zowel desktop, tablet
      als mobiele apparaten.
    </p>
    <h3>Wat heb ik eruit geleerd heb</h3>
    <p>Dit project heeft mij zowel technisch als persoonlijk veel bijgebracht. Op technisch vlak heb ik mijn kennis van Vue.js aanzienlijk uitgebreid. Omdat ik vooraf nog niet veel ervaring had met dit framework, vormde het ontwikkelen van een volledige website een interessante uitdaging. Hierdoor begrijp ik nu beter hoe Vue-applicaties worden opgebouwd en onderhouden.
Daarnaast heb ik veel geleerd over het samenwerken met backend-ontwikkelaars en het werken met API-koppelingen. Het correct ophalen en verwerken van gegevens bleek soms complex, maar heeft mijn technische inzicht verder versterkt.
Ook op het vlak van teamwork heb ik belangrijke ervaring opgedaan. Ik heb geleerd om efficiënt samen te werken met mensen uit verschillende disciplines, zoals designers en programmeurs. Hierdoor kreeg ik meer inzicht in het belang van duidelijke communicatie en een goede taakverdeling binnen een projectteam. Bovendien heb ik ervaring opgedaan met GitHub-workflows, waardoor ik beter begrijp hoe meerdere ontwikkelaars samen aan één project kunnen werken.
</p>
    <h3>Finaal resultaat / Deliverables</h3>
  <p>Het eindresultaat van deze case bestond uit een volledige rebranding van Qern en een werkende website die aansluit bij de vernieuwde identiteit van het bedrijf. De nieuwe branding omvatte onder andere voorstellen voor een aangepaste visuele stijl en een creatiever logo dat beter aansluit bij de waarden en visie van Qern.
Daarnaast werd een volledig functionele website ontwikkeld waarin de diensten en expertise van het bedrijf duidelijk worden voorgesteld. De website is responsive, gebruiksvriendelijk en technisch gekoppeld aan de backend via API-integraties.
Als deliverables werden de uitgewerkte branding, de website, de ontwerpen en de bijhorende presentatiematerialen opgeleverd en gepresenteerd. Het project resulteerde in een professionele digitale uitstraling die Qern beter vertegenwoordigt en duidelijker communiceert waar het bedrijf voor staat.
</p>
  <div class="embed-actions">
    <button type="button" class="embed-button" @click="toggleEmbed">
      {{ showEmbed ? 'Sluit voorbeeld' : 'Bekijk live website' }}
    </button>
    <button type="button" class="pdf-button" @click="openPdf">
      Reflectie
    </button>
  </div>
  <div class="embed-container">
    <EmbedFrame v-if="showEmbed" :url="embedUrl" :height="'800px'" title="Qern demo" />

  </div>
  </article>
</template>

<style scoped>
.workplekleren-detail {
  color: var(--muted-text);
}

.workplekleren-detail p {
  margin: 0 0 0.75rem;
}

.workplekleren-detail ul {
  margin: 0;
  padding-left: 1.2rem;
}

.workplekleren-detail li + li {
  margin-top: 0.4rem;
}

.embed-actions {
  margin-top: 1rem;
  display: flex;
  gap: 0.75rem;
}
.embed-button {
  background: var(--accent);
  color: var(--site-bg);
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font: inherit;
}
.embed-button:hover {
  opacity: 0.95;
}
.pdf-button {
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font: inherit;
}
.pdf-button:hover {
  opacity: 0.9;
}
.embed-container {
  margin-top: 1rem;
}
</style>
