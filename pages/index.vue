<template>
  <div id="wrapper">
    <section class="m-sm-3 m-md-5 mt-3">
      <b-container fluid>
        <b-row>
          <b-col sm="12" md="5" lg="4" xl="3" class="sticky-top">
            <b-card border-variant="success" no-body class="shadow text-center mt-5 mb-4">
              <template #header>
                <b-img thumbnail fluid class="border-success bg-success" src="https://i.pravatar.cc/250?img=58" height="250" width="250" alt="Alt text here..."></b-img>
                <h1>{{ details.fullname }}</h1>
                <b-badge variant="success" class="px-3 py-2">{{ details.jobPosition }}</b-badge>
                <hr>
                <span v-for="(platform, index) in social" v-bind:key="index">
                  <a :href="platform.url" target="_blank"><b-icon :icon="platform.slug" variant="success" font-scale="1.5" class="mx-2"></b-icon></a>
                </span>
              </template>
              <b-list-group flush>
                <b-list-group-item class="d-flex justify-content-between align-items-center">
                  <b-icon icon="signpost-fill" variant="success" font-scale="1.5"></b-icon>{{ details.location }}
                </b-list-group-item>
                <b-list-group-item class="d-flex justify-content-between align-items-center">
                  <b-icon icon="envelope-fill" variant="success" font-scale="1.5"></b-icon>{{ details.email }}
                </b-list-group-item>
                <b-list-group-item class="d-flex justify-content-between align-items-center">
                  <b-icon icon="phone-fill" variant="success" font-scale="1.5"></b-icon>{{ details.telephone }}
                </b-list-group-item>
              </b-list-group>
              <b-card-body>
                <a :href="document" download class="btn btn-success"><b-icon icon="download" variant="light" font-scale="1.5" class="mr-2"></b-icon> Download Resume</a>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12" md="7" lg="8" xl="9">
            <b-card border-variant="success" no-body class="shadow mb-4">
              <b-card-body>
                <h2 class="wavy-side pl-2">About Me</h2>
                <b-card-text v-html="$md.renderInline(about)">
                </b-card-text>
              </b-card-body>
              <b-card-body body-bg-variant="light" id="skills">
                <h3 class="wavy-side pl-2">My Key Skills</h3>
                <b-row>
                  <b-col sm="12" md="12" lg="6" v-for="(skill, index) in skills" v-bind:key="index">
                    <b-card border-variant="success" header-bg-variant="success" header-text-variant="white" class="my-3">
                      <template #header>
                        <b-icon icon="check2-circle" font-scale="1.5"></b-icon>
                        {{ skill.skill }}
                      </template>
                      <b-card-text v-html="$md.renderInline(skill.skillDesc)"></b-card-text>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card-body>
              <b-card-body>
                <h3 class="wavy-side pl-2">Work Experience</h3>
                <b-list-group flush class="mt-3">
                  <b-list-group-item v-for="(exp, index) in experience" v-bind:key="index">
                    <b-icon icon="briefcase-fill" variant="success" font-scale="1.5" class="mr-2"></b-icon> {{ exp.jobTitle }}
                    <small class="text-muted float-right">{{ exp.duration }}</small>
                    <br/><small class="text-muted">{{ exp.jobLocation }}</small>
                    <div class="mt-3" v-html="$md.render(exp.jobDescription)"></div>
                  </b-list-group-item>
                </b-list-group>
              </b-card-body>
              <b-card-body body-bg-variant="light">
                <h3 class="wavy-side pl-2">Education</h3>
                <b-list-group flush class="mt-3">
                  <b-list-group-item v-for="(edu, index) in education" v-bind:key="index">
                    <b-icon icon="book-half" variant="success" font-scale="1.5" class="mr-2"></b-icon> {{ edu.eduQualifications }}
                    <small class="text-muted float-right">{{ edu.eduYears }}</small>
                    <br/><small class="text-muted">{{ edu.eduLocation }}</small>
                  </b-list-group-item>
                </b-list-group>
              </b-card-body>
              <b-card-body>
                <h3 class="wavy-side pl-2">Skills</h3>
                <b-card-text>
                  <ul>
                    <li v-for="(skill, index) in subSkills" v-bind:key="index">{{ skill.skill }}</li>
                  </ul>
                </b-card-text>
              </b-card-body>
              <b-card-body body-bg-variant="light">
                <h3 class="wavy-side pl-2">Awards</h3>
                <b-card-text>
                  <ul>
                    <li v-for="(award, index) in awards" v-bind:key="index">{{ award.award }}</li>
                  </ul>
                </b-card-text>
              </b-card-body>
              <b-card-body>
                <h3 class="wavy-side pl-2">Interests</h3>
                <b-card-text>
                  <ul>
                    <li v-for="(interest, index) in interests" v-bind:key="index">{{ interest.interest }}</li>
                  </ul>
                </b-card-text>
              </b-card-body>
              <template #footer>
                <em>&copy; Domain {{ new Date().getFullYear() }}. Developed by <a href="https://www.danidean.co.uk" target="_blank" class="text-success">Dani Dean</a></em>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { BIcon, BIconFacebook, BIconInstagram, BIconTwitter, BIconSignpostFill, BIconEnvelopeFill, BIconPhoneFill, BIconDownload, BIconCheck2Circle, BIconBriefcaseFill, BIconBookHalf } from 'bootstrap-vue';

export default {
  components: {
    BIcon,
    BIconFacebook,
    BIconInstagram,
    BIconTwitter,
    BIconSignpostFill,
    BIconEnvelopeFill,
    BIconPhoneFill,
    BIconDownload,
    BIconCheck2Circle,
    BIconBriefcaseFill,
    BIconBookHalf
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', async: true }],
      title: this.$data.seo.title,
      meta: [
        {
          hid: 'cv-desc',
          name: 'description',
          content: this.$data.seo.description
        }
      ],
    };
  },
  data () {
    return {
      seo: {}
    }
  },
  created() {
    this.getSEO();
  },
  mounted() {
  },
  computed: {
    details() {
      return this.$store.state.allPages.filter(item => item.slug == 'cv')[0].details;
    },
    document() {
      return this.$store.state.allPages.filter(item => item.slug == 'cv')[0].document;
    },
    social() {
      return this.$store.state.allPages.filter(item => item.slug == 'cv')[0].socialMedia;
    },
    about() {
      return this.$store.state.allPages.filter(item => item.slug == 'cv')[0].about;
    },
    skills() {
      return this.$store.state.allPages.filter(item => item.slug == 'cv')[0].keyskills;
    },
    experience() {
      return this.$store.state.allPages.filter(item => item.slug == 'cv')[0].workExperience;
    },
    education() {
      return this.$store.state.allPages.filter(item => item.slug == 'cv')[0].education;
    },
    subSkills() {
      return this.$store.state.allPages.filter(item => item.slug == 'cv')[0].skills;
    },
    awards() {
      return this.$store.state.allPages.filter(item => item.slug == 'cv')[0].awards;
    },
    interests() {
      return this.$store.state.allPages.filter(item => item.slug == 'cv')[0].interests;
    }
  },
  methods: {
    getSEO() {
      this.seo = this.$store.state.allPages.filter(page => page.slug == 'cv')[0].seo;
    }
  }
}
</script>