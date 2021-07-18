<template>
<div>
  <div class="section">
    <h2 class="title">
      Bio
    </h2>

    <p>
      Hi, I’m Edoardo, a software developer from Rome, Italy. Currently I'm a third-year
      computer science bachelor student at <a href="https://www.usi.ch"><b>Università
      della Svizzera Italiana</b></a> in Lugano, Switzerland.
      <br><br>
      In 2019 I graduated from <a href="https://www.convittonazionaleroma.edu.it/nuovosito/"><b>
      Convitto Nazionale “Vittorio Emanuele II” di Roma</b></a>, a
      highschool in Rome. In this highschool I followed a study career called "Scientifico
      Internazionale ad Opzione Lingua Cinese", where I studied Chinese as a second language
      and went to China every year for four weeks (first two years to Beijing and the next
      two years to Shanghai). During the fourth year of highschool, I went to Shanghai for
      six months. During that year I also passed <b>HSK 4 in Chinese</b> (CEFR: B2) and <b>CAE in
      English</b> (CEFR: C1).
      <br><br>
      My main passion is informatics, but I also like UI/UX design and technology in general.
      I am experienced in web and app development.
    </p>
  </div>

  <div class="section">
    <h2 class="title">
      Experience
    </h2>

    <div class="skills">
      <skill v-for="skill in skills" :key="skill.id" :id="skill.index" :name="skill.name"
      :rating="skill.rate" :icon="skill.icon" :color="skill.color" />
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Skill from '@/components/about/Skill'

export default {
  name: 'about',
  components: {
    Skill
  },
  computed: {
    ...mapGetters([
      'skills'
    ])
  },
  mounted () {
    this.getSkills()
  },
  methods: {
    ...mapActions([
      'getSkills'
    ])
  }
}
</script>

<style scoped>
.skills {
  display: flex;
  flex-direction: column;

  gap: 35px 0;
}

.section:not(:nth-of-type(1)) {
  margin-top: 70px !important;
}

.section > p {
  text-align: justify;
}

.section > p > a,
.section > p > a:visited,
.section > p > a:active {
  color: black;

  text-decoration: underline;
}

.section > p > a:hover {
  color:#3776AB;
}
</style>
