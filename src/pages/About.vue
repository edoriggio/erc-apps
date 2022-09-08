<template>
    <div>
        <div class="section">
            <h2 class="title">
                Bio
            </h2>

            <p>
                Hi, I’m Edoardo, a software developer from Rome, Italy. Currently I am a first-year Master student in
                Software and Data Engineering at <a href="https://www.usi.ch"><b>Università della Svizzera Italiana</b>
                </a> in Lugano, Switzerland.
                <br><br>
                In July 2022 I received a Bachelor of Science degree in Computer Science from <a href="https://www.usi.ch">
                <b>Università della Svizzera Italiana</b></a> in Lugano, Switzerland. In July 2019 I graduated from
                <a href="https://www.convittonazionaleroma.edu.it/nuovosito/"><b> Convitto Nazionale “Vittorio Emanuele
                II” di Roma</b></a>, a highschool in Rome. In this highschool I followed a study career called
                "Scientifico Internazionale ad Opzione Lingua Cinese", where I studied Chinese as a second language
                and went to China every year for four weeks (first two years to Beijing and the next two years to
                Shanghai). During the fourth year of highschool, I went to Shanghai for six months. During that year I
                was also awarded the <b>HSK 4 in Chinese</b> (CEFR: B2) and the <b>CAE in English</b> (CEFR: C1).
                <br><br>
                My main passion is informatics, but I also like UI/UX design and technology in general.
                I am experienced in web and app development.
            </p>
        </div>

        <div class="section">
            <h2 class="title">
                Programming Languages
            </h2>

            <div class="skills">
                <skill v-for="skill in skillsSorted" :key="skill.id" :id="skill.index" :name="skill.name"
                       :rating="skill.rate" :icon="skill.icon" :color="skill.color" :projects="skill.projects" />
            </div>
        </div>

        <div class="section">
            <h2 class="title">
                Known Technologies
            </h2>

            <div class="skills">
                <skill v-for="experience in experienceSorted" :key="experience.id" :id="experience.index" :name="experience.name"
                       :rating="experience.rate" :icon="experience.icon" />
            </div>
        </div>

        <div class="section">
            <h2 class="title">
                Spoken Languages
            </h2>

            <div class="skills">
                <skill v-for="language in languages" :key="language.id" :id="language.index" :name="language.name"
                       :rating="language.rate" :icon="language.icon" :language="true" />
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Skill from '@/components/about/Skill'

export default {
    name: 'about',
    components: {
        Skill
    },
    data() {
        return {
            skillsSorted: [],
            experienceSorted: []
        }
    },
    computed: {
        ...mapGetters([
            'skills',
            'languages',
            'experience'
        ])
    },
    mounted() {
        this.getSkills()
        this.getLanguages()
        this.getExperience()

        this.skillsSorted = this.skills.sort((a, b) => {
            return a.name > b.name ? 1 : -1
        })

        this.experienceSorted = this.experience.sort((a, b) => {
            return a.name > b.name ? 1 : -1
        })
    },
    methods: {
        ...mapActions([
            'getSkills',
            'getLanguages',
            'getExperience'
        ])
    }
}
</script>

<style scoped>
.skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 30px 30px;
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
    color: #3776AB;
}

@media (max-width: 551px) {
    .skills {
        flex-direction: column;
    }
}
</style>
